import React from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { HoloCard } from '../ui/HoloCard';
import { SciFiBadge } from '../ui/SciFiBadge';
import { UserCheck, MapPin, Sparkles, Unlock, Code2, Send, Laptop, Trophy } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const stepIcons = [
    <UserCheck className="w-5 h-5 text-cyber-cyan" key="1" />,
    <MapPin className="w-5 h-5 text-cyber-blue" key="2" />,
    <Sparkles className="w-5 h-5 text-cyber-violet" key="3" />,
    <Unlock className="w-5 h-5 text-cyber-amber" key="4" />,
    <Code2 className="w-5 h-5 text-cyber-cyan" key="5" />,
    <Send className="w-5 h-5 text-cyan-300" key="6" />,
    <Laptop className="w-5 h-5 text-cyber-blue" key="7" />,
    <Trophy className="w-5 h-5 text-yellow-400" key="8" />,
  ];

  return (
    <section id="how-it-works" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-space-800/80 bg-space-950/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SciFiBadge variant="cyan" className="mb-3">
            [ PROTOCOL // WORKFLOW ]
          </SciFiBadge>
          <h2 className="font-tech text-3xl sm:text-5xl font-extrabold tracking-wider text-slate-100 uppercase">
            HOW IT <span className="text-cyber-cyan glow-text-cyan">WORKS</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyber-cyan to-cyber-blue mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-mono">
            8-STAGE MISSION EXECUTION LIFECYCLE
          </p>
        </div>

        {/* 8-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENT_CONFIG.howItWorksSteps.map((step, idx) => (
            <HoloCard
              key={step.step}
              className="p-6 flex flex-col justify-between"
              glowColor={idx === 3 ? 'amber' : idx === 7 ? 'amber' : 'cyan'}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-space-850 border border-space-700 flex items-center justify-center">
                    {stepIcons[idx]}
                  </div>
                  <span className="font-tech text-xl font-black text-cyber-cyan/50 group-hover:text-cyber-cyan transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-100 tracking-wider">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-space-800 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                STAGE 0{idx + 1} OF 08
              </div>
            </HoloCard>
          ))}
        </div>
      </div>
    </section>
  );
};
