import React, { useState } from 'react';
import { Github, Globe, ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory management and payment processing.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "AI Content Generator",
      description: "An AI-powered tool that generates unique content for blogs, social media, and more.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Health Tracking App",
      description: "A comprehensive health tracking application for monitoring fitness goals and nutrition.",
      image: "https://images.pexels.com/photos/3927392/pexels-photo-3927392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["React Native", "Firebase", "Redux", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Smart Home Dashboard",
      description: "An IoT dashboard for monitoring and controlling smart home devices from anywhere.",
      image: "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tech: ["Vue.js", "MQTT", "Node.js", "Express"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight text-right bg-gradient-to-r from-[#64ffda] via-[#8A2BE2] to-[#64ffda] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
          <span className="text-accent">/</span> Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative rounded-xl overflow-hidden bg-gray-800 transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/60 to-transparent transition-opacity duration-500 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-80'
                }`}></div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`text-gray-300 text-sm mb-4 transition-all duration-500 ${
                  hoveredProject === project.id ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                }`}>
                  {project.description}
                </p>
                
                <div className={`flex space-x-4 transition-all duration-500 ${
                  hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center text-light hover:text-accent transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe size={16} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="flex items-center text-light hover:text-accent transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-1" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
              
              <div className={`absolute top-4 right-4 transition-all duration-500 ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="p-2 bg-accent/20 backdrop-blur-sm rounded-full">
                  <ArrowUpRight size={20} className="text-accent" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;