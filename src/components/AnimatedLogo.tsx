import React, { useEffect, useState } from 'react';

const AnimatedLogo: React.FC = () => {
  const [showFullName, setShowFullName] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowFullName(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="cursor-pointer select-none">
      <div className="relative h-16 md:h-24 lg:h-32 w-64 md:w-96 flex items-center justify-center pt-6 md:pt-10">
        <span
          className={`absolute left-0 right-0 font-bold tracking-wider transition-all duration-500 \
            ${showFullName ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16 pointer-events-none'} \
            text-2xl md:text-5xl lg:text-7xl`}
        >
          <span className="text-accent">Samy</span> Benhassine
        </span>
        <span
          className={`absolute left-0 right-0 font-bold tracking-wider transition-all duration-500 \
            ${!showFullName ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16 pointer-events-none'} \
            text-3xl md:text-4xl`}
        >
          <span className="text-accent">S</span>B
        </span>
      </div>
    </div>
  );
};

export default AnimatedLogo; 