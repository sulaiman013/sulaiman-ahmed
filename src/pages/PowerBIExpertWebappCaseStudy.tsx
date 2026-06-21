import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Globe,
  CheckCircle2,
  Code2,
  AlertTriangle,
  Shield,
  ChevronRight,
  Lock,
  FileCode,
  GitBranch,
  CloudCog,
  Play,
  DollarSign,
  Clock,
  Users,
  MessageSquare,
  Cpu,
  Building2,
} from "lucide-react";

const PowerBIExpertWebappCaseStudy = () => {
  const keyResults = [
    { icon: Clock, value: "70-80%", label: "Time Saved", description: "Reduction in DAX development" },
    { icon: DollarSign, value: "$0", label: "Per-User Fees", description: "Deploy once for entire team" },
    { icon: Shield, value: "100%", label: "Data Security", description: "Schema-only AI transmission" },
  ];

  const challenges = [
    {
      icon: DollarSign,
      title: "Expensive Copilot Licensing",
      description: "Microsoft Copilot for Power BI requires Premium/Fabric capacity plus $30/user/month, which is prohibitively expensive for many organizations."
    },
    {
      icon: Lock,
      title: "No AI for Pro License Users",
      description: "The majority of Power BI users on Pro licenses are completely locked out of AI assistance features."
    },
    {
      icon: Globe,
      title: "Air-Gap Compliance Issues",
      description: "Regulated industries (healthcare, finance, government) cannot use cloud AI due to strict compliance requirements like HIPAA and SOX."
    },
    {
      icon: Code2,
      title: "Complex DAX Syntax",
      description: "DAX is powerful but notoriously difficult. Business users wait on IT for simple queries, while developers spend hours debugging syntax."
    }
  ];

  const solutionFeatures = [
    "Natural language to DAX query generation with auto-execution",
    "Multi-provider LLM support: Azure Claude, Azure OpenAI, Ollama (local)",
    "Automatic USERELATIONSHIP handling for inactive relationships",
    "Interactive PBIP rename tools with automatic reference updates",
    "Schema-only transmission, actual row data never sent to AI",
    "Tamper-evident audit logging with HMAC signatures and hash chains"
  ];

  const beforeAfter = [
    {
      area: "DAX Development",
      before: "Write complex DAX manually, debug syntax errors for hours",
      after: "Ask in plain English: 'Revenue by region for Q4', get working DAX instantly"
    },
    {
      area: "AI Access",
      before: "Need Premium + $30/user/month Copilot license",
      after: "Use existing Azure AI investment or free local Ollama"
    },
    {
      area: "Regulated Environments",
      before: "No AI allowed due to data sovereignty concerns",
      after: "Deploy with Ollama: AI runs 100% locally, zero external calls"
    },
    {
      area: "PBIP Refactoring",
      before: "Rename table = hours fixing broken references manually",
      after: "Interactive UI updates all 127 references across 15 files instantly"
    },
    {
      area: "RLS Testing",
      before: "Deploy to test, hope security works correctly",
      after: "Impersonate any user, verify RLS filters data correctly"
    }
  ];

  const techStack = [
    { name: "Python", role: "Backend Runtime" },
    { name: "Flask", role: "Web Framework" },
    { name: "ADOMD.NET", role: "Desktop Connectivity" },
    { name: "XMLA", role: "Cloud Connectivity" },
    { name: "Azure AI Foundry", role: "Enterprise LLM" },
    { name: "Ollama", role: "Local LLM" },
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Power BI Embedded + AI Chat",
      description: "Add a 'Chat with Your Data' button alongside embedded reports in custom applications"
    },
    {
      icon: Users,
      title: "ISV/SaaS Product Enhancement",
      description: "White-label and integrate into your product, charge premium for an 'AI Analytics' tier"
    },
    {
      icon: Shield,
      title: "Regulated Industries",
      description: "Deploy with Ollama for banks, healthcare, government, 100% air-gapped operation"
    },
    {
      icon: Cpu,
      title: "Self-Service Analytics Portal",
      description: "Multi-tenant portal where each client chats with their own semantic model"
    },
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
                <ChevronRight className="h-4 w-4 text-foreground-subtle" />
                <Badge variant="outline" className="text-xs">AI & Analytics</Badge>
              </div>

              <h1 className="font-serif text-display-lg mb-6 leading-tight text-foreground">
                Power BI Expert Webapp: enterprise AI assistance, <em className="italic font-normal">without</em> the enterprise price tag
              </h1>

              <p className="text-body-lg text-foreground-muted mb-8 leading-relaxed max-w-prose">
                An open-source, white-label AI chat layer for Power BI that organizations can customize and embed into their own applications, enabling natural language analytics without Microsoft Copilot's licensing barriers.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {techStack.map((tech, index) => (
                  <Badge key={index} className="bg-accent-brand-soft text-accent-brand-strong hover:bg-accent-brand-soft px-3 py-1">
                    {tech.name}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/sulaiman013/powerbi-expert-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent-brand text-accent-brand-foreground rounded-md transition-colors duration-fast ease-out-quart hover:bg-accent-brand-strong"
                >
                  <GitBranch className="h-4 w-4" />
                  View on GitHub
                </a>
                <a
                  href="https://youtu.be/5gNa9BUJ4r8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border-strong bg-background-elevated text-foreground rounded-md transition-colors duration-fast ease-out-quart hover:border-border-strong hover:bg-background"
                >
                  <Play className="h-4 w-4" />
                  Watch Demo
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
                      <result.icon className="h-7 w-7 text-accent-brand-strong" />
                    </div>
                    <div className="font-mono text-3xl md:text-4xl font-bold text-accent-brand-strong mb-2">{result.value}</div>
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
                <div className="w-10 h-10 rounded-full bg-background-elevated border border-border flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                </div>
                <h2 className="font-serif text-h2 text-foreground">The Challenge</h2>
              </div>

              <div className="mb-8">
                <p className="text-body-lg text-foreground-muted leading-relaxed max-w-prose">
                  Microsoft Copilot for Power BI promises AI-powered analytics, but the reality is a significant barrier:
                  Premium/Fabric capacity requirement plus $30/user/month. For organizations with hundreds of users on
                  Pro licenses, or those in regulated industries that cannot use cloud AI, there was no viable option.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {challenges.map((challenge, index) => (
                  <Card key={index} className="bg-background transition-colors duration-fast ease-out-quart hover:border-border-strong">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-background-elevated border border-border flex items-center justify-center flex-shrink-0">
                          <challenge.icon className="h-5 w-5 text-foreground-muted" />
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

              {/* Key Insight */}
              <Card className="mt-10 bg-accent-brand-soft border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-background-elevated border border-border flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-accent-brand-strong" />
                    </div>
                    <div>
                      <h3 className="text-h3 font-bold mb-2 text-foreground">The Real Opportunity</h3>
                      <p className="text-foreground-muted">
                        This is not just a tool. It is an <em className="italic font-normal text-foreground">open-source template</em> that organizations can fork,
                        customize, and embed into their own applications: a starter kit for anyone building Power BI
                        Embedded solutions who wants AI-powered Q&A without months of development.
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
                  <CheckCircle2 className="h-5 w-5 text-accent-brand-strong" />
                </div>
                <h2 className="font-serif text-h2 text-foreground">The Solution</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-10">
                <div>
                  <p className="text-body-lg text-foreground-muted leading-relaxed mb-6 max-w-prose">
                    I built an <em className="italic font-normal text-foreground">enterprise-grade web application</em> that enables
                    natural language interaction with Power BI data, supporting multiple LLM providers and both
                    Desktop and Cloud connectivity.
                  </p>

                  <div className="space-y-3">
                    {solutionFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent-brand-strong mt-0.5 flex-shrink-0" />
                        <span className="text-body-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* LLM Provider Options */}
                <div className="space-y-4">
                  <h3 className="text-h4 font-semibold mb-4 text-foreground">Your AI, Your Choice</h3>

                  <Card className="transition-colors duration-fast ease-out-quart hover:border-border-strong">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                          <CloudCog className="h-5 w-5 text-accent-brand-strong" />
                        </div>
                        <div>
                          <CardTitle className="text-h4">Azure AI Foundry</CardTitle>
                          <p className="text-body-sm text-foreground-muted">Claude / OpenAI</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body-sm text-foreground-muted">Data stays in YOUR Azure subscription. Enterprise compliance, existing governance.</p>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center">
                    <span className="text-caption uppercase tracking-wide font-mono text-foreground-subtle">OR</span>
                  </div>

                  <Card className="transition-colors duration-fast ease-out-quart hover:border-border-strong">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                          <Cpu className="h-5 w-5 text-accent-brand-strong" />
                        </div>
                        <div>
                          <CardTitle className="text-h4">Ollama (Local)</CardTitle>
                          <p className="text-body-sm text-foreground-muted">DeepSeek, Qwen, etc.</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body-sm text-foreground-muted">100% air-gapped. Data never leaves your machine. Perfect for regulated industries.</p>
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
                  <TrendingUp className="h-5 w-5 text-accent-brand-strong" />
                </div>
                <h2 className="font-serif text-h2 text-foreground">The Transformation</h2>
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-background-elevated">
                          <th className="text-left p-4 text-caption uppercase tracking-wide font-mono text-foreground-muted">Area</th>
                          <th className="text-left p-4 text-caption uppercase tracking-wide font-mono text-foreground-muted">Before</th>
                          <th className="text-left p-4 text-caption uppercase tracking-wide font-mono text-accent-brand-strong">After</th>
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

        {/* Use Cases */}
        <section className="py-section-sm bg-background">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-accent-brand-strong" />
                </div>
                <h2 className="font-serif text-h2 text-foreground">Real-World Use Cases</h2>
              </div>

              <p className="text-body-lg text-foreground-muted mb-8 max-w-prose">
                This webapp is designed as a foundation for custom enterprise solutions, not just a standalone tool.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {useCases.map((useCase, index) => (
                  <Card key={index} className="transition-colors duration-fast ease-out-quart hover:border-border-strong">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-accent-brand-soft flex items-center justify-center flex-shrink-0">
                          <useCase.icon className="h-6 w-6 text-accent-brand-strong" />
                        </div>
                        <div>
                          <h3 className="text-h4 font-semibold mb-2 text-foreground">{useCase.title}</h3>
                          <p className="text-body-sm text-foreground-muted">{useCase.description}</p>
                        </div>
                      </div>
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
                  <Play className="h-5 w-5 text-accent-brand-strong" />
                </div>
                <h2 className="font-serif text-h2 text-foreground">See It In Action</h2>
              </div>

              <Card className="overflow-hidden">
                <CardHeader className="bg-background border-b border-border">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-h4">
                      <Play className="h-5 w-5 text-accent-brand-strong" />
                      Complete Setup & Demo
                    </CardTitle>
                    <Badge className="text-xs bg-accent-brand text-accent-brand-foreground">Full Walkthrough</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.youtube.com/embed/5gNa9BUJ4r8"
                      title="Power BI Expert Webapp Demo"
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

              <div className="mt-6 p-4 rounded-md bg-background border border-border text-center">
                <p className="text-body-sm text-foreground-muted">
                  <span className="font-semibold text-foreground">Demo Covers:</span> Setup, Azure AI integration, Desktop connectivity,
                  USERELATIONSHIP automation, PBIP rename tools, and Power BI Service semantic model chat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Architecture */}
        <section className="py-section-sm bg-background">
          <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent-brand-soft flex items-center justify-center">
                  <Shield className="h-5 w-5 text-accent-brand-strong" />
                </div>
                <h2 className="font-serif text-h2 text-foreground">Enterprise Security Architecture</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Card className="text-center transition-colors duration-fast ease-out-quart hover:border-border-strong">
                  <CardContent className="pt-6">
                    <Shield className="h-8 w-8 text-accent-brand-strong mx-auto mb-3" />
                    <div className="text-h4 font-semibold mb-1 text-foreground">Data Boundary</div>
                    <div className="text-caption text-foreground-muted">Schema-only transmission, PII excluded</div>
                  </CardContent>
                </Card>
                <Card className="text-center transition-colors duration-fast ease-out-quart hover:border-border-strong">
                  <CardContent className="pt-6">
                    <FileCode className="h-8 w-8 text-accent-brand-strong mx-auto mb-3" />
                    <div className="text-h4 font-semibold mb-1 text-foreground">Audit Logging</div>
                    <div className="text-caption text-foreground-muted">HMAC signatures + hash chains</div>
                  </CardContent>
                </Card>
                <Card className="text-center transition-colors duration-fast ease-out-quart hover:border-border-strong">
                  <CardContent className="pt-6">
                    <Globe className="h-8 w-8 text-accent-brand-strong mx-auto mb-3" />
                    <div className="text-h4 font-semibold mb-1 text-foreground">Air-Gap Validation</div>
                    <div className="text-caption text-foreground-muted">Verify zero external network calls</div>
                  </CardContent>
                </Card>
                <Card className="text-center transition-colors duration-fast ease-out-quart hover:border-border-strong">
                  <CardContent className="pt-6">
                    <Lock className="h-8 w-8 text-accent-brand-strong mx-auto mb-3" />
                    <div className="text-h4 font-semibold mb-1 text-foreground">Compliance Ready</div>
                    <div className="text-caption text-foreground-muted">GDPR, HIPAA, SOC 2 design</div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-accent-brand-soft border-border">
                <CardContent className="pt-6">
                  <h3 className="text-h3 font-bold mb-4 text-foreground">The Golden Rule: Your Data Never Leaves Your Environment</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-h4 font-semibold text-accent-brand-strong mb-2">Sent to AI (Metadata Only)</h4>
                      <ul className="space-y-1 text-body-sm text-foreground-muted">
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-accent-brand-strong mt-1 flex-shrink-0" /> Table and column names</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-accent-brand-strong mt-1 flex-shrink-0" /> Measure names and DAX expressions</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-accent-brand-strong mt-1 flex-shrink-0" /> Relationship definitions</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-accent-brand-strong mt-1 flex-shrink-0" /> Your natural language question</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-h4 font-semibold text-destructive mb-2">NOT Sent to AI (Your Data)</h4>
                      <ul className="space-y-1 text-body-sm text-foreground-muted">
                        <li className="flex items-start gap-2"><Lock className="h-4 w-4 text-destructive mt-1 flex-shrink-0" /> Actual row data</li>
                        <li className="flex items-start gap-2"><Lock className="h-4 w-4 text-destructive mt-1 flex-shrink-0" /> Personally Identifiable Information</li>
                        <li className="flex items-start gap-2"><Lock className="h-4 w-4 text-destructive mt-1 flex-shrink-0" /> Connection strings and credentials</li>
                        <li className="flex items-start gap-2"><Lock className="h-4 w-4 text-destructive mt-1 flex-shrink-0" /> Query results</li>
                      </ul>
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
              <h2 className="font-serif text-h2 mb-4 text-foreground">Ready to Build Your Own AI-Powered Power BI Solution?</h2>
              <p className="text-foreground-muted mb-8 max-w-prose mx-auto">
                Fork the repository, customize for your use case, and deploy. Whether you are building an internal tool
                or a commercial product, this webapp provides the foundation you need.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://github.com/sulaiman013/powerbi-expert-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-brand text-accent-brand-foreground rounded-md transition-colors duration-fast ease-out-quart hover:bg-accent-brand-strong font-medium"
                >
                  <GitBranch className="h-5 w-5" />
                  Get Started on GitHub
                </a>
                <a
                  href="https://youtu.be/5gNa9BUJ4r8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border-strong bg-background-elevated text-foreground rounded-md transition-colors duration-fast ease-out-quart hover:bg-background font-medium"
                >
                  <Play className="h-5 w-5" />
                  Watch Demo Video
                </a>
              </div>
              <div className="flex flex-wrap gap-3 justify-center mt-6">
                <Badge variant="outline" className="text-sm px-4 py-2">Natural Language to DAX</Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">Azure AI Foundry</Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">Ollama Support</Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">PBIP Editing</Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">White-Label Ready</Badge>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PowerBIExpertWebappCaseStudy;
