import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Database,
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
  Wrench,
  Terminal,
  GitBranch,
  CloudCog,
  Play,
  DollarSign,
  Clock,
  Users,
  MessageSquare,
  Cpu,
  Building2,
  ExternalLink
} from "lucide-react";

const PowerBIExpertWebappCaseStudy = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const keyResults = [
    { icon: Clock, value: "70-80%", label: "Time Saved", description: "Reduction in DAX development" },
    { icon: DollarSign, value: "$0", label: "Per-User Fees", description: "Deploy once for entire team" },
    { icon: Shield, value: "100%", label: "Data Security", description: "Schema-only AI transmission" },
  ];

  const challenges = [
    {
      icon: DollarSign,
      title: "Expensive Copilot Licensing",
      description: "Microsoft Copilot for Power BI requires Premium/Fabric capacity plus $30/user/month—prohibitively expensive for many organizations."
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
    "Schema-only transmission—actual row data never sent to AI",
    "Tamper-evident audit logging with HMAC signatures and hash chains"
  ];

  const beforeAfter = [
    {
      area: "DAX Development",
      before: "Write complex DAX manually, debug syntax errors for hours",
      after: "Ask in plain English: 'Revenue by region for Q4'—get working DAX instantly"
    },
    {
      area: "AI Access",
      before: "Need Premium + $30/user/month Copilot license",
      after: "Use existing Azure AI investment or free local Ollama"
    },
    {
      area: "Regulated Environments",
      before: "No AI allowed due to data sovereignty concerns",
      after: "Deploy with Ollama—AI runs 100% locally, zero external calls"
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
      description: "Add 'Chat with Your Data' button alongside embedded reports in custom applications"
    },
    {
      icon: Users,
      title: "ISV/SaaS Product Enhancement",
      description: "White-label and integrate into your product—charge premium for 'AI Analytics' tier"
    },
    {
      icon: Shield,
      title: "Regulated Industries",
      description: "Deploy with Ollama for banks, healthcare, government—100% air-gapped operation"
    },
    {
      icon: Cpu,
      title: "Self-Service Analytics Portal",
      description: "Multi-tenant portal where each client chats with their own semantic model"
    },
  ];

  const architectureLayers = [
    { name: "Presentation", items: ["Chat UI", "Settings", "Connection Panel"], color: "cyan" },
    { name: "Application", items: ["Flask Web Server", "API Routes"], color: "purple" },
    { name: "Business Logic", items: ["State Management", "DAX Processing"], color: "amber" },
    { name: "Integration", items: ["ADOMD.NET", "XMLA", "PBIP Editor", "Azure Claude", "Azure OpenAI", "Ollama"], color: "green" },
    { name: "Security", items: ["Data Boundary", "Audit Logger", "Network Validator"], color: "emerald" },
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
                <Badge variant="outline" className="text-xs">AI & Analytics</Badge>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-primary">Power BI Expert Webapp:</span> Enterprise AI Assistant Without the Enterprise Price Tag
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl">
                An open-source, white-label AI chat layer for Power BI that organizations can customize and embed into their own applications—enabling natural language analytics without Microsoft Copilot's licensing barriers.
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
                  href="https://github.com/sulaiman013/powerbi-expert-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <GitBranch className="h-4 w-4" />
                  View on GitHub
                </a>
                <a
                  href="https://youtu.be/5gNa9BUJ4r8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
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
                  Microsoft Copilot for Power BI promises AI-powered analytics, but the reality is a significant barrier:
                  Premium/Fabric capacity requirement plus $30/user/month. For organizations with hundreds of users on
                  Pro licenses, or those in regulated industries that can't use cloud AI, there was no viable option—until now.
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

              {/* Key Insight */}
              <Card className="mt-10 border-blue-500/30 bg-blue-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">The Real Opportunity</h3>
                      <p className="text-muted-foreground">
                        This isn't just a tool—it's an <strong>open-source template</strong> that organizations can fork,
                        customize, and embed into their own applications. A starter kit for anyone building Power BI
                        Embedded solutions who wants to add AI-powered Q&A without months of development.
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
                    I built an <strong className="text-foreground">enterprise-grade web application</strong> that enables
                    natural language interaction with Power BI data—supporting multiple LLM providers and both
                    Desktop and Cloud connectivity.
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

                {/* LLM Provider Options */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg mb-4">Your AI, Your Choice</h3>

                  <Card className="border-blue-500/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                          <CloudCog className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Azure AI Foundry</CardTitle>
                          <p className="text-sm text-muted-foreground">Claude / OpenAI</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Data stays in YOUR Azure subscription. Enterprise compliance, existing governance.</p>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center">
                    <span className="text-muted-foreground font-medium">OR</span>
                  </div>

                  <Card className="border-green-500/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-green-500" />
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                          <Cpu className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Ollama (Local)</CardTitle>
                          <p className="text-sm text-muted-foreground">DeepSeek, Qwen, etc.</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">100% air-gapped. Data never leaves your machine. Perfect for regulated industries.</p>
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

        {/* Use Cases */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-purple-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Real-World Use Cases</h2>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                This webapp is designed as a foundation for custom enterprise solutions—not just a standalone tool.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {useCases.map((useCase, index) => (
                  <Card key={index} className="hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                          <useCase.icon className="h-6 w-6 text-purple-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{useCase.title}</h3>
                          <p className="text-sm text-muted-foreground">{useCase.description}</p>
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
        <section className="py-16 bg-muted/30">
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
                      Complete Setup & Demo
                    </CardTitle>
                    <Badge className="text-xs bg-primary text-primary-foreground">Full Walkthrough</Badge>
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

              <div className="mt-6 p-4 rounded-lg bg-muted/30 text-center">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Demo Covers:</strong> Setup, Azure AI integration, Desktop connectivity,
                  USERELATIONSHIP automation, PBIP rename tools, and Power BI Service semantic model chat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Architecture */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-emerald-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Enterprise Security Architecture</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Card className="text-center bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-emerald-500/20">
                  <CardContent className="pt-6">
                    <Shield className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
                    <div className="font-semibold mb-1">Data Boundary</div>
                    <div className="text-xs text-muted-foreground">Schema-only transmission, PII excluded</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
                  <CardContent className="pt-6">
                    <FileCode className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                    <div className="font-semibold mb-1">Audit Logging</div>
                    <div className="text-xs text-muted-foreground">HMAC signatures + hash chains</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
                  <CardContent className="pt-6">
                    <Globe className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                    <div className="font-semibold mb-1">Air-Gap Validation</div>
                    <div className="text-xs text-muted-foreground">Verify zero external network calls</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
                  <CardContent className="pt-6">
                    <Lock className="h-8 w-8 text-amber-500 mx-auto mb-3" />
                    <div className="font-semibold mb-1">Compliance Ready</div>
                    <div className="text-xs text-muted-foreground">GDPR, HIPAA, SOC 2 design</div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-emerald-500/30 bg-emerald-500/5">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">The Golden Rule: Your Data Never Leaves Your Environment</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-500 mb-2">Sent to AI (Metadata Only)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>- Table & column names</li>
                        <li>- Measure names & DAX expressions</li>
                        <li>- Relationship definitions</li>
                        <li>- Your natural language question</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-500 mb-2">NOT Sent to AI (Your Data)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>- Actual row data</li>
                        <li>- Personally Identifiable Information</li>
                        <li>- Connection strings & credentials</li>
                        <li>- Query results</li>
                      </ul>
                    </div>
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
                <h2 className="text-2xl md:text-3xl font-bold">Why This Matters</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-green-500 mb-2">$0</div>
                    <div className="text-sm font-medium">Per-User Licensing</div>
                    <div className="text-xs text-muted-foreground">Deploy once, team-wide access</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-500 mb-2">Pro</div>
                    <div className="text-sm font-medium">License Compatible</div>
                    <div className="text-xs text-muted-foreground">No Premium required</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-purple-500 mb-2">100%</div>
                    <div className="text-sm font-medium">Open Source</div>
                    <div className="text-xs text-muted-foreground">Fork, customize, white-label</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-amber-500 mb-2">Air-Gap</div>
                    <div className="text-sm font-medium">Ready</div>
                    <div className="text-xs text-muted-foreground">Ollama for offline use</div>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build Your Own AI-Powered Power BI Solution?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Fork the repository, customize for your use case, and deploy. Whether you're building an internal tool
                or a commercial product, this webapp provides the foundation you need.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://github.com/sulaiman013/powerbi-expert-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  <GitBranch className="h-5 w-5" />
                  Get Started on GitHub
                </a>
                <a
                  href="https://youtu.be/5gNa9BUJ4r8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
                >
                  <Play className="h-5 w-5" />
                  Watch Demo Video
                </a>
              </div>
              <div className="flex flex-wrap gap-3 justify-center mt-6">
                <Badge className="text-sm px-4 py-2">Natural Language to DAX</Badge>
                <Badge className="text-sm px-4 py-2">Azure AI Foundry</Badge>
                <Badge className="text-sm px-4 py-2">Ollama Support</Badge>
                <Badge className="text-sm px-4 py-2">PBIP Editing</Badge>
                <Badge className="text-sm px-4 py-2">White-Label Ready</Badge>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted/30 border-t py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            &copy; 2025 Sulaiman Ahmed. Building the Future of AI-Powered Business Intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PowerBIExpertWebappCaseStudy;
