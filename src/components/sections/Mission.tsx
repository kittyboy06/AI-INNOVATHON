import React from 'react';
import { HoloCard } from '../ui/HoloCard';
import { SciFiBadge } from '../ui/SciFiBadge';
import { Cpu, Target, Rocket, Presentation, Network, Code2, Zap } from 'lucide-react';

export const Mission: React.FC = () => {
  const pillars = [
    {
      icon: <Cpu className="w-5 h-5 text-sith-red" />,
      title: 'Hardware & AIoT Engineering',
      description: 'PS revealed 2 days early. Solder, wire, and deploy edge AI models on microcontrollers, sensors, and embedded silicon.',
    },
    {
      icon: <Code2 className="w-5 h-5 text-jedi-blue" />,
      title: 'Software & Neural Systems',
      description: 'PS revealed on the spot at 9:00 AM. Zero pre-built code allowed. Construct agentic LLM workflows and web/mobile apps.',
    },
    {
      icon: <Target className="w-5 h-5 text-force-magenta" />,
      title: 'Agile 8-Hour Execution',
      description: 'Transform theoretical algorithms into deployable hardware or software prototypes during the intense on-campus sprint on 18/09.',
    },
    {
      icon: <Network className="w-5 h-5 text-emerald-400" />,
      title: 'Inter-College Synergy',
      description: 'Break institutional silos. Collaborate across departments and colleges in teams of 2 to 4 innovators.',
    },
    {
      icon: <Zap className="w-5 h-5 text-imperial-amber" />,
      title: 'Modern Tooling & AI Assistance',
      description: 'Freely leverage foundation models, GitHub Copilot, cloud inference APIs, open-source packages, and public datasets.',
    },
    {
      icon: <Presentation className="w-5 h-5 text-purple-400" />,
      title: 'Live Demos & Jury Pitching',
      description: 'Present functioning hardware prototypes and software slide decks before distinguished faculty and industry evaluators.',
    },
  ];

  return (
    <section id="mission" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SciFiBadge variant="cyan" className="mb-3">
            [ DIRECTIVE 01 // OVERVIEW ]
          </SciFiBadge>
          <h2 className="font-tech text-3xl sm:text-5xl font-extrabold tracking-wider text-slate-100 uppercase">
            THE <span className="text-jedi-blue glow-text-blue">GALACTIC</span> <span className="text-sith-red glow-text-red">MISSION</span>
          </h2>
          <div className="mt-4 h-1 w-28 bg-gradient-to-r from-jedi-blue via-force-purple to-sith-red mx-auto rounded-full" />
          <p className="mt-6 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            AI-INNOVATHON 2026 is an inter-college arena uniting Hardware innovators and Software architects. On 18 September 2026, squads deploy to Jerusalem College of Engineering to engineer cutting-edge AI prototypes under intense 8-hour conditions.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <HoloCard
              key={pillar.title}
              className="p-6 flex flex-col justify-between"
              glowColor={idx === 0 ? 'amber' : idx === 1 ? 'cyan' : idx % 2 === 0 ? 'blue' : 'violet'}
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-space-850 border border-space-700 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-100 tracking-wide">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-space-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>SECTOR // 0{idx + 1}</span>
                <span className={idx === 0 ? 'text-sith-red/80' : idx === 1 ? 'text-jedi-blue/80' : 'text-slate-400'}>
                  {idx === 0 ? 'HARDWARE' : idx === 1 ? 'SOFTWARE' : 'OPERATIONAL'}
                </span>
              </div>
            </HoloCard>
          ))}
        </div>
      </div>
    </section>
  );
};
