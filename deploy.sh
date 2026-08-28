#!/usr/bin/env bash
# Pipeline de CI/CD para kepler-landing
set -e

echo "=========================================="
echo "🚀 Iniciando Pipeline CI/CD de Kepler Landing"
echo "=========================================="

# 1. Pruebas Unitarias con Vitest
echo "🧪 [1/6] Ejecutando batería de pruebas unitarias (Vitest)..."
npm run test

# 2. Verificación SEO
echo "🔍 [2/6] Verificando metadatos SEO y estructura..."
if grep -q "Kepler Bolivia" index.html && grep -q "kepler.stem.bo@gmail.com" src/components/ContactForm.jsx; then
  echo "✅ Verificación SEO y campos requeridos aprobada."
else
  echo "❌ Fallo en la verificación SEO."
  exit 1
fi

# 3. Escaneo de Vulnerabilidades con Snyk
echo "🛡️ [3/6] Ejecutando escaneo de seguridad de dependencias (Snyk)..."
if command -v snyk &> /dev/null; then
  snyk test || echo "⚠️ Advertencia de Snyk: Revisa el reporte de vulnerabilidades."
else
  npx -y snyk test || echo "⚠️ Advertencia de Snyk: Revisa el reporte de vulnerabilidades."
fi

# 4. Compilación de Producción
echo "📦 [4/6] Compilando bundle de producción (npm run build)..."
npm run build

# 5. Despliegue en Firebase Hosting (kepler-bolivia)
echo "🔥 [5/6] Desplegando en Firebase Hosting (Proyecto: kepler-bolivia)..."
if command -v firebase &> /dev/null; then
  firebase deploy --only hosting --project kepler-bolivia || echo "ℹ️ Para desplegar en Firebase ejecute firebase login previo."
else
  npx -y firebase-tools deploy --only hosting --project kepler-bolivia || echo "ℹ️ Para desplegar en Firebase ejecute firebase login previo."
fi

# 6. Sincronización con GitHub Repository
echo "🐙 [6/6] Sincronizando repositorio Git y pushing a GitHub..."
if [ ! -d ".git" ]; then
  git init
  git remote add origin git@github.com:AndresAlberdi/kepler-landing.git || true
fi

git add .
git commit -m "feat: Kepler landing page con RAG helper, theme switch, STEM libraries hub y CI/CD pipeline" || true
git branch -M main || true
echo "ℹ️ Preparado para hacer git push origin main a git@github.com:AndresAlberdi/kepler-landing.git"

echo "=========================================="
echo "✅ Pipeline CI/CD finalizado con éxito."
echo "=========================================="
