
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
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-sage-200 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl bg-gradient-to-r from-sage-500 to-peach-500 bg-clip-text text-transparent">
            Sulaiman Ahmed
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {isHomePage ? (
              <>
                <Button variant="ghost" onClick={() => scrollToSection('hero')} className="text-sage-600 hover:text-sage-700 hover:bg-sage-50">
                  Home
                </Button>
                <Button variant="ghost" onClick={() => scrollToSection('about')} className="text-sage-600 hover:text-sage-700 hover:bg-sage-50">
                  About
                </Button>
                <Button variant="ghost" onClick={() => scrollToSection('services')} className="text-sage-600 hover:text-sage-700 hover:bg-sage-50">
                  Services
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/portfolio" className="text-sage-600 hover:text-sage-700 hover:bg-sage-50">Portfolio</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/blog" className="text-sage-600 hover:text-sage-700 hover:bg-sage-50">Blog</Link>
                </Button>
                <Button variant="ghost" onClick={() => scrollToSection('contact')} className="text-sage-600 hover:text-sage-700 hover:bg-sage-50">
                  Contact
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/" className="text-sage-600 hover:text-sage-700 hover:bg-sage-50">Home</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/portfolio" className="text-sage-600 hover:text-sage-700 hover:bg-sage-50">Portfolio</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/blog" className="text-sage-600 hover:text-sage-700 hover:bg-sage-50">Blog</Link>
                </Button>
              </>
            )}
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full text-sage-600 hover:bg-sage-50"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            {isHomePage ? (
              <Button size="sm" onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-sage-400 to-peach-400 hover:from-sage-500 hover:to-peach-500 text-white">
                Hire Me
              </Button>
            ) : (
              <Button size="sm" asChild className="bg-gradient-to-r from-sage-400 to-peach-400 hover:from-sage-500 hover:to-peach-500 text-white">
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
