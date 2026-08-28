import React from 'react';
import { BookOpen, ExternalLink, Globe, GraduationCap, Library, Layers } from 'lucide-react';

export default function StemLibraries() {
  const stemLibraries = [
    {
      name: "PhET Interactive Simulations",
      org: "University of Colorado Boulder",
      desc: "Simulaciones interactivas gratuitas de física, química, biología, ciencias de la tierra y matemáticas.",
      url: "https://phet.colorado.edu/es/",
      category: "Simulaciones Multidisciplinarias",
      badgeColor: "#00A8FF"
    },
    {
      name: "Khan Academy en Español",
      org: "Fundación Khan Academy",
      desc: "Plataforma gratuita con miles de lecciones, ejercicios y videos instructivos de matemática, física y química.",
      url: "https://es.khanacademy.org/",
      category: "Educación Abierta K-12 & Universidad",
      badgeColor: "#16A34A"
    },
    {
      name: "OpenStax STEM Textbooks",
      org: "Rice University",
      desc: "Libros de texto universitarios y de secundaria completamente libres, revisados por pares y con licencias abiertas.",
      url: "https://openstax.org/",
      category: "Libros de Texto Abiertos",
      badgeColor: "#0072FF"
    },
    {
      name: "arXiv.org Open Science",
      org: "Cornell University",
      desc: "Repositorio de acceso abierto para más de 2 millones de artículos científicos en física, matemática y computación.",
      url: "https://arxiv.org/",
      category: "Investigación Abierta",
      badgeColor: "#39FF14"
    },
    {
      name: "CK-12 Foundation FlexBooks",
      org: "CK-12 Foundation",
      desc: "Recursos educativos digitales interactivos y personalizables en ciencia, tecnología, ingeniería y matemáticas.",
      url: "https://www.ck12.org/",
      category: "FlexBooks e Ingeniería",
      badgeColor: "#A855F7"
    },
    {
      name: "MIT OpenCourseWare",
      org: "Massachusetts Institute of Technology",
      desc: "Publicación libre e incondicional de los materiales de prácticamente todos los cursos universitarios del MIT.",
      url: "https://ocw.mit.edu/",
      category: "Cursos Abiertos Universitaros",
      badgeColor: "#EC4899"
    },
    {
      name: "Europe PMC & PubMed Open",
      org: "EMBL-EBI / NCBI",
      desc: "Acceso libre a millones de publicaciones biomédicas, artículos de investigación y literatura en ciencias de la vida.",
      url: "https://europepmc.org/",
      category: "Literatura Científica y Biología",
      badgeColor: "#F59E0B"
    },
    {
      name: "ChemRxiv & BioRxiv",
      org: "ACS, RSC & CSHL",
      desc: "Servidores de preprints libres dedicados a la divulgación temprana de hallazgos en ciencias químicas y biológicas.",
      url: "https://chemrxiv.org/",
      category: "Preprints Químicos y Biológicos",
      badgeColor: "#06B6D4"
    }
  ];

  return (
    <section id="bibliotecas-stem" className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px' }}>
          <div className="badge-pill" style={{ justifyContent: 'center' }}>
            <Library size={16} />
            <span>Fuentes Principales de Educación Abierta</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Hub de Bibliotecas Libres de STEM
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            Accede a las principales plataformas mundiales de recursos científicos abiertos, libros libres y simuladores para potenciar tu aprendizaje.
          </p>
        </div>

        {/* Grid of STEM Libraries */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {stemLibraries.map((lib, idx) => (
            <div key={idx} className="glass-card" style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '50px',
                    background: `rgba(0, 168, 255, 0.1)`,
                    border: `1px solid ${lib.badgeColor}`,
                    color: lib.badgeColor
                  }}>
                    {lib.category}
                  </span>
                  <Globe size={18} color="var(--text-muted)" />
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '6px' }}>
                  {lib.name}
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '14px', fontWeight: 500 }}>
                  {lib.org}
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                  {lib.desc}
                </p>
              </div>

              <a 
                href={lib.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
                style={{
                  padding: '10px 18px',
                  fontSize: '0.9rem',
                  width: '100%',
                  justifyContent: 'center'
                }}
              >
                <span>Visitar Biblioteca Libre</span>
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
