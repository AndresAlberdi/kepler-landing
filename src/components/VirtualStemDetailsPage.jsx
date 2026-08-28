import React, { useState } from 'react';
import { 
  ArrowLeft, Atom, ExternalLink, ShieldCheck, Cpu, FlaskConical, TestTube2, 
  Layers, Lock, WifiOff, Award, CheckCircle2, UserCheck, Calculator, BookOpen, Search, Filter, GraduationCap, BookMarked 
} from 'lucide-react';
import { ALL_EXPERIMENTS } from '../data/allExperimentsData';
import { formatMathAndChemicals } from '../utils/formatMath';

export default function VirtualStemDetailsPage({ onBackToHome }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('all');

  // Filter experiments based on search and grade selector
  const filteredExperiments = ALL_EXPERIMENTS.filter(exp => {
    const yearStr = exp.year || '';
    const nameStr = formatMathAndChemicals(exp.name || '');
    const codeStr = exp.code || '';
    const descStr = formatMathAndChemicals(exp.desc || '');
    const objStr = formatMathAndChemicals(exp.obj || '');

    const matchesGrade = selectedGrade === 'all' || yearStr.includes(selectedGrade);
    const matchesSearch = 
      nameStr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      codeStr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      descStr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      objStr.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGrade && matchesSearch;
  });

  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      
      {/* Navigation Top Bar */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--bg-card)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-color)',
        padding: '16px 0'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button 
            onClick={onBackToHome}
            className="btn-secondary"
            style={{ padding: '8px 18px', fontSize: '0.9rem' }}
          >
            <ArrowLeft size={18} />
            <span>Volver a Kepler Bolivia</span>
          </button>

          <div style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--accent-cyan)' }}>
            Página Oficial • Virtual STEM Bolivia
          </div>

          <a 
            href="https://virtual-steam-demo.web.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: '0.85rem' }}
          >
            <Atom size={16} />
            <span>Abrir Demo en Vivo</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-orbit-pattern" style={{ padding: '64px 0 48px', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '880px' }}>
          <div className="badge-pill" style={{ justifyContent: 'center' }}>
            <FlaskConical size={16} />
            <span>Pliego Técnico e Investigativo Institucional</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '20px' }}>
            Virtual-STEM Bolivia: Laboratorio Digital de Ciencias
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '32px' }}>
            Catálogo completo de experimentos de química para educación secundaria, modelos de simulación matemática, metodología de 5 fases y arquitectura cloud.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a 
              href="https://virtual-steam-demo.web.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '14px 28px' }}
            >
              <Atom size={20} />
              <span>Abrir Demo App Externa en https://virtual-steam-demo.web.app/</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="container" style={{ padding: '64px 24px' }}>
        
        {/* Section 1: Leadership */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <UserCheck color="var(--accent-cyan)" />
            <span>1. Dirección General y Fundamentación Matemática</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            <div className="glass-card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '8px' }}>
                Blgo. Rodrigo Mariaca Cardozo
              </h3>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Dirección General de Proyecto
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Bajo su liderazgo estratégico, el proyecto **Virtual-STEM Bolivia** se consolida como una intervención tecnológica crítica para revertir la crisis de aprendizaje en ciencias exactas. Integra la analítica de Big Data para la detección temprana de brechas cognitivas en educación secundaria.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-lime)', marginBottom: '8px' }}>
                Andrés Alberdi Baptista
              </h3>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Arquitectura de Software y Lógica Matemática
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Formado en matemática pura por la Universidad Mayor de San Andrés (UMSA) y especialista en los Axiomas de Incidencia de Hilbert y Teoremas de Gödel. Diseñó los motores de simulación para que no sean meras animaciones, sino representaciones matemáticas exactas de la física y química real.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Complete Catalog of 120 Experiments with Formatted Math */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '12px' }}>
                <BookOpen color="var(--accent-lime)" />
                <span>2. Catálogo Oficial de Experimentos de Química ({ALL_EXPERIMENTS.length} Prácticas)</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                Extraído directamente del documento oficial <em>Guía de Experimentos Virtuales de Química Secundaria.xlsx / GuiExperimentos.csv</em>.
              </p>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="glass-card" style={{ padding: '20px', borderRadius: '16px', marginBottom: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Search Input */}
            <div style={{ flex: 1, minWidth: '260px', position: 'relative' }}>
              <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Buscar experimento por nombre, código o reactivo..."
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 42px',
                  borderRadius: '10px',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  fontSize: '0.92rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Filter Selector */}
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', flexShrink: 0 }}>
              {[
                { id: 'all', label: 'Todos los Niveles' },
                { id: '3.º', label: '3.º Sec. (Bloque 1)' },
                { id: '4.º', label: '4.º Sec. (Bloque 2)' },
                { id: '5.º', label: '5.º Sec. (Bloque 3)' },
                { id: '6.º', label: '6.º Sec. (Bloque 4)' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedGrade(tab.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: selectedGrade === tab.id ? 'linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))' : 'var(--bg-primary)',
                    color: selectedGrade === tab.id ? '#ffffff' : 'var(--text-secondary)',
                    border: selectedGrade === tab.id ? 'none' : '1px solid var(--border-color)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Experiments Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
            {filteredExperiments.map((exp, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--accent-cyan)', background: 'var(--bg-primary)', padding: '4px 10px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                      {exp.code}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--accent-lime)', fontWeight: 600 }}>
                      {exp.year}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
                    {formatMathAndChemicals(exp.name)}
                  </h4>
                  
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                    {formatMathAndChemicals(exp.desc)}
                  </p>

                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                    <strong>Objetivo:</strong> {formatMathAndChemicals(exp.obj)}
                  </div>
                </div>

                <div style={{
                  background: 'var(--bg-primary)',
                  padding: '12px',
                  borderRadius: '10px',
                  fontSize: '0.84rem',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-color)'
                }}>
                  <strong style={{ color: 'var(--accent-lime)' }}>Resultado Esperado:</strong> {formatMathAndChemicals(exp.res)}
                </div>
              </div>
            ))}
          </div>

          {filteredExperiments.length === 0 && (
            <div className="glass-card" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
              No se encontraron experimentos que coincidan con la búsqueda "{searchQuery}".
            </div>
          )}
        </div>

        {/* Section 3: Metacognitive 5-Phase Methodology with Rigorous Scientific Foundation */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Layers color="var(--accent-blue)" />
            <span>3. Ciclo de Aprendizaje Metacognitivo en 5 Fases</span>
          </h2>

          <div className="glass-card" style={{ padding: '36px' }}>
            {/* Scientific Introduction */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <GraduationCap size={22} />
                <span>Fundamentación Teórica y Ciencias Cognitivas</span>
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
                El diseño pedagógico de Virtual-STEM rompe con la instrucción tradicional memorística y la simple animación pasiva. Se fundamenta teóricamente en tres pilares de las ciencias cognitivas:
              </p>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', paddingLeft: '24px', lineHeight: '1.8', marginBottom: '24px' }}>
                <li><strong>Teoría de la Metacognición (Flavell, 1979)</strong>: Promueve la autorregulación consciente del estudiante sobre su propio proceso de pensamiento y toma de decisiones en el laboratorio.</li>
                <li><strong>Teoría de la Carga Cognitiva (Sweller, 1988)</strong>: Estructura la interfaz de simulación para reducir la carga extrínseca (ruido conceptual) y maximizar la carga germánica (construcción de esquemas mentales significativos).</li>
                <li><strong>Modelado de Aprendizaje Autorregulado (Zimmerman, 2002)</strong>: Guía al estudiante mediante ciclos de planificación previa, monitoreo en tiempo real y autoevaluación reflexiva.</li>
              </ul>
            </div>

            {/* Detailed 5 Phases Breakdown */}
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--accent-lime)', marginBottom: '20px' }}>
              Estructura Operativa de las 5 Fases Metacognitivas
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              
              {/* Phase 1 */}
              <div style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <span style={{ background: 'rgba(0, 168, 255, 0.2)', color: 'var(--accent-cyan)', padding: '4px 12px', borderRadius: '50px', fontWeight: 800, fontSize: '0.85rem' }}>FASE 1</span>
                  <h5 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Inducción en Seguridad y EPP (Protocolo Hojas MSDS)</h5>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  <strong>Descripción:</strong> Antes de interactuar con reactivos, el estudiante debe seleccionar el Equipo de Protección Personal (bata de laboratorio, gafas de seguridad, guantes de nitrilo) revisando las fichas de datos de seguridad (MSDS/SGA).<br />
                  <strong>Fundamento Científico:</strong> Activa el anclaje instruccional previo y establece esquemas de seguridad industrial según la norma ISO 45001 y protocolos de laboratorio químico (Sweller, 1988).
                </p>
              </div>

              {/* Phase 2 */}
              <div style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <span style={{ background: 'rgba(57, 255, 20, 0.2)', color: 'var(--accent-lime)', padding: '4px 12px', borderRadius: '50px', fontWeight: 800, fontSize: '0.85rem' }}>FASE 2</span>
                  <h5 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Ensamblaje Instruccional y Conexión de Instrumental</h5>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  <strong>Descripción:</strong> Montaje manipulativo de buretas, soporte universal, matraz aforado, vaso de precipitado y tubos de ensayo en la mesa de trabajo virtual.<br />
                  <strong>Fundamento Científico:</strong> Basado en el Aprendizaje Constructivista (Piaget, 1970; Vygotsky, 1978). La manipulación activa de componentes desarrolla la kinestesia conceptual y la orientación procedimental.
                </p>
              </div>

              {/* Phase 3 */}
              <div style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <span style={{ background: 'rgba(0, 114, 255, 0.2)', color: 'var(--accent-blue)', padding: '4px 12px', borderRadius: '50px', fontWeight: 800, fontSize: '0.85rem' }}>FASE 3</span>
                  <h5 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Calibración y Modelado de Parámetros Cuantitativos</h5>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  <strong>Descripción:</strong> Selección rigurosa de variables independientes y dependientes: masa (g), concentración molar (M), temperatura (°C), volumen (mL) y velocidad de agitación (RPM).<br />
                  <strong>Fundamento Científico:</strong> Estimula la Estrategia de Control de Variables (Klahr & Nigam, 2004), habilidad crítica para el pensamiento científico formal y el cálculo estequiométrico.
                </p>
              </div>

              {/* Phase 4 */}
              <div style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <span style={{ background: 'rgba(168, 85, 247, 0.2)', color: '#a855f7', padding: '4px 12px', borderRadius: '50px', fontWeight: 800, fontSize: '0.85rem' }}>FASE 4</span>
                  <h5 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Ejecución Dinámica y Visualización Multimodal</h5>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  <strong>Descripción:</strong> Renderizado continuo en 3D/Canvas acoplado en tiempo real a las ecuaciones diferenciales químicas (viraje de indicador, precipitación, desprendimiento gaseoso).<br />
                  <strong>Fundamento Científico:</strong> Teoría del Aprendizaje Multimodal (Mayer, 2009). Al conectar simultáneamente la representación macroscópica (color/precipitado) con el modelo simbólico (fórmula química), se consolida el aprendizaje profundo.
                </p>
              </div>

              {/* Phase 5 */}
              <div style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <span style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b', padding: '4px 12px', borderRadius: '50px', fontWeight: 800, fontSize: '0.85rem' }}>FASE 5</span>
                  <h5 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Evaluación Metacognitiva y Análisis Causa-Efecto (Error-Driven Learning)</h5>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  <strong>Descripción:</strong> Si el estudiante comete un error (p. ej. sobrepasar el punto de equivalencia en la titulación), el sistema no penaliza con un cero, sino que captura la desviación para un análisis reflexivo guiado.<br />
                  <strong>Fundamento Científico:</strong> Monitoreo Metacognitivo y Aprendizaje Basado en Errores (Schraw & Moshman, 1995; Hattie, 2009). Transforma el fallo en un dato pedagógico para la autoconciencia conceptual.
                </p>
              </div>

            </div>

            {/* Scientific References */}
            <div style={{
              background: 'var(--bg-primary)',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid var(--border-color)'
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BookMarked size={18} />
                <span>Referencias Bibliográficas y Fundamentación Científica</span>
              </h4>

              <ul style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.8', listStyleType: 'none' }}>
                <li style={{ marginBottom: '8px' }}>• <strong>Flavell, J. H. (1979).</strong> <em>Metacognition and cognitive monitoring: A new area of cognitive-developmental inquiry.</em> American Psychologist, 34(10), 906–911.</li>
                <li style={{ marginBottom: '8px' }}>• <strong>Sweller, J. (1988).</strong> <em>Cognitive load during problem solving: Effects on learning.</em> Cognitive Science, 12(2), 257–285.</li>
                <li style={{ marginBottom: '8px' }}>• <strong>Schraw, G., & Moshman, D. (1995).</strong> <em>Metacognitive theories.</em> Educational Psychology Review, 7(4), 351–371.</li>
                <li style={{ marginBottom: '8px' }}>• <strong>Zimmerman, B. J. (2002).</strong> <em>Becoming a self-regulated learner: An overview.</em> Theory Into Practice, 41(2), 64–70.</li>
                <li style={{ marginBottom: '8px' }}>• <strong>Klahr, D., & Nigam, M. (2004).</strong> <em>The equivalence of learning paths in early science instruction: Effects of direct instruction and discovery learning.</em> Psychological Science, 15(10), 661–667.</li>
                <li style={{ marginBottom: '8px' }}>• <strong>Mayer, R. E. (2009).</strong> <em>Multimedia Learning</em> (2nd ed.). Cambridge University Press.</li>
                <li>• <strong>Hattie, J. (2009).</strong> <em>Visible Learning: A Synthesis of Over 800 Meta-Analyses Relating to Achievement.</em> Routledge.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom CTA to External Live Demo */}
        <div className="glass-card" style={{ padding: '40px', textAlign: 'center', borderRadius: '24px', border: '1.5px solid var(--border-glow)' }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px' }}>
            ¿Listo para explorar la simulación en tiempo real?
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Accede al laboratorio interactivo desplegado en Firebase Hosting.
          </p>
          <a 
            href="https://virtual-steam-demo.web.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
            style={{ padding: '16px 36px', fontSize: '1.1rem' }}
          >
            <Atom size={22} />
            <span>Abrir Demo en https://virtual-steam-demo.web.app/</span>
            <ExternalLink size={18} />
          </a>
        </div>

      </div>

    </div>
  );
}
