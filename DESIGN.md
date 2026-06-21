# Design

The visual system for Sulaiman Ahmed's portfolio. Derived from [PRODUCT.md](PRODUCT.md) — warm, human, story-driven; writing is the product; the MS Data Platform community is the primary audience.

**Vibe**: heartwarming, fresh breath of air, garden-and-sunlight. Plant-filled studio with open windows, not scholarly library. The first attempt at "scholarly Stripe-Press editorial" read as pale and depressing; this spec corrects that.

## Color strategy

**Committed.** A single saturated color — bright spring leaf green — carries 30–60% of identity. It appears prominently in primary buttons, accent badges, italic emphasis on key phrases, decorative offset blocks, links, callouts, and ambient background washes. The palette is high-chroma on purpose.

All values in OKLCH, hue 130–140 (green family). Neutrals are tinted toward the same hue so the whole palette feels coherent (chroma 0.018–0.028 in neutrals). No `#000`, no `#fff`.

### Light mode (default)

| Role | OKLCH | Use |
|---|---|---|
| `--background` | `0.975 0.022 130` | Page background — pale sage cream, energetic |
| `--background-elevated` | `0.955 0.028 130` | Cards, callouts, code-block frames |
| `--foreground` | `0.22 0.025 135` | Body text — deep forest charcoal |
| `--foreground-muted` | `0.48 0.020 135` | Secondary text |
| `--foreground-subtle` | `0.62 0.015 135` | Tertiary meta |
| `--border` | `0.88 0.020 130` | Default border |
| `--border-strong` | `0.78 0.022 130` | Emphasis border |
| `--accent-brand` | `0.68 0.22 140` | Bright spring leaf green — committed identity color |
| `--accent-strong` | `0.58 0.22 140` | Deeper leaf for hover/active |
| `--accent-soft` | `0.92 0.07 140` | Pale leaf-tinted backgrounds (badges, ambient wash) |
| `--accent-foreground-brand` | `0.18 0.020 135` | Dark text on bright green |
| `--code-background` | `0.94 0.025 130` | Inline + block code |
| `--ring` | `0.65 0.20 140` | Focus rings |

### Dark mode

Deep forest charcoal — warm dark, tinted toward green. Leaf accent gets BRIGHTER in dark mode so it pops harder.

| Role | OKLCH | Use |
|---|---|---|
| `--background` | `0.16 0.022 135` | Page background — deep forest charcoal |
| `--background-elevated` | `0.21 0.025 135` | Cards, callouts |
| `--foreground` | `0.94 0.020 130` | Body text — bright sage paper |
| `--foreground-muted` | `0.68 0.018 130` | Secondary text |
| `--foreground-subtle` | `0.52 0.015 135` | Tertiary |
| `--border` | `0.28 0.025 135` | Default border |
| `--border-strong` | `0.38 0.028 135` | Emphasis border |
| `--accent-brand` | `0.78 0.20 140` | Even brighter leaf for dark contrast — really pops |
| `--accent-strong` | `0.85 0.18 140` | Hover/active |
| `--accent-soft` | `0.28 0.10 140` | Tinted accent context |
| `--accent-foreground-brand` | `0.12 0.020 135` | Dark text on bright green |
| `--code-background` | `0.22 0.028 135` | Inline + block code |
| `--ring` | `0.78 0.20 140` | Focus rings |

### Semantic colors (both themes)

| Role | Light | Dark |
|---|---|---|
| `--destructive` | `0.55 0.18 27` | `0.66 0.16 27` |
| `--success` | `0.55 0.13 145` | `0.70 0.13 145` |
| `--warning` | `0.72 0.14 75` | `0.78 0.13 75` |

Use these only for state communication (errors, success toasts, warnings). They are not decorative accents.

## Typography

### Families

| Role | Family | Weights | Source | Notes |
|---|---|---|---|---|
| Display & serif headings | **Newsreader** | 400, 500, 600, 700 + matching italics, variable optical-size (6–72) | Google Fonts | Warm soft serif optimised for screens. Multi-weight so no fake-bold rendering. Used for hero, page H1, blog/case-study H2s. Italic carries phrase-level emphasis. |
| Body & sub-headings | **Plus Jakarta Sans** | 400, 500, 600, 700, 800 | Google Fonts | Modern humane sans. Warmer and more characterful than Inter; fits the garden / fresh-air vibe. Used for h3+ and all body text. |
| Mono | **JetBrains Mono** | 400, 500, 700 (variable) | Google Fonts | Code blocks, inline code, meta. |

