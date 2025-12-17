# Script final para corrigir HTML e espaços
$filePath = "src\data\studyLibrary.js"

Write-Host "Corrigindo HTML..." -ForegroundColor Cyan
$content = [System.IO.File]::ReadAllText((Resolve-Path $filePath), [System.Text.Encoding]::UTF8)

# Corrigir tags HTML malformadas
$content = $content.Replace('\u003c br \u003e', '<br>')
$content = $content.Replace('\u003cbr\u003e', '<br>')
$content = $content.Replace('< br >', '<br>')
$content = $content.Replace(' <br>', '<br>')
$content = $content.Replace('<br> ', '<br>')

# Corrigir formatação markdown com espaços extras
$content = $content.Replace('** Assiste - lhe **', '**Assiste-lhe**')
$content = $content.Replace('—<br>', '—  <br>')

# Salvar com UTF-8 sem BOM
Write-Host "Salvando..." -ForegroundColor Cyan
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText((Resolve-Path $filePath), $content, $utf8NoBom)

Write-Host "HTML corrigido com sucesso!" -ForegroundColor Green
