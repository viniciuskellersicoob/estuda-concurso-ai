import { makeCards } from './utils';

export const abusoAutoridade = {
    name: 'Abuso de Autoridade (Lei 13.869/2019)',
    icon: '🛑',
    exams: ['policia-penal-mg', 'detran-df'],
    cards: makeCards('abuso', [
        ['Abuso de autoridade: essência?', 'Excesso/uso indevido do poder por agente público com violação de direitos e garantias.'],
        ['Ato sem fundamento legal pode ser abuso?', 'Sim; além de nulidade, pode configurar crime e falta disciplinar.'],
        ['Busca sem formalidades legais: risco?', 'Pode configurar abuso e contaminar provas (dependendo do caso).'],
        ['Constrangimento/ameaça fora da lei?', 'Tema de prova: abuso e responsabilização em múltiplas esferas.'],
        ['Ação penal nos crimes da lei (noção)?', 'Em regra, ação penal pública; bancas cobram a natureza e requisitos.'],
        ['Esferas de responsabilização?', 'Penal, administrativa e civil podem coexistir.'],
    ]),
};

