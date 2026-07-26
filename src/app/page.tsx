import NeuralNetworkCanvas from '@/components/NeuralNetworkCanvas';
import VisionTimeline from '@/components/VisionTimeline';
import ImpactDashboard from '@/components/ImpactDashboard';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      {/* ============================================================
         HERO SECTION (DARK)
         ============================================================ */}
      <section id="inicio" className="section section-dark hero">
        {/* Floating Background Shapes */}
        <div className="floating-shapes-container">
          <div
            className="floating-shape shape-primary"
            style={{ top: '-10%', left: '-10%', animationDuration: '25s' }}
          />
          <div
            className="floating-shape shape-secondary"
            style={{
              bottom: '10%',
              right: '-5%',
              width: '200px',
              height: '200px',
              animationDuration: '18s',
              animationDelay: '-5s',
            }}
          />
          <div
            className="floating-shape shape-primary"
            style={{
              bottom: '-10%',
              left: '30%',
              width: '150px',
              height: '150px',
              opacity: 0.2,
              animationDuration: '30s',
            }}
          />
        </div>

        <div className="container hero-content">
          <br />
          <br />
          <div className="hero-badge">
            <div className="badge-dot" />
            <span>Producción Estable v1.1</span>
          </div>

          <h1 className="hero-title">
            Transformando el Cuidado Infantil con{' '}
            <span className="gradient-text">Inteligencia Artificial</span>
          </h1>

          <p className="hero-subtitle">
            Una fuerza laboral virtual de 360° para Centros de Desarrollo Infantil. Elimina la burocracia y enfócate en el bienestar de los niños.
          </p>

          <div className="hero-cta-group">
            <a href="#contacto" className="btn-primary">
              Solicitar Demo
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.kindicoreai.sbs/"
              className="btn-glass"
            >
              Ir a la Aplicación
            </a>
          </div>
          <br />
          <br />
        </div>

        {/* Wave Bottom - Flipped for "Flow Down" effect */}
        <div className="wave-divider bottom" style={{ transform: 'scaleY(-1)', bottom: '-2px' }}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            />
          </svg>
        </div>
        <b>
          <br />
          <br />
          <br />
        </b>
      </section>

      {/* ============================================================
         VISION SECTION (LIGHT)
         ============================================================ */}
      <section id="vision" className="section section-light">
        <div className="container">
          <div className="section-header animate-on-scroll animated" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--dark-bg)', marginBottom: '1rem' }}>
              Visión <span className="gradient-text">Ejecutiva</span>
            </h2>
            <p style={{ color: 'var(--light-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Nuestra misión es resolver la fragmentación operativa y la falta de datos en tiempo real que sufren las instituciones de cuidado infantil.
            </p>
          </div>

          <VisionTimeline />
        </div>

        {/* Wave Bottom Inverse */}
        <div className="wave-divider bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill-dark"
            />
          </svg>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>

      {/* ============================================================
         FUNCTIONALITY SECTION (DARK)
         ============================================================ */}
      <section id="funcionalidad" className="section section-dark">
        <div className="floating-shapes-container">
          <div
            className="floating-shape shape-primary"
            style={{ top: '20%', right: '-5%', width: '500px', height: '500px', opacity: 0.1 }}
          />
        </div>

        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-on-scroll animated">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Objetivos Sociales y <span className="gradient-text">Funcionalidad</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '1rem auto' }}>
              Gestión del Cuidado Infantil (Child-Centric Core): El sistema pone al niño en el centro de todas las operaciones.
            </p>
          </div>

          <NeuralNetworkCanvas />
        </div>

        {/* Wave Bottom */}
        <div className="wave-divider bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            />
          </svg>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>

      {/* ============================================================
         ARCHITECTURE & ROADMAP (LIGHT)
         ============================================================ */}
      <section id="arquitectura" className="section section-light">
        <div className="container">
          <ImpactDashboard />
        </div>

        {/* Wave Bottom Inverse */}
        <div className="wave-divider bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill-dark"
            />
          </svg>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>

      {/* ============================================================
         CONTACT SECTION (DARK)
         ============================================================ */}
      <section id="contacto" className="section section-dark" style={{ position: 'relative' }}>
        <div className="container" style={{ paddingTop: '4rem' }}>
          <div
            style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}
            className="animate-on-scroll animated"
          >
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
              Únete a la{' '}
              <span
                style={{
                  background:
                    'linear-gradient(to right, var(--brand-secondary), var(--brand-primary))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Revolución
              </span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              Solicita acceso anticipado y transforma tu Centro de Cuidado Infantil.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
