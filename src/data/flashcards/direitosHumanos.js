import { makeCards } from './utils.js';

export const direitosHumanos = {
    name: 'Direitos Humanos',
    icon: '🕊️',
    exams: ['pmdf', 'policia-penal-mg'],
    cards: makeCards('dh', [
        ['Direitos humanos x direitos fundamentais?', 'DH: proteção internacional/universal. Fundamentais: direitos na Constituição do Estado.'],
        ['Universalidade?', 'Direitos valem para todas as pessoas, sem discriminação.'],
        ['Indivisibilidade/interdependência?', 'Direitos civis/políticos e sociais/econômicos/culturais se complementam.'],
        ['Sistema global de proteção?', 'ONU: tratados, comitês e mecanismos de monitoramento.'],
        ['Sistema interamericano?', 'OEA: Comissão e Corte Interamericana de Direitos Humanos.'],
        ['Dignidade da pessoa humana (ideia)?', 'Fundamento central que orienta interpretação e limita atuação estatal.'],
        ['Uso da força: princípios?', 'Legalidade, necessidade, proporcionalidade, moderação e responsabilidade.'],
        ['Tratamento de presos: parâmetro?', 'Respeito à integridade física e moral; vedação de tratamento cruel/degradante.'],
        ['Igualdade: formal x material?', 'Formal: perante a lei. Material: medidas para reduzir desigualdades (ações afirmativas).'],
        ['Discriminação direta x indireta?', 'Direta: explícita. Indireta: regra neutra com impacto desigual.'],
        ['Controle de convencionalidade (noção)?', 'Compatibilizar normas internas com tratados de DH aplicáveis.'],
        ['Responsabilidade internacional do Estado?', 'Violação de tratados pode gerar condenação e obrigação de reparar.'],

        // PMDF - cards âncora por tópico do edital (1+ por tópico)
        [
            'PMDF: Fundamentos e princípios de DH — o que memorizar?',
            'Universalidade, indivisibilidade/interdependência, dignidade da pessoa humana e não discriminação.',
            'Fundamentos e princípios',
        ],
        [
            'PMDF: Sistema internacional e interamericano — noções?',
            'ONU (tratados e comitês) e OEA (Comissão/Corte IDH) como mecanismos de monitoramento e responsabilização.',
            'Sistema internacional e interamericano (noções)',
        ],
        [
            'PMDF: Uso da força e grupos vulneráveis — regra de prova?',
            'Legalidade, necessidade e proporcionalidade; prioridade à preservação da vida e atendimento humanizado.',
            'Regras de uso da força e proteção de grupos vulneráveis',
        ],
        [
            'PMDF: Programas nacionais de DH e política de memória — como cai?',
            'Noções: diretrizes de promoção/proteção e compromisso estatal; temas de cidadania e reparação.',
            'Programas nacionais de direitos humanos e política de memória',
        ],
        [
            'PMDF: Conselhos e ouvidorias — papel no controle externo?',
            'Receber denúncias, acompanhar políticas e fortalecer transparência/controle social da atividade policial.',
            'Papel de conselhos e ouvidorias no controle externo da atividade policial',
        ],
        [
            'PMDF: Proteção de minorias em operações — foco?',
            'Evitar discriminação, respeitar especificidades culturais e garantir segurança/dignidade (indígenas, tradicionais, LGBTI+).',
            'Proteção de minorias (indígenas, populações tradicionais, LGBTI+) em operações',
        ],
    ]),
};
