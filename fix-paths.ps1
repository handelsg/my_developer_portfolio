# Script PowerShell para corrigir paths após build

Write-Host "Fazendo build..."
bunx vite build

Write-Host "Corrigindo paths no HTML..."

# Ler o conteúdo do arquivo
$htmlContent = Get-Content "dist/index.html" -Raw

# Substituir os paths
$htmlContent = $htmlContent -replace '/assets/', '/modern-coder-resume/assets/'
$htmlContent = $htmlContent -replace '/favicon', '/modern-coder-resume/favicon'

# Salvar o arquivo corrigido
Set-Content -Path "dist/index.html" -Value $htmlContent

Write-Host "Paths corrigidos!"
Write-Host "Verificando resultado:"
Select-String -Path "dist/index.html" -Pattern "(assets|favicon)" | ForEach-Object { $_.Line }
