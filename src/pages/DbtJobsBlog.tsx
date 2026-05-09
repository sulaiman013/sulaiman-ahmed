import { ArrowLeft, Calendar, Clock, User, Github, ExternalLink, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import { useViewCount } from "@/hooks/useViewCount";

const IMG = "/blog/dbt-jobs-fabric";

function CodeBlock({ lang, children }: { lang: string; children: string }) {
  return (
    <div className="blog-code-block">
      <div className="blog-code-header">
        <span>{lang}</span>
      </div>
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
}

function Callout({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "tip" | "warning" }) {
  const styles = {
    info: "border-primary/40 bg-primary/5",
    tip: "border-green-500/40 bg-green-500/5",
    warning: "border-amber-500/40 bg-amber-500/5",
  };
  return (
    <div className={`blog-callout ${styles[type]}`}>
      {children}
    </div>
  );
}

export default function DbtJobsBlog() {
  const views = useViewCount("dbt-jobs-in-microsoft-fabric");
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <article className="pt-28 pb-16 section-padding">
        <div className="max-w-3xl mx-auto blog-article-panel">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {["Microsoft Fabric", "dbt", "PySpark", "Data Engineering", "Benchmarks"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border border-border/60 text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight mb-5">
            dbt Jobs in Microsoft Fabric: A Complete Guide with Performance Benchmarks vs PySpark
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
              <Clock className="h-4 w-4" /> 15 min read
            </span>
            {views != null && (
              <span className="flex items-center gap-1.5">
                <Eye className="h-4 w-4" /> {views.toLocaleString()} views
              </span>
            )}
          </div>

          {/* --- ARTICLE BODY --- */}
          <div className="blog-prose">

            {/* TL;DR Overview */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 my-8">
              <h3 className="text-base font-bold text-foreground mt-0 mb-3 flex items-center gap-2">
                <span className="text-lg">&#9889;</span> TL;DR: What You Will Learn
              </h3>
              <ul className="space-y-1.5 mb-0 text-[14px]">
                <li>What <strong>dbt</strong> is and why it matters for SQL-based data transformation</li>
                <li>How <strong>dbt Jobs in Microsoft Fabric</strong> work (currently in public preview)</li>
                <li>Step-by-step setup: enabling dbt, creating a job, configuring the adapter</li>
                <li>Writing your first <strong>dbt model</strong> and understanding <code>dbt_project.yml</code></li>
                <li>Real <strong>performance benchmarks</strong>: dbt Jobs vs PySpark Notebooks on bronze and gold layers</li>
                <li>dbt was <strong>1.6x faster on bronze ingestion</strong> and <strong>3.2x faster on gold star schema</strong> transformations</li>
                <li>When to use <strong>dbt vs PySpark</strong> based on your workload type</li>
              </ul>
            </div>

            {/* ────────── Section 1 ────────── */}
            <h2>What is dbt and Why Should You Care?</h2>

            <p>
              If you've ever inherited a data warehouse with hundreds of SQL views nested layers deep, you know the pain. No documentation. No lineage. No idea which view depends on which. One change breaks everything downstream.
            </p>

            <p>
              <strong>dbt (data build tool)</strong> solves this elegantly. It's not another ETL tool. It's a transformation framework that treats your SQL like software code:
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Traditional SQL</th>
                    <th>dbt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Version Control</td><td>Manual scripts</td><td>Git-native</td></tr>
                  <tr><td>Dependencies</td><td>"Hope it works"</td><td>Automatic DAG</td></tr>
                  <tr><td>Testing</td><td>None</td><td>Built-in assertions</td></tr>
                  <tr><td>Documentation</td><td>Confluence (maybe)</td><td>Auto-generated</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Real-World Scenario</h3>

            <p>You're building a sales analytics pipeline:</p>

            <ul>
              <li><strong>36 monthly CSV files</strong> landing in your data lake</li>
              <li><strong>Merge/Append</strong> them into a bronze layer</li>
              <li><strong>Transform</strong> to a star schema (1 fact + 10 dimensions)</li>
              <li><strong>Serve</strong> to Power BI</li>
            </ul>

            <p>
              With traditional PySpark notebooks, you write Python code, manage dependencies manually, and hope nothing breaks when someone modifies an upstream table.
            </p>
            <p>
              With dbt, you write SQL models that automatically build in the correct order, document themselves, and test data quality.
            </p>

            {/* ────────── Section 2 ────────── */}
            <h2>dbt Jobs in Microsoft Fabric: What's New?</h2>

            <p>
              Announced at <strong>Microsoft Ignite (November 2025)</strong>, dbt Jobs in Microsoft Fabric bring native dbt execution directly into your Fabric workspace. The public preview rolled out globally by December 21, 2025.
            </p>

            <h3>Current Status (February 2026)</h3>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Adapter</th>
                    <th>Status</th>
                    <th>Target</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>dbt-fabric</td><td><span className="text-primary font-semibold">Public Preview</span></td><td>Fabric Warehouse</td></tr>
                  <tr><td>dbt-sqlserver</td><td>Public Preview</td><td>Azure SQL DB</td></tr>
                  <tr><td>dbt-snowflake</td><td>Public Preview</td><td>Snowflake</td></tr>
                  <tr><td>dbt-postgres</td><td>Public Preview</td><td>PostgreSQL</td></tr>
                </tbody>
              </table>
            </div>

            {/* ────────── Section 3 ────────── */}
            <h2>Why dbt Jobs in Fabric is a Game-Changer</h2>

            <h3>Before: The Pain Points</h3>

            <p>
              <strong>The "Works on My Machine" Problem</strong> &mdash; Your dbt project runs perfectly locally. Push it to Azure DevOps and it fails. Wrong Python version. Missing dependencies. Service connection issues. Your actual SQL? 50 lines. Your pipeline config? 200 lines of YAML and crossed fingers.
            </p>
            <p>
              <strong>The Credential Nightmare</strong> &mdash; Connecting dbt to Fabric Warehouse means: service principals, Key Vault secrets, firewall rules, token rotation. All this before you write a single SELECT statement.
            </p>
            <p>
              <strong>The "Two Worlds" Problem</strong> &mdash; dbt runs in Azure DevOps. Data lives in Fabric. Monitoring split across portals. When something fails at 2 AM, you're jumping between three tools to debug.
            </p>

            <h3>After: dbt Jobs in Fabric</h3>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Aspect</th>
                    <th>Before</th>
                    <th>After</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Authentication</td><td>Service principals, secrets</td><td className="text-primary font-medium">Fabric identity (automatic)</td></tr>
                  <tr><td>Deployment</td><td>Azure DevOps YAML</td><td className="text-primary font-medium">One-click in workspace</td></tr>
                  <tr><td>Monitoring</td><td>Multiple portals</td><td className="text-primary font-medium">Unified Fabric experience</td></tr>
                  <tr><td>Compute</td><td>External runners</td><td className="text-primary font-medium">Native Fabric compute</td></tr>
                </tbody>
              </table>
            </div>

            {/* ────────── Section 4 ────────── */}
            <h2>What We'll Build in This Blog</h2>

            <ol>
              <li><strong>Enable dbt Jobs</strong> for your Fabric workspace</li>
              <li><strong>Compare dbt Jobs vs PySpark Notebooks</strong> with real performance benchmarks</li>
              <li><strong>Share actual execution times</strong> and code</li>
            </ol>

            {/* ────────── Section 5 ────────── */}
            <h2>Enabling dbt Jobs in Microsoft Fabric</h2>

            <p>To enable dbt Jobs, a Fabric Administrator must turn on the feature at the tenant level:</p>

            <ol>
              <li>Click <strong>Settings</strong> (gear icon) &rarr; <strong>Admin portal</strong></li>
              <li>Go to <strong>Tenant settings</strong></li>
              <li>Enable <strong>"Users can create dbt job items (preview)"</strong></li>
              <li>Choose scope: entire organization or specific security groups</li>
              <li>Click <strong>Apply</strong></li>
            </ol>

            <ImageLightbox variant="screenshot" src={`${IMG}/enable-dbt.png`} alt="Enable dbt Jobs in Fabric Admin Portal" caption="Enable dbt Jobs in the Fabric Admin Portal tenant settings" />

            <p>That's it. Once enabled, users with <strong>Contributor role</strong> can create dbt Jobs in their workspaces.</p>

            <Callout type="tip">
              <strong>Coming Soon:</strong> Microsoft announced at Ignite 2025 that the <strong>dbt Fusion engine</strong> (up to 30x faster) is coming in 2026.
            </Callout>

            {/* ────────── Section 6 ────────── */}
            <h2>Creating a dbt Job in Microsoft Fabric</h2>

            <h3>Create New Item</h3>

            <p>In your Fabric workspace:</p>
            <ol>
              <li>Click <strong>+ New item</strong></li>
              <li>Search for "dbt" in the search box</li>
              <li>Select <strong>dbt job (preview)</strong> under "Prepare data"</li>
            </ol>

            <ImageLightbox variant="screenshot" src={`${IMG}/creating-dbt-item.png`} alt="Creating a dbt item in Fabric" caption="Creating a new dbt job item in your workspace" />

            <h3>The dbt Job Interface</h3>

            <p>After creating the dbt job item, you'll see the main editor screen with toolbar options at the top and <strong>Output</strong>, <strong>Compiled SQL</strong>, and <strong>Lineage view</strong> tabs at the bottom.</p>

            <ImageLightbox variant="screenshot" src={`${IMG}/dbt-main-page.png`} alt="dbt Job main interface" caption="The dbt Job editor with Output, Compiled SQL, and Lineage tabs" />

            <h3>Getting Started Options</h3>

            <p>Fabric gives you three ways to start:</p>
            <ol>
              <li><strong>Create a new file</strong> &mdash; Build from scratch with custom models</li>
              <li><strong>Import a project</strong> &mdash; Connect to an existing dbt project (Git repo)</li>
              <li><strong>Practice with sample project</strong> &mdash; Explore with a ready-to-run example</li>
            </ol>

            {/* ────────── Section 7 ────────── */}
            <h2>Configuring the Adapter (Target Warehouse)</h2>

            <p>Before running any dbt commands, you must configure where dbt will write the output. Click <strong>Configure adapter settings</strong> in the yellow banner.</p>

            <h3>Step 1: Select Your Target</h3>

            <p>In the Profile window, choose your destination:</p>
            <ul>
              <li><strong>New Fabric item:</strong> Warehouse (create new)</li>
              <li><strong>New destinations:</strong> Azure SQL Database, Snowflake, PostgreSQL</li>
              <li><strong>OneLake catalog:</strong> Select an existing Fabric Warehouse</li>
            </ul>

            <ImageLightbox variant="screenshot" src={`${IMG}/configure-adapter-settings.png`} alt="Configure adapter settings" caption="Configure adapter settings dialog" />

            <h3>Step 2: Configure the Connection</h3>

            <p>After selecting your warehouse, specify the schema where dbt will materialize your models.</p>

            <ImageLightbox variant="screenshot" src={`${IMG}/connect-to-new-warehouse-or-existing-warehouse.png`} alt="Connect to warehouse" caption="Select new or existing warehouse" />

            <ImageLightbox variant="screenshot" src={`${IMG}/name-the-schema.png`} alt="Name the schema" caption="Specify the target schema for materialized models" />

            {/* ────────── Section 8 ────────── */}
            <h2>Creating Your First dbt Model</h2>

            <p>Click <strong>Create a new file</strong> to initialize your dbt project structure.</p>

            <h3>Naming Your Model</h3>

            <p>A dialog prompts for the file path. Using <code>fact/fact_sales</code> creates a folder structure:</p>

            <CodeBlock lang="text">{`models/
  └── fact/
      └── fact_sales.sql`}</CodeBlock>

            <ImageLightbox variant="screenshot" src={`${IMG}/naming-the-dbt-model.png`} alt="Naming the dbt model" caption="Organize models by layer (staging, fact, dim)" />

            <h3>Writing the SQL</h3>

            <p>Write your transformation logic using the <code>ref()</code> function for dependencies:</p>

            <CodeBlock lang="sql">{`{{ config(materialized='table', schema='dbt_transformed') }}

SELECT
    order_id,
    customer_id,
    order_date,
    total_amount
FROM {{ ref('bronze_sales') }}`}</CodeBlock>

            <p><strong>Important:</strong> You must <strong>Save</strong> (disk icon) before you can Run, Compile, Test, or Build.</p>

            <ImageLightbox variant="screenshot" src={`${IMG}/save-and-build.png`} alt="Save and build" caption="Save your model before running dbt build" />

            {/* ────────── Section 9 ────────── */}
            <h2>Understanding dbt_project.yml</h2>

            <p>The <code>dbt_project.yml</code> file controls how dbt behaves:</p>

            <CodeBlock lang="yaml">{`name: 'dbt_processes'
version: '1.0.0'
config-version: 2

profile: 'fabric'

model-paths: ["models"]

models:
  dbt_processes:
    +materialized: table
    gold:
      +materialized: table`}</CodeBlock>

            <h3>Best Practice: Organize by Layer</h3>

            <CodeBlock lang="yaml">{`models:
  dbt_processes:
    staging:
      +materialized: view
    intermediate:
      +materialized: view
    fact:
      +materialized: table
    dim:
      +materialized: table`}</CodeBlock>

            <p>This ensures dimension and fact tables are physical tables (better for Power BI), while staging models remain lightweight views.</p>

            {/* ────────── Section 10: BENCHMARKS ────────── */}
            <div className="blog-divider" />

            <h2>Performance Comparison: PySpark Notebooks vs dbt Jobs</h2>

            <ImageLightbox variant="screenshot" src={`${IMG}/performance-benchmark-overview.png`} alt="Performance benchmark overview" caption="Benchmark overview: PySpark Notebooks vs dbt Jobs in Microsoft Fabric" />

            <h3>The Challenge: PySpark or dbt Jobs?</h3>

            <p>
              An analytics manager faces a common dilemma: their team needs to build a sales analytics pipeline in Microsoft Fabric, but they're unsure which approach to use.
            </p>

            <ul>
              <li><strong>Option A:</strong> PySpark Notebooks &mdash; familiar, flexible, Python-based</li>
              <li><strong>Option B:</strong> dbt Jobs &mdash; SQL-first, new to Fabric, CI/CD compliant</li>
            </ul>

            <p>To make a data-driven decision, I ran two benchmark tests.</p>

            <Callout type="info">
              <strong>Note on Compute Engines:</strong> This benchmark compares two different compute engines by design.
              <strong> PySpark Notebooks</strong> use Spark compute and write to Lakehouse (Delta tables).
              <strong> dbt Jobs</strong> use the Warehouse SQL engine and write to Fabric Warehouse.
              Both are valid architectures in Microsoft Fabric.
            </Callout>

            {/* ────────── Benchmark Setup ────────── */}
            <h3>The Benchmark Setup</h3>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Source Files</td><td>36 monthly CSV files</td></tr>
                  <tr><td>Records per File</td><td>100,000</td></tr>
                  <tr><td>Total Records</td><td><strong>3.6 Million</strong></td></tr>
                  <tr><td>Time Period</td><td>Jan 2023 to Dec 2025</td></tr>
                </tbody>
              </table>
            </div>

            <p>
              <strong>Dataset Repository: </strong>
              <a href="https://github.com/sulaiman013/sales-analytics-data-dbt-jobs-fabric" target="_blank" rel="noopener noreferrer">
                github.com/sulaiman013/sales-analytics-data-dbt-jobs-fabric
              </a>
            </p>

            {/* ────────── Test 1 ────────── */}
            <div className="blog-divider" />

            <h2>Test 1: Bronze Layer (Data Consolidation)</h2>

            <ImageLightbox variant="screenshot" src={`${IMG}/data-consolidation-test.png`} alt="Data consolidation test" caption="Bronze layer benchmark: Merging 36 monthly tables into one" />

            <p><strong>Objective:</strong> Merge 36 monthly source tables into a single consolidated table.</p>

            <h3>PySpark Approach</h3>

            <CodeBlock lang="python">{`# Union all 36 tables
df_merged = None
for year in [2023, 2024, 2025]:
    for month in range(1, 13):
        table_name = f"sales_LH.dbo.bronze_{year}_{month:02d}"
        df = spark.table(table_name)
        df_merged = df if df_merged is None else df_merged.union(df)

# Write to Lakehouse
df_merged.write.format("delta") \\
    .mode("overwrite") \\
    .saveAsTable("sales_LH.dbo.pyspark_bronze_sales")`}</CodeBlock>

            <ImageLightbox variant="screenshot" src={`${IMG}/pyspark-merge-test.png`} alt="PySpark merge test result" caption="PySpark notebook: Bronze layer merge execution" />

            <h3>dbt Approach</h3>

            <CodeBlock lang="sql">{`-- bronze_sales.sql
{{ config(materialized='table', schema='dbt_sales') }}

SELECT * FROM sales_LH.dbo.bronze_2023_01
UNION ALL
SELECT * FROM sales_LH.dbo.bronze_2023_02
-- ... (36 tables total)
UNION ALL
SELECT * FROM sales_LH.dbo.bronze_2025_12`}</CodeBlock>

            <ImageLightbox variant="screenshot" src={`${IMG}/updated-dbt-merge-test.png`} alt="dbt merge test result" caption="dbt Jobs: Bronze layer merge execution" />

            {/* Bronze Results */}
            <div className="blog-result-card">
              <h4>Bronze Layer Results</h4>
              <div className="blog-result-grid">
                <div className="blog-result-item">
                  <span className="blog-result-label">PySpark Notebooks</span>
                  <span className="blog-result-value">78 seconds</span>
                </div>
                <div className="blog-result-item blog-result-winner">
                  <span className="blog-result-label">dbt Jobs</span>
                  <span className="blog-result-value">48 seconds</span>
                  <span className="blog-result-badge">1.6x Faster</span>
                </div>
              </div>
            </div>

            {/* ────────── Test 2 ────────── */}
            <div className="blog-divider" />

            <h2>Test 2: Gold Layer (Star Schema Transformation)</h2>

            <ImageLightbox variant="screenshot" src={`${IMG}/star-schema-benchmark-test.png`} alt="Star schema benchmark test" caption="Gold layer benchmark: Star schema transformation (1 fact + 10 dimensions)" />

            <p><strong>Objective:</strong> Transform the Bronze table into a star schema with 1 fact table and 10 dimension tables.</p>

            <h3>Tables Created</h3>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Tables</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Fact</strong></td><td>fact_orders (3.6M rows, 10 FKs, 14 measures)</td></tr>
                  <tr><td><strong>Dimensions</strong></td><td>dim_date, dim_time, dim_customer, dim_driver, dim_restaurant, dim_location, dim_payment_method, dim_order_status, dim_device, dim_promo</td></tr>
                </tbody>
              </table>
            </div>

            <h3>PySpark Approach</h3>

            <CodeBlock lang="python">{`# Create dimension tables
dim_customer = bronze_df.select(
    "customer_id", "customer_name", "customer_email"
).distinct()
dim_customer = dim_customer.withColumn(
    "customer_key", F.monotonically_increasing_id()
)

# Write to Lakehouse
dim_customer.write.format("delta") \\
    .mode("overwrite") \\
    .saveAsTable("sales_LH.dim.dim_customer")

# Create fact table with dimension keys
fact_orders = bronze_df \\
    .join(dim_customer, "customer_id") \\
    .select("order_id", "customer_key", "total_amount", ...)

fact_orders.write.format("delta") \\
    .mode("overwrite") \\
    .saveAsTable("sales_LH.fact.fact_orders")`}</CodeBlock>

            <ImageLightbox variant="screenshot" src={`${IMG}/pyspark-notebook-star-schema-test.png`} alt="PySpark star schema test" caption="PySpark notebook: Star schema transformation execution" />

            <h3>dbt Approach</h3>

            <p>Using the <code>ref()</code> function for model dependencies:</p>

            <CodeBlock lang="sql">{`-- dim_customer.sql
{{ config(materialized='table', schema='dbt_transformed') }}

SELECT DISTINCT
    ROW_NUMBER() OVER (ORDER BY customer_id) AS customer_key,
    CAST(customer_id AS VARCHAR(50)) AS customer_id,
    CAST(customer_name AS VARCHAR(200)) AS customer_name,
    CAST(customer_email AS VARCHAR(200)) AS customer_email
FROM {{ ref('bronze_sales') }}`}</CodeBlock>

            <CodeBlock lang="sql">{`-- fact_orders.sql
{{ config(materialized='table', schema='dbt_transformed') }}

SELECT
    b.order_id,
    CAST(FORMAT(CAST(b.order_date AS DATE), 'yyyyMMdd') AS INT) AS date_key,
    b.order_hour AS time_key,
    dc.customer_key,
    dd.driver_key,
    dr.restaurant_key,
    dl.location_key,
    dpm.payment_method_key,
    dos.order_status_key,
    ddev.device_key,
    dp.promo_key,
    b.quantity,
    b.unit_price,
    b.total_amount
FROM {{ ref('bronze_sales') }} b
LEFT JOIN {{ ref('dim_customer') }} dc ON b.customer_id = dc.customer_id
LEFT JOIN {{ ref('dim_driver') }} dd ON b.driver_id = dd.driver_id
LEFT JOIN {{ ref('dim_restaurant') }} dr ON b.restaurant_id = dr.restaurant_id
LEFT JOIN {{ ref('dim_location') }} dl ON b.city = dl.city
LEFT JOIN {{ ref('dim_payment_method') }} dpm ON b.payment_method = dpm.payment_method
LEFT JOIN {{ ref('dim_order_status') }} dos ON b.order_status = dos.order_status
LEFT JOIN {{ ref('dim_device') }} ddev ON b.device_type = ddev.device_type
LEFT JOIN {{ ref('dim_promo') }} dp ON b.promo_code = dp.promo_code`}</CodeBlock>

            <ImageLightbox variant="screenshot" src={`${IMG}/updated-dbt-star-schema-processing-output.png`} alt="dbt star schema processing output" caption="dbt Jobs: Star schema transformation execution" />

            {/* Gold Results */}
            <div className="blog-result-card">
              <h4>Gold Layer Results</h4>
              <div className="blog-result-grid">
                <div className="blog-result-item">
                  <span className="blog-result-label">PySpark Notebooks</span>
                  <span className="blog-result-value">195 seconds</span>
                  <span className="blog-result-sub">3.25 minutes</span>
                </div>
                <div className="blog-result-item blog-result-winner">
                  <span className="blog-result-label">dbt Jobs</span>
                  <span className="blog-result-value">61 seconds</span>
                  <span className="blog-result-sub">1.02 minutes</span>
                  <span className="blog-result-badge">3.2x Faster</span>
                </div>
              </div>
            </div>

            {/* ────────── Overall Results ────────── */}
            <div className="blog-divider" />

            <h2>Overall Results Summary</h2>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Test</th>
                    <th>PySpark Notebooks</th>
                    <th>dbt Jobs</th>
                    <th>Performance Gain</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Bronze Layer</strong></td>
                    <td>78 seconds</td>
                    <td>48 seconds</td>
                    <td className="text-primary font-semibold">1.6x faster</td>
                  </tr>
                  <tr>
                    <td><strong>Gold Layer</strong></td>
                    <td>195 seconds</td>
                    <td>61 seconds</td>
                    <td className="text-primary font-semibold">3.2x faster</td>
                  </tr>
                  <tr className="font-bold">
                    <td>Total</td>
                    <td>273 seconds</td>
                    <td>109 seconds</td>
                    <td className="text-primary">2.5x faster</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Key Findings</h3>

            <ol>
              <li><strong>dbt Jobs significantly outperformed PySpark</strong> for SQL-based transformations</li>
              <li><strong>Warehouse SQL engine</strong> is optimized for set-based operations (UNION, JOIN, aggregations)</li>
              <li><strong>PySpark overhead</strong> includes Spark session initialization and DataFrame serialization</li>
              <li>For <strong>pure SQL transformation workloads</strong>, the Warehouse engine is the clear winner</li>
            </ol>

            <Callout type="warning">
              <strong>Note:</strong> This comparison uses different compute engines by design. If your workload requires Spark-specific features (ML, streaming, complex Python), PySpark remains the right choice regardless of raw SQL performance.
            </Callout>

            {/* ────────── When to Use ────────── */}
            <div className="blog-divider" />

            <h2>When to Use Each Approach</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
                <h4 className="text-base font-bold mb-3 text-primary">Use dbt Jobs When:</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground [&>li]:pl-0">
                  <li>SQL-based transformations (SELECT, JOIN, UNION)</li>
                  <li>Medallion architecture (Bronze to Gold)</li>
                  <li>Star schema / dimensional modeling</li>
                  <li>Cross-database queries (Lakehouse to Warehouse)</li>
                  <li>Teams with strong SQL skills</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 bg-secondary p-5">
                <h4 className="text-base font-bold mb-3">Use PySpark Notebooks When:</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground [&>li]:pl-0">
                  <li>Complex Python logic beyond SQL</li>
                  <li>Machine learning pipelines</li>
                  <li>Streaming data processing</li>
                  <li>Custom data science workflows</li>
                  <li>DataFrame APIs are preferred</li>
                </ul>
              </div>
            </div>

            {/* ────────── Conclusion ────────── */}
            <div className="blog-divider" />

            <h2>My Recommendation</h2>

            <p>
              For <strong>data transformation workloads</strong> in Microsoft Fabric, <strong>start with dbt Jobs</strong>. It's faster, SQL-native, and integrates seamlessly with Fabric Warehouse.
            </p>
            <p>
              Save PySpark for scenarios that genuinely require Python's flexibility.
            </p>
            <p>
              dbt Jobs is still in <strong>Public Preview</strong>, but with the <strong>dbt Fusion engine</strong> (up to 30x faster) coming in 2026, it's only going to get better.
            </p>

          </div>

          {/* ────────── Repo Link (outside prose to avoid style override) ────────── */}
          <div className="flex flex-wrap gap-3 mt-10 mb-4">
            <a
              href="https://github.com/sulaiman013/sales-analytics-data-dbt-jobs-fabric"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-[#1a1a2e] hover:bg-[#16213e] transition-all"
            >
              <Github className="h-4 w-4" /> View Full Codebase on GitHub
            </a>
            <a
              href="https://learn.microsoft.com/en-us/fabric/data-factory/dbt-job-overview"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Microsoft Learn Docs
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
