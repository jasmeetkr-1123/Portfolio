
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10" />
      
      <div className="container grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-8 animate-fade-in">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="gradient-text">Hello, I'm</span>
              <div className="mt-2">Your Name</div>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mt-4">
              Web Developer & Designer
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-md">
            I build exceptional digital experiences that are visually stunning, accessible, and performant.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:your-email@example.com" 
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end animate-slide-up">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 absolute -z-10 blur-3xl" />
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              {/* Replace with your profile image */}
              <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                Profile Image
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-foreground/60 hover:text-accent transition-colors">
          <svg 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
