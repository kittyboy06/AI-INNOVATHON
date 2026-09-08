import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Volume2, VolumeX, Sparkles, Shield, Cpu, Code2 } from 'lucide-react';

interface LightsaberDuelProps {
  onSelectTrack?: (track: 'software' | 'hardware' | 'all') => void;
  selectedTrack?: 'software' | 'hardware' | 'all';
}

export const LightsaberDuel: React.FC<LightsaberDuelProps> = ({
  onSelectTrack,
  selectedTrack = 'all'
}) => {
  const [blueIgnited, setBlueIgnited] = useState(true);
  const [redIgnited, setRedIgnited] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isClashing, setIsClashing] = useState(true);

  // Web Audio Context reference for synthesized lightsaber hum
  const audioCtxRef = useRef<AudioContext | null>(null);
  const humOscRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Initialize Web Audio synthesizer on user toggle
  const toggleAudio = () => {
    if (!audioEnabled) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        // Create low hum oscillator
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(60, ctx.currentTime); // 60Hz hum

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(160, ctx.currentTime);

        gain.gain.setValueAtTime(0.04, ctx.currentTime); // Very gentle ambient volume

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        humOscRef.current = osc;
        gainNodeRef.current = gain;
        setAudioEnabled(true);
      } catch {
        // AudioContext not allowed or disabled by policy
        setAudioEnabled(false);
      }
    } else {
      if (humOscRef.current) {
        try {
          humOscRef.current.stop();
          humOscRef.current.disconnect();
        } catch {}
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
      humOscRef.current = null;
      gainNodeRef.current = null;
      setAudioEnabled(false);
    }
  };

  useEffect(() => {
    return () => {
      if (humOscRef.current) {
        try {
          humOscRef.current.stop();
        } catch {}
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  // Trigger clash effect periodically or on interaction
  const triggerClash = () => {
    setIsClashing(false);
    setTimeout(() => setIsClashing(true), 50);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-8 px-4">
      {/* HUD Header Bar */}
      <div className="flex items-center justify-between gap-3 mb-4 pb-2 border-b border-space-800 text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-force-magenta animate-pulse" />
          <span className="tracking-widest uppercase text-[11px] hidden sm:inline">
            GALACTIC FORCE MATRIX // RED VS BLUE
          </span>
          <span className="tracking-widest uppercase text-[11px] sm:hidden">
            FORCE MATRIX
          </span>
        </div>

        {/* Audio Toggle & Track Quick Filters */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleAudio}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-mono transition-all ${
              audioEnabled
                ? 'border-jedi-blue/80 bg-jedi-blue/20 text-jedi-blue shadow-[0_0_12px_rgba(0,210,255,0.4)]'
                : 'border-space-700 bg-space-900/60 text-slate-400 hover:text-slate-200'
            }`}
            title={audioEnabled ? "Mute Saber Hum" : "Enable Ambient Saber Sound"}
          >
            {audioEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>{audioEnabled ? "SABER HUM ON" : "SABER SFX"}</span>
          </button>

          <div className="hidden md:flex items-center gap-1 bg-space-900/80 p-0.5 rounded-lg border border-space-700">
            <button
              onClick={() => onSelectTrack?.('software')}
              className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
                selectedTrack === 'software'
                  ? 'bg-jedi-blue text-space-950 shadow-[0_0_10px_rgba(0,210,255,0.6)]'
                  : 'text-slate-400 hover:text-jedi-blue'
              }`}
            >
              BLUE (SOFTWARE)
            </button>
            <button
              onClick={() => onSelectTrack?.('all')}
              className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
                selectedTrack === 'all'
                  ? 'bg-force-purple text-white shadow-[0_0_10px_rgba(147,51,234,0.6)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              DUAL SPRINT
            </button>
            <button
              onClick={() => onSelectTrack?.('hardware')}
              className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${
                selectedTrack === 'hardware'
                  ? 'bg-sith-red text-white shadow-[0_0_10px_rgba(255,0,60,0.6)]'
                  : 'text-slate-400 hover:text-sith-red'
              }`}
            >
              RED (HARDWARE)
            </button>
          </div>
        </div>
      </div>

      {/* Main Lightsaber Arena Container */}
      <div className="relative rounded-2xl border border-space-800 bg-space-900/70 p-6 sm:p-8 backdrop-blur-xl overflow-hidden shadow-2xl">
        {/* Subtle background space flare */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-jedi-blue/10 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-sith-red/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Dual Lightsabers Clash Display */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 py-4">
          {/* Left: Blue Jedi Lightsaber (Software Track) */}
          <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-jedi-blue shadow-[0_0_8px_#00d2ff]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-jedi-blue">
                BLUE SQUADRON // SOFTWARE TRACK
              </span>
            </div>

            <h4 className="font-tech text-xl sm:text-2xl font-black text-slate-100 uppercase">
              THE LIGHT SIDE <span className="text-jedi-blue glow-text-blue">AI SPRINT</span>
            </h4>

            <p className="mt-1 text-xs text-slate-400 font-sans max-w-xs">
              Revealed on the spot at 9:00 AM on 18/09. Zero pre-built code allowed. Spontaneous algorithmic innovation.
            </p>

            {/* Blue Lightsaber Blade Graphic */}
            <div className="mt-5 w-full flex items-center gap-2">
              {/* Hilt */}
              <button
                type="button"
                onClick={() => {
                  setBlueIgnited(!blueIgnited);
                  triggerClash();
                }}
                className="group relative px-2.5 py-1.5 rounded bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 border border-slate-500 shadow-md hover:border-jedi-blue transition-all cursor-pointer shrink-0"
                title="Click to Ignite/Retract Blue Blade"
              >
                <div className="w-8 sm:w-12 h-5 flex flex-col justify-between py-0.5">
                  <div className="h-[2px] w-full bg-slate-400" />
                  <div className="h-[2px] w-3/4 bg-jedi-blue shadow-[0_0_4px_#00d2ff]" />
                  <div className="h-[2px] w-full bg-slate-400" />
                </div>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {blueIgnited ? "RETRACT" : "IGNITE"}
                </span>
              </button>

              {/* Plasma Blade */}
              <div className="flex-1 relative h-3.5 flex items-center">
                <AnimatePresence>
                  {blueIgnited && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      style={{ originX: 0 }}
                      className="w-full h-full rounded-r-full lightsaber-blade-blue animate-saber-hum-blue"
                    />
                  )}
                </AnimatePresence>
                {!blueIgnited && (
                  <div className="w-full h-[1px] bg-space-700 border-dashed" />
                )}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 text-[11px] font-mono text-jedi-blue/90">
              <span className="flex items-center gap-1">
                <Code2 className="w-3.5 h-3.5" />
                <span>PS: 18/09 (ON THE SPOT)</span>
              </span>
            </div>
          </div>

          {/* Center: Clash Node & Energy Orb */}
          <div className="relative my-2 md:my-0 flex flex-col items-center justify-center shrink-0">
            <button
              type="button"
              onClick={triggerClash}
              className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-space-950 border-2 border-force-magenta/80 flex items-center justify-center shadow-saber-clash group hover:scale-110 transition-transform cursor-pointer"
              title="Click to Clash Lightsabers"
            >
              <Zap className="w-8 h-8 text-white animate-pulse" />
              {/* Outer Energy Rings */}
              <div className="absolute -inset-2 rounded-full border border-jedi-blue/40 animate-ping pointer-events-none" />
              <div className="absolute -inset-4 rounded-full border border-sith-red/30 animate-pulse pointer-events-none" />
            </button>

            <span className="mt-2 font-tech text-[10px] font-black uppercase tracking-widest text-slate-300">
              {blueIgnited && redIgnited ? "BLADES CLASHED" : "SELECT YOUR SIDE"}
            </span>
          </div>

          {/* Right: Red Sith Lightsaber (Hardware Track) */}
          <div className="flex-1 w-full flex flex-col items-center md:items-end text-center md:text-right">
            <div className="flex items-center gap-2 mb-2 justify-end">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-sith-red">
                RED SQUADRON // HARDWARE TRACK
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-sith-red shadow-[0_0_8px_#ff003c]" />
            </div>

            <h4 className="font-tech text-xl sm:text-2xl font-black text-slate-100 uppercase">
              THE SITH FORCE <span className="text-sith-red glow-text-red">HARDWARE AIOT</span>
            </h4>

            <p className="mt-1 text-xs text-slate-400 font-sans max-w-xs">
              Revealed 2 days early on 16/09. 48 hours for component sourcing, circuit schematics, and sensor staging.
            </p>

            {/* Red Lightsaber Blade Graphic */}
            <div className="mt-5 w-full flex items-center gap-2 flex-row-reverse">
              {/* Hilt */}
              <button
                type="button"
                onClick={() => {
                  setRedIgnited(!redIgnited);
                  triggerClash();
                }}
                className="group relative px-2.5 py-1.5 rounded bg-gradient-to-l from-slate-700 via-slate-600 to-slate-800 border border-slate-500 shadow-md hover:border-sith-red transition-all cursor-pointer shrink-0"
                title="Click to Ignite/Retract Red Blade"
              >
                <div className="w-8 sm:w-12 h-5 flex flex-col justify-between py-0.5">
                  <div className="h-[2px] w-full bg-slate-400" />
                  <div className="h-[2px] w-3/4 bg-sith-red shadow-[0_0_4px_#ff003c] ml-auto" />
                  <div className="h-[2px] w-full bg-slate-400" />
                </div>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {redIgnited ? "RETRACT" : "IGNITE"}
                </span>
              </button>

              {/* Plasma Blade */}
              <div className="flex-1 relative h-3.5 flex items-center flex-row-reverse">
                <AnimatePresence>
                  {redIgnited && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      style={{ originX: 1 }}
                      className="w-full h-full rounded-l-full lightsaber-blade-red animate-saber-hum-red"
                    />
                  )}
                </AnimatePresence>
                {!redIgnited && (
                  <div className="w-full h-[1px] bg-space-700 border-dashed" />
                )}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 text-[11px] font-mono text-sith-red/90 justify-end">
              <span className="flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5" />
                <span>PS: 16/09 (48H EARLY REVEAL)</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Quick Switcher */}
        <div className="mt-6 pt-4 border-t border-space-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-imperial-amber" />
            <span className="text-slate-300">
              CHOOSE YOUR SQUADRON OR MASTER BOTH REALMS ON 18 SEPTEMBER 2026
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-jedi-blue font-bold">● JEDI: SOFTWARE</span>
            <span className="text-sith-red font-bold">● SITH: HARDWARE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
