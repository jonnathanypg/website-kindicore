import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlobalParticlesCanvas from '@/components/GlobalParticlesCanvas';

export const metadata = {
  title: 'KindiCore AI — Gestión Inteligente para Centros de Cuidado Infantil',
  description:
    'KindiCore AI: elimina el papeleo manual, automatiza la nutrición OMS, controla la asistencia y mantén a las familias tranquilas. La plataforma de IA N°1 para guarderías, CDI y CMCI en Ecuador y Latinoamérica.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <GlobalParticlesCanvas />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
