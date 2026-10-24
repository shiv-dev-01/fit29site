import vial from "@/assets/product-vial.jpg";
import pen from "@/assets/product-pen.jpg";
import bottle from "@/assets/product-bottle.jpg";

const SUITES = [
  {
    k: "I",
    name: "The Vitality Suite",
    span: "Energy · Hormones · Drive",
    items: ["Injectable TRT", "Sermorelin", "PT-141"],
    img: vial,
    size: "tall",
  },
  {
    k: "II",
    name: "The Metabolic Suite",
    span: "GLP-1 · Composition · Appetite",
    items: ["Tirzepatide", "Semaglutide", "Metformin"],
    img: pen,
    size: "wide",
  },
  {
    k: "III",
    name: "The Longevity Suite",
    span: "Cellular · Mitochondrial · Cognitive",
    items: ["NAD+ Injectable", "Glutathione", "B12"],
    img: vial,
    size: "tall",
  },
  {
    k: "IV",
    name: "The Restoration Suite",
    span: "Hair · Skin · Confidence",
    items: ["Finasteride", "Topical Minoxidil", "Skincare"],
    img: bottle,
    size: "wide",
  },
];

export default function Suite() {
  return (
    <section id="suite" className="bg-[hsl(var(--stone))] section-pad">
      <div className="site-container">
        <div className="grid grid-cols-12 gap-8 mb-24">
          <div className="col-span-12 lg:col-span-1"><span className="eyebrow">IV.</span></div>
          <div className="col-span-12 lg:col-span-7">
            <span className="eyebrow">The Clinical Suite</span>
            <h2 className="display-md mt-8" style={{ color: "hsl(var(--charcoal))", maxWidth: "18ch" }}>
              Curated protocols, <span className="serif-italic">never a catalog</span>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 flex items-end">
            <p className="text-base max-w-sm" style={{ color: "hsl(var(--charcoal) / 0.65)", lineHeight: 1.75 }}>
              Each suite groups individual therapies into cohesive medical protocols.
              Prescribing remains a private conversation with your physician.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {SUITES.map((s, i) => (
            <article
              key={s.k}
              className="group"
              style={{ marginTop: i % 2 === 1 ? "5rem" : 0 }}
            >
              <div
                className="quiet-zoom relative overflow-hidden radius-card"
                style={{
                  background: "hsl(var(--warm-ivory))",
                  aspectRatio: s.size === "tall" ? "4/5" : "5/4",
                  border: "1px solid hsl(var(--line))",
                }}
              >
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  className="w-full h-full object-cover mix-blend-multiply"
                  style={{ filter: "saturate(0.85)" }}
                />
                {/* hover reveal */}
                <div
                  className="absolute inset-0 flex items-end p-8 transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                  style={{ background: "linear-gradient(0deg, hsl(var(--charcoal) / 0.7) 0%, transparent 60%)" }}
                >
                  <button className="btn-pill-light">Inquire</button>
                </div>
              </div>

              <div className="mt-8 flex items-start justify-between gap-6">
                <div>
                  <span className="eyebrow eyebrow-gold">Suite {s.k}</span>
                  <h3 className="display-md mt-3" style={{ color: "hsl(var(--charcoal))", fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)" }}>
                    {s.name}
                  </h3>
                  <p className="mt-2 eyebrow">{s.span}</p>
                </div>
                <ul className="text-right text-sm shrink-0" style={{ color: "hsl(var(--charcoal) / 0.65)" }}>
                  {s.items.map((it) => (
                    <li key={it} className="py-1">{it}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
