
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);

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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  Portfolio & Case Studies
                </h1>
                <p className="text-xl text-muted-foreground">
                  Real-world solutions that delivered measurable business impact
                </p>
              </div>
              
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground">
                  Portfolio content will be added soon.
                </p>
              </div>
            </div>
          </div>
        </section>
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

export default Portfolio;
