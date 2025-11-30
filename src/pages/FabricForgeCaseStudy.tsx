import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Database,
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
  Workflow,
  Play,
  FileJson,
  Cloud,
  Sparkles,
  Building2,
  RefreshCw,
  Eye,
  ExternalLink,
  Download
} from "lucide-react";

const FabricForgeCaseStudy = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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
    "Support for 23 Fabric data types with table/column definitions",
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
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="outline" className="text-xs">Case Study</Badge>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Badge variant="outline" className="text-xs">Microsoft Fabric Automation</Badge>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-primary">FabricForge:</span> Visual Workspace Automation for Microsoft Fabric
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl">
                A web-based visual form builder that transforms Microsoft Fabric workspace provisioning from
                hours of manual configuration to minutes of automated deployment—with AI-powered code generation
                and n8n workflow orchestration.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {techStack.map((tech, index) => (
                  <Badge key={index} className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1">
                    {tech.name}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://datacrafters.io/fabricforge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Try FabricForge
                </a>
                <a
                  href="https://datacrafters.io/microsoft-fabric-workspace-automation-with-fabricforge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <FileJson className="h-4 w-4" />
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Results */}
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
                  Organizations adopting Microsoft Fabric face a significant bottleneck: provisioning workspaces,
                  lakehouses, and warehouses is a manual, time-consuming process. Data teams spend hours clicking
                  through UIs instead of building analytics solutions.
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

              {/* Impact Stats */}
              <Card className="mt-10 border-amber-500/30 bg-amber-500/5">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-amber-500 mb-1">1 Day</div>
                      <div className="text-sm text-muted-foreground">Manual workspace setup time</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-amber-500 mb-1">20+</div>
                      <div className="text-sm text-muted-foreground">UI screens to navigate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-amber-500 mb-1">High</div>
                      <div className="text-sm text-muted-foreground">Error rate from manual config</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                    I built <strong className="text-foreground">FabricForge</strong>, a web-based visual form builder
                    that automates Microsoft Fabric provisioning through n8n workflows, featuring intelligent
                    validation, AI code generation, and template-based configuration.
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
                          <Settings className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Visual Form Builder</CardTitle>
                          <p className="text-sm text-muted-foreground">Web Interface</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Configure workspaces, lakehouses, tables with 23 data types</p>
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
                          <Workflow className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">n8n Workflow</CardTitle>
                          <p className="text-sm text-muted-foreground">Orchestration Engine</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Handles auth, API calls, validation, and error recovery</p>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center">
                    <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                  </div>

                  <Card className="border-green-500/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-green-500" />
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                          <Cloud className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Microsoft Fabric</CardTitle>
                          <p className="text-sm text-muted-foreground">Target Platform</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Workspaces, lakehouses, warehouses, notebooks deployed</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Steps */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Workflow className="h-5 w-5 text-purple-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Automation Workflow</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {workflowSteps.map((step, index) => (
                  <Card key={index} className="hover:border-primary/50 transition-colors relative">
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                      {index + 1}
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">{step.name}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
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

        {/* Technical Deep Dive */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-purple-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Key Capabilities</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-purple-500" />
                      AI Code Generation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      OpenAI GPT models automatically generate PySpark notebook code based on your table definitions,
                      eliminating manual coding for table creation.
                    </p>
                    <div className="p-3 rounded-lg bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto">
                      <div className="text-slate-400"># AI-generated PySpark</div>
                      <div className="text-green-400">df = spark.createDataFrame([], schema)</div>
                      <div className="text-green-400">df.write.format("delta").saveAsTable("sales")</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <RefreshCw className="h-5 w-5 text-blue-500" />
                      Idempotent Operations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      Intelligent duplicate detection ensures safe re-execution. Existing resources are skipped,
                      making the workflow safe to run multiple times.
                    </p>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm">Re-run safely without creating duplicates</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileJson className="h-5 w-5 text-amber-500" />
                      Template System
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      Export configurations as JSON templates and import them for new environments. Standardize
                      workspace structures across your organization.
                    </p>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm">Bronze/Silver/Gold lakehouse templates</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-500" />
                      Security First
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      Browser-only execution with no server-side credential storage. OAuth2 tokens are transmitted
                      directly to your n8n instance.
                    </p>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm">No credentials stored on external servers</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Use Case Example */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Real-World Use Case: Multi-Department Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    A retail organization needs standardized analytics environments for multiple departments:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <Layers className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                      <div className="font-semibold text-sm">Bronze Layer</div>
                      <div className="text-xs text-muted-foreground">Raw data ingestion</div>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <Layers className="h-6 w-6 text-slate-400 mx-auto mb-2" />
                      <div className="font-semibold text-sm">Silver Layer</div>
                      <div className="text-xs text-muted-foreground">Cleansed & validated</div>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <Layers className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                      <div className="font-semibold text-sm">Gold Layer</div>
                      <div className="text-xs text-muted-foreground">Analytics-ready</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    With FabricForge, each new department workspace deploys in <strong className="text-foreground">5 minutes</strong> vs
                    a <strong className="text-foreground">full day</strong> of manual work—with consistent structure guaranteed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Tutorials */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <Play className="h-5 w-5 text-red-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Video Tutorial Series</h2>
              </div>

              <p className="text-muted-foreground mb-8">
                Follow along with our comprehensive video series to get FabricForge up and running in your environment.
              </p>

              {/* Main Demo Video */}
              <Card className="overflow-hidden shadow-xl mb-8">
                <CardHeader className="bg-muted/30 border-b">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Play className="h-5 w-5 text-red-500" />
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
                  <CardHeader className="bg-muted/30 border-b py-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Play className="h-4 w-4 text-red-500" />
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
                  <CardHeader className="bg-muted/30 border-b py-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Play className="h-4 w-4 text-red-500" />
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
                  <CardHeader className="bg-muted/30 border-b py-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Play className="h-4 w-4 text-red-500" />
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
                  <CardHeader className="bg-muted/30 border-b py-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Play className="h-4 w-4 text-red-500" />
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
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Download className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Download N8N Workflow</h3>
                        <p className="text-sm text-muted-foreground">Get the complete n8n workflow script to import into your instance</p>
                      </div>
                    </div>
                    <a
                      href="https://drive.google.com/drive/folders/1GMtyOL_a-cujlBtIzVQKCMlepWeybFFO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                    >
                      <Download className="h-5 w-5" />
                      Download Workflow
                    </a>
                  </div>
                </CardContent>
              </Card>
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
                    <div className="text-3xl font-bold text-green-500 mb-2">90%</div>
                    <div className="text-sm font-medium">Time Reduction</div>
                    <div className="text-xs text-muted-foreground">In provisioning</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-500 mb-2">Zero</div>
                    <div className="text-sm font-medium">Config Errors</div>
                    <div className="text-xs text-muted-foreground">Automated validation</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-purple-500 mb-2">23</div>
                    <div className="text-sm font-medium">Data Types</div>
                    <div className="text-xs text-muted-foreground">Full Fabric support</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-amber-500 mb-2">AI</div>
                    <div className="text-sm font-medium">Code Generation</div>
                    <div className="text-xs text-muted-foreground">OpenAI-powered</div>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Automate Your Fabric Provisioning?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Stop spending days on manual workspace setup. FabricForge lets you provision complete
                Microsoft Fabric environments in minutes with enterprise-grade consistency.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://datacrafters.io/fabricforge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  <Play className="h-5 w-5" />
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

      <footer className="bg-muted/30 border-t py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Sulaiman Ahmed. Automating Enterprise Data Platforms.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FabricForgeCaseStudy;
