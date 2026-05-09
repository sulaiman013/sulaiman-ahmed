const ICONS = "/blog/fabric-capacity-explained/icons";

export default function CapacityBlogThumbnail() {
  return (
    <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden bg-[#0a0a1a]">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "linear-gradient(rgba(0,255,136,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.4) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      {/* Gradient orbs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-emerald-500/20 blur-[80px]" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-blue-500/15 blur-[60px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 rounded-full bg-green-600/10 blur-[100px]" />

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
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Part 1 of 2
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30">
              Foundation
            </span>
          </div>
          <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold leading-tight mb-2 line-clamp-2">
            How Fabric Capacity Works
          </h3>
          <p className="text-white/50 text-xs md:text-sm line-clamp-1">
            CUs, Smoothing, Throttling, and SKU Tiers Explained
          </p>
        </div>

        {/* Right side - Visual */}
        <div className="hidden sm:flex items-center gap-4 md:gap-6 ml-6">
          {/* Pool visualization with real icons */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* CU Pool */}
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border-2 border-emerald-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.15)]">
                <span className="text-emerald-400 text-sm md:text-base font-bold">CU</span>
              </div>
              <span className="text-white/40 text-[10px] font-medium mt-1 block">Pool</span>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-6 h-px bg-emerald-500/40" />
              <span className="text-[9px] text-white/25">shared</span>
              <div className="w-6 h-px bg-emerald-500/40" />
            </div>

            {/* Workload icons */}
            <div className="flex flex-col gap-1.5">
              {[
                { icon: `${ICONS}/notebook.svg`, label: "Notebooks" },
                { icon: `${ICONS}/power_bi.svg`, label: "Power BI" },
                { icon: `${ICONS}/data_warehouse.svg`, label: "Warehouse" },
              ].map((w) => (
                <div key={w.label} className="flex items-center gap-2">
                  <img src={w.icon} alt={w.label} className="w-4 h-4 opacity-70" />
                  <span className="text-[10px] font-medium text-white/50">{w.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-16 bg-white/10" />

          {/* Key stat */}
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black text-emerald-400">F2-F2048</div>
            <div className="text-[10px] text-white/40 font-medium uppercase tracking-wider">SKU Range</div>
          </div>
        </div>
      </div>

      {/* Bottom tech strip */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-8 md:px-12 py-2 bg-white/[0.03] border-t border-white/[0.06]">
        {["Capacity Units", "Smoothing", "Throttling", "PAYG vs Reserved", "6 Interactive Diagrams"].map((t) => (
          <span key={t} className="text-[10px] text-white/25 font-medium">{t}</span>
        ))}
      </div>
    </div>
  );
}
