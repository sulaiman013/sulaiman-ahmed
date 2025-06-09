
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
    <section className="min-h-screen flex items-center justify-center hero-gradient-bg wave-bg relative overflow-hidden">
      {/* Floating particles background */}
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-warmPeach-200/30 to-warmBrown-200/20 rounded-full blur-3xl animate-floating"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-warmGold-200/25 to-warmCream-200/30 rounded-full blur-3xl animate-floating animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-warmBrown-200/20 to-warmPeach-200/25 rounded-full blur-3xl animate-floating animation-delay-800"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold warm-text-gradient animate-fade-up">
              Transforming Data into Strategic Insights
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <p className="text-2xl md:text-3xl text-muted-foreground animate-fade-up animation-delay-200">
                <span className="font-semibold bg-gradient-to-r from-warmBrown-600 to-warmPeach-600 bg-clip-text text-transparent">
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
            <Button size="lg" className="group warm-button text-white border-0" onClick={() => scrollToSection('portfolio')}>
              <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Portfolio
            </Button>
            <Button variant="outline" size="lg" className="group border-warmBrown-300 text-warmBrown-600 hover:bg-warmBrown-50 hover:border-warmBrown-400" onClick={() => scrollToSection('contact')}>
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
