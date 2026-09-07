import React from 'react';
import { SciFiBadge } from '../ui/SciFiBadge';
import { Lock, ShieldAlert, Binary, EyeOff, Terminal } from 'lucide-react';
import { EVENT_CONFIG } from '../../config/eventConfig';

export const Challenge: React.FC = () => {
  return (
    <section id="challenge" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SciFiBadge variant="amber" pulse className="mb-3">
            [ SECURITY PROTOCOL: ENCRYPTED ]
          </SciFiBadge>
          <h2 className="font-tech text-3xl sm:text-5xl font-black tracking-wider text-slate-100 uppercase">
            THE <span className="text-cyber-amber glow-text-amber">CHALLENGE</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 font-mono">
            CLASSIFIED MISSION BRIEFING ARCHIVE
          </p>
        </div>

        {/* Holographic Vault Display */}
        <div className="relative rounded-3xl border-2 border-cyber-amber/40 bg-space-900/90 p-8 sm:p-12 shadow-neon-amber backdrop-blur-xl overflow-hidden text-center">
          {/* Cyber scanline & background grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse" />

          {/* Corner Telemetry Markings */}
          <div className="absolute top-3 left-4 font-mono text-[10px] text-amber-500/70 tracking-widest uppercase">
            SEC_LEVEL // 05_ALPHA
          </div>
          <div className="absolute top-3 right-4 font-mono text-[10px] text-amber-500/70 tracking-widest uppercase">
            CIPHER // AES_QUANTUM
          </div>

          {/* Vault Icon with Pulse Halo */}
          <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border border-amber-400/60 bg-space-950 flex items-center justify-center shadow-neon-amber mb-6 group">
            <Lock className="w-12 h-12 text-amber-400 animate-pulse" />
            <div className="absolute -inset-1 rounded-2xl bg-amber-500/20 blur-lg -z-10" />
          </div>

          {/* Classified Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/80 bg-amber-950/60 text-amber-300 font-mono text-sm font-black tracking-widest uppercase mb-4">
            <EyeOff className="w-4 h-4 text-amber-400" />
            <span>[ CLASSIFIED BRIEFING ]</span>
          </div>

          {/* Enigmatic Scrambled Stream */}
          <div className="my-3 font-mono text-2xl sm:text-4xl md:text-5xl font-black tracking-widest text-slate-300 select-none">
            <span className="text-amber-400">? ? ?</span> ? ? ? <span className="text-amber-400">? ? ?</span>
          </div>

          {/* Core Banner */}
          <h3 className="font-tech text-2xl sm:text-4xl md:text-5xl font-black text-slate-100 tracking-wide uppercase mt-4">
            {EVENT_CONFIG.problemStatementCallout}
          </h3>

          <div className="mt-4 max-w-xl mx-auto">
            <blockquote className="border-l-2 border-amber-400 pl-4 text-sm sm:text-base text-slate-300 font-mono italic text-left sm:text-center sm:border-l-0">
              "{EVENT_CONFIG.problemStatementSubtext}"
            </blockquote>
          </div>

          {/* Terminal Diagnostics */}
          <div className="mt-8 pt-6 border-t border-space-700/80 max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <Binary className="w-4 h-4 text-amber-400" />
              <span>PRE-BUILT REPOS: STRICTLY FORBIDDEN</span>
            </span>
            <span className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-amber-400" />
              <span>LIVE UNLOCK: 18 SEPT 2026</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
