const ICONS = "/blog/icons";

export default function ParquetBlogThumbnail() {
  return (
    <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden border border-orange-200/60 dark:border-orange-900/40 bg-gradient-to-br from-orange-50 via-background-elevated to-background-elevated dark:from-orange-950/40 dark:via-background-elevated dark:to-background-elevated">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-orange-300/30 blur-3xl dark:bg-orange-700/20" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-16 -left-10 h-40 w-40 rounded-full bg-orange-200/40 blur-3xl dark:bg-orange-800/15" aria-hidden="true" />
      {/* Identity strip - top left */}
      <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
        <img
          src={`${ICONS}/fabric.svg`}
          alt="Microsoft Fabric"
          className="w-7 h-7"
        />
        <span className="font-mono text-[10px] uppercase tracking-wider text-foreground-subtle">
          Data Engineering
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-8 md:px-12">
        {/* Left side */}
        <div className="flex-1 min-w-0 pt-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded-xs font-mono text-[10px] font-medium uppercase tracking-wider bg-orange-100 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 border border-border">
              Deep Dive
            </span>
            <span className="px-2 py-0.5 rounded-xs font-mono text-[10px] font-medium uppercase tracking-wider bg-background border border-border text-foreground-muted">
              Table Formats
            </span>
          </div>
          <h3 className="font-serif font-normal text-foreground text-lg md:text-xl lg:text-2xl leading-tight mb-2 line-clamp-2">
            Parquet is <em className="italic font-normal">not</em> a Table Format
          </h3>
          <p className="text-foreground-muted text-xs md:text-sm line-clamp-1">
            The Confused Engineer's Guide to Delta, Iceberg, and Hudi
          </p>
        </div>

        {/* Right side - File Format vs Table Format visual with icons */}
        <div className="hidden sm:flex items-center gap-4 md:gap-5 ml-6">
          {/* Layer diagram */}
          <div className="flex flex-col items-center gap-1.5">
            {/* Table Format Layer */}
            <div className="flex items-center gap-1.5">
              {[
                { icon: `${ICONS}/delta_lake.svg`, label: "Delta" },
                { icon: `${ICONS}/iceberg.svg`, label: "Iceberg" },
                { icon: `${ICONS}/hudi.svg`, label: "Hudi" },
              ].map((f) => (
                <div key={f.label} className="flex flex-col items-center px-2 py-1.5 rounded-md border border-border bg-background">
                  <img src={f.icon} alt={f.label} className="w-5 h-5 mb-0.5" />
                  <span className="font-mono text-[9px] font-medium text-foreground-muted">{f.label}</span>
                </div>
              ))}
            </div>
            {/* Arrow down */}
            <div className="font-mono text-foreground-subtle text-[10px] uppercase tracking-wider">&#9660; sits on top of &#9660;</div>
            {/* Parquet Layer */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-background">
              <img src={`${ICONS}/parquet.svg`} alt="Parquet" className="w-5 h-5" />
              <div className="text-center">
                <div className="font-mono text-[10px] font-medium text-foreground uppercase tracking-wider">Parquet</div>
                <div className="font-mono text-[8px] text-foreground-subtle mt-0.5">File Format</div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-16 bg-border" />

          {/* Key stat */}
          <div className="text-center">
            <div className="font-serif text-3xl md:text-4xl font-normal text-orange-700 dark:text-orange-300 leading-none">78.6%</div>
            <div className="font-mono text-[10px] text-foreground-subtle font-medium uppercase tracking-wider mt-1">Iceberg<br/>Adoption</div>
          </div>
        </div>
      </div>

      {/* Bottom tech strip */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-8 md:px-12 py-2 bg-background border-t border-border">
        {["Apache Parquet", "Delta Lake", "Apache Iceberg", "Apache Hudi", "Microsoft Fabric", "Table Formats"].map((t) => (
          <span key={t} className="font-mono text-[10px] text-foreground-subtle font-medium">{t}</span>
        ))}
      </div>
    </div>
  );
}
