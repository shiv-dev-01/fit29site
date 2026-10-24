import { useEffect, useState } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const FAQS = [
  {
    q: "What is FIT29?",
    a: "A modern longevity brand for hormone optimization, metabolic precision, and healthspan. Care is delivered virtually by US-licensed physicians and supported by compounded pharmacy partners.",
  },
  {
    q: "What is the FIT29 process?",
    a: "You begin with a confidential intake, meet with your physician, and receive a protocol designed for your physiology. Care continues quietly, with ongoing reviews, adjustments, and discreet delivery.",
  },
  {
    q: "How much does FIT29 cost?",
    a: "Transparent, flat protocol pricing. Clinical oversight, pharmacy compounding, and discreet delivery are all included. No surprise fees, no per-visit charges.",
  },
  {
    q: "How does it work?",
    a: "Choose a therapy, complete a 5-minute intake, and a physician reviews your case — adding a quick video visit if your state requires one. Your medication then ships to your door on a schedule that fits your life.",
  },
  {
    q: "Is it discreet?",
    a: "Entirely. Communications are HIPAA-secured, shipments arrive in unmarked packaging, and your relationship with your physician remains private.",
  },
  {
    q: "Are the physicians real and licensed?",
    a: "Yes. Every provider is a board-certified U.S. physician, licensed in your state. Not a chatbot, not a script — you can message a real person and hear back within hours.",
  },
  {
    q: "Where do the medications come from?",
    a: "Compounded and brand medications are dispensed by accredited 503A pharmacy partners and shipped to your door — refrigerated where needed, in plain packaging.",
  },
  {
    q: "How do I know which protocol is right for me?",
    a: "Browse the catalog or message us and we'll point you to what's right. Your physician confirms the plan after reviewing your intake and any bloodwork required for the protocol.",
  },
  {
    q: "Can I cancel or pause my protocol?",
    a: "Yes. You can pause, adjust, or cancel at any time from your account or by messaging your care team. There are no lock-in contracts.",
  },
  {
    q: "Do you accept insurance?",
    a: "FIT29 operates on transparent flat pricing rather than insurance billing. Many members find the all-in protocol price simpler and more predictable than traditional care.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "FAQ — FIT29";
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div style={{ paddingTop: 84 }} />

      {/* Intro band */}
      <section style={{ background: "hsl(var(--warm-ivory))" }}>
        <div className="site-container" style={{ paddingTop: 72, paddingBottom: 32 }}>
          <span className="eyebrow" style={{ letterSpacing: "0.32em" }}>FAQ</span>
          <h1
            className="mt-4 neon-headline neon-violet"
            style={{
              fontSize: "clamp(2.5rem, 1.5rem + 4vw, 4rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "hsl(var(--charcoal))",
              maxWidth: "18ch",
            }}
          >
            Your questions,{" "}
            <span className="serif-italic" style={{ color: "hsl(var(--soft-gold))" }}>answered</span>.
          </h1>
          <p
            className="mt-6 max-w-xl"
            style={{ color: "hsl(var(--charcoal) / 0.7)", fontSize: 17, lineHeight: 1.7 }}
          >
            Everything you need to know about FIT29 — the process, the pricing, and the people behind your care.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section style={{ background: "hsl(var(--warm-ivory))" }}>
        <div className="site-container grid grid-cols-12 gap-10" style={{ paddingTop: 32, paddingBottom: 120 }}>
          <div className="col-span-12 lg:col-span-4">
            <span className="eyebrow" style={{ letterSpacing: "0.32em" }}>FAQ</span>
            <h2
              className="mt-4"
              style={{
                fontSize: "clamp(2rem, 1.2rem + 2.5vw, 2.75rem)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "hsl(var(--charcoal))",
                maxWidth: "12ch",
              }}
            >
              Frequently{" "}
              <span className="serif-italic" style={{ color: "hsl(var(--soft-gold))" }}>asked</span> questions.
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-8">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  style={{
                    borderTop: i === 0 ? "1px solid hsl(var(--charcoal) / 0.15)" : "none",
                    borderBottom: "1px solid hsl(var(--charcoal) / 0.15)",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left gap-8"
                    style={{ padding: "24px 0" }}
                  >
                    <span
                      style={{
                        color: "hsl(var(--charcoal))",
                        fontSize: "clamp(1.05rem, 1.1vw, 1.2rem)",
                        fontWeight: 500,
                        letterSpacing: "-0.015em",
                        lineHeight: 1.3,
                      }}
                    >
                      {f.q}
                    </span>
                    <span
                      className="shrink-0 transition-transform duration-500"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        color: "hsl(var(--deep-forest))",
                        fontWeight: 200,
                        fontSize: 26,
                        lineHeight: 1,
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{ maxHeight: isOpen ? 400 : 0 }}
                  >
                    <p
                      className="max-w-2xl"
                      style={{
                        color: "hsl(var(--charcoal) / 0.7)",
                        fontSize: 16,
                        lineHeight: 1.75,
                        paddingBottom: 28,
                      }}
                    >
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
