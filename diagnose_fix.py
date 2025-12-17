import re

# Read the file
with open(r'src\data\studyLibrary.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Show a sample of what we're looking for
lines = content.split('\n')
for i, line in enumerate(lines[355:365], start=356):
    if 'content:' in line:
        print(f"Line {i}: {repr(line[:50])}")

# Try multiple possible patterns
patterns = [
    (r'content: \\\\\\\\\\\\', 'content: `'),  # 6 backslashes
    (r'content: \\\\\\\\', 'content: `'),       # 4 backslashes
    (r'content: \\\\\\', 'content: `'),         # 3 backslashes (as displayed)
]

for pattern, replacement in patterns:
    matches = re.findall(pattern, content)
    if matches:
        print(f"\nFound {len(matches)} matches for pattern: {pattern}")
        content = re.sub(pattern, replacement, content)
        break
else:
    print("\nNo pattern matched. Showing actual bytes around 'content:'")
    idx = content.find('content:',2000)
    if idx != -1:
        sample = content[idx:idx+20]
        print(f"Sample: {repr(sample)}")
        for char in sample[8:13]:
            print(f"  Char: {char!r} (ord: {ord(char)})")

# Write back
with open(r'src\data\studyLibrary.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("\nFile processing completed.")
