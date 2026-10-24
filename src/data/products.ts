import imgSermorelin from "@/assets/products/sermorelin.png";
import imgSema from "@/assets/products/semaglutide.png";
import imgTirz from "@/assets/products/tirzepatide.png";
import imgMetformin from "@/assets/products/metformin.png";
import imgNad from "@/assets/products/nad.png";
import imgNadNasal from "@/assets/products/nad-nasal.png";

import imgTadalafil from "@/assets/products/tadalafil.png";
import imgSildenafil from "@/assets/products/sildenafil.png";
import imgPropranolol from "@/assets/products/propranolol.png";
import imgPT141 from "@/assets/products/pt-141.png";
import imgFinasteride from "@/assets/products/finasteride.png";
import imgHairMen from "@/assets/products/hairloss-men.png";
import imgHairWomen from "@/assets/products/hairloss-women.png";
import imgBimatoprost from "@/assets/products/bimatoprost.png";
import imgSkincare from "@/assets/products/skincare.png";
import imgHerpes from "@/assets/products/herpes.png";
import imgOmeprazole from "@/assets/products/omeprazole.png";
import imgAcidReflux from "@/assets/products/acidreflux.png";
import imgBuproprion from "@/assets/products/buproprion.png";
import imgBirthControl from "@/assets/products/birth-control.png";
import imgGlutathione from "@/assets/products/glutathione.png";
import imgTrt from "@/assets/products/trt.png";
import lifestyleMens from "@/assets/cat-mens.jpg";
import lifestyleWomens from "@/assets/cat-womens.jpg";
import lifestyleWeight from "@/assets/cat-weight.jpg";
import lifestyleLongevity from "@/assets/cat-longevity.jpg";
import { productFaqsBySlug } from "./productFaqs";

// Aliases mapped to generated mockups
const vial = imgNad;
const pen = imgSema;
const bottle = imgOmeprazole;

export type PricingType = "A" | "B" | "C" | "D";

export type DurationVariant = { label: string; sku: string; price: number; checkoutUrl?: string };

export type Product = {
  id: number;
  slug: string;
  name: string;
  subhead: string;
  tagline: string;
  image: string;
  lifestyle: string;
  pricingType: PricingType;
  priceLabel?: string;
  priceSublabel?: string;
  basePrice: number;
  baseSku: string;
  formName?: string;
  description: string;
  benefits?: string[];
  indicators?: string[];
  risks?: string[];
  timeline?: string;
  durations?: DurationVariant[];
  variants?: { label: string; options: string[] }[];
  variantImages?: Record<string, string>;
  variantCheckouts?: Record<string, { sku: string; price: number; url: string }>;
  checkoutUrl?: string;
  faqs?: { q: string; a: string }[];
};

const standardFaqs = (name: string) => [
  { q: `How do I get started with ${name}?`, a: "Complete a confidential intake. A US-licensed physician reviews your profile, holds a virtual consult, and prescribes if appropriate." },
  { q: "Is a prescription required?", a: "Yes. Care is physician-led. Eligibility is reviewed individually." },
  { q: "How is the medication shipped?", a: "Compounded by our licensed pharmacy partners and shipped in discreet, unmarked packaging." },
  { q: "Can I cancel anytime?", a: "Yes. Membership and protocols can be paused or canceled from your patient portal." },
];

