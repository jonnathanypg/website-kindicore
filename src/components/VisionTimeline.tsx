'use client';

import { useState, useEffect } from 'react';

const timelineItems = [
  {
    title: 'El Problema',
    description: 'Datos de salud, nutrición y asistencia dispersos en papeles y hojas de cálculo. Ceguera operativa y riesgo de incumplimiento normativo.',
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
    description: 'Una plataforma unificada e inteligente que automatiza la gestión completa de tu centro. Todo en un solo lugar, desde el primer día.',
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
    description: 'Eliminación total de registros manuales. Fichas, reportes y minutas digitalizados, accesibles en segundos desde cualquier dispositivo.',
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
    title: 'Familias Tranquilas',
    description: 'Padres informados en tiempo real sobre nutrición, hitos de desarrollo y asistencia de su hijo. Mayor confianza, mayor retención.',
    type: 'secondary',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
