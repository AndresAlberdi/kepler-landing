import { describe, it, expect } from 'vitest';
import { formatMathAndChemicals } from '../utils/formatMath';

describe('Pruebas de Formateo Matemático y Químico', () => {
  it('debe convertir C_1V_1 = C_2V_2 a C₁V₁ = C₂V₂', () => {
    const input = '$C_1V_1 = C_2V_2$';
    const output = formatMathAndChemicals(input);
    expect(output).toBe('C₁V₁ = C₂V₂');
  });

  it('debe convertir H_2O_2 y HNO_3 a H₂O₂ y HNO₃', () => {
    expect(formatMathAndChemicals('$H_2O_2$')).toBe('H₂O₂');
    expect(formatMathAndChemicals('$HNO_3$')).toBe('HNO₃');
    expect(formatMathAndChemicals('$35^{\\circ}C$')).toBe('35°C');
    expect(formatMathAndChemicals('$\\rho = m/V$')).toBe('ρ = m/V');
  });
});
