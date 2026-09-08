import React from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { HoloCard } from '../ui/HoloCard';
import { SciFiBadge } from '../ui/SciFiBadge';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const Clubs: React.FC = () => {
  return (
    <section id="clubs" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-space-800/80 bg-space-950/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SciFiBadge variant="cyan" className="mb-3">
            [ ORGANIZING COALITION ]
          </SciFiBadge>
          <h2 className="font-tech text-3xl sm:text-5xl font-extrabold tracking-wider text-slate-100 uppercase">
            ORGANIZING <span className="text-jedi-blue glow-text-blue">CHAPTERS & CLUBS</span>
          </h2>
          <div className="mt-4 h-1 w-28 bg-gradient-to-r from-sith-red via-force-purple to-jedi-blue mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-mono">
            DEPARTMENT OF ARTIFICIAL INTELLIGENCE & MACHINE LEARNING IN ALLIANCE WITH STUDENT DIVISIONS
          </p>
        </div>

        {/* 4 Official Clubs Grid with Authentic Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENT_CONFIG.clubs.map((club, idx) => {
            const glowColors: Array<'cyan' | 'amber' | 'violet' | 'emerald'> = ['cyan', 'amber', 'violet', 'emerald'];
            const glow = glowColors[idx % glowColors.length];

            return (
              <HoloCard
                key={club.id}
                className="p-6 text-center flex flex-col items-center justify-between group hover:-translate-y-1.5 transition-all duration-300"
                glowColor={glow}
              >
                <div className="flex flex-col items-center w-full">
                  {/* Division Tag */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-jedi-blue animate-pulse" />
                    <span className="font-mono text-[10px] text-slate-400 tracking-widest uppercase">
                      DIVISION 0{idx + 1}
                    </span>
                  </div>

                  {/* Official Logo Display Container with Light Background Shield for Crisp Visibility */}
                  <div className="relative w-28 h-28 rounded-2xl bg-white/95 p-3 flex items-center justify-center mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300 border-2 border-space-700/60 group-hover:border-jedi-blue">
                    <img
                      src={club.logo}
                      alt={`${club.name} Official Logo`}
                      className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                      loading="lazy"
                    />
                    {/* Ambient outer glow */}
                    <div className="absolute -inset-1 rounded-2xl bg-jedi-blue/20 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Club Name */}
                  <h3 className="font-tech text-lg font-bold text-slate-100 tracking-wide uppercase group-hover:text-jedi-blue transition-colors">
                    {club.name}
                  </h3>

                  {/* Tagline */}
                  <p className="mt-2 text-xs text-slate-400 font-sans leading-relaxed">
                    {club.tagline}
                  </p>
                </div>

                {/* Card Footer Badge */}
                <div className="mt-6 pt-3 border-t border-space-800 w-full flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span className="flex items-center gap-1 text-slate-400">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>AIML CHAPTER</span>
                  </span>
                  <span className="text-jedi-blue">ACTIVE</span>
                </div>
              </HoloCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
