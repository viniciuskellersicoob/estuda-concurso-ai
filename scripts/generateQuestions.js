/**
 * Script para gerar questões usando Groq API
 * Uso: node scripts/generateQuestions.js <materia> <quantidade>
 */

import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Agente HTTPS que aceita certificados autoassinados (apenas para desenvolvimento)
const httpsAgent = new https.Agent({
    rejectUnauthorized: false
});

// Carrega .env da pasta raiz do projeto
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const GROQ_API_KEY = process.env.VITE_GROQ_API_KEY;
const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

const MATERIAS = {
    'portugues': 'Língua Portuguesa',
    'raciocinio': 'Raciocínio Lógico-Matemático',
    'informatica': 'Noções de Informática',
    'constitucional': 'Direito Constitucional',
    'administrativo': 'Direito Administrativo',
    'penal': 'Direito Penal',
    'processual-penal': 'Direito Processual Penal',
    'afo': 'Administração Financeira e Orçamentária',
    'etica': 'Ética no Serviço Público',
    'transito': 'Legislação de Trânsito - CTB',
    'lep': 'Lei de Execução Penal',
};

async function callGroq(prompt) {
    const response = await fetch(GROQ_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.8,
            max_tokens: 2000,
        }),
        agent: httpsAgent, // Usar agente HTTPS personalizado
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || `Erro ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

function cleanJsonResponse(text) {
    // Remove markdown code blocks
    let cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

    // Tenta extrair JSON
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
    }

    throw new Error('Não foi possível extrair JSON da resposta');
}

async function gerarQuestao(materia, index) {
    const prompt = `Crie uma questão objetiva de múltipla escolha de nível médio/alto sobre ${materia} para concursos públicos brasileiros.

IMPORTANTE:
- A questão deve ser completa, clara e objetiva
- Inclua 5 alternativas (a, b, c, d, e)
- Forneça explicação detalhada da resposta correta
- Forneça feedback específico para CADA alternativa (por que está certa ou errada)

Retorne APENAS um objeto JSON válido (sem markdown, sem backticks) no seguinte formato:

{
  "text": "Enunciado completo da questão...",
  "options": [
    {"id": "a", "text": "Alternativa A"},
    {"id": "b", "text": "Alternativa B"},
    {"id": "c", "text": "Alternativa C"},
    {"id": "d", "text": "Alternativa D"},
    {"id": "e", "text": "Alternativa E"}
  ],
  "correctId": "c",
  "explanation": "Explicação detalhada de por que a alternativa C está correta (2-3 frases)",
  "optionExplanations": {
    "a": "Errado: explicação do erro da alternativa A",
    "b": "Errado: explicação do erro da alternativa B",
    "c": "Correta: reforço da explicação da alternativa C",
    "d": "Errado: explicação do erro da alternativa D",
    "e": "Errado: explicação do erro da alternativa E"
  }
}`;

    try {
        const response = await callGroq(prompt);
        const questao = cleanJsonResponse(response);

        // Adiciona ID único
        const slug = materia.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        questao.id = `${slug}-${Date.now()}-${index}`;

        return questao;
    } catch (error) {
        console.error(`Erro ao gerar questão ${index}:`, error.message);
        return null;
    }
}

async function gerarLote(materia, quantidade) {
    console.log(`\n🚀 Gerando ${quantidade} questões de ${materia}...\n`);

    const questoes = [];

    for (let i = 1; i <= quantidade; i++) {
        process.stdout.write(`Gerando questão ${i}/${quantidade}... `);

        const questao = await gerarQuestao(materia, i);

        if (questao) {
            questoes.push(questao);
            console.log('✅');
        } else {
            console.log('❌');
        }

        // Aguarda 2 segundos entre requisições para evitar rate limit
        if (i < quantidade) {
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }

    return questoes;
}

function formatarParaJS(questoes, materia) {
    const lines = [
        `// =====================================================`,
        `// ${materia.toUpperCase()} - GERADO AUTOMATICAMENTE`,
        `// =====================================================`,
        `registerQuestions(['${materia}'], [`,
    ];

    questoes.forEach((q, idx) => {
        lines.push(`    withFeedback(`);
        lines.push(`        {`);
        lines.push(`            id: '${q.id}',`);
        lines.push(`            text: '${q.text.replace(/'/g, "\\'")}',`);
        lines.push(`            options: buildOptions([`);

        q.options.forEach(opt => {
            lines.push(`                ['${opt.id}', '${opt.text.replace(/'/g, "\\'")}'],`);
        });

        lines.push(`            ]),`);
        lines.push(`            correctId: '${q.correctId}',`);
        lines.push(`            explanation: '${q.explanation.replace(/'/g, "\\'")}',`);
        lines.push(`        },`);
        lines.push(`        {`);

        Object.entries(q.optionExplanations).forEach(([key, value]) => {
            lines.push(`            ${key}: '${value.replace(/'/g, "\\'")}',`);
        });

        lines.push(`        }`);
        lines.push(`    )${idx < questoes.length - 1 ? ',' : ''}`);
    });

    lines.push(`]);`);
    lines.push(``);

    return lines.join('\n');
}

async function salvarQuestoes(questoes, materia) {
    const outputDir = path.join(__dirname, '..', 'generated-questions');
    await fs.mkdir(outputDir, { recursive: true });

    const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
    const filename = `${materia.toLowerCase().replace(/\s+/g, '-')}-${timestamp}.js`;
    const filepath = path.join(outputDir, filename);

    const content = formatarParaJS(questoes, materia);
    await fs.writeFile(filepath, content, 'utf-8');

    console.log(`\n✅ Questões salvas em: ${filepath}`);
    console.log(`\n📋 Copie o conteúdo deste arquivo para src/data/questionBank.js`);
}

// MAIN
async function main() {
    const args = process.argv.slice(2);

    if (!GROQ_API_KEY) {
        console.error('❌ Erro: VITE_GROQ_API_KEY não configurada no .env');
        process.exit(1);
    }

    if (args.length < 2) {
        console.log('Uso: node scripts/generateQuestions.js <materia> <quantidade>\n');
        console.log('Matérias disponíveis:');
        Object.entries(MATERIAS).forEach(([key, nome]) => {
            console.log(`  - ${key} (${nome})`);
        });
        process.exit(1);
    }

    const [materiaKey, quantidadeStr] = args;
    const quantidade = parseInt(quantidadeStr, 10);

    const materia = MATERIAS[materiaKey];
    if (!materia) {
        console.error(`❌ Matéria não encontrada: ${materiaKey}`);
        process.exit(1);
    }

    if (isNaN(quantidade) || quantidade < 1 || quantidade > 100) {
        console.error('❌ Quantidade deve ser entre 1 e 100');
        process.exit(1);
    }

    const questoes = await gerarLote(materia, quantidade);

    console.log(`\n📊 Estatísticas:`);
    console.log(`   Total geradas: ${questoes.length}/${quantidade}`);
    console.log(`   Taxa de sucesso: ${((questoes.length / quantidade) * 100).toFixed(1)}%`);

    if (questoes.length > 0) {
        await salvarQuestoes(questoes, materia);
    }
}

main().catch(console.error);
