// =====================================================
// MÓDULO ADICIONAL DE QUESTÕES - PARTE 1
// Para ser integrado ao questionBank.js
// =====================================================

// =====================================================
// DIREITO CONSTITUCIONAL
// =====================================================

// PRINCÍPIOS FUNDAMENTAIS
{
    id: 'const-1',
        text: 'São fundamentos da República Federativa do Brasil, conforme art. 1º da CF/88:',
            options: buildOptions([
                ['a', 'Soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, e pluralismo político.'],
                ['b', 'Independência nacional, prevalência dos direitos humanos e solução pacífica dos conflitos.'],
                ['c', 'Construir uma sociedade livre, justa e solidária.'],
                ['d', 'Erradicar a pobreza e a marginalização.'],
                ['e', 'Promover o bem de todos.'],
            ]),
                correctId: 'a',
                    explanation:
    'Art. 1º da CF lista os fundamentos: SO-CI-DI-VA-PLU (soberania, cidadania, dignidade, valores sociais do trabalho/livre iniciativa, pluralismo político).',
        exams: ['pmdf', 'camara dos deputados', 'policia penal mg'],
},

{
    id: 'const-2',
        text: 'Segundo a CF/88, todo poder emana do povo, que o exerce:',
            options: buildOptions([
                ['a', 'Exclusivamente por meio de representantes eleitos.'],
                ['b', 'Por meio de representantes eleitos ou diretamente, nos termos da Constituição.'],
                ['c', 'Apenas de forma direta.'],
                ['d', 'Somente através do Poder Executivo.'],
                ['e', 'Através de plebiscito obrigatório para todas as leis.'],
            ]),
                correctId: 'b',
                    explanation:
    'Art. 1º, parágrafo único: "Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente".',
        exams: ['pmdf', 'camara dos deputados', 'policia penal mg'],
},

{
    id: 'const-3',
        text: 'São objetivos fundamentais da República (art. 3º), EXCETO:',
            options: buildOptions([
                ['a', 'Construir uma sociedade livre, justa e solidária.'],
                ['b', 'Garantir o desenvolvimento nacional.'],
                ['c', 'Erradicar a pobreza e a marginalização.'],
                ['d', 'Promover o bem de todos, sem preconceitos.'],
                ['e', 'Assegurar a soberania nacional.'],
            ]),
                correctId: 'e',
                    explanation:
    'Soberania é fundamento (art. 1º), não objetivo. Os objetivos estão no art. 3º: construir sociedade justa, garantir desenvolvimento, erradicar pobreza, promover o bem de todos.',
        exams: ['pmdf', 'camara dos deputados'],
},

// DIREITOS E GARANTIAS FUNDAMENTAIS
{
    id: 'const-4',
        text: 'Sobre os direitos fundamentais, é correto afirmar:',
            options: buildOptions([
                ['a', 'São absolutos e ilimitados.'],
                ['b', 'Não se aplicam a estrangeiros residentes no Brasil.'],
                ['c', 'São relativos e podem sofrer restrições legítimas.'],
                ['d', 'Só podem ser invocados por pessoas físicas.'],
                ['e', 'Não vinculam particulares.'],
            ]),
                correctId: 'c',
                    explanation:
    'Os direitos fundamentais não são absolutos. Podem ser restringidos legitimamente por lei, desde que respeitado o núcleo essencial e a proporcionalidade.',
        exams: ['pmdf', 'camara dos deputados', 'policia penal mg'],
},

{
    id: 'const-5',
        text: 'Quanto ao direito à vida, a CF/88:',
            options: buildOptions([
                ['a', 'Veda totalmente a pena de morte.'],
                ['b', 'Admite pena de morte em caso de guerra declarada (art. 5º, XLVII).'],
                ['c', 'Permite eutanásia.'],
                ['d', 'Não protege a vida intrauterina.'],
                ['e', 'Admite pena de morte  para crimes hediondos.'],
            ]),
                correctId: 'b',
                    explanation:
    'Art. 5º, XLVII: não haverá pena de morte, SALVO em caso de guerra declarada, nos termos do art. 84, XIX.',
        exams: ['pmdf', 'camara dos deputados'],
},

