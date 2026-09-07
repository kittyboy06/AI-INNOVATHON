import React from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { GlowingButton } from '../ui/GlowingButton';
import { SciFiBadge } from '../ui/SciFiBadge';
import { ExternalLink, MessageCircle, CreditCard, ShieldCheck, AlertCircle, ArrowUpRight } from 'lucide-react';

export const RegistrationCTA: React.FC = () => {
  return (
    <section id="register" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Main Registration Command Center Card */}
        <div className="relative rounded-3xl border-2 border-cyber-cyan/40 bg-gradient-to-b from-space-900 via-space-900/90 to-space-950 p-8 sm:p-12 shadow-neon-cyan backdrop-blur-xl overflow-hidden">
          {/* Cosmic background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyber-cyan/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <SciFiBadge variant="cyan" pulse className="mb-3">
              [ REGISTRATION GATEWAY ONLINE ]
            </SciFiBadge>
            <h2 className="font-tech text-3xl sm:text-5xl font-black tracking-wider text-slate-100 uppercase">
              READY TO ACCEPT THE <span className="text-cyber-cyan glow-text-cyan">CHALLENGE?</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 font-mono">
              SECURE YOUR TEAM'S ROSTER BEFORE LAUNCH
            </p>
          </div>

          {/* Pricing & Deadline Badge */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8">
            <div className="flex items-center gap-3 p-4 rounded-xl border border-space-700 bg-space-950/70">
              <CreditCard className="w-6 h-6 text-cyber-cyan" />
              <div>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                  TEAM ENTRY FEE
                </span>
                <p className="font-tech text-2xl font-black text-slate-100">
                  {EVENT_CONFIG.registrationFee}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl border border-space-700 bg-space-950/70">
              <ShieldCheck className="w-6 h-6 text-cyber-amber" />
              <div>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                  REGISTRATION DEADLINE
                </span>
                <p className="font-tech text-lg sm:text-xl font-bold text-amber-300">
                  {EVENT_CONFIG.regClosingDateDisplay}
                </p>
              </div>
            </div>
          </div>

          {/* Primary Registration Action */}
          <div className="max-w-md mx-auto text-center space-y-3 mb-10">
            <GlowingButton
              variant="primary"
              size="lg"
              href={EVENT_CONFIG.urls.googleForm}
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
              icon={<ArrowUpRight className="w-5 h-5" />}
            >
              REGISTER VIA GOOGLE FORM
            </GlowingButton>
            <p className="text-xs font-mono text-slate-400">
              * Payment is completed via UPI directly inside the registration Google Form.
            </p>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-space-700/80" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-space-900 px-4 font-mono text-slate-400">
                MANDATORY COMMUNICATION RELAY
              </span>
            </div>
          </div>

          {/* WhatsApp Group Highlight Card */}
          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/20 p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/50 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>OFFICIAL COMMUNITY</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-100">
                  Join The Official WhatsApp Group
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                  <strong>{EVENT_CONFIG.whatsappNotice}</strong>
                </p>
              </div>

              <div className="shrink-0 w-full sm:w-auto">
                <GlowingButton
                  variant="whatsapp"
                  size="md"
                  href={EVENT_CONFIG.urls.whatsappGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                  icon={<MessageCircle className="w-5 h-5" />}
                >
                  JOIN WHATSAPP GROUP
                </GlowingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
