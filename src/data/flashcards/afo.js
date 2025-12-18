import { makeCards } from './utils.js';

export const afo = {
    name: 'Administração Financeira e Orçamentária (AFO)',
    icon: '💰',
    exams: ['camara-deputados'],
    cards: makeCards('afo', [
        ['Orçamento público: conceito?', 'Planejamento das receitas e despesas do Estado em determinado período.'],
        ['Princípio da anualidade?', 'Orçamento vale para um exercício financeiro (em regra, 1 ano).'],
        ['Princípio da unidade?', 'Existência de um orçamento para cada ente, integrando receitas e despesas.'],
        ['Princípio da universalidade?', 'Todas as receitas e despesas devem constar na LOA.'],
        ['Princípio da exclusividade?', 'LOA não deve conter matéria estranha (com exceções legais).'],
        ['Princípio da publicidade?', 'Orçamento deve ser divulgado e acessível.'],
        ['Ciclo orçamentário: etapas?', 'Elaboração, aprovação, execução e controle/avaliação.'],
        ['PPA: função?', 'Planejamento de médio prazo (programas, objetivos e metas).'],
        ['LDO: função?', 'Define metas e prioridades e orienta elaboração da LOA.'],
        ['LOA: estrutura (macro)?', 'Orçamento fiscal, seguridade social e investimento (conforme CF).'],
        ['Despesa pública: estágios?', 'Empenho, liquidação e pagamento.'],
        ['Empenho: o que é?', 'Ato que cria obrigação e reserva dotação.'],
        ['Liquidação: o que é?', 'Verificação do direito do credor após entrega do bem/serviço.'],
        ['Pagamento: o que é?', 'Quitação da obrigação após a liquidação e disponibilidade financeira.'],
        ['Restos a pagar: noção?', 'Despesas empenhadas e não pagas no fim do exercício (processadas ou não).'],
        ['Restos a pagar processados?', 'Despesa liquidada, mas não paga.'],
        ['Restos a pagar não processados?', 'Despesa empenhada, mas não liquidada.'],
        ['Créditos adicionais: tipos?', 'Suplementares, especiais e extraordinários.'],
        ['Crédito suplementar?', 'Reforça dotação existente.'],
        ['Crédito especial?', 'Cria dotação não prevista na LOA.'],
        ['Crédito extraordinário?', 'Para despesas urgentes e imprevisíveis (calamidade, guerra etc.).'],
        ['LRF: objetivo?', 'Responsabilidade na gestão fiscal, equilíbrio e transparência.'],
        ['Despesa obrigatória x discricionária?', 'Obrigatória decorre de lei; discricionária tem maior flexibilidade na execução.'],
        ['Contingenciamento: por que existe?', 'Ajustar execução para cumprir metas fiscais quando a receita frustra a previsão.'],
        ['Contingenciamento?', 'Limitação de empenho para cumprir metas fiscais quando arrecadação frustra previsão.'],
        ['Dotação orçamentária é dinheiro em caixa?', 'Não. É autorização para gastar; o caixa depende do fluxo de arrecadação.'],
        ['Empenho garante pagamento imediato?', 'Não. É etapa inicial; pagamento depende de liquidação e disponibilidade financeira.'],

        // CÂMARA (Téc. Legislativo) - cards por tópico do edital (1+ por tópico)
        [
            'CÂMARA: Orçamento público — conceitos e princípios (resumo)?',
            'Lei que prevê receitas e fixa despesas; princípios: anualidade, unidade, universalidade, exclusividade e publicidade.',
            'Orçamento público: conceitos e princípios',
        ],
        ['CÂMARA: Ciclo orçamentário — fases?', 'Elaboração, aprovação, execução e controle/avaliação.', 'Ciclo orçamentário'],
        [
            'CÂMARA: Créditos adicionais — tipos?',
            'Suplementar (reforça dotação), especial (cria dotação) e extraordinário (urgente/imprevisível).',
            'Créditos adicionais',
        ],
        [
            'CÂMARA: Despesa (empenho, liquidação, pagamento) — ordem?',
            'Empenho → liquidação → pagamento; restos a pagar se ficar pendente no fim do exercício.',
            'Despesa pública: empenho, liquidação e pagamento',
        ],
        [
            'CÂMARA: Receita pública — etapas (noção)?',
            'Previsão, lançamento, arrecadação e recolhimento (terminologia varia por banca).',
            'Classificação da receita pública e etapas do ingresso',
        ],
        [
            'CÂMARA: LRF — limites (ideia)?',
            'Regras para despesa com pessoal e endividamento; transparência e responsabilidade fiscal.',
            'LRF: limites de despesa com pessoal e endividamento',
        ],
        [
            'CÂMARA: Programação financeira e contingenciamento — por quê?',
            'Compatibilizar despesas com fluxo de caixa e limitar empenhos quando a receita frustra a previsão.',
            'Programação financeira, cronograma de desembolso e contingenciamento',
        ],
        [
            'CÂMARA: Princípios orçamentários — pegadinha comum?',
            'Confundir unidade (um orçamento) com universalidade (tudo dentro); e exclusividade (matéria estranha na LOA).',
            'Orçamento público: conceitos e princípios',
        ],
        [
            'CÂMARA: Ciclo orçamentário — onde “controle” aparece?',
            'Na fiscalização/avaliação da execução, com controle interno, externo (TCU) e social.',
            'Ciclo orçamentário',
        ],
        [
            'CÂMARA: Créditos adicionais — diferença-chave?',
            'Suplementar reforça dotação existente; especial cria dotação nova; extraordinário é urgente/imprevisível.',
            'Créditos adicionais',
        ],
        [
            'CÂMARA: Empenho, liquidação e pagamento — erro clássico?',
            'Pagar sem liquidar é irregular; liquidação comprova entrega/serviço e direito do credor.',
            'Despesa pública: empenho, liquidação e pagamento',
        ],
        [
            'CÂMARA: Receita pública — cuidado em prova?',
            'Não confundir classificação (corrente/capital) com estágios (previsão, lançamento, arrecadação, recolhimento).',
            'Classificação da receita pública e etapas do ingresso',
        ],
        [
            'CÂMARA: LRF e despesa com pessoal — ideia central?',
            'Limites buscam equilíbrio fiscal; extrapolação gera medidas de ajuste e restrições.',
            'LRF: limites de despesa com pessoal e endividamento',
        ],
        [
            'CÂMARA: Contingenciamento — quando ocorre?',
            'Quando a arrecadação não comporta metas fiscais, limitando empenho para manter resultado.',
            'Programação financeira, cronograma de desembolso e contingenciamento',
        ],

        // CÂMARA (Téc. Legislativo) - expansão (mín. ~5 cards por tópico)
        [
            'CÂMARA: Orçamento — unidade x universalidade?',
            'Unidade: um orçamento por ente. Universalidade: todas as receitas e despesas devem constar na LOA.',
            'Orçamento público: conceitos e princípios',
        ],
        [
            'CÂMARA: Orçamento — exclusividade?',
            'LOA não deve conter matéria estranha à previsão de receita e fixação de despesa (com exceções).',
            'Orçamento público: conceitos e princípios',
        ],
        [
            'CÂMARA: Orçamento — anualidade?',
            'Vigência do orçamento por um exercício financeiro (em regra, 1 ano).',
            'Orçamento público: conceitos e princípios',
        ],
        [
            'CÂMARA: Orçamento — erro comum em prova?',
            'Tratar dotação como dinheiro disponível; dotação é autorização, caixa depende de arrecadação/fluxo.',
            'Orçamento público: conceitos e princípios',
        ],

        [
            'CÂMARA: Ciclo orçamentário — elaboração envolve?',
            'Definir metas, estimar receitas e fixar despesas com base no planejamento (PPA/LDO).',
            'Ciclo orçamentário',
        ],
        [
            'CÂMARA: Ciclo — aprovação ocorre onde?',
            'No Legislativo, conforme rito constitucional e regimental (noções).',
            'Ciclo orçamentário',
        ],
        [
            'CÂMARA: Ciclo — execução (noção)?',
            'Implementar a LOA: arrecadar receitas e realizar despesas (empenho, liquidação, pagamento).',
            'Ciclo orçamentário',
        ],
        [
            'CÂMARA: Ciclo — controle/avaliação (noção)?',
            'Acompanhar resultados e conformidade por controle interno, externo (TCU) e social.',
            'Ciclo orçamentário',
        ],

        [
            'CÂMARA: Créditos adicionais — fonte comum?',
            'Anulação de dotação, excesso de arrecadação e superávit (conforme regras) são fontes típicas.',
            'Créditos adicionais',
        ],
        [
            'CÂMARA: Crédito suplementar — como cai?',
            'Reforço de dotação insuficiente, geralmente por autorização e indicação de fonte.',
            'Créditos adicionais',
        ],
        [
            'CÂMARA: Crédito especial — como cai?',
            'Criar dotação nova não prevista na LOA; exige autorização específica.',
            'Créditos adicionais',
        ],
        [
            'CÂMARA: Crédito extraordinário — quando?',
            'Despesas urgentes e imprevisíveis (calamidade, guerra etc.).',
            'Créditos adicionais',
        ],

        [
            'CÂMARA: Empenho — o que “faz”?',
            'Reserva dotação e cria obrigação de pagamento (1º estágio da despesa).',
            'Despesa pública: empenho, liquidação e pagamento',
        ],
        [
            'CÂMARA: Liquidação — o que verifica?',
            'Direito do credor após entrega do bem/serviço (2º estágio).',
            'Despesa pública: empenho, liquidação e pagamento',
        ],
        [
            'CÂMARA: Pagamento — o que é?',
            'Quitação após liquidação e disponibilidade financeira (3º estágio).',
            'Despesa pública: empenho, liquidação e pagamento',
        ],
        [
            'CÂMARA: Restos a pagar — noção?',
            'Despesas empenhadas e não pagas até o fim do exercício (processadas ou não).',
            'Despesa pública: empenho, liquidação e pagamento',
        ],

        [
            'CÂMARA: Receita — classificação (noção)?',
            'Pode ser corrente ou de capital; classificação é diferente dos estágios de arrecadação.',
            'Classificação da receita pública e etapas do ingresso',
        ],
        [
            'CÂMARA: Receita — lançamento?',
            'Identificação e constituição do crédito (típico em tributos), etapa anterior à arrecadação.',
            'Classificação da receita pública e etapas do ingresso',
        ],
        [
            'CÂMARA: Receita — arrecadação?',
            'Recebimento pelo agente arrecadador (entrada do recurso).',
            'Classificação da receita pública e etapas do ingresso',
        ],
        [
            'CÂMARA: Receita — recolhimento?',
            'Transferência do recurso arrecadado para a conta do Tesouro/órgão competente.',
            'Classificação da receita pública e etapas do ingresso',
        ],

        [
            'CÂMARA: LRF — objetivo geral?',
            'Equilíbrio fiscal com planejamento, transparência e controle de despesas e dívida.',
            'LRF: limites de despesa com pessoal e endividamento',
        ],
        [
            'CÂMARA: LRF — por que “pessoal” é central?',
            'Despesa com pessoal é rígida e cresce; limites evitam desequilíbrio e efeito cascata.',
            'LRF: limites de despesa com pessoal e endividamento',
        ],
        [
            'CÂMARA: LRF — transparência fiscal?',
            'Exige divulgação e relatórios; fortalece controle e responsabilização.',
            'LRF: limites de despesa com pessoal e endividamento',
        ],
        [
            'CÂMARA: LRF — endividamento (noção)?',
            'Limites reduzem risco de insolvência e protegem capacidade de investimento.',
            'LRF: limites de despesa com pessoal e endividamento',
        ],

        [
            'CÂMARA: Programação financeira — por que existe?',
            'Para casar despesa com fluxo de caixa e evitar execução sem disponibilidade.',
            'Programação financeira, cronograma de desembolso e contingenciamento',
        ],
        [
            'CÂMARA: Cronograma de desembolso — noção?',
            'Planejamento de saídas de caixa ao longo do exercício para manter equilíbrio financeiro.',
            'Programação financeira, cronograma de desembolso e contingenciamento',
        ],
        [
            'CÂMARA: Contingenciamento — o que limita?',
            'Limita empenho e movimentação financeira para cumprir metas fiscais.',
            'Programação financeira, cronograma de desembolso e contingenciamento',
        ],
        [
            'CÂMARA: Contingenciamento — pegadinha?',
            'Não confundir com “corte definitivo”: é limitação temporária/ajuste conforme arrecadação.',
            'Programação financeira, cronograma de desembolso e contingenciamento',
        ],
    ]),
};
