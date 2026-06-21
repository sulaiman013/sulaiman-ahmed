export type ThemeKey =
  | "amber"
  | "orange"
  | "rose"
  | "violet"
  | "sky"
  | "teal"
  | "emerald"
  | "indigo";

export interface CardTheme {
  iconBg: string;
  iconText: string;
  accent: string;
  accentStrong: string;
  hoverBorder: string;
  bgWash: string;
  ringSoft: string;
  badge: string;
}

export const cardThemes: Record<ThemeKey, CardTheme> = {
  amber: {
    iconBg: "bg-amber-100 dark:bg-amber-950/50",
    iconText: "text-amber-700 dark:text-amber-300",
    accent: "text-amber-700 dark:text-amber-300",
    accentStrong: "text-amber-800 dark:text-amber-200",
    hoverBorder: "hover:border-amber-500/60 dark:hover:border-amber-400/60",
    bgWash: "bg-gradient-to-br from-amber-50/60 via-background to-background dark:from-amber-950/25 dark:via-background dark:to-background",
    ringSoft: "ring-amber-500/20 dark:ring-amber-400/20",
    badge: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-200",
  },
  orange: {
    iconBg: "bg-orange-100 dark:bg-orange-950/50",
    iconText: "text-orange-700 dark:text-orange-300",
    accent: "text-orange-700 dark:text-orange-300",
    accentStrong: "text-orange-800 dark:text-orange-200",
    hoverBorder: "hover:border-orange-500/60 dark:hover:border-orange-400/60",
    bgWash: "bg-gradient-to-br from-orange-50/60 via-background to-background dark:from-orange-950/25 dark:via-background dark:to-background",
    ringSoft: "ring-orange-500/20 dark:ring-orange-400/20",
    badge: "bg-orange-100 text-orange-800 dark:bg-orange-950/60 dark:text-orange-200",
  },
  rose: {
    iconBg: "bg-rose-100 dark:bg-rose-950/50",
    iconText: "text-rose-700 dark:text-rose-300",
    accent: "text-rose-700 dark:text-rose-300",
    accentStrong: "text-rose-800 dark:text-rose-200",
    hoverBorder: "hover:border-rose-500/60 dark:hover:border-rose-400/60",
    bgWash: "bg-gradient-to-br from-rose-50/60 via-background to-background dark:from-rose-950/25 dark:via-background dark:to-background",
    ringSoft: "ring-rose-500/20 dark:ring-rose-400/20",
    badge: "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-200",
  },
  violet: {
    iconBg: "bg-violet-100 dark:bg-violet-950/50",
    iconText: "text-violet-700 dark:text-violet-300",
    accent: "text-violet-700 dark:text-violet-300",
    accentStrong: "text-violet-800 dark:text-violet-200",
    hoverBorder: "hover:border-violet-500/60 dark:hover:border-violet-400/60",
    bgWash: "bg-gradient-to-br from-violet-50/60 via-background to-background dark:from-violet-950/25 dark:via-background dark:to-background",
    ringSoft: "ring-violet-500/20 dark:ring-violet-400/20",
    badge: "bg-violet-100 text-violet-800 dark:bg-violet-950/60 dark:text-violet-200",
  },
  sky: {
    iconBg: "bg-sky-100 dark:bg-sky-950/50",
    iconText: "text-sky-700 dark:text-sky-300",
    accent: "text-sky-700 dark:text-sky-300",
    accentStrong: "text-sky-800 dark:text-sky-200",
    hoverBorder: "hover:border-sky-500/60 dark:hover:border-sky-400/60",
    bgWash: "bg-gradient-to-br from-sky-50/60 via-background to-background dark:from-sky-950/25 dark:via-background dark:to-background",
    ringSoft: "ring-sky-500/20 dark:ring-sky-400/20",
    badge: "bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-200",
  },
  teal: {
    iconBg: "bg-teal-100 dark:bg-teal-950/50",
    iconText: "text-teal-700 dark:text-teal-300",
    accent: "text-teal-700 dark:text-teal-300",
    accentStrong: "text-teal-800 dark:text-teal-200",
    hoverBorder: "hover:border-teal-500/60 dark:hover:border-teal-400/60",
    bgWash: "bg-gradient-to-br from-teal-50/60 via-background to-background dark:from-teal-950/25 dark:via-background dark:to-background",
    ringSoft: "ring-teal-500/20 dark:ring-teal-400/20",
    badge: "bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-200",
  },
  emerald: {
    iconBg: "bg-emerald-100 dark:bg-emerald-950/50",
    iconText: "text-emerald-700 dark:text-emerald-300",
    accent: "text-emerald-700 dark:text-emerald-300",
    accentStrong: "text-emerald-800 dark:text-emerald-200",
    hoverBorder: "hover:border-emerald-500/60 dark:hover:border-emerald-400/60",
    bgWash: "bg-gradient-to-br from-emerald-50/60 via-background to-background dark:from-emerald-950/25 dark:via-background dark:to-background",
    ringSoft: "ring-emerald-500/20 dark:ring-emerald-400/20",
    badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200",
  },
  indigo: {
    iconBg: "bg-indigo-100 dark:bg-indigo-950/50",
    iconText: "text-indigo-700 dark:text-indigo-300",
    accent: "text-indigo-700 dark:text-indigo-300",
    accentStrong: "text-indigo-800 dark:text-indigo-200",
    hoverBorder: "hover:border-indigo-500/60 dark:hover:border-indigo-400/60",
    bgWash: "bg-gradient-to-br from-indigo-50/60 via-background to-background dark:from-indigo-950/25 dark:via-background dark:to-background",
    ringSoft: "ring-indigo-500/20 dark:ring-indigo-400/20",
    badge: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-200",
  },
};

export const blogThemes: Record<string, ThemeKey> = {
  "dashboards-to-data-apps-rayfin": "teal",
  "custom-powerbi-ai-assistant-problems-and-solutions": "violet",
  "fabric-direct-lake-semantic-models": "sky",
  "fabric-materialized-lake-views": "indigo",
  "parquet-not-table-format": "orange",
  "fabric-cost-optimization": "amber",
  "fabric-capacity-explained": "emerald",
  "dbt-jobs-in-microsoft-fabric": "rose",
};

export const caseStudyThemes: Record<string, ThemeKey> = {
  "quickbooks-medallion": "emerald",
  "banking-churn": "violet",
  "lumina-lux": "teal",
  "icla-analytics": "orange",
  "powerbi-ai-assistant-architecture": "violet",
  "remax-login-portal": "sky",
  "mitron-bank": "amber",
  "business-insights-360": "indigo",
  "pbi-reporting-portfolio": "rose",
  "powerbi-expert-webapp": "violet",
  "powerbi-mcp": "violet",
  "airtable-mcp": "amber",
  "fabric-sql-assistant": "emerald",
  "fabricforge": "teal",
};

export function getBlogTheme(slug: string): CardTheme {
  const key = blogThemes[slug];
  return cardThemes[key] ?? cardThemes.emerald;
}

export function getCaseStudyTheme(id: string): CardTheme {
  const key = caseStudyThemes[id];
  return cardThemes[key] ?? cardThemes.emerald;
}
