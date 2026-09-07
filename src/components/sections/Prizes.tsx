import React from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { SciFiBadge } from '../ui/SciFiBadge';
import { Trophy, Award, Sparkles, Shield } from 'lucide-react';

export const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <SciFiBadge variant="amber" pulse className="mb-3">
          [ BOUNTY & HONORS ]
        </SciFiBadge>
        <h2 className="font-tech text-3xl sm:text-5xl font-extrabold tracking-wider text-slate-100 uppercase">
          PRIZE <span className="text-yellow-400 glow-text-amber">POOL</span>
        </h2>
        <div className="mt-4 h-1 w-24 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full" />

        {/* Massive Prize Vault Showcase */}
        <div className="mt-12 relative rounded-3xl border-2 border-yellow-500/40 bg-gradient-to-b from-space-900/90 to-space-950/90 p-8 sm:p-14 shadow-[0_0_50px_rgba(234,179,8,0.15)] backdrop-blur-xl overflow-hidden">
          {/* Subtle light streak */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Trophy Icon */}
          <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-yellow-400/50 bg-space-950 flex items-center justify-center shadow-[0_0_25px_rgba(234,179,8,0.3)] mb-6">
            <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 animate-bounce" />
          </div>

          <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-slate-400 mb-2">
            CUMULATIVE HACKATHON REWARD
          </p>

          <div className="font-tech text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 tracking-tight">
            {EVENT_CONFIG.prizePool}
          </div>

          <h3 className="mt-3 font-tech text-xl sm:text-3xl font-black uppercase tracking-widest text-yellow-400/90">
            TOTAL PRIZE POOL
          </h3>

          <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg text-slate-300 font-display italic">
            "Build something extraordinary. Earn your place among the best."
          </p>

          <div className="mt-10 pt-8 border-t border-space-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-xs font-mono text-slate-400">
            <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-space-950/60 border border-space-800">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>CASH RECOGNITION</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-space-950/60 border border-space-800">
              <Sparkles className="w-4 h-4 text-cyber-cyan" />
              <span>DEPARTMENT MERIT</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-space-950/60 border border-space-800">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>OFFICIAL CERTIFICATES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
