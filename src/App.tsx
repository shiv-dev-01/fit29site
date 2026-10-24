import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProductPage from "./pages/Product.tsx";
import Cart from "./pages/Cart.tsx";
import Privacy from "./pages/Privacy.tsx";
import Hipaa from "./pages/Hipaa.tsx";
import Terms from "./pages/Terms.tsx";
import Ccpa from "./pages/Ccpa.tsx";
import Returns from "./pages/Returns.tsx";
import SmsTerms from "./pages/SmsTerms.tsx";
import Contact from "./pages/Contact.tsx";
import Faq from "./pages/Faq.tsx";
import About from "./pages/About.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/hipaa" element={<Hipaa />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/ccpa" element={<Ccpa />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/sms-terms" element={<SmsTerms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
