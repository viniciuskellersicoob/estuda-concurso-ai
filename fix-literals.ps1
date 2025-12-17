# Read the file
$filePath = "src\data\studyLibrary.js"
$content = Get-Content $filePath -Raw

# Count before
$beforeMatches = ([regex]::Matches($content, 'content: \\\\\\\\')).Count
Write-Host "Found $beforeMatches malformed opening delimiters"

# Replace opening delimiters: content: \\\\\\\ with content: `
$content = $content -replace 'content: \\\\\\\\', 'content: `'

# Replace closing delimiters: standalone \\\\\\\ on a line with `
$content = $content -replace '(?m)^\s*\\\\\\\\\s*$', '`'

# Save
$content | Set-Content $filePath -NoNewline

Write-Host "Template literal delimiters have been fixed!"
Write-Host "Please check the dev server for errors."
