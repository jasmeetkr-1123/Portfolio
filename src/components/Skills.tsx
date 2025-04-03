
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Layout, 
  Database, 
  ShieldCheck, 
  PenTool,
  TerminalSquare 
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML & CSS", progress: 95 },
    { name: "JavaScript", progress: 90 },
    { name: "React", progress: 88 },
    { name: "Node.js", progress: 82 },
    { name: "TypeScript", progress: 78 },
    { name: "Tailwind CSS", progress: 92 },
  ];

  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      skills: [
        "Responsive Design",
        "HTML/CSS/JavaScript",
        "React/Vue/Angular",
        "Progressive Web Apps",
      ],
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: "UI/UX Design",
      skills: [
        "Wireframing",
        "Prototyping",
        "User Research",
        "Figma/Sketch",
      ],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      skills: [
        "Node.js/Express",
        "API Development",
        "Database Design",
        "Authentication",
      ],
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "DevOps",
      skills: [
        "CI/CD Pipelines",
        "AWS/Azure",
        "Docker",
        "Performance Optimization",
      ],
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Content Creation",
      skills: [
        "Technical Writing",
        "Blog Posts",
        "Documentation",
        "Tutorials",
      ],
    },
    {
      icon: <TerminalSquare className="h-8 w-8" />,
      title: "Tools & Methods",
      skills: [
        "Git/GitHub",
        "Agile Development",
        "Testing",
        "Problem Solving",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Here are some of the skills and technologies I work with.
        </p>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Technical Proficiency</h3>
            
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.progress}%</span>
                </div>
                <Progress value={skill.progress} className="h-2" />
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 content-start">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-hover h-full">
                <CardContent className="p-6">
                  <div className="text-primary mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-center">
                        <span className="mr-2">•</span> {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
