import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
  Bot,
  Server,
  Lock,
  FileCode,
  Wrench,
  Eye,
  Terminal,
  GitBranch,
  CloudCog,
  Play,
} from "lucide-react";

const PowerBIMCPCaseStudy = () => {
  const keyResults = [
    { icon: Wrench, value: "34", label: "AI-Powered Tools", description: "For Power BI automation" },
    { icon: Server, value: "3", label: "Connector Types", description: "Desktop, Cloud, PBIP" },
    { icon: Shield, value: "100%", label: "Enterprise Security", description: "PII detection & audit logging" },
  ];

  const challenges = [
    {
      icon: AlertTriangle,
      title: "TOM Rename Breaks Visuals",
      description: "Renaming tables or columns via the Tabular Object Model (TOM) API breaks all report visuals referencing that object, requiring manual fixes."
    },
    {
      icon: GitBranch,
      title: "Fragmented Tooling",
      description: "No unified interface to manage Power BI Desktop and Power BI Service semantic models. Developers juggle multiple tools and APIs."
    },
    {
      icon: Lock,
      title: "Security & Compliance Gaps",
      description: "Enterprise environments require PII detection, audit logging, and role-based access control that native tools do not provide out of the box."
    },
    {
      icon: Bot,
      title: "AI Integration Barriers",
      description: "AI assistants could not interact with Power BI models, execute DAX queries, or help with model development without extensive custom integration."
    }
  ];

  const solutionFeatures = [
    "Natural language DAX query execution and model exploration",
    "Safe PBIP-based renaming that preserves all visual references",
    "Automatic PII detection and masking (SSN, credit cards, emails)",
    "Complete audit logging with GDPR, HIPAA, SOC2 compliance support",
    "Row-Level Security (RLS) role testing during development",
    "Batch operations for measures, columns, and table modifications"
  ];

  const beforeAfter = [
    {
      area: "Model Exploration",
      before: "Manual navigation through Power BI Desktop UI",
      after: "Natural language queries: 'Show me all measures in Sales table'"
    },
    {
      area: "DAX Development",
      before: "Trial and error in DAX editor, no AI assistance",
      after: "AI-assisted DAX with context-aware suggestions"
    },
    {
      area: "Rename Operations",
      before: "Rename breaks visuals, hours of manual fixes",
      after: "PBIP-safe rename updates model and visuals atomically"
    },
    {
      area: "Security Testing",
      before: "Deploy to test RLS, hope it works",
      after: "Test RLS roles locally before deployment"
    },
    {
      area: "Compliance",
      before: "No visibility into data access patterns",
      after: "Complete audit trail with PII detection"
    }
  ];

  const techStack = [
    { name: "Python", role: "MCP Server Runtime" },
    { name: "Model Context Protocol", role: "AI Integration Standard" },
    { name: "ADOMD.NET", role: "Desktop Connectivity" },
    { name: "XMLA", role: "Cloud Connectivity" },
    { name: "TMDL", role: "Model Definition Language" },
  ];

  const toolCategories = [
    { name: "Desktop Operations", count: 7, description: "Discover instances, connect, list tables, execute DAX" },
    { name: "Cloud Operations", count: 6, description: "List workspaces, datasets, execute cloud queries" },
    { name: "Security & Compliance", count: 2, description: "Security status, audit log retrieval" },
    { name: "RLS Testing", count: 3, description: "List roles, set active role, RLS status" },
    { name: "Model Modification", count: 7, description: "Create/delete measures, batch updates" },
    { name: "PBIP Safe Editing", count: 5, description: "Safe rename for tables, columns, measures" },
    { name: "PBIP Diagnostics", count: 4, description: "Fix broken visuals, validate syntax, scan references" },
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
                <Badge variant="outline" className="text-xs">AI + Power BI</Badge>
              </div>

              <h1 className="font-serif text-display-lg font-normal mb-6 leading-tight text-foreground">
                Power BI MCP Server: <em className="italic font-normal text-accent-brand-strong">bridging AI assistants</em> with enterprise business intelligence
              </h1>

              <p className="text-body-lg text-foreground-muted mb-8 leading-relaxed max-w-4xl">
                An enterprise-grade Model Context Protocol server enabling AI assistants like Claude to interact with
                Microsoft Power BI through natural language: executing DAX queries, exploring models, and performing
                safe bulk operations across Desktop and Cloud environments.
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
                  href="https://github.com/sulaiman013/powerbi-mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent-brand text-accent-brand-foreground rounded-sm transition-colors duration-fast ease-out-quart"
                >
                  <GitBranch aria-hidden="true" className="h-4 w-4" />
                  View on GitHub
                </a>
                <Badge variant="secondary" className="px-3 py-2">
                  MIT License
                </Badge>
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
                  <AlertTriangle aria-hidden="true" className="h-5 w-5 text-warning" />
                </div>
                <h2 className="font-serif text-h2 font-normal text-foreground">The Challenge</h2>
              </div>

              <div className="mb-8">
                <p className="text-body-lg text-foreground-muted leading-relaxed">
                  Power BI is the industry-leading business intelligence platform, yet integrating AI assistants
                  with Power BI workflows has been nearly impossible. Developers face fragmented tooling,
                  dangerous API limitations, and no standardized way for AI to understand and interact with
                  semantic models.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {challenges.map((challenge, index) => (
                  <Card key={index} className="bg-background transition-colors duration-fast ease-out-quart hover:border-border-strong">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent-brand-soft flex items-center justify-center flex-shrink-0">
                          <challenge.icon aria-hidden="true" className="h-5 w-5 text-warning" />
                        </div>
                        <div>
                          <h3 className="text-h4 font-semibold mb-2">{challenge.title}</h3>
                          <p className="text-body-sm text-foreground-muted">{challenge.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Critical Problem Highlight */}
              <Card className="mt-10 bg-background-elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent-brand-soft flex items-center justify-center flex-shrink-0">
                      <AlertTriangle aria-hidden="true" className="h-6 w-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-h3 font-bold mb-2">The Breaking Point: TOM API Limitations</h3>
                      <p className="text-foreground-muted mb-4">
                        "Renaming a table via TOM breaks all report visuals referencing that table."
                      </p>
                      <p className="text-body-sm text-foreground-muted">
                        This single limitation caused hours of manual fixes for every refactoring operation.
                        The V1-to-V2 evolution of this project specifically addressed this critical pain point
                        with a revolutionary PBIP-based approach.
                      </p>
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
                <h2 className="font-serif text-h2 font-normal text-foreground">The Solution</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-10">
                <div>
                  <p className="text-body-lg text-foreground-muted leading-relaxed mb-6">
                    I built an enterprise-grade <strong className="text-foreground">Model Context Protocol (MCP) server</strong> that
                    bridges AI assistants with Power BI, featuring a revolutionary three-tier connector architecture
                    and the industry's first PBIP-safe refactoring solution.
                  </p>

                  <div className="space-y-3">
                    {solutionFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-accent-brand-strong mt-0.5 flex-shrink-0" />
                        <span className="text-body-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Three-Tier Architecture Visual */}
                <div className="space-y-4">
                  <Card className="relative overflow-hidden transition-colors duration-fast ease-out-quart hover:border-border-strong">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                          <Terminal aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                        </div>
                        <div>
                          <CardTitle className="text-h4 font-semibold">Desktop Connector</CardTitle>
                          <p className="text-body-sm text-foreground-muted">ADOMD.NET</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body-sm text-foreground-muted">Direct connection to local Power BI Desktop instances for development workflows</p>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center">
                    <ArrowRight aria-hidden="true" className="h-6 w-6 text-foreground-muted rotate-90" />
                  </div>

                  <Card className="relative overflow-hidden transition-colors duration-fast ease-out-quart hover:border-border-strong">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                          <CloudCog aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                        </div>
                        <div>
                          <CardTitle className="text-h4 font-semibold">XMLA Connector</CardTitle>
                          <p className="text-body-sm text-foreground-muted">Power BI Service</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body-sm text-foreground-muted">Cloud connectivity via XMLA endpoints for Premium/PPU workspaces</p>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center">
                    <ArrowRight aria-hidden="true" className="h-6 w-6 text-foreground-muted rotate-90" />
                  </div>

                  <Card className="relative overflow-hidden transition-colors duration-fast ease-out-quart hover:border-border-strong">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                          <FileCode aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                        </div>
                        <div>
                          <CardTitle className="text-h4 font-semibold">PBIP Connector</CardTitle>
                          <p className="text-body-sm text-foreground-muted">Safe Refactoring</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body-sm text-foreground-muted">Text-based editing that updates model AND report layers simultaneously</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="py-section-sm bg-background-elevated">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                  <TrendingUp aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                </div>
                <h2 className="font-serif text-h2 font-normal text-foreground">The Transformation</h2>
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-background-elevated">
                          <th className="text-left p-4 font-semibold">Area</th>
                          <th className="text-left p-4 font-semibold text-foreground-muted">Before</th>
                          <th className="text-left p-4 font-semibold text-accent-brand-strong">After</th>
                        </tr>
                      </thead>
                      <tbody>
                        {beforeAfter.map((row, index) => (
                          <tr key={index} className="border-b border-border last:border-0">
                            <td className="p-4 font-medium">{row.area}</td>
                            <td className="p-4 text-body-sm text-foreground-muted">{row.before}</td>
                            <td className="p-4 text-body-sm">{row.after}</td>
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

        {/* Tool Categories */}
        <section className="py-section-sm bg-background">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                  <Wrench aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                </div>
                <h2 className="font-serif text-h2 font-normal text-foreground">34 AI-Powered Tools</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {toolCategories.map((category, index) => (
                  <Card key={index} className="transition-colors duration-fast ease-out-quart hover:border-border-strong">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-h4 font-semibold">{category.name}</h3>
                        <Badge variant="secondary" className="text-base font-bold">{category.count}</Badge>
                      </div>
                      <p className="text-body-sm text-foreground-muted">{category.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="py-section-sm bg-background-elevated">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                  <Code2 aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                </div>
                <h2 className="font-serif text-h2 font-normal text-foreground">Technical Innovation</h2>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-h3 font-bold">The PBIP Breakthrough: Safe Refactoring</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground-muted">
                    The key innovation is the PBIP (Power BI Project) connector that performs file-based editing,
                    simultaneously updating both the semantic model layer and report visual definitions. This is
                    something the native TOM API cannot achieve.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-background-elevated border border-border">
                      <FileCode aria-hidden="true" className="h-5 w-5 text-accent-brand-strong mt-0.5" />
                      <div>
                        <h4 className="text-h4 font-semibold">TMDL Updates</h4>
                        <p className="text-caption text-foreground-muted">Modifies Tabular Model Definition Language files</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-background-elevated border border-border">
                      <Code2 aria-hidden="true" className="h-5 w-5 text-accent-brand-strong mt-0.5" />
                      <div>
                        <h4 className="text-h4 font-semibold">DAX Rewriting</h4>
                        <p className="text-caption text-foreground-muted">Regex-based expression updates with quote fixing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-background-elevated border border-border">
                      <Eye aria-hidden="true" className="h-5 w-5 text-accent-brand-strong mt-0.5" />
                      <div>
                        <h4 className="text-h4 font-semibold">Visual.json Sync</h4>
                        <p className="text-caption text-foreground-muted">Updates all report visual bindings atomically</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-background-elevated border border-border">
                      <Database aria-hidden="true" className="h-5 w-5 text-accent-brand-strong mt-0.5" />
                      <div>
                        <h4 className="text-h4 font-semibold">Q&A Schema</h4>
                        <p className="text-caption text-foreground-muted">Maintains natural language query mappings</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-h3 font-bold">
                    <Shield aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                    Enterprise Security & Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-background-elevated border border-border text-center">
                      <Badge className="mb-3">PII Detection</Badge>
                      <p className="text-body-sm font-medium">Automatic Masking</p>
                      <p className="text-caption text-foreground-muted mt-1">SSN, Credit Cards, Emails, Phone</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background-elevated border border-border text-center">
                      <Badge className="mb-3">Audit Logging</Badge>
                      <p className="text-body-sm font-medium">Complete Trail</p>
                      <p className="text-caption text-foreground-muted mt-1">GDPR, HIPAA, SOC2 Ready</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background-elevated border border-border text-center">
                      <Badge className="mb-3">Access Control</Badge>
                      <p className="text-body-sm font-medium">Table & Column Level</p>
                      <p className="text-caption text-foreground-muted mt-1">Configurable Policies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Demos */}
        <section className="py-section-sm bg-background">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                  <Play aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                </div>
                <h2 className="font-serif text-h2 font-normal text-foreground">See It In Action</h2>
              </div>

              <p className="text-foreground-muted mb-8">
                Watch the evolution of Power BI MCP Server from V1 to V2, featuring the groundbreaking PBIP-safe refactoring capabilities.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* V1 Demo */}
                <Card className="overflow-hidden">
                  <CardHeader className="bg-background-elevated border-b border-border">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2 text-h4 font-semibold">
                        <Play aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                        V1 Demonstration
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">Original Release</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://www.youtube.com/embed/eFDfghAtpOg"
                        title="Power BI MCP Server V1 Demo"
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

                {/* V2 Update */}
                <Card className="overflow-hidden">
                  <CardHeader className="bg-accent-brand-soft border-b border-border">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2 text-h4 font-semibold">
                        <Play aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                        V2 Update
                      </CardTitle>
                      <Badge className="text-xs bg-accent-brand text-accent-brand-foreground">Latest</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://www.youtube.com/embed/Uut19Biv15E"
                        title="Power BI MCP Server V2 Update"
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

              <div className="mt-6 p-4 rounded-lg bg-background-elevated border border-border text-center">
                <p className="text-body-sm text-foreground-muted">
                  <strong className="text-foreground">V2 Highlights:</strong> PBIP-safe refactoring, automatic DAX rewriting, visual.json synchronization, and zero broken visuals during rename operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section-sm bg-accent-brand-soft/40 border-t border-border">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-h2 font-normal text-foreground mb-4">Ready to supercharge your Power BI workflow?</h2>
              <p className="text-foreground-muted mb-8 max-w-2xl mx-auto">
                Transform how you interact with Power BI. Let AI assistants help you explore models, write DAX,
                and safely refactor your semantic models through natural language.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://github.com/sulaiman013/powerbi-mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-brand text-accent-brand-foreground rounded-sm transition-colors duration-fast ease-out-quart font-semibold"
                >
                  <GitBranch aria-hidden="true" className="h-5 w-5" />
                  Get Started on GitHub
                </a>
              </div>
              <div className="flex flex-wrap gap-3 justify-center mt-6">
                <Badge className="text-sm px-4 py-2">Model Context Protocol</Badge>
                <Badge className="text-sm px-4 py-2">Claude Integration</Badge>
                <Badge className="text-sm px-4 py-2">Enterprise Security</Badge>
                <Badge className="text-sm px-4 py-2">PBIP Safe Editing</Badge>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PowerBIMCPCaseStudy;
