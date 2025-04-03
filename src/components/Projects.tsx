
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS. Features a clean design, smooth animations, and contact form.",
      image: "placeholder.svg",
      tags: ["React", "Tailwind CSS", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A task management application with features like task creation, due dates, priority levels, and category organization.",
      image: "placeholder.svg",
      tags: ["React", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather and forecasts for multiple locations using the OpenWeather API.",
      image: "placeholder.svg",
      tags: ["JavaScript", "API Integration", "CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Check out some of my recent work that showcases my skills and expertise.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover">
              <div className="aspect-video overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                <Button asChild variant="default" size="sm">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="sm">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <a href="#" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
