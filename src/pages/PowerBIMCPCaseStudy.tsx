import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Database,
  Layers,
  Globe,
  CheckCircle2,
  Code2,
  AlertTriangle,
  ArrowRight,
  Zap,
  Target,
  Shield,
  ChevronRight,
  Bot,
  Server,
  Lock,
  FileCode,
  RefreshCw,
  Wrench,
  Eye,
  Terminal,
  GitBranch,
  CloudCog
} from "lucide-react";

const PowerBIMCPCaseStudy = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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
      description: "No unified interface to manage Power BI Desktop and Power BI Service semantic models—developers juggle multiple tools and APIs."
    },
    {
      icon: Lock,
      title: "Security & Compliance Gaps",
      description: "Enterprise environments require PII detection, audit logging, and role-based access control that native tools don't provide out of the box."
    },
    {
      icon: Bot,
      title: "AI Integration Barriers",
      description: "AI assistants couldn't interact with Power BI models, execute DAX queries, or help with model development without extensive custom integration."
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
      after: "PBIP-safe rename updates model + visuals atomically"
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
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="outline" className="text-xs">Case Study</Badge>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Badge variant="outline" className="text-xs">AI + Power BI</Badge>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-primary">Power BI MCP Server:</span> Bridging AI Assistants with Enterprise Business Intelligence
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl">
                An enterprise-grade Model Context Protocol server enabling AI assistants like Claude to interact with
                Microsoft Power BI through natural language—executing DAX queries, exploring models, and performing
                safe bulk operations across Desktop and Cloud environments.
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
                  href="https://github.com/sulaiman013/powerbi-mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <GitBranch className="h-4 w-4" />
                  View on GitHub
                </a>
                <Badge variant="secondary" className="px-3 py-2">
                  MIT License
                </Badge>
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
                  Power BI is the industry-leading business intelligence platform, yet integrating AI assistants
                  with Power BI workflows has been nearly impossible. Developers face fragmented tooling,
                  dangerous API limitations, and no standardized way for AI to understand and interact with
                  semantic models.
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

              {/* Critical Problem Highlight */}
              <Card className="mt-10 border-red-500/30 bg-red-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">The Breaking Point: TOM API Limitations</h3>
                      <p className="text-muted-foreground mb-4">
                        "Renaming a table via TOM breaks all report visuals referencing that table."
                      </p>
                      <p className="text-sm text-muted-foreground">
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
                    I built an enterprise-grade <strong className="text-foreground">Model Context Protocol (MCP) server</strong> that
                    bridges AI assistants with Power BI, featuring a revolutionary three-tier connector architecture
                    and the industry's first PBIP-safe refactoring solution.
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

                {/* Three-Tier Architecture Visual */}
                <div className="space-y-4">
                  <Card className="border-blue-500/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                          <Terminal className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Desktop Connector</CardTitle>
                          <p className="text-sm text-muted-foreground">ADOMD.NET</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Direct connection to local Power BI Desktop instances for development workflows</p>
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
                          <CloudCog className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">XMLA Connector</CardTitle>
                          <p className="text-sm text-muted-foreground">Power BI Service</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Cloud connectivity via XMLA endpoints for Premium/PPU workspaces</p>
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
                          <FileCode className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">PBIP Connector</CardTitle>
                          <p className="text-sm text-muted-foreground">Safe Refactoring</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Text-based editing that updates model AND report layers simultaneously</p>
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

        {/* Tool Categories */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wrench className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">34 AI-Powered Tools</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {toolCategories.map((category, index) => (
                  <Card key={index} className="hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">{category.name}</h3>
                        <Badge variant="secondary" className="text-lg font-bold">{category.count}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
                <h2 className="text-2xl md:text-3xl font-bold">Technical Innovation</h2>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>The PBIP Breakthrough: Safe Refactoring</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    The key innovation is the PBIP (Power BI Project) connector that performs file-based editing,
                    simultaneously updating both the semantic model layer and report visual definitions—something
                    the native TOM API cannot achieve.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <FileCode className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">TMDL Updates</h4>
                        <p className="text-xs text-muted-foreground">Modifies Tabular Model Definition Language files</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <Code2 className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">DAX Rewriting</h4>
                        <p className="text-xs text-muted-foreground">Regex-based expression updates with quote fixing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <Eye className="h-5 w-5 text-purple-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">Visual.json Sync</h4>
                        <p className="text-xs text-muted-foreground">Updates all report visual bindings atomically</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <Database className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">Q&A Schema</h4>
                        <p className="text-xs text-muted-foreground">Maintains natural language query mappings</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900 text-slate-100 font-mono text-sm overflow-x-auto">
                    <div className="text-slate-400 mb-2"># Safe rename workflow</div>
                    <div className="text-green-400">$ pbip_load_project("/path/to/project.pbip")</div>
                    <div className="text-slate-300">Project loaded: 12 tables, 45 measures</div>
                    <div className="text-green-400 mt-2">$ pbip_rename_table("Sales", "SalesTransactions")</div>
                    <div className="text-slate-300">Updated: model.tmdl, 23 DAX expressions, 8 visuals, Q&A schema</div>
                    <div className="text-blue-400 mt-2"># All references preserved - zero broken visuals</div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Enterprise Security & Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <Badge className="mb-3">PII Detection</Badge>
                      <p className="text-sm font-medium">Automatic Masking</p>
                      <p className="text-xs text-muted-foreground mt-1">SSN, Credit Cards, Emails, Phone</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <Badge className="mb-3">Audit Logging</Badge>
                      <p className="text-sm font-medium">Complete Trail</p>
                      <p className="text-xs text-muted-foreground mt-1">GDPR, HIPAA, SOC2 Ready</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 text-center">
                      <Badge className="mb-3">Access Control</Badge>
                      <p className="text-sm font-medium">Table & Column Level</p>
                      <p className="text-xs text-muted-foreground mt-1">Configurable Policies</p>
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
                    <div className="text-3xl font-bold text-green-500 mb-2">34</div>
                    <div className="text-sm font-medium">MCP Tools</div>
                    <div className="text-xs text-muted-foreground">Available for AI assistants</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-500 mb-2">0</div>
                    <div className="text-sm font-medium">Broken Visuals</div>
                    <div className="text-xs text-muted-foreground">With PBIP-safe refactoring</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-purple-500 mb-2">2</div>
                    <div className="text-sm font-medium">Environments</div>
                    <div className="text-xs text-muted-foreground">Desktop + Cloud unified</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-amber-500 mb-2">MIT</div>
                    <div className="text-sm font-medium">Open Source</div>
                    <div className="text-xs text-muted-foreground">Community-driven development</div>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Supercharge Your Power BI Workflow?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Transform how you interact with Power BI. Let AI assistants help you explore models, write DAX,
                and safely refactor your semantic models—all through natural language.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://github.com/sulaiman013/powerbi-mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  <GitBranch className="h-5 w-5" />
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

      <footer className="bg-muted/30 border-t py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Sulaiman Ahmed. Building the Future of AI-Powered Business Intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PowerBIMCPCaseStudy;
