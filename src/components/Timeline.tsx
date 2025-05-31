import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const Timeline: React.FC = () => {
  const events = [
    {
      year: '2023',
      title: 'Senior Software Engineer',
      company: 'Tech Innovation Labs',
      description: 'Leading development of enterprise-scale applications',
      type: 'work',
    },
    {
      year: '2021',
      title: 'Software Engineer',
      company: 'Digital Solutions Inc',
      description: 'Full-stack development for various client projects',
      type: 'work',
    },
    {
      year: '2019',
      title: 'Junior Developer',
      company: 'StartUp Vision',
      description: 'Frontend development and UI/UX implementation',
      type: 'work',
    },
    {
      year: '2018',
      title: 'Master\'s in Computer Science',
      company: 'Tech University',
      description: 'Specialized in Software Engineering',
      type: 'education',
    },
    {
      year: '2016',
      title: 'Bachelor\'s in Computer Science',
      company: 'Tech University',
      description: 'Foundation in programming and computer science',
      type: 'education',
    },
  ];

  return (
    <section id="timeline" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">
          <span className="text-accent">/</span> Journey
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-accent/20"></div>

          {events.map((event, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent transform -translate-x-1/2 z-10"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <span className="text-accent mr-3">
                      {event.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                    </span>
                    <span className="text-sm font-mono text-accent">{event.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 mb-2">{event.company}</p>
                  <p className="text-gray-500">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;