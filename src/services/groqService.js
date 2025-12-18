import { GROQ_CONFIG, getGroqHeaders, isGroqConfigured } from '../config/groq';

/**
 * Serviço para interagir com a API Groq
 */

/**
 * Gera explicação de questão usando Groq
 * @param {Object} question - Objeto com texto da questão e opções
 * @param {string} correctAnswer - Resposta correta
 * @returns {Promise<string>} - Explicação gerada
 */
export async function generateExplanation(question, correctAnswer) {
    if (!isGroqConfigured()) {
        throw new Error('API Key do Groq não configurada. Configure no arquivo .env');
    }

    const prompt = `Você é um professor especialista em concursos públicos. 
Explique de forma clara e didática por que a alternativa "${correctAnswer}" é a correta:

QUESTÃO:
${question.text}

ALTERNATIVAS:
${question.options.map(opt => `${opt.id.toUpperCase()}) ${opt.text}`).join('\n')}

RESPOSTA CORRETA: ${correctAnswer.toUpperCase()}

Forneça uma explicação objetiva e educativa (máximo 3 parágrafos).`;

    try {
        const response = await fetch(`${GROQ_CONFIG.baseURL}/chat/completions`, {
            method: 'POST',
            headers: getGroqHeaders(),
            body: JSON.stringify({
                model: GROQ_CONFIG.model,
                messages: [
                    {
                        role: 'system',
                        content: 'Você é um professor especialista em concursos públicos brasileiros, com profundo conhecimento em todas as disciplinas cobradas.',
                    },
                    {
                        role: 'user',
                        content: prompt,
                    },
                ],
                max_tokens: GROQ_CONFIG.maxTokens,
                temperature: GROQ_CONFIG.temperature,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'Erro ao gerar explicação');
        }

        const data = await response.json();
        return data.choices[0]?.message?.content || 'Não foi possível gerar explicação.';
    } catch (error) {
        console.error('Erro ao chamar Groq API:', error);
        throw error;
    }
}

/**
 * Gera flashcard sobre um tópico
 * @param {string} subject - Matéria
 * @param {string} topic - Tópico específico
 * @returns {Promise<Object>} - Flashcard gerado
 */
export async function generateFlashcard(subject, topic) {
    if (!isGroqConfigured()) {
        throw new Error('API Key do Groq não configurada. Configure no arquivo .env');
    }

    const prompt = `Crie um flashcard educativo sobre o seguinte tópico:

MATÉRIA: ${subject}
TÓPICO: ${topic}

Retorne um objeto JSON com:
- front: pergunta concisa (máx 100 caracteres)
- back: resposta clara e objetiva (máx 200 caracteres)

Formato JSON puro, sem markdown.`;

    try {
        const response = await fetch(`${GROQ_CONFIG.baseURL}/chat/completions`, {
            method: 'POST',
            headers: getGroqHeaders(),
            body: JSON.stringify({
                model: GROQ_CONFIG.model,
                messages: [
                    {
                        role: 'system',
                        content: 'Você é um especialista em criar flashcards educativos para concursos públicos.',
                    },
                    {
                        role: 'user',
                        content: prompt,
                    },
                ],
                max_tokens: 500,
                temperature: 0.7,
                response_format: { type: 'json_object' },
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'Erro ao gerar flashcard');
        }

        const data = await response.json();
        const content = data.choices[0]?.message?.content;
        return JSON.parse(content);
    } catch (error) {
        console.error('Erro ao gerar flashcard:', error);
        throw error;
    }
}

/**
 * Gera dica de estudo personalizada
 * @param {Array} wrongTopics - Tópicos com erros frequentes
 * @returns {Promise<string>} - Dica personalizada
 */
export async function generateStudyTip(wrongTopics) {
    if (!isGroqConfigured()) {
        throw new Error('API Key do Groq não configurada. Configure no arquivo .env');
    }

    const prompt = `Baseado nos tópicos onde o aluno erra mais, forneça uma dica de estudo personalizada:

TÓPICOS COM DIFICULDADE:
${wrongTopics.map((t, i) => `${i + 1}. ${t}`).join('\n')}

Forneça:
1. Breve diagnóstico
2. Estratégia de estudo específica
3. Recursos recomendados

Seja objetivo (máximo 4 parágrafos).`;

    try {
        const response = await fetch(`${GROQ_CONFIG.baseURL}/chat/completions`, {
            method: 'POST',
            headers: getGroqHeaders(),
            body: JSON.stringify({
                model: GROQ_CONFIG.model,
                messages: [
                    {
                        role: 'system',
                        content: 'Você é um coach de estudos para concursos públicos, especialista em criar planos de estudo personalizados.',
                    },
                    {
                        role: 'user',
                        content: prompt,
                    },
                ],
                max_tokens: 1000,
                temperature: 0.8,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'Erro ao gerar dica');
        }

        const data = await response.json();
        return data.choices[0]?.message?.content || 'Não foi possível gerar dica.';
    } catch (error) {
        console.error('Erro ao gerar dica:', error);
        throw error;
    }
}
