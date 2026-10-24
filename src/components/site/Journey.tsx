import step1 from "@/assets/step1.jpg";
import step2 from "@/assets/step2.jpg";
import step3 from "@/assets/step3.jpg";

const STEPS = [
  { k: "I", title: "Quiet Onboarding", desc: "A confidential intake conducted over a single, unhurried evening. No clipboards, no waiting room.", img: step1, offset: "translate-y-8" },
  { k: "II", title: "Digital Consultation", desc: "Your physician reviews your map, labs, and history in private, then drafts a protocol unique to you.", img: step2, offset: "-translate-y-6" },
  { k: "III", title: "Bespoke Pharmacy Delivery", desc: "Compounded by hand at our licensed partners, packaged with restraint, delivered to your door.", img: step3, offset: "translate-y-12" },
];

export default function Journey() {
  return (
    <section id="journey" className="bg-[hsl(var(--warm-ivory))] section-pad overflow-hidden">
      <div className="site-container">
        <div className="grid grid-cols-12 gap-8 mb-24">
          <div className="col-span-12 lg:col-span-1"><span className="eyebrow">III.</span></div>
          <div className="col-span-12 lg:col-span-7">
            <span className="eyebrow">The Journey</span>
            <h2 className="display-md mt-8" style={{ color: "hsl(var(--charcoal))", maxWidth: "18ch" }}>
              A journey of three quiet movements.
            </h2>
          </div>
        </div>

        {/* Horizontal timeline */}
        <div className="relative">
          <div className="hairline absolute left-0 right-0 top-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative">
            {STEPS.map((s, i) => (
              <article key={s.k} className={`relative ${s.offset}`}>
                {/* node */}
                <div
                  className="absolute -top-1.5 left-0 w-3 h-3 rounded-full"
                  style={{ background: "hsl(var(--terracotta))" }}
                />
                <span className="eyebrow eyebrow-gold mt-8 inline-block">Movement {s.k}</span>

                <div className="quiet-zoom overflow-hidden mt-8" style={{ aspectRatio: "9/10", borderRadius: 30 }}>
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                </div>

                <h3 className="display-md mt-8" style={{ color: "hsl(var(--charcoal))", fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)" }}>
                  {s.title}
                </h3>
                <p className="mt-4 text-base max-w-xs" style={{ color: "hsl(var(--charcoal) / 0.65)", lineHeight: 1.75 }}>
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
