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
  Bot,
  MessageSquare,
  GitBranch,
  Key,
  Cloud,
  Sparkles,
  Terminal,
  FileCode,
  Layers,
  Play
} from "lucide-react";

const FabricSQLAssistantCaseStudy = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const keyResults = [
    { icon: MessageSquare, value: "Natural", label: "Language Queries", description: "No SQL required" },
    { icon: Cloud, value: "Azure", label: "AD Integration", description: "Enterprise authentication" },
    { icon: Sparkles, value: "AI", label: "Query Generation", description: "OpenAI-powered" },
  ];

  const challenges = [
    {
      icon: Code2,
      title: "SQL Expertise Required",
      description: "Business users and analysts need to write complex SQL queries to access Fabric data, creating bottlenecks for non-technical team members."
    },
    {
      icon: Key,
      title: "Complex Authentication",
      description: "Microsoft Fabric requires Azure AD authentication with proper token management, making direct database access challenging to set up."
    },
    {
      icon: Database,
      title: "Schema Discovery",
      description: "Understanding table structures, relationships, and available data fields requires manual exploration through multiple tools."
    },
    {
      icon: Bot,
      title: "No Conversational Interface",
      description: "Traditional database tools lack the ability to understand natural language, forcing users to translate questions into SQL syntax."
    }
  ];

  const solutionFeatures = [
    "Natural language to SQL translation via OpenAI API",
    "Seamless Azure AD authentication with MSAL",
    "Automatic schema discovery and table inspection",
    "Direct SQL query execution on Fabric endpoints",
    "Conversational data exploration through Claude Desktop",
    "Cross-platform support for Windows and macOS"
  ];

  const beforeAfter = [
    {
      area: "Data Queries",
      before: "Write complex SQL: SELECT SUM(sales) FROM...",
      after: "Ask: 'What were total sales by product category?'"
    },
    {
      area: "Schema Discovery",
      before: "Navigate Fabric UI, check documentation",
      after: "Ask: 'What tables are available?'"
    },
    {
      area: "Authentication",
      before: "Manual token management and refresh",
      after: "Automatic Azure AD token handling"
    },
    {
      area: "Data Analysis",
      before: "Export data, analyze in separate tools",
      after: "Conversational analysis in Claude Desktop"
    },
    {
      area: "Learning Curve",
      before: "Learn SQL syntax and Fabric specifics",
      after: "Just ask questions in plain English"
    }
  ];

  const techStack = [
    { name: "Python 3.8+", role: "Core Runtime" },
    { name: "Model Context Protocol", role: "AI Integration" },
    { name: "pyodbc", role: "Database Connectivity" },
    { name: "MSAL", role: "Azure Authentication" },
    { name: "OpenAI API", role: "Query Generation" },
  ];

  const coreComponents = [
    { name: "mcp_server.py", description: "Main MCP server implementation and request handling" },
    { name: "db.py", description: "Database connection and SQL query execution" },
    { name: "auth.py", description: "Azure AD authentication and token management" },
    { name: "llm.py", description: "OpenAI integration for query generation" },
    { name: "prompt.py", description: "Prompt engineering for accurate SQL translation" },
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
                <Badge variant="outline" className="text-xs">AI + Microsoft Fabric</Badge>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-primary">Fabric SQL Assistant:</span> Natural Language Queries for Microsoft Fabric
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl">
                An MCP server that enables Claude Desktop to interact with Microsoft Fabric SQL databases through
                natural language—translating plain English questions into SQL queries and returning actionable insights
                without writing a single line of code.
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
                  href="https://github.com/sulaiman013/Fabric-SQL-Assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <GitBranch className="h-4 w-4" />
                  View on GitHub
                </a>
                <Badge variant="secondary" className="px-3 py-2">
                  Open Source
                </Badge>
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
                  Microsoft Fabric is a powerful unified analytics platform, but accessing data requires SQL expertise
                  and complex authentication setup. Business users often wait for data teams to write queries,
                  creating bottlenecks and delays in decision-making.
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
                    I built an <strong className="text-foreground">MCP server</strong> that bridges Claude Desktop
                    with Microsoft Fabric, using OpenAI for intelligent query generation and MSAL for seamless
                    Azure AD authentication.
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
                          <MessageSquare className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Claude Desktop</CardTitle>
                          <p className="text-sm text-muted-foreground">Natural Language Input</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">User asks questions in plain English</p>
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
                          <Sparkles className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">OpenAI LLM</CardTitle>
                          <p className="text-sm text-muted-foreground">Query Translation</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Converts natural language to optimized SQL</p>
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
                          <Database className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Microsoft Fabric</CardTitle>
                          <p className="text-sm text-muted-foreground">SQL Endpoint</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Executes queries via pyodbc with Azure AD auth</p>
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

        {/* Core Components */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Core Components</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {coreComponents.map((component, index) => (
                  <Card key={index} className="hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-3">
                        <FileCode className="h-4 w-4 text-primary" />
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">{component.name}</code>
                      </div>
                      <p className="text-sm text-muted-foreground">{component.description}</p>
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
                <h2 className="text-2xl md:text-3xl font-bold">How It Works</h2>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Natural Language to SQL Pipeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    The system uses a multi-stage pipeline that translates natural language questions into
                    optimized SQL queries, executes them against Microsoft Fabric, and returns formatted results.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <Key className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">Azure AD Auth</h4>
                        <p className="text-xs text-muted-foreground">MSAL handles token acquisition and refresh</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <Sparkles className="h-5 w-5 text-purple-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">OpenAI Integration</h4>
                        <p className="text-xs text-muted-foreground">GPT models generate context-aware SQL</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <Database className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">Schema Awareness</h4>
                        <p className="text-xs text-muted-foreground">Automatically discovers tables and columns</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <Terminal className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">Query Execution</h4>
                        <p className="text-xs text-muted-foreground">pyodbc connects to Fabric SQL endpoints</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900 text-slate-100 font-mono text-sm overflow-x-auto">
                    <div className="text-slate-400 mb-2"># Example conversation flow</div>
                    <div className="text-blue-400">User: "What tables are available?"</div>
                    <div className="text-slate-300">→ Schema discovery query executed</div>
                    <div className="text-green-400">Assistant: "I found 5 tables: Sales, Products, Customers..."</div>
                    <div className="text-blue-400 mt-3">User: "Show me total sales by product category"</div>
                    <div className="text-slate-300">→ OpenAI generates: SELECT category, SUM(amount)...</div>
                    <div className="text-green-400">Assistant: "Here are the sales by category: Electronics: $1.2M..."</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Demo */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <Play className="h-5 w-5 text-red-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">See It In Action</h2>
              </div>

              <Card className="overflow-hidden shadow-xl">
                <CardHeader className="bg-muted/30 border-b">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Play className="h-5 w-5 text-red-500" />
                      Fabric SQL Assistant Demo
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">Video Tutorial</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/aQoJ5_XmtGk"
                      title="Fabric SQL Assistant Demo"
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

              <p className="text-center text-muted-foreground mt-4">
                Watch how natural language queries are translated into SQL and executed against Microsoft Fabric in real-time.
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
                <Card className="text-center bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-green-500 mb-2">Zero</div>
                    <div className="text-sm font-medium">SQL Required</div>
                    <div className="text-xs text-muted-foreground">Natural language only</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-500 mb-2">Azure</div>
                    <div className="text-sm font-medium">AD Integrated</div>
                    <div className="text-xs text-muted-foreground">Enterprise security</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-purple-500 mb-2">AI</div>
                    <div className="text-sm font-medium">Query Generation</div>
                    <div className="text-xs text-muted-foreground">OpenAI-powered</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-amber-500 mb-2">2</div>
                    <div className="text-sm font-medium">Platforms</div>
                    <div className="text-xs text-muted-foreground">Windows & macOS</div>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Query Fabric with Natural Language?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Unlock the power of Microsoft Fabric for everyone on your team. No SQL expertise required—just
                ask questions and get answers.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://github.com/sulaiman013/Fabric-SQL-Assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  <GitBranch className="h-5 w-5" />
                  Get Started on GitHub
                </a>
              </div>
              <div className="flex flex-wrap gap-3 justify-center mt-6">
                <Badge className="text-sm px-4 py-2">Microsoft Fabric</Badge>
                <Badge className="text-sm px-4 py-2">Claude Desktop</Badge>
                <Badge className="text-sm px-4 py-2">OpenAI</Badge>
                <Badge className="text-sm px-4 py-2">Azure AD</Badge>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted/30 border-t py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Sulaiman Ahmed. Democratizing Data Access with AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FabricSQLAssistantCaseStudy;
