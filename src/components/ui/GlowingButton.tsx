import React from 'react';
import { clsx } from 'clsx';

interface GlowingButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'whatsapp' | 'secondary' | 'ghost' | 'amber';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
}

export const GlowingButton: React.FC<GlowingButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  onClick,
  icon,
  fullWidth = false,
  className = '',
  disabled = false,
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs font-semibold tracking-wider',
    md: 'px-5 py-2.5 text-sm font-bold tracking-wider',
    lg: 'px-7 py-3.5 text-base font-bold tracking-widest',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyan-400 text-space-950 shadow-neon-cyan hover:shadow-neon-cyan-lg hover:brightness-110 border border-cyber-cyan/50',
    whatsapp:
      'bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 text-space-950 shadow-neon-emerald hover:brightness-110 border border-emerald-400/50',
    secondary:
      'bg-space-900/90 text-slate-100 hover:text-cyber-cyan border border-cyber-cyan/40 hover:border-cyber-cyan hover:shadow-neon-cyan hover:bg-space-850',
    amber:
      'bg-gradient-to-r from-amber-500 to-yellow-400 text-space-950 shadow-neon-amber hover:brightness-110 border border-amber-400/50',
    ghost:
      'bg-transparent text-slate-300 hover:text-cyber-cyan border border-transparent hover:border-cyber-cyan/30',
  };

  const baseClasses = clsx(
    'inline-flex items-center justify-center gap-2.5 rounded-lg transition-all duration-300 uppercase font-display select-none active:scale-[0.98]',
    sizeClasses[size],
    variantClasses[variant],
    fullWidth && 'w-full',
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  );

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        className={baseClasses}
        onClick={onClick}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} disabled={disabled} className={baseClasses}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
