'use client';

import { useEffect, useRef } from 'react';

export default function GlobalParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let particles: Array<{
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      color: string;
      alpha: number;
      targetAlpha: number;
    }> = [];

    let ripples: Array<{
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
    }> = [];

    const mouse = { x: -1000, y: -1000, active: false };
    let lastMousePos = { x: -1000, y: -1000 };

    const colors = [
      'rgba(99, 102, 241, ',   // primary indigo
      'rgba(244, 63, 94, ',   // secondary rose
      'rgba(255, 255, 255, ',  // white
    ];

    function initParticles() {
      particles = [];
      const count = Math.min(Math.floor((width * height) / 15000), 100);

      for (let i = 0; i < count; i++) {
        const baseAlpha = Math.random() * 0.4 + 0.1;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 1,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: baseAlpha,
          targetAlpha: baseAlpha,
        });
      }
    }

    function createRipple(x: number, y: number) {
      ripples.push({
        x,
        y,
        radius: 0,
        maxRadius: 100 + Math.random() * 50,
        alpha: 0.8,
      });
    }

    function resize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    }

    let animationFrameId: number;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Draw Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 2;
        r.alpha -= 0.015;

        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(99, 102, 241, ${r.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Draw Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(99, 102, 241, 0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const moveDistance = Math.sqrt(
        Math.pow(e.clientX - lastMousePos.x, 2) + Math.pow(e.clientY - lastMousePos.y, 2)
      );

      if (moveDistance > 60) {
        createRipple(e.clientX, e.clientY);
        lastMousePos = { x: e.clientX, y: e.clientY };
      }
    };

    const handleClick = (e: MouseEvent) => {
      createRipple(e.clientX, e.clientY);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="globalCanvas" ref={canvasRef} />;
}