Removed: Fraunces (first attempt — too solemn), Instrument Serif (second attempt — single-weight caused fake-bold rendering at heading sizes), Poppins (original site default), Inter (replaced by Plus Jakarta Sans).

### Type scale (modular, 1.25 ratio)

| Token | Size | Line height | Family | Weight | Use |
|---|---|---|---|---|---|
| `display-xl` | 3.815rem (~61px) | 1.05 | Newsreader | 400 | Homepage hero, MAX one per page |
| `display-lg` | 3.052rem (~49px) | 1.1 | Newsreader | 400 | Page H1 (blog title, case study title) |
| `display-md` | 2.441rem (~39px) | 1.15 | Newsreader | 400 | Section H1, large standout moments |
| `h2` | 1.953rem (~31px) | 1.25 | Newsreader | 400 | Long-form H2 |
| `h3` | 1.563rem (~25px) | 1.3 | Plus Jakarta Sans | 700 | Long-form H3, card title |
| `h4` | 1.25rem (~20px) | 1.4 | Plus Jakarta Sans | 600 | Inline section heads |
| `body-lg` | 1.125rem (~18px) | 1.65 | Plus Jakarta Sans | 400 | Blog body, long-form paragraphs |
| `body` | 1rem (16px) | 1.55 | Plus Jakarta Sans | 400 | UI body, default |
| `body-sm` | 0.875rem (~14px) | 1.5 | Plus Jakarta Sans | 400 | Meta, captions, UI secondary |
| `caption` | 0.75rem (12px) | 1.4 | Plus Jakarta Sans | 500 | Smallest meta, table headers, eyebrow labels (uppercase + tracking) |
| `code` | 0.875rem | 1.6 | JetBrains Mono | 400 | Inline + block code |

### Typography rules

- Body line length capped at **65–75ch** for prose.
- Headings use **tighter line height** (1.05–1.3); body uses **looser** (1.55–1.65).
- Use Newsreader **italic** for emphasis inside display headlines (a key phrase in italic adds personality without leaving the family).
- Plus Jakarta Sans handles weight hierarchy; use 700 for h3 and key UI labels, 600 for h4, 500 for caption.

## Layout & spacing

Tailwind's default spacing scale (multiples of 4) is fine; we add semantic vertical-rhythm tokens.

| Token | Value | Use |
|---|---|---|
| `--space-section-sm` | 4rem (64px) | Vertical gap between minor sections |
| `--space-section` | 6rem (96px) | Default section gap |
| `--space-section-lg` | 8rem (128px) | Major section gap (between hero and next section) |
| `--space-prose` | 1.25rem (20px) | Paragraph spacing in long-form |

**Rhythm rule**: vary spacing between sections. Same padding everywhere is monotony. Hero gets the most vertical breathing room; dense content (case study process steps) gets less.

**Container**: max-width 1200px for landing pages; max-width 720px for prose body (long-form blog and case study content); max-width 1000px for case study image layouts. Don't wrap everything in a container — most things don't need one.

**Asymmetry**: prefer asymmetric layouts over centered everything. A name + 5-line bio on the left, photo on the right is more interesting than centered headshot + bio.

## Radii

| Token | Value | Use |
|---|---|---|
| `--radius-xs` | 4px | Small UI (input, badge) |
| `--radius-sm` | 6px | Buttons, small cards |
| `--radius-md` | 10px | Default card |
| `--radius-lg` | 14px | Image card, blog thumbnail |
| `--radius-xl` | 20px | Hero card, prominent content frame |
| `--radius-pill` | 9999px | Tags, small status pills |

No sharp 0px corners. No oversized 24px+ corners on small elements (looks gummy).

## Shadows / elevation

| Token | Light | Dark |
|---|---|---|
| `--shadow-subtle` | `0 1px 2px 0 oklch(0.22 0.012 85 / 0.05)` | `0 1px 2px 0 oklch(0 0 0 / 0.3)` |
| `--shadow-soft` | `0 4px 12px -2px oklch(0.22 0.012 85 / 0.08)` | `0 4px 12px -2px oklch(0 0 0 / 0.4)` |
| `--shadow-lifted` | `0 12px 32px -8px oklch(0.22 0.012 85 / 0.12)` | `0 12px 32px -8px oklch(0 0 0 / 0.5)` |

