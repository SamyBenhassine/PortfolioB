import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
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
        <Header />
        <main className="max-w-[1500px] mx-auto px-4 md:px-8 relative mb-20">
          <div className="relative border border-transparent bg-gradient-to-r from-[#64ffda] via-[#8A2BE2] to-[#64ffda] bg-[length:200%_auto] animate-gradient rounded-lg p-[1px] mt-48">
            <div className="bg-dark rounded-lg">
              <About />
              <Skills />
              <Projects />
              <Timeline />
              <Contact />
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;