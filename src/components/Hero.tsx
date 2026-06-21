import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[60%] bg-gradient-to-br from-accent-brand-soft/70 via-background to-background"
        aria-hidden
      />

      <div className="mx-auto max-w-page px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-pill border border-accent-brand/30 bg-accent-brand-soft/70 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-accent-brand-strong">
              <span className="h-1.5 w-1.5 rounded-pill bg-accent-brand" />
              Writing about data, from Dhaka
            </div>

            <h1 className="font-serif text-display-lg sm:text-display-xl leading-[1.02] tracking-tight text-foreground">
              I write about Power BI,{" "}
              <span className="italic text-accent-brand-strong">Microsoft Fabric</span>, and the modern data stack.
            </h1>

            <p className="max-w-xl text-body-lg leading-relaxed text-foreground-muted">
              I'm Sulaiman Ahmed, a 4x Microsoft Certified analytics engineer. Field notes from real Power BI and Fabric projects, practical case studies, and what I learn along the way.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button size="lg" asChild className="group">
                <Link to="/blog">
                  Read the writing
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-fast ease-out-quart group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" onClick={scrollToContact}>
                Get in touch
              </Button>
            </div>

            <div className="flex items-center gap-2 pt-4 text-body-sm text-foreground-subtle">
              <MapPin className="h-3.5 w-3.5" />
              Dhaka, Bangladesh
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-xl border border-border-strong shadow-soft">
              <img
                src="/about/sulaiman-bright.jpeg"
                alt="Sulaiman Ahmed"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div
              className="absolute -bottom-3 -right-3 -z-10 hidden h-24 w-24 rounded-xl bg-accent-brand sm:block"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
