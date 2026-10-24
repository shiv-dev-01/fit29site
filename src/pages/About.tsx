import { Link } from "react-router-dom";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import aboutHero from "@/assets/about-hero.jpg";

const STEPS = [
  {
    n: "01",
    t: "Complete your intake",
    d: "Share your health history through a secure online questionnaire.",
  },
  {
    n: "02",
    t: "Licensed provider review",
    d: "A board-certified provider reviews your information and determines next steps.",
  },
  {
    n: "03",
    t: "Treatment if appropriate",
    d: "If prescribed, your protocol is designed around your provider's clinical judgment.",
  },
  {
    n: "04",
    t: "Ongoing support",
    d: "Continue with provider-guided care, refills, and adjustments when appropriate.",
  },
];

export default function About() {
  return (
    <div style={{ background: "hsl(var(--warm-ivory))" }}>
      <Header />

      {/* Hero */}
      <section className="section-pad" style={{ paddingTop: 160 }}>
        <div className="site-container grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-6">
            <span className="eyebrow" style={{ color: "hsl(var(--terracotta))" }}>
              About FIT29
            </span>
            <h1
              className="display-lg mt-8 neon-headline neon-magenta"
              style={{ maxWidth: "14ch" }}
            >
              Redefining healthcare for the{" "}
              <span className="serif-italic" style={{ color: "hsl(var(--deep-forest))" }}>
                modern era.
              </span>
            </h1>

            <p
              className="mt-10 max-w-xl text-base"
              style={{ color: "hsl(var(--charcoal) / 0.7)", lineHeight: 1.75 }}
            >
              At FIT29, our vision is to transform healthcare accessibility and
              engagement. We're dedicated to delivering accessible, effective,
              and premium medications through our telehealth portal — empowering
              individuals to manage their health through a dependable,
              hassle-free path to prescription care.
            </p>

            <p
              className="mt-6 max-w-xl text-base"
              style={{ color: "hsl(var(--charcoal) / 0.7)", lineHeight: 1.75 }}
            >
              We believe everyone deserves seamless access to essential
              medications, and our commitment is unwavering in fulfilling that
              pledge. Embracing innovation, convenience, and patient-centricity,
              we stand poised to redefine healthcare for the modern era.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/" onClick={() => window.scrollTo({ top: 0 })} className="btn-pill">
                Start online visit
              </Link>
              <Link
                to="/contact"
                className="btn-pill"
                style={{
                  background: "transparent",
                  color: "hsl(var(--charcoal))",
                  border: "1px solid hsl(var(--charcoal) / 0.35)",
                }}
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="quiet-zoom overflow-hidden radius-card">
              <img
                src={aboutHero}
                alt="Physician reviewing patient care online"
                width={1280}
                height={1024}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="section-pad"
        style={{ background: "hsl(var(--stone))" }}
      >
        <div className="site-container grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <span className="eyebrow" style={{ color: "hsl(var(--terracotta))" }}>
              How care works
            </span>
            <h2
              className="display-md mt-8 neon-headline neon-cyan"
              style={{ maxWidth: "16ch" }}
            >
              A clear path from online visit to{" "}
              <span className="serif-italic" style={{ color: "hsl(var(--deep-forest))" }}>
                ongoing care.
              </span>
            </h2>
            <p
              className="mt-8 max-w-md text-base"
              style={{ color: "hsl(var(--charcoal) / 0.7)", lineHeight: 1.75 }}
            >
              Complete a secure intake, receive provider review, and continue
              with support if treatment is clinically appropriate.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <ul>
              {STEPS.map((s, i) => (
                <li
                  key={s.n}
                  className="grid grid-cols-12 gap-6 py-10"
                  style={{
                    borderTop: "1px solid hsl(var(--charcoal) / 0.15)",
                    borderBottom:
                      i === STEPS.length - 1
                        ? "1px solid hsl(var(--charcoal) / 0.15)"
                        : "none",
                  }}
                >
                  <span
                    className="col-span-2 eyebrow"
                    style={{ color: "hsl(var(--terracotta))" }}
                  >
                    {s.n}
                  </span>
                  <div className="col-span-10">
                    <h3
                      className="display-sm"
                      style={{ color: "hsl(var(--charcoal))" }}
                    >
                      {s.t}
                    </h3>
                    <p
                      className="mt-3 max-w-lg text-base"
                      style={{ color: "hsl(var(--charcoal) / 0.65)", lineHeight: 1.7 }}
                    >
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-pad"
        style={{ background: "hsl(var(--panel))", color: "hsl(var(--charcoal))" }}
      >
        <div className="site-container text-center max-w-4xl mx-auto">
          <span className="eyebrow eyebrow-gold">Ready to begin?</span>
          <h2
            className="display-md mt-8 neon-headline neon-aqua"
          >
            Start with a short online visit and see whether{" "}
            <span className="serif-italic" style={{ color: "hsl(var(--soft-gold))" }}>
              provider-led care
            </span>{" "}
            may be appropriate for you.
          </h2>

          <div className="mt-10 flex justify-center">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0 })}
              className="btn-pill-light"
            >
              Start online visit
            </Link>
          </div>

          <p
            className="mt-12 mx-auto max-w-2xl"
            style={{
              color: "hsl(var(--charcoal) / 0.6)",
              fontSize: 13,
              lineHeight: 1.7,
            }}
          >
            Prescription products are only provided if a licensed healthcare
            provider determines they are appropriate after evaluation. Results
            and timelines vary.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
