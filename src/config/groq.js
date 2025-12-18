/**
 * Configuração da API Groq
 * 
 * Para usar:
 * 1. Copie .env.example para .env
 * 2. Adicione sua API key do Groq: https://console.groq.com/keys
 * 3. Substitua VITE_GROQ_API_KEY=your_groq_api_key_here pela sua chave real
 */

export const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || '';

export const GROQ_CONFIG = {
    apiKey: GROQ_API_KEY,
    baseURL: 'https://api.groq.com/openai/v1',
    model: 'llama-3.3-70b-versatile', // Modelo padrão recomendado
    maxTokens: 2048,
    temperature: 0.7,
};

/**
 * Verifica se a API key foi configurada
 */
export function isGroqConfigured() {
    return Boolean(GROQ_API_KEY && GROQ_API_KEY.length > 0);
}

/**
 * Retorna headers para requisições Groq
 */
export function getGroqHeaders() {
    return {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
    };
}

/**
 * Modelos disponíveis no Groq
 */
export const GROQ_MODELS = {
    // LLaMA 3.3 (Recomendado - melhor custo-benefício)
    LLAMA_3_3_70B: 'llama-3.3-70b-versatile',

    // LLaMA 3.1
    LLAMA_3_1_8B: 'llama-3.1-8b-instant',
    LLAMA_3_1_70B: 'llama-3.1-70b-versatile',

    // Mixtral
    MIXTRAL_8X7B: 'mixtral-8x7b-32768',

    // Gemma
    GEMMA_7B: 'gemma-7b-it',
};
