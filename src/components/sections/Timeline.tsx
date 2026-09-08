import React from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { HoloCard } from '../ui/HoloCard';
import { SciFiBadge } from '../ui/SciFiBadge';
import { Clock, AlertCircle, CheckCircle2, Cpu, Code2, Sparkles } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SciFiBadge variant="cyan" className="mb-3">
            [ CHRONO MATRIX // SCHEDULE ]
          </SciFiBadge>
          <h2 className="font-tech text-3xl sm:text-5xl font-extrabold tracking-wider text-slate-100 uppercase">
            EVENT <span className="text-jedi-blue glow-text-blue">TIMELINE</span>
          </h2>
          <div className="mt-4 h-1 w-28 bg-gradient-to-r from-sith-red via-force-purple to-jedi-blue mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-mono">
            T-MINUS 2 DAYS (16/09) TO HACKATHON DAY (18/09/2026)
          </p>

          {/* Mandatory Logistics Notice */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-amber-500/40 bg-amber-950/30 text-amber-300 text-xs font-mono">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>LOGISTICS NOTICE: LUNCH IS NOT PROVIDED. REFRESHING SNACKS PROVIDED DURING EVENT.</span>
          </div>
        </div>

        {/* Timeline Sequence */}
        <div className="relative border-l-2 border-space-700 ml-4 sm:ml-36 space-y-8">
          {EVENT_CONFIG.timeline.map((item) => {
            const isHardware = item.id.includes('hw');
            const isSoftware = item.id.includes('sw');

            return (
              <div key={item.id} className="relative pl-6 sm:pl-8 group">
                {/* Node Beacon with Lightsaber Color Cues */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isHardware
                      ? 'border-sith-red bg-space-950 shadow-[0_0_12px_#ff003c] scale-110'
                      : isSoftware
                      ? 'border-jedi-blue bg-space-950 shadow-[0_0_12px_#00d2ff] scale-110'
                      : 'border-slate-400 bg-space-900 group-hover:border-force-magenta'
                  }`}
                />

                {/* Desktop Left-aligned Time Badge */}
                <div className="hidden sm:block absolute -left-40 top-1 w-32 text-right font-tech text-xs font-bold leading-tight">
                  <span className={isHardware ? 'text-sith-red' : isSoftware ? 'text-jedi-blue' : 'text-slate-300'}>
                    {item.time}
                  </span>
                </div>

                <HoloCard
                  className="p-5"
                  glowColor={isHardware ? 'amber' : isSoftware ? 'cyan' : 'blue'}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    {/* Mobile Time Badge */}
                    <span className="sm:hidden inline-flex items-center gap-1 text-xs font-mono font-bold bg-space-850 px-2 py-0.5 rounded text-white">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </span>

                    <div className="flex items-center gap-2">
                      {isHardware && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-sith-red/20 border border-sith-red text-sith-red font-mono text-[10px] font-bold uppercase">
                          <Cpu className="w-3 h-3" />
                          <span>HARDWARE TRACK</span>
                        </span>
                      )}
                      {isSoftware && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-jedi-blue/20 border border-jedi-blue text-jedi-blue font-mono text-[10px] font-bold uppercase">
                          <Code2 className="w-3 h-3" />
                          <span>SOFTWARE TRACK</span>
                        </span>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>CONFIRMED</span>
                    </span>
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-100">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
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
