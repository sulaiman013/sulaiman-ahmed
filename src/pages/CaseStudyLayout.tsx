import { ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

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
      <section className="section-padding pt-28">
        <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
          <Link
            to="/case-study"
            className="inline-flex items-center gap-1.5 text-body-sm text-foreground-muted hover:text-accent-brand-strong transition-colors duration-fast ease-out-quart mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Case Studies
          </Link>

          <p className="font-mono text-caption uppercase tracking-wider text-foreground-muted mb-3">
            {subtitle}
          </p>
          <h1 className="font-serif text-display-lg text-foreground tracking-tight">
            {title}
          </h1>
          <p className="text-body-lg font-medium text-foreground max-w-prose mb-10 mt-6">
            {description}
          </p>

          {/* Key Metrics — using shared blog-result system */}
          <div className="blog-result-card">
            <div className="blog-result-grid sm:!grid-cols-3">
              {metrics.map((m) => (
                <div key={m.label} className="blog-result-item">
                  <span className="blog-result-label">{m.label}</span>
                  <span className="blog-result-value">{m.value}</span>
                  <span className="blog-result-sub">{m.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      {heroImage && (
        <section className="pb-section-sm">
          <div className="mx-auto max-w-figure px-6 md:px-12 lg:px-20">
            <figure className="rounded-lg overflow-hidden border border-border bg-background-elevated">
              <img src={heroImage} alt={title} className="w-full" />
            </figure>
          </div>
        </section>
      )}

      {/* Power BI Embed */}
      {embedUrl && (
        <section className="pb-section-sm">
          <div className="mx-auto max-w-figure px-6 md:px-12 lg:px-20">
            <h2 className="font-serif text-display-md text-foreground tracking-tight mb-8">
              Live Dashboard
            </h2>
            <div className="rounded-lg overflow-hidden border border-border bg-background-elevated">
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
      <section className="section-padding">
        <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
          <div className="max-w-prose">
            <h2 className="font-serif text-display-md text-foreground tracking-tight mb-8">
              The Challenge
            </h2>
            <ul className="space-y-3">
              {challenges.map((c, i) => (
                <li key={i} className="flex gap-3 text-foreground-muted text-body-lg">
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-6 h-6 rounded-pill bg-accent-brand-soft text-accent-brand-strong flex items-center justify-center text-caption font-bold mt-1"
                  >
                    {i + 1}
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding">
        <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
          <div className="max-w-prose">
            <h2 className="font-serif text-display-md text-foreground tracking-tight mb-8">
              The Solution
            </h2>
            <ul className="space-y-3">
              {solutionPoints.map((s, i) => (
                <li key={i} className="flex gap-3 text-foreground-muted text-body-lg">
                  <span className="shrink-0 w-6 h-6 rounded-pill bg-accent-brand-soft text-accent-brand-strong flex items-center justify-center mt-1">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Extra content slot */}
      {children}

      {/* Before / After */}
      <section className="section-padding">
        <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
          <h2 className="font-serif text-display-md text-foreground tracking-tight mb-8">
            Before &amp; After
          </h2>
          <div className="blog-prose max-w-figure">
            <table>
              <thead>
                <tr>
                  <th scope="col">Area</th>
                  <th scope="col">Before</th>
                  <th scope="col">After</th>
                </tr>
              </thead>
              <tbody>
                {beforeAfter.map((row, i) => (
                  <tr key={i}>
                    <td className="font-medium text-foreground">{row.area}</td>
                    <td className="text-foreground-muted">{row.before}</td>
                    <td className="text-accent-brand-strong">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tech Stack + Links */}
      <section className="section-padding">
        <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
          <div className="max-w-prose">
            <h2 className="font-serif text-display-md text-foreground tracking-tight mb-8">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2 mb-10">
              {techStack.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-3 py-1 rounded-pill bg-accent-brand-soft text-accent-brand-strong border border-accent-brand/20 text-body-sm font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            {githubUrl && (
              <Button asChild size="lg">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  View on GitHub
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
