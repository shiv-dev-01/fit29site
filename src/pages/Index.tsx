import Header from "@/components/site/Header";
import VyveHero from "@/components/site/VyveHero";
import TrustBar from "@/components/site/TrustBar";
import TherapyShowcase from "@/components/site/TherapyShowcase";

import Mission from "@/components/site/Mission";
import ProductsCarousel from "@/components/site/ProductsCarousel";
import Steps from "@/components/site/Steps";
import FAQ from "@/components/site/FAQ";
import Footer from "@/components/site/Footer";

import weightMen from "@/assets/cat-weight-men.jpg";
import weightWomen from "@/assets/cat-weight-women.jpg";
import hrtMen from "@/assets/cat-hrt-men.jpg";
import hrtWomen from "@/assets/cat-hrt-women.jpg";
import longevityMen from "@/assets/cat-longevity-men.jpg";
import longevityWomen from "@/assets/cat-longevity-women.jpg";

import { useAudience } from "@/lib/audience";

const MEN_PACKAGE_SLUGS = ["sema-starter-man","sema-transformation","sema-year-commitment","tirzepatide-accelerator","tirzepatide-elite","trt-foundation","daily-ed-performance","hair-performance","mens-longevity-protocol","complete-optimization-man"];
const WOMEN_PACKAGE_SLUGS = ["womens-sema-starter","sema-glow-starter","sema-radiance","tirzepatide-skin","womens-year-of-transformation","pure-skin-renewal","hormone-continuity-metabolic","womens-sexual-wellness","longevity-goddess-protocol","complete-womens-optimization"];

const Index = () => {
  const [audience] = useAudience();
  const isMen = audience === "men";

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div style={{ paddingTop: 84 }} />
      <VyveHero />
      <TrustBar />

      <TherapyShowcase
        id="weight-loss"
        eyebrow="Weight & Metabolic Optimization"
        title="Weight Loss"
        bg="hsl(var(--stone))"
        neon="cyan"
        featured={{
          slug: "semaglutide",
          headline: "Your body. Transformed. With clinical precision.",
          sub: "GLP-1 and dual-incretin therapies calibrated to your physiology, with ongoing medical oversight.",
          lifestyle: isMen ? weightMen : weightWomen,
        }}
        products={[
          { slug: "semaglutide", bullets: ["Weight Management", "GLP-1 Receptor Therapy", "Appetite Control Support"] },
          { slug: "tirzepatide", bullets: ["Weight Management", "Dual GLP-1 & GIP Therapy", "Appetite Control Support"] },
          { slug: "metformin", bullets: ["Individualized Dosing", "Prescription Therapy", "Built for Better Metabolism"] },
        ]}
      />

      <TherapyShowcase
        id="hrt"
        eyebrow="HRT & Hormone Optimization"
        title={isMen ? "Testosterone Replacement Therapy" : "Hormone & Vitality Optimization"}
        reverse
        neon="magenta"
        featured={{
          slug: isMen ? "sermorelin" : "sermorelin",
          headline: isMen
            ? "Reignite energy, muscle tone and overall vitality."
            : "Restore balance, energy and radiant vitality.",
          sub: isMen
            ? "Physician-led hormone protocols personalized to your bloodwork — designed to restore drive, recovery, and performance."
            : "Physician-led hormone and peptide protocols personalized to your bloodwork — designed to restore energy, mood and recovery.",
          lifestyle: isMen ? hrtMen : hrtWomen,
        }}
        products={
          isMen
            ? [
                { slug: "sermorelin", bullets: ["Peptide Therapy", "Sleep Quality Support", "Provider-Guided Treatment"] },
                { slug: "pt-141", bullets: ["Libido & Desire Support", "Discreet Protocol", "Physician-Guided"] },
              ]
            : [
                { slug: "sermorelin", bullets: ["Peptide Therapy", "Sleep Quality Support", "Provider-Guided Treatment"] },
                { slug: "pt-141", bullets: ["Libido & Desire Support", "Discreet Protocol", "Physician-Guided"] },
              ]
        }
      />

      <TherapyShowcase
        id="longevity"
        eyebrow="Longevity & Cellular Health"
        title="Glutathione & Cellular Energy"
        neon="aqua"
        featured={{
          slug: "glutathione",
          headline: "Endurance and focus, naturally.",
          sub: "Healthspan protocols for sustained cellular function — recharge from within, age with intention.",
          lifestyle: isMen ? longevityMen : longevityWomen,
        }}
        products={[
          { slug: "nad-injectable", bullets: ["Recharge from Within", "Next-Level Energy Support", "Healthy Aging"] },
          { slug: "glutathione", bullets: ["Injectable Formula", "Structured Dosing", "Powerful Antioxidant"] },
        ]}
      />

      <div id="packages">
        <ProductsCarousel
          eyebrow={isMen ? "Men's Packages" : "Women's Packages"}
          title={<>Multi-month <span className="serif-italic">packages</span>.</>}
          slugs={isMen ? MEN_PACKAGE_SLUGS : WOMEN_PACKAGE_SLUGS}
        />
      </div>

      <Mission />
      <ProductsCarousel />
      <Steps />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
