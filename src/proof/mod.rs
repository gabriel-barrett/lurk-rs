#![deny(missing_docs)]

//! This module offers a connection the the backend proving engine of Lurk.
//! Abstracted behind the `Prover` and `Verifier` traits, the proving engine
//! has two instantiations:
//! - the Nova proving system, implemented in the `nova` module.
//! - the SuperNova proving system, implemented in the `supernova` module.

/// An adapter to a Nova proving system implementation.
pub mod nova;

/// An adapter to a SuperNova proving system implementation.
pub mod supernova;

#[cfg(test)]
mod tests;

use ff::Field;
use std::{borrow::Cow, sync::Arc};

use crate::{
    coprocessor::Coprocessor,
    dual_channel::ChannelTerminal,
    error::ProofError,
    field::LurkField,
    lang::Lang,
    lem::{eval::EvalConfig, pointers::Ptr, store::Store},
    proof::nova::Dual,
};

use self::{nova::CurveCycleEquipped, supernova::FoldingConfig};

/// A constant indicating the maximum amount of frames to buffer in memory while proving
const MAX_BUFFERED_FRAMES: usize = 1000;

/// The State of a CEK machine.
pub trait CEKState<Ptr> {
    /// the expression, or control word (C)
    fn expr(&self) -> &Ptr;
    /// the environment (E)
    fn env(&self) -> &Ptr;
    /// the continuation (K)
    fn cont(&self) -> &Ptr;
}

/// A Frame of evaluation in a CEK machine.
pub trait FrameLike<Ptr>: Sized {
    /// the type for the Frame's IO
    type FrameIO: CEKState<Ptr>;
    /// the input of the frame
    fn input(&self) -> &Self::FrameIO;
    /// the output of the frame
    fn output(&self) -> &Self::FrameIO;
}

/// A trait for a store of expressions
pub trait EvaluationStore {
    /// the type for the Store's pointers
    type Ptr;
    /// the type for the Store's errors
    type Error: std::fmt::Debug;

    /// interpreting a string representation of an expression
    fn read(&self, expr: &str) -> Result<Self::Ptr, Self::Error>;
    /// getting a pointer to the initial, empty environment
    fn initial_empty_env(&self) -> Self::Ptr;
    /// getting the terminal continuation pointer
    fn get_cont_terminal(&self) -> Self::Ptr;

    /// cache hashes for pointers enqueued for hydration
    fn hydrate_z_cache(&self);

    /// hash-equality of the expressions represented by Ptrs
    fn ptr_eq(&self, left: &Self::Ptr, right: &Self::Ptr) -> bool;
}

/// A trait for provable structures over a field `F`.
pub trait Provable<F: LurkField> {
    /// Returns the public inputs of the provable structure.
    fn public_inputs(&self) -> Vec<F>;
    /// Returns the size of the public inputs.
    fn public_input_size(&self) -> usize;
    /// Returns the number of reduction frames in the provable structure.
    fn num_frames(&self) -> usize;
}

// Next we have two traits:
// * `RecursiveSNARKTrait`, which abstracts over Nova and a SuperNova proofs
// * `Prover`, which abstracts over Nova and SuperNova provers

/// Trait to abstract Nova and SuperNova proofs
pub trait RecursiveSNARKTrait<F: CurveCycleEquipped, M>
where
    Self: Sized + Clone,
{
    /// Associated type for public parameters
    type PublicParams;

    /// Type for the base recursive SNARK that can be used as a starting point
    /// in `Self::prove_recursively`
    type BaseRecursiveSNARK;

    /// Type for error potentially thrown during verification
    type ErrorType;

    /// Generate the recursive SNARK, encoded in `ProveOutput`
    fn prove_recursively<I: IntoIterator<Item = M>>(
        pp: &Self::PublicParams,
        z0: &[F],
        steps: I,
        store: &Store<F>,
        init: Option<Self::BaseRecursiveSNARK>,
    ) -> Result<Self, ProofError>
    where
        <I as IntoIterator>::IntoIter: ExactSizeIterator + Send;

    /// Compress a proof
    fn compress(&self, pp: &Self::PublicParams) -> Result<Cow<'_, Self>, ProofError>;

    /// Verify the proof given the public parameters, the input and output values
    fn verify(&self, pp: &Self::PublicParams, z0: &[F], zi: &[F]) -> Result<bool, Self::ErrorType>;

    /// Return the `z0_secondary`
    #[inline]
    fn z0_secondary() -> Vec<Dual<F>> {
        vec![Dual::<F>::ZERO]
    }
}

