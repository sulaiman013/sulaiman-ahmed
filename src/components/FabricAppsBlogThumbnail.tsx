const SHARED = "/blog/icons";

export default function FabricAppsBlogThumbnail() {
  return (
    <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden border border-teal-200/60 dark:border-teal-900/40 bg-gradient-to-br from-teal-50 via-background-elevated to-background-elevated dark:from-teal-950/40 dark:via-background-elevated dark:to-background-elevated">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-teal-300/30 blur-3xl dark:bg-teal-700/20" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-16 -left-10 h-40 w-40 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-800/15" aria-hidden="true" />
      {/* Identity strip - top left */}
      <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
        <img
          src={`${SHARED}/fabric.svg`}
          alt="Microsoft Fabric"
          className="w-7 h-7"
        />
        <span className="font-mono text-[10px] uppercase tracking-wider text-foreground-subtle">
          Microsoft Fabric
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-8 md:px-12">
        {/* Left side */}
        <div className="flex-1 min-w-0 pt-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded-xs font-mono text-[10px] font-medium uppercase tracking-wider bg-teal-100 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-border">
              Fabric Apps
            </span>
            <span className="px-2 py-0.5 rounded-xs font-mono text-[10px] font-medium uppercase tracking-wider bg-background border border-border text-foreground-muted">
              Rayfin
            </span>
          </div>
          <h3 className="font-serif font-normal text-foreground text-lg md:text-xl lg:text-2xl leading-tight mb-2 line-clamp-2">
            From Dashboards to <em className="italic font-normal">Data Apps</em>
          </h3>
          <p className="text-foreground-muted text-xs md:text-sm line-clamp-1">
            Building Fabric Apps with Rayfin
          </p>
        </div>

        {/* Right side - the translytical loop, write to read */}
        <div className="hidden sm:flex items-center gap-4 md:gap-5 ml-6">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="px-2.5 py-1.5 rounded-md border border-border bg-background text-center">
                <div className="font-mono text-[10px] font-medium text-foreground">Write</div>
                <div className="font-mono text-[8px] text-foreground-subtle">App</div>
              </div>
              <div className="text-foreground-subtle text-xs">&#8594;</div>
              <div className="px-2.5 py-1.5 rounded-md border border-border bg-background text-center">
                <div className="font-mono text-[10px] font-medium text-foreground">OneLake</div>
                <div className="font-mono text-[8px] text-foreground-subtle">mirror</div>
              </div>
              <div className="text-foreground-subtle text-xs">&#8594;</div>
              <div className="px-2.5 py-1.5 rounded-md border border-border bg-teal-100 dark:bg-teal-950/40 text-center">
                <div className="font-mono text-[10px] font-medium text-teal-700 dark:text-teal-300">Read</div>
                <div className="font-mono text-[8px] text-teal-700 dark:text-teal-300/70">App</div>
              </div>
            </div>
            <div className="font-mono text-foreground-subtle text-[10px] uppercase tracking-wider">translytical loop</div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-sm border border-border bg-background font-mono">
              <span className="text-[10px] text-teal-700 dark:text-teal-300 font-medium">$</span>
              <span className="text-[10px] text-foreground-muted">npx rayfin up</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-16 bg-border" />

          {/* Key concept */}
          <div className="text-center">
            <div className="font-serif text-2xl md:text-3xl font-normal text-teal-700 dark:text-teal-300 leading-none">2 apps</div>
            <div className="font-mono text-[10px] text-foreground-subtle font-medium uppercase tracking-wider mt-1">One<br/>Source of Truth</div>
          </div>
        </div>
      </div>

      {/* Bottom tech strip */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-8 md:px-12 py-2 bg-background border-t border-border">
        {["Microsoft Fabric", "Rayfin", "Direct Lake", "OneLake", "Power BI", "Translytical"].map((t) => (
          <span key={t} className="font-mono text-[10px] text-foreground-subtle font-medium">{t}</span>
        ))}
      </div>
    </div>
  );
}
