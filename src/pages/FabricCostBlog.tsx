import { ArrowLeft, Calendar, Clock, User, ExternalLink, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import { useViewCount } from "@/hooks/useViewCount";

const DIAGRAM = "/blog/fabric-cost-optimization";

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

export default function FabricCostBlog() {
  const views = useViewCount("fabric-cost-optimization");
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
              {["Microsoft Fabric", "Cost Optimization", "Dataflow Gen2", "dbt", "PySpark", "Benchmarks"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border border-border/60 text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>

            {/* Series badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/15 text-primary border border-primary/30">
                Part 2 of 2
              </span>
              <span className="text-xs text-muted-foreground">The Foundation Series: Microsoft Fabric Cost Optimization</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight mb-5">
              The Fabric Compute Showdown: Which Tool Gives You the Most Bang for Your CU Buck?
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
                <Clock className="h-4 w-4" /> 14 min read
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
                <li>Dataflow Gen2 consumes <strong>3.4x more CUs</strong> than Spark Notebooks for the same transformation</li>
                <li>dbt Jobs completed star schema transforms <strong>3.2x faster</strong> than PySpark, burning fewer CUs per row</li>
                <li>New <strong>2-tier CI/CD pricing</strong> for Dataflow Gen2 drops costs by up to 58% (12 CU first 10 min, then 1.5 CU)</li>
                <li>Pipeline orchestration costs <strong>0.0056 CU-hours per activity</strong>, but Copy activities cost 1.5 CU-hours. Big difference.</li>
                <li>The <strong>hybrid design pattern</strong> (Dataflows for ingestion, SQL/dbt for transforms) can cut CU consumption by 50%+</li>
                <li>A clear <strong>decision framework</strong> mapping each tool to its ideal use case based on team skill, data volume, and budget</li>
                <li><strong>Capacity Overage</strong> (Q1 2026 preview) lets you auto-pay for spikes instead of getting throttled</li>
              </ul>
            </div>

            <Callout type="info">
              <strong>Prerequisite:</strong> This blog assumes you understand CUs, smoothing, bursting, and throttling.
              If those terms are new, start with{" "}
              <Link to="/blog/fabric-capacity-explained" className="text-primary underline">Part 1: How Fabric Capacity Actually Works</Link>.
            </Callout>

            {/* ========== SECTION 1 ========== */}
            <h2>The Question Everyone Asks</h2>

            <p>
              You have a Microsoft Fabric capacity. You understand how CUs work. Now you are staring at five
              different tools that all claim to transform data. <strong>Spark Notebooks, Dataflow Gen2, dbt Jobs,
              Pipelines, SQL Stored Procedures.</strong>
            </p>

            <p>
              Each one eats CUs differently. Each one has a different price tag per row processed. Pick the wrong one
              and you are burning budget for no reason. Pick the right one and you could cut your compute costs in half.
            </p>

            <p>
              In Part 1, we laid the foundation: what CUs are, how smoothing works, the throttling stages, and the
              dynamic scaling strategy that saves 81%. This blog is the payoff. We are putting every compute method
              head-to-head with real numbers.
            </p>

            <div className="blog-divider" />

            {/* ========== SECTION 2 ========== */}
            <h2>Meet the Five Contenders</h2>

            <p>
              Before we compare CU costs, let us quickly define what each tool actually does. Think of this like a
              sports roster. Each player has a position.
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Tool</th>
                    <th>What It Does</th>
                    <th>Skill Required</th>
                    <th>Best Analogy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Dataflow Gen2</strong></td>
                    <td>Low-code ETL with 300+ built-in transformations via Power Query</td>
                    <td>Low-code (drag and drop)</td>
                    <td>The microwave: quick, easy, but uses more electricity</td>
                  </tr>
                  <tr>
                    <td><strong>Spark Notebooks</strong></td>
                    <td>Python/PySpark code for heavy compute transforms, ML, streaming</td>
                    <td>Python / PySpark</td>
                    <td>The industrial oven: powerful, flexible, but expensive to run</td>
                  </tr>
                  <tr>
                    <td><strong>dbt Jobs</strong></td>
                    <td>SQL-based transformations with version control, testing, lineage</td>
                    <td>SQL</td>
                    <td>The air fryer: efficient, fast, does one thing really well</td>
                  </tr>
                  <tr>
                    <td><strong>Data Pipelines</strong></td>
                    <td>Orchestration layer that triggers and coordinates other tools</td>
                    <td>Low-code</td>
                    <td>The kitchen timer: it does not cook, it tells others when to start</td>
                  </tr>
                  <tr>
                    <td><strong>SQL Stored Procedures</strong></td>
                    <td>T-SQL transforms executed directly on the Warehouse engine</td>
                    <td>SQL</td>
                    <td>The stovetop: direct, no frills, gets the job done</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ImageLightbox
              src={`${DIAGRAM}/contenders.png`}
              caption="The Five Fabric Compute Contenders: Dataflow Gen2, Spark Notebooks, dbt Jobs, Data Pipelines, and SQL Stored Procedures."
              variant="diagram"
            />

            <div className="blog-divider" />

            {/* ========== SECTION 3 ========== */}
            <h2>The CU Consumption Showdown</h2>

            <p>
              Here is where it gets real. We are comparing actual CU consumption for the same type of work across
              different tools. These numbers come from Microsoft documentation, independent community benchmarks,
              and our own testing from{" "}
              <Link to="/blog/dbt-jobs-in-microsoft-fabric" className="text-primary underline">Blog 1</Link>.
            </p>

            <ImageLightbox
              src={`${DIAGRAM}/cu-consumption.png`}
              caption="CU Consumption Showdown: Head-to-head comparison of Dataflow Gen2, Spark Notebooks, dbt Jobs, and Pipeline activities."
              variant="diagram"
            />

            <h3>Test 1: Dataflow Gen2 vs Spark Notebooks</h3>

            <p>
              <a href="https://www.fourmoo.com/2024/01/25/microsoft-fabric-comparing-dataflow-gen2-vs-notebook-on-costs-and-usability/" target="_blank" rel="noopener noreferrer" className="text-primary underline">FourMoo ran a direct comparison</a> on
              an F2 capacity, running the same data transformation in both tools:
            </p>

            <div className="blog-result-card">
              <h4>CU Consumption: Same Transformation, Different Tools</h4>
              <div className="blog-result-grid">
                <div className="blog-result-item">
                  <span className="blog-result-label">Dataflow Gen2</span>
                  <span className="blog-result-value">1,154 CUs</span>
                  <span className="blog-result-sub">97 seconds runtime</span>
                </div>
                <div className="blog-result-item blog-result-winner">
                  <span className="blog-result-label">Spark Notebook</span>
                  <span className="blog-result-value">339 CUs</span>
                  <span className="blog-result-sub">85 seconds runtime</span>
                  <span className="blog-result-badge">3.4x Cheaper</span>
                </div>
              </div>
            </div>

            <p>
              That is not a small difference. The Notebook consumed <strong>70% fewer CUs</strong> for the same
              transformation. On an F2 capacity with 172,800 CU-seconds per day, Dataflow Gen2 eats 0.67% of
              your daily budget per run. The Notebook eats 0.20%.
            </p>

            <Callout type="warning">
              <strong>But wait.</strong> Dataflow Gen2 is low-code. A business analyst can build it in 10 minutes.
              The Notebook requires a developer who knows PySpark. The CU cost is only half the equation.
              Developer time has a cost too.
            </Callout>

            <h3>Test 2: dbt Jobs vs PySpark Notebooks</h3>

            <p>
              From our own benchmarks in{" "}
              <Link to="/blog/dbt-jobs-in-microsoft-fabric" className="text-primary underline">Blog 1</Link>,
              we tested 3.6 million rows across two scenarios:
            </p>

            <div className="blog-result-card">
              <h4>Bronze Layer: Data Consolidation (36 CSV files, 3.6M rows)</h4>
              <div className="blog-result-grid">
                <div className="blog-result-item">
                  <span className="blog-result-label">PySpark Notebook</span>
                  <span className="blog-result-value">78 seconds</span>
                  <span className="blog-result-sub">Spark compute engine</span>
                </div>
                <div className="blog-result-item blog-result-winner">
                  <span className="blog-result-label">dbt Jobs</span>
                  <span className="blog-result-value">48 seconds</span>
                  <span className="blog-result-sub">Warehouse SQL engine</span>
                  <span className="blog-result-badge">1.6x Faster</span>
                </div>
              </div>
            </div>

            <div className="blog-result-card">
              <h4>Gold Layer: Star Schema Transformation (1 fact + 10 dimensions)</h4>
              <div className="blog-result-grid">
                <div className="blog-result-item">
                  <span className="blog-result-label">PySpark Notebook</span>
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

            <p>
              Faster execution means fewer CU-seconds consumed. Both dbt and Spark Notebooks run as
              <strong> background operations</strong> with 24-hour smoothing, so the throttling risk is identical.
              But dbt finishes in 40% of the time, which means 60% less CU consumption for the same result.
            </p>

            <h3>Test 3: Pipeline Orchestration vs Copy Activities</h3>

            <p>
              Pipelines have two very different pricing tiers that people constantly confuse:
            </p>

            <div className="blog-result-card">
              <h4>Pipeline Activity Cost Comparison</h4>
              <div className="blog-result-grid">
                <div className="blog-result-item blog-result-winner">
                  <span className="blog-result-label">Orchestration Activities</span>
                  <span className="blog-result-value">0.0056 CU-hr</span>
                  <span className="blog-result-sub">Lookup, ForEach, If Condition, Set Variable</span>
                  <span className="blog-result-badge">Dirt Cheap</span>
                </div>
                <div className="blog-result-item">
                  <span className="blog-result-label">Copy Activities</span>
                  <span className="blog-result-value">1.5 CU-hr</span>
                  <span className="blog-result-sub">Data movement per throughput resource</span>
                  <span className="blog-result-badge" style={{ background: "hsl(0 72% 51%)" }}>268x More</span>
                </div>
              </div>
            </div>

            <p>
              Orchestration is basically free. It is the Copy activity that burns CUs. If you are using Pipelines
              purely to coordinate Notebooks, dbt Jobs, and Dataflows, the pipeline cost itself is negligible.
              But if you are using Copy activities for heavy data movement, track that separately.
            </p>

            <div className="blog-divider" />

            {/* ========== SECTION 4 ========== */}
            <h2>The Full Comparison Matrix</h2>

            <p>
              Let us put all the numbers in one place. This table combines Microsoft's official CU rates
              with the community benchmark data:
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Dataflow Gen2</th>
                    <th>Spark Notebooks</th>
                    <th>dbt Jobs</th>
                    <th>Pipeline Orchestration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>CU Rate</strong></td>
                    <td className="text-orange-500 font-semibold">16 CU/sec (non-CI/CD)</td>
                    <td className="text-yellow-500 font-semibold">2 VCores = 1 CU</td>
                    <td className="text-green-500 font-semibold">1 core = 2 CU (Warehouse)</td>
                    <td className="text-green-500 font-semibold">0.0056 CU-hr/activity</td>
                  </tr>
                  <tr>
                    <td><strong>CI/CD Rate</strong></td>
                    <td className="text-primary font-semibold">12 CU (first 10 min), 1.5 CU (after)</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td><strong>Burst Multiplier</strong></td>
                    <td>None</td>
                    <td className="text-red-500 font-semibold">3x burst</td>
                    <td>None</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td><strong>Smoothing Window</strong></td>
                    <td>Depends on operation type</td>
                    <td>24 hours (background)</td>
                    <td>24 hours (background)</td>
                    <td>24 hours (background)</td>
                  </tr>
                  <tr>
                    <td><strong>Skill Required</strong></td>
                    <td>Low-code (Power Query)</td>
                    <td>Python / PySpark</td>
                    <td>SQL</td>
                    <td>Low-code</td>
                  </tr>
                  <tr>
                    <td><strong>Best For</strong></td>
                    <td>Quick ingestion, small transforms</td>
                    <td>ML, streaming, complex Python</td>
                    <td>SQL transforms, medallion arch</td>
                    <td>Orchestration, scheduling</td>
                  </tr>
                  <tr className="bg-primary/5">
                    <td><strong>CU Efficiency Rating</strong></td>
                    <td className="text-orange-500 font-semibold">Moderate</td>
                    <td className="text-yellow-500 font-semibold">Good (but expensive for simple SQL)</td>
                    <td className="text-green-500 font-semibold">Excellent for SQL workloads</td>
                    <td className="text-green-500 font-semibold">Excellent (orchestration only)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="blog-divider" />

            {/* ========== SECTION 5 ========== */}
            <h2>The New Dataflow Gen2 Pricing: A Game Changer?</h2>

            <p>
              At <strong>FabCon Europe 2025</strong>, Microsoft announced a 2-tier pricing model for Dataflow
              Gen2 (CI/CD) that dramatically changes the math. Let us break it down.
            </p>

            <h3>Before: Flat Rate Pricing</h3>

            <p>
              Every Dataflow Gen2 query was billed at <strong>16 CU per second</strong> for the entire duration.
              A 20-minute dataflow? That is 1,200 seconds times 16 CU = <strong>19,200 CU-seconds</strong>.
            </p>

            <h3>After: 2-Tier CI/CD Pricing</h3>

            <p>
              If you upgrade your Dataflow to <strong>Dataflow Gen2 (CI/CD)</strong>, you now get:
            </p>

            <ul>
              <li><strong>First 10 minutes:</strong> 12 CU per second (25% reduction)</li>
              <li><strong>After 10 minutes:</strong> 1.5 CU per second (90% reduction)</li>
            </ul>

            <p>
              Same 20-minute dataflow: (600 seconds x 12 CU) + (600 seconds x 1.5 CU) = <strong>8,100 CU-seconds</strong>.
            </p>

            <div className="blog-result-card">
              <h4>20-Minute Dataflow: Old vs New Pricing</h4>
              <div className="blog-result-grid">
                <div className="blog-result-item">
                  <span className="blog-result-label">Non-CI/CD (Old)</span>
                  <span className="blog-result-value">19,200 CUs</span>
                  <span className="blog-result-sub">16 CU/sec flat rate</span>
                </div>
                <div className="blog-result-item blog-result-winner">
                  <span className="blog-result-label">CI/CD (New)</span>
                  <span className="blog-result-value">8,100 CUs</span>
                  <span className="blog-result-sub">2-tier pricing</span>
                  <span className="blog-result-badge">58% Cheaper</span>
                </div>
              </div>
            </div>

            <ImageLightbox
              src={`${DIAGRAM}/dataflow-gen2-pricing.png`}
              caption="Dataflow Gen2 Pricing Breakdown: Non-CI/CD flat rate vs the new 2-tier CI/CD pricing model announced at FabCon Europe 2025."
              variant="diagram"
            />

            <Callout type="tip">
              <strong>Action item:</strong> If you are still using non-CI/CD Dataflows, upgrade immediately.
              Use "Save as Dataflow Gen2 (CI/CD)" in the editor. This is free and takes 30 seconds.
            </Callout>

            <p>
              There are also other pricing tiers to be aware of:
            </p>

            <ul>
              <li><strong>High Scale Compute</strong> (with staging enabled): 6 CU per second. Uses the Warehouse SQL engine. 62% cheaper than standard non-CI/CD.</li>
              <li><strong>Fast Copy</strong>: 1.5 CU per second for data movement.</li>
              <li><strong>Modern Query Evaluator</strong>: Also announced at FabCon, this engine delivers faster run times. In testing by Data Mozart, it reduced CU consumption by <strong>54% vs Gen1</strong> (3,565 CUs vs 7,788 CUs).</li>
            </ul>

            <div className="blog-divider" />

            {/* ========== SECTION 6 ========== */}
            <h2>The Hybrid Design Pattern: Stop Using One Tool for Everything</h2>

            <p>
              This is the biggest cost optimization insight in this entire blog. It comes from a pattern we documented
              at <a href="https://datacrafters.io/evolving-beyond-100-percent-dataflows-hybrid-design-microsoft-fabric/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Data Crafters</a>:
              <strong> stop using one tool for 100% of your transformations.</strong>
            </p>

            <h3>The Problem with 100% Dataflows</h3>

            <p>
              Many teams start their Fabric journey using Dataflow Gen2 for everything. It makes sense initially.
              It is low-code, familiar (Power Query), and fast to build. But when you scale to production, you hit four walls:
            </p>

            <ol>
              <li><strong>Performance degradation.</strong> Refresh times increase exponentially with complex joins and multiple transformation steps.</li>
              <li><strong>Resource overconsumption.</strong> At 16 CU/sec (non-CI/CD), a complex dataflow with 10 queries running for 15 minutes each burns 144,000 CU-seconds. On an F4, that is 40% of your daily capacity in one refresh.</li>
              <li><strong>Scalability constraints.</strong> Managing 50+ dataflows with interdependencies becomes a governance nightmare.</li>
              <li><strong>Audit and reuse difficulties.</strong> Complex M code inside dataflows is hard to version control, test, or share across projects.</li>
            </ol>

            <h3>The Hybrid Solution: 20% Dataflows, 80% SQL</h3>

            <p>
              The pattern is simple. Use each tool for what it does best:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
                <h4 className="text-base font-bold mb-3 text-primary">Dataflow Gen2 (20%): Ingestion Layer</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground [&>li]:pl-0">
                  <li>Pull data from external sources (APIs, files, databases)</li>
                  <li>Light cleaning: rename columns, fix data types, remove nulls</li>
                  <li>Land data into the Bronze layer of your Lakehouse</li>
                  <li>Keep each dataflow under 10 minutes to benefit from CI/CD pricing</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 bg-secondary p-5">
                <h4 className="text-base font-bold mb-3">SQL / dbt Jobs (80%): Transformation Layer</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground [&>li]:pl-0">
                  <li>All Silver and Gold layer transformations via SQL</li>
                  <li>Complex joins, aggregations, window functions, business logic</li>
                  <li>dbt for version control, testing, documentation, lineage</li>
                  <li>Runs on the Warehouse SQL engine: 1 core = 2 CUs, 24hr smoothing</li>
                </ul>
              </div>
            </div>

            <p>
              The math is straightforward. If you move 80% of your transformations from Dataflow Gen2
              (16 CU/sec) to the Warehouse SQL engine (significantly lower CU consumption per operation),
              your total CU spend drops dramatically. The Data Crafters team observed <strong>50%+ reduction in
              CU consumption</strong> after switching to this hybrid model.
            </p>

            <Callout type="tip">
              <strong>Pro Tip:</strong> Use Pipelines as the orchestrator. A pipeline triggers Dataflow Gen2 for
              ingestion, then triggers dbt Jobs or stored procedures for transforms. Pipeline orchestration
              activities cost 0.0056 CU-hours each. Essentially free.
            </Callout>

            <div className="blog-divider" />

            {/* ========== SECTION 7 ========== */}
            <h2>The Recommended Architecture</h2>

            <p>
              Putting it all together, here is the architecture that optimizes for both cost and maintainability:
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Tool</th>
                    <th>What It Does</th>
                    <th>CU Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Orchestration</strong></td>
                    <td>Data Pipelines</td>
                    <td>Schedule and coordinate all other tools</td>
                    <td className="text-green-500 font-semibold">Negligible (0.0056 CU-hr/activity)</td>
                  </tr>
                  <tr>
                    <td><strong>Ingestion (Bronze)</strong></td>
                    <td>Dataflow Gen2 (CI/CD)</td>
                    <td>Pull from sources, light cleaning, land in Lakehouse</td>
                    <td className="text-yellow-500 font-semibold">Moderate (12 CU/sec, keep under 10 min)</td>
                  </tr>
                  <tr>
                    <td><strong>Transform (Silver)</strong></td>
                    <td>dbt Jobs / SQL SPs</td>
                    <td>Cleaning, deduplication, type casting, joins</td>
                    <td className="text-green-500 font-semibold">Low (Warehouse engine, 24hr smoothing)</td>
                  </tr>
                  <tr>
                    <td><strong>Transform (Gold)</strong></td>
                    <td>dbt Jobs</td>
                    <td>Star schema, aggregations, business logic, testing</td>
                    <td className="text-green-500 font-semibold">Low (3.2x faster than PySpark)</td>
                  </tr>
                  <tr>
                    <td><strong>ML / Streaming</strong></td>
                    <td>Spark Notebooks</td>
                    <td>Machine learning, real-time, complex Python logic</td>
                    <td className="text-orange-500 font-semibold">High (3x burst, but necessary)</td>
                  </tr>
                  <tr className="bg-primary/5">
                    <td><strong>Reporting</strong></td>
                    <td>Power BI</td>
                    <td>Semantic models, dashboards, row-level security</td>
                    <td className="text-yellow-500 font-semibold">Variable (per query complexity)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ImageLightbox
              src={`${DIAGRAM}/hybrid-architecture.png`}
              caption="The Hybrid Architecture: Orchestration, Ingestion, Silver, Gold, ML/Streaming, and Reporting layers mapped to the right tools for maximum CU efficiency."
              variant="diagram"
            />

            <div className="blog-divider" />

            {/* ========== SECTION 8 ========== */}
            <h2>Decision Framework: Right Tool for the Right Job</h2>

            <p>
              Use this decision tree when choosing a transformation approach:
            </p>

            <ImageLightbox
              src={`${DIAGRAM}/decision-framework.png`}
              caption="Decision Framework: SQL-first vs Python-first paths, the 20/80 Rule matrix, and when to use each Fabric compute tool."
              variant="diagram"
            />

            <h3>By Team Skill Level</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
                <h4 className="text-base font-bold mb-3 text-primary">SQL-First Teams</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground [&>li]:pl-0">
                  <li><strong>Primary:</strong> dbt Jobs for all Silver/Gold transforms</li>
                  <li><strong>Secondary:</strong> Dataflow Gen2 for ingestion</li>
                  <li><strong>Fallback:</strong> SQL Stored Procedures for one-off scripts</li>
                  <li><strong>CU efficiency:</strong> Excellent</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 bg-secondary p-5">
                <h4 className="text-base font-bold mb-3">Python-First Teams</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground [&>li]:pl-0">
                  <li><strong>Primary:</strong> Spark Notebooks for transforms</li>
                  <li><strong>Secondary:</strong> Pipelines for orchestration</li>
                  <li><strong>Consider:</strong> dbt for SQL-heavy transforms (cheaper CUs)</li>
                  <li><strong>CU efficiency:</strong> Good (watch for over-provisioned clusters)</li>
                </ul>
              </div>
            </div>

            <h3>By Data Volume</h3>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Data Volume</th>
                    <th>Recommended Tool</th>
                    <th>Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Small (&lt;100K rows)</strong></td>
                    <td>Dataflow Gen2</td>
                    <td>Low-code, fast to build, CU overhead is acceptable at small scale</td>
                  </tr>
                  <tr>
                    <td><strong>Medium (100K to 10M rows)</strong></td>
                    <td>dbt Jobs</td>
                    <td>SQL-based, 3.2x faster than PySpark, excellent CU efficiency</td>
                  </tr>
                  <tr>
                    <td><strong>Large (10M to 100M rows)</strong></td>
                    <td>dbt Jobs or Spark Notebooks</td>
                    <td>dbt for SQL transforms, Spark for Python/ML workloads</td>
                  </tr>
                  <tr>
                    <td><strong>Massive (100M+ rows)</strong></td>
                    <td>Spark Notebooks</td>
                    <td>Distributed compute, 3x burst, handles billions of rows</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>By Cost Sensitivity</h3>

            <p>
              If your team is under budget pressure, here is the priority order for cutting CU costs:
            </p>

            <ol>
              <li><strong>Upgrade to Dataflow Gen2 (CI/CD).</strong> Immediate 25 to 90% reduction in Dataflow CU costs. Free to do.</li>
              <li><strong>Move transforms from Dataflows to SQL/dbt.</strong> Shift heavy joins and aggregations to the Warehouse engine. 50%+ CU reduction.</li>
              <li><strong>Implement dynamic scaling.</strong> Use Azure Logic Apps to scale down during off-hours. 70 to 81% monthly savings (covered in <Link to="/blog/fabric-capacity-explained" className="text-primary underline">Part 1</Link>).</li>
              <li><strong>Right-size your Spark clusters.</strong> Do not use a 16-node cluster for a 1M-row notebook. Start small, enable autoscale.</li>
              <li><strong>Enable Capacity Overage (Q1 2026).</strong> Instead of over-provisioning for rare spikes, right-size for typical usage and auto-pay for overages.</li>
            </ol>

            <div className="blog-divider" />

            {/* ========== SECTION 9 ========== */}
            <h2>New in Q1 2026: Capacity Overage</h2>

            <p>
              Microsoft is previewing a new feature called <strong>Fabric Capacity Overage</strong>. Instead of
              getting throttled during traffic spikes, admins can enable automatic overage billing on specific capacities.
            </p>

            <p>
              Here is how it works:
            </p>

            <ul>
              <li><strong>Right-size for normal usage.</strong> Do not over-provision for rare spikes.</li>
              <li><strong>Set a 24-hour CU limit.</strong> Control your maximum overage spend.</li>
              <li><strong>Pay per-CU for excess.</strong> Only when you actually exceed capacity.</li>
              <li><strong>No throttling.</strong> Jobs continue running instead of being delayed or rejected.</li>
            </ul>

            <p>
              This is huge for teams that have unpredictable workloads. Instead of buying an F64 to handle a
              monthly spike that only lasts 2 hours, you can run on an F16 and let overage handle the spike.
              The savings could be substantial.
            </p>

            <Callout type="warning">
              <strong>Note:</strong> Capacity Overage is in preview as of Q1 2026. Pricing details may change
              before general availability. Check the{" "}
              <a href="https://blog.fabric.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Microsoft Fabric Blog</a> for updates.
            </Callout>

            <div className="blog-divider" />

            {/* ========== SECTION 10 ========== */}
            <h2>What This Means for You</h2>

            <p>
              Here are the key takeaways from this compute showdown:
            </p>

            <ol>
              <li><strong>Dataflow Gen2 is not "expensive." It is expensive when misused.</strong> Keep dataflows under 10 minutes, use CI/CD pricing, and limit them to ingestion. They are excellent at what they are designed for: low-code data ingestion from external sources.</li>
              <li><strong>dbt Jobs is the CU efficiency champion for SQL workloads.</strong> 3.2x faster than PySpark for star schema transforms, runs on the Warehouse engine with 24-hour smoothing. If your team knows SQL, this is your primary transformation tool.</li>
              <li><strong>Spark Notebooks are necessary, not default.</strong> Reserve them for workloads that genuinely need Python: ML pipelines, streaming, complex data science. Do not use a Spark cluster to run what a SQL query could do.</li>
              <li><strong>Pipelines are free (for orchestration).</strong> Use them aggressively to coordinate your other tools. Just watch Copy activity costs separately.</li>
              <li><strong>The hybrid pattern wins.</strong> Dataflows for ingestion (20%), SQL/dbt for transforms (80%), Pipelines for orchestration. This is the architecture that minimizes CU spend while maximizing team productivity.</li>
              <li><strong>Upgrade your Dataflows to CI/CD immediately.</strong> This single action can cut Dataflow CU costs by 58%. It takes 30 seconds and costs nothing.</li>
              <li><strong>Stack your savings.</strong> Combine the hybrid pattern + dynamic scaling from Part 1 + right-sized Spark clusters + CI/CD pricing. Teams applying all four strategies typically see <strong>60 to 80% total CU cost reduction</strong>.</li>
            </ol>

            <h2>My Recommendation</h2>

            <p>
              For most <strong>Analytics Engineering</strong> and <strong>Data Engineering</strong> teams in
              Microsoft Fabric, start with this stack:
            </p>

            <ul>
              <li><strong>Orchestration:</strong> Data Pipelines (dirt cheap, low-code)</li>
              <li><strong>Ingestion:</strong> Dataflow Gen2 CI/CD (low-code, keep under 10 min per query)</li>
              <li><strong>Transformation:</strong> dbt Jobs (SQL-native, fastest CU-per-row, version controlled)</li>
              <li><strong>Heavy compute:</strong> Spark Notebooks (only when you genuinely need Python/ML)</li>
              <li><strong>Reporting:</strong> Power BI (connected to Warehouse or Lakehouse SQL endpoint)</li>
            </ul>

            <p>
              Then layer on the cost optimization strategies from{" "}
              <Link to="/blog/fabric-capacity-explained" className="text-primary underline">Part 1</Link>:
              dynamic scaling with Azure Logic Apps, right-sized SKUs, and the new Capacity Overage feature.
            </p>

            <p>
              This combination gives you the best CU efficiency, the best developer experience, and the
              lowest total cost of ownership in Microsoft Fabric.
            </p>

            <p className="text-sm text-muted-foreground italic mt-12">
              This is Part 2 of a 2-part series on Microsoft Fabric Cost Optimization.{" "}
              <Link to="/blog/fabric-capacity-explained" className="text-primary underline">Part 1</Link> covers
              the foundation: CUs, smoothing, bursting, throttling, and dynamic scaling.
            </p>

          </div>
          {/* end blog-prose */}

          {/* Resource links */}
          <div className="flex flex-wrap gap-3 mt-10 mb-4 max-w-3xl mx-auto">
            <a
              href="https://learn.microsoft.com/en-us/fabric/data-factory/pricing-dataflows-gen2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Dataflow Gen2 Pricing Docs
            </a>
            <a
              href="https://learn.microsoft.com/en-us/fabric/data-factory/pricing-pipelines"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Pipeline Pricing Docs
            </a>
            <a
              href="https://learn.microsoft.com/en-us/fabric/data-engineering/billing-capacity-management-for-spark"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Spark Billing Docs
            </a>
            <a
              href="https://datacrafters.io/evolving-beyond-100-percent-dataflows-hybrid-design-microsoft-fabric/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Data Crafters: Hybrid Design
            </a>
            <a
              href="https://blog.fabric.microsoft.com/en-us/blog/unlocking-the-next-generation-of-data-transformations-with-dataflow-gen2-fabcon-europe-2025-announcements/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> FabCon Europe 2025 Announcements
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}