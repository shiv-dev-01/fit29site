const BRANDS = [
  { n: "Apple", l: "Minimalism & premium UX" },
  { n: "Function Health", l: "Data-driven wellness" },
  { n: "WHOOP", l: "Performance optimization" },
  { n: "Eight Sleep", l: "Luxury wellness" },
  { n: "Levels", l: "Metabolic health precision" },
  { n: "—", l: "Modern longevity tech" },
];

export default function Positioning() {
  return (
    <section
      id="positioning"
      className="section-pad"
      style={{ background: "hsl(var(--warm-ivory))" }}
    >
      <div className="site-container grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-5">
          <span className="eyebrow">III. Positioning</span>
          <h2
            className="display-md mt-8"
            style={{ color: "hsl(var(--charcoal))", maxWidth: "14ch" }}
          >
            At the intersection of the world's most
            <span className="serif-italic" style={{ color: "hsl(var(--deep-forest))" }}>
              {" "}considered brands
            </span>.
          </h2>
          <p
            className="mt-8 max-w-md text-base"
            style={{ color: "hsl(var(--charcoal) / 0.65)", lineHeight: 1.75 }}
          >
            Our identity is built from the design language of the brands that
            redefined what modern wellness, performance, and longevity should feel like.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <ul>
            {BRANDS.map((b, i) => (
              <li
                key={b.n + i}
                className="grid grid-cols-12 items-baseline py-8 transition-all duration-500 hover:!pl-4"
                style={{
                  borderTop: "1px solid hsl(var(--charcoal) / 0.12)",
                  borderBottom: i === BRANDS.length - 1 ? "1px solid hsl(var(--charcoal) / 0.12)" : "none",
                }}
              >
                <span
                  className="col-span-1 eyebrow"
                  style={{ color: "hsl(var(--terracotta))" }}
                >
                  0{i + 1}
                </span>
                <span
                  className="col-span-5 display-md"
                  style={{
                    color: "hsl(var(--charcoal))",
                    fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
                    fontWeight: 400,
                  }}
                >
                  {b.n}
                </span>
                <span
                  className="col-span-6 text-base"
                  style={{
                    color: "hsl(var(--charcoal) / 0.6)",
                    fontStyle: "italic",
                    fontWeight: 300,
                  }}
                >
                  {b.l}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
