# Script para corrigir TODOS os problemas de encoding UTF-8
$filePath = "src\data\studyLibrary.js"

Write-Host "Lendo arquivo..." -ForegroundColor Cyan
$content = [System.IO.File]::ReadAllText((Resolve-Path $filePath), [System.Text.Encoding]::UTF8)

$corrections = 0

# Corrigir todas as palavras quebradas encontradas
$wordFixes = @{
    'Prob abilidade' = 'Probabilidade'
    'Apresent ação'  = 'Apresentação' 
    'Mult ifator'    = 'Multifator'
    'Consent imento' = 'Consentimento'
    'Ad itivo'       = 'Aditivo'
}

foreach ($key in $wordFixes.Keys) {
    if ($content -match [regex]::Escape($key)) {
        $content = $content.Replace($key, $wordFixes[$key])
        $corrections++
        Write-Host "Corrigido palavra: $key -> $($wordFixes[$key])" -ForegroundColor Green
    }
}

# Corrigir tags HTML malformadas
$htmlFixes = @{
    '\u003c br \u003e' = '<br>'
    '\u003cbr\u003e'   = '<br>'
}

foreach ($key in $htmlFixes.Keys) {
    if ($content -match [regex]::Escape($key)) {
        $content = $content.Replace($key, $htmlFixes[$key])
        $corrections++
        Write-Host "Corrigido HTML: $key -> $($htmlFixes[$key])" -ForegroundColor Green
    }
}

# Remover delimit adores de barra invertida tripla ao redor de comandos
# Exemplo: \\\dir\\\ -> dir
$pattern = '\\{3,}([a-zA-Z0-9\s=\.]+?)\\{3,}'
$matches = [regex]::Matches($content, $pattern)
foreach ($match in $matches) {
    $fixed = $match.Groups[1].Value
    $content = $content.Replace($match.Value, $fixed)
    $corrections++
    Write-Host "Corrigido delimitador: $($match.Value) -> $fixed" -ForegroundColor Green
}

# Corrigir espaços dentro de formatação markdown **bold**
# ** Palavra ** -> **Palavra**
$pattern2 = '\*\* ([A-Za-záàâãéêíóôõúçÁÀÂÃÉÊÍÓÔÕÚÇ]+) \*\*'
if ($content -match $pattern2) {
    $content = $content -replace $pattern2, '**$1**'
    $corrections++
    Write-Host "Corrigido formatação markdown bold" -ForegroundColor Green
}

# Salvar com encoding UTF-8 SEM BOM
Write-Host "`nSalvando correções..." -ForegroundColor Cyan
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText((Resolve-Path $filePath), $content, $utf8NoBom)

Write-Host "`nTotal de tipos de correções: $corrections" -ForegroundColor Yellow
Write-Host "Arquivo corrigido e salvo em UTF-8 sem BOM!" -ForegroundColor Green
