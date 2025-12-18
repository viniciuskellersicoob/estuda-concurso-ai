import { makeCards } from './utils.js';

export const portugues = {
    name: 'Língua Portuguesa',
    icon: '📖',
    exams: ['pmdf', 'policia-penal-mg', 'detran-df', 'camara-deputados'],
    cards: makeCards('port', [
        ['Tema x ideia central?', 'Tema: assunto geral. Ideia central: tese/afirmação principal defendida no texto.'],
        ['Inferência (como cai)?', 'Conclusão lógica a partir de pistas do texto; não pode contrariar nem inventar informação.'],
        ['Coesão x coerência?', 'Coesão: ligação linguística. Coerência: sentido global e lógica do texto.'],
        ['Anáfora?', 'Elemento que retoma termo anterior: “Maria chegou. Ela…”'],
        ['Catáfora?', 'Elemento que antecipa termo posterior: “Isto é certo: você passará.”'],
        ['Denotação x conotação?', 'Denotação: literal. Conotação: figurado/contextual.'],
        ['Conectivo de causa?', 'porque, já que, uma vez que, visto que.'],
        ['Conectivo de consequência?', 'logo, portanto, assim, por conseguinte.'],
        ['Conectivo de oposição?', 'mas, porém, contudo, todavia, entretanto.'],
        ['Conectivo de concessão?', 'embora, ainda que, apesar de, mesmo que.'],
        ['“Se” apassivador: exemplo?', '“Vendem-se casas” (verbo concorda com o sujeito paciente).'],
        ['“Se” indeterminador: exemplo?', '“Precisa-se de ajuda” (verbo no singular).'],
        ['“Haver” (existir) vai ao plural?', 'Não: “Havia pessoas” (impessoal).'],
        ['“Fazer” (tempo/clima) vai ao plural?', 'Não: “Faz dois anos”; “Faz calor” (impessoal).'],
        ['Crase: condição básica?', 'Preposição “a” + artigo “a/as” (ou “aquele(s)/aquela(s)/aquilo”).'],
        ['Quando NÃO há crase (regra de ouro)?', 'Antes de masculino, verbo, pronome pessoal, artigo indefinido, nomes de cidade sem artigo.'],
        ['Vírgula entre sujeito e verbo?', 'Em regra, não.'],
        ['Oração adjetiva restritiva x explicativa?', 'Restritiva (sem vírgula) limita; explicativa (com vírgula) apenas comenta.'],
        ['“Porque/por que/porquê/por quê”?', 'Porque (explica). Por que (pergunta/relativo). Porquê (substantivo). Por quê (fim de frase).'],
        ['“A” x “há” (tempo)?', 'Há = tempo decorrido (“há 2 anos”); a = tempo futuro/distância (“daqui a 2 anos”).'],
        ['Tipos textuais (macro)?', 'Narração, descrição, dissertação/exposição e injunção.'],
        ['Texto dissertativo-argumentativo: núcleo?', 'Tese + argumentos + conclusão, com encadeamento lógico.'],
        ['Ambiguidade: como cai?', 'Quando termo/pronome pode retomar mais de um referente; resolve-se com reescrita clara.'],
        ['Coesão referencial: como ocorre?', 'Por pronomes, elipses, repetição controlada, sinônimos e termos gerais.'],
        ['Coesão sequencial: como ocorre?', 'Por conectivos e encadeamento lógico entre orações/períodos.'],
        ['Intertextualidade?', 'Diálogo entre textos (citação, alusão, paródia, referência).'],
        ['Paráfrase x paródia?', 'Paráfrase mantém sentido; paródia recria com crítica/humor, alterando sentido.'],
        ['Denotação e conotação em prova?', 'Banca costuma pedir “sentido literal” x “sentido figurado” no contexto.'],
        ['Concordância com “a maioria de” (regra)?', 'Pode concordar com “maioria” (singular) ou com o termo plural, conforme ênfase.'],
        ['Sujeito composto antes do verbo?', 'Verbo no plural: “João e Maria chegaram”.'],
        ['Sujeito composto após o verbo?', 'Pode ser plural ou singular (concordância atrativa): “Chegaram/Chegou João e Maria”.'],
        ['Porcentagem: concordância?', 'Pode concordar com o número ou com o substantivo: “1% faltou/faltaram”.'],
        ['Regência de “assistir” (ver)?', 'Assistir a (ao/à): “Assisti ao filme”.'],
        ['Regência de “preferir”?', 'Preferir X a Y (sem “mais”): “Prefiro estudar a sair”.'],
        ['Regência de “aspirar” (desejar)?', 'Aspirar a (ao/à): “Aspiro ao cargo”.'],
        ['Regência de “obedecer”?', 'Obedecer a: “Obedeceu às regras”.'],
        ['“Implicar” (acarretar) pede preposição?', 'Em provas, costuma ser VTD (sem “em”): “Isso implica mudança”.'],
        ['Crase em “àquele/àquela/aquilo”?', 'Há crase se o verbo exigir preposição “a”: “Refiro-me àquele caso”.'],
        ['Crase em “à moda de”?', 'Sim: “bife à milanesa” (= à moda de).'],
        ['Crase em horas?', 'Em geral, sim: “às 14h”.'],
        ['Pontuação: vírgula em adjunto adverbial deslocado?', 'É comum: “Ontem, estudei muito”.'],
        ['Pontuação: oração adverbial anteposta?', 'Geralmente usa vírgula: “Se estudar, passará”.'],
        ['Dois-pontos: uso típico?', 'Introduzir explicação, enumeração ou citação/fala.'],
        ['Ponto e vírgula: uso típico?', 'Separar itens complexos/orações longas em enumeração.'],
        ['Colocação pronominal: regra de prova?', 'Próclise com palavras atrativas; ênclise no início de frase; mesóclise no futuro sem atrativo (formal).'],
        ['Palavras atrativas de próclise (exemplos)?', 'Não, nunca, já, quem, que (relativo), advérbios, pronomes indefinidos, conjunções subordinativas.'],
        ['“Meio” x “meia” (concordância)?', 'Meio (advérbio) é invariável: “meio cansada”. Meia (numeral) varia: “meia hora”.'],
        ['“Bastante” varia?', 'Advérbio: invariável (“estudou bastante”). Adjetivo: varia (“bastantes questões”).'],
        ['“Menos” varia?', 'Não: “menos pessoas”, “menos dificuldades”.'],
        ['“Anexo/obrigado” varia?', 'Sim: “seguem anexas”; “obrigada”.'],
        ['Oração subordinada concessiva: marcador?', 'Conjunções como “embora”, “ainda que”, “mesmo que”.'],
        ['Oração subordinada causal: marcador?', 'Conjunções como “porque”, “já que”, “visto que”.'],
        ['Oração subordinada final: marcador?', 'Conjunções como “para que”, “a fim de que”.'],
        ['Variação linguística: como cai?', 'Adequação ao contexto (registro formal/informal) e preconceito linguístico.'],
        ['Funções da linguagem (ponto comum)?', 'Referencial, emotiva, conativa, fática, metalinguística e poética.'],
        ['Parônimos (pegadinha clássica)?', 'Eminente (ilustre) x iminente (prestes); descrição x discrição.'],
        ['“Onde” (uso correto)?', 'Para lugar físico; para ideias/assuntos, prefira “em que”, “no qual”.'],
        ['Paralelismo sintático (como cai)?', 'Manter estruturas equivalentes: “gostar de estudar e de revisar”.'],

        // PMDF (IADES) - cards âncora por tópico do edital (1+ por tópico)
        [
            'PMDF: Compreensão e interpretação de textos — foco?',
            'Identificar tema/ideia central, inferências, finalidade, ponto de vista e relações lógicas com base em pistas textuais.',
            'Compreensão e interpretação de textos',
        ],
        ['PMDF: Tipologia textual — o que mais cai?', 'Narração, descrição, dissertação/exposição e injunção; reconhecer pelo objetivo e marcas linguísticas.', 'Tipologia textual'],
        [
            'PMDF: Significação literal e contextual de vocábulos — como resolver?',
            'Pelo contexto: coocorrências, campos semânticos, ironia, polissemia e valor conotativo/denotativo.',
            'Significação literal e contextual de vocábulos',
        ],
        ['PMDF: Coesão e coerência — diferença prática?', 'Coesão liga (pronomes/conectivos); coerência dá sentido global (lógica/consistência).', 'Coesão e coerência'],
        [
            'PMDF: Sintaxe do período (coordenação e subordinação) — pegadinha?',
            'Identificar oração principal e subordinadas; reconhecer conectivos e classificar orações (causal, concessiva, condicional etc.).',
            'Sintaxe do período (coordenação e subordinação)',
        ],
        ['PMDF: Classes de palavras e emprego — foco?', 'Valor sintático e semântico no contexto (pronome relativo, conjunção, advérbio etc.).', 'Classes de palavras e emprego'],
        [
            'PMDF: Concordância verbal e nominal — onde erra?',
            'Sujeito composto/posposto, “a maioria de”, porcentagens, “é proibido/necessário” e casos especiais.',
            'Concordância verbal e nominal',
        ],
        [
            'PMDF: Regência verbal e nominal — como dominar?',
            'Memorizar regências campeãs (assistir, obedecer, preferir, aspirar, informar) e testar com substituição por pronomes.',
            'Regência verbal e nominal',
        ],
        ['PMDF: Crase — checklist rápido?', 'Se há regência de “a” + termo feminino com artigo; atenção a pronomes e expressões fixas.', 'Crase'],
        [
            'PMDF: Estrutura e formação de palavras — o que cai?',
            'Derivação (prefixal/sufixal/parassintética), composição, radical/afixos e efeitos de sentido.',
            'Estrutura e formação de palavras',
        ],
        ['PMDF: Ortografia oficial — como cobrar?', 'Homófonos e parônimos, grafias oficiais e acentuação; “porque/por quê/porquê/por que”.', 'Ortografia oficial'],
        [
            'PMDF: Pontuação — regra de ouro?',
            'Vírgula não separa sujeito do verbo; isola adjuntos/or. adverbiais deslocadas e apostos; cuidado com restritiva x explicativa.',
            'Pontuação',
        ],
        [
            'PMDF: Redação/reescrita conforme norma-padrão — o que a banca faz?',
            'Pede reescrita mantendo sentido, corrigindo regência/crase/pontuação e trocas de conectivo sem mudar relação lógica.',
            'Redação/reescrita conforme norma-padrão',
        ],
        [
            "PMDF: Funções do 'que' e do 'se' — como identificar?",
            '“que”: relativo, integrante, conjunção; “se”: apassivador, indeterminador, reflexivo ou conjunção condicional.',
            "Funções do 'que' e do 'se' nos diversos contextos sintáticos",
        ],
        [
            'PMDF: Figuras de linguagem e recursos argumentativos — mais comuns?',
            'Metáfora, metonímia, hipérbole, ironia; argumentos de autoridade, exemplificação, causa/efeito.',
            'Figuras de linguagem e recursos argumentativos frequentes',
        ],
        [
            'PMDF: Adequação lexical em comunicados/memorandos — como cair?',
            'Evitar coloquialismo e ambiguidade; preferir termos objetivos, precisão e formalidade compatível com redação oficial.',
            'Adequação lexical em comunicados oficiais e memorandos',
        ],

        // CÂMARA (Téc. Legislativo) - cards por tópico do edital (1+ por tópico)
        [
            'CÂMARA: Compreensão e interpretação de textos — estratégia?',
            'Localize tema, tese e inferências; valide conectivos e pronomes (coesão) e elimine alternativas que extrapolam o texto.',
            'Compreensão e interpretação de textos',
        ],
        [
            'CÂMARA: Tipologia textual — como reconhecer rápido?',
            'Pelo objetivo comunicativo e marcas: narrativo (ações no tempo), descritivo (caracteriza), dissertativo (tese), injuntivo (ordem).',
            'Tipologia textual',
        ],
        [
            'CÂMARA: Significação literal e contextual — pegadinha comum?',
            'A banca troca o sentido por sinônimo que não cabe no contexto; use o “teste da substituição” no trecho.',
            'Significação literal e contextual',
        ],
        [
            'CÂMARA: Coesão textual — o que mais cai?',
            'Referência pronominal (ele/isso/aquele), elipse e conectivos; erro típico é retomar termo errado e criar ambiguidade.',
            'Coesão textual',
        ],
        [
            'CÂMARA: Coordenação e subordinação — como classificar?',
            'Coordenação liga orações independentes; subordinação cria dependência (causal, concessiva, condicional etc.).',
            'Coordenação e subordinação',
        ],
        [
            'CÂMARA: Classes de palavras — onde a FGV pega?',
            'No valor no contexto: “que” relativo x integrante; “se” apassivador x indeterminador; advérbio x adjunto adnominal.',
            'Classes de palavras',
        ],
        [
            'CÂMARA: Concordância e regência — checklist?',
            'Sujeito composto/posposto, “haver/fazer” impessoais, “a maioria de”, e regências campeãs (assistir, preferir, obedecer).',
            'Concordância e regência',
        ],
        [
            'CÂMARA: Estrutura e formação de palavras — foco de prova?',
            'Derivação (prefixal/sufixal/parassintética), composição e efeitos de sentido (negação, intensidade, repetição).',
            'Estrutura e formação de palavras',
        ],
        [
            'CÂMARA: Ortografia e pontuação — dupla campeã?',
            'Ortografia: homófonos e “porque”. Pontuação: vírgula (restritiva x explicativa; oração adverbial deslocada; aposto).',
            'Ortografia e pontuação',
        ],
        [
            'CÂMARA: Redação oficial — princípio central?',
            'Clareza, concisão, impessoalidade, formalidade e padronização; evitar gírias, ambiguidade e excesso de adjetivos.',
            'Redação oficial',
        ],
        [
            'CÂMARA: Manual de Redação — como cai?',
            'Banca cobra padronização (tratamento, pronomes, fechos) e reescrita mantendo sentido e norma-padrão.',
            'Reescrita e padronização conforme Manual de Redação da Câmara',
        ],
        [
            'CÂMARA: Colocação pronominal em correspondências — regra prática?',
            'Próclise com palavras atrativas; ênclise no início de frase; mesóclise em futuro do presente/pretérito sem atrativos (formal).',
            'Colocação pronominal (próclise, ênclise, mesóclise) em correspondências oficiais',
        ],
        [
            'CÂMARA: Siglas, abreviaturas e numerais — cuidado?',
            'Consistência e padronização: definir sigla na 1ª ocorrência, evitar excesso, e usar numerais conforme regra do manual.',
            'Uso padronizado de siglas, abreviaturas e numerais em textos técnicos',
        ],

        // CÂMARA (Téc. Legislativo) - expansão (mín. ~5 cards por tópico)
        [
            'CÂMARA: Interpretação — “inferência” pode inventar informação?',
            'Não. Inferência deve ser conclusão necessária/altamente provável a partir de pistas; não pode contrariar nem extrapolar o texto.',
            'Compreensão e interpretação de textos',
        ],
        [
            'CÂMARA: Interpretação — “finalidade do texto” costuma ser?',
            'Informar, persuadir/argumentar, narrar, instruir ou criticar; identifique pelo gênero e pelo tom do autor.',
            'Compreensão e interpretação de textos',
        ],
        [
            'CÂMARA: Interpretação — tese x argumento?',
            'Tese é a ideia defendida; argumentos são as razões/evidências usadas para sustentá-la.',
            'Compreensão e interpretação de textos',
        ],
        [
            'CÂMARA: Interpretação — como eliminar alternativas?',
            'Corte as que: generalizam (“sempre”), extrapolam, contradizem o texto ou trocam a relação lógica dos conectivos.',
            'Compreensão e interpretação de textos',
        ],

        [
            'CÂMARA: Tipologia — texto pode ter mais de um tipo?',
            'Sim. Tipos podem se mesclar; a banca cobra o tipo predominante (objetivo principal do trecho).',
            'Tipologia textual',
        ],
        [
            'CÂMARA: Tipologia — marca típica do dissertativo?',
            'Defesa de tese e encadeamento lógico; uso frequente de conectivos argumentativos e termos abstratos.',
            'Tipologia textual',
        ],
        [
            'CÂMARA: Tipologia — marca do injuntivo?',
            'Verbos no imperativo/infinitivo com instruções, regras e procedimentos: “faça”, “evite”, “deve-se”.',
            'Tipologia textual',
        ],
        [
            'CÂMARA: Tipologia — armadilha de prova?',
            'Confundir “descrição” (caracteriza) com “dissertação” (defende tese). Pergunte: o texto descreve ou argumenta?',
            'Tipologia textual',
        ],

        [
            'CÂMARA: Sentido contextual — polissemia?',
            'Mesma palavra com sentidos diferentes; o contexto (campo semântico e coocorrências) fixa o sentido correto.',
            'Significação literal e contextual',
        ],
        [
            'CÂMARA: Sentido contextual — denotação x conotação?',
            'Denotação é literal; conotação é figurada/avaliativa. Prova cobra “efeito de sentido” no trecho.',
            'Significação literal e contextual',
        ],
        [
            'CÂMARA: Sentido contextual — “sinônimo” em prova?',
            'Só vale se preserva sentido e registro (formalidade). Sinônimo aproximado pode mudar o sentido no contexto.',
            'Significação literal e contextual',
        ],
        [
            'CÂMARA: Sentido contextual — ironia?',
            'Dizer o contrário do que se afirma literalmente, com intenção crítica; pistas são tom e contexto.',
            'Significação literal e contextual',
        ],

        [
            'CÂMARA: Coesão — anáfora?',
            'Retoma termo anterior: “O projeto foi aprovado. Isso surpreendeu.”',
            'Coesão textual',
        ],
        [
            'CÂMARA: Coesão — catáfora?',
            'Antecipação: “Isto é certo: haverá mudanças.”',
            'Coesão textual',
        ],
        [
            'CÂMARA: Coesão — elipse?',
            'Omissão de termo recuperável: “João estuda. Maria também (estuda).”',
            'Coesão textual',
        ],
        [
            'CÂMARA: Coesão — conectivos (papel)?',
            'Marcam relações (causa, oposição, conclusão). Trocar conectivo pode mudar o sentido e tornar item falso.',
            'Coesão textual',
        ],

        [
            'CÂMARA: Coordenação — conjunções típicas?',
            'Aditivas (e), adversativas (mas), alternativas (ou), conclusivas (logo) e explicativas (porque/pois).',
            'Coordenação e subordinação',
        ],
        [
            'CÂMARA: Subordinação — conjunções campeãs?',
            'Causais (porque), concessivas (embora), condicionais (se), finais (para que), consecutivas (tanto que).',
            'Coordenação e subordinação',
        ],
        [
            'CÂMARA: Subordinação — oração adjetiva restritiva?',
            'Sem vírgula; limita o referente: “Os servidores que estudam passam”.',
            'Coordenação e subordinação',
        ],
        [
            'CÂMARA: Subordinação — oração adjetiva explicativa?',
            'Com vírgulas; apenas comenta: “Os servidores, que estudam, passam.” (efeito de generalização).',
            'Coordenação e subordinação',
        ],

        [
            "CÂMARA: Classe — funções do 'que'?",
            "Pode ser pronome relativo (o qual), conjunção integrante (que + oração substantiva) e conjunção subordinativa em locuções.",
            'Classes de palavras',
        ],
        [
            "CÂMARA: Classe — funções do 'se'?",
            "Apassivador (vendem-se), indeterminador (precisa-se de), reflexivo (lavou-se) ou conjunção condicional (se).",
            'Classes de palavras',
        ],
        [
            'CÂMARA: Classe — advérbio x adjetivo (armadilha)?',
            'Advérbio modifica verbo/adjetivo (“fala claro”); adjetivo caracteriza nome (“fala clara”).',
            'Classes de palavras',
        ],
        [
            'CÂMARA: Classe — pronome relativo (como testar)?',
            'Substitua por “o qual/a qual”: “o texto que li” → “o texto o qual li” (ajuste regência).',
            'Classes de palavras',
        ],

        [
            'CÂMARA: Concordância — “haver” (existir)?',
            'Impessoal: fica no singular: “Havia problemas”.',
            'Concordância e regência',
        ],
        [
            'CÂMARA: Concordância — “fazer” (tempo/clima)?',
            'Impessoal: “Faz dois anos”; “Faz calor”.',
            'Concordância e regência',
        ],
        [
            'CÂMARA: Regência — assistir (ver)?',
            'Assistir a (ao/à): “Assisti ao filme”.',
            'Concordância e regência',
        ],
        [
            'CÂMARA: Regência — preferir?',
            'Preferir X a Y (sem “mais”): “Prefiro estudar a viajar”.',
            'Concordância e regência',
        ],

        [
            'CÂMARA: Formação — derivação parassintética?',
            'A palavra se forma com prefixo + sufixo ao mesmo tempo (não existe sem um deles).',
            'Estrutura e formação de palavras',
        ],
        [
            'CÂMARA: Formação — composição?',
            'União de radicais (justaposição/aglutinação), formando novo sentido.',
            'Estrutura e formação de palavras',
        ],
        [
            'CÂMARA: Formação — prefixos mudam sentido?',
            'Sim: re- (repetição), anti- (oposição), sub- (inferioridade), super- (excesso), etc.',
            'Estrutura e formação de palavras',
        ],
        [
            'CÂMARA: Formação — radical x afixos?',
            'Radical é base de sentido; afixos (prefixo/sufixo) modificam o sentido e a classe.',
            'Estrutura e formação de palavras',
        ],

        [
            'CÂMARA: Ortografia — “porque/por que/porquê/por quê”?',
            'Porque (explicação). Por que (pergunta/relativo). Porquê (substantivo). Por quê (fim de frase).',
            'Ortografia e pontuação',
        ],
        [
            'CÂMARA: Pontuação — vírgula entre sujeito e verbo?',
            'Em regra, não. É erro clássico (“O candidato, passou”).',
            'Ortografia e pontuação',
        ],
        [
            'CÂMARA: Pontuação — aposto explicativo?',
            'Isola-se por vírgulas: “Brasília, capital do Brasil, ...”.',
            'Ortografia e pontuação',
        ],
        [
            'CÂMARA: Pontuação — oração adverbial deslocada?',
            'Costuma vir com vírgula: “Se estudar, passará”.',
            'Ortografia e pontuação',
        ],

        [
            'CÂMARA: Redação oficial — impessoalidade (como se mostra)?',
            'Evitar “eu/nós”; foco no órgão, no ato e no destinatário; linguagem objetiva e formal.',
            'Redação oficial',
        ],
        [
            'CÂMARA: Redação oficial — concisão é cortar informação?',
            'Não. É dizer o essencial com clareza, sem redundância e sem perder precisão.',
            'Redação oficial',
        ],
        [
            'CÂMARA: Redação oficial — padronização?',
            'Manter modelos (estrutura, fechos, tratamentos) e uniformidade de termos para reduzir ambiguidade.',
            'Redação oficial',
        ],
        [
            'CÂMARA: Redação oficial — erro comum?',
            'Ambiguidade por pronomes sem referente e períodos longos sem conectivos claros.',
            'Redação oficial',
        ],

        [
            'CÂMARA: Manual de Redação — reescrita “mantendo sentido” (dica)?',
            'Troque termos/estruturas preservando relação lógica e referência; se mudar conectivo, muda sentido e a alternativa fica errada.',
            'Reescrita e padronização conforme Manual de Redação da Câmara',
        ],
        [
            'CÂMARA: Manual — tratamento e fechos (noção)?',
            'Padrões de vocativos e fechos variam conforme autoridade/destinatário; prova cobra consistência e formalidade.',
            'Reescrita e padronização conforme Manual de Redação da Câmara',
        ],
        [
            'CÂMARA: Manual — linguagem (noção)?',
            'Preferir termos claros, evitar jargões desnecessários e siglas sem definição; foco em objetividade.',
            'Reescrita e padronização conforme Manual de Redação da Câmara',
        ],
        [
            'CÂMARA: Manual — erro típico em prova?',
            'Trocar registro formal por coloquial e “parecer certo”, mas foge da padronização do manual.',
            'Reescrita e padronização conforme Manual de Redação da Câmara',
        ],

        [
            'CÂMARA: Próclise — quando ocorre?',
            'Com palavras atrativas: não, nunca, já, quem, que (relativo), advérbios e conjunções subordinativas.',
            'Colocação pronominal (próclise, ênclise, mesóclise) em correspondências oficiais',
        ],
        [
            'CÂMARA: Ênclise — quando é comum?',
            'No início de período sem palavra atrativa: “Farei-me presente” (registro formal).',
            'Colocação pronominal (próclise, ênclise, mesóclise) em correspondências oficiais',
        ],
        [
            'CÂMARA: Mesóclise — quando aparece?',
            'Com futuro do presente/pretérito sem atrativos: “dir-se-á”, “far-se-ia” (muito formal).',
            'Colocação pronominal (próclise, ênclise, mesóclise) em correspondências oficiais',
        ],
        [
            'CÂMARA: Colocação pronominal — pegadinha?',
            'Alternativa “bonita” pode contrariar a atração; se há atrativo, próclise tende a ser exigida.',
            'Colocação pronominal (próclise, ênclise, mesóclise) em correspondências oficiais',
        ],

        [
            'CÂMARA: Siglas — regra prática?',
            'Na 1ª ocorrência, escrever por extenso e colocar a sigla; depois, usar a sigla de forma consistente.',
            'Uso padronizado de siglas, abreviaturas e numerais em textos técnicos',
        ],
        [
            'CÂMARA: Abreviaturas — cuidado?',
            'Evitar abreviar sem padrão; abreviação deve ser compreensível e consistente no documento.',
            'Uso padronizado de siglas, abreviaturas e numerais em textos técnicos',
        ],
        [
            'CÂMARA: Numerais — regra de prova (noção)?',
            'Seguir padronização do manual: consistência no uso de algarismos/por extenso conforme contexto (datas, valores, itens).',
            'Uso padronizado de siglas, abreviaturas e numerais em textos técnicos',
        ],
        [
            'CÂMARA: Siglas/numerais — por que cai?',
            'Porque afeta clareza e padronização; bancas cobram uniformidade e ausência de ambiguidade em texto técnico.',
            'Uso padronizado de siglas, abreviaturas e numerais em textos técnicos',
        ],

        // DETRAN-DF - cards por tópico do edital (1+ por tópico)
        ['DETRAN: Interpretação e redação oficial — foco?', 'Interpretar textos e aplicar norma-padrão em reescrita; atenção a clareza, impessoalidade e concisão.', 'Interpretação e redação oficial'],
        ['DETRAN: Ortografia, acentuação e pontuação — pegadinhas?', '“por que/porque/porquê/por quê”, homófonos e vírgula (restritiva x explicativa; aposto; oração adverbial).', 'Ortografia, acentuação e pontuação'],
        ['DETRAN: Concordância e regência verbal — campeões?', '“haver/fazer” impessoais; sujeito composto/posposto; regência de assistir, obedecer, preferir, aspirar.', 'Concordância e regência verbal'],
        ['DETRAN: Figuras de linguagem e coerência textual — o que cai?', 'Metáfora, metonímia, hipérbole, ironia e coerência global (sem contradição).', 'Figuras de linguagem e coerência textual'],
        ['DETRAN: Adequação vocabular em informes — regra?', 'Escolher termos formais, objetivos e precisos; evitar coloquialismo e ambiguidade em comunicados públicos.', 'Adequação vocabular em informes e comunicados públicos'],
    ]),
};
