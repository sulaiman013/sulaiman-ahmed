import { Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/sulaimanahmed013/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com/Sulaimanahmed013",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "mailto:hello@sulaimanahmed.com",
    label: "Email",
    icon: Mail,
  },
];

const footerNav = [
  { to: "/blog", label: "Blogs" },
  { to: "/case-study", label: "Case Studies" },
  { to: "/about", label: "About" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-section-lg border-t border-border">
      <div className="mx-auto max-w-page px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="font-serif text-display-md font-medium leading-tight tracking-tight text-foreground" style={{ fontVariationSettings: '"opsz" 96' }}>
              Want to talk about data?
            </p>
            <p className="mt-3 text-body-sm text-foreground-muted">
              I write about Power BI, Microsoft Fabric, and the modern data stack from Dhaka, Bangladesh. If something here was useful, send a note.
            </p>
            <div className="mt-5 flex items-center gap-1">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-pill text-foreground-muted transition-colors duration-fast ease-out-quart hover:bg-accent-brand-soft hover:text-accent-brand-strong"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-body-sm sm:grid-cols-1">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-foreground-muted transition-colors duration-fast ease-out-quart hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 text-caption text-foreground-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>Sulaiman Ahmed · Dhaka, Bangladesh</p>
          <p>© {year}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
