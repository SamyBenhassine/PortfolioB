import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

const Header: React.FC = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 50; // Offset to account for header and ensure title visibility
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header id="about" className="flex flex-col justify-center items-center relative">
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 ? 'bg-dark/90 backdrop-blur-sm py-0' : 'py-6'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <AnimatedLogo />
          <div className="hidden md:flex space-x-8">
            {[ 'about', 'skills', 'projects', 'timeline', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => {
                  if (item === 'about') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    scrollTo(item);
                  }
                }}
                className="text-lg text-light hover:text-accent transition-colors duration-300 capitalize"
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header