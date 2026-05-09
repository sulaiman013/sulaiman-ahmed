export default function BlogThumbnail() {
  return (
    <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden bg-[#0c1222]">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "linear-gradient(rgba(14,165,233,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.4) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      {/* Gradient orbs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/20 blur-[80px]" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-cyan-500/15 blur-[60px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 rounded-full bg-blue-600/10 blur-[100px]" />

      {/* Glowing Fabric icon - top left */}
      <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
        <div className="relative">
          <div className="absolute inset-0 blur-md bg-emerald-400/30 rounded-full scale-150" />
          <img
            src="/blog/icons/fabric.svg"
            alt="Microsoft Fabric"
            className="relative w-7 h-7 drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]"
          />
        </div>
        <span className="text-[10px] font-semibold text-white/50 tracking-wide">Microsoft Fabric</span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-8 md:px-12">
        {/* Left side */}
        <div className="flex-1 min-w-0 pt-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30">
              Benchmark
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30">
              Public Preview
            </span>
          </div>
          <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold leading-tight mb-2 line-clamp-2">
            dbt Jobs vs PySpark
          </h3>
          <p className="text-white/50 text-xs md:text-sm line-clamp-1">
            Performance Benchmarks in Microsoft Fabric
          </p>
        </div>

        {/* Right side - Stats */}
        <div className="hidden sm:flex items-center gap-4 md:gap-6 ml-6">
          {/* VS badge */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* PySpark */}
            <div className="text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/5 border border-orange-500/20 flex items-center justify-center mb-1.5">
                <img
                  src="/blog/icons/spark.svg"
                  alt="Apache Spark"
                  className="w-6 h-6 md:w-7 md:h-7"
                />
              </div>
              <span className="text-orange-400/70 text-[10px] font-medium">PySpark</span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-wider">vs</span>
            </div>

            {/* dbt */}
            <div className="text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/5 border border-primary/30 flex items-center justify-center mb-1.5 ring-1 ring-primary/20">
                <img
                  src="/blog/icons/dbt.svg"
                  alt="dbt"
                  className="w-6 h-6 md:w-7 md:h-7"
                />
              </div>
              <span className="text-primary/70 text-[10px] font-medium">dbt</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-16 bg-white/10" />

          {/* Result */}
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black text-primary">2.5x</div>
            <div className="text-[10px] text-white/40 font-medium uppercase tracking-wider">Faster</div>
          </div>
        </div>
      </div>

      {/* Bottom tech strip */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-8 md:px-12 py-2 bg-white/[0.03] border-t border-white/[0.06]">
        {["Microsoft Fabric", "dbt-fabric", "PySpark", "Star Schema", "3.6M Rows"].map((t) => (
          <span key={t} className="text-[10px] text-white/25 font-medium">{t}</span>
        ))}
      </div>
    </div>
  );
}
