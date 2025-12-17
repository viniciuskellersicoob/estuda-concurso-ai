import re

# Read the file
with open(r'src\data\studyLibrary.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix closing delimiters - standalone lines with just backslashes
# Pattern: whitespace, 6 backslashes, optional whitespace, end of line
pattern = r'^\s*\\\\\\\\\\\\\s*$'
replacement = '`'

matches_before = len(re.findall(pattern, content, re.MULTILINE))
print(f"Found {matches_before} malformed closing delimiters")

content = re.sub(pattern, replacement, content, flags=re.MULTILINE)

# Write back
with open(r'src\data\studyLibrary.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Fixed {matches_before} closing delimiters")
print("Template literal syntax should now be correct!")
