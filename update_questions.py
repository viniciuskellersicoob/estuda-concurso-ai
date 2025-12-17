from pathlib import Path

path = Path('src/data/questionBank.js')
data = path.read_text(encoding='utf-8')

SNIPPETS = []

def insert_snippet(text, marker, snippet):
    idx = text.index(marker)
    end = text.index('\n]);', idx)
    return text[:end] + snippet + text[end:]

for entry in SNIPPETS:
    data = insert_snippet(data, entry['marker'], entry['snippet'])

path.write_text(data, encoding='utf-8')
