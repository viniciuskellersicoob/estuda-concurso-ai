/**
 * Serviço de IA - USA APENAS GROQ
 * Wrapper para manter compatibilidade com código existente
 */

import { generateExplanation as groqExplain, generateQuestion as groqQuestion, generateStudyTip as groqTip } from './groqService';
import { isGroqConfigured } from '../config/groq';

export async function checkConnection() {
    if (!isGroqConfigured()) {
        return { ok: false, message: "API Key do Groq ausente. Configure VITE_GROQ_API_KEY no .env" };
    }

    const { testGroqConnection } = await import('./groqService');
    const result = await testGroqConnection();
    return {
        ok: result.success,
        message: result.message
    };
}

export async function generateQuestion(subject, exam, topic = null) {
    if (!isGroqConfigured()) {
        throw new Error('Configure VITE_GROQ_API_KEY no .env');
    }

    try {
        // Usa o serviço Groq diretamente
        const question = await groqQuestion(subject, topic || 'Geral', exam || 'Geral');
        return question;
    } catch (error) {
        console.error('Erro ao gerar questão:', error);
        throw new Error(`Erro ao gerar questão: ${error.message}`);
    }
}

export async function generateCoachExplanationStep({
    question,
    selectedOptionId,
    subject,
    exam,
    step = 0,
    index = null,
}) {
    if (!isGroqConfigured()) {
        throw new Error('Configure VITE_GROQ_API_KEY no .env');
    }

    // Usa groqExplain para gerar explicação
    try {
        const explanation = await groqExplain(question, selectedOptionId);

        // Formata resposta no formato esperado
        if (step === 0) {
            return {
                step: 0,
                index: [
                    "1. Diagnóstico do erro",
                    "2. Conceito fundamental",
                    "3. Análise das alternativas",
                    "4. Como isso cai em concursos",
                    "5. Quadro resumo",
                    "6. Mini-plano de revisão"
                ],
                question: "✅ Deseja que eu comece pelo item 1?"
            };
        }

        return {
            step,
            title: index?.[step - 1] || `Passo ${step}`,
            content: explanation,
            question: "✅ Finalizamos este item. Posso seguir para o próximo?"
        };
    } catch (error) {
        console.error('Erro ao gerar explicação:', error);
        throw new Error(`Erro ao gerar explicação: ${error.message}`);
    }
}

export async function explainTopic(topic, examContext = null, positionContext = null) {
    if (!isGroqConfigured()) {
        throw new Error('Configure VITE_GROQ_API_KEY no .env');
    }

    const { GROQ_CONFIG, getGroqHeaders } = await import('../config/groq');

    const contextInfo = examContext && positionContext
        ? `\nCONTEXTO: Esta aula é para o concurso "${examContext}" - cargo "${positionContext}".`
        : '';

    const prompt = `Você é o **Coach de Concursos** 🌟.
${contextInfo}

TAREFA: Criar uma aula completa e didática sobre **${topic}**

Use tom encorajador, muitos emojis, listas e seja COMPLETO (mínimo 800 palavras).

Estrutura:
## 📖 ${topic}
### 🎯 O Que Você Vai Aprender
### 🧩 Conceito Fundamental
### 📚 Principais Tópicos
### ⚠️ PEGADINHAS DAS BANCAS
### 💡 3 Exemplos Práticos
### 🎯 Dicas de Memorização
### 🧾 QUADRO RESUMO
### ✅ Checklist`;

    const response = await fetch(`${GROQ_CONFIG.baseURL}/chat/completions`, {
        method: 'POST',
        headers: getGroqHeaders(),
        body: JSON.stringify({
            model: GROQ_CONFIG.model,
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.7,
            max_tokens: 4000
        })
    });

    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    const data = await response.json();
    const content = data.choices[0].message.content;

    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : topic;

    return { title, content };
}

// Funções não usadas mas mantidas para compatibilidade
export async function getSubjectsForExam(examName) {
    // Retorna lista padrão - não usa IA
    return [
        { label: "Língua Portuguesa" },
        { label: "Raciocínio Lógico" },
        { label: "Informática" },
        { label: "Direito Constitucional" },
        { label: "Direito Administrativo" }
    ];
}

export async function detectExamPositions(examName) {
    // Retorna estrutura padr padrão - não usa IA
    return {
        hasMultiplePositions: false,
        positions: []
    };
}

export async function getSubjectsForExamAndPosition(examName, position) {
    // Retorna lista padrão - não usa IA
    return getSubjectsForExam(examName);
}
