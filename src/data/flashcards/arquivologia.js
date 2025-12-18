import { makeCards } from './utils.js';

export const arquivologia = {
    name: 'Arquivologia',
    icon: '🗄️',
    exams: ['camara-deputados'],
    cards: makeCards('arq', [
        ['Princípio da proveniência?', 'Manter documentos conforme sua origem (não misturar fundos).'],
        ['Ordem original?', 'Preservar a organização dada pelo produtor.'],
        ['Arquivo corrente/intermediário/permanente?', 'Uso frequente / uso eventual / guarda definitiva (valor histórico/probatório).'],
        ['Valor primário x secundário?', 'Primário: administrativo/legal/fiscal. Secundário: histórico/probatório.'],
        ['Tabela de temporalidade?', 'Define prazos de guarda e destinação (eliminação ou recolhimento).'],
        ['Classificação arquivística: ideia?', 'Organização por funções/atividades para preservar contexto e facilitar recuperação.'],
        ['Protocolo: noção?', 'Receber, registrar, distribuir e tramitar documentos.'],
        ['SIGAD x GED (diferença geral)?', 'SIGAD atende requisitos arquivísticos; GED é mais amplo para gestão de documentos.'],
        ['Preservação digital: risco?', 'Obsolescência de formato/mídia; exige migração/gestão.'],
        ['Cadeia de custódia (documentos/evidências)?', 'Registro de posse/manuseio para garantir integridade e confiabilidade.'],
    ]),
};
