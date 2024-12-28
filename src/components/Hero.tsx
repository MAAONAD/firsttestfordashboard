import React from 'react';
import { Terminal } from 'lucide-react';
import GlitchText from './GlitchText';

export default function Hero() {
  return (
    <div className="min-h-[80vh] py-8">
      <div className="container mx-auto px-4">
        <div className="crt-monitor">
          <div className="crt-frame">
            <div className="crt-content space-y-8">
              <div className="flex items-center justify-center">
                <Terminal className="w-20 h-20 text-[#00ff00]" />
              </div>
              
              <div className="text-center space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold terminal-text">
                  <GlitchText text="404 TOOLS_" />
                </h1>
                
                <div className="command-line text-xl md:text-2xl">
                  <GlitchText 
                    text="ADVANCED PUMPFUN COIN TRACKING SYSTEM"
                    className="terminal-text"
                  />
                </div>
                
                <p className="text-lg md:text-xl terminal-text opacity-80 max-w-2xl mx-auto">
                  <GlitchText 
                    text="Professional-grade tools for serious crypto traders. Real-time monitoring, instant alerts, and AI-powered analysis."
                  />
                </p>
                
                <div className="flex flex-col md:flex-row gap-6 justify-center pt-6">
                  <a 
                    href="https://t.me/The404Tools" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="crt-button"
                  >
                    <GlitchText text="INITIALIZE SYSTEM" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="crt-button"
                  >
                    <GlitchText text="VIEW DOCUMENTATION" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}