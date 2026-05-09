import { ArrowLeft, Calendar, Clock, User, ExternalLink, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import { useViewCount } from "@/hooks/useViewCount";

const IMG = "/blog/custom-powerbi-ai-assistant-problems-and-solutions";

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

export default function PowerBIAIAssistantBlog() {
  const views = useViewCount("custom-powerbi-ai-assistant-problems-and-solutions");
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
              {["Power BI", "AI", "Power BI Copilot", "Fabric Data Agent", "Embedded Reports", "Architecture"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border border-border/60 text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight mb-5">
              The Problems and Solutions of a Custom Power BI AI Assistant
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Microsoft sells three different AI offerings that touch Power BI: Microsoft 365 Copilot, Power BI
              Copilot in Fabric, and Fabric Data Agent. We built our own anyway. Here is the honest story of why,
              what it cost us to ship, and how we got from a chatbot that invented random measures to one that
              answers correctly 92 percent of the time.
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-10 pb-10 border-b border-border/60">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" /> Sulaiman Ahmed
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> May 2026
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
                <li><strong>The pain</strong>: a Power BI report alone is not enough. Owners spend 5 to 8 minutes clicking through slicers to answer a few questions. They want to ask and get the answer in 5 seconds.</li>
                <li><strong>Our solution</strong>: a multi-modal AI chatbot built on OpenRouter, embedded next to the report. Owner asks, AI reads the dashboard or runs a live query against the model, answers in plain English.</li>
                <li><strong>Plus point #1, cost</strong>: our solution runs at <strong>about $0.0014 per call</strong> on top of one <strong>Power BI PPU license at $24/month</strong>. Microsoft's Copilot offerings start at <strong>$262/month for F2 capacity</strong>, $18 to $30 per user per month for M365 Copilot, plus capacity consumption per query for Fabric Data Agent. Total annual cost lands roughly 4 times cheaper than Microsoft's path.</li>
                <li><strong>Plus point #2, control</strong>: with Power BI Copilot you cannot curate the AI to your flavor. With Fabric Data Agent you can write 15,000 characters of instructions, but you cannot customize the nitty-gritty (recipe layer, hallucination guards, two-model routing, custom embedding index). Our custom path gives full access to every layer.</li>
                <li><strong>Plus point #3, the phone is the cockpit</strong>: because it is a web app, the assistant works on any phone browser with no install. The owner pulls out her phone at a customer site, asks "what was Mrs. Johnson's last order?", and gets the live answer in 4 seconds. Her phone becomes a portable checking system on her own data.</li>
                <li><strong>The journey to production</strong>: initially the AI invented measure names, returned random numbers, and ignored half the user's question. The fix was a <strong>vector-database recipe layer</strong> plus schema injection plus entity disambiguation. None of this is available in Microsoft's offerings.</li>
                <li><strong>The accuracy lift</strong>: <strong>49 percent to 92 percent in 5 days</strong> on a fixed 170-question test. Tedious but mechanical. Anyone with a fixed test and a week of focus can walk this path.</li>
                <li><strong>The honest limitation</strong>: we used "Publish to Web" to embed the report, which disables row-level security. We worked around it with one report per tenant. The proper RLS fix needs paid embed capacity. Still researching the most cost-effective option.</li>
              </ul>
            </div>

            {/* ========== SECTION 1: THE PAIN ========== */}
            <h2>The Real Pain: A Report Is Not Enough</h2>

            <p>
              Here is the scenario that started this whole project. Every morning, a franchise owner opens her
              Power BI dashboard. Twelve KPI cards across the top. Six bar charts in the middle. A matrix at the
              bottom. A dozen slicers running down the right side.
            </p>

            <p>
              She wants three answers. <em>What is our revenue this month? Who is the top designer? Why is the
              Sold KPI lower than last week?</em>
            </p>

            <p>
              Today, those three questions take her about <strong>5 to 8 minutes</strong> to answer. She clicks
              through a couple of slicer combinations. She drills into a matrix. She squints at a tooltip. She
              flips to a second page to compare. She finds an answer, second-guesses it, and verifies on a
              different visual.
            </p>

            <p>
              Multiply that by seven owners, five days a week, fifty weeks a year. That is roughly
              <strong> 290 hours of report-clicking</strong> across the franchise group, just to answer
              questions the model already knows. The Power BI report itself is fine. The problem is the human
              cost of navigating it.
            </p>

            <Callout type="info">
              <strong>The owners do not want a better dashboard.</strong> They want to ask the question and get
              the answer. In plain English. In 5 seconds. From the live model. With a screenshot of what they are
              looking at, if they have one. That is the product we set out to build.
            </Callout>

            <ImageLightbox
              src={`${IMG}/04-pain-vs-solution.png`}
              alt="Comparison: Power BI report alone takes 5 to 8 minutes to answer 3 questions. Report plus AI sidebar takes 4 seconds per question."
              caption="The before-and-after of adding an AI sidebar next to the embedded report. Same data. Same model. About 100x faster from question to answer."
            />

            {/* ========== SECTION 2: OUR SOLUTION ========== */}
            <div className="blog-divider" />

            <h2>Our Solution: A Custom Multi-Modal AI Chatbot</h2>

            <p>
              We built an AI sidebar that sits next to the embedded Power BI report inside our custom login portal.
              The owner types a question (or attaches a screenshot, or both). The AI reads the question, decides
              whether it needs to look at the dashboard image, runs a real DAX query against the live Power BI
              model when needed, and answers in plain English. End to end in 3 to 5 seconds for most questions.
            </p>

            <ImageLightbox
              variant="screenshot"
              src={`${IMG}/01-assistant-top-designers.png`}
              alt="The custom Power BI AI assistant answering 'who are my top 3 designers?' inside a multi-tenant portal"
              caption="The end product. Power BI report embedded on the left. AI sidebar on the right. The user asks 'who are my top 3 designers?' and gets a real ranked answer from the live model in 4 seconds."
            />

            <h3>The architecture in one paragraph</h3>

            <p>
              The AI lives behind a single API endpoint we built. The endpoint authenticates the user, figures out
              which franchise they belong to, optionally checks if the question matches a pre-written recipe (more
              on this later), and then passes the question to one of two AI models through
              <strong> OpenRouter</strong>: a vision model when there is a screenshot, a cheaper query-specialist
              model when there is not. The chosen model can call a tool that runs a DAX query against the
              franchise's Power BI dataset. The result streams back to the user's browser as the AI types the
              answer. Every call is logged to a database for cost and quality auditing.
            </p>

            <p>
              That is the whole stack. About 1,200 lines of TypeScript on the server. No fine-tuned model. No
              expensive infrastructure. Pay-per-token AI calls through OpenRouter. The kind of project a small
              engineering team can ship in two weeks.
            </p>

            {/* ========== SECTION 3: PLUS POINT #1 - COST ========== */}
            <div className="blog-divider" />

            <h2>Plus Point #1: It Is Dramatically Cheaper Than Microsoft's Offerings</h2>

            <p>
              Microsoft sells three different AI products that touch Power BI. Each one comes with a different
              cost model. Before you decide to build, you should know what you are choosing not to buy.
            </p>

            <h3>Option A: Microsoft 365 Copilot</h3>

            <p>
              The most general one. Sits inside Word, Excel, Outlook, Teams, and Power BI. Per-user subscription,
              billed monthly.
            </p>

            <ul>
              <li><strong>Copilot Business</strong> (small/mid business, up to 300 users): $18 per user per month, increasing to $21 in July 2026.</li>
              <li><strong>Copilot Enterprise</strong>: $30 per user per month, billed annually.</li>
              <li><strong>Copilot Pro</strong> (individual): $20 per user per month.</li>
              <li>A base Microsoft 365 license is required on top.</li>
            </ul>

            <h3>Option B: Power BI Copilot in Microsoft Fabric</h3>

            <p>
              The Power-BI-specific Copilot that lets you ask questions and generate visuals inside the Power BI
              service. It is included free with paid Fabric capacity, but it consumes that capacity per query.
            </p>

            <ul>
              <li><strong>Minimum capacity</strong>: Fabric F2, ~$262 per month (lowered from F64 in April 2025).</li>
              <li><strong>Per-query cost</strong>: input tokens consume 100 CU-seconds per 1,000 tokens, output tokens consume 400 CU-seconds per 1,000 tokens.</li>
              <li><strong>For a typical query</strong> (~2,000 input + 500 output tokens), the cost is about 6.67 CU-minutes of background work.</li>
              <li><strong>P-SKUs are being retired.</strong> No new P-SKU purchases. Renewals only. F-SKUs are the path forward.</li>
            </ul>

            <h3>Option C: Fabric Data Agent</h3>

            <p>
              The newest offering, designed to query data across OneLake, Lakehouses, Warehouses, semantic models,
              and KQL databases. Allows up to 15,000 characters of custom instructions per agent. Same Fabric
              capacity model as Power BI Copilot.
            </p>

            <ul>
              <li><strong>Same capacity-based billing</strong>: 100 CU-seconds per 1,000 input tokens, 400 CU-seconds per 1,000 output tokens.</li>
              <li><strong>Each query also runs a real SQL/DAX/KQL query</strong>, which is billed separately to the corresponding query engine.</li>
              <li><strong>Output capped at 25 rows by 25 columns.</strong></li>
              <li><strong>Text only.</strong> No charts, no visuals.</li>
              <li><strong>Read-only.</strong> Cannot mutate data.</li>
              <li><strong>Five data source maximum</strong> per agent.</li>
              <li><strong>Unstructured data not supported.</strong></li>
            </ul>

            <h3>Our custom path: pay-per-token, no capacity lock-in</h3>

            <ul>
              <li><strong>Hosting and database</strong>: depends on your stack. Most pilots run free or near-free on serverless platforms plus a free-tier auth/database service. The exact provider does not matter for the architecture.</li>
              <li><strong>AI calls</strong>: OpenRouter pay-per-token. About $0.0014 per call on the slow path, $0.00018 per call on the recipe fast path.</li>
              <li><strong>Power BI license</strong>: <strong>Power BI PPU (Premium Per User) at $24 per month per developer</strong> is the recommended path. PPU gives you the 100GB model size, XMLA endpoint access, more frequent refreshes, and reliable executeQueries throughput. Power BI Pro at $14 per month also technically works for executeQueries, but PPU is substantially better for any production AI workload that hits the model hard.</li>
              <li><strong>No Fabric capacity required</strong>: unlike Microsoft's Copilot offerings, you do not need an F2+ Fabric SKU. Just one PPU license for the dataset owner.</li>
            </ul>

            <Callout type="info">
              <strong>The PPU license is per-developer, not per-viewer.</strong> Because we embed via Publish to
              Web (or via the service-principal-driven query path), the franchise owners viewing the report do
              not each need a Power BI license. One PPU license at $24 per month covers the dataset hosting and
              the executeQueries access for the AI sidebar. That keeps the per-user economics dramatically
              cheaper than Microsoft's per-user Copilot or per-capacity Fabric path.
            </Callout>

            <h3>Side-by-side cost comparison at 1,000 calls per day</h3>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Solution</th>
                    <th>Fixed monthly cost</th>
                    <th>Per-call cost</th>
                    <th>Annual at 1,000 calls/day</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>M365 Copilot Enterprise</strong></td>
                    <td>$30/user/month</td>
                    <td>Unlimited within license</td>
                    <td>~$3,600 for 10 users (regardless of usage)</td>
                  </tr>
                  <tr>
                    <td><strong>Power BI Copilot (Fabric F2)</strong></td>
                    <td>$262/month base capacity</td>
                    <td>~6.67 CU-minutes per query</td>
                    <td className="text-yellow-500 font-semibold">~$3,144 + capacity overhead at high volume</td>
                  </tr>
                  <tr>
                    <td><strong>Fabric Data Agent (F2)</strong></td>
                    <td>$262/month base capacity</td>
                    <td>~6.67 CU-min + separate query engine cost</td>
                    <td>~$3,144 + query engine billing</td>
                  </tr>
                  <tr className="bg-primary/5">
                    <td><strong>Our custom AI chatbot</strong></td>
                    <td className="text-primary font-semibold">$24/mo (1 PPU license)</td>
                    <td className="text-primary font-semibold">$0.0014 (slow) to $0.00018 (recipe)</td>
                    <td className="text-primary font-semibold">~$800 total ($288 PPU + $510 AI)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              At pilot volume (50 calls per day), our solution costs about <strong>$313 a year</strong>
              ($288 for one PPU license + ~$25 in AI calls). At medium volume (1,000 calls per day), the total
              lands around <strong>$800 a year</strong>, roughly <strong>4 times cheaper</strong> than the
              Microsoft path. At high volume (5,000 calls per day), the gap widens further because Microsoft's
              capacity-based model forces you onto larger SKUs while OpenRouter's pay-per-token scales linearly
              and PPU stays flat.
            </p>

            <ImageLightbox
              src={`${IMG}/06-cost-comparison.png`}
              alt="Bar chart comparing annual cost at 1000 calls/day: M365 Copilot Enterprise $3,600, Power BI Copilot in Fabric F2 $3,144, Fabric Data Agent $3,144 plus, Custom AI Chatbot $800 ($288 PPU + $510 AI calls, about 4x cheaper)"
              caption="Side-by-side annual cost at 1,000 calls per day. The custom path totals about $800 a year ($24/month PPU license plus pay-per-token AI calls), roughly 4 times cheaper than the Microsoft alternatives. At pilot volume the gap is even larger, because Microsoft's path has a $262/month base cost before any usage."
            />

            <Callout type="tip">
              <strong>The cheap-and-easy-to-start factor matters more than the absolute savings.</strong> You can
              ship a working pilot of the custom path in two days for one PPU license at $24 and a few dollars of
              AI calls. If it does not work for you, you cancel the PPU and delete the repo. With Microsoft's
              path, the F2 capacity is a $262/month commitment before you write a single line of code. The
              custom path lets you fail cheap.
            </Callout>

            {/* ========== SECTION 4: PLUS POINT #2 - CONTROL ========== */}
            <div className="blog-divider" />

            <h2>Plus Point #2: You Have Total Control Over Every Layer</h2>

            <p>
              Cost is the obvious advantage. The real advantage, the one that compounds over time, is
              <strong> control</strong>. Specifically, control over how the AI behaves on your specific business
              questions.
            </p>

            <h3>Power BI Copilot: limited customization</h3>

            <p>
              You get what Microsoft gives you. The system prompt is theirs. The model is theirs. The behavior is
              their default. If your team uses the word "junk leads" to mean one specific status filter, but the
              Copilot interprets it as "Junk OR Duplicate", you cannot fix that. You file a feedback ticket and
              hope.
            </p>

            <h3>Fabric Data Agent: meaningful but capped customization</h3>

            <p>
              This is Microsoft's answer to the customization gap. Fabric Data Agent lets you write up to
              <strong> 15,000 characters of plain-English instructions</strong> per agent. You can tell it which
              measures to prefer for which questions, how to format answers, how to handle edge cases. This is a
              real upgrade.
            </p>

            <p>
              But the customization stops at the prompt level. The deeper machinery is opaque. You cannot:
            </p>

            <ul>
              <li><strong>Build a recipe layer.</strong> Pre-write the exact DAX for your top 30 questions and bypass the AI entirely on matched questions. The Data Agent will always go through its own AI loop.</li>
              <li><strong>Index your own questions in a vector database.</strong> When a user asks a paraphrased version of a known question, the Data Agent does not check your custom embedding index first. You cannot give it one.</li>
              <li><strong>Add a hallucination guard.</strong> If the AI returns specific dollar amounts without running a query, the Data Agent does not give you a hook to catch and re-prompt.</li>
              <li><strong>Use two different models for different rounds.</strong> Vision-tuned model for screenshots, cheap query specialist for DAX. Single model only.</li>
              <li><strong>Inject your real-time entity context.</strong> A monthly export of your designer roster, lead sources, current pricing tiers. The Data Agent works against the schema only.</li>
              <li><strong>Stream tokens with custom intermediate markers</strong> like "[Looking up live data...]" so the user sees what the AI is doing.</li>
              <li><strong>Cap the output any way other than 25 rows by 25 columns.</strong> If the user asks "list 30 sold projects", the Data Agent truncates.</li>
            </ul>

            <p>
              All of those nitty-gritty controls are why our custom assistant gets to <strong>92 percent
              accuracy</strong> on a fixed test, while Fabric Data Agent in the same scenario sits closer to its
              uncustomized baseline. The customization-to-accuracy gain is steep and only the custom path lets
              you climb it.
            </p>

            <Callout type="info">
              <strong>This is the engineer's argument.</strong> If you love working with these tools, if you
              want to control every layer, if you want to ship the best possible assistant for your specific
              data, the custom path is dramatically more powerful. If you just want "a Copilot, but on Power BI",
              buy the Microsoft offering. Both are valid. Pick based on how much you value control.
            </Callout>

            <ImageLightbox
              src={`${IMG}/05-three-ai-approaches.png`}
              alt="Three columns comparing Power BI Copilot, Fabric Data Agent, and Custom AI Chatbot across customization, recipe layer, embedding, hallucination guard, portal embedding, and capacity requirements"
              caption="The three routes side by side. Power BI Copilot is the off-the-shelf path. Fabric Data Agent gives you 15,000 characters of customization. The custom path gives you full access to every layer: recipes, two-model routing, hallucination guard, real-time entity context."
            />

            {/* ========== SECTION 4.5: PLUS POINT #3 - MOBILE ========== */}
            <div className="blog-divider" />

            <h2>Plus Point #3: The Phone Becomes Their Data Checking System</h2>

            <p>
              Owners are not always at their desks. They are at customer sites measuring closet space. They are
              at lunch with a contractor. They are driving between two showrooms. They are waiting for their kid
              at soccer practice. The single biggest underrated benefit of building this as a <strong>web
              app</strong> instead of a service-bound tool is that <strong>any phone with a browser becomes a
              portable checking system on their data</strong>.
            </p>

            <h3>The real scenario</h3>

            <p>
              Owner is at a customer's house. The customer asks "did I pay for the upgraded soft-close hardware
              last time?" The owner pulls out her phone. Opens the portal in Safari or Chrome. Types into the AI
              sidebar: <em>"what was Mrs. Johnson's last project total and did it include soft-close hinges?"</em>
              Four seconds later she has the answer. From the live model. With the actual line items. No "let me
              get back to you tomorrow".
            </p>

            <p>
              That single ability, answering a real customer question on the spot from real data, changes the
              owner-to-customer dynamic. The owner looks competent. The customer feels heard. The follow-up email
              is unnecessary because the answer happened in real time.
            </p>

            <h3>How each option handles mobile</h3>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Option</th>
                    <th>Mobile experience</th>
                    <th>What you actually get</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>M365 Copilot</strong></td>
                    <td>Native iOS and Android apps</td>
                    <td>Generic AI assistant, not tuned to your data, no recipes, no entity context</td>
                  </tr>
                  <tr>
                    <td><strong>Power BI Copilot in Fabric</strong></td>
                    <td>Power BI mobile app supports it</td>
                    <td>Works, but the Copilot pane is cramped on phone screens. Designed desktop-first.</td>
                  </tr>
                  <tr>
                    <td><strong>Fabric Data Agent</strong></td>
                    <td>Fabric portal, no dedicated mobile app</td>
                    <td>Desktop-first interface. Usable in pinch-and-zoom mode but not pleasant.</td>
                  </tr>
                  <tr className="bg-primary/5">
                    <td className="text-primary font-semibold"><strong>Custom AI Chatbot</strong></td>
                    <td className="text-primary font-semibold">Any phone browser, no install</td>
                    <td className="text-primary font-semibold">Fully responsive layout. Same chatbot UX as desktop. The screen capture button works on phone too.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Why this matters more than people think</h3>

            <p>
              Most BI tools assume a desk-bound user. A real franchise owner is mobile 60 to 70 percent of her
              workday. If she has to wait until she gets back to her laptop to check a number, she will either
              forget or get the answer wrong from memory. <strong>The 4-second mobile lookup is what turns "AI
              chatbot" from a curiosity into a habit.</strong>
            </p>

            <Callout type="tip">
              <strong>No app install. No sign-in flow on the phone separately.</strong> The same Supabase
              session that authenticates her on desktop authenticates her on mobile. She bookmarks the portal URL
              on her home screen and it opens like a native app. Adding mobile support to the custom path is
              literally zero extra engineering, because you already built it as a web app.
            </Callout>

            {/* ========== SECTION 5: THE PRODUCTION JOURNEY ========== */}
            <div className="blog-divider" />

            <h2>The Production Journey: From "Random Measures" to 92 Percent Accuracy</h2>

            <p>
              Now the honest part. <strong>We did not start at 92 percent.</strong> We started at 49 percent. The
              first version of the assistant, with no tuning, did everything wrong.
            </p>

            <h3>What the first version actually did</h3>

            <ul>
              <li>Asked for "total revenue", it wrote a DAX query against a column called <code>Revenue</code>. Our actual column is called <code>Amount</code>. Query errored.</li>
              <li>Asked for "Alyssa's projects", it filtered on <code>Designer = "Alyssa"</code>. Our actual roster has "Alyssa Jordan". Zero rows returned.</li>
              <li>Asked for revenue trends, it confidently returned "$2.1M, up 12 percent year over year" without running a single query. The real number was $17.9M. The AI just made up plausible numbers from its training data.</li>
              <li>Asked the same question twice, returned slightly different answers because it wrote slightly different DAX each time.</li>
              <li>Asked to list 5 projects, returned a one-line summary instead of the list.</li>
            </ul>

            <p>
              Owners caught the wrong numbers within the first week. Trust evaporated. The assistant was unusable.
              We had two choices: give up, or sit down and tune.
            </p>

            <h3>The four core fixes that took us from 49 to 92 percent</h3>

            <p>
              <strong>Fix 1. Hand-write the schema.</strong> We created a TypeScript file listing every table,
              every column, every measure the AI was allowed to use, with descriptions. We injected it into the
              AI's instructions on every call. The AI could no longer invent column names. First-try query success
              jumped from 65 percent to 96 percent.
            </p>

            <p>
              <strong>Fix 2. Build a vector-database recipe layer.</strong> This is the single most important
              insight of the whole project. We pre-wrote the exact DAX for our 30 most-asked questions ("revenue
              this year", "top designers", "lead conversion rate", etc). For each one, we wrote 4 to 6 example
              phrasings ("how much have we sold this year", "what is YTD revenue", "year-to-date sales").
            </p>

            <p>
              We embedded all those phrasings into a vector index (we used Upstash Vector with the BAAI bge-large
              embedding model). When a new question comes in, we do two things in sequence:
            </p>

            <ol>
              <li><strong>Try a regex pass first</strong> against the most obvious phrasings. Free, microseconds.</li>
              <li><strong>If no regex hit, embed the question and query the vector database.</strong> If the closest match scores above 0.90 cosine similarity, we are confident this is the same question.</li>
              <li><strong>On a hit, skip the AI entirely.</strong> Run the pre-written DAX directly. Pass the result to a small wrap-up AI call that just narrates it in plain English.</li>
            </ol>

            <p>
              The result: same question to same DAX to same number, every time. Forever. About 50 times cheaper
              per call. About 3 times faster.
            </p>

            <ImageLightbox
              src={`${IMG}/07-recipe-layer-flow.png`}
              alt="Four-stage flow: regex pass, embedding search via Upstash + BAAI bge-large with cosine threshold 0.90, run pre-written DAX, narrate result. On match the call is fast and deterministic; on miss it falls through to the two-model AI pipeline."
              caption="How a question flows through the recipe layer. Regex pass first (free, microseconds). On miss, embed the question and check a vector index. Above 0.90 similarity, run the pre-written query. The LLM only narrates the result."
            />

            <ImageLightbox
              variant="screenshot"
              src={`${IMG}/02-assistant-summarize.png`}
              alt="The AI assistant generating a summary of the embedded Power BI report"
              caption="The Summarize this view feature. The user clicks one button and the AI reads the dashboard image, runs the queries it needs, and produces a 4-bullet summary in plain English. Behind the scenes, this routes through the same recipe layer plus screenshot vision pipeline."
            />

            <p>
              <strong>Fix 3. Per-tenant entity disambiguation.</strong> We wrote a small monthly cron job that
              pulls the actual designer names, lead sources, and customer names from our source database into a
              generated TypeScript file. The active tenant's slice gets injected into the AI's instructions. Now
              "Alyssa" correctly resolves to "Alyssa Jordan" on the first try.
            </p>

            <p>
              <strong>Fix 4. A numerical hallucination guard.</strong> After every AI response, we check four
              things. Did the AI return specific numbers? Did it run zero queries? Was no screenshot attached?
              Did it finish normally? If all four are true, the answer is suspect. We show the user a "re-checking
              now" notice and force the AI to run an actual query before answering.
            </p>

            <h3>The trajectory</h3>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>What landed</th>
                    <th>Accuracy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Baseline before tuning</td><td>49.4%</td></tr>
                  <tr><td>1</td><td>Schema injection + reliability defenses</td><td>67.6%</td></tr>
                  <tr><td>2</td><td>First 10 vector-database recipes</td><td>78.8%</td></tr>
                  <tr><td>3</td><td>10 more recipes for clarification questions</td><td>85.3%</td></tr>
                  <tr><td>3</td><td>8 recipes for ranking questions</td><td>90.0%</td></tr>
                  <tr><td>4</td><td>9 more recipes + the year-filter hard rule</td><td>92.4%</td></tr>
                  <tr className="bg-primary/5"><td><strong>5</strong></td><td><strong>8 final recipes + scorer fixes</strong></td><td className="text-primary font-semibold"><strong>94.1% query, 91.8% answer</strong></td></tr>
                </tbody>
              </table>
            </div>

            <p>
              <strong>Five days. Eight focused work sessions. One steady upward line.</strong> If you set up the
              architecture right and sit down with a fixed test, this is the trajectory you can expect. It is not
              magic. It is mechanical. Cluster the failures, fix the highest-impact cluster, retest, ship.
            </p>

            <ImageLightbox
              src={`${IMG}/08-accuracy-trajectory.png`}
              alt="Line chart showing accuracy trajectory from 49.4% on day 1 baseline to 92.4% on day 5 final, with intermediate points for schema injection, recipes, scorers, year rule, and final scorer fixes."
              caption="The full trajectory: 49 percent baseline to 92 percent final, eight batches over five days. Each point is a measured rerun of the same 170-question test. The 90 percent target line shows when the assistant crosses into production-grade trust territory."
            />

            <Callout type="tip">
              <strong>None of these fixes are available in Microsoft's offerings.</strong> Power BI Copilot does
              not let you inject your schema. Fabric Data Agent does not let you build a vector recipe layer.
              Neither one gives you a hook for hallucination guards. This is the technical-engineer's argument
              for the custom path: every percentage point of accuracy beyond the Microsoft default has to come
              from machinery you can only build yourself.
            </Callout>

            {/* ========== SECTION 6: THE LIMITATION (RLS) ========== */}
            <div className="blog-divider" />

            <h2>The Honest Limitation: Publish to Web Disables Row-Level Security</h2>

            <p>
              Now the part where I am still not 100 percent satisfied with our stack. If you embed a Power BI
              report in a custom portal using <strong>Publish to Web</strong>, row-level security does not work.
              Anyone with the embed link sees the same data. RLS rules in your model are silently ignored.
            </p>

            <p>
              This is a Microsoft-documented limitation, not a bug. Publish to Web is designed for anonymous
              public sharing. Without a known viewer, RLS literally cannot apply.
            </p>

            <h3>Our workaround</h3>

            <p>
              We sidestepped the problem by using the URL as the tenant boundary. Each franchise has its own
              dataset. Each dataset has its own embed URL. The portal authenticates the user, looks up which
              franchise they belong to, and serves the correct embed URL. A user from Franchise A literally never
              receives the embed code for Franchise B.
            </p>

            <p>
              The AI sidebar then queries the correct dataset using a service principal (a non-human identity
              with API permission), filtered by the franchise the portal authenticated. Tenant isolation is real.
              It is just enforced at the dataset and URL level, not at the row level inside a shared dataset.
            </p>

            <h3>The proper fix needs paid embed capacity</h3>

            <p>
              The Microsoft-recommended pattern for multi-tenant embed with real RLS is <strong>App Owns Data</strong>
              with embed tokens. The app generates an embed token that includes the user's identity, Power BI
              applies RLS based on that identity, and the iframe renders the filtered view. This requires capacity:
            </p>

            <ul>
              <li><strong>Fabric F-SKU</strong> (F8 or higher recommended for embedded scenarios). End users do not need their own Power BI license. Modern path.</li>
              <li><strong>Power BI Premium P-SKU</strong>. Legacy. Being retired. Renewals only.</li>
              <li><strong>Premium-Per-User</strong>. Every viewer needs PPU. Cheap for small teams, expensive at scale.</li>
            </ul>

            <p>
              All three cost real money. We are still researching the most cost-effective configuration for our
              volume. If you have a recommendation for a low-cost RLS-supporting embed path, tell me. This is the
              one limitation in our stack that is not yet solved.
            </p>

            <Callout type="warning">
              <strong>For pilot scenarios, the URL-as-boundary workaround is honest and shippable.</strong> For
              regulated data or scenarios where one user touching another tenant's URL would be catastrophic, the
              paid embed path is the right answer. Decide based on the cost of a leak, not on engineering
              convenience. We made the right call for our pilot. Your scenario may be different.
            </Callout>

            {/* ========== SECTION 7: WHEN TO PICK WHAT ========== */}
            <div className="blog-divider" />

            <h2>When to Pick Each Option</h2>

            <p>
              You have four real choices. Here is when each one is the right answer.
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Pick this</th>
                    <th>When</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>M365 Copilot</strong></td>
                    <td>Your team already uses Word, Excel, and Outlook heavily. The Power BI integration is a bonus, not the main reason. You want one license for all AI features.</td>
                  </tr>
                  <tr>
                    <td><strong>Power BI Copilot in Fabric</strong></td>
                    <td>Your users live inside the Power BI service UI. You already have Fabric F2+ capacity. You are okay with answers that vary slightly between two identical questions.</td>
                  </tr>
                  <tr>
                    <td><strong>Fabric Data Agent</strong></td>
                    <td>You need Q&A across multiple Fabric data sources (Lakehouse + Warehouse + Power BI). Your customization needs fit within 15,000 characters of prompt. You can live with the 25 row by 25 column output cap.</td>
                  </tr>
                  <tr className="bg-primary/5">
                    <td className="text-primary font-semibold"><strong>Custom AI chatbot</strong></td>
                    <td className="text-primary font-semibold">You need it embedded in your own portal. You serve multiple tenants. You need deterministic answers. You want full control over every prompt, every recipe, every guard. You have 1 to 2 weeks of engineering capacity to build and tune.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout type="info">
              <strong>The middle path is real.</strong> You do not have to pick exactly one. A reasonable
              strategy: ship a custom assistant for the top 30 highest-frequency questions where consistency
              matters, and let Power BI Copilot handle the long tail in the Power BI service for ad-hoc
              exploration. Use each tool where it shines.
            </Callout>

            {/* ========== SECTION 8: WHAT YOU CAN TRY ========== */}
            <div className="blog-divider" />

            <h2>What You Can Try This Week</h2>

            <p>
              If you are reading this and thinking "okay but where do I start", here is the short list.
            </p>

            <ol>
              <li>
                <strong>Try Microsoft Copilot first if your org already has Fabric capacity.</strong> Open the
                Power BI service, point Copilot at your report, ask 10 of your team's most common questions. Note
                which it nailed, which it got close on, which it missed. If it nails 8 out of 10, stop reading.
                You do not need a custom assistant.
              </li>
              <li>
                <strong>Write down your top 30 questions.</strong> Pull them from Slack threads, support tickets,
                what your team asks at standup. For each, write out what the right answer would be and what
                query should produce it. This list is the spine of any custom assistant you might build later.
                It is also the input you need to evaluate Microsoft offerings honestly.
              </li>
              <li>
                <strong>Decide your embed model up front.</strong> Publish to Web (no RLS, simple, free) versus
                paid embed with App Owns Data. The cost of switching mid-project is high. If you are a
                multi-tenant scenario with sensitive data, do not pick Publish to Web without understanding the
                implications.
              </li>
              <li>
                <strong>Spike a 200-line prototype on OpenRouter.</strong> One endpoint. One AI call. Hit the
                Power BI executeQueries API with a hardcoded DAX query. See how the streaming UX feels. This
                takes one afternoon and you will learn more about whether you want to build this than reading
                any number of blog posts.
              </li>
            </ol>

            {/* ========== CLOSING ========== */}
            <div className="blog-divider" />

            <h2>What This Means For You</h2>

            <p>
              I started this project skeptical that custom AI assistants for Power BI were worth building. Most
              teams should buy Microsoft's offerings and move on. But for the narrow scenarios where Microsoft
              does not fit, the build path is more accessible and dramatically cheaper than I expected.
            </p>

            <ol>
              <li>
                <strong>The pain is the report consumption time, not the report itself.</strong> Your Power BI
                report is probably fine. The bottleneck is humans navigating it. An AI sidebar collapses 15
                minutes of clicking into 5 seconds of asking.
              </li>
              <li>
                <strong>Microsoft has three offerings, all capacity-locked or per-user-licensed.</strong> M365
                Copilot at $30 per user per month. Power BI Copilot needs F2+ Fabric ($262 per month base). Fabric
                Data Agent same capacity model plus query engine billing. Reasonable for some scenarios, expensive
                for others.
              </li>
              <li>
                <strong>The custom path runs at fractions of a cent per call.</strong> No Fabric capacity
                required, just one Power BI PPU license at $24 a month for the dataset owner. Pay-per-token AI
                calls on top. Total production cost lands around $50 to $80 a month at typical volume.
              </li>
              <li>
                <strong>"Fine-tuning" is not retraining a model.</strong> It is feeding the AI your context:
                schema, names, common questions. Three small files maintained over time. None of this is
                available with Power BI Copilot, and only the prompt-level slice is available with Fabric Data
                Agent.
              </li>
              <li>
                <strong>The vector-database recipe layer is the killer feature</strong>. Same question to same
                DAX to same number, every time. About 50 times cheaper per matched call. The real prize is
                consistency, not cost.
              </li>
              <li>
                <strong>"Publish to Web" disables RLS.</strong> Do not discover this in production. Decide your
                embed strategy before you build, not after.
              </li>
              <li>
                <strong>Sit down for a week and tune.</strong> Fixed test of 100+ questions. Cluster the
                failures. Fix the highest-impact cluster. Retest. The 49 to 92 percent path is mechanical.
                Anyone with focus and a reference test can walk it.
              </li>
            </ol>

            <Callout type="tip">
              <strong>The sweet fruit comes at the end of the tuning week, not at the start.</strong> If you
              demo your assistant on day three and it answers 6 out of 10 correctly, that is normal. Do not ship
              it yet. Sit down with the test, fix the failures in clusters, and keep going. The difference
              between a 50 percent assistant and a 92 percent assistant is one focused week. The difference in
              user trust between those two assistants is enormous.
            </Callout>

            <p>
              The franchise owner who started this whole project asked her question one morning, six weeks after
              we started. She got an answer in 4 seconds. With a real number from her live model. Formatted
              exactly the way she wanted. With no hallucinated names, no spurious year filter, no random output
              shape. The recipe layer caught her question on the first pass. Cost: a fraction of a cent. Latency:
              under 4 seconds. Determinism: total.
            </p>

            <ImageLightbox
              variant="screenshot"
              src={`${IMG}/03-assistant-summarize-final.png`}
              alt="The custom Power BI AI assistant in production, summarizing a Pipeline Report for a franchise owner"
              caption="The sweet fruit at the end of the journey. Six weeks of architecture and tuning. One assistant that answers in plain English from the live model, in the owner's own portal, with the owner's own measure rules."
            />

            <p>
              That is the goal. Everything in this blog is the path to that one outcome.
            </p>

          </div> {/* end blog-prose */}

          {/* Resource links */}
          <div className="flex flex-wrap gap-3 mt-10 mb-4 max-w-3xl mx-auto">
            <a
              href="https://www.microsoft.com/en-us/microsoft-365-copilot/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> M365 Copilot Pricing
            </a>
            <a
              href="https://learn.microsoft.com/en-us/fabric/fundamentals/copilot-fabric-consumption"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Fabric Copilot Consumption
            </a>
            <a
              href="https://learn.microsoft.com/en-us/fabric/data-science/concept-data-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Fabric Data Agent
            </a>
            <a
              href="https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-publish-to-web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Publish to Web (and its limits)
            </a>
            <a
              href="https://learn.microsoft.com/en-us/rest/api/power-bi/datasets/execute-queries"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Power BI executeQueries API
            </a>
            <a
              href="https://openrouter.ai/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ExternalLink className="h-4 w-4" /> OpenRouter Docs
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
