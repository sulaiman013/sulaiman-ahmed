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

  const caseStudies = [
    {
      id: "quickbooks-medallion",
      title: "Automated Financial Reporting",
      subtitle: "QuickBooks to Power BI Pipeline",
      description: "Saved 10+ hours/week by replacing manual QuickBooks exports with an automated 3-tier Medallion Architecture. Achieved 99.999% P&L accuracy and 100% Balance Sheet equation verification through proper double-entry accounting principles.",
      icon: GitBranch,
      color: "green",
      tags: ["Power BI", "Python", "QuickBooks API", "DAX"],
      metrics: [
        { icon: Target, value: "99.999%", label: "P&L Accuracy" },
        { icon: Shield, value: "100%", label: "BS Verified" },
        { icon: Clock, value: "10+ hrs", label: "Saved Weekly" }
      ],
      link: "/case-study/quickbooks-medallion"
    },
    {
      id: "banking-churn",
      title: "Predicted Customer Churn Risk",
      subtitle: "End-to-End ML on Databricks",
      description: "Identified high-risk customers before they churned, enabling $5-6M in annual savings potential. Unified 4 siloed data systems into a single customer view using email-based entity resolution and built 30+ ML features for proactive retention.",
      icon: Brain,
      color: "orange",
      tags: ["Databricks", "dbt", "Python", "scikit-learn", "Unity Catalog"],
      metrics: [
        { icon: Users, value: "4→1", label: "Unified Systems" },
        { icon: Brain, value: "30+", label: "ML Features" },
        { icon: DollarSign, value: "$5-6M", label: "Annual Impact" }
      ],
      link: "/case-study/banking-churn"
    },
    {
      id: "powerbi-expert-webapp",
      title: "Democratized BI with AI",
      subtitle: "Open Source Power BI Assistant",
      description: "Reduced time-to-insight by 70-80% with natural language queries to Power BI. Eliminated per-user Copilot licensing costs with an open-source enterprise solution that enables non-technical users to explore data without learning DAX.",
      icon: Bot,
      color: "blue",
      tags: ["Python", "Flask", "Azure AI Foundry", "Ollama", "XMLA", "DAX"],
      metrics: [
        { icon: Clock, value: "70-80%", label: "Time Saved" },
        { icon: DollarSign, value: "$0", label: "Per-User Fee" },
        { icon: Shield, value: "100%", label: "Data Security" }
      ],
      link: "/case-study/powerbi-expert-webapp"
    },
    {
      id: "lumina-lux",
      title: "Consolidated Global Financials",
      subtitle: "Multi-Entity Reporting Platform",
      description: "Unified $166.7M+ in financial data from 3 global subsidiaries into one real-time dashboard. Eliminated month-end consolidation delays and enabled drill-down from consolidated view to individual entity transactions.",
      icon: BarChart3,
      color: "blue",
      tags: ["Power BI", "MySQL", "Python", "DAX"],
      metrics: [
        { icon: Database, value: "120,846", label: "Transactions" },
        { icon: Globe, value: "3", label: "Global Entities" },
        { icon: DollarSign, value: "$166.7M+", label: "Financial Volume" }
      ],
      link: "/case-study/lumina-lux"
    },
    {
      id: "icla-analytics",
      title: "Unlocked Trapped Business Data",
      subtitle: "From Locked CRM to AI-Powered Insights",
      description: "Reduced data freshness from days to 30 minutes by automating extraction from a locked CRM with no API access. Added AI-powered natural language insights for instant answers to business questions.",
      icon: Layers,
      color: "orange",
      tags: ["Python", "Selenium", "MySQL", "Power BI", "MCP", "Claude AI"],
      metrics: [
        { icon: Clock, value: "30 min", label: "Data Fresh" },
        { icon: Zap, value: "Instant", label: "Reports" },
        { icon: MessageSquare, value: "AI", label: "Insights" }
      ],
      link: "/case-study/icla-analytics"
    },
    {
      id: "powerbi-mcp",
      title: "Enabled AI-Powered BI Analysis",
      subtitle: "Model Context Protocol Server",
      description: "Built 34 AI tools allowing Claude to query Power BI models via natural language. Enabled safe bulk operations with enterprise-grade security and open-sourced for community use with 3 connection methods.",
      icon: Bot,
      color: "purple",
      tags: ["Python", "MCP", "ADOMD.NET", "XMLA", "TMDL"],
      metrics: [
        { icon: Wrench, value: "34", label: "AI Tools" },
        { icon: Server, value: "3", label: "Connectors" },
        { icon: Shield, value: "100%", label: "Enterprise Security" }
      ],
      link: "/case-study/powerbi-mcp"
    },
    {
      id: "airtable-mcp",
      title: "Simplified Database Operations",
      subtitle: "Natural Language for Airtable",
      description: "Replaced complex Airtable formulas with plain English queries via Claude. Ensured 100% input validation preventing accidental data corruption and enabled instant schema discovery without training.",
      icon: Table,
      color: "amber",
      tags: ["Python", "MCP", "pyairtable", "Claude Desktop"],
      metrics: [
        { icon: Wrench, value: "6", label: "Core Tools" },
        { icon: Shield, value: "100%", label: "Input Validation" },
        { icon: MessageSquare, value: "Natural", label: "Language" }
      ],
      link: "/case-study/airtable-mcp"
    },
    {
      id: "fabric-sql-assistant",
      title: "Natural Language SQL for Fabric",
      subtitle: "AI-Powered Query Generation",
      description: "Translated plain English questions into optimized SQL queries automatically. Secured with Azure AD authentication for enterprise compliance and reduced the SQL learning curve for analysts new to Microsoft Fabric.",
      icon: Database,
      color: "green",
      tags: ["Python", "MCP", "pyodbc", "MSAL", "OpenAI"],
      metrics: [
        { icon: MessageSquare, value: "Natural", label: "Language" },
        { icon: Cloud, value: "Azure", label: "AD Auth" },
        { icon: Sparkles, value: "AI", label: "Query Gen" }
      ],
      link: "/case-study/fabric-sql-assistant"
    },
    {
      id: "fabricforge",
      title: "Automated Workspace Provisioning",
      subtitle: "Visual Fabric Deployment Platform",
      description: "Reduced workspace setup time by 90%, from hours of manual configuration to 5 minutes. Eliminated configuration errors with visual form builder and AI-powered code generation.",
      icon: Settings,
      color: "teal",
      tags: ["n8n", "Microsoft Fabric", "Azure AD", "OpenAI"],
      metrics: [
        { icon: Clock, value: "90%", label: "Time Saved" },
        { icon: Zap, value: "5 min", label: "Deploy Time" },
        { icon: Shield, value: "Zero", label: "Config Errors" }
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
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="text-xs mb-6">Portfolio</Badge>

              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Case Studies
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Real impact through data engineering, business intelligence, and AI integration.
                Each project measured in time saved, revenue protected, and efficiency gained.
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
                          <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                          <p className={`text-sm font-medium ${colors.text}`}>{study.subtitle}</p>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {study.description}
                          </p>

                          {/* Metrics */}
                          <div className="grid grid-cols-3 gap-3">
                            {study.metrics.map((metric, idx) => (
                              <div key={idx} className="text-center p-3 rounded-lg bg-background/50">
                                <metric.icon className={`h-4 w-4 ${colors.text} mx-auto mb-1`} />
                                <div className={`font-bold text-sm ${colors.text}`}>{metric.value}</div>
                                <div className="text-xs text-muted-foreground">{metric.label}</div>
                              </div>
                            ))}
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {study.tags.map((tag, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {/* CTA */}
                          <div className={`flex items-center gap-2 text-sm font-medium ${colors.text} group-hover:gap-3 transition-all`}>
                            View Case Study
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Building the Future of Data & AI</h2>
              <p className="text-muted-foreground mb-6">
                From enterprise financial analytics to AI-powered integrations, these case studies showcase
                end-to-end solutions that transform how organizations work with data.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge className="text-sm px-4 py-2">Data Engineering</Badge>
                <Badge className="text-sm px-4 py-2">Business Intelligence</Badge>
                <Badge className="text-sm px-4 py-2">AI Integration</Badge>
                <Badge className="text-sm px-4 py-2">MCP Servers</Badge>
                <Badge className="text-sm px-4 py-2">Microsoft Fabric</Badge>
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
