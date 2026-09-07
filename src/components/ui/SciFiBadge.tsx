import React from 'react';
import { clsx } from 'clsx';

interface SciFiBadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'amber' | 'emerald' | 'violet' | 'rose' | 'slate';
  size?: 'xs' | 'sm' | 'md';
  pulse?: boolean;
  className?: string;
}

export const SciFiBadge: React.FC<SciFiBadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'sm',
  pulse = false,
  className = '',
}) => {
  const variantStyles = {
    cyan: 'bg-cyber-cyan/10 border-cyber-cyan/40 text-cyber-cyan shadow-[0_0_10px_rgba(0,242,254,0.15)]',
    amber: 'bg-cyber-amber/10 border-cyber-amber/40 text-cyber-amber shadow-[0_0_10px_rgba(245,158,11,0.15)]',
    emerald: 'bg-cyber-emerald/10 border-cyber-emerald/40 text-cyber-emerald shadow-[0_0_10px_rgba(16,185,129,0.15)]',
    violet: 'bg-cyber-violet/10 border-cyber-violet/40 text-cyber-violet shadow-[0_0_10px_rgba(139,92,246,0.15)]',
    rose: 'bg-rose-500/10 border-rose-500/40 text-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.15)]',
    slate: 'bg-slate-800/40 border-slate-700/60 text-slate-300',
  };

  const dotStyles = {
    cyan: 'bg-cyber-cyan',
    amber: 'bg-cyber-amber',
    emerald: 'bg-cyber-emerald',
    violet: 'bg-cyber-violet',
    rose: 'bg-rose-500',
    slate: 'bg-slate-400',
  };

  const sizeStyles = {
    xs: 'text-[10px] px-2 py-0.5 tracking-wider',
    sm: 'text-xs px-2.5 py-1 tracking-widest',
    md: 'text-sm px-3.5 py-1.5 tracking-widest',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full border font-mono font-semibold uppercase backdrop-blur-sm',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span
            className={clsx(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              dotStyles[variant]
            )}
          />
          <span className={clsx('relative inline-flex rounded-full h-1.5 w-1.5', dotStyles[variant])} />
        </span>
      )}
      {children}
    </span>
  );
};
