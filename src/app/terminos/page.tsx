import Link from 'next/link';

export const metadata = {
  title: 'Términos y Condiciones - KindiCore AI',
  description: 'Términos y Condiciones de Uso de la plataforma KindiCore AI y WEBLIFETECH.',
};

export default function TerminosPage() {
  return (
    <div style={{ background: 'var(--dark-bg)', color: 'white', minHeight: '100vh', padding: '6rem 1.5rem' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <Link href="/" className="btn-glass" style={{ display: 'inline-flex', marginBottom: '2rem', fontSize: '0.9rem' }}>
          ← Volver a KindiCore AI
        </Link>

        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
          Términos y <span className="gradient-text">Condiciones de Uso</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Última actualización: 25 de Julio de 2026
        </p>

        <div className="glass-card" style={{ padding: '2.5rem', lineHeight: '1.8' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--brand-primary)', marginBottom: '1rem' }}>
            1. Aceptación de los Términos
          </h2>
          <p style={{ color: 'var(--text-white-90)', marginBottom: '1.5rem' }}>
            Al acceder o utilizar la plataforma <strong>KindiCore AI</strong> y sus servicios web, aceptas estar sujeto a estos Términos y Condiciones. KindiCore AI es una infraestructura digital SaaS propiedad de <strong>WEBLIFETECH</strong>.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--brand-primary)', marginBottom: '1rem' }}>
            2. Descripción del Servicio
          </h2>
          <p style={{ color: 'var(--text-white-90)', marginBottom: '1.5rem' }}>
            KindiCore AI proporciona herramientas de software para la gestión operativa, médica, nutricional y pedagógica de Centros de Desarrollo Infantil (CDI). La plataforma incluye módulos de IA agéntica, omnicanalidad y analítica en tiempo real.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--brand-primary)', marginBottom: '1rem' }}>
            3. Responsabilidades del Usuario
          </h2>
          <p style={{ color: 'var(--text-white-90)', marginBottom: '1.5rem' }}>
            El usuario es responsable de mantener la confidencialidad de sus credenciales de acceso y de toda la información administrativa e infantil ingresada en la plataforma, cumpliendo con la Ley Orgánica de Protección de Datos Personales.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--brand-primary)', marginBottom: '1rem' }}>
            4. Propiedad Intelectual
          </h2>
          <p style={{ color: 'var(--text-white-90)', marginBottom: '1.5rem' }}>
            Todos los derechos de propiedad intelectual, marcas, logotipos, algoritmos agénticos, diseño visual e interfaces son propiedad exclusiva de <strong>WEBLIFETECH (Jonnathan Peña)</strong>.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--brand-primary)', marginBottom: '1rem' }}>
            5. Contacto Legal
          </h2>
          <p style={{ color: 'var(--text-white-90)' }}>
            Para dudas sobre estos términos, contáctanos en: <strong>jonnathanp@weblifetech.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
