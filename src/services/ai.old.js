
const PROVIDERS = {
    GROQ: 'groq',
    DEEPSEEK: 'deepseek',
};

function getProvider() {
    const raw = (import.meta.env.VITE_AI_PROVIDER || '').toLowerCase().trim();
    if (raw === PROVIDERS.DEEPSEEK) return PROVIDERS.DEEPSEEK;
    return PROVIDERS.GROQ;
}

function stripJsonFences(text) {
    if (!text) return '';
    return text.replace(/```json/gi, '').replace(/```/g, '').trim();
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

// --- GROQ IMPLEMENTATION ---
async function callGroq(prompt, apiKey) {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile", // Updated to latest supported model
            messages: [{ role: "user", content: prompt }],
            temperature: 0.5,
            response_format: { type: "json_object" } // Groq supports JSON mode
        })
    });

    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error?.message || "Erro na API Groq");
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    return JSON.parse(content);
}

// --- DEEPSEEK IMPLEMENTATION (OpenAI-compatible) ---
async function callDeepseek(prompt, apiKey) {
    const url = "https://api.deepseek.com/chat/completions";

    const baseBody = {
        model: "deepseek-chat",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.5,
    };

    const tryRequest = async (withJsonMode) => {
        const body = withJsonMode
            ? { ...baseBody, response_format: { type: "json_object" } }
            : baseBody;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            let err = null;
            try {
                err = await response.json();
            } catch {
                // ignore
            }
            throw new Error(err?.error?.message || `Erro na API DeepSeek (${response.status})`);
        }

        const data = await response.json();
        const content = data?.choices?.[0]?.message?.content;
        if (!content) throw new Error("Resposta vazia da API DeepSeek");
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


// --- MAIN EXPORTS ---

export async function checkConnection() {
    const provider = getProvider();

    if (provider === PROVIDERS.GROQ) {
        const apiKey = import.meta.env.VITE_GROQ_API_KEY;
        if (!apiKey) return { ok: false, message: "API Key da Groq ausente no .env" };
        try {
            await callGroq("Responda apenas JSON: {\"status\":\"ok\"}", apiKey);
            return { ok: true, message: "Conectado com Groq (Llama 3)" };
        } catch (e) { return { ok: false, message: `Erro Groq: ${e.message}` }; }
    }

    const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
    if (!apiKey) return { ok: false, message: "API Key da DeepSeek ausente no .env" };
    try {
        await callDeepseek("Responda apenas JSON: {\"status\":\"ok\"}", apiKey);
        return { ok: true, message: "Conectado com DeepSeek" };
    } catch (e) { return { ok: false, message: `Erro DeepSeek: ${e.message}` }; }
}

export async function generateQuestion(subject, exam, topic = null) {
    const provider = getProvider();
    const topicLine = topic
        ? `\nTÓPICO ESPECÍFICO (obrigatório): "${topic}". A questão DEVE cobrar exatamente esse tópico.`
        : '';
    const prompt = `
    ${topicLine}
    Varie o estilo entre: caso pratico/situacao-problema, assertivas (I/II/III), conceito direto, interpretacao, pegadinha de banca.
    Aja como um COACH especialista em concursos públicos. O aluno está estudando "${subject}" para o concurso "${exam || 'Geral'}".
    
    Crie uma questão inédita, desafiadora e inteligente sobre o tema.
    
    Retorne APENAS um JSON válido no seguinte formato:
    {
      "text": "Enunciado da questão (seja claro e objetivo)...",
      "options": [
        {"id": "a", "text": "Alternativa A"},
        {"id": "b", "text": "Alternativa B"},
        {"id": "c", "text": "Alternativa C"},
        {"id": "d", "text": "Alternativa D"},
        {"id": "e", "text": "Alternativa E"}
      ],
      "correctId": "letra da correta",
      "explanation": "Explicação de MENTOR: Comece elogiando ou encorajando se ele acertar, ou corrigindo com empatia se errar. Explique o conceito chave, dê um 'bisu' (dica prática) para não esquecer mais e cite a lei/doutrina se aplicável. Use tom motivador."
    }
    `;

    if (provider === PROVIDERS.GROQ) {
        return callGroq(prompt, import.meta.env.VITE_GROQ_API_KEY);
    }
    return callDeepseek(prompt, import.meta.env.VITE_DEEPSEEK_API_KEY);
}

export async function generateCoachExplanationStep({
    question,
    selectedOptionId,
    subject,
    exam,
    step = 0,
    index = null,
}) {
    const provider = getProvider();

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

    const prompt = `
Você é o **Coach de Concursos**, especializado em auxiliar estudantes neurodivergentes (autismo nível 1 e TPAC).

REGRAS IMPORTANTES:
- Seja extremamente organizado, acolhedor, didático e paciente.
- Explique como para uma criança curiosa e detalhista.
- Use emojis, listas, títulos e divisões.
- NÃO invente. Se algo não puder ser deduzido do enunciado/opções, diga isso claramente.
- Se citar lei/artigo, só cite se tiver certeza. Caso contrário, diga "posso confirmar o artigo se você me disser qual lei/material você está usando".
- Responda APENAS JSON válido (sem markdown).

TAREFA:
O aluno errou uma questão. Você vai guiá-lo em etapas.

DADOS DA QUESTÃO (JSON):
${questionBlock}

CONCURSO: ${safeExam}
MATÉRIA: ${safeSubject}

MODO:
- Se step = 0: gere SOMENTE o índice numerado (6 itens) e pergunte se pode começar pelo item 1.
- Se step > 0: gere SOMENTE o conteúdo do item step, seguindo seu estilo, e no final pergunte se pode seguir para o próximo item.

ÍNDICE sugerido (ajuste se necessário, mantendo 6 itens):
1) Diagnóstico do erro (o que te confundiu aqui)
2) Conceito fundamental (bem simples)
3) Análise das alternativas (uma a uma)
4) Como isso cai em concursos (Cebraspe, Iades, FGV etc., se fizer sentido)
5) Quadro resumo (tabela curta)
6) Mini-plano de revisão (3 passos)

Se um índice anterior foi fornecido, use exatamente a mesma ordem/títulos:
INDEX_ANTERIOR: ${index ? JSON.stringify(index) : 'null'}

Retorne no formato:
{
  "step": 0,
  "index": ["1. ...", "2. ...", "..."],
  "question": "✅ Deseja que eu comece pelo item 1?"
}
ou
{
  "step": 1,
  "title": "1. ...",
  "content": "texto longo com quebras de linha",
  "question": "✅ Finalizamos este item. Posso seguir para o próximo?"
}
`;

    if (provider === PROVIDERS.GROQ) {
        return callGroq(prompt, import.meta.env.VITE_GROQ_API_KEY);
    }
    return callDeepseek(prompt, import.meta.env.VITE_DEEPSEEK_API_KEY);
}

export async function explainTopic(topic, examContext = null, positionContext = null) {
    const provider = getProvider();

    const contextInfo = examContext && positionContext
        ? `\nCONTEXTO: Esta aula é para o concurso "${examContext}" - cargo "${positionContext}".`
        : '';

    const prompt = `Você é o **Coach de Concursos** 🌟, especializado em ensinar estudantes neurodivergentes.
${contextInfo}

TAREFA: Criar AULA COMPLETA sobre **${topic}**

🧠 SEU ESTILO:
- Didático como para criança curiosa
- Extremamente organizado
- Paciente e acolhedor
- Muitos emojis, listas, negritos
- NUNCA superficial
- Tom encorajador

📚 ESTRUTURA:

## 📖 ${topic}

### 🎯 O Que Você Vai Aprender
- [Liste 3-5 objetivos]

### 🧩 Conceito Fundamental
[Explique de forma simples, use analogias. 3-4 parágrafos]

### 📚 Principais Tópicos

Para CADA subtópico (5-8 total):
**Subtópico X**
- Explicação detalhada
- Exemplo prático
- 💡 **Como cai:** [Bancas: FGV, CESPE, etc.]

### ⚖️ Aspectos Legais (se aplicável)
- Leis, artigos, jurisprudência

### 🔄 Comparações
[Compare com conceitos similares]

### ⚠️ PEGADINHAS DAS BANCAS
- ❌ Pegadinha: [...]
- ✅ Como não cair: [...]

### 💡 3 Exemplos Práticos
[Situações reais]

### 🎯 Dicas de Memorização
- Mnemônicos
- Macetes

### 🧾 QUADRO RESUMO
\`\`\`
Conceito | Definição | Como Cai
──────────────────────────
[Item 1] | [...] | [...]
🎯 Bancas adoram: [...]
\`\`\`

### ✅ Checklist
- [ ] Conceito compreendido
- [ ] Revisei subtópicos
- [ ] Memorizei pegadinhas

---
💬 Use tom encorajador! "Você consegue!" 
📏 Mínimo 800 palavras. Seja COMPLETO!
Comece com # ${topic}`;


    try {
        let content;

        if (provider === PROVIDERS.GROQ) {
            const apiKey = import.meta.env.VITE_GROQ_API_KEY;
            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'llama3-70b-8192',
                    messages: [{ role: 'user', content: prompt }],
                    temperature: 0.7,
                    max_tokens: 4000
                })
            });

            if (!response.ok) throw new Error(`API Error: ${response.status}`);
            const data = await response.json();
            content = data.choices[0].message.content;
        } else {
            const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
            const response = await fetch('https://api.deepseek.com/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'deepseek-chat',
                    messages: [{ role: 'user', content: prompt }],
                    temperature: 0.7,
                    max_tokens: 4000
                })
            });

            if (!response.ok) throw new Error(`API Error: ${response.status}`);
            const data = await response.json();
            content = data.choices?.[0]?.message?.content;
            if (!content) throw new Error("Resposta vazia da API DeepSeek");
        }

        const titleMatch = content.match(/^#\s+(.+)$/m);
        const title = titleMatch ? titleMatch[1] : topic;

        return { title, content };
    } catch (error) {
        console.error("Erro na explicação:", error);
        throw error;
    }
}

