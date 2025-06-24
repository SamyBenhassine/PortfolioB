import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
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
        className={`transition-all duration-300 opacity-100 group-hover:opacity-80 ${
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
        className={`transition-all duration-300 opacity-100 group-hover:opacity-80 ${
          isContactVisible ? 'w-[30px] h-[30px]' : 'w-[18px] h-[18px]'
        }`}
      />, 
      url: '#', 
      label: 'LinkedIn' 
    },
    { 
      icon: <Mail 
        className={`text-white group-hover:text-coolors-cyan-light transition-colors ${
          isContactVisible ? 'w-[30px] h-[30px]' : 'w-[18px] h-[18px]'
        }`}
      />, 
      url: 'mailto:benhassine@et.esiea.fr', 
      label: 'Email' 
    }
  ];

  // Calculate animation delay for follow-the-leader effect
  const getAnimationDelay = (index: number) => {
    const totalIcons = socials.length;
    
    if (isContactVisible) {
      // When entering contact: bottom icon (highest index) moves first, top icon (lowest index) moves last
      const reverseIndex = totalIcons - 1 - index;
      return reverseIndex * 200; // 200ms delay between each icon (slower)
    } else {
      // When leaving contact: LIFO - last icon that moved (top icon) moves first
      return index * 200; // 200ms delay between each icon (slower)
    }
  };

  return (
    <aside 
      className={`fixed z-40 transition-all duration-700 ease-in-out transform ${
        isContactVisible 
          ? 'left-1/2 -translate-x-1/2 bottom-32' 
          : 'left-6 bottom-0 hidden md:block'
      }`}
    >
      <div 
        className={`flex transition-all duration-700 ease-in-out transform ${
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
            className={`p-3 bg-coolors-cyan-medium/20 rounded-full backdrop-blur-sm hover:bg-coolors-green-bright/30 group border border-coolors-cyan-medium/30 ${
              isContactVisible 
                ? 'scale-175 hover:scale-[1.9]' 
                : 'hover:-translate-y-1'
            }`}
            style={{
              transition: `all 0.7s ease-in-out`,
              transitionDelay: `${getAnimationDelay(index)}ms`
            }}
          >
            {social.icon}
          </a>
        ))}
        {!isContactVisible && (
          <div className="w-px h-24 bg-coolors-cyan-medium/50 transition-all duration-700"></div>
        )}
      </div>
    </aside>
  );
};

export default SocialSidebar;