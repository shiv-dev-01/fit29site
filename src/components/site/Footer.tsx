export default function Footer() {
  const programsCol1 = [
    { l: "Sermorelin", h: "/product/sermorelin" },
    { l: "Semaglutide", h: "/product/semaglutide" },
    { l: "Tirzepatide", h: "/product/tirzepatide" },
    { l: "Metformin", h: "/product/metformin" },
    { l: "NAD+ Injectable", h: "/product/nad-injectable" },
    { l: "Glutathione", h: "/product/glutathione" },
    { l: "Erectile Dysfunction", h: "/product/erectile-dysfunction" },
    { l: "Premature Ejaculation", h: "/product/premature-ejaculation" },
  ];
  const programsCol2 = [
    { l: "PT-141", h: "/product/pt-141" },
    { l: "Herpes", h: "/product/herpes" },
    { l: "Cold Sores", h: "/product/cold-sores" },
    { l: "Men's Hair Loss", h: "/product/mens-hair-loss" },
    { l: "Women's Hair Loss", h: "/product/womens-hair-loss" },
    { l: "Eyelash Treatment", h: "/product/eyelash-treatment" },
    { l: "Skincare", h: "/product/skincare" },
    { l: "Birth Control", h: "/product/birth-control" },
    { l: "Acid Reflux", h: "/product/acid-reflux" },
    { l: "Smoking Cessation", h: "/product/smoking-cessation" },
  ];
  const legal = [
    { l: "Privacy Policy", h: "/privacy" },
    { l: "Terms of Use", h: "/terms" },
    { l: "HIPAA Notice", h: "/hipaa" },
    { l: "Returns & Refund", h: "/returns" },
    { l: "CCPA Opt-Out", h: "/ccpa" },
    { l: "SMS Terms & Conditions", h: "/sms-terms" },
  ];
  const support = [
    { l: "Contact", h: "/contact" },
    { l: "FAQ", h: "/faq" },
    { l: "About Us", h: "/about" },
  ];

  return (
    <footer
      id="footer"
      style={{ background: "hsl(var(--panel))", color: "hsl(var(--charcoal))", paddingTop: 80, paddingBottom: 32 }}
    >
      <div className="site-container">
        <div className="grid grid-cols-12 gap-10">
          {/* Brand + tagline */}
          <div className="col-span-12 lg:col-span-3">
            <span
              className="font-light tracking-[-0.04em]"
              style={{ fontSize: 22, color: "hsl(var(--charcoal))", display: "inline-block" }}
            >
              FIT<span style={{ color: "hsl(var(--soft-gold))" }}>29</span>
            </span>
            <p className="mt-6 text-[15px] max-w-xs" style={{ color: "hsl(var(--charcoal) / 0.65)", lineHeight: 1.65 }}>
              Personalized medical care for energy, hormones, metabolism, and healthspan — delivered discreetly to your door.
            </p>
          </div>


          {/* Programs — two columns */}
          <div className="col-span-12 lg:col-span-6">
            <span className="eyebrow eyebrow-gold">Programs</span>
            <div className="mt-6 grid grid-cols-2 gap-8">
              <FooterList items={programsCol1} />
              <FooterList items={programsCol2} />
            </div>
          </div>

          {/* Legal + Support stacked */}
          <div className="col-span-12 lg:col-span-3">
            <span className="eyebrow eyebrow-gold">Legal</span>
            <FooterList items={legal} className="mt-6" />

            <span className="eyebrow eyebrow-gold mt-10 inline-block">Support</span>
            <FooterList items={support} className="mt-6" />
          </div>

        </div>

        <div
          className="mt-20 pt-6"
          style={{ borderTop: "1px solid hsl(var(--line) / 0.7)", color: "hsl(var(--charcoal) / 0.55)", fontSize: 13 }}
        >
          © {new Date().getFullYear()} fit29.com All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterList({ items, className = "" }: { items: { l: string; h: string }[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((i) => (
        <li key={i.l}>
          <a
            href={i.h}
            className="text-[15px] transition-colors hover:!text-[hsl(var(--soft-gold))]"
            style={{ color: "hsl(var(--charcoal) / 0.85)", fontWeight: 300, transitionDuration: "0.2s" }}
          >
            {i.l}
          </a>
        </li>
      ))}
    </ul>
  );
}
