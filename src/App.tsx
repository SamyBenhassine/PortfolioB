import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import SocialSidebar from './components/SocialSidebar';
import ContactSidebar from './components/ContactSidebar';
import CustomCursor from './components/CustomCursor';
import { ThemeProvider } from './context/ThemeContext';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="loading">
          <div className="loading-bar"></div>
          <div className="loading-text">Loading Portfolio...</div>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="relative bg-dark text-light min-h-screen overflow-hidden">
        <CustomCursor />
        <ParticleBackground />
        <SocialSidebar />
        <ContactSidebar />
        <main>
          <Header />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <div id="contact" className="mt-24 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Let's work together
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
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;