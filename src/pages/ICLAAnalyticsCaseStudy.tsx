import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Clock,
  BarChart3,
  Database,
  Layers,
  CheckCircle2,
  Code2,
  AlertTriangle,
  ArrowRight,
  Zap,
  Target,
  RefreshCw,
  Shield,
  ChevronRight,
  Bot,
  MessageSquare,
  Calendar,
  Users,
  Lock,
  Workflow,
  LineChart,
  Sparkles,
  Globe
} from "lucide-react";

const ICLAAnalyticsCaseStudy = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const keyResults = [
    { icon: Clock, value: "30 min", label: "Data Freshness", description: "Down from 1-2 days" },
    { icon: Zap, value: "Instant", label: "Report Generation", description: "Was 2-4 hours manual" },
    { icon: Shield, value: "99%+", label: "Data Accuracy", description: "Up from ~85% validated" },
  ];

  const challenges = [
    {
      icon: Lock,
      title: "Locked CRM System",
      description: "No API access, manual exports only. The franchise system offered no programmatic way to extract data."
    },
    {
      icon: Clock,
      title: "30-Minute Refresh Requirement",
      description: "Business owner needed near real-time visibility into operations, but was forced to use 1-2 day old data."
    },
    {
      icon: Database,
      title: "Fragmented Solutions",
      description: "Multiple engineers had built disconnected pieces over time, but nothing worked together cohesively."
    },
    {
      icon: LineChart,
      title: "No Historical Tracking",
      description: "Impossible to analyze customer journeys or understand how leads progressed through the sales funnel."
    }
  ];

  const solutionFeatures = [
    "Selenium-based automation bypassing CRM export limitations every 30 minutes",
    "Medallion Architecture (Bronze → Silver → Gold) for enterprise-grade data management",
    "Incremental loading to process only new/changed records efficiently",
    "MySQL stored procedures for consistent, auditable transformations",
    "Power BI Gateway integration for secure on-premises database connection",
    "AI-powered natural language queries via custom MCP servers"
  ];

  const beforeAfter = [
    {
      area: "Data Freshness",
      before: "1-2 days old",
      after: "30 minutes"
    },
    {
      area: "Report Generation",
      before: "2-4 hours of manual work",
      after: "Instant, automated"
    },
    {
      area: "Historical Analysis",
      before: "Non-existent",
      after: "Complete customer journey tracking"
    },
    {
      area: "Decision Making",
      before: "Gut feeling",
      after: "Data-driven insights"
    },
    {
      area: "AI Integration",
      before: "None",
      after: "Natural language business queries"
    }
  ];

  const techStack = [
    { name: "Python", role: "Automation & ETL" },
    { name: "Selenium", role: "Browser Automation" },
    { name: "MySQL", role: "Data Warehouse" },
    { name: "Power BI", role: "Visualization" },
    { name: "Claude AI", role: "Natural Language" },
    { name: "MCP", role: "AI Integration" },
  ];

  const dashboardReports = [
    { name: "Pipeline Report", description: "Revenue trends, stage breakdown, project details" },
    { name: "Lead Source Report", description: "Marketing channel ROI and attribution analysis" },
    { name: "Opportunities Report", description: "Funnel health, geographic distribution, trends" },
    { name: "Journey Analytics", description: "Full customer journey reconstruction" },
    { name: "Sales Breakdown", description: "Individual project and lead drill-through" },
  ];

  const mcpServers = [
    {
      name: "Airtable MCP",
      description: "Query operational data, update records, access lead information in real-time",
      examples: ["What leads came in today?", "Who has appointments tomorrow?"]
    },
    {
      name: "Slack MCP",
      description: "Deliver insights to familiar channels, automated morning briefs",
      examples: ["Morning business summary", "Real-time alerts on events"]
    },
    {
      name: "Power BI MCP",
      description: "Execute analytical queries, access calculated metrics directly",
      examples: ["What's our conversion rate vs last month?", "Compare ad performance"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="outline" className="text-xs">Case Study</Badge>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Badge variant="outline" className="text-xs">Data & Analytics</Badge>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                From <span className="text-orange-500">Chaos</span> to <span className="text-primary">AI-Powered Clarity</span>: Building an Enterprise Analytics System
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl">
                How a franchise business went from fragmented, manually-exported data trapped in a locked CRM
                to a fully automated, near real-time analytics platform with AI-powered natural language insights.
              </p>

              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <Badge key={index} className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1">
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-8 bg-background border-y">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden shadow-xl">
                <CardContent className="p-0">
                  <img
                    src="/icla-analytics-hero.png"
                    alt="From Data Chaos to AI-Powered Clarity - Architecture Overview"
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Results - Value Pillars */}
        <section className="py-12 bg-background border-b">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {keyResults.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <result.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{result.value}</div>
                    <div className="font-semibold mb-1">{result.label}</div>
                    <div className="text-sm text-muted-foreground">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">The Challenge</h2>
              </div>

              <div className="mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A growing franchise business was drowning in scattered data solutions. Their CRM system only
                  allowed manual exports, yet the owner needed visibility into business performance every 30 minutes.
                  The business manages lead generation, sales pipeline with designer consultations, and complex
                  customer journeys from inquiry through installation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {challenges.map((challenge, index) => (
                  <Card key={index} className="border-orange-500/20 bg-background">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                          <challenge.icon className="h-5 w-5 text-orange-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{challenge.title}</h3>
                          <p className="text-sm text-muted-foreground">{challenge.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Business Requirements */}
              <div className="mt-10">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-orange-500" />
                  Critical Business Questions
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "How is my pipeline performing right now?",
                    "Which marketing channels actually drive revenue?",
                    "How do leads progress through our sales funnel?",
                    "Which designers are performing best?",
                    "What happened to that lead from last week?"
                  ].map((question, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background border">
                      <MessageSquare className="h-4 w-4 text-orange-500 flex-shrink-0" />
                      <span className="text-sm italic text-muted-foreground">"{question}"</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-green-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">The Solution</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-10">
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Rather than jumping into code, I started with strategy. The goal wasn't just to "get the data out"—it
                    was to build a <strong className="text-foreground">sustainable foundation for data-driven decision making</strong>.
                  </p>

                  <div className="space-y-3">
                    {solutionFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Visual */}
                <div className="space-y-4">
                  <Card className="border-blue-500/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                          <Workflow className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Automated Extraction</CardTitle>
                          <p className="text-sm text-muted-foreground">Selenium + Python</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Headless browser automation bypassing locked CRM every 30 minutes</p>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center">
                    <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                  </div>

                  <Card className="border-amber-600/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-slate-400 to-yellow-500" />
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-600 to-yellow-500 flex items-center justify-center">
                          <Layers className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Medallion Architecture</CardTitle>
                          <p className="text-sm text-muted-foreground">Bronze → Silver → Gold</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Enterprise data pattern in MySQL with incremental loading & stored procedures</p>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center">
                    <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                  </div>

                  <Card className="border-purple-500/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500" />
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                          <Bot className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">AI Integration Layer</CardTitle>
                          <p className="text-sm text-muted-foreground">MCP Servers + Claude</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Natural language queries via Airtable, Slack, and Power BI MCP servers</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">The Transformation</h2>
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="text-left p-4 font-semibold">Area</th>
                          <th className="text-left p-4 font-semibold text-orange-500">Before</th>
                          <th className="text-left p-4 font-semibold text-green-500">After</th>
                        </tr>
                      </thead>
                      <tbody>
                        {beforeAfter.map((row, index) => (
                          <tr key={index} className="border-b last:border-0">
                            <td className="p-4 font-medium">{row.area}</td>
                            <td className="p-4 text-sm text-muted-foreground">{row.before}</td>
                            <td className="p-4 text-sm">{row.after}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Intelligence Layer */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Business Intelligence Layer</h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A comprehensive Power BI report suite designed to answer the owner's critical business questions,
                following a star schema optimized for analytical queries.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {dashboardReports.map((report, index) => (
                  <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-sm font-bold text-primary">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1">{report.name}</h3>
                          <p className="text-xs text-muted-foreground">{report.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Data Model */}
              <Card className="bg-muted/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    Star Schema Data Model
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-sm mb-3 text-primary">Fact Tables</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2"><Database className="h-3 w-3" /> Leads (with source attribution)</li>
                        <li className="flex items-center gap-2"><Database className="h-3 w-3" /> Opportunities (pipeline data)</li>
                        <li className="flex items-center gap-2"><Database className="h-3 w-3" /> Appointments (scheduled consultations)</li>
                        <li className="flex items-center gap-2"><Database className="h-3 w-3" /> Lead Journey (status history)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-3 text-primary">Dimension Tables</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2"><Calendar className="h-3 w-3" /> Date (with full hierarchy)</li>
                        <li className="flex items-center gap-2"><Users className="h-3 w-3" /> Designers</li>
                        <li className="flex items-center gap-2"><Globe className="h-3 w-3" /> Lead Sources</li>
                        <li className="flex items-center gap-2"><Layers className="h-3 w-3" /> Lead Source Groups</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Integration */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-purple-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">AI-Powered Insights</h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Dashboards are powerful, but sometimes you just want to ask a question and get an answer.
                The Model Context Protocol (MCP) enables Claude AI to directly interact with business systems.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {mcpServers.map((server, index) => (
                  <Card key={index} className="border-purple-500/20 hover:border-purple-500/40 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-purple-500" />
                        {server.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{server.description}</p>
                      <div className="space-y-2">
                        {server.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs p-2 rounded bg-purple-500/10">
                            <MessageSquare className="h-3 w-3 text-purple-500 flex-shrink-0" />
                            <span className="italic">"{example}"</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Morning Brief Example */}
              <Card className="border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-purple-500/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-purple-500" />
                    Example: Automated Morning Business Brief
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 rounded-lg bg-slate-900 text-slate-100 font-mono text-sm">
                    <div className="text-purple-400 mb-3">Morning Business Brief</div>
                    <div className="space-y-3 text-slate-300">
                      <div>
                        <div className="text-slate-400 text-xs mb-1">PIPELINE STATUS</div>
                        <div className="pl-2">• Active proposals and total value</div>
                        <div className="pl-2">• Yesterday's closed deals</div>
                        <div className="pl-2">• Hot leads requiring attention</div>
                      </div>
                      <div>
                        <div className="text-slate-400 text-xs mb-1">TOP PERFORMERS (This Month)</div>
                        <div className="pl-2">• Designer rankings by revenue</div>
                      </div>
                      <div>
                        <div className="text-slate-400 text-xs mb-1">ATTENTION NEEDED</div>
                        <div className="pl-2">• Aging proposals</div>
                        <div className="pl-2">• Leads without follow-up</div>
                        <div className="pl-2">• High-value opportunities</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    No dashboard to open. No reports to run. Just the information needed to start the day.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-blue-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Technical Implementation</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Automation Pipeline */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Workflow className="h-5 w-5 text-blue-500" />
                      Browser Automation Pipeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 rounded-lg bg-slate-900 text-slate-100 font-mono text-xs">
                      <div className="text-slate-400"># Every 30 minutes via scheduled task</div>
                      <div className="text-blue-400">1. Launch headless browser</div>
                      <div className="text-blue-400">2. Authenticate to CRM</div>
                      <div className="text-blue-400">3. Navigate to export UI</div>
                      <div className="text-blue-400">4. Trigger data exports</div>
                      <div className="text-blue-400">5. Handle downloads</div>
                      <div className="text-green-400">6. Sync to SharePoint</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <strong>Data captured:</strong> Leads, Opportunities, Appointments, Projects, Status History
                    </div>
                  </CardContent>
                </Card>

                {/* Medallion Architecture */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Layers className="h-5 w-5 text-amber-500" />
                      Medallion Layers
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3 p-2 rounded bg-amber-600/10">
                      <Badge className="bg-amber-600 text-white">Bronze</Badge>
                      <span className="text-sm">Raw data as-is, full history, source of truth</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded bg-slate-400/10">
                      <Badge className="bg-slate-400 text-white">Silver</Badge>
                      <span className="text-sm">Standardized types, business rules, validated</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded bg-yellow-500/10">
                      <Badge className="bg-yellow-500 text-white">Gold</Badge>
                      <span className="text-sm">Pre-computed metrics, BI-ready aggregations</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Reliability Features */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-500" />
                      Reliability & Error Handling
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        Retry logic with exponential backoff
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        Screenshot capture on failures for debugging
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        Slack alerts when issues require attention
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        Comprehensive logging for troubleshooting
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Power BI Integration */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      Power BI Gateway Integration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Secure on-premises connection to MySQL
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Dataflows Gen 1 for clean transformations
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        60%+ reduction in refresh times
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Power Automate orchestration
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Business Impact</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <Card className="border-green-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Marketing Attribution Clarity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="text-orange-500 text-sm font-medium">Before:</div>
                      <p className="text-sm text-muted-foreground italic">"We think referrals work well" (gut feeling)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-green-500 text-sm font-medium">After:</div>
                      <p className="text-sm">Complete visibility into which channels drive revenue, with conversion rates, average values, and cycle times</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Lead Response Optimization</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="text-orange-500 text-sm font-medium">Before:</div>
                      <p className="text-sm text-muted-foreground italic">Leads sometimes waited days for follow-up</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-green-500 text-sm font-medium">After:</div>
                      <p className="text-sm">SLA monitoring with automatic alerts for leads without response</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Designer Performance Management</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="text-orange-500 text-sm font-medium">Before:</div>
                      <p className="text-sm text-muted-foreground italic">End-of-month reviews based on memory</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-green-500 text-sm font-medium">After:</div>
                      <p className="text-sm">Real-time dashboards identifying top performers and coaching opportunities</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Pipeline Forecasting</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="text-orange-500 text-sm font-medium">Before:</div>
                      <p className="text-sm text-muted-foreground italic">"We're busy" or "We're slow"</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-green-500 text-sm font-medium">After:</div>
                      <p className="text-sm">Accurate revenue forecasting for resource planning and inventory</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Client Testimonial */}
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl text-primary/30">"</div>
                    <blockquote className="text-lg italic text-muted-foreground">
                      I went from spending hours in spreadsheets to getting a morning brief on Slack that tells me
                      exactly what's happening in my business. When I have a question, I just ask and get an answer
                      in seconds. This has changed how I run my company.
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 bg-background border-t">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Technology Stack</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: "Python", role: "ETL & Automation" },
                  { name: "Selenium", role: "Browser Automation" },
                  { name: "MySQL", role: "Data Warehouse" },
                  { name: "SharePoint", role: "Cloud Storage" },
                  { name: "Power BI", role: "Analytics & Dashboards" },
                  { name: "Power Automate", role: "Orchestration" },
                  { name: "Airtable", role: "Operational Data" },
                  { name: "Claude AI", role: "Natural Language" },
                  { name: "MCP Servers", role: "AI Integration" },
                  { name: "Slack", role: "Communication" },
                ].map((tech, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/30 text-center">
                    <div className="font-semibold text-sm">{tech.name}</div>
                    <div className="text-xs text-muted-foreground">{tech.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Key Takeaways</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Lock className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Work Within Constraints</h3>
                    <p className="text-xs text-muted-foreground">
                      The locked CRM became an opportunity to build something more robust than many API integrations
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Layers className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Architecture Matters</h3>
                    <p className="text-xs text-muted-foreground">
                      Medallion Architecture separated concerns clearly and made enhancements easy
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Meet Users Where They Are</h3>
                    <p className="text-xs text-muted-foreground">
                      Morning briefs via Slack dramatically increased engagement over dashboards alone
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <RefreshCw className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Build for Evolution</h3>
                    <p className="text-xs text-muted-foreground">
                      Architecture designed to grow: new sources, reports, AI capabilities, multi-location
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-purple-500/10 border-t">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Transform Your Data Operations</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                From locked systems to AI-powered insights, I specialize in building creative solutions
                that deliver enterprise-grade results on small business budgets.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge className="text-sm px-4 py-2">Data Pipeline Automation</Badge>
                <Badge className="text-sm px-4 py-2">Medallion Architecture</Badge>
                <Badge className="text-sm px-4 py-2">Power BI Dashboards</Badge>
                <Badge className="text-sm px-4 py-2">AI Integration</Badge>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted/30 border-t py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Sulaiman Ahmed. Transforming Data into Strategic Insights.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ICLAAnalyticsCaseStudy;