Shadows are rare. Default to borders or background-elevated tints for hierarchy. Reserve shadows for hover lift and the occasional pinned element.

## Motion

Subtle and earned. Motion serves comprehension, not decoration. Every animation respects `prefers-reduced-motion`.

### Easing curves (exponential ease-out family — no bounce, no elastic)

| Token | cubic-bezier | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default (ease-out-quart). Almost everything. |
| `--ease-out-expo` | `cubic-bezier(0.19, 1, 0.22, 1)` | Hero entrance, page transitions |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Two-way state (modal open/close) |

### Durations

| Token | Value | Use |
|---|---|---|
| `--duration-fast` | 150ms | Hover, focus, micro-state |
| `--duration` | 250ms | Default — most UI transitions |
| `--duration-slow` | 500ms | Hero entrance, scroll-triggered fades |
| `--duration-page` | 350ms | Route transitions |

### Stagger

Cascading entrances stagger 50ms between siblings. Use sparingly — once on the hero, optionally once on a list. Not on every list everywhere.

### Reduced motion

Every non-essential motion wrapped in `@media (prefers-reduced-motion: no-preference)`. Hover state changes are allowed (they're affordance, not motion); scroll fades, parallax, route transitions are not.

### Never animate

- CSS layout properties (`width`, `height`, `margin`, `padding`) — use `transform` instead
- More than 3 properties simultaneously on the same element
- Anything purely decorative on a content-heavy page

## Components

### Buttons

Three variants:

- **Primary**: solid accent background, paper foreground. Use for the single most important action per surface (Contact form submit, "Read post").
- **Ghost**: transparent background, accent foreground, hover background `--accent-soft`. Use for secondary actions.
- **Link**: text-only with underline. Use everywhere prose-style.

Sizes: sm (h-9, px-3, text-sm), md (h-11, px-4, text-base), lg (h-12, px-6, text-base).
Radius: `--radius-sm` (6px).
Weight: 500.
Transform on press: `translateY(1px)`. Transition 100ms.

No huge "Get Started" CTAs. The site doesn't sell anything directly.

### Cards

**Cards are the lazy answer.** Use only when truly the best affordance — case study gallery items, blog thumbnails. NEVER nested.

Card spec:
- Background: `--background-elevated`
- Border: 1px solid `--border`
- Radius: `--radius-lg` (14px)
- Padding: 1.5rem
- Hover: border becomes `--border-strong`, optional `--shadow-soft`, optional `translateY(-2px)`

### Links (in prose)

- Color: `--accent`
- Underline: 1px solid, offset 2px, decoration-color matches accent at 50% opacity
- Hover: decoration-color goes to 100%

### Code

Inline: `--code-background`, `--accent-strong` color, `--radius-xs`, padding `0.15em 0.4em`, 0.875em, JetBrains Mono.

Block: `--background-elevated` or `--code-background` frame, 1px border `--border`, `--radius-md`, padding 1.25rem, optional language label in top-right corner. Syntax highlighting palette tuned to warm neutrals (no pure red/blue/green; tinted versions).

### Callouts (in blog prose)

Existing `.blog-callout` pattern stays, but loses the left-border stripe (impeccable absolute ban: no >1px side-stripe borders). Replace with:
- Full 1px border in `--border`
- Background `--accent-soft` for "note", warning/success/error variants use the semantic colors at low chroma
- Leading icon (lucide) 1.25rem, accent color
- No striped accent down the side

### Navigation

Top bar, sticky, generous height (h-16 minimum). Layout:
- Left: name "Sulaiman Ahmed" in Fraunces 600. NOT a logo mark.
- Right: nav links (About / Portfolio / Writing / Case Studies / Contact), theme toggle.
- Backdrop blur on scroll, semi-transparent background.

No "Home" link. The name takes you home.

### Footer

Minimal:
- One line: "Sulaiman Ahmed · Dhaka, Bangladesh · last updated [date]"
- Link row: email, GitHub, LinkedIn, RSS
- Quiet copyright line in `--foreground-subtle`

No newsletter sign-up form, no "more from me," no big CTAs.

## Specific surface patterns

### Homepage hero

- Display-xl headline. NOT a generic "Transforming Data into Strategic Insights" — replace with something with stake and specificity (e.g. "I write about Power BI, Microsoft Fabric, and the modern data stack — from Dhaka.").
- No gradient text. Solid `--foreground`.
- No animated role carousel (remove). Roles can become a static comma-separated line in body text.
- Left-aligned, not centered. Photo on the right (use one of the `/public/about/` portraits).
- Single primary CTA: "Read the writing →" linking to /blog.

### Blog index

Posts as a vertical reading list, not a card grid. Each row:
- Date in caption (mono, `--foreground-subtle`)
- Title in h3 Fraunces
- 1-2 line dek in body
- Read time + tags as small meta

The card grid currently in use feels like a "projects grid" — the redesign moves to a chronological reading list that signals "this is a magazine, read along."

### Case study gallery

Cards stay (this is one of the few right places for cards). 2-column grid on desktop, 1-column on mobile. Each card:
- Hero image at `--radius-lg`
- Client/project name in h4
- 1-sentence outcome in body-sm
- Tags as small pills

### Blog post layout

- Display-lg title, left-aligned
- Eyebrow (date + read time) above title in caption mono
- Body at body-lg (18px), max 65-75ch, generous paragraph spacing
- Existing `.blog-prose` styles refined (no left-stripe callouts, refined code-block, refreshed figure treatment)
- Optional table of contents on the right (desktop only), sticky

### Case study layout

- Display-lg title
- Eyebrow: client name + year + role
- Lede paragraph (body-lg, slightly larger weight 500)
- Sections with display-md headings
- Image figures use full-bleed within the 1000px container, captioned
- "Outcomes" section uses semantic result cards (existing `.blog-result-card` refined to drop the primary-tinted "winner" variant in favor of a quieter forest-tinted version)

## Absolute bans (impeccable shared, plus project-specific)

Project-specific bans on top of impeccable's shared list:

- **Purple-to-blue gradient hero**. Currently present. Removed.
- **`bg-clip-text` gradient text headlines**. Currently in `Hero.tsx`. Removed.
- **Animated role carousel.** Currently in `Hero.tsx`. Removed.
- **Microsoft brand blue (`#0078d4`) used as accent**. We're in the MS data space; the accent is forest green precisely so the site doesn't read as "another Microsoft partner page."
- **Card grids of identical-sized thumbnails for blog posts**. Reading list instead.
- **"Trusted by" logo bars** (not currently present; banned preemptively).
- **Em dashes in copy.** Use commas, colons, semicolons, periods, or parentheses. Also no `--`.

## Implementation map

The redesign cascades from these files:

- [src/index.css](src/index.css) — Replace HSL token block with OKLCH from this doc. Refresh `.blog-prose`, `.blog-callout` (drop left-stripe), `.blog-result-card`, `.blog-code-block`.
- [tailwind.config.ts](tailwind.config.ts) — Wire OKLCH tokens via CSS vars; extend `fontFamily`, `fontSize`, `lineHeight`, `boxShadow`, `borderRadius`, `transitionTimingFunction`, `keyframes` per this doc.
- [index.html](index.html) — Swap Google Fonts preconnect: Fraunces + Inter + JetBrains Mono. Remove Poppins.
- [src/components/ui/button.tsx](src/components/ui/button.tsx), [src/components/ui/card.tsx](src/components/ui/card.tsx), [src/components/ui/badge.tsx](src/components/ui/badge.tsx) — restyle per component specs above.
- [src/components/Navigation.tsx](src/components/Navigation.tsx), [src/components/Footer.tsx](src/components/Footer.tsx) — restyle per nav/footer specs.
- [src/components/Hero.tsx](src/components/Hero.tsx) — full rewrite per hero spec.
- [src/pages/Blog.tsx](src/pages/Blog.tsx), [src/components/BlogSection.tsx](src/components/BlogSection.tsx) — restructure to reading list.
- [src/components/BlogPost.tsx](src/components/BlogPost.tsx), [src/components/CaseStudyLayout.tsx](src/components/CaseStudyLayout.tsx) — restyle per long-form specs.

## Out of scope for this doc

- Content rewrites (headlines, body copy)
- Routing changes
- Adding pages or features
- Performance budgets, bundle size (handled separately if needed)
