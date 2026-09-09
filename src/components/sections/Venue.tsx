import React from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { HoloCard } from '../ui/HoloCard';
import { SciFiBadge } from '../ui/SciFiBadge';
import { GlowingButton } from '../ui/GlowingButton';
import { MapPin, Navigation, Calendar, Clock, ExternalLink } from 'lucide-react';

export const Venue: React.FC = () => {
  return (
    <section id="venue" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-space-800/80 bg-space-950/40">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SciFiBadge variant="cyan" className="mb-3">
            [ COORDINATES // LOCATION ]
          </SciFiBadge>
          <h2 className="font-tech text-3xl sm:text-5xl font-extrabold tracking-wider text-slate-100 uppercase">
            MISSION <span className="text-cyber-cyan glow-text-cyan">VENUE</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyber-cyan to-cyber-blue mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-mono">
            BASE OF OPERATIONS // EVENT GROUND
          </p>
        </div>

        {/* Venue Telemetry Card */}
        <HoloCard className="p-8 sm:p-12 overflow-hidden" glowColor="cyan">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Col: Details */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/30 px-3 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5" />
                <span>PRIMARY FACILITY</span>
              </div>

              <h3 className="font-tech text-2xl sm:text-4xl font-black text-slate-100 uppercase tracking-wide">
                {EVENT_CONFIG.venue.name}
              </h3>

              <div className="space-y-3 font-mono text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-cyber-cyan shrink-0" />
                  <span>{EVENT_CONFIG.eventDateDisplay}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-cyber-cyan shrink-0" />
                  <span>Report Time: {EVENT_CONFIG.reportingTime} • Event Concludes: {EVENT_CONFIG.concludeTime}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyber-cyan shrink-0" />
                  <span>Jerusalem College of Engineering, Velachery Main Road, Chennai</span>
                </div>
              </div>

              <div className="pt-2">
                <GlowingButton
                  variant="primary"
                  size="md"
                  href={EVENT_CONFIG.venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<Navigation className="w-4 h-4" />}
                >
                  GET DIRECTIONS
                </GlowingButton>
              </div>
            </div>

            {/* Right Col: Interactive Embedded Google Map */}
            <div className="relative rounded-2xl border border-cyber-cyan/40 bg-space-950 p-1.5 sm:p-2 shadow-neon-cyan/30 overflow-hidden group">
              <div className="flex items-center justify-between px-3 py-2 bg-space-900/90 border-b border-space-800 rounded-t-xl text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
                  <span className="text-cyber-cyan font-bold tracking-wider">LIVE SATELLITE GPS FEED</span>
                </div>
                <a
                  href={EVENT_CONFIG.venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-cyber-cyan transition-colors"
                >
                  <span>FULLSCREEN</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative w-full h-[280px] sm:h-[320px] rounded-b-xl overflow-hidden bg-space-900">
                <iframe
                  title="Jerusalem College of Engineering Location Map"
                  src="https://maps.google.com/maps?q=Jerusalem%20College%20of%20Engineering,%20Velachery%20Main%20Road,%20Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </HoloCard>
      </div>
    </section>
  );
};
