'use client';

import { useState, useEffect } from 'react';

const timelineItems = [
  {
    title: 'El Problema',
    description: 'Datos de salud, nutrición y asistencia dispersos en papeles y hojas de cálculo. Ceguera operativa.',
    type: 'secondary',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    align: 'left',
  },
  {
    title: 'La Solución',
    description: 'Ecosistema SaaS Multi-Tenant + IA Agéntica (LangGraph) para automatización total.',
    type: 'primary',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    align: 'right',
  },
  {
    title: 'Cero Papeles',
    description: 'Eliminación total de registros manuales. Todo digitalizado y accesible en tiempo real.',
    type: 'primary',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    align: 'left',
  },
  {
    title: 'Visibilidad 360°',
    description: 'Control total para administradores. Dashboards en tiempo real para cada nivel.',
    type: 'secondary',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
      </svg>
    ),
    align: 'right',
  },
];

export default function VisionTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % timelineItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="vision-timeline">
      {/* Center Line with Nodes */}
      <div className="timeline-line">
        {timelineItems.map((_, i) => (
          <div
            key={i}
            className={`timeline-node ${i === activeIndex ? 'active' : ''}`}
            data-index={i}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>

      {/* Cards Container */}
      <div className="timeline-cards">
        {timelineItems.map((item, i) => (
          <div
            key={i}
            className={`vision-timeline-card ${item.align} animate-on-scroll animated ${
              i === activeIndex ? 'active' : ''
            }`}
            data-index={i}
            onMouseEnter={() => setActiveIndex(i)}
            onClick={() => setActiveIndex(i)}
          >
            <div className={`icon-box ${item.type}`}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
