# Product

## Register

brand

## Users

Three audiences land here, in priority order:

1. **Microsoft Data Platform community** (primary). MVPs, data engineers working in Power BI / Fabric / dbt, members of the broader MS data ecosystem. They arrive via blog posts, social shares, conference references. They read deeply, value technical rigor, and amplify good work. This audience drives the primary outcome: MVP nomination path.

2. **Consulting clients & decision-makers**. Business stakeholders evaluating Sulaiman for paid Power BI / Microsoft Fabric / analytics engineering work. They scan for credibility, outcomes, and signs that this is a real practitioner. They land mostly on case studies and the homepage.

3. **Hiring managers & engineering leads**. Recruiters evaluating Sulaiman for full-time or contract roles. They check skills, certs, shipped projects. They land on /experience and /portfolio.

The design serves all three by serving audience 1 well — depth, voice, and craft make Sulaiman credible to the other two as a side effect, not by adding separate marketing surfaces.

## Product Purpose

A personal site that positions Sulaiman Ahmed as a recognized voice in the Microsoft Data Platform community on the path to MVP. Long-form blog posts and case studies are the primary product; everything else (about, portfolio, contact) is supporting material.

Success looks like:
- Posts are read end-to-end and shared in the MS data community.
- Case studies are sent in inbound consulting outreach and treated as proof of practitioner depth.
- The site becomes a recognizable name in the Fabric / Power BI / modern data stack conversation.

## Brand Personality

Three words: **warm, human, story-driven**.

Voice and tone:
- Speaks as a working practitioner who teaches, not a vendor who pitches.
- First-person, specific, opinion-bearing. Not corporate.
- Confident about depth and certifications; humble about being on a learning journey.
- Comfortable showing personality (place, photography, voice) — this is a personal site, not a product brand.

Emotional goals when someone lands:
- "This person knows the work, deeply."
- "I want to read more."
- "This feels like a person, not a consulting firm."

## Anti-references

Explicitly avoid:

- **Generic SaaS landing pages**. Big purple-to-blue gradient hero, "Trusted by" logo bars, identical feature cards in a 3-column grid, oversized "Get started" CTAs. The current portfolio leans into this aesthetic and the redesign exits it.
- **Generic dev portfolios**. Dark background + neon green accent + monospace everything + grid of screenshot thumbnails labeled "projects." Templated, indistinct.
- **Crypto / AI startup aesthetic**. Aurora gradients, neon-on-black, 3D blob hero illustrations, glow effects, glassmorphism as decoration. Currently saturated.
- **Corporate Microsoft partner sites**. Stiff blue/grey palette, stock photography, jargon-heavy hero copy. We are not another consulting firm.

## Design Principles

1. **Writing is the product.** Long-form technical posts (Fabric capacity, Direct Lake, dbt-in-Fabric, parquet) and case studies are the primary surface. Design must serve dense data engineering content over hundreds of scroll-feet. Typography, line length, code-block treatment, callouts, and figure captions all earn priority over decorative elements.

2. **Story over specs.** Each page leads with narrative or outcome, not a list of features or skills. Case studies are stories with a stake, a turn, and a result — not specification sheets. The homepage opens with a person, not a value proposition.

3. **Personality through craft, not decoration.** Warmth comes from typography, photography, considered color, and the writing itself. Avoid loud gradients, mascot illustration, or animation as a substitute for character. The visual identity should feel earned — like Josh Comeau's or Data Goblins' — not applied.

4. **Show the receipts.** Microsoft certifications, blog post archive, case studies, and live links to the dbt-in-Fabric / Power BI MCP / Fabric SQL Assistant projects are the credentials. They should be visible, browsable, and easy to share — not buried behind navigation or padding.

5. **MS-data-native, but not derivative.** The visual language should feel at home in the Microsoft Data Platform space (where Kurt Buhler / Data Goblins, Marco Russo, Patrick LeBlanc, Phil Seamark publish) without copying Microsoft's brand palette or any single peer's identity. Distinct, but in-conversation.

## Accessibility & Inclusion

- **WCAG 2.1 AA** as the floor. 4.5:1 contrast for body text, 3:1 for large text and UI elements.
- **prefers-reduced-motion** respected for every animation, including hero motion, scroll-triggered fades, and any decorative transitions.
- Semantic HTML, visible focus rings on every interactive element, skip-to-content for long pages.
- Body line length capped at 65–75ch (already enforced in `.blog-prose`).
- Light and dark themes both first-class; neither is an afterthought.
- Images have meaningful alt text; figures use proper `<figcaption>`.
