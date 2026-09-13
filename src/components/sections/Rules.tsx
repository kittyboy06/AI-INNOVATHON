import React, { useState } from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { HoloCard } from '../ui/HoloCard';
import { SciFiBadge } from '../ui/SciFiBadge';
import { RuleItem, RuleStatus } from '../../types/event';
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Bot, 
  Globe2, 
  Users, 
  IdCard, 
  Laptop, 
  UtensilsCrossed, 
  Sparkles, 
  Ban, 
  HelpCircle, 
  ShieldCheck,
  Layers
} from 'lucide-react';

export const Rules: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'technical' | 'venue'>('all');

  const technicalCount = EVENT_CONFIG.rules.filter((r) => r.group === 'technical').length;
  const venueCount = EVENT_CONFIG.rules.filter((r) => r.group === 'venue').length;

  const filteredRules = EVENT_CONFIG.rules.filter((rule) => {
    if (activeFilter === 'all') return true;
    return rule.group === activeFilter;
  });

  const getRuleIcon = (id: string, status: RuleStatus) => {
    switch (id) {
      case 'ai-tools':
        return <Bot className="w-5 h-5 text-emerald-400" />;
      case 'pre-existing-code':
        return <Ban className="w-5 h-5 text-rose-400" />;
      case 'cloud-apis-libraries':
        return <Globe2 className="w-5 h-5 text-emerald-400" />;
      case 'team-registration':
        return <Users className="w-5 h-5 text-cyber-cyan" />;
      case 'mandatory-id-card':
        return <IdCard className="w-5 h-5 text-amber-400" />;
      case 'hardware-laptops':
        return <Laptop className="w-5 h-5 text-sky-400" />;
      case 'lunch-refreshments':
        return <UtensilsCrossed className="w-5 h-5 text-emerald-400" />;
      case 'campus-attire':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      default:
        return status === 'not_allowed' ? (
          <Ban className="w-5 h-5 text-rose-400" />
        ) : (
          <ShieldCheck className="w-5 h-5 text-cyber-cyan" />
        );
    }
  };

  const getStatusBadge = (status: RuleStatus) => {
    switch (status) {
      case 'allowed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950/70 border border-emerald-500/50 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.25)]">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>ALLOWED</span>
          </span>
        );
      case 'not_allowed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-950/70 border border-rose-500/50 text-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.25)]">
            <XCircle className="w-3.5 h-3.5 shrink-0" />
            <span>NOT ALLOWED</span>
          </span>
        );
      case 'mandatory':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-950/70 border border-amber-500/50 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.25)]">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
            <span>MANDATORY</span>
          </span>
        );
      case 'required':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-950/70 border border-sky-500/50 text-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.25)]">
            <Laptop className="w-3.5 h-3.5 shrink-0" />
            <span>BRING OWN</span>
          </span>
        );
      case 'provided':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.25)]">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>PROVIDED</span>
          </span>
        );
      default:
        return null;
    }
  };

  const getFooterStatus = (status: RuleStatus) => {
    switch (status) {
      case 'allowed':
        return <span className="text-emerald-400 font-bold">PERMITTED</span>;
      case 'not_allowed':
        return <span className="text-rose-400 font-bold">STRICTLY FORBIDDEN</span>;
      case 'mandatory':
        return <span className="text-amber-300 font-bold">MANDATORY PROTOCOL</span>;
      case 'required':
        return <span className="text-sky-300 font-bold">REQUIRED GEAR</span>;
      case 'provided':
        return <span className="text-emerald-300 font-bold">COMPLIMENTARY</span>;
      default:
        return null;
    }
  };

  const getGlowColor = (status: RuleStatus): 'emerald' | 'amber' | 'cyan' | 'violet' | 'blue' => {
    switch (status) {
      case 'allowed':
      case 'provided':
        return 'emerald';
      case 'not_allowed':
      case 'mandatory':
        return 'amber';
      case 'required':
        return 'cyan';
      default:
        return 'cyan';
    }
  };

  return (
    <section id="rules" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SciFiBadge variant="cyan" className="mb-3">
            [ PROTOCOL DIRECTIVES ]
          </SciFiBadge>
          <h2 className="font-tech text-3xl sm:text-5xl font-extrabold tracking-wider text-slate-100 uppercase">
            HACKATHON <span className="text-cyber-cyan glow-text-cyan">GUIDELINES</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyber-cyan to-cyber-blue mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-mono">
            FAIR PLAY CODE, SYSTEM INTEGRITY & ON-SITE PARTICIPATION DIRECTIVES
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold tracking-wider transition-all duration-200 cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan shadow-[0_0_15px_rgba(0,210,255,0.3)]'
                : 'bg-space-900/80 border border-space-750 text-slate-400 hover:text-slate-200 hover:border-space-600'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>ALL DIRECTIVES ({EVENT_CONFIG.rules.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('technical')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold tracking-wider transition-all duration-200 cursor-pointer ${
              activeFilter === 'technical'
                ? 'bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan shadow-[0_0_15px_rgba(0,210,255,0.3)]'
                : 'bg-space-900/80 border border-space-750 text-slate-400 hover:text-slate-200 hover:border-space-600'
            }`}
          >
            <Bot className="w-3.5 h-3.5 text-emerald-400" />
            <span>CODE & FAIR PLAY ({technicalCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('venue')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold tracking-wider transition-all duration-200 cursor-pointer ${
              activeFilter === 'venue'
                ? 'bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan shadow-[0_0_15px_rgba(0,210,255,0.3)]'
                : 'bg-space-900/80 border border-space-750 text-slate-400 hover:text-slate-200 hover:border-space-600'
            }`}
          >
            <Users className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>VENUE & PARTICIPATION ({venueCount})</span>
          </button>
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRules.map((rule: RuleItem) => {
            const glowColor = getGlowColor(rule.status);

            return (
              <HoloCard
                key={rule.id}
                className="p-6 flex flex-col justify-between"
                glowColor={glowColor}
              >
                <div>
                  {/* Card Header: Icon & Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-space-850 border border-space-700 flex items-center justify-center shadow-inner">
                      {getRuleIcon(rule.id, rule.status)}
                    </div>

                    {getStatusBadge(rule.status)}
                  </div>

                  {/* Tag Pill if present */}
                  {rule.tag && (
                    <div className="mb-2.5">
                      <span className="inline-block text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-space-850/90 text-slate-400 border border-space-750">
                        {rule.tag}
                      </span>
                    </div>
                  )}

                  {/* Rule Title */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug">
                    {rule.title}
                  </h3>

                  {/* Rule Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {rule.description}
                  </p>
                </div>

                {/* Card Footer: Category & Status Label */}
                <div className="mt-6 pt-3.5 border-t border-space-800 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500 uppercase tracking-wide">
                    CATEGORY: {rule.category}
                  </span>
                  {getFooterStatus(rule.status)}
                </div>
              </HoloCard>
            );
          })}
        </div>

        {/* Bottom Clarification Callout */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-space-900/90 via-space-850/90 to-space-900/90 border border-space-750 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5 text-cyber-cyan" />
            </div>
            <div>
              <h4 className="font-tech text-sm sm:text-base font-bold text-slate-100 uppercase tracking-wide">
                Need Clarification on Directives?
              </h4>
              <p className="text-xs text-slate-400 font-sans">
                Review the comprehensive questions & answers or connect directly with our organizing coordinators.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="#faq"
              className="flex-1 sm:flex-initial text-center px-4 py-2 rounded-lg bg-space-800 hover:bg-space-750 text-slate-200 border border-space-700 font-mono text-xs uppercase tracking-wider transition-all"
            >
              Explore FAQ
            </a>
            <a
              href="#contact"
              className="flex-1 sm:flex-initial text-center px-4 py-2 rounded-lg bg-cyber-cyan/15 hover:bg-cyber-cyan/25 text-cyber-cyan border border-cyber-cyan/40 font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_10px_rgba(0,210,255,0.15)]"
            >
              Contact Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
