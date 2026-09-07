import React from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { HoloCard } from '../ui/HoloCard';
import { SciFiBadge } from '../ui/SciFiBadge';
import { Clock, AlertCircle, CheckCircle2, HelpCircle } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SciFiBadge variant="cyan" className="mb-3">
            [ SCHEDULE OF OPERATIONS ]
          </SciFiBadge>
          <h2 className="font-tech text-3xl sm:text-5xl font-extrabold tracking-wider text-slate-100 uppercase">
            EVENT <span className="text-cyber-cyan glow-text-cyan">TIMELINE</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyber-cyan to-cyber-blue mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-mono">
            FRIDAY, 18 SEPTEMBER 2026 // 8 HOURS OF CONTINUOUS SPRINT
          </p>

          {/* Mandatory Critical Notice: Lunch is not provided */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-amber-500/40 bg-amber-950/30 text-amber-300 text-xs font-mono">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>IMPORTANT NOTICE: LUNCH IS NOT PROVIDED. SNACKS PROVIDED DURING EVENT.</span>
          </div>
        </div>

        {/* Timeline Sequence */}
        <div className="relative border-l-2 border-space-700 ml-4 sm:ml-32 space-y-8">
          {EVENT_CONFIG.timeline.map((item, idx) => {
            const isConfirmed = item.status === 'confirmed';

            return (
              <div key={item.id} className="relative pl-6 sm:pl-8 group">
                {/* Node Beacon */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isConfirmed
                      ? 'border-cyber-cyan bg-space-950 shadow-[0_0_10px_rgba(0,242,254,0.8)] group-hover:scale-125'
                      : 'border-slate-500 bg-space-900'
                  }`}
                />

                {/* Desktop Left-aligned Time Badge */}
                <div className="hidden sm:block absolute -left-36 top-1 w-28 text-right font-tech text-sm font-bold text-cyber-cyan">
                  {item.time}
                </div>

                <HoloCard
                  className="p-5"
                  glowColor={isConfirmed ? 'cyan' : 'blue'}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    {/* Mobile Time Badge */}
                    <span className="sm:hidden inline-flex items-center gap-1 text-xs font-mono font-bold text-cyber-cyan bg-space-850 px-2 py-0.5 rounded">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </span>

                    <h3 className="font-display text-lg font-bold text-slate-100">
                      {item.title}
                    </h3>

                    {isConfirmed ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-cyber-cyan">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>CONFIRMED</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-400">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>TIME TO BE ANNOUNCED</span>
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </HoloCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
