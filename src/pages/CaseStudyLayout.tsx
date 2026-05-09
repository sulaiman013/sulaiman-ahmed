import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Metric {
  value: string;
  label: string;
  description: string;
}

interface BeforeAfter {
  area: string;
  before: string;
  after: string;
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  metrics: Metric[];
  embedUrl?: string;
  embedTitle?: string;
  challenges: string[];
  solutionPoints: string[];
  beforeAfter: BeforeAfter[];
  techStack: string[];
  githubUrl?: string;
  heroImage?: string;
  children?: React.ReactNode;
}

export default function CaseStudyLayout({
  title,
  subtitle,
  description,
  metrics,
  embedUrl,
  embedTitle,
  challenges,
  solutionPoints,
  beforeAfter,
  techStack,
  githubUrl,
  heroImage,
  children,
}: CaseStudyLayoutProps) {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 section-padding">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/case-study"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Case Studies
          </Link>

          <p className="text-sm font-medium text-primary mb-2">{subtitle}</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-10">
            {description}
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl bg-card border border-border/60 shadow-sm p-5 text-center"
              >
                <p className="text-2xl font-bold gradient-text mb-1">{m.value}</p>
                <p className="text-sm font-medium text-foreground/80">{m.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero image */}
      {heroImage && (
        <section className="px-6 md:px-12 lg:px-20 xl:px-32 pb-16">
          <div className="max-w-5xl mx-auto rounded-xl overflow-hidden border border-border/60 shadow-sm">
            <img src={heroImage} alt={title} className="w-full" />
          </div>
        </section>
      )}

      {/* Power BI Embed */}
      {embedUrl && (
        <section className="px-6 md:px-12 lg:px-20 xl:px-32 pb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Live Dashboard</h2>
            <div className="rounded-xl overflow-hidden border border-border/60 shadow-sm bg-card">
              <div className="aspect-[16/9]">
                <iframe
                  title={embedTitle || title}
                  width="100%"
                  height="100%"
                  src={embedUrl}
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Challenge */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
          <ul className="space-y-3">
            {challenges.map((c, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground">
                <span className="shrink-0 w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">The Solution</h2>
          <ul className="space-y-3">
            {solutionPoints.map((s, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground">
                <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Extra content slot */}
      {children}

      {/* Before / After */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Before & After</h2>
          <div className="rounded-xl overflow-hidden border border-border/60 shadow-sm bg-card">
            <div className="grid grid-cols-[1fr_1fr_1fr] text-xs font-semibold text-muted-foreground border-b border-border/60">
              <div className="px-4 py-3">Area</div>
              <div className="px-4 py-3 border-l border-border/60">Before</div>
              <div className="px-4 py-3 border-l border-border/60">After</div>
            </div>
            {beforeAfter.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1fr_1fr_1fr] text-sm ${
                  i < beforeAfter.length - 1 ? "border-b border-border/40" : ""
                }`}
              >
                <div className="px-4 py-3 font-medium">{row.area}</div>
                <div className="px-4 py-3 text-muted-foreground border-l border-border/40">
                  {row.before}
                </div>
                <div className="px-4 py-3 text-primary border-l border-border/40">
                  {row.after}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack + Links */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {techStack.map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-full text-sm border border-border/60 text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 rounded-lg font-semibold text-sm text-primary-foreground bg-primary hover:brightness-110 transition-all"
            >
              View on GitHub
            </a>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
