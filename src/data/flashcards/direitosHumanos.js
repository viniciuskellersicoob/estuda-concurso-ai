import { makeCards } from './utils';

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
    ]),
};

