import { ArrowRight, Database, Network, ShieldCheck, Globe } from "lucide-react";

export default function RayfinOneCommandDiagram() {
  const services = [
    { icon: Database, name: "SQL Database", sub: "in Fabric, mirrored to OneLake" },
    { icon: Network, name: "GraphQL API", sub: "generated from your entities" },
    { icon: ShieldCheck, name: "Entra Auth", sub: "Fabric SSO out of the box" },
    { icon: Globe, name: "Static Hosting", sub: "your React app, served by Fabric" },
  ];

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
              The Stack
            </span>
          </div>

          <h3 className="font-serif text-2xl md:text-3xl font-normal text-foreground mb-2 tracking-tight mt-0">
            One TypeScript model, <em className="italic">one command</em>
          </h3>
          <p className="text-body-sm text-foreground-muted mb-7 max-w-2xl">
            You write <code className="text-[0.85em] font-mono">@entity</code> classes. Rayfin provisions the rest.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.2fr)] gap-4 lg:gap-6 items-stretch">
            <div className="rounded-lg border border-border bg-background p-4 font-mono text-[12.5px] leading-relaxed text-foreground-muted overflow-hidden">
              <div className="text-[10px] uppercase tracking-wider text-foreground-subtle mb-3">
                sale.ts
              </div>
              <pre className="m-0 p-0 whitespace-pre-wrap bg-transparent text-foreground-muted">
{`@entity()
@role('authenticated', [
  'create', 'read', 'update'
])
export class Sale {
  @uuid() id!: string;
  @text() customerPhone!: string;
  @decimal() total!: number;
  @date() soldAt!: Date;
}`}
              </pre>
            </div>

            <div className="flex lg:flex-col items-center justify-center gap-3 py-2 lg:py-0">
              <div className="rounded-md border border-teal-300 dark:border-teal-700 bg-teal-100 dark:bg-teal-950/60 px-3 py-1.5 font-mono text-[11px] text-teal-800 dark:text-teal-200 whitespace-nowrap">
                $ npx rayfin up
              </div>
              <ArrowRight
                className="h-5 w-5 text-teal-700 dark:text-teal-300 lg:rotate-90 rotate-0"
                aria-hidden="true"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.name}
                    className="rounded-lg border border-teal-300/60 dark:border-teal-700/60 bg-teal-50/40 dark:bg-teal-950/30 p-4"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-8 h-8 rounded-md bg-teal-100 dark:bg-teal-950/60 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-teal-700 dark:text-teal-300" aria-hidden="true" />
                      </div>
                      <div className="font-semibold text-foreground text-body-sm leading-tight">
                        {s.name}
                      </div>
                    </div>
                    <div className="text-caption text-foreground-subtle leading-snug">{s.sub}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-teal-200/60 dark:border-teal-900/40 bg-teal-50/30 dark:bg-teal-950/20 px-5 py-3 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
            <div className="text-body-sm">
              <strong className="text-foreground">All first-party.</strong>{" "}
              <span className="text-foreground-muted">
                Deployed to your Fabric tenant. No infrastructure to stand up.
              </span>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="text-center text-body-sm text-foreground-subtle mt-3 italic">
        You write the data model. Rayfin provisions the SQL database, the GraphQL API, Entra auth, and hosting.
      </figcaption>
    </figure>
  );
}
