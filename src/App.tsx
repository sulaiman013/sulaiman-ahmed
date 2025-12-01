
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Experience from "./pages/Experience";
import CaseStudyGallery from "./pages/CaseStudyGallery";
import CaseStudy from "./pages/CaseStudy";
import PowerBIMCPCaseStudy from "./pages/PowerBIMCPCaseStudy";
import AirtableMCPCaseStudy from "./pages/AirtableMCPCaseStudy";
import FabricSQLAssistantCaseStudy from "./pages/FabricSQLAssistantCaseStudy";
import FabricForgeCaseStudy from "./pages/FabricForgeCaseStudy";
import ICLAAnalyticsCaseStudy from "./pages/ICLAAnalyticsCaseStudy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/case-study" element={<CaseStudyGallery />} />
          <Route path="/case-study/lumina-lux" element={<CaseStudy />} />
          <Route path="/case-study/powerbi-mcp" element={<PowerBIMCPCaseStudy />} />
          <Route path="/case-study/airtable-mcp" element={<AirtableMCPCaseStudy />} />
          <Route path="/case-study/fabric-sql-assistant" element={<FabricSQLAssistantCaseStudy />} />
          <Route path="/case-study/fabricforge" element={<FabricForgeCaseStudy />} />
          <Route path="/case-study/icla-analytics" element={<ICLAAnalyticsCaseStudy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
