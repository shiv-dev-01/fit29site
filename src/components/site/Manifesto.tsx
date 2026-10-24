const ANCHORS = [
  { k: "01", l: "Board-Certified Physicians" },
  { k: "02", l: "Bespoke Clinical Protocols" },
  { k: "03", l: "Discreet Concierge Delivery" },
  { k: "04", l: "HIPAA-Secured Care" },
];

export default function Manifesto() {
  return (
    <section id="manifesto" className="bg-[hsl(var(--warm-ivory))] section-pad">
      <div className="site-container grid grid-cols-12 gap-8">
        <div className="hidden lg:block lg:col-span-1">
          <span className="eyebrow">I.</span>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <span className="eyebrow">A Manifesto</span>
          <blockquote
            className="display-lg mt-10"
            style={{ color: "hsl(var(--charcoal))", maxWidth: "20ch" }}
          >
            FIT29 sits at the intersection of clinical precision
            and <span className="serif-italic" style={{ color: "hsl(var(--deep-forest))" }}>luxury longevity</span>.
          </blockquote>
          <p className="mt-10 max-w-lg text-base" style={{ color: "hsl(var(--charcoal) / 0.65)", lineHeight: 1.75 }}>
            We do not patch symptoms. We optimize human biology — quietly,
            rigorously, and over the course of a lifetime.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-4 flex flex-col justify-end">
          <ul className="flex flex-col">
            {ANCHORS.map((a, i) => (
              <li
                key={a.k}
                className="flex items-baseline gap-6 py-6"
                style={{ borderTop: i === 0 ? "1px solid hsl(var(--charcoal) / 0.18)" : "none", borderBottom: "1px solid hsl(var(--charcoal) / 0.18)" }}
              >
                <span className="eyebrow" style={{ color: "hsl(var(--terracotta))" }}>{a.k}</span>
                <span className="text-base" style={{ color: "hsl(var(--charcoal))", fontWeight: 400 }}>{a.l}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