export async function getSubjectsForExam(examName) {
    const provider = getProvider();
    const prompt = `
    Você é um especialista em concursos públicos brasileiros.
    
    TAREFA: Liste as principais MATÉRIAS/DISCIPLINAS cobradas no concurso "${examName}".
    
    IMPORTANTE:
    - Retorne APENAS nomes de matérias (ex: "Direito Penal", "Informática", "Raciocínio Lógico")
    - NÃO explique o que é o concurso
    - NÃO dê descrições longas
    - Liste entre 5 a 10 matérias mais relevantes
    
    Retorne APENAS um JSON válido no formato:
    [
      {"label": "Nome da Matéria 1"},
      {"label": "Nome da Matéria 2"},
      {"label": "Nome da Matéria 3"}
    ]
    
    Exemplo para "Polícia Federal":
    [
      {"label": "Direito Penal"},
      {"label": "Direito Constitucional"},
      {"label": "Informática"},
      {"label": "Raciocínio Lógico"},
      {"label": "Língua Portuguesa"}
    ]
    `;

    const apiKey = provider === PROVIDERS.GROQ ? import.meta.env.VITE_GROQ_API_KEY : import.meta.env.VITE_DEEPSEEK_API_KEY;

    try {
        if (provider === PROVIDERS.GROQ) return await callGroq(prompt, apiKey);
        return await callDeepseek(prompt, apiKey);
    } catch (error) {
        console.error("Erro ao buscar matérias:", error);
        throw error;
    }
}

