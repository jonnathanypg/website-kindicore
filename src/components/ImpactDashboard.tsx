'use client';

import { useEffect, useState, useRef } from 'react';

export default function ImpactDashboard() {
  const [stat1, setStat1] = useState(0);
  const [stat2, setStat2] = useState(0);
  const [stat3, setStat3] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate stat 1: target 80
          animateValue(0, 80, 1500, setStat1);
          // Animate stat 2: target 24
          animateValue(0, 24, 1500, setStat2);
          // Animate stat 3: target 100
          animateValue(0, 100, 1500, setStat3);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  function animateValue(
    start: number,
    end: number,
    duration: number,
    setValue: (val: number) => void
  ) {
    const steps = 50;
    const stepTime = duration / steps;
    const increment = (end - start) / steps;
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setValue(Math.floor(current));
    }, stepTime);
  }

  return (
    <div className="grid-2" ref={containerRef}>
      {/* Left Column: Tech Stack */}
      <div className="animate-on-scroll animated">
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--dark-bg)', marginBottom: '2rem', textAlign: 'center' }}>
          Arquitectura <span className="gradient-text">Moderna</span>
        </h2>
        <div className="architecture-dashboard-card">
          {/* Item 1: Frontend */}
          <div className="dashboard-item">
            <div className="dashboard-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" className="impact-icon" stroke="currentColor">
                <polygon points="12 2 2 7 12 12 22 7 12 2" strokeWidth="2" strokeLinejoin="round" />
                <polyline points="2 17 12 22 22 17" strokeWidth="2" strokeLinejoin="round" />
                <polyline points="2 12 12 17 22 12" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-header">
                <span className="impact-label">Frontend Moderno</span>
                <span className="impact-tech-badge">Next.js 14</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--light-text-secondary)', margin: 0 }}>
                React 18 + TailwindCSS. Diseño Mobile-First.
              </p>
            </div>
          </div>

          <div className="dashboard-divider" />

          {/* Item 2: Backend */}
          <div className="dashboard-item">
            <div className="dashboard-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" className="impact-icon" stroke="currentColor">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" strokeWidth="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" strokeWidth="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
                <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
              </svg>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-header">
                <span className="impact-label">Backend Robusto</span>
                <span className="impact-tech-badge">Python / Node.js</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--light-text-secondary)', margin: 0 }}>
                Flask Blueprints + PostgreSQL + Pinecone DB.
              </p>
            </div>
          </div>

          <div className="dashboard-divider" />

          {/* Item 3: AI Core */}
          <div className="dashboard-item">
            <div className="dashboard-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" className="impact-icon" stroke="currentColor">
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-4A2.5 2.5 0 0 1 9.5 2z" />
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-4A2.5 2.5 0 0 0 14.5 2z" />
              </svg>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-header">
                <span className="impact-label">IA Core (Cerebro)</span>
                <span className="impact-tech-badge">LangGraph</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--light-text-secondary)', margin: 0 }}>
                Multi-Agent System. GPT-4o + Gemini Hybrid.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Impact Metrics */}
      <div className="animate-on-scroll animated delay-200">
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--dark-bg)', marginBottom: '2rem', textAlign: 'center' }}>
          Innovación de <span className="gradient-text">Alto Impacto</span>
        </h2>
        <div className="impact-dashboard-card">
          {/* Metric 1 */}
          <div className="dashboard-item">
            <div className="dashboard-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" className="impact-icon" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <polyline points="12 6 12 12 16 14" strokeWidth="2" />
              </svg>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-header">
                <span className="impact-label">Carga Administrativa</span>
                <span className="impact-tech-badge">IA Agéntica</span>
              </div>
              <div className="dashboard-stat-row">
                <span className="impact-stat">-{stat1}%</span>
                <small className="impact-context">5.5h/semanal recuperados</small>
              </div>
            </div>
          </div>

          <div className="dashboard-divider" />

          {/* Metric 2 */}
          <div className="dashboard-item">
            <div className="dashboard-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" className="impact-icon" stroke="currentColor">
                <path d="M18 20V10M12 20V4M6 20v-6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-header">
                <span className="impact-label">Operatividad</span>
                <span className="impact-tech-badge">SaaS Cloud</span>
              </div>
              <div className="dashboard-stat-row">
                <span className="impact-stat">{stat2}/7</span>
                <small className="impact-context">Disponibilidad total</small>
              </div>
            </div>
          </div>

          <div className="dashboard-divider" />

          {/* Metric 3 */}
          <div className="dashboard-item">
            <div className="dashboard-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" className="impact-icon" stroke="currentColor">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="2" />
                <polyline points="22 4 12 14.01 9 11.01" strokeWidth="2" />
              </svg>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-header">
                <span className="impact-label">Cumplimiento</span>
                <span className="impact-tech-badge">Big Data</span>
              </div>
              <div className="dashboard-stat-row">
                <span className="impact-stat">{stat3}%</span>
                <small className="impact-context">Trazabilidad Total</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
