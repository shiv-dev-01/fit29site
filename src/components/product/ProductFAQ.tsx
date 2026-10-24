import { useState } from "react";
import type { Product } from "@/data/products";

export default function ProductFAQ({ product }: { product: Product }) {
  const [open, setOpen] = useState<number | null>(0);
  const list = product.faqs || [];

  return (
    <section className="bg-[hsl(var(--warm-ivory))] section-pad">
      <div className="site-container grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4">
          <span className="eyebrow">Inquiries</span>
          <h2 className="display-md mt-8 neon-headline neon-cyan" style={{ maxWidth: "14ch" }}>
            Quiet answers to <span className="serif-italic">candid questions</span>.
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          {list.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} style={{ borderTop: i === 0 ? "1px solid hsl(var(--line))" : "none", borderBottom: "1px solid hsl(var(--line))" }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-baseline justify-between text-left gap-8 transition-all duration-500"
                  style={{ padding: isOpen ? "40px 0 24px" : "32px 0" }}
                >
                  <div className="flex items-baseline gap-6">
                    <span className="eyebrow" style={{ color: "hsl(var(--terracotta))" }}>0{i + 1}</span>
                    <span
                      style={{
                        color: isOpen ? "hsl(var(--deep-forest))" : "hsl(var(--charcoal))",
                        fontSize: isOpen ? "clamp(1.4rem, 2vw, 1.75rem)" : "clamp(1.05rem, 1.3vw, 1.25rem)",
                        fontWeight: 400,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.2,
                        transition: "all 0.5s",
                      }}
                    >
                      {f.q}
                    </span>
                  </div>
                  <span
                    style={{
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      color: "hsl(var(--deep-forest))",
                      fontWeight: 200,
                      fontSize: 28,
                      lineHeight: 1,
                      transition: "transform 0.5s",
                    }}
                  >
                    +
                  </span>
                </button>
                <div className="overflow-hidden transition-all duration-700" style={{ maxHeight: isOpen ? 3000 : 0 }}>
                  <p className="text-base pl-12" style={{ color: "hsl(var(--charcoal) / 0.65)", paddingBottom: 40, lineHeight: 1.75, whiteSpace: "pre-line" }}>
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
