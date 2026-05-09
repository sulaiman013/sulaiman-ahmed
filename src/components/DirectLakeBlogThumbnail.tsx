const ICONS = "/blog/fabric-capacity-explained/icons";
const SHARED = "/blog/icons";

export default function DirectLakeBlogThumbnail() {
  return (
    <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden bg-[#080c14]">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "linear-gradient(rgba(242,80,34,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(242,80,34,0.35) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      {/* Gradient orbs - Fabric branded colors */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#F25022]/20 blur-[80px]" />
      <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-[#F25022]/12 via-[#FFB900]/6 to-transparent" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#00A4EF]/12 blur-[60px]" />
      <div className="absolute top-1/3 left-1/4 w-64 h-32 rounded-full bg-[#7FBA00]/8 blur-[80px]" />

      {/* Glowing Fabric icon - top left */}
      <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
        <div className="relative">
          <div className="absolute inset-0 blur-md bg-[#F25022]/30 rounded-full scale-150" />
          <img
            src={`${SHARED}/fabric.svg`}
            alt="Microsoft Fabric"
            className="relative w-7 h-7 drop-shadow-[0_0_8px_rgba(242,80,34,0.5)]"
          />
        </div>
        <span className="text-[10px] font-semibold text-[#F25022]/80 tracking-wide">Microsoft Fabric</span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-8 md:px-12">
        {/* Left side */}
        <div className="flex-1 min-w-0 pt-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#7FBA00]/15 text-[#7FBA00] border border-[#7FBA00]/30">
              Complete Guide
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#00A4EF]/15 text-[#00A4EF] border border-[#00A4EF]/30">
              Semantic Model
            </span>
          </div>
          <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold leading-tight mb-2 line-clamp-2">
            Direct Lake Semantic Models
          </h3>
          <p className="text-white/50 text-xs md:text-sm line-clamp-1">
            The Fastest Storage Mode in Fabric
          </p>
        </div>

        {/* Right side - Direct Lake vs DQ visual with icons */}
        <div className="hidden sm:flex items-center gap-4 md:gap-5 ml-6">
          {/* Flow diagram */}
          <div className="flex flex-col items-center gap-1.5">
            {/* Storage modes */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[#7FBA00]/30 bg-[#7FBA00]/10">
                <img src={`${ICONS}/semantic_model.svg`} alt="Semantic Model" className="w-4 h-4 opacity-80" />
                <div className="text-center">
                  <div className="text-[10px] font-bold text-[#7FBA00]">Direct Lake</div>
                  <div className="text-[8px] text-[#7FBA00]/50">&lt; 1 second</div>
                </div>
              </div>
              <div className="text-white/30 text-xs">vs</div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-red-500/30 bg-red-500/10">
                <img src={`${ICONS}/sql_database.svg`} alt="DirectQuery" className="w-4 h-4 opacity-60" />
                <div className="text-center">
                  <div className="text-[10px] font-bold text-red-400">DQ Fallback</div>
                  <div className="text-[8px] text-red-400/50">4 min each</div>
                </div>
              </div>
            </div>
            {/* Arrow */}
            <div className="text-white/20 text-xs">&#9660; diagnose with &#9660;</div>
            {/* Semantic Link Labs */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#00A4EF]/30 bg-[#00A4EF]/10">
              <img src={`${ICONS}/notebook.svg`} alt="Notebook" className="w-4 h-4 opacity-80" />
              <div className="text-center">
                <div className="text-[10px] font-bold text-[#00A4EF] uppercase tracking-wider">Semantic Link Labs</div>
                <div className="text-[8px] text-white/30 mt-0.5">20 Python functions</div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-16 bg-white/10" />

          {/* Key concept */}
          <div className="text-center">
            <div className="text-xl md:text-2xl font-black text-[#F25022]">~2 sec</div>
            <div className="text-[10px] text-white/40 font-medium uppercase tracking-wider">Framing<br/>Not Refresh</div>
          </div>
        </div>
      </div>

      {/* Bottom tech strip */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-8 md:px-12 py-2 bg-white/[0.03] border-t border-white/[0.06]">
        {["Direct Lake", "Power BI", "Delta Lake", "Semantic Link Labs", "V-Order", "Guardrails"].map((t) => (
          <span key={t} className="text-[10px] text-white/25 font-medium">{t}</span>
        ))}
      </div>
    </div>
  );
}