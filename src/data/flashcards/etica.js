import { makeCards } from './utils.js';

export const etica = {
    name: 'Ética no Serviço Público',
    icon: '🧭',
    exams: ['policia-penal-mg', 'detran-df', 'camara-deputados'],
    cards: makeCards('etica', [
        ['Ética x moral?', 'Ética: reflexão/teoria sobre valores e condutas. Moral: conjunto de normas/valores praticados por um grupo.'],
        ['Probidade administrativa (ideia central)?', 'Atuação íntegra e honesta; vedação ao enriquecimento ilícito e ao uso do cargo para vantagem.'],
        ['Princípios ligados à ética na Administração?', 'Legalidade, impessoalidade, moralidade, publicidade e eficiência (LIMPE).'],
        ['Moralidade administrativa significa o quê?', 'Conformidade não só com a lei, mas com padrões éticos de boa-fé, decoro e lealdade institucional.'],
        ['Impessoalidade: pegadinha comum?', 'Não é “tratar todos igualmente sempre”; é vedar promoção pessoal e exigir atuação voltada ao interesse público.'],
        ['Finalidade pública do ato?', 'Todo ato deve buscar o interesse público previsto na norma; desvio de finalidade = vício.'],
        ['Conflito de interesses (conceito)?', 'Situação em que interesse privado pode influenciar ou aparentar influenciar decisão pública.'],
        ['Conflito de interesses pode existir sem corrupção?', 'Sim. O risco/aparência já exige gestão (declaração, impedimento, afastamento de decisões).'],
        ['Transparência: regra ou exceção?', 'Regra. Sigilo é exceção e deve ser motivado e previsto em lei.'],
        ['Accountability (responsabilização): ideia?', 'Dever de prestar contas e sofrer consequências por atos/omissões (controle interno/externo/social).'],
        ['Integridade/compliance no setor público?', 'Estruturas e práticas para prevenir, detectar e remediar fraudes, corrupção e desvios.'],
        ['Assédio moral: núcleo?', 'Condutas repetitivas que humilham/isolam/desqualificam; afeta dignidade e ambiente de trabalho.'],
        ['Assédio sexual: núcleo?', 'Constrangimento com intuito de obter vantagem/favorecimento sexual, prevalecendo-se da hierarquia.'],
        ['Sigilo funcional: quando é devido?', 'Quando necessário ao interesse público/lei; nunca para encobrir ilegalidade.'],
        ['Uso de bens públicos (regra)?', 'Somente para fins públicos/serviço; uso particular = desvio e pode gerar responsabilização.'],
        ['Nepotismo (noção)?', 'Favorecimento de parentes em nomeações/contratações, violando impessoalidade/moralidade.'],
        ['Dever de urbanidade?', 'Tratar público e colegas com respeito, sem discriminação, com cortesia e profissionalismo.'],
        ['Dever de eficiência (prova)?', 'Entrega com qualidade, tempestividade, economicidade e foco em resultados do serviço.'],
        ['Imparcialidade prática?', 'Decidir com base em critérios objetivos; declarar impedimento/suspeição quando houver vínculo relevante.'],
        ['Responsabilização do agente público: esferas?', 'Administrativa, civil e penal (podem coexistir).'],

        // CÂMARA (Téc. Legislativo) - cards por tópico do edital (1+ por tópico)
        [
            'CÂMARA: Código de Ética do Servidor Federal (Decreto 1.171/1994) — núcleo?',
            'Regras de conduta, vedação de favorecimento e dever de zelar pela dignidade do serviço público (base cobrada).',
            'Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal',
        ],
        [
            'CÂMARA: Princípios éticos e morais — como aparece em prova?',
            'Conectar ética pública a LIMPE, interesse público e probidade; evitar “jeitinho” e favorecimento.',
            'Princípios éticos e morais no serviço público',
        ],
        [
            'CÂMARA: Conduta do servidor — regra de ouro?',
            'Urbanidade, impessoalidade, eficiência, lealdade e prestação de contas; registro formal quando necessário.',
            'Conduta do servidor público',
        ],
        [
            'CÂMARA: Conflito de interesses e nepotismo — quando ocorre?',
            'Quando interesse privado pode influenciar/parecer influenciar decisão; nepotismo viola impessoalidade/moralidade.',
            'Conflito de interesses, nepotismo e impedimentos',
        ],
        [
            'CÂMARA: Uso de bens públicos e sigilo — cuidado?',
            'Uso só para fins institucionais; sigilo é exceção e não pode encobrir ilegalidade; atenção a redes sociais.',
            'Uso de bens públicos, sigilo e redes sociais institucionais',
        ],
        [
            'CÂMARA: Transparência e comissões de ética — por que cai?',
            'Transparência é regra; comissões orientam e apuram condutas, fortalecendo integridade e accountability.',
            'Dever de transparência e participação em comissões de ética',
        ],
        [
            'CÂMARA: Código de Ética (servidor federal) — pegadinha?',
            'Banca confunde “ética” com “legalidade”: mesmo ato legal pode ser antiético se houver favorecimento/desvio do interesse público.',
            'Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal',
        ],
        [
            'CÂMARA: Conflito de interesses — o que fazer na dúvida?',
            'Declarar, abster-se de decidir e registrar; buscar orientação da chefia/comissão de ética.',
            'Conflito de interesses, nepotismo e impedimentos',
        ],
        [
            'CÂMARA: Redes sociais institucionais — risco típico?',
            'Vazamento de dados/processos, quebra de decoro e aparente parcialidade; mantenha postura profissional e sigilo quando devido.',
            'Uso de bens públicos, sigilo e redes sociais institucionais',
        ],

        // CÂMARA (Téc. Legislativo) - expansão (mín. ~5 cards por tópico)
        [
            'CÂMARA: Código de Ética (Decreto 1.171) — finalidade?',
            'Orientar conduta ética e reforçar valores do serviço público (interesse público, decoro, probidade).',
            'Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal',
        ],
        [
            'CÂMARA: Código de Ética — “decoro” significa?',
            'Comportamento compatível com a dignidade do cargo; evita atitudes que comprometam confiança institucional.',
            'Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal',
        ],
        [
            'CÂMARA: Código de Ética — conflito com ordem superior?',
            'Cumprir ordens legais; ordens manifestamente ilegais não devem ser cumpridas (buscar orientação formal).',
            'Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal',
        ],
        [
            'CÂMARA: Código de Ética — pegadinha de prova?',
            'Não confundir ética com “opinião pessoal”: ética pública se orienta por interesse público e padrões institucionais.',
            'Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal',
        ],

        [
            'CÂMARA: Princípios éticos — impessoalidade na prática?',
            'Evitar favorecimento, promoção pessoal e tratamento desigual; decidir por critérios objetivos.',
            'Princípios éticos e morais no serviço público',
        ],
        [
            'CÂMARA: Princípios éticos — moralidade administrativa?',
            'Ato deve ser honesto e de boa-fé; não basta “estar na lei” se há desvio do interesse público.',
            'Princípios éticos e morais no serviço público',
        ],
        [
            'CÂMARA: Princípios éticos — integridade?',
            'Agir de forma coerente, transparente e responsável; prevenir e reportar riscos de fraude/corrupção.',
            'Princípios éticos e morais no serviço público',
        ],
        [
            'CÂMARA: Princípios éticos — accountability?',
            'Prestar contas e aceitar controles e consequências por atos/omissões.',
            'Princípios éticos e morais no serviço público',
        ],

        [
            'CÂMARA: Conduta do servidor — atendimento ao público?',
            'Clareza, cortesia, registro quando necessário e igualdade de tratamento; sem promessas fora do procedimento.',
            'Conduta do servidor público',
        ],
        [
            'CÂMARA: Conduta — “jeitinho” é eficiente?',
            'Em prova, não: quebra isonomia, aumenta risco e pode ser ilegal/antiético.',
            'Conduta do servidor público',
        ],
        [
            'CÂMARA: Conduta — uso de informações internas?',
            'Apenas para fins institucionais e com necessidade; evitar vazamento e uso para vantagem.',
            'Conduta do servidor público',
        ],
        [
            'CÂMARA: Conduta — erro honesto x dolo?',
            'Erro é falha sem intenção; dolo é intenção de violar dever. Ambos podem gerar consequências, mas gravidade difere.',
            'Conduta do servidor público',
        ],

        [
            'CÂMARA: Conflito de interesses — existe sem corrupção?',
            'Sim. A mera possibilidade/ aparência já exige gestão (impedimento/declaração).',
            'Conflito de interesses, nepotismo e impedimentos',
        ],
        [
            'CÂMARA: Nepotismo — por que é vedado?',
            'Viola impessoalidade e moralidade; gera favorecimento e compromete confiança pública.',
            'Conflito de interesses, nepotismo e impedimentos',
        ],
        [
            'CÂMARA: Impedimento/suspeição (noção)?',
            'Situações em que o agente deve se afastar de decisão por vínculo relevante, para preservar imparcialidade.',
            'Conflito de interesses, nepotismo e impedimentos',
        ],
        [
            'CÂMARA: “Presentes” e vantagens — cautela?',
            'Evitar aceitar benefícios que possam influenciar/parecer influenciar decisões; seguir normativos do órgão.',
            'Conflito de interesses, nepotismo e impedimentos',
        ],

        [
            'CÂMARA: Uso de bens públicos — exemplo de desvio?',
            'Usar carro/ impressora/ sistemas para fins particulares; em prova, é vedado e pode gerar sanção.',
            'Uso de bens públicos, sigilo e redes sociais institucionais',
        ],
        [
            'CÂMARA: Sigilo — quando existe?',
            'Quando previsto e necessário; sigilo não serve para encobrir ilegalidade.',
            'Uso de bens públicos, sigilo e redes sociais institucionais',
        ],
        [
            'CÂMARA: Redes sociais — regra segura?',
            'Não divulgar dados/processos internos; evitar posicionamentos que comprometam decoro e imparcialidade.',
            'Uso de bens públicos, sigilo e redes sociais institucionais',
        ],
        [
            'CÂMARA: Segurança da informação e ética — conexão?',
            'Vazamentos e compartilhamento indevido violam dever de cuidado e podem gerar responsabilização.',
            'Uso de bens públicos, sigilo e redes sociais institucionais',
        ],

        [
            'CÂMARA: Transparência — ativa x passiva?',
            'Ativa: divulgação espontânea. Passiva: atendimento a pedidos (LAI), respeitando sigilos legais.',
            'Dever de transparência e participação em comissões de ética',
        ],
        [
            'CÂMARA: Comissão de ética — papel?',
            'Orientar, recomendar e apurar condutas; fortalece integridade e cultura ética.',
            'Dever de transparência e participação em comissões de ética',
        ],
        [
            'CÂMARA: Transparência e dados pessoais (LGPD) — cuidado?',
            'Transparência é regra, mas deve respeitar proteção de dados; aplicar minimização e anonimização quando cabível.',
            'Dever de transparência e participação em comissões de ética',
        ],
        [
            'CÂMARA: “Denunciar” irregularidade — por quê cai?',
            'Controle interno/social é parte da integridade; use canais formais e registro de evidências.',
            'Dever de transparência e participação em comissões de ética',
        ],

        // DETRAN-DF - cards por tópico do edital (1+ por tópico)
        ['DETRAN: Código de Ética — ideia central?', 'Conduta íntegra, respeito ao cidadão, vedação de favorecimento e compromisso com o interesse público.', 'Código de Ética do servidor público'],
        ['DETRAN: Conflitos de interesses e deveres funcionais — como cai?', 'Declarar e se afastar de decisões quando houver interesse privado; cumprir deveres (zelo, urbanidade, legalidade).', 'Conflitos de interesses, nepotismo e deveres funcionais'],
        ['DETRAN: Transparência e atendimento ao cidadão — padrão de prova?', 'Transparência é regra; atendimento deve ser impessoal, claro e com registro, sem prometer fora do procedimento.', 'Transparência, atendimento ao cidadão e prestação de contas'],
        ['DETRAN: Integridade e combate à corrupção — noção?', 'Controles, canais de denúncia, gestão de riscos e responsabilização; prevenção é tão cobrada quanto punição.', 'Programas de integridade e combate à corrupção no GDF'],
        ['DETRAN: Sigilo e responsabilidade disciplinar — cuidado?', 'Sigilo é exceção legal; vazamento e uso indevido de informação podem gerar responsabilização administrativa/civil/penal.', 'Responsabilidade disciplinar e dever de sigilo'],
    ]),
};
