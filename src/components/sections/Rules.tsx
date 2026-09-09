import React from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { HoloCard } from '../ui/HoloCard';
import { SciFiBadge } from '../ui/SciFiBadge';
import { CheckCircle2, XCircle, Bot, Code, Globe2, Library, Database } from 'lucide-react';

export const Rules: React.FC = () => {
  const getRuleIcon = (id: string) => {
    switch (id) {
      case 'ai-tools':
        return <Bot className="w-5 h-5 text-emerald-400" />;
      case 'pre-existing-code':
        return <Code className="w-5 h-5 text-rose-400" />;
      case 'external-apis':
        return <Globe2 className="w-5 h-5 text-emerald-400" />;
      case 'open-source':
        return <Library className="w-5 h-5 text-emerald-400" />;
      case 'online-datasets':
        return <Database className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code className="w-5 h-5 text-cyber-cyan" />;
    }
  };

  return (
    <section id="rules" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SciFiBadge variant="cyan" className="mb-3">
            [ PROTOCOL DIRECTIVES ]
          </SciFiBadge>
          <h2 className="font-tech text-3xl sm:text-5xl font-extrabold tracking-wider text-slate-100 uppercase">
            HACKATHON <span className="text-cyber-cyan glow-text-cyan">GUIDELINES</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyber-cyan to-cyber-blue mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-mono">
            TECHNICAL DEVELOPMENT CODE & ELIGIBILITY BOUNDARIES
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENT_CONFIG.rules.map((rule) => {
            const isAllowed = rule.status === 'allowed';

            return (
              <HoloCard
                key={rule.id}
                className="p-6 flex flex-col justify-between"
                glowColor={isAllowed ? 'emerald' : 'amber'}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-space-850 border border-space-700 flex items-center justify-center">
                      {getRuleIcon(rule.id)}
                    </div>

                    {isAllowed ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950/60 border border-emerald-500/50 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>ALLOWED</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-950/60 border border-rose-500/50 text-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.2)]">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>NOT ALLOWED</span>
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-100">
                    {rule.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                    {rule.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-space-800 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500 uppercase">CATEGORY: {rule.category}</span>
                  <span className={isAllowed ? 'text-emerald-400' : 'text-rose-400'}>
                    {isAllowed ? 'PERMITTED' : 'STRICTLY FORBIDDEN'}
                  </span>
                </div>
              </HoloCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
