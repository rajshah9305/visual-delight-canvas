
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import InteractiveCanvas from '../components/InteractiveCanvas';
import CardSection from '../components/CardSection';
import FeatureSection from '../components/FeatureSection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Scroll indicator
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / height) * 100;
      
      const indicator = document.getElementById('scroll-indicator');
      if (indicator) {
        indicator.style.width = `${scrolled}%`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="relative">
      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          id="scroll-indicator" 
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
          style={{ width: '0%' }}
        ></div>
      </div>
      
      {/* Fixed navigation dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col gap-4">
          {['hero', 'interactive-section', 'card-section', 'feature-section', 'footer'].map((id, index) => (
            <a 
              key={id}
              href={`#${id}`}
              className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/70 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Content sections */}
      <section id="hero">
        <Hero />
      </section>
      
      <section id="interactive-section">
        <InteractiveCanvas />
      </section>
      
      <section id="card-section">
        <CardSection />
      </section>
      
      <section id="feature-section">
        <FeatureSection />
      </section>
      
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Index;
