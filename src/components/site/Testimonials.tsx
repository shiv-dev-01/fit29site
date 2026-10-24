import { useEffect, useState } from "react";

const VOICES = [
  { quote: "Within a season, I had recovered something I had quietly assumed was gone for good.", name: "M.R.", role: "Member, 47" },
  { quote: "The conversation is unhurried. The protocol is precise. The result is simply that I feel like myself again.", name: "E.L.", role: "Member, 52" },
  { quote: "Thirty pounds lighter, sleeping again, and — most of all — paying attention to my life.", name: "N.P.", role: "Member, 39" },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % VOICES.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="voices"
      className="section-pad relative overflow-hidden atmos"
      style={{ background: "hsl(var(--panel))" }}
    >
      <div className="site-container grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-1">
          <span className="eyebrow eyebrow-gold">V.</span>
        </div>
        <div className="col-span-12 lg:col-span-11">
          <span className="eyebrow eyebrow-gold">Voices</span>

          <div className="relative mt-16" style={{ minHeight: "min(60vh, 520px)" }}>
            {VOICES.map((v, idx) => (
              <div
                key={idx}
                className="absolute inset-0 transition-opacity duration-1000"
                style={{ opacity: i === idx ? 1 : 0, pointerEvents: i === idx ? "auto" : "none" }}
              >
                <blockquote
                  className="display-lg serif-italic"
                  style={{ color: "#fff", maxWidth: "22ch", fontWeight: 300 }}
                >
                  "{v.quote}"
                </blockquote>
                <div className="mt-16 flex items-baseline gap-6">
                  <span className="eyebrow eyebrow-gold">{v.name}</span>
                  <span className="text-sm" style={{ color: "hsl(var(--charcoal) / 0.6)" }}>{v.role}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-8 mt-16 hairline pt-8" style={{ borderTopColor: "hsl(var(--line))" }}>
            {VOICES.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                className="eyebrow transition-colors duration-500"
                style={{ color: k === i ? "hsl(var(--soft-gold))" : "hsl(var(--charcoal) / 0.45)" }}
              >
                0{k + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
