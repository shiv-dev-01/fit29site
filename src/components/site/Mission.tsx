export default function Mission() {
  return (
    <section style={{ background: "hsl(var(--warm-ivory))", paddingTop: "clamp(3rem, 6vw, 5rem)", paddingBottom: "clamp(3rem, 6vw, 5rem)" }}>
      <div className="site-container">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="block"
            style={{
              color: "hsl(var(--deep-forest))",
              fontSize: "clamp(0.95rem, 1.1vw, 1.125rem)",
              letterSpacing: "0.42em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Our Mission
          </span>

          <div
            className="mx-auto mt-6"
            style={{ width: 48, height: 1, background: "hsl(var(--charcoal) / 0.25)" }}
            aria-hidden
          />

          <h2
            className="mt-10"
            style={{
              color: "hsl(var(--charcoal))",
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 3.6vw, 3rem)",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
            }}
          >
            <span
              className="font-light tracking-[-0.04em]"
              style={{ color: "hsl(var(--charcoal))" }}
            >
              FIT<span style={{ color: "hsl(var(--soft-gold))" }}>29</span>
            </span>{" "}
            helps adults optimize their{" "}
            <span className="serif-italic" style={{ color: "hsl(var(--deep-forest))" }}>
              health, hormones, body composition, energy, confidence
            </span>{" "}
            and{" "}
            <span className="serif-italic" style={{ color: "hsl(var(--deep-forest))" }}>
              longevity
            </span>{" "}
            through personalized medical care.
          </h2>

          <div
            className="mx-auto mt-10"
            style={{ width: 1, height: 36, background: "hsl(var(--charcoal) / 0.2)" }}
            aria-hidden
          />

          <p
            className="serif-italic mt-6"
            style={{
              color: "hsl(var(--charcoal))",
              fontSize: "clamp(1.25rem, 2.2vw, 1.875rem)",
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
            }}
          >
            Never clinical. Never corporate. Never a supplement brand.
          </p>
        </div>
      </div>
    </section>
  );
}

