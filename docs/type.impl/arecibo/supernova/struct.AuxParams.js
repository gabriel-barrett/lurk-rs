(function() {var type_impls = {
"lurk":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-AuxParams%3CE1,+E2%3E\" class=\"impl\"><a href=\"#impl-Clone-for-AuxParams%3CE1,+E2%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E1, E2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for AuxParams&lt;E1, E2&gt;<div class=\"where\">where\n    E1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Engine&lt;Base = &lt;E2 as Engine&gt;::Scalar&gt;,\n    E2: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Engine&lt;Base = &lt;E1 as Engine&gt;::Scalar&gt;,\n    &lt;E1 as Engine&gt;::Scalar: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; AuxParams&lt;E1, E2&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","lurk::proof::supernova::SuperNovaAuxParams"],["<section id=\"impl-StructuralPartialEq-for-AuxParams%3CE1,+E2%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-AuxParams%3CE1,+E2%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E1, E2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for AuxParams&lt;E1, E2&gt;<div class=\"where\">where\n    E1: Engine&lt;Base = &lt;E2 as Engine&gt;::Scalar&gt;,\n    E2: Engine&lt;Base = &lt;E1 as Engine&gt;::Scalar&gt;,</div></h3></section>","StructuralPartialEq","lurk::proof::supernova::SuperNovaAuxParams"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-AuxParams%3CE1,+E2%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-AuxParams%3CE1,+E2%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E1, E2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for AuxParams&lt;E1, E2&gt;<div class=\"where\">where\n    E1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + Engine&lt;Base = &lt;E2 as Engine&gt;::Scalar&gt;,\n    E2: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + Engine&lt;Base = &lt;E1 as Engine&gt;::Scalar&gt;,\n    &lt;E1 as Engine&gt;::Scalar: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;AuxParams&lt;E1, E2&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","lurk::proof::supernova::SuperNovaAuxParams"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-AuxParams%3CE1,+E2%3E\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-AuxParams%3CE1,+E2%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, E1, E2&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.195/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for AuxParams&lt;E1, E2&gt;<div class=\"where\">where\n    E1: Engine&lt;Base = &lt;E2 as Engine&gt;::Scalar&gt;,\n    E2: Engine&lt;Base = &lt;E1 as Engine&gt;::Scalar&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.195/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;AuxParams&lt;E1, E2&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.195/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.195/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.195/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.195/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","lurk::proof::supernova::SuperNovaAuxParams"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-AuxParams%3CE1,+E2%3E\" class=\"impl\"><a href=\"#impl-Serialize-for-AuxParams%3CE1,+E2%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E1, E2&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for AuxParams&lt;E1, E2&gt;<div class=\"where\">where\n    E1: Engine&lt;Base = &lt;E2 as Engine&gt;::Scalar&gt;,\n    E2: Engine&lt;Base = &lt;E1 as Engine&gt;::Scalar&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","lurk::proof::supernova::SuperNovaAuxParams"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Abomonation-for-AuxParams%3CE1,+E2%3E\" class=\"impl\"><a href=\"#impl-Abomonation-for-AuxParams%3CE1,+E2%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E1, E2&gt; Abomonation for AuxParams&lt;E1, E2&gt;<div class=\"where\">where\n    E1: Engine&lt;Base = &lt;E2 as Engine&gt;::Scalar&gt;,\n    E2: Engine&lt;Base = &lt;E1 as Engine&gt;::Scalar&gt;,\n    &lt;&lt;E1 as Engine&gt;::Scalar as PrimeField&gt;::Repr: Abomonation,\n    &lt;&lt;E2 as Engine&gt;::Scalar as PrimeField&gt;::Repr: Abomonation,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.entomb\" class=\"method trait-impl\"><a href=\"#method.entomb\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a class=\"fn\">entomb</a>&lt;W&gt;(&amp;self, bytes: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut W</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;<div class=\"where\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</div></h4></section></summary><div class='docblock'>Write any additional information about <code>&amp;self</code> beyond its binary representation. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.exhume\" class=\"method trait-impl\"><a href=\"#method.exhume\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a class=\"fn\">exhume</a>&lt;'a, 'b&gt;(\n    &amp;'a mut self,\n    bytes: &amp;'b mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'b mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;</h4></section></summary><div class='docblock'>Recover any information for <code>&amp;mut self</code> not evident from its binary representation. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extent\" class=\"method trait-impl\"><a href=\"#method.extent\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">extent</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Reports the number of further bytes required to entomb <code>self</code>.</div></details></div></details>","Abomonation","lurk::proof::supernova::SuperNovaAuxParams"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()