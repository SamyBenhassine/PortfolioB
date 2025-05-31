import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleMouseEnterLink = () => setLinkHovered(true);
    const handleMouseLeaveLink = () => setLinkHovered(false);
    
    const handleLinkHover = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnterLink);
        el.addEventListener('mouseleave', handleMouseLeaveLink);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', () => setVisible(false));
    window.addEventListener('mouseenter', () => setVisible(true));
    
    // Set up link hover detection
    if (typeof window !== 'undefined') {
      handleLinkHover();
    }

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', () => setVisible(false));
      window.removeEventListener('mouseenter', () => setVisible(true));
      
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnterLink);
        el.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
    };
  }, []);

  // Only show custom cursor on desktop
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  if (isMobile) return null;

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 mix-blend-difference transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div
          className={`relative -ml-1.5 -mt-1.5 h-3 w-3 rounded-full bg-white transition-all duration-300 ${
            clicked ? 'scale-50' : linkHovered ? 'scale-4 opacity-30' : 'scale-100'
          }`}
        ></div>
      </div>
      <div
        className={`fixed pointer-events-none z-50 mix-blend-difference transition-all duration-500 ${
          visible ? 'opacity-100' : 'opacity-0'
        } ${linkHovered ? 'scale-150' : clicked ? 'scale-75' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      >
        <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white opacity-25"></div>
      </div>
    </>
  );
};

export default CustomCursor;