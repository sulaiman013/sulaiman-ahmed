import CaseStudyLayout from "./CaseStudyLayout";

export default function LuminaLuxCaseStudy() {
  return (
    <CaseStudyLayout
      title="Unified $166.7M+ Across 3 Global Subsidiaries"
      subtitle="Multi-Entity Financial Consolidation"
      description="Eliminated month-end consolidation delays by building a real-time reporting platform processing 120,846 transactions with GAAP-compliant FX conversion across USD, SEK, and VND."
      metrics={[
        { value: "$166.7M+", label: "Consolidated", description: "From 3 disparate systems" },
        { value: "25 sec", label: "Pipeline Runtime", description: "End-to-end processing" },
        { value: "3", label: "Entities Unified", description: "USA, Nordic, Asia Pacific" },
      ]}
      embedUrl="https://app.powerbi.com/view?r=eyJrIjoiNzNiMGIxZGEtOTYzOC00NjU3LWI5ODktNGU2NzVjZDYxZmMwIiwidCI6ImNhM2YwNTZlLTQ0NDgtNDI1YS05MmE5LWU5ZDMyOTFlYTJmMyJ9"
      embedTitle="Lumina Lux Consolidated Financial Dashboard"
      challenges={[
        "3 subsidiaries using completely different systems: SAP ERP (USA), NetSuite (Nordic), Excel-based (Asia Pacific)",
        "Multi-currency complexity — USD, SEK, VND each requiring different GAAP FX conversion methods",
        "Finance team spending days on manual month-end consolidation and reconciliation",
        "Data quality issues from unvalidated entries and unbalanced accounts across entities",
      ]}
      solutionPoints={[
        "Automated ETL pipeline processing 120,846 transactions in 25 seconds flat",
        "GAAP-compliant FX conversion: Average rates for P&L, Spot rates for Balance Sheet, Historical rates for Equity",
        "3-tier Medallion Architecture: Bronze (raw replica) → Silver (standardized, validated) → Gold (star schema)",
        "Real-time Balance Sheet validation ensuring Assets = Liabilities + Equity at all times",
        "SCD Type 2 handling for organizational changes with complete audit trail",
        "6 dashboard pages: Executive, Balance Sheet, Cost Analysis, Entity Performance, Revenue Trends, Account Drill-Down",
        "50+ DAX measures for financial KPIs, ratios, and cross-entity comparisons",
      ]}
      beforeAfter={[
        { area: "Data Access", before: "Manual exports from 3 systems, copy-paste into Excel", after: "Single automated pipeline with unified model" },
        { area: "Reporting Cycle", before: "2-3 days for monthly close reports", after: "Real-time dashboards, 25-second refresh" },
        { area: "Currency Handling", before: "Manual FX lookups, inconsistent rates", after: "Automated GAAP-compliant conversion" },
        { area: "Data Quality", before: "Errors discovered during audit", after: "Proactive validation with automated flagging" },
        { area: "Decision Making", before: "Delayed insights, outdated information", after: "Executive dashboards with drill-down" },
      ]}
      techStack={["Power BI", "Python", "MySQL", "DAX", "Medallion Architecture", "Star Schema", "GAAP FX Conversion"]}
    />
  );
}
