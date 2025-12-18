import { GEMINI_CONFIG, isGeminiConfigured } from '../config/gemini';

/**
 * Serviço Gemini Free - Funciona direto do navegador
 */

/**
 * Testa conexão com Gemini
 */
export async function testGeminiConnection() {
    if (!isGeminiConfigured()) {
        return {
            success: false,
            message: 'API Key do Gemini não configurada',
        };
    }

    try {
        const response = await fetch(
            `${GEMINI_CONFIG.baseURL}/models/${GEMINI_CONFIG.model}:generateContent?key=${GEMINI_CONFIG.apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{ text: 'Responda apenas: OK' }],
                        },
                    ],
                }),
            }
        );

        if (!response.ok) {
            const error = await response.json();
            const errorMsg = error.error?.message || '';

            // Detecta erro de modelo/região
            if (errorMsg.includes('not found') || errorMsg.includes('not supported')) {
                return {
                    success: false,
                    message: '⚠️ Gemini indisponível na sua região/conta. Use Groq!',
                };
            }

            return {
                success: false,
                message: error.error?.message || `Erro ${response.status}`,
            };
        }

        const data = await response.json();
        return {
            success: true,
            message: 'Gemini conectado com sucesso! ✅',
            response: data.candidates?.[0]?.content?.parts?.[0]?.text,
        };
    } catch (error) {
        return {
            success: false,
            message: '⚠️ Erro de conexão. Use Groq!',
        };
    }
}

/**
 * Gera explicação usando Gemini
 */
export async function generateExplanation(question, correctAnswer) {
    if (!isGeminiConfigured()) {
        throw new Error('API Key do Gemini não configurada');
    }

    const prompt = `Você é um professor especialista em concursos públicos. 
Explique de forma clara e didática por que a alternativa "${correctAnswer}" é a correta:

QUESTÃO:
${question.text}

ALTERNATIVAS:
${question.options.map(opt => `${opt.id.toUpperCase()}) ${opt.text}`).join('\n')}

RESPOSTA CORRETA: ${correctAnswer.toUpperCase()}

Forneça uma explicação objetiva e educativa (máximo 3 parágrafos).`;

    const response = await fetch(
        `${GEMINI_CONFIG.baseURL}/models/${GEMINI_CONFIG.model}:generateContent?key=${GEMINI_CONFIG.apiKey}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: prompt }],
                    },
                ],
                generationConfig: {
                    maxOutputTokens: GEMINI_CONFIG.maxTokens,
                    temperature: GEMINI_CONFIG.temperature,
                },
            }),
        }
    );

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Erro ao gerar explicação');
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Não foi possível gerar explicação.';
}

/**
 * Gera questão usando Gemini
 */
export async function generateQuestion(subject, topic, exam) {
    if (!isGeminiConfigured()) {
        throw new Error('API Key do Gemini não configurada');
    }

    const prompt = `Crie uma questão objetiva de múltipla escolha sobre:

MATÉRIA: ${subject}
TÓPICO: ${topic}
CONCURSO: ${exam}

Retorne APENAS um objeto JSON válido (sem markdown, sem \`\`\`):
{
  "text": "enunciado da questão",
  "options": [
    {"id": "a", "text": "primeira opção"},
    {"id": "b", "text": "segunda opção"},
    {"id": "c", "text": "terceira opção"},
    {"id": "d", "text": "quarta opção"},
    {"id": "e", "text": "quinta opção"}
  ],
  "correctId": "letra correta",
  "explanation": "explicação em 100-150 palavras"
}`;

    const response = await fetch(
        `${GEMINI_CONFIG.baseURL}/models/${GEMINI_CONFIG.model}:generateContent?key=${GEMINI_CONFIG.apiKey}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: prompt }],
                    },
                ],
                generationConfig: {
                    maxOutputTokens: 2000,
                    temperature: 0.8,
                },
            }),
        }
    );

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Erro ao gerar questão');
    }

    const data = await response.json();
    const content = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // Extrai JSON (remove markdown se houver)
    const cleanContent = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const jsonMatch = cleanContent.match(/\{[\s\S]*\}/);

    if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
    }

    throw new Error('Resposta não contém JSON válido');
}

/**
 * Gera dica de estudo usando Gemini
 */
export async function generateStudyTip(wrongTopics) {
    if (!isGeminiConfigured()) {
        throw new Error('API Key do Gemini não configurada');
    }

    const prompt = `Baseado nos tópicos onde o aluno erra mais, forneça uma dica de estudo personalizada:

TÓPICOS COM DIFICULDADE:
${wrongTopics.map((t, i) => `${i + 1}. ${t}`).join('\n')}

Forneça:
1. Breve diagnóstico
2. Estratégia de estudo específica
3. Recursos recomendados

Seja objetivo (máximo 4 parágrafos).`;

    const response = await fetch(
        `${GEMINI_CONFIG.baseURL}/models/${GEMINI_CONFIG.model}:generateContent?key=${GEMINI_CONFIG.apiKey}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: prompt }],
                    },
                ],
                generationConfig: {
                    maxOutputTokens: 1500,
                    temperature: 0.8,
                },
            }),
        }
    );

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Erro ao gerar dica');
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Não foi possível gerar dica.';
}
