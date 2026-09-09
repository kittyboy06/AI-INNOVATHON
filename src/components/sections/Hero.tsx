import React from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { GlowingButton } from '../ui/GlowingButton';
import { SciFiBadge } from '../ui/SciFiBadge';
import { CountdownTimer } from '../ui/CountdownTimer';
import { LightsaberDuel } from '../ui/LightsaberDuel';
import { Calendar, Clock, MapPin, ArrowRight, ShieldCheck, Zap, Cpu, Code2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full text-center relative z-10">
        {/* Top Galactic Telemetry Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <SciFiBadge variant="cyan" pulse>
            [ MISSION DATE: 18/09/2026 ]
          </SciFiBadge>
          <SciFiBadge variant="amber">
            [ 7-HOUR HACKATHON ]
          </SciFiBadge>
          <SciFiBadge variant="violet">
            [ EXITING PRIZE POOL ]
          </SciFiBadge>
        </div>

        {/* Organizer Header & Collaborating Chapters Logos */}
        <div className="flex flex-col items-center mb-6">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-slate-400 mb-3">
            {EVENT_CONFIG.department} In Association With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-space-900/80 border border-space-800 px-4 py-2.5 rounded-2xl backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            {EVENT_CONFIG.clubs.map((club) => (
              <a
                key={club.id}
                href="#clubs"
                className="flex items-center gap-2 group/logo hover:scale-105 transition-all duration-200"
                title={`${club.name} — ${club.tagline}`}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/95 p-1 flex items-center justify-center shadow-md border border-space-700/50 group-hover/logo:border-jedi-blue">
                  <img
                    src={club.logo}
                    alt={club.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="font-tech text-[11px] sm:text-xs font-bold text-slate-300 group-hover/logo:text-jedi-blue transition-colors hidden md:inline">
                  {club.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Official Star Wars Artwork Banner Showcase */}
        <div className="relative mx-auto max-w-4xl mb-8 rounded-2xl p-1.5 bg-gradient-to-r from-jedi-blue via-force-purple to-sith-red shadow-[0_0_35px_rgba(121,40,202,0.4)] group overflow-hidden">
          <div className="relative rounded-xl overflow-hidden bg-space-950">
            <img
              src="/starwars-banner.jpg"
              alt="AI-Innovathon 2026 Star Wars Artwork Banner"
              className="w-full h-auto object-cover max-h-[340px] transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              loading="eager"
            />
            {/* Ambient edge glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
        </div>

        {/* Main Title */}
        <div className="starwars-frame max-w-3xl mx-auto my-2">
          <h1 className="font-jedi text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wider text-white uppercase select-none">
            <span className="text-jedi-blue glow-text-blue">AI-</span>
            <span className="text-white">INNOVA</span>
            <span className="text-sith-red glow-text-red">THON</span>
          </h1>
          <div className="mt-1 font-tech text-lg sm:text-2xl font-bold tracking-widest text-slate-300">
            2026
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="h-[2px] w-10 sm:w-20 bg-gradient-to-r from-transparent via-jedi-blue to-white" />
          <p className="font-display text-lg sm:text-2xl md:text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-jedi-blue via-purple-300 to-sith-red uppercase">
            {EVENT_CONFIG.tagline}
          </p>
          <span className="h-[2px] w-10 sm:w-20 bg-gradient-to-l from-transparent via-sith-red to-white" />
        </div>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-300 font-mono tracking-wide max-w-2xl mx-auto">
          {EVENT_CONFIG.subtitle}
        </p>

        {/* Interactive Lightsaber Clash Component */}
        <div className="mt-6">
          <LightsaberDuel />
        </div>

        {/* Event Key Telemetry Row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-mono text-slate-300">
          <div className="flex items-center gap-2 bg-space-900/90 border border-jedi-blue/40 px-4 py-2 rounded-lg backdrop-blur-sm shadow-[0_0_10px_rgba(0,210,255,0.15)]">
            <Calendar className="w-4 h-4 text-jedi-blue" />
            <span className="font-bold text-white">{EVENT_CONFIG.eventDateDisplay} (18/09)</span>
          </div>

          <div className="flex items-center gap-2 bg-space-900/90 border border-force-purple/40 px-4 py-2 rounded-lg backdrop-blur-sm">
            <Clock className="w-4 h-4 text-force-magenta" />
            <span>REPORT: {EVENT_CONFIG.reportingTime} • CONCLUDES: {EVENT_CONFIG.concludeTime}</span>
          </div>

          <div className="flex items-center gap-2 bg-space-900/90 border border-sith-red/40 px-4 py-2 rounded-lg backdrop-blur-sm shadow-[0_0_10px_rgba(255,0,60,0.15)]">
            <MapPin className="w-4 h-4 text-sith-red" />
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
            REGISTER SQUAD NOW (₹400)
          </GlowingButton>

          <GlowingButton
            variant="secondary"
            size="lg"
            href="#challenge"
            icon={<Zap className="w-4 h-4 text-force-magenta" />}
          >
            EXPLORE DUAL TRACKS
          </GlowingButton>
        </div>

        {/* Live IST Countdown Dock */}
        <div className="mt-12">
          <CountdownTimer />
        </div>

        {/* Registration Quick Bar */}
        <div className="mt-4 flex items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-jedi-blue" />
            <span>REGISTRATION FEE: {EVENT_CONFIG.registrationFee}</span>
          </span>
          <span>•</span>
          <span>REGISTRATION CLOSES: {EVENT_CONFIG.regClosingDateDisplay}</span>
        </div>
      </div>
    </section>
  );
};
