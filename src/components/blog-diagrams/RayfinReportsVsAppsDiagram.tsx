import { Eye, Pointer, Layers } from "lucide-react";

const PB_ICON = "/blog/fabric-capacity-explained/icons/power_bi.svg";
const FABRIC_ICON = "/blog/icons/fabric.svg";
const SEMANTIC_MODEL_ICON = "/blog/fabric-capacity-explained/icons/semantic_model.svg";

const columns = [
  {
    eyebrow: "The analytics layer",
    name: "Power BI",
    verb: "See",
    sub: "understand the data",
    bullets: ["Read only", "Governed analytics", "Explore, slice, drill", "Self-service decisions"],
    icon: { kind: "svg", src: PB_ICON } as const,
    tone: "amber" as const,
    statIcon: Eye,
  },
  {
    eyebrow: "The operational layer",
    name: "Fabric App",
    verb: "Act",
    sub: "operate on the data",
    bullets: ["Read and write", "Forms and workflows", "Logic or API on write", "Role-based access"],
    icon: { kind: "svg", src: FABRIC_ICON } as const,
    tone: "teal" as const,
    statIcon: Pointer,
  },
  {
    eyebrow: "Both, on one model",
    name: "Use both",
    verb: "See + Act",
    sub: "explore and change",
    bullets: ["Reps act", "Managers watch", "One source of truth", "Power BI + Fabric App"],
    icon: { kind: "lucide", icon: Layers } as const,
    tone: "violet" as const,
    statIcon: Layers,
  },
];

const toneClasses: Record<
  "amber" | "teal" | "violet",
  { border: string; iconBg: string; iconText: string; bulletDot: string }
> = {
  amber: {
    border: "border-amber-300/70 dark:border-amber-700/70",
    iconBg: "bg-amber-100 dark:bg-amber-950/50",
    iconText: "text-amber-700 dark:text-amber-300",
    bulletDot: "bg-amber-500 dark:bg-amber-400",
  },
  teal: {
    border: "border-teal-300 dark:border-teal-700",
    iconBg: "bg-teal-100 dark:bg-teal-950/50",
    iconText: "text-teal-700 dark:text-teal-300",
    bulletDot: "bg-teal-600 dark:bg-teal-400",
  },
  violet: {
    border: "border-violet-300/70 dark:border-violet-700/70",
    iconBg: "bg-violet-100 dark:bg-violet-950/50",
    iconText: "text-violet-700 dark:text-violet-300",
    bulletDot: "bg-violet-500 dark:bg-violet-400",
  },
};

export default function RayfinReportsVsAppsDiagram() {
  return (
    <figure className="my-10">
      <div className="rounded-xl border border-teal-200/60 dark:border-teal-900/40 bg-gradient-to-br from-teal-50 via-background-elevated to-background-elevated dark:from-teal-950/40 dark:via-background-elevated dark:to-background-elevated p-6 md:p-8 relative overflow-hidden">
        <div
          className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-teal-300/30 blur-3xl dark:bg-teal-700/20"
          aria-hidden="true"
        />

        <div className="relative">
          <div className="mb-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-pill text-[10px] font-mono uppercase tracking-wider border border-teal-300 bg-teal-100 text-teal-800 dark:border-teal-700 dark:bg-teal-950/50 dark:text-teal-200">
              When to use which
            </span>
          </div>

          <h3 className="font-serif text-2xl md:text-3xl font-normal text-foreground mb-2 tracking-tight mt-0">
            Reports show. <em className="italic">Apps act.</em>
          </h3>
          <p className="text-body-sm text-foreground-muted mb-7 max-w-2xl">
            Both surfaces sit on one governed semantic model. Pick by the primary job.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {columns.map((c) => {
              const t = toneClasses[c.tone];
              return (
                <div
                  key={c.name}
                  className={`rounded-lg border ${t.border} bg-background p-5 flex flex-col`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-md ${t.iconBg} flex items-center justify-center shrink-0`}
                    >
                      {c.icon.kind === "svg" ? (
                        <img src={c.icon.src} alt="" aria-hidden="true" className="w-6 h-6" />
                      ) : (
                        <c.icon.icon className={`h-5 w-5 ${t.iconText}`} aria-hidden="true" />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground leading-tight">{c.name}</div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-foreground-subtle mt-0.5">
                        {c.eyebrow}
                      </div>
                    </div>
                  </div>

                  <div className="font-serif text-3xl text-foreground leading-none mb-1">{c.verb}</div>
                  <div className="text-body-sm text-foreground-muted mb-4">{c.sub}</div>

                  <ul className="space-y-2 text-body-sm text-foreground-muted m-0 p-0 list-none mt-auto">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 pl-0">
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${t.bulletDot}`}
                          aria-hidden="true"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-lg border border-teal-200/60 dark:border-teal-900/40 bg-teal-50/30 dark:bg-teal-950/20 px-5 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-teal-100 dark:bg-teal-950/60 flex items-center justify-center shrink-0">
              <img src={SEMANTIC_MODEL_ICON} alt="" aria-hidden="true" className="w-5 h-5" />
            </div>
            <div className="text-body-sm">
              <strong className="text-foreground">One semantic model in OneLake.</strong>{" "}
              <span className="text-foreground-muted">All three sit on the same governed source of truth.</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="text-center text-body-sm text-foreground-subtle mt-3 italic">
        Power BI to understand, a Fabric App to operate. They share one model, so pick by the primary job.
      </figcaption>
    </figure>
  );
}
