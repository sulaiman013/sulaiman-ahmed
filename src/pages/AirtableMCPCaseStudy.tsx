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
  Lock,
  Search,
  GitBranch,
  Table,
  Filter,
  Calculator,
  FileJson,
  Wrench,
  MessageSquare
} from "lucide-react";

const AirtableMCPCaseStudy = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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
      description: "AI assistants couldn't interact with Airtable data, forcing users to manually translate between natural language and API calls."
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
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="outline" className="text-xs">Case Study</Badge>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Badge variant="outline" className="text-xs">AI + Airtable</Badge>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-primary">Airtable MCP Server:</span> Natural Language Database Operations for AI Assistants
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl">
                A security-first Model Context Protocol server enabling AI assistants to interact with Airtable databases
                through natural language—performing advanced filtering, aggregations, and schema discovery without
                writing a single formula.
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
                  href="https://github.com/sulaiman013/AIRTABLE-MCP"
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
                  Airtable is a powerful low-code database platform, but accessing and analyzing data programmatically
                  requires learning complex formula syntax. Teams needed a way to query their Airtable data using
                  natural language while maintaining enterprise-grade security.
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
                    I built a <strong className="text-foreground">security-first MCP server</strong> that bridges
                    AI assistants with Airtable, featuring intelligent date parsing, comprehensive aggregations,
                    and multiple layers of input validation.
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
                  <Card className="border-amber-500/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                          <Search className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Query Layer</CardTitle>
                          <p className="text-sm text-muted-foreground">Natural Language Processing</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Intelligent date parsing and filter translation</p>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center">
                    <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                  </div>

                  <Card className="border-red-500/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-red-500" />
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                          <Shield className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Security Layer</CardTitle>
                          <p className="text-sm text-muted-foreground">Validation & Sanitization</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">XSS/injection blocking, ID format validation, type checking</p>
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
                          <CardTitle className="text-lg">Data Layer</CardTitle>
                          <p className="text-sm text-muted-foreground">pyairtable SDK</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Secure API communication with Airtable databases</p>
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

        {/* Core Tools */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wrench className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">6 Core Tools</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {coreTools.map((tool, index) => (
                  <Card key={index} className="hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-3">
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">{tool.name}</code>
                      </div>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
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
                <h2 className="text-2xl md:text-3xl font-bold">Security Architecture</h2>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Multi-Layer Input Validation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    The server implements defense-in-depth security with multiple validation layers protecting
                    against common attack vectors while maintaining usability.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <Lock className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">ID Format Validation</h4>
                        <p className="text-xs text-muted-foreground">Base IDs must start with "app", table IDs with "tbl"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <Shield className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">Injection Blocking</h4>
                        <p className="text-xs text-muted-foreground">XSS and SQL injection pattern detection</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <FileJson className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">Type Checking</h4>
                        <p className="text-xs text-muted-foreground">Strong typing prevents confusion attacks</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <AlertTriangle className="h-5 w-5 text-purple-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">Error Sanitization</h4>
                        <p className="text-xs text-muted-foreground">Prevents information disclosure in error messages</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900 text-slate-100 font-mono text-sm overflow-x-auto">
                    <div className="text-slate-400 mb-2"># Example natural language queries</div>
                    <div className="text-green-400">"Find all orders from May 2024"</div>
                    <div className="text-slate-300">→ Parsed to: date_range filter with May 1-31, 2024</div>
                    <div className="text-green-400 mt-2">"Calculate total revenue by region"</div>
                    <div className="text-slate-300">→ Aggregation: SUM(revenue) GROUP BY region</div>
                    <div className="text-green-400 mt-2">"Show customers with amount greater than $1000"</div>
                    <div className="text-slate-300">→ Filter: amount {">"} 1000</div>
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
                    <div className="text-3xl font-bold text-green-500 mb-2">6</div>
                    <div className="text-sm font-medium">MCP Tools</div>
                    <div className="text-xs text-muted-foreground">Complete data operations</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-500 mb-2">Zero</div>
                    <div className="text-sm font-medium">Formula Writing</div>
                    <div className="text-xs text-muted-foreground">Natural language only</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-purple-500 mb-2">Multi</div>
                    <div className="text-sm font-medium">Client Support</div>
                    <div className="text-xs text-muted-foreground">Claude, Cursor, VS Code</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-amber-500 mb-2">MIT</div>
                    <div className="text-sm font-medium">Open Source</div>
                    <div className="text-xs text-muted-foreground">Community-driven</div>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Query Airtable with Natural Language?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Transform how your team interacts with Airtable data. Let AI assistants handle the complexity
                while you focus on insights and decision-making.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://github.com/sulaiman013/AIRTABLE-MCP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  <GitBranch className="h-5 w-5" />
                  Get Started on GitHub
                </a>
              </div>
              <div className="flex flex-wrap gap-3 justify-center mt-6">
                <Badge className="text-sm px-4 py-2">Natural Language</Badge>
                <Badge className="text-sm px-4 py-2">Security-First</Badge>
                <Badge className="text-sm px-4 py-2">Claude Integration</Badge>
                <Badge className="text-sm px-4 py-2">Aggregations</Badge>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted/30 border-t py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Sulaiman Ahmed. Building Secure AI-Data Integrations.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AirtableMCPCaseStudy;
