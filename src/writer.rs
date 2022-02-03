use std::io;

use ff::PrimeField;

use crate::store::{ContPtr, Continuation, Expression, Ptr, Store};

pub trait Write<F: PrimeField> {
    fn fmt<W: io::Write>(&self, store: &Store<F>, w: &mut W) -> io::Result<()>;
    fn fmt_to_string(&self, store: &Store<F>) -> String {
        let mut out = Vec::new();
        self.fmt(store, &mut out).expect("preallocated");
        String::from_utf8(out).expect("I know it")
    }
}

impl<F: PrimeField> Write<F> for Ptr<F> {
    fn fmt<W: io::Write>(&self, store: &Store<F>, w: &mut W) -> io::Result<()> {
        if let Some(expr) = store.fetch(self) {
            expr.fmt(store, w)
        } else {
            Ok(())
        }
    }
}

impl<F: PrimeField> Write<F> for ContPtr<F> {
    fn fmt<W: io::Write>(&self, store: &Store<F>, w: &mut W) -> io::Result<()> {
        if let Some(cont) = store.fetch_cont(self) {
            cont.fmt(store, w)
        } else {
            Ok(())
        }
    }
}

impl<F: PrimeField> Write<F> for Expression<'_, F> {
    fn fmt<W: io::Write>(&self, store: &Store<F>, w: &mut W) -> io::Result<()> {
        use Expression::*;

        match self {
            Nil => write!(w, "NIL"),
            Sym(s) => write!(w, "{}", s),
            Str(s) => write!(w, "\"{}\"", s),
            Fun(arg, body, _closed_env) => {
                let arg = store.fetch(arg).unwrap();
                let body = store.fetch(body).unwrap();
                write!(w, "<FUNCTION (")?;
                arg.fmt(store, w)?;
                write!(w, ") . ")?;
                body.fmt(store, w)?;
                write!(w, ">")
            }
            Num(n) => write!(w, "{}", n),
            Thunk(f) => {
                write!(w, "Thunk for cont ")?;
                f.continuation.fmt(store, w)?;
                write!(w, " with value: ")?;
                f.value.fmt(store, w)
            }
            Cons(_, _) => {
                write!(w, "(")?;
                self.print_tail(store, w)
            }
        }
    }
}

impl<F: PrimeField> Expression<'_, F> {
    fn print_tail<W: io::Write>(&self, store: &Store<F>, w: &mut W) -> io::Result<()> {
        match self {
            Expression::Nil => write!(w, ")"),
            Expression::Cons(car, cdr) => {
                let car = store.fetch(car).unwrap();
                let cdr = store.fetch(cdr).unwrap();
                match cdr {
                    Expression::Nil => {
                        car.fmt(store, w)?;
                        write!(w, ")")
                    }
                    Expression::Cons(_, _) => {
                        car.fmt(store, w)?;
                        write!(w, " ")?;
                        cdr.print_tail(store, w)
                    }
                    _ => {
                        car.fmt(store, w)?;
                        write!(w, " . ")?;
                        cdr.fmt(store, w)?;
                        write!(w, ")")
                    }
                }
            }
            _ => unreachable!(),
        }
    }
}

impl<F: PrimeField> Write<F> for Continuation<F> {
    fn fmt<W: io::Write>(&self, store: &Store<F>, w: &mut W) -> io::Result<()> {
        match self {
            Continuation::Outermost => write!(w, "Outermost"),
            Continuation::Simple(cont) => {
                write!(w, "Simple(")?;
                cont.fmt(store, w)?;
                write!(w, ")")
            }
            Continuation::Call(expr1, expr2, cont) => {
                write!(w, "Call(")?;
                expr1.fmt(store, w)?;
                write!(w, ", ")?;
                expr2.fmt(store, w)?;
                write!(w, ", ")?;
                cont.fmt(store, w)?;
                write!(w, ")")
            }
            Continuation::Call2(expr1, expr2, cont) => {
                write!(w, "Call2(")?;
                expr1.fmt(store, w)?;
                write!(w, ", ")?;
                expr2.fmt(store, w)?;
                write!(w, ", ")?;
                cont.fmt(store, w)?;
                write!(w, ")")
            }
            Continuation::Tail(expr, cont) => {
                write!(w, "Tail(")?;
                expr.fmt(store, w)?;
                write!(w, ", ")?;
                cont.fmt(store, w)?;
                write!(w, ")")
            }
            Continuation::Error => write!(w, "Error"),
            Continuation::Lookup(expr, cont) => {
                write!(w, "Lookup(")?;
                expr.fmt(store, w)?;
                write!(w, ", ")?;
                cont.fmt(store, w)?;
                write!(w, ")")
            }
            Continuation::Unop(op1, cont) => {
                write!(w, "Unop({}, ", op1)?;
                cont.fmt(store, w)?;
                write!(w, ")")
            }
            Continuation::Binop(op2, expr1, expr2, cont) => {
                write!(w, "Binop(")?;
                write!(w, "{}", op2)?;
                write!(w, ", ")?;
                expr1.fmt(store, w)?;
                write!(w, ", ")?;
                expr2.fmt(store, w)?;
                write!(w, ", ")?;
                cont.fmt(store, w)?;
                write!(w, ")")
            }
            Continuation::Binop2(op2, expr, cont) => {
                write!(w, "Binop2({}, ", op2)?;
                expr.fmt(store, w)?;
                write!(w, ", ")?;
                cont.fmt(store, w)?;
                write!(w, ")")
            }
            Continuation::Relop(rel2, expr1, expr2, cont) => {
                write!(w, "Relop({}, ", rel2)?;
                expr1.fmt(store, w)?;
                write!(w, ", ")?;
                expr2.fmt(store, w)?;
                write!(w, ", ")?;
                cont.fmt(store, w)?;
                write!(w, ")")
            }
            Continuation::Relop2(rel2, expr, cont) => {
                write!(w, "Relop2({}, ", rel2)?;
                expr.fmt(store, w)?;
                write!(w, ", ")?;
                cont.fmt(store, w)?;
                write!(w, ")")
            }
            Continuation::If(expr, cont) => {
                write!(w, "If(")?;
                expr.fmt(store, w)?;
                write!(w, ", ")?;
                cont.fmt(store, w)?;
                write!(w, ")")
            }
            Continuation::LetStar(expr1, expr2, expr3, cont) => {
                write!(w, "LetStar(")?;
                expr1.fmt(store, w)?;
                write!(w, ", ")?;
                expr2.fmt(store, w)?;
                write!(w, ", ")?;
                expr3.fmt(store, w)?;
                write!(w, ", ")?;
                cont.fmt(store, w)?;
                write!(w, ")")
            }
            Continuation::LetRecStar(expr1, expr2, expr3, cont) => {
                write!(w, "LetRecStar(")?;
                expr1.fmt(store, w)?;
                write!(w, ", ")?;
                expr2.fmt(store, w)?;
                write!(w, ", ")?;
                expr3.fmt(store, w)?;
                write!(w, ", ")?;
                cont.fmt(store, w)?;
                write!(w, ")")
            }
            Continuation::Dummy => write!(w, "Dummy"),
            Continuation::Terminal => write!(w, "Terminal"),
        }
    }
}