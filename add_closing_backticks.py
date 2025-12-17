import re

# Read the file
with open(r'src\data\studyLibrary.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern: Find lines that are just "        }" (8 spaces + closing brace)
# These should have a closing backtick before them
# We'll insert a backtick on the line before

# Split into lines
lines = content.split('\n')
fixed_lines = []
i = 0

while i < len(lines):
    line = lines[i]
    
    # Check if this line is just closing brace with leading spaces
    if line.strip() == '}' and i > 0:
        # Check if previous line is content (not already a backtick)
        prev_line = lines[i-1].rstrip()
        if prev_line and not prev_line.endswith('`'):
            # Add a closing backtick line before this closing brace
            indent = len(line) - len(line.lstrip())
            fixed_lines.append(' ' * indent + '`')
    
    fixed_lines.append(line)
    i += 1

# Join back
content = '\n'.join(fixed_lines)

# Write back
with open(r'src\data\studyLibrary.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Added closing backticks where needed")
print("File should now have valid JavaScript syntax!")