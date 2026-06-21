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
  ChevronRight,
  Bot,
  MessageSquare,
  GitBranch,
  Key,
  Cloud,
  Sparkles,
  FileCode,
  Layers,
  Play
} from "lucide-react";

const FabricSQLAssistantCaseStudy = () => {
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
      before: "Write complex SQL: SELECT SUM(sales) FROM ...",
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
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-section-sm md:py-section bg-accent-brand-soft/40">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="outline" className="text-xs">Pet Project</Badge>
                <ChevronRight aria-hidden="true" className="h-4 w-4 text-foreground-muted" />
                <Badge variant="outline" className="text-xs">AI + Microsoft Fabric</Badge>
              </div>

              <h1 className="font-serif text-display-lg font-normal mb-6 leading-tight text-foreground">
                Fabric SQL Assistant: <em className="italic font-normal text-accent-brand-strong">natural language queries</em> for Microsoft Fabric
              </h1>

              <p className="text-body-lg text-foreground-muted mb-8 leading-relaxed max-w-4xl">
                An MCP server that enables Claude Desktop to interact with Microsoft Fabric SQL databases through
                natural language: translating plain English questions into SQL queries and returning actionable insights
                without writing a single line of code.
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
                  href="https://github.com/sulaiman013/Fabric-SQL-Assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent-brand text-accent-brand-foreground rounded-sm transition-colors duration-fast ease-out-quart"
                >
                  <GitBranch aria-hidden="true" className="h-4 w-4" />
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
                  Microsoft Fabric is a powerful unified analytics platform, but accessing data requires SQL expertise
                  and complex authentication setup. Business users often wait for data teams to write queries,
                  creating bottlenecks and delays in decision-making.
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
                    I built an <strong className="text-foreground font-semibold">MCP server</strong> that bridges Claude Desktop
                    with Microsoft Fabric, using OpenAI for intelligent query generation and MSAL for seamless
                    Azure AD authentication.
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
                          <MessageSquare aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                        </div>
                        <div>
                          <CardTitle className="text-h4 font-semibold text-foreground">Claude Desktop</CardTitle>
                          <p className="text-body-sm text-foreground-muted">Natural Language Input</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body-sm text-foreground-muted">User asks questions in plain English</p>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center">
                    <ArrowRight aria-hidden="true" className="h-6 w-6 text-foreground-subtle rotate-90" />
                  </div>

                  <Card className="transition-colors duration-fast ease-out-quart hover:border-border-strong">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                          <Sparkles aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                        </div>
                        <div>
                          <CardTitle className="text-h4 font-semibold text-foreground">OpenAI LLM</CardTitle>
                          <p className="text-body-sm text-foreground-muted">Query Translation</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body-sm text-foreground-muted">Converts natural language to optimized SQL</p>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center">
                    <ArrowRight aria-hidden="true" className="h-6 w-6 text-foreground-subtle rotate-90" />
                  </div>

                  <Card className="transition-colors duration-fast ease-out-quart hover:border-border-strong">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                          <Database aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                        </div>
                        <div>
                          <CardTitle className="text-h4 font-semibold text-foreground">Microsoft Fabric</CardTitle>
                          <p className="text-body-sm text-foreground-muted">SQL Endpoint</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body-sm text-foreground-muted">Executes queries via pyodbc with Azure AD auth</p>
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

              <Card className="bg-background">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-background-elevated">
                          <th className="text-left p-4 text-caption font-medium uppercase tracking-wide text-foreground-muted">Area</th>
                          <th className="text-left p-4 text-caption font-medium uppercase tracking-wide text-foreground-muted">Before</th>
                          <th className="text-left p-4 text-caption font-medium uppercase tracking-wide text-accent-brand-strong">After</th>
                        </tr>
                      </thead>
                      <tbody>
                        {beforeAfter.map((row, index) => (
                          <tr key={index} className="border-b border-border last:border-0">
                            <td className="p-4 text-body-sm font-semibold text-foreground">{row.area}</td>
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

        {/* Core Components */}
        <section className="py-section-sm bg-background">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                  <Layers aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                </div>
                <h2 className="font-serif text-h2 font-normal text-foreground">Core Components</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {coreComponents.map((component, index) => (
                  <Card key={index} className="transition-colors duration-fast ease-out-quart hover:border-border-strong">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-3">
                        <FileCode aria-hidden="true" className="h-4 w-4 text-accent-brand-strong" />
                        <code className="text-code font-mono bg-background-elevated text-accent-brand-strong px-2 py-1 rounded-xs">{component.name}</code>
                      </div>
                      <p className="text-body-sm text-foreground-muted">{component.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Video Demo */}
        <section className="py-section-sm bg-background-elevated">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                  <Play aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                </div>
                <h2 className="font-serif text-h2 font-normal text-foreground">See It In Action</h2>
              </div>

              <Card className="overflow-hidden bg-background">
                <CardHeader className="bg-background-elevated border-b border-border">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-h4 font-semibold text-foreground flex items-center gap-2">
                      <Play aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
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

              <p className="text-center text-body-sm text-foreground-muted mt-4">
                Watch how natural language queries are translated into SQL and executed against Microsoft Fabric in real-time.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section-sm bg-accent-brand-soft/40 border-t border-border">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-h2 font-normal mb-4 text-foreground">
                Ready to query Fabric with <em className="italic font-normal text-accent-brand-strong">natural language</em>?
              </h2>
              <p className="text-body-lg text-foreground-muted mb-8 max-w-2xl mx-auto">
                Unlock the power of Microsoft Fabric for everyone on your team. No SQL expertise required: just
                ask questions and get answers.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://github.com/sulaiman013/Fabric-SQL-Assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-brand text-accent-brand-foreground rounded-sm transition-colors duration-fast ease-out-quart font-semibold"
                >
                  <GitBranch aria-hidden="true" className="h-5 w-5" />
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

      <Footer />
    </div>
  );
};

export default FabricSQLAssistantCaseStudy;
