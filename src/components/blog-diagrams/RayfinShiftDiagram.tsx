import { ArrowRight } from "lucide-react";

const PB_ICON = "/blog/fabric-capacity-explained/icons/power_bi.svg";
const FABRIC_ICON = "/blog/icons/fabric.svg";

export default function RayfinShiftDiagram() {
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
              The Shift
            </span>
          </div>

          <h3 className="font-serif text-2xl md:text-3xl font-normal text-foreground mb-2 tracking-tight mt-0">
            From Dashboards to <em className="italic">Data Apps</em>
          </h3>
          <p className="text-body-sm text-foreground-muted mb-7 max-w-2xl">
            Power BI did not die. It evolved. The semantic model is still the source of truth. What is new is the app built around it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-stretch">
            <div className="rounded-lg border border-border bg-background p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-amber-100 dark:bg-amber-950/50 flex items-center justify-center shrink-0">
                  <img src={PB_ICON} alt="" aria-hidden="true" className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-foreground leading-tight">Power BI report</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-foreground-subtle mt-0.5">
                    The analytics layer
                  </div>
                </div>
              </div>
              <div className="font-serif text-3xl md:text-4xl text-foreground leading-none mb-1">See</div>
              <div className="text-body-sm text-foreground-muted mb-4">understand the data</div>
              <ul className="space-y-2 text-body-sm text-foreground-muted m-0 p-0 list-none">
                <li className="flex items-center gap-2 pl-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground-subtle shrink-0" aria-hidden="true" />
                  Read only
                </li>
                <li className="flex items-center gap-2 pl-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground-subtle shrink-0" aria-hidden="true" />
                  Explore, slice, drill
                </li>
                <li className="flex items-center gap-2 pl-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground-subtle shrink-0" aria-hidden="true" />
                  Review and decide
                </li>
              </ul>
            </div>

            <div className="flex md:flex-col items-center justify-center gap-2 py-2 md:py-0">
              <ArrowRight
                className="h-6 w-6 text-teal-700 dark:text-teal-300 md:rotate-0 rotate-90"
                aria-hidden="true"
              />
              <div className="text-[10px] font-mono uppercase tracking-wider text-foreground-subtle text-center leading-tight">
                Evolves
                <br />
                into
              </div>
            </div>

            <div className="rounded-lg border border-teal-300 dark:border-teal-700 bg-teal-50/40 dark:bg-teal-950/30 p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-teal-100 dark:bg-teal-950/60 flex items-center justify-center shrink-0">
                  <img src={FABRIC_ICON} alt="" aria-hidden="true" className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-foreground leading-tight">Fabric App + Rayfin</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-teal-700 dark:text-teal-300 mt-0.5">
                    The operational layer
                  </div>
                </div>
              </div>
              <div className="font-serif text-3xl md:text-4xl text-foreground leading-none mb-1">Act</div>
              <div className="text-body-sm text-foreground-muted mb-4">operate on the data</div>
              <ul className="space-y-2 text-body-sm text-foreground-muted m-0 p-0 list-none">
                <li className="flex items-center gap-2 pl-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0" aria-hidden="true" />
                  Read and write (full CRUD)
                </li>
                <li className="flex items-center gap-2 pl-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0" aria-hidden="true" />
                  Forms, buttons, workflows
                </li>
                <li className="flex items-center gap-2 pl-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0" aria-hidden="true" />
                  Run logic or an API on write
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-teal-200/60 dark:border-teal-900/40 bg-teal-50/30 dark:bg-teal-950/20 px-5 py-3 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
            <div className="text-body-sm">
              <strong className="text-foreground">One governed source of truth.</strong>{" "}
              <span className="text-foreground-muted">Both apps read the same semantic model in OneLake.</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="text-center text-body-sm text-foreground-subtle mt-3 italic">
        The shift: Power BI shows the data, a Fabric App acts on it, both on one governed source of truth in OneLake.
      </figcaption>
    </figure>
  );
}
