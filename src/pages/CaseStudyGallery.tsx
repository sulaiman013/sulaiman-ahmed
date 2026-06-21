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
    tags: ["Python", "Selenium", "MySQL", "Power BI", "MCP", "Claude AI"],
    metrics: [
      { icon: Clock, value: "30 min", label: "Data Freshness" },
      { icon: Zap, value: "Instant", label: "AI Insights" },
      { icon: MessageSquare, value: "NL", label: "Queries" },
    ],
    link: "/case-study/icla-analytics",
  },
  {
    id: "powerbi-ai-assistant-architecture",
    title: "Took a Custom Power BI AI Assistant from 49% to 92% Accuracy",
    subtitle: "Architecture & Replication Guide",
    description:
      "Built a multi-modal BI assistant that routes between text-to-DAX, screenshot vision, and report-guide grounding through one Edge endpoint. Validated across 7 tenants. ~88% cost reduction post-optimization. Includes the full system map, the 7-layer onion architecture, the deterministic recipe layer, and the 9-phase replication playbook.",
    icon: Sparkles,
    tags: ["OpenRouter", "Power BI", "DAX", "Vector DB", "Vision LLM", "Edge Runtime", "Recipe Layer"],
    metrics: [
      { icon: Target, value: "91.8%", label: "Answer Accuracy" },
      { icon: DollarSign, value: "$0.0024", label: "Avg Cost / Call" },
      { icon: Zap, value: "27.6%", label: "Recipe Hit Rate" },
    ],
    link: "/case-study/powerbi-ai-assistant-architecture",
  },
  {
    id: "remax-login-portal",
    title: "Saved $1,000+/Year in Licensing Costs",
    subtitle: "Custom Login Portal: RE/MAX Properties",
    description:
      "Secure authentication system for Power BI reports with 4 user profiles and tailored data access for 50+ external agents without additional Pro licenses.",
    icon: Shield,
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

// Unified brand-accent scheme. The card identity now comes from the
// icon + content, not from a per-card color. Tokens cascade to both
// light and dark modes so contrast stays accessible everywhere.
const cardTheme = {
  border: "border-border hover:border-border-strong",
  text: "text-accent-brand-strong dark:text-accent-brand",
  badge: "bg-accent-brand-soft text-accent-brand-strong dark:bg-accent-brand-soft/60 dark:text-accent-brand",
};

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const hasDetailPage = !!study.link;

  const inner = (
    <Card
      className={`h-full bg-background-elevated ${cardTheme.border} transition-all duration-fast ease-out-quart hover:shadow-soft hover:-translate-y-0.5`}
    >
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-14 h-14 rounded-xl ${cardTheme.badge} flex items-center justify-center`}
          >
            <study.icon className={`h-7 w-7 ${cardTheme.text}`} aria-hidden="true" />
          </div>
          {hasDetailPage && (
            <ArrowRight
              className="h-5 w-5 text-accent-brand opacity-60 transition-all duration-fast ease-out-quart group-hover:translate-x-0.5 group-hover:opacity-100"
              aria-hidden="true"
            />
          )}
        </div>
        <CardTitle className="text-h3 font-bold leading-tight mb-2 text-foreground">{study.title}</CardTitle>
        <p className={`text-sm font-medium ${cardTheme.text}`}>{study.subtitle}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-foreground-muted text-sm leading-relaxed">{study.description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="text-center p-3 rounded-lg bg-background-elevated">
              <metric.icon className={`h-4 w-4 ${cardTheme.text} mx-auto mb-1`} aria-hidden="true" />
              <div className={`font-serif text-lg font-medium leading-tight ${cardTheme.text}`}>{metric.value}</div>
              <div className="text-xs text-foreground-muted">{metric.label}</div>
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
              className={`flex items-center gap-2 text-sm font-medium ${cardTheme.text} group-hover:gap-3 transition-all`}
            >
              View Full Case Study
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-background-elevated text-foreground-muted hover:text-accent-brand hover:bg-accent-brand-soft transition-colors"
                >
                  <Github className="h-3.5 w-3.5" aria-hidden="true" /> GitHub
                </a>
              )}
              {study.youtube && (
                <a
                  href={study.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-background-elevated text-foreground-muted hover:text-accent-brand hover:bg-accent-brand-soft transition-colors"
                >
                  <Youtube className="h-3.5 w-3.5" aria-hidden="true" /> Demo
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
  const hasDetailPage = !!study.link;

  const inner = (
    <Card
      className={`h-full bg-background-elevated ${cardTheme.border} transition-all duration-fast ease-out-quart hover:shadow-soft hover:-translate-y-0.5`}
    >
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-14 h-14 rounded-xl ${cardTheme.badge} flex items-center justify-center`}
          >
            <study.icon className={`h-7 w-7 ${cardTheme.text}`} aria-hidden="true" />
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-wider">
              Open Source
            </Badge>
            {hasDetailPage && (
              <ArrowRight
                className="h-5 w-5 text-accent-brand opacity-60 transition-all duration-fast ease-out-quart group-hover:translate-x-0.5 group-hover:opacity-100"
                aria-hidden="true"
              />
            )}
          </div>
        </div>
        <CardTitle className="text-h3 font-bold leading-tight mb-2 text-foreground">{study.title}</CardTitle>
        <p className={`text-sm font-medium ${cardTheme.text}`}>{study.subtitle}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-foreground-muted text-sm leading-relaxed">{study.description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="text-center p-3 rounded-lg bg-background-elevated">
              <metric.icon className={`h-4 w-4 ${cardTheme.text} mx-auto mb-1`} aria-hidden="true" />
              <div className={`font-serif text-lg font-medium leading-tight ${cardTheme.text}`}>{metric.value}</div>
              <div className="text-xs text-foreground-muted">{metric.label}</div>
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
              className={`flex items-center gap-2 text-sm font-medium ${cardTheme.text} group-hover:gap-3 transition-all`}
            >
              View Full Case Study
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          )}
          {!hasDetailPage && (
            <>
              {study.github && (
                <a
                  href={study.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium ${cardTheme.badge} hover:opacity-80 transition-opacity`}
                >
                  <Github className="h-4 w-4" aria-hidden="true" /> View Source
                </a>
              )}
              {study.youtube && (
                <a
                  href={study.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-background-elevated text-foreground-muted hover:text-accent-brand hover:bg-accent-brand-soft transition-colors"
                >
                  <Youtube className="h-4 w-4" aria-hidden="true" /> Watch Demo
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
      <section className="pt-20 py-section-sm md:py-section">
        <div className="max-w-page mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <Badge variant="outline" className="text-xs mb-6">
              Portfolio
            </Badge>
            <h1 className="font-serif text-display-md md:text-display-lg leading-tight tracking-tight text-foreground mb-6">
              Data Engineering &amp; AI Projects
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
              Each project shows the problem I solved, how I measured success, and the tools I used.
              Click any card for the full technical deep-dive.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-section-sm bg-background">
        <div className="max-w-page mx-auto px-6 md:px-12">
          <div className="mb-10">
            <h2 className="font-serif text-h2 md:text-display-md text-foreground tracking-tight mb-2">
              Case Studies
            </h2>
            <p className="text-foreground-muted">
              Client work and significant projects with measurable business impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Pet Projects */}
      <section className="py-section-sm bg-background-elevated">
        <div className="max-w-page mx-auto px-6 md:px-12">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="font-serif text-h2 md:text-display-md text-foreground tracking-tight">
                AI Exploration &amp; Pet Projects
              </h2>
              <Badge className="text-xs">Open Source</Badge>
            </div>
            <p className="text-foreground-muted max-w-2xl">
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
      </section>

      {/* Bottom link block */}
      <section className="py-section-sm border-t border-border">
        <div className="max-w-page mx-auto px-6 md:px-12">
          <p className="text-foreground-muted">
            Want to talk about a project?{" "}
            <Link
              to="/contact"
              className="text-accent-brand-strong underline decoration-accent-brand/50 underline-offset-2 hover:decoration-accent-brand transition-colors"
            >
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
