// Banco de Dados de Concursos - COMPLETO E DETALHADO
// Estrutura: Nome do Concurso -> Cargos -> Matérias com Tópicos Detalhados

export const EXAM_DATABASE = {
    "pmdf": {
        name: "Polícia Militar do Distrito Federal",
        bancas: "IADES",
        positions: [
            {
                id: "soldado",
                label: "Soldado da Polícia Militar",
                subjects: [
                    {
                        label: "Língua Portuguesa",
                        category: "Conhecimentos Básicos",
                                                topics: [
                            "Compreensão e interpretação de textos",
                            "Tipologia textual",
                            "Significação literal e contextual de vocábulos",
                            "Coesão e coerência",
                            "Sintaxe do período (coordenação e subordinação)",
                            "Classes de palavras e emprego",
                            "Concordância verbal e nominal",
                            "Regência verbal e nominal",
                            "Crase",
                            "Estrutura e formação de palavras",
                            "Ortografia oficial",
                            "Pontuação",
                            "Redação/reescrita conforme norma-padrão",
                            "Funções do 'que' e do 'se' nos diversos contextos sintáticos",
                            "Figuras de linguagem e recursos argumentativos frequentes",
                            "Adequação lexical em comunicados oficiais e memorandos"
                        ]
                    },
                    {
                        label: "Matemática e Raciocínio Lógico",
                        category: "Conhecimentos Básicos",
                                                topics: [
                            "Proposições, conectivos, negações, equivalências e implicações",
                            "Tabelas-verdade, argumentos, validade, quantificadores",
                            "Conjuntos, relações, funções (noções usuais de prova)",
                            "Razão, proporção, regra de três, porcentagem",
                            "Juros simples/compostos (quando previsto)",
                            "Equações/inequações e sistemas (nível básico)",
                            "Problemas aritméticos e interpretação de tabelas/gráficos",
                            "Análise combinatória e probabilidade (noções, quando previsto)",
                            "Progressões aritméticas e geométricas com aplicações práticas",
                            "Combinatória aplicada a escalas de serviço e distribuição de equipes",
                            "Interpretação de tabelas probabilísticas e médias ponderadas"
                        ]
                    },
                    {
                        label: "Noções de Informática",
                        category: "Conhecimentos Básicos",
                                                topics: [
                            "Conceitos: hardware, software, sistemas operacionais",
                            "Internet/intranet: navegação, busca, e-mail, segurança",
                            "Arquivos/pastas: organização, extensões, backup",
                            "Noções de segurança da informação (ameaças, boas práticas)",
                            "Editores de texto e planilhas (conceitos e funções usuais)",
                            "Ferramentas colaborativas (Teams, SharePoint, OneDrive) e boas práticas de uso",
                            "Configurações de segurança em navegadores e sistemas operacionais",
                            "Armazenamento em nuvem e sincronização segura de arquivos e evidências"
                        ]
                    },
                    {
                        label: "Direito Constitucional",
                        category: "Direito",
                                                topics: [
                            "Constituição: princípios fundamentais",
                            "Direitos e garantias fundamentais",
                            "Organização do Estado",
                            "Administração Pública (princípios, servidores, regras constitucionais)",
                            "Segurança pública (art. 144) e temas correlatos",
                            "Processo legislativo constitucional (art. 59 a 69)",
                            "Controle de constitucionalidade: difuso, concentrado e ADPF",
                            "Defesa do Estado (estado de defesa, estado de sítio e intervenções federais)"
                        ]
                    },
                    {
                        label: "Direito Penal",
                        category: "Direito",
                                                topics: [
                            "Teoria do crime: fato típico, ilicitude, culpabilidade",
                            "Concurso de pessoas e de crimes",
                            "Penas: espécies, aplicação, substituição, suspensão condicional",
                            "Crimes em espécie (contra pessoa, patrimônio, administração pública)",
                            "Crimes contra a fé pública, dignidade sexual e administração militar",
                            "Elementos subjetivos e causas de exclusão da culpabilidade",
                            "Aspectos penais ligados a leis especiais (desarmamento, drogas)"
                        ]
                    },
                    {
                        label: "Direito Processual Penal",
                        category: "Direito",
                                                topics: [
                            "Inquérito policial e ação penal",
                            "Prisões (flagrante, preventiva, temporária) e liberdade provisória",
                            "Provas, cadeia de custódia",
                            "Procedimentos, competência, recursos (noções usuais)",
                            "Procedimentos especiais (Tribunal do Júri, crimes funcionais, Lei de Drogas)",
                            "Acordos penais: acordo de não persecução, colaboração premiada e plea bargain",
                            "Recursos penais recorrentes (apelação, recurso em sentido estrito, habeas corpus)"
                        ]
                    },
                    {
                        label: "Direitos Humanos",
                        category: "Conhecimentos Específicos",
                                                topics: [
                            "Fundamentos e princípios",
                            "Sistema internacional e interamericano (noções)",
                            "Regras de uso da força e proteção de grupos vulneráveis",
                            "Programas nacionais de direitos humanos e política de memória",
                            "Papel de conselhos e ouvidorias no controle externo da atividade policial",
                            "Proteção de minorias (indígenas, populações tradicionais, LGBTI+) em operações"
                        ]
                    },
                    {
                        label: "Estatuto dos Policiais Militares do DF",
                        category: "Legislação Específica",
                                                topics: [
                            "Direitos, deveres, hierarquia e disciplina",
                            "Ingresso, carreira, prerrogativas, vedações",
                            "Regimes e responsabilidades",
                            "Movimentação, transferências, agregação e licenças específicas",
                            "Licenças e afastamentos com e sem remuneração",
                            "Elogios, recompensas e registros funcionais"
                        ]
                    },
                    {
                        label: "Regulamento Disciplinar da PMDF",
                        category: "Legislação Específica",
                                                topics: [
                            "Transgressões, punições, processo/rito disciplinar",
                            "Autoridade competente, recursos e revisão",
                            "Classificação de transgressões com agravantes e atenuantes",
                            "Prazos procedimentais, defesa e garantias do acusado",
                            "Direitos do disciplinado e recursos administrativos"
                        ]
                    },
                    {
                        label: "Criminologia",
                        category: "Conhecimentos Específicos",
                                                topics: [
                            "Conceitos básicos: crime, criminoso, vítima e controle social",
                            "Escolas/teorias criminológicas mais cobradas",
                            "Violência, prevenção e políticas criminais (noções)",
                            "Teorias sociológicas contemporâneas (anomia, associação diferencial, controle social)",
                            "Políticas de prevenção situacional e comunitária",
                            "Justiça restaurativa e medidas alternativas no âmbito policial"
                        ]
                    },
                    {
                        label: "Legislação Penal Especial",
                        category: "Conhecimentos Específicos",
                                                topics: [
                            "Lei de Drogas (Lei 11.343/2006): crimes, penas, procedimentos essenciais",
                            "Crimes Hediondos (Lei 8.072/1990): rol e efeitos principais",
                            "Organização Criminosa (Lei 12.850/2013): conceito, meios de obtenção e crimes",
                            "Lei de Tortura (Lei 9.455/1997): tipos e consequências",
                            "Estatuto do Desarmamento (Lei 10.826/2003): porte, registro e crimes",
                            "Lei 13.869/2019 (abuso de autoridade): condutas e sanções",
                            "Lei Maria da Penha (Lei 11.340/2006): medidas protetivas e atendimento policial"
                        ]
                    }
                ]
            }
        ]
    },

    "policia penal mg": {
        name: "Polícia Penal de Minas Gerais",
        bancas: "IBFC, FUNDEP, FGV",
        positions: [
            {
                id: "agente-seguranca-penitenciaria",
                label: "Agente de Segurança Penitenciária",
                subjects: [
                    // CONHECIMENTOS BÁSICOS
                    {
                        label: "Língua Portuguesa",
                        category: "Conhecimentos Básicos",
                                                topics: [
                            "Interpretação e compreensão de textos",
                            "Ortografia, acentuação, pontuação",
                            "Morfologia (classes de palavras)",
                            "Sintaxe (termos da oração, período composto)",
                            "Concordância e regência",
                            "Coesão, coerência, reescrita e adequação vocabular",
                            "Crase e usos obrigatórios ou facultativos",
                            "Figuras de linguagem e efeitos de sentido",
                            "Reescrita e adequação textual voltada a ofícios e comunicados internos"
                        ]
                    },
                    {
                        label: "Raciocínio Lógico",
                        category: "Conhecimentos Básicos",
                                                topics: [
                            "Proposições, conectivos e equivalências",
                            "Argumentos e inferências",
                            "Problemas de contagem/ordenação (nível básico)",
                            "Porcentagem/regra de três aplicada a problemas",
                            "Sequências lógicas e análise de padrões",
                            "Proporcionalidade direta e inversa aplicada à distribuição de equipes",
                            "Análise de tabelas e gráficos estatísticos",
                            "Diagramas lógicos e avaliação de argumentos"
                        ]
                    },
                    {
                        label: "Noções de Informática",
                        category: "Conhecimentos Básicos",
                                                topics: [
                            "Conceitos de hardware/software e sistema operacional",
                            "Internet: navegação, correio eletrônico e busca",
                            "Segurança (malware, phishing, senhas, backup)",
                            "Organização de arquivos e ferramentas de produtividade (editor/planilha)",
                            "Pacote LibreOffice/Office no preenchimento de formulários oficiais",
                            "Segurança em redes internas e VPN do sistema prisional",
                            "Armazenamento em nuvem governamental e compartilhamento seguro de dados sensíveis"
                        ]
                    },

                    // DIREITO PENAL - ALTÍSSIMA INCIDÊNCIA
                    {
                        label: "Direito Penal",
                        category: "Direito",
                                                topics: [
                            "Parte Geral: princípios, aplicação da lei penal, crime, pena, concurso de crimes/pessoas",
                            "Parte Especial: crimes contra o patrimônio",
                            "Parte Especial: crimes contra a pessoa",
                            "Parte Especial: crimes contra a administração pública",
                            "Crimes contra a administração da justiça e o sistema carcerário",
                            "Crimes hediondos e majorantes relevantes para o agente penitenciário",
                            "Elementos dos crimes de tortura e abuso praticados por agentes públicos"
                        ]
                    },
                    {
                        label: "Direito Processual Penal",
                        category: "Direito",
                                                topics: [
                            "Inquérito, ação penal, competência",
                            "Prisões e medidas cautelares",
                            "Provas e procedimentos",
                            "Execução de atos, recursos (noções)",
                            "Procedimentos especiais (Lei de Drogas, crimes hediondos, Tribunal do Júri)",
                            "Cadeia de custódia e preservação da prova no ambiente prisional",
                            "Recursos aplicados à execução penal (agravos, correição parcial, habeas corpus)"
                        ]
                    },

                    // LEGISLAÇÃO PENAL ESPECIAL - CONSOLIDADA
                    {
                        label: "Lei de Execução Penal (LEP)",
                        category: "Legislação Específica",
                                                topics: [
                            "Princípios e objetivos",
                            "Estabelecimentos penais e regimes",
                            "Direitos e deveres do preso",
                            "Disciplina: faltas, sanções, procedimentos",
                            "Assistências, trabalho, remição",
                            "Progressão, livramento condicional",
                            "Procedimentos e atuação da administração penitenciária",
                            "Órgãos da execução penal (CNPCP, Conselho Penitenciário, Patronato)",
                            "Medidas de segurança e tratamento psiquiátrico",
                            "Execução penal feminina e presos provisórios"
                        ]
                    },
                    {
                        label: "Legislação Penal Especial",
                        category: "Legislação Específica",
                                                topics: [
                            "Lei de Drogas (Lei 11.343/2006): crimes, penas, procedimentos essenciais",
                            "Crimes Hediondos (Lei 8.072/1990): rol e efeitos principais",
                            "Estatuto do Desarmamento (Lei 10.826/2003): crimes e regras nucleares",
                            "Organização Criminosa (Lei 12.850/2013): conceito, meios de obtenção e crimes",
                            "Lei de Tortura (Lei 9.455/1997): tipos e consequências",
                            "Lei 9.613/1998 (lavagem de dinheiro) - efeitos processuais",
                            "Lei 13.869/2019 (abuso de autoridade) aplicada ao sistema prisional",
                            "Lei 13.260/2016 (terrorismo) e impactos na gestão penitenciária"
                        ]
                    },

                    // DIREITOS HUMANOS
                    {
                        label: "Direitos Humanos",
                        category: "Conhecimentos Específicos",
                                                topics: [
                            "Princípios, dignidade, garantias",
                            "Regras mínimas e proteção no sistema prisional",
                            "Tratados mais cobrados em provas de segurança (noções)",
                            "Regras de Mandela e de Bangkok",
                            "Mecanismos nacionais e estaduais de prevenção e combate à tortura",
                            "Atendimento a grupos vulneráveis no sistema prisional"
                        ]
                    },

                    // LEGISLAÇÃO DE MG
                    {
                        label: "Constituição do Estado de Minas Gerais",
                        category: "Legislação Específica",
                                                topics: [
                            "Administração pública",
                            "Segurança pública e temas correlatos",
                            "Competências da Polícia Penal e dos demais órgãos de segurança",
                            "Política penitenciária estadual, conselhos e fundos"
                        ]
                    },
                    {
                        label: "Estatuto do Servidor Público de MG",
                        category: "Legislação Específica",
                                                topics: [
                            "Provimento, direitos e deveres",
                            "Regime disciplinar, penalidades e processo administrativo",
                            "Jornada de trabalho, adicionais e remuneração",
                            "Processo administrativo disciplinar e garantias do servidor",
                            "Licenças (gestante, adotante, interesse particular e capacitação)"
                        ]
                    },
                    {
                        label: "Normas da Polícia Penal de MG",
                        category: "Legislação Específica",
                                                topics: [
                            "Estrutura, competências, atribuições",
                            "Deveres e disciplina",
                            "Estrutura organizacional (Subsecretaria, diretorias e unidades regionais)",
                            "Protocolos de escolta, revista e uso progressivo da força",
                            "Programas de ressocialização, educação e registro de incidentes"
                        ]
                    },

                    // CRIMINOLOGIA
                    {
                        label: "Criminologia",
                        category: "Conhecimentos Específicos",
                                                topics: [
                            "Conceitos, teorias e controle social",
                            "Criminalidade, reincidência, vitimologia (noções)",
                            "Criminologia crítica e controle social (formal e informal)",
                            "Indicadores de reincidência e avaliação de risco penitenciário",
                            "Reintegração social e políticas para o egresso"
                        ]
                    }
                ]
            }
        ]
    },

    "detran df": {
        name: "Departamento de Trânsito do Distrito Federal",
        bancas: "IBFC",
        positions: [
            {
                id: "agente-de-transito",
                label: "Agente de Trânsito",
                subjects: [
                    {
                        label: "Língua Portuguesa",
                        category: "Conhecimentos Básicos",
                        topics: [
                            "Interpretação e redação oficial",
                            "Ortografia, acentuação e pontuação",
                            "Concordância e regência verbal",
                            "Figuras de linguagem e coerência textual",
                            "Adequação vocabular em informes e comunicados públicos"
                        ]
                    },
                    {
                        label: "Legislação de Trânsito",
                        category: "Conhecimentos Específicos",
                        topics: [
                            "Código de Trânsito Brasileiro: competências, princípios e infrações",
                            "Lei 14.071/2020 e atualizações sobre validade da CNH, pontuação e recursos",
                            "Infrações, penalidades e medidas administrativas com foco em fiscalização",
                            "Processos administrativos de trânsito e recursos",
                            "Resoluções do CONTRAN e normas complementares mais recentes"
                        ]
                    },
                    {
                        label: "Legislação Distrital do DF",
                        category: "Conhecimentos Específicos",
                        topics: [
                            "Lei Orgânica do Distrito Federal e a unidade federativa híbrida (estado + município)",
                            "Estrutura administrativa do GDF e competências da Secretaria de Mobilidade e Detran-DF",
                            "Políticas distritais de mobilidade urbana e trânsito do DF",
                            "Programas de atualização, compliance e atendimento ao cidadão do Detran-DF",
                            "Controle social e transparência na execução de serviços públicos do GDF"
                        ]
                    },
                    {
                        label: "Ética no Serviço Público",
                        category: "Conhecimentos Básicos",
                        topics: [
                            "Código de Ética do servidor público",
                            "Conflitos de interesses, nepotismo e deveres funcionais",
                            "Transparência, atendimento ao cidadão e prestação de contas",
                            "Programas de integridade e combate à corrupção no GDF",
                            "Responsabilidade disciplinar e dever de sigilo"
                        ]
                    }
                ]
            }
        ]
    },

    "camara dos deputados": {
        name: "Câmara dos Deputados",
        bancas: "FGV ou CESPE/Cebraspe",
        positions: [
            {
                id: "tecnico-legislativo-area-administrativa",
                label: "Técnico Legislativo - Área Administrativa",
                subjects: [
                    // CONHECIMENTOS BÁSICOS
                    {
                        label: "Língua Portuguesa",
                        category: "Conhecimentos Básicos",
                                                topics: [
                            "Compreensão e interpretação de textos",
                            "Tipologia textual",
                            "Significação literal e contextual",
                            "Coesão textual",
                            "Coordenação e subordinação",
                            "Classes de palavras",
                            "Concordância e regência",
                            "Estrutura e formação de palavras",
                            "Ortografia e pontuação",
                            "Redação oficial",
                            "Reescrita e padronização conforme Manual de Redação da Câmara",
                            "Colocação pronominal (próclise, ênclise, mesóclise) em correspondências oficiais",
                            "Uso padronizado de siglas, abreviaturas e numerais em textos técnicos"
                        ]
                    },
                    {
                        label: "Raciocínio Lógico-Matemático",
                        category: "Conhecimentos Básicos",
                                                topics: [
                            "Proposições e conectivos lógicos",
                            "Equivalências e negações",
                            "Argumentos válidos",
                            "Problemas aritméticos e porcentagem",
                            "Sequências lógicas",
                            "Análise combinatória e princípio multiplicativo aplicados a comissões",
                            "Proporcionalidade, porcentagens compostas e índices de reajuste",
                            "Sequências numéricas e progressões ligadas à distribuição orçamentária"
                        ]
                    },
                    {
                        label: "Informática",
                        category: "Conhecimentos Básicos",
                                                topics: [
                            "Sistemas operacionais (Windows/Linux)",
                            "Ferramentas de produtividade (editores, planilhas)",
                            "Internet e navegação segura",
                            "Segurança da informação",
                            "Soluções colaborativas (Office 365, LibreOffice) e atalhos no trabalho legislativo",
                            "Governança de dados e LGPD aplicada ao Poder Legislativo",
                            "Sistemas corporativos da Câmara (SEI, Infoleg, e-mail institucional)"
                        ]
                    },
                    {
                        label: "Ética no Serviço Público",
                        category: "Conhecimentos Básicos",
                                                topics: [
                            "Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal",
                            "Princípios éticos e morais no serviço público",
                            "Conduta do servidor público",
                            "Conflito de interesses, nepotismo e impedimentos",
                            "Uso de bens públicos, sigilo e redes sociais institucionais",
                            "Dever de transparência e participação em comissões de ética"
                        ]
                    },

                    // CONHECIMENTOS ESPECÍFICOS
                    {
                        label: "Direito Constitucional",
                        category: "Conhecimentos Específicos",
                                                topics: [
                            "Princípios fundamentais",
                            "Direitos e garantias fundamentais",
                            "Organização do Estado (União, Estados, Municípios, DF)",
                            "Administração Pública (disposições gerais e servidores)",
                            "Organização dos Poderes (Legislativo, Executivo, Judiciário)",
                            "Finanças públicas e orçamentos (trecho constitucional)",
                            "Processo legislativo e orçamentário (PPA, LDO, LOA)",
                            "Fiscalização contábil, financeira e orçamentária (art. 70 a 75)",
                            "Defesa do Estado e das instituições democráticas (arts. 34 a 36 e 136 a 141)"
                        ]
                    },
                    {
                        label: "Direito Administrativo",
                        category: "Conhecimentos Específicos",
                                                topics: [
                            "Lei 8.112/1990 (Regime Jurídico Único)",
                            "Lei 8.666/1993 (Licitações e Contratos)",
                            "Princípios da Administração Pública",
                            "Atos administrativos",
                            "Processo administrativo",
                            "Responsabilidade civil do Estado (objetiva e regressiva)",
                            "Controle administrativo, judicial e legislativo",
                            "Lei 14.133/2021: fases, planejamento e governança das contratações"
                        ]
                    },
                    {
                        label: "Administração Pública",
                        category: "Conhecimentos Específicos",
                                                topics: [
                            "Organização administrativa brasileira",
                            "Princípios da administração pública",
                            "Descentralização e desconcentração",
                            "Administração direta e indireta",
                            "Planejamento estratégico (PPA, LDO, LOA) e alinhamento institucional",
                            "Governança pública, compliance e gestão de riscos",
                            "Gestão por competências, desempenho e avaliação de resultados"
                        ]
                    },
                    {
                        label: "Administração Financeira e Orçamentária (AFO)",
                        category: "Conhecimentos Específicos",
                                                topics: [
                            "Orçamento público: conceitos e princípios",
                            "Ciclo orçamentário",
                            "Créditos adicionais",
                            "Despesa pública: empenho, liquidação e pagamento",
                            "Classificação da receita pública e etapas do ingresso",
                            "LRF: limites de despesa com pessoal e endividamento",
                            "Programação financeira, cronograma de desembolso e contingenciamento"
                        ]
                    },
                    {
                        label: "Regimento Interno da Câmara dos Deputados",
                        category: "Conhecimentos Específicos",
                                                topics: [
                            "Títulos e capítulos indicados no edital",
                            "Órgãos da Câmara",
                            "Sessões e procedimentos",
                            "Mesa Diretora: eleições, substituições e atribuições",
                            "Colégio de Líderes e distribuição de tempo",
                            "Comissões permanentes, temporárias e CPIs",
                            "Processo legislativo interno: tramitações, urgência e prazos regimentais",
                            "Processo orçamentário interno (CRA, CMO e tramitação das leis orçamentárias)",
                            "Responsabilidade ético-disciplinar e interação com o Conselho de Ética"
                        ]
                    }
                ]
            }
        ]
    }
};

// Função helper para buscar concurso  
export function findExam(examName) {
    const normalizedInput = examName.toLowerCase().trim();

    if (EXAM_DATABASE[normalizedInput]) {
        return EXAM_DATABASE[normalizedInput];
    }

    const keys = Object.keys(EXAM_DATABASE);
    for (const key of keys) {
        if (normalizedInput.includes(key) || key.includes(normalizedInput)) {
            return EXAM_DATABASE[key];
        }
    }

    return null;
}

// Função helper para buscar cargo específico
export function findPosition(exam, positionName) {
    if (!exam || !exam.positions) return null;

    const normalizedSearch = positionName.toLowerCase().trim();

    return exam.positions.find(pos =>
        pos.label.toLowerCase().includes(normalizedSearch) ||
        normalizedSearch.includes(pos.label.toLowerCase())
    );
}
