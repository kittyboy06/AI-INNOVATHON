import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, ShieldAlert, Zap } from 'lucide-react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { GlowingButton } from '../ui/GlowingButton';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'MISSION', href: '#mission' },
    { label: 'CHALLENGE', href: '#challenge' },
    { label: 'TIMELINE', href: '#timeline' },
    { label: 'RULES', href: '#rules' },
    { label: 'PRIZES', href: '#prizes' },
    { label: 'REGISTER', href: '#register' },
    { label: 'VENUE', href: '#venue' },
    { label: 'FAQ', href: '#faq' },
    { label: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple scrollspy
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-space-950/90 backdrop-blur-md border-b border-cyber-cyan/20 py-3 shadow-lg shadow-black/50'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand / Logo */}
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-lg border border-cyber-cyan/50 bg-space-900 shadow-neon-cyan group-hover:scale-105 transition-transform duration-300">
                <Zap className="w-5 h-5 text-cyber-cyan animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-tech text-base sm:text-lg font-black tracking-wider text-slate-100 group-hover:text-cyber-cyan transition-colors">
                  AI-INNOVATHON <span className="text-cyber-cyan">2026</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 hidden sm:block">
                  AIML // JERUSALEM ENG
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 bg-space-900/60 p-1.5 rounded-full border border-space-700/60 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-1 text-xs font-mono font-semibold tracking-wider rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40 shadow-[0_0_10px_rgba(0,242,254,0.3)]'
                        : 'text-slate-300 hover:text-white hover:bg-space-800/60'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Action CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={EVENT_CONFIG.urls.whatsappGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 px-3 py-1.5 rounded-md hover:bg-emerald-950/40 transition-colors"
                title="Join Official WhatsApp Announcements Group"
              >
                <span>WHATSAPP</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <GlowingButton
                variant="primary"
                size="sm"
                href="#register"
              >
                REGISTER NOW
              </GlowingButton>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="#register"
                className="px-3 py-1.5 text-xs font-bold uppercase rounded bg-cyber-cyan text-space-950 font-display"
              >
                REGISTER
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg border border-space-700 bg-space-900/80 text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan/50 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-space-950/95 backdrop-blur-xl pt-20 px-6 pb-8 overflow-y-auto flex flex-col justify-between border-b border-cyber-cyan/20 animate-fadeIn">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 pb-3 mb-2 border-b border-space-800 text-xs font-mono text-slate-400">
              <ShieldAlert className="w-4 h-4 text-cyber-cyan" />
              <span>COMMAND NAVIGATION TERMINAL</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="py-2.5 px-3 text-sm font-mono font-semibold tracking-wider text-slate-200 hover:text-cyber-cyan hover:bg-space-900 rounded-lg border-l-2 border-transparent hover:border-cyber-cyan transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-space-800 flex flex-col gap-3">
            <GlowingButton
              variant="primary"
              size="md"
              href="#register"
              onClick={closeMenu}
              fullWidth
            >
              REGISTER NOW (₹400)
            </GlowingButton>

            <GlowingButton
              variant="whatsapp"
              size="md"
              href={EVENT_CONFIG.urls.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
              icon={<ExternalLink className="w-4 h-4" />}
            >
              JOIN OFFICIAL WHATSAPP
            </GlowingButton>
          </div>
        </div>
      )}
    </>
  );
};
