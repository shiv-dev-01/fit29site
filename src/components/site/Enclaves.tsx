import { useEffect, useRef, useState } from "react";
import mens from "@/assets/cat-mens.jpg";
import womens from "@/assets/cat-womens.jpg";
import weight from "@/assets/cat-weight.jpg";
import longevity from "@/assets/cat-longevity.jpg";
import step1 from "@/assets/step1.jpg";
import step2 from "@/assets/step2.jpg";

const ENCLAVES = [
  { k: "01", label: "Men's Health", title: "Boost Energy & Performance", desc: "Testosterone optimization, peptide therapy, and metabolic care for men ages 30–59.", img: mens },
  { k: "02", label: "Women's Health", title: "Balance Hormones & Feel Your Best", desc: "Perimenopause, menopause, and hormone balance protocols designed around your endocrine map.", img: womens },
  { k: "03", label: "Weight Loss", title: "Medical Weight Loss That Works", desc: "GLP-1 and dual-incretin therapies calibrated to your physiology, with ongoing medical oversight.", img: weight },
  { k: "04", label: "Longevity", title: "Optimize Your Future Health", desc: "NAD+, peptides, and healthspan protocols for sustained cellular function and graceful aging.", img: longevity },
  { k: "05", label: "Hair Health", title: "Restore Confidence", desc: "Clinical regimens for follicle integrity, density, and long-term scalp health.", img: step1 },
  { k: "06", label: "Sexual Wellness", title: "Reconnect & Thrive", desc: "Discreet, evidence-led care for sexual function, desire, and partnered confidence.", img: step2 },
];

export default function Enclaves() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="enclaves" className="bg-[hsl(var(--stone))]">
      <div className="site-container pt-32 pb-12 grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7">
          <span className="eyebrow">II. Goal Enclaves</span>
          <h2 className="display-md mt-8" style={{ color: "hsl(var(--charcoal))", maxWidth: "18ch" }}>
            Healthcare designed around <span className="serif-italic">your goals</span>.
          </h2>
          <p className="mt-8 max-w-lg text-base" style={{ color: "hsl(var(--charcoal) / 0.65)", lineHeight: 1.75 }}>
            Six clinical enclaves — self-identify where you want to begin.
          </p>
        </div>
      </div>

      <div className="site-container grid grid-cols-12 gap-8 lg:gap-16 pb-32">
        {/* Sticky portrait — desktop */}
        <div className="hidden lg:block lg:col-span-5">
          <div className="sticky top-32">
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
              {ENCLAVES.map((e, i) => (
                <img
                  key={e.k}
                  src={e.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                  style={{ opacity: active === i ? 1 : 0, filter: "saturate(0.9)" }}
                />
              ))}
              <span
                className="absolute bottom-6 left-6 eyebrow eyebrow-gold"
                style={{ color: "#fff" }}
              >
                {ENCLAVES[active].k} / 06
              </span>
            </div>
          </div>
        </div>

        {/* Scrolling text list */}
        <ol className="col-span-12 lg:col-span-7 flex flex-col">
          {ENCLAVES.map((e, i) => (
            <li
              key={e.k}
              data-idx={i}
              ref={(el) => (refs.current[i] = el)}
              className="group cursor-pointer transition-all duration-700"
              style={{
                borderTop: "1px solid hsl(var(--charcoal) / 0.18)",
                padding: "56px 0",
                opacity: active === i ? 1 : 0.35,
              }}
            >
              <div className="flex items-baseline gap-6 mb-4">
                <span className="eyebrow" style={{ color: "hsl(var(--terracotta))" }}>{e.k}</span>
                <span className="eyebrow">{e.label}</span>
              </div>
              <h3
                className="display-md transition-all duration-500 group-hover:!text-[hsl(var(--deep-forest))]"
                style={{ color: "hsl(var(--charcoal))", letterSpacing: active === i ? "-0.03em" : "-0.025em" }}
              >
                {e.title}
              </h3>
              <p
                className="mt-6 max-w-md text-base transition-all duration-700"
                style={{
                  color: "hsl(var(--charcoal) / 0.65)",
                  maxHeight: active === i ? 200 : 0,
                  opacity: active === i ? 1 : 0,
                  overflow: "hidden",
                  lineHeight: 1.75,
                }}
              >
                {e.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
