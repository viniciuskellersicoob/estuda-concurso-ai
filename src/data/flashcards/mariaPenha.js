import { makeCards } from './utils';

export const leiMariaPenha = {
    name: 'Lei Maria da Penha (Lei 11.340/2006)',
    icon: '♀️',
    exams: ['pmdf', 'policia-penal-mg'],
    cards: makeCards('lmp', [
        ['Violência doméstica: conceito?', 'Ação/omissão baseada no gênero que cause morte, lesão, sofrimento físico/sexual/psicológico ou dano moral/patrimonial.'],
        ['Formas de violência (LMP)?', 'Física, psicológica, sexual, patrimonial e moral.'],
        ['Medidas protetivas: finalidade?', 'Proteger a vítima e cessar o risco (afastamento, proibição de contato etc.).'],
        ['Violência psicológica: exemplos?', 'Ameaça, humilhação, isolamento, controle e perseguição.'],
        ['Violência patrimonial: exemplos?', 'Destruir/ocultar bens, controlar dinheiro, reter documentos.'],
        ['Revitimização: o que é?', 'Sofrimento causado por atendimento inadequado/culpabilização/repetição desnecessária de relatos.'],
    ]),
};