{
    id: 'const-6',
        text: 'Sobre a garantia constitucional do habeas corpus:',
            options: buildOptions([
                ['a', 'Protege apenas o direito de locomoção.'],
                ['b', 'Protege dados pessoais em bancos de dados.'],
                ['c', 'Serve para proteger direito líquido e certo não amparado por HC ou HD.'],
                ['d', 'Protege informações de registros públicos.'],
                ['e', 'É exclusivo de brasileiro nato.'],
            ]),
                correctId: 'a',
                    explanation:
    'Art. 5º, LXVIII: habeas corpus protege a liberdade de locomoção quando ameaçada por ilegalidade ou abuso de poder.',
        exams: ['pmdf', 'policia penal mg'],
},

{
    id: 'const-7',
        text: 'O habeas data será concedido para:',
            options: buildOptions([
                ['a', 'Proteger a liberdade de locomoção.'],
                ['b', 'Assegurar o conhecimento ou retificação de informações pessoais em bancos de dados públicos.'],
                ['c', 'Anular ato lesivo ao patrimônio público.'],
                ['d', 'Proteger direito líquido e certo.'],
                ['e', 'Conhecer informações de terceiros.'],
            ]),
                correctId: 'b',
                    explanation:
    'Art. 5º, LXXII: habeas data serve para conhecer ou retificar informações pessoais em bancos de dados governamentais ou públicos.',
        exams: ['pmdf', 'camara dos deputados'],
},

{
    id: 'const-8',
        text: 'A prisão civil por dívida é admitida no Brasil em caso de:',
            options: buildOptions([
                ['a', 'Inadimplemento de qualquer dívida.'],
                ['b', 'Inadimplemento voluntário e inescusável de obrigação alimentícia e depositário infiel.'],
                ['c', 'Apenas inadimplemento voluntário de pensão alimentícia.'],
                ['d', 'Dívidas com o fisco.'],
                ['e', 'Qualquer dívida superior a 100 salários mínimos.'],
            ]),
                correctId: 'c',
                    explanation:
    'Após Súmula Vinculante 25 do STF, apenas o devedor de alimentos pode ser preso civilmente. Depositário infiel não mais se admite.',
        exams: ['pmdf', 'camara dos deputados'],
},

{
    id: 'const-9',
        text: 'A casa é asilo inviolável. Ninguém pode nela penetrar sem consentimento, EXCETO:',
            options: buildOptions([
                ['a', 'Durante o dia, com mandado judicial.'],
                ['b', 'Durante a noite, para prestar socorro.'],
                ['c', 'Durante o dia ou noite, sem mandado, para qualquer crime.'],
                ['d', 'Durante a noite, com mandado judicial para qualquer crime.'],
                ['e', 'Apenas durante o dia, sem mandado, por autoridade policial.'],
            ]),
                correctId: 'b',
                    explanation:
    'Art. 5º, XI: a casa é inviolável. Pode entrar: dia (mandado) ou dia/noite (flagrante, desastre, socorro). À noite, só sem mandado em flagrante/desastre/socorro.',
        exams: ['pmdf', 'policia penal mg'],
},

{
    id: 'const-10',
        text: 'A interceptação telefônica:',
            options: buildOptions([
                ['a', 'É proibida em qualquer hipótese.'],
                ['b', 'Pode ser determinada pelo Delegado.'],
                ['c', 'Pode ser determinada pelo juiz, para investigação criminal ou instrução processual penal (Lei 9.296/96).'],
                ['d', 'Não exige ordem judicial.'],
                ['e', 'É automaticamente autorizada em crimes hediondos.'],
            ]),
                correctId: 'c',
                    explanation:
    'Art. 5º, XII: interceptação só por ordem judicial, nas hipóteses e forma da lei (Lei 9.296/96), para investigação ou instrução penal.',
        exams: ['pmdf', 'policia penal mg'],
},

{
    id: 'const-11',
        text: 'Ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de:',
            options: buildOptions([
                ['a', 'Decreto presidencial.'],
                ['b', 'Lei.'],
                ['c', 'Portaria ministerial.'],
                ['d', 'Ordem judicial.'],
                ['e', 'Medida provisória, sempre.'],
            ]),
                correctId: 'b',
                    explanation:
    'Art. 5º, II consagra o princípio da legalidade: ninguém será obrigado a fazer ou deixar de fazer algo senão em virtude de LEI.',
        exams: ['pmdf', 'camara dos deputados'],
},

