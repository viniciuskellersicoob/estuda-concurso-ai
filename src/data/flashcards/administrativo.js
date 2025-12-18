import { makeCards } from './utils.js';

export const direitoAdministrativo = {
    name: 'Direito Administrativo',
    icon: '🏛️',
    exams: ['policia-penal-mg', 'detran-df', 'camara-deputados'],
    cards: makeCards('adm', [
        ['Administração Pública (sentidos)?', 'Subjetivo: órgãos/entidades. Objetivo: atividade administrativa (função).'],
        ['Anulação x revogação?', 'Anular = ilegalidade (efeito retroativo em regra). Revogar = mérito (efeito prospectivo).'],
        ['Ato administrativo: elementos?', 'Competência, finalidade, forma, motivo e objeto.'],
        ['Desvio de finalidade?', 'Ato praticado visando fim diverso do previsto em lei.'],
        ['Autotutela?', 'Administração pode anular atos ilegais e revogar atos inconvenientes.'],
        ['Poder vinculado x discricionário?', 'Vinculado: sem escolha. Discricionário: margem de escolha dentro da lei.'],
        ['Poder hierárquico?', 'Organiza e coordena: ordens, fiscalização, delegação e avocação.'],
        ['Poder disciplinar?', 'Aplica sanções a servidores e particulares com vínculo (contratos, permissões etc.).'],
        ['Poder regulamentar?', 'Expedir regulamentos/decretos para fiel execução da lei (não pode inovar contra a lei).'],
        ['Poder de polícia?', 'Restringe direitos em prol do interesse público (licenças, fiscalização, sanções).'],
        ['Atributos do poder de polícia?', 'Discricionariedade (muitas vezes), coercibilidade e autoexecutoriedade (quando cabível).'],
        ['Centralização?', 'Execução direta pela própria pessoa política.'],
        ['Desconcentração?', 'Distribuição interna de competências (criação de órgãos).'],
        ['Descentralização?', 'Transferência a outra pessoa (admin indireta) ou delegação (concessão/permissão).'],
        ['Admin direta x indireta?', 'Direta: entes e órgãos. Indireta: autarquias, fundações, EP, SEM (conforme lei).'],
        ['Autarquia: característica central?', 'Pessoa jurídica de direito público, criada por lei para atividade típica do Estado.'],
        ['Empresa pública x sociedade de economia mista?', 'Ambas de direito privado; EP capital 100% público; SEM capital misto com controle estatal.'],
        ['Responsabilidade civil do Estado: teoria?', 'Objetiva (risco administrativo) com excludentes/atenuantes.'],
        ['Excludentes/atenuantes na responsabilidade estatal?', 'Culpa exclusiva da vítima, caso fortuito/força maior, fato exclusivo de terceiro (conforme caso).'],
        ['Controle judicial: limita-se a quê?', 'Legalidade; não substitui mérito administrativo.'],
        ['Licitação: finalidade?', 'Isonomia e seleção da proposta mais vantajosa, com julgamento objetivo.'],
        ['Dispensa x inexigibilidade?', 'Dispensa: competição possível, mas a lei autoriza contratar direto. Inexigibilidade: competição inviável.'],
        ['14.133: modalidades principais?', 'Concorrência, concurso, leilão, pregão e diálogo competitivo.'],
        ['Fase de planejamento (14.133): por que cai?', 'Define necessidade, estimativa e riscos; falhas aqui contaminam toda contratação.'],
        ['Contrato administrativo: prerrogativas?', 'Cláusulas exorbitantes (alteração unilateral, fiscalização, sanções) nos limites legais.'],
        ['Fiscal do contrato: papel?', 'Acompanhar execução, registrar ocorrências e exigir correções, conforme designação formal.'],
        ['Agentes públicos: noção?', 'Quem exerce função pública, permanente ou temporária, com ou sem vínculo.'],
        ['Cargo x emprego público?', 'Cargo: estatutário. Emprego: celetista.'],
        ['Bens públicos: classificação?', 'Uso comum do povo, uso especial e dominicais.'],
        ['Bens públicos: podem ser usucapidos?', 'Não (regra geral cobrada em prova).'],
        ['Motivação do ato: por que cai?', 'Permite controle e evita arbitrariedade; ausência pode invalidar o ato.'],
        ['Teoria dos motivos determinantes?', 'Se a Administração declara motivo, o ato depende da veracidade/adequação dele.'],
        ['Delegação x avocação?', 'Delegação: repassa exercício a subordinado. Avocação: superior chama para si (excepcional).'],
        ['Sanção administrativa exige o quê?', 'Base legal, motivação, proporcionalidade e devido processo.'],
        ['Devido processo administrativo (ideia)?', 'Direito de defesa, contraditório e decisão motivada em processos sancionadores.'],

        // CÂMARA (Téc. Legislativo) - cards por tópico do edital (1+ por tópico)
        [
            'CÂMARA: Lei 8.112/1990 — o que mais cai?',
            'Provimento/vacância, deveres/proibições, penalidades e PAD (noções + pegadinhas de prazos).',
            'Lei 8.112/1990 (Regime Jurídico Único)',
        ],
        [
            'CÂMARA: Lei 8.666/1993 — foco?',
            'Conceitos, fases, modalidades e hipóteses de contratação direta (dispensa x inexigibilidade).',
            'Lei 8.666/1993 (Licitações e Contratos)',
        ],
        [
            'CÂMARA: Princípios da Administração — quais são?',
            'LIMPE + supremacia/indisponibilidade do interesse público, razoabilidade e motivação (noções).',
            'Princípios da Administração Pública',
        ],
        [
            'CÂMARA: Atos administrativos — elementos?',
            'Competência, finalidade, forma, motivo e objeto; anulação x revogação (diferença clássica).',
            'Atos administrativos',
        ],
        [
            'CÂMARA: Processo administrativo — garantias?',
            'Devido processo, contraditório e ampla defesa; motivação e controle (principalmente no sancionador).',
            'Processo administrativo',
        ],
        [
            'CÂMARA: Responsabilidade civil do Estado — regra?',
            'Objetiva (risco administrativo) + direito de regresso contra agente com dolo/culpa; excludentes em prova.',
            'Responsabilidade civil do Estado (objetiva e regressiva)',
        ],
        [
            'CÂMARA: Controle administrativo, judicial e legislativo — noção?',
            'Admin: autotutela; Judicial: legalidade; Legislativo: fiscalização e tribunais de contas.',
            'Controle administrativo, judicial e legislativo',
        ],
        [
            'CÂMARA: Lei 14.133/2021 — o que memorizar?',
            'Fase preparatória, modalidades, gestão/fiscalização e governança; dispensa/inexigibilidade (noções).',
            'Lei 14.133/2021: fases, planejamento e governança das contratações',
        ],
        [
            'CÂMARA: Lei 8.112 — “deveres x proibições” (dica de prova)?',
            'Dever é obrigação funcional (cumprir ordens legais, urbanidade); proibição é vedação específica (vantagem indevida, valer-se do cargo).',
            'Lei 8.112/1990 (Regime Jurídico Único)',
        ],
        [
            'CÂMARA: 8.666 — dispensa x inexigibilidade (macete)?',
            'Dispensa: competição possível, mas a lei autoriza contratar direto. Inexigibilidade: competição inviável.',
            'Lei 8.666/1993 (Licitações e Contratos)',
        ],
        [
            'CÂMARA: Ato administrativo — elemento mais “cobrado”?',
            'Finalidade e motivo: desvio de finalidade e motivo inexistente geram ilegalidade (anulação).',
            'Atos administrativos',
        ],
        [
            'CÂMARA: Processo administrativo — nulidade típica?',
            'Cerceamento de defesa/ausência de motivação; viola devido processo e pode anular sanção.',
            'Processo administrativo',
        ],
        [
            'CÂMARA: Responsabilidade do Estado — prova gosta de quê?',
            'Objetiva (agente causa dano) e regressiva contra agente com dolo/culpa; excludentes em caso concreto.',
            'Responsabilidade civil do Estado (objetiva e regressiva)',
        ],
        [
            'CÂMARA: Controle — autotutela significa?',
            'Administração pode rever seus atos: anular ilegal e revogar inconveniente (sem entrar no mérito judicial).',
            'Controle administrativo, judicial e legislativo',
        ],
        [
            'CÂMARA: 14.133 — fase preparatória (por que cai)?',
            'Planejamento: estudo técnico, termo de referência, estimativas e gestão de riscos; falhas aqui geram problemas na contratação.',
            'Lei 14.133/2021: fases, planejamento e governança das contratações',
        ],

        // CÂMARA (Téc. Legislativo) - expansão (mín. ~5 cards por tópico)
        [
            'CÂMARA: RJU (8.112) — cargo x função?',
            'Cargo é posição prevista em lei; função é conjunto de atribuições (inclui função de confiança).',
            'Lei 8.112/1990 (Regime Jurídico Único)',
        ],
        [
            'CÂMARA: RJU — posse x exercício?',
            'Posse é investidura; exercício é início do desempenho das atribuições.',
            'Lei 8.112/1990 (Regime Jurídico Único)',
        ],
        [
            'CÂMARA: RJU — penalidades (como cai)?',
            'Banca cobra “qual é penalidade” e relação com infração; sempre exigir devido processo (PAD).',
            'Lei 8.112/1990 (Regime Jurídico Único)',
        ],
        [
            'CÂMARA: RJU — PAD (garantias)?',
            'Contraditório, ampla defesa, motivação e comissão; nulidade quando há cerceamento.',
            'Lei 8.112/1990 (Regime Jurídico Único)',
        ],

        [
            'CÂMARA: 8.666 — objetivo da licitação?',
            'Garantir isonomia e selecionar proposta mais vantajosa com julgamento objetivo.',
            'Lei 8.666/1993 (Licitações e Contratos)',
        ],
        [
            'CÂMARA: 8.666 — fases (visão geral)?',
            'Planejamento/edital, habilitação, julgamento, homologação e adjudicação (dependendo da modalidade).',
            'Lei 8.666/1993 (Licitações e Contratos)',
        ],
        [
            'CÂMARA: 8.666 — contratação direta sempre é ilegal?',
            'Não. Pode ser dispensa (hipóteses legais) ou inexigibilidade (competição inviável).',
            'Lei 8.666/1993 (Licitações e Contratos)',
        ],
        [
            'CÂMARA: 8.666 — princípio mais cobrado?',
            'Isonomia e vinculação ao instrumento convocatório (regra do edital).',
            'Lei 8.666/1993 (Licitações e Contratos)',
        ],

        [
            'CÂMARA: Princípios — publicidade tem limite?',
            'Sim. Publicidade é regra, mas pode haver sigilo legal (ex.: dados pessoais e segurança).',
            'Princípios da Administração Pública',
        ],
        [
            'CÂMARA: Princípios — eficiência “a qualquer custo”?',
            'Não. Eficiência deve respeitar legalidade e moralidade; “atalho” fora do rito é reprovado.',
            'Princípios da Administração Pública',
        ],
        [
            'CÂMARA: Princípios — motivação?',
            'Decisões devem ser fundamentadas; ausência de motivação fragiliza controle e pode invalidar atos.',
            'Princípios da Administração Pública',
        ],
        [
            'CÂMARA: Princípios — impessoalidade?',
            'Atuação sem promoção pessoal e sem favorecimento; foco no interesse público e critérios objetivos.',
            'Princípios da Administração Pública',
        ],

        [
            'CÂMARA: Ato administrativo — vício sanável?',
            'Em geral, competência e forma podem ser convalidados; finalidade e objeto ilegal não.',
            'Atos administrativos',
        ],
        [
            'CÂMARA: Ato administrativo — anulação x revogação?',
            'Anulação é por ilegalidade; revogação é por mérito (conveniência/oportunidade).',
            'Atos administrativos',
        ],
        [
            'CÂMARA: Ato administrativo — teoria dos motivos determinantes?',
            'Se a Administração declara o motivo, o ato depende da veracidade/adequação desse motivo.',
            'Atos administrativos',
        ],
        [
            'CÂMARA: Ato administrativo — desvio de finalidade?',
            'Usar o ato para fim diverso do previsto em lei; é ilegalidade e gera anulação.',
            'Atos administrativos',
        ],

        [
            'CÂMARA: Processo administrativo — princípio do contraditório?',
            'Ciência e possibilidade de reação/participação na decisão; essencial em processos sancionadores.',
            'Processo administrativo',
        ],
        [
            'CÂMARA: Processo administrativo — ampla defesa?',
            'Defesa técnica e autodefesa, com acesso a autos e produção de provas conforme regras.',
            'Processo administrativo',
        ],
        [
            'CÂMARA: Processo administrativo — motivação?',
            'Decisão deve indicar fundamentos de fato e de direito; “decisão padrão” sem análise é risco.',
            'Processo administrativo',
        ],
        [
            'CÂMARA: Processo administrativo — proporcionalidade?',
            'Sanção deve ser adequada e necessária; excesso pode ser anulado no controle judicial.',
            'Processo administrativo',
        ],

        [
            'CÂMARA: Responsabilidade do Estado — objetiva significa “sempre paga”?',
            'Não. Há excludentes/atenuantes como culpa exclusiva da vítima e fato exclusivo de terceiro (conforme caso).',
            'Responsabilidade civil do Estado (objetiva e regressiva)',
        ],
        [
            'CÂMARA: Responsabilidade — regressiva?',
            'Estado indeniza e pode cobrar do agente se houver dolo ou culpa.',
            'Responsabilidade civil do Estado (objetiva e regressiva)',
        ],
        [
            'CÂMARA: Responsabilidade — conduta comissiva?',
            'Ato do agente que causa dano; regra de prova é responsabilidade objetiva do Estado.',
            'Responsabilidade civil do Estado (objetiva e regressiva)',
        ],
        [
            'CÂMARA: Responsabilidade — omissão?',
            'Pode exigir análise de dever específico de agir e falha do serviço (bancas cobram como noção).',
            'Responsabilidade civil do Estado (objetiva e regressiva)',
        ],

        [
            'CÂMARA: Controle administrativo — autotutela?',
            'Rever atos: anular ilegais e revogar inconvenientes, com respeito à segurança jurídica.',
            'Controle administrativo, judicial e legislativo',
        ],
        [
            'CÂMARA: Controle judicial — entra no mérito?',
            'Em regra, não: controla legalidade; mérito só em abuso/desvio.',
            'Controle administrativo, judicial e legislativo',
        ],
        [
            'CÂMARA: Controle legislativo — como aparece?',
            'Fiscalização, comissões, requisição de informações e atuação com tribunais de contas (noções).',
            'Controle administrativo, judicial e legislativo',
        ],
        [
            'CÂMARA: Controle — por que é tema recorrente?',
            'Porque conecta legalidade, transparência e responsabilização do gestor/servidor.',
            'Controle administrativo, judicial e legislativo',
        ],

        [
            'CÂMARA: 14.133 — modalidades (noção)?',
            'Concorrência, pregão, concurso, leilão e diálogo competitivo.',
            'Lei 14.133/2021: fases, planejamento e governança das contratações',
        ],
        [
            'CÂMARA: 14.133 — gestão e fiscalização do contrato?',
            'Designar gestor/fiscal, registrar ocorrências e exigir correções; falhas podem gerar responsabilização.',
            'Lei 14.133/2021: fases, planejamento e governança das contratações',
        ],
        [
            'CÂMARA: 14.133 — governança (por que cai)?',
            'Integra planejamento, riscos, controle e transparência para reduzir fraudes e melhorar resultados.',
            'Lei 14.133/2021: fases, planejamento e governança das contratações',
        ],
        [
            'CÂMARA: 14.133 — dispensa e inexigibilidade (ideia)?',
            'Persistem como contratação direta: dispensa por hipótese legal; inexigibilidade por inviabilidade de competição.',
            'Lei 14.133/2021: fases, planejamento e governança das contratações',
        ],
    ]),
};
