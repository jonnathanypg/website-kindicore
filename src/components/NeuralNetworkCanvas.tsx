'use client';

import { useEffect, useRef, useState } from 'react';

const domainData = [
  {
    title: 'Salud',
    subtitle: 'Preventiva',
    label: 'Bienestar',
    color: '#6366f1',
    description: 'Monitoreo de curvas OMS, vacunas y alertas automáticas.',
    iconPath:
      'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  },
  {
    title: 'Nutrición',
    subtitle: 'Inteligente',
    label: 'Vitalidad',
    color: '#f43f5e',
    description: 'Seguimiento de ingesta para detectar desnutrición.',
    iconPath: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  },
  {
    title: 'Desarrollo',
    subtitle: 'Integral',
    label: 'Futuro',
    color: '#10b981',
    description: 'Tracking de hitos en dominios clave.',
    iconPath:
      'M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z',
  },
  {
    title: 'Asistencia',
    subtitle: 'Segura',
    label: 'Protección',
    color: '#f59e0b',
    description: 'Control biométrico de ingresos y salidas.',
    iconPath:
      'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
  },
  {
    title: 'Familia',
    subtitle: 'Conectada',
    label: 'Comunidad',
    color: '#8b5cf6',
    description: 'Reportes en tiempo real para los padres.',
    iconPath:
      'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
  },
];

function hexToRgb(hex: string) {
  const bigint = parseInt(hex.slice(1), 16);
  return `${(bigint >> 16) & 255}, ${(bigint >> 8) & 255}, ${bigint & 255}`;
}

export default function NeuralNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const centerTextRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isHoveringRef = useRef(false);
  const activeIndexRef = useRef(0);
  activeIndexRef.current = activeIndex;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    const nodeCount = 5;
    const synapseCount = 15;

    let nodes: Array<{
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      label: string;
      color: string;
      iconPath: string;
      currentSize: number;
      currentGlow: number;
      targetSize: number;
      targetGlow: number;
    }> = [];

    let synapses: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

    function initNodes() {
      nodes = [];
      synapses = [];
      const radius = width * 0.35;
      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < nodeCount; i++) {
        const angle = (i * 2 * Math.PI) / nodeCount - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          label: domainData[i].label,
          color: domainData[i].color,
          iconPath: domainData[i].iconPath,
          currentSize: 18,
          currentGlow: 12,
          targetSize: 18,
          targetGlow: 12,
        });
      }

      for (let i = 0; i < synapseCount; i++) {
        synapses.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
    }

    function resize() {
      if (!canvas || !container) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
      initNodes();
    }

    resize();

    let animationFrameId: number;
    let time = 0;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      time += 0.005;

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw Floating Synapses
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      synapses.forEach((syn) => {
        syn.x += syn.vx;
        syn.y += syn.vy;
        if (syn.x < 0 || syn.x > width) syn.vx *= -1;
        if (syn.y < 0 || syn.y > height) syn.vy *= -1;

        ctx.beginPath();
        ctx.arc(syn.x, syn.y, syn.size, 0, Math.PI * 2);
        ctx.fill();

        nodes.forEach((node) => {
          const dx = node.x - syn.x;
          const dy = node.y - syn.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 - dist / 1000})`;
            ctx.beginPath();
            ctx.moveTo(syn.x, syn.y);
            ctx.lineTo(node.x, node.y);
            ctx.stroke();
          }
        });
      });

      // Draw Nodes & Connections
      nodes.forEach((node, idx) => {
        node.x = node.baseX + Math.cos(time + idx) * 8;
        node.y = node.baseY + Math.sin(time + idx) * 8;

        const isActive = idx === activeIndexRef.current;

        node.targetSize = isActive ? 28 : 18;
        node.targetGlow = isActive ? 35 : 12;

        node.currentSize = lerp(node.currentSize, node.targetSize, 0.1);
        node.currentGlow = lerp(node.currentGlow, node.targetGlow, 0.1);

        // Connection to Center
        ctx.strokeStyle = isActive ? node.color : 'rgba(255,255,255,0.08)';
        ctx.lineWidth = isActive ? 2.5 : 1;
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(centerX, centerY);
        ctx.stroke();

        // Outer Ring Connection
        const nextNode = nodes[(idx + 1) % nodes.length];
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(nextNode.x, nextNode.y);
        ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        ctx.stroke();

        // Node Body Glow
        ctx.shadowBlur = node.currentGlow;
        ctx.shadowColor = node.color;
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.currentSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // SVG Icon Drawing on Canvas
        if (node.iconPath && typeof Path2D !== 'undefined') {
          ctx.save();
          ctx.translate(node.x, node.y);
          const scale = (node.currentSize / 28) * 0.7;
          ctx.scale(scale, scale);
          ctx.translate(-12, -12);
          ctx.fillStyle = 'white';
          try {
            const icon = new Path2D(node.iconPath);
            ctx.fill(icon);
          } catch (e) {
            /* Fallback */
          }
          ctx.restore();
        }

        // Canvas Node Label
        if (isActive || node.currentSize > 20) {
          ctx.fillStyle = `rgba(255, 255, 255, ${(node.currentSize - 18) / 10})`;
          ctx.font = '600 13px Outfit, sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(node.label, node.x, node.y + node.currentSize + 18);
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    // Auto Play Timer (changes active node every 3 seconds)
    const autoPlayInterval = setInterval(() => {
      if (!isHoveringRef.current) {
        setActiveIndex((prev) => (prev + 1) % nodeCount);
      }
    }, 3000);

    const handleCanvasMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      let found = false;
      nodes.forEach((node, idx) => {
        const dx = node.x - mx;
        const dy = node.y - my;
        if (Math.sqrt(dx * dx + dy * dy) < node.currentSize + 10) {
          setActiveIndex(idx);
          found = true;
        }
      });
      canvas.style.cursor = found ? 'pointer' : 'default';
    };

    canvas.addEventListener('mousemove', handleCanvasMouseMove);
    window.addEventListener('resize', resize);

    return () => {
      clearInterval(autoPlayInterval);
      canvas.removeEventListener('mousemove', handleCanvasMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const currentDomain = domainData[activeIndex];

  return (
    <div className="services-layout">
      {/* LEFT COLUMN: Quote + Canvas */}
      <div className="services-left animate-on-scroll animated">
        <h3 className="services-quote">
          &quot;La tecnología no debe sentirse como trabajo extra. Debe sentirse como un{' '}
          <span style={{ color: 'var(--brand-secondary)' }}>superpoder</span>.&quot;
        </h3>

        {/* Neural Network Canvas Container */}
        <div className="neural-wrapper" ref={containerRef}>
          <canvas id="neuralCanvas" ref={canvasRef} />
          <div
            className="neural-center-text"
            id="neuralCenterText"
            ref={centerTextRef}
          >
            <span
              className="center-title"
              style={{ color: currentDomain.color }}
            >
              {currentDomain.title}
            </span>
            <span className="center-subtitle">{currentDomain.subtitle}</span>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Service Cards */}
      <div
        className="services-cards"
        onMouseEnter={() => (isHoveringRef.current = true)}
        onMouseLeave={() => (isHoveringRef.current = false)}
      >
        {domainData.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={idx}
              className="glass-card service-card"
              data-service={idx}
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              style={{
                borderColor: isActive ? item.color : 'rgba(255, 255, 255, 0.08)',
                background: isActive
                  ? `rgba(${hexToRgb(item.color)}, 0.15)`
                  : 'var(--glass-dark)',
                transform: isActive ? 'translateX(10px)' : 'translateX(0)',
                opacity: isActive ? 1 : 0.7,
                boxShadow: isActive ? `0 10px 30px rgba(${hexToRgb(item.color)}, 0.25)` : undefined,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <h3 style={{ color: item.color }}>
                {item.title} {item.subtitle}
              </h3>
              <p style={{ color: 'var(--text-white-70)', fontSize: '0.95rem' }}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
