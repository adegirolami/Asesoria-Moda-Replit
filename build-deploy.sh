#!/bin/bash
# Script para generar archivos de producción listos para deploy
# Corrige automáticamente las rutas absolutas a rutas relativas

echo "🚀 Generando build de producción..."
npm run build

echo "🔧 Corrigiendo rutas para compatibilidad con hosting externo..."

# Corregir rutas en index.html
sed -i 's|src="/assets/|src="./assets/|g' dist/public/index.html
sed -i 's|href="/assets/|href="./assets/|g' dist/public/index.html

# Corregir rutas en archivos JavaScript
find dist/public/assets -name "*.js" -type f -exec sed -i 's|"/assets/|"./assets/|g' {} \;

echo "✅ Build completado!"
echo ""
echo "📦 Archivos listos en: dist/public/"
echo ""
echo "Para subir a tu hosting:"
echo "1. Descarga la carpeta dist/public/"
echo "2. Sube TODO el contenido a tu servidor"
echo "3. Mantén la estructura de carpetas intacta"
echo ""
echo "El sitio funcionará en:"
echo "  ✓ Archivos locales (file:///)"
echo "  ✓ Cualquier servidor web"
echo "  ✓ Subdirectorios de servidores"
