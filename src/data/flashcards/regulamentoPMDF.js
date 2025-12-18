import { makeCards } from './utils';

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
    ]),
};

