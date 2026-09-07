import React from 'react';
import { clsx } from 'clsx';

interface HoloCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'violet' | 'amber' | 'emerald' | 'blue';
  hoverEffect?: boolean;
  cornerAccents?: boolean;
  scanline?: boolean;
}

export const HoloCard: React.FC<HoloCardProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
  hoverEffect = true,
  cornerAccents = true,
  scanline = false,
}) => {
  const borderColors = {
    cyan: 'border-cyber-cyan/30 group-hover:border-cyber-cyan/60 hover:shadow-neon-cyan',
    violet: 'border-cyber-violet/30 group-hover:border-cyber-violet/60 hover:shadow-neon-violet',
    amber: 'border-cyber-amber/30 group-hover:border-cyber-amber/60 hover:shadow-neon-amber',
    emerald: 'border-cyber-emerald/30 group-hover:border-cyber-emerald/60 hover:shadow-neon-emerald',
    blue: 'border-cyber-blue/30 group-hover:border-cyber-blue/60 hover:shadow-neon-cyan',
  };

  const accentColors = {
    cyan: 'bg-cyber-cyan',
    violet: 'bg-cyber-violet',
    amber: 'bg-cyber-amber',
    emerald: 'bg-cyber-emerald',
    blue: 'bg-cyber-blue',
  };

  return (
    <div
      className={clsx(
        'relative group rounded-xl border bg-space-900/80 backdrop-blur-md transition-all duration-300',
        borderColors[glowColor],
        hoverEffect && 'hover:-translate-y-1',
        scanline && 'holo-scanline',
        className
      )}
    >
      {/* Corner Telemetry Bracket Accents */}
      {cornerAccents && (
        <>
          <span
            className={clsx(
              'absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 rounded-tl-sm transition-colors duration-300',
              accentColors[glowColor].replace('bg-', 'border-')
            )}
          />
          <span
            className={clsx(
              'absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 rounded-tr-sm transition-colors duration-300',
              accentColors[glowColor].replace('bg-', 'border-')
            )}
          />
          <span
            className={clsx(
              'absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 rounded-bl-sm transition-colors duration-300',
              accentColors[glowColor].replace('bg-', 'border-')
            )}
          />
          <span
            className={clsx(
              'absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 rounded-br-sm transition-colors duration-300',
              accentColors[glowColor].replace('bg-', 'border-')
            )}
          />
        </>
      )}

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
