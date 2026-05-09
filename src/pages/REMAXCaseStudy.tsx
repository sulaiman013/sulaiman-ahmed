import CaseStudyLayout from "./CaseStudyLayout";

export default function REMAXCaseStudy() {
  return (
    <CaseStudyLayout
      title="Saved $1,000+/Year in Licensing Costs"
      subtitle="Custom Login Portal: RE/MAX Properties"
      description="Built a secure authentication system for Power BI embedded reports accessed by 50+ external real estate agents. Implemented 4 distinct user profiles with Row-Level Security, eliminating the need for individual Power BI Pro licenses."
      metrics={[
        { value: "$1K+", label: "Saved Annually", description: "Eliminated per-agent license costs" },
        { value: "50+", label: "External Users", description: "Agents accessing reports securely" },
        { value: "Zero", label: "Security Incidents", description: "Since deployment" },
      ]}
      challenges={[
        "50+ external real estate agents needed access to branch-specific Power BI reports, but individual Pro licenses would cost over $1,000/year",
        "Different agent profiles required different data views: national admins see all branches, district managers see their region, agents see only their own listings",
        "No native Power BI solution existed for external user authentication without costly Premium licensing",
        "Reports embedded in a custom portal had to enforce Row-Level Security dynamically based on the logged-in user identity",
      ]}
      solutionPoints={[
        "Built a Power Apps portal as the authentication front-end, allowing external agents to log in without Power BI licenses",
        "Implemented Azure Functions as a secure token service to generate embed tokens with dynamic RLS enforcement",
        "Created 4 user profile tiers: National Admin, District Manager, Branch Manager, and Agent with separate data scopes",
        "Configured Row-Level Security in Power BI with username-based filters applied at embed token generation time",
        "Deployed Power BI Embedded capacity to serve reports at a fraction of per-user licensing cost",
      ]}
      beforeAfter={[
        { area: "Access Method", before: "Individual Pro license required ($10/user/month)", after: "Portal login — zero per-user license cost" },
        { area: "Data Visibility", before: "No separation: all agents would see all branches", after: "RLS enforces user-specific data scope" },
        { area: "Annual Cost", before: "$1,000+ for 50+ agent licenses", after: "Single Embedded capacity, 80%+ cost reduction" },
        { area: "Authentication", before: "Microsoft 365 accounts required for all externals", after: "Custom portal login for external users" },
        { area: "User Management", before: "Manual license assignment for each new agent", after: "Add user to database, access auto-provisioned" },
      ]}
      techStack={["Power BI Embedded", "Power Apps", "Azure Functions", "Row-Level Security", "DAX", "JavaScript"]}
    />
  );
}