// ADMINISTRAÇÃO PÚBLICA
{
    id: 'const-12',
        text: 'São princípios expresssos da Administração Pública (art. 37, caput):',
            options: buildOptions([
                ['a', 'Legalidade, impessoalidade, moralidade, publicidade e eficiência.'],
                ['b', 'Legalidade, supremacia, indisponibilidade e continuidade.'],
                ['c', 'Legalidade, moralidade, razoabilidade e proporcionalidade.'],
                ['d', 'Apenas legalidade e moralidade.'],
                ['e', 'Legalidade, finalidade e motivação.'],
            ]),
                correctId: 'a',
                    explanation:
    'Art. 37, caput: LIMPE (Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência).',
        exams: ['camara dos deputados', 'pmdf'],
},

{
    id: 'const-13',
        text: 'A investidura em cargo ou emprego público depende de:',
            options: buildOptions([
                ['a', 'Apenas indicação política.'],
                ['b', 'Aprovação prévia em concurso público de provas ou provas e títulos.'],
                ['c', 'Formação superior.'],
                ['d', 'Experiência mínima de 5 anos.'],
                ['e', 'Apenas entrevista.'],
            ]),
                correctId: 'b',
                    explanation:
    'Art. 37, II: a investidura depende de aprovação prévia em concurso público, ressalvadas nomeações para cargos em comissão.',
        exams: ['camara dos deputados', 'pmdf'],
},

{
    id: 'const-14',
        text: 'O prazo de validade do concurso público será de até:',
            options: buildOptions([
                ['a', '1 ano, prorrogável uma vez por igual período.'],
                ['b', '2 anos, prorrogável uma vez por igual período.'],
                ['c', '3 anos, improrrogável.'],
                ['d', '4 anos, prorrogável.'],
                ['e', '5 anos.'],
            ]),
                correctId: 'b',
                    explanation:
    'Art. 37, III: prazo de validade do concurso é de até 2 anos, prorrogável uma vez por igual período.',
        exams: ['camara dos deputados', 'pmdf'],
},

{
    id: 'const-15',
        text: 'É vedada a acumulação remunerada de cargos públicos, EXCETO quando houver compatibilidade de horários para:',
            options: buildOptions([
                ['a', 'Dois cargos de professor.'],
                ['b', 'Três cargos de médico.'],
                ['c', 'Dois cargos administrativos.'],
                ['d', 'Dois cargos privativos de bacharel em direito.'],
                ['e', 'Quatro cargos de qualquer natureza.'],
            ]),
                correctId: 'a',
                    explanation:
    'Art. 37, XVI: é vedada acumulação, SALVO, com compatibilidade de horários: a) 2 cargos de professor; b) 1 professor + 1 técnico/científico; c) 2 cargos privativos de profissionais de saúde.',
        exams: ['camara dos deputados'],
},

// SEGURANÇA PÚBLICA - ART. 144
{
    id: 'const-16',
        text: 'Segundo o art. 144 da CF, a segurança pública é:',
            options: buildOptions([
                ['a', 'Dever exclusivo do Estado.'],
                ['b', 'Dever do Estado e responsabilidade de todos.'],
                ['c', 'Responsabilidade apenas da Polícia Militar.'],
                ['d', 'Função exclusiva da União.'],
                ['e', 'Competência privativa dos Municípios.'],
            ]),
                correctId: 'b',
                    explanation:
    'Art. 144, caput: segurança pública é dever do Estado, direito e RESPONSABILIDADE DE TODOS.',
        exams: ['pmdf', 'policia penal mg'],
},

{
    id: 'const-17',
        text: 'À Polícia Federal compete:',
            options: buildOptions([
                ['a', 'Policiamento ostensivo e preservação da ordem pública.'],
                ['b', 'Apurar infrações penais contra a ordem política e social ou em detrimento de bens, serviços e interesses da União.'],
                ['c', 'Policiamento de trânsito urbano.'],
                ['d', 'Defesa civil.'],
                ['e', 'Apenas segurança de autoridades.'],
            ]),
                correctId: 'b',
                    explanation:
    'Art. 144, §1º, I: à PF compete apurar infrações contra ordem política/social ou em detrimento da União, suas entidades autárquicas e empresas públicas.',
        exams: ['pmdf'],
},

{
    id: 'const-18',
        text: 'Às Polícias Militares cabem:',
            options: buildOptions([
                ['a', 'Investigação de crimes dolosos contra a vida.'],
                ['b', 'Polícia judiciária militar.'],
                ['c', 'Policiamento ostensivo e preservação da ordem pública.'],
                ['d', 'Aplicação de penas.'],
                ['e', 'Julgamento de crimes militares.'],
            ]),
                correctId: 'c',
                    explanation:
    'Art. 144, §5º: às PM cabem a polícia ostensiva e preservação da ordem pública; aos bombeiros, proteção de pessoas e bens.',
        exams: ['pmdf'],
},