export async function detectExamPositions(examName) {
    // Primeiro, tenta buscar no banco de dados estático
    const { findExam } = await import('../data/examDatabase.js');
    const examData = findExam(examName);

    if (examData && examData.positions && examData.positions.length > 0) {
        // Encontrou no banco de dados!
        return {
            hasMultiplePositions: examData.positions.length > 1,
            positions: examData.positions.map(pos => ({ label: pos.label }))
        };
    }

    // Se não encontrou, usa a IA como fallback
    const provider = getProvider();
    const prompt = `
    Você é um especialista em concursos públicos brasileiros.
    
    TAREFA: Analise o concurso "${examName}" e liste TODOS os cargos ESPECÍFICOS com suas ÁREAS/ESPECIALIDADES.
    
    IMPORTANTE:
    - NÃO retorne apenas "Analista" ou "Técnico" genérico
    - Retorne com a ÁREA COMPLETA: "Analista Legislativo - Área Administrativa", "Analista Legislativo - Área Recursos Humanos"
    - Liste TODOS os cargos e especialidades disponíveis (mínimo 3, máximo 15)
    
    Retorne APENAS um JSON no formato:
    {
      "hasMultiplePositions": true,
      "positions": [
        {"label": "Cargo Completo com Área Específica"}
      ]
    }
    
    Se NÃO houver múltiplos cargos, retorne:
    {
      "hasMultiplePositions": false,
      "positions": []
    }
    `;

    const apiKey = provider === PROVIDERS.GROQ ? import.meta.env.VITE_GROQ_API_KEY : import.meta.env.VITE_DEEPSEEK_API_KEY;

    try {
        if (provider === PROVIDERS.GROQ) return await callGroq(prompt, apiKey);
        return await callDeepseek(prompt, apiKey);
    } catch (error) {
        console.error("Erro ao detectar cargos:", error);
        return { hasMultiplePositions: false, positions: [] };
    }
}

