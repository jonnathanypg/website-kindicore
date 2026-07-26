import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlobalParticlesCanvas from '@/components/GlobalParticlesCanvas';

export const metadata = {
  title: 'KindiCore AI - Infraestructura Digital Inteligente',
  description:
    'KindiCore AI - Infraestructura digital inteligente para transformar Centros de Desarrollo Infantil. Gestión de salud, nutrición y asistencia con IA.',
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
