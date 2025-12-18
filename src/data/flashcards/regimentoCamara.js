import { makeCards } from './utils';

export const regimentoCamara = {
    name: 'Regimento Interno da Câmara (RICD) - Noções',
    icon: '🏛️',
    exams: ['camara-deputados'],
    cards: makeCards('ricd', [
        ['RICD: para que serve?', 'Regras de organização, funcionamento e processo legislativo interno da Câmara.'],
        ['Órgãos centrais (macro)?', 'Plenário, Mesa, Presidência, Colégio de Líderes e Comissões.'],
        ['Comissões: por que caem?', 'Analisam e emitem parecer; muitas matérias tramitam nelas (inclusive conclusivamente).'],
        ['Quórum: conceito?', 'Número mínimo para deliberação/instalação/votação, conforme regra.'],
        ['Maioria simples x absoluta?', 'Simples: mais votos favoráveis que contrários (presentes). Absoluta: metade+1 do total de membros.'],
        ['Maioria qualificada: noção?', 'Frações específicas previstas para certas matérias (ex.: 3/5 em casos constitucionais).'],
        ['Urgência (efeito)?', 'Acelera tramitação e reduz prazos/etapas conforme regras.'],
        ['Questão de ordem?', 'Dúvida sobre interpretação do regimento, decidida pela presidência.'],
        ['Destaque?', 'Separar parte da proposição para votação específica.'],
        ['CPI: requisitos (ideia)?', 'Fato determinado, prazo certo e requerimento com assinaturas mínimas (conforme CF/RICD).'],
        ['Decoro parlamentar (noção)?', 'Padrões éticos; violações podem gerar processo e sanções.'],
        ['Tramitação conclusiva em comissões?', 'Algumas matérias podem ser aprovadas sem Plenário, salvo recurso regimental.'],
        ['Votação simbólica x nominal?', 'Simbólica sem registro individual; nominal com registro do voto (quando exigida).'],
        ['Encaminhamento de votação?', 'Pronunciamento para orientar o voto (líderes/bancadas) conforme tempo/regra.'],
    ]),
};
