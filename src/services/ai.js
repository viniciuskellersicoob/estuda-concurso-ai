import { GROQ_CONFIG, getGroqHeaders, isGroqConfigured } from '../config/groq';

const PROVIDERS = {
    GROQ: 'groq',
    DEEPSEEK: 'deepseek',
};

function getProvider() {
    const raw = (import.meta.env.VITE_AI_PROVIDER || '').toLowerCase().trim();
    return raw === PROVIDERS.DEEPSEEK ? PROVIDERS.DEEPSEEK : PROVIDERS.GROQ;
}

function stripJsonFences(text) {
    return (text || '').replace(/```json/gi, '').replace(/```/g, '').trim();
}

function parseJsonLenient(text) {
    const cleaned = stripJsonFences(text);
    try {
        return JSON.parse(cleaned);
    } catch {
        const objMatch = cleaned.match(/\{[\s\S]*\}/);
        if (objMatch) return JSON.parse(objMatch[0]);
        const arrMatch = cleaned.match(/\[[\s\S]*\]/);
        if (arrMatch) return JSON.parse(arrMatch[0]);
        throw new Error('Não foi possível interpretar o JSON retornado pela IA.');
    }
}

async function callGroqJson(prompt) {
    if (!isGroqConfigured()) throw new Error('Configure VITE_GROQ_API_KEY no .env');
    const response = await fetch(`${GROQ_CONFIG.baseURL}/chat/completions`, {
        method: 'POST',
        headers: getGroqHeaders(),
        body: JSON.stringify({
            model: GROQ_CONFIG.model,
            messages: [{ role: 'user', content: prompt }],
            temperature: GROQ_CONFIG.temperature ?? 0.6,
            max_tokens: GROQ_CONFIG.maxTokens ?? 2000,
            response_format: { type: 'json_object' },
        }),
    });

    if (!response.ok) {
        const err = await response.json().catch(() => null);
        throw new Error(err?.error?.message || `Erro na API Groq (${response.status})`);
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;
    if (!content) throw new Error('Resposta vazia da IA (Groq).');
    return parseJsonLenient(content);
}

async function callDeepseekJson(prompt) {
    const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
    if (!apiKey) throw new Error('Configure VITE_DEEPSEEK_API_KEY no .env');

    const url = 'https://api.deepseek.com/chat/completions';
    const baseBody = {
        model: 'deepseek-chat',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.6,
    };

    const tryRequest = async (withJsonMode) => {
        const body = withJsonMode ? { ...baseBody, response_format: { type: 'json_object' } } : baseBody;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const err = await response.json().catch(() => null);
            throw new Error(err?.error?.message || `Erro na API DeepSeek (${response.status})`);
        }

        const data = await response.json();
        const content = data?.choices?.[0]?.message?.content;
        if (!content) throw new Error('Resposta vazia da IA (DeepSeek).');
        return parseJsonLenient(content);
    };

    try {
        return await tryRequest(true);
    } catch (e) {
        const msg = String(e?.message || '');
        if (/response_format|json_object/i.test(msg)) {
            return await tryRequest(false);
        }
        throw e;
    }
}

async function callProviderJson(prompt) {
    const provider = getProvider();
    return provider === PROVIDERS.DEEPSEEK ? callDeepseekJson(prompt) : callGroqJson(prompt);
}

export async function checkConnection() {
    try {
        const provider = getProvider();
        const payload = await callProviderJson('Responda APENAS JSON: {"status":"ok"}');
        return { ok: payload?.status === 'ok', message: `Conectado com ${provider}` };
    } catch (e) {
        return { ok: false, message: e.message || 'Falha ao conectar na IA' };
    }
}

export async function generateQuestion(subject, exam, topic = null, style = 'mixed', simpleLanguage = false) {
    const normalizedStyle = style === 'ce' ? 'ce' : 'mc';
    const formatLine =
        normalizedStyle === 'ce'
            ? `FORMATO OBRIGATÓRIO: estilo CEBRASPE/CESPE (C/E). Gere um ÚNICO ITEM para julgar. As opções devem ser SOMENTE: [{"id":"c","text":"Certo"},{"id":"e","text":"Errado"}]. O correctId deve ser "c" ou "e".`
            : `FORMATO: múltipla escolha com 5 alternativas (a–e).`;

    const languageLine = simpleLanguage
        ? `LINGUAGEM: extremamente simples e direta (sem juridiquês), frases curtas, sem floreios.`
        : '';

    const topicLine = topic
        ? `TÓPICO ESPECÍFICO (obrigatório): "${topic}". A questão DEVE cobrar exatamente esse tópico.`
        : '';

    const prompt = `
Você é um elaborador de questões de concursos públicos brasileiros.
${topicLine}
CONCURSO: ${exam || 'Geral'}
MATÉRIA: ${subject}
${formatLine}
${languageLine}

Crie uma questão INÉDITA e bem elaborada. Evite alternativas óbvias.

Retorne APENAS um JSON válido neste formato:
{
  "text": "Enunciado",
  "options": [{"id":"a","text":"..."},{"id":"b","text":"..."},{"id":"c","text":"..."},{"id":"d","text":"..."},{"id":"e","text":"..."}],
  "correctId": "a|b|c|d|e (ou c|e no caso C/E)",
  "explanation": "Explicação curta e objetiva (120–220 palavras)"
}
    `.trim();

    return callProviderJson(prompt);
}

