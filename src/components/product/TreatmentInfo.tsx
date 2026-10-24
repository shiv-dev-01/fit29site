import type { Product } from "@/data/products";

export default function TreatmentInfo({ product }: { product: Product }) {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: "hsl(var(--stone))" }}
    >
      {/* Faded background text */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ opacity: 0.05 }}
      >
        <span
          style={{
            fontSize: "clamp(8rem, 22vw, 22rem)",
            fontWeight: 700,
            color: "hsl(var(--charcoal))",
            letterSpacing: "-0.06em",
            whiteSpace: "nowrap",
          }}
        >
          {product.name}
        </span>
      </div>

      <div className="site-container relative grid grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="col-span-12 lg:col-span-6">
          <span className="eyebrow">About the Protocol</span>
          <h2 className="display-md mt-6 neon-headline neon-aqua" style={{ maxWidth: "16ch" }}>
            {product.tagline}
          </h2>
          <p className="mt-8 text-base max-w-lg" style={{ color: "hsl(var(--charcoal) / 0.7)", lineHeight: 1.75 }}>
            {product.description}
          </p>

          {product.benefits && (
            <ul className="mt-8 space-y-2">
              {product.benefits.slice(0, 5).map((b) => (
                <li key={b} className="text-base flex gap-3" style={{ color: "hsl(var(--charcoal))" }}>
                  <span style={{ color: "hsl(var(--terracotta))" }}>—</span> {b}
                </li>
              ))}
            </ul>
          )}

          {product.timeline && (
            <p className="mt-8 text-sm max-w-lg" style={{ color: "hsl(var(--charcoal) / 0.6)", lineHeight: 1.7 }}>
              <span className="eyebrow mr-2" style={{ color: "hsl(var(--soft-gold))" }}>Timeline</span>
              {product.timeline}
            </p>
          )}

          <a href="#hero" className="btn-pill mt-10 inline-flex">Start Consultation</a>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <div
            className="quiet-zoom overflow-hidden"
            style={{ aspectRatio: "4/5", borderRadius: "1.2rem" }}
          >
            <img src={product.lifestyle} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
