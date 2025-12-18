import { makeCards } from './utils.js';

export const ctb = {
    name: 'Código de Trânsito Brasileiro (CTB)',
    icon: '🚗',
    exams: ['detran-df'],
    cards: makeCards('ctb', [
        ['Sistema Nacional de Trânsito (SNT): noção?', 'Conjunto de órgãos/entidades que organizam e fiscalizam o trânsito.'],
        ['CONTRAN: função?', 'Órgão normativo e coordenador; expede resoluções.'],
        ['DETRAN: função típica?', 'Habilitação, registro/licenciamento e fiscalização administrativa, conforme competências.'],
        ['Infração: classificação?', 'Leve, média, grave e gravíssima.'],
        ['Penalidade x medida administrativa?', 'Penalidade pune; medida administrativa é providência imediata (retenção, remoção etc.).'],
        ['Licenciamento anual: serve para?', 'Autorizar circulação do veículo; falta pode gerar infração e medidas administrativas.'],
        ['CRLV/CRV: noção geral?', 'Documentos do veículo; o licenciamento (CRLV) comprova regularidade para circulação.'],
        ['Cinto de segurança: obrigação?', 'Obrigatório para condutor e passageiros.'],
        ['Transporte de crianças: regra?', 'Sistemas de retenção conforme idade/altura e normas do CONTRAN.'],
        ['Motociclista: item obrigatório?', 'Capacete e outros equipamentos conforme normas; descumprimento gera infrações.'],
        ['Álcool e direção: ponto-chave?', 'Pode gerar infração gravíssima e crime conforme situação/alteração psicomotora.'],
        ['Recusa ao bafômetro: como cai?', 'Pode gerar sanções administrativas específicas; atenção ao enunciado atualizado.'],
        ['Crime do art. 306 (ideia)?', 'Conduzir com capacidade psicomotora alterada por álcool/droga.'],
        ['“Racha” (art. 308): ideia?', 'Participar de corrida/disputa não autorizada, crime com agravantes.'],
        ['Homicídio culposo no trânsito: noção?', 'Crime culposo com pena e causas de aumento conforme circunstâncias.'],
        ['Lesão corporal culposa no trânsito: noção?', 'Crime culposo; pode agravar conforme fatores (ex.: álcool).'],
        ['Omissão de socorro no trânsito: ideia?', 'Deixar de prestar socorro quando possível sem risco; pode ser crime e infração.'],
        ['CNH suspensa x cassada?', 'Suspensão: perde por período. Cassação: penalidade mais grave e exige novo processo/curso.'],
        ['Pontuação e suspensão: por que é pegadinha?', 'Regras mudam e variam por gravidade/profissional; banca cobra “regra vigente”.'],
        ['JARI: o que é?', 'Junta Administrativa de Recursos de Infrações (julga recursos).'],
        ['Defesa prévia x recurso?', 'Defesa prévia contesta autuação; recurso contesta penalidade (etapas distintas).'],
        ['Hierarquia da sinalização (pegadinha)?', 'Agente de trânsito > semáforo > placas > marcas/sinais (regra geral).'],
        ['Sinalização horizontal: exemplos?', 'Faixas, linhas de divisão, setas e marcas de canalização.'],
        ['Direção defensiva: conceito?', 'Conjunto de condutas para prevenir acidentes, antecipando riscos.'],
        ['Distância de segurança: regra?', 'Manter distância frontal/lateral suficiente conforme velocidade e condições.'],
        ['Aquaplanagem: reação básica?', 'Tirar o pé do acelerador, segurar firme o volante e evitar freada brusca.'],
        ['Primeiros socorros: princípio?', 'Sinalizar local, acionar socorro e evitar movimentar vítima sem necessidade.'],

        // DETRAN-DF - cards por tópico do edital (1+ por tópico)
        [
            'DETRAN: CTB — competências, princípios e infrações (essência)?',
            'Competências dos órgãos do SNT, princípios de segurança e classificação de infrações/penalidades no CTB.',
            'Código de Trânsito Brasileiro: competências, princípios e infrações',
        ],
        [
            'DETRAN: Lei 14.071/2020 — o que mudou (ideia)?',
            'Atualizações sobre CNH (validade), pontuação/suspensão e regras de processos/recursos (cobrado como noção).',
            'Lei 14.071/2020 e atualizações sobre validade da CNH, pontuação e recursos',
        ],
        [
            'DETRAN: Infrações, penalidades e medidas administrativas — diferença?',
            'Penalidade pune (multa/suspensão); medida administrativa é providência imediata (retenção/remoção etc.).',
            'Infrações, penalidades e medidas administrativas com foco em fiscalização',
        ],
        [
            'DETRAN: Processos administrativos e recursos — caminho típico?',
            'Defesa prévia e recursos nas instâncias administrativas (JARI/Conselhos), conforme regras do CTB/CONTRAN.',
            'Processos administrativos de trânsito e recursos',
        ],
        [
            'DETRAN: Resoluções do CONTRAN — por que caem?',
            'Detalham e atualizam regras do CTB (procedimentos, equipamentos, prazos); prova cobra noções e atualizações.',
            'Resoluções do CONTRAN e normas complementares mais recentes',
        ],
    ]),
};
