import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Linkedin,
  Github,
  Globe,
  ExternalLink,
  Calendar,
  ChevronRight,
  MapPin,
  Heart,
  BookOpen,
} from "lucide-react";

const coreCompetencies = [
  "Analytics Engineering",
  "Data Warehousing",
  "Medallion Architecture",
  "ETL/ELT Pipelines",
  "Star Schema Data Modeling",
  "CI/CD Pipelines",
  "Data Governance",
  "Data Quality",
  "Data Visualization",
  "Stakeholder Management",
  "Requirements Gathering",
];

const tools = [
  "Microsoft Fabric",
  "Databricks",
  "Azure DevOps",
  "Azure Data Factory",
  "dbt",
  "PySpark",
  "SQL/T-SQL",
  "Power BI",
  "DAX",
  "Python",
  "Snowflake",
  "SQL Server",
  "MySQL",
  "Git",
  "FiveTran",
];

const experience = [
  {
    role: "Analytics Engineer",
    company: "Data Crafters",
    industry: "Data Analytics",
    period: "Nov 2024 to Present",
    highlights: [
      "Rebuilt the reporting foundation for an oil and gas manufacturing client, replacing 346 fragile report queries with 231 reusable data models. Reports that previously broke after every system update now run reliably with zero manual fixes.",
      "Designed the company's central data warehouse from scratch, organizing raw business data into a clean, structured format across 23 business dimensions and 18 core metrics. Teams now pull consistent numbers across every department.",
      "Automated the entire deployment process so that code changes move through 4 stages (dev, test, staging, production) without manual intervention. What used to take a full day of copy-paste work now happens in minutes.",
      "Eliminated a painful monthly ritual: the finance team used to manually export QuickBooks data into spreadsheets every month. Built an automated pipeline that pulls financial data directly into the analytics platform, saving 2 to 3 days of manual work per month.",
      "Cleaned and standardized financial data from multiple sources into a single, audit-ready format. Auditors and finance leads now trust the numbers without double-checking against source systems.",
      "Cut the monthly accounting close cycle by 60 to 70% by replacing manual spreadsheet workflows with automated processes. What used to take the finance team a full week now wraps up in under 2 days.",
    ],
  },
  {
    role: "Data Engineer",
    company: "Insightin Technology Ltd.",
    industry: "Healthcare Tech",
    period: "Jan 2024 to Oct 2024",
    highlights: [
      "Restructured the company's core data processing logic, making it easier for the team to understand, maintain, and modify. Team productivity improved by 70% because engineers spent less time deciphering old code.",
      "Redesigned how data flows into dashboards, cutting report load times from 50 seconds down to 15 seconds. Executives and analysts who relied on these reports daily noticed the difference immediately.",
      "Built interactive dashboards for major US healthcare insurers, giving compliance teams real-time visibility into quality ratings and member retention trends. These dashboards became the primary decision-making tool for client leadership.",
      "Served as the bridge between the data engineering and reporting teams, aligning both groups on shared definitions and timelines. Eliminated the back-and-forth that was slowing down every project delivery.",
    ],
  },
  {
    role: "Data Engineering Consultant",
    company: "SJ Analytics",
    industry: "Consulting",
    period: "Nov 2020 to Oct 2025",
    highlights: [
      "Delivered 250+ projects and 50+ executive dashboards for clients across the US, Europe, and the Middle East. Each engagement focused on turning scattered, unreliable data into a single source of truth that leadership could act on.",
      "Unified 4 disconnected data systems into one platform for a client, then built 30+ predictive indicators that identified at-risk customers before they left. The work contributed to preventing an estimated $5 to 6M in annual revenue loss.",
      "Automated data collection that previously required manual copy-paste from websites and external tools, reducing data delivery time from days to 30 minutes. Freed analysts to spend 80% more time on insights instead of data gathering.",
    ],
  },
];

