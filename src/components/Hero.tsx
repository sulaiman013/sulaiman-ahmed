
import { Button } from "@/components/ui/button";
import { LinkedinIcon, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-up">
              Sulaiman Ahmed
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-up animation-delay-200">
              Software Engineer & Full-Stack Developer
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up animation-delay-400">
            Passionate about creating scalable solutions, cloud architecture, and modern web technologies. 
            Experienced in DevOps practices and building robust applications that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animation-delay-600">
            <Button size="lg" className="group">
              <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="https://www.linkedin.com/in/sulaimanahmed/" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
