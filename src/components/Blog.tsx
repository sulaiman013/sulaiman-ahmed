
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable Microservices with Docker and Kubernetes",
      excerpt: "Learn how to design and deploy microservices architecture using containerization and orchestration tools.",
      category: "DevOps",
      readTime: "8 min read",
      date: "Dec 1, 2024",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop"
    },
    {
      title: "Modern React Patterns and Best Practices",
      excerpt: "Explore advanced React patterns, hooks, and optimization techniques for building performant applications.",
      category: "Frontend",
      readTime: "6 min read", 
      date: "Nov 28, 2024",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=300&fit=crop"
    },
    {
      title: "Cloud-Native Development with AWS",
      excerpt: "A comprehensive guide to building cloud-native applications using AWS services and serverless architecture.",
      category: "Cloud",
      readTime: "10 min read",
      date: "Nov 25, 2024", 
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
            <p className="text-xl text-muted-foreground">
              Thoughts on technology, development, and innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Button variant="ghost" className="w-full group/btn justify-start px-0">
                    Read More
                    <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Posts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
