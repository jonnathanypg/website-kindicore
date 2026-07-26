# KindiCore AI - Official Landing Page (Next.js 14)

Sitio web oficial y landing page interactiva de **KindiCore AI** adaptado y construido sobre **Next.js 14 (App Router)** y **Node.js**.

## 🌟 Características
- **Diseño 1:1 Intacto:** Glassmorphism, gradientes dinámicos, divisores de ola SVG y animaciones fluidas CSS.
- **Red Neuronal Interactiva en Canvas 2D:** Renderizado optimizado a 60 FPS con interconexión de nodos de salud, nutrición, desarrollo, asistencia y familia.
- **Partículas Flotantes Globales:** Fondo reactivo a movimientos del cursor y clicks.
- **Páginas Legales:** Rutas dedicadas `/terminos` y `/privacidad` optimizadas para SEO.
- **API Formulario de Contacto (Node.js):** Endpoint `/api/contact` en sustitución del legacy `contac.php`.

## 🚀 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (http://localhost:3000)
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 🛠 Estructura del Proyecto

```
website-kindicore/
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts   # Node.js API Route de Contacto
│   │   ├── terminos/page.tsx       # Términos y Condiciones
│   │   ├── privacidad/page.tsx     # Políticas de Privacidad
│   │   ├── globals.css             # Estilos globales intactos (CSS variables & glassmorphism)
│   │   ├── layout.tsx              # Layout raíz con navbar, canvas y footer
│   │   └── page.tsx                # Landing Page principal
│   └── components/
│       ├── Navbar.tsx              # Navegación y menú móvil
│       ├── GlobalParticlesCanvas.tsx # Canvas 2D de partículas globales
│       ├── NeuralNetworkCanvas.tsx # Red Neuronal interactiva Canvas 2D
│       ├── VisionTimeline.tsx      # Línea de tiempo interactiva
│       ├── ImpactDashboard.tsx     # Contadores y métricas de impacto
│       ├── ContactForm.tsx         # Formulario de contacto AJAX
│       └── Footer.tsx              # Pie de página y enlaces legales
├── package.json
└── tsconfig.json
```

---

**Copyright © 2026 WEBLIFETECH. Todos los derechos reservados.**
