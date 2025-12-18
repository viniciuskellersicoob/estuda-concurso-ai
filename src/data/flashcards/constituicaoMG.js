import { makeCards } from './utils';

export const constituicaoMG = {
    name: 'Constituição do Estado de MG (Noções)',
    icon: '🏔️',
    exams: ['policia-penal-mg'],
    cards: makeCards('cemg', [
        ['Constituição estadual: papel?', 'Organiza o Estado, poderes e administração dentro dos limites da CF.'],
        ['Poder constituinte decorrente?', 'Elaborar Constituição estadual respeitando princípios e limites da CF.'],
        ['Administração pública estadual: princípios?', 'LIMPE e regras específicas na constituição estadual.'],
        ['Servidores estaduais: noção?', 'Regras gerais podem estar na CE e em estatutos específicos.'],
        ['Segurança pública estadual: por que cai?', 'Estrutura e atribuições, conforme CF e CE.'],
        ['Controle e fiscalização: noção?', 'Assembleia, tribunal de contas e controle interno.'],
    ]),
};

