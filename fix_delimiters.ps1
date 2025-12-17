# PowerShell script to fix template literals in studyLibrary.js
# Read the file as raw bytes
$path = "C:\Users\viniciusk.goncalves\Documents\web3\estuda-concurso-ai\src\data\studyLibrary.js"
$content = Get-Content $path -Raw

# Replace the triple backslash sequence with backtick
# In PowerShell, we need to escape backslashes properly
$content = $content -replace '\\\\\\\\', '`'

# Save back to file
$content | Set-Content $path -NoNewline

Write-Host "Template literal delimiters fixed successfully!"
