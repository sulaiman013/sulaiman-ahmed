import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname
      );
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center section-padding">
        <div className="max-w-page mx-auto w-full">
          <div className="max-w-prose">
            <h1 className="font-serif text-display-lg text-foreground tracking-tight">
              404
            </h1>
            <p className="mt-6 text-body-lg text-foreground-muted">
              That page isn't here. It may have moved, or it never existed. The
              writing index is the best place to land instead.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild>
                <Link to="/blog">Read the writing</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/">Back to home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
