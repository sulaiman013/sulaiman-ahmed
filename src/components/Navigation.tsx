import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/blog", label: "Blogs" },
  { to: "/case-study", label: "Case Studies" },
  { to: "/about", label: "About" },
];

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === "/";
  const handleContact = () => {
    setIsMobileMenuOpen(false);
    if (isHomePage) {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-page ease-out-quart",
        isScrolled || isMobileMenuOpen
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-background/40 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-page px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="font-serif text-[1.375rem] font-semibold tracking-tight text-foreground transition-colors duration-fast ease-out-quart hover:text-accent-brand"
            style={{ fontVariationSettings: '"opsz" 36' }}
          >
            Sulaiman Ahmed
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 text-sm transition-colors duration-fast ease-out-quart rounded-sm",
                    isActive
                      ? "text-foreground"
                      : "text-foreground-muted hover:text-foreground"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="rounded-pill text-foreground-muted hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            {isHomePage ? (
              <Button size="sm" className="hidden md:inline-flex" onClick={handleContact}>
                Get in touch
              </Button>
            ) : (
              <Button size="sm" className="hidden md:inline-flex" asChild>
                <Link to="/#contact">Get in touch</Link>
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden rounded-pill text-foreground-muted hover:text-foreground"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-2 py-4 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "block w-full text-left px-3 py-2.5 text-sm transition-colors duration-fast ease-out-quart rounded-sm",
                      isActive
                        ? "text-foreground bg-accent-brand-soft/40"
                        : "text-foreground-muted hover:text-foreground hover:bg-background-elevated"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-2 mt-2 border-t border-border">
                {isHomePage ? (
                  <Button className="w-full" onClick={handleContact}>
                    Get in touch
                  </Button>
                ) : (
                  <Button className="w-full" asChild>
                    <Link to="/#contact">Get in touch</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
