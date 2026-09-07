import React from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { HoloCard } from '../ui/HoloCard';
import { Timer, Trophy, CreditCard, HelpCircle, Users } from 'lucide-react';

export const Highlights: React.FC = () => {
  const icons = [
    <Timer className="w-7 h-7 text-cyber-cyan" key="timer" />,
    <Trophy className="w-7 h-7 text-yellow-400" key="trophy" />,
    <CreditCard className="w-7 h-7 text-cyber-blue" key="fee" />,
    <HelpCircle className="w-7 h-7 text-cyber-amber" key="spot" />,
    <Users className="w-7 h-7 text-cyber-violet" key="collab" />,
  ];

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 border-y border-space-800/80 bg-space-950/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {EVENT_CONFIG.metrics.map((metric, idx) => (
            <HoloCard
              key={metric.value}
              className="p-5 flex flex-col justify-between"
              glowColor={idx === 1 ? 'amber' : idx === 3 ? 'amber' : idx === 4 ? 'violet' : 'cyan'}
            >
              <div>
                <div className="mb-3 p-2 w-fit rounded-lg bg-space-900 border border-space-700/80">
                  {icons[idx]}
                </div>
                <h3 className="font-tech text-2xl sm:text-3xl font-black text-slate-100 tracking-tight">
                  {metric.value}
                </h3>
                <h4 className="mt-1 font-mono text-xs font-bold uppercase tracking-wider text-cyber-cyan">
                  {metric.label}
                </h4>
              </div>
              <p className="mt-3 text-xs text-slate-400 font-sans leading-relaxed">
                {metric.detail}
              </p>
            </HoloCard>
          ))}
        </div>
      </div>
    </section>
  );
};
