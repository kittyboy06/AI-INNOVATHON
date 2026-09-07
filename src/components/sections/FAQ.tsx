import React, { useState } from 'react';
import { EVENT_CONFIG } from '../../config/eventConfig';
import { SciFiBadge } from '../ui/SciFiBadge';
import { ChevronDown, Search, Layers, Minimize2, Maximize2 } from 'lucide-react';

export const FAQ: React.FC = () => {
  // All collapsed by default
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredFaqs = EVENT_CONFIG.faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const expandAll = () => {
    setOpenIds(new Set(filteredFaqs.map((f) => f.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-space-800/80 bg-space-950/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SciFiBadge variant="cyan" className="mb-3">
            [ KNOWLEDGE BASE // QUERY ARCHIVE ]
          </SciFiBadge>
          <h2 className="font-tech text-3xl sm:text-5xl font-extrabold tracking-wider text-slate-100 uppercase">
            FREQUENTLY ASKED <span className="text-cyber-cyan glow-text-cyan">QUESTIONS</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyber-cyan to-cyber-blue mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-400 font-mono">
            AUTHORITATIVE DIRECTIVES & PARTICIPANT CLARIFICATIONS
          </p>
        </div>

        {/* Search Bar & Quick Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Search className="w-4 h-4" />
            </div>
            <input
              id="faq-search"
              name="faq-search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter questions..."
              aria-label="Filter directives, eligibility, and rules"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-space-700 bg-space-900/80 text-sm text-slate-100 placeholder-slate-500 font-mono focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center text-xs font-mono text-slate-400">
            <button
              type="button"
              onClick={expandAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-space-800 bg-space-900/80 hover:border-cyber-cyan/40 hover:text-cyber-cyan transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>EXPAND ALL</span>
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-space-800 bg-space-900/80 hover:border-cyber-cyan/40 hover:text-cyber-cyan transition-colors"
            >
              <Minimize2 className="w-3.5 h-3.5" />
              <span>COLLAPSE ALL</span>
            </button>
          </div>
        </div>

        {/* Collapsible FAQ Grid (2 Columns) */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 rounded-2xl border border-space-800 bg-space-900/40 text-slate-400 font-mono text-sm">
            No matching directives located for "{searchTerm}".
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIds.has(faq.id);

              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-cyber-cyan/50 bg-space-900/90 shadow-neon-cyan/20 ring-1 ring-cyber-cyan/20'
                      : 'border-space-800 bg-space-900/60 hover:border-space-700 hover:bg-space-900/80'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-5 py-4 flex items-start justify-between gap-3 text-left transition-colors cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs text-cyber-cyan/70 shrink-0 mt-0.5 font-bold">
                        Q{idx < 9 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <span className="font-display text-base font-bold text-slate-100 group-hover:text-cyber-cyan transition-colors leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`p-1 rounded-md shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-cyber-cyan/20 text-cyber-cyan rotate-180'
                          : 'bg-space-800/80 text-slate-400 group-hover:text-cyber-cyan'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed border-t border-space-800/80 animate-fadeIn">
                      <div className="mt-2 pl-3.5 border-l-2 border-cyber-cyan/60 text-slate-300">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
