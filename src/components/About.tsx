import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py+20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-24 md:mt-32">
          {/* Left: Rectangle/Image */}
          <div className="relative flex justify-center items-center">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-gray-800 flex items-center justify-center">
              <div className="w-4/5 h-4/5 bg-gray-700 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-purple-900/30 mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">SB</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-700 rounded-full opacity-10 blur-2xl"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent/20 rounded-2xl"></div>
          </div>
          {/* Right: About Me title and text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-0 tracking-tight text-right md:mt-0 bg-gradient-to-r from-[#64ffda] via-[#8A2BE2] to-[#64ffda] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              <span className="text-accent">/</span> About Me
            </h2>
            <div className="mt-8 md:mt-12 max-w-lg">
              <h3 className="text-2xl font-bold mb-4">
                Software Engineer
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Born in 1994 in Osaka, Japan. I believe web design can be more diverse and inspiring. 
                With a mission to present the possibilities of web design, I am pursuing new expressions 
                through experiments and thoughts.
              </p>
              <a 
                href="#skills" 
                className="inline-flex items-center text-accent hover:text-white transition-colors duration-300"
              >
                <span>View my skills</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;