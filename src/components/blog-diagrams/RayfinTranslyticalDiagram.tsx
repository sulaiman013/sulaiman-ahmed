import { ArrowRight, PencilLine, BarChart3 } from "lucide-react";

const SQL_DB_ICON = "/blog/fabric-capacity-explained/icons/sql_database.svg";
const LAKEHOUSE_ICON = "/blog/fabric-capacity-explained/icons/lakehouse.svg";
const SEMANTIC_MODEL_ICON = "/blog/fabric-capacity-explained/icons/semantic_model.svg";

type Step = {
  kind: "lucide" | "svg";
  icon?: typeof PencilLine;
  src?: string;
  label: string;
  sub: string;
  owner: "you build" | "automatic";
};

const steps: Step[] = [
  { kind: "lucide", icon: PencilLine, label: "Operational app", sub: "writes a row", owner: "you build" },
  { kind: "svg", src: SQL_DB_ICON, label: "Fabric SQL DB", sub: "first-party item", owner: "you build" },
  { kind: "svg", src: LAKEHOUSE_ICON, label: "OneLake mirror", sub: "Delta Parquet", owner: "automatic" },
  { kind: "svg", src: SEMANTIC_MODEL_ICON, label: "Direct Lake model", sub: "no refresh job", owner: "you build" },
  { kind: "lucide", icon: BarChart3, label: "Analytics app", sub: "reads in near real time", owner: "you build" },
];

export default function RayfinTranslyticalDiagram() {
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
              The Loop
            </span>
          </div>

          <h3 className="font-serif text-2xl md:text-3xl font-normal text-foreground mb-2 tracking-tight mt-0">
            Operational write, <em className="italic">analytical read</em>, one copy
          </h3>
          <p className="text-body-sm text-foreground-muted mb-7 max-w-2xl">
            Five steps. Two are automatic. Three are yours. Knowing the split is the whole trick.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[repeat(5,minmax(0,1fr))] gap-3 lg:gap-2 items-stretch">
            {steps.map((step, i) => {
              const isAuto = step.owner === "automatic";
              return (
                <div key={step.label} className="contents">
                  <div className="rounded-lg border border-border bg-background p-4 flex flex-col items-center text-center">
                    <div
                      className={`w-12 h-12 rounded-md flex items-center justify-center shrink-0 mb-2 ${
                        isAuto
                          ? "bg-teal-100 dark:bg-teal-950/60"
                          : "bg-background-elevated border border-border"
                      }`}
                    >
                      {step.kind === "lucide" && step.icon ? (
                        <step.icon
                          className={`h-6 w-6 ${
                            isAuto ? "text-teal-700 dark:text-teal-300" : "text-foreground-muted"
                          }`}
                          aria-hidden="true"
                        />
                      ) : (
                        <img src={step.src} alt="" aria-hidden="true" className="w-7 h-7" />
                      )}
                    </div>
                    <div className="font-semibold text-foreground text-body-sm leading-tight mb-1">
                      {step.label}
                    </div>
                    <div className="text-caption text-foreground-subtle leading-snug mb-2">{step.sub}</div>
                    <div
                      className={`mt-auto inline-flex items-center px-2 py-0.5 rounded-pill text-[9px] font-mono uppercase tracking-wider ${
                        isAuto
                          ? "border border-teal-300 bg-teal-100 text-teal-800 dark:border-teal-700 dark:bg-teal-950/60 dark:text-teal-200"
                          : "border border-border bg-background-elevated text-foreground-muted"
                      }`}
                    >
                      {step.owner}
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="hidden lg:flex items-center justify-center -mx-1"
                      aria-hidden="true"
                    >
                      <ArrowRight className="h-5 w-5 text-teal-700 dark:text-teal-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-lg border border-teal-200/60 dark:border-teal-900/40 bg-teal-50/30 dark:bg-teal-950/20 px-5 py-3 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
            <div className="text-body-sm">
              <strong className="text-foreground">One copy of the data.</strong>{" "}
              <span className="text-foreground-muted">Write it in one app, read it in another. No nightly ETL.</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="text-center text-body-sm text-foreground-subtle mt-3 italic">
        One copy of the data. Write it in one app, read it in another, near real time, with no nightly ETL in between.
      </figcaption>
    </figure>
  );
}
