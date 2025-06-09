
import { Button } from "@/components/ui/button";
import { FileText, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Transforming Data into Strategic Insights
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <p className="text-2xl md:text-3xl text-muted-foreground">
                <span className="font-semibold text-primary">
                  {roles[currentRole]}
                </span>
              </p>
            </div>
            
            <p className="text-xl text-muted-foreground">
              Sulaiman Ahmed
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            4x Microsoft Certified Analytics Engineer with 5+ years of experience transforming complex data 
            into actionable insights. Specializing in Power BI, Microsoft Fabric, and data engineering solutions 
            that drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group" asChild>
              <Link to="/portfolio">
                <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Portfolio
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="group" onClick={() => scrollToSection('contact')}>
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get in Touch
            </Button>
          </div>
          
          <div className="pt-8 text-sm text-muted-foreground">
            <p>📍 Dhaka, Bangladesh • Available for global remote projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
