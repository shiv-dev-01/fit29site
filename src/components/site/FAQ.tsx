import { useState } from "react";

const FAQS = [
  {
    q: "What is FIT29?",
    a: "A modern longevity brand for hormone optimization, metabolic precision, and healthspan. Care is delivered virtually by US-licensed physicians and supported by compounded pharmacy partners.",
  },
  {
    q: "How does it work?",
    a: "You begin with a confidential intake, meet with your physician, and receive a protocol designed for your physiology. Care continues — quietly, over the course of a lifetime — with ongoing reviews and adjustments.",
  },
  {
    q: "What does membership cost?",
    a: "Transparent, flat protocol pricing. Clinical oversight, pharmacy compounding, and discreet delivery are included. No surprise fees, no per-visit charges.",
  },
  {
    q: "Is it discreet?",
    a: "Entirely. Communications are HIPAA-secured, shipments arrive in unmarked packaging, and your relationship with your physician remains private.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[hsl(var(--warm-ivory))] section-pad">
      <div className="site-container grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-1"><span className="eyebrow">VI.</span></div>
        <div className="col-span-12 lg:col-span-4">
          <span className="eyebrow">Inquiries</span>
          <h2 className="display-md mt-8 neon-headline neon-cyan" style={{ maxWidth: "14ch" }}>
            Quiet answers to <span className="serif-italic">candid questions</span>.
          </h2>
        </div>

        <div className="col-span-12 lg:col-span-7">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                style={{ borderTop: i === 0 ? "1px solid hsl(var(--line))" : "none", borderBottom: "1px solid hsl(var(--line))" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-baseline justify-between text-left gap-8 transition-all duration-500"
                  style={{ padding: isOpen ? "40px 0 24px" : "32px 0" }}
                >
                  <div className="flex items-baseline gap-6">
                    <span className="eyebrow" style={{ color: "hsl(var(--terracotta))" }}>0{i + 1}</span>
                    <span
                      className="transition-all duration-500"
                      style={{
                        color: isOpen ? "hsl(var(--deep-forest))" : "hsl(var(--charcoal))",
                        fontSize: isOpen ? "clamp(1.6rem, 2.4vw, 2rem)" : "clamp(1.1rem, 1.4vw, 1.35rem)",
                        fontWeight: 400,
                        letterSpacing: "-0.025em",
                        lineHeight: 1.15,
                      }}
                    >
                      {f.q}
                    </span>
                  </div>
                  <span
                    className="shrink-0 transition-transform duration-500"
                    style={{
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      color: "hsl(var(--deep-forest))",
                      fontWeight: 200,
                      fontSize: 28,
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-700"
                  style={{ maxHeight: isOpen ? 320 : 0 }}
                >
                  <p
                    className="text-base max-w-xl pl-12"
                    style={{ color: "hsl(var(--charcoal) / 0.65)", paddingBottom: 40, lineHeight: 1.75 }}
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
  );
}