export async function getSubjectsForExamAndPosition(examName, position) {
    // Primeiro, tenta buscar no banco de dados estático
    const { findExam, findPosition } = await import('../data/examDatabase.js');
    const examData = findExam(examName);

    if (examData) {
        const positionData = findPosition(examData, position);

        if (positionData && positionData.subjects && positionData.subjects.length > 0) {
            // Encontrou no banco de dados! Retorna as matérias COM categoria
            return positionData.subjects.map(subject => ({
                label: subject.label,
                category: subject.category || 'Conhecimentos Específicos'
            }));
        }
    }

    // Se não encontrou, usa a IA como fallback
    const provider = getProvider();
    const prompt = `
    Você é um especialista em concursos públicos brasileiros com conhecimento atualizado de editais.
    
    TAREFA: Liste TODAS as matérias do edital do cargo "${position}" no concurso "${examName}".
    
    REGRAS OBRIGATÓRIAS:
    1. Liste TODAS as matérias do edital (mínimo 10, máximo 25)
    2. Inclua matérias BÁSICAS (Português, Raciocínio Lógico, Informática, Atualidades)
    3. Inclua matérias ESPECÍFICAS do cargo (Direito, Contabilidade, Legislação, etc.)
    4. Liste matérias separadas por blocos (ex: não agrupe "Direito Constitucional, Administrativo e Penal" em uma só - liste cada uma)
    5. Use nomes precisos das matérias (não invente)
    
    Retorne APENAS um JSON array válido no formato:
    [
      {"label": "Nome da Matéria 1"},
      {"label": "Nome da Matéria 2"},
      {"label": "Nome da Matéria 3"}
    ]
    `;

    const apiKey = provider === PROVIDERS.GROQ ? import.meta.env.VITE_GROQ_API_KEY : import.meta.env.VITE_DEEPSEEK_API_KEY;

    try {
        if (provider === PROVIDERS.GROQ) return await callGroq(prompt, apiKey);
        return await callDeepseek(prompt, apiKey);
    } catch (error) {
        console.error("Erro ao buscar matérias do cargo:", error);
        throw error;
    }
}
