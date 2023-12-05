(function() {var implementors = {
"lurk":[["impl&lt;'de, 'a, F: <a class=\"trait\" href=\"lurk/proof/nova/trait.CurveCycleEquipped.html\" title=\"trait lurk::proof::nova::CurveCycleEquipped\">CurveCycleEquipped</a>, C: <a class=\"trait\" href=\"lurk/coprocessor/trait.Coprocessor.html\" title=\"trait lurk::coprocessor::Coprocessor\">Coprocessor</a>&lt;F&gt;, M: <a class=\"trait\" href=\"lurk/proof/trait.MultiFrameTrait.html\" title=\"trait lurk::proof::MultiFrameTrait\">MultiFrameTrait</a>&lt;'a, F, C&gt;&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"lurk/proof/nova/enum.Proof.html\" title=\"enum lurk::proof::nova::Proof\">Proof</a>&lt;'a, F, C, M&gt;<div class=\"where\">where\n    &lt;&lt;<a class=\"type\" href=\"lurk/proof/nova/type.E1.html\" title=\"type lurk::proof::nova::E1\">E1</a>&lt;F&gt; as Engine&gt;::Scalar as PrimeField&gt;::Repr: Abomonation,\n    &lt;&lt;<a class=\"type\" href=\"lurk/proof/nova/type.E2.html\" title=\"type lurk::proof::nova::E2\">E2</a>&lt;F&gt; as Engine&gt;::Scalar as PrimeField&gt;::Repr: Abomonation,</div>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"lurk/config/struct.Settings.html\" title=\"struct lurk::config::Settings\">Settings</a>"],["impl&lt;'de, F: <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"lurk/field/struct.FWrap.html\" title=\"struct lurk::field::FWrap\">FWrap</a>&lt;F&gt;"],["impl&lt;'de, F: <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"lurk/coprocessor/trie/struct.LookupCoprocessor.html\" title=\"struct lurk::coprocessor::trie::LookupCoprocessor\">LookupCoprocessor</a>&lt;F&gt;"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"lurk/struct.Symbol.html\" title=\"struct lurk::Symbol\">Symbol</a>"],["impl&lt;'de, E, F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"lurk/z_data/z_ptr/struct.ZPtr.html\" title=\"struct lurk::z_data::z_ptr::ZPtr\">ZPtr</a>&lt;E, F&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; + Tag,\n    F: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; + <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>,</div>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"lurk/config/struct.PerfConfig.html\" title=\"struct lurk::config::PerfConfig\">PerfConfig</a>"],["impl&lt;'de, F: <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"lurk/coprocessor/sha256/struct.Sha256Coprocessor.html\" title=\"struct lurk::coprocessor::sha256::Sha256Coprocessor\">Sha256Coprocessor</a>&lt;F&gt;"],["impl&lt;'de, F, SC: StepCircuit&lt;F&gt;&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"lurk/proof/nova/struct.PublicParams.html\" title=\"struct lurk::proof::nova::PublicParams\">PublicParams</a>&lt;F, SC&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"lurk/proof/nova/trait.CurveCycleEquipped.html\" title=\"trait lurk::proof::nova::CurveCycleEquipped\">CurveCycleEquipped</a>,\n    &lt;&lt;<a class=\"type\" href=\"lurk/proof/nova/type.E1.html\" title=\"type lurk::proof::nova::E1\">E1</a>&lt;F&gt; as Engine&gt;::Scalar as PrimeField&gt;::Repr: Abomonation,\n    &lt;&lt;<a class=\"type\" href=\"lurk/proof/nova/type.E2.html\" title=\"type lurk::proof::nova::E2\">E2</a>&lt;F&gt; as Engine&gt;::Scalar as PrimeField&gt;::Repr: Abomonation,</div>"],["impl&lt;'de, F: <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"lurk/coprocessor/trie/struct.InsertCoprocessor.html\" title=\"struct lurk::coprocessor::trie::InsertCoprocessor\">InsertCoprocessor</a>&lt;F&gt;"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"lurk/public_parameters/instance/struct.Metadata.html\" title=\"struct lurk::public_parameters::instance::Metadata\">Metadata</a>"],["impl&lt;'de, F: <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"lurk/coprocessor/trie/struct.NewCoprocessor.html\" title=\"struct lurk::coprocessor::trie::NewCoprocessor\">NewCoprocessor</a>&lt;F&gt;"],["impl&lt;'de, F: <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>, C&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"lurk/eval/lang/struct.Lang.html\" title=\"struct lurk::eval::lang::Lang\">Lang</a>&lt;F, C&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; + <a class=\"trait\" href=\"lurk/coprocessor/trait.Coprocessor.html\" title=\"trait lurk::coprocessor::Coprocessor\">Coprocessor</a>&lt;F&gt;,</div>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"lurk/field/enum.LanguageField.html\" title=\"enum lurk::field::LanguageField\">LanguageField</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"lurk/lem/pointers/enum.Ptr.html\" title=\"enum lurk::lem::pointers::Ptr\">Ptr</a>"],["impl&lt;'de, F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"lurk/z_data/z_cont/enum.ZCont.html\" title=\"enum lurk::z_data::z_cont::ZCont\">ZCont</a>&lt;F&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; + <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>,</div>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"lurk/enum.UInt.html\" title=\"enum lurk::UInt\">UInt</a>"],["impl&lt;'de, 'a, F, C: <a class=\"trait\" href=\"lurk/coprocessor/trait.Coprocessor.html\" title=\"trait lurk::coprocessor::Coprocessor\">Coprocessor</a>&lt;F&gt;, M: <a class=\"trait\" href=\"lurk/proof/trait.MultiFrameTrait.html\" title=\"trait lurk::proof::MultiFrameTrait\">MultiFrameTrait</a>&lt;'a, F, C&gt;&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"lurk/proof/supernova/enum.Proof.html\" title=\"enum lurk::proof::supernova::Proof\">Proof</a>&lt;'a, F, C, M&gt;<div class=\"where\">where\n    &lt;&lt;<a class=\"type\" href=\"lurk/proof/nova/type.E1.html\" title=\"type lurk::proof::nova::E1\">E1</a>&lt;F&gt; as Engine&gt;::Scalar as PrimeField&gt;::Repr: Abomonation,\n    &lt;&lt;<a class=\"type\" href=\"lurk/proof/nova/type.E2.html\" title=\"type lurk::proof::nova::E2\">E2</a>&lt;F&gt; as Engine&gt;::Scalar as PrimeField&gt;::Repr: Abomonation,\n    F: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; + <a class=\"trait\" href=\"lurk/proof/nova/trait.CurveCycleEquipped.html\" title=\"trait lurk::proof::nova::CurveCycleEquipped\">CurveCycleEquipped</a>,</div>"],["impl&lt;'de, F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"lurk/z_data/z_store/struct.ZStore.html\" title=\"struct lurk::z_data::z_store::ZStore\">ZStore</a>&lt;F&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; + <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>,</div>"],["impl&lt;'de, F: <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"lurk/eval/lang/struct.DummyCoprocessor.html\" title=\"struct lurk::eval::lang::DummyCoprocessor\">DummyCoprocessor</a>&lt;F&gt;"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"lurk/lem/enum.Tag.html\" title=\"enum lurk::lem::Tag\">Tag</a>"],["impl&lt;'de, F: <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"lurk/enum.Num.html\" title=\"enum lurk::Num\">Num</a>&lt;F&gt;"],["impl&lt;'de, F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"lurk/z_data/z_expr/enum.ZExpr.html\" title=\"enum lurk::z_data::z_expr::ZExpr\">ZExpr</a>&lt;F&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; + <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>,</div>"],["impl&lt;'de, F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"lurk/coprocessor/sha256/enum.Sha256Coproc.html\" title=\"enum lurk::coprocessor::sha256::Sha256Coproc\">Sha256Coproc</a>&lt;F&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; + <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>,</div>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"lurk/public_parameters/instance/enum.Kind.html\" title=\"enum lurk::public_parameters::instance::Kind\">Kind</a>"],["impl&lt;'de, F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"lurk/eval/lang/enum.Coproc.html\" title=\"enum lurk::eval::lang::Coproc\">Coproc</a>&lt;F&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.193/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; + <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()