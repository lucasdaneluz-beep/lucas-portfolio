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
import Moneybox from "./pages/case-studies/Moneybox";
import Walkup from "./pages/case-studies/Walkup";
import Comingsoon from "./pages/case-studies/Comingsoon"; 
import HipenMedia from "./pages/case-studies/HipenMedia";
import Westpak from "./pages/case-studies/Westpak";
import PreviewTerracotta from "./pages/PreviewTerracotta";
import PreviewNewDarkFonts from "./pages/PreviewNewDarkFonts";

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
          <Route path="/case-studies/moneybox" element={<Moneybox />} />
          <Route path="/case-studies/walkup" element={<Walkup />} />
          <Route path="/case-studies/hipen-media" element={<HipenMedia />} />
          <Route path="/case-studies/westpak" element={<Westpak />} />
          <Route path="/case-studies/Comingsoon" element={<Comingsoon />} />
          
          <Route path="/preview-terracotta" element={<PreviewTerracotta />} />
          <Route path="/preview-newdarkfonts" element={<PreviewNewDarkFonts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </PageTransition>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
