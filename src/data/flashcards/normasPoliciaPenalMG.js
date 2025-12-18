import { makeCards } from './utils.js';

export const normasPoliciaPenalMG = {
    name: 'Normas da Polícia Penal de MG (Noções)',
    icon: '🛡️',
    exams: ['policia-penal-mg'],
    cards: makeCards('ppm', [
        ['Missão institucional (noção)?', 'Custódia e segurança com respeito à legalidade, direitos e protocolos.'],
        ['Rotina de revista: princípio?', 'Padronização, legalidade, proporcionalidade e registro.'],
        ['Contagem de custodiados: por que cai?', 'Procedimento crítico de segurança; deve ser documentado.'],
        ['Escolta: objetivos?', 'Integridade do custodiado, da equipe e de terceiros, com planejamento e comunicação.'],
        ['Uso progressivo da força?', 'Escalonar conforme resistência/ameaça, com necessidade e proporcionalidade.'],
        ['Ocorrências: como registrar?', 'Cronologia, fatos observáveis, linguagem formal e comunicação à cadeia de comando.'],
        ['Entrada de ilícitos: prevenção?', 'Controle de acesso, revista, inteligência e auditorias.'],
        ['Gestão de crise: primeiros passos?', 'Acionar plano, comando único, preservar vidas e reduzir danos.'],
    ]),
};
