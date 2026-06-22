import { ArrowLeft, BookOpen, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const ASSETS = "/case-study/powerbi-ai-assistant-architecture";

export default function PowerBIAIAssistantArchitectureCaseStudy() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-md pt-20">
        <div className="mx-auto max-w-page px-6 py-3 md:px-12 lg:px-20">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              to="/case-study"
              className="inline-flex items-center gap-1.5 text-body-sm text-foreground-muted transition-colors duration-fast ease-out-quart hover:text-violet-700 dark:hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Case Studies
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              <span className="hidden text-caption uppercase tracking-wider text-foreground-subtle md:inline mr-2">
                Deep dive ·{" "}
                <span className="text-violet-700 dark:text-violet-300 font-medium normal-case tracking-normal">
                  PowerBI AI Assistant
                </span>
              </span>
              <a
                href={`${ASSETS}/story.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background-elevated px-3 py-1.5 text-xs font-medium text-foreground-muted transition-colors duration-fast ease-out-quart hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 dark:hover:border-violet-700 dark:hover:bg-violet-950/40 dark:hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                Read the story
              </a>
              <a
                href={`${ASSETS}/index.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-violet-300 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700 transition-colors duration-fast ease-out-quart hover:bg-violet-100 dark:border-violet-700 dark:bg-violet-950/50 dark:text-violet-300 dark:hover:bg-violet-950/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                Open guide in new tab
              </a>
            </div>
          </div>
        </div>
      </div>

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
