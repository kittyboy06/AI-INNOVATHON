import React from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { HoloCard } from '../ui/HoloCard';
import { SciFiBadge } from '../ui/SciFiBadge';
import { Phone, UserCheck, GraduationCap } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SciFiBadge variant="cyan" className="mb-3">
            [ DIRECT COMMS CHANNEL ]
          </SciFiBadge>
          <h2 className="font-tech text-3xl sm:text-5xl font-extrabold tracking-wider text-slate-100 uppercase">
            CONTACT <span className="text-cyber-cyan glow-text-cyan">COORDINATORS</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyber-cyan to-cyber-blue mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-mono">
            STUDENT & FACULTY MISSION CONTROLLERS // CLICK TO CALL
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Student Coordinators */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-space-800 text-xs font-mono text-cyber-cyan">
              <UserCheck className="w-4 h-4" />
              <span className="uppercase font-bold tracking-widest">STUDENT COORDINATORS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EVENT_CONFIG.coordinators.students.map((coord) => (
                <HoloCard key={coord.name} className="p-5" glowColor="cyan">
                  <span className="font-mono text-[10px] text-cyber-cyan tracking-widest uppercase">
                    STUDENT LEAD
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-100 mt-1">
                    {coord.name}
                  </h3>
                  <a
                    href={`tel:${coord.phone.replace(/\s+/g, '')}`}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyber-cyan bg-space-950/80 border border-space-700/80 px-3 py-2 rounded-lg transition-colors w-full justify-center group"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyber-cyan group-hover:animate-pulse" />
                    <span>{coord.phone}</span>
                  </a>
                </HoloCard>
              ))}
            </div>
          </div>

          {/* Faculty Coordinators */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-space-800 text-xs font-mono text-cyber-violet">
              <GraduationCap className="w-4 h-4" />
              <span className="uppercase font-bold tracking-widest">FACULTY COORDINATORS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EVENT_CONFIG.coordinators.faculty.map((coord) => (
                <HoloCard key={coord.name} className="p-5" glowColor="violet">
                  <span className="font-mono text-[10px] text-cyber-violet tracking-widest uppercase">
                    FACULTY LEAD
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-100 mt-1">
                    {coord.name}
                  </h3>
                  <a
                    href={`tel:${coord.phone.replace(/\s+/g, '')}`}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyber-violet bg-space-950/80 border border-space-700/80 px-3 py-2 rounded-lg transition-colors w-full justify-center group"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyber-violet group-hover:animate-pulse" />
                    <span>{coord.phone}</span>
                  </a>
                </HoloCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
