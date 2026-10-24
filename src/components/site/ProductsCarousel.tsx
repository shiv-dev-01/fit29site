import type React from "react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

type Props = {
  excludeSlug?: string;
  slugs?: string[];
  eyebrow?: string;
  title?: React.ReactNode;
};

export default function ProductsCarousel({ excludeSlug, slugs, eyebrow, title }: Props) {
  const items = slugs
    ? (slugs.map((s) => products.find((p) => p.slug === s)).filter(Boolean) as typeof products).filter(
        (p) => p.slug !== excludeSlug,
      )
    : products.filter((p) => p.slug !== excludeSlug).slice(0, 24);
  return (
    <section style={{ background: "hsl(var(--surface))", paddingTop: "clamp(3rem, 6vw, 5rem)", paddingBottom: "clamp(3rem, 6vw, 5rem)" }}>
      <div className="site-container">
        <div className="text-center mb-10">
          <span className="eyebrow">{eyebrow ?? "The Catalog"}</span>
          <h2 className="display-md mt-4 neon-headline neon-violet">
            {title ?? (
              <>
                Explore the <span className="serif-italic">full catalog</span>.
              </>
            )}
          </h2>
        </div>

        <div
          className="flex gap-6 overflow-x-auto pb-6"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {items.map((p) => (
            <Link
              key={p.id}
              to={`/product/${p.slug}`}
              className="group shrink-0 transition-transform duration-500 hover:scale-[1.03]"
              style={{
                width: 280,
                scrollSnapAlign: "start",
                background: "hsl(var(--warm-ivory))",
                border: "1px solid hsl(var(--line))",
                borderRadius: "1.2rem",
                overflow: "hidden",
                padding: 20,
              }}
            >
              <div
                className="relative w-full overflow-hidden mb-5 flex items-center justify-center"
                style={{ aspectRatio: "1/1", borderRadius: "0.9rem", background: "radial-gradient(circle at 50% 45%, hsl(var(--neon-violet) / 0.28) 0%, hsl(var(--stone)) 70%)" }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="object-contain"
                  style={{ maxHeight: "70%", maxWidth: "70%", width: "auto", height: "auto" }}
                />
              </div>
              <h3 className="text-lg" style={{ color: "hsl(var(--charcoal))", fontWeight: 500 }}>{p.name}</h3>
              <p className="mt-2 text-sm" style={{ color: "hsl(var(--charcoal) / 0.6)", lineHeight: 1.5 }}>{p.subhead}</p>
              <div
                className="mt-5 w-full inline-flex items-center justify-center rounded-full transition-colors"
                style={{
                  backgroundImage: "var(--gradient-cta)",
                  color: "#fff",
                  boxShadow: "0 14px 40px -14px hsl(var(--neon-magenta) / 0.75)",
                  height: 56,
                  fontSize: 13,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                Explore
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
