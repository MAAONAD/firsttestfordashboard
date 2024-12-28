import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlitchText from './GlitchText';

export default function DashboardPreview() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-[#00ff00] relative overflow-hidden">
      {/* Blurred Dashboard Background */}
      <div 
        className="absolute inset-0 blur-xl opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2300ff00' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover'
        }}
      />

      {/* Blurred Mock UI Elements */}
      <div className="absolute inset-0 flex">
        <div className="w-1/4 border-r border-[#00ff00]/20 blur-sm">
          {/* Sidebar mockup */}
          <div className="h-16 bg-[#00ff00]/5 m-4 rounded"></div>
          <div className="h-8 bg-[#00ff00]/5 m-4 rounded"></div>
          <div className="h-8 bg-[#00ff00]/5 m-4 rounded"></div>
        </div>
        <div className="flex-1 p-8 blur-sm">
          {/* Main content mockup */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="h-32 bg-[#00ff00]/5 rounded"></div>
            <div className="h-32 bg-[#00ff00]/5 rounded"></div>
            <div className="h-32 bg-[#00ff00]/5 rounded"></div>
          </div>
          <div className="h-64 bg-[#00ff00]/5 rounded mb-8"></div>
          <div className="grid grid-cols-2 gap-6">
            <div className="h-48 bg-[#00ff00]/5 rounded"></div>
            <div className="h-48 bg-[#00ff00]/5 rounded"></div>
          </div>
        </div>
      </div>

      {/* Coming Soon Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <GlitchText text="COMING SOON_" />
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            <GlitchText text="The most advanced PumpFun and Solana tracking dashboard is under development. Stay tuned." />
          </p>
          <button 
            onClick={() => navigate('/')}
            className="crt-button"
          >
            <GlitchText text="RETURN TO BASE_" />
          </button>
        </div>
      </div>
    </div>
  );
}