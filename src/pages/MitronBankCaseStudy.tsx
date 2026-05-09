import CaseStudyLayout from "./CaseStudyLayout";

export default function MitronBankCaseStudy() {
  return (
    <CaseStudyLayout
      title="Data-Driven Credit Card Strategy for 4,000 Customers"
      subtitle="Mitron Bank: Credit Card Recommendations"
      description="Mitron Bank, a legacy financial institution in Hyderabad, needed to launch a new credit card line. Analyzed 4,000 customers across 5 cities to classify demographics, identify top spending categories, and recommend card features that maximize adoption."
      metrics={[
        { value: "4,000", label: "Customers Analyzed", description: "Full dataset across 5 cities" },
        { value: "5", label: "Cities", description: "Hyderabad, Mumbai, Chennai, Delhi, Bengaluru" },
        { value: "Pilot", label: "Secured Full Project", description: "Pilot analysis won the engagement" },
      ]}
      embedUrl="https://app.powerbi.com/view?r=eyJrIjoiYWYwNGNkZTYtNDM4ZC00OTU0LTg0Y2MtNGU3NjI4ZGRlMjllIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9"
      embedTitle="Mitron Bank Customer Analytics Dashboard"
      challenges={[
        "Mitron Bank had no existing customer segmentation — all 4,000 customers were treated as one homogeneous group with no behavioral data",
        "Management needed to identify which demographics would drive the highest credit card adoption before investing in product development",
        "Spending patterns varied sharply across age groups, income levels, and cities — a one-size-fits-all card would underperform",
        "The analytics team had no dashboard to track customer income utilization, spending by category, or city-level demographic breakdown",
      ]}
      solutionPoints={[
        "Built a full Power BI analytics suite covering customer demographics, income groups, spending categories, and city-level trends",
        "Segmented customers into 5 income groups and 6 age brackets to identify the highest-value target profiles",
        "Identified and ranked top spending categories: bills, groceries, electronics, health, travel, and food",
        "Created income utilization analysis showing which segments had capacity to carry a credit card balance",
        "Delivered city-level comparison of customer behavior to tailor product recommendations by region",
        "Recommended card features by segment: higher credit limits for IT professionals, travel rewards for frequent flyers, cashback on groceries for homemakers",
      ]}
      beforeAfter={[
        { area: "Customer View", before: "Flat list of 4,000 customers, no segmentation", after: "5 income groups, 6 age brackets, 5 city breakdown" },
        { area: "Spending Insight", before: "No visibility into category-level spending patterns", after: "6 spending categories ranked by volume and segment" },
        { area: "Product Strategy", before: "Guesswork-based card feature planning", after: "Data-backed feature recommendations per segment" },
        { area: "Reporting", before: "Manual Excel analysis per management request", after: "Interactive Power BI dashboard, full self-service" },
        { area: "Decision Speed", before: "Days to produce a single analysis", after: "Instant drill-down by segment, city, and category" },
      ]}
      techStack={["Power BI", "Power Query", "DAX", "Python", "Excel", "Customer Segmentation"]}
      githubUrl="https://github.com/sulaiman013/My-Personal-Projects/tree/master/Mitron%20Bank%20Credit%20Card"
    />
  );
}
