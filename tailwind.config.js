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
          950: '#02040a',
          900: '#050816',
          850: '#080d22',
          800: '#0c1433',
          750: '#111b42',
          700: '#172354',
          600: '#233373',
        },
        cyber: {
          cyan: '#00f2fe',
          blue: '#4facfe',
          neon: '#00ffff',
          violet: '#8b5cf6',
          purple: '#a855f7',
          pink: '#ec4899',
          amber: '#f59e0b',
          emerald: '#10b981',
        },
      },
      fontFamily: {
        display: ['Rajdhani', 'Orbitron', 'sans-serif'],
        tech: ['Orbitron', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
        'scan': 'scan 6s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(0, 242, 254, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 242, 254, 0.6), 0 0 60px rgba(79, 172, 254, 0.3)' },
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
        'cyber-grid': "radial-gradient(circle, rgba(0, 242, 254, 0.08) 1px, transparent 1px)",
        'radial-vignette': "radial-gradient(circle at 50% 30%, rgba(13, 21, 54, 0.5) 0%, rgba(2, 4, 10, 0.95) 75%)",
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 242, 254, 0.4)',
        'neon-cyan-lg': '0 0 35px rgba(0, 242, 254, 0.6), 0 0 70px rgba(0, 242, 254, 0.2)',
        'neon-violet': '0 0 20px rgba(139, 92, 246, 0.4)',
        'neon-amber': '0 0 20px rgba(245, 158, 11, 0.4)',
        'neon-emerald': '0 0 20px rgba(16, 185, 129, 0.4)',
        'holo-inner': 'inset 0 0 25px rgba(0, 242, 254, 0.1)',
      },
    },
  },
  plugins: [],
}