export async function generateCoachExplanationStep({
    question,
    selectedOptionId,
    subject,
    exam,
    step = 0,
    index = null,
    simpleLanguage = false,
}) {
    const safeSubject = subject || question?.subject || 'Conhecimentos Gerais';
    const safeExam = exam || question?.exam || 'Geral';

    const questionBlock = JSON.stringify(
        {
            text: question?.text,
            options: question?.options,
            correctId: question?.correctId,
            selectedOptionId,
        },
        null,
        2
    );

    const languageLine = simpleLanguage
        ? `LINGUAGEM: extremamente simples, frases curtas, explique como para uma criança curiosa.`
        : '';

    const prompt = `
Você é o **Coach de Concursos**, especializado em auxiliar estudantes neurodivergentes (autismo nível 1 e TPAC).

REGRAS:
- Seja extremamente organizado, acolhedor, didático e paciente.
- Use emojis, listas e títulos.
- NÃO invente fatos. Se algo não puder ser deduzido, diga isso.
- Responda APENAS JSON válido (sem markdown).
${languageLine}

DADOS DA QUESTÃO (JSON):
${questionBlock}

CONCURSO: ${safeExam}
MATÉRIA: ${safeSubject}

MODO:
- Se step = 0: gere SOMENTE o índice (6 itens) e pergunte se pode começar pelo item 1.
- Se step > 0: gere SOMENTE o conteúdo do item step e, ao final, pergunte se pode seguir para o próximo.

ÍNDICE sugerido (mantenha 6 itens):
1) Diagnóstico do erro (o que te confundiu aqui)
2) Conceito fundamental (bem simples)
3) Análise das alternativas (uma a uma)
4) Como isso cai em concursos (Cebraspe, FGV, FCC etc., se fizer sentido)
5) Quadro resumo (tabela curta)
6) Mini-plano de revisão (3 passos)

INDEX_ANTERIOR: ${index ? JSON.stringify(index) : 'null'}

Retorne:
{
  "step": 0,
  "index": ["1. ...", "2. ...", "..."],
  "question": "..."
}
ou
{
  "step": 1,
  "title": "1. ...",
  "content": "texto com quebras de linha",
  "question": "..."
}
    `.trim();

    return callProviderJson(prompt);
}

export async function generateMicroLesson({ subject, topic, mistakes, simpleLanguage = false }) {
    const mistakesBlock = Array.isArray(mistakes) && mistakes.length
        ? mistakes.slice(0, 8).map((m, i) => `${i + 1}. ${m}`).join('\n')
        : 'Sem detalhes.';

    const languageLine = simpleLanguage
        ? `LINGUAGEM: extremamente simples, frases curtas, exemplos bem concretos.`
        : '';

    const prompt = `
Você é um professor/coach de concursos especializado em estudantes neurodivergentes (autismo nível 1 e TPAC).
Crie uma AULA CURTA para corrigir um ponto fraco.
Responda APENAS JSON válido (sem markdown).
${languageLine}

MATÉRIA: ${subject}
TÓPICO: ${topic || 'Geral'}

ERROS/FALHAS OBSERVADAS:
${mistakesBlock}

Retorne:
{
  "title": "título curto",
  "content": "explicação curta (250–450 palavras) com tópicos e exemplos",
  "checklist": ["item 1", "item 2", "item 3"]
}
    `.trim();

    return callProviderJson(prompt);
}

// Mantidas por compatibilidade (no app atual são usadas no StudySetup)
export async function getSubjectsForExam(examName) {
    return [
        { label: 'Língua Portuguesa' },
        { label: 'Raciocínio Lógico' },
        { label: 'Informática' },
        { label: 'Direito Constitucional' },
        { label: 'Direito Administrativo' },
    ];
}

export async function detectExamPositions(examName) {
    return { hasMultiplePositions: false, positions: [] };
}

export async function getSubjectsForExamAndPosition(examName, position) {
    return getSubjectsForExam(examName);
}

