import React from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { HoloCard } from '../ui/HoloCard';
import { SciFiBadge } from '../ui/SciFiBadge';
import { 
  CheckCircle2, 
  XCircle, 
  Award, 
  Coffee, 
  Wifi, 
  Users2, 
  Building, 
  Utensils, 
  Home, 
  Gift, 
  Cpu, 
  Network, 
  Briefcase,
  AlertCircle,
  PackageCheck
} from 'lucide-react';

export const EligibilityBenefits: React.FC = () => {
  const getBenefitIcon = (id: string) => {
    switch (id) {
      case 'cert':
        return <Award className="w-5 h-5 text-jedi-blue" />;
      case 'prizes':
        return <Award className="w-5 h-5 text-imperial-amber" />;
      case 'snacks':
        return <Coffee className="w-5 h-5 text-jedi-blue" />;
      case 'wifi':
        return <Wifi className="w-5 h-5 text-jedi-blue" />;
      case 'workspace':
        return <Building className="w-5 h-5 text-jedi-blue" />;
      case 'hardware-lab':
        return <Cpu className="w-5 h-5 text-sith-red" />;
      case 'mentors':
        return <Users2 className="w-5 h-5 text-force-magenta" />;
      case 'networking':
        return <Network className="w-5 h-5 text-force-purple" />;
      case 'lunch':
        return <Utensils className="w-5 h-5 text-rose-400" />;
      case 'stay':
        return <Home className="w-5 h-5 text-rose-400" />;
      case 'swags':
        return <Gift className="w-5 h-5 text-rose-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-jedi-blue" />;
    }
  };

  return (
    <section id="benefits" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-space-800/80 bg-space-950/50">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Block 1: Eligibility Directives */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SciFiBadge variant="cyan" className="mb-3">
              [ REBEL ALLIANCE PROTOCOL ]
            </SciFiBadge>
            <h2 className="font-tech text-3xl sm:text-4xl font-extrabold tracking-wider text-slate-100 uppercase">
              ELIGIBILITY <span className="text-jedi-blue glow-text-blue">& FORMATION</span>
            </h2>
            <p className="mt-3 text-sm text-slate-400 font-mono">
              WHO CAN ACCEPT THE 8-HOUR HACKATHON CHALLENGE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {EVENT_CONFIG.eligibility.map((rule, idx) => (
              <HoloCard
                key={idx}
                className="p-5 flex items-start gap-3.5"
                glowColor={idx % 2 === 0 ? 'cyan' : 'blue'}
              >
                <div className="p-2 rounded-lg bg-jedi-blue/10 border border-jedi-blue/30 text-jedi-blue shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-jedi-blue/80 tracking-widest uppercase">
                    DIRECTIVE 0{idx + 1}
                  </span>
                  <p className="text-sm font-medium text-slate-200 mt-1 leading-snug font-sans">
                    {rule}
                  </p>
                </div>
              </HoloCard>
            ))}
          </div>
        </div>

        {/* Block 2: Participant Benefits & Provisions */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SciFiBadge variant="violet" className="mb-3">
              [ LOGISTICS & ARMORY ]
            </SciFiBadge>
            <h2 className="font-tech text-3xl sm:text-4xl font-extrabold tracking-wider text-slate-100 uppercase">
              PARTICIPANT <span className="text-force-magenta glow-text-purple">BENEFITS</span>
            </h2>
            <p className="mt-3 text-sm text-slate-400 font-mono">
              COMPLETE AND TRANSPARENT BREAKDOWN OF ON-CAMPUS PROVISIONS
            </p>
          </div>

          {/* Positive Provisions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {EVENT_CONFIG.benefits.filter(b => b.provided).map((benefit) => (
              <HoloCard
                key={benefit.id}
                className="p-6 flex flex-col justify-between"
                glowColor={benefit.id === 'hardware-lab' ? 'amber' : 'cyan'}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-space-850 border border-space-700 flex items-center justify-center">
                      {getBenefitIcon(benefit.id)}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>PROVIDED</span>
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-slate-100">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 font-sans leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </HoloCard>
            ))}
          </div>

          {/* Transparent Logistics Notice: What is NOT provided */}
          <div className="rounded-2xl border border-amber-500/40 bg-amber-950/20 p-6 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
              <h4 className="font-tech text-sm font-bold uppercase tracking-wider text-amber-300">
                TRANSPARENT LOGISTICS & SELF-ARRANGED ITEMS
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-300">
              {EVENT_CONFIG.benefits.filter(b => !b.provided).map((item) => (
                <div key={item.id} className="p-3.5 rounded-xl bg-space-950/80 border border-space-800">
                  <div className="flex items-center justify-between text-rose-400 font-bold mb-1">
                    <span>{item.title}</span>
                    <span className="text-[10px] bg-rose-950/60 border border-rose-500/40 px-1.5 py-0.5 rounded">
                      NOT PROVIDED
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] font-sans mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Block 3: Mission Gear Checklist */}
          <div className="mt-10 p-6 rounded-2xl border border-space-800 bg-space-900/60">
            <div className="flex items-center gap-2 mb-4">
              <PackageCheck className="w-5 h-5 text-jedi-blue" />
              <h4 className="font-tech text-sm font-bold uppercase tracking-wider text-slate-100">
                MISSION CHECKLIST // WHAT TO BRING ON 18 SEPTEMBER 2026
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {EVENT_CONFIG.whatToBring.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-space-950/60 border border-space-800/80 text-xs font-mono text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-jedi-blue shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
