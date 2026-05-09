const ICONS = "/blog/fabric-capacity-explained/icons";

export default function PowerBIAIAssistantBlogThumbnail() {
  return (
    <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden bg-[#080c14]">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "linear-gradient(rgba(0,164,239,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(0,164,239,0.35) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      {/* Aurora gradient orbs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#00A4EF]/22 blur-[80px]" />
      <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-[#F2C811]/12 via-[#00A4EF]/8 to-transparent" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#F25022]/14 blur-[70px]" />
      <div className="absolute top-1/3 left-1/4 w-64 h-32 rounded-full bg-[#7FBA00]/8 blur-[80px]" />

      {/* Top-left brand badge */}
      <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
        <div className="relative">
          <div className="absolute inset-0 blur-md bg-[#F2C811]/35 rounded-full scale-150" />
          <img
            src={`${ICONS}/power_bi.svg`}
            alt="Power BI"
            className="relative w-7 h-7 drop-shadow-[0_0_8px_rgba(242,200,17,0.55)]"
          />
        </div>
        <span className="text-[10px] font-semibold text-[#F2C811]/80 tracking-wide">Power BI + Custom AI</span>
      </div>

      {/* Top-right metric badge */}
      <div className="absolute top-3 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#7FBA00]/15 border border-[#7FBA00]/40">
        <span className="text-[10px] font-bold text-[#7FBA00]">49% &rarr; 92%</span>
        <span className="text-[8px] text-white/40 uppercase tracking-wider">in 5 days</span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-7 md:px-10 pt-2">
        {/* Left side: title + tagline + cost callout */}
        <div className="flex-1 min-w-0 max-w-[58%]">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#00A4EF]/15 text-[#00A4EF] border border-[#00A4EF]/30">
              Architecture
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#F25022]/15 text-[#F25022] border border-[#F25022]/30">
              Production Story
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#F2C811]/15 text-[#F2C811] border border-[#F2C811]/30">
              vs Copilot
            </span>
          </div>
          <h3 className="text-white text-base md:text-lg lg:text-xl font-bold leading-tight mb-1.5 line-clamp-2">
            The Custom Power BI AI Assistant
          </h3>
          <p className="text-white/55 text-[11px] md:text-xs line-clamp-1 mb-3">
            Microsoft Copilot or Build Your Own? An honest cost and control breakdown.
          </p>

          {/* Inline cost callout */}
          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-[#7FBA00]/30 bg-gradient-to-r from-[#7FBA00]/10 to-transparent w-fit">
            <span className="text-[10px] uppercase tracking-wider text-white/50 font-medium">Total cost</span>
            <span className="text-[14px] font-black text-[#7FBA00]">~$800/yr</span>
            <span className="text-[9px] text-white/30">vs $3,144 Fabric F2 path</span>
          </div>
        </div>

        {/* Right side: three-route visual */}
        <div className="hidden sm:flex flex-col items-center gap-2 ml-4">
          {/* Title for the visual */}
          <span className="text-[8.5px] uppercase tracking-[0.15em] text-white/35 font-semibold">Three routes</span>

          {/* Three boxes with checkmarks and crosses */}
          <div className="flex flex-col gap-1.5 w-[230px]">
            {/* Power BI Copilot */}
            <div className="flex items-center justify-between px-2.5 py-1.5 rounded-md border border-[#FFB900]/25 bg-[#FFB900]/5">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-[#FFB900]">Power BI Copilot</span>
              </div>
              <span className="text-[9px] text-white/40">F2+ locked</span>
            </div>
            {/* Fabric Data Agent */}
            <div className="flex items-center justify-between px-2.5 py-1.5 rounded-md border border-[#00A4EF]/25 bg-[#00A4EF]/5">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-[#00A4EF]">Fabric Data Agent</span>
              </div>
              <span className="text-[9px] text-white/40">25x25 cap</span>
            </div>
            {/* Custom Chatbot */}
            <div className="flex items-center justify-between px-2.5 py-2 rounded-md border border-[#7FBA00]/40 bg-gradient-to-r from-[#7FBA00]/15 to-[#00A4EF]/10 shadow-[0_0_20px_rgba(127,186,0,0.15)]">
              <div className="flex items-center gap-1.5">
                <span className="text-[2px]">&#9889;</span>
                <span className="text-[10px] font-bold bg-gradient-to-r from-[#7FBA00] to-[#00A4EF] bg-clip-text text-transparent">Custom Chatbot</span>
              </div>
              <span className="text-[9px] text-[#7FBA00] font-bold">FULL CONTROL</span>
            </div>
          </div>

          {/* Recipe layer callout */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#F25022]/30 bg-[#F25022]/5 mt-1">
            <span className="text-[9px] font-bold text-[#F25022] uppercase tracking-wider">Recipe layer</span>
            <span className="text-[9px] text-white/40">~50x cheaper, deterministic</span>
          </div>
        </div>
      </div>

      {/* Bottom tech strip */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-7 md:px-10 py-2 bg-white/[0.03] border-t border-white/[0.06]">
        {["Power BI", "OpenRouter", "Vector DB", "DAX", "Multi-tenant", "Edge Runtime", "Vision Models"].map((t) => (
          <span key={t} className="text-[10px] text-white/25 font-medium">{t}</span>
        ))}
      </div>
    </div>
  );
}
