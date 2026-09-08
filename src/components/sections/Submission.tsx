import React from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { HoloCard } from '../ui/HoloCard';
import { SciFiBadge } from '../ui/SciFiBadge';
import { Github, Presentation, Laptop2, Info, Cpu } from 'lucide-react';

export const Submission: React.FC = () => {
  return (
    <section id="submissions" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-space-800/80 bg-space-950/40">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SciFiBadge variant="cyan" className="mb-3">
            [ DELIVERABLE GATEWAYS ]
          </SciFiBadge>
          <h2 className="font-tech text-3xl sm:text-5xl font-extrabold tracking-wider text-slate-100 uppercase">
            MISSION <span className="text-jedi-blue glow-text-blue">OUTPUT</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-sith-red to-jedi-blue mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-mono">
            WHAT EVERY TEAM MUST SUBMIT FOR JURY EVALUATION ON 18/09
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Deliverable 1: GitHub */}
          <HoloCard className="p-6 flex flex-col justify-between" glowColor="cyan">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-space-850 border border-space-700 flex items-center justify-center">
                  <Github className="w-6 h-6 text-jedi-blue" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-emerald-950/60 border border-emerald-500/50 text-emerald-400 px-2 py-0.5 rounded">
                  REQUIRED
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-slate-100">
                GitHub Repository
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                Clean repository containing complete source code, firmware scripts, and commit history created during the sprint.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-space-800 text-[10px] font-mono text-emerald-400">
              ✓ MANDATORY (BOTH TRACKS)
            </div>
          </HoloCard>

          {/* Deliverable 2: PPT */}
          <HoloCard className="p-6 flex flex-col justify-between" glowColor="cyan">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-space-850 border border-space-700 flex items-center justify-center">
                  <Presentation className="w-6 h-6 text-jedi-blue" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-emerald-950/60 border border-emerald-500/50 text-emerald-400 px-2 py-0.5 rounded">
                  REQUIRED
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-slate-100">
                PPT Presentation Deck
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                A concise slide presentation articulating problem breakdown, AI system architecture, methodology, and impact.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-space-800 text-[10px] font-mono text-emerald-400">
              ✓ MANDATORY (BOTH TRACKS)
            </div>
          </HoloCard>

          {/* Deliverable 3: Hardware Prototype */}
          <HoloCard className="p-6 flex flex-col justify-between" glowColor="amber">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-space-850 border border-space-700 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-sith-red" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-sith-red/20 border border-sith-red text-sith-red px-2 py-0.5 rounded">
                  HW TRACK
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-slate-100">
                Live Physical Prototype
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                Functioning hardware circuit, sensors, and embedded AI running live for judges to inspect on 18 September.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-space-800 text-[10px] font-mono text-sith-red">
              ⚡ MANDATORY FOR HARDWARE
            </div>
          </HoloCard>

          {/* Deliverable 4: Software Demo (Optional) */}
          <HoloCard className="p-6 flex flex-col justify-between" glowColor="violet">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-space-850 border border-space-700 flex items-center justify-center">
                  <Laptop2 className="w-6 h-6 text-force-magenta" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-space-800 border border-space-600 text-slate-300 px-2 py-0.5 rounded">
                  OPTIONAL
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-slate-100">
                Working Web/App Demo
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                Optional live web or mobile application demonstration during software judging rounds to showcase real-time output.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-space-800 text-[10px] font-mono text-force-magenta">
              ○ OPTIONAL PRESENTATION
            </div>
          </HoloCard>
        </div>

        {/* Submission Notice Banner */}
        <div className="mt-10 p-5 rounded-2xl border border-jedi-blue/30 bg-space-900/80 backdrop-blur-md flex items-center gap-3.5 text-slate-300">
          <Info className="w-5 h-5 text-jedi-blue shrink-0" />
          <p className="text-xs sm:text-sm font-mono leading-relaxed">
            <strong className="text-white">COMMAND NOTIFICATION:</strong> {EVENT_CONFIG.submissions.notice}
          </p>
        </div>
      </div>
    </section>
  );
};
