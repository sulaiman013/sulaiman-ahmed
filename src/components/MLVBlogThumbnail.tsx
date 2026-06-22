const ICONS = "/blog/fabric-capacity-explained/icons";
const SHARED = "/blog/icons";

export default function MLVBlogThumbnail() {
  return (
    <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden border border-indigo-200/60 dark:border-indigo-900/40 bg-gradient-to-br from-indigo-50 via-background-elevated to-background-elevated dark:from-indigo-950/40 dark:via-background-elevated dark:to-background-elevated">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-700/20" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-16 -left-10 h-40 w-40 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-800/15" aria-hidden="true" />
      {/* Grid pattern - subtle accent tint */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.68 0.22 140 / 0.35) 1px, transparent 1px), linear-gradient(90deg, oklch(0.68 0.22 140 / 0.35) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient washes - leaf accent only */}
      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-[80px]"
        style={{ backgroundColor: "oklch(0.68 0.22 140 / 0.18)" }}
      />
      <div
        className="absolute top-0 right-0 w-96 h-full"
        style={{
          backgroundImage:
            "linear-gradient(to left, oklch(0.68 0.22 140 / 0.10), transparent)",
        }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full blur-[60px]"
        style={{ backgroundColor: "oklch(0.68 0.22 140 / 0.12)" }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-64 h-32 rounded-full blur-[80px]"
        style={{ backgroundColor: "oklch(0.68 0.22 140 / 0.08)" }}
      />

      {/* Fabric icon - top left */}
      <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
        <div className="relative">
          <div
            className="absolute inset-0 blur-md rounded-full scale-150"
            style={{ backgroundColor: "oklch(0.68 0.22 140 / 0.30)" }}
          />
          <img
            src={`${SHARED}/fabric.svg`}
            alt="Microsoft Fabric"
            className="relative w-7 h-7"
          />
        </div>
        <span className="text-caption font-semibold text-indigo-700 dark:text-indigo-300 tracking-wide">
          Microsoft Fabric
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-8 md:px-12">
        {/* Left side */}
        <div className="flex-1 min-w-0 pt-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded-xs text-caption font-semibold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-border">
              Preview Feature
            </span>
            <span className="px-2 py-0.5 rounded-xs text-caption font-semibold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-border">
              Lakehouse
            </span>
          </div>
          <h3 className="font-serif text-foreground text-h3 md:text-h2 leading-tight mb-2 line-clamp-2">
            Materialized Lake Views
          </h3>
          <p className="text-foreground-muted text-body-sm line-clamp-1">
            Your Lakehouse Just Got a Memory
          </p>
        </div>

        {/* Right side - MLV flow visual with icons */}
        <div className="hidden sm:flex items-center gap-4 md:gap-5 ml-6">
          {/* Flow diagram */}
          <div className="flex flex-col items-center gap-1.5">
            {/* SQL View vs MLV */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border bg-background">
                <img
                  src={`${ICONS}/sql_database.svg`}
                  alt="SQL"
                  className="w-4 h-4 opacity-70"
                />
                <div className="text-center">
                  <div className="text-caption font-semibold text-foreground-muted">
                    SQL View
                  </div>
                  <div className="text-[8px] text-foreground-subtle">
                    4 min each time
                  </div>
                </div>
              </div>
              <div className="text-foreground-subtle text-body-sm">vs</div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border-strong bg-indigo-100 dark:bg-indigo-950/40">
                <img
                  src={`${ICONS}/lakehouse.svg`}
                  alt="Lakehouse"
                  className="w-4 h-4 opacity-80"
                />
                <div className="text-center">
                  <div className="text-caption font-semibold text-indigo-700 dark:text-indigo-300">
                    MLV
                  </div>
                  <div className="text-[8px] text-indigo-700 dark:text-indigo-300/70">
                    sub-second
                  </div>
                </div>
              </div>
            </div>
            {/* Arrow */}
            <div className="text-foreground-subtle text-caption">
              &#9660; powered by &#9660;
            </div>
            {/* Optimal refresh */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-md border border-border-strong bg-indigo-100 dark:bg-indigo-950/40">
              <img
                src={`${SHARED}/delta_lake.svg`}
                alt="Delta Lake"
                className="w-4 h-4 opacity-80"
              />
              <div className="text-center">
                <div className="text-caption font-semibold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
                  Optimal Refresh
                </div>
                <div className="text-[8px] text-foreground-muted mt-0.5">
                  Incremental / Full / Skip
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-16 bg-border" />

          {/* Key concept */}
          <div className="text-center">
            <div className="font-mono text-h3 md:text-h2 font-bold text-indigo-700 dark:text-indigo-300">
              0 CU
            </div>
            <div className="text-caption text-foreground-muted font-medium uppercase tracking-wider">
              When No
              <br />
              Data Changed
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tech strip */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-8 md:px-12 py-2 bg-background/40 border-t border-border">
        {[
          "Materialized Lake Views",
          "Lakehouse",
          "Delta Lake",
          "Spark SQL",
          "Data Quality",
          "Lineage",
        ].map((t) => (
          <span
            key={t}
            className="text-caption text-foreground-subtle font-medium"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
