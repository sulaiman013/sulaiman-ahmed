import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Bot,
  ArrowRight,
  Database,
  Layers,
  Table,
  Settings,
  GitBranch,
  Brain,
  CheckCircle2
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
      techStack: "Power BI + Python + QuickBooks API",
      bullets: [
        "Saved 10+ hours/week by eliminating manual QuickBooks exports and Excel reconciliation",
        "Achieved 99.999% P&L accuracy with automated double-entry accounting validation",
        "Delivered real-time financial dashboards replacing days of manual report creation"
      ],
      icon: GitBranch,
      color: "green",
      link: "/case-study/quickbooks-medallion"
    },
    {
      id: "banking-churn",
      title: "Predicted Customer Churn Risk",
      techStack: "Databricks + dbt + scikit-learn",
      bullets: [
        "Identified high-risk customers before churn, enabling $5-6M in annual savings potential",
        "Unified 4 siloed data systems into a single customer view using email-based entity resolution",
        "Built 30+ ML features and ensemble model for proactive retention recommendations"
      ],
      icon: Brain,
      color: "orange",
      link: "/case-study/banking-churn"
    },
    {
      id: "powerbi-expert-webapp",
      title: "Democratized BI with AI Assistant",
      techStack: "Python + Flask + Azure AI + XMLA",
      bullets: [
        "Reduced time-to-insight by 70-80% with natural language queries to Power BI",
        "Eliminated per-user Copilot licensing costs with open-source enterprise solution",
        "Enabled non-technical users to explore data without learning DAX"
      ],
      icon: Bot,
      color: "blue",
      link: "/case-study/powerbi-expert-webapp"
    },
    {
      id: "lumina-lux",
      title: "Consolidated Global Financial Reporting",
      techStack: "Power BI + MySQL + Python + DAX",
      bullets: [
        "Unified $166.7M+ in financial data from 3 global subsidiaries into one dashboard",
        "Eliminated month-end consolidation delays with real-time automated reporting",
        "Enabled drill-down from consolidated view to individual entity transactions"
      ],
      icon: BarChart3,
      color: "blue",
      link: "/case-study/lumina-lux"
    },
    {
      id: "icla-analytics",
      title: "Unlocked Trapped Business Data",
      techStack: "Python + Selenium + MySQL + Claude AI",
      bullets: [
        "Reduced data freshness from days to 30 minutes with automated extraction pipeline",
        "Freed business-critical data from a locked CRM with no API access",
        "Added AI-powered natural language insights for instant answers to business questions"
      ],
      icon: Layers,
      color: "orange",
      link: "/case-study/icla-analytics"
    },
    {
      id: "powerbi-mcp",
      title: "Enabled AI-Powered BI Analysis",
      techStack: "Python + MCP + XMLA + ADOMD.NET",
      bullets: [
        "Built 34 AI tools allowing Claude to query Power BI models via natural language",
        "Enabled safe bulk operations with enterprise-grade security and audit trails",
        "Open-sourced for community use with 3 connection methods (local, cloud, Fabric)"
      ],
      icon: Bot,
      color: "purple",
      link: "/case-study/powerbi-mcp"
    },
    {
      id: "airtable-mcp",
      title: "Simplified Database Operations",
      techStack: "Python + MCP + pyairtable",
      bullets: [
        "Replaced complex Airtable formulas with plain English queries via Claude",
        "Ensured 100% input validation preventing accidental data corruption",
        "Enabled instant schema discovery and advanced filtering without training"
      ],
      icon: Table,
      color: "amber",
      link: "/case-study/airtable-mcp"
    },
    {
      id: "fabric-sql-assistant",
      title: "Natural Language SQL for Fabric",
      techStack: "Python + MCP + OpenAI + Azure AD",
      bullets: [
        "Translated plain English questions into optimized SQL queries automatically",
        "Secured with Azure AD authentication for enterprise compliance",
        "Reduced SQL learning curve for analysts new to Microsoft Fabric"
      ],
      icon: Database,
      color: "green",
      link: "/case-study/fabric-sql-assistant"
    },
    {
      id: "fabricforge",
      title: "Automated Workspace Provisioning",
      techStack: "n8n + Microsoft Fabric + OpenAI",
      bullets: [
        "Reduced workspace setup time by 90%—from hours of manual config to 5 minutes",
        "Eliminated configuration errors with visual form builder and validation",
        "Generated deployment code automatically with AI-powered assistance"
      ],
      icon: Settings,
      color: "teal",
      link: "/case-study/fabricforge"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; text: string; bullet: string }> = {
      blue: {
        border: "border-blue-500/20 hover:border-blue-500/40",
        text: "text-blue-500",
        bullet: "text-blue-500"
      },
      purple: {
        border: "border-purple-500/20 hover:border-purple-500/40",
        text: "text-purple-500",
        bullet: "text-purple-500"
      },
      amber: {
        border: "border-amber-500/20 hover:border-amber-500/40",
        text: "text-amber-500",
        bullet: "text-amber-500"
      },
      green: {
        border: "border-green-500/20 hover:border-green-500/40",
        text: "text-green-500",
        bullet: "text-green-500"
      },
      teal: {
        border: "border-teal-500/20 hover:border-teal-500/40",
        text: "text-teal-500",
        bullet: "text-teal-500"
      },
      orange: {
        border: "border-orange-500/20 hover:border-orange-500/40",
        text: "text-orange-500",
        bullet: "text-orange-500"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="text-xs mb-4">Portfolio</Badge>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Projects That Delivered Results
              </h1>

              <p className="text-muted-foreground leading-relaxed">
                Real impact through data engineering, BI, and AI—measured in time saved, revenue protected, and efficiency gained.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-6">
                {caseStudies.map((study) => {
                  const colors = getColorClasses(study.color);
                  return (
                    <Link key={study.id} to={study.link} className="group">
                      <Card className={`transition-all duration-200 ${colors.border} hover:shadow-lg hover:bg-muted/30`}>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-start gap-4">
                            {/* Icon - Hidden on mobile for cleaner look */}
                            <div className={`hidden md:flex w-12 h-12 rounded-lg bg-muted/50 items-center justify-center flex-shrink-0`}>
                              <study.icon className={`h-6 w-6 ${colors.text}`} />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              {/* Title Row */}
                              <div className="flex items-start justify-between gap-4 mb-2">
                                <div className="flex items-center gap-3">
                                  {/* Mobile Icon */}
                                  <div className={`md:hidden w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center flex-shrink-0`}>
                                    <study.icon className={`h-5 w-5 ${colors.text}`} />
                                  </div>
                                  <div>
                                    <h2 className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                                      {study.title}
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                      {study.techStack}
                                    </p>
                                  </div>
                                </div>
                                <ArrowRight className={`h-5 w-5 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1`} />
                              </div>

                              {/* Bullet Points */}
                              <ul className="space-y-2 mt-4">
                                {study.bullets.map((bullet, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-sm">
                                    <CheckCircle2 className={`h-4 w-4 ${colors.bullet} flex-shrink-0 mt-0.5`} />
                                    <span className="text-muted-foreground leading-relaxed">{bullet}</span>
                                  </li>
                                ))}
                              </ul>

                              {/* CTA - Mobile */}
                              <div className={`mt-4 flex items-center gap-2 text-sm font-medium ${colors.text} md:hidden`}>
                                View Details
                                <ArrowRight className="h-4 w-4" />
                              </div>
                            </div>
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
        <section className="py-12 bg-muted/30 border-t">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-3">Let's Build Something Impactful</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Data Engineering | Business Intelligence | AI Integration
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="text-xs">Databricks</Badge>
                <Badge variant="secondary" className="text-xs">Power BI</Badge>
                <Badge variant="secondary" className="text-xs">dbt</Badge>
                <Badge variant="secondary" className="text-xs">Python</Badge>
                <Badge variant="secondary" className="text-xs">Microsoft Fabric</Badge>
                <Badge variant="secondary" className="text-xs">MCP Servers</Badge>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted/30 border-t py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Sulaiman Ahmed. Transforming Data into Strategic Insights.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudyGallery;
