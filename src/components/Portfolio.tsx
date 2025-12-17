
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Youtube } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Power BI Expert Webapp",
      subtitle: "Open Source AI Assistant",
      description: "Enterprise-grade AI-powered web application that enables natural language interaction with Power BI data. An open-source template for organizations to customize and embed into their own applications.",
      challenge: "Power BI users face significant barriers: expensive Copilot licensing (requires Premium + $30/user/month), complex DAX syntax, no AI assistance for Pro license holders, and inability to use AI in air-gapped regulated environments.",
      solution: "Built a complete webapp with multi-provider LLM support (Azure Claude, Azure OpenAI, Ollama), automatic USERELATIONSHIP handling for inactive relationships, interactive PBIP bulk editing tools, and enterprise security features including schema-only transmission and tamper-evident audit logging.",
      results: ["70-80% reduction in DAX development time", "Zero per-user licensing fees - deploy once for entire team", "Air-gap deployment capability for regulated industries", "Full open-source codebase for white-label customization"],
      technologies: ["Python", "Flask", "Power BI", "Azure AI Foundry", "ADOMD.NET", "XMLA", "Ollama", "DAX"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "AI & Analytics",
      github: "https://github.com/sulaiman013/powerbi-expert-app",
      youtube: "https://youtu.be/5gNa9BUJ4r8"
    },
    {
      title: "Healthcare Analytics Dashboard",
      subtitle: "Emergient/Centene Corporation",
      description: "Comprehensive healthcare analytics solution providing real-time insights into patient outcomes, operational efficiency, and cost optimization.",
      challenge: "Healthcare organization needed to track patient outcomes across multiple facilities while identifying cost reduction opportunities.",
      solution: "Developed an integrated Power BI solution with real-time data pipelines, predictive analytics, and automated reporting.",
      results: ["30% improvement in patient outcome tracking", "25% reduction in operational costs", "Real-time visibility across 15+ facilities"],
      technologies: ["Power BI", "Azure SQL", "Python", "Azure Data Factory", "Healthcare APIs"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      category: "Healthcare Analytics"
    },
    {
      title: "Custom Login Portal",
      subtitle: "RE/MAX Properties",
      description: "Secure, cost-effective authentication system for Power BI reports, saving over $1000 in annual licensing costs.",
      challenge: "Needed to provide secure access to sales data for 50+ external agents without purchasing additional Power BI Pro licenses.",
      solution: "Built custom authentication using Power Apps, Azure Functions, and embed tokens with row-level security.",
      results: ["$1000+ annual savings", "Secure access for 50+ users", "Custom branded experience", "Zero security incidents"],
      technologies: ["Power BI", "Power Apps", "Azure Functions", "Row-Level Security", "Embed Tokens"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      category: "Custom Solutions"
    },
    {
      title: "Autism Assessment Scoring System",
      subtitle: "Medical Research Institute",
      description: "Automated scoring system for autism assessments, improving accuracy and reducing processing time by 80%.",
      challenge: "Manual assessment scoring was time-consuming and prone to human error, delaying treatment decisions.",
      solution: "Developed automated scoring algorithms with data validation and real-time reporting capabilities.",
      results: ["80% reduction in processing time", "99.5% scoring accuracy", "Improved patient care delivery", "Streamlined workflow"],
      technologies: ["Python", "Power BI", "Azure SQL", "Machine Learning", "Statistical Analysis"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      category: "Healthcare Technology"
    },
    {
      title: "COVID-19 Research Analytics",
      subtitle: "Public Health Research",
      description: "Comprehensive analytics platform for COVID-19 research data, supporting public health decision-making.",
      challenge: "Researchers needed to analyze large volumes of COVID-19 data to identify trends and inform public health policies.",
      solution: "Created interactive dashboards with real-time data integration and predictive modeling capabilities.",
      results: ["Supported 10+ research publications", "Influenced public health policies", "Real-time trend analysis", "Multi-source data integration"],
      technologies: ["Power BI", "Python", "R", "Azure", "Epidemiological APIs", "Statistical Modeling"],
      image: "https://images.unsplash.com/photo-1584118624012-df056829fbd0?w=600&h=400&fit=crop",
      category: "Research Analytics"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Portfolio & Case Studies
            </h2>
            <p className="text-xl text-muted-foreground">
              Real-world solutions that delivered measurable business impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl overflow-hidden ${
                  selectedProject === index ? 'ring-2 ring-primary shadow-xl scale-105' : 'hover:-translate-y-2'
                }`}
                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
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
                  
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 group/btn">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      View Details
                    </Button>
                    {project.youtube && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.youtube, '_blank');
                        }}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Youtube className="h-4 w-4" />
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                      >
                        <Github className="h-4 w-4" />
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
  );
};

export default Portfolio;
