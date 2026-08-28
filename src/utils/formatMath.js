/**
 * Utilidad de formateo de texto matemático y fórmulas químicas.
 * Convierte código LaTeX ($...$) y notación química en caracteres Unicode e HTML legibles.
 */

const subscriptMap = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
  '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
  '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎',
  'a': 'ₐ', 'e': 'ₑ', 'o': 'ₒ', 'x': 'ₓ', 'h': 'ₕ', 'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'p': 'ₚ', 's': 'ₛ', 't': 'ₜ'
};

const superscriptMap = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
  'n': 'ⁿ', 'i': 'ⁱ'
};

function toSubscript(str) {
  return str.split('').map(char => subscriptMap[char] || char).join('');
}

function toSuperscript(str) {
  return str.split('').map(char => superscriptMap[char] || char).join('');
}

export function formatMathAndChemicals(text) {
  if (!text || typeof text !== 'string') return '';

  let formatted = text;

  // 1. Reemplazos de grados y símbolos LaTeX comunes
  formatted = formatted.replace(/\$\^{\\circ}C\$/g, '°C');
  formatted = formatted.replace(/\$\^{\\circ}\$/g, '°');
  formatted = formatted.replace(/\\circ|\{\\circ\}/g, '°');
  formatted = formatted.replace(/\^°/g, '°');
  formatted = formatted.replace(/\\rightarrow|\\implies|\\to/g, '➔');
  formatted = formatted.replace(/\\rho/g, 'ρ');
  formatted = formatted.replace(/\\cdot/g, '·');
  formatted = formatted.replace(/\\downarrow/g, '↓');
  formatted = formatted.replace(/\\uparrow/g, '↑');
  formatted = formatted.replace(/\\Delta/g, 'Δ');
  formatted = formatted.replace(/\\text\{([^}]+)\}/g, '$1');
  formatted = formatted.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1 / $2');

  // 2. Subíndices _{xyz} o _x
  formatted = formatted.replace(/_\{([^}]+)\}/g, (_, inner) => toSubscript(inner));
  formatted = formatted.replace(/_([0-9a-z])/gi, (_, char) => toSubscript(char));

  // 3. Superíndices ^{xyz} o ^x
  formatted = formatted.replace(/\^\{([^}]+)\}/g, (_, inner) => toSuperscript(inner));
  formatted = formatted.replace(/\^([0-9a-z])/gi, (_, char) => toSuperscript(char));

  // 4. Limpiar signos de dólar $
  formatted = formatted.replace(/\$/g, '');

  // 5. Normalizar espacios
  formatted = formatted.replace(/\s+/g, ' ').trim();

  return formatted;
}
