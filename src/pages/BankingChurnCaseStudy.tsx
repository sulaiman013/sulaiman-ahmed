import CaseStudyLayout from "./CaseStudyLayout";

export default function BankingChurnCaseStudy() {
  return (
    <CaseStudyLayout
      title="Enabled $5-6M Annual Savings via Churn Prediction"
      subtitle="End-to-End ML Platform on Databricks"
      description="Unified 4 siloed data systems into a single customer view, engineered 30+ ML features, and built an ensemble churn prediction model to enable proactive retention targeting."
      metrics={[
        { value: "$5-6M", label: "Annual Impact", description: "Preventable churn savings" },
        { value: "4→1", label: "Systems Unified", description: "ERPNext, Salesforce, Supabase, Sheets" },
        { value: "30+", label: "ML Features", description: "Engineered for churn prediction" },
      ]}
      embedUrl="https://app.fabric.microsoft.com/view?r=eyJrIjoiNjk1ZTNmNWEtYjc4Yy00YWFhLTgxMzEtM2JhMGY3NmIzMDM2IiwidCI6ImNhM2YwNTZlLTQ0NDgtNDI1YS05MmE5LWU5ZDMyOTFlYTJmMyJ9"
      embedTitle="Banking Churn Analytics Dashboard"
      heroImage="/banking-churn-architecture.png"
      challenges={[
        "Data siloed across 4 systems: ERPNext (banking core), Salesforce (CRM), Supabase (digital channels), Google Sheets (legacy notes)",
        "40+ hours/month of manual reconciliation matching customers across systems",
        "No churn visibility — only reactive response after customers already left",
        "$5-6M annual revenue loss from preventable customer churn",
      ]}
      solutionPoints={[
        "4-tier Medallion Architecture on Databricks with dbt: Bronze (11 tables) → Staging → Silver (7 tables) → Gold (4 tables)",
        "Unified customer dimension with deterministic entity resolution across all 4 source systems",
        "30+ ML features across 6 categories: demographics, tenure, transactions, support, digital engagement, and composite risk scores",
        "Ensemble ML pipeline: Random Forest, Gradient Boosting, Extra Trees, AdaBoost, Logistic Regression, and Voting Ensemble",
        "Gold layer customer_360 table with 50+ attributes for complete customer view",
        "43 dbt data quality tests covering unique keys, null checks, referential integrity, and business logic",
        "CI/CD via GitHub Actions: dbt-ci.yml on PR, dbt-deploy.yml on main merge",
      ]}
      beforeAfter={[
        { area: "Customer View", before: "4 separate systems, different IDs", after: "Single unified customer_360 table" },
        { area: "Data Reconciliation", before: "40+ hours/month manual effort", after: "Automated daily refresh" },
        { area: "Churn Prediction", before: "None — reactive response only", after: "ML-based proactive risk scoring" },
        { area: "Retention Actions", before: "Generic campaigns for all", after: "Personalized actions per customer" },
        { area: "Data Freshness", before: "Weekly manual updates", after: "Daily automated pipeline" },
      ]}
      techStack={["Databricks", "dbt", "Python", "scikit-learn", "Unity Catalog", "PySpark", "GitHub Actions"]}
      githubUrl="https://github.com/sulaiman013/banking-churn-databricks"
    />
  );
}
