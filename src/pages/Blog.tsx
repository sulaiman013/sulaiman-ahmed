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
import { useViewCounts } from "@/hooks/useViewCount";

const allTags = ["All", "Microsoft Fabric", "dbt", "PySpark", "Data Engineering", "Benchmarks", "Power BI", "Star Schema", "Capacity Units", "Cost Optimization", "Dataflow Gen2", "Delta Lake", "Apache Iceberg", "Apache Hudi", "Apache Parquet", "Lakehouse", "SQL", "Direct Lake", "Semantic Link", "AI", "LLM", "DAX", "Power BI Copilot", "Semantic Models", "Architecture"];

const posts = [
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
  const lastPostDate = new Date("2026-05-09"); // Date of latest blog
  const today = new Date();
  const daysSinceLastPost = Math.floor(
    (today.getTime() - lastPostDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-2 px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="max-w-5xl mx-auto">
          <div className="mb-5">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 text-primary">
              Latest from the Blog
            </h1>
            <p className="text-base text-muted-foreground max-w-xl">
              Insights on data analytics, Microsoft Fabric, and industry trends
              to help you transform data into strategic insights
            </p>
            <div className="flex items-center gap-2 mt-3">
              <p className="text-sm font-medium text-foreground">by Sulaiman Ahmed</p>
              <a
                href="https://www.linkedin.com/in/sulaiman-ahmed-8a870512a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* MVP Tracker Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Blogs Published */}
            <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-blue-50/80 to-white dark:from-blue-950/30 dark:to-card p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/40">
                  <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Blogs Published</span>
              </div>
              <p className="text-4xl font-bold text-foreground mb-2">{BLOGS_PUBLISHED}</p>
              <div className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-full h-1.5 mb-1.5">
                <div
                  className="bg-blue-600 dark:bg-blue-400 h-1.5 rounded-full transition-all duration-700"
                  style={{ width: `${MVP_PROGRESS}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground">{BLOGS_PUBLISHED}/{MVP_GOAL} MVP goal</p>
            </div>

            {/* Days Since Last Post */}
            <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-green-50/80 to-white dark:from-green-950/30 dark:to-card p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-green-100 dark:bg-green-900/40">
                  <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Days Since Last Post</span>
              </div>
              <p className={`text-4xl font-bold ${daysSinceLastPost <= 14 ? "text-green-600 dark:text-green-400" : daysSinceLastPost <= 21 ? "text-yellow-600 dark:text-yellow-400" : "text-red-500 dark:text-red-400"}`}>
                {daysSinceLastPost}
              </p>
              <p className="text-xs text-muted-foreground mt-2">Target: Post every 14 days</p>
            </div>

            {/* MVP Journey */}
            <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-purple-50/80 to-white dark:from-purple-950/30 dark:to-card p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-purple-100 dark:bg-purple-900/40">
                  <Target className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">MVP Journey</span>
              </div>
              <p className="text-4xl font-bold text-foreground mb-2">{MVP_PROGRESS}%</p>
              <div className="w-full bg-purple-100 dark:bg-purple-900/30 rounded-full h-1.5 mb-1.5">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full transition-all duration-700"
                  style={{ width: `${MVP_PROGRESS}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground">Microsoft Data Platform MVP</p>
            </div>
          </div>

          {/* Search + Tags */}
          <div className="space-y-3 mb-6">
            {/* Search bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Search posts by title, topic, or technology..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-border/60 bg-card text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all"
              />
            </div>

            {/* Tag filters */}
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTag === tag
                      ? "bg-primary text-white shadow-sm"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 border border-border/40"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="px-6 md:px-12 lg:px-20 xl:px-32 pb-20">
        <div className="max-w-5xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-sm">No posts match your search. Try a different keyword or tag.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-border/60 bg-card overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/25 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="overflow-hidden">
                    {post.featured ? (
                      <div className="group-hover:scale-[1.01] transition-transform duration-500">
                        {post.thumbnail === "powerbiai" ? <PowerBIAIAssistantBlogThumbnail /> : post.thumbnail === "directlake" ? <DirectLakeBlogThumbnail /> : post.thumbnail === "mlv" ? <MLVBlogThumbnail /> : post.thumbnail === "parquet" ? <ParquetBlogThumbnail /> : post.thumbnail === "capacity" ? <CapacityBlogThumbnail /> : post.thumbnail === "cost" ? <CostBlogThumbnail /> : <BlogThumbnail />}
                      </div>
                    ) : (
                      <div className="aspect-[21/9] bg-secondary" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-secondary text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 4 && (
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-secondary text-muted-foreground">
                          +{post.tags.length - 4}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <User className="h-3.5 w-3.5" /> Sulaiman Ahmed
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" /> {post.readTime}
                        </span>
                        {viewCounts[post.slug] != null && (
                          <span className="flex items-center gap-1.5">
                            <Eye className="h-3.5 w-3.5" /> {viewCounts[post.slug].toLocaleString()} views
                          </span>
                        )}
                      </div>
                      <span className="flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read article <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Post count */}
          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              Showing {filtered.length} of {posts.length} post{posts.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
