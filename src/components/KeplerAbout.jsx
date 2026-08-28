import React from 'react';
import { Sparkles, Compass, Target, ArrowRight, FlaskConical, Award, BookOpen } from 'lucide-react';

export default function KeplerAbout({ onNavigateToVirtualStem }) {
  return (
    <section id="que-es-kepler" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px' }}>
          <div className="badge-pill" style={{ justifyContent: 'center' }}>
            <Compass size={16} />
            <span>Sobre la Iniciativa Educativa</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Kepler: Transformación de la Educación STEM en Bolivia
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            Impulsando el pensamiento científico, la creatividad tecnológica y la equidad educativa para las nuevas generaciones de estudiantes bolivianos.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginBottom: '64px'
        }}>
          
          <div className="glass-card" style={{ padding: '36px' }}>
            <div style={{
              background: 'rgba(0, 168, 255, 0.1)',
              border: '1px solid var(--accent-cyan)',
              borderRadius: '14px',
              width: '52px',
              height: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <Target size={28} color="var(--accent-cyan)" />
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px' }}>
              Misión Educativa
            </h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Desarrollar soluciones pedagógicas de vanguardia y recursos de código abierto que permitan a los estudiantes de Bolivia experimentar, aprender e innovar en ciencias exactas, superando las limitaciones físicas de infraestructura.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '36px' }}>
            <div style={{
              background: 'rgba(57, 255, 20, 0.1)',
              border: '1px solid var(--accent-lime)',
              borderRadius: '14px',
              width: '52px',
              height: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <Sparkles size={28} color="var(--accent-lime)" />
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px' }}>
              Visión de Futuro
            </h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Posicionar a Bolivia como un referente regional en educación digital en STEM, donde cada joven cuente con las herramientas científicas necesarias para acceder a carreras universitarias en Ingeniería, Salud y Tecnología.
            </p>
          </div>

        </div>

        {/* Featured Card Pointing to Virtual STEM Dedicated Page */}
        <div className="glass-card" style={{
          padding: '44px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(0, 168, 255, 0.08) 0%, rgba(57, 255, 20, 0.05) 100%)',
          border: '1.5px solid var(--border-glow)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          alignItems: 'center'
        }}>
          <div>
            <div className="badge-pill" style={{ borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)' }}>
              <FlaskConical size={16} />
              <span>Proyecto Estrella</span>
            </div>

            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '12px' }}>
              Virtual STEM: El Laboratorio Digital Boliviano
            </h3>

            <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Descubre en detalle la arquitectura técnica de nuestros 3 laboratorios interactivos de química, la lógica de simulación matemática de precisión y el modelo de bioseguridad.
            </p>

            <button 
              onClick={onNavigateToVirtualStem}
              className="btn-primary"
              style={{ padding: '14px 28px' }}
            >
              <span>Ver Especificaciones de Virtual STEM</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              background: 'var(--bg-card)',
              padding: '24px',
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              display: 'inline-block',
              boxShadow: 'var(--shadow-card)'
            }}>
              <img 
                src="/LogoKepler.jpeg" 
                alt="Logo Kepler Virtual STEM" 
                style={{ width: '180px', height: '180px', borderRadius: '16px', objectFit: 'cover' }}
              />
              <div style={{ marginTop: '12px', fontWeight: 700, color: 'var(--accent-lime)', fontSize: '0.9rem' }}>
                https://virtual-steam-demo.web.app/
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
