const fs = require('fs');
const path = require('path');

// Caminho para o arquivo index.html gerado
const htmlPath = path.join(__dirname, 'dist', 'index.html');

console.log('🔍 Corrigindo paths do GitHub Pages...');

try {
  // Verifica se o arquivo existe
  if (!fs.existsSync(htmlPath)) {
    console.error('❌ Arquivo index.html não encontrado em:', htmlPath);
    process.exit(1);
  }
  
  // Lê o conteúdo do arquivo HTML
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Conta quantas substituições serão feitas
  const assetsSrcMatches = (html.match(/src="\/assets\//g) || []).length;
  const assetsHrefMatches = (html.match(/href="\/assets\//g) || []).length;
  const faviconMatches = (html.match(/href="\/favicon/g) || []).length;
  
  // Faz as substituições
  html = html.replace(/src="\/assets\//g, 'src="/modern-coder-resume/assets/');
  html = html.replace(/href="\/assets\//g, 'href="/modern-coder-resume/assets/');
  html = html.replace(/href="\/favicon/g, 'href="/modern-coder-resume/favicon');
  
  // Escreve o arquivo corrigido
  fs.writeFileSync(htmlPath, html, 'utf8');
  
  console.log('✅ Paths corrigidos com sucesso!');
  console.log(`   - ${assetsSrcMatches} script tags corrigidos`);
  console.log(`   - ${assetsHrefMatches} stylesheet links corrigidos`);
  console.log(`   - ${faviconMatches} favicon links corrigidos`);
  console.log('   - Todos os assets agora apontam para /modern-coder-resume/');
} catch (error) {
  console.error('❌ Erro ao corrigir paths:', error.message);
  process.exit(1);
}
