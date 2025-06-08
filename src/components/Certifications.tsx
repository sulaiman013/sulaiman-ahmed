
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Power BI Data Analyst Associate",
      code: "PL-300",
      description: "Demonstrates expertise in creating Power BI reports and dashboards",
      skills: ["Data Modeling", "DAX", "Power Query", "Report Design"],
      color: "from-yellow-500 to-orange-500",
      verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/Sulaiman-1779/D86F89EC13EB4F44?sharingId=2F8D8D7121F7566C"
    },
    {
      title: "Microsoft Certified: Fabric Analytics Engineer Associate", 
      code: "DP-600",
      description: "Validates skills in implementing analytics solutions using Microsoft Fabric",
      skills: ["Data Lakehouse", "Data Factory", "Real-time Analytics", "Data Science"],
      color: "from-blue-500 to-purple-500",
      verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/Sulaiman-1779/4BF83C913084A933?sharingId=2F8D8D7121F7566C"
    },
    {
      title: "Microsoft Certified: Fabric Data Engineer Associate",
      code: "DP-700", 
      description: "Demonstrates ability to design and implement data engineering solutions",
      skills: ["Data Pipelines", "Delta Lake", "Spark", "Data Governance"],
      color: "from-green-500 to-teal-500",
      verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/Sulaiman-1779/BA7F6AE3F38244C0?sharingId=2F8D8D7121F7566C"
    },
    {
      title: "Microsoft Certified: Azure Data Engineer Associate",
      code: "DP-203",
      description: "Validates expertise in Azure data engineering services",
      skills: ["Azure Synapse", "Azure Data Factory", "Azure Databricks", "Cosmos DB"],
      color: "from-indigo-500 to-blue-500", 
      verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/Sulaiman-1779/8C147E65EC980BE4?sharingId=2F8D8D7121F7566C"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Microsoft Certifications
              </h2>
            </div>
            <p className="text-xl text-muted-foreground">
              Validated expertise in Microsoft's data and analytics platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 bg-gradient-to-br from-card/50 to-muted/30">
                <CardHeader className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={`bg-gradient-to-r ${cert.color} text-white border-0`}>
                        {cert.code}
                      </Badge>
                      <Button variant="ghost" size="icon" className="group/btn" asChild>
                        <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        </a>
                      </Button>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full group/verify" asChild>
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/verify:scale-110 transition-transform" />
                      Verify Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
