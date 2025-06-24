import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import SocialSidebar from './components/SocialSidebar';
import CustomCursor from './components/CustomCursor';
import ScrollGradient from './components/ScrollGradient';
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
      <div className="min-h-screen dynamic-gradient-bg flex items-center justify-center">
        <div className="loading">
          <div className="loading-bar"></div>
          <div className="loading-text">Loading Portfolio...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative text-light min-h-screen overflow-hidden">
      {/* Dynamic scrolling gradient background */}
      <ScrollGradient />
      
      <CustomCursor />
      <ParticleBackground />
      <SocialSidebar />
      <Header />
      
      <main className="relative">
        {/* All sections now have transparent backgrounds to show the gradient */}
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
    </div>
  );
}

export default App;