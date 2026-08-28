import React from 'react';
import { Server, WifiOff, Lock, Zap, Cpu, Award } from 'lucide-react';

export default function ImpactAndTech() {
  return (
    <section id="arquitectura" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 64px' }}>
          <div className="badge-pill" style={{ justifyContent: 'center' }}>
            <Server size={16} />
            <span>Sostenibilidad y Alta Eficiencia</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Arquitectura Serverless de Alta Eficiencia
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            Optimizada para garantizar el rendimiento continuo y la máxima accesibilidad universal.
          </p>
        </div>

        {/* 4 Key Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          
          <div className="glass-card" style={{ padding: '32px' }}>
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
              <Zap size={28} color="var(--accent-cyan)" />
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px' }}>
              Ejecución Client-Side
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              Todo el motor matemático de física y química funciona 100% en el navegador (React + WebGL/Canvas), eliminando la necesidad de servidores dedicados de cómputo.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '32px' }}>
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
              <WifiOff size={28} color="var(--accent-lime)" />
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px' }}>
              Acceso Rural Sin Internet (0% Data Cost)
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              Arquitectura PWA de carga única combinada con Kits Maestros en memorias USB (.exe/.apk) para funcionar de forma completamente desconectada en escuelas rurales.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{
              background: 'rgba(0, 114, 255, 0.1)',
              border: '1px solid var(--accent-blue)',
              borderRadius: '14px',
              width: '52px',
              height: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <Lock size={28} color="var(--accent-blue)" />
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px' }}>
              Seguridad RBAC en Firestore
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              Protección estricta de datos personales (PII) e inmutabilidad de notas mediante reglas de seguridad de Firestore (`firestore.rules`) y roles diferenciados.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{
              background: 'rgba(168, 85, 247, 0.1)',
              border: '1px solid #a855f7',
              borderRadius: '14px',
              width: '52px',
              height: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <Award size={28} color="#a855f7" />
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px' }}>
              Excelencia e Impacto Educativo
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              Plataforma inspirada en los más altos estándares pedagógicos para la retención cognitiva y preparación para el ingreso a carreras de Ingeniería y Ciencias Exactas.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
