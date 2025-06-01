import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-20 pb-12 flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-right bg-gradient-to-r from-[#64ffda] via-[#8A2BE2] to-[#64ffda] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
          <span className="text-accent">/</span> Contact me
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm currently available for freelance work. If you have a project that could use my help,
          please get in touch.
        </p>
        <a 
          href="mailto:hello@example.com" 
          className="px-8 py-4 rounded-full bg-accent hover:bg-accent/80 text-light transition-all duration-300 transform hover:scale-105 inline-flex items-center"
        >
          <span>hello@example.com</span>
          <span className="ml-2">→</span>
        </a>
      </div>
    </section>
  );
};

export default Contact; 