'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    institucion: '',
    email: '',
    mensaje: '',
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.type === 'success') {
        setStatusMessage({ type: 'success', text: data.message });
        setFormData({
          nombre: '',
          telefono: '',
          institucion: '',
          email: '',
          mensaje: '',
        });

        setTimeout(() => {
          setStatusMessage(null);
        }, 5000);
      } else {
        setStatusMessage({
          type: 'error',
          text: data.message || 'Ocurrió un error. Intenta nuevamente.',
        });
      }
    } catch (err) {
      console.error(err);
      setStatusMessage({
        type: 'error',
        text: 'Error de conexión. Por favor intenta más tarde.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card animate-on-scroll animated contact-form-card">
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              className="form-input"
              placeholder="Tu nombre completo"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="tel"
              name="telefono"
              className="form-input"
              placeholder="099 123 4567"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Institución</label>
            <input
              type="text"
              name="institucion"
              className="form-input"
              placeholder="Centro de Cuidado Infantil"
              value={formData.institucion}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn-primary btn-full"
          style={{ marginTop: '1.5rem' }}
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar Solicitud'}
        </button>

        {statusMessage && (
          <div
            id="formMessage"
            style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.95rem' }}
          >
            <div
              className={`form-alert ${
                statusMessage.type === 'success' ? 'form-alert-success' : 'form-alert-error'
              }`}
            >
              <strong>
                {statusMessage.type === 'success' ? '¡Enviado! ' : 'Error: '}
              </strong>
              {statusMessage.text}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
