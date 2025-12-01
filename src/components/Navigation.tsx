
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navigation = ({ darkMode, setDarkMode }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'bg-background/95 backdrop-blur-md border-b shadow-lg' : 'bg-background/80 backdrop-blur-sm'
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
              <Button size="sm" className="hidden md:inline-flex" onClick={() => scrollToSection('contact')}>
                Hire Me
              </Button>
            ) : (
              <Button size="sm" className="hidden md:inline-flex" asChild>
                <Link to="/#contact">Hire Me</Link>
              </Button>
            )}
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden rounded-full"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-2">
              {isHomePage ? (
                <>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('hero')}>
                    Home
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('about')}>
                    About
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('services')}>
                    Services
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="/portfolio">Portfolio</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="/case-study">Case Study</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="/experience">Experience</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="/blog">Blog</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection('contact')}>
                    Contact
                  </Button>
                  <div className="pt-2 border-t">
                    <Button className="w-full" onClick={() => scrollToSection('contact')}>
                      Hire Me
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="/">Home</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="/portfolio">Portfolio</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="/case-study">Case Study</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="/experience">Experience</Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="/blog">Blog</Link>
                  </Button>
                  <div className="pt-2 border-t">
                    <Button className="w-full" asChild>
                      <Link to="/#contact">Hire Me</Link>
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
