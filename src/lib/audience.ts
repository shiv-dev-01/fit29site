// Global audience state — persisted via localStorage, broadcast via custom event.
export type Audience = "men" | "women";

const KEY = "fit29:audience";
const EVENT = "fit29:audience-change";

export function getAudience(): Audience {
  if (typeof window === "undefined") return "men";
  const v = window.localStorage.getItem(KEY);
  return v === "women" ? "women" : "men";
}

export function setAudience(a: Audience) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, a);
  window.dispatchEvent(new CustomEvent(EVENT, { detail: a }));
}

export function onAudienceChange(cb: (a: Audience) => void) {
  if (typeof window === "undefined") return () => {};
  const handler = (e: Event) => cb((e as CustomEvent<Audience>).detail);
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}

import { useEffect, useState } from "react";
export function useAudience(): [Audience, (a: Audience) => void] {
  const [a, setA] = useState<Audience>(() => getAudience());
  useEffect(() => onAudienceChange(setA), []);
  return [a, setAudience];
}

// Categories and therapies surfaced in the header mega-menu.
export type Category = {
  label: string;
  href: string;
  therapies: { label: string; href: string }[];
};

export const MEN_CATEGORIES: Category[] = [
  {
    label: "Packages",
    href: "#packages",
    therapies: [
      { label: "Sema Starter Man", href: "/product/sema-starter-man" },
      { label: "Sema Transformation", href: "/product/sema-transformation" },
      { label: "Sema Year Commitment", href: "/product/sema-year-commitment" },
      { label: "Tirzepatide Accelerator", href: "/product/tirzepatide-accelerator" },
      { label: "Tirzepatide Elite", href: "/product/tirzepatide-elite" },
      { label: "TRT Foundation", href: "/product/trt-foundation" },
      { label: "Daily ED Performance", href: "/product/daily-ed-performance" },
      { label: "Hair + Performance", href: "/product/hair-performance" },
      { label: "Men's Longevity Protocol", href: "/product/mens-longevity-protocol" },
      { label: "Complete Optimization Man", href: "/product/complete-optimization-man" },
    ],
  },
  {
    label: "Weight Loss",
    href: "#weight-loss",
    therapies: [
      { label: "Semaglutide", href: "/product/semaglutide" },
      { label: "Tirzepatide", href: "/product/tirzepatide" },
      { label: "Metformin", href: "/product/metformin" },
      { label: "Sema Starter Man", href: "/product/sema-starter-man" },
      { label: "Sema Transformation", href: "/product/sema-transformation" },
      { label: "Sema Year Commitment", href: "/product/sema-year-commitment" },
      { label: "Tirzepatide Accelerator", href: "/product/tirzepatide-accelerator" },
      { label: "Tirzepatide Elite", href: "/product/tirzepatide-elite" },
      { label: "Complete Optimization Man", href: "/product/complete-optimization-man" },
    ],
  },
  {
    label: "Hormone Optimization",
    href: "#hrt",
    therapies: [
      { label: "Sermorelin", href: "/product/sermorelin" },
      { label: "TRT Foundation", href: "/product/trt-foundation" },
      { label: "Complete Optimization Man", href: "/product/complete-optimization-man" },
    ],
  },
  {
    label: "Sexual Health",
    href: "#sexual",
    therapies: [
      { label: "Erectile Dysfunction", href: "/product/erectile-dysfunction" },
      { label: "Premature Ejaculation", href: "/product/premature-ejaculation" },
      { label: "PT-141", href: "/product/pt-141" },
      { label: "Daily ED Performance", href: "/product/daily-ed-performance" },
      { label: "Hair + Performance", href: "/product/hair-performance" },
      { label: "Complete Optimization Man", href: "/product/complete-optimization-man" },
    ],
  },
  {
    label: "Longevity",
    href: "#longevity",
    therapies: [
      { label: "NAD+ Injectable", href: "/product/nad-injectable" },
      { label: "Glutathione", href: "/product/glutathione" },
      { label: "Men's Longevity Protocol", href: "/product/mens-longevity-protocol" },
    ],
  },
  {
    label: "Hair & Skin",
    href: "#hair",
    therapies: [
      { label: "Men's Hair Loss", href: "/product/mens-hair-loss" },
      { label: "Hair + Performance", href: "/product/hair-performance" },
      { label: "Complete Optimization Man", href: "/product/complete-optimization-man" },
    ],
  },
  {
    label: "Everyday Care",
    href: "#everyday",
    therapies: [
      { label: "Herpes", href: "/product/herpes" },
      { label: "Cold Sores", href: "/product/cold-sores" },
      { label: "Acid Reflux", href: "/product/acid-reflux" },
      { label: "Smoking Cessation", href: "/product/smoking-cessation" },
    ],
  },
];

