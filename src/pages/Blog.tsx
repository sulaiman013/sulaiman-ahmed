
import Navigation from "@/components/Navigation";
import BlogSection from "@/components/BlogSection";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const Blog = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-20">
        {slug ? (
          <BlogPost slug={slug} />
        ) : (
          <BlogSection />
        )}
      </main>
      
      <footer className="bg-muted/30 border-t py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Sulaiman Ahmed. Transforming Data into Strategic Insights.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
