import CaseStudyLayout from "./CaseStudyLayout";

export default function BusinessInsights360CaseStudy() {
  return (
    <CaseStudyLayout
      title="Unified 5-Department Analytics for Executive Decisions"
      subtitle="Business Insights 360"
      description="Built a comprehensive Power BI analytics suite covering finance, sales, marketing, supply chain, and executive performance. Advanced star schema data modeling, KPI tracking, and interactive drill-downs gave leadership a single source of truth across the entire organization."
      metrics={[
        { value: "5", label: "Departments Covered", description: "Finance, Sales, Marketing, Supply Chain, Executive" },
        { value: "Full", label: "KPI Suite", description: "End-to-end organizational metrics" },
        { value: "Star", label: "Schema Design", description: "Optimized for performance and flexibility" },
      ]}
      embedUrl="https://app.powerbi.com/view?r=eyJrIjoiYWEzZTA0MzMtNDk2Mi00YjZiLTg0YzItODJlM2IwYTM0Mzk4IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9"
      embedTitle="Business Insights 360 Dashboard"
      challenges={[
        "Leadership had no unified view of organizational performance. Finance, sales, marketing, and supply chain all reported separately with inconsistent metric definitions",
        "No single source of truth for KPIs — executive meetings were derailed by arguments about which numbers were correct",
        "Supply chain teams had no visibility into how procurement decisions affected P&L or gross margin",
        "Sales and marketing were not aligned: marketing spend could not be directly attributed to pipeline or revenue outcomes",
      ]}
      solutionPoints={[
        "Designed a star schema data model with shared dimension tables (Customer, Product, Date, Geography) enabling consistent cross-departmental analysis",
        "Built a Finance view with P&L, Net Sales, Gross Margin %, and COGS trending across time with prior-period comparison",
        "Developed a Sales view with customer-level revenue, target vs. actuals, and regional breakdown",
        "Created a Marketing view attributing spend to revenue outcomes with campaign-level ROI tracking",
        "Designed a Supply Chain view with forecast accuracy, inventory risk, and out-of-stock analysis",
        "Produced an Executive Summary view combining all KPIs into a single leadership dashboard with dynamic benchmarking",
        "Implemented advanced DAX patterns: time intelligence, running totals, and prior-year variance across all views",
      ]}
      beforeAfter={[
        { area: "Executive Reporting", before: "5 separate reports with conflicting numbers", after: "Single source of truth across all departments" },
        { area: "Finance Visibility", before: "Monthly Excel P&L sent by email", after: "Live Power BI with drill-down to transaction level" },
        { area: "Supply Chain", before: "No connection to financial outcomes", after: "Forecast accuracy tied directly to P&L impact" },
        { area: "Sales and Marketing", before: "Separate tools, no spend-to-revenue attribution", after: "Unified view: spend to pipeline to revenue" },
        { area: "Decision Speed", before: "Wait for weekly reports from each team", after: "Instant self-service for any executive or manager" },
      ]}
      techStack={["Power BI", "DAX", "Power Query", "Star Schema", "Data Modeling", "KPI Frameworks"]}
      githubUrl="https://github.com/sulaiman013/My-Personal-Projects/tree/master/Business%20Insights%20360"
    />
  );
}
