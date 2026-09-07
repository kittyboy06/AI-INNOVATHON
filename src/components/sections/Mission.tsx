import React from 'react';
import { HoloCard } from '../ui/HoloCard';
import { SciFiBadge } from '../ui/SciFiBadge';
import { Cpu, Target, Rocket, Presentation, Network, Code } from 'lucide-react';

export const Mission: React.FC = () => {
  const pillars = [
    {
      icon: <Cpu className="w-5 h-5 text-cyber-cyan" />,
      title: 'Artificial Intelligence',
      description: 'Harness LLMs, neural networks, computer vision, and predictive models to solve real-world bottlenecks.',
    },
    {
      icon: <Target className="w-5 h-5 text-cyber-blue" />,
      title: 'Real-Time Reaction',
      description: 'Zero pre-built code allowed. Unpack an unknown problem statement on the spot and architect with precision.',
    },
    {
      icon: <Rocket className="w-5 h-5 text-cyber-violet" />,
      title: 'Rapid Prototyping',
      description: 'Transform theoretical algorithms into functional software prototypes during the intensive 8-hour timeline.',
    },
    {
      icon: <Network className="w-5 h-5 text-emerald-400" />,
      title: 'Inter-College Synergy',
      description: 'Break institutional silos. Collaborate across departments and colleges in teams of 2 to 4 innovators.',
    },
    {
      icon: <Code className="w-5 h-5 text-cyan-300" />,
      title: 'Modern Tooling',
      description: 'Leverage cutting-edge developer tools, AI coding assistants, public datasets, and external APIs.',
    },
    {
      icon: <Presentation className="w-5 h-5 text-yellow-400" />,
      title: 'Impactful Pitching',
      description: 'Communicate architectural depth and user value through a structured PPT and optional prototype demo.',
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
            THE <span className="text-cyber-cyan glow-text-cyan">MISSION</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyber-cyan to-cyber-violet mx-auto rounded-full" />
          <p className="mt-6 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            AI-INNOVATHON 2026 is an inter-college arena designed to test agility, technical prowess, and innovative problem-solving. Within an 8-hour window, teams mobilize to engineer an AI-powered solution to a surprise real-world challenge.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <HoloCard
              key={pillar.title}
              className="p-6 flex flex-col justify-between"
              glowColor={idx % 2 === 0 ? 'cyan' : 'violet'}
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-space-850 border border-space-700 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-slate-100 tracking-wide">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-space-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>PHASE // 0{idx + 1}</span>
                <span className="text-cyber-cyan/70">VERIFIED</span>
              </div>
            </HoloCard>
          ))}
        </div>
      </div>
    </section>
  );
};
