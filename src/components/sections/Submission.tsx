import React from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { HoloCard } from '../ui/HoloCard';
import { SciFiBadge } from '../ui/SciFiBadge';
import { Github, Presentation, Laptop2, Info } from 'lucide-react';

export const Submission: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-space-800/80 bg-space-950/40">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SciFiBadge variant="cyan" className="mb-3">
            [ DELIVERABLE GATEWAYS ]
          </SciFiBadge>
          <h2 className="font-tech text-3xl sm:text-5xl font-extrabold tracking-wider text-slate-100 uppercase">
            MISSION <span className="text-cyber-cyan glow-text-cyan">OUTPUT</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyber-cyan to-cyber-blue mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-mono">
            WHAT EVERY TEAM MUST SUBMIT FOR JURY EVALUATION
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Deliverable 1: GitHub */}
          <HoloCard className="p-6 flex flex-col justify-between" glowColor="cyan">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-space-850 border border-space-700 flex items-center justify-center">
                  <Github className="w-6 h-6 text-cyber-cyan" />
                </div>
                <SciFiBadge variant="cyan">[ REQUIRED ]</SciFiBadge>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-100">
                GitHub Repository
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                Clean repository containing complete prototype source code, documentation, and commit history created during the 8-hour sprint.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-space-800 text-[11px] font-mono text-emerald-400">
              ✓ MANDATORY DELIVERABLE
            </div>
          </HoloCard>

          {/* Deliverable 2: PPT */}
          <HoloCard className="p-6 flex flex-col justify-between" glowColor="cyan">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-space-850 border border-space-700 flex items-center justify-center">
                  <Presentation className="w-6 h-6 text-cyber-cyan" />
                </div>
                <SciFiBadge variant="cyan">[ REQUIRED ]</SciFiBadge>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-100">
                PPT / Presentation
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                A concise slide presentation articulating problem breakdown, AI system architecture, methodology, business impact, and future scope.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-space-800 text-[11px] font-mono text-emerald-400">
              ✓ MANDATORY DELIVERABLE
            </div>
          </HoloCard>

          {/* Deliverable 3: Demo (Optional) */}
          <HoloCard className="p-6 flex flex-col justify-between" glowColor="violet">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-space-850 border border-space-700 flex items-center justify-center">
                  <Laptop2 className="w-6 h-6 text-cyber-violet" />
                </div>
                <SciFiBadge variant="violet">[ OPTIONAL ]</SciFiBadge>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-100">
                Working Prototype Demo
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                Optional live demonstration of your working prototype running locally or deployed on web/mobile during judging rounds.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-space-800 text-[11px] font-mono text-cyber-violet">
              ○ OPTIONAL PRESENTATION
            </div>
          </HoloCard>
        </div>

        {/* Submission Notice Banner */}
        <div className="mt-10 p-5 rounded-2xl border border-cyber-cyan/30 bg-space-900/80 backdrop-blur-md flex items-center gap-3.5 text-slate-300">
          <Info className="w-5 h-5 text-cyber-cyan shrink-0" />
          <p className="text-xs sm:text-sm font-mono leading-relaxed">
            <strong className="text-white">TELEMETRY ANNOUNCEMENT:</strong> {EVENT_CONFIG.submissions.notice}
          </p>
        </div>
      </div>
    </section>
  );
};
