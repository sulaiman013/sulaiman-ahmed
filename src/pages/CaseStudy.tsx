import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Database,
  Layers,
  Globe,
  CheckCircle2,
  Code2,
  FileSpreadsheet,
  Building2,
  Calculator,
  Clock,
  AlertTriangle,
  ArrowRight,
  Zap,
  Target,
  Users,
  RefreshCw,
  Shield,
  ChevronRight
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const CaseStudy = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const keyResults = [
    { icon: Database, value: "120,846", label: "Transactions Consolidated", description: "From 3 disparate systems" },
    { icon: Clock, value: "25 sec", label: "Pipeline Runtime", description: "End-to-end processing" },
    { icon: Globe, value: "3", label: "Global Entities Unified", description: "USA, Nordic, Asia Pacific" },
  ];

  const challenges = [
    {
      icon: AlertTriangle,
      title: "Fragmented Data Sources",
      description: "Three subsidiaries using different systems (SAP, NetSuite, Excel) with inconsistent formats, encodings, and date conventions."
    },
    {
      icon: DollarSign,
      title: "Multi-Currency Complexity",
      description: "Transactions in USD, SEK, and VND requiring context-aware FX conversion following GAAP standards."
    },
    {
      icon: FileSpreadsheet,
      title: "Manual Consolidation",
      description: "Finance team spending hours manually reconciling data across entities with no unified reporting infrastructure."
    },
    {
      icon: Shield,
      title: "Data Quality Issues",
      description: "Unvalidated journal entries, unbalanced accounts, and no systematic audit trail for regulatory compliance."
    }
  ];

  const solutionFeatures = [
    "Automated ETL pipeline processing 120K+ transactions in 25 seconds",
    "Smart FX conversion: Average rates for P&L, Spot rates for Balance Sheet, Historical for Equity",
    "Real-time Balance Sheet validation (Assets = Liabilities + Equity)",
    "SCD Type 2 handling for organizational changes",
    "Pre-aggregated Gold layer optimized for Power BI performance",
    "Complete audit trail from source to dashboard"
  ];

  const beforeAfter = [
    {
      area: "Data Access",
      before: "Manual exports from 3 systems, copy-paste into Excel",
      after: "Single automated pipeline with unified data model"
    },
    {
      area: "Reporting Cycle",
      before: "2-3 days for monthly close reports",
      after: "Real-time dashboards with 25-second refresh"
    },
    {
      area: "Currency Handling",
      before: "Manual FX lookups, inconsistent rate application",
      after: "Automated GAAP-compliant conversion logic"
    },
    {
      area: "Data Quality",
      before: "Errors discovered during audit, reactive fixes",
      after: "Proactive validation with automated flagging"
    },
    {
      area: "Decision Making",
      before: "Delayed insights, outdated information",
      after: "Executive dashboards with drill-down capability"
    }
  ];

  const techStack = [
    { name: "Power BI", role: "Visualization & Reporting" },
    { name: "MySQL", role: "Data Warehouse" },
    { name: "Python", role: "ETL Pipeline" },
    { name: "DAX", role: "Business Logic & Metrics" },
  ];

  const dashboardPages = [
    { name: "Executive Dashboard", description: "CFO overview with KPIs, margins, and entity performance" },
    { name: "Balance Sheet", description: "Financial position with liquidity and leverage ratios" },
    { name: "Cost Analysis", description: "COGS & OpEx breakdown with profitability waterfall" },
    { name: "Entity Performance", description: "Multi-entity comparison and benchmarking" },
    { name: "Revenue Trends", description: "Time-series analysis with SVG-rendered charts" },
    { name: "Account Drill-Down", description: "Transaction-level exploration and audit" },
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
                <Badge variant="outline" className="text-xs">Financial Analytics</Badge>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-primary">Lumina Lux Corp</span> Transforms Global Financial Reporting with Enterprise Analytics Platform
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl">
                How a multi-national corporation consolidated $166.7M+ in financial data from three global
                subsidiaries into a unified, real-time reporting system using a 3-tier medallion architecture.
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

        {/* Key Results - Value Pillars */}
        <section className="py-12 bg-background border-y">
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
                  Lumina Lux Corporation operates across three continents with subsidiaries in the USA, Sweden,
                  and Vietnam. Each entity maintained its own financial system, creating significant barriers to
                  consolidated reporting and executive decision-making.
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

              {/* Entity Details */}
              <div className="mt-10 grid md:grid-cols-3 gap-4">
                <Card className="border-blue-500/30 bg-blue-500/5">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl mb-2">🇺🇸</div>
                    <h3 className="font-bold">Lumina Lux USA</h3>
                    <p className="text-sm text-muted-foreground mb-2">SAP ERP System</p>
                    <Badge variant="secondary">54,911 transactions</Badge>
                    <p className="text-xs text-muted-foreground mt-2">USD • UTF-8 • YYYY-MM-DD</p>
                  </CardContent>
                </Card>
                <Card className="border-amber-500/30 bg-amber-500/5">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl mb-2">🇸🇪</div>
                    <h3 className="font-bold">Nordic AB</h3>
                    <p className="text-sm text-muted-foreground mb-2">NetSuite</p>
                    <Badge variant="secondary">36,612 transactions</Badge>
                    <p className="text-xs text-muted-foreground mt-2">SEK • UTF-16 • YYYY-MM-DD</p>
                  </CardContent>
                </Card>
                <Card className="border-green-500/30 bg-green-500/5">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl mb-2">🇻🇳</div>
                    <h3 className="font-bold">Lumina Asia Pacific</h3>
                    <p className="text-sm text-muted-foreground mb-2">Excel-based</p>
                    <Badge variant="secondary">29,323 transactions</Badge>
                    <p className="text-xs text-muted-foreground mt-2">VND • UTF-8 • DD/MM/YYYY</p>
                  </CardContent>
                </Card>
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
                    I designed and implemented a production-ready financial consolidation platform using a
                    <strong className="text-foreground"> 3-tier Medallion Architecture</strong> that transforms
                    raw financial data into executive-ready insights.
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

                {/* Medallion Architecture Visual */}
                <div className="space-y-4">
                  <Card className="border-amber-600/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-amber-600" />
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center">
                          <Layers className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Bronze Layer</CardTitle>
                          <p className="text-sm text-muted-foreground">Raw Ingestion</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Zero transformation, exact source replica with full audit trail</p>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center">
                    <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                  </div>

                  <Card className="border-slate-400/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-slate-400" />
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center">
                          <RefreshCw className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Silver Layer</CardTitle>
                          <p className="text-sm text-muted-foreground">Cleansed & Conformed</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Standardized dates, FX conversion, COA mapping, data validation</p>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center">
                    <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                  </div>

                  <Card className="border-yellow-500/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-500" />
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
                          <BarChart3 className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Gold Layer</CardTitle>
                          <p className="text-sm text-muted-foreground">BI-Ready Analytics</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Denormalized star schema, pre-aggregated for Power BI performance</p>
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

        {/* Live Dashboard */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Live Dashboard</h2>
              </div>

              <Card className="overflow-hidden shadow-xl">
                <CardHeader className="bg-muted/30 border-b">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      Lumina Lux Financial Analytics Platform
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">Interactive</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      title="Lumina Lux Financials"
                      width="100%"
                      height="100%"
                      src="https://app.powerbi.com/view?r=eyJrIjoiNzNiMGIxZGEtOTYzOC00NjU3LWI5ODktNGU2NzVjZDYxZmMwIiwidCI6ImNhM2YwNTZlLTQ0NDgtNDI1YS05MmE5LWU5ZDMyOTFlYTJmMyJ9"
                      frameBorder="0"
                      allowFullScreen={true}
                      className="border-0"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Dashboard Pages */}
              <div className="mt-8">
                <h3 className="font-semibold mb-4">6 Executive Dashboard Pages</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {dashboardPages.map((page, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{page.name}</div>
                        <div className="text-xs text-muted-foreground">{page.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Deep Dive - DAX */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-purple-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Technical Implementation</h2>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Why Dashboard Pages Render as HTML</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Each dashboard page is powered by a single DAX measure that returns complete HTML/SVG content.
                    This architectural decision enables pixel-perfect financial reporting with enterprise-grade design control.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <Zap className="h-5 w-5 text-yellow-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">Performance</h4>
                        <p className="text-xs text-muted-foreground">Single render vs 10+ individual visuals</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <Target className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">Design Control</h4>
                        <p className="text-xs text-muted-foreground">Custom layouts, gradients, SVG charts</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <Building2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">Enterprise Branding</h4>
                        <p className="text-xs text-muted-foreground">Board-ready executive presentations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <FileSpreadsheet className="h-5 w-5 text-purple-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">Print-Ready</h4>
                        <p className="text-xs text-muted-foreground">Clean PDF exports for regulatory filings</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900 text-slate-100 font-mono text-sm overflow-x-auto">
                    <div className="text-slate-400 mb-2">// 8 DAX measures, 200-600 lines each</div>
                    <div className="text-blue-400">Executive_Dashboard =</div>
                    <div className="text-slate-300 pl-4">VAR _Revenue = CALCULATE(SUM(fact[amount_usd]), ...)</div>
                    <div className="text-slate-300 pl-4">VAR _GrossMargin = DIVIDE([Gross Profit], [Revenue])</div>
                    <div className="text-slate-400 pl-4">// ... 100+ financial calculations ...</div>
                    <div className="text-green-400 pl-4">RETURN "&lt;html&gt;...complete dashboard...&lt;/html&gt;"</div>
                  </div>
                </CardContent>
              </Card>

              {/* FX Conversion Rules */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-primary" />
                    GAAP-Compliant FX Conversion
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <Badge className="mb-3">P&L Items</Badge>
                      <p className="text-sm font-medium">Average Monthly Rate</p>
                      <p className="text-xs text-muted-foreground mt-1">Revenue, COGS, OpEx</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <Badge className="mb-3">Balance Sheet</Badge>
                      <p className="text-sm font-medium">Spot Rate (Period-End)</p>
                      <p className="text-xs text-muted-foreground mt-1">Assets, Liabilities</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <Badge className="mb-3">Equity</Badge>
                      <p className="text-sm font-medium">Historical Rate</p>
                      <p className="text-xs text-muted-foreground mt-1">Share Capital (locked)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Results & Impact</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-green-500 mb-2">$166.7M+</div>
                    <div className="text-sm font-medium">Financial Volume</div>
                    <div className="text-xs text-muted-foreground">Consolidated annually</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
                    <div className="text-sm font-medium">DAX Measures</div>
                    <div className="text-xs text-muted-foreground">Financial KPIs & ratios</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-purple-500 mb-2">58</div>
                    <div className="text-sm font-medium">GL Accounts</div>
                    <div className="text-xs text-muted-foreground">5-level hierarchy</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-amber-500 mb-2">100%</div>
                    <div className="text-sm font-medium">Audit Ready</div>
                    <div className="text-xs text-muted-foreground">Complete data lineage</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-blue-500/10 border-t">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Financial Reporting?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you need multi-entity consolidation, custom financial dashboards, or enterprise-grade
                analytics solutions, I bring the technical expertise and financial acumen to deliver actionable insights.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge className="text-sm px-4 py-2">GAAP Compliant</Badge>
                <Badge className="text-sm px-4 py-2">Multi-Currency</Badge>
                <Badge className="text-sm px-4 py-2">Enterprise Power BI</Badge>
                <Badge className="text-sm px-4 py-2">Audit-Ready Pipelines</Badge>
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

export default CaseStudy;
