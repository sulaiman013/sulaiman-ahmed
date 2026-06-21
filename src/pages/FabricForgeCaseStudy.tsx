import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  CheckCircle2,
  Code2,
  AlertTriangle,
  ArrowRight,
  Target,
  Shield,
  ChevronRight,
  Zap,
  Clock,
  Settings,
  Layers,
  Play,
  FileJson,
  Cloud,
  Sparkles,
  Building2,
  RefreshCw,
  ExternalLink,
  Download,
  Workflow,
} from "lucide-react";

const FabricForgeCaseStudy = () => {
  const keyResults = [
    { icon: Clock, value: "90%", label: "Time Saved", description: "On workspace provisioning" },
    { icon: Zap, value: "5 min", label: "Deployment Time", description: "vs full day manual" },
    { icon: Shield, value: "Zero", label: "Config Errors", description: "Automated validation" },
  ];

  const challenges = [
    {
      icon: Clock,
      title: "Time-Consuming Setup",
      description: "Provisioning Microsoft Fabric workspaces, lakehouses, and warehouses manually takes hours of clicking through UI and configuring settings."
    },
    {
      icon: AlertTriangle,
      title: "Configuration Errors",
      description: "Manual setup leads to inconsistent configurations across environments, with typos and missing settings causing downstream issues."
    },
    {
      icon: RefreshCw,
      title: "No Standardization",
      description: "Each team creates workspaces differently, making governance, security reviews, and maintenance increasingly complex."
    },
    {
      icon: Code2,
      title: "Complex API Integration",
      description: "Automating Fabric provisioning requires understanding multiple REST APIs, authentication flows, and PySpark code generation."
    }
  ];

  const solutionFeatures = [
    "Visual form builder for workspace, lakehouse, and warehouse configuration",
    "Support for 23 Fabric data types with table and column definitions",
    "AI-powered PySpark code generation via OpenAI API",
    "n8n workflow orchestration with intelligent duplicate detection",
    "JSON import/export for reusable configuration templates",
    "OAuth2 authentication with Azure AD integration"
  ];

  const beforeAfter = [
    {
      area: "Workspace Setup",
      before: "Navigate UI, click through 20+ screens manually",
      after: "Fill visual form, click submit, done in 5 minutes"
    },
    {
      area: "Table Creation",
      before: "Write PySpark notebooks from scratch",
      after: "AI generates PySpark code automatically"
    },
    {
      area: "Configuration",
      before: "Copy settings between environments manually",
      after: "Export/import JSON templates"
    },
    {
      area: "Error Handling",
      before: "Discover issues after deployment",
      after: "Pre-validation catches errors before submission"
    },
    {
      area: "Scaling",
      before: "1 day per workspace, linear time growth",
      after: "5 minutes per workspace, parallel deployment"
    }
  ];

  const techStack = [
    { name: "n8n", role: "Workflow Automation" },
    { name: "Microsoft Fabric", role: "Analytics Platform" },
    { name: "Azure AD", role: "Authentication" },
    { name: "OpenAI API", role: "Code Generation" },
    { name: "REST APIs", role: "Fabric Integration" },
  ];

  const workflowSteps = [
    { name: "Configuration", description: "Define workspace structure via visual form builder" },
    { name: "Validation", description: "Check for existing resources, prevent duplicates" },
    { name: "Authentication", description: "OAuth2 token acquisition via Azure AD" },
    { name: "Provisioning", description: "Create workspace, lakehouse, warehouse sequentially" },
    { name: "Code Generation", description: "AI generates PySpark for table creation" },
    { name: "Notebook Execution", description: "Attach and run notebooks in Fabric" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-section-sm md:py-section bg-accent-brand-soft/40">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="outline" className="text-xs">Pet Project</Badge>
                <ChevronRight aria-hidden="true" className="h-4 w-4 text-foreground-muted" />
                <Badge variant="outline" className="text-xs">Microsoft Fabric Automation</Badge>
              </div>

              <h1 className="font-serif text-display-lg font-normal mb-6 leading-tight text-foreground">
                FabricForge: <em className="italic font-normal text-accent-brand-strong">visual workspace automation</em> for Microsoft Fabric
              </h1>

              <p className="text-body-lg text-foreground-muted mb-8 leading-relaxed max-w-4xl">
                A web-based visual form builder that transforms Microsoft Fabric workspace provisioning from
                hours of manual configuration to minutes of automated deployment, with AI-powered code generation
                and n8n workflow orchestration.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {techStack.map((tech, index) => (
                  <Badge key={index} className="bg-accent-brand-soft text-accent-brand-strong px-3 py-1">
                    {tech.name}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://datacrafters.io/fabricforge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent-brand text-accent-brand-foreground rounded-sm transition-colors duration-fast ease-out-quart"
                >
                  <ExternalLink aria-hidden="true" className="h-4 w-4" />
                  Try FabricForge
                </a>
                <a
                  href="https://datacrafters.io/microsoft-fabric-workspace-automation-with-fabricforge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border text-accent-brand-strong rounded-sm transition-colors duration-fast ease-out-quart hover:border-border-strong hover:bg-accent-brand-soft"
                >
                  <FileJson aria-hidden="true" className="h-4 w-4" />
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Results */}
        <section className="py-section-sm bg-background border-y border-border">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {keyResults.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 rounded-full bg-accent-brand-soft flex items-center justify-center mx-auto mb-4">
                      <result.icon aria-hidden="true" className="h-7 w-7 text-accent-brand-strong" />
                    </div>
                    <div className="font-serif text-display-md font-normal text-accent-brand-strong mb-2">{result.value}</div>
                    <div className="text-h4 font-semibold mb-1">{result.label}</div>
                    <div className="text-body-sm text-foreground-muted">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-section-sm bg-background-elevated">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                  <AlertTriangle aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                </div>
                <h2 className="font-serif text-h2 font-normal text-foreground">The challenge</h2>
              </div>

              <div className="mb-8">
                <p className="text-body-lg text-foreground-muted leading-relaxed">
                  Organizations adopting Microsoft Fabric face a significant bottleneck: provisioning workspaces,
                  lakehouses, and warehouses is a manual, time-consuming process. Data teams spend hours clicking
                  through UIs instead of building analytics solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {challenges.map((challenge, index) => (
                  <Card key={index} className="bg-background transition-colors duration-fast ease-out-quart hover:border-border-strong">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-md bg-accent-brand-soft flex items-center justify-center flex-shrink-0">
                          <challenge.icon aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                        </div>
                        <div>
                          <h3 className="text-h4 font-semibold mb-2 text-foreground">{challenge.title}</h3>
                          <p className="text-body-sm text-foreground-muted">{challenge.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Impact Stats */}
              <Card className="mt-10 bg-background">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="font-serif text-display-md font-normal text-accent-brand-strong mb-1">1 Day</div>
                      <div className="text-body-sm text-foreground-muted">Manual workspace setup time</div>
                    </div>
                    <div>
                      <div className="font-serif text-display-md font-normal text-accent-brand-strong mb-1">20+</div>
                      <div className="text-body-sm text-foreground-muted">UI screens to navigate</div>
                    </div>
                    <div>
                      <div className="font-serif text-display-md font-normal text-accent-brand-strong mb-1">High</div>
                      <div className="text-body-sm text-foreground-muted">Error rate from manual config</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-section-sm bg-background">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                  <Target aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                </div>
                <h2 className="font-serif text-h2 font-normal text-foreground">The solution</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-10">
                <div>
                  <p className="text-body-lg text-foreground-muted leading-relaxed mb-6">
                    I built <strong className="text-foreground font-semibold">FabricForge</strong>, a web-based visual form builder
                    that automates Microsoft Fabric provisioning through n8n workflows, featuring intelligent
                    validation, AI code generation, and template-based configuration.
                  </p>

                  <div className="space-y-3">
                    {solutionFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-accent-brand-strong mt-0.5 flex-shrink-0" />
                        <span className="text-body-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Visual */}
                <div className="space-y-4">
                  <Card className="transition-colors duration-fast ease-out-quart hover:border-border-strong">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                          <Settings aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                        </div>
                        <div>
                          <CardTitle className="text-h4 font-semibold">Visual Form Builder</CardTitle>
                          <p className="text-body-sm text-foreground-muted">Web Interface</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body-sm text-foreground-muted">Configure workspaces, lakehouses, tables with 23 data types</p>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center">
                    <ArrowRight aria-hidden="true" className="h-6 w-6 text-foreground-subtle rotate-90" />
                  </div>

                  <Card className="transition-colors duration-fast ease-out-quart hover:border-border-strong">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                          <Workflow aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                        </div>
                        <div>
                          <CardTitle className="text-h4 font-semibold">n8n Workflow</CardTitle>
                          <p className="text-body-sm text-foreground-muted">Orchestration Engine</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body-sm text-foreground-muted">Handles auth, API calls, validation, and error recovery</p>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center">
                    <ArrowRight aria-hidden="true" className="h-6 w-6 text-foreground-subtle rotate-90" />
                  </div>

                  <Card className="transition-colors duration-fast ease-out-quart hover:border-border-strong">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                          <Cloud aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                        </div>
                        <div>
                          <CardTitle className="text-h4 font-semibold">Microsoft Fabric</CardTitle>
                          <p className="text-body-sm text-foreground-muted">Target Platform</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body-sm text-foreground-muted">Workspaces, lakehouses, warehouses, notebooks deployed</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Steps */}
        <section className="py-section-sm bg-background-elevated">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                  <Workflow aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                </div>
                <h2 className="font-serif text-h2 font-normal text-foreground">Automation workflow</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {workflowSteps.map((step, index) => (
                  <Card key={index} className="bg-background transition-colors duration-fast ease-out-quart hover:border-border-strong relative">
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent-brand-soft flex items-center justify-center text-body-sm font-mono font-bold text-accent-brand-strong">
                      {index + 1}
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="text-h4 font-semibold mb-2 text-foreground">{step.name}</h3>
                      <p className="text-body-sm text-foreground-muted">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="py-section-sm bg-background">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                  <TrendingUp aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                </div>
                <h2 className="font-serif text-h2 font-normal text-foreground">The transformation</h2>
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-background-elevated">
                          <th className="text-left p-4 text-caption font-semibold text-foreground uppercase tracking-wide">Area</th>
                          <th className="text-left p-4 text-caption font-semibold text-foreground-muted uppercase tracking-wide">Before</th>
                          <th className="text-left p-4 text-caption font-semibold text-accent-brand-strong uppercase tracking-wide">After</th>
                        </tr>
                      </thead>
                      <tbody>
                        {beforeAfter.map((row, index) => (
                          <tr key={index} className="border-b border-border last:border-0">
                            <td className="p-4 text-body-sm font-medium text-foreground">{row.area}</td>
                            <td className="p-4 text-body-sm text-foreground-muted">{row.before}</td>
                            <td className="p-4 text-body-sm text-foreground">{row.after}</td>
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

        {/* Key Capabilities */}
        <section className="py-section-sm bg-background-elevated">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                  <Code2 aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                </div>
                <h2 className="font-serif text-h2 font-normal text-foreground">Key capabilities</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-background transition-colors duration-fast ease-out-quart hover:border-border-strong">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-h4 font-semibold">
                      <Sparkles aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                      AI Code Generation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground-muted text-body-sm mb-4">
                      OpenAI GPT models automatically generate PySpark notebook code based on your table definitions,
                      eliminating manual coding for table creation.
                    </p>
                    <div className="p-3 rounded-md bg-background-elevated border border-border font-mono text-xs overflow-x-auto">
                      <div className="text-foreground-subtle"># AI-generated PySpark</div>
                      <div className="text-accent-brand-strong">df = spark.createDataFrame([], schema)</div>
                      <div className="text-accent-brand-strong">df.write.format("delta").saveAsTable("sales")</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background transition-colors duration-fast ease-out-quart hover:border-border-strong">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-h4 font-semibold">
                      <RefreshCw aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                      Idempotent Operations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground-muted text-body-sm mb-4">
                      Intelligent duplicate detection ensures safe re-execution. Existing resources are skipped,
                      making the workflow safe to run multiple times.
                    </p>
                    <div className="flex items-start gap-2 p-3 rounded-md bg-background-elevated border border-border">
                      <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-accent-brand-strong mt-0.5" />
                      <span className="text-body-sm text-foreground">Re-run safely without creating duplicates</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background transition-colors duration-fast ease-out-quart hover:border-border-strong">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-h4 font-semibold">
                      <FileJson aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                      Template System
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground-muted text-body-sm mb-4">
                      Export configurations as JSON templates and import them for new environments. Standardize
                      workspace structures across your organization.
                    </p>
                    <div className="flex items-start gap-2 p-3 rounded-md bg-background-elevated border border-border">
                      <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-accent-brand-strong mt-0.5" />
                      <span className="text-body-sm text-foreground">Bronze/Silver/Gold lakehouse templates included</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background transition-colors duration-fast ease-out-quart hover:border-border-strong">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-h4 font-semibold">
                      <Shield aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                      Security First
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground-muted text-body-sm mb-4">
                      Browser-only execution with no server-side credential storage. OAuth2 tokens are transmitted
                      directly to your n8n instance.
                    </p>
                    <div className="flex items-start gap-2 p-3 rounded-md bg-background-elevated border border-border">
                      <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-accent-brand-strong mt-0.5" />
                      <span className="text-body-sm text-foreground">No credentials stored on external servers</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Use Case Example */}
              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-h4 font-semibold">
                    <Building2 aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                    Real-World Use Case: Multi-Department Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-muted mb-4">
                    A retail organization needs standardized analytics environments for multiple departments:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-md bg-background-elevated border border-border text-center">
                      <Layers aria-hidden="true" className="h-6 w-6 text-accent-brand-strong mx-auto mb-2" />
                      <div className="text-h4 font-semibold text-body-sm text-foreground">Bronze Layer</div>
                      <div className="text-caption text-foreground-muted">Raw data ingestion</div>
                    </div>
                    <div className="p-4 rounded-md bg-background-elevated border border-border text-center">
                      <Layers aria-hidden="true" className="h-6 w-6 text-accent-brand-strong mx-auto mb-2" />
                      <div className="text-h4 font-semibold text-body-sm text-foreground">Silver Layer</div>
                      <div className="text-caption text-foreground-muted">Cleansed and validated</div>
                    </div>
                    <div className="p-4 rounded-md bg-background-elevated border border-border text-center">
                      <Layers aria-hidden="true" className="h-6 w-6 text-accent-brand-strong mx-auto mb-2" />
                      <div className="text-h4 font-semibold text-body-sm text-foreground">Gold Layer</div>
                      <div className="text-caption text-foreground-muted">Analytics-ready</div>
                    </div>
                  </div>
                  <p className="text-body-sm text-foreground-muted mt-4">
                    With FabricForge, each new department workspace deploys in <strong className="text-foreground font-semibold">5 minutes</strong> vs
                    a <strong className="text-foreground font-semibold">full day</strong> of manual work, with consistent structure guaranteed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Tutorial Series */}
        <section className="py-section-sm bg-background">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                  <Play aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                </div>
                <h2 className="font-serif text-h2 font-normal text-foreground">Video tutorial series</h2>
              </div>

              <p className="text-body-lg text-foreground-muted mb-8">
                Follow along with our comprehensive video series to get FabricForge up and running in your environment.
              </p>

              {/* Main Demo Video */}
              <Card className="overflow-hidden mb-8">
                <CardHeader className="bg-background-elevated border-b border-border">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-h4 font-semibold">
                      <Play aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                      1. Getting Started with n8n
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">Start Here</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/LxRW9tSX1I8"
                      title="Getting Started with n8n"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="border-0"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Additional Videos Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-background-elevated border-b border-border py-3">
                    <CardTitle className="flex items-center gap-2 text-body font-semibold">
                      <Play aria-hidden="true" className="h-4 w-4 text-accent-brand-strong" />
                      2. Prerequisites and Setup
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://www.youtube.com/embed/mZ5HjktZbps"
                        title="Prerequisites and Setup"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="border-0"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader className="bg-background-elevated border-b border-border py-3">
                    <CardTitle className="flex items-center gap-2 text-body font-semibold">
                      <Play aria-hidden="true" className="h-4 w-4 text-accent-brand-strong" />
                      3. Configuration Walkthrough
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://www.youtube.com/embed/ynfgEHNRJMQ"
                        title="Configuration Walkthrough"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="border-0"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader className="bg-background-elevated border-b border-border py-3">
                    <CardTitle className="flex items-center gap-2 text-body font-semibold">
                      <Play aria-hidden="true" className="h-4 w-4 text-accent-brand-strong" />
                      4. Workflow Execution
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://www.youtube.com/embed/sb6nJxe_j18"
                        title="Workflow Execution"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="border-0"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader className="bg-background-elevated border-b border-border py-3">
                    <CardTitle className="flex items-center gap-2 text-body font-semibold">
                      <Play aria-hidden="true" className="h-4 w-4 text-accent-brand-strong" />
                      5. Debugging and Troubleshooting
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://www.youtube.com/embed/N5MB8KIBb5U"
                        title="Debugging and Troubleshooting"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="border-0"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* N8N Workflow Download */}
              <Card className="bg-accent-brand-soft/40">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent-brand-soft flex items-center justify-center">
                        <Download aria-hidden="true" className="h-6 w-6 text-accent-brand-strong" />
                      </div>
                      <div>
                        <h3 className="text-h4 font-semibold text-foreground">Download N8N Workflow</h3>
                        <p className="text-body-sm text-foreground-muted">Get the complete n8n workflow script to import into your instance</p>
                      </div>
                    </div>
                    <a
                      href="https://drive.google.com/drive/folders/1GMtyOL_a-cujlBtIzVQKCMlepWeybFFO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent-brand text-accent-brand-foreground rounded-sm transition-colors duration-fast ease-out-quart font-medium"
                    >
                      <Download aria-hidden="true" className="h-5 w-5" />
                      Download Workflow
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section-sm bg-accent-brand-soft/40 border-t border-border">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-h2 font-normal mb-4 text-foreground">Ready to automate your Fabric provisioning?</h2>
              <p className="text-body-lg text-foreground-muted mb-8 max-w-2xl mx-auto">
                Stop spending days on manual workspace setup. FabricForge lets you provision complete
                Microsoft Fabric environments in minutes with enterprise-grade consistency.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://datacrafters.io/fabricforge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-brand text-accent-brand-foreground rounded-sm transition-colors duration-fast ease-out-quart font-medium"
                >
                  <Play aria-hidden="true" className="h-5 w-5" />
                  Try FabricForge Now
                </a>
              </div>
              <div className="flex flex-wrap gap-3 justify-center mt-6">
                <Badge className="text-sm px-4 py-2">Visual Builder</Badge>
                <Badge className="text-sm px-4 py-2">n8n Workflows</Badge>
                <Badge className="text-sm px-4 py-2">AI Code Gen</Badge>
                <Badge className="text-sm px-4 py-2">Azure AD</Badge>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FabricForgeCaseStudy;