export const WOMEN_CATEGORIES: Category[] = [
  {
    label: "Packages",
    href: "#packages",
    therapies: [
      { label: "Women's Sema Starter", href: "/product/womens-sema-starter" },
      { label: "Sema Glow Starter", href: "/product/sema-glow-starter" },
      { label: "Sema Radiance", href: "/product/sema-radiance" },
      { label: "Tirzepatide + Skin", href: "/product/tirzepatide-skin" },
      { label: "Women's Year of Transformation", href: "/product/womens-year-of-transformation" },
      { label: "Pure Skin Renewal", href: "/product/pure-skin-renewal" },
      { label: "Hormone Continuity + Metabolic", href: "/product/hormone-continuity-metabolic" },
      { label: "Women's Sexual Wellness", href: "/product/womens-sexual-wellness" },
      { label: "Longevity Goddess Protocol", href: "/product/longevity-goddess-protocol" },
      { label: "Complete Women's Optimization", href: "/product/complete-womens-optimization" },
    ],
  },
  {
    label: "Weight Loss",
    href: "#weight-loss",
    therapies: [
      { label: "Semaglutide", href: "/product/semaglutide" },
      { label: "Tirzepatide", href: "/product/tirzepatide" },
      { label: "Metformin", href: "/product/metformin" },
      { label: "Women's Sema Starter", href: "/product/womens-sema-starter" },
      { label: "Sema Glow Starter", href: "/product/sema-glow-starter" },
      { label: "Sema Radiance", href: "/product/sema-radiance" },
      { label: "Tirzepatide + Skin", href: "/product/tirzepatide-skin" },
      { label: "Women's Year of Transformation", href: "/product/womens-year-of-transformation" },
      { label: "Hormone Continuity + Metabolic", href: "/product/hormone-continuity-metabolic" },
      { label: "Complete Women's Optimization", href: "/product/complete-womens-optimization" },
    ],
  },
  {
    label: "Hormone & Vitality",
    href: "#hrt",
    therapies: [
      { label: "Sermorelin", href: "/product/sermorelin" },
      { label: "PT-141", href: "/product/pt-141" },
      { label: "Hormone Continuity + Metabolic", href: "/product/hormone-continuity-metabolic" },
      { label: "Complete Women's Optimization", href: "/product/complete-womens-optimization" },
    ],
  },
  {
    label: "Longevity",
    href: "#longevity",
    therapies: [
      { label: "NAD+ Injectable", href: "/product/nad-injectable" },
      { label: "Glutathione", href: "/product/glutathione" },
      { label: "Longevity Goddess Protocol", href: "/product/longevity-goddess-protocol" },
    ],
  },
  {
    label: "Hair & Skin",
    href: "#hair",
    therapies: [
      { label: "Women's Hair Loss", href: "/product/womens-hair-loss" },
      { label: "Eyelash Treatment", href: "/product/eyelash-treatment" },
      { label: "Customized Skincare", href: "/product/skincare" },
      { label: "Sema Glow Starter", href: "/product/sema-glow-starter" },
      { label: "Sema Radiance", href: "/product/sema-radiance" },
      { label: "Tirzepatide + Skin", href: "/product/tirzepatide-skin" },
      { label: "Pure Skin Renewal", href: "/product/pure-skin-renewal" },
      { label: "Women's Year of Transformation", href: "/product/womens-year-of-transformation" },
      { label: "Complete Women's Optimization", href: "/product/complete-womens-optimization" },
    ],
  },
  {
    label: "Sexual & Reproductive",
    href: "#sexual",
    therapies: [
      { label: "Birth Control", href: "/product/birth-control" },
      { label: "PT-141", href: "/product/pt-141" },
      { label: "Women's Sexual Wellness", href: "/product/womens-sexual-wellness" },
      { label: "Hormone Continuity + Metabolic", href: "/product/hormone-continuity-metabolic" },
      { label: "Complete Women's Optimization", href: "/product/complete-womens-optimization" },
    ],
  },
  {
    label: "Everyday Care",
    href: "#everyday",
    therapies: [
      { label: "Herpes", href: "/product/herpes" },
      { label: "Cold Sores", href: "/product/cold-sores" },
      { label: "Acid Reflux", href: "/product/acid-reflux" },
      { label: "Smoking Cessation", href: "/product/smoking-cessation" },
    ],
  },
];
