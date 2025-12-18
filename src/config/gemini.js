/**
 * Configuração da API Gemini Free
 * 
 * Para usar:
 * 1. Obtenha sua chave: https://aistudio.google.com/app/apikey
 * 2. Cole no .env: VITE_GEMINI_API_KEY=sua_chave
 */

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

export const GEMINI_CONFIG = {
    apiKey: GEMINI_API_KEY,
    baseURL: 'https://generativelanguage.googleapis.com/v1',
    model: 'gemini-1.5-flash-latest', // Modelo estável
    maxTokens: 8192,
    temperature: 0.7,
};

/**
 * Verifica se a API key foi configurada
 */
export function isGeminiConfigured() {
    return Boolean(GEMINI_API_KEY && GEMINI_API_KEY.length > 0);
}

/**
 * Modelos disponíveis no Gemini
 */
export const GEMINI_MODELS = {
    // Gemini 2.0 (Mais recente - FREE)
    FLASH_2_0: 'gemini-2.0-flash-exp',

    // Gemini 1.5 (Estável - FREE)
    FLASH_1_5: 'gemini-1.5-flash',
    PRO_1_5: 'gemini-1.5-pro',
};
