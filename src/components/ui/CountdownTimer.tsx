import React, { useEffect, useState } from 'react';
import { calculateCountdown } from '../../utils/countdown';
import { CountdownTimeRemaining } from '../../types/event';
import { SciFiBadge } from './SciFiBadge';
import { Clock, Radio } from 'lucide-react';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownTimeRemaining>(calculateCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  const timeUnits = [
    { label: 'DAYS', value: formatNumber(timeLeft.days) },
    { label: 'HOURS', value: formatNumber(timeLeft.hours) },
    { label: 'MINUTES', value: formatNumber(timeLeft.minutes) },
    { label: 'SECONDS', value: formatNumber(timeLeft.seconds) },
  ];

  return (
    <div className="relative mx-auto max-w-2xl px-4 py-4">
      {/* Outer Telemetry Container */}
      <div className="relative rounded-2xl border border-cyber-cyan/30 bg-space-900/90 p-5 md:p-6 shadow-neon-cyan backdrop-blur-xl">
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-space-700/80 pb-3 mb-5">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyber-cyan animate-pulse" />
            <span className="font-mono text-xs md:text-sm font-semibold tracking-wider text-slate-300">
              MISSION TELEMETRY CLOCK
            </span>
          </div>
          <SciFiBadge
            variant={timeLeft.phase === 'live' ? 'emerald' : timeLeft.phase === 'kickoff' ? 'amber' : 'cyan'}
            pulse
          >
            {timeLeft.label}
          </SciFiBadge>
        </div>

        {timeLeft.phase === 'live' ? (
          <div className="py-6 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-emerald-500/50 bg-emerald-950/40 shadow-neon-emerald">
              <Radio className="w-6 h-6 text-emerald-400 animate-pulse" />
              <span className="font-tech text-xl md:text-2xl font-bold tracking-widest text-emerald-300">
                MISSION CURRENTLY IN PROGRESS
              </span>
            </div>
            <p className="mt-3 text-xs md:text-sm text-slate-400 font-mono">
              7-Hour Hackathon Sprint Live at Jerusalem College of Engineering
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className="group relative flex flex-col items-center justify-center rounded-xl border border-space-700 bg-space-950/80 p-3 sm:p-4 transition-all duration-300 hover:border-cyber-cyan/60 hover:shadow-neon-cyan"
              >
                {/* Corner detail */}
                <span className="absolute top-1 left-1.5 text-[8px] font-mono text-slate-600 select-none">
                  SYS
                </span>
                <span className="font-tech text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-cyber-cyan glow-text-cyan">
                  {unit.value}
                </span>
                <span className="mt-1 font-mono text-[9px] sm:text-xs font-semibold tracking-widest text-slate-400 group-hover:text-slate-200">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Microcopy */}
        <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-500">
          <span>TIMEZONE: IST (UTC+05:30)</span>
          <span className="hidden sm:inline">STATUS: SYNCHRONIZED</span>
        </div>
      </div>
    </div>
  );
};
