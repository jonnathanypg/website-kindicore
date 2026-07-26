import Link from 'next/link';

export const metadata = {
  title: 'Políticas de Privacidad - KindiCore AI',
  description: 'Políticas de Privacidad y Tratamiento de Datos de KindiCore AI y WEBLIFETECH.',
};

export default function PrivacidadPage() {
  return (
    <div style={{ background: 'var(--dark-bg)', color: 'white', minHeight: '100vh', padding: '6rem 1.5rem' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <Link href="/" className="btn-glass" style={{ display: 'inline-flex', marginBottom: '2rem', fontSize: '0.9rem' }}>
          ← Volver a KindiCore AI
        </Link>

        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
          Políticas de <span className="gradient-text">Privacidad</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Última actualización: 25 de Julio de 2026
        </p>

        <div className="glass-card" style={{ padding: '2.5rem', lineHeight: '1.8' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--brand-secondary)', marginBottom: '1rem' }}>
            1. Protección de Datos Infantiles y Familiares
          </h2>
          <p style={{ color: 'var(--text-white-90)', marginBottom: '1.5rem' }}>
            En <strong>KindiCore AI</strong> reconocemos la sensibilidad extrema de la información de los niños y familias en Centros de Desarrollo Infantil. Garantizamos el estricto cumplimiento de los estándares internacionales de protección de la infancia y la Ley Orgánica de Protección de Datos Personales de Ecuador.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--brand-secondary)', marginBottom: '1rem' }}>
            2. Recopilación de Información
          </h2>
          <p style={{ color: 'var(--text-white-90)', marginBottom: '1.5rem' }}>
            Recopilamos únicamente los datos indispensables para la operatividad del servicio: datos de asistencia, controles antropométricos de salud OMS, avance de hitos del desarrollo (IDII) y solicitudes de contacto.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--brand-secondary)', marginBottom: '1rem' }}>
            3. Aislamiento Multi-Tenant & Seguridad
          </h2>
          <p style={{ color: 'var(--text-white-90)', marginBottom: '1.5rem' }}>
            Cada organización y centro posee un aislamiento criptográfico y lógico estricto. Los datos de un Centro de Desarrollo Infantil son totalmente inalcanzables para otros centros o licencias.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--brand-secondary)', marginBottom: '1rem' }}>
            4. Derechos del Titular de Datos
          </h2>
          <p style={{ color: 'var(--text-white-90)' }}>
            Los usuarios pueden solicitar el acceso, rectificación o eliminación de sus datos enviando una solicitud formal a: <strong>jonnathanp@weblifetech.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
