import { ArrowLeft, Calendar, Clock, User, ExternalLink, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import { useViewCount } from "@/hooks/useViewCount";

const IMG = "/blog/fabric-materialized-lake-views";

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

export default function MaterializedLakeViewsBlog() {
  const views = useViewCount("fabric-materialized-lake-views");
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
              {["Microsoft Fabric", "Data Engineering", "Lakehouse", "SQL", "Delta Lake", "Power BI"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border border-border/60 text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight mb-5">
              Materialized Lake Views in Microsoft Fabric: Your Lakehouse Just Got a Memory
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-10 pb-10 border-b border-border/60">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" /> Sulaiman Ahmed
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> February 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> 16 min read
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
                <li><strong>SQL views in your Lakehouse cause Direct Lake to fall back to DirectQuery.</strong> MLVs solve this by storing results as physical Delta tables.</li>
                <li><strong>Materialized Lake Views (MLVs)</strong> are precomputed query results stored as Delta tables that Fabric keeps fresh automatically.</li>
                <li>The <strong>optimal refresh engine</strong> intelligently chooses incremental, full, or skip based on source table changes.</li>
                <li>MLVs support <strong>built-in data quality constraints</strong> using <code>CHECK</code> with <code>ON MISMATCH FAIL</code> or <code>DROP</code>.</li>
                <li>The <strong>lineage DAG</strong> auto-generates from your SQL dependencies, giving you visual pipeline orchestration for free.</li>
                <li>MLVs replace manual <strong>notebook orchestration, stored procedures, and scheduled SQL queries</strong> for repeated transformations.</li>
                <li>Currently in <strong>Public Preview</strong> with known limitations: Spark SQL only, no cross-lakehouse lineage, and regional restrictions.</li>
                <li>A complete <strong>medallion architecture walkthrough</strong> showing Bronze to Silver to Gold with real Spark SQL examples.</li>
              </ul>
            </div>

            {/* ========== SECTION 1: THE PROBLEM ========== */}
            <h2>The Problem: SQL Views Break Direct Lake</h2>

            <p>
              Let me walk through how a typical Microsoft Fabric data engineering workflow actually works,
              and where it breaks down.
            </p>

            <p>
              You are a Data Engineer at a mid-size retail company. Data flows into your Fabric Lakehouse
              from multiple sources: <strong>shortcuts</strong> pointing at external storage accounts,
              <strong> mirroring</strong> from your operational database, and <strong>pipelines</strong> pulling
              from APIs. Your Bronze layer has 15 raw Delta tables: orders, customers, products, inventory,
              returns, and ten more.
            </p>

            <p>
              From there, you transform the data using PySpark notebooks, dbt, or the SQL analytics endpoint.
              You follow a <strong>medallion architecture</strong>: Bronze (raw) to Silver (cleaned, enriched)
              to Gold (business-ready star schema with dimension tables and fact tables). This is standard
              Fabric data engineering.
            </p>

            <p>
              Now comes the reporting layer. In Fabric, you create a <strong>Direct Lake semantic model</strong> that
              reads directly from your Gold layer Delta tables. When those tables are physical Delta tables,
              Direct Lake loads them straight into memory. Your Power BI reports are <strong>instantaneous</strong>.
              When the Gold layer tables update via your nightly pipeline, the Direct Lake semantic model
              refreshes in about <strong>1 to 2 minutes</strong>. This is the ideal path.
            </p>

            <p>
              Here is where the problem starts. Your analytics team needs a complex "daily sales summary"
              that joins five tables, filters out test orders, calculates margins, and groups by region,
              product category, and date. You define this as a <strong>SQL view</strong> in the SQL analytics
              endpoint. It looks clean, it is reusable, and it works in the SQL endpoint.
            </p>

            <p>
              But the moment your Direct Lake semantic model tries to read from that SQL view, it
              <strong> falls back to DirectQuery mode</strong>. Instead of reading precomputed Delta files from memory,
              Power BI now runs the full SQL query on every single report interaction. That query touches
              <strong> 50 million rows</strong> and takes about <strong>4 minutes</strong> to run.
              The finance team opens the dashboard at 8 AM: 4 minutes. The VP checks it at 9 AM: 4 minutes.
              The regional managers pull it up before their 10 AM standup: 4 minutes, times six people.
            </p>

            <Callout type="warning">
              <strong>The Direct Lake trap:</strong> SQL views in the SQL analytics endpoint cause Direct Lake
              to fall back to DirectQuery. This means every report interaction triggers a full query execution
              instead of reading from pre-loaded Delta files. Your "instant" Direct Lake model becomes a
              slow DirectQuery model for any table backed by a SQL view.
            </Callout>

            <ImageLightbox
              src={`${IMG}/08-direct-lake-problem.png`}
              alt="Direct Lake with Delta tables vs SQL views: instant reads vs DirectQuery fallback"
              variant="diagram"
            />

            <blockquote className="border-l-4 border-primary/40 pl-5 py-2 my-8 text-[15px] italic text-muted-foreground">
              "A SQL view is a recipe. Every time someone opens the report, the kitchen cooks from scratch.
              A Materialized Lake View is the dish, already plated and in the warmer. Direct Lake
              reads the plated dish instantly. The kitchen only re-cooks when the ingredients actually change."
            </blockquote>

            <h3>What Most Teams Do Today</h3>

            <p>
              Before MLVs, you had three options to keep your Gold layer as physical tables
              (so Direct Lake stays fast). None of them were great.
            </p>

            <ul>
              <li><strong>Option 1: SQL Views (and accept DirectQuery fallback).</strong> Simple to create, but Direct Lake falls back to DirectQuery. Great for small datasets. Painful for anything over 10 million rows with complex joins.</li>
              <li><strong>Option 2: Notebook with CTAS.</strong> Write a PySpark notebook that runs <code>CREATE TABLE AS SELECT</code> to materialize the results into a physical Delta table. Schedule it with a pipeline. This keeps Direct Lake happy, but now you are managing notebook code, pipeline schedules, error handling, and data freshness checks yourself. If the source schema changes, you find out when the notebook fails at 3 AM.</li>
              <li><strong>Option 3: Stored Procedures in the Warehouse.</strong> Move the logic to the SQL Warehouse, wrap it in a stored procedure, schedule it with a pipeline. Similar maintenance overhead, plus your transformation logic lives in a different compute engine from your Lakehouse data.</li>
            </ul>

            <p>
              All three approaches share the same fundamental gap: <strong>you are the orchestrator</strong>. You decide
              when to refresh. You decide what changed. You build the monitoring. You handle the failures.
              The system does not help you.
            </p>

            <p>
              Materialized Lake Views change that equation. They give you the simplicity of a SQL view
              (one SQL statement defines the transformation) with the performance of a physical Delta table
              (Direct Lake reads it natively, no DirectQuery fallback). And Fabric manages the refresh for you.
            </p>

            <ImageLightbox
              src={`${IMG}/01-core-problem.png`}
              alt="SQL View vs Materialized Lake View: compute once, read instantly"
              variant="diagram"
            />

            {/* ========== SECTION 2: MLVs vs TRADITIONAL APPROACHES (moved up for value hook) ========== */}
            <div className="blog-divider" />

            <h2>MLVs vs What You Have Been Doing</h2>

            <p>
              Before diving into the details, here is the value proposition at a glance. Let us compare MLVs
              against the three most common approaches Data Engineers use today in Microsoft Fabric.
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th>SQL View</th>
                    <th>Notebook + CTAS</th>
                    <th>Stored Procedure</th>
                    <th className="text-primary">MLV</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Results stored physically</strong></td>
                    <td className="text-red-500 font-semibold">No</td>
                    <td className="text-green-500 font-semibold">Yes</td>
                    <td className="text-green-500 font-semibold">Yes</td>
                    <td className="text-green-500 font-semibold">Yes</td>
                  </tr>
                  <tr>
                    <td><strong>Direct Lake compatible</strong></td>
                    <td className="text-red-500 font-semibold">No (falls back to DirectQuery)</td>
                    <td className="text-green-500 font-semibold">Yes</td>
                    <td className="text-orange-500 font-semibold">Warehouse only</td>
                    <td className="text-green-500 font-semibold">Yes (native Delta table)</td>
                  </tr>
                  <tr>
                    <td><strong>Incremental refresh</strong></td>
                    <td className="text-red-500 font-semibold">N/A</td>
                    <td className="text-orange-500 font-semibold">Manual (you code it)</td>
                    <td className="text-orange-500 font-semibold">Manual</td>
                    <td className="text-green-500 font-semibold">Automatic (optimal refresh)</td>
                  </tr>
                  <tr>
                    <td><strong>Lineage tracking</strong></td>
                    <td className="text-red-500 font-semibold">None</td>
                    <td className="text-red-500 font-semibold">None</td>
                    <td className="text-red-500 font-semibold">None</td>
                    <td className="text-green-500 font-semibold">Auto-generated DAG</td>
                  </tr>
                  <tr>
                    <td><strong>Built-in scheduling</strong></td>
                    <td className="text-red-500 font-semibold">No</td>
                    <td className="text-orange-500 font-semibold">Via pipeline</td>
                    <td className="text-orange-500 font-semibold">Via pipeline</td>
                    <td className="text-green-500 font-semibold">Native (UI + API)</td>
                  </tr>
                  <tr>
                    <td><strong>Data quality checks</strong></td>
                    <td className="text-red-500 font-semibold">None</td>
                    <td className="text-orange-500 font-semibold">Custom code</td>
                    <td className="text-orange-500 font-semibold">Custom code</td>
                    <td className="text-green-500 font-semibold">Built-in constraints</td>
                  </tr>
                  <tr>
                    <td><strong>Monitor Hub visibility</strong></td>
                    <td className="text-red-500 font-semibold">No</td>
                    <td className="text-green-500 font-semibold">Yes (notebook runs)</td>
                    <td className="text-green-500 font-semibold">Yes (procedure runs)</td>
                    <td className="text-green-500 font-semibold">Yes (dedicated job type)</td>
                  </tr>
                  <tr>
                    <td><strong>Orchestration effort</strong></td>
                    <td className="text-green-500 font-semibold">Zero</td>
                    <td className="text-red-500 font-semibold">High (pipeline + error handling)</td>
                    <td className="text-red-500 font-semibold">High</td>
                    <td className="text-green-500 font-semibold">Zero (managed by Fabric)</td>
                  </tr>
                  <tr className="bg-primary/5">
                    <td><strong>Best for</strong></td>
                    <td>Simple, small queries</td>
                    <td>Custom PySpark logic</td>
                    <td>T-SQL heavy teams</td>
                    <td className="text-primary font-semibold">Repeated SQL transformations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout type="tip">
              <strong>For Analytics Engineers using dbt:</strong> If you are already running dbt in Fabric,
              MLVs do not replace dbt. dbt handles SQL-based transformations with version control, testing, and
              documentation. But if you have simple aggregation layers or dashboard-specific materializations
              that do not need dbt's full pipeline, MLVs offer a lighter-weight, Fabric-native alternative
              with zero orchestration overhead.
            </Callout>

            <ImageLightbox
              src={`${IMG}/04-mlv-vs-traditional.png`}
              alt="MLVs vs SQL Views, Notebooks, and Stored Procedures: capability comparison"
              variant="diagram"
            />

            {/* ========== SECTION 3: WHAT MLVs ARE ========== */}
            <div className="blog-divider" />

            <h2>What Are Materialized Lake Views?</h2>

            <p>
              A Materialized Lake View (MLV) is a <strong>Fabric Lakehouse object</strong> that stores the precomputed
              results of a SQL transformation. You define it once with Spark SQL, and Fabric handles the rest:
              when to refresh, how to refresh, and what to refresh.
            </p>

            <p>
              Think of it this way. A regular SQL view is a <strong>saved recipe</strong>. Every time you
              query it, the kitchen cooks the dish from scratch: reads all the source tables, applies the joins,
              runs the filters, computes the aggregations, and serves the results. A Materialized Lake View
              is a <strong>meal prep container</strong>. The dish is already cooked and stored. When someone
              queries it, Fabric serves the stored results instantly. When the ingredients (source tables)
              change, Fabric detects the change and re-cooks only what is needed.
            </p>

            <Callout type="info">
              <strong>Key distinction:</strong> MLVs are Lakehouse objects, not Warehouse objects. They are
              authored in Spark SQL (notebooks), stored as Delta tables in your Lakehouse, and managed through
              the Lakehouse UX. Do not confuse them with SQL Database materialized views or KQL materialized
              views, which are different features in different Fabric workloads.
            </Callout>

            <h3>What MLVs Give You Out of the Box</h3>

            <ul>
              <li><strong>Direct Lake compatible:</strong> MLVs are stored as physical Delta tables. Direct Lake reads them natively with no DirectQuery fallback, unlike SQL views.</li>
              <li><strong>Precomputed results:</strong> Query performance drops from minutes to sub-second because the data is already computed and stored as Delta files.</li>
              <li><strong>Smart refresh:</strong> Fabric's optimal refresh engine detects source changes and chooses incremental, full, or skip automatically.</li>
              <li><strong>Auto-generated lineage:</strong> Dependencies between MLVs and source tables are inferred from your SQL. No manual wiring.</li>
              <li><strong>Built-in scheduling:</strong> Minute, hourly, daily, weekly, or monthly refresh patterns, configured in the UI or via REST API.</li>
              <li><strong>Data quality constraints:</strong> Validate rows during refresh with <code>CHECK</code> constraints. Fail the entire refresh or drop bad rows, your choice.</li>
              <li><strong>Monitor Hub integration:</strong> Every refresh appears in Monitor Hub with full Spark logs, durations, and status tracking.</li>
            </ul>

            <ImageLightbox
              src={`${IMG}/02-what-is-mlv.png`}
              alt="What is a Materialized Lake View: source tables to MLV to consumers"
              variant="diagram"
            />

            {/* ========== SECTION 4: CREATING YOUR FIRST MLV ========== */}
            <div className="blog-divider" />

            <h2>Creating Your First Materialized Lake View</h2>

            <p>
              Let us walk through creating an MLV step by step. The scenario: you have a Bronze layer
              with raw order data and a raw customer table. You want a Silver layer aggregation
              that gives you daily revenue by customer segment.
            </p>

            <h3>Prerequisites</h3>

            <ul>
              <li><strong>Fabric-enabled workspace</strong> with capacity assigned</li>
              <li><strong>Lakehouse with schemas enabled</strong> (required for MLV support)</li>
              <li><strong>Fabric Runtime 1.3</strong> or later</li>
              <li><strong>Change Data Feed enabled</strong> on source tables (for incremental refresh)</li>
            </ul>

            <h3>Step 1: Enable Change Data Feed on Source Tables</h3>

            <p>
              This step is critical and easy to miss. For the optimal refresh engine to perform incremental
              refreshes, all source Delta tables must have Change Data Feed (CDF) enabled. Without it,
              every refresh is a full recompute.
            </p>

            <CodeBlock lang="sql">{`-- Enable CDF on existing tables
ALTER TABLE bronze.raw_orders
SET TBLPROPERTIES (delta.enableChangeDataFeed = true);

ALTER TABLE bronze.raw_customers
SET TBLPROPERTIES (delta.enableChangeDataFeed = true);

-- For new tables, set it at creation
CREATE TABLE bronze.raw_products (
  product_id BIGINT,
  product_name STRING,
  category STRING,
  unit_price DECIMAL(10,2)
)
TBLPROPERTIES (delta.enableChangeDataFeed = true);`}</CodeBlock>

            <Callout type="warning">
              <strong>Do this before creating your MLVs.</strong> If you create an MLV first and enable CDF
              later, the refresh engine may still fall back to full refresh until it can establish a baseline
              from the CDF stream. Enable CDF on all intended source tables early.
            </Callout>

            <h3>Step 2: Create the Materialized Lake View</h3>

            <p>
              Open a Spark notebook attached to your Lakehouse and run the following. This creates an MLV
              called <code>daily_revenue_by_segment</code> in the <code>silver</code> schema.
            </p>

            <CodeBlock lang="sql">{`CREATE OR REPLACE MATERIALIZED LAKE VIEW silver.daily_revenue_by_segment
COMMENT 'Daily revenue aggregated by customer segment. Refreshes incrementally.'
AS
SELECT
  o.order_date,
  c.segment,
  COUNT(DISTINCT o.order_id)    AS total_orders,
  COUNT(DISTINCT o.customer_id) AS unique_customers,
  SUM(o.quantity * o.unit_price) AS gross_revenue,
  SUM(o.discount_amount)        AS total_discounts,
  SUM(o.quantity * o.unit_price) - SUM(o.discount_amount) AS net_revenue
FROM bronze.raw_orders o
INNER JOIN bronze.raw_customers c
  ON o.customer_id = c.customer_id
WHERE o.is_test_order = false
  AND o.order_status != 'cancelled'
GROUP BY o.order_date, c.segment;`}</CodeBlock>

            <p>
              That is it. One SQL statement. Fabric now:
            </p>

            <ol>
              <li><strong>Executes the query</strong> and stores the results as a Delta table in your Lakehouse.</li>
              <li><strong>Registers the MLV</strong> as a managed object visible in the Lakehouse explorer.</li>
              <li><strong>Builds the lineage graph</strong> automatically, linking <code>silver.daily_revenue_by_segment</code> back to <code>bronze.raw_orders</code> and <code>bronze.raw_customers</code>.</li>
              <li><strong>Tracks the SQL definition</strong> so you can always retrieve it with <code>SHOW CREATE MATERIALIZED LAKE VIEW</code>.</li>
            </ol>

            <h3>Step 3: Verify and Query</h3>

            <CodeBlock lang="sql">{`-- See all MLVs in the silver schema
SHOW MATERIALIZED LAKE VIEWS IN silver;

-- Query it like any table (results are precomputed, instant)
SELECT segment, SUM(net_revenue) as total_net_revenue
FROM silver.daily_revenue_by_segment
WHERE order_date >= '2026-01-01'
GROUP BY segment
ORDER BY total_net_revenue DESC;

-- View the definition
SHOW CREATE MATERIALIZED LAKE VIEW silver.daily_revenue_by_segment;`}</CodeBlock>

            <p>
              When your Direct Lake semantic model points at <code>silver.daily_revenue_by_segment</code>, it reads
              from precomputed Delta files with no DirectQuery fallback. The 4-minute query is now sub-second.
              Every stakeholder who opens the dashboard gets instant results.
            </p>

            {/* ========== SECTION 5: THE SMART REFRESH ENGINE ========== */}
            <div className="blog-divider" />

            <h2>The Smart Refresh Engine: How Fabric Keeps MLVs Fresh</h2>

            <p>
              This is the core innovation. Traditional materialized views give you two choices: full refresh
              or manual incremental logic that you code yourself. Fabric's MLVs introduce a third option:
              <strong> optimal refresh</strong>, where the engine decides the best strategy automatically.
            </p>

            <ImageLightbox
              src={`${IMG}/03-optimal-refresh-engine.png`}
              alt="The Optimal Refresh Engine: decision tree for incremental, full, or skip"
              variant="diagram"
            />

            <h3>Three Refresh Modes</h3>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                <h4 className="text-base font-bold mb-2 text-green-400">Incremental Refresh</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground [&>li]:pl-0">
                  <li><strong>When:</strong> Source tables have CDF enabled and only new rows were appended</li>
                  <li><strong>How:</strong> Reads only the changed data from the CDF stream, processes the delta, and merges it into the existing MLV results</li>
                  <li><strong>Cost:</strong> Minimal. Only processes what changed</li>
                </ul>
              </div>
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
                <h4 className="text-base font-bold mb-2 text-amber-400">Full Refresh</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground [&>li]:pl-0">
                  <li><strong>When:</strong> Source had updates/deletes, SQL uses unsupported patterns, or CDF is not enabled</li>
                  <li><strong>How:</strong> Recomputes the entire MLV from scratch by re-running the full SQL definition</li>
                  <li><strong>Cost:</strong> Higher. Reads all source data</li>
                </ul>
              </div>
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
                <h4 className="text-base font-bold mb-2 text-primary">Skip (No Refresh)</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground [&>li]:pl-0">
                  <li><strong>When:</strong> No changes detected in any source table since last refresh</li>
                  <li><strong>How:</strong> Fabric checks the Delta commit log of each source. No new commits? No refresh needed</li>
                  <li><strong>Cost:</strong> Near zero. Only metadata checks</li>
                </ul>
              </div>
            </div>

            <h3>A Real-Life Refresh Scenario</h3>

            <p>
              Imagine your <code>daily_revenue_by_segment</code> MLV depends on <code>bronze.raw_orders</code> and
              <code> bronze.raw_customers</code>. Here is what happens across a typical day:
            </p>

            <ul>
              <li><strong>6:00 AM:</strong> Nightly pipeline appends 200,000 new order rows to <code>raw_orders</code>. No changes to <code>raw_customers</code>.</li>
              <li><strong>6:15 AM:</strong> Scheduled MLV refresh triggers. Optimal refresh detects new commits on <code>raw_orders</code> via CDF. It reads only the 200K new rows, computes the aggregation for those dates, and merges the results. <strong>Incremental refresh completes in 45 seconds</strong> instead of the 4-minute full recompute.</li>
              <li><strong>12:00 PM:</strong> Midday refresh triggers. No new commits on either source table. Fabric checks metadata, confirms nothing changed, and <strong>skips the refresh entirely</strong>. Zero compute consumed.</li>
              <li><strong>6:00 PM:</strong> A data correction pipeline updates 500 historical order rows in <code>raw_orders</code>. This is an UPDATE, not an append.</li>
              <li><strong>6:15 PM:</strong> Scheduled refresh triggers. Optimal refresh detects updates (not just appends) and determines that incremental logic cannot safely handle row-level mutations for this aggregation. It <strong>falls back to full refresh</strong>. Takes 4 minutes, but this only happens when data actually changes in a way that requires it.</li>
            </ul>

            <Callout type="info">
              <strong>The key insight:</strong> Without MLVs, you would have run a full 4-minute recompute at
              every scheduled interval regardless of whether data changed. With optimal refresh, most of your
              daily refreshes are either incremental (seconds) or skipped entirely (zero cost). The full
              recompute only fires when it absolutely must.
            </Callout>

            <h3>SQL Constructs That Support Incremental Refresh</h3>

            <p>
              Not every SQL pattern qualifies for incremental refresh. Fabric documents these as compatible:
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>SQL Construct</th>
                    <th>Incremental Support</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>SELECT</strong> with deterministic expressions</td>
                    <td className="text-green-500 font-semibold">Yes</td>
                    <td>Standard column references, math, string functions</td>
                  </tr>
                  <tr>
                    <td><strong>FROM</strong></td>
                    <td className="text-green-500 font-semibold">Yes</td>
                    <td>Delta tables with CDF enabled</td>
                  </tr>
                  <tr>
                    <td><strong>WHERE</strong> with deterministic predicates</td>
                    <td className="text-green-500 font-semibold">Yes</td>
                    <td>Static filters only</td>
                  </tr>
                  <tr>
                    <td><strong>INNER JOIN</strong></td>
                    <td className="text-green-500 font-semibold">Yes</td>
                    <td>Equi-joins on key columns</td>
                  </tr>
                  <tr>
                    <td><strong>WITH</strong> (CTEs)</td>
                    <td className="text-green-500 font-semibold">Yes</td>
                    <td>Inline CTEs only</td>
                  </tr>
                  <tr>
                    <td><strong>UNION ALL</strong></td>
                    <td className="text-green-500 font-semibold">Yes</td>
                    <td>Combining multiple sources</td>
                  </tr>
                  <tr>
                    <td><strong>GROUP BY</strong> with aggregations</td>
                    <td className="text-orange-500 font-semibold">Supported, but may trigger full refresh</td>
                    <td>Aggregations are supported in definitions but may fall back to full refresh</td>
                  </tr>
                  <tr>
                    <td><strong>LEFT JOIN</strong></td>
                    <td className="text-orange-500 font-semibold">Supported, but may trigger full refresh</td>
                    <td>Used in official examples but not eligible for incremental path</td>
                  </tr>
                  <tr>
                    <td><strong>Window functions</strong> (ROW_NUMBER, RANK)</td>
                    <td className="text-orange-500 font-semibold">Forces full refresh</td>
                    <td>Non-deterministic ordering always forces full recompute</td>
                  </tr>
                  <tr>
                    <td><strong>Non-deterministic functions</strong> (RAND, NOW)</td>
                    <td className="text-red-500 font-semibold">Forces full refresh</td>
                    <td>Results change on every run by definition</td>
                  </tr>
                  <tr>
                    <td><strong>Non-Delta sources</strong></td>
                    <td className="text-red-500 font-semibold">Forces full refresh</td>
                    <td>No CDF capability outside Delta</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout type="tip">
              <strong>Pro tip:</strong> Keep your MLV SQL deterministic and append-friendly to maximize
              incremental refresh eligibility. If you need window functions, consider doing the windowing
              in a downstream MLV that reads from an incrementally-refreshed base MLV.
            </Callout>

            {/* ========== SECTION 6: MEDALLION ARCHITECTURE ========== */}
            <div className="blog-divider" />

            <h2>Building a Medallion Pipeline with MLVs</h2>

            <p>
              MLVs are purpose-built for the <strong>medallion architecture</strong> (Bronze, Silver, Gold) that
              Microsoft Fabric recommends for lakehouse design. Each layer can be an MLV that depends on the
              layer below it. Fabric automatically builds the lineage graph and refreshes them in the correct
              order.
            </p>

            <p>
              Here is a practical example: an e-commerce analytics pipeline with three layers.
            </p>

            <ImageLightbox
              src={`${IMG}/05-medallion-with-mlvs.png`}
              alt="Medallion Architecture with MLVs: Bronze to Silver to Gold pipeline"
              variant="diagram"
            />

            <h3>Bronze Layer: Raw Tables (Regular Delta Tables)</h3>

            <p>
              Your Bronze tables are regular Delta tables loaded by pipelines, Dataflow Gen2, shortcuts, or
              database mirroring. These are not MLVs. They are the <strong>source of truth</strong>.
            </p>

            <CodeBlock lang="text">{`bronze.raw_orders        -- 50M rows, loaded nightly
bronze.raw_customers     -- 500K rows, loaded weekly
bronze.raw_products      -- 10K rows, loaded on-demand`}</CodeBlock>

            <h3>Silver Layer: Cleaned and Enriched (MLVs)</h3>

            <CodeBlock lang="sql">{`-- Silver MLV 1: Clean orders with customer enrichment
CREATE OR REPLACE MATERIALIZED LAKE VIEW silver.enriched_orders
COMMENT 'Cleaned orders joined with customer details. Test orders excluded.'
AS
SELECT
  o.order_id,
  o.order_date,
  o.customer_id,
  c.customer_name,
  c.segment,
  c.region,
  o.product_id,
  o.quantity,
  o.unit_price,
  o.discount_amount,
  (o.quantity * o.unit_price) AS gross_amount,
  (o.quantity * o.unit_price) - o.discount_amount AS net_amount
FROM bronze.raw_orders o
INNER JOIN bronze.raw_customers c
  ON o.customer_id = c.customer_id
WHERE o.is_test_order = false
  AND o.order_status IN ('completed', 'shipped', 'processing');`}</CodeBlock>

            <CodeBlock lang="sql">{`-- Silver MLV 2: Product enrichment
CREATE OR REPLACE MATERIALIZED LAKE VIEW silver.enriched_products
COMMENT 'Products with calculated margin tier.'
AS
SELECT
  p.product_id,
  p.product_name,
  p.category,
  p.subcategory,
  p.unit_cost,
  p.unit_price,
  (p.unit_price - p.unit_cost) / p.unit_price * 100 AS margin_pct,
  CASE
    WHEN (p.unit_price - p.unit_cost) / p.unit_price * 100 >= 40 THEN 'High'
    WHEN (p.unit_price - p.unit_cost) / p.unit_price * 100 >= 20 THEN 'Medium'
    ELSE 'Low'
  END AS margin_tier
FROM bronze.raw_products p;`}</CodeBlock>

            <h3>Gold Layer: Business-Ready Aggregations (MLVs)</h3>

            <CodeBlock lang="sql">{`-- Gold MLV: Executive dashboard summary
CREATE OR REPLACE MATERIALIZED LAKE VIEW gold.daily_sales_summary
COMMENT 'Daily sales KPIs for executive dashboard. Depends on silver MLVs.'
AS
SELECT
  eo.order_date,
  eo.region,
  ep.category,
  ep.margin_tier,
  COUNT(DISTINCT eo.order_id)    AS orders,
  COUNT(DISTINCT eo.customer_id) AS customers,
  SUM(eo.gross_amount)           AS gross_revenue,
  SUM(eo.net_amount)             AS net_revenue,
  SUM(eo.discount_amount)        AS total_discounts,
  AVG(eo.net_amount)             AS avg_order_value
FROM silver.enriched_orders eo
INNER JOIN silver.enriched_products ep
  ON eo.product_id = ep.product_id
GROUP BY
  eo.order_date,
  eo.region,
  ep.category,
  ep.margin_tier;`}</CodeBlock>

            <h3>The Auto-Generated Lineage DAG</h3>

            <p>
              After creating these three MLVs, open the <strong>Manage materialized lake views</strong> panel
              in your Lakehouse. Fabric has already built the lineage graph as a directed acyclic graph (DAG).
              It knows the Bronze tables feed the Silver MLVs, and both Silver MLVs feed the Gold MLV.
            </p>

            <ImageLightbox
              src={`${IMG}/09-lineage-dag-execution.png`}
              alt="Auto-generated lineage DAG: Bronze sources to Silver MLVs (parallel) to Gold MLV (sequential) to Direct Lake"
              variant="diagram"
            />

            <p>
              When you trigger a refresh on this lineage, Fabric executes the MLVs in dependency order:
              Silver MLVs first (in parallel, since they share no dependencies), then the Gold MLV after both
              Silver MLVs complete. You do not build this orchestration. Fabric infers it from your SQL.
            </p>

            <Callout type="info">
              <strong>For Data Analysts:</strong> This is why MLVs matter for reporting. Your Direct Lake
              semantic model can point directly at <code>gold.daily_sales_summary</code> as a physical Delta
              table. No DirectQuery fallback. The data is precomputed and loads into memory instantly.
              You do not need to worry about how or when the data refreshes. That is handled by the MLV schedule.
            </Callout>

            {/* ========== SECTION 7: DATA QUALITY ========== */}
            <div className="blog-divider" />

            <h2>Built-in Data Quality: Catch Bad Data During Refresh</h2>

            <p>
              This is one of the most underrated features of MLVs. You can embed data quality constraints
              directly in the MLV definition. Instead of finding bad data after it lands in your Gold layer
              and corrupts a report, you catch it during the refresh itself.
            </p>

            <ImageLightbox
              src={`${IMG}/06-data-quality-constraints.png`}
              alt="Built-in Data Quality: ON MISMATCH FAIL vs ON MISMATCH DROP"
              variant="diagram"
            />

            <h3>Two Constraint Actions</h3>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                <h4 className="text-base font-bold mb-2 text-red-400">ON MISMATCH FAIL</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground [&>li]:pl-0">
                  <li><strong>Behavior:</strong> Stops the entire refresh if any row violates the constraint. This is the <strong>default</strong> if you omit the <code>ON MISMATCH</code> clause</li>
                  <li><strong>Use when:</strong> Data integrity is non-negotiable (financial data, compliance)</li>
                  <li><strong>Trade-off:</strong> No partial data lands. Either all rows pass or nothing refreshes</li>
                </ul>
              </div>
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
                <h4 className="text-base font-bold mb-2 text-amber-400">ON MISMATCH DROP</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground [&>li]:pl-0">
                  <li><strong>Behavior:</strong> Drops rows that violate the constraint and logs the count</li>
                  <li><strong>Use when:</strong> Some bad rows are acceptable (marketing data, event logs)</li>
                  <li><strong>Trade-off:</strong> Good data still refreshes. Dropped row counts visible in monitoring</li>
                </ul>
              </div>
            </div>

            <h3>Example: Revenue with Quality Guardrails</h3>

            <CodeBlock lang="sql">{`CREATE OR REPLACE MATERIALIZED LAKE VIEW gold.validated_daily_revenue
(
  -- FAIL if any row has null revenue (should never happen)
  CONSTRAINT revenue_not_null CHECK (net_revenue IS NOT NULL) ON MISMATCH FAIL,
  -- DROP rows with negative quantities (data quality issue, log it)
  CONSTRAINT positive_quantity CHECK (total_quantity > 0) ON MISMATCH DROP,
  -- DROP rows with unrealistic discounts (likely data entry errors)
  CONSTRAINT reasonable_discount CHECK (discount_pct <= 100) ON MISMATCH DROP
)
COMMENT 'Validated daily revenue with quality constraints.'
AS
SELECT
  order_date,
  region,
  COUNT(*) AS order_count,
  SUM(quantity) AS total_quantity,
  SUM(net_amount) AS net_revenue,
  SUM(discount_amount) / NULLIF(SUM(gross_amount), 0) * 100 AS discount_pct
FROM silver.enriched_orders
GROUP BY order_date, region;`}</CodeBlock>

            <p>
              If a nightly pipeline accidentally introduces rows with null revenue, the <code>FAIL</code> constraint
              stops the refresh entirely. Your dashboard still shows yesterday's clean data instead of today's
              corrupted data. You get an alert in Monitor Hub, investigate the source, fix it, and re-run.
              No downstream damage.
            </p>

            <Callout type="tip">
              <strong>Dropped row tracking:</strong> When <code>ON MISMATCH DROP</code> silently removes rows,
              the count of dropped rows is tracked and visible in the lineage view. You can monitor how many
              rows are being dropped per refresh and investigate trends over time.
            </Callout>

            <Callout type="warning">
              <strong>Limitation:</strong> Constraints cannot be altered after creation. If you need to
              change a constraint condition, you must drop and recreate the MLV. Design your constraints
              carefully upfront.
            </Callout>

            {/* ========== SECTION 8: SCHEDULING AND MONITORING ========== */}
            <div className="blog-divider" />

            <h2>Scheduling and Monitoring MLV Refreshes</h2>

            <p>
              Creating an MLV is step one. Keeping it fresh is step two. Fabric provides both a UI-based
              scheduler and REST APIs for automation.
            </p>

            <ImageLightbox
              src={`${IMG}/07-day-in-the-life.png`}
              alt="A Day in the Life: how MLV refresh modes play out across a real workday"
              variant="diagram"
            />

            <h3>Setting Up a Schedule</h3>

            <p>
              From the Lakehouse explorer, open <strong>Manage materialized lake views</strong>, select
              your lineage, and click <strong>Schedule</strong>. You have five frequency options:
            </p>

            <ul>
              <li><strong>Minute:</strong> Refresh every N minutes (useful for near-real-time dashboards)</li>
              <li><strong>Hourly:</strong> Refresh every N hours</li>
              <li><strong>Daily:</strong> Refresh at a specific time each day (most common for overnight pipelines)</li>
              <li><strong>Weekly:</strong> Refresh on specific days</li>
              <li><strong>Monthly:</strong> Refresh on a specific date each month</li>
            </ul>

            <Callout type="info">
              <strong>One schedule per lineage:</strong> Fabric allows one active schedule per lineage graph.
              This means all MLVs in a lineage chain share the same refresh frequency. If your Gold layer
              needs hourly refresh but your Silver layer only needs daily, consider splitting them into
              separate lineage groups or accepting the higher frequency.
            </Callout>

            <h3>Monitoring in Monitor Hub</h3>

            <p>
              Every MLV refresh appears in Monitor Hub under the job type <code>RefreshMaterializedLakeViews</code>.
              You can filter, search, and drill into any run.
            </p>

            <p>
              The run detail panel shows you:
            </p>

            <ul>
              <li><strong>Activity panel:</strong> Each MLV node in the lineage, its status (Completed, Failed, Skipped), start time, and duration.</li>
              <li><strong>Details panel:</strong> Node metadata plus links to Spark logs for deep diagnostics.</li>
              <li><strong>Run history:</strong> Retained for up to 30 days.</li>
            </ul>

            <p>
              Runs can be in five states: <strong>Completed</strong>, <strong>Failed</strong>,
              <strong> Skipped</strong> (no source changes), <strong>In Progress</strong>, or <strong>Canceled</strong>.
            </p>

            <h3>API Automation</h3>

            <p>
              For teams that manage infrastructure as code, Fabric exposes MLV operations through REST APIs:
            </p>

            <CodeBlock lang="text">{`POST   /v1/workspaces/{id}/lakehouses/{id}/jobs/instances?jobType=RefreshMaterializedLakeViews
       -- Run on-demand refresh

POST   /v1/workspaces/{id}/lakehouses/{id}/jobs/schedules?jobType=RefreshMaterializedLakeViews
       -- Create a schedule

PATCH  /v1/workspaces/{id}/lakehouses/{id}/jobs/schedules/{scheduleId}
       -- Update existing schedule

DELETE /v1/workspaces/{id}/lakehouses/{id}/jobs/schedules/{scheduleId}
       -- Delete a schedule`}</CodeBlock>

            <Callout type="warning">
              <strong>Current limitation:</strong> MLV APIs require user-based authentication context. Service
              principal authentication is not yet supported. This affects CI/CD pipelines that run under
              service identities. For now, use a service account or trigger refreshes from a notebook that
              calls the API with delegated credentials.
            </Callout>

            {/* ========== SECTION 9: LIMITATIONS ========== */}
            <div className="blog-divider" />

            <h2>Limitations You Need to Know</h2>

            <p>
              MLVs are in <strong>Preview</strong> as of February 2026. That means Microsoft is actively
              developing the feature and some rough edges exist. Here is what to watch for.
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Limitation</th>
                    <th>Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Availability</strong></td>
                    <td>Not available in South Central US region</td>
                    <td>Check your capacity region before planning</td>
                  </tr>
                  <tr>
                    <td><strong>Authoring</strong></td>
                    <td>Spark SQL only. No PySpark, no T-SQL</td>
                    <td>Teams must write SQL in Spark notebooks</td>
                  </tr>
                  <tr>
                    <td><strong>Authoring</strong></td>
                    <td>No UDF usage in MLV definitions</td>
                    <td>Custom functions must be replaced with built-in expressions</td>
                  </tr>
                  <tr>
                    <td><strong>Authoring</strong></td>
                    <td>No cross-lakehouse lineage</td>
                    <td>All sources must be in the same Lakehouse</td>
                  </tr>
                  <tr>
                    <td><strong>Data quality</strong></td>
                    <td>Constraints cannot be altered after creation</td>
                    <td>Changes require drop and recreate</td>
                  </tr>
                  <tr>
                    <td><strong>Scheduling</strong></td>
                    <td>One active schedule per lineage</td>
                    <td>All MLVs in a lineage share the same frequency</td>
                  </tr>
                  <tr>
                    <td><strong>Operations</strong></td>
                    <td>24-hour maximum runtime per refresh</td>
                    <td>Very large refreshes may timeout</td>
                  </tr>
                  <tr>
                    <td><strong>API</strong></td>
                    <td>No service principal auth for MLV APIs</td>
                    <td>CI/CD pipelines need workarounds</td>
                  </tr>
                  <tr>
                    <td><strong>History</strong></td>
                    <td>Run history retained for 30 days</td>
                    <td>Build your own logging for long-term audit trails</td>
                  </tr>
                  <tr>
                    <td><strong>Incremental refresh</strong></td>
                    <td>Source tables must be managed Lakehouse tables</td>
                    <td>External Delta paths (via <code>.save(path)</code>) do not support incremental refresh</td>
                  </tr>
                  <tr>
                    <td><strong>Naming</strong></td>
                    <td>Schema names with ALL CAPITAL LETTERS not supported</td>
                    <td>Use lowercase or mixed-case schema names</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout type="warning">
              <strong>Known issue:</strong> Using <code>FAIL</code> constraints can occasionally produce
              a "delta table not found" error. The documented workaround is to recreate the MLV without
              the <code>FAIL</code> constraint, or use <code>DROP</code> instead. Microsoft is actively
              working on a fix.
            </Callout>

            {/* ========== SECTION 10: WHEN TO USE AND WHEN NOT TO ========== */}
            <div className="blog-divider" />

            <h2>When to Use MLVs (and When Not To)</h2>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                <h4 className="text-base font-bold mb-2 text-green-400">Use MLVs When:</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground [&>li]:pl-0">
                  <li>The same <strong>complex query runs repeatedly</strong> across dashboards and reports</li>
                  <li>You are building <strong>medallion layers</strong> (Bronze to Silver to Gold) in a Lakehouse</li>
                  <li>Your aggregations join <strong>multiple large tables</strong> (10M+ rows)</li>
                  <li>You need <strong>built-in data quality checks</strong> during transformation</li>
                  <li>You want <strong>automatic lineage</strong> without building custom pipelines</li>
                  <li>Your source data changes on a <strong>predictable schedule</strong> (nightly, hourly)</li>
                </ul>
              </div>
              <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                <h4 className="text-base font-bold mb-2 text-red-400">Do NOT Use MLVs When:</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground [&>li]:pl-0">
                  <li>The query is <strong>simple and fast</strong> (a regular view is fine)</li>
                  <li>You need <strong>sub-second streaming</strong> (use Real-Time Intelligence instead)</li>
                  <li>Your logic requires <strong>PySpark, UDFs, or complex procedural code</strong></li>
                  <li>Sources span <strong>multiple Lakehouses</strong> (not supported yet)</li>
                  <li>You are running <strong>one-off or ad-hoc analysis</strong> (just query directly)</li>
                  <li>You need <strong>CI/CD automation with service principals</strong> (not supported yet)</li>
                </ul>
              </div>
            </div>

            {/* ========== SECTION 11: KEY TAKEAWAYS ========== */}
            <div className="blog-divider" />

            <h2>Key Takeaways</h2>

            <p>Here is what you should remember from this deep dive:</p>

            <ol>
              <li><strong>MLVs solve the Direct Lake problem.</strong> SQL views in your Lakehouse cause Direct Lake to fall back to DirectQuery. MLVs store results as physical Delta tables, so Direct Lake reads them natively with no fallback. Your 4-minute query becomes sub-second for every dashboard user.</li>
              <li><strong>Optimal refresh is the real innovation.</strong> Fabric automatically chooses incremental, full, or skip based on what changed in your source tables. When nothing changed, the refresh is skipped entirely at near-zero cost.</li>
              <li><strong>Enable Change Data Feed on your source tables first.</strong> Without CDF, every refresh is a full recompute. This one setting is the difference between full recomputes and intelligent incremental or skip behavior.</li>
              <li><strong>MLVs replace manual orchestration.</strong> No more notebook scheduling, pipeline error handling, or custom freshness checks. Define your SQL, set a schedule, and Fabric handles the rest.</li>
              <li><strong>Built-in data quality catches bad data during refresh.</strong> Use <code>CHECK</code> constraints with <code>ON MISMATCH FAIL</code> or <code>ON MISMATCH DROP</code> to validate rows before they land in your Gold layer.</li>
              <li><strong>Lineage is automatic.</strong> Dependencies are inferred from your SQL. No manual wiring. Fabric builds the DAG and executes in the correct order.</li>
              <li><strong>MLVs are Preview, not GA.</strong> Test in non-production workspaces first. Watch for regional availability, the no-service-principal limitation, the constraint immutability caveat, and the requirement for managed Lakehouse tables as sources.</li>
            </ol>

          </div>  {/* end blog-prose */}

          {/* Resource links */}
          <div className="flex flex-wrap gap-3 mt-10 mb-4 max-w-3xl mx-auto">
            <a
              href="https://learn.microsoft.com/en-us/fabric/data-engineering/materialized-lake-views/overview-materialized-lake-view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> MLV Overview (Microsoft Learn)
            </a>
            <a
              href="https://learn.microsoft.com/en-us/fabric/data-engineering/materialized-lake-views/create-materialized-lake-view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Spark SQL Reference
            </a>
            <a
              href="https://learn.microsoft.com/en-us/fabric/data-engineering/materialized-lake-views/refresh-materialized-lake-view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Refresh Behavior Docs
            </a>
            <a
              href="https://learn.microsoft.com/en-us/fabric/data-engineering/materialized-lake-views/data-quality"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Data Quality Constraints
            </a>
            <a
              href="https://learn.microsoft.com/en-us/fabric/data-engineering/materialized-lake-views/tutorial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Medallion Tutorial
            </a>
            <a
              href="https://learn.microsoft.com/en-us/rest/api/fabric/lakehouse/background-jobs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> MLV REST APIs
            </a>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
