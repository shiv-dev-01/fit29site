import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Turnstile } from "@marsidev/react-turnstile";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { checkoutUrl, clearCart, onCartChange, readCart, removeFromCart, type CartItem } from "@/lib/cart";
import { TURNSTILE_SITE_KEY } from "@/lib/turnstile";
import { ArrowLeft, X } from "lucide-react";

export default function Cart() {
  const navigate = useNavigate();
  const [items, setItems] = useState<CartItem[]>([]);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Cart — FIT29";
    window.scrollTo(0, 0);
    setItems(readCart());
    return onCartChange(() => setItems(readCart()));
  }, []);

  const total = items.reduce((s, i) => s + i.price, 0);

  const placeOrder = () => {
    if (!turnstileToken) return;
    const base = checkoutUrl();
    const url = `${base}${base.includes("?") ? "&" : "?"}turnstileToken=${encodeURIComponent(turnstileToken)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div style={{ paddingTop: 84 }} />
      <section className="section-pad">
        <div className="site-container">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sm transition-colors hover:opacity-70"
              style={{ color: "hsl(var(--charcoal) / 0.7)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
              Back
            </button>
            {items.length > 0 && (
              <button
                onClick={() => clearCart()}
                className="text-sm transition-colors hover:opacity-70"
                style={{ color: "hsl(var(--charcoal) / 0.7)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}
              >
                Clear Cart
              </button>
            )}
          </div>
          <span className="eyebrow mt-8 inline-block">Your Selection</span>
          <h1 className="display-lg mt-6 neon-headline neon-magenta">
            Cart <span className="serif-italic" style={{ color: "hsl(var(--deep-forest))" }}>review</span>
          </h1>

          {items.length === 0 ? (
            <div className="mt-16 py-24 text-center" style={{ borderTop: "1px solid hsl(var(--line))", borderBottom: "1px solid hsl(var(--line))" }}>
              <p className="text-base mb-8" style={{ color: "hsl(var(--charcoal) / 0.6)" }}>Your cart is empty.</p>
              <Link to="/" className="btn-pill">Return Home</Link>
            </div>
          ) : (
            <div className="mt-12 grid grid-cols-12 gap-12">
              <ul className="col-span-12 lg:col-span-8" style={{ borderTop: "1px solid hsl(var(--line))" }}>
                {items.map((i) => (
                  <li key={i.sku} className="flex items-center gap-6 py-8" style={{ borderBottom: "1px solid hsl(var(--line))" }}>
                    <div
                      className="shrink-0 overflow-hidden"
                      style={{ width: 100, height: 100, borderRadius: "1rem", background: "hsl(var(--stone))" }}
                    >
                      <img src={i.image} alt="" className="w-full h-full object-contain p-3" />
                    </div>
                    <div className="flex-1">
                      <div style={{ color: "hsl(var(--charcoal))", fontWeight: 500 }}>{i.name}</div>
                      <div className="eyebrow mt-2">SKU · {i.sku}</div>
                    </div>
                    <div className="text-right" style={{ color: "hsl(var(--charcoal))", fontWeight: 600 }}>
                      ${i.price.toFixed(2)}
                    </div>
                    <button onClick={() => removeFromCart(i.sku)} aria-label="Remove" style={{ color: "hsl(var(--charcoal) / 0.5)" }}>
                      <X className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                  </li>
                ))}
              </ul>

              <aside
                className="col-span-12 lg:col-span-4 p-8"
                style={{ background: "hsl(var(--stone))", borderRadius: "1.2rem", alignSelf: "start" }}
              >
                <div className="eyebrow">Order Total</div>
                <div className="mt-3" style={{ fontSize: 48, fontWeight: 700, color: "hsl(var(--charcoal))", letterSpacing: "-0.03em" }}>
                  ${total.toFixed(2)}
                </div>
                <p className="mt-3 text-sm" style={{ color: "hsl(var(--charcoal) / 0.6)" }}>
                  Clinical review and discreet shipping included.
                </p>
                <div className="mt-8">
                  <Turnstile
                    siteKey={TURNSTILE_SITE_KEY}
                    onSuccess={(token) => setTurnstileToken(token)}
                    onExpire={() => setTurnstileToken(null)}
                    onError={() => setTurnstileToken(null)}
                    options={{ theme: "auto", size: "flexible" }}
                  />
                </div>
                <button
                  type="button"
                  onClick={placeOrder}
                  disabled={!turnstileToken}
                  className="btn-pill w-full mt-4 inline-flex justify-center"
                  style={!turnstileToken ? { opacity: 0.5, cursor: "not-allowed" } : undefined}
                >
                  Secure Checkout
                </button>
                {!turnstileToken && (
                  <p className="mt-3 text-xs text-center" style={{ color: "hsl(var(--charcoal) / 0.55)" }}>
                    Complete the verification above to continue.
                  </p>
                )}
              </aside>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