/// Folding mode used for proving
#[derive(Debug)]
pub enum FoldingMode {
    /// Variant for IVC folding
    IVC,
    /// Variant for NIVC folding
    NIVC,
}

impl FoldingMode {
    fn folding_config<F: LurkField, C: Coprocessor<F>>(
        &self,
        lang: Arc<Lang<F, C>>,
        reduction_count: usize,
    ) -> FoldingConfig<F, C> {
        match self {
            Self::IVC => FoldingConfig::new_ivc(lang, reduction_count),
            Self::NIVC => FoldingConfig::new_nivc(lang, reduction_count),
        }
    }

    fn eval_config<'a, F: LurkField, C: Coprocessor<F>>(
        &self,
        lang: &'a Lang<F, C>,
    ) -> EvalConfig<'a, F, C> {
        match self {
            Self::IVC => EvalConfig::new_ivc(lang),
            Self::NIVC => EvalConfig::new_nivc(lang),
        }
    }
}

/// A trait for a prover that works with a field `F`.
pub trait Prover<F: CurveCycleEquipped, C: Coprocessor<F>> {
    /// Associated type for a frame-like datatype
    type Frame: FrameLike<Ptr, FrameIO = Vec<Ptr>> + Send;

    /// Associated type for public parameters
    type PublicParams;

    /// Associated proof type, which must implement `RecursiveSNARKTrait`
    type RecursiveSNARK: RecursiveSNARKTrait<F, Self::Frame, PublicParams = Self::PublicParams>;

    /// Returns a reference to the prover's FoldingMode
    fn folding_mode(&self) -> &FoldingMode;

    /// Returns the number of reductions for the prover.
    fn reduction_count(&self) -> usize;

    /// Generates a recursive proof from a vector of `M`
    fn prove(
        &self,
        pp: &Self::PublicParams,
        steps: Vec<Self::Frame>,
        store: &Store<F>,
        init: Option<
            <Self::RecursiveSNARK as RecursiveSNARKTrait<F, Self::Frame>>::BaseRecursiveSNARK,
        >,
    ) -> Result<(Self::RecursiveSNARK, Vec<F>, Vec<F>, usize), ProofError> {
        store.hydrate_z_cache();
        let z0 = store.to_scalar_vector(steps[0].input());
        let zi = store.to_scalar_vector(steps.last().unwrap().output());

        let num_steps = steps.len();

        let prove_output = Self::RecursiveSNARK::prove_recursively(pp, &z0, steps, store, init)?;

        Ok((prove_output, z0, zi, num_steps))
    }

    /// Evaluate an expression with an environment and then generate the corresponding proof
    fn evaluate_and_prove(
        &self,
        pp: &Self::PublicParams,
        expr: Ptr,
        env: Ptr,
        store: &Arc<Store<F>>,
        limit: usize,
        ch_terminal: &ChannelTerminal<Ptr>,
    ) -> Result<(Self::RecursiveSNARK, Vec<F>, Vec<F>, usize), ProofError>;

    /// Returns the expected total number of steps for the prover given raw iterations.
    fn expected_num_steps(&self, raw_iterations: usize) -> usize {
        let rc = self.reduction_count();
        let full_multiframe_count = raw_iterations / rc;
        let unfull_multiframe_frame_count = raw_iterations % rc;
        full_multiframe_count + usize::from(unfull_multiframe_frame_count != 0)
    }

    /// Generate a proof from a sequence of frames
    fn prove_from_frames(
        &self,
        pp: &Self::PublicParams,
        frames: &[crate::lem::interpreter::Frame],
        store: &Arc<Store<F>>,
        init: Option<
            <Self::RecursiveSNARK as RecursiveSNARKTrait<F, Self::Frame>>::BaseRecursiveSNARK,
        >,
    ) -> Result<(Self::RecursiveSNARK, Vec<F>, Vec<F>, usize), ProofError> {
        let folding_config = self
            .folding_mode()
            .folding_config(self.lang().clone(), self.reduction_count());
        let steps = Self::from_frames(frames, store, &folding_config.into());
        self.prove(pp, steps, store, init)
    }

    /// Returns the `Lang` wrapped with `Arc` for cheap cloning
    fn lang(&self) -> &Arc<Lang<F, C>>;

    /// Converts input into Self::Frames according to the rules of the Prover
    fn from_frames(
        frames: &[crate::lem::interpreter::Frame],
        store: &Arc<Store<F>>,
        folding_config: &Arc<FoldingConfig<F, C>>,
    ) -> Vec<Self::Frame>;
}
