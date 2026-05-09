import { ArrowLeft, Calendar, Clock, User, ExternalLink, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import { useViewCount } from "@/hooks/useViewCount";

const IMG = "/blog/fabric-direct-lake-semantic-models";

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

export default function DirectLakeBlog() {
  const views = useViewCount("fabric-direct-lake-semantic-models");
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
              {["Microsoft Fabric", "Power BI", "Direct Lake", "Data Engineering", "Delta Lake", "Semantic Link"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border border-border/60 text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight mb-5">
              Direct Lake Semantic Models: The Complete Guide to Fabric's Fastest Storage Mode
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-10 pb-10 border-b border-border/60">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" /> Sulaiman Ahmed
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> March 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> 20 min read
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
                <li><strong>Direct Lake is the fastest storage mode in Microsoft Fabric</strong>, reading Delta Parquet files directly into memory with no scheduled refresh needed.</li>
                <li>Your Direct Lake model can <strong>silently fall back to DirectQuery</strong> when it hits SQL views, guardrail limits, or unsupported DAX patterns, and the UI does not warn you clearly.</li>
                <li><strong>Seven specific things trigger DirectQuery fallback</strong>: SQL views, SQL-level RLS, guardrail breaches, model size limits, complex DAX, high-cardinality relationships, and legacy metadata.</li>
                <li><strong>Framing replaces scheduled refresh.</strong> A metadata-only scan (~2 seconds) identifies changed columns. No full data copy needed.</li>
                <li>There are <strong>two variants of Direct Lake</strong>: Direct Lake on SQL (GA, single-source, supports fallback) and Direct Lake on OneLake (Preview, multi-source, no fallback at all). Calculated columns are not supported in either variant.</li>
                <li><strong>V-Order and OPTIMIZE</strong> keep your Delta tables within guardrail limits and ready for Direct Lake. V-Order is disabled by default in new workspaces, so enable it for read-heavy scenarios.</li>
                <li><strong>Semantic Link Labs</strong> provides 20 Python functions in a Fabric notebook to diagnose fallback, warm caches, sync schemas, and generate models.</li>
                <li>The <strong>cold start problem</strong> is solvable. Cache warming functions pre-load columns after your ETL pipeline completes.</li>
              </ul>
            </div>

            {/* ========== SECTION 1: THE PROBLEM ========== */}
            <h2>The Problem: Your Direct Lake Model Is Secretly Running DirectQuery</h2>

            <p>
              Here is a scenario that happens in nearly every Fabric deployment. A Data Engineer builds a clean
              medallion architecture. Bronze tables ingest data via shortcuts and mirroring. Silver and Gold layers
              transform the data into a star schema with dimension and fact tables. The Gold layer tables are
              physical Delta tables in a Lakehouse.
            </p>

            <p>
              The Power BI developer creates a <strong>Direct Lake semantic model</strong> on top of those Gold tables.
              Reports are fast. Dashboards load in under a second. The team celebrates.
            </p>

            <p>
              Then someone adds a SQL view in the SQL analytics endpoint to create a "daily sales summary" that joins
              five tables and groups by region. Another team member adds row-level security at the SQL level instead
              of in the semantic model. A third table grows past 300 million rows on an F8 capacity.
            </p>

            <p>
              One by one, each of these changes silently triggers <strong>DirectQuery fallback</strong>. The model
              that was loading in under a second now takes 4 minutes per report interaction. The finance team opens
              the dashboard at 8 AM: 4 minutes. The VP checks it at 9 AM: 4 minutes. Six regional managers pull it
              up before their 10 AM standup: 4 minutes each.
            </p>

            <Callout type="warning">
              <strong>The silent killer:</strong> Direct Lake fallback to DirectQuery is not clearly shown in the
              Power BI service UI. Teams spend weeks tweaking DAX, optimizing visuals, and upgrading capacity SKUs
              when the real problem is upstream: SQL views, RLS, or guardrail breaches causing the model to fall
              back to DirectQuery on every interaction.
            </Callout>

            <p>
              This blog covers everything you need to understand about Direct Lake: how it works, what breaks it,
              how to detect fallback, and how to fix it using Fabric-native tools like notebooks, Semantic Link Labs,
              V-Order, and OPTIMIZE.
            </p>

            {/* ========== SECTION 2: COMPARISON TABLE ========== */}
            <div className="blog-divider" />

            <h2>Direct Lake vs Import vs DirectQuery</h2>

            <p>
              Before going deeper, you need to understand where Direct Lake fits relative to the two storage modes
              you already know. This comparison covers the dimensions that actually matter in production.
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th>Import</th>
                    <th>DirectQuery</th>
                    <th>Direct Lake</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Data freshness</strong></td>
                    <td>Stale until refresh</td>
                    <td>Always current</td>
                    <td>Near-real-time (framing)</td>
                  </tr>
                  <tr>
                    <td><strong>Refresh cost</strong></td>
                    <td>High (full data copy)</td>
                    <td>None (live queries)</td>
                    <td>Minimal (~2 sec framing)</td>
                  </tr>
                  <tr>
                    <td><strong>Query speed</strong></td>
                    <td>Sub-second (in-memory)</td>
                    <td>2 to 30 seconds (source)</td>
                    <td>Sub-second (on-demand load)</td>
                  </tr>
                  <tr>
                    <td><strong>Max data volume</strong></td>
                    <td>Limited by memory</td>
                    <td>Unlimited (source handles)</td>
                    <td>Governed by SKU guardrails</td>
                  </tr>
                  <tr>
                    <td><strong>Calculated columns</strong></td>
                    <td>Supported</td>
                    <td>Supported</td>
                    <td>Not supported (push to ETL)</td>
                  </tr>
                  <tr>
                    <td><strong>Composite models</strong></td>
                    <td>Supported</td>
                    <td>Supported</td>
                    <td>OneLake variant only</td>
                  </tr>
                  <tr>
                    <td><strong>DirectQuery fallback</strong></td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>SQL variant: automatic. OneLake: none</td>
                  </tr>
                  <tr>
                    <td><strong>RLS behavior</strong></td>
                    <td>Model-level only</td>
                    <td>Source + model</td>
                    <td>Model-level only (SQL RLS triggers fallback)</td>
                  </tr>
                  <tr>
                    <td><strong>Source scope</strong></td>
                    <td>Any supported source</td>
                    <td>Any supported source</td>
                    <td>OneLake Delta tables only</td>
                  </tr>
                  <tr>
                    <td><strong>Licensing</strong></td>
                    <td>Pro, PPU, or Fabric</td>
                    <td>Pro, PPU, or Fabric</td>
                    <td>Fabric capacity only (F2+)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The key insight: Direct Lake gives you <strong>Import-level query speed</strong> with
              <strong> near-real-time data freshness</strong>, but only when your Delta tables are properly
              optimized and none of the seven fallback triggers are active.
            </p>

            <ImageLightbox
              src={`${IMG}/01-three-storage-modes.png`}
              alt="Import vs DirectQuery vs Direct Lake: how each storage mode processes a DAX query"
              variant="diagram"
            />

            {/* ========== SECTION 3: HOW DIRECT LAKE WORKS ========== */}
            <div className="blog-divider" />

            <h2>How Direct Lake Actually Works</h2>

            <p>
              Import mode photocopies the entire library. Every scheduled refresh, the full dataset is copied
              from the source into the SSAS engine's VertiPaq in-memory store. DirectQuery calls the librarian
              every time. Every report click sends a live query to the source. Direct Lake walks to the shelf and
              pulls just the book you need. No photocopying. No phone call. Just a direct read.
            </p>

            <h3>Column Loading (Transcoding)</h3>

            <p>
              Direct Lake does not load entire tables into memory at once. When a DAX query requests data, only
              the <strong>specific columns needed for that query</strong> are loaded from the Delta Parquet files
              in OneLake. The Parquet column data is then <strong>transcoded</strong> (converted) into the VertiPaq
              columnar format in memory. This is the same in-memory format that Import mode uses, which is why
              Direct Lake query performance matches Import.
            </p>

            <h3>Framing: Metadata Refresh, Not Data Copy</h3>

            <p>
              The "refresh" in Direct Lake is fundamentally different from Import mode. Instead of copying all the
              data again, Direct Lake performs a <strong>framing</strong> operation: a metadata-only scan that reads
              the Delta transaction log to identify which Parquet files and column segments have changed since the
              last frame.
            </p>

            <p>
              Framing typically completes in <strong>about 2 seconds</strong>, regardless of table size. Compare that
              to Import refresh, which can take 10 minutes to over an hour depending on data volume.
            </p>

            <h3>Incremental Framing</h3>

            <p>
              Only the <strong>changed column segments</strong> are evicted from the in-memory cache during framing.
              Unchanged columns and their VertiPaq dictionaries stay warm. This means that after a framing operation,
              only the columns that actually changed need to be re-transcoded on the next query. Everything else is
              still in memory and responds instantly.
            </p>

            <Callout type="info">
              <strong>Automatic updates:</strong> By default, Direct Lake models automatically frame when the
              underlying Delta tables change. You can control this behavior by disabling auto-sync and triggering
              framing manually via XMLA or the Semantic Link Labs library.
            </Callout>

            <ImageLightbox
              src={`${IMG}/02-framing-lifecycle.png`}
              alt="The Direct Lake framing lifecycle: Delta update, metadata scan, column eviction, on-demand transcoding"
              variant="diagram"
            />

            <blockquote className="border-l-4 border-primary/40 pl-5 py-2 my-8 text-[15px] italic text-muted-foreground">
              "Import is photocopying the entire library. DirectQuery is calling the librarian every time you need a
              book. Direct Lake is walking to the shelf and pulling just the book you need."
            </blockquote>

            {/* ========== SECTION 4: TWO FLAVORS ========== */}
            <div className="blog-divider" />

            <h2>Two Flavors: Direct Lake on SQL vs Direct Lake on OneLake</h2>

            <p>
              As of April 2025, there are two distinct variants of Direct Lake. Understanding the difference is
              critical because they have different capabilities, limitations, and fallback behaviors.
            </p>

            <h3>Direct Lake on SQL (Original, GA)</h3>

            <p>
              This is the original Direct Lake mode that has been generally available since 2023. It connects to a
              <strong> single Lakehouse or Warehouse</strong> through the SQL analytics endpoint. When the model
              encounters something it cannot handle (SQL views, RLS, guardrail breaches), it
              <strong> automatically falls back to DirectQuery</strong>. This fallback is "silent" in the sense that
              reports still work, just much slower, and the UI does not prominently warn you.
            </p>

            <h3>Direct Lake on OneLake (New, Public Preview)</h3>

            <p>
              Introduced in April 2025 as a Public Preview, this variant reads Delta tables directly from
              <strong> OneLake paths</strong> rather than through the SQL endpoint. The biggest behavioral change:
              there is <strong>no DirectQuery fallback at all</strong>. If the model cannot serve a query via Direct
              Lake, it returns an error instead of silently degrading.
            </p>

            <p>
              This sounds stricter, but it is actually a feature. You know immediately when something is wrong,
              instead of discovering weeks later that your "fast" model has been running DirectQuery the whole time.
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Direct Lake on SQL</th>
                    <th>Direct Lake on OneLake</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Status</strong></td>
                    <td>GA (since 2023)</td>
                    <td>Public Preview (April 2025)</td>
                  </tr>
                  <tr>
                    <td><strong>Source</strong></td>
                    <td>Single Lakehouse/Warehouse</td>
                    <td>Multiple Lakehouses/Warehouses</td>
                  </tr>
                  <tr>
                    <td><strong>DQ fallback</strong></td>
                    <td>Automatic (silent)</td>
                    <td>None (error instead)</td>
                  </tr>
                  <tr>
                    <td><strong>Composite models</strong></td>
                    <td>Not supported</td>
                    <td>Supported (DL + Import)</td>
                  </tr>
                  <tr>
                    <td><strong>Calculated columns</strong></td>
                    <td>Not supported (triggers fallback)</td>
                    <td>Not supported</td>
                  </tr>
                  <tr>
                    <td><strong>Multi-source</strong></td>
                    <td>Single source only</td>
                    <td>Cross-workspace</td>
                  </tr>
                  <tr>
                    <td><strong>Schema sync</strong></td>
                    <td>Manual or via sempy_labs</td>
                    <td>Automatic on framing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ImageLightbox
              src={`${IMG}/03-two-flavors.png`}
              alt="Direct Lake on SQL vs Direct Lake on OneLake: key differences between the two variants"
              variant="diagram"
            />

            <Callout type="warning">
              <strong>Preview status:</strong> Direct Lake on OneLake is in Public Preview as of early 2026. Test
              it in non-production workspaces first. Features and limitations may change before GA.
            </Callout>

            {/* ========== SECTION 5: GUARDRAILS ========== */}
            <div className="blog-divider" />

            <h2>The Guardrails That Break Your Model</h2>

            <p>
              Every Fabric capacity SKU has hard limits on what Direct Lake can handle. When your Delta tables
              exceed these limits, the model falls back to DirectQuery for the affected table (or the entire model
              if the model size limit is breached). Here are the exact numbers.
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>SKU</th>
                    <th>Parquet Files per Table</th>
                    <th>Row Groups per Table</th>
                    <th>Rows per Table (millions)</th>
                    <th>Max Model Size on Disk (GB)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>F2</strong></td><td>1,000</td><td>1,000</td><td>300</td><td>10</td></tr>
                  <tr><td><strong>F4</strong></td><td>1,000</td><td>1,000</td><td>300</td><td>10</td></tr>
                  <tr><td><strong>F8</strong></td><td>1,000</td><td>1,000</td><td>300</td><td>10</td></tr>
                  <tr><td><strong>F16</strong></td><td>1,000</td><td>1,000</td><td>300</td><td>20</td></tr>
                  <tr><td><strong>F32</strong></td><td>1,000</td><td>1,000</td><td>300</td><td>40</td></tr>
                  <tr><td><strong>F64</strong></td><td>5,000</td><td>5,000</td><td>1,500</td><td>Unlimited</td></tr>
                  <tr><td><strong>F128</strong></td><td>5,000</td><td>5,000</td><td>3,000</td><td>Unlimited</td></tr>
                  <tr><td><strong>F256</strong></td><td>5,000</td><td>5,000</td><td>6,000</td><td>Unlimited</td></tr>
                  <tr><td><strong>F512</strong></td><td>10,000</td><td>10,000</td><td>12,000</td><td>Unlimited</td></tr>
                  <tr><td><strong>F1024</strong></td><td>10,000</td><td>10,000</td><td>24,000</td><td>Unlimited</td></tr>
                  <tr><td><strong>F2048</strong></td><td>10,000</td><td>10,000</td><td>24,000</td><td>Unlimited</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Two Types of Fallback</h3>

            <p>
              There is an important distinction between <strong>per-table fallback</strong> and
              <strong> full model fallback</strong>:
            </p>

            <ul>
              <li><strong>Per-table fallback:</strong> When a single table exceeds its parquet files, row groups, or row count guardrail, only queries that touch that specific table fall back to DirectQuery. Other tables in the model continue to use Direct Lake. Fix by running <code>OPTIMIZE</code> on the affected table.</li>
              <li><strong>Full model fallback:</strong> When the total model size on disk exceeds the SKU limit, every query in the entire model falls back to DirectQuery. This is the worst case. Fix by either scaling up your SKU or reducing the data volume.</li>
            </ul>

            <ImageLightbox
              src={`${IMG}/04-guardrail-decision.png`}
              alt="Guardrail decision tree: within limits, per-table fallback, or full model fallback"
              variant="diagram"
            />

            <Callout type="tip">
              <strong>Quick check:</strong> Use <code>get_directlake_guardrails_for_sku()</code> from Semantic Link Labs
              to see the exact guardrail limits for your capacity. You can also use <code>check_fallback_reason()</code>
              to determine exactly why a table is falling back.
            </Callout>

            {/* ========== SECTION 6: 7 FALLBACK TRIGGERS ========== */}
            <div className="blog-divider" />

            <h2>The 7 Things That Trigger DirectQuery Fallback</h2>

            <p>
              These are the seven most common causes of DirectQuery fallback in Direct Lake models. For each one,
              I will explain what it is, how to detect it, and how to fix it.
            </p>

            <h3>1. SQL Views in the SQL Analytics Endpoint</h3>

            <p>
              <strong>What:</strong> Direct Lake can only read physical Delta tables. SQL views are query definitions
              with no physical storage. When your semantic model points to a SQL view, that table automatically falls
              back to DirectQuery.
            </p>
            <p>
              <strong>Detect:</strong> Check the SQL analytics endpoint for any views your model references. Use
              <code> show_unsupported_direct_lake_objects()</code> from Semantic Link Labs.
            </p>
            <p>
              <strong>Fix:</strong> Replace SQL views with <strong>Materialized Lake Views</strong> (which store results
              as physical Delta tables), or use <code>CREATE TABLE AS SELECT</code> in a notebook to materialize the
              view results into a Delta table.
            </p>

            <h3>2. SQL-Level Row-Level Security (RLS)</h3>

            <p>
              <strong>What:</strong> If you define RLS at the SQL analytics endpoint level (not in the semantic model),
              Direct Lake cannot bypass it and falls back to DirectQuery to enforce the security rules.
            </p>
            <p>
              <strong>Detect:</strong> Check the SQL analytics endpoint for any security policies defined on tables
              your model references.
            </p>
            <p>
              <strong>Fix:</strong> Define RLS in the <strong>semantic model</strong> using DAX filters instead of SQL-level
              security. Semantic model RLS is enforced by the SSAS engine after Direct Lake loads the data, so it
              does not trigger fallback.
            </p>

            <h3>3. Delta Table Exceeding SKU Guardrails</h3>

            <p>
              <strong>What:</strong> When a table has more Parquet files, row groups, or rows than your SKU allows,
              that table falls back to DirectQuery.
            </p>
            <p>
              <strong>Detect:</strong> Use <code>get_direct_lake_guardrails()</code> to see current limits and
              compare against your table's actual file counts.
            </p>
            <p>
              <strong>Fix:</strong> Run <code>OPTIMIZE</code> on the affected table to compact small files. Target
              fewer than 1,000 Parquet files per table for F2 to F32 SKUs.
            </p>

            <CodeBlock lang="sql">{`-- Compact small files into larger ones
OPTIMIZE gold.fact_sales;

-- With Z-order for common filter columns
OPTIMIZE gold.fact_sales ZORDER BY (region_id, date_key);`}</CodeBlock>

            <h3>4. Model Size on Disk Exceeding SKU Limit</h3>

            <p>
              <strong>What:</strong> Unlike per-table limits, the model size on disk limit is global. If the total size of all
              Delta tables referenced by the model exceeds the limit (e.g., 10 GB for F2 to F8, 40 GB for F32), the
              <strong> entire model</strong> falls back to DirectQuery, not just one table. Note: F64 and above have unlimited model size on disk.
            </p>
            <p>
              <strong>Fix:</strong> Scale up your SKU, reduce the data volume (partition pruning, archiving old data),
              or enable V-Order for better compression.
            </p>

            <h3>5. Complex or Unsupported DAX Patterns</h3>

            <p>
              <strong>What:</strong> Certain DAX patterns cannot be served by Direct Lake's transcoding engine and
              trigger fallback. This includes certain CALCULATETABLE patterns and DAX queries that require the full
              VertiPaq engine. Calculated columns are not supported in either Direct Lake variant.
            </p>
            <p>
              <strong>Fix:</strong> Push complex calculations upstream into your ETL (PySpark notebook or dbt model)
              so the Gold table already has the computed column. This avoids DAX-level calculated columns entirely.
            </p>

            <h3>6. High-Cardinality Relationships Causing Full Table Scans</h3>

            <p>
              <strong>What:</strong> When a relationship involves high-cardinality columns and a DAX query requires
              scanning the entire relationship to filter, the engine may fall back to DirectQuery for performance
              reasons.
            </p>
            <p>
              <strong>Fix:</strong> Review your data model relationships. Use integer surrogate keys instead of
              natural keys for relationships. Reduce cardinality where possible (e.g., use date keys instead of
              datetime values).
            </p>

            <h3>7. Legacy Metadata Contract</h3>

            <p>
              <strong>What:</strong> Models created with older versions of Power BI Desktop may use a legacy metadata
              format that does not fully support Direct Lake features.
            </p>
            <p>
              <strong>Fix:</strong> Update your Power BI Desktop to the latest version and re-publish the model.
              Alternatively, use <code>generate_direct_lake_semantic_model()</code> from Semantic Link Labs to
              create a fresh model with the current metadata format.
            </p>

            <h3>Controlling Fallback Behavior</h3>

            <p>
              You can explicitly control whether your model is allowed to fall back using the
              <strong> DirectLakeBehavior</strong> property. There are three options:
            </p>

            <ul>
              <li><strong>Automatic</strong> (default): Falls back to DirectQuery silently when needed.</li>
              <li><strong>DirectLakeOnly</strong>: Never falls back. Returns an error if Direct Lake cannot serve the query. Use this in production to catch problems early.</li>
              <li><strong>DirectLakeOrEmpty</strong>: Returns an empty result instead of falling back. Useful for testing.</li>
            </ul>

            <CodeBlock lang="python">{`import sempy_labs as labs
from sempy_labs.tom import connect_semantic_model

# Set the model to never fall back to DirectQuery
with connect_semantic_model(
    dataset="Sales Model", workspace="Production"
) as tom:
    tom.set_direct_lake_behavior(
        direct_lake_behavior="DirectLakeOnly"
    )

# Check current fallback reasons
fallback = labs.check_fallback_reason(dataset="Sales Model")
print(fallback)`}</CodeBlock>

            <Callout type="tip">
              <strong>Production recommendation:</strong> Set <code>DirectLakeBehavior</code> to
              <code> DirectLakeOnly</code> in production. This ensures you find out immediately when something
              triggers fallback, instead of discovering weeks later that your reports have been slow.
            </Callout>

            {/* ========== SECTION 7: OPTIMIZING DELTA TABLES ========== */}
            <div className="blog-divider" />

            <h2>Optimizing Delta Tables for Direct Lake</h2>

            <p>
              A well-optimized Delta table is the foundation of Direct Lake performance. These four techniques
              keep your tables within guardrail limits and ensure the fastest possible column transcoding.
            </p>

            <h3>V-Order: Write-Time Optimization</h3>

            <p>
              V-Order is a Fabric-specific write-time optimization that applies special sorting, row group distribution,
              encoding, and compression to Parquet files. It adds about <strong>15% overhead during writes</strong> but delivers up to
              <strong> 50% better compression</strong> and significantly faster reads. V-Order is <strong>disabled by default</strong>
              in newly created Fabric workspaces to optimize for write-heavy workloads. For read-heavy scenarios like
              Direct Lake, you should enable it explicitly or switch to a ReadHeavy resource profile.
            </p>

            <CodeBlock lang="python">{`# Check if V-Order is enabled in your Spark session
spark.conf.get("spark.sql.parquet.vorder.default")
# Returns: "false" in new workspaces (disabled by default)

# Enable V-Order for read-heavy / Direct Lake workloads
spark.conf.set("spark.sql.parquet.vorder.default", "true")`}</CodeBlock>

            <h3>OPTIMIZE: Bin-Compaction</h3>

            <p>
              Every write operation to a Delta table creates new Parquet files. Over time, this leads to thousands
              of small files (the "small file problem"). <code>OPTIMIZE</code> merges these small files into larger
              ones, reducing the total file count below your SKU's guardrail limit.
            </p>

            <CodeBlock lang="sql">{`-- Basic optimization: compact small files
OPTIMIZE gold.fact_sales;

-- With ZORDER for common filter/join columns
-- This co-locates data for faster predicate pushdown
OPTIMIZE gold.fact_sales ZORDER BY (date_key, region_id);

-- Check file count after optimization
DESCRIBE DETAIL gold.fact_sales;`}</CodeBlock>

            <h3>Row Group Sizing</h3>

            <p>
              Each Parquet file contains one or more <strong>row groups</strong>. The ideal row group size is
              <strong> between 1 million and 16 million rows</strong>. Row groups significantly under 1 million rows are inefficient for
              Direct Lake transcoding because each small row group generates overhead in the VertiPaq encoding process.
              Larger row groups (beyond 16M) do not cause significant issues, but small row groups are the real performance killer.
              <code>OPTIMIZE</code> handles row group sizing automatically.
            </p>

            <h3>Partitioning Strategy</h3>

            <p>
              Partition your Delta tables using <strong>low-cardinality fields</strong> like year, month, or region.
              Avoid over-partitioning (e.g., partitioning by date creates 365 partitions per year, each with its own
              set of Parquet files). A good rule: aim for partitions that contain at least 1 GB of data each.
            </p>

            <CodeBlock lang="python">{`# Good: partition by year and month (low cardinality)
df.write.format("delta") \\
    .partitionBy("year", "month") \\
    .mode("overwrite") \\
    .saveAsTable("gold.fact_sales")

# Bad: partition by date (365 partitions/year = too many small files)
# df.write.format("delta").partitionBy("date").saveAsTable(...)`}</CodeBlock>

            <ImageLightbox
              src={`${IMG}/05-storage-optimization.png`}
              alt="Delta table optimization pipeline: raw writes, V-Order, OPTIMIZE, row group targets, Direct Lake ready"
              variant="diagram"
            />

            <Callout type="info">
              <strong>Push transformations upstream.</strong> Calculate computed columns in PySpark or dbt, not in the
              semantic model. DAX calculated columns are not supported in either Direct Lake variant. By computing
              them in your ETL pipeline, the Gold table already has the final column, and Direct Lake reads it natively.
            </Callout>

            {/* ========== SECTION 8: SEMANTIC LINK LABS ========== */}
            <div className="blog-divider" />

            <h2>Semantic Link Labs: Your Direct Lake Toolbox</h2>

            <p>
              <strong>Semantic Link Labs</strong> is an open-source Python library built specifically for Microsoft Fabric
              notebooks. The <code>sempy_labs.directlake</code> module contains <strong>20 functions</strong> organized
              into five categories, all focused on managing and troubleshooting Direct Lake semantic models.
            </p>

            <CodeBlock lang="python">{`# Install in any Fabric notebook
%pip install semantic-link-labs

import sempy_labs as labs`}</CodeBlock>

            <h3>Diagnostics (5 Functions)</h3>

            <p>
              These functions tell you exactly what is going wrong with your Direct Lake model:
            </p>

            <ul>
              <li><strong><code>check_fallback_reason()</code></strong>: Returns the specific reason each table in your model is falling back to DirectQuery. This is the single most useful function. Run it first.</li>
              <li><strong><code>direct_lake_schema_compare()</code></strong>: Compares the semantic model schema against the Lakehouse schema to identify mismatches (renamed columns, changed types, missing tables).</li>
              <li><strong><code>show_unsupported_direct_lake_objects()</code></strong>: Lists any objects in your model that are not supported by Direct Lake (SQL views, calculated tables).</li>
              <li><strong><code>get_direct_lake_guardrails()</code></strong>: Shows the current guardrail limits for your model based on your capacity SKU.</li>
              <li><strong><code>get_directlake_guardrails_for_sku()</code></strong>: Returns guardrail limits for any specific SKU, useful for capacity planning.</li>
            </ul>

            <CodeBlock lang="python">{`# Check why tables are falling back
fallback = labs.check_fallback_reason(dataset="Sales Model")
print(fallback)
# Output: DataFrame showing each table, its status (DirectLake or DirectQuery),
# and the specific reason for fallback

# Compare schemas to find mismatches
diff = labs.direct_lake_schema_compare(
    dataset="Sales Model",
    workspace="Production"
)
print(diff)

# List unsupported objects
unsupported = labs.show_unsupported_direct_lake_objects(
    dataset="Sales Model"
)
print(unsupported)`}</CodeBlock>

            <h3>Cache Warming (2 Functions)</h3>

            <p>
              These functions solve the <strong>cold start problem</strong> (covered in detail in the next section):
            </p>

            <ul>
              <li><strong><code>warm_direct_lake_cache_perspective()</code></strong>: Runs DAX queries against perspective columns to pre-load data into the in-memory cache.</li>
              <li><strong><code>warm_direct_lake_cache_isresident()</code></strong>: Refreshes the model and restores previously cached columns based on their IsResident status.</li>
            </ul>

            <h3>Schema Management (3 Functions)</h3>

            <ul>
              <li><strong><code>direct_lake_schema_sync()</code></strong>: Synchronizes the semantic model schema with the underlying Lakehouse tables. Fixes column mismatches after upstream schema changes.</li>
              <li><strong><code>add_table_to_direct_lake_semantic_model()</code></strong>: Adds a new Lakehouse table to an existing Direct Lake model without rebuilding.</li>
              <li><strong><code>set_autosync()</code></strong>: Enables or disables automatic schema synchronization.</li>
            </ul>

            <h3>Model Generation (4 Functions)</h3>

            <ul>
              <li><strong><code>generate_direct_lake_semantic_model()</code></strong>: Creates a complete Direct Lake semantic model from scratch based on your Lakehouse tables. Saves hours of manual model building.</li>
              <li><strong><code>generate_shared_expression()</code></strong>: Creates the shared M expression that connects the model to the Lakehouse.</li>
              <li><strong><code>update_direct_lake_model_connection()</code></strong>: Updates the model's data source connection.</li>
              <li><strong><code>update_direct_lake_model_lakehouse_connection()</code></strong>: Points the model to a different Lakehouse.</li>
            </ul>

            <h3>Source Inspection (6 Functions)</h3>

            <ul>
              <li><strong><code>get_direct_lake_source()</code></strong>: Returns the Lakehouse or Warehouse that the model is connected to.</li>
              <li><strong><code>get_direct_lake_sources()</code></strong>: Lists all sources when using multi-source (OneLake variant).</li>
              <li><strong><code>get_shared_expression()</code></strong>: Returns the M expression used to connect to the source.</li>
              <li><strong><code>get_sku_size()</code></strong>: Returns the current capacity SKU.</li>
              <li><strong><code>update_direct_lake_partition_entity()</code></strong>: Updates the Lakehouse table that a specific model partition points to.</li>
              <li><strong><code>list_direct_lake_model_calc_tables()</code></strong>: Lists calculated tables in the model that may cause fallback.</li>
            </ul>

            <ImageLightbox
              src={`${IMG}/06-semantic-link-labs.png`}
              alt="Semantic Link Labs: 20 functions across 5 categories for managing Direct Lake models"
              variant="diagram"
            />

            {/* ========== SECTION 9: COLD START PROBLEM ========== */}
            <div className="blog-divider" />

            <h2>Solving the Cold Start Problem</h2>

            <p>
              Direct Lake has four cache states, and the first user after a framing operation or model restart
              pays the performance penalty:
            </p>

            <ul>
              <li><strong>Hot:</strong> All required columns are in memory and VertiScan caches are populated. Queries hit the caches and return instantly.</li>
              <li><strong>Warm:</strong> All column data needed for a query is already loaded into memory. Performance is on par with Import mode.</li>
              <li><strong>Semiwarm:</strong> Some columns are in memory (preserved by incremental framing), but updated or newly added data must still be loaded. Occurs after framing or under memory pressure.</li>
              <li><strong>Cold:</strong> No columns in memory. The VertiPaq store is empty. All data required to answer a query must be loaded from Delta tables, including dictionary transcoding and join indexes.</li>
            </ul>

            <p>
              The cold start happens when the model is evicted from memory due to inactivity or a cluster node change.
              After framing, the model typically enters a <strong>semiwarm</strong> state (not fully cold) because incremental
              framing preserves unchanged column segments. In both cases, the first user to open a report pays the
              transcoding cost for any columns not already resident in memory.
            </p>

            <h3>Cache Warming with Semantic Link Labs</h3>

            <p>
              The solution is to <strong>pre-warm the cache</strong> after your ETL pipeline completes, before any
              user opens a report. Semantic Link Labs provides two functions for this:
            </p>

            <CodeBlock lang="python">{`import sempy_labs as labs

# Option 1: Warm cache using perspectives
# Pre-loads columns defined in a perspective
labs.warm_direct_lake_cache_perspective(
    dataset="Sales Model",
    perspective="Default"
)

# Option 2: Warm cache based on IsResident status
# Restores columns that were previously cached
labs.warm_direct_lake_cache_isresident(
    dataset="Sales Model"
)`}</CodeBlock>

            <h3>Integrating Cache Warming into Your Pipeline</h3>

            <p>
              The best practice is to add cache warming as the <strong>last step in your ETL pipeline</strong>. After
              your data lands in the Gold layer and the Direct Lake model frames, run a notebook that warms the cache.
              This ensures the first user in the morning gets instant response times.
            </p>

            <CodeBlock lang="python">{`# Complete post-refresh cache warming notebook
# Schedule this as the last step in your data pipeline

import sempy_labs as labs

DATASET = "Sales Model"
WORKSPACE = "Production Analytics"

# Step 1: Check for any fallback issues
print("Checking fallback reasons...")
fallback = labs.check_fallback_reason(
    dataset=DATASET,
    workspace=WORKSPACE
)
print(fallback)

# Step 2: Sync schema if needed
print("Syncing schema...")
labs.direct_lake_schema_sync(
    dataset=DATASET,
    workspace=WORKSPACE
)

# Step 3: Warm the cache
print("Warming cache...")
labs.warm_direct_lake_cache_isresident(
    dataset=DATASET,
    workspace=WORKSPACE
)

print("Done. Cache is warm and ready for users.")`}</CodeBlock>

            <Callout type="tip">
              <strong>Pipeline integration:</strong> In a Fabric Data Pipeline, add a Notebook activity after your
              ETL activities that runs the cache warming script. This runs automatically after every data refresh,
              so users always hit a warm cache.
            </Callout>

            {/* ========== SECTION 10: COMPOSITE MODELS ========== */}
            <div className="blog-divider" />

            <h2>Composite Models: Best of Both Worlds</h2>

            <p>
              The <strong>Direct Lake on OneLake</strong> variant supports composite models, which means you can have
              <strong> Direct Lake tables and Import tables in the same semantic model</strong>. This is a powerful
              pattern for specific use cases.
            </p>

            <h3>When to Use Composite Models</h3>

            <ul>
              <li><strong>Small lookup tables from non-Fabric sources:</strong> A currency exchange rate table from an API, a holiday calendar from SharePoint, or a mapping table from Excel. Import these small tables directly while keeping your large fact tables in Direct Lake.</li>
              <li><strong>Calculated tables:</strong> If you need a DAX-calculated table (like a Date table generated by <code>CALENDARAUTO()</code>), use Import for that table while keeping everything else in Direct Lake. Note: calculated columns that reference Direct Lake table columns are not supported in either variant. Calculation groups, what-if parameters, and field parameters are supported.</li>
              <li><strong>Slowly-changing dimensions:</strong> Small dimension tables that change infrequently can be imported for maximum query performance, while large fact tables stay in Direct Lake for near-real-time freshness.</li>
            </ul>

            <Callout type="warning">
              <strong>OneLake variant only:</strong> Composite models are only available with Direct Lake on OneLake
              (the new variant in Public Preview). Direct Lake on SQL (the original variant) does not support mixing
              storage modes in the same model.
            </Callout>

            <p>
              The key benefit: you no longer need to force every table into OneLake just to use Direct Lake. Small
              reference tables that do not change often can be imported directly, while your large fact tables stay
              in Direct Lake for the performance and freshness benefits.
            </p>

            {/* ========== SECTION 11: KEY TAKEAWAYS ========== */}
            <div className="blog-divider" />

            <h2>Key Takeaways</h2>

            <p>Here is what you should remember from this deep dive:</p>

            <ol>
              <li><strong>Direct Lake gives you Import speed with near-real-time freshness.</strong> It reads Delta Parquet files directly into the VertiPaq engine with no scheduled refresh. Framing takes about 2 seconds, not 10 to 60 minutes.</li>
              <li><strong>Silent DirectQuery fallback is the biggest threat.</strong> SQL views, SQL-level RLS, guardrail breaches, and certain DAX patterns can all trigger fallback, and the UI does not clearly warn you. Use <code>check_fallback_reason()</code> from Semantic Link Labs regularly.</li>
              <li><strong>Run OPTIMIZE on your Delta tables daily.</strong> The "small file problem" is the most common cause of guardrail breaches. <code>OPTIMIZE</code> compacts files and keeps you within limits. Add it to your nightly pipeline.</li>
              <li><strong>Set DirectLakeBehavior to DirectLakeOnly in production.</strong> This makes fallback an error instead of silent degradation. You find problems immediately, not weeks later when users complain about performance.</li>
              <li><strong>Know the two variants.</strong> Direct Lake on SQL (GA) supports single-source with automatic DQ fallback. Direct Lake on OneLake (Preview) supports multi-source, composite models, and no fallback at all. Choose based on your maturity and requirements.</li>
              <li><strong>Semantic Link Labs is your essential toolbox.</strong> 20 functions for diagnostics, cache warming, schema sync, and model generation. Install it in every Fabric notebook that touches semantic models.</li>
              <li><strong>Solve the cold start problem proactively.</strong> Direct Lake has four cache states: cold, semiwarm, warm, and hot. Add cache warming as the last step in your ETL pipeline so the first user in the morning hits a warm cache instead of waiting for transcoding.</li>
            </ol>

            {/* When to use recommendation boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
                <h4 className="text-base font-bold mb-2 text-amber-400">Use Import When:</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground [&>li]:pl-0">
                  <li>Data is <strong>small</strong> (&lt; 1 GB)</li>
                  <li>Data changes <strong>infrequently</strong></li>
                  <li>You need <strong>complex DAX</strong> calculated columns</li>
                  <li>Source is <strong>outside Fabric</strong></li>
                </ul>
              </div>
              <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                <h4 className="text-base font-bold mb-2 text-red-400">Use DirectQuery When:</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground [&>li]:pl-0">
                  <li>Data must be <strong>100% real-time</strong></li>
                  <li>Source enforces its own <strong>security</strong></li>
                  <li>Data volume exceeds <strong>all guardrails</strong></li>
                  <li>Source is <strong>outside OneLake</strong></li>
                </ul>
              </div>
              <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                <h4 className="text-base font-bold mb-2 text-green-400">Use Direct Lake When:</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground [&>li]:pl-0">
                  <li>Data lives in <strong>OneLake Delta tables</strong></li>
                  <li>You need <strong>Import speed</strong> at scale</li>
                  <li>Near-real-time freshness <strong>is sufficient</strong></li>
                  <li>You are on <strong>Fabric capacity</strong> (F2+)</li>
                </ul>
              </div>
            </div>

          </div>  {/* end blog-prose */}

          {/* Resource links */}
          <div className="flex flex-wrap gap-3 mt-10 mb-4 max-w-3xl mx-auto">
            <a
              href="https://learn.microsoft.com/en-us/power-bi/enterprise/directlake-overview"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Direct Lake Overview
            </a>
            <a
              href="https://learn.microsoft.com/en-us/power-bi/enterprise/directlake-develop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Develop Direct Lake Models
            </a>
            <a
              href="https://learn.microsoft.com/en-us/power-bi/enterprise/directlake-fixed-guardrails"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Guardrails Reference
            </a>
            <a
              href="https://learn.microsoft.com/en-us/fabric/data-engineering/delta-optimization-and-v-order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> V-Order and OPTIMIZE
            </a>
            <a
              href="https://github.com/microsoft/semantic-link-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Semantic Link Labs GitHub
            </a>
            <a
              href="https://semantic-link-labs.readthedocs.io/en/stable/sempy_labs.directlake.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Semantic Link Labs Docs
            </a>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}