import React from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { HoloCard } from '../ui/HoloCard';
import { SciFiBadge } from '../ui/SciFiBadge';
import { CheckCircle2, XCircle, Users, Award, Coffee, Wifi, Users2, Building, Utensils, Home, Gift } from 'lucide-react';

export const EligibilityBenefits: React.FC = () => {
  const getBenefitIcon = (id: string) => {
    switch (id) {
      case 'cert':
        return <Award className="w-5 h-5 text-cyber-cyan" />;
      case 'snacks':
        return <Coffee className="w-5 h-5 text-cyber-cyan" />;
      case 'wifi':
        return <Wifi className="w-5 h-5 text-cyber-cyan" />;
      case 'mentors':
        return <Users2 className="w-5 h-5 text-cyber-cyan" />;
      case 'workspace':
        return <Building className="w-5 h-5 text-cyber-cyan" />;
      case 'prizes':
        return <Award className="w-5 h-5 text-yellow-400" />;
      case 'lunch':
        return <Utensils className="w-5 h-5 text-rose-400" />;
      case 'stay':
        return <Home className="w-5 h-5 text-rose-400" />;
      case 'swags':
        return <Gift className="w-5 h-5 text-rose-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-cyber-cyan" />;
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-space-800/80 bg-space-950/40">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Block 1: Eligibility */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SciFiBadge variant="cyan" className="mb-3">
              [ ACCESS CRITERIA ]
            </SciFiBadge>
            <h2 className="font-tech text-3xl sm:text-4xl font-extrabold tracking-wider text-slate-100 uppercase">
              ELIGIBILITY <span className="text-cyber-cyan glow-text-cyan">& FORMATION</span>
            </h2>
            <p className="mt-3 text-sm text-slate-400 font-mono">
              WHO CAN ACCEPT THE MISSION
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {EVENT_CONFIG.eligibility.map((rule, idx) => (
              <HoloCard
                key={idx}
                className="p-5 flex items-start gap-3.5"
                glowColor="cyan"
              >
                <div className="p-2 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-cyber-cyan/80 tracking-widest uppercase">
                    DIRECTIVE 0{idx + 1}
                  </span>
                  <p className="text-sm font-medium text-slate-200 mt-1 leading-snug">
                    {rule}
                  </p>
                </div>
              </HoloCard>
            ))}
          </div>
        </div>

        {/* Block 2: Logistics & Benefits */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SciFiBadge variant="violet" className="mb-3">
              [ LOGISTICS & PROVISIONS ]
            </SciFiBadge>
            <h2 className="font-tech text-3xl sm:text-4xl font-extrabold tracking-wider text-slate-100 uppercase">
              PARTICIPANT <span className="text-cyber-violet glow-text-violet">BENEFITS</span>
            </h2>
            <p className="mt-3 text-sm text-slate-400 font-mono">
              TRANSPARENT BREAKDOWN OF ON-CAMPUS PROVISIONS
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EVENT_CONFIG.benefits.map((benefit) => (
              <HoloCard
                key={benefit.id}
                className="p-6 flex flex-col justify-between"
                glowColor={benefit.provided ? 'cyan' : 'amber'}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-space-850 border border-space-700 flex items-center justify-center">
                      {getBenefitIcon(benefit.id)}
                    </div>
                    {benefit.provided ? (
                      <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/40 px-2.5 py-1 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>PROVIDED</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-rose-400 bg-rose-950/40 border border-rose-500/40 px-2.5 py-1 rounded-full">
                        <XCircle className="w-3 h-3" />
                        <span>NOT PROVIDED</span>
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-100">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {!benefit.provided && (
                  <div className="mt-4 pt-3 border-t border-space-800 text-[11px] font-mono text-amber-400/90">
                    * Please plan local arrangements accordingly.
                  </div>
                )}
              </HoloCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
