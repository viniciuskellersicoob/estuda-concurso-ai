# Script para corrigir problemas de encoding no studyLibrary.js
$filePath = "src\data\studyLibrary.js"

Write-Host "Lendo arquivo..." -ForegroundColor Cyan
$content = Get-Content $filePath -Raw -Encoding UTF8

# Contador de correções
$corrections = 0

# Corrigir palavras quebradas por encoding
$replacements = @{
    'Prob abilidade'          = 'Probabilidade'
    'Apresent ação'           = 'Apresentação'
    'Mult ifator'             = 'Multifator'
    'Consent imento'          = 'Consentimento'
    '\\\dir\\\'               = 'dir'
    '\\\cd\\\'                = 'cd'
    '\\\md\\\'                = 'md'
    '\\\mkdir\\\'             = 'mkdir'
    '\\\copy\\\'              = 'copy'
    '\\\move\\\'              = 'move'
    '\\\del\\\'               = 'del'
    '\\\cls\\\'               = 'cls'
    '\\\ipconfig\\\'          = 'ipconfig'
    '\\\ls\\\'                = 'ls'
    '\\\cp\\\'                = 'cp'
    '\\\mv\\\'                = 'mv'
    '\\\rm\\\'                = 'rm'
    '\\\chmod\\\'             = 'chmod'
    '\\\ifconfig\\\'          = 'ifconfig'
    '\\\rwx\\\'               = 'rwx'
    '\\\chmod 755 arquivo\\\' = 'chmod 755 arquivo'
    '\\\= SE'                 = '=SE'
    '\\\= PROCV'              = '=PROCV'
}

foreach ($key in $replacements.Keys) {
    if ($content -match [regex]::Escape($key)) {
        $content = $content -replace [regex]::Escape($key), $replacements[$key]
        $corrections++
        Write-Host "Corrigido: $key -> $($replacements[$key])" -ForegroundColor Green
    }
}

# Corrigir asteriscos com espaços
$pattern = '\*\* ([A-Za-z]+) \*\*'
$content = $content -replace $pattern, '**$1**'

# Salvar arquivo corrigido
Write-Host "`nSalvando correções..." -ForegroundColor Cyan
[System.IO.File]::WriteAllText((Resolve-Path $filePath), $content, [System.Text.Encoding]::UTF8)

Write-Host "`nTotal de correções: $corrections" -ForegroundColor Yellow
Write-Host "Arquivo corrigido com sucesso!" -ForegroundColor Green
