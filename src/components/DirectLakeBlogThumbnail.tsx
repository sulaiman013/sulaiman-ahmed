const ICONS = "/blog/fabric-capacity-explained/icons";
const SHARED = "/blog/icons";

export default function DirectLakeBlogThumbnail() {
  return (
    <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden border border-sky-200/60 dark:border-sky-900/40 bg-gradient-to-br from-sky-50 via-background-elevated to-background-elevated dark:from-sky-950/40 dark:via-background-elevated dark:to-background-elevated">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-700/20" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-16 -left-10 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-800/15" aria-hidden="true" />
      {/* Subtle grid pattern, tinted with accent */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient accent wash, single committed color */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-100 dark:bg-sky-950/40 blur-[80px]" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-sky-100 dark:bg-sky-950/40 blur-[60px]" />

      {/* Fabric icon, top left */}
      <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
        <img
          src={`${SHARED}/fabric.svg`}
          alt="Microsoft Fabric"
          className="relative w-7 h-7"
        />
        <span className="font-mono text-[10px] uppercase tracking-wider text-foreground-muted">
          Microsoft Fabric
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-8 md:px-12">
        {/* Left side */}
        <div className="flex-1 min-w-0 pt-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded-xs font-mono text-[10px] font-semibold uppercase tracking-wider bg-sky-100 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-border">
              Complete Guide
            </span>
            <span className="px-2 py-0.5 rounded-xs font-mono text-[10px] font-semibold uppercase tracking-wider bg-background border border-border text-foreground-muted">
              Semantic Model
            </span>
          </div>
          <h3 className="font-serif text-foreground text-xl md:text-2xl lg:text-3xl leading-tight mb-2 line-clamp-2">
            Direct Lake <em className="italic font-normal">semantic models</em>
          </h3>
          <p className="text-foreground-muted text-xs md:text-sm line-clamp-1">
            The fastest storage mode in Fabric
          </p>
        </div>

        {/* Right side, Direct Lake vs DQ visual */}
        <div className="hidden sm:flex items-center gap-4 md:gap-5 ml-6">
          <div className="flex flex-col items-center gap-1.5">
            {/* Storage modes */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border border-border bg-sky-100 dark:bg-sky-950/40">
                <img
                  src={`${ICONS}/semantic_model.svg`}
                  alt="Semantic Model"
                  className="w-4 h-4 opacity-80"
                />
                <div className="text-center">
                  <div className="text-[10px] font-bold text-sky-700 dark:text-sky-300">Direct Lake</div>
                  <div className="font-mono text-[8px] text-foreground-muted">&lt; 1 second</div>
                </div>
              </div>
              <div className="text-foreground-subtle text-xs">vs</div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border border-border bg-background">
                <img
                  src={`${ICONS}/sql_database.svg`}
                  alt="DirectQuery"
                  className="w-4 h-4 opacity-60"
                />
                <div className="text-center">
                  <div className="text-[10px] font-bold text-destructive">DQ Fallback</div>
                  <div className="font-mono text-[8px] text-foreground-muted">4 min each</div>
                </div>
              </div>
            </div>
            {/* Arrow */}
            <div className="font-mono text-foreground-subtle text-[10px] uppercase tracking-wider">
              &#9660; diagnose with &#9660;
            </div>
            {/* Semantic Link Labs */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-sm border border-border bg-background">
              <img
                src={`${ICONS}/notebook.svg`}
                alt="Notebook"
                className="w-4 h-4 opacity-80"
              />
              <div className="text-center">
                <div className="text-[10px] font-bold text-foreground uppercase tracking-wider">
                  Semantic Link Labs
                </div>
                <div className="font-mono text-[8px] text-foreground-subtle mt-0.5">
                  20 Python functions
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-16 bg-border" />

          {/* Key concept */}
          <div className="text-center">
            <div className="font-mono text-xl md:text-2xl font-bold text-sky-700 dark:text-sky-300">
              ~2 sec
            </div>
            <div className="font-mono text-[10px] text-foreground-muted uppercase tracking-wider">
              Framing
              <br />
              Not Refresh
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tech strip */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-8 md:px-12 py-2 bg-background border-t border-border">
        {["Direct Lake", "Power BI", "Delta Lake", "Semantic Link Labs", "V-Order", "Guardrails"].map(
          (t) => (
            <span
              key={t}
              className="font-mono text-[10px] text-foreground-subtle uppercase tracking-wider"
            >
              {t}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