{
    id: 'const-19',
        text: 'À Polícia Civil compete:',
            options: buildOptions([
                ['a', 'Policiamento ostensivo.'],
                ['b', 'Defesa civil.'],
                ['c', 'Funções de polícia judiciária e apuração de infrações penais, exceto as militares.'],
                ['d', 'Segurança de autoridades.'],
                ['e', 'Apenas crimes federais.'],
            ]),
                correctId: 'c',
                    explanation:
    'Art. 144, §4º: às PC, dirigidas por delegados de carreira, incumbem as funções de polícia judiciária e apuração de infrações penais, EXCETO as militares.',
        exams: ['pmdf', 'policia penal mg'],
},

{
    id: 'const-20',
        text: 'As polícias penais são:',
            options: buildOptions([
                ['a', 'Vinculadas ao Poder Judiciário.'],
                ['b', 'Subordinadas ao Ministério Público.'],
                ['c', 'Responsáveis pela segurança dos estabelecimentos penais (EC 104/2019).'],
                ['d', 'Responsáveis apenas por escoltas.'],
                ['e', 'Inexistentes na CF.'],
            ]),
                correctId: 'c',
                    explanation:
    'Art. 144, §1º-A (EC 104/2019): polícias penais, federal, estaduais e distrital, são responsáveis pela segurança dos estabelecimentos penais.',
        exams: ['policia penal mg'],
},

// ORGANIZAÇÃO DO ESTADO
{
    id: 'const-21',
        text: 'A forma de Estado adotada pelo Brasil é:',
            options: buildOptions([
                ['a', 'Estado Unitário.'],
                ['b', 'Federação.'],
                ['c', 'Confederação.'],
                ['d', 'Estado Regional.'],
                ['e', 'Monarquia Constitucional.'],
            ]),
                correctId: 'b',
                    explanation:
    'Art. 1º e 18 da CF: o Brasil é uma República Federativa (forma de Estado é FEDERAÇÃO).',
        exams: ['camara dos deputados'],
},

{
    id: 'const-22',
        text: 'A forma de governo do Brasil é:',
            options: buildOptions([
                ['a', 'Monarquia.'],
                ['b', 'República.'],
                ['c', 'Parlamentarismo.'],
                ['d', 'Anarquia.'],
                ['e', 'Ditadura.'],
            ]),
                correctId: 'b',
                    explanation:
    'Art. 1º: a República Federativa do Brasil... Forma de governo é REPÚBLICA (eletividade, temporariedade, responsabilidade).',
        exams: ['camara dos deputados'],
},

{
    id: 'const-23',
        text: 'O sistema de governo adotado no Brasil é:',
            options: buildOptions([
                ['a', 'Parlamentarismo.'],
                ['b', 'Presidencialismo.'],
                ['c', 'Semipresidencialismo.'],
                ['d', 'Monarquia Parlamentar.'],
                ['e', 'Governo Misto.'],
            ]),
                correctId: 'b',
                    explanation:
    'Após plebiscito de 1993, o Brasil confirmou o sistema PRESIDENCIALISTA (Presidente acumula Chefe de Estado e Chefe de Governo).',
        exams: ['camara dos deputados'],
},

{
    id: 'const-24',
        text: 'São entes federativos autônomos:',
            options: buildOptions([
                ['a', 'União, Estados, Distrito Federal e Municípios.'],
                ['b', 'Apenas União e Estados.'],
                ['c', 'União, Estados e Territórios.'],
                ['d', 'União e Distrito Federal.'],
                ['e', 'Apenas a União.'],
            ]),
                correctId: 'a',
                    explanation:
    'Art. 18: a organização político-administrativa compreende União, Estados, DF e Municípios, todos AUTÔNOMOS.',
        exams: ['camara dos deputados'],
},

{
    id: 'const-25',
        text: 'É vedado aos entes federativos:',
            options: buildOptions([
                ['a', 'Criar impostos.'],
                ['b', 'Recusar fé aos documentos públicos.'],
                ['c', 'Legislar.'],
                ['d', 'Administrar seus serviços.'],
                ['e', 'Celebrar convênios.'],
            ]),
                correctId: 'b',
                    explanation:
    'Art. 19, IV: é vedado recusar fé aos documentos públicos (princípio da fé pública).',
        exams: ['camara dos deputados'],
},

// FIM DO MÓDULO CONSTITUCIONAL
