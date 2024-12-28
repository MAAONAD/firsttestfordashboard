import React from 'react';
import { Terminal, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#00ff00]/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Terminal className="w-6 h-6 text-[#00ff00]" />
            <span className="text-[#00ff00] font-mono">404 Tools</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-[#00ff00] hover:text-[#00ff00]/80">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#00ff00] hover:text-[#00ff00]/80">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-[#00ff00]/60 font-mono text-sm">
          © 2024 404 Tools. All rights reserved.
        </div>
      </div>
    </footer>
  );
}