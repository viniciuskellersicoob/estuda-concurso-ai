import { makeCards } from './utils';

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
    ]),
};

