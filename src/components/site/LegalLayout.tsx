import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div
        className="atmos"
        style={{
          background: "hsl(var(--panel))",
          color: "hsl(var(--charcoal))",
          paddingTop: 200,
          paddingBottom: 140,
          borderBottom: "1px solid hsl(var(--line))",
        }}
      >
        <div className="site-container">
          <h1
            className="neon-headline neon-violet"
            style={{
              fontSize: "clamp(1.75rem, 0.9rem + 3.6vw, 3.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "hsl(var(--charcoal))",
              fontWeight: 700,
            }}
          >
            {title}
          </h1>
        </div>
      </div>

      <main className="site-container" style={{ paddingTop: 80, paddingBottom: 120 }}>
        {lastUpdated && (
          <p className="text-sm" style={{ color: "hsl(var(--charcoal) / 0.75)" }}>
            {lastUpdated}
          </p>
        )}
        <div
          className="mt-10 space-y-6 body-lg legal-content"
          style={{ color: "hsl(var(--charcoal) / 0.82)" }}
        >
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-8">
      <h2 className="display-sm mb-4" style={{ color: "hsl(var(--charcoal))" }}>
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function LegalLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <a
      href={href}
      className="underline"
      style={{ color: "hsl(var(--deep-forest))" }}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
