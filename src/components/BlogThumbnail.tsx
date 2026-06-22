export default function BlogThumbnail() {
  return (
    <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden border border-rose-200/60 dark:border-rose-900/40 bg-gradient-to-br from-rose-50 via-background-elevated to-background-elevated dark:from-rose-950/40 dark:via-background-elevated dark:to-background-elevated">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-rose-300/30 blur-3xl dark:bg-rose-700/20" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-16 -left-10 h-40 w-40 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-800/15" aria-hidden="true" />
      {/* Identity strip - top left */}
      <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
        <img
          src="/blog/icons/fabric.svg"
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
        <div className="flex-1 min-w-0 pt-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded-xs font-mono text-[10px] font-medium uppercase tracking-wider bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-border">
              Benchmark
            </span>
            <span className="px-2 py-0.5 rounded-xs font-mono text-[10px] font-medium uppercase tracking-wider bg-background border border-border text-foreground-muted">
              Public Preview
            </span>
          </div>
          <h3 className="font-serif font-normal text-foreground text-lg md:text-xl lg:text-2xl leading-tight mb-2 line-clamp-2">
            dbt Jobs vs <em className="italic font-normal">PySpark</em>
          </h3>
          <p className="text-foreground-muted text-xs md:text-sm line-clamp-1">
            Performance Benchmarks in Microsoft Fabric
          </p>
        </div>

        {/* Right side - Stats */}
        <div className="hidden sm:flex items-center gap-4 md:gap-6 ml-6">
          {/* VS badge */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* PySpark */}
            <div className="text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-md bg-background border border-border flex items-center justify-center mb-1.5">
                <img
                  src="/blog/icons/spark.svg"
                  alt="Apache Spark"
                  className="w-6 h-6 md:w-7 md:h-7"
                />
              </div>
              <span className="font-mono text-foreground-subtle text-[10px] font-medium">PySpark</span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <span className="font-mono text-[10px] font-medium text-foreground-subtle uppercase tracking-wider">vs</span>
            </div>

            {/* dbt */}
            <div className="text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-md bg-background border border-border flex items-center justify-center mb-1.5">
                <img
                  src="/blog/icons/dbt.svg"
                  alt="dbt"
                  className="w-6 h-6 md:w-7 md:h-7"
                />
              </div>
              <span className="font-mono text-foreground-subtle text-[10px] font-medium">dbt</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-16 bg-border" />

          {/* Result */}
          <div className="text-center">
            <div className="font-serif text-3xl md:text-4xl font-normal text-rose-700 dark:text-rose-300 leading-none">2.5x</div>
            <div className="font-mono text-[10px] text-foreground-subtle font-medium uppercase tracking-wider mt-1">Faster</div>
          </div>
        </div>
      </div>

      {/* Bottom tech strip */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-8 md:px-12 py-2 bg-background border-t border-border">
        {["Microsoft Fabric", "dbt-fabric", "PySpark", "Star Schema", "3.6M Rows"].map((t) => (
          <span key={t} className="font-mono text-[10px] text-foreground-subtle font-medium">{t}</span>
        ))}
      </div>
    </div>
  );
}
