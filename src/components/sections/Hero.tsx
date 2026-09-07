import React from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { GlowingButton } from '../ui/GlowingButton';
import { SciFiBadge } from '../ui/SciFiBadge';
import { CountdownTimer } from '../ui/CountdownTimer';
import { AlertTriangle, Calendar, Clock, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full text-center relative z-10">
        {/* Top Telemetry Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <SciFiBadge variant="cyan" pulse>
            [ MISSION STATUS: REGISTRATION OPEN ]
          </SciFiBadge>
          <SciFiBadge variant="amber">
            [ STAR WARS SCI-FI THEME ]
          </SciFiBadge>
          <SciFiBadge variant="violet">
            [ ₹8,000 PRIZE POOL ]
          </SciFiBadge>
        </div>

        {/* Organizer Header */}
        <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-slate-400 mb-2">
          {EVENT_CONFIG.department} Presents
        </p>

        {/* Main Title */}
        <h1 className="font-tech text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider text-slate-100 uppercase">
          AI-INNOVATHON <span className="text-cyber-cyan glow-text-cyan">2026</span>
        </h1>

        {/* Tagline */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-cyber-cyan" />
          <p className="font-display text-lg sm:text-2xl md:text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-blue uppercase">
            {EVENT_CONFIG.tagline}
          </p>
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-cyber-cyan" />
        </div>

        {/* Subtitle & Hero Punchline */}
        <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-300 font-mono tracking-wide">
          {EVENT_CONFIG.subtitle}
        </p>

        {/* Critical On-the-Spot Callout */}
        <div className="mt-6 inline-block">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-amber-500/60 bg-amber-950/40 text-amber-300 shadow-neon-amber backdrop-blur-md animate-pulse-slow">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="font-mono text-xs sm:text-sm font-bold tracking-wider uppercase">
              ⚠️ {EVENT_CONFIG.problemStatementCallout}
            </span>
          </div>
        </div>

        <p className="mt-2 text-xs sm:text-sm text-slate-400 font-mono italic">
          "{EVENT_CONFIG.heroPunchline} — {EVENT_CONFIG.problemStatementSubtext}"
        </p>

        {/* Event Key Telemetry Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-mono text-slate-300">
          <div className="flex items-center gap-2 bg-space-900/80 border border-space-700/80 px-4 py-2 rounded-lg backdrop-blur-sm">
            <Calendar className="w-4 h-4 text-cyber-cyan" />
            <span>{EVENT_CONFIG.eventDateDisplay}</span>
          </div>

          <div className="flex items-center gap-2 bg-space-900/80 border border-space-700/80 px-4 py-2 rounded-lg backdrop-blur-sm">
            <Clock className="w-4 h-4 text-cyber-cyan" />
            <span>{EVENT_CONFIG.eventDuration} • REPORT: {EVENT_CONFIG.reportingTime}</span>
          </div>

          <div className="flex items-center gap-2 bg-space-900/80 border border-space-700/80 px-4 py-2 rounded-lg backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-cyber-cyan" />
            <span>{EVENT_CONFIG.institution}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <GlowingButton
            variant="primary"
            size="lg"
            href="#register"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            REGISTER NOW (₹400)
          </GlowingButton>

          <GlowingButton
            variant="secondary"
            size="lg"
            href="#mission"
          >
            EXPLORE THE MISSION
          </GlowingButton>
        </div>

        {/* Live IST Countdown Dock */}
        <div className="mt-12">
          <CountdownTimer />
        </div>

        {/* Registration Quick Bar */}
        <div className="mt-4 flex items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>REGISTRATION FEE: {EVENT_CONFIG.registrationFee}</span>
          </span>
          <span>•</span>
          <span>CLOSES: {EVENT_CONFIG.regClosingDateDisplay}</span>
        </div>
      </div>
    </section>
  );
};
