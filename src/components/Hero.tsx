
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      heroRef.current.querySelectorAll('.parallax-element').forEach((el: Element) => {
        const depth = parseFloat((el as HTMLElement).dataset.depth || '0');
        const translateX = moveX * depth;
        const translateY = moveY * depth;
        
        (el as HTMLElement).style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    document.getElementById('interactive-section')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div 
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-purple-700/10 to-dark-900 z-0"></div>
      
      <div className="parallax-element absolute top-32 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse-slow" data-depth="1.2"></div>
      <div className="parallax-element absolute bottom-48 right-1/3 w-48 h-48 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse-slow" data-depth="1.5"></div>
      <div className="parallax-element absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse-slow" data-depth="0.8"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
            <span className="text-gradient">Visual Delight</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Experience the pinnacle of modern web design with fluid animations,
            stunning visuals, and interactive elements.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={scrollToContent}
              className="glass px-8 py-3 rounded-full text-white font-medium flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              Explore
              <ArrowDown size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/50" />
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)]"></div>
    </div>
  );
};

export default Hero;
