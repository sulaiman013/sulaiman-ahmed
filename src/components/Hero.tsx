
import { Button } from "@/components/ui/button";
import { FileText, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Analytics Engineer",
    "Microsoft Certified Professional", 
    "Data Science Instructor",
    "Power BI Consultant"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-sage-100 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-peach-200/30 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-terracotta-200/30 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-sage-400 via-peach-400 to-terracotta-400 bg-clip-text text-transparent animate-fade-up">
              Transforming Data into Strategic Insights
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <p className="text-2xl md:text-3xl text-muted-foreground animate-fade-up animation-delay-200">
                <span className="text-sage-600 font-semibold">
                  {roles[currentRole]}
                </span>
              </p>
            </div>
            
            <p className="text-xl text-muted-foreground animate-fade-up animation-delay-400">
              Sulaiman Ahmed
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up animation-delay-600">
            4x Microsoft Certified Analytics Engineer with 5+ years of experience transforming complex data 
            into actionable insights. Specializing in Power BI, Microsoft Fabric, and data engineering solutions 
            that drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animation-delay-600">
            <Button size="lg" className="group bg-gradient-to-r from-sage-400 to-peach-400 hover:from-sage-500 hover:to-peach-500 text-white" onClick={() => scrollToSection('portfolio')}>
              <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Portfolio
            </Button>
            <Button variant="outline" size="lg" className="group border-sage-300 text-sage-600 hover:bg-sage-50" onClick={() => scrollToSection('contact')}>
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get in Touch
            </Button>
          </div>
          
          <div className="pt-8 text-sm text-muted-foreground animate-fade-up animation-delay-600">
            <p>📍 Dhaka, Bangladesh • Available for global remote projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
