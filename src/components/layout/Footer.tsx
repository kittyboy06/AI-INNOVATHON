import React from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { GlowingButton } from '../ui/GlowingButton';
import { Zap, MessageCircle, ExternalLink, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Mission', href: '#mission' },
    { label: 'Challenge', href: '#challenge' },
    { label: 'Rules', href: '#rules' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Prizes', href: '#prizes' },
    { label: 'Register', href: '#register' },
    { label: 'Venue', href: '#venue' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-space-800 bg-space-950/90 pt-16 pb-12 overflow-hidden">
      {/* Glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-space-800/80">
          {/* Col 1: Brand & Department */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded border border-cyber-cyan/40 bg-space-900 shadow-neon-cyan">
                <Zap className="w-4 h-4 text-cyber-cyan" />
              </div>
              <span className="font-tech text-lg font-black tracking-wider text-slate-100">
                AI-INNOVATHON <span className="text-cyber-cyan">2026</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              An Inter-College 7-Hour Hackathon organized by the{' '}
              <span className="text-slate-200 font-medium">{EVENT_CONFIG.department}</span> at{' '}
              <span className="text-slate-200 font-medium">{EVENT_CONFIG.institution}</span>.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 bg-space-900/60 border border-space-800 px-3 py-1.5 rounded-md">
              <MapPin className="w-3.5 h-3.5 text-jedi-blue" />
              <span>Jerusalem College of Engineering, Chennai</span>
            </div>

            {/* Organizing Chapters Logos Strip */}
            <div className="pt-2">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-2">
                COLLABORATING STUDENT CHAPTERS
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {EVENT_CONFIG.clubs.map((club) => (
                  <a
                    key={club.id}
                    href="#clubs"
                    className="w-9 h-9 rounded-lg bg-white/90 p-1 flex items-center justify-center border border-space-700 hover:border-jedi-blue transition-colors shadow-sm"
                    title={club.name}
                  >
                    <img
                      src={club.logo}
                      alt={club.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-cyber-cyan mb-4">
              TELEMETRY SITEMAP
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-mono">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyber-cyan transition-colors"
                  >
                    // {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Actions */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-cyber-cyan mb-4">
              ACTION GATEWAYS
            </h4>
            <GlowingButton
              variant="primary"
              size="sm"
              href="#register"
              fullWidth
            >
              REGISTER NOW (₹400)
            </GlowingButton>

            <GlowingButton
              variant="whatsapp"
              size="sm"
              href={EVENT_CONFIG.urls.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              icon={<MessageCircle className="w-4 h-4" />}
              fullWidth
            >
              JOIN WHATSAPP GROUP
            </GlowingButton>

            <a
              href={EVENT_CONFIG.urls.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 w-full text-xs font-mono text-slate-400 hover:text-cyber-cyan border border-space-800 hover:border-space-700 py-2 rounded-lg transition-colors"
            >
              <span>OPEN MAP DIRECTIONS</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 text-center md:text-left">
          <p>
            © 2026 AI-INNOVATHON. Department of Artificial Intelligence & Machine Learning, Jerusalem College of Engineering.
          </p>
          <div className="flex items-center gap-2 text-emerald-400/90 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>COMMUNICATION CHANNEL: WHATSAPP ACTIVE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
