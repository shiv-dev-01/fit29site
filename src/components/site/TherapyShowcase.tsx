import { Link } from "react-router-dom";
import { productBySlug } from "@/data/products";

type SubProduct = { slug: string; bullets: string[] };
type Props = {
  id: string;
  eyebrow: string;
  title: string;
  featured: { slug: string; headline: string; sub: string; lifestyle: string };
  products: SubProduct[];
  reverse?: boolean;
  bg?: string;
  /** neon palette for the section's primary headline */
  neon?: "magenta" | "cyan" | "aqua" | "violet";
};

export default function TherapyShowcase({ id, eyebrow, title, featured, products, reverse, bg, neon = "cyan" }: Props) {
  const feat = productBySlug(featured.slug);
  return (
    <section id={id} className="py-16 lg:py-20" style={{ background: bg ?? "hsl(var(--warm-ivory))" }}>
      <div className="site-container">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className={`col-span-12 lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
            <div className="relative overflow-hidden mx-auto" style={{ borderRadius: "1.4rem", aspectRatio: "4/5", maxHeight: "52vh" }}>
              <img
                src={featured.lifestyle}
                alt={title}
                className="w-full h-full object-cover"
                style={{ filter: "saturate(0.92)" }}
              />
            </div>
          </div>

          <div className={`col-span-12 lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
            <span className="eyebrow" style={{ color: "hsl(var(--terracotta))" }}>{eyebrow}</span>
            <h2 className={`display-md mt-4 neon-headline neon-${neon}`} style={{ fontWeight: 300 }}>
              {title}
            </h2>
            {feat && (
              <>
                <p className="mt-4 text-lg serif-italic" style={{ color: "hsl(var(--deep-forest))" }}>
                  {featured.headline}
                </p>
                <p className="mt-3 text-base max-w-md" style={{ color: "hsl(var(--charcoal) / 0.7)", lineHeight: 1.6 }}>
                  {featured.sub}
                </p>
                <Link to={`/product/${feat.slug}`} className="btn-pill-dark mt-6 inline-flex">
                  Shop {feat.name}
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((p) => {
            const prod = productBySlug(p.slug);
            if (!prod) return null;
            return (
              <Link
                key={p.slug}
                to={`/product/${prod.slug}`}
                className="group flex flex-col transition-transform duration-500 hover:-translate-y-1"
                style={{
                  background: "hsl(var(--surface))",
                  border: "1px solid hsl(var(--line))",
                  borderRadius: "1.2rem",
                  padding: 20,
                }}
              >
                <h3 className="text-xl" style={{ color: "hsl(var(--charcoal))", fontWeight: 400 }}>
                  {prod.name}
                </h3>
                <div
                  className="mt-4 w-full overflow-hidden"
                  style={{
                    aspectRatio: "1/1",
                    maxHeight: "180px",
                    borderRadius: "0.9rem",
                    background: "radial-gradient(circle at 50% 45%, hsl(var(--neon-violet) / 0.28) 0%, hsl(var(--stone)) 70%)",
                  }}
                >
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-contain p-6" loading="lazy" />
                </div>
                <ul className="mt-4 flex flex-col gap-2">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "hsl(var(--charcoal) / 0.8)" }}
                    >
                      <span
                        className="mt-2 inline-block"
                        style={{ width: 5, height: 5, borderRadius: 999, backgroundImage: "var(--gradient-cta)" }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                <span
                  className="mt-5 inline-flex items-center gap-2 transition-colors group-hover:!text-[hsl(var(--deep-forest))]"
                  style={{
                    color: "hsl(var(--charcoal))",
                    fontSize: 12,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  Read More →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
