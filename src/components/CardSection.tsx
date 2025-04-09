
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, Layout, Sparkles } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const Card: React.FC<CardProps> = ({ title, description, icon, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in-up');
              entry.target.classList.remove('opacity-0');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div
      ref={cardRef}
      className="glass rounded-xl p-6 card-hover opacity-0"
    >
      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <a href="#" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
        Learn more <ArrowRight size={16} className="ml-1" />
      </a>
    </div>
  );
};

const CardSection: React.FC = () => {
  return (
    <div className="py-24 px-4 bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
            Stunning Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the cutting-edge features that make this design stand out from the crowd.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Fluid Animations"
            description="Experience smooth, physics-based animations that respond naturally to user interactions."
            icon={<Sparkles className="text-white" />}
            delay={100}
          />
          <Card
            title="Responsive Design"
            description="Enjoy a seamless experience across all devices, from mobile phones to large desktop screens."
            icon={<Layout className="text-white" />}
            delay={300}
          />
          <Card
            title="Modern Development"
            description="Built with the latest web technologies to ensure top performance and maintainability."
            icon={<Code className="text-white" />}
            delay={500}
          />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
