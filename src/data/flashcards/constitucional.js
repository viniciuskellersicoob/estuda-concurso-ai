import { makeCards } from './utils.js';

export const constitucional = {
    name: 'Direito Constitucional',
    icon: '📜',
    exams: ['pmdf', 'policia-penal-mg', 'camara-deputados'],
    cards: makeCards('const', [
        ['Poder constituinte originário: características?', 'Inicial, autônomo, ilimitado juridicamente e incondicionado; cria nova Constituição.'],
        ['Poder constituinte derivado: limites?', 'Subordinado à CF; respeita limites formais e materiais (cláusulas pétreas).'],
        ['Cláusulas pétreas (ideia)?', 'Núcleo que não pode ser abolido por emenda (direitos e garantias, federação etc.).'],
        ['Direitos fundamentais: rol é fechado?', 'Não. Há direitos expressos e implícitos decorrentes do regime e princípios.'],
        ['HC (habeas corpus): protege o quê?', 'Liberdade de locomoção contra ilegalidade/abuso de poder.'],
        ['MS (mandado de segurança): quando cabe?', 'Direito líquido e certo, com prova pré-constituída, sem HC/HD.'],
        ['MI (mandado de injunção): para quê?', 'Suprir ausência de norma regulamentadora que inviabilize exercício de direito constitucional.'],
        ['HD (habeas data): para quê?', 'Acessar/retificar dados pessoais em banco de dados governamental ou de caráter público.'],
        ['Ação popular: objeto?', 'Anular ato lesivo ao patrimônio público/moralidade/meio ambiente/patrimônio histórico-cultural.'],
        ['Voto: obrigatório para quem?', 'Em regra 18–70. Facultativo para 16–17, analfabetos e maiores de 70.'],
        ['Organização do Estado: entes?', 'União, Estados, DF e Municípios (autonomia nos limites da CF).'],
        ['Competência legislativa concorrente: regra?', 'União normas gerais; Estados suplementam; ausência de norma geral permite competência plena estadual.'],
        ['Administração Pública: princípios?', 'Legalidade, impessoalidade, moralidade, publicidade e eficiência (LIMPE).'],
        ['Concurso público: regra?', 'Regra para ingresso em cargo/emprego público (exceções constitucionais).'],
        ['Acumulação de cargos: quando pode?', 'Dois de professor; professor + técnico/científico; dois de saúde (compatibilidade de horários).'],
        ['Responsabilidade civil do Estado: regra?', 'Objetiva por danos causados por agentes; direito de regresso em caso de dolo/culpa.'],
        ['Controle de constitucionalidade: difuso?', 'Qualquer juiz/tribunal no caso concreto (em regra efeitos inter partes).'],
        ['Controle concentrado?', 'Ações em tese (ex.: ADI/ADC/ADPF) com efeitos amplos e vinculantes (em geral).'],
        ['Separação de poderes: é absoluta?', 'Não. Há freios e contrapesos e funções típicas/atípicas.'],
        ['Processo legislativo: espécies normativas?', 'Emendas, LC, LO, leis delegadas, MPs, decretos legislativos e resoluções.'],
        ['Medida provisória: requisito?', 'Relevância e urgência; tem força de lei e depende de conversão.'],
        ['Inviolabilidade de domicílio: exceções?', 'Flagrante, desastre, prestar socorro ou, de dia, por ordem judicial.'],
        ['Direito de reunião: requisitos?', 'Pacífica, sem armas, em locais abertos ao público, com prévio aviso (não autorização).'],
        ['Publicidade x sigilo (regra)?', 'Publicidade é regra; sigilo é exceção legal e motivada.'],
        ['Segurança pública (art. 144): ideia?', 'Dever do Estado, direito e responsabilidade de todos; exercida por órgãos previstos.'],
        ['Direito de petição?', 'Direito de dirigir-se aos poderes públicos em defesa de direitos/contra ilegalidade/abuso.'],
        ['Direito a certidões?', 'Obter certidões para defesa de direitos e esclarecimento de situações de interesse pessoal.'],
        ['Legalidade: particular x Administração?', 'Particular pode fazer o que a lei não proíbe; Administração só o que a lei autoriza.'],
        ['Liberdade de expressão: limites?', 'Vedação ao anonimato e responsabilização posterior por abusos, protegidos outros direitos.'],
        ['Inviolabilidade de correspondência/comunicações?', 'Regra é proteção; exceções exigem requisitos legais e controle judicial (tema recorrente).'],
        ['Controle concentrado: ADPF (noção)?', 'Usada para evitar/reparar lesão a preceito fundamental quando não houver outro meio eficaz.'],
        ['Estado de defesa x estado de sítio?', 'Medidas excepcionais em crises; requisitos, prazos e controles distintos (tema clássico).'],
        ['Intervenção: caráter?', 'Excepcional, para preservar a Constituição e princípios sensíveis, com hipóteses taxativas.'],

        // PMDF - cards âncora por tópico do edital (1+ por tópico)
        [
            'PMDF: Princípios fundamentais (CF) — o que revisar?',
            'Fundamentos (soberania, cidadania, dignidade, valores do trabalho, pluralismo) e objetivos fundamentais (art. 3º).',
            'Constituição: princípios fundamentais',
        ],
        [
            'PMDF: Direitos e garantias fundamentais — foco de prova?',
            'Direitos do art. 5º, remédios constitucionais (HC, MS, MI, HD, ação popular) e limitações (anonimato, domicílio).',
            'Direitos e garantias fundamentais',
        ],
        [
            'PMDF: Organização do Estado — estrutura?',
            'União, Estados, DF e Municípios; competências e autonomia nos limites da CF.',
            'Organização do Estado',
        ],
        [
            'PMDF: Administração Pública (CF) — pontos-chave?',
            'Princípios LIMPE, concurso, acumulação constitucional, servidores e responsabilidade do Estado.',
            'Administração Pública (princípios, servidores, regras constitucionais)',
        ],
        [
            'PMDF: Segurança pública (art. 144) — ideia central?',
            'Dever do Estado e responsabilidade de todos; órgãos previstos e funções (polícia ostensiva, investigação, penal etc.).',
            'Segurança pública (art. 144) e temas correlatos',
        ],
        [
            'PMDF: Processo legislativo (arts. 59–69) — como cai?',
            'Espécies normativas (EC, LC, LO, MP etc.) e noções de tramitação, quóruns e sanção/veto.',
            'Processo legislativo constitucional (art. 59 a 69)',
        ],
        [
            'PMDF: Controle de constitucionalidade — mapa?',
            'Difuso (caso concreto) x concentrado (ADI/ADC/ADPF); efeitos e legitimidade (noções).',
            'Controle de constitucionalidade: difuso, concentrado e ADPF',
        ],
        [
            'PMDF: Estado de defesa/sítio e intervenção — cuidado?',
            'Medidas excepcionais com requisitos, prazos e controles; hipóteses são taxativas e cobram “quando cabe”.',
            'Defesa do Estado (estado de defesa, estado de sítio e intervenções federais)',
        ],

        // CÂMARA (Téc. Legislativo) - cards por tópico do edital (1+ por tópico)
        ['CÂMARA: Princípios fundamentais — revisão?', 'Fundamentos e objetivos da República; princípios nas relações internacionais (noções).', 'Princípios fundamentais'],
        ['CÂMARA: Direitos e garantias fundamentais — mapa?', 'Art. 5º + remédios constitucionais + limites (anonimato, domicílio).', 'Direitos e garantias fundamentais'],
        [
            'CÂMARA: Organização do Estado — competência (noção)?',
            'Entes federativos e repartição de competências; União normas gerais, Estados suplementam (concorrente).',
            'Organização do Estado (União, Estados, Municípios, DF)',
        ],
        [
            'CÂMARA: Administração Pública na CF — foco?',
            'LIMPE, concurso, acumulação, servidores e responsabilidade civil do Estado.',
            'Administração Pública (disposições gerais e servidores)',
        ],
        [
            'CÂMARA: Organização dos Poderes — o que mais cai?',
            'Separação e freios/contrapesos; competências do Legislativo (inclui fiscalização) e processo legislativo.',
            'Organização dos Poderes (Legislativo, Executivo, Judiciário)',
        ],
        [
            'CÂMARA: Finanças públicas e orçamentos (CF) — noção?',
            'Regras constitucionais sobre orçamento, princípios e limites; conexão com fiscalização e LRF (noções).',
            'Finanças públicas e orçamentos (trecho constitucional)',
        ],
        [
            'CÂMARA: Processo legislativo e orçamentário — instrumentos?',
            'PPA, LDO e LOA; espécies normativas e tramitação básica (sanção/veto, quóruns), conforme CF.',
            'Processo legislativo e orçamentário (PPA, LDO, LOA)',
        ],
        [
            'CÂMARA: Fiscalização (arts. 70–75) — essência?',
            'Fiscalização contábil/financeira/orçamentária/operacional/patrimonial pelo Congresso com auxílio do TCU.',
            'Fiscalização contábil, financeira e orçamentária (art. 70 a 75)',
        ],
        [
            'CÂMARA: Defesa do Estado e instituições democráticas — como cai?',
            'Intervenção, estado de defesa e estado de sítio: hipóteses, requisitos e controles (noções).',
            'Defesa do Estado e das instituições democráticas (arts. 34 a 36 e 136 a 141)',
        ],

        // CÂMARA (Téc. Legislativo) - expansão (mín. ~5 cards por tópico)
        [
            'CÂMARA: Princípios fundamentais — fundamentos da República (exemplos)?',
            'Soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e pluralismo político.',
            'Princípios fundamentais',
        ],
        [
            'CÂMARA: Princípios fundamentais — objetivos (art. 3º) (exemplos)?',
            'Sociedade livre/justa/solidária; erradicar pobreza; reduzir desigualdades; promover bem de todos.',
            'Princípios fundamentais',
        ],
        [
            'CÂMARA: Princípios fundamentais — forma de Estado e governo?',
            'Federação (Estado) e República (governo); democracia representativa com separação de poderes.',
            'Princípios fundamentais',
        ],
        [
            'CÂMARA: Princípios fundamentais — pegadinha?',
            'Confundir fundamentos (art. 1º) com objetivos (art. 3º) e princípios internacionais (art. 4º).',
            'Princípios fundamentais',
        ],

        [
            'CÂMARA: Direitos fundamentais — rol do art. 5º é taxativo?',
            'Não. Há direitos expressos e implícitos; e tratados podem reforçar proteção.',
            'Direitos e garantias fundamentais',
        ],
        [
            'CÂMARA: Direitos — inviolabilidade de domicílio (exceções)?',
            'Flagrante delito, desastre, prestar socorro ou (de dia) por determinação judicial.',
            'Direitos e garantias fundamentais',
        ],
        [
            'CÂMARA: Direitos — reunião (requisitos)?',
            'Pacífica, sem armas, em locais abertos ao público, com prévio aviso (não autorização).',
            'Direitos e garantias fundamentais',
        ],
        [
            'CÂMARA: Remédios constitucionais (mapa)?',
            'HC (locomoção), MS (direito líquido e certo), MI (falta de norma), HD (dados pessoais), ação popular.',
            'Direitos e garantias fundamentais',
        ],

        [
            'CÂMARA: Organização do Estado — competências (noção)?',
            'União (interesse nacional), Estados (regional), Municípios (local); competências comuns e concorrentes.',
            'Organização do Estado (União, Estados, Municípios, DF)',
        ],
        [
            'CÂMARA: Competência concorrente — regra de prova?',
            'União edita normas gerais; Estados suplementam; ausência de norma geral permite competência plena estadual (até a União legislar).',
            'Organização do Estado (União, Estados, Municípios, DF)',
        ],
        [
            'CÂMARA: Intervenção federal — natureza?',
            'Medida excepcional com hipóteses taxativas para preservar a ordem constitucional (tema clássico).',
            'Organização do Estado (União, Estados, Municípios, DF)',
        ],
        [
            'CÂMARA: DF — particularidade?',
            'Acumula competências de Estado e Município em vários temas, conforme CF.',
            'Organização do Estado (União, Estados, Municípios, DF)',
        ],

        [
            'CÂMARA: Administração Pública — LIMPE?',
            'Legalidade, impessoalidade, moralidade, publicidade e eficiência.',
            'Administração Pública (disposições gerais e servidores)',
        ],
        [
            'CÂMARA: Legalidade — particular x Administração?',
            'Particular: pode o que não é proibido. Administração: só o que a lei autoriza.',
            'Administração Pública (disposições gerais e servidores)',
        ],
        [
            'CÂMARA: Concurso público — regra?',
            'Regra para provimento de cargo/emprego; exceções são constitucionais e específicas.',
            'Administração Pública (disposições gerais e servidores)',
        ],
        [
            'CÂMARA: Responsabilidade civil do Estado (CF) — ideia?',
            'Objetiva por danos causados por agentes; regressiva contra o agente com dolo/culpa.',
            'Administração Pública (disposições gerais e servidores)',
        ],

        [
            'CÂMARA: Organização dos Poderes — função típica do Legislativo?',
            'Legislar e fiscalizar; exerce controle político e financeiro (art. 70+).',
            'Organização dos Poderes (Legislativo, Executivo, Judiciário)',
        ],
        [
            'CÂMARA: Separação de poderes é rígida?',
            'Não. Há freios e contrapesos; poderes exercem funções típicas e atípicas.',
            'Organização dos Poderes (Legislativo, Executivo, Judiciário)',
        ],
        [
            'CÂMARA: Processo legislativo — espécies normativas?',
            'EC, LC, LO, leis delegadas, MPs, decretos legislativos e resoluções.',
            'Organização dos Poderes (Legislativo, Executivo, Judiciário)',
        ],
        [
            'CÂMARA: Poder Judiciário — ponto geral?',
            'Jurisdição e controle; garantias da magistratura e competências são temas clássicos (noções).',
            'Organização dos Poderes (Legislativo, Executivo, Judiciário)',
        ],

        [
            'CÂMARA: Finanças públicas (CF) — por que cai?',
            'Conecta orçamento, responsabilidade e fiscalização; base para cobrança de AFO e controle pelo Legislativo/TCU.',
            'Finanças públicas e orçamentos (trecho constitucional)',
        ],
        [
            'CÂMARA: Orçamento na CF — instrumentos?',
            'PPA, LDO e LOA e regras constitucionais de iniciativa e tramitação (noções).',
            'Finanças públicas e orçamentos (trecho constitucional)',
        ],
        [
            'CÂMARA: Regra de ouro (noção)?',
            'Ideia de limitar endividamento para custeio; tema pode aparecer como conceito em finanças públicas.',
            'Finanças públicas e orçamentos (trecho constitucional)',
        ],
        [
            'CÂMARA: Finanças — pegadinha?',
            'Confundir autorização orçamentária (dotação) com dinheiro em caixa (fluxo financeiro).',
            'Finanças públicas e orçamentos (trecho constitucional)',
        ],

        [
            'CÂMARA: PPA, LDO, LOA — ordem e função?',
            'PPA planeja; LDO orienta e define metas; LOA executa orçamento anual.',
            'Processo legislativo e orçamentário (PPA, LDO, LOA)',
        ],
        [
            'CÂMARA: Sanção x veto — como cai?',
            'Sanção aprova; veto total/parcial impede, podendo ser analisado/derrubado conforme regras.',
            'Processo legislativo e orçamentário (PPA, LDO, LOA)',
        ],
        [
            'CÂMARA: Quóruns (noção)?',
            'Maioria simples, absoluta e qualificada; depende do tipo de matéria.',
            'Processo legislativo e orçamentário (PPA, LDO, LOA)',
        ],
        [
            'CÂMARA: Processo orçamentário — pegadinha?',
            'Confundir iniciativa/competência e prazos; sempre ver se a pergunta é CF ou RICD.',
            'Processo legislativo e orçamentário (PPA, LDO, LOA)',
        ],

        [
            'CÂMARA: Fiscalização (art. 70) — objetos?',
            'Contábil, financeira, orçamentária, operacional e patrimonial.',
            'Fiscalização contábil, financeira e orçamentária (art. 70 a 75)',
        ],
        [
            'CÂMARA: Fiscalização — quem faz?',
            'Congresso Nacional com auxílio do TCU; controle interno também atua no Executivo/órgãos.',
            'Fiscalização contábil, financeira e orçamentária (art. 70 a 75)',
        ],
        [
            'CÂMARA: TCU — papel (noção)?',
            'Auxiliar o Legislativo no controle externo, emitindo pareceres e julgando contas conforme competências.',
            'Fiscalização contábil, financeira e orçamentária (art. 70 a 75)',
        ],
        [
            'CÂMARA: Controle externo x interno?',
            'Externo é do Legislativo/TCU; interno é do próprio órgão/Executivo para prevenir e corrigir falhas.',
            'Fiscalização contábil, financeira e orçamentária (art. 70 a 75)',
        ],

        [
            'CÂMARA: Intervenção (arts. 34–36) — quando lembrar?',
            'Hipóteses taxativas; é medida excepcional para preservar ordem constitucional e princípios sensíveis.',
            'Defesa do Estado e das instituições democráticas (arts. 34 a 36 e 136 a 141)',
        ],
        [
            'CÂMARA: Estado de defesa — objetivo?',
            'Preservar/restabelecer ordem pública ou paz social em áreas restritas, com prazo e controle.',
            'Defesa do Estado e das instituições democráticas (arts. 34 a 36 e 136 a 141)',
        ],
        [
            'CÂMARA: Estado de sítio — quando (noção)?',
            'Crise grave, comoção ou guerra; medidas mais severas e controle legislativo (tema clássico).',
            'Defesa do Estado e das instituições democráticas (arts. 34 a 36 e 136 a 141)',
        ],
        [
            'CÂMARA: Defesa do Estado — pegadinha?',
            'Banca confunde hipótese, autoridade competente e prazo; foque em “excepcionalidade” e “taxatividade”.',
            'Defesa do Estado e das instituições democráticas (arts. 34 a 36 e 136 a 141)',
        ],
    ]),
};
