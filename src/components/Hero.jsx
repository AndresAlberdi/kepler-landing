import React from 'react';
import { Atom, Bot, ExternalLink, ShieldCheck, Cpu, Sparkles, BookOpen } from 'lucide-react';

export default function Hero({ onOpenRag }) {
  return (
    <section className="bg-orbit-pattern section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="gravitational-wave"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          {/* Left Hero Content */}
          <div>
            <div className="badge-pill">
              <Sparkles size={16} />
              <span>Iniciativa Educativa Boliviana en STEM</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '20px'
            }}>
              Ciencia y Tecnología al Alcance de Todos en <span className="text-gradient-cyan">Bolivia</span>
            </h1>

            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              marginBottom: '32px',
              maxWidth: '580px'
            }}>
              **Kepler** es la iniciativa líder en el desarrollo de soluciones EdTech en ciencias exactas. Nuestro proyecto estrella, **Virtual STEM**, democratiza los laboratorios de química con simulaciones matemáticas de alta fidelidad.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
              <a 
                href="https://virtual-steam-demo.web.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
                style={{ padding: '16px 32px', fontSize: '1.05rem' }}
              >
                <Atom size={22} />
                <span>Explorar Demo Virtual STEM</span>
                <ExternalLink size={18} />
              </a>

              <button 
                onClick={onOpenRag}
                className="btn-secondary"
                style={{ padding: '16px 28px', fontSize: '1.05rem', cursor: 'pointer' }}
              >
                <Bot size={22} color="var(--accent-lime)" />
                <span>Asistente Virtual IA (RAG)</span>
              </button>
            </div>

            {/* Highlight Badges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              paddingTop: '24px',
              borderTop: '1px solid var(--border-color)'
            }}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>20 Labs</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Experimentos de Química</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-lime)' }}>Serverless</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Arquitectura Eficiente</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>PWA USB</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Acceso 0% Datos Rural</div>
              </div>
            </div>
          </div>

          {/* Right Visual Banner with Kepler Logo Aesthetics */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="glass-card" style={{
              padding: '32px',
              borderRadius: '24px',
              maxWidth: '440px',
              width: '100%',
              textAlign: 'center',
              position: 'relative',
              boxShadow: '0 20px 50px rgba(0, 168, 255, 0.2)',
              border: '1.5px solid var(--border-glow)'
            }}>
              <div style={{
                position: 'relative',
                display: 'inline-block',
                marginBottom: '24px'
              }}>
                <img 
                  src="/LogoKepler.jpeg" 
                  alt="Emblema Oficial Kepler Bolivia" 
                  style={{
                    width: '240px',
                    height: '240px',
                    borderRadius: '20px',
                    objectFit: 'cover',
                    boxShadow: '0 0 40px rgba(0, 168, 255, 0.5)'
                  }}
                />
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
                Kepler STEM Platform
              </h3>
              
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Simulación matemática de alta fidelidad basada en los modelos de concentración y cinética química.
              </p>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '12px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                fontSize: '0.85rem',
                color: 'var(--accent-lime)'
              }}>
                <ShieldCheck size={16} />
                <span>Simuladores Certificados para Bolivia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
