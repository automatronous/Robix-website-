import { useState, useEffect } from 'react';
import { IntroAnimation } from './components/IntroAnimation';
import { LandingHero } from './components/LandingHero';
import { Hero } from './components/Hero';
import { ZoomTransition } from './components/ZoomTransition';
import { About } from './components/About';
import { Events } from './components/Events';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import { Contact } from './components/Contact';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showLanding, setShowLanding] = useState(false);
  const [showMainSite, setShowMainSite] = useState(false);

  useEffect(() => {
    // Hide intro after 4.5 seconds and show landing
    const timer = setTimeout(() => {
      setShowIntro(false);
      setShowLanding(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  const handleEnterSite = () => {
    setShowLanding(false);
    setShowMainSite(true);
  };

  return (
    <div className="bg-black">
      {/* Opening Animation */}
      {showIntro && <IntroAnimation />}
      
      {/* Landing Hero Page */}
      {showLanding && !showMainSite && (
        <LandingHero onEnter={handleEnterSite} />
      )}

      {/* Main Website */}
      {showMainSite && (
        <div className="opacity-100 transition-opacity duration-1000">
          {/* Initial Hero Section */}
          <Hero isVisible={true} />
          
          {/* Zoom Transition Section */}
          <ZoomTransition />
          
          {/* Content Sections */}
          <div className="relative z-20 bg-black">
            <About />
            <Events />
            <Projects />
            <Team />
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}
