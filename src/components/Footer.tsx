import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 text-center">
      <div className="flex items-center justify-center gap-4 mb-4">
        <a
          href="https://www.linkedin.com/in/sulaimanahmed013/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a
          href="https://github.com/Sulaimanahmed013"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-4 w-4" />
        </a>
      </div>
      <p className="text-xs text-muted-foreground">
        © 2026 Sulaiman Ahmed. All rights reserved.
      </p>
    </footer>
  );
}
