import step1 from "@/assets/step1.jpg";
import step2 from "@/assets/step2.jpg";
import step3 from "@/assets/step3.jpg";

const STEPS = [
  { n: "01", img: step1, title: "Take the health questionnaire", body: "100% online and confidential health intake form." },
  { n: "02", img: step2, title: "Get your prescription", body: "All prescriptions overseen by fully licensed and insured physicians." },
  { n: "03", img: step3, title: "Get your meds", body: "Fast free delivery from our accredited pharmacies." },
];

export default function Steps() {
  return (
    <section className="py-10 lg:py-12" style={{ background: "hsl(var(--warm-ivory))" }}>
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mt-0 neon-headline neon-aqua" style={{ fontWeight: 300, fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Doctor-prescribed medications, <span className="serif-italic">delivered to your door.</span>
          </h2>
          <p className="mt-3 text-base" style={{ color: "hsl(var(--charcoal) / 0.7)" }}>
            Get started in 3 simple steps — your personalized treatment plan is just minutes away.
          </p>
        </div>

        <div className="mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STEPS.map((s) => (
            <div key={s.n} className="flex flex-col">
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/3", borderRadius: "1.2rem" }}
              >
                <img src={s.img} alt="" className="w-full h-full object-cover" style={{ filter: "saturate(0.9)" }} />
                <span
                  className="absolute top-4 left-4 inline-flex items-center justify-center"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 999,
                    background: "hsl(var(--warm-ivory))",
                    color: "hsl(var(--deep-forest))",
                    fontSize: 13,
                    letterSpacing: "0.1em",
                    fontWeight: 500,
                  }}
                >
                  {s.n}
                </span>
              </div>
              <h3 className="mt-4 text-xl" style={{ color: "hsl(var(--charcoal))", fontWeight: 400 }}>
                {s.title}
              </h3>
              <p className="mt-2 text-sm" style={{ color: "hsl(var(--charcoal) / 0.7)", lineHeight: 1.6 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
