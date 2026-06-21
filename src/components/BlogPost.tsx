
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Share2, BookOpen, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import SimpleMarkdownRenderer from "./SimpleMarkdownRenderer";

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

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && 'share' in navigator && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt || post.title,
          url: window.location.href,
        });
      } catch {
        // user cancelled or share failed silently
      }
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href);
      } catch {
        // ignore
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20 section-padding">
          <div className="mx-auto max-w-prose">
            <div className="animate-pulse space-y-8">
              <div className="h-8 bg-background-elevated rounded w-1/4"></div>
              <div className="h-12 bg-background-elevated rounded w-3/4"></div>
              <div className="h-6 bg-background-elevated rounded w-1/2"></div>
              <div className="space-y-4">
                <div className="h-4 bg-background-elevated rounded"></div>
                <div className="h-4 bg-background-elevated rounded w-5/6"></div>
                <div className="h-4 bg-background-elevated rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="font-serif text-display-md text-foreground tracking-tight leading-tight mb-4">Blog post not found</h1>
          <p className="text-body text-foreground-muted mb-8">{error || 'The requested blog post could not be found.'}</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20 section-padding">
        {/* Back Navigation */}
        <Button variant="ghost" asChild className="mb-8 group">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-0.5 transition-transform" aria-hidden="true" />
            Back to Blog
          </Link>
        </Button>

        {/* Article Header */}
        <header className="mx-auto max-w-prose space-y-6 mb-12">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Badge>{post.category}</Badge>
              {post.is_featured && (
                <Badge variant="outline" className="border-accent-brand text-accent-brand-strong">
                  Featured
                </Badge>
              )}
            </div>
            <a
              href="https://www.linkedin.com/in/sulaimanahmed013/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sulaiman on LinkedIn"
              className="text-accent-brand transition-colors duration-fast hover:text-accent-brand-strong"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <h1 className="font-serif text-display-lg text-foreground tracking-tight leading-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-body-lg text-foreground-muted leading-relaxed">
              {post.excerpt}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-6 text-body-sm text-foreground-muted">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {formatDate(post.created_at)}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {estimateReadingTime(post.content || '')} min read
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Article
            </div>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}

          <div className="pt-2">
            <Button variant="outline" size="sm" className="gap-2" onClick={handleShare}>
              <Share2 className="h-4 w-4" aria-hidden="true" />
              Share Article
            </Button>
          </div>
        </header>

        {/* Article Content */}
        <article className="mx-auto max-w-prose blog-prose">
          {post.content ? (
            <SimpleMarkdownRenderer content={post.content} />
          ) : (
            <p className="text-foreground-muted">Content will be available soon.</p>
          )}
        </article>

        {/* Footer note */}
        <div className="mx-auto max-w-prose mt-16">
          <p className="text-body-sm text-foreground-muted">
            Got feedback on this post?{' '}
            <a href="mailto:sulaimanahmed013@gmail.com" className="text-accent-brand">Email me</a>
            {' '}or reply on{' '}
            <a href="https://www.linkedin.com/in/sulaimanahmed013/" className="text-accent-brand" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
