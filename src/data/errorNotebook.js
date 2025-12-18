const STORAGE_KEY = 'errorNotebook';

const readNotebook = () => {
    if (typeof window === 'undefined') return [];
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
        return [];
    } catch (err) {
        console.error('Erro ao ler caderno de erros:', err);
        return [];
    }
};

const persistNotebook = (entries) => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
};

export const getErrorEntries = ({ includeResolved = false } = {}) => {
    const entries = readNotebook().map((entry) => ({
        wrongCount: 1,
        ...entry,
    }));
    return includeResolved ? entries : entries.filter((entry) => !entry.resolvedAt);
};

export const clearErrorNotebook = () => persistNotebook([]);

export const removeErrorEntry = (entryId) => {
    const notebook = readNotebook();
    persistNotebook(notebook.filter((entry) => entry.entryId !== entryId));
};

export const addErrorEntry = (entry) => {
    const notebook = readNotebook();
    const now = new Date().toISOString();
    const existingIndex = notebook.findIndex((item) => item.questionId === entry.questionId);

    if (existingIndex >= 0) {
        const existing = notebook[existingIndex];
        const updated = {
            ...existing,
            ...entry,
            entryId: existing.entryId || `${entry.questionId}`,
            wrongCount: (existing.wrongCount || 1) + 1,
            recordedAt: existing.recordedAt || now,
            lastWrongAt: now,
            resolvedAt: null,
        };
        const next = [...notebook];
        next.splice(existingIndex, 1);
        next.unshift(updated);
        persistNotebook(next);
        return updated;
    }

    const newEntry = {
        ...entry,
        entryId: `${entry.questionId}`,
        wrongCount: 1,
        recordedAt: now,
        lastWrongAt: now,
        resolvedAt: null,
    };
    persistNotebook([newEntry, ...notebook]);
    return newEntry;
};

export const resolveErrorByQuestionId = (questionId) => {
    const notebook = readNotebook();
    const idx = notebook.findIndex((entry) => entry.questionId === questionId);
    if (idx < 0) return;
    const now = new Date().toISOString();
    const updated = { ...notebook[idx], resolvedAt: now };
    const next = [...notebook];
    next.splice(idx, 1);
    next.unshift(updated);
    persistNotebook(next);
};
