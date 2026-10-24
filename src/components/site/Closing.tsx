export default function Closing() {
  return (
    <section
      className="section-pad relative overflow-hidden atmos streaks"
      style={{ background: "hsl(var(--panel))", color: "#fff" }}
    >
      <div className="site-container text-center">
        <span className="eyebrow eyebrow-gold">FIT29 — A Manifesto</span>
        <h2
          className="display-xl mt-10 mx-auto"
          style={{
            color: "#fff",
            fontWeight: 200,
            maxWidth: "18ch",
            lineHeight: 0.95,
          }}
        >
          Feel Better.
          <br />
          Perform Better.
          <br />
          <span className="serif-italic" style={{ color: "hsl(var(--soft-gold))" }}>
            Live Longer.
          </span>
        </h2>
        <p
          className="mt-12 mx-auto max-w-md text-base"
          style={{ color: "hsl(var(--charcoal) / 0.7)", lineHeight: 1.75 }}
        >
          Healthcare designed around your goals — never clinical, never corporate.
        </p>
        <a href="#enclaves" className="btn-pill-light mt-12 inline-flex">
          Begin Your Protocol
        </a>
      </div>
    </section>
  );
}
