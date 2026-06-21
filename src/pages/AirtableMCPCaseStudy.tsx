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
  Lock,
  Search,
  GitBranch,
  FileJson,
  Wrench,
  MessageSquare
} from "lucide-react";

const AirtableMCPCaseStudy = () => {
  const keyResults = [
    { icon: Wrench, value: "6", label: "Core Tools", description: "For database operations" },
    { icon: Shield, value: "100%", label: "Input Validation", description: "Security-first design" },
    { icon: MessageSquare, value: "Natural", label: "Language Queries", description: "Intuitive data access" },
  ];

  const challenges = [
    {
      icon: AlertTriangle,
      title: "Complex Query Syntax",
      description: "Airtable's formula-based filtering requires learning proprietary syntax, creating barriers for non-technical users who need data access."
    },
    {
      icon: Database,
      title: "Manual Data Aggregation",
      description: "Performing calculations like sums, averages, and group-by operations requires exporting data or writing complex formulas."
    },
    {
      icon: Lock,
      title: "Security Concerns",
      description: "Direct API access without proper validation exposes databases to injection attacks and unauthorized data exposure."
    },
    {
      icon: Bot,
      title: "No AI Integration",
      description: "AI assistants could not interact with Airtable data, forcing users to manually translate between natural language and API calls."
    }
  ];

  const solutionFeatures = [
    "Natural language date parsing for intuitive time-based queries",
    "Advanced filtering with date ranges and formula-based queries",
    "Aggregation with sum, count, average, min/max and grouping",
    "Strict ID format validation preventing injection attacks",
    "XSS and SQL injection attempt blocking",
    "Comprehensive schema inspection and field analysis"
  ];

  const beforeAfter = [
    {
      area: "Data Queries",
      before: "Write Airtable formulas: IF({Status}='Active', ...)",
      after: "Ask: 'Find all active records from last month'"
    },
    {
      area: "Aggregations",
      before: "Export to Excel, create pivot tables manually",
      after: "Ask: 'Calculate total revenue by region'"
    },
    {
      area: "Schema Discovery",
      before: "Navigate UI to find table structures",
      after: "Ask: 'What fields are in the Orders table?'"
    },
    {
      area: "Date Filtering",
      before: "DATETIME_DIFF(NOW(), {Date}, 'days') < 30",
      after: "Ask: 'Show orders from the past 30 days'"
    },
    {
      area: "Security",
      before: "Direct API access with minimal validation",
      after: "Input sanitization with pattern detection"
    }
  ];

  const techStack = [
    { name: "Python 3.9+", role: "Core Runtime" },
    { name: "Model Context Protocol", role: "AI Integration" },
    { name: "pyairtable SDK", role: "Database Access" },
    { name: "Claude Desktop", role: "AI Client" },
  ];

  const coreTools = [
    { name: "list_bases", description: "Enumerate all accessible Airtable databases" },
    { name: "list_tables", description: "View tables within a specific base" },
    { name: "search_records", description: "Query with filters, date ranges, field searches" },
    { name: "aggregate_records", description: "Sum, count, average with grouping support" },
    { name: "get_field_values", description: "Extract distinct values from any field" },
    { name: "get_table_schema", description: "Retrieve complete table structure details" },
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
                <Badge variant="outline" className="text-xs">AI + Airtable</Badge>
              </div>

              <h1 className="font-serif text-display-lg font-normal mb-6 leading-tight text-foreground">
                Airtable MCP Server: <em className="italic font-normal text-accent-brand-strong">natural language database operations</em> for AI assistants
              </h1>

              <p className="text-body-lg text-foreground-muted mb-8 leading-relaxed max-w-4xl">
                A security-first Model Context Protocol server enabling AI assistants to interact with Airtable databases
                through natural language: performing advanced filtering, aggregations, and schema discovery without
                writing a single formula.
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
                  href="https://github.com/sulaiman013/AIRTABLE-MCP"
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
                    <div className="font-mono text-3xl md:text-4xl font-bold text-accent-brand-strong mb-2">{result.value}</div>
                    <div className="font-semibold mb-1 text-foreground">{result.label}</div>
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
                <h2 className="font-serif text-h2 font-normal text-foreground">The Challenge</h2>
              </div>

              <div className="mb-8">
                <p className="text-body-lg text-foreground-muted leading-relaxed max-w-prose">
                  Airtable is a powerful low-code database platform, but accessing and analyzing data programmatically
                  requires learning complex formula syntax. Teams needed a way to query their Airtable data using
                  natural language while maintaining enterprise-grade security.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {challenges.map((challenge, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-md bg-accent-brand-soft flex items-center justify-center flex-shrink-0">
                          <challenge.icon aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                        </div>
                        <div>
                          <h3 className="font-sans text-h4 font-semibold mb-2 text-foreground">{challenge.title}</h3>
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
                    I built a <strong className="text-foreground font-semibold">security-first MCP server</strong> that bridges
                    AI assistants with Airtable, featuring intelligent date parsing, comprehensive aggregations,
                    and multiple layers of input validation.
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
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                          <Search aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                        </div>
                        <div>
                          <CardTitle className="text-h4">Query Layer</CardTitle>
                          <p className="text-body-sm text-foreground-muted">Natural Language Processing</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body-sm text-foreground-muted">Intelligent date parsing and filter translation</p>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center">
                    <ArrowRight aria-hidden="true" className="h-6 w-6 text-foreground-subtle rotate-90" />
                  </div>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                          <Shield aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                        </div>
                        <div>
                          <CardTitle className="text-h4">Security Layer</CardTitle>
                          <p className="text-body-sm text-foreground-muted">Validation & Sanitization</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body-sm text-foreground-muted">XSS/injection blocking, ID format validation, type checking</p>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center">
                    <ArrowRight aria-hidden="true" className="h-6 w-6 text-foreground-subtle rotate-90" />
                  </div>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                          <Database aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                        </div>
                        <div>
                          <CardTitle className="text-h4">Data Layer</CardTitle>
                          <p className="text-body-sm text-foreground-muted">pyairtable SDK</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body-sm text-foreground-muted">Secure API communication with Airtable databases</p>
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
                        <tr className="border-b border-border bg-background">
                          <th className="text-left p-4 font-semibold text-foreground">Area</th>
                          <th className="text-left p-4 font-semibold text-foreground-muted">Before</th>
                          <th className="text-left p-4 font-semibold text-accent-brand-strong">After</th>
                        </tr>
                      </thead>
                      <tbody>
                        {beforeAfter.map((row, index) => (
                          <tr key={index} className="border-b border-border last:border-0">
                            <td className="p-4 font-medium text-foreground">{row.area}</td>
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

        {/* Core Tools */}
        <section className="py-section-sm bg-background">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                  <Wrench aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                </div>
                <h2 className="font-serif text-h2 font-normal text-foreground">6 Core Tools</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {coreTools.map((tool, index) => (
                  <Card key={index} className="hover:border-border-strong">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-3">
                        <code className="font-mono text-body-sm bg-background-elevated text-accent-brand-strong px-2 py-1 rounded-xs">{tool.name}</code>
                      </div>
                      <p className="text-body-sm text-foreground-muted">{tool.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security Architecture */}
        <section className="py-section-sm bg-background-elevated">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                  <Code2 aria-hidden="true" className="h-5 w-5 text-accent-brand-strong" />
                </div>
                <h2 className="font-serif text-h2 font-normal text-foreground">Security Architecture</h2>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Multi-Layer Input Validation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-body text-foreground-muted">
                    The server implements defense-in-depth security with multiple validation layers protecting
                    against common attack vectors while maintaining usability.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 rounded-md bg-background">
                      <Lock aria-hidden="true" className="h-5 w-5 text-accent-brand-strong mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-sans text-body-sm font-semibold text-foreground">ID Format Validation</h4>
                        <p className="text-caption text-foreground-muted">Base IDs must start with "app", table IDs with "tbl"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-md bg-background">
                      <Shield aria-hidden="true" className="h-5 w-5 text-accent-brand-strong mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-sans text-body-sm font-semibold text-foreground">Injection Blocking</h4>
                        <p className="text-caption text-foreground-muted">XSS and SQL injection pattern detection</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-md bg-background">
                      <FileJson aria-hidden="true" className="h-5 w-5 text-accent-brand-strong mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-sans text-body-sm font-semibold text-foreground">Type Checking</h4>
                        <p className="text-caption text-foreground-muted">Strong typing prevents confusion attacks</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-md bg-background">
                      <AlertTriangle aria-hidden="true" className="h-5 w-5 text-accent-brand-strong mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-sans text-body-sm font-semibold text-foreground">Error Sanitization</h4>
                        <p className="text-caption text-foreground-muted">Prevents information disclosure in error messages</p>
                      </div>
                    </div>
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
              <h2 className="font-serif text-h2 font-normal mb-4 text-foreground">Ready to query Airtable with <em className="italic font-normal text-accent-brand-strong">natural language</em>?</h2>
              <p className="text-body text-foreground-muted mb-8 max-w-2xl mx-auto">
                Transform how your team interacts with Airtable data. Let AI assistants handle the complexity
                while you focus on insights and decision-making.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://github.com/sulaiman013/AIRTABLE-MCP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-brand text-accent-brand-foreground rounded-sm transition-colors duration-fast ease-out-quart font-semibold"
                >
                  <GitBranch aria-hidden="true" className="h-5 w-5" />
                  Get Started on GitHub
                </a>
              </div>
              <div className="flex flex-wrap gap-3 justify-center mt-6">
                <Badge className="text-body-sm px-4 py-2">Natural Language</Badge>
                <Badge className="text-body-sm px-4 py-2">Security-First</Badge>
                <Badge className="text-body-sm px-4 py-2">Claude Integration</Badge>
                <Badge className="text-body-sm px-4 py-2">Aggregations</Badge>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AirtableMCPCaseStudy;
