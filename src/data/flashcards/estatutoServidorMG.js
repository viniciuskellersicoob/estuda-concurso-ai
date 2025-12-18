import { makeCards } from './utils.js';

export const estatutoServidorMG = {
    name: 'Estatuto do Servidor de MG (Noções)',
    icon: '🧑‍⚖️',
    exams: ['policia-penal-mg'],
    cards: makeCards('servmg', [
        ['Regime estatutário: noção?', 'Regras de provimento, direitos, deveres e disciplina do servidor estadual.'],
        ['Provimento e vacância: por que cai?', 'Formas de ingresso e saída do cargo (nomeação, exoneração, demissão etc.).'],
        ['Direitos: exemplos típicos?', 'Férias, licenças, adicionais e garantias processuais em apurações.'],
        ['Deveres: exemplos?', 'Assiduidade, lealdade, zelo, urbanidade e sigilo quando devido.'],
        ['PAD: finalidade?', 'Apurar infração e aplicar penalidade com contraditório e ampla defesa.'],
        ['Penalidades: noção?', 'Advertência, suspensão, demissão e outras previstas.'],
        ['Acumulação de cargos?', 'Vedada salvo hipóteses constitucionais e compatibilidade.'],
        ['Responsabilidade: esferas?', 'Administrativa, civil e penal.'],
    ]),
};
