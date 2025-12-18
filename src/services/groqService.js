import { GROQ_CONFIG, getGroqHeaders, isGroqConfigured } from '../config/groq';

/**
 * Serviço Groq - Funciona direto do navegador (sem CORS)
 */

/**
 * Testa conexão com Groq
 */
export async function testGroqConnection() {
    if (!isGroqConfigured()) {
        return {
            success: false,
            message: 'API Key do Groq não configurada',
        };
    }

    try {
        const response = await fetch(`${GROQ_CONFIG.baseURL}/chat/completions`, {
            method: 'POST',
            headers: getGroqHeaders(),
            body: JSON.stringify({
                model: GROQ_CONFIG.model,
                messages: [
                    {
                        role: 'user',
                        content: 'Responda apenas: OK',
                    },
                ],
                max_tokens: 10,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            return {
                success: false,
                message: error.error?.message || `Erro ${response.status}`,
            };
        }

        const data = await response.json();
        return {
            success: true,
            message: 'Groq conectado com sucesso! ✅',
            response: data.choices[0]?.message?.content,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || 'Erro de conexão',
        };
    }
}

/**
 * Gera explicação usando Groq
 */
export async function generateExplanation(question, correctAnswer) {
    if (!isGroqConfigured()) {
        throw new Error('API Key do Groq não configurada');
    }

    const prompt = `Você é um professor especialista em concursos públicos. 
Explique de forma clara e didática por que a alternativa "${correctAnswer}" é a correta:

QUESTÃO:
${question.text}

ALTERNATIVAS:
${question.options.map(opt => `${opt.id.toUpperCase()}) ${opt.text}`).join('\n')}

RESPOSTA CORRETA: ${correctAnswer.toUpperCase()}

Forneça uma explicação objetiva e educativa (máximo 3 parágrafos).`;

    const response = await fetch(`${GROQ_CONFIG.baseURL}/chat/completions`, {
        method: 'POST',
        headers: getGroqHeaders(),
        body: JSON.stringify({
            model: GROQ_CONFIG.model,
            messages: [
                {
                    role: 'system',
                    content: 'Você é um professor especialista em concursos públicos brasileiros.',
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
}

/**
 * Gera questão usando Groq
 */
export async function generateQuestion(subject, topic, exam) {
    if (!isGroqConfigured()) {
        throw new Error('API Key do Groq não configurada');
    }

    const prompt = `Crie uma questão objetiva de múltipla escolha sobre:

MATÉRIA: ${subject}
TÓPICO: ${topic}
CONCURSO: ${exam}

Retorne APENAS um objeto JSON válido com:
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

    const response = await fetch(`${GROQ_CONFIG.baseURL}/chat/completions`, {
        method: 'POST',
        headers: getGroqHeaders(),
        body: JSON.stringify({
            model: GROQ_CONFIG.model,
            messages: [
                {
                    role: 'system',
                    content: 'Você é um especialista em criar questões de concursos públicos brasileiros. Sempre retorne JSON válido.',
                },
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            max_tokens: 2000,
            temperature: 0.8,
        }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Erro ao gerar questão');
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content;

    // Extrai JSON
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
    }

    throw new Error('Resposta não contém JSON válido');
}

/**
 * Gera dica de estudo usando Groq
 */
export async function generateStudyTip(wrongTopics) {
    if (!isGroqConfigured()) {
        throw new Error('API Key do Groq não configurada');
    }

    const prompt = `Baseado nos tópicos onde o aluno erra mais, forneça uma dica de estudo personalizada:

TÓPICOS COM DIFICULDADE:
${wrongTopics.map((t, i) => `${i + 1}. ${t}`).join('\n')}

Forneça:
1. Breve diagnóstico
2. Estratégia de estudo específica
3. Recursos recomendados

Seja objetivo (máximo 4 parágrafos).`;

    const response = await fetch(`${GROQ_CONFIG.baseURL}/chat/completions`, {
        method: 'POST',
        headers: getGroqHeaders(),
        body: JSON.stringify({
            model: GROQ_CONFIG.model,
            messages: [
                {
                    role: 'system',
                    content: 'Você é um coach de estudos para concursos públicos.',
                },
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            max_tokens: 1500,
            temperature: 0.8,
        }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Erro ao gerar dica');
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'Não foi possível gerar dica.';
}