export const products: Product[] = [
  {
    id: 3, slug: "sermorelin", name: "Sermorelin", subhead: "Live Longer, Function Better.",
    tagline: "Live Longer, Function Better.",
    image: imgSermorelin, lifestyle: lifestyleLongevity,
    pricingType: "A", priceLabel: "Starting at", priceSublabel: "",
    basePrice: 195.0, baseSku: "SERM-30-1B",
    checkoutUrl: "https://checkout.fit29.com/?id=63",
    description: "GHRH peptide analog. Stimulates natural HGH production.",
    durations: [
      { label: "1 Month Supply", sku: "SERM-30-1B", price: 195.0, checkoutUrl: "https://checkout.fit29.com/?id=63" },
      { label: "3 Month Supply", sku: "SERM-30-3B", price: 575.0, checkoutUrl: "https://checkout.fit29.com/?id=64" },
      { label: "6 Month Supply", sku: "SERM-6M", price: 1170.0, checkoutUrl: "https://checkout.fit29.com/?id=65" },
      { label: "12 Month Supply", sku: "SERM-12M", price: 2340.0, checkoutUrl: "https://checkout.fit29.com/?id=66" },
    ],
    benefits: ["Stimulates natural HGH", "Improves fat metabolism", "Enhances skin elasticity", "Supports deeper sleep", "Boosts recovery"],
    risks: ["Injection site reactions", "Headache", "Nausea", "Dizziness", "Hyperactivity", "Flushing", "Tingling"],
    timeline: "Week 1-2: improved sleep/energy · Month 2: fewer wrinkles, better hair/nails · Month 3+: fat loss, muscle gain.",
  },
  {
    id: 4, slug: "semaglutide", name: "Semaglutide", subhead: "Doctor-Guided Weight Loss",
    tagline: "Doctor-Guided Weight Loss",
    image: imgSema, lifestyle: lifestyleWeight,
    pricingType: "B", priceLabel: "Starting at", priceSublabel: "PER MONTH",
    basePrice: 190.0, baseSku: "SEMA-0.5MG-30-D",
    description: "GLP-1 medication for weight management. Compounded, not FDA-approved.",
    durations: [
      { label: "1 Month", sku: "SEMA-0.5MG-30-D", price: 190.0, checkoutUrl: "https://checkout.fit29.com/?id=2" },
      { label: "3 Months", sku: "SG-MAINT-S3-A", price: 399.0, checkoutUrl: "https://checkout.fit29.com/?id=47" },
      { label: "6 Months", sku: "SEMA-0.5MG-30-D-6M", price: 820.0, checkoutUrl: "https://checkout.fit29.com/?id=35" },
      { label: "12 Months", sku: "SEMA-0.5MG-30-D-12M", price: 1670.0, checkoutUrl: "https://checkout.fit29.com/?id=41" },
    ],
    benefits: ["Your Dose, One Price — flat monthly rate, no hidden fees regardless of dosage adjustments."],
    risks: ["Nausea", "Vomiting", "Diarrhea", "Hypoglycemia risk", "Thyroid tumor risk (rodent studies)", "Not for pancreatitis history"],
  },
  {
    id: 5, slug: "tirzepatide", name: "Tirzepatide", subhead: "Doctor-Guided Weight Loss",
    tagline: "Doctor-Guided Weight Loss",
    image: imgTirz, lifestyle: lifestyleWeight,
    pricingType: "B", priceLabel: "Starting at", priceSublabel: "PER MONTH",
    basePrice: 239.0, baseSku: "TIRZ-CR1",
    description: "Dual GLP-1 & GIP therapy. Uses the same protocol structure and inclusions as the Semaglutide framework.",
    durations: [
      { label: "1 Month", sku: "TIRZ-CR1", price: 239.0, checkoutUrl: "https://checkout.fit29.com/?id=7" },
      { label: "3 Months", sku: "TZ-MAINT-T1-A", price: 649.0, checkoutUrl: "https://checkout.fit29.com/?id=54" },
      { label: "6 Months", sku: "TIRZ-CR1-6M", price: 1199.0, checkoutUrl: "https://checkout.fit29.com/?id=23" },
      { label: "12 Months", sku: "TIRZ-CR1-12M", price: 2190.0, checkoutUrl: "https://checkout.fit29.com/?id=29" },
    ],
  },

  {
    id: 6, slug: "metformin", name: "Metformin", subhead: "Live Longer, Function Better",
    tagline: "Live Longer, Function Better",
    image: imgMetformin, lifestyle: lifestyleLongevity,
    pricingType: "A", priceLabel: "Starting at", priceSublabel: "",
    basePrice: 25.0, baseSku: "METFORM-1M",
    checkoutUrl: "https://checkout.fit29.com/?id=73",
    description: "Caloric restriction mimetic for longevity. Off-label metabolic health.",
    durations: [
      { label: "1 Month", sku: "METFORM-1M", price: 25.0, checkoutUrl: "https://checkout.fit29.com/?id=73" },
      { label: "3 Months", sku: "CRM-ANTIAGE-METFORM-3M", price: 75.0, checkoutUrl: "https://checkout.fit29.com/?id=67" },
      { label: "6 Months", sku: "METFORM-6M", price: 150.0, checkoutUrl: "https://checkout.fit29.com/?id=74" },
      { label: "12 Months", sku: "METFORM-12M", price: 300.0, checkoutUrl: "https://checkout.fit29.com/?id=75" },
    ],
    benefits: ["Enhances insulin sensitivity", "May reduce visceral fat", "Supports mitochondrial function", "May reduce age-related diseases", "Activates AMPK/autophagy"],
    risks: ["Nausea", "Diarrhea", "Gas", "Metallic taste", "B12 deficiency (annual check)", "Lactic acidosis (rare)"],
    timeline: "Week 1-2: blood sugar/appetite control · Week 4+: energy, fat loss, clarity.",
  },
  {
    id: 7, slug: "nad-injectable", name: "NAD+ Injectable", subhead: "Brain + body energy protocol",
    tagline: "Brain + body energy protocol",
    image: imgNad, lifestyle: lifestyleLongevity,
    pricingType: "A", priceLabel: "Starting at", priceSublabel: "",
    basePrice: 299.0, baseSku: "CRM-NAD-INJ-1M",
    checkoutUrl: "https://checkout.fit29.com/?id=91",
    description: "Mitochondrial support therapy. IM or Sub-q injection.",
    durations: [
      { label: "1 Month", sku: "CRM-NAD-INJ-1M", price: 299.0, checkoutUrl: "https://checkout.fit29.com/?id=91" },
      { label: "3 Months", sku: "NADINJ-3M", price: 897.0, checkoutUrl: "https://checkout.fit29.com/?id=92" },
      { label: "6 Months", sku: "NADINJ-6M", price: 1794.0, checkoutUrl: "https://checkout.fit29.com/?id=93" },
      { label: "12 Months", sku: "NADINJ-12M", price: 3588.0, checkoutUrl: "https://checkout.fit29.com/?id=94" },
    ],
    benefits: ["Cellular Energy & Mitochondrial Function", "DNA Repair & Sirtuin Activation", "Whole-Body Anti-Aging Support"],
    risks: ["Injection site soreness", "Warm flushing", "Headache", "Nausea", "Fatigue", "Anxiety (rare)"],
  },
  {
    id: 8, slug: "glutathione", name: "Glutathione", subhead: "Endurance and focus, naturally.",
    tagline: "Endurance and focus, naturally.",
    image: imgGlutathione, lifestyle: lifestyleLongevity,
    pricingType: "A", priceLabel: "Starting at", priceSublabel: "",
    basePrice: 57.32, baseSku: "CRM-GLUTATH-1M",
    checkoutUrl: "https://checkout.fit29.com/?id=76",
    description: "Body's most powerful antioxidant. Injectable for superior bioavailability.",
    durations: [
      { label: "1 Month", sku: "CRM-GLUTATH-1M", price: 57.32, checkoutUrl: "https://checkout.fit29.com/?id=76" },
      { label: "3 Months", sku: "GLUTA-3M", price: 171.96, checkoutUrl: "https://checkout.fit29.com/?id=77" },
      { label: "6 Months", sku: "GLUTA-6M", price: 343.92, checkoutUrl: "https://checkout.fit29.com/?id=78" },
      { label: "12 Months", sku: "GLUTA-12M", price: 687.84, checkoutUrl: "https://checkout.fit29.com/?id=79" },
    ],
    benefits: ["Detoxification", "Immune support", "Mitochondrial function", "Cellular repair", "Combats oxidative stress", "Liver support", "Skin clarity"],
  },
  {
    id: 10, slug: "erectile-dysfunction", name: "Erectile Dysfunction", subhead: "Most trusted ED medications at low prices!",
    tagline: "Most trusted ED medications at low prices!",
    image: imgTadalafil, lifestyle: lifestyleMens,
    variantImages: { Sildenafil: imgSildenafil, Tadalafil: imgTadalafil },
    pricingType: "D", priceLabel: "Starting at", priceSublabel: "PER MONTH",
    basePrice: 60.0, baseSku: "SILD-100MG-6-6-1B",
    checkoutUrl: "https://checkout.fit29.com/?id=131",
    description: "PDE5 inhibitors for ED. Sildenafil (4-6hrs duration) vs Tadalafil (up to 36hrs duration).",
    variants: [
      { label: "Medication", options: ["Sildenafil 100mg", "Sildenafil 50mg", "Tadalafil 10mg", "Tadalafil 20mg", "Tadalafil Daily 2.5mg", "Tadalafil Daily 5mg"] },
      { label: "Pills / Month", options: ["6", "8", "10", "12", "14"] },
      { label: "Plan Duration", options: ["1 Month", "3 Months", "6 Months", "12 Months"] },
    ],
    variantCheckouts: {
      "Sildenafil 100mg|10|1 Month": { sku: "SILD-100MG-10-10-1B", price: 100.0, url: "https://checkout.fit29.com/?id=118" },
      "Sildenafil 100mg|12|1 Month": { sku: "SILD-100MG-12-12-1B", price: 120.0, url: "https://checkout.fit29.com/?id=119" },
      "Sildenafil 100mg|10|12 Months": { sku: "SILD-100MG-120-10-12B", price: 720.0, url: "https://checkout.fit29.com/?id=120" },
      "Sildenafil 100mg|14|1 Month": { sku: "SILD-100MG-14-14-1B", price: 140.0, url: "https://checkout.fit29.com/?id=121" },
      "Sildenafil 100mg|12|12 Months": { sku: "SILD-100MG-144-12-12B", price: 864.0, url: "https://checkout.fit29.com/?id=122" },
      "Sildenafil 100mg|14|12 Months": { sku: "SILD-100MG-168-14-12B", price: 1008.0, url: "https://checkout.fit29.com/?id=123" },
      "Sildenafil 100mg|6|3 Months": { sku: "SILD-100MG-18-6-3B", price: 153.0, url: "https://checkout.fit29.com/?id=124" },
      "Sildenafil 100mg|8|3 Months": { sku: "SILD-100MG-24-8-3B", price: 204.0, url: "https://checkout.fit29.com/?id=125" },
      "Sildenafil 100mg|10|3 Months": { sku: "SILD-100MG-30-10-3B", price: 255.0, url: "https://checkout.fit29.com/?id=126" },
      "Sildenafil 100mg|12|3 Months": { sku: "SILD-100MG-36-12-3B", price: 306.0, url: "https://checkout.fit29.com/?id=127" },
      "Sildenafil 100mg|6|6 Months": { sku: "SILD-100MG-36-6-6B", price: 288.0, url: "https://checkout.fit29.com/?id=128" },
      "Sildenafil 100mg|14|3 Months": { sku: "SILD-100MG-42-14-3B", price: 357.0, url: "https://checkout.fit29.com/?id=129" },
      "Sildenafil 100mg|8|6 Months": { sku: "SILD-100MG-48-8-6B", price: 384.0, url: "https://checkout.fit29.com/?id=130" },
      "Sildenafil 100mg|6|1 Month": { sku: "SILD-100MG-6-6-1B", price: 60.0, url: "https://checkout.fit29.com/?id=131" },
      "Sildenafil 100mg|10|6 Months": { sku: "SILD-100MG-60-10-6B", price: 480.0, url: "https://checkout.fit29.com/?id=132" },
      "Sildenafil 100mg|12|6 Months": { sku: "SILD-100MG-72-12-6B", price: 576.0, url: "https://checkout.fit29.com/?id=133" },
      "Sildenafil 100mg|6|12 Months": { sku: "SILD-100MG-72-6-12B", price: 432.0, url: "https://checkout.fit29.com/?id=134" },
      "Sildenafil 100mg|8|1 Month": { sku: "SILD-100MG-8-8-1B", price: 80.0, url: "https://checkout.fit29.com/?id=135" },
      "Sildenafil 100mg|14|6 Months": { sku: "SILD-100MG-84-14-6B", price: 672.0, url: "https://checkout.fit29.com/?id=136" },
      "Sildenafil 100mg|8|12 Months": { sku: "SILD-100MG-96-8-12B", price: 576.0, url: "https://checkout.fit29.com/?id=137" },
      "Sildenafil 50mg|10|1 Month": { sku: "SILD-50MG-10-10-1B", price: 100.0, url: "https://checkout.fit29.com/?id=138" },
      "Sildenafil 50mg|12|1 Month": { sku: "SILD-50MG-12-12-1B", price: 120.0, url: "https://checkout.fit29.com/?id=139" },
      "Sildenafil 50mg|10|12 Months": { sku: "SILD-50MG-120-10-12B", price: 720.0, url: "https://checkout.fit29.com/?id=140" },
      "Sildenafil 50mg|14|1 Month": { sku: "SILD-50MG-14-14-1B", price: 140.0, url: "https://checkout.fit29.com/?id=141" },
      "Sildenafil 50mg|12|12 Months": { sku: "SILD-50MG-144-12-12B", price: 864.0, url: "https://checkout.fit29.com/?id=142" },
      "Sildenafil 50mg|14|12 Months": { sku: "SILD-50MG-168-14-12B", price: 1008.0, url: "https://checkout.fit29.com/?id=143" },
      "Sildenafil 50mg|6|3 Months": { sku: "SILD-50MG-18-6-3B", price: 153.0, url: "https://checkout.fit29.com/?id=144" },
      "Sildenafil 50mg|8|3 Months": { sku: "SILD-50MG-24-8-3B", price: 204.0, url: "https://checkout.fit29.com/?id=145" },
      "Sildenafil 50mg|10|3 Months": { sku: "SILD-50MG-30-10-3B", price: 255.0, url: "https://checkout.fit29.com/?id=146" },
      "Sildenafil 50mg|12|3 Months": { sku: "SILD-50MG-36-12-3B", price: 306.0, url: "https://checkout.fit29.com/?id=147" },
      "Sildenafil 50mg|6|6 Months": { sku: "SILD-50MG-36-6-6B", price: 288.0, url: "https://checkout.fit29.com/?id=148" },
      "Sildenafil 50mg|14|3 Months": { sku: "SILD-50MG-42-14-3B", price: 357.0, url: "https://checkout.fit29.com/?id=149" },
      "Sildenafil 50mg|8|6 Months": { sku: "SILD-50MG-48-8-6B", price: 384.0, url: "https://checkout.fit29.com/?id=150" },
      "Sildenafil 50mg|6|1 Month": { sku: "SILD-50MG-6-6-1B", price: 60.0, url: "https://checkout.fit29.com/?id=151" },
      "Sildenafil 50mg|10|6 Months": { sku: "SILD-50MG-60-10-6B", price: 480.0, url: "https://checkout.fit29.com/?id=152" },
      "Sildenafil 50mg|12|6 Months": { sku: "SILD-50MG-72-12-6B", price: 576.0, url: "https://checkout.fit29.com/?id=153" },
      "Sildenafil 50mg|6|12 Months": { sku: "SILD-50MG-72-6-12B", price: 432.0, url: "https://checkout.fit29.com/?id=154" },
      "Sildenafil 50mg|8|1 Month": { sku: "SILD-50MG-8-8-1B", price: 80.0, url: "https://checkout.fit29.com/?id=155" },
      "Sildenafil 50mg|14|6 Months": { sku: "SILD-50MG-84-14-6B", price: 672.0, url: "https://checkout.fit29.com/?id=156" },
      "Sildenafil 50mg|8|12 Months": { sku: "SILD-50MG-96-8-12B", price: 576.0, url: "https://checkout.fit29.com/?id=157" },
      "Tadalafil 10mg|10|1 Month": { sku: "TADA-10MG-10-10-1B", price: 100.0, url: "https://checkout.fit29.com/?id=158" },
      "Tadalafil 10mg|12|1 Month": { sku: "TADA-10MG-12-12-1B", price: 120.0, url: "https://checkout.fit29.com/?id=159" },
      "Tadalafil 10mg|10|12 Months": { sku: "TADA-10MG-120-10-12B", price: 720.0, url: "https://checkout.fit29.com/?id=160" },
      "Tadalafil 10mg|14|1 Month": { sku: "TADA-10MG-14-14-1B", price: 140.0, url: "https://checkout.fit29.com/?id=161" },
      "Tadalafil 10mg|12|12 Months": { sku: "TADA-10MG-144-12-12B", price: 864.0, url: "https://checkout.fit29.com/?id=162" },
      "Tadalafil 10mg|14|12 Months": { sku: "TADA-10MG-168-14-12B", price: 1008.0, url: "https://checkout.fit29.com/?id=163" },
      "Tadalafil 10mg|6|3 Months": { sku: "TADA-10MG-18-6-3B", price: 153.0, url: "https://checkout.fit29.com/?id=164" },
      "Tadalafil 10mg|8|3 Months": { sku: "TADA-10MG-24-8-3B", price: 204.0, url: "https://checkout.fit29.com/?id=165" },
      "Tadalafil 10mg|10|3 Months": { sku: "TADA-10MG-30-10-3B", price: 255.0, url: "https://checkout.fit29.com/?id=166" },
      "Tadalafil 10mg|12|3 Months": { sku: "TADA-10MG-36-12-3B", price: 306.0, url: "https://checkout.fit29.com/?id=167" },
      "Tadalafil 10mg|6|6 Months": { sku: "TADA-10MG-36-6-6B", price: 288.0, url: "https://checkout.fit29.com/?id=168" },
      "Tadalafil 10mg|14|3 Months": { sku: "TADA-10MG-42-14-3B", price: 357.0, url: "https://checkout.fit29.com/?id=169" },
      "Tadalafil 10mg|8|6 Months": { sku: "TADA-10MG-48-8-6B", price: 384.0, url: "https://checkout.fit29.com/?id=170" },
      "Tadalafil 10mg|6|1 Month": { sku: "TADA-10MG-6-6-1B", price: 60.0, url: "https://checkout.fit29.com/?id=171" },
      "Tadalafil 10mg|10|6 Months": { sku: "TADA-10MG-60-10-6B", price: 480.0, url: "https://checkout.fit29.com/?id=172" },
      "Tadalafil 10mg|12|6 Months": { sku: "TADA-10MG-72-12-6B", price: 576.0, url: "https://checkout.fit29.com/?id=173" },
      "Tadalafil 10mg|6|12 Months": { sku: "TADA-10MG-72-6-12B", price: 432.0, url: "https://checkout.fit29.com/?id=174" },
      "Tadalafil 10mg|8|1 Month": { sku: "TADA-10MG-8-8-1B", price: 80.0, url: "https://checkout.fit29.com/?id=175" },
      "Tadalafil 10mg|14|6 Months": { sku: "TADA-10MG-84-14-6B", price: 672.0, url: "https://checkout.fit29.com/?id=176" },
      "Tadalafil 10mg|8|12 Months": { sku: "TADA-10MG-96-8-12B", price: 576.0, url: "https://checkout.fit29.com/?id=177" },
      "Tadalafil Daily 2.5mg|30|6 Months": { sku: "TADA-2.5MG-180-30-6B", price: 432.0, url: "https://checkout.fit29.com/?id=178" },
      "Tadalafil Daily 2.5mg|30|1 Month": { sku: "TADA-2.5MG-30-30-1B", price: 90.0, url: "https://checkout.fit29.com/?id=179" },
      "Tadalafil Daily 2.5mg|30|12 Months": { sku: "TADA-2.5MG-360-30-12B", price: 648.0, url: "https://checkout.fit29.com/?id=180" },
      "Tadalafil Daily 2.5mg|30|3 Months": { sku: "TADA-2.5MG-90-30-3B", price: 261.9, url: "https://checkout.fit29.com/?id=181" },
      "Tadalafil 20mg|10|1 Month": { sku: "TADA-20MG-10-10-1B", price: 100.0, url: "https://checkout.fit29.com/?id=182" },
      "Tadalafil 20mg|12|1 Month": { sku: "TADA-20MG-12-12-1B", price: 120.0, url: "https://checkout.fit29.com/?id=183" },
      "Tadalafil 20mg|10|12 Months": { sku: "TADA-20MG-120-10-12B", price: 720.0, url: "https://checkout.fit29.com/?id=184" },
      "Tadalafil 20mg|14|1 Month": { sku: "TADA-20MG-14-14-1B", price: 140.0, url: "https://checkout.fit29.com/?id=185" },
      "Tadalafil 20mg|12|12 Months": { sku: "TADA-20MG-144-12-12B", price: 864.0, url: "https://checkout.fit29.com/?id=186" },
      "Tadalafil 20mg|14|12 Months": { sku: "TADA-20MG-168-14-12B", price: 1008.0, url: "https://checkout.fit29.com/?id=187" },
      "Tadalafil 20mg|6|3 Months": { sku: "TADA-20MG-18-6-3B", price: 153.0, url: "https://checkout.fit29.com/?id=188" },
      "Tadalafil 20mg|8|3 Months": { sku: "TADA-20MG-24-8-3B", price: 204.0, url: "https://checkout.fit29.com/?id=189" },
      "Tadalafil 20mg|10|3 Months": { sku: "TADA-20MG-30-10-3B", price: 255.0, url: "https://checkout.fit29.com/?id=190" },
      "Tadalafil 20mg|12|3 Months": { sku: "TADA-20MG-36-12-3B", price: 306.0, url: "https://checkout.fit29.com/?id=191" },
      "Tadalafil 20mg|6|6 Months": { sku: "TADA-20MG-36-6-6B", price: 288.0, url: "https://checkout.fit29.com/?id=192" },
      "Tadalafil 20mg|14|3 Months": { sku: "TADA-20MG-42-14-3B", price: 357.0, url: "https://checkout.fit29.com/?id=193" },
      "Tadalafil 20mg|8|6 Months": { sku: "TADA-20MG-48-8-6B", price: 384.0, url: "https://checkout.fit29.com/?id=194" },
      "Tadalafil 20mg|6|1 Month": { sku: "TADA-20MG-6-6-1B", price: 60.0, url: "https://checkout.fit29.com/?id=195" },
      "Tadalafil 20mg|10|6 Months": { sku: "TADA-20MG-60-10-6B", price: 480.0, url: "https://checkout.fit29.com/?id=196" },
      "Tadalafil 20mg|12|6 Months": { sku: "TADA-20MG-72-12-6B", price: 576.0, url: "https://checkout.fit29.com/?id=197" },
      "Tadalafil 20mg|6|12 Months": { sku: "TADA-20MG-72-6-12B", price: 432.0, url: "https://checkout.fit29.com/?id=198" },
      "Tadalafil 20mg|8|1 Month": { sku: "TADA-20MG-8-8-1B", price: 80.0, url: "https://checkout.fit29.com/?id=199" },
      "Tadalafil 20mg|14|6 Months": { sku: "TADA-20MG-84-14-6B", price: 672.0, url: "https://checkout.fit29.com/?id=200" },
      "Tadalafil 20mg|8|12 Months": { sku: "TADA-20MG-96-8-12B", price: 576.0, url: "https://checkout.fit29.com/?id=201" },
      "Tadalafil Daily 5mg|30|6 Months": { sku: "TADA-5MG-180-30-6B", price: 432.0, url: "https://checkout.fit29.com/?id=202" },
      "Tadalafil Daily 5mg|30|1 Month": { sku: "TADA-5MG-30-30-1B", price: 90.0, url: "https://checkout.fit29.com/?id=203" },
      "Tadalafil Daily 5mg|30|12 Months": { sku: "TADA-5MG-360-30-12B", price: 648.0, url: "https://checkout.fit29.com/?id=204" },
      "Tadalafil Daily 5mg|30|3 Months": { sku: "TADA-5MG-90-30-3B", price: 261.9, url: "https://checkout.fit29.com/?id=205" },
    },
    risks: ["Headache", "Facial flushing", "Nasal congestion", "Upset stomach", "Dizziness", "Vision changes", "Back pain", "Priapism (rare)"],
  },
  {
    id: 11, slug: "premature-ejaculation", name: "Premature Ejaculation", subhead: "Faster relief. Greater control.",
    tagline: "Faster relief. Greater control.",
    image: imgPropranolol, lifestyle: lifestyleMens,
    pricingType: "A", priceLabel: "Starting at", priceSublabel: "",
    basePrice: 180.0, baseSku: "SERT-25-3M",
    description: "25mg daily dose. 600% increase in ejaculatory interval (1min baseline shifting up to 7min duration).",
    durations: [
      { label: "3 Months — Sertraline 25mg · 90 tablets", sku: "SERT-25-3M", price: 180.0, checkoutUrl: "https://checkout.fit29.com/?id=213" },
      { label: "6 Months — Sertraline 25mg · 180 tablets", sku: "SERT-25-6M", price: 360.0, checkoutUrl: "https://checkout.fit29.com/?id=214" },
      { label: "12 Months — Sertraline 25mg · 360 tablets", sku: "SERT-25-12M", price: 720.0, checkoutUrl: "https://checkout.fit29.com/?id=215" },
    ],
    risks: ["Nausea", "Headache", "Insomnia/drowsiness", "Diarrhea/constipation", "Dry mouth", "Dizziness", "Agitation", "Suicidal thoughts (rare)"],
  },
  {
    id: 12, slug: "pt-141", name: "PT-141", subhead: "PT-141 Bremelanotide Injection.",
    tagline: "PT-141 Bremelanotide Injection.",
    image: imgPT141, lifestyle: lifestyleMens,
    pricingType: "A", priceLabel: "Starting at", priceSublabel: "",
    basePrice: 189.0, baseSku: "PT141-1M",
    checkoutUrl: "https://checkout.fit29.com/?id=95",
    description: "Melanocortin receptor agonist. Works through central neurological pathways rather than blood flow.",
    durations: [
      { label: "1 Month", sku: "PT141-1M", price: 189.0, checkoutUrl: "https://checkout.fit29.com/?id=95" },
      { label: "3 Months", sku: "PT141-3M", price: 567.0, checkoutUrl: "https://checkout.fit29.com/?id=96" },
      { label: "6 Months", sku: "PT141-6M", price: 1134.0, checkoutUrl: "https://checkout.fit29.com/?id=97" },
      { label: "12 Months", sku: "PT141-12M", price: 2268.0, checkoutUrl: "https://checkout.fit29.com/?id=98" },
    ],
    risks: ["Nausea", "Flushing", "Headache", "Injection site reactions", "Elevated BP", "Fatigue", "Skin darkening (rare)"],
  },
  {
    id: 13, slug: "mens-hair-loss", name: "Men's Hair Loss", subhead: "Grow with confidence.",
    tagline: "Grow with confidence.",
    image: imgFinasteride, lifestyle: lifestyleMens,
    pricingType: "C", priceLabel: "Starting at", priceSublabel: "",
    basePrice: 90.0, baseSku: "FINA-1MG-90-30-3B",
    checkoutUrl: "https://checkout.fit29.com/?id=207",
    description: "5-alpha reductase inhibitor. Blocks 70% DHT conversion.",
    variants: [
      { label: "Medication", options: ["Finasteride 1mg — Oral Tablet"] },
    ],
    durations: [
      { label: "3 months", sku: "FINA-1MG-90-30-3B", price: 90.0, checkoutUrl: "https://checkout.fit29.com/?id=207" },
      { label: "6 months", sku: "FINA-1MG-180-30-6B", price: 162.0, checkoutUrl: "https://checkout.fit29.com/?id=208" },
      { label: "12 months", sku: "FINA-1MG-360-30-12B", price: 252.0, checkoutUrl: "https://checkout.fit29.com/?id=209" },
    ],
    risks: ["Decreased libido", "Erectile dysfunction", "Decreased ejaculate", "Gynecomastia", "Allergic reactions"],
    timeline: "3-4 months initial · 6-9 months significant · 1 year full results.",
  },
  {
    id: 14, slug: "womens-hair-loss", name: "Women's Hair Loss", subhead: "Better hair days ahead.",
    tagline: "Better hair days ahead.",
    image: imgHairWomen, lifestyle: lifestyleWomens,
    pricingType: "C", priceLabel: "Starting at", priceSublabel: "",
    basePrice: 79.0, baseSku: "MIN-1MG-SPI-60MG",
    checkoutUrl: "https://checkout.fit29.com/?id=210",
    description: "Topical & oral support for follicle integrity and density.",
    variants: [
      {
        label: "Medication",
        options: [
          "Minoxidil 1mg / Spironolactone 60mg — Combo Treatment",
          "Minoxidil 1mg / Finasteride 1.25mg — Combo Treatment",
          "Finasteride 0.1% / Minoxidil 6% — Topical Solution",
        ],
      },
    ],
    variantCheckouts: {
      "Minoxidil 1mg / Spironolactone 60mg": { sku: "MIN-1MG-SPI-60MG", price: 79.0, url: "https://checkout.fit29.com/?id=210" },
      "Minoxidil 1mg / Finasteride 1.25mg": { sku: "MIN-1MG-FINA-1.25MG", price: 79.0, url: "https://checkout.fit29.com/?id=211" },
      "Finasteride 0.1% / Minoxidil 6%": { sku: "FINA-10-MINO-6", price: 79.0, url: "https://checkout.fit29.com/?id=212" },
    },
  },
  {
    id: 15, slug: "eyelash-treatment", name: "Eyelash Treatment", subhead: "Wake up with beautiful lashes",
    tagline: "Wake up with beautiful lashes",
    image: imgBimatoprost, lifestyle: lifestyleWomens,
    pricingType: "A", priceLabel: "Starting at", priceSublabel: "",
    basePrice: 129.0, baseSku: "BIMA-5ML-90-30-3B",
    checkoutUrl: "https://checkout.fit29.com/?id=243",
    description: "Bimatoprost 5ml · 3 month supply. Prostaglandin analog for longer, fuller lashes.",
  },
  {
    id: 16, slug: "skincare", name: "Customized Skincare", subhead: "Dermatologist formulated for younger skin!",
    tagline: "Dermatologist formulated for younger skin!",
    image: imgSkincare, lifestyle: lifestyleWomens,
    pricingType: "B", priceLabel: "Starting at", priceSublabel: "",
    basePrice: 89.0, baseSku: "TRE-NIA-HYA-30B",
    checkoutUrl: "https://checkout.fit29.com/?id=109",
    description: "Compounded skincare with prescription-strength actives.",
    variants: [
      {
        label: "Formulation",
        options: [
          "Anti-Aging (Sensitive) — Tretinoin 0.03%, Niacinamide 4%, Hyaluronic Acid 0.5%",
          "Anti-Aging (Normal) — Tretinoin 0.06%, Niacinamide 4%, Hyaluronic Acid 0.5%",
          "Anti-Aging (High Potency) — Tretinoin 0.089%, Niacinamide 4%, Hyaluronic Acid 0.5%",
          "Hyperpigmentation (Low) — Hydroquinone 6%, Vitamin C 1%, Niacinamide 2%",
          "Hyperpigmentation (Medium) — Hydroquinone 8%, Tretinoin 0.025%, Vitamin C 1%, Niacinamide 2%",
          "Hyperpigmentation (High) — Hydroquinone 12%, Tretinoin 0.05%, Niacinamide 2%, Hydrocortisone 2.5%",
        ],
      },
    ],
    variantCheckouts: {
      "Anti-Aging (Sensitive)": { sku: "TRE-NIA-HYA-30B", price: 89.0, url: "https://checkout.fit29.com/?id=109" },
      "Anti-Aging (Normal)": { sku: "TRE-NIA-HYA-60B", price: 89.0, url: "https://checkout.fit29.com/?id=110" },
      "Anti-Aging (High Potency)": { sku: "TRE-NIA-HYA-89B", price: 89.0, url: "https://checkout.fit29.com/?id=111" },
      "Hyperpigmentation (Low)": { sku: "HYD-VIT-NIA", price: 89.0, url: "https://checkout.fit29.com/?id=112" },
      "Hyperpigmentation (Medium)": { sku: "HYD-TRE-VIT-NIA", price: 89.0, url: "https://checkout.fit29.com/?id=113" },
      "Hyperpigmentation (High)": { sku: "HYD-TRE-NIA-HYD", price: 89.0, url: "https://checkout.fit29.com/?id=114" },
    },
  },
  {
    id: 17, slug: "birth-control", name: "Birth Control", subhead: "The power of choice",
    tagline: "The power of choice",
    image: imgBirthControl, lifestyle: lifestyleWomens,
    pricingType: "C", priceLabel: "Starting at", priceSublabel: "EVERY 3 MONTHS",
    basePrice: 46.97, baseSku: "NSEE",
    checkoutUrl: "https://checkout.fit29.com/?id=218",
    description: "Daily oral contraceptive, physician-prescribed. 3-month supply (90 pills).",
    variants: [
      {
        label: "Medication",
        options: [
          "Generic Ortho Cyclen — 3 Packs",
          "Generic Ortho TriCyclen — 3 Packs",
          "Generic Ortho TriCyclen-Lo — 3 Packs",
          "Sprintec — 3 Packs",
          "Tri-Sprintec — 3 Packs",
          "Tri-Lo Sprintec — 3 Packs",
          "Generic Yasmin — 3 Packs",
          "Ocella — 3 Packs",
          "Generic Desogen — 3 Packs",
          "Apri — 3 Packs",
          "Isibloom — 3 Packs",
          "Generic Mircette — 3 Packs",
          "Kariva — 3 Packs",
          "Generic Ortho-Micronor — 3 Packs",
          "Camila — 3 Packs",
          "Heather — 3 Packs",
          "Generic Loestrin 21 — 3 Packs",
          "Microgestin — 3 Packs",
          "Generic Yaz — 3 Packs",
        ],
      },
    ],
    variantCheckouts: {
      "Generic Ortho Cyclen": { sku: "NSEE", price: 46.97, url: "https://checkout.fit29.com/?id=218" },
      "Generic Ortho TriCyclen-Lo": { sku: "GOTLO", price: 46.97, url: "https://checkout.fit29.com/?id=220" },
      "Generic Ortho TriCyclen": { sku: "GOTCLIN", price: 46.97, url: "https://checkout.fit29.com/?id=219" },
      "Sprintec": { sku: "SPREC", price: 46.97, url: "https://checkout.fit29.com/?id=221" },
      "Tri-Sprintec": { sku: "TRITEC", price: 46.97, url: "https://checkout.fit29.com/?id=222" },
      "Tri-Lo Sprintec": { sku: "TRILOTEC", price: 46.97, url: "https://checkout.fit29.com/?id=223" },
      "Generic Yasmin": { sku: "GENMIN", price: 46.97, url: "https://checkout.fit29.com/?id=224" },
      "Ocella": { sku: "OCLLA", price: 46.97, url: "https://checkout.fit29.com/?id=225" },
      "Generic Desogen": { sku: "GENGEN", price: 46.97, url: "https://checkout.fit29.com/?id=226" },
      "Apri": { sku: "APRI", price: 46.97, url: "https://checkout.fit29.com/?id=227" },
      "Isibloom": { sku: "ISOM", price: 46.97, url: "https://checkout.fit29.com/?id=228" },
      "Generic Mircette": { sku: "GENTTE", price: 46.97, url: "https://checkout.fit29.com/?id=229" },
      "Kariva": { sku: "KAVA", price: 46.97, url: "https://checkout.fit29.com/?id=230" },
      "Generic Ortho-Micronor": { sku: "GENONOR", price: 46.97, url: "https://checkout.fit29.com/?id=231" },
      "Camila": { sku: "CMILA", price: 46.97, url: "https://checkout.fit29.com/?id=232" },
      "Heather": { sku: "HTHER", price: 46.97, url: "https://checkout.fit29.com/?id=233" },
      "Generic Loestrin 21": { sku: "GENIN21", price: 46.97, url: "https://checkout.fit29.com/?id=234" },
      "Microgestin": { sku: "MITIN", price: 46.97, url: "https://checkout.fit29.com/?id=235" },
      "Generic Yaz": { sku: "GENYAZ", price: 46.97, url: "https://checkout.fit29.com/?id=236" },
    },
  },
  {
    id: 18, slug: "herpes", name: "Herpes", subhead: "Faster relief. Greater control.",
    tagline: "Faster relief. Greater control.",
    image: imgHerpes, lifestyle: lifestyleMens,
    pricingType: "B", priceLabel: "Starting at", priceSublabel: "",
    basePrice: 60.0, baseSku: "Valacyclovir500mg",
    checkoutUrl: "https://checkout.fit29.com/?id=116",
    description: "Antiviral suppression therapy.",
    durations: [
      { label: "Valacyclovir 500mg · Qty 36", sku: "Valacyclovir500mg", price: 60.0, checkoutUrl: "https://checkout.fit29.com/?id=116" },
      { label: "Valacyclovir 500mg · Qty 90", sku: "Valacyclovir500mgx90", price: 75.0, checkoutUrl: "https://checkout.fit29.com/?id=117" },
      { label: "Valacyclovir 1g · Qty 90", sku: "Valacyclovir1gx90", price: 90.0, checkoutUrl: "https://checkout.fit29.com/?id=115" },
    ],
  },
  {
    id: 19, slug: "cold-sores", name: "Cold Sores", subhead: "Faster relief. Greater control.",
    tagline: "Faster relief. Greater control.",
    image: imgHerpes, lifestyle: lifestyleMens,
    pricingType: "A", priceLabel: "Starting at", priceSublabel: "",
    basePrice: 60.0, baseSku: "VALA-1G-24",
    checkoutUrl: "https://checkout.fit29.com/?id=206",
    description: "Valacyclovir 1g · Quantity 24. Antiviral protocol for active outbreaks.",
  },
  {
    id: 20, slug: "acid-reflux", name: "Acid Reflux", subhead: "Combat acid reflux",
    tagline: "Combat acid reflux",
    image: imgAcidReflux, lifestyle: lifestyleMens,
    pricingType: "A", priceLabel: "Starting at", priceSublabel: "",
    basePrice: 30.0, baseSku: "Omeprazole40mg",
    checkoutUrl: "https://checkout.fit29.com/?id=238",
    description: "Omeprazole 40mg · Quantity 90. PPI therapy for GERD and reflux symptoms.",
  },
  {
    id: 21, slug: "smoking-cessation", name: "Smoking Cessation", subhead: "Break the habit. Keep the health.",
    tagline: "Break the habit. Keep the health.",
    image: imgBuproprion, lifestyle: lifestyleMens,
    pricingType: "A", priceLabel: "Starting at", priceSublabel: "",
    basePrice: 45.0, baseSku: "BupropionSR150mg",
    checkoutUrl: "https://checkout.fit29.com/?id=237",
    description: "Bupropion SR 150mg · Quantity 180. Physician-guided cessation program.",
  },

  /* ===================== MEN'S PACKAGES (client pricing list) ===================== */
  {
    id: 22, slug: "sema-starter-man", name: "Sema Starter Man", subhead: "3 Months Semaglutide ramp (S1 + S2 + S3)",
    tagline: "3 Months Semaglutide ramp (S1 + S2 + S3)",
    image: imgSema, lifestyle: lifestyleMens,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 399.0, baseSku: "PKG-SEMA-STARTER-MAN-3M",
    description: "3 Months Semaglutide ramp (S1 + S2 + S3).",
    durations: [{ label: "3 Months", sku: "PKG-SEMA-STARTER-MAN-3M", price: 399.0 }],
  },
  {
    id: 23, slug: "sema-transformation", name: "Sema Transformation", subhead: "6 Months full Semaglutide ramp (S1 → S6)",
    tagline: "6 Months full Semaglutide ramp (S1 → S6)",
    image: imgSema, lifestyle: lifestyleMens,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 820.0, baseSku: "PKG-SEMA-TRANSFORM-6M",
    description: "Full Semaglutide ramp (S1 → S6).",
    durations: [{ label: "6 Months", sku: "PKG-SEMA-TRANSFORM-6M", price: 820.0 }],
  },
  {
    id: 24, slug: "sema-year-commitment", name: "Sema Year Commitment", subhead: "12 Months full 12-vial Semaglutide protocol",
    tagline: "12 Months full 12-vial Semaglutide protocol",
    image: imgSema, lifestyle: lifestyleMens,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 1670.0, baseSku: "PKG-SEMA-YEAR-12M",
    description: "Full 12-vial Semaglutide protocol.",
    durations: [{ label: "12 Months", sku: "PKG-SEMA-YEAR-12M", price: 1670.0 }],
  },
  {
    id: 25, slug: "tirzepatide-accelerator", name: "Tirzepatide Accelerator", subhead: "3 Months Tirzepatide (T1 + T2 + T3)",
    tagline: "3 Months Tirzepatide (T1 + T2 + T3)",
    image: imgTirz, lifestyle: lifestyleMens,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 649.0, baseSku: "PKG-TIRZ-ACCEL-3M",
    description: "Tirzepatide (T1 + T2 + T3).",
    durations: [{ label: "3 Months", sku: "PKG-TIRZ-ACCEL-3M", price: 649.0 }],
  },
  {
    id: 26, slug: "tirzepatide-elite", name: "Tirzepatide Elite", subhead: "Full 6-vial or 12-vial Tirzepatide",
    tagline: "Full 6-vial or 12-vial Tirzepatide",
    image: imgTirz, lifestyle: lifestyleMens,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 1199.0, baseSku: "PKG-TIRZ-ELITE-6M",
    description: "6 Months: full 6-vial Tirzepatide. 12 Months: full 12-vial Tirzepatide.",
    durations: [
      { label: "6 Months", sku: "PKG-TIRZ-ELITE-6M", price: 1199.0 },
      { label: "12 Months", sku: "PKG-TIRZ-ELITE-12M", price: 2190.0 },
    ],
  },
  {
    id: 27, slug: "trt-foundation", name: "TRT Foundation", subhead: "Testosterone Cypionate or Enclomiphene",
    tagline: "Testosterone Cypionate or Enclomiphene",
    image: imgTrt, lifestyle: lifestyleMens,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 460.0, baseSku: "PKG-TRT-FOUNDATION-3M",
    description: "Testosterone Cypionate or Enclomiphene.",
    durations: [
      { label: "3 Months", sku: "PKG-TRT-FOUNDATION-3M", price: 460.0 },
      { label: "6 Months", sku: "PKG-TRT-FOUNDATION-6M", price: 880.0 },
    ],
  },
  {
    id: 28, slug: "daily-ed-performance", name: "Daily ED Performance", subhead: "Tadalafil daily (2.5/5 mg) + Propranolol",
    tagline: "Tadalafil daily (2.5/5 mg) + Propranolol",
    image: imgTadalafil, lifestyle: lifestyleMens,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 640.0, baseSku: "PKG-DAILY-ED-6M",
    description: "Tadalafil daily (2.5/5 mg) + Propranolol.",
    durations: [{ label: "6 Months", sku: "PKG-DAILY-ED-6M", price: 640.0 }],
  },
  {
    id: 29, slug: "hair-performance", name: "Hair + Performance", subhead: "Finasteride + Tadalafil",
    tagline: "Finasteride + Tadalafil",
    image: imgFinasteride, lifestyle: lifestyleMens,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 620.0, baseSku: "PKG-HAIR-PERF-6M",
    description: "Finasteride + Tadalafil.",
    durations: [{ label: "6 Months", sku: "PKG-HAIR-PERF-6M", price: 620.0 }],
  },
  {
    id: 30, slug: "mens-longevity-protocol", name: "Men's Longevity Protocol", subhead: "NAD+ + Glutathione + LDN",
    tagline: "NAD+ + Glutathione + LDN",
    image: imgNad, lifestyle: lifestyleLongevity,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 750.0, baseSku: "PKG-MENS-LONGEVITY-3M",
    description: "NAD+ + Glutathione + LDN.",
    durations: [{ label: "3 Months", sku: "PKG-MENS-LONGEVITY-3M", price: 750.0 }],
  },
  {
    id: 31, slug: "complete-optimization-man", name: "Complete Optimization Man", subhead: "Sema 6-mo + TRT + Daily Tadalafil + Finasteride",
    tagline: "Sema 6-mo + TRT + Daily Tadalafil + Finasteride",
    image: imgSema, lifestyle: lifestyleMens,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 1599.0, baseSku: "PKG-COMPLETE-OPT-MAN-6M",
    description: "Sema 6-mo + TRT + Daily Tadalafil + Finasteride.",
    durations: [{ label: "6 Months", sku: "PKG-COMPLETE-OPT-MAN-6M", price: 1599.0 }],
  },

  /* ===================== WOMEN'S PACKAGES (client pricing list) ===================== */
  {
    id: 32, slug: "womens-sema-starter", name: "Women's Sema Starter", subhead: "3 Months Semaglutide ramp (S1 + S2 + S3)",
    tagline: "3 Months Semaglutide ramp (S1 + S2 + S3)",
    image: imgSema, lifestyle: lifestyleWomens,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 399.0, baseSku: "PKG-WOMENS-SEMA-STARTER-3M",
    description: "Semaglutide ramp (S1 + S2 + S3).",
    durations: [{ label: "3 Months", sku: "PKG-WOMENS-SEMA-STARTER-3M", price: 399.0 }],
  },
  {
    id: 33, slug: "sema-glow-starter", name: "Sema Glow Starter", subhead: "Sema ramp + Tretinoin / Anti-Aging cream",
    tagline: "Sema ramp + Tretinoin / Anti-Aging cream",
    image: imgSkincare, lifestyle: lifestyleWomens,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 469.0, baseSku: "PKG-SEMA-GLOW-3M",
    description: "Sema ramp + Tretinoin / Anti-Aging cream.",
    durations: [{ label: "3 Months", sku: "PKG-SEMA-GLOW-3M", price: 469.0 }],
  },
  {
    id: 34, slug: "sema-radiance", name: "Sema Radiance", subhead: "Full Sema ramp + Tretinoin / HQ skin stack",
    tagline: "Full Sema ramp + Tretinoin / HQ skin stack",
    image: imgSkincare, lifestyle: lifestyleWomens,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 920.0, baseSku: "PKG-SEMA-RADIANCE-6M",
    description: "Full Sema ramp + Tretinoin / HQ skin stack.",
    durations: [{ label: "6 Months", sku: "PKG-SEMA-RADIANCE-6M", price: 920.0 }],
  },
  {
    id: 35, slug: "tirzepatide-skin", name: "Tirzepatide + Skin", subhead: "Tirzepatide 3-mo + Anti-Aging / Melasma cream",
    tagline: "Tirzepatide 3-mo + Anti-Aging / Melasma cream",
    image: imgTirz, lifestyle: lifestyleWomens,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 699.0, baseSku: "PKG-TIRZ-SKIN-3M",
    description: "Tirzepatide 3-mo + Anti-Aging / Melasma cream.",
    durations: [{ label: "3 Months", sku: "PKG-TIRZ-SKIN-3M", price: 699.0 }],
  },
  {
    id: 36, slug: "womens-year-of-transformation", name: "Women's Year of Transformation", subhead: "12-mo Semaglutide + quarterly derm",
    tagline: "12-mo Semaglutide + quarterly derm",
    image: imgSema, lifestyle: lifestyleWomens,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 1720.0, baseSku: "PKG-WOMENS-YEAR-12M",
    description: "12-mo Semaglutide + quarterly derm.",
    durations: [{ label: "12 Months", sku: "PKG-WOMENS-YEAR-12M", price: 1720.0 }],
  },
  {
    id: 37, slug: "pure-skin-renewal", name: "Pure Skin Renewal", subhead: "Multiple Tretinoin + HQ / Azelaic stack",
    tagline: "Multiple Tretinoin + HQ / Azelaic stack",
    image: imgSkincare, lifestyle: lifestyleWomens,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 349.0, baseSku: "PKG-PURE-SKIN-6M",
    description: "Multiple Tretinoin + HQ / Azelaic stack.",
    durations: [{ label: "6 Months", sku: "PKG-PURE-SKIN-6M", price: 349.0 }],
  },
  {
    id: 38, slug: "hormone-continuity-metabolic", name: "Hormone Continuity + Metabolic", subhead: "Birth Control + Metformin XR",
    tagline: "Birth Control + Metformin XR",
    image: imgBirthControl, lifestyle: lifestyleWomens,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 249.0, baseSku: "PKG-HORM-CONT-6M",
    description: "Birth Control + Metformin XR.",
    durations: [
      { label: "6 Months", sku: "PKG-HORM-CONT-6M", price: 249.0 },
      { label: "12 Months", sku: "PKG-HORM-CONT-12M", price: 449.0 },
    ],
  },
  {
    id: 39, slug: "womens-sexual-wellness", name: "Women's Sexual Wellness", subhead: "Scream Cream + Oxytocin or PT-141",
    tagline: "Scream Cream + Oxytocin or PT-141",
    image: imgPT141, lifestyle: lifestyleWomens,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 720.0, baseSku: "PKG-WOMENS-SEXUAL-3M",
    description: "Scream Cream + Oxytocin or PT-141.",
    durations: [{ label: "3 Months", sku: "PKG-WOMENS-SEXUAL-3M", price: 720.0 }],
  },
  {
    id: 40, slug: "longevity-goddess-protocol", name: "Longevity Goddess Protocol", subhead: "NAD+ + Glutathione + Metformin + LDN",
    tagline: "NAD+ + Glutathione + Metformin + LDN",
    image: imgNad, lifestyle: lifestyleLongevity,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 750.0, baseSku: "PKG-LONGEVITY-GODDESS-3M",
    description: "NAD+ + Glutathione + Metformin + LDN.",
    durations: [
      { label: "3 Months", sku: "PKG-LONGEVITY-GODDESS-3M", price: 750.0 },
      { label: "6 Months", sku: "PKG-LONGEVITY-GODDESS-6M", price: 1450.0 },
    ],
  },
  {
    id: 41, slug: "complete-womens-optimization", name: "Complete Women's Optimization", subhead: "Sema 6-mo + Skin regimen + Sexual cream + Metformin",
    tagline: "Sema 6-mo + Skin regimen + Sexual cream + Metformin",
    image: imgSema, lifestyle: lifestyleWomens,
    pricingType: "B", priceLabel: "Package", priceSublabel: "PER MONTH",
    basePrice: 1599.0, baseSku: "PKG-COMPLETE-OPT-WOMEN-6M",
    description: "Sema 6-mo + Skin regimen + Sexual cream + Metformin.",
    durations: [{ label: "6 Months", sku: "PKG-COMPLETE-OPT-WOMEN-6M", price: 1599.0 }],
  },
].map((p) => {
  const prod = p as Product;
  const custom = productFaqsBySlug[prod.slug];
  return { ...prod, faqs: custom ?? standardFaqs(prod.name) };
});

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
