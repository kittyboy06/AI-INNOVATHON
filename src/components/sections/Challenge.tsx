import React, { useState } from 'react';
import { SciFiBadge } from '../ui/SciFiBadge';
import { HoloCard } from '../ui/HoloCard';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { 
  Cpu, 
  Code2, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Boxes, 
  GitBranch, 
  Presentation, 
  Terminal, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Eye,
  SlidersHorizontal
} from 'lucide-react';

export const Challenge: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hardware' | 'software' | 'compare'>('hardware');

  const hwTrack = EVENT_CONFIG.challengeTracks.hardware;
  const swTrack = EVENT_CONFIG.challengeTracks.software;

  return (
    <section id="challenge" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SciFiBadge variant="amber" pulse className="mb-3">
            [ MISSION CHALLENGE MATRIX ]
          </SciFiBadge>
          <h2 className="font-tech text-3xl sm:text-5xl font-black tracking-wider text-slate-100 uppercase">
            CHALLENGE <span className="text-force-magenta glow-text-purple">TRACKS</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 font-mono">
            SEPARATED FLOW ARCHITECTURE // HARDWARE SQUADRON VS SOFTWARE SQUADRON
          </p>
        </div>

        {/* Track Selection Switcher Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('hardware')}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-tech text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === 'hardware'
                ? 'bg-sith-red text-white shadow-saber-red border border-sith-glow'
                : 'bg-space-900/80 text-slate-300 border border-space-700 hover:border-sith-red/60 hover:text-white'
            }`}
          >
            <Cpu className="w-4 h-4 text-sith-red" />
            <span>HARDWARE TRACK (2 DAYS EARLY)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('software')}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-tech text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === 'software'
                ? 'bg-jedi-blue text-space-950 shadow-saber-blue border border-jedi-glow'
                : 'bg-space-900/80 text-slate-300 border border-space-700 hover:border-jedi-blue/60 hover:text-white'
            }`}
          >
            <Code2 className="w-4 h-4 text-jedi-blue" />
            <span>SOFTWARE TRACK (ON THE SPOT)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('compare')}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-tech text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === 'compare'
                ? 'bg-force-purple text-white shadow-neon-violet border border-force-magenta'
                : 'bg-space-900/80 text-slate-300 border border-space-700 hover:border-force-purple/60 hover:text-white'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4 text-force-magenta" />
            <span>FLOW SEPARATION OVERVIEW</span>
          </button>
        </div>

        {/* TAB 1: HARDWARE TRACK */}
        {activeTab === 'hardware' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Command Header Banner */}
            <div className="relative rounded-3xl border-2 border-sith-red/50 bg-space-900/90 p-8 sm:p-10 shadow-[0_0_35px_rgba(255,0,60,0.25)] backdrop-blur-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-sith-red/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute top-3 right-4 font-mono text-[10px] text-sith-red/80 tracking-widest uppercase">
                {hwTrack.codename}
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-space-800">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-sith-dark/40 border border-sith-red/60 flex items-center justify-center shadow-saber-red shrink-0">
                    <Cpu className="w-8 h-8 text-sith-red animate-pulse" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sith-red/20 border border-sith-red text-sith-red font-mono text-xs font-black tracking-widest uppercase mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{hwTrack.badge}</span>
                    </span>
                    <h3 className="font-tech text-2xl sm:text-4xl font-black text-white uppercase">
                      {hwTrack.title}
                    </h3>
                  </div>
                </div>

                <div className="bg-space-950/80 border border-sith-red/40 p-4 rounded-xl font-mono text-xs text-slate-300">
                  <div className="text-sith-red font-bold uppercase mb-1">
                    ⚡ PROBLEM STATEMENT TRANSMISSION:
                  </div>
                  <div className="text-white text-sm font-bold">
                    {hwTrack.psReleaseDate} • {hwTrack.psReleaseTime}
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">
                    (48 Hours Prior to Hackathon Day)
                  </div>
                </div>
              </div>

              {/* Core Philosophy & Why Timing Matters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-space-950/60 p-5 rounded-xl border border-space-800">
                  <h4 className="font-tech text-sm font-bold uppercase tracking-wider text-sith-red mb-2">
                    MISSION MANDATE & DESCRIPTION
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {hwTrack.slogan} {hwTrack.psReleaseDescription}
                  </p>
                </div>

                <div className="bg-space-950/60 p-5 rounded-xl border border-space-800">
                  <h4 className="font-tech text-sm font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span>WHY PS IS RELEASED 2 DAYS EARLY</span>
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {hwTrack.whyTimingMatters}
                  </p>
                </div>
              </div>

              {/* Step-by-Step Flow Pipeline */}
              <div className="mt-10">
                <h4 className="font-tech text-base font-bold uppercase tracking-wider text-white mb-4">
                  OPERATIONAL FLOW PIPELINE
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                  {hwTrack.keySteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="relative p-4 rounded-xl bg-space-950/90 border border-sith-red/30 flex flex-col justify-between group hover:border-sith-red transition-colors"
                    >
                      <div>
                        <span className="font-mono text-[10px] font-bold text-sith-red tracking-widest uppercase">
                          {step.timeline}
                        </span>
                        <h5 className="font-tech text-xs font-black text-slate-100 mt-1 uppercase">
                          {step.phase}
                        </h5>
                        <p className="text-xs text-slate-400 mt-2 font-sans leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-space-800 font-mono text-[10px] text-slate-500">
                        STEP 0{idx + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hardware Deliverables & Allowed Kits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-space-800">
                <div>
                  <h4 className="font-tech text-sm font-bold uppercase tracking-wider text-slate-100 mb-3 flex items-center gap-2">
                    <Boxes className="w-4 h-4 text-sith-red" />
                    <span>REQUIRED DELIVERABLES</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-mono">
                    {hwTrack.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sith-red shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-tech text-sm font-bold uppercase tracking-wider text-slate-100 mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-sith-red" />
                    <span>PERMITTED HARDWARE & TOOLS</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-mono">
                    {hwTrack.allowedTools.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sith-red shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SOFTWARE TRACK */}
        {activeTab === 'software' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Command Header Banner */}
            <div className="relative rounded-3xl border-2 border-jedi-blue/50 bg-space-900/90 p-8 sm:p-10 shadow-[0_0_35px_rgba(0,210,255,0.25)] backdrop-blur-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-96 h-96 bg-jedi-blue/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute top-3 right-4 font-mono text-[10px] text-jedi-blue/80 tracking-widest uppercase">
                {swTrack.codename}
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-space-800">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-jedi-dark/40 border border-jedi-blue/60 flex items-center justify-center shadow-saber-blue shrink-0">
                    <Code2 className="w-8 h-8 text-jedi-blue animate-pulse" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-jedi-blue/20 border border-jedi-blue text-jedi-blue font-mono text-xs font-black tracking-widest uppercase mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{swTrack.badge}</span>
                    </span>
                    <h3 className="font-tech text-2xl sm:text-4xl font-black text-white uppercase">
                      {swTrack.title}
                    </h3>
                  </div>
                </div>

                <div className="bg-space-950/80 border border-jedi-blue/40 p-4 rounded-xl font-mono text-xs text-slate-300">
                  <div className="text-jedi-blue font-bold uppercase mb-1">
                    ⚡ PROBLEM STATEMENT UNLOCK:
                  </div>
                  <div className="text-white text-sm font-bold">
                    {swTrack.psReleaseDate} • {swTrack.psReleaseTime}
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">
                    (Auditorium Screen Live Broadcast)
                  </div>
                </div>
              </div>

              {/* Core Philosophy & Why Timing Matters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-space-950/60 p-5 rounded-xl border border-space-800">
                  <h4 className="font-tech text-sm font-bold uppercase tracking-wider text-jedi-blue mb-2">
                    MISSION MANDATE & PHILOSOPHY
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {swTrack.slogan} {swTrack.psReleaseDescription}
                  </p>
                </div>

                <div className="bg-space-950/60 p-5 rounded-xl border border-space-800">
                  <h4 className="font-tech text-sm font-bold uppercase tracking-wider text-cyber-cyan mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-jedi-blue" />
                    <span>WHY PS IS REVEALED ON THE SPOT</span>
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {swTrack.whyTimingMatters}
                  </p>
                </div>
              </div>

              {/* Step-by-Step Flow Pipeline */}
              <div className="mt-10">
                <h4 className="font-tech text-base font-bold uppercase tracking-wider text-white mb-4">
                  OPERATIONAL FLOW PIPELINE
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                  {swTrack.keySteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="relative p-4 rounded-xl bg-space-950/90 border border-jedi-blue/30 flex flex-col justify-between group hover:border-jedi-blue transition-colors"
                    >
                      <div>
                        <span className="font-mono text-[10px] font-bold text-jedi-blue tracking-widest uppercase">
                          {step.timeline}
                        </span>
                        <h5 className="font-tech text-xs font-black text-slate-100 mt-1 uppercase">
                          {step.phase}
                        </h5>
                        <p className="text-xs text-slate-400 mt-2 font-sans leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-space-800 font-mono text-[10px] text-slate-500">
                        STEP 0{idx + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Software Deliverables & Permitted Tools */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-space-800">
                <div>
                  <h4 className="font-tech text-sm font-bold uppercase tracking-wider text-slate-100 mb-3 flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-jedi-blue" />
                    <span>REQUIRED DELIVERABLES</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-mono">
                    {swTrack.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-jedi-blue shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-tech text-sm font-bold uppercase tracking-wider text-slate-100 mb-3 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-jedi-blue" />
                    <span>PERMITTED FRAMEWORKS & AI STACKS</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-mono">
                    {swTrack.allowedTools.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-jedi-blue shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SIDE-BY-SIDE FLOW COMPARISON */}
        {activeTab === 'compare' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="rounded-3xl border border-space-800 bg-space-900/90 p-6 sm:p-8 backdrop-blur-xl">
              <h3 className="font-tech text-xl sm:text-2xl font-black text-white uppercase text-center mb-6">
                DUAL TRACK FLOW SEPARATION MATRIX
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-space-700 bg-space-950/80">
                      <th className="p-4 text-slate-400 uppercase">Track Dimension</th>
                      <th className="p-4 text-sith-red uppercase bg-sith-red/5">
                        ⚡ Hardware & AIoT Track
                      </th>
                      <th className="p-4 text-jedi-blue uppercase bg-jedi-blue/5">
                        💻 Software & AI Track
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-space-800">
                    <tr>
                      <td className="p-4 font-bold text-slate-300">PS Release Timing</td>
                      <td className="p-4 text-sith-red font-bold">
                        16 September 2026 (2 Days Before, 10:00 AM)
                      </td>
                      <td className="p-4 text-jedi-blue font-bold">
                        18 September 2026 (On The Spot, 9:00 AM)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-300">Preparation Window</td>
                      <td className="p-4 text-slate-300">
                        48 Hours for BOM procurement & circuit breadboarding
                      </td>
                      <td className="p-4 text-slate-300">
                        Zero prior prep — rapid on-site problem solving
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-300">Code/Hardware Rules</td>
                      <td className="p-4 text-slate-300">
                        Pre-tested boards permitted; physical assembly & AI integration on-site
                      </td>
                      <td className="p-4 text-slate-300">
                        Strictly NO pre-existing code or pre-built repositories
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-300">Hackathon Day Focus</td>
                      <td className="p-4 text-slate-300">
                        Physical assembly, edge model flashing, sensor calibration, live demo
                      </td>
                      <td className="p-4 text-slate-300">
                        Full-stack architecture, prompt engineering, API coding, slide deck
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-300">Mandatory Submissions</td>
                      <td className="p-4 text-slate-300">
                        Physical Prototype + Circuit Schematics + Git Repo + PPT
                      </td>
                      <td className="p-4 text-slate-300">
                        GitHub Repository + PPT Presentation Deck
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-300">Judging Format</td>
                      <td className="p-4 text-slate-300">
                        Live hardware inspection & physical demonstration
                      </td>
                      <td className="p-4 text-slate-300">
                        Code review, slide evaluation, optional prototype demo
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
