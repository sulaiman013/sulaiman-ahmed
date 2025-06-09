
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Youtube } from "lucide-react";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const powerBIProjects = [
    {
      title: "Bank Credit Card Recommendations",
      subtitle: "Mitron Bank Analysis",
      description: "Comprehensive analysis of 4000 customers from five cities to guide the bank in launching a new credit card line, focusing on online spending habits and demographics.",
      challenge: "Guide Mitron Bank in launching a new credit card line by analyzing customer data to understand spending patterns and demographics.",
      solution: "Used Power BI, Python, and Excel to create detailed customer segmentation and interactive dashboards with actionable insights.",
      results: ["Customer segmentation clarity", "Actionable recommendations for customized credit card features", "Targeted marketing strategies", "Data-driven interactive dashboard"],
      technologies: ["Power BI", "Python", "Excel", "Data Analysis", "Customer Segmentation"],
      embed: '<iframe title="Bank Customer Insights" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiYWYwNGNkZTYtNDM4ZC00OTU0LTg0Y2MtNGU3NjI4ZGRlMjllIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9" frameborder="0" allowFullScreen="true"></iframe>',
      github: "https://github.com/sulaiman013/My-Personal-Projects/tree/master/Mitron%20Bank%20Credit%20Card",
      youtube: "https://www.youtube.com/watch?v=9NFXrUQP0bc",
      category: "Banking Analytics"
    },
    {
      title: "Business Insights 360",
      subtitle: "Multi-Department Analytics",
      description: "Comprehensive Power BI project creating dashboards for finance, sales, marketing, supply chain, and executive performance with KPIs and data modeling techniques.",
      challenge: "Create a unified analytics solution providing insights across multiple business departments for informed decision-making.",
      solution: "Developed comprehensive dashboards using Power BI with key performance indicators and advanced data modeling techniques.",
      results: ["Invaluable insights into finance, sales, marketing, supply chain", "Executive performance tracking", "Data-driven value delivery", "Long-term business success enablement"],
      technologies: ["Power BI", "Data Modeling", "KPIs", "Business Intelligence", "Multi-department Analytics"],
      embed: '<iframe title="business insights 360" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiYWEzZTA0MzMtNDk2Mi00YjZiLTg0YzItODJlM2IwYTM0Mzk4IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9" frameborder="0" allowFullScreen="true"></iframe>',
      github: "https://github.com/sulaiman013/My-Personal-Projects/tree/master/Business%20Insights%20360",
      youtube: "https://www.youtube.com/watch?v=yT6oPMW3orU&t=1s",
      category: "Business Intelligence"
    },
    {
      title: "Financial Reporting",
      subtitle: "Comprehensive Financial Analysis",
      description: "Complete financial reporting solution offering comprehensive view of business performance including income statements, balance sheets, cash flow, and revenue insights.",
      challenge: "Create a comprehensive financial reporting system that provides clear insights into business financial health and performance.",
      solution: "Built Power BI financial reports with income statements, balance sheets, cash flow analysis, and aged trial balance with actionable insights.",
      results: ["Comprehensive financial performance view", "Cost optimization insights", "Improved profit margin analysis", "Enhanced cash flow management"],
      technologies: ["Power BI", "Financial Analysis", "Cash Flow Modeling", "Balance Sheet Analysis", "Revenue Analytics"],
      embed: '<iframe title="Financial Reporting In Power BI" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiOGY4ZTgwYmItYmMwNS00ZWY0LWEyMDQtZGZmMzJmN2VjY2YzIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9" frameborder="0" allowFullScreen="true"></iframe>',
      github: "https://github.com/sulaiman013/My-Personal-Projects/tree/master/Financial%20Reporting%20in%20Power%20BI",
      youtube: null,
      category: "Financial Analytics"
    },
    {
      title: "Healthstat | Healthcare Analytics",
      subtitle: "New York Hospital Data Analysis",
      description: "Healthcare analytics case study analyzing New York state hospital data for elective hip replacement surgeries in 2016, identifying cost factors and efficiency improvements.",
      challenge: "Analyze New York state hospital data to identify cost factors and efficiency improvements for elective hip replacement surgeries.",
      solution: "Used Power BI to create interactive dashboards analyzing hospital data, identifying key cost influencers and length of stay factors.",
      results: ["Identified cost per discharge factors", "Length of stay analysis", "Hospital efficiency insights", "Improved patient care recommendations"],
      technologies: ["Power BI", "Healthcare Data", "Statistical Analysis", "Interactive Dashboards", "Performance Metrics"],
      embed: '<iframe title="healthcare analytics" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiOTYzYWJkN2YtMzhlMi00ZjMzLTk4N2YtMmUzNmM5YjRkYjlhIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9" frameborder="0" allowFullScreen="true"></iframe>',
      github: "https://github.com/sulaiman013/My-Personal-Projects/tree/master/Healthcare%20Analytics%20in%20PowerBI",
      youtube: null,
      category: "Healthcare Analytics"
    },
    {
      title: "Customer Retention Cohort Analysis",
      subtitle: "Monthly/Weekly Retail Analytics",
      description: "Cohort analysis project using superstore retail dataset, exploring customer behavior and business insights with monthly and weekly trend analysis.",
      challenge: "Understand customer retention patterns and behavior using cohort analysis to improve business strategy.",
      solution: "Implemented cohort analysis using Power BI with DAX measures, data modeling, and visualizations for monthly and weekly trends.",
      results: ["Monthly and weekly customer trends", "Customer behavior insights", "Strategic business recommendations", "Retention pattern analysis"],
      technologies: ["Power BI", "Cohort Analysis", "DAX", "Data Modeling", "Retail Analytics"],
      embed: '<iframe title="CA on retail dataset" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMDhhMzFhOTgtOTYzZC00OWM1LWIxNTAtNTFmZjEzODY2NTA0IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9" frameborder="0" allowFullScreen="true"></iframe>',
      github: "https://github.com/sulaiman013/My-Personal-Projects/tree/master/Cohort%20Analysis%20Using%20PowerBI",
      youtube: null,
      category: "Customer Analytics"
    },
    {
      title: "Custom Login Portal for P&L Report",
      subtitle: "RE/MAX Properties",
      description: "Innovative Power BI login portal with four distinct user profiles and tailored data access, ensuring confidentiality without using native row-level security.",
      challenge: "Create secure access for P&L reports with different user profiles while avoiding expensive Power BI Embedded licensing.",
      solution: "Designed custom login portal using SQL expertise and web development, implementing advanced security mechanisms with scheduled data refreshes.",
      results: ["Four distinct user profiles with tailored access", "Enhanced data security", "$1,000+ savings in licensing fees", "Improved user experience"],
      technologies: ["Power BI", "SQL", "Custom Authentication", "Web Development", "Security Implementation"],
      embed: null,
      github: null,
      youtube: null,
      category: "Custom Solutions",
      hasImage: true
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  Power BI Projects Portfolio
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Real-world data analytics solutions delivering measurable business impact
                </p>
                <div className="flex justify-center">
                  <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                    <a href="https://www.youtube.com/@sulaimanahmed013/videos" target="_blank" rel="noopener noreferrer">
                      <Youtube className="mr-2 h-4 w-4" />
                      YouTube Channel - Data Analytics Content
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                {powerBIProjects.map((project, index) => (
                  <Card 
                    key={index} 
                    className={`group cursor-pointer transition-all duration-300 hover:shadow-xl overflow-hidden ${
                      selectedProject === index ? 'ring-2 ring-primary shadow-xl' : 'hover:-translate-y-2'
                    }`}
                    onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                  >
                    {project.embed && (
                      <div className="aspect-video relative overflow-hidden bg-muted/30">
                        <div 
                          className="w-full h-full"
                          dangerouslySetInnerHTML={{ __html: project.embed }}
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary/90 text-white">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                    )}
                    
                    {!project.embed && project.hasImage && (
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src="/lovable-uploads/17302066-acca-463d-ae44-e63f7db7a278.png" 
                          alt="Custom Login Portal"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary/90 text-white">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                    )}
                    
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      
                      {selectedProject === index && (
                        <div className="space-y-4 animate-fade-up">
                          <div>
                            <h4 className="font-semibold mb-2 text-orange-500">Challenge:</h4>
                            <p className="text-sm text-muted-foreground">{project.challenge}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2 text-blue-500">Solution:</h4>
                            <p className="text-sm text-muted-foreground">{project.solution}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2 text-green-500">Results:</h4>
                            <ul className="space-y-1">
                              {project.results.map((result, resultIndex) => (
                                <li key={resultIndex} className="text-sm text-muted-foreground flex items-center">
                                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 pt-2 flex-wrap">
                        {project.github && (
                          <Button variant="outline" size="sm" asChild className="flex-1 min-w-[120px]">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              GitHub
                            </a>
                          </Button>
                        )}
                        {project.youtube && (
                          <Button variant="outline" size="sm" asChild className="flex-1 min-w-[120px]">
                            <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                              <Youtube className="mr-2 h-4 w-4" />
                              YouTube
                            </a>
                          </Button>
                        )}
                        {project.embed && (
                          <Button variant="ghost" size="sm" className="min-w-[100px]">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Report
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
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

export default Portfolio;
