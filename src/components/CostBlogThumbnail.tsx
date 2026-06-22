const ICONS = "/blog/fabric-capacity-explained/icons";

export default function CostBlogThumbnail() {
  return (
    <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden border border-amber-200/60 dark:border-amber-900/40 bg-gradient-to-br from-amber-50 via-background-elevated to-background-elevated dark:from-amber-950/40 dark:via-background-elevated dark:to-background-elevated">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-amber-300/30 blur-3xl dark:bg-amber-700/20" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-16 -left-10 h-40 w-40 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-800/15" aria-hidden="true" />
      {/* Grid pattern - accent tint */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(var(--foreground) / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--foreground) / 0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient accent washes */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber-100 dark:bg-amber-950/40 blur-[80px]" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-amber-100 dark:bg-amber-950/40/60 blur-[60px]" />
      <div className="absolute top-1/2 left-1/3 w-72 h-36 rounded-full bg-amber-100 dark:bg-amber-950/40/40 blur-[100px]" />

      {/* Glowing Fabric icon - top left */}
      <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
        <div className="relative">
          <div className="absolute inset-0 blur-md bg-amber-500/30 rounded-full scale-150" />
          <img
            src="/blog/icons/fabric.svg"
            alt="Microsoft Fabric"
            className="relative w-7 h-7"
          />
        </div>
        <span className="text-[10px] font-semibold text-foreground-muted tracking-wide">
          Microsoft Fabric
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-8 md:px-12">
        {/* Left side */}
        <div className="flex-1 min-w-0 pt-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-border">
              Part 2 of 2
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-background-elevated text-foreground-muted border border-border">
              Showdown
            </span>
          </div>
          <h3 className="font-serif text-foreground text-lg md:text-xl lg:text-2xl font-normal leading-tight mb-2 line-clamp-2">
            The Compute <em className="italic font-normal text-amber-700 dark:text-amber-300">Showdown</em>
          </h3>
          <p className="text-foreground-muted text-xs md:text-sm line-clamp-1">
            Which Tool Gives You the Most Bang for Your CU Buck?
          </p>
        </div>

        {/* Right side - 4 contenders in a battle layout */}
        <div className="hidden sm:flex items-center gap-4 md:gap-6 ml-6">
          {/* 2x2 contender grid with VS overlay */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: `${ICONS}/dataflow_gen2.svg`, label: "Dataflow" },
                { icon: `${ICONS}/notebook.svg`, label: "Spark" },
                { icon: `${ICONS}/data_warehouse.svg`, label: "dbt" },
                { icon: `${ICONS}/pipeline.svg`, label: "Pipeline" },
              ].map((w) => (
                <div key={w.label} className="flex flex-col items-center">
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-md border border-border bg-background flex items-center justify-center">
                    <img
                      src={w.icon}
                      alt={w.label}
                      className="w-5 h-5 md:w-6 md:h-6 opacity-80"
                    />
                  </div>
                  <span className="text-[9px] font-medium text-foreground-subtle mt-1">
                    {w.label}
                  </span>
                </div>
              ))}
            </div>
            {/* VS badge centered on the grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background-elevated border border-border-strong flex items-center justify-center">
              <span className="text-[8px] font-black text-amber-700 dark:text-amber-300 uppercase">
                VS
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-16 bg-border" />

          {/* Key stat */}
          <div className="text-center">
            <div className="font-mono text-2xl md:text-3xl font-black text-amber-700 dark:text-amber-300">
              3.4x
            </div>
            <div className="text-[10px] text-foreground-muted font-medium uppercase tracking-wider">
              CU Gap
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tech strip */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-8 md:px-12 py-2 bg-background border-t border-border">
        {["CU Benchmarks", "Dataflow Gen2", "Spark Notebooks", "dbt Jobs", "Decision Framework"].map(
          (t) => (
            <span key={t} className="text-[10px] text-foreground-subtle font-medium">
              {t}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
