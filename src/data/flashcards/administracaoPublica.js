import { makeCards } from './utils.js';

export const administracaoPublica = {
    name: 'Administração Pública (Gestão)',
    icon: '📊',
    exams: ['camara-deputados'],
    cards: makeCards('ap', [
        ['PPA, LDO e LOA (ordem e função)?', 'PPA: planejamento plurianual. LDO: diretrizes e metas. LOA: orçamento anual.'],
        ['Eficiência x eficácia x efetividade?', 'Eficiência: recursos/custo. Eficácia: atingir metas. Efetividade: impacto real.'],
        ['Governança pública: conceito?', 'Direção, monitoramento e incentivos para integridade e resultados.'],
        ['Gestão de riscos: etapas?', 'Identificar, analisar, tratar, monitorar e comunicar.'],
        ['Ciclo PDCA?', 'Plan-Do-Check-Act (melhoria contínua).'],
        ['SWOT?', 'Forças, fraquezas, oportunidades e ameaças.'],
        ['Indicador x meta?', 'Indicador mede; meta é o valor-alvo no tempo.'],
        ['Gestão por processos (BPM): ideia?', 'Mapear, padronizar, medir e melhorar processos ponta a ponta.'],
        ['Gestão por competências?', 'Alinhar CHA (conhecimentos, habilidades, atitudes) às necessidades do órgão.'],
        ['Clima x cultura?', 'Clima é percepção momentânea; cultura é conjunto de valores e práticas enraizadas.'],
        ['Gestão de projetos: triângulo?', 'Escopo, prazo e custo (qualidade como resultante).'],
        ['Transparência ativa x passiva (LAI)?', 'Ativa: divulgação espontânea. Passiva: fornecimento mediante pedido.'],
        ['Accountability: noção?', 'Prestação de contas e responsabilização por atos/omissões.'],
        ['Avaliação de políticas públicas: por quê?', 'Verificar resultados e ajustar decisões (ciclo de políticas).'],

        // CÂMARA (Téc. Legislativo) - cards por tópico do edital (1+ por tópico)
        [
            'CÂMARA: Organização administrativa brasileira — mapa?',
            'Administração direta e indireta; órgãos x entidades; centralização, desconcentração e descentralização.',
            'Organização administrativa brasileira',
        ],
        [
            'CÂMARA: Princípios da administração pública — foco?',
            'LIMPE e princípios de boa governança (transparência, integridade e foco no cidadão).',
            'Princípios da administração pública',
        ],
        [
            'CÂMARA: Descentralização x desconcentração — diferença?',
            'Descentralização cria/usa outra pessoa (entidade/delegação). Desconcentração cria órgãos internos (mesma pessoa).',
            'Descentralização e desconcentração',
        ],
        [
            'CÂMARA: Administração direta e indireta — exemplos?',
            'Direta: ministérios/secretarias (órgãos). Indireta: autarquias, fundações, EP e SEM.',
            'Administração direta e indireta',
        ],
        [
            'CÂMARA: Planejamento estratégico (PPA/LDO/LOA) — como cair?',
            'Alinhamento entre planejamento e orçamento; metas, indicadores e prioridades do órgão.',
            'Planejamento estratégico (PPA, LDO, LOA) e alinhamento institucional',
        ],
        [
            'CÂMARA: Governança, compliance e riscos — noção?',
            'Regras e controles para prevenir desvios, gerir riscos e garantir integridade e resultados.',
            'Governança pública, compliance e gestão de riscos',
        ],
        [
            'CÂMARA: Gestão por competências e desempenho — essencial?',
            'Mapear competências, avaliar gaps e medir desempenho por indicadores; feedback e desenvolvimento.',
            'Gestão por competências, desempenho e avaliação de resultados',
        ],

        // CÂMARA (Téc. Legislativo) - expansão (mín. ~5 cards por tópico)
        [
            'CÂMARA: Organização administrativa — centralização?',
            'Execução direta pela própria pessoa política; típica da administração direta.',
            'Organização administrativa brasileira',
        ],
        [
            'CÂMARA: Organização administrativa — descentralização?',
            'Transferência a outra pessoa (autarquia/fundação/estatal) ou delegação (concessão/permissão).',
            'Organização administrativa brasileira',
        ],
        [
            'CÂMARA: Órgão x entidade?',
            'Órgão não tem personalidade jurídica própria; entidade (admin indireta) tem personalidade.',
            'Organização administrativa brasileira',
        ],
        [
            'CÂMARA: Autarquia (noção)?',
            'Pessoa jurídica de direito público criada por lei para atividade típica do Estado.',
            'Organização administrativa brasileira',
        ],

        [
            'CÂMARA: Princípios — eficiência e efetividade?',
            'Eficiência é usar bem recursos; efetividade é impacto do serviço/política no cidadão.',
            'Princípios da administração pública',
        ],
        [
            'CÂMARA: Princípios — transparência?',
            'Divulgar informações e prestar contas; fortalece controle e confiança pública.',
            'Princípios da administração pública',
        ],
        [
            'CÂMARA: Princípios — integridade?',
            'Prevenir fraudes e desvios por controles, cultura ética e responsabilização.',
            'Princípios da administração pública',
        ],
        [
            'CÂMARA: Princípios — foco no usuário?',
            'Serviço público deve ser centrado no cidadão, com clareza, acessibilidade e qualidade.',
            'Princípios da administração pública',
        ],

        [
            'CÂMARA: Descentralização x desconcentração — erro comum?',
            'Chamar “criação de setor” de descentralização (é desconcentração).',
            'Descentralização e desconcentração',
        ],
        [
            'CÂMARA: Descentralização — por serviço?',
            'Delegação a particular (concessão/permissão) para executar serviço público, com controle estatal.',
            'Descentralização e desconcentração',
        ],
        [
            'CÂMARA: Desconcentração — por que existe?',
            'Distribuir competências internamente para especializar e melhorar eficiência.',
            'Descentralização e desconcentração',
        ],
        [
            'CÂMARA: Descentralização — por entidade?',
            'Criação de entidades da administração indireta (autarquia etc.) para executar funções específicas.',
            'Descentralização e desconcentração',
        ],

        [
            'CÂMARA: Direta x indireta — pegadinha?',
            'Confundir órgão (direta) com entidade (indireta). Ex.: ministério é órgão; autarquia é entidade.',
            'Administração direta e indireta',
        ],
        [
            'CÂMARA: EP x SEM (noção)?',
            'Ambas de direito privado; EP capital 100% público; SEM capital misto com controle estatal.',
            'Administração direta e indireta',
        ],
        [
            'CÂMARA: Fundação pública (noção)?',
            'Pode ser de direito público ou privado, conforme lei; atua em áreas sociais/científicas.',
            'Administração direta e indireta',
        ],
        [
            'CÂMARA: Administração indireta — por que cai?',
            'Por causa de regimes jurídicos, controle e responsabilidade das entidades.',
            'Administração direta e indireta',
        ],

        [
            'CÂMARA: Planejamento — indicador x meta?',
            'Indicador mede; meta define o valor-alvo e o prazo.',
            'Planejamento estratégico (PPA, LDO, LOA) e alinhamento institucional',
        ],
        [
            'CÂMARA: Planejamento — PPA/LDO/LOA (ordem)?',
            'PPA planeja, LDO orienta, LOA executa.',
            'Planejamento estratégico (PPA, LDO, LOA) e alinhamento institucional',
        ],
        [
            'CÂMARA: Planejamento — alinhamento institucional?',
            'Projetos e processos devem sustentar objetivos estratégicos e o orçamento.',
            'Planejamento estratégico (PPA, LDO, LOA) e alinhamento institucional',
        ],
        [
            'CÂMARA: Planejamento — armadilha?',
            'Medir só o “fácil” com indicadores ruins distorce prioridades (metas mal definidas).',
            'Planejamento estratégico (PPA, LDO, LOA) e alinhamento institucional',
        ],

        [
            'CÂMARA: Governança — o que envolve?',
            'Direção, monitoramento e incentivos para integridade e resultados.',
            'Governança pública, compliance e gestão de riscos',
        ],
        [
            'CÂMARA: Compliance — noção?',
            'Conformidade com leis/normas e controles para prevenir e detectar irregularidades.',
            'Governança pública, compliance e gestão de riscos',
        ],
        [
            'CÂMARA: Gestão de riscos — etapas?',
            'Identificar, analisar, tratar, monitorar e comunicar riscos.',
            'Governança pública, compliance e gestão de riscos',
        ],
        [
            'CÂMARA: Governança — por que cai em concurso?',
            'Porque conecta controles internos, transparência e combate a fraudes/ineficiência.',
            'Governança pública, compliance e gestão de riscos',
        ],

        [
            'CÂMARA: Competências (CHA) — o que é?',
            'Conhecimentos, habilidades e atitudes necessários ao desempenho.',
            'Gestão por competências, desempenho e avaliação de resultados',
        ],
        [
            'CÂMARA: Avaliação de desempenho — finalidade?',
            'Aprimorar resultados, orientar capacitação e reconhecer necessidades de melhoria.',
            'Gestão por competências, desempenho e avaliação de resultados',
        ],
        [
            'CÂMARA: Indicadores de desempenho — cuidado?',
            'Indicadores mal definidos induzem “jogo de metas”; precisam ser relevantes e auditáveis.',
            'Gestão por competências, desempenho e avaliação de resultados',
        ],
        [
            'CÂMARA: Gestão por competências — aplicação prática?',
            'Mapear competências do cargo, avaliar gaps e planejar capacitações/movimentações.',
            'Gestão por competências, desempenho e avaliação de resultados',
        ],
    ]),
};
