import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Pruebas de Calidad SEO y Estructura Meta', () => {
  it('el archivo index.html debe incluir metadatos SEO requeridos', () => {
    const indexPath = path.resolve(__dirname, '../../index.html');
    const htmlContent = fs.readFileSync(indexPath, 'utf-8');

    expect(htmlContent).toContain('<title>Kepler Bolivia - Innovación Educativa y Simulaciones STEM</title>');
    expect(htmlContent).toContain('name="description"');
    expect(htmlContent).toContain('property="og:title"');
    expect(htmlContent).toContain('href="/LogoKepler.jpeg"');
  });
});
