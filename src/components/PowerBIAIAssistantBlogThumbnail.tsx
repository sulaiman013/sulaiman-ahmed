import { Zap } from "lucide-react";

const ICONS = "/blog/fabric-capacity-explained/icons";

export default function PowerBIAIAssistantBlogThumbnail() {
  return (
    <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden bg-background-elevated border border-border">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent-brand) 1px, transparent 1px), linear-gradient(90deg, var(--accent-brand) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient wash — single accent, no competing colors */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent-brand-soft blur-[80px]" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-accent-brand-soft blur-[70px]" />

      {/* Top-left brand badge */}
      <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
        <img
          src={`${ICONS}/power_bi.svg`}
          alt="Power BI"
          className="relative w-7 h-7"
        />
        <span className="font-mono text-[10px] uppercase tracking-wider text-foreground-muted">
          Power BI + Custom AI
        </span>
      </div>

      {/* Top-right metric badge */}
      <div className="absolute top-3 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent-brand-soft border border-border">
        <span className="font-mono text-[10px] font-semibold text-accent-brand-strong">
          49% &rarr; 92%
        </span>
        <span className="font-mono text-[8px] text-foreground-subtle uppercase tracking-wider">
          in 5 days
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-7 md:px-10 pt-2">
        {/* Left side: title + tagline + cost callout */}
        <div className="flex-1 min-w-0 max-w-[58%]">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="font-mono px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-background border border-border text-foreground-muted">
              Architecture
            </span>
            <span className="font-mono px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-background border border-border text-foreground-muted">
              Production Story
            </span>
            <span className="font-mono px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-accent-brand-soft border border-border text-accent-brand-strong">
              vs Copilot
            </span>
          </div>
          <h3 className="font-serif text-foreground text-base md:text-lg lg:text-xl font-normal leading-tight mb-1.5 line-clamp-2">
            The Custom Power BI <em className="italic font-normal">AI Assistant</em>
          </h3>
          <p className="text-foreground-muted text-[11px] md:text-xs line-clamp-1 mb-3">
            Microsoft Copilot or build your own? An honest cost and control breakdown.
          </p>

          {/* Inline cost callout */}
          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-border bg-accent-brand-soft w-fit">
            <span className="font-mono text-[10px] uppercase tracking-wider text-foreground-muted font-medium">
              Total cost
            </span>
            <span className="font-mono text-[14px] font-bold text-accent-brand-strong">
              ~$800/yr
            </span>
            <span className="font-mono text-[9px] text-foreground-subtle">
              vs $3,144 Fabric F2 path
            </span>
          </div>
        </div>

        {/* Right side: three-route visual */}
        <div className="hidden sm:flex flex-col items-center gap-2 ml-4">
          <span className="font-mono text-[8.5px] uppercase tracking-[0.15em] text-foreground-subtle font-medium">
            Three routes
          </span>

          {/* Three boxes */}
          <div className="flex flex-col gap-1.5 w-[230px]">
            {/* Power BI Copilot */}
            <div className="flex items-center justify-between px-2.5 py-1.5 rounded-md border border-border bg-background">
              <span className="text-[10px] font-semibold text-foreground-muted">
                Power BI Copilot
              </span>
              <span className="font-mono text-[9px] text-foreground-subtle">
                F2+ locked
              </span>
            </div>
            {/* Fabric Data Agent */}
            <div className="flex items-center justify-between px-2.5 py-1.5 rounded-md border border-border bg-background">
              <span className="text-[10px] font-semibold text-foreground-muted">
                Fabric Data Agent
              </span>
              <span className="font-mono text-[9px] text-foreground-subtle">
                25x25 cap
              </span>
            </div>
            {/* Custom Chatbot — the highlighted one */}
            <div className="flex items-center justify-between px-2.5 py-2 rounded-md border border-border-strong bg-accent-brand-soft">
              <div className="flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-accent-brand-strong" />
                <span className="text-[10px] font-bold text-accent-brand-strong">
                  Custom Chatbot
                </span>
              </div>
              <span className="font-mono text-[9px] text-accent-brand-strong font-semibold uppercase tracking-wider">
                Full control
              </span>
            </div>
          </div>

          {/* Recipe layer callout */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-background mt-1">
            <span className="font-mono text-[9px] font-semibold text-foreground-muted uppercase tracking-wider">
              Recipe layer
            </span>
            <span className="font-mono text-[9px] text-foreground-subtle">
              ~50x cheaper, deterministic
            </span>
          </div>
        </div>
      </div>

      {/* Bottom tech strip */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-7 md:px-10 py-2 bg-background border-t border-border">
        {[
          "Power BI",
          "OpenRouter",
          "Vector DB",
          "DAX",
          "Multi-tenant",
          "Edge Runtime",
          "Vision Models",
        ].map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] text-foreground-subtle font-medium"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
