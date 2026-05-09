const ICONS = "/blog/fabric-capacity-explained/icons";

export default function CostBlogThumbnail() {
  return (
    <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden bg-[#0a0a1a]">
      {/* Grid pattern - orange tint */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "linear-gradient(rgba(245,158,11,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.4) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      {/* Gradient orbs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber-500/20 blur-[80px]" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-orange-500/15 blur-[60px]" />
      <div className="absolute top-1/2 left-1/3 w-72 h-36 rounded-full bg-yellow-600/10 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-56 h-32 rounded-full bg-red-500/8 blur-[80px]" />

      {/* Glowing Fabric icon - top left */}
      <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
        <div className="relative">
          <div className="absolute inset-0 blur-md bg-amber-400/30 rounded-full scale-150" />
          <img
            src="/blog/icons/fabric.svg"
            alt="Microsoft Fabric"
            className="relative w-7 h-7 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
          />
        </div>
        <span className="text-[10px] font-semibold text-white/50 tracking-wide">Microsoft Fabric</span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-8 md:px-12">
        {/* Left side */}
        <div className="flex-1 min-w-0 pt-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30">
              Part 2 of 2
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-500/20 text-red-400 border border-red-500/30">
              Showdown
            </span>
          </div>
          <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold leading-tight mb-2 line-clamp-2">
            The Compute Showdown
          </h3>
          <p className="text-white/50 text-xs md:text-sm line-clamp-1">
            Which Tool Gives You the Most Bang for Your CU Buck?
          </p>
        </div>

        {/* Right side - 4 contenders in a battle layout */}
        <div className="hidden sm:flex items-center gap-4 md:gap-6 ml-6">
          {/* 2x2 contender grid with VS overlay */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: `${ICONS}/dataflow_gen2.svg`, label: "Dataflow", color: "border-yellow-500/30 bg-yellow-500/10" },
                { icon: `${ICONS}/notebook.svg`, label: "Spark", color: "border-purple-500/30 bg-purple-500/10" },
                { icon: `${ICONS}/data_warehouse.svg`, label: "dbt", color: "border-cyan-500/30 bg-cyan-500/10" },
                { icon: `${ICONS}/pipeline.svg`, label: "Pipeline", color: "border-green-500/30 bg-green-500/10" },
              ].map((w) => (
                <div key={w.label} className="flex flex-col items-center">
                  <div className={`w-10 h-10 md:w-11 md:h-11 rounded-lg border ${w.color} flex items-center justify-center`}>
                    <img src={w.icon} alt={w.label} className="w-5 h-5 md:w-6 md:h-6 opacity-80" />
                  </div>
                  <span className="text-[9px] font-medium text-white/40 mt-1">{w.label}</span>
                </div>
              ))}
            </div>
            {/* VS badge centered on the grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#0a0a1a] border border-amber-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              <span className="text-[8px] font-black text-amber-400 uppercase">VS</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-16 bg-white/10" />

          {/* Key stat */}
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black text-amber-400">3.4x</div>
            <div className="text-[10px] text-white/40 font-medium uppercase tracking-wider">CU Gap</div>
          </div>
        </div>
      </div>

      {/* Bottom tech strip */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-8 md:px-12 py-2 bg-white/[0.03] border-t border-white/[0.06]">
        {["CU Benchmarks", "Dataflow Gen2", "Spark Notebooks", "dbt Jobs", "Decision Framework"].map((t) => (
          <span key={t} className="text-[10px] text-white/25 font-medium">{t}</span>
        ))}
      </div>
    </div>
  );
}
