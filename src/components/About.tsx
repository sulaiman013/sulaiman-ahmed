
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const About = () => {
  const skills = [
    { name: "Power BI", level: 95 },
    { name: "Microsoft Fabric", level: 90 },
    { name: "SQL", level: 90 },
    { name: "Python", level: 85 },
    { name: "Data Visualization", level: 95 }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground">
              Turning complex data into clear, actionable insights
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Professional Journey</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Currently serving as an Analytics Engineer at <span className="text-primary font-semibold">Data Crafters</span>, 
                    I specialize in transforming complex healthcare and business data into actionable insights. With over 5 years 
                    of experience across healthcare, consulting, and education sectors, I've helped organizations optimize their 
                    data strategies and make informed decisions.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">4+</div>
                      <div className="text-sm text-muted-foreground">Microsoft Certifications</div>
                    </div>
                    <div className="text-center p-3 bg-blue-500/10 rounded-lg">
                      <div className="text-2xl font-bold text-blue-500">100+</div>
                      <div className="text-sm text-muted-foreground">Satisfied Clients</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Teaching & Mentoring</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    As an instructor at <span className="text-blue-500 font-semibold">DataSolution-360</span>, I'm passionate 
                    about sharing knowledge and helping the next generation of data professionals. I provide corporate training, 
                    one-on-one mentoring, and workshop facilitation.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Corporate Training</Badge>
                    <Badge variant="secondary">Data Analytics</Badge>
                    <Badge variant="secondary">Power BI</Badge>
                    <Badge variant="secondary">Microsoft Fabric</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">SA</span>
                  </div>
                </div>
              </div>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Technical Expertise</h3>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-primary font-semibold">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
