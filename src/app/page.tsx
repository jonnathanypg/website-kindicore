'use client';

import { useEffect, useRef } from 'react';
import NeuralNetworkCanvas from '@/components/NeuralNetworkCanvas';
import VisionTimeline from '@/components/VisionTimeline';
import ImpactDashboard from '@/components/ImpactDashboard';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  // Parallax refs for Hero shapes
  const heroSectionRef = useRef<HTMLElement>(null);
  const parallaxShape1Ref = useRef<HTMLDivElement>(null);
  const parallaxShape2Ref = useRef<HTMLDivElement>(null);
  const parallaxShape3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate scroll-in elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    // Real Scroll-based Parallax
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Each layer moves at a different fraction of scroll speed → depth illusion
      if (parallaxShape1Ref.current) {
        parallaxShape1Ref.current.style.transform = `translate(${scrollY * 0.12}px, ${scrollY * 0.15}px) rotate(${scrollY * 0.02}deg)`;
      }
      if (parallaxShape2Ref.current) {
        parallaxShape2Ref.current.style.transform = `translate(${-scrollY * 0.1}px, ${scrollY * 0.3}px) rotate(${-scrollY * 0.015}deg)`;
      }
      if (parallaxShape3Ref.current) {
        parallaxShape3Ref.current.style.transform = `translate(${scrollY * 0.05}px, ${-scrollY * 0.08}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* ============================================================
         FRANJA 1: HERO SECTION — PARALLAX + HIGH-CONVERSION
         ============================================================ */}
      <section
        id="inicio"
        ref={heroSectionRef}
        className="section section-dark hero"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {/* Parallax Background Shapes — each layer moves at different scroll speed */}
        <div className="floating-shapes-container">
          <div
            ref={parallaxShape1Ref}
            className="floating-shape shape-primary parallax-shape"
            style={{ top: '-10%', left: '-10%', animationDuration: '25s' }}
          />
          <div
            ref={parallaxShape2Ref}
            className="floating-shape shape-secondary parallax-shape"
            style={{
              bottom: '10%',
              right: '-5%',
              width: '240px',
              height: '240px',
              animationDuration: '18s',
              animationDelay: '-5s',
            }}
          />
          <div
            ref={parallaxShape3Ref}
            className="floating-shape shape-primary parallax-shape"
            style={{
              bottom: '-10%',
              left: '30%',
              width: '180px',
              height: '180px',
              opacity: 0.25,
              animationDuration: '30s',
            }}
          />
        </div>

        <div className="container hero-content">
          <br />
          <div className="hero-badge" style={{ background: 'rgba(99, 102, 241, 0.15)', borderColor: 'rgba(99, 102, 241, 0.3)' }}>
            <div className="badge-dot" style={{ background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
            <span>✨ Plataforma N° 1 en Gestión Inteligente de Cuidado Infantil</span>
          </div>

          <h1 className="hero-title" style={{ marginTop: '1.2rem', lineHeight: 1.15 }}>
            La Primera Fuerza Laboral Virtual de IA que{' '}
            <span className="gradient-text">Protege y Cuida</span> a Cada Niño
          </h1>

          <p className="hero-subtitle" style={{ fontSize: '1.25rem', maxWidth: '780px', margin: '1.5rem auto 2.5rem auto', color: 'var(--text-white-90)' }}>
            Elimina el 80% del papeleo manual en tu Centro de Cuidado Infantil. Automatiza la nutrición OMS, la asistencia y mantén a los padres tranquilos con alertas en tiempo real.
          </p>

          <div className="hero-cta-group" style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', alignItems: 'center' }}>
            <a href="#contacto" className="btn-primary" style={{ padding: '1rem 2.2rem', fontSize: '1.1rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
              Comenzar Mi Transformación
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.kindicoreai.sbs/"
              className="btn-glass"
              style={{ padding: '1rem 2rem', fontSize: '1.1rem', fontWeight: 500 }}
            >
              🚀 Probar Demo Interactiva
            </a>
          </div>

          {/* Micro-Social Proof Bar */}
          <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', opacity: 0.85 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <span style={{ color: '#f59e0b', fontSize: '1.2rem' }}>★★★★★</span>
              <span><strong>4.9/5</strong> de valoración ejecutiva</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span><strong>+100%</strong> trazabilidad nutricional</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span><strong>-5.5 horas/sem</strong> ahorradas por docente</span>
            </div>
          </div>
        </div>

        {/* Wave Bottom Divider */}
        <div className="wave-divider bottom" style={{ transform: 'scaleY(-1)', bottom: '-2px' }}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" />
          </svg>
        </div>
      </section>

      {/* ============================================================
         FRANJA 2: VISIÓN & TRANSFORMACIÓN (LIGHT SECTION)
         ============================================================ */}
      <section id="vision" className="section section-light">
        <div className="container">
          <div className="section-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--dark-bg)', marginBottom: '1rem' }}>
              De la Fricción Manual al <span className="gradient-text">Superpoder Digital</span>
            </h2>
            <p style={{ color: 'var(--light-text-secondary)', maxWidth: '680px', margin: '0 auto', fontSize: '1.1rem' }}>
              Reemplaza carpetas físicas y hojas de cálculo dispersas por una plataforma unificada que anticipa problemas, protege a cada niño y libera horas valiosas para tu equipo.
            </p>
          </div>

          <VisionTimeline />
        </div>

        {/* Wave Bottom Inverse */}
        <div className="wave-divider bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill-dark" />
          </svg>
        </div>
      </section>

      {/* ============================================================
         FRANJA 3: 5 PILARES DE BIENESTAR (DARK INTERACTIVE)
         ============================================================ */}
      <section id="funcionalidad" className="section section-dark">
        <div className="floating-shapes-container">
          <div
            className="floating-shape shape-primary"
            style={{ top: '20%', right: '-5%', width: '500px', height: '500px', opacity: 0.1 }}
          />
        </div>

        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="animate-on-scroll">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>
              5 Pilares de <span className="gradient-text">Bienestar Infantil</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '1rem auto', fontSize: '1.1rem' }}>
              Cada área de tu centro conectada e inteligente. Explora los pilares de cuidado que KindiCore AI automatiza para ti.
            </p>
          </div>

          <NeuralNetworkCanvas />
        </div>

        {/* Wave Bottom */}
        <div className="wave-divider bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill" />
          </svg>
        </div>
      </section>

      {/* ============================================================
         FRANJA 4: BENEFICIOS & MEDIDA DEL IMPACTO (LIGHT SECTION)
         ============================================================ */}
      <section id="impacto" className="section section-light">
        <div className="container">
          <ImpactDashboard />
        </div>

        {/* Wave Bottom Inverse */}
        <div className="wave-divider bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill-dark" />
          </svg>
        </div>
      </section>

      {/* ============================================================
         FRANJA 5: CIERRE DIRECTO A LA CONVERSIÓN (DARK GLASS CONTACT)
         ============================================================ */}
      <section id="contacto" className="section section-dark" style={{ position: 'relative' }}>
        <div className="container" style={{ paddingTop: '2rem' }}>
          <div
            style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}
            className="animate-on-scroll"
          >
            <div className="hero-badge" style={{ display: 'inline-flex', marginBottom: '1rem', background: 'rgba(244, 63, 94, 0.15)', borderColor: 'rgba(244, 63, 94, 0.3)' }}>
              <span>🚀 Garantía de Implementación Plug &amp; Play en 24 Horas</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2.3rem, 5vw, 3.2rem)', fontWeight: 800, marginBottom: '1rem' }}>
              ¿Listo para Transformar{' '}
              <span
                style={{
                  background: 'linear-gradient(to right, var(--brand-secondary), var(--brand-primary))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                la Experiencia en tu Centro?
              </span>
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
              Solicita un análisis sin costo para tu institución. Recibe una demo personalizada y descubre cómo recuperar cientos de horas administrativas desde la primera semana.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
