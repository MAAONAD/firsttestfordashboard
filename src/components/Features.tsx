import React from 'react';
import { LineChart, Zap, Bot, Shield, Cpu, Bell } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import GlitchText from './GlitchText';

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: <LineChart className="w-10 h-10" />,
      title: "REAL-TIME ANALYTICS",
      description: "Sub-second market analysis with predictive modeling"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "INSTANT ALERTS",
      description: "Be first to know about market movements"
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "AI MONITORING",
      description: "ML algorithms detecting patterns and trends"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "SECURE TRADING",
      description: "Enterprise-grade strategy protection"
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "AUTOMATION",
      description: "24/7 automated tracking and monitoring"
    },
    {
      icon: <Bell className="w-10 h-10" />,
      title: "CUSTOM ALERTS",
      description: "Personalized notifications for your style"
    }
  ];

  return (
    <section id="features" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="crt-monitor">
          <div className="crt-frame">
            <div className="crt-content" ref={ref}>
              <h2 className="section-header text-3xl font-bold terminal-text mb-12">
                <GlitchText text="SYSTEM FEATURES_" />
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="feature-card">
                    <div className="text-[#00ff00] mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2 terminal-text">
                      <GlitchText text={feature.title} />
                    </h3>
                    <p className="terminal-text opacity-70">
                      <GlitchText text={feature.description} />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}