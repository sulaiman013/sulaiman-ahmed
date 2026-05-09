import CaseStudyLayout from "./CaseStudyLayout";

export default function ICLACaseStudy() {
  return (
    <CaseStudyLayout
      title="Cut Data Latency from Days to 30 Minutes"
      subtitle="Automated Extraction from Locked CRM"
      description="Freed business-critical data trapped in a CRM with no API access by building a Selenium-based extraction pipeline, then layered AI-powered natural language insights on top via MCP servers."
      metrics={[
        { value: "30 min", label: "Data Freshness", description: "Down from 1-2 days" },
        { value: "Instant", label: "Report Generation", description: "Was 2-4 hours manual" },
        { value: "99%+", label: "Data Accuracy", description: "Up from ~85% validated" },
      ]}
      heroImage="/icla-analytics-hero.png"
      challenges={[
        "Locked CRM system with zero API access — only manual CSV exports available",
        "Business needed 30-minute data freshness but was stuck with 1-2 day old data",
        "Fragmented solutions built by different engineers with no unified architecture",
        "No historical tracking capability — couldn't analyze customer journeys or trends",
      ]}
      solutionPoints={[
        "Selenium-based browser automation running every 30 minutes to extract data from the locked CRM",
        "Medallion Architecture: Bronze (raw data, full history) → Silver (validated, standardized) → Gold (BI-ready aggregations)",
        "MySQL data warehouse with stored procedures for consistent, auditable transformations",
        "Incremental loading to process only new/changed records efficiently",
        "5 Power BI reports: Pipeline, Lead Source, Opportunities, Journey Analytics, Sales Breakdown",
        "Power BI Gateway integration for secure on-premises database connection",
        "3 MCP servers for AI integration: Airtable MCP (operational data), Slack MCP (alerts), Power BI MCP (analytical queries)",
        "Automated morning business briefs delivered via Slack with pipeline status and action items",
      ]}
      beforeAfter={[
        { area: "Data Freshness", before: "1-2 days old", after: "30 minutes" },
        { area: "Report Generation", before: "2-4 hours manual work", after: "Instant, automated" },
        { area: "Historical Analysis", before: "Non-existent", after: "Complete customer journey tracking" },
        { area: "Decision Making", before: "Gut feeling", after: "Data-driven insights" },
        { area: "AI Integration", before: "None", after: "Natural language business queries via MCP" },
      ]}
      techStack={["Python", "Selenium", "MySQL", "Power BI", "Power Automate", "Claude AI", "MCP Servers", "Slack", "Airtable"]}
    />
  );
}
