import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import worldlineLogo from '../assets/worldlineLogo.png';

const Timeline: React.FC = () => {
  const events = [
    {
      year: '2025',
      title: '5ème année Cycle Expert en Ingénierie logicielle',
      company: 'ESIEA en alternance (2024-2025)',
      description: '',
      type: 'education',
      actualSpan: [2024, 2025], // spans 2024-2025, middle is 2024.5
      positionOffset: +0.5 // move up by half a year spacing
    },
    {
      year: '2024',
      title: '4ème année Cycle Expert en Ingénierie logicielle',
      company: 'ESIEA en alternance (2023-2024)',
      description: '',
      type: 'education',
      actualSpan: [2023, 2024], // spans 2023-2024, middle is 2023.5
      positionOffset: +0.5 // move up by half a year spacing
    },
    {
      year: '2024',
      title: 'Alternance - Software Engineer',
      company: 'Worldline (2023-2025)',
      description: 'Développement et maintenance d\'applications back-end dédiées au traitement des transactions bancaires. Conception et amélioration d\'API REST en Java, création de scripts SQL pour bases de données Oracle et PostgreSQL. Évolution dans un environnement d\'équipe internationale et agile.',
      type: 'work',
      actualSpan: [2023, 2025], // spans 2023-2025, middle is 2024
      positionOffset: -8 // move up by more than one year spacing
    },
    {
      year: '2023',
      title: 'Stage - Apprenti Études et Développements',
      company: 'Worldline (6 mois en 2023)',
      description: '',
      type: 'work',
      actualSpan: [2023, 2023], // just 2023
      positionOffset: -3.7 // align with 2023 position
    },
    {
      year: '2022',
      title: '3ème année Cycle Expert en Ingénierie logicielle',
      company: 'ESIEA (2022-2023)',
      description: '',
      type: 'education',
      actualSpan: [2022, 2023], // spans 2022-2023, middle is 2022.5
      positionOffset: -7 // reduced offset to keep above 2020 bubble
    },
    {
      year: '2021',
      title: '2ème année Cycle Expert en Ingénierie logicielle',
      company: 'ESIEA (2021-2022)',
      description: '',
      type: 'education',
      actualSpan: [2021, 2022], // spans 2021-2022, middle is 2021.5
      positionOffset: -7 // reduced offset to keep above 2020 bubble
    },
    {
      year: '2020',
      title: 'L1 Licence Informatique',
      company: 'Université de Paris (2020-2021)',
      description: '',
      type: 'education',
      actualSpan: [2020, 2021], // spans 2020-2021, middle is 2020.5
      positionOffset: -7 // reduced offset to align with 2020 bubble
    },
  ];

  // Define years for consistent bubble spacing
  const years = ['2025', '2024', '2023', '2022', '2021', '2020'];
  const yearSpacing = 240; // pixels between year bubbles

  return (
    <section id="timeline" className="pt-24 pb-16">
      <div className="container mx-auto px-8 w-4/5 max-w-none">
        <h2 className="text-5xl md:text-6xl font-light mb-12 tracking-tight text-center text-white">
          <span className="text-coolors-green-bright">/</span> 
          <span className="ml-2">Timeline</span>
        </h2>

        <div className="relative w-full mx-auto" style={{ height: `${years.length * yearSpacing - 100}px` }}>
          {/* Main vertical line (subtle background) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-white/10 via-white/5 to-white/10"></div>

          {/* Connecting segments between year bubbles (more subtle) */}
          {years.slice(0, -1).map((year, yearIndex) => (
            <div 
              key={`connection-${year}`} 
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{ 
                top: `${yearIndex * yearSpacing + 30}px`, // Start after the bubble
                height: `${yearSpacing - 60}px` // End before the next bubble
              }}
            >
              <div className="w-px h-full bg-gradient-to-b from-white/8 to-white/4"></div>
            </div>
          ))}

          {/* Year bubbles - subtle and integrated */}
          {years.map((year, yearIndex) => (
            <div 
              key={`year-${year}`} 
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{ top: `${yearIndex * yearSpacing}px` }}
            >
              <div className="relative">
                {/* Subtle outer glow */}
                <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400/10 to-blue-400/10 blur-sm"></div>
                
                {/* Main bubble - glass morphism style */}
                <div className="relative w-14 h-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/90 font-medium text-xs z-20 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  {year}
                </div>

                {/* Subtle connection dots */}
                {yearIndex > 0 && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-1 h-4 bg-gradient-to-b from-transparent to-white/8"></div>
                    <div className="w-1 h-1 rounded-full bg-white/15 mx-auto"></div>
                  </div>
                )}
                
                {yearIndex < years.length - 1 && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-1 h-1 rounded-full bg-white/15 mx-auto mb-1"></div>
                    <div className="w-1 h-4 bg-gradient-to-b from-white/8 to-transparent"></div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Event cards - glass morphism style matching Skills section */}
          {events.map((event, index) => {
            const yearIndex = years.indexOf(event.year);
            const cardTop = yearIndex * yearSpacing + (event.positionOffset * 20); // Reduced multiplier for finer positioning
            
            // Check if this is the Alternance card for special sizing
            const isAlternanceCard = event.title.includes('Alternance');
            
            // Check if this is a Worldline experience
            const isWorldlineCard = event.company.includes('Worldline');
            
            return (
              <div 
                key={`event-${index}`} 
                className="absolute"
                style={{ 
                  top: `${cardTop}px`,
                  left: event.type === 'education' ? '0%' : '50%',
                  width: '43%',
                  transform: event.type === 'work' ? 'translateX(25%)' : 'translateX(-5%)'
                }}
              >
                <div className={`group relative ${isAlternanceCard ? 'pt-4 pb-8 px-6' : 'p-6'} rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 shadow-lg shadow-black/10`}>
                  {/* Enhanced background gradient */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className={`flex items-center ${isAlternanceCard ? 'mb-1' : 'mb-4'} justify-center`}>
                      <span className="text-white/75 group-hover:text-white/90 transition-colors duration-300">
                        {isWorldlineCard ? (
                          <img 
                            src={worldlineLogo} 
                            alt="Worldline" 
                            className="h-10 w-auto group-hover:opacity-90 transition-opacity duration-300"
                          />
                        ) : (
                          event.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />
                        )}
                      </span>
                    </div>
                    <h3 className={`text-lg font-medium ${isAlternanceCard ? 'mb-2' : 'mb-3'} text-white leading-tight text-center group-hover:text-white transition-colors duration-300`}>
                      {event.title}
                    </h3>
                    <p className={`text-white/80 ${isAlternanceCard ? 'mb-4' : 'mb-2'} text-sm font-normal text-center group-hover:text-white/90 transition-colors duration-300`}>
                      {event.company}
                    </p>
                    {event.description && (
                      <p className="text-white/70 text-sm leading-relaxed text-left group-hover:text-white/80 transition-colors duration-300">
                        {event.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;