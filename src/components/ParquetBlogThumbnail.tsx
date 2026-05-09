const ICONS = "/blog/icons";

export default function ParquetBlogThumbnail() {
  return (
    <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden bg-[#0a0a1a]">
      {/* Grid pattern - teal tint */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "linear-gradient(rgba(6,182,212,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.4) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      {/* Gradient orbs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-cyan-500/20 blur-[80px]" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-blue-500/15 blur-[60px]" />
      <div className="absolute top-1/2 left-1/3 w-72 h-36 rounded-full bg-teal-600/10 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-56 h-32 rounded-full bg-violet-500/8 blur-[80px]" />

      {/* Glowing Fabric icon - top left */}
      <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
        <div className="relative">
          <div className="absolute inset-0 blur-md bg-cyan-400/30 rounded-full scale-150" />
          <img
            src={`${ICONS}/fabric.svg`}
            alt="Microsoft Fabric"
            className="relative w-7 h-7 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
          />
        </div>
        <span className="text-[10px] font-semibold text-white/50 tracking-wide">Data Engineering</span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-8 md:px-12">
        {/* Left side */}
        <div className="flex-1 min-w-0 pt-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              Deep Dive
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-violet-500/20 text-violet-400 border border-violet-500/30">
              Table Formats
            </span>
          </div>
          <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold leading-tight mb-2 line-clamp-2">
            Parquet is Not a Table Format
          </h3>
          <p className="text-white/50 text-xs md:text-sm line-clamp-1">
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
                { icon: `${ICONS}/delta_lake.svg`, label: "Delta", color: "border-blue-500/40 bg-blue-500/15 text-blue-400" },
                { icon: `${ICONS}/iceberg.svg`, label: "Iceberg", color: "border-cyan-500/40 bg-cyan-500/15 text-cyan-400" },
                { icon: `${ICONS}/hudi.svg`, label: "Hudi", color: "border-amber-500/40 bg-amber-500/15 text-amber-400" },
              ].map((f) => (
                <div key={f.label} className={`flex flex-col items-center px-2 py-1.5 rounded-md border ${f.color}`}>
                  <img src={f.icon} alt={f.label} className="w-5 h-5 mb-0.5 opacity-90" />
                  <span className="text-[9px] font-bold">{f.label}</span>
                </div>
              ))}
            </div>
            {/* Arrow down */}
            <div className="text-white/20 text-xs">&#9660; sits on top of &#9660;</div>
            {/* Parquet Layer */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-md border border-violet-500/30 bg-violet-500/10">
              <img src={`${ICONS}/parquet.svg`} alt="Parquet" className="w-5 h-5 opacity-80" />
              <div className="text-center">
                <div className="text-[10px] font-bold text-violet-300 uppercase tracking-wider">Parquet</div>
                <div className="text-[8px] text-white/30 mt-0.5">File Format</div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-16 bg-white/10" />

          {/* Key stat */}
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black text-cyan-400">78.6%</div>
            <div className="text-[10px] text-white/40 font-medium uppercase tracking-wider">Iceberg<br/>Adoption</div>
          </div>
        </div>
      </div>

      {/* Bottom tech strip */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-8 md:px-12 py-2 bg-white/[0.03] border-t border-white/[0.06]">
        {["Apache Parquet", "Delta Lake", "Apache Iceberg", "Apache Hudi", "Microsoft Fabric", "Table Formats"].map((t) => (
          <span key={t} className="text-[10px] text-white/25 font-medium">{t}</span>
        ))}
      </div>
    </div>
  );
}