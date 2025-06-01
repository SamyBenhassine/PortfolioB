import React from 'react';
import { Code, Layout, Database, Server, Globe, BookOpen } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Frontend Development', icon: <Layout size={24} />, description: 'Creating responsive and interactive user interfaces with modern frameworks' },
    { name: 'Backend Development', icon: <Server size={24} />, description: 'Building scalable server-side applications and APIs' },
    { name: 'Database Design', icon: <Database size={24} />, description: 'Designing and optimizing database schemas and queries' },
    { name: 'Web Performance', icon: <Globe size={24} />, description: 'Optimizing applications for speed and efficiency' },
    { name: 'Clean Code', icon: <Code size={24} />, description: 'Writing maintainable and well-documented code' },
    { name: 'Continuous Learning', icon: <BookOpen size={24} />, description: 'Always staying updated with latest technologies' },
  ];

  return (
    <section id="skills" className="py-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="pt-8 md:pt-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight bg-gradient-to-r from-[#64ffda] via-[#8A2BE2] to-[#64ffda] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
            <span className="text-accent">/</span> Skills & Expertise
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-all duration-300"
            >
              <div className="text-accent mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;