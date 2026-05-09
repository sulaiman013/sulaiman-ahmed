import { Link } from "react-router-dom";
import {
  ArrowRight,
  Database,
  Globe,
  Shield,
  Wrench,
  Server,
  DollarSign,
  Layers,
  Table,
  MessageSquare,
  Cloud,
  Sparkles,
  Clock,
  Zap,
  Settings,
  Target,
  GitBranch,
  Brain,
  Users,
  Bot,
  Lock,
  BarChart3,
  Github,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Metric {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  tags: string[];
  metrics: Metric[];
  link?: string;
  github?: string;
  youtube?: string;
}

// ── Main Case Studies (client work + significant projects) ──
const caseStudies: CaseStudy[] = [
  {
    id: "quickbooks-medallion",
    title: "Cut Financial Reporting Time by 10+ Hours/Week",
    subtitle: "QuickBooks to Power BI Pipeline",
    description:
      "Achieved 99.999% P&L accuracy and 100% Balance Sheet verification by building an automated 3-tier Medallion Architecture that replaced manual QuickBooks exports and Excel reconciliation.",
    icon: GitBranch,
    color: "green",
    tags: ["Power BI", "Python", "QuickBooks API", "DAX"],
    metrics: [
      { icon: Clock, value: "10+ hrs", label: "Saved Weekly" },
      { icon: Target, value: "99.999%", label: "P&L Accuracy" },
      { icon: Shield, value: "100%", label: "BS Verified" },
    ],
    link: "/case-study/quickbooks-medallion",
  },
  {
    id: "banking-churn",
    title: "Enabled $5-6M Annual Savings via Churn Prediction",
    subtitle: "End-to-End ML Platform on Databricks",
    description:
      "Identified high-risk customers before they left by unifying 4 siloed data systems into a single customer view and engineering 30+ ML features for proactive retention targeting.",
    icon: Brain,
    color: "orange",
    tags: ["Databricks", "dbt", "Python", "scikit-learn", "Unity Catalog"],
    metrics: [
      { icon: DollarSign, value: "$5-6M", label: "Annual Impact" },
      { icon: Users, value: "4 to 1", label: "Systems Unified" },
      { icon: Brain, value: "30+", label: "ML Features" },
    ],
    link: "/case-study/banking-churn",
    github: "https://github.com/sulaiman013/banking-churn-databricks",
  },
  {
    id: "lumina-lux",
    title: "Unified $166.7M+ Across 3 Global Subsidiaries",
    subtitle: "Multi-Entity Financial Consolidation",
    description:
      "Eliminated month-end consolidation delays by building a real-time reporting platform that processes 120,846 transactions and enables drill-down from consolidated view to entity-level details.",
    icon: BarChart3,
    color: "blue",
    tags: ["Power BI", "MySQL", "Python", "DAX"],
    metrics: [
      { icon: DollarSign, value: "$166.7M+", label: "Consolidated" },
      { icon: Globe, value: "3", label: "Subsidiaries" },
      { icon: Database, value: "120,846", label: "Transactions" },
    ],
    link: "/case-study/lumina-lux",
  },
  {
    id: "icla-analytics",
    title: "Cut Data Latency from Days to 30 Minutes",
    subtitle: "Automated Extraction from Locked CRM",
    description:
      "Freed business-critical data trapped in a CRM with no API access by building an automated extraction pipeline, then added AI-powered natural language insights for instant business answers.",
    icon: Lock,
    color: "orange",
    tags: ["Python", "Selenium", "MySQL", "Power BI", "MCP", "Claude AI"],
    metrics: [
      { icon: Clock, value: "30 min", label: "Data Freshness" },
      { icon: Zap, value: "Instant", label: "AI Insights" },
      { icon: MessageSquare, value: "NL", label: "Queries" },
    ],
    link: "/case-study/icla-analytics",
  },
  {
    id: "remax-login-portal",
    title: "Saved $1,000+/Year in Licensing Costs",
    subtitle: "Custom Login Portal: RE/MAX Properties",
    description:
      "Secure authentication system for Power BI reports with 4 user profiles and tailored data access for 50+ external agents without additional Pro licenses.",
    icon: Shield,
    color: "amber",
    tags: ["Power BI", "Power Apps", "Azure Functions", "Row-Level Security"],
    metrics: [
      { icon: DollarSign, value: "$1K+", label: "Saved/Year" },
      { icon: Users, value: "50+", label: "Users" },
      { icon: Shield, value: "Zero", label: "Incidents" },
    ],
    link: "/case-study/remax-login-portal",
  },
  {
    id: "mitron-bank",
    title: "Data-Driven Credit Card Strategy for 4,000 Customers",
    subtitle: "Mitron Bank: Credit Card Recommendations",
    description:
      "Mitron Bank, a legacy financial institution in Hyderabad, needed to launch a new credit card line. Analyzed 4,000 customers across 5 cities to classify demographics, identify top spending categories, and recommend card features that maximize adoption. Delivered a pilot analysis that secured the full project engagement.",
    icon: BarChart3,
    color: "orange",
    tags: ["Power BI", "Python", "Excel", "Customer Segmentation", "Data Analysis"],
    metrics: [
      { icon: Users, value: "4,000", label: "Customers" },
      { icon: Globe, value: "5", label: "Cities" },
      { icon: Target, value: "Pilot", label: "Won Full Project" },
    ],
    link: "/case-study/mitron-bank",
    github: "https://github.com/sulaiman013/My-Personal-Projects/tree/master/Mitron%20Bank%20Credit%20Card",
    youtube: "https://www.youtube.com/watch?v=9NFXrUQP0bc",
  },
  {
    id: "business-insights-360",
    title: "Unified 5-Department Analytics for Executive Decisions",
    subtitle: "Business Insights 360",
    description:
      "Built a comprehensive Power BI analytics suite covering finance, sales, marketing, supply chain, and executive performance. Advanced data modeling with star schema, KPI tracking, and interactive drill-downs enabled leadership to make data-driven decisions across the entire organization.",
    icon: Layers,
    color: "blue",
    tags: ["Power BI", "Data Modeling", "DAX", "KPIs", "Star Schema"],
    metrics: [
      { icon: Layers, value: "5", label: "Departments" },
      { icon: BarChart3, value: "Full", label: "KPI Suite" },
      { icon: Database, value: "Star", label: "Schema" },
    ],
    link: "/case-study/business-insights-360",
    github: "https://github.com/sulaiman013/My-Personal-Projects/tree/master/Business%20Insights%20360",
    youtube: "https://www.youtube.com/watch?v=yT6oPMW3orU",
  },
  {
    id: "pbi-reporting-portfolio",
    title: "3 Domain-Specific Power BI Reporting Solutions",
    subtitle: "Finance, Healthcare & Retail Analytics",
    description:
      "Delivered three production Power BI solutions across different industries: (1) comprehensive financial statements with P&L, Balance Sheet, Cash Flow, and Aged Trial Balance; (2) NY state hospital cost and efficiency analytics for elective surgeries; (3) customer retention cohort analysis with monthly and weekly trends. End-to-end data modeling and interactive dashboard design for each domain.",
    icon: BarChart3,
    color: "green",
    tags: ["Power BI", "DAX", "Data Modeling", "Financial Analysis", "Healthcare", "Retail"],
    metrics: [
      { icon: Layers, value: "3", label: "Industries" },
      { icon: BarChart3, value: "3", label: "Live Reports" },
      { icon: Database, value: "Full", label: "Data Modeling" },
    ],
    link: "/case-study/pbi-reporting-portfolio",
    github: "https://github.com/sulaiman013/My-Personal-Projects",
  },
];

// ── Pet Projects (AI exploration & open source tools) ──
const petProjects: CaseStudy[] = [
  {
    id: "powerbi-expert-webapp",
    title: "Reduced BI Query Time by 70-80%",
    subtitle: "Open Source AI Assistant for Power BI",
    description:
      "Enabled non-technical users to query Power BI data in plain English by building an open-source AI assistant, eliminating per-user Copilot licensing costs while maintaining 100% data security.",
    icon: Bot,
    color: "blue",
    tags: ["Python", "Flask", "Azure AI Foundry", "Ollama", "XMLA", "DAX"],
    metrics: [
      { icon: Clock, value: "70-80%", label: "Faster Queries" },
      { icon: DollarSign, value: "$0", label: "Per-User Cost" },
      { icon: Shield, value: "100%", label: "Data Secure" },
    ],
    link: "/case-study/powerbi-expert-webapp",
    github: "https://github.com/sulaiman013/powerbi-expert-app",
    youtube: "https://youtu.be/5gNa9BUJ4r8",
  },
  {
    id: "powerbi-mcp",
    title: "Built 34 AI Tools for Power BI Integration",
    subtitle: "Model Context Protocol Server",
    description:
      "Enabled Claude to execute DAX queries and explore Power BI models via natural language by building an open-source MCP server with 3 connection methods and enterprise-grade security.",
    icon: Bot,
    color: "purple",
    tags: ["Python", "MCP", "ADOMD.NET", "XMLA", "TMDL"],
    metrics: [
      { icon: Wrench, value: "34", label: "AI Tools" },
      { icon: Server, value: "3", label: "Connectors" },
      { icon: Shield, value: "100%", label: "Secure" },
    ],
    link: "/case-study/powerbi-mcp",
    github: "https://github.com/sulaiman013/powerbi-mcp",
    youtube: "https://www.youtube.com/watch?v=eFDfghAtpOg",
  },
  {
    id: "airtable-mcp",
    title: "Replaced Airtable Formulas with Plain English",
    subtitle: "Natural Language Database Operations",
    description:
      "Enabled instant schema discovery and complex filtering without training by building an MCP server with 100% input validation that prevents accidental data corruption.",
    icon: Table,
    color: "amber",
    tags: ["Python", "MCP", "pyairtable", "Claude Desktop"],
    metrics: [
      { icon: Wrench, value: "6", label: "Core Tools" },
      { icon: Shield, value: "100%", label: "Validated" },
      { icon: MessageSquare, value: "NL", label: "Queries" },
    ],
    link: "/case-study/airtable-mcp",
    github: "https://github.com/sulaiman013/AIRTABLE-MCP",
  },
  {
    id: "fabric-sql-assistant",
    title: "Translated Plain English to Optimized SQL",
    subtitle: "AI Query Generator for Microsoft Fabric",
    description:
      "Reduced the SQL learning curve for analysts new to Fabric by building an MCP server that auto-generates queries from natural language with Azure AD authentication for enterprise compliance.",
    icon: Database,
    color: "green",
    tags: ["Python", "MCP", "pyodbc", "MSAL", "OpenAI"],
    metrics: [
      { icon: Sparkles, value: "AI", label: "Query Gen" },
      { icon: Cloud, value: "Azure", label: "AD Auth" },
      { icon: MessageSquare, value: "NL", label: "Input" },
    ],
    link: "/case-study/fabric-sql-assistant",
    github: "https://github.com/sulaiman013/Fabric-SQL-Assistant",
    youtube: "https://www.youtube.com/watch?v=aQoJ5_XmtGk",
  },
  {
    id: "fabricforge",
    title: "Cut Workspace Setup from Hours to 5 Minutes",
    subtitle: "Visual Fabric Deployment Automation",
    description:
      "Eliminated configuration errors by building a visual form builder with AI-powered code generation, reducing Microsoft Fabric workspace provisioning time by 90%.",
    icon: Settings,
    color: "teal",
    tags: ["n8n", "Microsoft Fabric", "Azure AD", "OpenAI"],
    metrics: [
      { icon: Clock, value: "90%", label: "Time Saved" },
      { icon: Zap, value: "5 min", label: "Deploy" },
      { icon: Shield, value: "Zero", label: "Errors" },
    ],
    link: "/case-study/fabricforge",
    youtube: "https://www.youtube.com/watch?v=LxRW9tSX1I8",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  blue: {
    bg: "from-blue-500/10 to-blue-500/5",
    border: "border-blue-500/30 hover:border-blue-500/50",
    text: "text-blue-500",
    badge: "bg-blue-500/10 text-blue-500",
  },
  purple: {
    bg: "from-purple-500/10 to-purple-500/5",
    border: "border-purple-500/30 hover:border-purple-500/50",
    text: "text-purple-500",
    badge: "bg-purple-500/10 text-purple-500",
  },
  amber: {
    bg: "from-amber-500/10 to-amber-500/5",
    border: "border-amber-500/30 hover:border-amber-500/50",
    text: "text-amber-500",
    badge: "bg-amber-500/10 text-amber-500",
  },
  green: {
    bg: "from-green-500/10 to-green-500/5",
    border: "border-green-500/30 hover:border-green-500/50",
    text: "text-green-500",
    badge: "bg-green-500/10 text-green-500",
  },
  teal: {
    bg: "from-teal-500/10 to-teal-500/5",
    border: "border-teal-500/30 hover:border-teal-500/50",
    text: "text-teal-500",
    badge: "bg-teal-500/10 text-teal-500",
  },
  orange: {
    bg: "from-orange-500/10 to-orange-500/5",
    border: "border-orange-500/30 hover:border-orange-500/50",
    text: "text-orange-500",
    badge: "bg-orange-500/10 text-orange-500",
  },
  rose: {
    bg: "from-rose-500/10 to-rose-500/5",
    border: "border-rose-500/30 hover:border-rose-500/50",
    text: "text-rose-500",
    badge: "bg-rose-500/10 text-rose-500",
  },
};

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const colors = colorMap[study.color] || colorMap.blue;
  const hasDetailPage = !!study.link;

  const inner = (
    <Card
      className={`h-full transition-all duration-300 ${colors.border} bg-gradient-to-br ${colors.bg} hover:shadow-xl hover:-translate-y-1`}
    >
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-14 h-14 rounded-xl ${colors.badge} flex items-center justify-center`}
          >
            <study.icon className={`h-7 w-7 ${colors.text}`} />
          </div>
          {hasDetailPage && (
            <ArrowRight
              className={`h-5 w-5 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`}
            />
          )}
        </div>
        <CardTitle className="text-xl mb-2 leading-tight">{study.title}</CardTitle>
        <p className={`text-sm font-medium ${colors.text}`}>{study.subtitle}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground text-sm leading-relaxed">{study.description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="text-center p-3 rounded-lg bg-background/50">
              <metric.icon className={`h-4 w-4 ${colors.text} mx-auto mb-1`} />
              <div className={`font-bold text-sm ${colors.text}`}>{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action row */}
        <div className="flex items-center gap-3">
          {hasDetailPage && (
            <span
              className={`flex items-center gap-2 text-sm font-medium ${colors.text} group-hover:gap-3 transition-all`}
            >
              View Full Case Study
              <ArrowRight className="h-4 w-4" />
            </span>
          )}
          {!hasDetailPage && (study.github || study.youtube) && (
            <div className="flex items-center gap-2">
              {study.github && (
                <a
                  href={study.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-background/50 text-muted-foreground hover:text-foreground hover:bg-background transition-colors"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              )}
              {study.youtube && (
                <a
                  href={study.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-background/50 text-muted-foreground hover:text-red-500 hover:bg-background transition-colors"
                >
                  <Youtube className="h-3.5 w-3.5" /> Demo
                </a>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  if (hasDetailPage) {
    return (
      <Link to={study.link!} className="group">
        {inner}
      </Link>
    );
  }

  return <div className="group">{inner}</div>;
}

function PetProjectCard({ study }: { study: CaseStudy }) {
  const colors = colorMap[study.color] || colorMap.blue;
  const hasDetailPage = !!study.link;

  const inner = (
    <Card
      className={`h-full transition-all duration-300 ${colors.border} bg-gradient-to-br ${colors.bg} hover:shadow-xl hover:-translate-y-1`}
    >
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-14 h-14 rounded-xl ${colors.badge} flex items-center justify-center`}
          >
            <study.icon className={`h-7 w-7 ${colors.text}`} />
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-wider">
              Open Source
            </Badge>
            {hasDetailPage && (
              <ArrowRight
                className={`h-5 w-5 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`}
              />
            )}
          </div>
        </div>
        <CardTitle className="text-xl mb-2 leading-tight">{study.title}</CardTitle>
        <p className={`text-sm font-medium ${colors.text}`}>{study.subtitle}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground text-sm leading-relaxed">{study.description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="text-center p-3 rounded-lg bg-background/50">
              <metric.icon className={`h-4 w-4 ${colors.text} mx-auto mb-1`} />
              <div className={`font-bold text-sm ${colors.text}`}>{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action row */}
        <div className="flex items-center gap-2 pt-1">
          {hasDetailPage && (
            <span
              className={`flex items-center gap-2 text-sm font-medium ${colors.text} group-hover:gap-3 transition-all`}
            >
              View Full Case Study
              <ArrowRight className="h-4 w-4" />
            </span>
          )}
          {!hasDetailPage && (
            <>
              {study.github && (
                <a
                  href={study.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium ${colors.badge} hover:opacity-80 transition-opacity`}
                >
                  <Github className="h-4 w-4" /> View Source
                </a>
              )}
              {study.youtube && (
                <a
                  href={study.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-red-500/10 text-red-500 hover:opacity-80 transition-opacity"
                >
                  <Youtube className="h-4 w-4" /> Watch Demo
                </a>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );

  if (hasDetailPage) {
    return (
      <Link to={study.link!} className="group">
        {inner}
      </Link>
    );
  }

  return <div className="group">{inner}</div>;
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />

      {/* Hero */}
      <section className="pt-20 py-16 md:py-24 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="text-xs mb-6">
              Portfolio
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Data Engineering & AI Projects
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Each project shows the problem I solved, how I measured success, and the tools I used.
              Click any card for the full technical deep-dive.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Case Studies</h2>
              <p className="text-muted-foreground">
                Client work and significant projects with measurable business impact.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pet Projects */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl md:text-3xl font-bold">AI Exploration & Pet Projects</h2>
                <Badge className="text-xs">Open Source</Badge>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                Side projects where I explore how AI can transform data workflows. Each one is
                open-source with full code on GitHub. These reflect how I think about integrating AI
                into everyday analytics work.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {petProjects.map((study) => (
                <PetProjectCard key={study.id} study={study} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-muted/30 border-t">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Layers className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-muted-foreground mb-6">
              I solve data problems with Python, SQL, and cloud platforms. These projects show how I
              think, build, and deliver results.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Databricks", "Power BI", "dbt", "Python", "Microsoft Fabric", "AI/ML"].map(
                (tech) => (
                  <Badge key={tech} className="text-sm px-4 py-2">
                    {tech}
                  </Badge>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
