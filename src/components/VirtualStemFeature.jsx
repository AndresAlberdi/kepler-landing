import React from 'react';
import { FlaskConical, TestTube2, Layers, ArrowRight, BookOpen, ExternalLink } from 'lucide-react';

export default function VirtualStemFeature({ onNavigateToVirtualStem }) {
  return (
    <section id="virtual-stem" className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 64px' }}>
          <div className="badge-pill" style={{ justifyContent: 'center' }}>
            <FlaskConical size={16} />
            <span>Proyecto Estrella de Kepler</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Virtual-STEM Bolivia: Simuladores de Laboratorio
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            Diseñado para cerrar la brecha entre la teoría abstracta y la experimentación empírica en el sistema escolar secundario boliviano.
          </p>
        </div>

        {/* 3 Chemistry Demo Labs with Formatted Math Equations */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
          marginBottom: '48px'
        }}>
          
          {/* Lab 1 */}
          <div className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ background: 'var(--bg-secondary)', padding: '10px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <FlaskConical size={28} color="#00A8FF" />
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', background: 'rgba(0, 168, 255, 0.15)', color: 'var(--accent-cyan)' }}>
                  5.Q.18
                </span>
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>
                Preparación de Soluciones (Molaridad)
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                Cálculo y pesaje de Sulfato de Cobre (CuSO₄·5H₂O, 0.1 M) en balanza analítica y matraz aforado de 250 mL.
              </p>
            </div>
            
            {/* Formatted Math Equation */}
            <div className="math-equation">
              M = <span className="fraction"><span className="numerator">Moles de soluto</span><span className="denominator">Litros de solución</span></span> &nbsp;⇒&nbsp; 6.24 g para 250 mL
            </div>
          </div>

          {/* Lab 2 */}
          <div className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ background: 'var(--bg-secondary)', padding: '10px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <TestTube2 size={28} color="#39FF14" />
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', background: 'rgba(57, 255, 20, 0.15)', color: 'var(--accent-lime)' }}>
                  6.Q.4
                </span>
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>
                Volumetría Ácido-Base del Vinagre Comercial
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                Titulación de ácido acético (CH₃COOH) con NaOH 0.1 M utilizando indicador de fenolftaleína.
              </p>
            </div>
            
            {/* Formatted Math Equation */}
            <div className="math-equation">
              C₁ × V₁ = C₂ × V₂ &nbsp;⇒&nbsp; Viraje a rosa fucsia (pH ≥ 8.2)
            </div>
          </div>

          {/* Lab 3 */}
          <div className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ background: 'var(--bg-secondary)', padding: '10px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <Layers size={28} color="#0072FF" />
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', background: 'rgba(0, 114, 255, 0.15)', color: 'var(--accent-blue)' }}>
                  6.Q.16
                </span>
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>
                Espejo de Plata (Reacción de Tollens)
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                Oxidación de aldehídos con [Ag(NH₃)₂]⁺ a 60 °C con deposición metálica reflectante en 3D.
              </p>
            </div>
            
            {/* Formatted Math Equation */}
            <div className="math-equation">
              R-CHO + 2[Ag(NH₃)₂]⁺ + 3OH⁻ &nbsp;⇒&nbsp; R-COO⁻ + 2Ag↓ + 4NH₃ + 2H₂O
            </div>
          </div>

        </div>

        {/* Navigation Banner to Full Dedicated Virtual STEM Page */}
        <div className="glass-card" style={{
          padding: '40px',
          borderRadius: '24px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(0, 168, 255, 0.06), rgba(57, 255, 20, 0.04))',
          border: '1.5px solid var(--border-glow)'
        }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px' }}>
            ¿Quieres explorar la guía completa de más de 80 experimentos catalogados?
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '680px', margin: '0 auto 24px' }}>
            Ingresa a la página dedicada de Virtual STEM para consultar el catálogo de prácticas organizadas por año escolar (3.º, 4.º, 5.º y 6.º de Secundaria), procedimientos y fundamentos matemáticos.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              onClick={onNavigateToVirtualStem}
              className="btn-primary"
              style={{ padding: '16px 32px', fontSize: '1.05rem' }}
            >
              <BookOpen size={20} />
              <span>Ingresar a la Página de Virtual STEM</span>
              <ArrowRight size={18} />
            </button>

            <a 
              href="https://virtual-steam-demo.web.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '16px 28px', fontSize: '1.05rem' }}
            >
              <span>Abrir App Demo Externa en Vivo</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
