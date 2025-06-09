
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Clock, ArrowRight, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  created_at: string;
  is_featured: boolean;
}

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categories = ["All", "Power BI", "Microsoft Fabric", "Data Engineering", "Career Advice"];

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Fetching published blog posts...');
      
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('is_published', true) // This ensures RLS policy is satisfied
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching blog posts:', error);
        setError('Failed to load blog posts');
        return;
      }

      console.log('Fetched blog posts:', data?.length || 0);
      setBlogPosts(data || []);
    } catch (error) {
      console.error('Unexpected error fetching blog posts:', error);
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.is_featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const estimateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content?.split(' ').length || 0;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  if (loading) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Latest from the Blog
            </div>
            <p className="text-xl text-muted-foreground mb-16">
              Loading blog posts...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Latest from the Blog
            </div>
            <p className="text-xl text-muted-foreground mb-16">
              {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Latest from the Blog
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights on data analytics, Power BI tips, and industry trends to help you transform data into strategic insights
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-lg font-medium">by Sulaiman Ahmed</span>
              <a 
                href="https://www.linkedin.com/in/sulaimanahmed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 w-1 h-6 rounded-full"></span>
                Featured Articles
              </h3>
              <div className="space-y-6">
                {featuredPosts.slice(0, 3).map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-0 shadow-xl cursor-pointer">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-3">
                          <Badge className="bg-gradient-to-r from-primary to-blue-600 text-white">
                            {post.category}
                          </Badge>
                          <Badge variant="outline" className="border-yellow-500 text-yellow-600">
                            Featured
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl md:text-3xl group-hover:text-primary transition-colors leading-tight">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed line-clamp-2 mb-4 text-lg">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-muted-foreground gap-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {formatDate(post.created_at)}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {estimateReadingTime(post.excerpt || '')} min read
                            </div>
                          </div>
                          <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                            <span className="text-sm font-medium">Read More</span>
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Search and Filter */}
          <div className="mb-12 space-y-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search articles, topics, or keywords..."
                  className="pl-12 h-12 text-base border-0 bg-card/50 backdrop-blur-sm shadow-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category 
                      ? "bg-gradient-to-r from-primary to-blue-600 shadow-lg" 
                      : "bg-card/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts List */}
          <div className="space-y-6 mb-12">
            {filteredPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden cursor-pointer bg-card/50 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <Badge variant="secondary" className="bg-muted/50">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(post.created_at)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {estimateReadingTime(post.excerpt || '')} min read
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed line-clamp-2 mb-4 text-base">
                      {post.excerpt}
                    </p>
                    
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 4).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs border-muted-foreground/20">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                        <span className="text-sm font-medium">Read Article</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && !loading && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                {blogPosts.length === 0 
                  ? "No published blog posts available yet. Check back soon for new content!" 
                  : "Try adjusting your search terms or category filters."
                }
              </p>
              {searchTerm && (
                <Button variant="outline" onClick={() => setSearchTerm("")}>
                  Clear Search
                </Button>
              )}
            </div>
          )}

          <div className="text-center">
            <Button variant="outline" size="lg" className="bg-card/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl">
              Load More Articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
