import { makeCards } from './utils';

export const atualidades = {
    name: 'Atualidades',
    icon: '🌍',
    exams: ['pmdf', 'camara-deputados'],
    cards: makeCards('atual', [
        ['Agenda 2030 (ONU): o que é?', 'Conjunto de 17 ODS para desenvolvimento sustentável até 2030.'],
        ['COP: o que é?', 'Conferência das Partes (negociações climáticas internacionais).'],
        ['Transição energética?', 'Mudança de matriz fóssil para renováveis e eficiência energética.'],
        ['Cibersegurança: ameaças comuns?', 'Phishing, ransomware, vazamentos, engenharia social e DDoS.'],
        ['Desinformação: impacto?', 'Erosão de confiança, polarização e riscos a políticas públicas.'],
        ['Geopolítica: multipolaridade?', 'Poder distribuído entre vários polos (EUA, China, UE etc.).'],
        ['Reforma tributária (noção)?', 'Simplificação de tributos sobre consumo (IVA dual, etc.).'],
        ['Desigualdade social: indicador comum?', 'Índice de Gini e renda; políticas redistributivas.'],
        ['Saneamento básico: por que cai?', 'Impacta saúde e meio ambiente; metas e regulação.'],
        ['Amazônia: tópicos recorrentes?', 'Desmatamento, fiscalização, povos indígenas e créditos de carbono.'],
    ]),
};

