import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

const Header: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('about');
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const mobileNavItemsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  
  const sections = ['about', 'skills', 'projects', 'timeline', 'contact'];
  
  // Function to get French display names for navigation sections
  const getSectionDisplayName = (section: string): string => {
    const displayNames: { [key: string]: string } = {
      about: 'à propos',
      skills: 'compétences',
      projects: 'Réalisations',
      timeline: 'timeline',
      contact: 'contact'
    };
    return displayNames[section] || section;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced scroll spy with both Intersection Observer and scroll fallback
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -60% 0px', // More lenient margins
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] // Multiple thresholds for better detection
    };

    let currentActiveSection = 'about';

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .map(entry => ({
          id: entry.target.id,
          ratio: entry.intersectionRatio,
          boundingRect: entry.boundingClientRect
        }))
        .sort((a, b) => b.ratio - a.ratio); // Sort by visibility ratio

      if (visibleSections.length > 0) {
        const mostVisible = visibleSections[0];
        if (sections.includes(mostVisible.id)) {
          currentActiveSection = mostVisible.id;
          setActiveSection(currentActiveSection);
        }
      }
    };

    // Fallback scroll-based detection
    const handleScrollSpy = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Handle "about" section (top of page)
      if (scrollY < 100) {
        if (currentActiveSection !== 'about') {
          currentActiveSection = 'about';
          setActiveSection('about');
        }
        return;
      }

      // Check each section
      const sectionElements = sections.map(sectionId => ({
        id: sectionId,
        element: document.getElementById(sectionId)
      })).filter(section => section.element);

      let newActiveSection = currentActiveSection;

      for (const { id, element } of sectionElements) {
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;
        
        // Check if section is in the "active zone" (top 30% of viewport)
        const activeZoneTop = scrollY + (windowHeight * 0.1);
        const activeZoneBottom = scrollY + (windowHeight * 0.4);
        
        if (elementTop <= activeZoneBottom && elementBottom >= activeZoneTop) {
          newActiveSection = id;
          break;
        }
      }

      if (newActiveSection !== currentActiveSection) {
        currentActiveSection = newActiveSection;
        setActiveSection(newActiveSection);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Add scroll listener for fallback
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    
    // Initial check
    handleScrollSpy();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  // Update pill position when active section changes (desktop)
  useEffect(() => {
    const updatePillPosition = () => {
      const activeButton = navItemsRef.current[activeSection];
      if (activeButton && navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        
        setPillStyle({
          left: buttonRect.left - navRect.left,
          width: buttonRect.width
        });
      }
    };

    // Update position after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(updatePillPosition, 50);
    
    // Also update on window resize
    window.addEventListener('resize', updatePillPosition);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updatePillPosition);
    };
  }, [activeSection, scrollPosition]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu after navigation
    setMobileMenuOpen(false);
  };

  const handleNavClick = (item: string) => {
    if (item === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollTo(item);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header id="about" className="flex flex-col justify-center items-center relative">
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 ? 'backdrop-blur-md py-2' : 'py-6'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <AnimatedLogo scrollPosition={scrollPosition} />
          
          {/* Desktop Navigation */}
          <div ref={navRef} className="hidden md:flex space-x-1 relative bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
            {/* Animated pill background - Dark and prominent */}
            <div 
              className="absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-out"
              style={{
                left: `${pillStyle.left}px`,
                width: `${pillStyle.width}px`,
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(102, 126, 234, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            />
            
            {sections.map((item) => (
              <button 
                key={item}
                ref={(el) => navItemsRef.current[item] = el}
                onClick={() => handleNavClick(item)}
                className={`relative z-10 px-4 py-2 text-base md:text-lg lg:text-xl font-medium rounded-full transition-all duration-300 capitalize ${
                  activeSection === item 
                    ? 'text-white font-semibold' 
                    : 'text-white/70 hover:text-white/90'
                }`}
              >
                {getSectionDisplayName(item)}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-out ${
          mobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div ref={mobileNavRef} className="bg-coolors-purple-deep/95 backdrop-blur-sm border-t border-white/10 mt-4">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {sections.map((item) => (
                <button 
                  key={`mobile-${item}`}
                  ref={(el) => mobileNavItemsRef.current[item] = el}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 capitalize ${
                    activeSection === item 
                      ? 'text-white font-semibold' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  style={activeSection === item ? {
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  } : {}}
                >
                  {getSectionDisplayName(item)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;