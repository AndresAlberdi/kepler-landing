import { describe, it, expect } from 'vitest';
import { queryKeplerRAG } from '../data/ragKnowledgeBase';

describe('Pruebas del Motor GenAI RAG de Kepler Bolivia', () => {
  it('debe responder correctamente a preguntas sobre Kepler y Virtual STEM', () => {
    const result = queryKeplerRAG('¿Qué es Virtual STEM y cuál es su demo?');
    expect(result.success).toBe(true);
    expect(result.inScope).toBe(true);
    expect(result.answer).toContain('virtual-steam-demo.web.app');
  });

  it('debe identificar a los líderes del proyecto (Rodrigo Mariaca y Andrés Alberdi)', () => {
    const result = queryKeplerRAG('¿Quiénes dirigen el proyecto Virtual STEM?');
    expect(result.success).toBe(true);
    expect(result.answer).toContain('Rodrigo Mariaca');
    expect(result.answer).toContain('Andrés Alberdi');
  });

  it('debe detallar los laboratorios de química', () => {
    const result = queryKeplerRAG('¿Qué laboratorios de química incluye la plataforma?');
    expect(result.success).toBe(true);
    expect(result.answer).toMatch(/molaridad/i);
    expect(result.answer).toMatch(/titulación/i);
    expect(result.answer).toMatch(/tollens/i);
  });

  it('debe proporcionar la dirección de contacto kepler.stem.bo@gmail.com', () => {
    const result = queryKeplerRAG('¿Cuál es el correo de contacto de Kepler?');
    expect(result.success).toBe(true);
    expect(result.answer).toContain('kepler.stem.bo@gmail.com');
  });

  it('debe rechazar estrictamente preguntas fuera de ámbito (fuera de Kepler y STEM)', () => {
    const result = queryKeplerRAG('¿Quién ganó el mundial de fútbol 2022?');
    expect(result.inScope).toBe(false);
    expect(result.answer).toContain('Disculpa, como asistente especializado de Kepler Bolivia, solo puedo responder');
  });
});
