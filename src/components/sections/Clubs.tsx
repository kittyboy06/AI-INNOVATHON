import React from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { HoloCard } from '../ui/HoloCard';
import { SciFiBadge } from '../ui/SciFiBadge';
import { Bot, Terminal, Code, Cpu } from 'lucide-react';

export const Clubs: React.FC = () => {
  const clubIcons = [
    <Bot className="w-8 h-8 text-cyber-cyan" key="aiml" />,
    <Cpu className="w-8 h-8 text-cyber-blue" key="intel" />,
    <Code className="w-8 h-8 text-cyber-violet" key="code" />,
    <Terminal className="w-8 h-8 text-emerald-400" key="iei" />,
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SciFiBadge variant="cyan" className="mb-3">
            [ ORGANIZING COALITION ]
          </SciFiBadge>
          <h2 className="font-tech text-3xl sm:text-5xl font-extrabold tracking-wider text-slate-100 uppercase">
            THE AIML COMMUNITY <span className="text-cyber-cyan glow-text-cyan">BEHIND THE MISSION</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyber-cyan to-cyber-blue mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-mono">
            ORGANIZED BY THE DEPARTMENT OF AI & ML IN COLLABORATION WITH STUDENT CHAPTERS
          </p>
        </div>

        {/* 4 Clubs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENT_CONFIG.clubs.map((club, idx) => (
            <HoloCard
              key={club.id}
              className="p-6 text-center flex flex-col items-center justify-between"
              glowColor={idx === 2 ? 'violet' : idx === 3 ? 'emerald' : 'cyan'}
            >
              <div className="flex flex-col items-center">
                {/* Tech Crest Placeholder */}
                <div className="w-16 h-16 rounded-2xl bg-space-950 border border-space-700 flex items-center justify-center mb-4 shadow-inner">
                  {clubIcons[idx]}
                </div>

                <span className="font-mono text-[10px] text-cyber-cyan tracking-widest uppercase mb-1">
                  DIVISION 0{idx + 1}
                </span>

                <h3 className="font-tech text-xl font-bold text-slate-100 tracking-wide uppercase">
                  {club.name}
                </h3>
              </div>

              <div className="mt-6 pt-3 border-t border-space-800 w-full text-[11px] font-mono text-slate-400">
                DEPARTMENT OF AI & ML
              </div>
            </HoloCard>
          ))}
        </div>
      </div>
    </section>
  );
};
