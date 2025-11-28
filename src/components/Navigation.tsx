
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navigation = ({ darkMode, setDarkMode }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl text-primary">
            Sulaiman Ahmed
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {isHomePage ? (
              <>
                <Button variant="ghost" onClick={() => scrollToSection('hero')}>
                  Home
                </Button>
                <Button variant="ghost" onClick={() => scrollToSection('about')}>
                  About
                </Button>
                <Button variant="ghost" onClick={() => scrollToSection('services')}>
                  Services
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/portfolio">Portfolio</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/case-study">Case Study</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/experience">Experience</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/blog">Blog</Link>
                </Button>
                <Button variant="ghost" onClick={() => scrollToSection('contact')}>
                  Contact
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/">Home</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/portfolio">Portfolio</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/case-study">Case Study</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/experience">Experience</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/blog">Blog</Link>
                </Button>
              </>
            )}
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            {isHomePage ? (
              <Button size="sm" onClick={() => scrollToSection('contact')}>
                Hire Me
              </Button>
            ) : (
              <Button size="sm" asChild>
                <Link to="/#contact">Hire Me</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
