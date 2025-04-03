
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know more about me, my background, and what drives me.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              I'm a passionate web developer and designer with a keen eye for detail and a determination to deliver the very best. 
              I take pride in my work, and I always go above and beyond to ensure my clients are completely satisfied with the end result.
            </p>
            <p className="text-lg">
              With over 5 years of experience in the industry, I've worked on a diverse range of projects, each with its own unique challenges and requirements. 
              This has allowed me to develop a versatile skill set and a deep understanding of what makes a great user experience.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new design trends, learning new technologies, or enjoying outdoor activities to recharge my creative batteries.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="card-hover">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
                  <p className="text-muted-foreground">
                    Senior Web Developer at Company Name (2020-Present)<br />
                    Web Developer at Previous Company (2018-2020)
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 rounded-full bg-accent/10 text-accent">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    BSc in Computer Science<br />
                    University Name (2014-2018)
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Achievements</h3>
                  <p className="text-muted-foreground">
                    Best Portfolio Design Award (2022)<br />
                    Certified Web Accessibility Specialist
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
