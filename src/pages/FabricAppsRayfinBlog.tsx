import { ArrowLeft, Calendar, Clock, User, ExternalLink, Eye, Github, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import { useViewCount } from "@/hooks/useViewCount";

const IMG = "/blog/dashboards-to-data-apps-rayfin";

function Callout({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "tip" | "warning" }) {
  const styles = {
    info: "border-primary/40 bg-primary/5",
    tip: "border-green-500/40 bg-green-500/5",
    warning: "border-amber-500/40 bg-amber-500/5",
  };
  return <div className={`blog-callout ${styles[type]}`}>{children}</div>;
}

function CodeBlock({ lang, children }: { lang: string; children: string }) {
  return (
    <div className="blog-code-block">
      <div className="blog-code-header"><span>{lang}</span></div>
      <pre><code>{children}</code></pre>
    </div>
  );
}

export default function FabricAppsRayfinBlog() {
  const views = useViewCount("dashboards-to-data-apps-rayfin");
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-28 pb-16 section-padding">
        <div className="max-w-5xl mx-auto blog-article-panel">
          <div className="max-w-3xl">
            {/* Back link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["Microsoft Fabric", "Rayfin", "Fabric Apps", "Power BI", "Direct Lake", "OneLake", "Data Engineering"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border border-border/60 text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight mb-5">
              From Dashboards to Data Apps: Building Microsoft Fabric Apps with Rayfin
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-10 pb-10 border-b border-border/60">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" /> Sulaiman Ahmed
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> June 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> 22 min read
              </span>
              {views != null && (
                <span className="flex items-center gap-1.5">
                  <Eye className="h-4 w-4" /> {views.toLocaleString()} views
                </span>
              )}
            </div>
          </div>

          {/* --- ARTICLE BODY --- */}
          <div className="blog-prose">

            {/* TL;DR */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 my-8">
              <h3 className="text-base font-bold text-foreground mt-0 mb-3 flex items-center gap-2">
                <span className="text-lg">&#9889;</span> TL;DR: What You Will Learn
              </h3>
              <ul className="space-y-1.5 mb-0 text-[14px]">
                <li><strong>Power BI did not die. It evolved.</strong> The semantic model is still the source of truth. What is new is the operational app built around it: a Fabric App.</li>
                <li><strong>Rayfin is the way you build one.</strong> Microsoft's open-source SDK, from Build 2026, takes a TypeScript data model and provisions a Fabric SQL database, a GraphQL API, Entra authentication, and hosting. You scaffold with <code>npm create @microsoft/rayfin@latest</code>, then deploy with <code>npx rayfin up</code>.</li>
                <li><strong>The translytical loop is the magic.</strong> A Fabric SQL database auto-mirrors to OneLake as Delta. A Direct Lake model reads that one copy. Analytics see operational writes in near real time, with no nightly ETL.</li>
                <li><strong>Demo 1, the Lead Pipeline app:</strong> an operational CRM, a Kanban board plus an analyst-grade dashboard, all reading one Direct Lake semantic model.</li>
                <li><strong>Demo 2, the Superstore:</strong> two apps, a self-checkout that writes a sale and an analytics app that reads it back, wired together through the translytical loop, with a customer and order drill-through.</li>
                <li><strong>Reports show. Apps act.</strong> Power BI to understand, a Fabric App to operate, both on one governed model. Use both.</li>
                <li><strong>Access is Entra-gated.</strong> A model-connected app runs inside the Fabric portal, is shared like any Fabric item, and has no anonymous public link.</li>
                <li><strong>It is all open source.</strong> Both repositories and both walkthrough videos are linked at the end.</li>
              </ul>
            </div>

            {/* ========== SECTION 1: THE SHIFT ========== */}
            <h2>The Question Nobody Wants to Ask Out Loud: Is Power BI Dead?</h2>

            <p>
              Here is a moment that happens in every analytics team. An analyst builds a beautiful dashboard. Win rate
              by region, pipeline value, the funnel, all of it. A sales manager opens it, sees that three deals are
              stalling, and then does the only thing the dashboard lets her do: she switches to a different tool, a
              CRM, a spreadsheet, an email, to actually <em>do</em> something about it.
            </p>

            <p>
              That switch is the gap. Power BI is brilliant at helping a business <strong>see</strong> its data. But
              seeing is not the same as doing. Every report is a read-only window. The moment you want to act, capture
              a new lead, move a deal, ring up a sale, record a decision, you leave the analytics behind and go
              somewhere else. Then someone has to stitch that "somewhere else" back into the warehouse with a pipeline,
              and the cycle of nightly ETL and stale dashboards begins again.
            </p>

            <p>
              So when Microsoft started talking about <strong>Fabric Apps</strong> and shipped an SDK called
              <strong> Rayfin</strong> at Build 2026, the headlines wrote themselves. New app model. Write-back on
              Fabric. Is this the end of Power BI?
            </p>

            <p>
              The honest answer, and the one I built two apps to prove, is <strong>no. Power BI evolved.</strong> The
              semantic model is still the single source of truth, still fed by your upstream data, still the thing
              every report queries. What is new is the <strong>app</strong> built around it. Reporting did not get
              replaced. It got a write side.
            </p>

            <ImageLightbox
              src={`${IMG}/01-dashboards-to-data-apps.png`}
              alt="From dashboards to data apps: a Power BI report (read only, see the data) evolves into a Fabric App with Rayfin (read and write, act on the data), both sitting on one governed semantic model in OneLake"
              variant="diagram"
              caption="The shift: Power BI shows the data, a Fabric App acts on it, both on one governed source of truth in OneLake."
            />

            <p>
              This post is the complete tour. I will cover what a Fabric App actually is, what Rayfin provisions for
              you, and the translytical loop that ties operational writes to analytical reads. Then I will walk
              through two apps I built end to end: an operational <strong>Lead Pipeline</strong> CRM, and a two-app
              <strong> Superstore</strong> where a self-checkout writes sales that show up, named, in an analytics app
              about a minute later.
            </p>

            {/* ========== SECTION 2: WHAT IS A FABRIC APP + RAYFIN ========== */}
            <div className="blog-divider" />

            <h2>What Is a Fabric App, and What Is Rayfin?</h2>

            <p>
              Quick grounding, because three names do a lot of work here. <strong>Microsoft Fabric</strong> unifies
              your data in <strong>OneLake</strong>, one logical lake, one open copy in <strong>Delta Parquet</strong>
              {" "}(Delta Lake tables backed by Parquet files), that every Fabric workload reads without moving it.
              A <strong>Direct Lake</strong> semantic model reads straight from those OneLake Delta tables, loading
              columns into memory on demand via transcoding. After the first query warms the columns, performance is
              comparable to Import mode, but with near-real-time freshness instead of refresh cycles. If you want the
              deep version of that last part, I wrote a whole guide on it:
              {" "}
              <Link to="/blog/fabric-direct-lake-semantic-models" className="text-primary hover:underline">
                Direct Lake Semantic Models
              </Link>.
            </p>

            <p>
              A <strong>Fabric App</strong> is the new item type that runs a real application on top of all that. It
              is a managed service inside your Fabric tenant: app hosting, a database, generated APIs, and
              authentication, all first-party. And <strong>Rayfin</strong> is how you build and deploy one.
            </p>

            <p>
              Rayfin is Microsoft's open-source SDK and CLI, announced at Build 2026 and currently in public preview.
              You describe your data as TypeScript classes with decorators. You run one command. Fabric provisions the
              entire backend and hosts your frontend.
            </p>

            <ImageLightbox
              src={`${IMG}/02-rayfin-one-command.png`}
              alt="One command, a full backend: a TypeScript @entity model passes through npx rayfin up and Fabric provisions a SQL database, a GraphQL data API, Entra authentication, and static hosting"
              variant="diagram"
              caption="You write the data model. Rayfin provisions the SQL database, the GraphQL API, Entra auth, and hosting, deployed to your tenant."
            />

            <p>
              A data model in Rayfin looks like this. Decorators describe the columns and the relationships, and the
              CLI compiles them into a real SQL schema, a typed client, and row-level authorization rules.
            </p>

            <CodeBlock lang="typescript">{`import { entity, role, uuid, text, decimal, int, date, set, one, many } from '@microsoft/rayfin-core';

@entity()
@role('authenticated', ['create', 'read', 'update', 'delete'])
export class Sale {
  @uuid() id!: string;
  @uuid() customer_id!: string;
  @one(() => Customer) customer?: Customer;

  @text({ max: 40 }) customerPhone!: string;
  @text({ optional: true, max: 120 }) customerName?: string;
  @date() soldAt!: Date;
  @decimal() subtotal!: number;
  @decimal() total!: number;
  @int() itemCount!: number;
  @set('card', 'cash', 'wallet') paymentMethod!: 'card' | 'cash' | 'wallet';

  @many(() => SaleLine) lines?: SaleLine[];
}`}</CodeBlock>

            <p>
              Then two commands turn that into a live, governed backend. The first scaffolds the project, the second
              deploys it:
            </p>

            <CodeBlock lang="bash">{`npm create @microsoft/rayfin@latest   # scaffold a new Rayfin project
npx rayfin up                          # provisions the SQL database + GraphQL API + Entra auth + hosting`}</CodeBlock>

            <Callout type="info">
              <strong>What "provisions for you" really means.</strong> No infrastructure to stand up. The SQL database
              is a first-party Fabric item that mirrors itself to OneLake by default. The GraphQL data API is
              generated from your entities. Sign-in uses Fabric SSO with Microsoft Entra ID. Your built React frontend
              is hosted by Fabric. The whole thing lives in your own tenant, and the data is born in OneLake, governed
              and analytics-ready from the first write.
            </Callout>

            {/* ========== SECTION 3: TRANSLYTICAL ========== */}
            <div className="blog-divider" />

            <h2>The Translytical Loop: Operational Write, Analytical Read, One Copy</h2>

            <p>
              Here is the idea that makes Fabric Apps more than "a CRUD app on Azure." When your app writes a row to a
              Fabric SQL database, that database <strong>automatically mirrors itself into OneLake</strong> as Delta
              Parquet, in near real time (Microsoft's documented latency is seconds to a few minutes), with zero setup.
              The moment a sale is written, it is already sitting in OneLake as an analytics-ready Delta table. A
              Direct Lake semantic model reads that exact copy. So the report that explains the data and the app that
              creates it finally live in the same place.
            </p>

            <p>
              Microsoft calls this a <strong>translytical</strong> application: transactional and analytical on one
              system, no copy, no glue pipeline between the app and the analytics.
            </p>

            <ImageLightbox
              src={`${IMG}/03-translytical-loop.png`}
              alt="The translytical loop: an operational app writes to a Fabric SQL database, which auto-mirrors to OneLake as Delta in seconds, a Direct Lake model reads that one copy, and an analytics app reads the model in near real time, with no nightly ETL"
              variant="diagram"
              caption="One copy of the data. Write it in one app, read it in another, near real time, with no nightly ETL in between."
            />

            <p>
              Two parts of that loop are automatic and two are yours, and knowing the split is the whole trick. The
              SQL database and its OneLake mirror are automatic and cannot be turned off. The Direct Lake model and
              the analytics app are your modeling work. When two separate apps share the data, a thin workflow, a
              OneLake shortcut and a short pipeline, folds one app's writes into the model the other app reads. More
              on that when we get to the Superstore.
            </p>

            <Callout type="warning">
              <strong>Near real time, not instant.</strong> The mirror lag plus Direct Lake framing add seconds to
              minutes, not milliseconds. This is fast and fresh, not a sub-second event stream. For a dashboard that a
              human reads, it is exactly right. For sub-second machine-to-machine signals, reach for Real-Time
              Intelligence instead.
            </Callout>

            {/* ========== SECTION 4: DEMO 1 ========== */}
            <div className="blog-divider" />

            <h2>Demo 1: A Lead Pipeline CRM, Operational and Analytical in One App</h2>

            <p>
              The first app is an operational CRM for a custom-closet company. Design consultants and showroom reps
              track leads through a five-stage funnel, New, Consult, Quote, Won, Lost, from a calm Kanban board they
              can open on a laptop between client meetings. It answers two questions at a glance: who do I follow up
              with today, and is the pipeline healthy?
            </p>

            <ImageLightbox
              src={`${IMG}/04-leadpipeline-board.png`}
              alt="The Lead Pipeline Kanban board: a KPI strip showing open leads, win rate, pipeline value, won value, and average deal, above five stage columns of lead cards, with a pipeline-at-a-glance side panel"
              variant="screenshot"
              caption="Demo 1: the operational Kanban board. Every card is a lead, every column a stage, and the KPI strip is computed live."
            />

            <p>
              The data model is a handful of Rayfin entities. A <code>Lead</code> with the five-stage enum, customer
              details, project type, and estimated value. A <code>Rep</code> and a <code>LeadSource</code>. A
              <code> Quote</code>. And the one that makes the analytics rich: a <code>StageEvent</code>, an immutable
              record written every time a lead moves stages. That audit trail is what powers time-in-stage and funnel
              conversion later. The point is that moving a card is not a field update that loses history. It is a
              transaction.
            </p>

            <p>
              Now the second half of the same app. The dashboard reads a <strong>Direct Lake semantic model</strong>
              built on the operational data, with governed DAX measures for KPIs, funnel, monthly trend, win rate by
              rep, and source ROI. It loads the lead-level facts once, then recomputes every KPI and chart on the
              client as you slice, click to cross-filter, or drill. Slicers for rep, source, stage, showroom, and
              month range. Click a funnel bar to isolate that stage. A "needs follow-up" panel surfaces the stalled
              deals, oldest first.
            </p>

            <ImageLightbox
              src={`${IMG}/05-leadpipeline-dashboard.png`}
              alt="The Lead Pipeline analytics dashboard: governed measures from the Direct Lake model, KPI cards for total leads, win rate, open pipeline, won value, and stalled count, plus charts for leads by stage, leads by month, win rate by rep, leads by source, and a needs-follow-up panel"
              variant="screenshot"
              caption="The same app's analytics view, reading governed measures from the Direct Lake model: slice, cross-filter, drill, and a live needs-follow-up list."
            />

            <p>
              This is the translytical loop in a single app. A rep creates a lead on the board. The write goes to the
              Fabric SQL database, mirrors to OneLake, and the Direct Lake model picks it up. The dashboard reflects
              it without a refresh job. Operational and analytical, one source of truth, no swivel chair. The full
              source, a write-up, and a video walkthrough are linked below.
            </p>

            <div className="flex flex-wrap gap-3 my-6">
              <a href="https://github.com/sulaiman013/MS-Rayfin-and-Fabric-R-D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                <Github className="h-4 w-4" /> Demo 1 repo: MS-Rayfin-and-Fabric-R-D
              </a>
              <a href="https://youtu.be/BIZT56A0w0g" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                <Youtube className="h-4 w-4" /> Demo 1 walkthrough video
              </a>
            </div>

            {/* ========== SECTION 5: DEMO 2 ========== */}
            <div className="blog-divider" />

            <h2>Demo 2: A Superstore, Two Apps, One Source of Truth</h2>

            <p>
              The Lead Pipeline keeps both sides in one app. The Superstore splits them on purpose, into two separate
              Fabric Apps connected by a thin data workflow, because that is what most real estates look like: the
              system that captures the transaction and the system that reports on it are different apps, owned by
              different people, sharing one governed model.
            </p>

            <h3>App 1: the self-checkout that writes</h3>

            <p>
              The operational app is a grocery self-checkout. A shopper enters a phone number and an optional name,
              searches the catalog, builds a cart with live totals and auto-applied discounts, picks a payment method,
              and finishes. Checkout writes a <code>Sale</code> and its <code>SaleLine</code> rows to a Fabric SQL
              database. Notice the <code>customerName</code> snapshot on the <code>Sale</code> entity from the code
              earlier: that small choice is what lets the analytics name the live shopper later.
            </p>

            <ImageLightbox
              src={`${IMG}/06-superstore-checkout.png`}
              alt="The Superstore self-checkout app: a phone-number gate with an optional name field, the entry point that identifies the shopper before they start ringing up items"
              variant="screenshot"
              caption="Superstore App 1, the operational write: a phone number identifies the shopper, then catalog, cart, payment, and a sale written to Fabric SQL."
            />

            <p>
              Both apps live in one Fabric workspace alongside the lakehouse, the warehouse with the star schema, the
              Direct Lake model, and the sync pipeline. Here is the whole estate in one view.
            </p>

            <ImageLightbox
              src={`${IMG}/09-fabric-workspace.png`}
              alt="The Fabric workspace showing both apps, the Superstore_RawLH lakehouse, the Superstore_CleanedWH warehouse, the Superstore_Model semantic model, and the DataRefresh pipeline, all in one workspace"
              variant="screenshot"
              caption="One workspace: two apps, a lakehouse, a warehouse star schema, a Direct Lake model, and the sync pipeline that links them."
            />

            <h3>The model: one star schema, the source of truth</h3>

            <p>
              The historical sales land as a flat file, get shaped into a simple star schema in the warehouse, four
              dimensions and one fact, and a Direct Lake model reads it. Five DAX measures live in the model, so both
              Power BI and the analytics app query the same governed numbers rather than re-implementing them.
            </p>

            <ImageLightbox
              src={`${IMG}/10-direct-lake-model.png`}
              alt="The Direct Lake semantic model diagram: DimCustomer, DimDate, DimProduct, and DimStore dimensions related to a FactSales table, plus a Measures table holding Total Sales, Total Profit, Transactions, Avg Basket, and Margin"
              variant="screenshot"
              caption="The Direct Lake model: four dimensions, one fact, five measures. Governance lives here, not in each app."
            />

            <h3>App 2: the analytics that reads</h3>

            <p>
              The second app is a custom analytics dashboard that queries that semantic model as the signed-in user.
              KPIs for sales, profit, transactions, average basket, and margin. A revenue trend with a Year to Month
              to Day drill. Payment mix, top products, sales by category and region. Two tables, top customers and
              recent orders, with sort, filter, paginate, and CSV export. Click a chart to cross-filter the whole
              page. And a drill-through: click a customer or an order to see exactly what was bought.
            </p>

            <ImageLightbox
              src={`${IMG}/07-superstore-analytics.png`}
              alt="The Superstore analytics dashboard: KPI cards for total sales, total profit, transactions, average basket, and margin, a revenue-over-time line chart with year, month, day toggles, a payment-mix donut, top products, and sales by category"
              variant="screenshot"
              caption="Superstore App 2, the analytical read: KPIs, a Year to Month to Day revenue drill, charts, tables, cross-filter, and a customer and order drill-through."
            />

            <h3>Wiring the loop across two apps</h3>

            <p>
              Within one app, the loop is automatic. Across two apps, you add one thin workflow. The analytics model
              lives on the historical warehouse, so the self-checkout's live writes need to be folded in. The recipe:
              a full-calendar date dimension so today's sales always have a date key, a OneLake shortcut to the
              checkout app's mirrored sale data (the Rayfin <code>Sale</code> and <code>SaleLine</code> entities,
              exposed in the analytics warehouse as <code>Sales</code> and <code>SaleLines</code>), and a small
              idempotent stored procedure on a one-minute pipeline that appends new lines into the fact table. The
              procedure also upserts the live shopper into the customer dimension, picking one of the captured names
              per customer at insert time, so they show up by name rather than as a blank.
            </p>

            <CodeBlock lang="sql">{`CREATE OR ALTER PROCEDURE dbo.usp_LoadLiveSales
AS
BEGIN
    -- 1) Upsert live shoppers into DimCustomer (one captured name per customer_id at insert time).
    INSERT INTO DimCustomer (customer_id, customer_phone, customer_name, customer_segment, city, region)
    SELECT
        CAST(s.customer_id AS varchar(50)),
        CAST(MAX(s.customerPhone) AS varchar(40)),
        CAST(COALESCE(NULLIF(LTRIM(RTRIM(MAX(s.customerName))), ''), 'Walk-in ' + MAX(s.customerPhone)) AS varchar(120)),
        'Self-Checkout', NULL, NULL
    FROM [Superstore_RawLH].[dbo].[Sales] s
    WHERE NOT EXISTS (SELECT 1 FROM DimCustomer d WHERE d.customer_id = CAST(s.customer_id AS varchar(50)))
    GROUP BY CAST(s.customer_id AS varchar(50));

    -- 2) Append the new sale lines as facts, linked to the customer.
    INSERT INTO FactSales (order_id, date_key, customer_id, product_id, store, quantity, unit_price, sales, payment_method)
    SELECT sl.sale_id,
           YEAR(s.soldAt)*10000 + MONTH(s.soldAt)*100 + DAY(s.soldAt),
           CAST(s.customer_id AS varchar(50)),
           dp.product_id, 'Self-Checkout',
           CAST(sl.quantity AS int), CAST(sl.unitPrice AS decimal(10,2)), CAST(sl.lineTotal AS decimal(12,2)),
           CASE s.paymentMethod WHEN 'card' THEN 'Card' WHEN 'cash' THEN 'Cash' WHEN 'wallet' THEN 'Mobile Wallet' ELSE s.paymentMethod END
    FROM [Superstore_RawLH].[dbo].[SaleLines] sl
    JOIN [Superstore_RawLH].[dbo].[Sales] s ON sl.sale_id = s.id
    LEFT JOIN DimProduct dp ON dp.product_name = sl.productName
    WHERE NOT EXISTS (SELECT 1 FROM FactSales f WHERE f.order_id = sl.sale_id AND f.product_id = dp.product_id);
END;`}</CodeBlock>

            <p>
              And here is the payoff, proven live. Ring up a sale in the checkout app, wait about a minute, and it is
              already in the analytics, named, ready to drill into. Two live Self-Checkout orders sitting on top of
              the history.
            </p>

            <ImageLightbox
              src={`${IMG}/08-superstore-translytical.png`}
              alt="The analytics app showing recent orders, with two live Self-Checkout orders appearing at the top of the historical orders, proving the translytical loop works end to end"
              variant="screenshot"
              caption="The translytical loop, proven: a sale rung up in App 1 appears in App 2 about a minute later, named, among the history."
            />

            <div className="flex flex-wrap gap-3 my-6">
              <a href="https://github.com/sulaiman013/Superstore_FabricApp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                <Github className="h-4 w-4" /> Demo 2 repo: Superstore_FabricApp
              </a>
              <a href="https://youtu.be/frIaoykXcbo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                <Youtube className="h-4 w-4" /> Demo 2 session recording
              </a>
            </div>

            {/* ========== SECTION 6: DEMO 1 vs DEMO 2 ========== */}
            <div className="blog-divider" />

            <h2>Two Demos, Two Lessons</h2>

            <p>
              The two apps teach different halves of the same idea. The Lead Pipeline shows that operational and
              analytical can live in one app on one model. The Superstore shows the more common shape: two apps, two
              owners, joined by a thin workflow over one governed source.
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>Demo 1: Lead Pipeline</th>
                    <th>Demo 2: Superstore</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Shape</strong></td>
                    <td>One app, board plus dashboard</td>
                    <td>Two apps, write and read</td>
                  </tr>
                  <tr>
                    <td><strong>Scenario</strong></td>
                    <td>B2B sales, slow-moving leads</td>
                    <td>B2C retail, fast transactions</td>
                  </tr>
                  <tr>
                    <td><strong>Translytical wiring</strong></td>
                    <td>Automatic, one app, one model</td>
                    <td>Shortcut plus 1-minute pipeline across apps</td>
                  </tr>
                  <tr>
                    <td><strong>Audit trail</strong></td>
                    <td>StageEvent on every move</td>
                    <td>SaleLine per item, immutable</td>
                  </tr>
                  <tr>
                    <td><strong>Analytics surface</strong></td>
                    <td>Funnel, win rate, source ROI</td>
                    <td>KPIs, trend drill, drill-through</td>
                  </tr>
                  <tr>
                    <td><strong>Best lesson</strong></td>
                    <td>One app can be both</td>
                    <td>Two apps, one source of truth</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ========== SECTION 7: UNDER THE HOOD ========== */}
            <div className="blog-divider" />

            <h2>Under the Hood: What Is Automatic, What You Build</h2>

            <p>
              The most useful mental model for a Fabric App is to separate the parts the platform gives you from the
              parts you own. Get the split right and the architecture stops feeling like magic and starts feeling like
              a checklist.
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Stage</th>
                    <th>Who does it</th>
                    <th>What happens</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>App write</strong></td>
                    <td>You build</td>
                    <td>A form or action writes to the Fabric SQL database via the GraphQL API</td>
                  </tr>
                  <tr>
                    <td><strong>SQL to OneLake mirror</strong></td>
                    <td>Automatic</td>
                    <td>The SQL database copies itself to OneLake as Delta, in seconds to a few minutes, always on</td>
                  </tr>
                  <tr>
                    <td><strong>Data workflow</strong></td>
                    <td>You build</td>
                    <td>For two-app setups: a shortcut plus a short pipeline folds writes into the model</td>
                  </tr>
                  <tr>
                    <td><strong>Direct Lake model</strong></td>
                    <td>You build</td>
                    <td>A star schema and measures, read straight from OneLake, no refresh job</td>
                  </tr>
                  <tr>
                    <td><strong>Analytics read</strong></td>
                    <td>You build</td>
                    <td>Power BI or a Fabric App queries the model, near real time</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout type="tip">
              <strong>The Power Query question.</strong> If you know Power BI, nothing about your transformation layer
              changes. Power Query and Dataflows still clean, shape, and curate the data into the model your app
              reads. Rayfin adds the app and the write-back. It does not replace your modeling.
            </Callout>

            {/* ========== SECTION 8: WHEN TO USE WHICH ========== */}
            <div className="blog-divider" />

            <h2>Reports Show. Apps Act. When to Reach for Each.</h2>

            <p>
              Fabric Apps do not retire Power BI any more than a steering wheel retires a speedometer. They are
              different jobs on the same data. Power BI helps you understand. A Fabric App lets you operate. The skill
              is knowing which one a problem needs.
            </p>

            <ImageLightbox
              src={`${IMG}/11-reports-vs-apps.png`}
              alt="Reports show, apps act: reach for Power BI to see and decide with governed read-only analytics, reach for a Fabric App to act and operate with read-write CRUD, forms, and logic on write, and use both on one semantic model"
              variant="diagram"
              caption="Power BI to understand, a Fabric App to operate. They share one model, so pick by the primary job."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                <h4 className="text-base font-bold mb-2 text-blue-400">Reach for Power BI When:</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground [&>li]:pl-0">
                  <li>You need <strong>governed analytics</strong> on one model</li>
                  <li>The job is <strong>explore and decide</strong></li>
                  <li>Users <strong>review</strong>, they do not edit</li>
                  <li>You want <strong>self-service</strong> slicing</li>
                </ul>
              </div>
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
                <h4 className="text-base font-bold mb-2 text-amber-400">Reach for a Fabric App When:</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground [&>li]:pl-0">
                  <li>Users <strong>create, edit, or delete</strong></li>
                  <li>You need <strong>forms and workflows</strong></li>
                  <li>Logic or an <strong>API runs on write</strong></li>
                  <li>You want <strong>role-based</strong> data access</li>
                </ul>
              </div>
              <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                <h4 className="text-base font-bold mb-2 text-green-400">Use Both When:</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground [&>li]:pl-0">
                  <li>Reps <strong>act</strong>, managers <strong>watch</strong></li>
                  <li>The app is the <strong>source of action</strong></li>
                  <li>Power BI is the <strong>source of truth</strong></li>
                  <li>One <strong>semantic model</strong> over both</li>
                </ul>
              </div>
            </div>

            {/* ========== SECTION 9: BUILD YOUR OWN ========== */}
            <div className="blog-divider" />

            <h2>Build Your Own: Prerequisites and the CLI</h2>

            <p>
              Fabric Apps and Rayfin are public preview, so a few things must line up before <code>rayfin up</code>
              {" "}does anything useful. The good news is that a free Fabric trial in a supported region is enough to
              try the whole thing.
            </p>

            <ul>
              <li><strong>Capacity and region.</strong> A Fabric capacity, trial or a paid F SKU. The real gate is the region: Fabric App (preview) is currently available in only a subset of Azure regions, and many common ones are explicitly unsupported (East US, East US 2, South Central US, West US 3, UK South/West, North Europe, Germany West Central, Japan West, Australia Southeast, and others). Central US, North Central US, West US, West US 2, France Central, Norway East, Switzerland North, West Europe, East Asia, Southeast Asia, Australia East, Central India, Japan East, and Korea Central are among the supported set. A trial can default to one that is not supported, so check the official region availability table before picking a workspace home region.</li>
              <li><strong>Tenant settings.</strong> A tenant admin enables the <strong>Fabric apps (preview)</strong> workload under Tenant settings (organization-wide or for specific security groups). For an analytics app that queries a semantic model, the admin also enables the <strong>Semantic Model Execute Queries REST API</strong> setting under Integration settings.</li>
              <li><strong>Roles.</strong> Contributor or Admin on the workspace to deploy (a workspace-level requirement, separate from the tenant toggles above). For the analytics app, Build and Read on the semantic model.</li>
            </ul>

            <p>
              Two CLIs do the work. The Fabric CLI signs you in and inspects the estate. Rayfin scaffolds the project,
              signs in separately, and does the deploy.
            </p>

            <CodeBlock lang="bash">{`# Sign in to Fabric and inspect the estate
fab auth login            # browser sign-in, no device code
fab ls                    # your workspaces

# Scaffold and deploy with Rayfin
npm create @microsoft/rayfin@latest    # scaffold a new project
npx rayfin login                        # sign in to Rayfin
npx rayfin up                           # SQL database + GraphQL API + Entra auth + hosting
npx rayfin up db apply                  # apply schema changes`}</CodeBlock>

            <Callout type="warning">
              <strong>One limitation worth knowing up front.</strong> An app that is connected to a semantic model
              can only be viewed inside the Fabric portal, because it queries the model as the signed-in user. The
              standalone "Open" button will error the visuals out. A SQL-connected app, like the self-checkout, opens
              fine on its own URL. So in the Superstore, App 1 runs standalone and App 2 is always demoed in-portal.
            </Callout>

            {/* ========== SECTION 10: SHARING ========== */}
            <div className="blog-divider" />

            <h2>How Do You Share It? It Is an App, Not a Public Link</h2>

            <p>
              This is the first question every audience asks, so it is worth answering plainly. The static frontend of
              a Fabric App does sit at a public URL, but nothing loads until you sign in: Fabric SSO is required to
              access the app. There is no anonymous, send-a-link-to-anyone mode.
            </p>

            <p>
              You share it like any other Fabric item. To let a colleague use it, they need the
              <strong> "Run and interact"</strong> permission on the app item, and every workspace member gets that by
              default. Editing and deploying needs Write, and resharing needs the Admin role. Sign-in is
              <strong> Entra-only</strong> and <strong>tenant-only</strong>: there is no external or guest access, and
              no app-owns-data embedding for customers outside your tenant. For that scenario, Power BI Embedded still
              owns the job today. Keep secrets out of the frontend, since that static bundle is reachable.
            </p>

            {/* ========== KEY TAKEAWAYS ========== */}
            <div className="blog-divider" />

            <h2>Key Takeaways</h2>

            <p>Here is what to remember from this tour:</p>

            <ol>
              <li><strong>Power BI evolved, it did not die.</strong> The semantic model stays the source of truth. Fabric Apps add the operational layer that acts on it.</li>
              <li><strong>Rayfin is the build tool.</strong> Describe data in TypeScript, run <code>npx rayfin up</code>, and Fabric provisions a SQL database, a GraphQL API, Entra auth, and hosting in your tenant.</li>
              <li><strong>The translytical loop is the differentiator.</strong> A Fabric SQL database auto-mirrors to OneLake, a Direct Lake model reads that one copy, and analytics see operational writes in near real time, with no nightly ETL.</li>
              <li><strong>Know the automatic-versus-yours split.</strong> The SQL database and its mirror are automatic. The model, the analytics app, and any cross-app sync workflow are yours.</li>
              <li><strong>One app can be both, or two apps can share one model.</strong> The Lead Pipeline keeps write and read together. The Superstore splits them and links them with a shortcut and a one-minute pipeline.</li>
              <li><strong>Reports show, apps act.</strong> Use Power BI to understand and a Fabric App to operate, on one governed model. They are partners, not rivals.</li>
              <li><strong>Mind the preview edges.</strong> Region gates, tenant settings, portal-only viewing for model-connected apps, and Entra-only, tenant-only sharing. Plan for them and the build is smooth.</li>
            </ol>

          </div>  {/* end blog-prose */}

          {/* Resource links */}
          <div className="flex flex-wrap gap-3 mt-10 mb-4 max-w-3xl mx-auto">
            <a href="https://github.com/sulaiman013/MS-Rayfin-and-Fabric-R-D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
              <Github className="h-4 w-4" /> Demo 1: Lead Pipeline repo
            </a>
            <a href="https://youtu.be/BIZT56A0w0g" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
              <Youtube className="h-4 w-4" /> Demo 1: walkthrough video
            </a>
            <a href="https://github.com/sulaiman013/Superstore_FabricApp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
              <Github className="h-4 w-4" /> Demo 2: Superstore repo
            </a>
            <a href="https://youtu.be/frIaoykXcbo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
              <Youtube className="h-4 w-4" /> Demo 2: session recording
            </a>
            <a href="https://learn.microsoft.com/en-us/fabric/apps/overview" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
              <ExternalLink className="h-4 w-4" /> What is Fabric Apps (Microsoft Learn)
            </a>
            <a href="https://github.com/microsoft/rayfin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
              <Github className="h-4 w-4" /> Rayfin on GitHub
            </a>
            <a href="https://learn.microsoft.com/en-us/fabric/database/sql/use-case-translytical-applications" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
              <ExternalLink className="h-4 w-4" /> Translytical applications (Microsoft Learn)
            </a>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
