import {
    administracaoPublica,
    afo,
    abusoAutoridade,
    crimesHediondos,
    arquivologia,
    atualidades,
    administracaoMateriais,
    administracaoPessoas,
    constituicaoMG,
    ctb,
    eca,
    estatutoDesarmamento,
    constitucional,
    direitoAdministrativo,
    direitoPenal,
    direitoProcessualPenal,
    direitosHumanos,
    criminologia,
    etica,
    informatica,
    leiDrogas,
    leiExecucaoPenal,
    lei8112,
    leiMariaPenha,
    leiTortura,
    lodf,
    normasPoliciaPenalMG,
    portugues,
    regimentoCamara,
    regulamentoPMDF,
    raciocinioLogico,
    estatutoPMDF,
    estatutoServidorMG,
    legislacaoPenalEspecial,
    usoProgressivoForca,
    primeirosSocorros,
    sinalizacaoViaria,
    processoLegislativo,
    gestaoContratos,
    improbidadeAdm,
} from './flashcards/index.js';

export const FLASHCARD_DATABASE = {
    etica,
    portugues,
    'raciocinio-logico': raciocinioLogico,
    informatica,
    constitucional,
    'direito-administrativo': direitoAdministrativo,
    'administracao-publica': administracaoPublica,
    afo,
    'direito-penal': direitoPenal,
    'direito-processual-penal': direitoProcessualPenal,
    'direitos-humanos': direitosHumanos,
    criminologia,
    'lei-execucao-penal': leiExecucaoPenal,
    'lei-drogas': leiDrogas,
    'crimes-hediondos': crimesHediondos,
    'abuso-autoridade': abusoAutoridade,
    'estatuto-desarmamento': estatutoDesarmamento,
    'lei-maria-penha': leiMariaPenha,
    'lei-tortura': leiTortura,
    eca,
    ctb,
    lodf,
    'lei-8112': lei8112,
    'regimento-camara': regimentoCamara,
    arquivologia,
    'administracao-pessoas': administracaoPessoas,
    'administracao-materiais': administracaoMateriais,
    atualidades,
    'estatuto-pmdf': estatutoPMDF,
    'regulamento-pmdf': regulamentoPMDF,
    'constituicao-mg': constituicaoMG,
    'estatuto-servidor-mg': estatutoServidorMG,
    'normas-policia-penal-mg': normasPoliciaPenalMG,
    'legislacao-penal-especial': legislacaoPenalEspecial,
    'uso-progressivo-forca': usoProgressivoForca,
    'primeiros-socorros': primeirosSocorros,
    'sinalizacao-viaria': sinalizacaoViaria,
    'processo-legislativo': processoLegislativo,
    'gestao-contratos': gestaoContratos,
    'improbidade-adm': improbidadeAdm,
};

export const EXAM_CONFIG = {
    pmdf: { name: 'PMDF', icon: '🚔' },
    'policia-penal-mg': { name: 'Polícia Penal MG', icon: '⚖️' },
    'detran-df': { name: 'DETRAN-DF', icon: '🚗' },
    'camara-deputados': { name: 'Câmara dos Deputados', icon: '🏛️' },
};

export function getAllExams() {
    return Object.keys(EXAM_CONFIG).map((key) => ({
        id: key,
        name: EXAM_CONFIG[key].name,
        icon: EXAM_CONFIG[key].icon,
        subjectCount: getExamSubjects(key).length,
    }));
}

export function getExamSubjects(examId) {
    const subjects = [];
    Object.keys(FLASHCARD_DATABASE).forEach((subjectKey) => {
        const subject = FLASHCARD_DATABASE[subjectKey];
        if (subject.exams.includes(examId)) {
            const eligible = subject.cards.filter((card) => !card.exams || card.exams.includes(examId));
            const examTagged = eligible.filter((card) => card.exams && card.exams.includes(examId));
            const cardCount = (examTagged.length ? examTagged : eligible).length;
            subjects.push({
                id: subjectKey,
                name: subject.name,
                icon: subject.icon,
                cardCount,
            });
        }
    });
    return subjects;
}

export function getFlashcards(examId, subjectId) {
    const subject = FLASHCARD_DATABASE[subjectId];
    if (!subject || !subject.exams.includes(examId)) return [];
    const eligible = subject.cards.filter((card) => !card.exams || card.exams.includes(examId));
    const examTagged = eligible.filter((card) => card.exams && card.exams.includes(examId));
    return examTagged.length ? examTagged : eligible;
}

export function shuffleFlashcards(cards) {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
