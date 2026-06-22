import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User, Search, FileText, TrendingUp, Target, Linkedin, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogThumbnail from "@/components/BlogThumbnail";
import CapacityBlogThumbnail from "@/components/CapacityBlogThumbnail";
import CostBlogThumbnail from "@/components/CostBlogThumbnail";
import ParquetBlogThumbnail from "@/components/ParquetBlogThumbnail";
import MLVBlogThumbnail from "@/components/MLVBlogThumbnail";
import DirectLakeBlogThumbnail from "@/components/DirectLakeBlogThumbnail";
import PowerBIAIAssistantBlogThumbnail from "@/components/PowerBIAIAssistantBlogThumbnail";
import FabricAppsBlogThumbnail from "@/components/FabricAppsBlogThumbnail";
import { useViewCounts } from "@/hooks/useViewCount";

const allTags = ["All", "Microsoft Fabric", "Rayfin", "Fabric Apps", "OneLake", "dbt", "PySpark", "Data Engineering", "Benchmarks", "Power BI", "Star Schema", "Capacity Units", "Cost Optimization", "Dataflow Gen2", "Delta Lake", "Apache Iceberg", "Apache Hudi", "Apache Parquet", "Lakehouse", "SQL", "Direct Lake", "Semantic Link", "AI", "LLM", "DAX", "Power BI Copilot", "Semantic Models", "Architecture"];

