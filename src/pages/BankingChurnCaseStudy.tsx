import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  Database,
  Layers,
  CheckCircle2,
  Code2,
  Clock,
  AlertTriangle,
  ArrowRight,
  Target,
  RefreshCw,
  Shield,
  ChevronRight,
  GitBranch,
  Table,
  Users,
  Brain,
  Workflow,
  Server,
  FileCode,
  Cpu,
  Mail,
  Building2,
  Smartphone,
  FileSpreadsheet,
  Zap,
  Activity,
  UserX,
  DollarSign
} from "lucide-react";

const BankingChurnCaseStudy = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const keyResults = [
    { icon: Users, value: "4→1", label: "Customer Unification", description: "Unified IDs from 4 systems" },
    { icon: Brain, value: "30+", label: "ML Features", description: "Engineered for churn prediction" },
    { icon: Target, value: "$5-6M", label: "Annual Impact", description: "Preventable churn savings" },
  ];

  const challenges = [
    {
      icon: Database,
      title: "Siloed Data Across 4 Systems",
      description: "Customer information scattered across ERPNext, Salesforce, Supabase, and Google Sheets—each with different ID systems making unified analysis impossible."
    },
    {
      icon: Clock,
      title: "40+ Hours Manual Reconciliation",
      description: "Monthly data reconciliation required extensive manual effort to match customers across systems, leading to delayed insights and human error."
    },
    {
      icon: UserX,
      title: "No Churn Visibility",
      description: "No capability to identify at-risk customers until they had already left. Reactive instead of proactive customer retention."
    },
    {
      icon: DollarSign,
      title: "$5-6M Annual Revenue Loss",
      description: "Estimated revenue loss due to preventable customer churn that could have been avoided with proactive intervention."
    }
  ];

  const solutionFeatures = [
    "Automated Python ingestion from 4 source systems via REST APIs and OAuth 2.0",
    "Bronze layer preserving raw data with complete audit trail and metadata",
    "Email-based entity resolution unifying customers across all systems",
    "Silver layer with dimensional modeling and 43 data quality tests",
    "Gold layer with customer_360 view and 30+ ML-ready features",
    "Ensemble ML model for churn prediction with risk scoring",
    "Actionable high-risk customer list with recommended retention actions",
    "CI/CD automation with GitHub Actions for dbt testing and deployment"
  ];

  const beforeAfter = [
    {
      area: "Customer View",
      before: "4 separate systems, different IDs",
      after: "Single unified customer_360 table"
    },
    {
      area: "Data Reconciliation",
      before: "40+ hours/month manual effort",
      after: "Automated daily refresh"
    },
    {
      area: "Churn Prediction",
      before: "None - reactive response only",
      after: "ML-based proactive risk scoring"
    },
    {
      area: "Retention Actions",
      before: "Generic campaigns for all",
      after: "Personalized actions per customer"
    },
    {
      area: "Data Freshness",
      before: "Weekly manual updates",
      after: "Daily automated pipeline"
    }
  ];

  const techStack = [
    { name: "Databricks", role: "Data Platform" },
    { name: "dbt", role: "Transformations" },
    { name: "Python", role: "Ingestion & ML" },
    { name: "Unity Catalog", role: "Governance" },
  ];

  const sourceSystems = [
    { name: "ERPNext", icon: Building2, description: "Core banking - customers, transactions", volume: "~500 customers, 8.5K transactions" },
    { name: "Salesforce", icon: Users, description: "CRM - contacts, support cases, tasks", volume: "~1,500 support cases" },
    { name: "Supabase", icon: Smartphone, description: "Digital channels - app sessions, events", volume: "~5,000+ app sessions" },
    { name: "Google Sheets", icon: FileSpreadsheet, description: "Legacy - branches, RM notes", volume: "~50 customer notes" },
  ];

  const dataModelTables = {
    silver: [
      { name: "dim_customer_unified", description: "Master customer dimension - unified across all systems" },
      { name: "dim_geography", description: "Territory hierarchy for geographic analysis" },
      { name: "dim_branch", description: "Bank branch locations and managers" },
      { name: "dim_product", description: "Product/service catalog" },
      { name: "fct_transactions", description: "All banking transactions" },
      { name: "fct_support_cases", description: "Support tickets with priority scoring" },
      { name: "fct_digital_engagement", description: "Daily app usage aggregations" },
    ],
    gold: [
      { name: "customer_360", description: "Complete 360° customer view with 50+ attributes" },
      { name: "customer_features", description: "ML-ready feature table with 30+ engineered features" },
      { name: "agg_churn_by_segment", description: "Pre-aggregated metrics by territory, group, tenure" },
      { name: "high_risk_customers", description: "Actionable retention list with recommended actions" },
    ]
  };

  const mlFeatures = [
    { category: "Demographics", features: ["gender_encoded", "customer_type_encoded", "region_encoded"] },
    { category: "Tenure", features: ["tenure_days", "tenure_risk_score", "tenure_segment"] },
    { category: "Transactions", features: ["total_transactions", "transaction_frequency", "inactivity_risk_score"] },
    { category: "Support", features: ["complaint_rate", "has_open_complaint", "avg_resolution_days"] },
    { category: "Digital", features: ["app_usage_frequency", "is_digitally_active", "sessions_30d"] },
    { category: "Composite", features: ["churn_risk_score", "engagement_health_score", "combined_risk"] },
  ];

  const pipelineStages = [
    { name: "Bronze", tables: 11, description: "Raw data from all 4 sources", color: "amber" },
    { name: "Staging", tables: 11, description: "Normalized views for transformation", color: "slate" },
    { name: "Silver", tables: 7, description: "Dimensions + Facts with tests", color: "slate" },
    { name: "Gold", tables: 4, description: "Analytics & ML-ready tables", color: "yellow" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-orange-500/10 via-orange-500/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="outline" className="text-xs">Case Study</Badge>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Badge variant="outline" className="text-xs">Data Engineering</Badge>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Badge variant="outline" className="text-xs">Machine Learning</Badge>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-orange-500">Banking Customer Churn</span>: End-to-End ML Platform on Databricks with Entity Resolution
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl">
                How I unified fragmented customer data from 4 disparate systems into a production-ready
                ML platform that predicts customer churn and delivers personalized retention recommendations—saving
                an estimated $5-6M annually in preventable churn.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {techStack.map((tech, index) => (
                  <Badge key={index} className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 px-3 py-1">
                    {tech.name}
                  </Badge>
                ))}
              </div>

              <a
                href="https://github.com/sulaiman013/banking-churn-databricks"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              >
                <GitBranch className="h-4 w-4" />
                View on GitHub
              </a>
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
                    <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                      <result.icon className="h-7 w-7 text-orange-500" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{result.value}</div>
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
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">The Challenge</h2>
              </div>

              <div className="mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Apex National Bank faced a critical data fragmentation issue: customer information was scattered
                  across 4 different systems, each with its own ID format. This made it impossible to get a unified
                  view of customers, predict churn, or take proactive retention actions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {challenges.map((challenge, index) => (
                  <Card key={index} className="border-red-500/20 bg-background">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                          <challenge.icon className="h-5 w-5 text-red-500" />
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

              {/* Core Problem Box */}
              <Card className="mt-8 border-orange-500/30 bg-orange-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-orange-500">The Core Problem: Identity Resolution</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Each system used <strong className="text-foreground">different customer identifiers</strong>:
                      </p>
                      <div className="grid md:grid-cols-2 gap-2 font-mono text-xs">
                        <div className="p-2 rounded bg-muted/50">ERPNext: <span className="text-orange-500">CUST-00001</span></div>
                        <div className="p-2 rounded bg-muted/50">Salesforce: <span className="text-orange-500">003Hs00001ABC</span></div>
                        <div className="p-2 rounded bg-muted/50">Supabase: <span className="text-orange-500">john@email.com</span></div>
                        <div className="p-2 rounded bg-muted/50">Google Sheets: <span className="text-orange-500">Email + notes</span></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">
                        The fundamental question: <em>"How do you know if CUST-00001 in ERPNext is the same person as 003Hs00001ABC in Salesforce?"</em>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Architecture Overview Image */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <Workflow className="h-5 w-5 text-orange-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Solution Architecture</h2>
              </div>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/banking-churn-architecture.png"
                    alt="Banking Churn Platform Architecture Overview"
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>

              <p className="text-sm text-muted-foreground mt-4 text-center">
                End-to-end architecture: 4 source systems → Medallion layers → ML predictions → Dashboards
              </p>
            </div>
          </div>
        </section>

        {/* Data Sources Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Server className="h-5 w-5 text-blue-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">4 Source Systems Unified</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {sourceSystems.map((source, index) => (
                  <Card key={index} className="border-blue-500/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                          <source.icon className="h-6 w-6 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{source.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{source.description}</p>
                          <Badge variant="secondary" className="text-xs">{source.volume}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/banking-churn-ingestion.png"
                    alt="Data Ingestion Architecture"
                    className="w-full h-auto"
                  />
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
                    I designed a production-ready data platform using a
                    <strong className="text-foreground"> 4-tier Medallion Architecture</strong> with
                    dbt for transformations, Unity Catalog for governance, and scikit-learn for ML.
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

                {/* Pipeline Stages Visual */}
                <div className="space-y-4">
                  {pipelineStages.map((stage, index) => (
                    <Card key={index} className={`border-${stage.color}-500/30 relative overflow-hidden`}>
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-${stage.color === 'amber' ? 'amber' : stage.color === 'yellow' ? 'yellow' : 'slate'}-${stage.color === 'slate' ? '400' : '500'}`} />
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full bg-${stage.color === 'amber' ? 'amber' : stage.color === 'yellow' ? 'yellow' : 'slate'}-${stage.color === 'slate' ? '400' : '500'} flex items-center justify-center`}>
                              <Database className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{stage.name} Layer</h3>
                              <p className="text-sm text-muted-foreground">{stage.description}</p>
                            </div>
                          </div>
                          <Badge variant="secondary">{stage.tables} tables</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Transformation Diagram */}
              <Card className="mt-8 overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/banking-churn-transformation.png"
                    alt="Data Transformation and Modeling Architecture"
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Entity Resolution - Core Innovation */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-purple-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Core Innovation: Email-Based Entity Resolution</h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The key breakthrough was implementing <strong className="text-foreground">email-based entity resolution</strong> to
                unify customers across all 4 systems into a single unified identifier.
              </p>

              <Card className="overflow-hidden mb-8">
                <CardContent className="p-0">
                  <img
                    src="/banking-churn-entity-resolution.png"
                    alt="Entity Resolution Process"
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>

              {/* Resolution Logic */}
              <Card>
                <CardHeader>
                  <CardTitle>Resolution Logic (dim_customer_unified.sql)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 rounded-lg bg-slate-900 text-slate-100 font-mono text-sm overflow-x-auto">
                    <div className="text-slate-400 mb-2">-- Step 1: Normalize emails across all sources</div>
                    <div className="text-blue-400">lower(trim(email)) as normalized_email</div>
                    <div className="mt-4 text-slate-400">-- Step 2: LEFT JOIN all sources to ERPNext (master)</div>
                    <div className="text-slate-300">FROM stg_erp_customers erp</div>
                    <div className="text-slate-300">LEFT JOIN stg_sf_contacts sf ON erp.email = sf.email</div>
                    <div className="text-slate-300">LEFT JOIN stg_app_sessions app ON erp.email = app.email</div>
                    <div className="mt-4 text-slate-400">-- Step 3: Create unified ID via MD5 hash</div>
                    <div className="text-blue-400">md5(coalesce(normalized_email, erp_customer_id))</div>
                    <div className="text-blue-400 pl-4">as unified_customer_id</div>
                    <div className="mt-4 text-slate-400">-- Result: 1 unified customer from 4 source IDs</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Data Model Deep Dive */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Table className="h-5 w-5 text-blue-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">dbt Data Models</h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                22 dbt models organized across staging, silver, and gold layers with 43 data quality tests
                ensuring data integrity throughout the pipeline.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Silver Layer Tables */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Layers className="h-5 w-5 text-slate-400" />
                      Silver Layer (7 Tables)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {dataModelTables.silver.map((table, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-500/5 border border-slate-500/20">
                        <div className="w-6 h-6 rounded bg-slate-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-slate-500">{table.name.startsWith('dim') ? 'D' : 'F'}</span>
                        </div>
                        <div>
                          <div className="font-medium text-sm font-mono">{table.name}</div>
                          <div className="text-xs text-muted-foreground">{table.description}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Gold Layer Tables */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-yellow-500" />
                      Gold Layer (4 Tables)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {dataModelTables.gold.map((table, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                        <div className="w-6 h-6 rounded bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-yellow-500">G</span>
                        </div>
                        <div>
                          <div className="font-medium text-sm font-mono">{table.name}</div>
                          <div className="text-xs text-muted-foreground">{table.description}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Data Quality Tests */}
              <Card className="mt-8 border-green-500/30 bg-green-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">43 Data Quality Tests</h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive testing including unique key constraints, not null validations, referential integrity checks,
                        and custom business logic tests. Example: "All customers must have at least one source ID."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ML Pipeline Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Brain className="h-5 w-5 text-purple-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Machine Learning Pipeline</h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                End-to-end ML pipeline with 30+ engineered features, ensemble model training, batch scoring,
                and model monitoring—all built with scikit-learn for maximum compatibility with Databricks Free Edition.
              </p>

              <Card className="overflow-hidden mb-8">
                <CardContent className="p-0">
                  <img
                    src="/banking-churn-ml.png"
                    alt="Machine Learning Pipeline Architecture"
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>

              {/* Feature Engineering */}
              <h3 className="text-xl font-semibold mb-4">30+ Engineered Features</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {mlFeatures.map((category, index) => (
                  <Card key={index} className="border-purple-500/20">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-sm mb-3 text-purple-500">{category.category}</h4>
                      <div className="space-y-1">
                        {category.features.map((feature, idx) => (
                          <div key={idx} className="text-xs font-mono bg-muted/50 px-2 py-1 rounded">
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Model Training Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Ensemble Model Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-sm mb-3">Models Trained</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          Random Forest (300 trees)
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          Gradient Boosting (200 trees)
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          Extra Trees (300 trees)
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          AdaBoost (200 iterations)
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          Logistic Regression (baseline)
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          <Zap className="h-4 w-4 text-yellow-500" />
                          Voting Ensemble (top 3)
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-3">Pipeline Components</h4>
                      <div className="space-y-2 text-sm">
                        <div className="p-2 rounded bg-muted/50">
                          <span className="font-mono text-purple-500">01_train_churn_model.py</span>
                          <span className="text-muted-foreground"> - EDA, training, tuning</span>
                        </div>
                        <div className="p-2 rounded bg-muted/50">
                          <span className="font-mono text-purple-500">02_score_customers.py</span>
                          <span className="text-muted-foreground"> - Batch scoring</span>
                        </div>
                        <div className="p-2 rounded bg-muted/50">
                          <span className="font-mono text-purple-500">03_model_monitoring.py</span>
                          <span className="text-muted-foreground"> - Drift detection</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CI/CD Pipeline */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center">
                  <GitBranch className="h-5 w-5 text-indigo-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">CI/CD Automation</h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                GitHub Actions workflows automate dbt testing on PRs and deployment to production on merge to main.
              </p>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/banking-churn-cicd.png"
                    alt="CI/CD Pipeline Architecture"
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card className="border-blue-500/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FileCode className="h-5 w-5 text-blue-500" />
                      <h3 className="font-semibold">dbt-ci.yml</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Triggered on PR: Runs <code className="text-xs bg-muted px-1 py-0.5 rounded">dbt build --target ci</code> to
                      validate models and tests before merge.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-green-500/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FileCode className="h-5 w-5 text-green-500" />
                      <h3 className="font-semibold">dbt-deploy.yml</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Triggered on merge to main: Runs <code className="text-xs bg-muted px-1 py-0.5 rounded">dbt build --target prod</code> to
                      deploy to production.
                    </p>
                  </CardContent>
                </Card>
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
                          <th className="text-left p-4 font-semibold text-red-500">Before</th>
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
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-orange-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Live Dashboard</h2>
              </div>

              <Card className="overflow-hidden shadow-xl">
                <CardHeader className="bg-muted/30 border-b">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-orange-500" />
                      Banking Customer Churn Analytics
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">Interactive</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      title="Banking Customer Churn Analytics"
                      width="100%"
                      height="100%"
                      src="https://app.fabric.microsoft.com/view?r=eyJrIjoiNjk1ZTNmNWEtYjc4Yy00YWFhLTgxMzEtM2JhMGY3NmIzMDM2IiwidCI6ImNhM2YwNTZlLTQ0NDgtNDI1YS05MmE5LWU5ZDMyOTFlYTJmMyJ9"
                      frameBorder="0"
                      allowFullScreen={true}
                      className="border-0"
                    />
                  </div>
                </CardContent>
              </Card>

              <p className="text-sm text-muted-foreground mt-4 text-center">
                Interactive Power BI dashboard showing customer churn insights, risk segmentation, and retention recommendations
              </p>
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
                <Card className="text-center bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-orange-500 mb-2">4→1</div>
                    <div className="text-sm font-medium">Customer Unification</div>
                    <div className="text-xs text-muted-foreground">Single source of truth</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-500 mb-2">40+ hrs</div>
                    <div className="text-sm font-medium">Monthly Time Saved</div>
                    <div className="text-xs text-muted-foreground">Automated reconciliation</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-purple-500 mb-2">30+</div>
                    <div className="text-sm font-medium">ML Features</div>
                    <div className="text-xs text-muted-foreground">Engineered for churn</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-green-500 mb-2">$5-6M</div>
                    <div className="text-sm font-medium">Annual Impact</div>
                    <div className="text-xs text-muted-foreground">Preventable churn savings</div>
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
                      <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-orange-500">1</div>
                      <div>
                        <h4 className="font-semibold text-sm">Email is the universal key</h4>
                        <p className="text-sm text-muted-foreground">When systems have incompatible IDs, email address (normalized) provides the most reliable cross-system linkage.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-orange-500">2</div>
                      <div>
                        <h4 className="font-semibold text-sm">Behavioral features beat demographics</h4>
                        <p className="text-sm text-muted-foreground">Transaction patterns, support interactions, and digital engagement are stronger churn predictors than customer demographics.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-orange-500">3</div>
                      <div>
                        <h4 className="font-semibold text-sm">Actionable outputs matter most</h4>
                        <p className="text-sm text-muted-foreground">The high_risk_customers table with specific retention actions is more valuable than raw predictions—it drives actual business action.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-orange-500">4</div>
                      <div>
                        <h4 className="font-semibold text-sm">dbt + Unity Catalog = governance at scale</h4>
                        <p className="text-sm text-muted-foreground">The combination provides data lineage, testing, and documentation that meets enterprise requirements out of the box.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-t">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Customer Analytics Platform?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you need customer data unification, churn prediction, or end-to-end ML pipelines,
                I bring expertise in Databricks, dbt, and machine learning to deliver production-ready solutions.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge className="text-sm px-4 py-2">Databricks</Badge>
                <Badge className="text-sm px-4 py-2">dbt</Badge>
                <Badge className="text-sm px-4 py-2">Machine Learning</Badge>
                <Badge className="text-sm px-4 py-2">Entity Resolution</Badge>
                <Badge className="text-sm px-4 py-2">Unity Catalog</Badge>
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

export default BankingChurnCaseStudy;
