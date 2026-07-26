import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
          KindiCore <span className="gradient-text">AI</span>
        </span>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          Infraestructura digital inteligente para el bienestar infantil.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          <Link href="/terminos" style={{ color: 'var(--text-white-70)' }}>
            Términos y Condiciones
          </Link>
          <Link href="/privacidad" style={{ color: 'var(--text-white-70)' }}>
            Políticas de Privacidad
          </Link>
        </div>

        <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem', marginTop: '1rem' }}>
          Desarrollado por: Jonnathan Peña
        </p>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>© 2026 WEBLIFETECH. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
