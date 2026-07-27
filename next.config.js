/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 'standalone' paquetiza todo para deployment en Hostinger Node.js
  // Permite que el proceso se inicie con: node .next/standalone/server.js
  output: 'standalone',
};

module.exports = nextConfig;
