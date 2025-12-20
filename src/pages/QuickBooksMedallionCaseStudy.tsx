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
  CheckCircle2,
  Code2,
  FileSpreadsheet,
  Clock,
  AlertTriangle,
  ArrowRight,
  Zap,
  Target,
  RefreshCw,
  Shield,
  ChevronRight,
  GitBranch,
  Table,
  Calculator,
  PieChart,
  Building2,
  Link,
  FileText,
  CreditCard,
  Receipt,
  Users,
  Wallet
} from "lucide-react";

const QuickBooksMedallionCaseStudy = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const keyResults = [
    { icon: Target, value: "99.999%", label: "P&L Accuracy", description: "Within $0.01 of QuickBooks" },
    { icon: Shield, value: "100%", label: "BS Equation Verified", description: "Assets = Liabilities + Equity" },
    { icon: Database, value: "15", label: "Star Schema Tables", description: "5 dimensions, 10 facts" },
  ];

  const challenges = [
    {
      icon: Link,
      title: "API Integration Complexity",
      description: "QuickBooks Online API requires OAuth 2.0 authentication with token refresh, rate limiting, and careful handling of multi-company environments."
    },
    {
      icon: AlertTriangle,
      title: "Double-Entry Accounting Complexity",
      description: "General Ledger transactions follow double-entry bookkeeping - every transaction has debits and credits that must balance. Misunderstanding this leads to incorrect financial reports."
    },
    {
      icon: Calculator,
      title: "Account Type Sign Conventions",
      description: "Different account types (Assets, Liabilities, Revenue, Expenses) require different sign conventions for proper P&L and Balance Sheet presentation."
    },
    {
      icon: RefreshCw,
      title: "Snapshot vs Transaction Data",
      description: "Balance Sheet requires point-in-time snapshots while P&L needs period-over-period transactions. Mixing these approaches causes reconciliation failures."
    }
  ];

  const solutionFeatures = [
    "Automated Python pipeline extracting data via QuickBooks OAuth 2.0 API",
    "Bronze layer preserving raw JSON responses for complete audit trail",
    "Silver layer with business rules, account mappings, and data validation",
    "Gold layer with star schema optimized for Power BI DirectQuery",
    "General Ledger double-entry processing with proper debit/credit handling",
    "Dedicated snapshot tables for accurate Balance Sheet reporting",
    "100+ DAX measures organized in semantic folders",
    "Real-time reconciliation page validating BS equation continuously"
  ];

  const beforeAfter = [
    {
      area: "Data Access",
      before: "Manual QuickBooks report exports, copy to Excel",
      after: "Automated API extraction with Python pipeline"
    },
    {
      area: "Data Model",
      before: "Flat Excel tables, no relationships",
      after: "15-table star schema with proper fact/dimension design"
    },
    {
      area: "P&L Accuracy",
      before: "Variance of $100s-$1000s from source",
      after: "99.999% accuracy (within $0.01)"
    },
    {
      area: "Balance Sheet",
      before: "Manual period snapshots, equation never verified",
      after: "Automated snapshots, 100% equation verification"
    },
    {
      area: "Report Creation",
      before: "Days to create manual financial reports",
      after: "Real-time dashboards with drill-down capability"
    }
  ];

  const techStack = [
    { name: "Power BI", role: "Visualization & DAX" },
    { name: "Python", role: "ETL Pipeline" },
    { name: "QuickBooks API", role: "Data Source" },
    { name: "DAX", role: "100+ Measures" },
  ];

  const dashboardPages = [
    { name: "Executive Dashboard", description: "High-level KPIs, revenue trends, profitability metrics" },
    { name: "P&L Statement", description: "Income statement with proper account hierarchy and GL drill-down" },
    { name: "Balance Sheet", description: "Financial position with Assets = Liabilities + Equity verification" },
    { name: "Cash Flow Statement", description: "Operating, investing, and financing cash flows" },
    { name: "AR Analytics", description: "Accounts receivable aging, collection rates, customer analysis" },
    { name: "AP Analytics", description: "Accounts payable aging, payment patterns, vendor analysis" },
    { name: "Reconciliation & Audit", description: "Balance Sheet equation verification and data quality checks" },
  ];

  const dataModelTables = {
    dimensions: [
      { name: "Dim Calendar", description: "Date dimension with fiscal periods" },
      { name: "Dim Account", description: "Chart of accounts hierarchy" },
      { name: "Dim Customer", description: "Customer master data" },
      { name: "Dim Vendor", description: "Vendor master data" },
      { name: "Dim Aging Bucket", description: "Aging categories (Current, 1-30, 31-60, etc.)" },
    ],
    facts: [
      { name: "Fact General Ledger", description: "All GL transactions with debit/credit" },
      { name: "Fact Balance Sheet Snapshot", description: "Point-in-time balance snapshots" },
      { name: "Fact Invoice", description: "Customer invoices" },
      { name: "Fact Bill", description: "Vendor bills" },
      { name: "Fact Payment", description: "Payment transactions" },
      { name: "Fact AR Aging", description: "AR aging balances" },
      { name: "Fact AP Aging", description: "AP aging balances" },
    ]
  };

  const daxMeasureFolders = [
    { folder: "P&L Metrics", count: 20, examples: ["Total Revenue", "Gross Profit", "Net Income", "Operating Expenses"] },
    { folder: "Balance Sheet", count: 25, examples: ["Total Assets", "Total Liabilities", "Total Equity", "Working Capital"] },
    { folder: "Cash Flow", count: 15, examples: ["Operating Cash Flow", "Investing Cash Flow", "Financing Cash Flow"] },
    { folder: "AR Analytics", count: 14, examples: ["AR Outstanding", "Collection Rate", "Days Sales Outstanding"] },
    { folder: "AP Analytics", count: 13, examples: ["AP Outstanding", "Payment Rate", "Days Payable Outstanding"] },
    { folder: "Financial Ratios", count: 15, examples: ["Current Ratio", "Quick Ratio", "Debt-to-Equity", "ROE"] },
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
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Badge variant="outline" className="text-xs">QuickBooks Integration</Badge>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-primary">QuickBooks to Power BI</span>: Building an Enterprise Financial Analytics Platform with Medallion Architecture
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl">
                How I transformed raw QuickBooks Online data into a production-ready financial reporting system
                using a 3-tier Medallion Architecture, achieving 99.999% P&L accuracy and 100% Balance Sheet
                equation verification through proper double-entry accounting principles.
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
                  QuickBooks Online is a powerful accounting system, but extracting its data for advanced analytics
                  presents significant challenges. The goal was to build an automated pipeline that pulls data via API,
                  transforms it using proper accounting principles, and delivers real-time financial dashboards in Power BI.
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

              {/* Critical Insight Box */}
              <Card className="mt-8 border-red-500/30 bg-red-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-red-500">The Critical Insight</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        The most important lesson learned: <strong className="text-foreground">Balance Sheet reporting requires snapshot tables,
                        not transaction aggregation.</strong>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Initially, I tried to calculate Balance Sheet values by aggregating General Ledger transactions.
                        This works for P&L (which is period-based), but fails for Balance Sheet because it represents
                        a <strong className="text-foreground">point-in-time position</strong>, not period activity.
                        The solution was creating dedicated snapshot fact tables that store account balances at each reporting period.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Solution - Medallion Architecture */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-green-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">The Solution: Medallion Architecture</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-10">
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    I designed and implemented a production-ready financial analytics platform using a
                    <strong className="text-foreground"> 3-tier Medallion Architecture</strong> that transforms
                    raw QuickBooks API data into executive-ready financial dashboards with complete accuracy verification.
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
                          <Database className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Bronze Layer</CardTitle>
                          <p className="text-sm text-muted-foreground">Raw API Ingestion</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Raw QuickBooks API JSON responses stored exactly as received. Complete audit trail with no transformation.</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">Accounts</Badge>
                        <Badge variant="secondary" className="text-xs">Invoices</Badge>
                        <Badge variant="secondary" className="text-xs">Bills</Badge>
                        <Badge variant="secondary" className="text-xs">Payments</Badge>
                        <Badge variant="secondary" className="text-xs">JournalEntries</Badge>
                      </div>
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
                          <p className="text-sm text-muted-foreground">Cleansed & Validated</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Business rules applied: account type mapping, sign conventions, date standardization, GL debit/credit processing.</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">Account Hierarchy</Badge>
                        <Badge variant="secondary" className="text-xs">Sign Conventions</Badge>
                        <Badge variant="secondary" className="text-xs">Debit/Credit Logic</Badge>
                      </div>
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
                          <p className="text-sm text-muted-foreground">BI-Ready Star Schema</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Denormalized star schema with 5 dimensions and 10 fact tables. Optimized for Power BI with snapshot tables for Balance Sheet.</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">Star Schema</Badge>
                        <Badge variant="secondary" className="text-xs">Snapshot Tables</Badge>
                        <Badge variant="secondary" className="text-xs">100+ Measures</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Model Deep Dive */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Table className="h-5 w-5 text-blue-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Star Schema Data Model</h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The Gold layer implements a proper star schema with clearly separated dimension and fact tables.
                This design enables fast Power BI queries and supports complex financial calculations.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Dimension Tables */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Layers className="h-5 w-5 text-blue-500" />
                      Dimension Tables (5)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {dataModelTables.dimensions.map((table, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-blue-500/5 border border-blue-500/20">
                        <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-blue-500">D</span>
                        </div>
                        <div>
                          <div className="font-medium text-sm">{table.name}</div>
                          <div className="text-xs text-muted-foreground">{table.description}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Fact Tables */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-green-500" />
                      Fact Tables (10)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {dataModelTables.facts.map((table, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                        <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-green-500">F</span>
                        </div>
                        <div>
                          <div className="font-medium text-sm">{table.name}</div>
                          <div className="text-xs text-muted-foreground">{table.description}</div>
                        </div>
                      </div>
                    ))}
                    <div className="text-xs text-muted-foreground italic pt-2">
                      + 3 more fact tables (Expense, Deposit, Bill Payment)
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Key Design Decision */}
              <Card className="mt-8 border-green-500/30 bg-green-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Key Design Decision: Separate Snapshot Tables</h3>
                      <p className="text-sm text-muted-foreground">
                        The <strong className="text-foreground">Fact Balance Sheet Snapshot</strong> table stores
                        account balances at each month-end. This is critical because Balance Sheet values are
                        cumulative (total cash as of Dec 31) while P&L values are periodic (revenue for December).
                        Using transaction tables for Balance Sheet would require running totals back to company inception—slow and error-prone.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* DAX Measures Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-purple-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">100+ DAX Measures</h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The semantic model includes over 100 DAX measures organized into logical folders.
                This organization follows Power BI best practices for maintainability and discoverability.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {daxMeasureFolders.map((folder, index) => (
                  <Card key={index} className="border-purple-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-sm">{folder.folder}</h3>
                        <Badge variant="secondary">{folder.count} measures</Badge>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {folder.examples.map((example, idx) => (
                          <span key={idx} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                            {example}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Code Example */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Example: P&L Calculation with Account Type Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 rounded-lg bg-slate-900 text-slate-100 font-mono text-sm overflow-x-auto">
                    <div className="text-slate-400 mb-2">// P&L measures must handle account type sign conventions</div>
                    <div className="text-blue-400">_PL_Total Revenue =</div>
                    <div className="text-slate-300 pl-4">VAR _RevenueAccounts = </div>
                    <div className="text-slate-300 pl-8">FILTER('Dim Account', 'Dim Account'[account_type] = "Income")</div>
                    <div className="text-slate-300 pl-4">RETURN</div>
                    <div className="text-slate-300 pl-8">CALCULATE(</div>
                    <div className="text-slate-300 pl-12">SUM('Fact General Ledger'[amount]),</div>
                    <div className="text-slate-300 pl-12">_RevenueAccounts</div>
                    <div className="text-slate-300 pl-8">) * -1 <span className="text-slate-400">// Credits are negative in GL</span></div>
                    <div className="mt-4 text-slate-400">// Balance Sheet uses snapshot table, not GL aggregation</div>
                    <div className="text-blue-400">_BS_Total Assets =</div>
                    <div className="text-slate-300 pl-4">CALCULATE(</div>
                    <div className="text-slate-300 pl-8">SUM('Fact Balance Sheet Snapshot'[balance]),</div>
                    <div className="text-slate-300 pl-8">'Dim Account'[account_category] = "Asset"</div>
                    <div className="text-slate-300 pl-4">)</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Double-Entry Accounting Explained */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Calculator className="h-5 w-5 text-amber-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Understanding Double-Entry Accounting</h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The foundation of accurate financial reporting is understanding how double-entry bookkeeping works.
                Every transaction has <strong className="text-foreground">debits and credits that must balance</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-500">
                      <TrendingUp className="h-5 w-5" />
                      Debits Increase
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Wallet className="h-4 w-4 text-muted-foreground" />
                        <span><strong>Assets</strong> (Cash, AR, Equipment)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Receipt className="h-4 w-4 text-muted-foreground" />
                        <span><strong>Expenses</strong> (Rent, Salaries, Utilities)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-500">
                      <TrendingUp className="h-5 w-5" />
                      Credits Increase
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <span><strong>Liabilities</strong> (AP, Loans, Deferred Revenue)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span><strong>Equity</strong> (Owner's Equity, Retained Earnings)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span><strong>Revenue</strong> (Sales, Service Income)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Transaction Example */}
              <Card>
                <CardHeader>
                  <CardTitle>Example: Recording a $1,000 Sale</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h4 className="font-semibold mb-3">Journal Entry</h4>
                      <div className="space-y-2 font-mono text-sm">
                        <div className="flex justify-between">
                          <span>Debit: Accounts Receivable</span>
                          <span className="text-blue-500">$1,000</span>
                        </div>
                        <div className="flex justify-between pl-4">
                          <span>Credit: Revenue</span>
                          <span className="text-green-500">($1,000)</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h4 className="font-semibold mb-3">Impact</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>AR (Asset) increases by $1,000</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>Revenue increases by $1,000</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>Debits = Credits (balanced!)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="py-16 bg-background">
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
        <section className="py-16 bg-muted/30">
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
                      QuickBooks Financial Analytics Platform
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">Interactive</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      title="QuickBooks Financial Analytics"
                      width="100%"
                      height="100%"
                      src="https://app.powerbi.com/view?r=eyJrIjoiY2UzMDZmNjMtMGE4Ny00NjgzLWIyMTQtNTcwMGIzM2IzMDAwIiwidCI6ImNhM2YwNTZlLTQ0NDgtNDI1YS05MmE5LWU5ZDMyOTFlYTJmMyJ9"
                      frameBorder="0"
                      allowFullScreen={true}
                      className="border-0"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Dashboard Pages */}
              <div className="mt-8">
                <h3 className="font-semibold mb-4">7 Financial Dashboard Pages</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {dashboardPages.map((page, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background border">
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

        {/* Pipeline Architecture */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center">
                  <GitBranch className="h-5 w-5 text-indigo-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Python ETL Pipeline</h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The pipeline is built with Python, using a modular architecture that separates concerns
                and makes each component independently testable and maintainable.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Pipeline Structure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 font-mono text-sm">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>config.py <span className="text-muted-foreground">- API credentials, paths</span></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>qbo_api.py <span className="text-muted-foreground">- OAuth, API calls</span></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>bronze_layer.py <span className="text-muted-foreground">- Raw ingestion</span></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>silver_layer.py <span className="text-muted-foreground">- Transformations</span></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>gold_layer.py <span className="text-muted-foreground">- Star schema</span></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>main.py <span className="text-muted-foreground">- Orchestration</span></span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Key Python Libraries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <span className="font-medium text-sm">requests</span>
                        <span className="text-xs text-muted-foreground">QuickBooks API calls</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <span className="font-medium text-sm">pandas</span>
                        <span className="text-xs text-muted-foreground">Data transformation</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <span className="font-medium text-sm">python-dotenv</span>
                        <span className="text-xs text-muted-foreground">Credential management</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <span className="font-medium text-sm">json</span>
                        <span className="text-xs text-muted-foreground">API response parsing</span>
                      </div>
                    </div>
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
                <h2 className="text-2xl md:text-3xl font-bold">Results & Impact</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-green-500 mb-2">99.999%</div>
                    <div className="text-sm font-medium">P&L Accuracy</div>
                    <div className="text-xs text-muted-foreground">Within $0.01 variance</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
                    <div className="text-sm font-medium">BS Equation Verified</div>
                    <div className="text-xs text-muted-foreground">A = L + E always</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-purple-500 mb-2">100+</div>
                    <div className="text-sm font-medium">DAX Measures</div>
                    <div className="text-xs text-muted-foreground">Organized in folders</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-amber-500 mb-2">15</div>
                    <div className="text-sm font-medium">Star Schema Tables</div>
                    <div className="text-xs text-muted-foreground">5 dims, 10 facts</div>
                  </CardContent>
                </Card>
              </div>

              {/* Key Learnings */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Key Learnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">1</div>
                      <div>
                        <h4 className="font-semibold text-sm">Balance Sheet requires snapshot tables</h4>
                        <p className="text-sm text-muted-foreground">Point-in-time balances, not transaction aggregation. This was the biggest "aha" moment.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">2</div>
                      <div>
                        <h4 className="font-semibold text-sm">Account type sign conventions matter</h4>
                        <p className="text-sm text-muted-foreground">Revenue credits need to be inverted for positive display. Assets debits are naturally positive.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">3</div>
                      <div>
                        <h4 className="font-semibold text-sm">Reconciliation pages build trust</h4>
                        <p className="text-sm text-muted-foreground">A dedicated page showing A = L + E proves the data model is correct to stakeholders.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">4</div>
                      <div>
                        <h4 className="font-semibold text-sm">Measure Killer is essential for production</h4>
                        <p className="text-sm text-muted-foreground">Optimized the report by removing unused measures and columns, improving performance significantly.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-blue-500/10 border-t">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need QuickBooks Analytics for Your Business?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you need API integration, custom financial dashboards, or enterprise-grade
                analytics solutions, I bring the technical expertise and accounting knowledge to deliver accurate,
                actionable insights from your QuickBooks data.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge className="text-sm px-4 py-2">QuickBooks API</Badge>
                <Badge className="text-sm px-4 py-2">Medallion Architecture</Badge>
                <Badge className="text-sm px-4 py-2">Power BI</Badge>
                <Badge className="text-sm px-4 py-2">Financial Modeling</Badge>
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

export default QuickBooksMedallionCaseStudy;
