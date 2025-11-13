import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Briefcase, Code2, Award, GraduationCap, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const experiences = [
    {
      title: "Associate Analytics Engineer & Technical Content Lead",
      company: "Data Crafters",
      period: "Nov 2024 – Present",
      icon: Briefcase,
      highlights: [
        "Collect, process, and analyze large datasets using Python and SQL to develop Power BI dashboards, reports, and actionable insights driving strategic business decisions",
        "Collaborate with cross-functional teams to identify data requirements, implement data cleansing processes, and present statistical findings to stakeholders",
        "Coordinate marketing content pipelines and project timelines to enhance operational efficiency and streamline workflow processes"
      ]
    },
    {
      title: "Data Scientist",
      company: "Insightin Technology Ltd.",
      period: "Jan 2024 – Oct 2024",
      icon: Code2,
      highlights: [
        "Transformed raw data into actionable business intelligence by gathering requirements, ensuring data quality, and developing Power BI reports and visualizations for US healthcare clients",
        "Optimized MSSQL databases and enhanced stored procedures and view efficiency, improving PowerBI report performance by 30% and exceeding client expectations",
        "Conducted research and development initiatives for advanced analytics solutions, delivering improved insights and usability enhancements that supported healthcare sector decision-making",
        "Fostered stakeholder relationships with marketing teams to align technical solutions with client requirements, ensuring tailored data management supporting strategic initiatives"
      ]
    },
    {
      title: "Freelance Data Analyst",
      company: "Fiverr",
      period: "Nov 2020 – Present",
      icon: Briefcase,
      highlights: [
        "Created and deployed 50+ business intelligence dashboards using Power BI, customized to diverse client requirements and data analysis needs",
        "Analyzed 250+ projects utilizing MySQL, R, Python, and advanced statistical techniques including regression analysis, DBSCAN clustering, Random Forest, and XGBoost modeling",
        "Delivered data-driven insights across multiple industries, contributing to client decision-making and business performance optimization"
      ]
    },
    {
      title: "Research Analyst",
      company: "SUST Research Center, Sylhet",
      period: "Aug 2020 – Feb 2022",
      icon: Award,
      highlights: [
        "Conducted comprehensive data collection for research projects, created and distributed surveys via Google Forms, increasing team productivity by 75%",
        "Performed exploratory data analysis in R and developed data models using Power BI, synthesizing findings into reports that improved operational efficiency by 20%",
        "Web scraped and cleaned faculty data from 3+ universities using Python, created ggplot2 visualizations in R to identify data redundancy and distinct patterns",
        "Identified 6 factors associated with student anxiety and depression, and 4 factors related to teacher stress and professional burnout through nonparametric statistical testing"
      ]
    }
  ];

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "R", "SQL", "PySpark"]
    },
    {
      category: "Data Visualization",
      skills: ["Power BI", "Excel Charts", "Matplotlib", "Seaborn"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "T-SQL", "Snowflake", "MSSQL"]
    },
    {
      category: "Cloud Platforms",
      skills: ["Microsoft Fabric", "Azure", "Snowflake"]
    },
    {
      category: "Tools & Methodologies",
      skills: ["Git", "DBT", "Data Modeling", "DAX", "ETL Processes", "Statistical Analysis", "Machine Learning"]
    }
  ];

  const keyProjects = [
    {
      title: "End-to-End Automated Data System with AI Integration",
      technologies: ["Python", "Power BI", "Airtable", "Claude MCP"],
      description: "Designed and implemented fully automated data pipeline using Python-Selenium WebDriver automation, Power Automate orchestration, and Airtable API integration to enable 30-minute refresh cycles for real-time business visibility",
      achievements: [
        "Built custom MCP servers connecting Airtable and Slack with Claude AI to deliver AI-powered daily business briefings and ad-hoc analysis, reducing manual reporting time by 80%",
        "Developed Power BI dataflows with historical data snapshots, enabling customer journey analysis and unlocking critical business intelligence previously inaccessible due to locked data source limitations"
      ]
    },
    {
      title: "QuickBooks Centralization with Microsoft Fabric",
      technologies: ["Intuit Quickbooks", "FiveTran", "Microsoft Fabric", "PySpark", "Power BI"],
      description: "Architected end-to-end data integration pipeline using FiveTran to automatically pull QuickBooks Online data daily, eliminating manual monthly exports and enabling real-time financial data access",
      achievements: [
        "Developed PySpark notebook-based transformation workloads and Dataflows Gen 2 in Microsoft Fabric to cleanse, transform, and enrich financial data while maintaining audit-ready compliance and version history",
        "Built governed semantic models in Microsoft Fabric providing single source of truth for financial metrics (revenue, cash flow, expenses, net margin) across all reporting and analytics workloads",
        "Created Power BI dashboards enabling instant visibility into KPIs and financial performance, reducing accounting close cycle time by 60-70% and freeing team bandwidth for client advisory services",
        "Delivered 70% efficiency improvement in reporting processes by automating previously manual, error-prone spreadsheet workflows and enabling daily automated refreshes for seamless data flow"
      ]
    },
    {
      title: "Business 360 Analytics Dashboard - AtliQ Hardware",
      technologies: ["Power BI", "SQL", "Excel"],
      description: "Developed multi-view Power BI dashboard for 6 departments (Sales, Finance, Supply Chain, Executive, Marketing, Products), enabling data-driven decision making and scaling business processes by 10%",
      achievements: [
        "Integrated 1M+ records from Excel and MySQL data sources with advanced data modeling and DAX optimization, reducing storage by 30% and improving performance by 10%"
      ]
    },
    {
      title: "E-Commerce Analytics & A/B Testing - Maven Fuzzy Factory",
      technologies: ["SQL", "Data Analysis"],
      description: "Analyzed 8 months of e-commerce operations data using SQL to examine website traffic, marketing campaign performance, and A/B test results",
      achievements: [
        "Delivered actionable insights to leadership demonstrating 25% conversion rate improvement and highlighting mobile optimization as critical growth driver"
      ]
    }
  ];

  const certifications = [
    "Microsoft Certified: Power BI Data Analyst Associate",
    "Microsoft Certified: Fabric Analytics Engineer Associate",
    "Microsoft Certified: Fabric Data Engineer Associate",
    "Microsoft Certified: Azure Data Engineer Associate"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="pt-20">
        {/* Professional Summary Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Professional Experience
              </h1>

              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    4x Microsoft Certified Analytics Engineer with <span className="text-primary font-semibold">6+ years of experience</span> building enterprise-scale Power BI dashboards and delivering data-driven insights across healthcare, e-commerce, and academic sectors.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Expertise in SQL optimization, Python/R analytics, and cloud platforms (Microsoft Fabric, Azure, Snowflake) with proven track record of improving system performance by <span className="text-blue-500 font-semibold">30%</span> and automating data processes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                  <Code2 className="text-primary" size={32} />
                  Technical Skills
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((skillGroup, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow hover:border-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                  <Briefcase className="text-primary" size={32} />
                  Career Journey
                </h2>
              </div>

              <div className="space-y-8">
                {experiences.map((exp, index) => {
                  const IconComponent = exp.icon;
                  return (
                    <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all hover:border-primary">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-blue-500"></div>

                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="p-2 bg-primary/10 rounded-lg">
                                <IconComponent className="text-primary" size={20} />
                              </div>
                              <CardTitle className="text-2xl">{exp.title}</CardTitle>
                            </div>
                            <p className="text-primary font-semibold">{exp.company}</p>
                            <p className="text-sm text-muted-foreground">{exp.period}</p>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <ul className="space-y-3">
                          {exp.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex gap-3 text-muted-foreground">
                              <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={18} />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Key Projects Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Key Projects & Achievements</h2>
                <p className="text-xl text-muted-foreground">
                  Delivering measurable impact through data-driven solutions
                </p>
              </div>

              <div className="space-y-8">
                {keyProjects.map((project, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-2xl flex-1">{project.title}</CardTitle>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                      {project.achievements.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-sm mb-3 text-primary">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                  <Award className="text-primary" size={32} />
                  Certifications
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow hover:border-primary group cursor-pointer">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <CheckCircle2 className="text-primary" size={24} />
                      </div>
                      <p className="font-medium group-hover:text-primary transition-colors">{cert}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                  <GraduationCap className="text-primary" size={32} />
                  Education
                </h2>
              </div>

              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Bachelor of Science in Statistics</CardTitle>
                  <p className="text-primary font-semibold mt-2">Shahjalal University of Science and Technology, Sylhet</p>
                  <p className="text-muted-foreground">Feb 2017 – Dec 2021 | CGPA: 3.55</p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Relevant Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Econometrics", "Statistical Inference", "Probability Theory", "Time-Series Analysis", "Database Management", "Programming"].map((course, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted/30 border-t py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Sulaiman Ahmed. Transforming Data into Strategic Insights.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Experience;
