# Discoverability Audit — 20 Package Products

Read-only audit. No changes made. Sources inspected: `src/lib/audience.ts` (header mega-menu), `src/components/site/Header.tsx`, `src/pages/Index.tsx`, `src/components/site/ProductsCarousel.tsx`, `src/components/site/Footer.tsx`.

## How discovery works on the site today

- **Header mega-menu**: "For men" and "For women" each open a mega-menu whose first category is **Packages**. Men's menu lists the 10 men's packages; women's menu lists the 10 women's packages. All 20 are linked here.
- **Homepage packages section**: `ProductsCarousel` with an explicit `slugs` list — `MEN_PACKAGE_SLUGS` (10) or `WOMEN_PACKAGE_SLUGS` (10), chosen by the active audience toggle. All 20 appear, but only 10 at a time depending on audience.
- **Homepage "Explore the full catalog" carousel**: no slug list, so it renders `products.filter(...).slice(0, 24)`. The catalog array holds 18 therapies first, then the 20 packages, so this carousel truncates after the first 6 packages. Packages 7–20 never appear in it.
- **Product-page related carousel**: same untargeted `slice(0, 24)` behavior — same truncation.
- **Footer**: lists the 18 individual therapies only. No package links.
- **Site search**: no search feature exists anywhere in the app (no search route, input, or index). Not applicable to any package.

## Per-package results

Legend: MM = header mega-menu (Packages category), HP = homepage packages carousel (audience-gated), CAT = "Explore the full catalog" / related-products carousel.

### Men's packages

| Product | URL | Navigation paths | Correct category | Homepage sections | Carousels | Search |
| --- | --- | --- | --- | --- | --- | --- |
| Sema Starter Man | /product/sema-starter-man | MM (For men > Packages), HP (men) | Yes — Packages, men's menu | Yes (men audience) | Yes — packages carousel + CAT | N/A |
| Sema Transformation | /product/sema-transformation | MM, HP (men) | Yes | Yes (men) | Yes — packages carousel + CAT | N/A |
| Sema Year Commitment | /product/sema-year-commitment | MM, HP (men) | Yes | Yes (men) | Yes — packages carousel + CAT | N/A |
| Tirzepatide Accelerator | /product/tirzepatide-accelerator | MM, HP (men) | Yes | Yes (men) | Yes — packages carousel + CAT | N/A |
| Tirzepatide Elite | /product/tirzepatide-elite | MM, HP (men) | Yes | Yes (men) | Yes — packages carousel + CAT | N/A |
| TRT Foundation | /product/trt-foundation | MM, HP (men) | Yes | Yes (men) | Yes — packages carousel + CAT | N/A |
| Daily ED Performance | /product/daily-ed-performance | MM, HP (men) | Yes | Yes (men) | Packages carousel only — absent from CAT | N/A |
| Hair + Performance | /product/hair-performance | MM, HP (men) | Yes | Yes (men) | Packages carousel only — absent from CAT | N/A |
| Men's Longevity Protocol | /product/mens-longevity-protocol | MM, HP (men) | Yes | Yes (men) | Packages carousel only — absent from CAT | N/A |
| Complete Optimization Man | /product/complete-optimization-man | MM, HP (men) | Yes | Yes (men) | Packages carousel only — absent from CAT | N/A |

### Women's packages

| Product | URL | Navigation paths | Correct category | Homepage sections | Carousels | Search |
| --- | --- | --- | --- | --- | --- | --- |
| Women's Sema Starter | /product/womens-sema-starter | MM (For women > Packages), HP (women) | Yes | Yes (women audience) | Packages carousel only — absent from CAT | N/A |
| Sema Glow Starter | /product/sema-glow-starter | MM, HP (women) | Yes | Yes (women) | Packages carousel only — absent from CAT | N/A |
| Sema Radiance | /product/sema-radiance | MM, HP (women) | Yes | Yes (women) | Packages carousel only — absent from CAT | N/A |
| Tirzepatide + Skin | /product/tirzepatide-skin | MM, HP (women) | Yes | Yes (women) | Packages carousel only — absent from CAT | N/A |
| Women's Year of Transformation | /product/womens-year-of-transformation | MM, HP (women) | Yes | Yes (women) | Packages carousel only — absent from CAT | N/A |
| Pure Skin Renewal | /product/pure-skin-renewal | MM, HP (women) | Yes | Yes (women) | Packages carousel only — absent from CAT | N/A |
| Hormone Continuity + Metabolic | /product/hormone-continuity-metabolic | MM, HP (women) | Yes | Yes (women) | Packages carousel only — absent from CAT | N/A |
| Women's Sexual Wellness | /product/womens-sexual-wellness | MM, HP (women) | Yes | Yes (women) | Packages carousel only — absent from CAT | N/A |
| Longevity Goddess Protocol | /product/longevity-goddess-protocol | MM, HP (women) | Yes | Yes (women) | Packages carousel only — absent from CAT | N/A |
| Complete Women's Optimization | /product/complete-womens-optimization | MM, HP (women) | Yes | Yes (women) | Packages carousel only — absent from CAT | N/A |

## Verdict

- **Not discoverable (direct URL only): none.** All 20 packages are reachable through the header mega-menu and the homepage packages carousel, and each sits in the correct Packages category for its audience.
- **Partial-coverage observations** (facts, not fixes): 14 of 20 packages never appear in the general "Explore the full catalog" / related-products carousel because that list is capped at 24 items; homepage package visibility is audience-gated, so a visitor sees only their audience's 10 without switching; no package appears in the footer; the site has no search.

No changes made — awaiting direction on whether any of the partial-coverage items should be addressed.
