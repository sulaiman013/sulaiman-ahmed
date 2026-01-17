import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Bot,
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
  Users
} from "lucide-react";

const CaseStudyGallery = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // XYZ Formula: Accomplished [X] as measured by [Y], by doing [Z]
  // Lead with result, quantify impact, then explain how
  const caseStudies = [
    {
      id: "quickbooks-medallion",
      title: "Cut Financial Reporting Time by 10+ Hours/Week",
      subtitle: "QuickBooks to Power BI Pipeline",
      description: "Achieved 99.999% P&L accuracy and 100% Balance Sheet verification by building an automated 3-tier Medallion Architecture that replaced manual QuickBooks exports and Excel reconciliation.",
      icon: GitBranch,
      color: "green",
      tags: ["Power BI", "Python", "QuickBooks API", "DAX"],
      metrics: [
        { icon: Clock, value: "10+ hrs", label: "Saved Weekly" },
        { icon: Target, value: "99.999%", label: "P&L Accuracy" },
        { icon: Shield, value: "100%", label: "BS Verified" }
      ],
      link: "/case-study/quickbooks-medallion"
    },
    {
      id: "banking-churn",
      title: "Enabled $5-6M Annual Savings via Churn Prediction",
      subtitle: "End-to-End ML Platform on Databricks",
      description: "Identified high-risk customers before they left by unifying 4 siloed data systems into a single customer view and engineering 30+ ML features for proactive retention targeting.",
      icon: Brain,
      color: "orange",
      tags: ["Databricks", "dbt", "Python", "scikit-learn", "Unity Catalog"],
      metrics: [
        { icon: DollarSign, value: "$5-6M", label: "Annual Impact" },
        { icon: Users, value: "4 to 1", label: "Systems Unified" },
        { icon: Brain, value: "30+", label: "ML Features" }
      ],
      link: "/case-study/banking-churn"
    },
    {
      id: "powerbi-expert-webapp",
      title: "Reduced BI Query Time by 70-80%",
      subtitle: "Open Source AI Assistant for Power BI",
      description: "Enabled non-technical users to query Power BI data in plain English by building an open-source AI assistant, eliminating per-user Copilot licensing costs while maintaining 100% data security.",
      icon: Bot,
      color: "blue",
      tags: ["Python", "Flask", "Azure AI Foundry", "Ollama", "XMLA", "DAX"],
      metrics: [
        { icon: Clock, value: "70-80%", label: "Faster Queries" },
        { icon: DollarSign, value: "$0", label: "Per-User Cost" },
        { icon: Shield, value: "100%", label: "Data Secure" }
      ],
      link: "/case-study/powerbi-expert-webapp"
    },
    {
      id: "lumina-lux",
      title: "Unified $166.7M+ Across 3 Global Subsidiaries",
      subtitle: "Multi-Entity Financial Consolidation",
      description: "Eliminated month-end consolidation delays by building a real-time reporting platform that processes 120,846 transactions and enables drill-down from consolidated view to entity-level details.",
      icon: BarChart3,
      color: "blue",
      tags: ["Power BI", "MySQL", "Python", "DAX"],
      metrics: [
        { icon: DollarSign, value: "$166.7M+", label: "Consolidated" },
        { icon: Globe, value: "3", label: "Subsidiaries" },
        { icon: Database, value: "120,846", label: "Transactions" }
      ],
      link: "/case-study/lumina-lux"
    },
    {
      id: "icla-analytics",
      title: "Cut Data Latency from Days to 30 Minutes",
      subtitle: "Automated Extraction from Locked CRM",
      description: "Freed business-critical data trapped in a CRM with no API access by building an automated extraction pipeline, then added AI-powered natural language insights for instant business answers.",
      icon: Layers,
      color: "orange",
      tags: ["Python", "Selenium", "MySQL", "Power BI", "MCP", "Claude AI"],
      metrics: [
        { icon: Clock, value: "30 min", label: "Data Freshness" },
        { icon: Zap, value: "Instant", label: "AI Insights" },
        { icon: MessageSquare, value: "NL", label: "Queries" }
      ],
      link: "/case-study/icla-analytics"
    },
    {
      id: "powerbi-mcp",
      title: "Built 34 AI Tools for Power BI Integration",
      subtitle: "Model Context Protocol Server",
      description: "Enabled Claude to execute DAX queries and explore Power BI models via natural language by building an open-source MCP server with 3 connection methods and enterprise-grade security.",
      icon: Bot,
      color: "purple",
      tags: ["Python", "MCP", "ADOMD.NET", "XMLA", "TMDL"],
      metrics: [
        { icon: Wrench, value: "34", label: "AI Tools" },
        { icon: Server, value: "3", label: "Connectors" },
        { icon: Shield, value: "100%", label: "Secure" }
      ],
      link: "/case-study/powerbi-mcp"
    },
    {
      id: "airtable-mcp",
      title: "Replaced Airtable Formulas with Plain English",
      subtitle: "Natural Language Database Operations",
      description: "Enabled instant schema discovery and complex filtering without training by building an MCP server with 100% input validation that prevents accidental data corruption.",
      icon: Table,
      color: "amber",
      tags: ["Python", "MCP", "pyairtable", "Claude Desktop"],
      metrics: [
        { icon: Wrench, value: "6", label: "Core Tools" },
        { icon: Shield, value: "100%", label: "Validated" },
        { icon: MessageSquare, value: "NL", label: "Queries" }
      ],
      link: "/case-study/airtable-mcp"
    },
    {
      id: "fabric-sql-assistant",
      title: "Translated Plain English to Optimized SQL",
      subtitle: "AI Query Generator for Microsoft Fabric",
      description: "Reduced the SQL learning curve for analysts new to Fabric by building an MCP server that auto-generates queries from natural language with Azure AD authentication for enterprise compliance.",
      icon: Database,
      color: "green",
      tags: ["Python", "MCP", "pyodbc", "MSAL", "OpenAI"],
      metrics: [
        { icon: Sparkles, value: "AI", label: "Query Gen" },
        { icon: Cloud, value: "Azure", label: "AD Auth" },
        { icon: MessageSquare, value: "NL", label: "Input" }
      ],
      link: "/case-study/fabric-sql-assistant"
    },
    {
      id: "fabricforge",
      title: "Cut Workspace Setup from Hours to 5 Minutes",
      subtitle: "Visual Fabric Deployment Automation",
      description: "Eliminated configuration errors by building a visual form builder with AI-powered code generation, reducing Microsoft Fabric workspace provisioning time by 90%.",
      icon: Settings,
      color: "teal",
      tags: ["n8n", "Microsoft Fabric", "Azure AD", "OpenAI"],
      metrics: [
        { icon: Clock, value: "90%", label: "Time Saved" },
        { icon: Zap, value: "5 min", label: "Deploy" },
        { icon: Shield, value: "Zero", label: "Errors" }
      ],
      link: "/case-study/fabricforge"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; badge: string }> = {
      blue: {
        bg: "from-blue-500/10 to-blue-500/5",
        border: "border-blue-500/30 hover:border-blue-500/50",
        text: "text-blue-500",
        badge: "bg-blue-500/10 text-blue-500"
      },
      purple: {
        bg: "from-purple-500/10 to-purple-500/5",
        border: "border-purple-500/30 hover:border-purple-500/50",
        text: "text-purple-500",
        badge: "bg-purple-500/10 text-purple-500"
      },
      amber: {
        bg: "from-amber-500/10 to-amber-500/5",
        border: "border-amber-500/30 hover:border-amber-500/50",
        text: "text-amber-500",
        badge: "bg-amber-500/10 text-amber-500"
      },
      green: {
        bg: "from-green-500/10 to-green-500/5",
        border: "border-green-500/30 hover:border-green-500/50",
        text: "text-green-500",
        badge: "bg-green-500/10 text-green-500"
      },
      teal: {
        bg: "from-teal-500/10 to-teal-500/5",
        border: "border-teal-500/30 hover:border-teal-500/50",
        text: "text-teal-500",
        badge: "bg-teal-500/10 text-teal-500"
      },
      orange: {
        bg: "from-orange-500/10 to-orange-500/5",
        border: "border-orange-500/30 hover:border-orange-500/50",
        text: "text-orange-500",
        badge: "bg-orange-500/10 text-orange-500"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="pt-20">
        {/* Hero Section - Optimized for 6-second scan */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="text-xs mb-6">Portfolio</Badge>

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

        {/* Case Studies Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudies.map((study) => {
                  const colors = getColorClasses(study.color);
                  return (
                    <Link key={study.id} to={study.link} className="group">
                      <Card className={`h-full transition-all duration-300 ${colors.border} bg-gradient-to-br ${colors.bg} hover:shadow-xl hover:-translate-y-1`}>
                        <CardHeader>
                          <div className="flex items-start justify-between mb-4">
                            <div className={`w-14 h-14 rounded-xl ${colors.badge} flex items-center justify-center`}>
                              <study.icon className={`h-7 w-7 ${colors.text}`} />
                            </div>
                            <ArrowRight className={`h-5 w-5 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`} />
                          </div>
                          {/* Title with quantified result - the hook */}
                          <CardTitle className="text-xl mb-2 leading-tight">{study.title}</CardTitle>
                          <p className={`text-sm font-medium ${colors.text}`}>{study.subtitle}</p>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          {/* XYZ format: Result + Metric + Method */}
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {study.description}
                          </p>

                          {/* Metrics - Visual proof */}
                          <div className="grid grid-cols-3 gap-3">
                            {study.metrics.map((metric, idx) => (
                              <div key={idx} className="text-center p-3 rounded-lg bg-background/50">
                                <metric.icon className={`h-4 w-4 ${colors.text} mx-auto mb-1`} />
                                <div className={`font-bold text-sm ${colors.text}`}>{metric.value}</div>
                                <div className="text-xs text-muted-foreground">{metric.label}</div>
                              </div>
                            ))}
                          </div>

                          {/* Tags - Skills proof */}
                          <div className="flex flex-wrap gap-2">
                            {study.tags.map((tag, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {/* CTA */}
                          <div className={`flex items-center gap-2 text-sm font-medium ${colors.text} group-hover:gap-3 transition-all`}>
                            View Full Case Study
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-muted/30 border-t">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Layers className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Build Something Together</h2>
              <p className="text-muted-foreground mb-6">
                I solve data problems with Python, SQL, and cloud platforms.
                These projects show how I think, build, and deliver results.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge className="text-sm px-4 py-2">Databricks</Badge>
                <Badge className="text-sm px-4 py-2">Power BI</Badge>
                <Badge className="text-sm px-4 py-2">dbt</Badge>
                <Badge className="text-sm px-4 py-2">Python</Badge>
                <Badge className="text-sm px-4 py-2">Microsoft Fabric</Badge>
                <Badge className="text-sm px-4 py-2">AI/ML</Badge>
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

export default CaseStudyGallery;
