import React from 'react';
import { Mail } from 'lucide-react';
import githubIcon from '../assets/social/github-mark-white.png';
import linkedinIcon from '../assets/social/InBug-White.png';

const SocialSidebar: React.FC = () => {
  const socials = [
    { 
      icon: <img 
        src={githubIcon} 
        alt="GitHub" 
        className="w-[32px] h-[32px] opacity-100 group-hover:opacity-80 transition-opacity duration-300"
      />, 
      url: '#', 
      label: 'GitHub' 
    },
    { 
      icon: <img 
        src={linkedinIcon} 
        alt="LinkedIn" 
        className="w-[32px] h-[32px] opacity-100 group-hover:opacity-80 transition-opacity duration-300"
      />, 
      url: '#', 
      label: 'LinkedIn' 
    },
    { 
      icon: <Mail 
        className="w-[32px] h-[32px] text-white group-hover:text-coolors-cyan-light transition-colors duration-300"
      />, 
      url: 'mailto:benhassine@et.esiea.fr', 
      label: 'Email' 
    }
  ];

  return (
    <aside className="fixed left-6 bottom-0 z-40 hidden md:block">
      <div className="flex flex-col space-y-4">
        {socials.map((social, index) => (
          <a 
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="p-4 bg-coolors-cyan-medium/20 rounded-full backdrop-blur-sm hover:bg-coolors-green-bright/30 group border border-coolors-cyan-medium/30 hover:-translate-y-1 transition-all duration-300"
          >
            {social.icon}
          </a>
        ))}
        <div className="w-px h-24 bg-coolors-cyan-medium/50"></div>
      </div>
    </aside>
  );
};

export default SocialSidebar;