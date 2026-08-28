import React from 'react';
import { Mail, ExternalLink, Atom } from 'lucide-react';

export default function Footer({ onNavigateToVirtualStem }) {
  return (
    <footer style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-color)',
      padding: '64px 0 32px'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '48px',
          marginBottom: '48px'
        }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img 
                src="/LogoKepler.jpeg" 
                alt="Kepler Logo" 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  border: '1px solid var(--accent-cyan)'
                }}
              />
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                KEPLER <span style={{ color: 'var(--accent-lime)', fontSize: '0.85rem' }}>on line</span>
              </span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Iniciativa educativa boliviana en STEM dedicada a democratizar el acceso al conocimiento científico práctico de alta fidelidad.
            </p>
            <div style={{ fontSize: '0.88rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
              Proyecto Estrella: Virtual STEM
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-primary)' }}>
              Navegación Rápida
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button 
                  onClick={onNavigateToVirtualStem}
                  style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600 }}
                >
                  Detalles Completos de Virtual STEM →
                </button>
              </li>
              <li><a href="#que-es-kepler" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Sobre Kepler Bolivia</a></li>
              <li><a href="#arquitectura" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Arquitectura Serverless</a></li>
              <li><a href="#bibliotecas-stem" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Bibliotecas Libres STEM</a></li>
              <li><a href="#asistente-rag" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Asistente IA (RAG)</a></li>
              <li><a href="#contacto" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Contacto</a></li>
            </ul>
          </div>

          {/* Official Contact */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-primary)' }}>
              Contacto Institucional
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              Correo oficial de la iniciativa:
            </p>
            <a 
              href="mailto:kepler.stem.bo@gmail.com" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--accent-lime)',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.95rem'
              }}
            >
              <Mail size={16} />
              <span>kepler.stem.bo@gmail.com</span>
            </a>

            <div style={{ marginTop: '20px' }}>
              <a 
                href="https://virtual-steam-demo.web.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              >
                <Atom size={16} />
                <span>Demo en Vivo</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          fontSize: '0.85rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} Kepler Bolivia. Todos los derechos reservados.
          </div>
          <div>
            Desarrollado para la innovación científica educativa en Bolivia
          </div>
        </div>

      </div>
    </footer>
  );
}
