import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'appPreferences_v1';

const PreferencesContext = createContext(null);

const DEFAULTS = {
    focusMode: false,
    fontScale: 1, // 1, 1.15, 1.3
    simpleLanguage: false,
    audioEnabled: true,
};

function readStoredPreferences() {
    if (typeof window === 'undefined') return DEFAULTS;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    try {
        const parsed = JSON.parse(raw);
        return { ...DEFAULTS, ...(parsed || {}) };
    } catch {
        return DEFAULTS;
    }
}

export function PreferencesProvider({ children }) {
    const [preferences, setPreferences] = useState(readStoredPreferences);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    }, [preferences]);

    useEffect(() => {
        if (typeof document === 'undefined') return;
        const root = document.documentElement;
        root.classList.toggle('focus-mode', !!preferences.focusMode);
        root.style.fontSize = `${Math.round((preferences.fontScale || 1) * 100)}%`;
    }, [preferences.focusMode, preferences.fontScale]);

    const value = useMemo(
        () => ({
            preferences,
            setPreferences,
            toggleFocusMode: () =>
                setPreferences((prev) => ({ ...prev, focusMode: !prev.focusMode })),
            setFontScale: (fontScale) =>
                setPreferences((prev) => ({ ...prev, fontScale })),
            toggleSimpleLanguage: () =>
                setPreferences((prev) => ({ ...prev, simpleLanguage: !prev.simpleLanguage })),
            toggleAudioEnabled: () =>
                setPreferences((prev) => ({ ...prev, audioEnabled: !prev.audioEnabled })),
        }),
        [preferences]
    );

    return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
    const ctx = useContext(PreferencesContext);
    if (!ctx) throw new Error('usePreferences must be used within PreferencesProvider');
    return ctx;
}

