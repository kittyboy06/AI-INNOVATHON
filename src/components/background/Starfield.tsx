import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  speed: number;
  twinkleSpeed: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
}

export const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Star configuration
    const starColors = ['#ffffff', '#e0f7fa', '#80deea', '#b388ff', '#00f2fe'];
    const starCount = Math.min(Math.floor((width * height) / 4500), 220);
    let stars: Star[] = [];

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        const size = Math.random() < 0.8 ? Math.random() * 1.5 + 0.5 : Math.random() * 2.5 + 1.5;
        const color = starColors[Math.floor(Math.random() * starColors.length)];
        const baseAlpha = Math.random() * 0.7 + 0.3;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size,
          baseAlpha,
          alpha: baseAlpha,
          speed: Math.random() * 0.2 + 0.05,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          color,
        });
      }
    };

    // Cosmic dust particles
    const particleCount = 25;
    const dustColors = ['rgba(0, 242, 254, ', 'rgba(139, 92, 246, ', 'rgba(79, 172, 254, '];
    let particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.1,
        color: dustColors[Math.floor(Math.random() * dustColors.length)],
      });
    }

    initStars();

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !prefersReducedMotion) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let lastTime = performance.now();

    const render = (time: number) => {
      if (!isVisible) return;

      const dt = (time - lastTime) / 1000;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Render stars
      for (const star of stars) {
        if (!prefersReducedMotion) {
          star.y -= star.speed * (dt * 60);
          if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
          }
          star.alpha = star.baseAlpha + Math.sin(time * star.twinkleSpeed) * 0.25;
          star.alpha = Math.max(0.1, Math.min(1, star.alpha));
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.shadowBlur = star.size > 2 ? 8 : 0;
        ctx.shadowColor = star.color;
        ctx.fill();
      }

      // Render cosmic dust particles
      for (const p of particles) {
        if (!prefersReducedMotion) {
          p.x += p.vx * (dt * 60);
          p.y += p.vy * (dt * 60);

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `${p.color}0.8)`;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render(performance.now());
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep space radial gradient glow */}
      <div className="absolute inset-0 bg-radial-vignette opacity-90" />
      
      {/* Subtle cosmic energy nebula accents */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-cyber-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-cyber-violet/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-40 left-10 w-[550px] h-[550px] bg-cyber-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Starfield Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />

      {/* Cyber mesh grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
    </div>
  );
};
