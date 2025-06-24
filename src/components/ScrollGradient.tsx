import React from 'react';

const ScrollGradient: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 -z-10 dynamic-gradient-bg"
      style={{ willChange: 'background-position' }}
    />
  );
};

export default ScrollGradient; 