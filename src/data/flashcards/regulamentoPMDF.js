import { makeCards } from './utils.js';

export const regulamentoPMDF = {
    name: 'Regulamento Disciplinar da PMDF (Noções)',
    icon: '📏',
    exams: ['pmdf'],
    cards: makeCards('rd', [
        ['Finalidade do regulamento disciplinar?', 'Definir transgressões, sanções e procedimentos para manter disciplina.'],
        ['Princípios na aplicação de sanções?', 'Legalidade, proporcionalidade, motivação e devido processo.'],
        ['Atenuantes e agravantes: como caem?', 'Banca cobra exemplos e efeito na dosimetria da punição conforme norma.'],
        ['Recurso disciplinar?', 'Instrumento para revisar punição conforme rito interno.'],
        ['Pessoalidade da sanção?', 'Só pune quem praticou a transgressão (vedação de punição coletiva).'],
        ['Prescrição disciplinar: noção?', 'Prazo para punir; varia por norma e pode interromper/suspender.'],

        // PMDF - cards âncora por tópico do edital (1+ por tópico)
        [
            'PMDF: Transgressões, punições e rito disciplinar — como estudar?',
            'Identificar condutas típicas, espécies de punição e o fluxo do procedimento (instauração, instrução, decisão).',
            'Transgressões, punições, processo/rito disciplinar',
        ],
        [
            'PMDF: Autoridade competente, recursos e revisão — ponto de prova?',
            'Quem instaura/julga e quais recursos cabem; prazos e instâncias variam conforme a norma.',
            'Autoridade competente, recursos e revisão',
        ],
        [
            'PMDF: Classificação de transgressões + agravantes/atenuantes — pegadinha?',
            'Efeito na dosimetria: agravantes aumentam gravidade; atenuantes reduzem, conforme critérios normativos.',
            'Classificação de transgressões com agravantes e atenuantes',
        ],
        [
            'PMDF: Prazos, defesa e garantias — regra?',
            'Devido processo: ciência, defesa e decisão motivada; atenção a prazos procedimentais.',
            'Prazos procedimentais, defesa e garantias do acusado',
        ],
        [
            'PMDF: Direitos do disciplinado e recursos administrativos — foco?',
            'Acesso a autos, ampla defesa e possibilidade de revisão/recursos conforme rito e competência.',
            'Direitos do disciplinado e recursos administrativos',
        ],
    ]),
};
