import React, { useState, useEffect } from 'react';
import { Twitter, Instagram } from 'lucide-react';
import githubIcon from '../assets/social/github-mark-white.png';
import linkedinIcon from '../assets/social/InBug-White.png';

const SocialSidebar: React.FC = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const checkContactSection = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight / 2;
        setIsContactVisible(isVisible);
      }
    };

    window.addEventListener('scroll', checkContactSection);
    // Initial check
    checkContactSection();

    return () => window.removeEventListener('scroll', checkContactSection);
  }, []);

  const socials = [
    { 
      icon: <img 
        src={githubIcon} 
        alt="GitHub" 
        className={`transition-all duration-300 opacity-100 group-hover:opacity-40 ${
          isContactVisible ? 'w-[30px] h-[30px]' : 'w-[18px] h-[18px]'
        }`}
      />, 
      url: '#', 
      label: 'GitHub' 
    },
    { 
      icon: <img 
        src={linkedinIcon} 
        alt="LinkedIn" 
        className={`transition-all duration-300 opacity-100 group-hover:opacity-40 ${
          isContactVisible ? 'w-[30px] h-[30px]' : 'w-[18px] h-[18px]'
        }`}
      />, 
      url: '#', 
      label: 'LinkedIn' 
    },
    { 
      icon: <Twitter 
        className={`text-white group-hover:text-gray-400 transition-colors ${
          isContactVisible ? 'w-[30px] h-[30px]' : 'w-[18px] h-[18px]'
        }`}
      />, 
      url: '#', 
      label: 'Twitter' 
    },
    { 
      icon: <Instagram 
        className={isContactVisible ? 'w-[30px] h-[30px]' : 'w-[18px] h-[18px]'}
      />, 
      url: '#', 
      label: 'Instagram' 
    }
  ];

  return (
    <aside 
      className={`fixed z-40 transition-all duration-500 ease-in-out transform ${
        isContactVisible 
          ? 'left-1/2 -translate-x-1/2 bottom-32' 
          : 'left-6 bottom-0 hidden md:block'
      }`}
    >
      <div 
        className={`flex transition-all duration-500 ease-in-out transform ${
          isContactVisible 
            ? 'flex-row space-x-8' 
            : 'flex-col space-y-4'
        }`}
      >
        {socials.map((social, index) => (
          <a 
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`p-3 text-gray-400 hover:text-accent transition-all duration-300 group ${
              isContactVisible 
                ? 'scale-175 hover:scale-[1.9]' 
                : 'hover:-translate-y-1'
            }`}
          >
            {social.icon}
          </a>
        ))}
        {!isContactVisible && (
          <div className="w-px h-24 bg-gray-700 transition-all duration-500"></div>
        )}
      </div>
    </aside>
  );
};

export default SocialSidebar;