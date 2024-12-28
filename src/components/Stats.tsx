import React from 'react';
import { Users, Timer, Cpu } from 'lucide-react';
import GlitchText from './GlitchText';

export default function Stats() {
  return (
    <section className="bg-[#001a00] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="w-12 h-12" />,
              value: "1,000+",
              label: "Active Users"
            },
            {
              icon: <Timer className="w-12 h-12" />,
              value: "24/7",
              label: "Monitoring"
            },
            {
              icon: <Cpu className="w-12 h-12" />,
              value: "100%",
              label: "Performance"
            }
          ].map((stat, index) => (
            <div key={index} className="text-center stat-card">
              <div className="text-[#00ff00] mb-4 stat-icon-animate">{stat.icon}</div>
              <div className="text-[#00ff00] text-4xl font-mono font-bold mb-2">
                <GlitchText text={stat.value} />
              </div>
              <div className="text-[#00ff00]/70 font-mono">
                <GlitchText text={stat.label} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}