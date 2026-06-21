import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { getBlogTheme, getCaseStudyTheme } from "@/lib/cardThemes";

const latestPosts = [
  {
    slug: "dashboards-to-data-apps-rayfin",
    eyebrow: "Microsoft Fabric · June 2026",
    title: "From Dashboards to Data Apps: Building Fabric Apps with Rayfin",
    excerpt:
      "Is Power BI dead? No, it evolved. Microsoft Fabric Apps add a write side to your analytics. The translytical loop, explained through two real apps I built end to end.",
    readTime: "22 min read",
  },
  {
    slug: "custom-powerbi-ai-assistant-problems-and-solutions",
    eyebrow: "Power BI · AI · May 2026",
    title: "The Problems and Solutions of a Custom Power BI AI Assistant",
    excerpt:
      "Building a custom AI assistant on Power BI is not a RAG problem, it is a routing problem. The seven problems we hit shipping one to production, and the path from 49 to 92 percent accuracy.",
    readTime: "22 min read",
  },
  {
    slug: "fabric-direct-lake-semantic-models",
    eyebrow: "Microsoft Fabric · March 2026",
    title: "Direct Lake Semantic Models: The Complete Guide",
    excerpt:
      "Your Direct Lake model is silently falling back to DirectQuery and you do not know it. How to detect it, fix it, and optimise Delta tables for true Direct Lake performance.",
    readTime: "20 min read",
  },
];

const featuredCases = [
  {
    slug: "powerbi-ai-assistant-architecture",
    eyebrow: "Architecture · Recipe Layer",
    title: "Custom Power BI AI Assistant: 49% to 92% accuracy",
    excerpt:
      "Multi-modal BI assistant routing between text-to-DAX, screenshot vision, and report-guide grounding. Validated across 7 tenants. About 88% cost reduction after optimisation.",
    stat: "92%",
    statLabel: "answer accuracy",
  },
  {
    slug: "quickbooks-medallion",
    eyebrow: "Pipeline · QuickBooks",
    title: "10+ hours a week saved on financial reporting",
    excerpt:
      "99.999% P&L accuracy via an automated 3-tier Medallion Architecture that replaced manual QuickBooks exports and Excel reconciliation.",
    stat: "10h",
    statLabel: "saved weekly",
  },
];

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navigation />

    <main>
      <Hero />

      <section className="section-padding border-t border-border">
        <div className="mx-auto max-w-page">
          <header className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-caption uppercase tracking-[0.12em] text-foreground-subtle">
                Latest blogs
              </p>
              <h2 className="font-serif text-display-md tracking-tight text-foreground">
                Fresh from <em className="italic font-normal">the field</em>
              </h2>
            </div>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-1.5 text-body-sm font-medium text-foreground-muted transition-colors duration-fast hover:text-foreground"
            >
              All blogs
              <ArrowRight
                className="h-4 w-4 transition-transform duration-fast ease-out-quart group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {latestPosts.map((post) => {
              const theme = getBlogTheme(post.slug);
              return (
                <article key={post.slug} className="group">
                  <Link
                    to={`/blog/${post.slug}`}
                    className={`block h-full rounded-xl border border-border bg-background-elevated p-7 transition-colors duration-fast ease-out-quart ${theme.hoverBorder}`}
                  >
                    <p className={`mb-4 text-caption uppercase tracking-wider ${theme.accent}`}>
                      {post.eyebrow}
                    </p>
                    <h3 className="mb-3 font-serif text-h2 font-normal leading-tight text-foreground">
                      {post.title}
                    </h3>
                    <p className="mb-5 line-clamp-3 text-body-sm leading-relaxed text-foreground-muted">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-caption text-foreground-subtle">
                      <span>{post.readTime}</span>
                      <ArrowRight
                        className={`h-4 w-4 ${theme.accent} opacity-60 transition-all duration-fast ease-out-quart group-hover:translate-x-0.5 group-hover:opacity-100`}
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-background-elevated/40">
        <div className="mx-auto max-w-page">
          <header className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-caption uppercase tracking-[0.12em] text-foreground-subtle">
                Selected work
              </p>
              <h2 className="font-serif text-display-md tracking-tight text-foreground">
                Cases where <em className="italic font-normal">data moved the needle</em>
              </h2>
            </div>
            <Link
              to="/case-study"
              className="group inline-flex items-center gap-1.5 text-body-sm font-medium text-foreground-muted transition-colors duration-fast hover:text-foreground"
            >
              All case studies
              <ArrowRight
                className="h-4 w-4 transition-transform duration-fast ease-out-quart group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredCases.map((cs) => {
              const theme = getCaseStudyTheme(cs.slug);
              return (
                <article key={cs.slug} className="group">
                  <Link
                    to={`/case-study/${cs.slug}`}
                    className={`block h-full rounded-xl border border-border bg-background p-7 transition-colors duration-fast ease-out-quart ${theme.hoverBorder}`}
                  >
                    <div className="mb-5 flex items-start justify-between gap-6">
                      <p className={`text-caption uppercase tracking-wider ${theme.accent}`}>{cs.eyebrow}</p>
                      <div className="text-right">
                        <p className={`font-serif text-h1 font-medium leading-none ${theme.accentStrong}`}>{cs.stat}</p>
                        <p className="mt-1 text-caption uppercase tracking-wider text-foreground-subtle">
                          {cs.statLabel}
                        </p>
                      </div>
                    </div>
                    <h3 className="mb-3 font-serif text-h2 font-normal leading-tight text-foreground">
                      {cs.title}
                    </h3>
                    <p className="mb-5 text-body-sm leading-relaxed text-foreground-muted">{cs.excerpt}</p>
                    <div className={`flex items-center gap-2 text-body-sm font-medium ${theme.accent}`}>
                      Read case study
                      <ArrowRight
                        className="h-4 w-4 opacity-60 transition-all duration-fast ease-out-quart group-hover:translate-x-0.5 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding border-t border-border">
        <div className="mx-auto max-w-prose text-center">
          <h2 className="mb-4 font-serif text-display-md tracking-tight text-foreground">
            Got a project? <em className="italic font-normal">Let's talk.</em>
          </h2>
          <p className="mb-6 text-body-lg text-foreground-muted">
            I work with teams on Power BI, Microsoft Fabric, and the modern data stack. If something here resonates, send a note.
          </p>
          <a
            href="mailto:hello@sulaimanahmed.com"
            className="inline-flex items-center gap-2 text-body-lg font-medium text-foreground transition-colors duration-fast hover:text-foreground-muted"
          >
            hello@sulaimanahmed.com
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Index;
