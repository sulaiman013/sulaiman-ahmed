import CaseStudyLayout from "./CaseStudyLayout";

export default function PBIReportingPortfolioCaseStudy() {
  return (
    <CaseStudyLayout
      title="3 Domain-Specific Power BI Reporting Solutions"
      subtitle="Finance, Healthcare & Retail Analytics"
      description="Delivered three production Power BI solutions across different industries: comprehensive financial statements with P&L, Balance Sheet and Cash Flow; NY state hospital cost and efficiency analytics; and customer retention cohort analysis with monthly trends. End-to-end data modeling and interactive dashboard design for each domain."
      metrics={[
        { value: "3", label: "Industries Served", description: "Finance, Healthcare, Retail" },
        { value: "3", label: "Live Embedded Reports", description: "All interactive reports below" },
        { value: "Full", label: "Data Modeling", description: "End-to-end for each domain" },
      ]}
      embedUrl="https://app.powerbi.com/view?r=eyJrIjoiOGY4ZTgwYmItYmMwNS00ZWY0LWEyMDQtZGZmMzJmN2VjY2YzIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9"
      embedTitle="Financial Reporting: P&L, Balance Sheet, Cash Flow"
      challenges={[
        "Finance teams manually prepared P&L, Balance Sheet, and Cash Flow statements each month with no drill-down capability or period comparison",
        "NY state hospital administrators had no visibility into cost-per-discharge, payer mix, or surgical efficiency by facility",
        "Retail subscription businesses lacked tools to track cohort retention month-over-month and identify churn risk by acquisition segment",
        "Each domain had unique data models that required careful design to support the specific KPIs required by different stakeholders",
      ]}
      solutionPoints={[
        "Financial Reporting: Built a complete financial statements suite covering P&L, Balance Sheet, Cash Flow Statement, and Aged Trial Balance with dynamic period comparison and variance analysis",
        "Healthcare Analytics: Modeled NY state hospital discharge data to analyze cost per patient, payer type (Medicare, Medicaid, Private), and surgical outcomes by facility",
        "Cohort Analysis: Created a customer retention dashboard tracking monthly cohort retention rates, revenue retention, and churn by acquisition segment",
        "Applied consistent design language across all three reports — executive-ready layout with light and dark mode support",
        "Implemented advanced DAX patterns: time intelligence, running totals, prior period comparisons, and cohort bucketing",
      ]}
      beforeAfter={[
        { area: "Financial Statements", before: "Monthly Excel export, 4+ hours to prepare manually", after: "Live Power BI with instant period drill-down" },
        { area: "Healthcare Cost Analysis", before: "Static reports with no facility-level comparison", after: "Dynamic cost and outcome analysis by hospital and payer" },
        { area: "Cohort Retention", before: "No visibility into which cohorts were churning and why", after: "Monthly retention heatmap with segment breakdown" },
        { area: "Stakeholder Reporting", before: "Each team maintained separate and inconsistent Excel models", after: "Self-service dashboards per domain, always current" },
        { area: "Decision Making", before: "Data available days after period end", after: "Near real-time with automated data refresh" },
      ]}
      techStack={["Power BI", "DAX", "Power Query", "Financial Data Modeling", "Healthcare Analytics", "Cohort Analysis"]}
      githubUrl="https://github.com/sulaiman013/My-Personal-Projects"
    >
      {/* Cohort Analysis Embed */}
      <section className="px-6 md:px-12 lg:px-20 xl:px-32 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Customer Retention Cohort Analysis</h2>
          <div className="rounded-xl overflow-hidden border border-border/60 shadow-sm bg-card">
            <div className="aspect-[16/9]">
              <iframe
                title="Cohort Analysis - Customer Retention"
                width="100%"
                height="100%"
                src="https://app.powerbi.com/view?r=eyJrIjoiMDhhMzFhOTgtOTYzZC00OWM1LWIxNTAtNTFmZjEzODY2NTA0IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Analytics Embed */}
      <section className="px-6 md:px-12 lg:px-20 xl:px-32 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Healthcare Analytics: NY Hospital Cost Analysis</h2>
          <div className="rounded-xl overflow-hidden border border-border/60 shadow-sm bg-card">
            <div className="aspect-[16/9]">
              <iframe
                title="Healthcare Analytics - NY Hospital"
                width="100%"
                height="100%"
                src="https://app.powerbi.com/view?r=eyJrIjoiOTYzYWJkN2YtMzhlMi00ZjMzLTk4N2YtMmUzNmM5YjRkYjlhIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMiLhYWU5LWQ0MjQ0ZGM1YjJjNCJ9"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
