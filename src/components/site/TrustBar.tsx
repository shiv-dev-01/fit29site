const TRUST = [
  "Confidential online consultation",
  "Board-certified Physicians, trusted medications",
  "Fast, free shipping",
  "Confidential online consultation",
  "Board-certified Physicians, trusted medications",
  "Fast, free shipping",
];

export default function TrustBar() {
  return (
    <section
      aria-label="Trust indicators"
      style={{
        background: "linear-gradient(90deg, hsl(var(--neon-magenta) / 0.18), hsl(var(--neon-violet) / 0.18), hsl(var(--neon-cyan) / 0.18)), hsl(var(--panel))",
        color: "#fff",
        borderTop: "1px solid hsl(var(--line))",
        borderBottom: "1px solid hsl(var(--line))",
        overflow: "hidden",
      }}
    >
      <div
        className="flex gap-16 py-5 whitespace-nowrap"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {[...TRUST, ...TRUST].map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4"
            style={{
              fontSize: 13,
              letterSpacing: "0.14em",
              color: "hsl(var(--charcoal) / 0.9)",
              fontWeight: 400,
            }}
          >
            <span style={{ color: "hsl(var(--soft-gold))" }}>✦</span>
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
