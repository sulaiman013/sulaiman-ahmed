
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl">SA</div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" onClick={() => scrollToSection('hero')}>
              Home
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('about')}>
              About
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('skills')}>
              Skills
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('projects')}>
              Projects
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('blog')}>
              Blog
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')}>
              Contact
            </Button>
          </div>
          
          <Button size="sm" onClick={() => scrollToSection('contact')}>
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
