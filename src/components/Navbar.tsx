'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <nav className="container nav-container">
        <Link href="#inicio" className="logo" aria-label="Inicio">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="1.5"
          >
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="3" />
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="18.5" cy="8.5" r="1.5" />
            <circle cx="18.5" cy="15.5" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
            <circle cx="5.5" cy="15.5" r="1.5" />
            <circle cx="5.5" cy="8.5" r="1.5" />
            <line x1="12" y1="9" x2="12" y2="6.5" />
            <line x1="14.6" y1="10.5" x2="17" y2="9" />
            <line x1="14.6" y1="13.5" x2="17" y2="15" />
            <line x1="12" y1="15" x2="12" y2="17.5" />
            <line x1="9.4" y1="13.5" x2="7" y2="15" />
            <line x1="9.4" y1="10.5" x2="7" y2="9" />
          </svg>
          <span className="logo-text">
            KindiCore <span className="gradient-text">AI</span>
          </span>
        </Link>

        <div className="nav-links">
          <a href="#vision" className="nav-link">
            Visión
          </a>
          <a href="#funcionalidad" className="nav-link">
            Pilares
          </a>
          <a href="#impacto" className="nav-link">
            Beneficios
          </a>
          <a href="#contacto" className="nav-cta">
            Solicitar Demo
          </a>
        </div>

        <button
          className="mobile-toggle"
          id="mobileToggle"
          aria-label="Abrir Menú"
          onClick={toggleMobileMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`} id="mobileMenu">
        <a href="#vision" className="mobile-link" onClick={closeMobileMenu}>
          Visión
        </a>
        <a href="#funcionalidad" className="mobile-link" onClick={closeMobileMenu}>
          Pilares
        </a>
        <a href="#impacto" className="mobile-link" onClick={closeMobileMenu}>
          Beneficios
        </a>
        <a href="#contacto" className="nav-cta" onClick={closeMobileMenu}>
          Solicitar Demo
        </a>
      </div>
    </header>
  );
}
