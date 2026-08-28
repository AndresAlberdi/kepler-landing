import React, { useState } from 'react';
import { Sun, Moon, ExternalLink, Menu, X, Atom, BookOpen } from 'lucide-react';

export default function Header({ theme, toggleTheme, onNavigateToVirtualStem }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--bg-card)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px',
      }}>
        {/* Logo & Brand Name */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
          <img 
            src="/LogoKepler.jpeg" 
            alt="Logo Kepler Bolivia" 
            style={{
              height: '48px',
              width: '48px',
              borderRadius: '10px',
              objectFit: 'cover',
              border: '1.5px solid var(--accent-cyan)',
              boxShadow: '0 0 12px rgba(0, 168, 255, 0.4)'
            }} 
          />
          <div>
            <div style={{ 
              fontSize: '1.35rem', 
              fontWeight: 800, 
              color: 'var(--text-primary)', 
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              KEPLER <span style={{ color: 'var(--accent-lime)', fontSize: '0.9rem', fontWeight: 600 }}>on line</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              Iniciativa Educativa STEM • Bolivia
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          <button 
            onClick={onNavigateToVirtualStem}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--accent-cyan)',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <BookOpen size={16} />
            <span>Página Virtual STEM</span>
          </button>
          <a href="#que-es-kepler" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}>
            Sobre Kepler
          </a>
          <a href="#arquitectura" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}>
            Arquitectura
          </a>
          <a href="#bibliotecas-stem" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}>
            Bibliotecas Libres
          </a>
          <a href="#contacto" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}>
            Contacto
          </a>
        </nav>

        {/* Right Actions: Theme Toggle & External Demo CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Day/Night Theme Switcher */}
          <button 
            onClick={toggleTheme}
            aria-label="Cambiar tema día/noche"
            title={theme === 'dark' ? 'Cambiar a Modo Día (Luz)' : 'Cambiar a Modo Noche (Cosmos)'}
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              borderRadius: '12px',
              width: '42px',
              height: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            {theme === 'dark' ? <Sun size={20} color="#39FF14" /> : <Moon size={20} color="#0072FF" />}
          </button>

          {/* Virtual STEM Demo Direct Link */}
          <a 
            href="https://virtual-steam-demo.web.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '10px 18px', fontSize: '0.88rem' }}
            title="Abrir aplicación externa de demostración de simuladores"
          >
            <Atom size={18} />
            <span>Demo en Vivo</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}
