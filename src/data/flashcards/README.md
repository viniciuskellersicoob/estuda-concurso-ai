# Flashcards

Os flashcards ficam em `src/data/flashcards/` (um arquivo por matéria) e são agregados em `src/data/flashcards.js`.

## Como adicionar/expandir uma matéria

1. Crie/edite um módulo em `src/data/flashcards/` (ex.: `portugues.js`).
2. Exporte a matéria no `src/data/flashcards/index.js`.
3. Mapeie a matéria no `src/data/flashcards.js` (chave usada na UI) e configure:
   - `name`: nome exibido
   - `icon`: emoji exibido
   - `exams`: concursos em que a matéria aparece
   - `cards`: lista `[{id, front, back}]` (usamos `makeCards(prefix, pairs)` para gerar IDs)

