import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const SocialSidebar: React.FC = () => {
  const socials = [
    { icon: <Github size={18} />, url: '#', label: 'GitHub' },
    { icon: <Linkedin size={18} />, url: '#', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, url: '#', label: 'Twitter' },
    { icon: <Instagram size={18} />, url: '#', label: 'Instagram' }
  ];

  return (
    <aside className="fixed left-6 bottom-0 z-40 hidden md:block">
      <div className="flex flex-col items-center">
        {socials.map((social, index) => (
          <a 
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="p-3 text-gray-400 hover:text-accent transition-all duration-300 hover:-translate-y-1"
          >
            {social.icon}
          </a>
        ))}
        <div className="w-px h-24 bg-gray-700 mt-4"></div>
      </div>
    </aside>
  );
};

export default SocialSidebar;