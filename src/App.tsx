import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Blog (Supabase fallback + 7 static)
import Blog from "./pages/Blog";
import DbtJobsBlog from "./pages/DbtJobsBlog";
import FabricCapacityBlog from "./pages/FabricCapacityBlog";
import FabricCostBlog from "./pages/FabricCostBlog";
import ParquetTableFormatBlog from "./pages/ParquetTableFormatBlog";
import MaterializedLakeViewsBlog from "./pages/MaterializedLakeViewsBlog";
import DirectLakeBlog from "./pages/DirectLakeBlog";
import PowerBIAIAssistantBlog from "./pages/PowerBIAIAssistantBlog";
import FabricAppsRayfinBlog from "./pages/FabricAppsRayfinBlog";

// Case studies (13 total)
import CaseStudyGallery from "./pages/CaseStudyGallery";
import QuickBooksCaseStudy from "./pages/QuickBooksCaseStudy";
import BankingChurnCaseStudy from "./pages/BankingChurnCaseStudy";
import LuminaLuxCaseStudy from "./pages/LuminaLuxCaseStudy";
import ICLACaseStudy from "./pages/ICLACaseStudy";
import REMAXCaseStudy from "./pages/REMAXCaseStudy";
import MitronBankCaseStudy from "./pages/MitronBankCaseStudy";
import BusinessInsights360CaseStudy from "./pages/BusinessInsights360CaseStudy";
import PBIReportingPortfolioCaseStudy from "./pages/PBIReportingPortfolioCaseStudy";
import PowerBIAIAssistantArchitectureCaseStudy from "./pages/PowerBIAIAssistantArchitectureCaseStudy";
import PowerBIExpertWebappCaseStudy from "./pages/PowerBIExpertWebappCaseStudy";
import PowerBIMCPCaseStudy from "./pages/PowerBIMCPCaseStudy";
import AirtableMCPCaseStudy from "./pages/AirtableMCPCaseStudy";
import FabricSQLAssistantCaseStudy from "./pages/FabricSQLAssistantCaseStudy";
import FabricForgeCaseStudy from "./pages/FabricForgeCaseStudy";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Navigate to="/case-study" replace />} />
            <Route path="/experience" element={<Navigate to="/about" replace />} />

            {/* Blog: /blog listing + static TSX routes BEFORE /blog/:slug */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/dashboards-to-data-apps-rayfin" element={<FabricAppsRayfinBlog />} />
            <Route path="/blog/custom-powerbi-ai-assistant-problems-and-solutions" element={<PowerBIAIAssistantBlog />} />
            <Route path="/blog/fabric-direct-lake-semantic-models" element={<DirectLakeBlog />} />
            <Route path="/blog/fabric-materialized-lake-views" element={<MaterializedLakeViewsBlog />} />
            <Route path="/blog/parquet-not-table-format" element={<ParquetTableFormatBlog />} />
            <Route path="/blog/fabric-cost-optimization" element={<FabricCostBlog />} />
            <Route path="/blog/fabric-capacity-explained" element={<FabricCapacityBlog />} />
            <Route path="/blog/dbt-jobs-in-microsoft-fabric" element={<DbtJobsBlog />} />
            {/* Supabase fallback for any future markdown blog */}
            <Route path="/blog/:slug" element={<Blog />} />

            {/* Case studies */}
            <Route path="/case-study" element={<CaseStudyGallery />} />
            <Route path="/case-study/quickbooks-medallion" element={<QuickBooksCaseStudy />} />
            <Route path="/case-study/banking-churn" element={<BankingChurnCaseStudy />} />
            <Route path="/case-study/lumina-lux" element={<LuminaLuxCaseStudy />} />
            <Route path="/case-study/icla-analytics" element={<ICLACaseStudy />} />
            <Route path="/case-study/remax-login-portal" element={<REMAXCaseStudy />} />
            <Route path="/case-study/mitron-bank" element={<MitronBankCaseStudy />} />
            <Route path="/case-study/business-insights-360" element={<BusinessInsights360CaseStudy />} />
            <Route path="/case-study/pbi-reporting-portfolio" element={<PBIReportingPortfolioCaseStudy />} />
            <Route path="/case-study/powerbi-ai-assistant-architecture" element={<PowerBIAIAssistantArchitectureCaseStudy />} />
            <Route path="/case-study/powerbi-expert-webapp" element={<PowerBIExpertWebappCaseStudy />} />
            <Route path="/case-study/powerbi-mcp" element={<PowerBIMCPCaseStudy />} />
            <Route path="/case-study/airtable-mcp" element={<AirtableMCPCaseStudy />} />
            <Route path="/case-study/fabric-sql-assistant" element={<FabricSQLAssistantCaseStudy />} />
            <Route path="/case-study/fabricforge" element={<FabricForgeCaseStudy />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
