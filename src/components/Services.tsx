
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Database, GraduationCap, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Power BI Consulting",
      description: "Transform your data into powerful visual insights with custom Power BI solutions that drive business decisions.",
      features: [
        "Dashboard Development",
        "Report Optimization", 
        "Custom Solutions",
        "Performance Tuning",
        "Data Modeling"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Build robust data infrastructure and pipelines that scale with your business needs using modern cloud technologies.",
      features: [
        "ETL Pipeline Development",
        "Database Optimization",
        "Microsoft Fabric Implementation",
        "Data Lake Architecture",
        "Real-time Analytics"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: GraduationCap,
      title: "Training & Mentoring",
      description: "Empower your team with data analytics skills through comprehensive training programs and personalized mentoring.",
      features: [
        "Corporate Training",
        "One-on-one Mentoring",
        "Workshop Facilitation",
        "Certification Prep",
        "Custom Curriculum"
      ],
      color: "from-green-500 to-teal-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive data analytics solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/50">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full group/btn bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                    onClick={scrollToContact}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Need a custom solution? Let's discuss your specific requirements.
            </p>
            <Button variant="outline" size="lg" onClick={scrollToContact}>
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
