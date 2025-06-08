
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground">
              Building the future, one line of code at a time
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Professional Journey</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    As a Software Engineer with expertise in full-stack development, I specialize in 
                    creating scalable web applications and implementing robust DevOps practices. 
                    My experience spans across modern technologies and cloud platforms.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">What Drives Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm passionate about solving complex problems through clean, efficient code and 
                    innovative solutions. I believe in continuous learning and staying up-to-date 
                    with the latest industry trends and best practices.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/70 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-foreground">SA</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Software Engineer</h3>
                    <p className="text-muted-foreground">Full-Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
