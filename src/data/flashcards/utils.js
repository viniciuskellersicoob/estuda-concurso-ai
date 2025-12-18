const normalize = (value = '') =>
    String(value)
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .replace(/\s+/g, ' ');

const inferExamFromFront = (front) => {
    const normalized = normalize(front);
    if (normalized.startsWith('pmdf:')) return ['pmdf'];
    if (normalized.startsWith('detran-df:') || normalized.startsWith('detran df:') || normalized.startsWith('detran:'))
        return ['detran-df'];
    if (normalized.startsWith('camara:') || normalized.startsWith('camara dos deputados:') || normalized.startsWith('camara -'))
        return ['camara-deputados'];
    if (normalized.startsWith('policia penal mg:') || normalized.startsWith('ppm mg:')) return ['policia-penal-mg'];
    return null;
};

const normalizeExams = (exams) => {
    if (!exams) return null;
    if (Array.isArray(exams)) return exams.filter(Boolean);
    if (typeof exams === 'string') return [exams];
    return null;
};

export const makeCards = (prefix, pairs) =>
    pairs.map(([front, back, topic, exams], index) => {
        const normalizedExams = normalizeExams(exams) || inferExamFromFront(front);
        return {
            id: `${prefix}-${index + 1}`,
            front,
            back,
            ...(topic ? { topic } : {}),
            ...(normalizedExams ? { exams: normalizedExams } : {}),
        };
    });
