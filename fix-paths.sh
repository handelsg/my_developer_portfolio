#!/bin/bash
# Script para corrigir paths no HTML após o build

echo "Fazendo build..."
bunx vite build

echo "Corrigindo paths no HTML..."
# Substituir /assets/ por /modern-coder-resume/assets/
sed -i 's|/assets/|/modern-coder-resume/assets/|g' dist/index.html
sed -i 's|/favicon|/modern-coder-resume/favicon|g' dist/index.html

echo "Paths corrigidos!"
cat dist/index.html | grep -E "(assets|favicon)"
