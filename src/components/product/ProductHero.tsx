import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import type { Product } from "@/data/products";
import { addToCart, onCartChange, readCart } from "@/lib/cart";

const TRUST = [
  "100% discreet, online consultation",
  "U.S. board certified physicians",
  "No insurance required",
  "Fast shipping",
];

export default function ProductHero({ product }: { product: Product }) {
  const navigate = useNavigate();
  const [duration, setDuration] = useState(0);
  const [vSel, setVSel] = useState<number[]>(product.variants?.map(() => 0) ?? []);
  const [cartSkus, setCartSkus] = useState<string[]>(() => readCart().map((c) => c.sku));

  useEffect(() => {
    return onCartChange(() => setCartSkus(readCart().map((c) => c.sku)));
  }, []);

  const activePrice = product.durations ? product.durations[duration].price : product.basePrice;
  const baseActiveSku = product.durations ? product.durations[duration].sku : product.baseSku;
  const variantSkuSuffix = product.variants
    ? product.variants
        .map((v, i) => {
          const opt = v.options[vSel[i] ?? 0] ?? "";
          const title = opt.split(" — ")[0];
          return title.replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "").toUpperCase();
        })
        .filter(Boolean)
        .join("-")
    : "";
  const activeSku = variantSkuSuffix ? `${baseActiveSku}-${variantSkuSuffix}` : baseActiveSku;
  const activeName = product.variants
    ? `${product.name} — ${product.variants.map((v, i) => (v.options[vSel[i] ?? 0] ?? "").split(" — ")[0]).join(" / ")}`
    : product.name;

  let activeImage = product.image;
  if (product.variantImages && product.variants) {
    const firstOpt = product.variants[0].options[vSel[0] ?? 0] ?? "";
    const match = Object.keys(product.variantImages).find((k) => firstOpt.toLowerCase().startsWith(k.toLowerCase()));
    if (match) activeImage = product.variantImages[match];
  }

  let activeCheckoutUrl = (product.durations && product.durations[duration].checkoutUrl) || product.checkoutUrl;
  let finalSku = activeSku;
  let finalPrice = activePrice;
  if (product.variantCheckouts && product.variants) {
    const parts = product.variants.map((v, i) => {
      const opt = v.options[vSel[i] ?? 0] ?? "";
      return opt.split(" — ")[0].trim();
    });
    const tryKeys: string[] = [parts.join("|")];
    // Daily-dose products always ship qty 30/mo — override pills selector for lookup
    if (parts[0]?.includes("Daily") && parts.length >= 3) {
      tryKeys.push([parts[0], "30", parts[2]].join("|"));
    }
    let vc = tryKeys.map((k) => product.variantCheckouts![k]).find(Boolean);
    if (!vc) {
      const firstOpt = parts[0] ?? "";
      const key = Object.keys(product.variantCheckouts).find((k) => firstOpt.startsWith(k) || k.startsWith(firstOpt));
      if (key) vc = product.variantCheckouts[key];
    }
    if (vc) {
      activeCheckoutUrl = vc.url;
      finalSku = vc.sku;
      finalPrice = vc.price;
    }
  }

  // --- Pricing summary: effective monthly price for the selected plan ---
  const monthsForLabel = (label: string) => {
    const m = label.match(/(\d+)\s*(month|mo)/i);
    return m ? parseInt(m[1]) : 1;
  };
  const fmtMonthly = (total: number, months: number) => {
    const v = total / months;
    if (Number.isInteger(v)) return v.toFixed(0);
    if (Number.isInteger(v * 2)) return v.toFixed(2);
    return Math.round(v).toFixed(0);
  };
  const selectedMonths = product.durations ? monthsForLabel(product.durations[duration].label) : 1;
  const summaryPrice = product.durations
    ? fmtMonthly(product.durations[duration].price, selectedMonths)
    : finalPrice.toFixed(2);
  const summarySublabel = product.durations ? "PER MONTH" : product.priceSublabel;

  const inCart = cartSkus.includes(finalSku);


  // TESTING: adding a 1-month variant adds every available variant of this product
  const isOneMonthSelection = (() => {
    if (product.durations) return /^\s*1\s*(month|mo)/i.test(product.durations[duration].label);
    if (product.variants) {
      return product.variants.some((v, i) => /^\s*1\s*(month|mo)/i.test((v.options[vSel[i] ?? 0] ?? "").split(" — ")[0]));
    }
    return false;
  })();

  const handleClick = () => {
    if (inCart) {
      navigate("/cart");
      return;
    }
    if (isOneMonthSelection) {
      const all: { sku: string; name: string; price: number; url?: string }[] = [];
      if (product.variantCheckouts) {
        Object.entries(product.variantCheckouts).forEach(([key, vc]) =>
          all.push({ sku: vc.sku, name: `${product.name} — ${key.split("|").join(" / ")}`, price: vc.price, url: vc.url })
        );
      }
      if (product.durations) {
        product.durations.forEach((d) =>
          all.push({ sku: d.sku, name: `${product.name} — ${d.label}`, price: d.price, url: d.checkoutUrl || product.checkoutUrl })
        );
      }
      if (all.length > 0) {
        all.forEach((it) =>
          addToCart({ sku: it.sku, name: it.name, price: it.price, image: activeImage, checkoutUrl: it.url })
        );
        return;
      }
    }
    addToCart({ sku: finalSku, name: activeName, price: finalPrice, image: activeImage, checkoutUrl: activeCheckoutUrl });
  };


  const btnLabel = inCart ? "View Cart" : "Add to Cart";
  const btnBg = "var(--gradient-cta)";

  return (
    <section className="section-pad atmos" style={{ background: "hsl(var(--warm-ivory))" }}>
      <div className="site-container grid grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left — image */}
        <div className="col-span-12 lg:col-span-6">
          <div
            className="relative w-full overflow-hidden"
            style={{
              aspectRatio: "4/5",
              borderRadius: "1.2rem",
              background: "radial-gradient(circle at 50% 40%, hsl(var(--neon-violet) / 0.3) 0%, hsl(var(--neon-cyan) / 0.08) 45%, hsl(var(--stone)) 80%)",
            }}
          >
            <img src={activeImage} alt={product.name} className="w-full h-full object-contain p-16" />
            <div
              className="absolute inset-x-0 bottom-0"
              style={{ height: "34%", background: "linear-gradient(0deg, hsl(var(--warm-ivory)) 0%, transparent 100%)" }}
            />
          </div>
        </div>

        {/* Right — selector */}
        <div className="col-span-12 lg:col-span-6">
          <span className="eyebrow">{product.subhead && "Protocol"}</span>
          <h1
            className="mt-4 neon-headline neon-magenta"
            style={{ fontSize: "clamp(2.4rem, 4.4vw, 4.2rem)", lineHeight: 1.02, letterSpacing: "-0.035em", fontWeight: 300 }}
          >
            {product.name}
          </h1>
          <p className="mt-6 text-lg max-w-md" style={{ color: "hsl(var(--charcoal) / 0.7)", lineHeight: 1.6 }}>
            {product.tagline}
          </p>

          {/* Variants (Type D / C / B) */}
          {product.variants && (
            <div className="mt-10 flex flex-col gap-6">
              {product.variants.map((v, vi) => {
                const asBoxes = v.options.some((o) => o.includes(" — "));
                const asDropdown = v.options.length > 8;
                return (
                  <div key={v.label}>
                    <div className="eyebrow mb-3">{v.label}</div>
                    {asDropdown ? (
                      <select
                        value={vSel[vi] ?? 0}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          setVSel((s) => s.map((x, i) => (i === vi ? val : x)));
                        }}
                        className="w-full appearance-none transition-all"
                        style={{
                          borderRadius: 999,
                          padding: "16px 24px",
                          border: "1px solid hsl(var(--charcoal) / 0.2)",
                          background: "hsl(var(--stone))",
                          color: "hsl(var(--charcoal))",
                          fontSize: 15,
                          fontWeight: 500,
                          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2367e8f9' stroke-width='2'%3e%3cpolyline points='6 9 12 15 18 9'/%3e%3c/svg%3e")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 20px center",
                          paddingRight: 48,
                        }}
                      >
                        {v.options.map((opt, oi) => (
                          <option key={opt} value={oi}>{opt.replace(" — ", " — ")}</option>
                        ))}
                      </select>
                    ) : asBoxes ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {v.options.map((opt, oi) => {
                          const active = vSel[vi] === oi;
                          const [title, sub] = opt.split(" — ");
                          return (
                            <button
                              key={opt}
                              onClick={() => setVSel((s) => s.map((x, i) => (i === vi ? oi : x)))}
                              className="text-left transition-all"
                              style={{
                                borderRadius: "0.9rem",
                                padding: "12px 14px",
                                border: active ? "2px solid hsl(var(--neon-magenta))" : "1px solid hsl(var(--line))",
                                background: active ? "hsl(var(--neon-magenta) / 0.14)" : "hsl(var(--stone))",
                              }}
                            >
                              <div style={{ color: "hsl(var(--charcoal))", fontWeight: 600, fontSize: 13, lineHeight: 1.25 }}>{title}</div>
                              {sub && (
                                <div className="mt-1" style={{ color: "hsl(var(--charcoal) / 0.6)", fontSize: 11, lineHeight: 1.35 }}>{sub}</div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {v.options.map((opt, oi) => {
                          const active = vSel[vi] === oi;
                          return (
                            <button
                              key={opt}
                              className="ps-pill-btn transition-all"
                              onClick={() => setVSel((s) => s.map((x, i) => (i === vi ? oi : x)))}
                              style={{
                                borderRadius: 82,
                                padding: "12px 22px",
                                fontSize: 13,
                                fontWeight: 500,
                                border: "1px solid hsl(var(--line))",
                                backgroundImage: active ? "var(--gradient-cta)" : "none",
                                background: active ? undefined : "hsl(var(--stone))",
                                color: active ? "#fff" : "hsl(var(--charcoal))",
                              }}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Duration plans (Type B / C) */}
          {product.durations && (
            <div className="mt-10">
              <div className="eyebrow mb-3">Plan Duration</div>
              <div className="grid grid-cols-2 gap-3">
                {product.durations.map((d, i) => {
                  const active = duration === i;
                  const saving = product.priceLabel === "Package" || i === 0 ? 0 : Math.round((1 - d.price / (product.durations![0].price * (parseInt(d.label) || 1))) * 100);
                  return (
                    <button
                      key={d.sku}
                      onClick={() => setDuration(i)}
                      className="ps-plan-btn text-left transition-all"
                      style={{
                        borderRadius: "1.2rem",
                        padding: "20px 22px",
                        border: active ? "2px solid hsl(var(--neon-magenta))" : "1px solid hsl(var(--line))",
                        background: active ? "hsl(var(--neon-magenta) / 0.14)" : "hsl(var(--stone))",
                      }}
                    >
                      <div style={{ color: "hsl(var(--charcoal))", fontWeight: 500, fontSize: 16 }}>{d.label}</div>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span style={{ color: "hsl(var(--charcoal))", fontWeight: 600 }}>${d.price.toFixed(2)}</span>
                        {saving > 5 && (
                          <span className="eyebrow" style={{ color: "hsl(var(--terracotta))" }}>Save {saving}%</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Price */}
          <div className="mt-12 flex items-end gap-4">
            <div>
              {product.priceLabel && <div className="eyebrow mb-2">{product.priceLabel}</div>}
              <div
                className="ps-price"
                style={{ fontSize: 48, fontWeight: 700, color: "hsl(var(--charcoal))", letterSpacing: "-0.03em", lineHeight: 1 }}
              >
                ${summaryPrice}
              </div>
            </div>
            {summarySublabel && (
              <div className="eyebrow pb-2">{summarySublabel}</div>
            )}
          </div>

          {/* CTA */}
          <button
            onClick={handleClick}
            className="mt-8 inline-flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              backgroundImage: btnBg,
              color: "#fff",
              boxShadow: "0 16px 48px -14px hsl(var(--neon-magenta) / 0.85)",
              height: 56,
              padding: "0 36px",
              fontSize: 14,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 500,
              borderRadius: 999,
            }}
          >
            {btnLabel}
          </button>

          {/* Trust badges */}
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRUST.map((t) => (
              <li key={t} className="flex items-start gap-3" style={{ color: "hsl(var(--charcoal))" }}>
                <Check className="w-4 h-4 mt-1 shrink-0" strokeWidth={2.5} style={{ color: "hsl(var(--terracotta))" }} />
                <span className="text-sm">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
