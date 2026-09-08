import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  color: string;
}

interface BlasterBolt {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  color: string;
  alpha: number;
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

    // Star Wars Starfield & Hyperdrive depth
    const starColors = ['#ffffff', '#e0f2fe', '#bae6fd', '#38bdf8', '#c084fc', '#fda4af'];
    const starCount = Math.min(Math.floor((width * height) / 4000), 260);
    let stars: Star[] = [];

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: (Math.random() - 0.5) * width * 2,
          y: (Math.random() - 0.5) * height * 2,
          z: Math.random() * width,
          size: Math.random() * 1.5 + 0.5,
          baseAlpha: Math.random() * 0.7 + 0.3,
          alpha: 1,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
    };

    // Occasional Laser Blaster Bolts (Star Wars Red vs Blue space skirmishes!)
    let blasterBolts: BlasterBolt[] = [];
    const spawnBlasterBolt = () => {
      if (Math.random() > 0.02) return; // Rare, cinematic
      const isRed = Math.random() > 0.5;
      const startX = Math.random() * width;
      const startY = Math.random() * (height * 0.6);
      const angle = (Math.random() * 0.4 + 0.2) * (Math.random() > 0.5 ? 1 : -1);
      const speed = Math.random() * 8 + 12;

      blasterBolts.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed * 2,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 35 + 25,
        color: isRed ? '#ff003c' : '#00d2ff',
        alpha: 0.9,
      });
    };

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

      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Render 3D Starfield with slight forward drift (Sub-light cruise)
      const speed = prefersReducedMotion ? 0 : 0.8;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!prefersReducedMotion) {
          star.z -= speed * (dt * 60);
          if (star.z <= 0) {
            star.z = width;
            star.x = (Math.random() - 0.5) * width * 2;
            star.y = (Math.random() - 0.5) * height * 2;
          }
        }

        const k = 250 / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const starSize = Math.max(0.6, (1 - star.z / width) * star.size * 2);
          const alpha = Math.min(1, Math.max(0.1, (1 - star.z / width) * star.baseAlpha + Math.sin(time * 0.003 + i) * 0.15));

          ctx.beginPath();
          ctx.arc(px, py, starSize, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = alpha;
          if (starSize > 1.8) {
            ctx.shadowBlur = 8;
            ctx.shadowColor = star.color;
          } else {
            ctx.shadowBlur = 0;
          }
          ctx.fill();
        }
      }

      // Render & update Blaster Bolts
      if (!prefersReducedMotion) {
        spawnBlasterBolt();
        for (let i = blasterBolts.length - 1; i >= 0; i--) {
          const b = blasterBolts[i];
          b.x += b.vx * (dt * 60);
          b.y += b.vy * (dt * 60);
          b.alpha -= 0.015;

          if (b.alpha <= 0 || b.x < -100 || b.x > width + 100 || b.y > height + 100) {
            blasterBolts.splice(i, 1);
            continue;
          }

          ctx.beginPath();
          ctx.moveTo(b.x, b.y);
          ctx.lineTo(b.x - (b.vx * b.length) / 20, b.y - (b.vy * b.length) / 20);
          ctx.strokeStyle = b.color;
          ctx.lineWidth = 2.5;
          ctx.globalAlpha = b.alpha;
          ctx.shadowBlur = 12;
          ctx.shadowColor = b.color;
          ctx.stroke();
        }
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
      {/* Deep Space radial vignette */}
      <div className="absolute inset-0 bg-radial-vignette opacity-95" />

      {/* Vibrant Galactic Nebula Clouds (User Color Reference: Deep Blue, Electric Purple, Sith Crimson) */}
      <div className="absolute -top-32 left-10 w-[650px] h-[650px] bg-jedi-blue/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-force-nebula/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-[700px] h-[700px] bg-sith-red/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Canvas Layer for Starfield and Cinematic Blaster Bolts */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />

      {/* Subtle Galactic HUD Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
    </div>
  );
};
