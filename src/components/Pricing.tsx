import React from 'react';
import { Shield, Rocket, Crown } from 'lucide-react';
import GlitchText from './GlitchText';

export default function Pricing() {
  const plans = [
    {
      icon: <Shield className="w-12 h-12" />,
      name: "BEGINNER",
      price: "0.35 SOL",
      period: "Week",
      features: [
        "Access to all trackers",
        "Access to all monitors",
        "Real-time alerts"
      ]
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      name: "DEGEN",
      price: "1.2 SOL",
      period: "Month",
      features: [
        "Access to all trackers",
        "Access to all monitors",
        "Real-time alerts",
        "Referral program",
        "1 Week FREE for first month"
      ],
      popular: true
    },
    {
      icon: <Crown className="w-12 h-12" />,
      name: "NO BRAINER",
      price: "2.3 SOL",
      period: "3 Months",
      features: [
        "Access to all trackers",
        "Access to all monitors",
        "Real-time alerts",
        "Referral program",
        "2 Weeks FREE for first month"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="crt-monitor">
          <div className="crt-frame">
            <div className="crt-content">
              <h2 className="text-[#00ff00] text-4xl font-mono font-bold text-center mb-16">
                <GlitchText text="SELECT YOUR PLAN_" />
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`bg-black border ${
                      plan.popular 
                        ? 'border-2 border-[#00ff00] transform scale-105' 
                        : 'border border-[#00ff00]/20 hover:border-[#00ff00]'
                    } p-8 rounded-lg transition-all`}
                  >
                    <div className="text-[#00ff00] mb-4">{plan.icon}</div>
                    <h3 className="text-[#00ff00] text-2xl font-mono font-bold mb-2">
                      <GlitchText text={plan.name} />
                    </h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-[#00ff00]">
                        <GlitchText text={plan.price} />
                      </span>
                      <span className="text-[#00ff00]/70 ml-2">
                        <GlitchText text={`/${plan.period}`} />
                      </span>
                    </div>
                    <ul className="text-[#00ff00]/70 font-mono space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="mr-2">•</span>
                          <GlitchText text={feature} />
                        </li>
                      ))}
                    </ul>
                    <a 
                      href="https://t.me/PaymentsOf404Bot" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`w-full block text-center ${
                        plan.popular
                          ? 'bg-[#00ff00] text-black hover:bg-[#00ff00]/90'
                          : 'bg-[#00ff00]/10 border border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00]/20'
                        } font-mono py-2 rounded transition-all`}
                    >
                      <GlitchText text="SELECT PLAN" />
                    </a>
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