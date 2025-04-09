
import React, { useEffect, useRef } from "react";

const FeatureSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !circleRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPercentage = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight * 0.5));
      
      // Scale and color change based on scroll
      const scale = 0.5 + scrollPercentage * 0.5;
      const hue = 260 + scrollPercentage * 60; // Purple to pink
      
      circleRef.current.style.transform = `scale(${scale})`;
      circleRef.current.style.background = `linear-gradient(135deg, hsl(${hue}, 83%, 65%) 0%, hsl(${hue + 30}, 83%, 65%) 100%)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen relative flex flex-col items-center justify-center py-24 px-4 overflow-hidden">
      <div ref={circleRef} className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-30 transition-all duration-700"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient animate-fade-in">
            Scroll-Driven Effects
          </h2>
          
          <p className="text-xl text-gray-300">
            Watch as elements transform based on your scroll position.
            This creates a dynamic, engaging experience that responds to your interactions.
          </p>

          <div className="glass py-8 px-6 rounded-xl mt-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 glass flex items-center justify-center p-8 animate-float">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg flex items-center justify-center">
                    <div className="text-4xl font-bold text-white">01</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-2xl font-bold mb-4">Depth & Dimension</h3>
                <p className="text-gray-300">
                  Carefully crafted visual elements create a sense of depth and dimension, 
                  making the interface feel tangible and immersive.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span className="text-gray-300">Dynamic lighting effects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span className="text-gray-300">Layered components</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span className="text-gray-300">Subtle shadows and highlights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
