const ICONS = "/blog/fabric-capacity-explained/icons";
const SHARED = "/blog/icons";

export default function MLVBlogThumbnail() {
  return (
    <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden bg-[#080c14]">
      {/* Grid pattern - subtle teal/blue tint */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "linear-gradient(rgba(6,182,212,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.35) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      {/* Gradient orbs - Fabric branded colors */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#F25022]/20 blur-[80px]" />
      <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-[#F25022]/12 via-[#FFB900]/6 to-transparent" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#00A4EF]/12 blur-[60px]" />
      <div className="absolute top-1/3 left-1/4 w-64 h-32 rounded-full bg-emerald-500/8 blur-[80px]" />

      {/* Glowing Fabric icon - top left */}
      <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
        <div className="relative">
          <div className="absolute inset-0 blur-md bg-emerald-400/30 rounded-full scale-150" />
          <img
            src={`${SHARED}/fabric.svg`}
            alt="Microsoft Fabric"
            className="relative w-7 h-7 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
          />
        </div>
        <span className="text-[10px] font-semibold text-emerald-400/90 tracking-wide">Microsoft Fabric</span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-8 md:px-12">
        {/* Left side */}
        <div className="flex-1 min-w-0 pt-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#F25022]/15 text-[#F25022] border border-[#F25022]/30">
              Preview Feature
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              Lakehouse
            </span>
          </div>
          <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold leading-tight mb-2 line-clamp-2">
            Materialized Lake Views
          </h3>
          <p className="text-white/50 text-xs md:text-sm line-clamp-1">
            Your Lakehouse Just Got a Memory
          </p>
        </div>

        {/* Right side - MLV flow visual with icons */}
        <div className="hidden sm:flex items-center gap-4 md:gap-5 ml-6">
          {/* Flow diagram */}
          <div className="flex flex-col items-center gap-1.5">
            {/* SQL View vs MLV */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-red-500/30 bg-red-500/10">
                <img src={`${ICONS}/sql_database.svg`} alt="SQL" className="w-4 h-4 opacity-70" />
                <div className="text-center">
                  <div className="text-[10px] font-bold text-red-400">SQL View</div>
                  <div className="text-[8px] text-red-400/50">4 min each time</div>
                </div>
              </div>
              <div className="text-white/30 text-xs">vs</div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10">
                <img src={`${ICONS}/lakehouse.svg`} alt="Lakehouse" className="w-4 h-4 opacity-80" />
                <div className="text-center">
                  <div className="text-[10px] font-bold text-emerald-400">MLV</div>
                  <div className="text-[8px] text-emerald-400/50">sub-second</div>
                </div>
              </div>
            </div>
            {/* Arrow */}
            <div className="text-white/20 text-xs">&#9660; powered by &#9660;</div>
            {/* Optimal refresh */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#F25022]/30 bg-[#F25022]/10">
              <img src={`${SHARED}/delta_lake.svg`} alt="Delta Lake" className="w-4 h-4 opacity-80" />
              <div className="text-center">
                <div className="text-[10px] font-bold text-[#F25022] uppercase tracking-wider">Optimal Refresh</div>
                <div className="text-[8px] text-white/30 mt-0.5">Incremental / Full / Skip</div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-16 bg-white/10" />

          {/* Key concept */}
          <div className="text-center">
            <div className="text-xl md:text-2xl font-black text-[#F25022]">0 CU</div>
            <div className="text-[10px] text-white/40 font-medium uppercase tracking-wider">When No<br/>Data Changed</div>
          </div>
        </div>
      </div>

      {/* Bottom tech strip */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-8 md:px-12 py-2 bg-white/[0.03] border-t border-white/[0.06]">
        {["Materialized Lake Views", "Lakehouse", "Delta Lake", "Spark SQL", "Data Quality", "Lineage"].map((t) => (
          <span key={t} className="text-[10px] text-white/25 font-medium">{t}</span>
        ))}
      </div>
    </div>
  );
}