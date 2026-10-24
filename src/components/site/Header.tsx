import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { cartCount, onCartChange } from "@/lib/cart";
import {
  useAudience,
  MEN_CATEGORIES,
  WOMEN_CATEGORIES,
  type Audience,
  type Category,
} from "@/lib/audience";

const NAV: { label: string; href: string }[] = [];


export default function Header() {
  
  const [scrolled, setScrolled] = useState(false);
  const [count, setCount] = useState(0);
  const [audience, setAudience] = useAudience();
  const [megaOpen, setMegaOpen] = useState<Audience | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    setCount(cartCount());
    const off = onCartChange(() => setCount(cartCount()));
    return () => {
      window.removeEventListener("scroll", onScroll);
      off();
    };
  }, []);

  const categories = megaOpen === "women" ? WOMEN_CATEGORIES : MEN_CATEGORIES;

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 transition-all duration-300"
        style={{
          zIndex: 9999,
          backgroundColor: scrolled || megaOpen ? "hsl(var(--warm-ivory) / 0.88)" : "hsl(var(--warm-ivory))",
          backdropFilter: "blur(18px)",
          borderBottom:
            scrolled || megaOpen
              ? "1px solid hsl(var(--neon-violet) / 0.32)"
              : "1px solid transparent",
          boxShadow: scrolled || megaOpen ? "0 18px 50px -30px hsl(var(--neon-magenta) / 0.7)" : "none",
        }}
        onMouseLeave={() => setMegaOpen(null)}
      >
        <div
          className="site-container flex items-center justify-between"
          style={{
            paddingTop: scrolled ? 16 : 22,
            paddingBottom: scrolled ? 16 : 22,
            transition: "padding 500ms",
          }}
        >
          <a
            href="/"
            className="font-light tracking-[-0.04em]"
            style={{ fontSize: 22, color: "hsl(var(--charcoal))" }}
          >
            FIT<span className="neon-gradient-text" style={{ fontWeight: 600 }}>29</span>
          </a>

          {/* Audience tabs (the new mega-menu trigger) */}
          <div className="hidden md:flex items-center gap-2">
            {(["men", "women"] as Audience[]).map((a) => {
              const active = audience === a;
              return (
                <button
                  key={a}
                  onMouseEnter={() => setMegaOpen(a)}
                  onClick={() => {
                    setAudience(a);
                    setMegaOpen(megaOpen === a ? null : a);
                  }}
                  className="px-6 py-2 transition-colors"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    color: active
                      ? "hsl(var(--charcoal))"
                      : "hsl(var(--charcoal) / 0.55)",
                    borderBottom: active
                      ? "1px solid hsl(var(--neon-cyan))"
                      : "1px solid transparent",
                  }}
                >
                  For {a}
                </button>
              );
            })}
          </div>


          <div className="flex items-center gap-6">
            <Link
              to="/cart"
              aria-label="Cart"
              className="relative"
              style={{ color: "hsl(var(--charcoal))" }}
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.2} />
              {count > 0 && (
                <span
                  className="absolute -top-2 -right-2 flex items-center justify-center rounded-full"
                  style={{
                    background: "hsl(var(--terracotta))",
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 600,
                    minWidth: 18,
                    height: 18,
                    padding: "0 5px",
                  }}
                >
                  {count}
                </span>
              )}
            </Link>
            <a
              href="https://member.fit29.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 transition-opacity hover:opacity-80"
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "#fff",
                backgroundImage: "var(--gradient-cta)",
                boxShadow: "0 12px 36px -12px hsl(var(--neon-magenta) / 0.75)",
                borderRadius: 9999,
              }}
            >
              Sign In
            </a>

          </div>
        </div>

        {/* Mega-menu panel */}
        <div
          className="overflow-hidden transition-all duration-300"
          style={{
            maxHeight: megaOpen ? 900 : 0,
            opacity: megaOpen ? 1 : 0,
            borderTop: megaOpen
              ? "1px solid hsl(var(--neon-cyan) / 0.22)"
              : "1px solid transparent",
            background: "linear-gradient(180deg, hsl(var(--stone)) 0%, hsl(var(--panel)) 100%)",
          }}
        >
          <div className="site-container py-6 lg:py-7">
            <div
              className="mb-6"
              style={{
                fontSize: 10,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "hsl(var(--charcoal) / 0.5)",
              }}
            >
              Protocols for {megaOpen}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
              {categories.map((c: Category) => (
                <div key={c.label}>
                  <a
                    href={c.href}
                    onClick={() => setMegaOpen(null)}
                    className="block mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 16,
                      color: "hsl(var(--neon-aqua))",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {c.label}
                  </a>
                  <ul className="flex flex-col gap-1.5">
                    {c.therapies.map((t) => (
                      <li key={t.href}>
                        <Link
                          to={t.href}
                          onClick={() => setMegaOpen(null)}
                          className="hover:!text-[hsl(var(--charcoal))] transition-colors"
                          style={{
                            fontSize: 13,
                            color: "hsl(var(--charcoal) / 0.65)",
                          }}
                        >
                          {t.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

    </>
  );
}
