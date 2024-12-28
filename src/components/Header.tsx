import React from 'react';
import { Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-black border-b border-[#00ff00]/20 py-4">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Terminal className="w-8 h-8 text-[#00ff00]" />
          <span className="text-[#00ff00] text-2xl font-mono font-bold">404 Tools</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-[#00ff00] hover:text-[#00ff00]/80 font-mono"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-[#00ff00] hover:text-[#00ff00]/80 font-mono"
          >
            Pricing
          </button>
          <button 
            onClick={() => navigate('/dashboard')}
            className="crt-button px-4 py-1"
          >
            DAPP
          </button>
        </div>
      </nav>
    </header>
  );
}