import { makeCards } from './utils.js';

const TOPIC_COMPETENCIAS = 'Código de Trânsito Brasileiro: competências, princípios e infrações';
const TOPIC_LEI_14071 =
    'Lei 14.071/2020 e atualizações sobre validade da CNH, pontuação e recursos';
const TOPIC_INFRACOES =
    'Infrações, penalidades e medidas administrativas com foco em fiscalização';
const TOPIC_PROCESSO = 'Processos administrativos de trânsito e recursos';
const TOPIC_CONTRAN = 'Resoluções do CONTRAN e normas complementares mais recentes';

const EXAM = 'detran-df';

export const ctb = {
    name: 'Código de Trânsito Brasileiro (CTB)',
    icon: '🚗',
    exams: [EXAM],
    cards: makeCards('ctb', [
        // ==========================================================
        // 1) Competencias, principios e infracoes (SNT / conceitos / regras gerais)
        // ==========================================================
        [
            'O que é o SNT (Sistema Nacional de Trânsito)?',
            'Conjunto de órgãos e entidades da União, Estados, DF e Municípios que planejam, normatizam, administram e fiscalizam o trânsito.',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'CONTRAN: qual é a função central?',
            'Órgão máximo normativo/consultivo do SNT: estabelece normas e expede resoluções para aplicação do CTB.',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'DETRAN: 3 competências típicas?',
            'Habilitação (CNH), registro/licenciamento de veículos e execução de ações administrativas de trânsito no âmbito do Estado/DF.',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'PRF no trânsito: papel típico?',
            'Policiamento ostensivo e fiscalização de trânsito em rodovias e estradas federais, conforme competências legais.',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'O que é “via” no CTB?',
            'Espaço por onde circulam pessoas, veículos e animais: pista, calçada, acostamento, canteiro central etc.',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'O que é “trânsito” no CTB?',
            'Utilização das vias por pessoas, veículos e animais (circulação, parada e estacionamento).',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'Parada x Estacionamento (diferença)?',
            'Parada: imobilização breve para embarque/desembarque. Estacionamento: imobilização por tempo superior ao da parada.',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'Hierarquia da sinalização (regra geral em prova):',
            'Ordem do agente de trânsito > semáforo/sinal luminoso > placas > sinais/marcas viárias.',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'Sinalização horizontal: exemplos?',
            'Faixas, linhas de divisão/limite, setas, marcas de canalização e áreas de conflito.',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'Sinalização vertical: exemplos?',
            'Placas de regulamentação, advertência e indicação.',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'Regra de segurança viária que “fecha prova”:',
            'Princípio da preservação da vida: condução defensiva, respeito à sinalização e redução de riscos/velocidade conforme condições.',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'Direção defensiva: definição objetiva?',
            'Conjunto de condutas para prever riscos, evitar acidentes e minimizar danos (antecipação + espaço + tempo).',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'Distância de segurança: como responder em prova?',
            'Manter distância frontal/lateral suficiente para reagir e parar com segurança, considerando velocidade e condições da via.',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'Ultrapassagem segura depende de quê?',
            'Sinalização permitindo, visibilidade suficiente, espaço/tempo para concluir e ausência de risco para terceiros.',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'Quem tem prioridade em rotatórias (regra geral)?',
            'Quem já está circulando na rotatória (salvo sinalização em contrário).',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'Classificação das infrações no CTB:',
            'Leve, média, grave e gravíssima.',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'O que é “infração de trânsito”?',
            'Inobservância de regra prevista no CTB e normas complementares, sujeita a penalidades e medidas administrativas.',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'Cinto de segurança: obrigação de quem?',
            'Condutor e passageiros (regra geral), conforme CTB e normas complementares.',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'Transporte de crianças: regra-base que banca cobra?',
            'Uso de dispositivos de retenção e observância de idade/altura/posição no veículo conforme CTB e resoluções do CONTRAN.',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'Motociclista: item obrigatório mais cobrado?',
            'Capacete (e forma correta de uso), além de exigências complementares previstas em norma.',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            'Álcool e direção: pode gerar o quê?',
            'Infração gravíssima e, conforme o caso (alteração psicomotora), crime de trânsito.',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],
        [
            '“Aquaplanagem”: conduta segura (resumo)?',
            'Tirar o pé do acelerador, evitar freada brusca, manter direção firme e reduzir gradualmente.',
            TOPIC_COMPETENCIAS,
            EXAM,
        ],

        // ==========================================================
        // 2) Lei 14.071/2020 e atualizacoes (CNH, pontuacao, recursos)
        // ==========================================================
        [
            'Lei 14.071/2020: qual foi o impacto geral no CTB?',
            'Atualizou regras relevantes de habilitação, prazos/validade, pontuação e rotinas administrativas; prova cobra a regra vigente.',
            TOPIC_LEI_14071,
            EXAM,
        ],
        [
            'Validade da CNH: regra geral por idade (modelo 10/5/3 anos)?',
            'Regra geral: até 49 anos (10 anos), 50–69 (5 anos), 70+ (3 anos), salvo prazo menor por exigência médica.',
            TOPIC_LEI_14071,
            EXAM,
        ],
        [
            'Pontuação para suspensão: qual é a lógica atual?',
            'Sistema escalonado conforme existência de infração gravíssima no período (limites diferentes).',
            TOPIC_LEI_14071,
            EXAM,
        ],
        [
            'Pontuação para suspensão (regra geral 40/30/20): como é?',
            'Em regra: 40 pontos sem gravíssima; 30 com 1 gravíssima; 20 com 2 ou mais gravíssimas (no período considerado).',
            TOPIC_LEI_14071,
            EXAM,
        ],
        [
            'CNH: o que ela comprova?',
            'Aptidão legal para conduzir veículo na categoria correspondente, sujeita a requisitos e prazos.',
            TOPIC_LEI_14071,
            EXAM,
        ],
        [
            'Suspensão x cassação da CNH (diferença-chave)?',
            'Suspensão: proibição temporária de dirigir. Cassação: sanção mais grave, com reabilitação mais complexa (novo processo).',
            TOPIC_LEI_14071,
            EXAM,
        ],
        [
            'Reciclagem do condutor: quando aparece em prova?',
            'Como exigência vinculada a penalidades/regularização do direito de dirigir, conforme regra do CTB/CONTRAN.',
            TOPIC_LEI_14071,
            EXAM,
        ],
        [
            'Pegadinha: “lei mudou, então tudo é diferente”?',
            'Não. A banca cobra pontos específicos (validade CNH, pontos/suspensão e rotinas), e sempre pela regra vigente.',
            TOPIC_LEI_14071,
            EXAM,
        ],

        // ==========================================================
        // 3) Infracoes, penalidades e medidas administrativas (fiscalizacao)
        // ==========================================================
        [
            'Penalidade x medida administrativa (diferença objetiva)?',
            'Penalidade é sanção (ex.: multa, suspensão). Medida administrativa é providência imediata/operacional (ex.: retenção, remoção).',
            TOPIC_INFRACOES,
            EXAM,
        ],
        [
            'Exemplos de penalidades (3 exemplos)?',
            'Multa, suspensão do direito de dirigir e cassação da CNH (além de advertência por escrito, curso etc., quando aplicável).',
            TOPIC_INFRACOES,
            EXAM,
        ],
        [
            'Exemplos de medidas administrativas (3 exemplos)?',
            'Retenção do veículo, remoção do veículo e recolhimento de documento (quando previsto).',
            TOPIC_INFRACOES,
            EXAM,
        ],
        [
            'Multa: qual é a ideia central?',
            'Sanção pecuniária aplicada pela prática de infração, com classificação e fatores (quando houver).',
            TOPIC_INFRACOES,
            EXAM,
        ],
        [
            'Advertência por escrito: quando costuma ser cobrada?',
            'Como alternativa em casos previstos (geralmente infrações leves/médias e condutor sem reincidência), conforme regra vigente.',
            TOPIC_INFRACOES,
            EXAM,
        ],
        [
            'Licenciamento anual: para que serve?',
            'Autoriza a circulação do veículo; irregularidade pode gerar infração e medidas administrativas.',
            TOPIC_INFRACOES,
            EXAM,
        ],
        [
            'CRLV: função prática?',
            'Comprovar regularidade para circulação (licenciamento), conforme regras vigentes.',
            TOPIC_INFRACOES,
            EXAM,
        ],
        [
            'CRV: “onde cai” em prova?',
            'Relacionado à propriedade/transferência do veículo e obrigações documentais.',
            TOPIC_INFRACOES,
            EXAM,
        ],
        [
            'Uso de celular ao volante: em prova, entra como quê?',
            'Infração de trânsito (foco em risco e fiscalização), com penalidade e pontuação conforme classificação legal.',
            TOPIC_INFRACOES,
            EXAM,
        ],
        [
            'Excesso de velocidade: por que é campeão de prova?',
            'Porque tem gradações e consequências variáveis; banca gosta de “conduta + consequência” (penalidade/medida).',
            TOPIC_INFRACOES,
            EXAM,
        ],
        [
            'Dirigir sob influência de álcool: qual o núcleo da cobrança?',
            'Infrações gravíssimas e eventual crime (alteração psicomotora), além de procedimentos e medidas administrativas.',
            TOPIC_INFRACOES,
            EXAM,
        ],
        [
            'Recusa ao etilômetro: como cai em prova?',
            'A recusa pode gerar consequências administrativas específicas; atenção ao enunciado e regra vigente.',
            TOPIC_INFRACOES,
            EXAM,
        ],
        [
            'Capacete (moto): qual é a pegadinha comum?',
            'Não é só “usar”: é usar corretamente (afivelado, padrão) e com exigências complementares previstas em norma.',
            TOPIC_INFRACOES,
            EXAM,
        ],
        [
            'Omissão de socorro no trânsito (ideia)?',
            'Deixar de prestar/providenciar socorro quando possível sem risco pessoal, podendo configurar crime/infração conforme o caso.',
            TOPIC_INFRACOES,
            EXAM,
        ],
        [
            'Art. 306 (crime): ideia central?',
            'Conduzir veículo com capacidade psicomotora alterada por álcool ou substância psicoativa.',
            TOPIC_INFRACOES,
            EXAM,
        ],
        [
            'Art. 308 (racha): ideia central?',
            'Participar de corrida/disputa não autorizada na direção de veículo, com agravantes conforme resultado.',
            TOPIC_INFRACOES,
            EXAM,
        ],
        [
            'CNH suspensa x cassada (resumo “de fiscal”)?',
            'Suspensa: proibido dirigir por período. Cassada: perda mais grave; reabilitação exige novo processo após prazo.',
            TOPIC_INFRACOES,
            EXAM,
        ],
        [
            'Retenção x remoção do veículo (diferença simples)?',
            'Retenção: veículo fica retido até regularização. Remoção: veículo é levado ao depósito (situações mais graves/impeditivas).',
            TOPIC_INFRACOES,
            EXAM,
        ],
        [
            'Cinto e criança: como responder sem “chutar número”?',
            'Responder pelo princípio: uso obrigatório e regras específicas definidas pelo CTB e detalhadas por resoluções do CONTRAN (atualização).',
            TOPIC_INFRACOES,
            EXAM,
        ],

        // ==========================================================
        // 4) Processos administrativos e recursos
        // ==========================================================
        [
            'Auto de infração: para que serve?',
            'Formaliza a constatação da infração e inicia o processo administrativo de trânsito.',
            TOPIC_PROCESSO,
            EXAM,
        ],
        [
            'Notificação de autuação: ideia?',
            'Comunica o registro da infração e abre prazo para defesa prévia/identificação do condutor quando aplicável.',
            TOPIC_PROCESSO,
            EXAM,
        ],
        [
            'Defesa prévia: o que ela combate?',
            'A autuação (fase inicial), geralmente apontando vícios formais/materialmente inconsistentes antes da penalidade definitiva.',
            TOPIC_PROCESSO,
            EXAM,
        ],
        [
            'Notificação de penalidade: ideia?',
            'Comunica a aplicação da penalidade (ex.: multa) e abre prazo para recurso administrativo.',
            TOPIC_PROCESSO,
            EXAM,
        ],
        [
            'Recurso: o que ele combate?',
            'A penalidade aplicada, nas instâncias administrativas previstas no CTB.',
            TOPIC_PROCESSO,
            EXAM,
        ],
        [
            'JARI: o que é?',
            'Junta Administrativa de Recursos de Infrações: 1ª instância recursal administrativa.',
            TOPIC_PROCESSO,
            EXAM,
        ],
        [
            '2ª instância recursal (ideia geral):',
            'Há instância superior administrativa (ex.: conselhos) conforme o órgão autuador e competência prevista no CTB.',
            TOPIC_PROCESSO,
            EXAM,
        ],
        [
            'Pegadinha: “defesa prévia = recurso”?',
            'Não. Defesa prévia é antes da penalidade; recurso é contra a penalidade/decisão administrativa.',
            TOPIC_PROCESSO,
            EXAM,
        ],
        [
            'Por que “prazos” derrubam candidato?',
            'Porque variam conforme etapa e norma complementar; em prova, atenção ao que o enunciado pede (autuação x penalidade x recurso).',
            TOPIC_PROCESSO,
            EXAM,
        ],

        // ==========================================================
        // 5) Resolucoes do CONTRAN e normas complementares
        // ==========================================================
        [
            'Por que resoluções do CONTRAN caem tanto?',
            'Porque detalham procedimentos e requisitos técnicos do CTB (sinalização, equipamentos, prazos e processos) e mudam com frequência.',
            TOPIC_CONTRAN,
            EXAM,
        ],
        [
            'Resolução do CONTRAN pode “criar crime”?',
            'Não. Crime é matéria de lei. Resolução regulamenta aplicação administrativa/técnica do CTB.',
            TOPIC_CONTRAN,
            EXAM,
        ],
        [
            'Exemplo de tema típico de resolução do CONTRAN:',
            'Equipamentos obrigatórios, requisitos de capacete/uso, sinalização, procedimentos de fiscalização e padrões técnicos.',
            TOPIC_CONTRAN,
            EXAM,
        ],
        [
            'Como estudar resoluções sem “decorar número”?',
            'Estude o conteúdo (regra prática + exceções) e revise as atualizações recentes que as bancas gostam de cobrar.',
            TOPIC_CONTRAN,
            EXAM,
        ],
    ]),
};

