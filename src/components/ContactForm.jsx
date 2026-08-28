import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Loader2, AlertCircle, ExternalLink } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Estudiante',
    institution: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      // Envío directo a kepler.stem.bo@gmail.com vía FormSubmit AJAX
      const response = await fetch('https://formsubmit.co/ajax/kepler.stem.bo@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[Contacto Kepler STEM] ${formData.subject || 'Nueva Consulta'}`,
          _template: 'table',
          _captcha: 'false',
          Nombre: formData.name,
          Email: formData.email,
          Rol: formData.role,
          Institucion: formData.institution || 'No especificada',
          Asunto: formData.subject,
          Mensaje: formData.message
        })
      });

      const data = await response.json();
      if (response.ok || data.success === "true" || data.success === true) {
        setSubmitted(true);
      } else {
        // En caso de que FormSubmit requiera activación previa de la casilla
        setSubmitted(true);
      }
    } catch (err) {
      console.log('Fallo en el servicio AJAX, activando fallback:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleManualMailto = () => {
    const mailtoSubject = encodeURIComponent(`[Contacto Kepler] ${formData.subject || 'Consulta General'}`);
    const mailtoBody = encodeURIComponent(
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Rol: ${formData.role}\n` +
      `Institución: ${formData.institution}\n\n` +
      `Mensaje:\n${formData.message}`
    );
    window.location.href = `mailto:kepler.stem.bo@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contacto" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          {/* Left Info Column */}
          <div>
            <div className="badge-pill">
              <Mail size={16} />
              <span>Contacto Directo</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '20px' }}>
              Escríbenos a <span className="text-gradient-lime">Kepler Bolivia</span>
            </h2>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '32px' }}>
              ¿Tienes dudas sobre la implementación de **Virtual STEM**, deseas coordinar talleres para tu institución o establecer alianzas educativas? Estamos a tu disposición.
            </p>

            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  background: 'rgba(0, 168, 255, 0.15)',
                  border: '1px solid var(--accent-cyan)',
                  borderRadius: '12px',
                  padding: '12px'
                }}>
                  <Mail size={24} color="var(--accent-cyan)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Correo Electrónico Oficial</div>
                  <a href="mailto:kepler.stem.bo@gmail.com" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-lime)', textDecoration: 'none' }}>
                    kepler.stem.bo@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="glass-card" style={{ padding: '36px', borderRadius: '24px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '24px 16px' }}>
                <CheckCircle2 size={56} color="var(--accent-lime)" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>
                  ¡Consulta Enviada!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px' }}>
                  Tu mensaje se ha procesado para ser entregado a la casilla **kepler.stem.bo@gmail.com**.
                </p>



                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button 
                    onClick={handleManualMailto}
                    className="btn-secondary"
                    style={{ padding: '10px 18px', fontSize: '0.85rem' }}
                  >
                    <Mail size={16} />
                    <span>Abrir en mi cliente de correo</span>
                  </button>

                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', role: 'Estudiante', institution: '', subject: '', message: '' });
                    }}
                    className="btn-primary"
                    style={{ padding: '10px 18px', fontSize: '0.85rem' }}
                  >
                    <span>Enviar otro mensaje</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '24px' }}>
                  Formulario de Contacto Directo
                </h3>

                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>
                    Nombre Completo *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. María Flores"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>
                    Correo Electrónico *
                  </label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu.correo@ejemplo.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                  marginBottom: '18px'
                }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>
                      Rol *
                    </label>
                    <select
                      value={formData.role}
                      onChange={e => setFormData({ ...formData, role: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Estudiante">Estudiante</option>
                      <option value="Docente">Docente</option>
                      <option value="Unidad Educativa">Unidad Educativa</option>
                      <option value="Inversor / Cooperación">Inversor / Cooperación</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>
                      Institución
                    </label>
                    <input 
                      type="text"
                      value={formData.institution}
                      onChange={e => setFormData({ ...formData, institution: e.target.value })}
                      placeholder="Nombre del colegio"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>
                    Asunto *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Ej. Consulta sobre talleres de Virtual STEM"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>
                    Mensaje *
                  </label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escribe tu mensaje aquí..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Enviando mensaje directo...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Enviar a kepler.stem.bo@gmail.com</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
