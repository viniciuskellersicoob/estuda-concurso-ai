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

export const getErrorEntries = () => readNotebook();

export const clearErrorNotebook = () => persistNotebook([]);

export const removeErrorEntry = (entryId) => {
    const notebook = readNotebook();
    persistNotebook(notebook.filter((entry) => entry.entryId !== entryId));
};

export const addErrorEntry = (entry) => {
    const notebook = readNotebook();
    const newEntry = {
        ...entry,
        entryId: `${entry.questionId}-${Date.now()}`,
        recordedAt: new Date().toISOString(),
    };
    const filtered = notebook.filter((item) => item.questionId !== entry.questionId);
    filtered.unshift(newEntry);
    persistNotebook(filtered);
    return newEntry;
};
