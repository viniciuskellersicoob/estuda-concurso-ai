# Script para corrigir problemas de encoding UTF-8
$filePath = "src\data\studyLibrary.js"

Write-Host "Lendo arquivo..." -ForegroundColor Cyan
$content = [System.IO.File]::ReadAllText((Resolve-Path $filePath), [System.Text.Encoding]::UTF8)

$corrections = 0

# Corrigir palavras quebradas
$fixes = @(
    @('Apresent ação', 'Apresentação'),
    @('Ad itivo', 'Aditivo')
)

foreach ($fix in $fixes) {
    if ($content -match [regex]::Escape($fix[0])) {
        $content = $content.Replace($fix[0], $fix[1])
        $corrections++
        Write-Host "Corrigido: $($fix[0]) -> $($fix[1])" -ForegroundColor Green
    }
}

# Corrigir HTML malformado
$content = $content.Replace('\u003c br \u003e', '<br>')
$content = $content.Replace('\u003cbr\u003e', '<br>')

# Salvar com UTF-8 sem BOM
Write-Host "Salvando..." -ForegroundColor Cyan
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText((Resolve-Path $filePath), $content, $utf8NoBom)

Write-Host "Concluido! Correcoes: $corrections" -ForegroundColor Green