const certifications = [
  {
    name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/Sulaiman-1779/D86F89EC13EB4F44?sharingId=2F8D8D7121F7566C",
  },
  {
    name: "Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/Sulaiman-1779/4BF83C913084A933?sharingId=2F8D8D7121F7566C",
  },
  {
    name: "Microsoft Certified: Fabric Data Engineer Associate (DP-700)",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/Sulaiman-1779/BA7F6AE3F38244C0?sharingId=2F8D8D7121F7566C",
  },
  {
    name: "Microsoft Certified: Azure Data Engineer Associate (DP-203)",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/Sulaiman-1779/8C147E65EC980BE4?sharingId=2F8D8D7121F7566C",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />

      {/* ===== HERO: Personal intro with portrait ===== */}
      <section className="pt-24 pb-section-sm md:pb-section bg-background">
        <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Photo 2: Smiling portrait */}
            <div className="shrink-0">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-xl overflow-hidden border border-border-strong shadow-lifted rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/about/sulaiman-portrait.jpeg"
                  alt="Sulaiman Ahmed"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="text-center md:text-left">
              <Badge variant="outline" className="text-xs mb-4">
                About Me
              </Badge>
              <h1 className="font-serif text-display-md md:text-display-lg font-normal tracking-tight leading-tight mb-4">
                Hey, I'm <em className="italic">Sulaiman</em>.
              </h1>
              <p className="text-lg md:text-xl text-accent-brand-strong font-medium mb-4">
                Analytics Engineer, Data Consultant, and a Statistician at Heart
              </p>
              <p className="text-foreground-muted leading-relaxed max-w-xl mb-6">
                I grew up in Sylhet, one of the most beautiful cities in Bangladesh. I studied
                statistics, fell in love with what data can reveal, and eventually turned that
                curiosity into a career building data platforms for companies across the US, Europe,
                and the Middle East.
              </p>
              <div className="flex flex-col items-center gap-4 md:items-start">
                <Button asChild>
                  <a href="mailto:sulaimanahmed013@gmail.com" className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" aria-hidden="true" /> Get in touch
                  </a>
                </Button>
                <div className="flex items-center gap-1">
                  <a
                    href="https://www.linkedin.com/in/sulaimanahmed013/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Sulaiman on LinkedIn"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-pill text-foreground-muted transition-colors duration-fast ease-out-quart hover:bg-accent-brand-soft hover:text-accent-brand-strong"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://github.com/sulaiman013"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Sulaiman on GitHub"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-pill text-foreground-muted transition-colors duration-fast ease-out-quart hover:bg-accent-brand-soft hover:text-accent-brand-strong"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MY STORY: Personal journey ===== */}
      <section className="py-section-sm md:py-section bg-background">
        <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-lg bg-accent-brand-soft flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-accent-brand" aria-hidden="true" />
            </div>
            <h2 className="font-serif text-h2 md:text-display-md font-normal tracking-tight">My Story</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
            <div className="flex-1 max-w-prose space-y-5 text-foreground-muted leading-relaxed">
              <p>
                I'm originally from <strong className="text-foreground">Sylhet, Bangladesh</strong>.
                If you have never heard of it, picture lush green tea gardens, rolling hills,
                and monsoon rain that makes everything feel alive. It is a small city, but it
                shaped how I think: resourceful, curious, and always looking for patterns in things.
              </p>
              <p>
                During my undergraduate at{" "}
                <strong className="text-foreground">
                  Shahjalal University of Science and Technology
                </strong>
                , I studied Statistics. By my third year, I was deep into statistical data analysis:
                chi-square tests, regression analysis, design of experiments, different flavors of
                t-tests. I loved the process of taking messy, real-world data and finding the story
                hiding inside it.
              </p>
              <p>
                But here is the thing about Bangladesh: there are plenty of academic research
                opportunities, but the technical analytics industry was still growing. I knew
                academia was not my path. So I took what I already knew, the statistical
                foundations, the comfort with data, and I pivoted.
              </p>
              <p>
                I taught myself Excel end to end, then Power BI, then SQL, then T-SQL, then
                Python, then Microsoft Fabric. Each tool opened a new door. Each project taught
                me something the last one did not. And slowly, what started as a pivot became a
                career I genuinely love.
              </p>
            </div>

            {/* Photo 1: Candid shot */}
            <div className="shrink-0 mx-auto md:mx-0">
              <div className="w-64 h-80 rounded-xl overflow-hidden border border-border shadow-soft -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/about/sulaiman-candid.jpeg"
                  alt="Sulaiman working casually"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-xs text-foreground-subtle text-center mt-3 italic">
                Always somewhere between a query and a coffee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT I DO TODAY ===== */}
      <section className="py-section-sm md:py-section bg-background-elevated">
        <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-accent-brand-soft flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-accent-brand" aria-hidden="true" />
            </div>
            <h2 className="font-serif text-h2 md:text-display-md font-normal tracking-tight">What I Do Today</h2>
          </div>
          <p className="text-foreground-muted leading-relaxed max-w-prose mb-10">
            Today I lead analytics engineering projects at my full-time role, building reporting
            platforms, warehouse architectures, and the kind of data infrastructure that teams
            actually trust. Over the years I have shipped 250+ projects across the US, Europe,
            and the Middle East, earned 4 Microsoft certifications, and I am still learning
            something new every week.
          </p>

          <div className="space-y-8">
            {experience.map((job, i) => (
              <Card
                key={i}
                className="border-border bg-background-elevated transition-colors duration-fast ease-out-quart hover:border-border-strong"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-h3 font-bold">{job.role}</h3>
                      <p className="text-accent-brand-strong font-medium">
                        {job.company}{" "}
                        <span className="text-foreground-muted font-normal">
                          [{job.industry}]
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-foreground-muted shrink-0">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      {job.period}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.highlights.map((item, j) => (
                      <li key={j} className="flex gap-2 text-sm text-foreground-muted leading-relaxed">
                        <ChevronRight className="h-4 w-4 text-accent-brand shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BEYOND THE DATA: Personal section with Photo 3 ===== */}
      <section className="py-section-sm md:py-section bg-background">
        <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-lg bg-accent-brand-soft flex items-center justify-center">
              <Heart className="h-5 w-5 text-accent-brand" aria-hidden="true" />
            </div>
            <h2 className="font-serif text-h2 md:text-display-md font-normal tracking-tight">Beyond the Data</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
            {/* Photo 3: Bright portrait */}
            <div className="shrink-0 mx-auto md:mx-0 order-2 md:order-1">
              <div className="w-64 h-80 rounded-xl overflow-hidden border border-border shadow-soft rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/about/sulaiman-bright.jpeg"
                  alt="Sulaiman Ahmed"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="flex-1 max-w-prose space-y-5 text-foreground-muted leading-relaxed order-1 md:order-2">
              <p>
                When I am not writing dbt models or optimizing Delta tables, you will probably
                find me exploring a new city, trying out a restaurant I found online, or getting
                lost in a long conversation about how things work. I am the kind of person who
                reads the Wikipedia article about how credit card networks process transactions
                and finds it genuinely fascinating.
              </p>
              <p>
                I believe the best data engineers are not just good with tools. They are curious
                people who like understanding systems, whether that system is a data warehouse,
                a supply chain, or the recipe behind a perfect cup of Sylheti tea.
              </p>
              <p>
                My statistical background is something I carry into everything I build. When I
                design a star schema, I am thinking about how an analyst will slice the data. When
                I write a pipeline, I am thinking about data quality the same way I used to think
                about confidence intervals. The foundation never leaves you. It just finds new
                places to show up.
              </p>
              <p className="text-foreground font-medium">
                If any of this resonates, or you just want to chat about data, statistics, or
                Sylheti tea, drop me a line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="py-section-sm md:py-section bg-background-elevated">
        <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-accent-brand-soft flex items-center justify-center">
              <Globe className="h-5 w-5 text-accent-brand" aria-hidden="true" />
            </div>
            <h2 className="font-serif text-h2 md:text-display-md font-normal tracking-tight">Skills & Tools</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-3">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {coreCompetencies.map((skill) => (
                  <Badge key={skill} className="text-sm px-3 py-1.5">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-3">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="text-sm px-3 py-1.5">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section className="py-section-sm md:py-section bg-background">
        <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-accent-brand-soft flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-accent-brand" aria-hidden="true" />
            </div>
            <h2 className="font-serif text-h2 md:text-display-md font-normal tracking-tight">Education</h2>
          </div>

          <Card className="border-border bg-background-elevated">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-h3 font-bold mb-1">
                Shahjalal University of Science and Technology
              </h3>
              <div className="flex items-center gap-1.5 text-foreground-muted mb-1">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Sylhet, Bangladesh</span>
              </div>
              <p className="text-sm text-foreground-muted">
                B.Sc. Statistics &middot; CGPA 3.55/4.00 &middot; Feb 2017 &ndash; Dec 2021
              </p>
              <p className="text-sm text-foreground-muted mt-3 leading-relaxed">
                Coursework in regression analysis, design of experiments, chi-square testing,
                hypothesis testing, and multivariate statistical analysis. This is where the
                data journey started.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="py-section-sm md:py-section bg-background-elevated">
        <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-accent-brand-soft flex items-center justify-center">
              <Award className="h-5 w-5 text-accent-brand" aria-hidden="true" />
            </div>
            <h2 className="font-serif text-h2 md:text-display-md font-normal tracking-tight">Professional Certifications</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full border-border bg-background-elevated transition-colors duration-fast ease-out-quart hover:border-border-strong">
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-brand-soft flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="h-4 w-4 text-accent-brand" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium leading-snug group-hover:text-accent-brand-strong transition-colors">
                        {cert.name}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs text-foreground-muted mt-1">
                        Verify credential <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