const posts = [
  {
    slug: "dashboards-to-data-apps-rayfin",
    title: "From Dashboards to Data Apps: Building Microsoft Fabric Apps with Rayfin",
    excerpt:
      "Is Power BI dead? No, it evolved. Microsoft Fabric Apps with Rayfin add a write side to your analytics. Here is the translytical loop, explained through two real apps I built end to end: an operational Lead Pipeline CRM and a two-app Superstore self-checkout plus analytics.",
    date: "June 2026",
    readTime: "22 min read",
    tags: ["Microsoft Fabric", "Rayfin", "Fabric Apps", "Power BI", "Direct Lake", "OneLake", "Data Engineering"],
    featured: true,
    thumbnail: "fabricapps" as const,
  },
  {
    slug: "custom-powerbi-ai-assistant-problems-and-solutions",
    title: "The Problems and Solutions of a Custom Power BI AI Assistant",
    excerpt:
      "Building a custom AI assistant on top of Power BI is not a RAG problem. It is a routing problem. Here are the seven problems we hit shipping one to production, the architectural fix for each, and the path that took accuracy from 49 to 92 percent in 3 days.",
    date: "May 2026",
    readTime: "22 min read",
    tags: ["Power BI", "AI", "LLM", "DAX", "Power BI Copilot", "Semantic Models", "Architecture"],
    featured: true,
    thumbnail: "powerbiai" as const,
  },
  {
    slug: "fabric-direct-lake-semantic-models",
    title: "Direct Lake Semantic Models: The Complete Guide to Fabric's Fastest Storage Mode",
    excerpt:
      "Your Direct Lake model is silently falling back to DirectQuery and you do not know it. Here is how to detect it, fix it, and optimize your Delta tables for true Direct Lake performance.",
    date: "March 2026",
    readTime: "20 min read",
    tags: ["Microsoft Fabric", "Power BI", "Direct Lake", "Data Engineering", "Delta Lake", "Semantic Link"],
    featured: true,
    thumbnail: "directlake" as const,
  },
  {
    slug: "fabric-materialized-lake-views",
    title: "Materialized Lake Views in Microsoft Fabric: Your Lakehouse Just Got a Memory",
    excerpt:
      "Your SQL view runs from scratch every time someone opens the dashboard. Materialized Lake Views store precomputed results, refresh only what changed, and catch bad data during the refresh itself. Here is the complete guide with real SQL examples.",
    date: "February 2026",
    readTime: "16 min read",
    tags: ["Microsoft Fabric", "Data Engineering", "Lakehouse", "SQL", "Delta Lake", "Power BI"],
    featured: true,
    thumbnail: "mlv" as const,
  },
  {
    slug: "parquet-not-table-format",
    title: "Parquet is Not a Table Format: The Confused Engineer's Guide to Delta, Iceberg, and Hudi",
    excerpt:
      "The #1 misconception in data engineering, cleared up. Parquet is a file format. Delta Lake, Iceberg, and Hudi are table formats that sit on top. Here is how each works, when to use which, and why the format wars are ending.",
    date: "February 2026",
    readTime: "18 min read",
    tags: ["Data Engineering", "Apache Parquet", "Delta Lake", "Apache Iceberg", "Apache Hudi", "Microsoft Fabric"],
    featured: true,
    thumbnail: "parquet" as const,
  },
  {
    slug: "fabric-cost-optimization",
    title: "The Fabric Compute Showdown: Which Tool Gives You the Most Bang for Your CU Buck?",
    excerpt:
      "Dataflow Gen2 vs Spark Notebooks vs dbt Jobs vs Pipelines. Head-to-head CU benchmarks, the new 2-tier pricing model, and a decision framework for choosing the right tool. Part 2 of the Fabric Cost Optimization series.",
    date: "February 2026",
    readTime: "14 min read",
    tags: ["Microsoft Fabric", "Cost Optimization", "Dataflow Gen2", "dbt", "PySpark", "Benchmarks"],
    featured: true,
    thumbnail: "cost" as const,
  },
  {
    slug: "fabric-capacity-explained",
    title: "How Microsoft Fabric Capacity Actually Works: A Complete Guide",
    excerpt:
      "Capacity Units, smoothing, throttling, bursting, SKU tiers, and the Power BI price hike. Everything you need to understand about Fabric's compute model before you spend a dollar. Part 1 of a 2-part cost optimization series.",
    date: "February 2026",
    readTime: "12 min read",
    tags: ["Microsoft Fabric", "Capacity Units", "Cost Optimization", "Data Engineering", "Power BI"],
    featured: true,
    thumbnail: "capacity" as const,
  },
  {
    slug: "dbt-jobs-in-microsoft-fabric",
    title: "dbt Jobs in Microsoft Fabric: A Complete Guide with Performance Benchmarks vs PySpark",
    excerpt:
      "I ran real benchmarks comparing dbt Jobs and PySpark Notebooks in Microsoft Fabric. dbt was 1.6x faster on bronze ingestion and 3.2x faster on gold layer star schema transformations. Here's the full breakdown with code, screenshots, and analysis.",
    date: "February 2026",
    readTime: "15 min read",
    tags: ["Microsoft Fabric", "dbt", "PySpark", "Data Engineering", "Benchmarks", "Star Schema"],
    featured: true,
    thumbnail: "dbt" as const,
  },
];

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const viewCounts = useViewCounts(posts.map((p) => p.slug));

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchSearch =
        search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchTag = activeTag === "All" || p.tags.includes(activeTag);
      return matchSearch && matchTag;
    });
  }, [search, activeTag]);

  // MVP tracker stats
  const MVP_GOAL = 24; // 24 blogs in 12 months (2/month)
  const BLOGS_PUBLISHED = posts.length;
  const MVP_PROGRESS = Math.round((BLOGS_PUBLISHED / MVP_GOAL) * 100);

  // Calculate days since last post
  // Auto-derive from the newest post in the data so this number stays
  // current whenever a new post is added. The post.date format is
  // "Month YYYY" (e.g. "June 2026") — we treat it as the 1st of that month.
  const parsePostMonthYear = (label: string): Date => {
    const [month, year] = label.split(" ");
    const d = new Date(`${month} 1, ${year}`);
    return Number.isNaN(d.getTime()) ? new Date() : d;
  };
  const lastPostDate = parsePostMonthYear(posts[0].date);
  const today = new Date();
  const daysSinceLastPost = Math.max(
    0,
    Math.floor((today.getTime() - lastPostDate.getTime()) / (1000 * 60 * 60 * 24))
  );

  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-2 px-6 md:px-12 lg:px-20">
        <div className="max-w-page mx-auto">
          <div className="mb-5">
            <h1 className="font-serif text-display-md md:text-display-lg font-normal tracking-tight text-foreground mb-3">
              Latest from the <em className="italic font-normal">Blog</em>
            </h1>
            <p className="text-body text-foreground-muted max-w-prose">
              Notes from the field on Power BI, Microsoft Fabric, and the modern data stack, written from Dhaka.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <p className="text-body-sm font-medium text-foreground">by Sulaiman Ahmed</p>
              <a
                href="https://www.linkedin.com/in/sulaiman-ahmed-8a870512a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-brand-strong hover:text-accent-brand transition-colors duration-fast ease-out-quart focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                aria-label="Sulaiman Ahmed on LinkedIn"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* MVP Tracker Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Blogs Published */}
            <div className="rounded-xl border border-border bg-background-elevated p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-md bg-accent-brand-soft">
                  <FileText className="h-4 w-4 text-accent-brand-strong" aria-hidden="true" />
                </div>
                <span className="text-body-sm font-medium text-foreground-muted">Blogs Published</span>
              </div>
              <p className="font-mono text-4xl font-bold text-foreground mb-2">{BLOGS_PUBLISHED}</p>
              <div className="w-full bg-accent-brand-soft rounded-full h-1.5 mb-1.5 overflow-hidden">
                <div
                  className="bg-accent-brand h-1.5 w-full origin-left rounded-full transition-transform duration-700 ease-out-quart"
                  style={{ transform: `scaleX(${MVP_PROGRESS / 100})` }}
                />
              </div>
              <p className="text-caption text-foreground-subtle">{BLOGS_PUBLISHED}/{MVP_GOAL} MVP goal</p>
            </div>

            {/* Days Since Last Post */}
            <div className="rounded-xl border border-border bg-background-elevated p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-md bg-accent-brand-soft">
                  <TrendingUp className="h-4 w-4 text-accent-brand-strong" aria-hidden="true" />
                </div>
                <span className="text-body-sm font-medium text-foreground-muted">Days Since Last Post</span>
              </div>
              <p className={`font-mono text-4xl font-bold ${daysSinceLastPost <= 14 ? "text-success" : daysSinceLastPost <= 21 ? "text-warning" : "text-destructive"}`}>
                {daysSinceLastPost}
              </p>
              <p className="text-caption text-foreground-subtle mt-2">Target: Post every 14 days</p>
            </div>

            {/* MVP Journey */}
            <div className="rounded-xl border border-border bg-background-elevated p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-md bg-accent-brand-soft">
                  <Target className="h-4 w-4 text-accent-brand-strong" aria-hidden="true" />
                </div>
                <span className="text-body-sm font-medium text-foreground-muted">MVP Journey</span>
              </div>
              <p className="font-mono text-4xl font-bold text-foreground mb-2">{MVP_PROGRESS}%</p>
              <div className="w-full bg-accent-brand-soft rounded-full h-1.5 mb-1.5 overflow-hidden">
                <div
                  className="bg-accent-brand h-1.5 w-full origin-left rounded-full transition-transform duration-700 ease-out-quart"
                  style={{ transform: `scaleX(${MVP_PROGRESS / 100})` }}
                />
              </div>
              <p className="text-caption text-foreground-subtle">Microsoft Data Platform MVP</p>
            </div>
          </div>

          {/* Search + Tags */}
          <div className="space-y-3 mb-6">
            {/* Search bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground-subtle pointer-events-none" aria-hidden="true" />
              <input
                type="text"
                placeholder="Search posts by title, topic, or technology..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search blog posts"
                className="w-full pl-11 pr-4 py-3 rounded-lg border border-border bg-background-elevated text-body-sm text-foreground placeholder:text-foreground-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-border-strong transition-colors duration-fast ease-out-quart"
              />
            </div>

            {/* Tag filters */}
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter posts by tag">
              {allTags.map((tag) => {
                const isActive = activeTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    aria-pressed={isActive}
                    className={`px-3.5 py-1.5 rounded-pill text-caption font-medium transition-colors duration-fast ease-out-quart focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      isActive
                        ? "bg-accent-brand text-accent-brand-foreground border border-accent-brand"
                        : "border border-border bg-background-elevated text-foreground-muted hover:bg-accent-brand-soft hover:text-accent-brand-strong"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-page mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-foreground-muted text-body-sm">No posts match your search. Try a different keyword or tag.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group block rounded-xl border border-border bg-background-elevated overflow-hidden transition-colors duration-fast ease-out-quart hover:border-border-strong hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {/* Thumbnail */}
                  {post.featured && (
                    <div className="overflow-hidden">
                      {post.thumbnail === "fabricapps" ? <FabricAppsBlogThumbnail /> : post.thumbnail === "powerbiai" ? <PowerBIAIAssistantBlogThumbnail /> : post.thumbnail === "directlake" ? <DirectLakeBlogThumbnail /> : post.thumbnail === "mlv" ? <MLVBlogThumbnail /> : post.thumbnail === "parquet" ? <ParquetBlogThumbnail /> : post.thumbnail === "capacity" ? <CapacityBlogThumbnail /> : post.thumbnail === "cost" ? <CostBlogThumbnail /> : <BlogThumbnail />}
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-pill text-caption font-medium border border-border bg-background-elevated text-foreground-muted hover:bg-accent-brand-soft hover:text-accent-brand-strong transition-colors duration-fast ease-out-quart"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 4 && (
                        <span className="px-2.5 py-0.5 rounded-pill text-caption font-medium border border-border bg-background-elevated text-foreground-muted">
                          +{post.tags.length - 4}
                        </span>
                      )}
                    </div>

                    <h2 className="text-h3 font-sans font-bold tracking-tight text-foreground group-hover:text-accent-brand-strong transition-colors duration-fast ease-out-quart leading-snug mb-3">
                      {post.title}
                    </h2>

                    <p className="text-body-sm text-foreground-muted leading-relaxed mb-5 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta row */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-caption text-foreground-subtle">
                        <span className="flex items-center gap-1.5">
                          <User className="h-3.5 w-3.5" aria-hidden="true" /> Sulaiman Ahmed
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" aria-hidden="true" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {post.readTime}
                        </span>
                        {viewCounts[post.slug] != null && (
                          <span className="flex items-center gap-1.5">
                            <Eye className="h-3.5 w-3.5" aria-hidden="true" /> {viewCounts[post.slug].toLocaleString()} views
                          </span>
                        )}
                      </div>
                      <span className="flex items-center gap-1.5 text-body-sm font-medium text-accent-brand opacity-60 transition-all duration-fast ease-out-quart group-hover:opacity-100 group-hover:translate-x-0.5 shrink-0">
                        Read article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Post count */}
          <div className="mt-8 text-center">
            <p className="text-caption text-foreground-subtle">
              Showing {filtered.length} of {posts.length} post{posts.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
