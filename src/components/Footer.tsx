
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-purple-700/5 to-dark-900 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Visual Delight</h3>
            <p className="text-gray-400 max-w-md">
              Experience the pinnacle of modern web design with fluid animations,
              stunning visuals, and interactive elements.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="glass p-3 rounded-full hover:bg-white/10 transition-colors">
                <Twitter size={20} className="text-white/70" />
              </a>
              <a href="#" className="glass p-3 rounded-full hover:bg-white/10 transition-colors">
                <Github size={20} className="text-white/70" />
              </a>
              <a href="#" className="glass p-3 rounded-full hover:bg-white/10 transition-colors">
                <Linkedin size={20} className="text-white/70" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 Visual Delight. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
