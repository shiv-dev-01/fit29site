import weightImg from "@/assets/cat-weight.jpg";
import hormoneImg from "@/assets/cat-mens.jpg";
import longevityImg from "@/assets/cat-longevity.jpg";

export default function VyveHero() {
  const cards = [
    {
      tag: "Program",
      tagBg: "hsl(var(--neon-cyan) / 0.14)",
      tagColor: "hsl(var(--neon-cyan))",
      title: "Weight Loss",
      href: "#weight-loss",
      blurb:
        "Tailored metabolic strategies to achieve sustainable results through precise hormonal balancing.",
      img: weightImg,
    },
    {
      tag: "Specialized",
      tagBg: "hsl(var(--neon-magenta) / 0.16)",
      tagColor: "hsl(var(--neon-pink))",
      title: "Hormone Optimization",
      href: "#hrt",
      blurb:
        "Restore your peak vitality with data-driven HRT therapies designed for the modern executive.",
      img: hormoneImg,
    },
    {
      tag: "Advanced",
      tagBg: "hsl(var(--neon-cyan) / 0.14)",
      tagColor: "hsl(var(--neon-cyan))",
      title: "Longevity",
      href: "#longevity",
      blurb:
        "Comprehensive biological age reduction protocols focusing on cellular health and preventive care.",
      img: longevityImg,
    },
  ];

  return (
    <section
      className="relative w-full atmos streaks"
      style={{
        background: "hsl(var(--warm-ivory))",
        color: "hsl(var(--charcoal))",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <main className="flex flex-col items-center justify-center px-6 pt-10 pb-16 lg:pt-14 lg:pb-20 max-w-7xl mx-auto">
        <div className="text-center mb-10 lg:mb-12 max-w-[1100px]">
          <span
            className="block mb-4 font-semibold"
            style={{
              fontSize: 10,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "hsl(var(--neon-cyan) / 0.9)",
            }}
          >
            Modern Longevity Science
          </span>
          <h1
            className="mb-7 neon-headline neon-magenta"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              fontSize: "clamp(2rem, 4.6vw, 3.75rem)",
              color: "hsl(var(--charcoal))",
            }}
          >
            <span style={{ whiteSpace: "nowrap" }}>{"Weight\u00a0Loss"}</span>{" "}
            &amp; Hormone{" "}
            <span className="neon-gradient-text" style={{ fontStyle: "italic" }}>Optimization</span> solutions
            for your needs
          </h1>
          <div className="flex justify-center">
            <a
              href="#weight-loss"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-500"
              style={{
                border: "1px solid hsl(var(--neon-cyan) / 0.5)",
                backgroundImage: "var(--gradient-cta)",
                color: "#fff",
                boxShadow: "0 14px 44px -14px hsl(var(--neon-magenta) / 0.8)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 18px 58px -12px hsl(var(--neon-violet) / 0.95)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 14px 44px -14px hsl(var(--neon-magenta) / 0.8)";
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Get Started
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group relative flex flex-col overflow-hidden transition-all duration-700 glass-card"
              style={{ borderRadius: "1.1rem" }}
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4 / 5" }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, hsl(234 55% 4% / 0) 45%, hsl(234 55% 4% / 0.85) 100%), linear-gradient(120deg, hsl(var(--neon-magenta) / 0.16) 0%, transparent 45%, hsl(var(--neon-cyan) / 0.16) 100%)",
                  }}
                />
                <span
                  className="absolute top-5 left-5 inline-block py-1.5 px-3 rounded-full font-bold backdrop-blur"
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    background: "hsl(var(--panel) / 0.72)",
                    border: "1px solid hsl(var(--line))",
                    color: c.tagColor,
                  }}
                >
                  {c.tag}
                </span>
              </div>
              <div className="p-7 flex flex-col gap-4">
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 400,
                    fontSize: "1.6rem",
                    letterSpacing: "-0.01em",
                    color: "hsl(var(--charcoal))",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "hsl(var(--charcoal) / 0.7)",
                  }}
                >
                  {c.blurb}
                </p>
                <span
                  className="inline-block pb-1 font-bold self-start"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    borderBottom: "1px solid hsl(var(--neon-cyan) / 0.6)",
                    color: "hsl(var(--neon-cyan))",
                  }}
                >
                  Learn more
                </span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </section>
  );
}
