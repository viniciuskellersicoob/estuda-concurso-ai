export function isTtsSupported() {
    return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
}

export function stopTts() {
    if (!isTtsSupported()) return;
    window.speechSynthesis.cancel();
}

export function speak(text, { lang = 'pt-BR', rate = 1, pitch = 1, volume = 1 } = {}) {
    if (!isTtsSupported()) return { ok: false, reason: 'unsupported' };
    const cleaned = (text || '').toString().replace(/\s+/g, ' ').trim();
    if (!cleaned) return { ok: false, reason: 'empty' };

    stopTts();
    const utter = new SpeechSynthesisUtterance(cleaned);
    utter.lang = lang;
    utter.rate = rate;
    utter.pitch = pitch;
    utter.volume = volume;
    window.speechSynthesis.speak(utter);
    return { ok: true };
}

