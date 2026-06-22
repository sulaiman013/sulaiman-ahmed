const ICONS = "/blog/fabric-capacity-explained/icons";

export default function CapacityBlogThumbnail() {
  return (
    <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden border border-emerald-200/60 dark:border-emerald-900/40 bg-gradient-to-br from-emerald-50 via-background-elevated to-background-elevated dark:from-emerald-950/40 dark:via-background-elevated dark:to-background-elevated">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-700/20" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-16 -left-10 h-40 w-40 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-800/15" aria-hidden="true" />
      {/* Fabric source eyebrow - top left */}
      <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
        <img
          src="/blog/icons/fabric.svg"
          alt="Microsoft Fabric"
          className="w-6 h-6"
        />
        <span className="text-caption font-mono uppercase tracking-wider text-foreground-subtle">
          Microsoft Fabric
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-8 md:px-12">
        {/* Left side */}
        <div className="flex-1 min-w-0 pt-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded-pill text-[10px] font-semibold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">
              Part 1 of 2
            </span>
            <span className="px-2 py-0.5 rounded-pill text-[10px] font-semibold uppercase tracking-wider border border-border text-foreground-muted">
              Foundation
            </span>
          </div>
          <h3 className="font-serif text-foreground text-lg md:text-xl lg:text-2xl font-normal leading-tight mb-2 line-clamp-2">
            How Fabric Capacity <em className="italic font-normal">works</em>
          </h3>
          <p className="text-foreground-muted text-body-sm line-clamp-1">
            CUs, smoothing, throttling, and SKU tiers explained
          </p>
        </div>

        {/* Right side - Visual */}
        <div className="hidden sm:flex items-center gap-4 md:gap-6 ml-6">
          {/* Pool visualization with real icons */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* CU Pool */}
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 border border-border-strong flex items-center justify-center">
                <span className="text-emerald-700 dark:text-emerald-300 text-sm md:text-base font-bold font-mono">CU</span>
              </div>
              <span className="text-foreground-subtle text-[10px] font-medium mt-1 block">Pool</span>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-6 h-px bg-border-strong" />
              <span className="text-[9px] text-foreground-subtle">shared</span>
              <div className="w-6 h-px bg-border-strong" />
            </div>

            {/* Workload icons */}
            <div className="flex flex-col gap-1.5">
              {[
                { icon: `${ICONS}/notebook.svg`, label: "Notebooks" },
                { icon: `${ICONS}/power_bi.svg`, label: "Power BI" },
                { icon: `${ICONS}/data_warehouse.svg`, label: "Warehouse" },
              ].map((w) => (
                <div key={w.label} className="flex items-center gap-2">
                  <img src={w.icon} alt={w.label} className="w-4 h-4" />
                  <span className="text-[10px] font-medium text-foreground-muted">{w.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-16 bg-border" />

          {/* Key stat */}
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold font-mono text-emerald-700 dark:text-emerald-300">F2-F2048</div>
            <div className="text-[10px] text-foreground-subtle font-medium uppercase tracking-wider mt-1">SKU Range</div>
          </div>
        </div>
      </div>

      {/* Bottom tech strip */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-8 md:px-12 py-2 bg-background border-t border-border">
        {["Capacity Units", "Smoothing", "Throttling", "PAYG vs Reserved", "6 Interactive Diagrams"].map((t) => (
          <span key={t} className="text-[10px] text-foreground-subtle font-medium">{t}</span>
        ))}
      </div>
    </div>
  );
}
