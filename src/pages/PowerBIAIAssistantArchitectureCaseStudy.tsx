import { ArrowLeft, BookOpen, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const ASSETS = "/case-study/powerbi-ai-assistant-architecture";

export default function PowerBIAIAssistantArchitectureCaseStudy() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Slim toolbar above the embedded guide */}
      <div className="pt-20 px-6 md:px-12 lg:px-20 xl:px-32 py-3 border-b border-border/40 bg-background/95 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/case-study"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Case Studies
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-muted-foreground hidden md:inline">
              Custom Power BI AI Assistant — Architecture & Replication Guide
            </span>
            <a
              href={`${ASSETS}/story.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            >
              <BookOpen className="h-3.5 w-3.5" /> Story version
            </a>
            <a
              href={`${ASSETS}/index.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Open in full screen
            </a>
          </div>
        </div>
      </div>

      {/* Full-bleed iframe of the architecture guide */}
      <iframe
        src={`${ASSETS}/index.html`}
        title="Custom Power BI AI Assistant — Architecture & Replication Guide"
        className="w-full flex-1 border-0"
        style={{ height: "calc(100vh - 116px)", minHeight: "800px" }}
        loading="eager"
      />
    </main>
  );
}
