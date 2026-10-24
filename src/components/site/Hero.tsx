import hero from "@/assets/hero.jpg";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100dvh", minHeight: 720 }}>
      <img
        src={hero}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "saturate(0.92) contrast(1.02)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(234 55% 4% / 0.82) 0%, hsl(264 70% 12% / 0.42) 38%, hsl(234 55% 4% / 0.92) 100%), radial-gradient(80% 60% at 18% 22%, hsl(var(--neon-violet) / 0.32) 0%, transparent 62%), radial-gradient(70% 55% at 84% 78%, hsl(var(--neon-cyan) / 0.24) 0%, transparent 65%)",
        }}
      />

      {/* Top eyebrow */}
      <div className="absolute top-0 inset-x-0 pt-32">
        <div className="site-container flex justify-center">
          <span className="eyebrow eyebrow-gold fade-up" style={{ animationDelay: "0.2s" }}>
            Longevity — Est. MMXXVI
          </span>
        </div>
      </div>

      {/* Centered manifesto */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          className="display-xl fade-up"
          style={{ color: "#fff", animationDelay: "0.4s", maxWidth: "16ch", textShadow: "0 0 40px hsl(var(--neon-violet) / 0.55)" }}
        >
          Feel Better.
          <br />
          <span className="serif-italic neon-gradient-text">Live Longer.</span>
        </h1>

        <p
          className="fade-up mt-10 max-w-md text-base"
          style={{ color: "hsl(var(--charcoal) / 0.78)", animationDelay: "0.7s", lineHeight: 1.7 }}
        >
          Personalized medical care for the optimization of energy,
          hormones, metabolism, and healthspan.
        </p>

        <a href="#manifesto" className="btn-pill-light mt-12 fade-up" style={{ animationDelay: "1s" }}>
          Begin Your Protocol
        </a>
      </div>

      {/* Bottom indicator */}
      <div className="absolute bottom-10 inset-x-0 flex justify-center">
        <div
          className="flex flex-col items-center gap-3 fade-up"
          style={{ animationDelay: "1.3s", color: "hsl(var(--charcoal) / 0.5)" }}
        >
          <span style={{ fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase" }}>Scroll</span>
          <span style={{ width: 1, height: 48, background: "hsl(var(--neon-cyan) / 0.7)" }} />
        </div>
      </div>
    </section>
  );
}
