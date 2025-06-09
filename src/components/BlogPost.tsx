
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Share2, BookOpen, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  tags: string[];
  created_at: string;
  is_featured: boolean;
}

interface BlogPostProps {
  slug: string;
}

const BlogPost = ({ slug }: BlogPostProps) => {
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogPost();
  }, [slug]);

  const fetchBlogPost = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (error) {
        console.error('Error fetching blog post:', error);
        setError('Blog post not found');
        return;
      }

      setPost(data);
    } catch (error) {
      console.error('Unexpected error fetching blog post:', error);
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const estimateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-8">
              <div className="h-8 bg-muted rounded w-1/4"></div>
              <div className="h-12 bg-muted rounded w-3/4"></div>
              <div className="h-6 bg-muted rounded w-1/2"></div>
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
                <div className="h-4 bg-muted rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-muted/30 to-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">{error || 'The requested blog post could not be found.'}</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <Button variant="ghost" asChild className="mb-8 group">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </Button>

          {/* Article Header */}
          <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm mb-8">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Author and LinkedIn */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-gradient-to-r from-primary to-blue-600 text-white">
                      {post.category}
                    </Badge>
                    {post.is_featured && (
                      <Badge variant="outline" className="border-yellow-500 text-yellow-600">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">by Sulaiman Ahmed</span>
                    <a 
                      href="https://www.linkedin.com/in/sulaimanahmed" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  {post.title}
                </h1>

                {/* Excerpt */}
                {post.excerpt && (
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                )}

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.created_at)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {estimateReadingTime(post.content || '')} min read
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Article
                  </div>
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Share Button */}
                <div className="pt-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share Article
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Article Content */}
          <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                {post.content ? (
                  <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
                ) : (
                  <p className="text-muted-foreground">Content will be available soon.</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-primary/10 to-blue-500/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with me on LinkedIn for more insights on data analytics and Power BI tips.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600" asChild>
                    <a href="https://www.linkedin.com/in/sulaimanahmed" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/blog">Read More Articles</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
