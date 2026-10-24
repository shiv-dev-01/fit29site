import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Journey from "@/components/site/Journey";
import Testimonials from "@/components/site/Testimonials";
import ProductsCarousel from "@/components/site/ProductsCarousel";
import ProductHero from "@/components/product/ProductHero";
import TreatmentInfo from "@/components/product/TreatmentInfo";
import ProductFAQ from "@/components/product/ProductFAQ";
import { productBySlug } from "@/data/products";

export default function ProductPage() {
  const { slug } = useParams();
  const product = slug ? productBySlug(slug) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) document.title = `${product.name} — FIT29`;
  }, [product]);

  if (!product) return <Navigate to="/" replace />;

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div style={{ paddingTop: 84 }} id="hero" />
      <ProductHero product={product} />
      <TreatmentInfo product={product} />
      <Journey />
      <ProductsCarousel excludeSlug={product.slug} />
      <Testimonials />
      <ProductFAQ product={product} />
      <Footer />
    </main>
  );
}
