import { ArrowLeft, Calendar, Clock, User, ExternalLink, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import { useViewCount } from "@/hooks/useViewCount";

const DIAGRAM = "/blog/fabric-capacity-explained";

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

export default function FabricCapacityBlog() {
  const views = useViewCount("fabric-capacity-explained");
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
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
            {["Microsoft Fabric", "Capacity Units", "Cost Optimization", "Data Engineering", "Power BI"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border border-border/60 text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>

          {/* Series badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/15 text-primary border border-primary/30">
              Part 1 of 2
            </span>
            <span className="text-xs text-muted-foreground">The Foundation Series: Microsoft Fabric Cost Optimization</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight mb-5">
            How Microsoft Fabric Capacity Actually Works: A Complete Guide
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
              <Clock className="h-4 w-4" /> 12 min read
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

            {/* TL;DR Overview */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 my-8">
              <h3 className="text-base font-bold text-foreground mt-0 mb-3 flex items-center gap-2">
                <span className="text-lg">&#9889;</span> TL;DR: What You Will Learn
              </h3>
              <ul className="space-y-1.5 mb-0 text-[14px]">
                <li>What <strong>Capacity Units (CUs)</strong> are and how they work as Fabric's universal compute currency</li>
                <li>The <strong>One Pool Model</strong>: how every workload (Spark, Pipelines, dbt, Power BI) shares a single capacity</li>
                <li>How different workloads <strong>consume CUs</strong> at different rates, with real-life scenarios</li>
                <li>How <strong>smoothing</strong> spreads bursty jobs over time so you don't get throttled</li>
                <li>What <strong>bursting and throttling</strong> look like and how to avoid them</li>
                <li>The <strong>Power BI price hike</strong> and why it's pushing teams toward Fabric capacity</li>
                <li>How to <strong>save 40%+ on costs</strong> using Azure Logic Apps for dynamic capacity scaling</li>
              </ul>
            </div>

            {/* Intro quote */}
            <blockquote className="border-l-4 border-primary/40 pl-5 py-2 my-8 text-[15px] italic text-muted-foreground">
              Whether you are a Data Analyst building reports, a Data Engineer running Spark notebooks, or an Analytics Engineer orchestrating dbt transformations, you need to understand how Fabric's compute engine works under the hood. This is the guide I wish I had when I started.
            </blockquote>

            {/* ────────── Section 1: Why This Matters ────────── */}
            <h2>Why This Matters</h2>

            <p>
              Microsoft Fabric is not like traditional cloud services where you pay per query or per pipeline run. Instead, you buy a <strong>pool of compute power</strong> called Capacity Units (CUs), and every workload you run, whether it is a Power BI report refresh, a Spark Notebook, a Pipeline, a Dataflow, or a dbt Job, drinks from that same pool.
            </p>

            <p>This applies to everyone on the platform:</p>

            <ul>
              <li><strong>Data Analysts</strong> refreshing semantic models and running DAX queries</li>
              <li><strong>Data Engineers</strong> running PySpark notebooks and orchestrating pipelines</li>
              <li><strong>Analytics Engineers</strong> executing dbt transformations and building data models</li>
            </ul>

            <p>If you do not understand how this pool works, you will either:</p>

            <ul>
              <li><strong>Overspend:</strong> running workloads that consume CUs inefficiently</li>
              <li><strong>Get throttled:</strong> hitting capacity limits and having jobs rejected</li>
              <li><strong>Underutilize:</strong> paying for capacity you are not using</li>
            </ul>

            <p>
              This guide breaks down the Fabric capacity model so you can make informed decisions regardless of your role. In Part 2, we will use this foundation to compare every compute method head-to-head and show you exactly where your money goes.
            </p>

            {/* ────────── Section 2: What Are CUs ────────── */}
            <div className="blog-divider" />
            <h2>What Are Capacity Units (CUs)?</h2>

            <p>
              A Capacity Unit is the universal currency of Microsoft Fabric. If you have ever played a video game, think of your character's <strong>energy bar</strong> (or stamina bar). Every time your character sprints, swings a sword, or casts a spell, the energy bar depletes. Stop moving and rest for a moment, and it slowly refills.
            </p>

            <p>
              Capacity Units work the same way. Every workload you run, whether it is a Spark Notebook crunching data, a Pipeline moving files, or a Power BI report refreshing, <strong>drains your energy bar</strong>. When the workload finishes, Fabric's smoothing mechanism gradually recovers your capacity, just like your character catching their breath before the next fight.
            </p>

            <p>
              Your CU allocation is the <strong>size</strong> of that energy bar. A small SKU like F4 gives you a short bar (4 CUs), enough for light actions. A large SKU like F64 gives you a long bar (64 CUs), letting you perform intense combos without running out. The bigger the bar, the more heavy workloads you can run before needing to pace yourself.
            </p>

            <p>
              When you purchase a Fabric capacity, you choose a SKU (Stock Keeping Unit) that determines the size of your energy bar:
            </p>

            <ImageLightbox
              src={`${DIAGRAM}/05_sku_tiers.png`}
              caption="Fabric SKU Tiers: From F2 (2 CUs) to F2048 (2,048 CUs). Billed per second with 1-minute minimum."
            />

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>SKU</th>
                    <th>Capacity Units</th>
                    <th>Power BI Equivalent</th>
                    <th>Monthly Cost (approx.)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>F2</strong></td><td>2 CUs</td><td>-</td><td>~$262</td></tr>
                  <tr><td><strong>F4</strong></td><td>4 CUs</td><td>-</td><td>~$524</td></tr>
                  <tr><td><strong>F8</strong></td><td>8 CUs</td><td>EM/A1</td><td>~$1,048</td></tr>
                  <tr><td><strong>F16</strong></td><td>16 CUs</td><td>EM2/A2</td><td>~$2,096</td></tr>
                  <tr><td><strong>F32</strong></td><td>32 CUs</td><td>EM3/A3</td><td>~$4,192</td></tr>
                  <tr><td className="text-primary font-semibold">F64</td><td className="text-primary font-semibold">64 CUs</td><td>P1/A4</td><td>~$8,384</td></tr>
                  <tr><td><strong>F128</strong></td><td>128 CUs</td><td>P2/A5</td><td>~$16,768</td></tr>
                  <tr><td><strong>F256</strong></td><td>256 CUs</td><td>P3/A6</td><td>~$33,536</td></tr>
                  <tr><td><strong>F512</strong></td><td>512 CUs</td><td>P4/A7</td><td>~$67,072</td></tr>
                  <tr><td><strong>F1024</strong></td><td>1024 CUs</td><td>P5/A8</td><td>~$134,144</td></tr>
                  <tr><td><strong>F2048</strong></td><td>2048 CUs</td><td>-</td><td>~$268,288</td></tr>
                  <tr className="bg-primary/5"><td className="text-primary font-semibold">Trial</td><td>64 CUs</td><td>-</td><td className="text-primary font-semibold">Free (60 days)</td></tr>
                </tbody>
              </table>
            </div>

            <Callout type="tip">
              <strong>Key points:</strong> Billing is per second with a 1-minute minimum. You can choose Pay-As-You-Go (PAYG) or Reserved (1 or 3 year commitment for ~41% savings). The Trial capacity gives you F64-level power for 60 days to experiment.
            </Callout>

            {/* ────────── Section 3: One Pool Model ────────── */}
            <div className="blog-divider" />
            <h2>The One Pool Model: Every Workload Shares</h2>

            <h3>The Problem: Billing Chaos Across Five Services</h3>

            <p>
              Let me paint a picture you might recognize. You are a Data Engineer at a mid-size retail company. Your data platform looks like this:
            </p>

            <ul>
              <li><strong>Azure Synapse SQL Pool</strong> for the data warehouse ($3,200/month)</li>
              <li><strong>Databricks workspace</strong> for Spark notebooks ($2,800/month)</li>
              <li><strong>Azure Data Factory</strong> for pipelines ($600/month)</li>
              <li><strong>Power BI Premium</strong> for reports ($5,000/month)</li>
              <li><strong>Azure SQL Database</strong> for operational queries ($900/month)</li>
            </ul>

            <p>
              That is five separate services, five billing meters, five scaling configurations, and five monitoring dashboards. When your CFO asks "How much does our data platform cost?", you spend two days pulling invoices from different Azure services, trying to reconcile usage spikes. When one service is underutilized and another is maxed out, you cannot shift resources between them. Each service has its own capacity silo.
            </p>

            <h3>The Solution: One Capacity Pool Powers Everything</h3>

            <p>
              This is the most important concept in Fabric. Unlike the old world where you managed separate resource pools for SQL, Spark, Pipelines, and Reporting, Fabric puts <strong>everything into one capacity pool</strong>. One invoice. One scaling knob. One monitoring app.
            </p>

            <ImageLightbox
              src={`${DIAGRAM}/01_one_pool_model.png`}
              caption="Every Fabric workload shares the same Capacity Unit pool. One capacity, many workloads."
            />

            <p>
              That same retail company now buys a single F64 capacity (64 CUs) for ~$8,384/month, replacing all five services. Their Spark Notebooks, Data Pipelines, Dataflows, dbt Jobs, Warehouse queries, Power BI reports, Real-Time Intelligence, and ML Models all draw from the same energy bar.
            </p>

            <p>
              The result: one bill, simpler management, and the ability to shift compute between workloads dynamically. If the warehouse is idle at night, Spark notebooks can use those CUs. If reports are light on weekends, pipelines get more room to run.
            </p>

            <Callout type="warning">
              <strong>The trade-off to watch:</strong> Since everything shares one pool, a heavy Notebook job running at 2 PM can starve your Power BI report refreshes scheduled at the same time. This is why workload scheduling becomes critical. You are no longer managing silos, you are managing a shared resource, and that requires planning.
            </Callout>

            {/* ────────── Section 4: CU Consumption Rates ────────── */}
            <div className="blog-divider" />
            <h2>How Different Workloads Consume CUs</h2>

            <p>
              Not all actions drain your energy bar at the same rate. Going back to our video game analogy: sprinting drains energy faster than walking, and casting a powerful spell drains more than a basic attack. The same applies to Fabric workloads. Let us walk through each one with real scenarios so you can see exactly what this means in practice.
            </p>

            <ImageLightbox
              src={`${DIAGRAM}/02_cu_consumption_rates.png`}
              caption="CU consumption rates vary dramatically across workloads. Notebooks get a 3x burst multiplier."
            />

            <h3>Spark Notebooks: The Heavy Hitters</h3>

            <p>
              <strong>Real scenario:</strong> Your Data Engineering team runs a nightly PySpark Notebook that reads 50 million rows of sales transactions from a data lake, cleans and transforms them, and writes the results to a Lakehouse Delta table. This is the "power spell" of Fabric, it is compute-intensive but incredibly powerful.
            </p>

            <p>Here is how the CU math works:</p>
            <ul>
              <li>Every <strong>2 Spark VCores</strong> (virtual CPU cores) your Notebook uses costs <strong>1 CU</strong></li>
              <li>Fabric gives you a <strong>3x burst multiplier</strong>, meaning your capacity can temporarily punch above its weight. On an F64 (64 CUs), you get up to <strong>384 Spark VCores</strong> (64 x 2 x 3) during burst periods</li>
              <li>You only pay when the Notebook is <strong>actively running code</strong>, not during cluster startup or idle time</li>
              <li>Spark jobs are classified as <strong>Background operations</strong>, so their consumption gets smoothed over 24 hours (more on this in the Smoothing section)</li>
            </ul>

            <Callout type="tip">
              <strong>Why this matters:</strong> That 50-million-row transformation might use 32 CUs for 20 minutes. Without the 3x burst multiplier, you would need an F32 capacity at minimum. With it, even an F16 can handle the burst because Fabric lets you temporarily exceed your base allocation.
            </Callout>

            <h3>Data Pipelines: The Orchestrators</h3>

            <p>
              <strong>Real scenario:</strong> Every morning at 6 AM, your Pipeline kicks off. It pulls data from 3 external APIs, copies files from an SFTP server, triggers a Spark Notebook for transformation, runs a Dataflow to clean reference data, and finally refreshes 2 Power BI semantic models. The Pipeline itself is like a project manager: it coordinates everyone else's work.
            </p>

            <ul>
              <li><strong>Orchestration activities</strong> (the "project management" steps like ForEach loops, If/Else conditions, setting variables) cost almost nothing: <strong>~0.006 CU hours per activity</strong>. You could run thousands of these and barely notice</li>
              <li><strong>Copy Activity</strong> (moving actual data) costs <strong>1.5 CU hours</strong> per throughput unit. Copying 10 GB of CSV files from an SFTP server is a real CU expense</li>
              <li>When the Pipeline triggers a Notebook or Dataflow, <strong>those items consume their own CUs on top</strong>. The Pipeline is cheap; the workloads it triggers are where the real cost lives</li>
            </ul>

            <h3>Dataflow Gen2: The No-Code Option</h3>

            <p>
              <strong>Real scenario:</strong> A Business Analyst on your team builds a Power Query transformation that merges customer data from Salesforce with order data from SAP, cleans up address formats, and loads the result into a Warehouse table. No code, just drag-and-drop. Dataflow Gen2 makes this possible, but the CU rates depend on which engine handles the work:
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Engine</th>
                    <th>CU Rate</th>
                    <th>When It Kicks In</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Standard Compute (CI/CD)</td><td>12 CU/sec (first 10 min), then 1.5 CU/sec</td><td>Deployments via Git/pipelines</td></tr>
                  <tr><td>Standard Compute (non-CI/CD)</td><td>16 CU/sec flat</td><td>Manual runs from the portal</td></tr>
                  <tr><td>High Scale (staging enabled)</td><td>6 CU/sec</td><td>Large datasets with staging Lakehouse</td></tr>
                  <tr><td>Fast Copy</td><td>1.5 CU/sec</td><td>Simple data movement, no transforms</td></tr>
                </tbody>
              </table>
            </div>

            <Callout type="tip">
              <strong>Cost-saving tip:</strong> Notice the difference? Enabling a staging Lakehouse switches Dataflow Gen2 to the <strong>High Scale engine at 6 CU/sec</strong>, which is 62% cheaper than the default 16 CU/sec. For heavy Dataflow workloads, this one setting can cut your CU consumption dramatically.
            </Callout>

            <h3>dbt Jobs: SQL-Based Transformations</h3>

            <p>
              <strong>Real scenario:</strong> Your Analytics Engineering team uses dbt to manage 40 SQL transformation models. Every morning, dbt runs all 40 models in dependency order: staging models clean raw data, intermediate models join tables, and mart models produce the final business-ready datasets. Because dbt runs pure SQL on the Fabric Warehouse engine, there is no Spark cluster overhead.
            </p>

            <ul>
              <li>Every <strong>1 Warehouse compute core</strong> costs <strong>2 CUs</strong></li>
              <li>dbt Jobs are classified as <strong>Background operations</strong> (24-hour smoothing), so even a heavy dbt run gets spread across the full day</li>
              <li>Since dbt uses SQL (not Spark), the compute overhead is lower. Running 40 SQL models is far lighter on your energy bar than running 40 PySpark notebooks</li>
            </ul>

            <h3>Data Warehouse Queries</h3>

            <p>
              <strong>Real scenario:</strong> Throughout the day, your finance team runs ad-hoc SQL queries against the Warehouse to pull revenue reports, check inventory levels, and validate month-end numbers. Each query consumes Warehouse compute cores at a rate of <strong>1 core = 2 CUs</strong>.
            </p>

            <ul>
              <li>All Warehouse queries are classified as <strong>Background</strong> (24-hour smoothing), which is generous. Even a heavy analytical query gets its cost spread across the day</li>
              <li>Fabric caches query results, so if three analysts run the same report, only the first execution consumes full CUs. The rest are served from cache at minimal cost</li>
            </ul>

            <h3>Power BI: Reports and Dashboards</h3>

            <p>
              <strong>Real scenario:</strong> Your company has 200 employees who open Power BI dashboards throughout the day. Every time someone opens a report, the rendering engine processes DAX queries to fetch the data. Meanwhile, at 5 AM, the semantic models refresh to pull the latest data from the Warehouse.
            </p>

            <ul>
              <li><strong>Semantic model refreshes</strong> (pulling new data) are Background operations, smoothed over 24 hours. Schedule these during off-peak hours for minimal impact</li>
              <li><strong>Report rendering and DAX queries</strong> (people viewing dashboards) are <strong>Interactive operations</strong>, smoothed over 5 to 64 minutes. These are user-facing, so Fabric prioritizes them</li>
            </ul>

            {/* ────────── Section 5: Smoothing ────────── */}
            <div className="blog-divider" />
            <h2>Smoothing: How Fabric Prevents Spikes from Killing You</h2>

            <p>
              This is where Fabric gets clever. Instead of charging you for peak usage at any given second, Fabric <strong>smooths</strong> your consumption over time. This means short bursts of heavy compute do not immediately eat up your entire capacity.
            </p>

            <ImageLightbox
              src={`${DIAGRAM}/03_smoothing_explained.png`}
              caption="Interactive operations smooth over 5 to 64 minutes. Background operations smooth over 24 hours."
            />

            <h3>Two Types of Smoothing</h3>

            <p><strong>Interactive Operations</strong> (user-facing: report rendering, DAX queries, SQL database queries)</p>
            <ul>
              <li>Smoothed over a minimum of <strong>5 minutes</strong>, scaling up to <strong>64 minutes</strong> depending on consumption magnitude</li>
              <li>The dynamic window means small operations get 5-minute smoothing, while large operations get more generous windows</li>
            </ul>

            <p><strong>Background Operations</strong> (scheduled: Notebook runs, Pipeline executions, Dataflow refreshes, dbt Jobs, Warehouse queries)</p>
            <ul>
              <li>Smoothed over <strong>24 hours</strong> (2,880 timepoints of 30 seconds each)</li>
              <li>This is extremely generous. A heavy Notebook that takes 30 minutes of intense compute gets its CU consumption spread across the entire day</li>
            </ul>

            <h3>Why This Matters</h3>

            <p>
              Consider an F4 capacity (4 CUs). Without smoothing, you could only run a Spark job that uses 4 CUs at any instant. With 24-hour smoothing for background operations, your effective capacity over a day is:
            </p>

            <div className="blog-result-card">
              <h4>F4 Effective Daily Capacity</h4>
              <div className="text-center">
                <span className="text-3xl font-bold text-primary">4 CUs x 24 hrs x 60 min = 5,760 CU-minutes/day</span>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3">
                You could run a job consuming 48 CUs for 2 hours, and the cost gets smoothed across 24 hours.
              </p>
            </div>

            {/* ────────── Section 6: Bursting ────────── */}
            <div className="blog-divider" />
            <h2>Bursting: Punching Above Your Weight</h2>

            <p>
              Bursting allows your operations to temporarily consume <strong>more compute than your provisioned SKU</strong> would normally allow. This is enabled by the smoothing mechanism.
            </p>

            <p>For example, on an F4 capacity:</p>
            <ul>
              <li>You might launch a Spark Notebook that needs 16 CUs for 15 minutes</li>
              <li>Fabric allows this because, when smoothed over 24 hours, the total consumption fits within your allocation</li>
              <li>The job runs at full speed rather than being throttled</li>
            </ul>

            <Callout type="warning">
              <strong>Important caveat:</strong> Bursting and smoothing are <strong>NOT supported</strong> when Autoscale Billing for Spark is enabled (Pay-As-You-Go mode for Spark). In that mode, you pay per-CU-second without any smoothing benefit.
            </Callout>

            {/* ────────── Section 7: Throttling ────────── */}
            <div className="blog-divider" />
            <h2>Throttling: What Happens When You Push Too Far</h2>

            <p>
              When your cumulative CU consumption exceeds your capacity, Fabric applies <strong>progressive throttling</strong>. Understanding these stages helps you plan workload schedules:
            </p>

            <ImageLightbox
              src={`${DIAGRAM}/04_throttling_stages.png`}
              caption="Fabric applies progressive throttling in 4 stages, from safe zone to full rejection."
            />

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Stage</th>
                    <th>Condition</th>
                    <th>What Happens</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-green-500 font-semibold">Safe Zone</td>
                    <td>Usage &le; 10 min of future capacity</td>
                    <td>No throttling. Jobs run freely.</td>
                  </tr>
                  <tr>
                    <td className="text-yellow-500 font-semibold">Overage Protection</td>
                    <td>10 min &lt; usage &le; 60 min</td>
                    <td>Interactive jobs delayed by 20 seconds at submission</td>
                  </tr>
                  <tr>
                    <td className="text-orange-500 font-semibold">Interactive Rejection</td>
                    <td>60 min &lt; usage &le; 24 hours</td>
                    <td>Interactive jobs rejected. Background jobs still run.</td>
                  </tr>
                  <tr>
                    <td className="text-red-500 font-semibold">Background Rejection</td>
                    <td>Usage &gt; 24 hours</td>
                    <td>ALL jobs rejected. Nothing runs until capacity recovers.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Special Cases</h3>
            <ul>
              <li><strong>Real-Time Intelligence</strong> skips the 20-second delay stage. Throttling only starts at the rejection phase to preserve real-time performance.</li>
              <li><strong>Eventstreams</strong> are never rejected. Instead, their allocated CU resources are reduced until capacity recovers.</li>
              <li><strong>Data Warehouse</strong> classifies almost all operations as Background, leveraging 24-hour smoothing to avoid triggering throttling.</li>
            </ul>

            <h3>Compound Throttling Protection</h3>
            <p>
              When a request chains across multiple items (e.g., a report queries a semantic model which reads from OneLake), Fabric only throttles <strong>once per capacity in the chain</strong>, not at every hop.
            </p>

            {/* ────────── Section 8: Metrics App ────────── */}
            <div className="blog-divider" />
            <h2>The Fabric Capacity Metrics App</h2>

            <p>
              You cannot optimize what you cannot measure. Microsoft provides the <strong>Fabric Capacity Metrics App</strong> to monitor your CU consumption in real time.
            </p>

            <p>Key features:</p>
            <ul>
              <li><strong>CU consumption by workload type:</strong> see exactly which items are consuming the most</li>
              <li><strong>Throttling indicators:</strong> know when you are approaching limits</li>
              <li><strong>Historical trends:</strong> identify patterns and schedule workloads accordingly</li>
              <li><strong>Operation-level breakdown:</strong> drill into individual Notebook runs, Pipeline executions, etc.</li>
            </ul>

            <Callout type="tip">
              <strong>Pro tip:</strong> The operation "Dataflow Gen2 Refresh" was renamed to "Dataflow Gen2 Run Queries" in October 2025. If you are looking for Dataflow consumption data, search for the new name.
            </Callout>

            {/* ────────── Section 9: New Workloads ────────── */}
            <div className="blog-divider" />
            <h2>New Workloads Consuming CUs (Late 2025 to 2026)</h2>

            <p>
              Microsoft continues adding services to Fabric, each consuming from your CU pool:
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>New Workload</th>
                    <th>When Added</th>
                    <th>Classification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Fabric User Data Functions</strong></td><td>Nov 2025</td><td>Execution, portal test, static storage</td></tr>
                  <tr><td><strong>ML Model Endpoint</strong></td><td>Nov 2025</td><td>Real-time prediction serving</td></tr>
                  <tr><td><strong>Digital Twin Builder</strong></td><td>Nov 2025 (Preview)</td><td>Real-Time Intelligence</td></tr>
                  <tr><td><strong>Anomaly Detector</strong></td><td>Nov 2025</td><td>Real-Time Intelligence</td></tr>
                  <tr><td><strong>SQL Database in Fabric</strong></td><td>Nov 2025</td><td>1 CU = 0.383 SQL vCores (Interactive)</td></tr>
                  <tr><td><strong>Copilot</strong></td><td>Dec 2025 / Jan 2026</td><td>Billed via separate meter</td></tr>
                </tbody>
              </table>
            </div>

            <p>
              Each new service means more potential CU consumption. This makes capacity planning even more important.
            </p>

            {/* ────────── Section 10: Pricing Options ────────── */}
            <div className="blog-divider" />
            <h2>Pricing Options: PAYG vs Reserved</h2>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Option</th>
                    <th>How It Works</th>
                    <th>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Pay-As-You-Go</strong></td><td>Per-second billing, pause anytime</td><td>Dev/test, variable workloads</td></tr>
                  <tr><td><strong>1-Year Reserved</strong></td><td>~35-40% discount, committed</td><td>Steady production workloads</td></tr>
                  <tr><td><strong>3-Year Reserved</strong></td><td>~41% discount, committed</td><td>Long-term enterprise deployments</td></tr>
                  <tr><td className="text-primary font-semibold">Trial</td><td>Free F64 for 60 days</td><td>Evaluation and POC</td></tr>
                </tbody>
              </table>
            </div>

            <Callout type="info">
              <strong>Key decision factor:</strong> If you are running workloads at least 50-60% of the time, Reserved capacity pays for itself. If your usage is spiky and unpredictable, PAYG with pause/resume gives you flexibility. You can also combine both: a Reserved base capacity for steady workloads plus PAYG for burst periods.
            </Callout>

            {/* ────────── Section 11: Power BI Price Hike ────────── */}
            <div className="blog-divider" />
            <h2>Why the Power BI Price Hike Pushes Teams Toward Fabric</h2>

            <p>
              You might be wondering: why are we talking about Power BI licensing in a blog about Fabric capacity? Here is why this directly affects your capacity planning decisions.
            </p>

            <h3>The Scenario: A Growing Team Hits a Cost Wall</h3>

            <p>
              Imagine your organization has 150 employees who view Power BI reports daily. You have been paying for <strong>Power BI PPU (Premium Per User)</strong> licenses because PPU gives you features like paginated reports, deployment pipelines, and larger dataset sizes that Pro does not offer.
            </p>

            <p>
              In April 2025, Microsoft raised Power BI prices for the first time in a decade:
            </p>

            <div className="blog-result-card">
              <h4>Power BI License Price Changes (April 2025)</h4>
              <div className="blog-result-grid">
                <div className="blog-result-item">
                  <span className="blog-result-label">Pro License</span>
                  <span className="blog-result-value">$10 &rarr; $14/mo</span>
                  <span className="blog-result-badge" style={{ background: "hsl(0 72% 51%)" }}>+40%</span>
                </div>
                <div className="blog-result-item">
                  <span className="blog-result-label">PPU License</span>
                  <span className="blog-result-value">$20 &rarr; $24/mo</span>
                  <span className="blog-result-badge" style={{ background: "hsl(25 95% 53%)" }}>+20%</span>
                </div>
              </div>
            </div>

            <p>
              Your 150-user PPU bill just jumped from <strong>$3,000/month to $3,600/month</strong> overnight. That is $7,200 more per year for the exact same reports. Your finance team is not happy.
            </p>

            <h3>The Fabric Alternative: Pay Once, Get Everything</h3>

            <p>
              Here is where Fabric capacity changes the equation. When you buy a Fabric capacity (F32 or higher), Power BI Premium features are <strong>included at no extra per-user cost</strong>. Your 150 users can view reports without individual PPU licenses.
            </p>

            <ImageLightbox
              src={`${DIAGRAM}/06_powerbi_price_breakeven.png`}
              caption="The price hike shifts the breakeven point. Even 50-user teams can now justify Fabric capacity over PPU."
            />

            <p>
              An F32 capacity costs ~$4,192/month. That is only $592 more than your 150-user PPU bill of $3,600/month. But here is what you get on top: the <strong>entire Fabric platform</strong>, including Spark Notebooks, Data Pipelines, Dataflows, dbt Jobs, a Data Warehouse, Real-Time Intelligence, and OneLake storage. For $592/month more, you go from "just reporting" to a complete data platform.
            </p>

            <p>
              And as your team grows beyond 175 users? Fabric capacity becomes <strong>cheaper</strong> than PPU, and the gap only widens. At 200 users, PPU costs $4,800/month while F32 stays at $4,192, saving you $608/month while giving you a full data engineering stack.
            </p>

            <h3>But Wait: Pro and PPU Still Make Sense for Small Teams</h3>

            <p>
              Fabric capacity is not the answer for everyone. If you are a small or mid-size business (SMB) with 10 to 50 Power BI users, Pro and PPU licenses are still the smarter choice. Here is why:
            </p>

            <ul>
              <li><strong>Low barrier to entry:</strong> Power BI Pro at $14/user/month lets a 20-person team get full BI capabilities for just $280/month. The smallest Fabric capacity (F2) starts at $262/month but offers far less compute flexibility for reporting-only teams</li>
              <li><strong>Pay only for what you need:</strong> If your team only needs dashboards and reports (no Spark, no Pipelines, no Warehouse), per-user licensing avoids paying for capabilities you will never use</li>
              <li><strong>Still the cheapest BI platform:</strong> Even after the price hike, Power BI PPU at $24/user is 46% cheaper than Tableau Viewer ($35/user) and a fraction of Qlik Premium ($125/user). Microsoft has maintained its pricing advantage</li>
              <li><strong>Scalable growth path:</strong> Start with Pro, upgrade to PPU as your analytical needs grow, and move to Fabric capacity when your team size and data engineering needs justify the investment</li>
            </ul>

            <Callout type="info">
              <strong>The bottom line:</strong> The Power BI price hike is a forcing function that pushes <strong>larger organizations</strong> (100+ users) to evaluate Fabric capacity, where it often costs the same or less while giving you 10x the capabilities. For smaller teams, Pro and PPU remain the most cost-effective way to get world-class BI. The key is knowing where your organization sits on this spectrum, and this is exactly why understanding capacity planning matters.
            </Callout>

            {/* ────────── Section 12: Dynamic Scaling with Logic Apps ────────── */}
            <div className="blog-divider" />
            <h2>Cost Optimization: Dynamic Capacity Scaling with Azure Logic Apps</h2>

            <p>
              Here is something we do in real production environments almost every day. If you are on <strong>Pay-As-You-Go</strong>, you are billed per second. So why keep an F64 running 24/7 when your nightly ETL only needs it for 2 hours?
            </p>

            <p>
              The answer: <strong>Azure Logic Apps</strong>. You can dynamically scale your Fabric capacity up before a job runs, and scale it back down after the job completes. All automated, no manual intervention.
            </p>

            <h3>How It Works</h3>

            <p>
              Inside your Fabric Pipeline, you add two <strong>Web Activity</strong> steps that make HTTP calls to Azure Logic App endpoints:
            </p>

            <ol>
              <li><strong>Before the workload:</strong> A Web Activity calls your "Scale Up" Logic App. The Logic App uses the Azure Resource Manager REST API to PATCH your capacity SKU from F4 to F64. This takes about 60 seconds.</li>
              <li><strong>Your workload runs:</strong> dbt models, Notebooks, Dataflows, whatever you need, all at full F64 power.</li>
              <li><strong>After the workload:</strong> An on-success Web Activity calls your "Scale Down" Logic App. The capacity drops back to F4.</li>
            </ol>

            <ImageLightbox
              src={`${DIAGRAM}/07_logic_apps_scaling.png`}
              caption="Dynamic capacity scaling: Scale up before heavy jobs, scale down after. Pay only for what you use."
            />

            <h3>Real-Life Scenario</h3>

            <p>
              You have an F4 capacity ($524/month) for daytime Power BI viewing. Every night at 11 PM, your pipeline triggers, scales to F64, runs 8 dbt models, 3 Notebooks, and 2 Dataflow refreshes in about 2 hours, then scales back to F4.
            </p>

            <div className="blog-result-card">
              <h4>Cost Savings</h4>
              <div className="blog-result-grid">
                <div className="blog-result-item">
                  <span className="blog-result-label">Without Logic Apps</span>
                  <span className="blog-result-value">~$8,384/mo</span>
                  <span className="blog-result-badge" style={{ background: "hsl(0 72% 51%)" }}>F64 24/7</span>
                </div>
                <div className="blog-result-item">
                  <span className="blog-result-label">With Logic Apps</span>
                  <span className="blog-result-value">~$1,572/mo</span>
                  <span className="blog-result-badge" style={{ background: "hsl(142 71% 45%)" }}>81% saved</span>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3">
                F4 base: $524/mo + F64 upscale for 2 hrs/night x 30 days: ~$1,048/mo = $1,572 total vs $8,384 always-on.
              </p>
            </div>

            <Callout type="tip">
              <strong>Implementation tip:</strong> Always add an on-failure path in your Pipeline that also calls the "Scale Down" Logic App. If your ETL crashes, you do not want to leave F64 running until someone notices. The Logic App endpoint is just an HTTP URL, and the ARM API call takes about a minute to complete.
            </Callout>

            {/* ────────── Section 13: Key Takeaways ────────── */}
            <div className="blog-divider" />
            <h2>What This Means for You</h2>

            <p>Now that you understand how the capacity model works, here are the key takeaways:</p>

            <ol>
              <li><strong>Background operations are your friend.</strong> Classify workloads as Background whenever possible to get 24-hour smoothing.</li>
              <li><strong>Schedule strategically.</strong> Do not run heavy Notebook jobs during peak Power BI report rendering hours.</li>
              <li><strong>Monitor with the Metrics App.</strong> Install it, use it, and set up alerts for throttling stages.</li>
              <li><strong>Consider workload timing.</strong> A 2 AM Notebook run on an F4 is effectively "free" if your daytime usage is low, thanks to 24-hour smoothing.</li>
              <li><strong>Right-size your SKU.</strong> Start small (F4 or F8), monitor actual CU consumption, and scale up based on data.</li>
              <li><strong>Use the SKU Estimator.</strong> Microsoft provides a free web-based calculator (preview) at <a href="https://aka.ms/fabricskuestimator" target="_blank" rel="noopener noreferrer">aka.ms/fabricskuestimator</a>. Enter your data size, batch cycles, and tables, and it recommends the right SKU.</li>
              <li><strong>Automate capacity scaling.</strong> On PAYG, use Azure Logic Apps to scale up before heavy jobs and scale down after. You can save 70 to 80% compared to running a large SKU 24/7.</li>
            </ol>

            <Callout type="info">
              <strong>Coming in Part 2:</strong> We will take this foundation and apply it to a head-to-head comparison of every compute method in Fabric: Notebooks, dbt Jobs, Dataflow Gen2, Pipelines, and more. We will show you exactly which approach gives you the most bang for your CU buck, with real benchmarks and a decision framework.
            </Callout>

            <p className="text-sm text-muted-foreground italic mt-12">
              This is Part 1 of a 2-part series on Microsoft Fabric Cost Optimization. Part 2 covers the compute comparison showdown with benchmarks and decision frameworks.
            </p>

          </div>

          {/* ────────── Resource Links ────────── */}
          <div className="flex flex-wrap gap-3 mt-10 mb-4 max-w-3xl mx-auto">
            <a
              href="https://learn.microsoft.com/en-us/fabric/enterprise/licenses"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Fabric Licensing Docs
            </a>
            <a
              href="https://learn.microsoft.com/en-us/fabric/enterprise/throttling"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Throttling Guide
            </a>
            <a
              href="https://learn.microsoft.com/en-us/fabric/enterprise/metrics-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Capacity Metrics App
            </a>
            <a
              href="https://aka.ms/fabricskuestimator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> SKU Estimator
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
