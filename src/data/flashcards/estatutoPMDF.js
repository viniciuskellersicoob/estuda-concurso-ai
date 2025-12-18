import { makeCards } from './utils.js';

export const estatutoPMDF = {
    name: 'Estatuto da PMDF (Noções)',
    icon: '🚔',
    exams: ['pmdf'],
    cards: makeCards('pmdf', [
        ['Hierarquia e disciplina: conceito?', 'Bases das instituições militares: autoridade e cumprimento de normas.'],
        ['Posto x graduação?', 'Posto: oficiais. Graduação: praças.'],
        ['Direitos: exemplos?', 'Remuneração, licenças e proteção funcional conforme estatuto.'],
        ['Deveres: exemplos?', 'Lealdade, disciplina, obediência e urbanidade no trato com o cidadão.'],
        ['Transgressão disciplinar: noção?', 'Violação de deveres e normas internas; sujeita a sanções.'],
        ['Responsabilidade: esferas?', 'Administrativa disciplinar, civil e penal (conforme fato).'],
        ['Conduta fora do serviço: por que cai?', 'Pode afetar decoro/imagem da corporação e gerar apuração disciplinar.'],
        ['Uso da força: parâmetro?', 'Legalidade, necessidade, proporcionalidade e moderação.'],

        // PMDF - cards âncora por tópico do edital (1+ por tópico)
        [
            'PMDF: Direitos, deveres, hierarquia e disciplina — núcleo?',
            'Hierarquia e disciplina estruturam a carreira; deveres incluem lealdade, obediência e urbanidade; direitos conforme estatuto.',
            'Direitos, deveres, hierarquia e disciplina',
        ],
        [
            'PMDF: Ingresso, carreira, prerrogativas e vedações — como cai?',
            'Requisitos de ingresso, regras de evolução e limites (vedações e incompatibilidades) do regime militar.',
            'Ingresso, carreira, prerrogativas, vedações',
        ],
        [
            'PMDF: Regimes e responsabilidades — quais esferas?',
            'Responsabilidade disciplinar/administrativa e, conforme caso, civil e penal (inclusive militar).',
            'Regimes e responsabilidades',
        ],
        [
            'PMDF: Movimentação, transferências, agregação e licenças — ideia?',
            'Regras de movimentação e situações funcionais (agregação) + hipóteses e efeitos das licenças.',
            'Movimentação, transferências, agregação e licenças específicas',
        ],
        [
            'PMDF: Licenças e afastamentos com/sem remuneração — pegadinha?',
            'A prova costuma cobrar diferenças de requisitos, prazo e impacto remuneratório/funcional.',
            'Licenças e afastamentos com e sem remuneração',
        ],
        [
            'PMDF: Elogios, recompensas e registros funcionais — para quê?',
            'Instrumentos de reconhecimento e assentamentos que impactam vida funcional e histórico disciplinar.',
            'Elogios, recompensas e registros funcionais',
        ],
    ]),
};
