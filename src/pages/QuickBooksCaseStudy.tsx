import CaseStudyLayout from "./CaseStudyLayout";

export default function QuickBooksCaseStudy() {
  return (
    <CaseStudyLayout
      title="Cut Financial Reporting Time by 10+ Hours/Week"
      subtitle="QuickBooks to Power BI Pipeline"
      description="Replaced manual QuickBooks exports and Excel reconciliation with an automated 3-tier Medallion Architecture delivering audit-ready compliance with 99.999% P&L accuracy."
      metrics={[
        { value: "99.999%", label: "P&L Accuracy", description: "Within $0.01 of QuickBooks" },
        { value: "100%", label: "BS Equation Verified", description: "Assets = Liabilities + Equity" },
        { value: "10+ hrs", label: "Saved Weekly", description: "Eliminated manual exports" },
      ]}
      embedUrl="https://app.powerbi.com/view?r=eyJrIjoiY2UzMDZmNjMtMGE4Ny00NjgzLWIyMTQtNTcwMGIzM2IzMDAwIiwidCI6ImNhM2YwNTZlLTQ0NDgtNDI1YS05MmE5LWU5ZDMyOTFlYTJmMyJ9"
      embedTitle="QuickBooks Financial Dashboard"
      challenges={[
        "OAuth 2.0 API integration with token refresh and rate limiting from QuickBooks Online",
        "Double-entry accounting complexity — every transaction has debit and credit sides that must balance",
        "Account type sign conventions differ for asset, liability, revenue, and expense accounts",
        "Balance Sheet requires point-in-time snapshots while P&L uses transaction-period data",
      ]}
      solutionPoints={[
        "Automated Python pipeline with OAuth 2.0 pulling data from QuickBooks API",
        "Bronze layer preserving raw JSON for full audit trail",
        "Silver layer applying business rules, account mapping, and sign conventions",
        "Gold layer with 15-table star schema (5 dimensions, 10 facts) optimized for Power BI",
        "General Ledger double-entry processing with debit/credit balancing validation",
        "100+ DAX measures organized in semantic folders for self-service analytics",
        "7 dashboard pages: Executive, P&L, Balance Sheet, Cash Flow, AR, AP, Reconciliation",
      ]}
      beforeAfter={[
        { area: "Data Access", before: "Manual exports from QuickBooks, copy-paste into Excel", after: "Automated pipeline with unified data model" },
        { area: "Reporting Cycle", before: "10+ hours/week on manual reconciliation", after: "Real-time dashboards with automated refresh" },
        { area: "Accuracy", before: "Manual errors in spreadsheet formulas", after: "99.999% P&L accuracy, 100% BS verified" },
        { area: "Audit Trail", before: "Scattered Excel files, no history", after: "Complete lineage from source to dashboard" },
        { area: "Decision Making", before: "Delayed, stale financial data", after: "Executive dashboards with drill-down" },
      ]}
      techStack={["Power BI", "Python", "QuickBooks API", "DAX", "Medallion Architecture", "Star Schema"]}
    />
  );
}
