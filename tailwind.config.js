/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#030014',
          900: '#06071b',
          850: '#0a0d2a',
          800: '#0f1438',
          750: '#141c4d',
          700: '#1b2666',
          600: '#273891',
        },
        // Star Wars Lightsaber & Force Palette
        jedi: {
          blue: '#00d2ff',
          cyan: '#00f2fe',
          electric: '#38bdf8',
          glow: '#00a6ff',
          dark: '#1e3a8a',
        },
        sith: {
          red: '#ff003c',
          crimson: '#ef4444',
          scarlet: '#dc2626',
          glow: '#ff1744',
          dark: '#7f1d1d',
        },
        force: {
          purple: '#9333ea',
          nebula: '#7928ca',
          magenta: '#d946ef',
          violet: '#8b5cf6',
        },
        imperial: {
          gold: '#f59e0b',
          amber: '#fbbf24',
        },
        // Compatibility Aliases
        cyber: {
          cyan: '#00d2ff',
          blue: '#38bdf8',
          neon: '#00ffff',
          violet: '#8b5cf6',
          purple: '#9333ea',
          pink: '#ec4899',
          amber: '#f59e0b',
          emerald: '#10b981',
        },
      },
      fontFamily: {
        jedi: ['Audiowide', 'sans-serif'],
        tech: ['Orbitron', 'monospace'],
        display: ['Rajdhani', 'Orbitron', 'sans-serif'],
        sans: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
        'scan': 'scan 6s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'saber-hum-blue': 'saberHumBlue 2.5s ease-in-out infinite alternate',
        'saber-hum-red': 'saberHumRed 2.5s ease-in-out infinite alternate',
        'clash-spark': 'clashSpark 0.6s ease-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(0, 210, 255, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(0, 210, 255, 0.7), 0 0 70px rgba(56, 189, 248, 0.4)' },
        },
        saberHumBlue: {
          '0%': { filter: 'drop-shadow(0 0 8px #00d2ff) drop-shadow(0 0 20px #0088ff)' },
          '100%': { filter: 'drop-shadow(0 0 16px #00f2fe) drop-shadow(0 0 35px #00d2ff)' },
        },
        saberHumRed: {
          '0%': { filter: 'drop-shadow(0 0 8px #ff003c) drop-shadow(0 0 20px #dc2626)' },
          '100%': { filter: 'drop-shadow(0 0 16px #ff1744) drop-shadow(0 0 35px #ff003c)' },
        },
        clashSpark: {
          '0%': { transform: 'scale(0.95)', opacity: '0.85' },
          '100%': { transform: 'scale(1.08)', opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'cyber-grid': "radial-gradient(circle, rgba(0, 210, 255, 0.08) 1px, transparent 1px)",
        'radial-vignette': "radial-gradient(circle at 50% 30%, rgba(121, 40, 202, 0.18) 0%, rgba(3, 0, 20, 0.95) 75%)",
        'saber-blue-gradient': "linear-gradient(180deg, #ffffff 0%, #a5f3fc 20%, #00d2ff 60%, #0284c7 100%)",
        'saber-red-gradient': "linear-gradient(180deg, #ffffff 0%, #fecdd3 20%, #ff003c 60%, #b91c1c 100%)",
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 210, 255, 0.45)',
        'neon-cyan-lg': '0 0 35px rgba(0, 210, 255, 0.65), 0 0 70px rgba(0, 210, 255, 0.25)',
        'neon-violet': '0 0 20px rgba(121, 40, 202, 0.45)',
        'neon-amber': '0 0 20px rgba(245, 158, 11, 0.45)',
        'neon-emerald': '0 0 20px rgba(16, 185, 129, 0.45)',
        'saber-blue': '0 0 10px #ffffff, 0 0 20px #00d2ff, 0 0 40px #0088ff, 0 0 70px #0055ff',
        'saber-red': '0 0 10px #ffffff, 0 0 20px #ff003c, 0 0 40px #dc2626, 0 0 70px #990000',
        'saber-clash': '0 0 30px #ffffff, 0 0 60px #c084fc, 0 0 90px #00d2ff, 0 0 120px #ff003c',
        'holo-inner': 'inset 0 0 25px rgba(0, 210, 255, 0.12)',
      },
    },
  },
  plugins: [],
}
