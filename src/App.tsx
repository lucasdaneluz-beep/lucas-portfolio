import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import Nav from "./components/Nav";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Walkup from "./pages/case-studies/Walkup";
import HipenMedia from "./pages/case-studies/HipenMedia";
import Westpak from "./pages/case-studies/Westpak";
import RunYourPace from "./pages/case-studies/RunYourPace";
import PlatterOnboarding from "./pages/case-studies/PlatterOnboarding";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import LinkedInBanners from "./pages/LinkedInBanners";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Nav />
        <ScrollToTop />
        <div className="pt-14">
        <PageTransition>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies/walkup" element={<Walkup />} />
          <Route path="/case-studies/hipen-media" element={<HipenMedia />} />
          <Route path="/case-studies/westpak" element={<Westpak />} />
          <Route path="/case-studies/run-your-pace" element={<RunYourPace />} />
          <Route path="/case-studies/platter-onboarding" element={<PlatterOnboarding />} />

          <Route path="/linkedin-banners" element={<LinkedInBanners />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </PageTransition>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
