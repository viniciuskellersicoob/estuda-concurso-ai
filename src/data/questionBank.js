const QUESTION_BANK = {};

const slugify = (value = '') =>
    value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9 ]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

// Se a questão não declarar `exams`, ela fica disponível apenas no modo "Geral" (sem filtro por concurso).
const DEFAULT_EXAMS = ['geral'];

const buildOptions = (options) => options.map(([id, text]) => ({ id, text }));

const ensureOptionExplanations = (question) => {
    const explanations = { ...(question.optionExplanations || {}) };
    question.options.forEach((option) => {
        if (!explanations[option.id]) {
            explanations[option.id] =
                option.id === question.correctId
                    ? question.explanation
                    : `Incorreto: essa alternativa conflita com a regra destacada na explicacao principal (${question.explanation}).`;
        }
    });
    return explanations;
};

const enhanceQuestion = (question, slug, index) => {
    const examSlugs = (question.exams && question.exams.length ? question.exams : DEFAULT_EXAMS).map(
        (examName) => slugify(examName) || 'geral'
    );
    return {
        ...question,
        id: question.id || `${slug}-${index + 1}`,
        examSlugs,
        // Só exibe "comentários por alternativa" quando o autor forneceu feedback (evita texto genérico em massa).
        optionExplanations: question.optionExplanations ? ensureOptionExplanations(question) : null,
    };
};

function registerQuestions(aliases, questions) {
    aliases.forEach((alias) => {
        const slug = slugify(alias) || 'geral';
        const existing = QUESTION_BANK[slug] || [];
        const enhanced = questions.map((question, index) => enhanceQuestion(question, slug, existing.length + index));
        const merged = [...existing, ...enhanced];
        const deduped = [];
        const seenIds = new Set();
        for (const q of merged) {
            if (seenIds.has(q.id)) continue;
            seenIds.add(q.id);
            deduped.push(q);
        }
        QUESTION_BANK[slug] = deduped;
    });
}

const withFeedback = (question, optionFeedback) => ({
    ...question,
    optionExplanations: optionFeedback,
});

registerQuestions(['Lingua Portuguesa', 'Língua Portuguesa'], [
    withFeedback(
        {
            id: 'lp-1',
            text: 'Assinale a frase que respeita as normas de regencia e concordancia.',
            options: buildOptions([
                ['a', 'Assistimos o filme que estreou ontem.'],
                ['b', 'Prefiro mais estudar do que ler.'],
                ['c', 'Obedeceram às ordens prontamente.'],
                ['d', 'Informaram a diretora que os alunos chegou.'],
                ['e', 'Houveram diversos incidentes naquele dia.'],
            ]),
            correctId: 'c',
            explanation:
                'O verbo obedecer exige preposicao a. As demais opcoes trazem erros de regencia ou concordancia.',
        },
        {
            a: 'Errado: o verbo assistir, no sentido de ver, exige preposicao: assistimos ao filme.',
            b: 'Errado: preferir ja implica comparacao: prefiro estudar a ler.',
            c: 'Correta: ha preposicao em "às ordens" e concordancia adequada.',
            d: 'Errado: falta concordancia e ha problema de regencia em "informaram a diretora".',
            e: 'Errado: o verbo haver impessoal nao vai ao plural.',
        }
    ),
    withFeedback(
        {
            id: 'lp-2',
            text: 'No periodo "Embora estivesse cansado, continuou estudando", a oracao subordinada exerce funcao de:',
            options: buildOptions([
                ['a', 'Causal.'],
                ['b', 'Condicional.'],
                ['c', 'Final.'],
                ['d', 'Concessiva.'],
                ['e', 'Proporcional.'],
            ]),
            correctId: 'd',
            explanation:
                'A conjuncao "embora" introduz oracao subordinada concessiva, mostrando oposicao a ideia principal.',
        },
        {
            a: 'Errado: nao ha ideia de causa.',
            b: 'Errado: nao se trata de condicao.',
            c: 'Errado: a oracao nao indica finalidade.',
            d: 'Correta: "embora" introduz oposicao entre as ideias.',
            e: 'Errado: nao ha proporcionalidade nessa construcao.',
        }
    ),
    withFeedback(
        {
            id: 'lp-3',
            exams: ['camara dos deputados'],
            text: 'Texto adaptado (FGV/2022): "Com o teletrabalho, setores publicos passaram a medir entregas por resultados e nao por horas conectadas. Ainda assim, algumas chefias solicitam capturas de tela periodicas." Qual inferencia e coerente com o trecho?',
            options: buildOptions([
                ['a', 'O autor defende fiscalizacao constante das telas para manter a produtividade.'],
                ['b', 'O teletrabalho elimina a necessidade de avaliar desempenho.'],
                ['c', 'A avaliacao por entregas e mais logica do que vigiar conexoes.'],
                ['d', 'Os servidores rejeitam a autonomia do teletrabalho.'],
                ['e', 'Teletrabalho significa ausencia de metas e prazos.'],
            ]),
            correctId: 'c',
            explanation:
                'O texto contrasta o controle por presenca virtual com a avaliacao por resultados, indicando preferencia pela segunda alternativa.',
        },
        {
            a: 'Errado: o texto critica a vigilia formal das conexoes.',
            b: 'Errado: o trecho reforca que desempenho continua sendo medido.',
            c: 'Correta: a melhor pratica descrita e acompanhar entregas.',
            d: 'Errado: nao ha mencao a resistencia dos servidores.',
            e: 'Errado: metas continuam necessarias mesmo em regime remoto.',
        }
    ),
    withFeedback(
        {
            id: 'lp-4',
            exams: ['policia penal mg', 'pmdf'],
            text: 'Em qual alternativa o "se" funciona como indice de indeterminacao do sujeito?',
            options: buildOptions([
                ['a', 'Precisa-se de agentes para as novas unidades.'],
                ['b', 'Vendem-se apartamentos no centro administrativo.'],
                ['c', 'Feriu-se durante o teste de aptidao fisica.'],
                ['d', 'Cumpre-se integralmente o regulamento.'],
                ['e', 'Percebe-se o compromisso dos veteranos.'],
            ]),
            correctId: 'a',
            explanation:
                'O indice de indeterminacao ocorre com verbos intransitivos ou transitivos indiretos; "precisa-se de agentes" enquadra-se nessa regra.',
        },
        {
            a: 'Correta: verbo transitivo indireto com "se" indetermina o sujeito.',
            b: 'Errado: ha sujeito expresso ("apartamentos").',
            c: 'Errado: trata-se de pronome reflexivo.',
            d: 'Errado: o verbo transitivo direto admite particula apassivadora.',
            e: 'Errado: a estrutura apresenta sujeito determinado.',
        }
    ),
    withFeedback(
        {
            id: 'lp-5',
            exams: ['camara dos deputados'],
            text: 'Um diretor da Camara enviara oficio a um Ministro de Estado solicitando apoio logistico. Segundo o Manual de Redacao oficial, qual combinacao de vocativo e fecho esta correta?',
            options: buildOptions([
                ['a', 'Senhor Ministro, Atenciosamente.'],
                ['b', 'Excelentissimo Senhor Ministro de Estado, Respeitosamente.'],
                ['c', 'Carissimo Ministro, Abracos cordiais.'],
                ['d', 'Vossa Senhoria Ministro, Cordialmente.'],
                ['e', 'Ilustrissimo Senhor Ministro, Saudacoes respeitosas.'],
            ]),
            correctId: 'b',
            explanation:
                'Autoridades superiores recebem o tratamento "Excelentissimo Senhor Ministro de Estado" e o fecho "Respeitosamente".',
        },
        {
            a: 'Errado: falta o tratamento devido a autoridade superior.',
            b: 'Correta: corresponde ao modelo aplicado a ministros.',
            c: 'Errado: termos coloquiais fogem ao padrao oficial.',
            d: 'Errado: ministros nao sao tratados por Vossa Senhoria.',
            e: 'Errado: "Ilustrissimo" destina-se a autoridades de menor hierarquia.',
        }
    ),
    withFeedback(
        {
            id: 'lp-6',
            exams: ['policia penal mg', 'pmdf'],
            text: 'Assinale a alternativa em que a colocacao pronominal atende às normas cultas.',
            options: buildOptions([
                ['a', 'Me disseram que o edital sairia em breve.'],
                ['b', 'Entrevistaram-me ontem sobre o concurso.'],
                ['c', 'Nos precisamos nos dedicar mais.'],
                ['d', 'Sejamos sinceros: se aprova estudando.'],
                ['e', 'Nao se deve-se revisar apenas uma vez.'],
            ]),
            correctId: 'b',
            explanation:
                'Com verbo no pretérito perfeito iniciado por palavra sem atrativo, a enclise é obrigatoria: Entrevistaram-me.',
        },
        {
            a: 'Errado: pronome atono nao inicia frase sem atrativo.',
            b: 'Correta: enclise apos verbo no pretérito perfeito é a forma culta.',
            c: 'Errado: ha repeticao indevida do pronome.',
            d: 'Errado: "aprova-se" exigiria verbo na forma pronominal.',
            e: 'Errado: duplicaçao de "se".',
        }
    ),
    withFeedback(
        {
            id: 'lp-7',
            exams: ['camara dos deputados'],
            text: 'Em redacao oficial, qual alternativa mantem o padrao de impessoalidade e correcao?',
            options: buildOptions([
                ['a', 'Informo-te que liberamos a verba requisitada.'],
                ['b', 'Comuniquei a todos que nos concluimos o processo.'],
                ['c', 'Informa-se que o processo SEI n 1234/2025 foi encaminhado à analise juridica.'],
                ['d', 'Peco desculpas pessoais pelo atraso desta nota tecnica.'],
                ['e', 'Fico feliz em dizer que aprovamos o projeto.'],
            ]),
            correctId: 'c',
            explanation:
                'Redacoes oficiais usam construcoes impessoais; a alternativa C conserva a formalidade exigida.',
        },
        {
            a: 'Errado: tratamento na segunda pessoa quebra o padrao.',
            b: 'Errado: uso desnecessario de "nos" compromete impessoalidade.',
            c: 'Correta: estrutura impessoal e objetiva.',
            d: 'Errado: manifestacoes pessoais devem ser evitadas.',
            e: 'Errado: tom subjetivo foge ao padrao oficial.',
        }
    ),
    withFeedback(
        {
            id: 'lp-8',
            text: 'No trecho "O candidato revisou atento cada paragrafo, pois sabia que uma virgula poderia comprometer o argumento", a palavra "pois" equivale a:',
            options: buildOptions([
                ['a', 'Conjuncao adversativa.'],
                ['b', 'Conjuncao explicativa, podendo ser substituida por "porque".'],
                ['c', 'Conjuncao consecutiva.'],
                ['d', 'Conjuncao condicional.'],
                ['e', 'Adverbio de modo.'],
            ]),
            correctId: 'b',
            explanation:
                '"Pois" em posicao medial liga duas oracoes indicando explicacao/motivo, assim como "porque".',
        },
        {
            a: 'Errado: nao ha oposicao entre ideias.',
            b: 'Correta: o periodo justifica a acao anterior.',
            c: 'Errado: nao expressa consequencia.',
            d: 'Errado: nao ha hipotese.',
            e: 'Errado: trata-se de conjuncao.',
        }
    ),
    withFeedback(
        {
            id: 'lp-9',
            text: 'Em qual alternativa o uso da crase esta correto conforme o padrao oficial?',
            options: buildOptions([
                ['a', 'Dirigi-me a aquele servidor para solicitar informacao.'],
                ['b', 'Comparecemos à audiencia publica convocada pela Mesa.'],
                ['c', 'O relatorio foi entregue à todos os chefes.'],
                ['d', 'Enviei o oficio à Vossa Senhoria.'],
                ['e', 'Encaminhou-se copia à ela sem registro.'],
            ]),
            correctId: 'b',
            explanation:
                'A crase ocorre na combinacao da preposicao a com o artigo feminino; audiencia publica determinada exige o acento.',
        },
        {
            a: 'Errado: o correto seria "àquele".',
            b: 'Correta: ha artigo feminino diante de "audiencia".',
            c: 'Errado: pronomes indefinidos como "todos" nao admitem artigo.',
            d: 'Errado: tratamentos iniciados por Vossa nao recebem artigo.',
            e: 'Errado: pronomes pessoais nao admitem crase.',
        }
    ),
    withFeedback(
        {
            id: 'lp-10',
            text: 'Assinale a frase cuja pontuacao atende às normas da lingua escrita formal.',
            options: buildOptions([
                ['a', 'Os deputados analisaram, e aprovaram o parecer.'],
                ['b', 'Caso surjam duvidas, encaminhe-as imediatamente ao relator.'],
                ['c', 'O servidor explicou: que ja havia cumprido a diligencia.'],
                ['d', 'As emendas foram, entretanto acolhidas sem resistencia.'],
                ['e', 'Esperamos, voces concluirem o estudo.'],
            ]),
            correctId: 'b',
            explanation:
                'Oracoes adverbiais antepostas devem ser separadas por virgula; a alternativa B traz a pontuacao adequada.',
        },
        {
            a: 'Errado: virgula antes de conjuncao coordenativa e indevida.',
            b: 'Correta: a virgula marca a oracao condicional deslocada.',
            c: 'Errado: o dois-pontos nao separa verbo e complemento.',
            d: 'Errado: "entretanto" deve ficar isolado por duas virgulas.',
            e: 'Errado: o sujeito nao pode ser separado do verbo por virgula.',
        }
    ),
    withFeedback(
        {
            id: 'lp-11',
            text: 'Trecho: "Para reduzir retrabalho, o setor determinou que toda demanda seja registrada no SEI antes de qualquer despacho. Assim, pedidos telefonicos voltam sem analise." Qual inferencia esta coerente com o trecho?',
            options: buildOptions([
                ['a', 'A unidade proibiu o uso do SEI.'],
                ['b', 'Os telefonemas dispensam formalizacao porque agilizam o fluxo.'],
                ['c', 'A formalizacao previa e requisito para iniciar a analise.'],
                ['d', 'Demandas telefonicas receberam prioridade absoluta.'],
                ['e', 'Nenhuma demanda precisa ser registrada.'],
            ]),
            correctId: 'c',
            explanation:
                'O texto afirma que so apos o registro as demandas seguem para despacho; pedidos sem formalizacao retornam.',
        },
        {
            a: 'Errado: o setor reforca o uso do SEI.',
            b: 'Errado: pedidos apenas telefonicos sao devolvidos.',
            c: 'Correta: o registro e condicao para dar andamento.',
            d: 'Errado: telefonemas sem registro sao recusados.',
            e: 'Errado: toda demanda precisa ser registrada.',
        }
    ),
    withFeedback(
        {
            id: 'lp-12',
            exams: ['camara dos deputados'],
            text: 'Qual reescrita elimina a redundancia de "Os servidores planejaram antecipadamente o cronograma" mantendo o sentido e o tom formal?',
            options: buildOptions([
                ['a', 'Os servidores planejaram previamente o cronograma.'],
                ['b', 'Os servidores improvisaram o cronograma na hora.'],
                ['c', 'Os servidores elaboraram o cronograma com antecedencia.'],
                ['d', 'Os servidores fizeram o cronograma depois da execucao.'],
                ['e', 'Os servidores planejaram o cronograma sem prazo.'],
            ]),
            correctId: 'c',
            explanation:
                'O verbo planejar ja implica acao antecipada; a reescrita substitui por "elaboraram" e explicita "com antecedencia", removendo a redundancia.',
        },
        {
            a: 'Errado: mantem a redundancia entre planejar e previamente.',
            b: 'Errado: altera o sentido ao mencionar improviso.',
            c: 'Correta: preserva a ideia de preparacao anterior sem redundancia.',
            d: 'Errado: inverte o sentido temporal.',
            e: 'Errado: gera contradicao com a nocao de planejamento.',
        }
    ),
]);

// =====================================================
// RACIOCINIO LOGICO-MATEMATICO
// =====================================================
registerQuestions(['Raciocinio Logico', 'Matematica e Raciocinio Logico', 'Raciocinio Logico-Matematico'], [
    {
        id: 'rl-1',
        text: 'Considere P: "O parecer foi homologado" e Q: "O contrato e assinado". Em qual cenario a condicional P -> Q e falsa?',
        options: buildOptions([
            ['a', 'P falsa e Q verdadeira.'],
            ['b', 'P falsa e Q falsa.'],
            ['c', 'P verdadeira e Q falsa.'],
            ['d', 'P verdadeira e Q verdadeira.'],
            ['e', 'Qualquer caso em que Q seja verdadeira.'],
        ]),
        correctId: 'c',
        explanation: 'A proposicao condicional so e falsa quando o antecedente e verdadeiro e o consequente falso, isto e, Q nao ocorreu apesar de P ter ocorrido.',
    },
    {
        id: 'rl-2',
        text: 'A negacao correta de "Todos os processos foram revisados e nenhuma pendencia permaneceu" e:',
        options: buildOptions([
            ['a', 'Nenhum processo foi revisado e nenhuma pendencia permaneceu.'],
            ['b', 'Algum processo nao foi revisado ou alguma pendencia permaneceu.'],
            ['c', 'Algum processo foi revisado e alguma pendencia permaneceu.'],
            ['d', 'Nenhum processo foi revisado ou nenhuma pendencia permaneceu.'],
            ['e', 'Todos os processos foram revisados ou todas as pendencias permaneceram.'],
        ]),
        correctId: 'b',
        explanation: 'Nega-se uma conjuncao universal invertendo quantificador e trocando E por OU: pelo menos um processo escapou da revisao ou restou pendencia.',
    },
    {
        id: 'rl-3',
        text: 'A proposicao "Se o laudo nao estiver assinado, entao o recurso nao sera conhecido" tem contrapositiva equivalente a:',
        options: buildOptions([
            ['a', 'Se o recurso for conhecido, entao o laudo estava assinado.'],
            ['b', 'Se o laudo estiver assinado, o recurso nao sera conhecido.'],
            ['c', 'Se o recurso nao for conhecido, o laudo esta assinado.'],
            ['d', 'O recurso so sera conhecido se o laudo estiver assinado.'],
            ['e', 'O laudo assinado e condicao suficiente para conhecimento.'],
        ]),
        correctId: 'a',
        explanation: 'A contrapositiva troca antecedente e consequente e nega ambos: (nao A -> nao B) equivale a (B -> A).',
    },
    {
        id: 'rl-4',
        text: 'Oito servidores digitalizam 400 prontuarios em cinco dias. Para produzir 640 prontuarios em quatro dias, quantos servidores com o mesmo rendimento sao necessarios?',
        options: buildOptions([
            ['a', '10'],
            ['b', '12'],
            ['c', '14'],
            ['d', '16'],
            ['e', '20'],
        ]),
        correctId: 'd',
        explanation: 'A quantidade de trabalho e proporcional ao produto servidores x dias. Logo S2 = (8 * 5 * 640) / (4 * 400) = 16 servidores.',
    },
    {
        id: 'rl-5',
        text: 'Uma caixa possui 4 processos regulares e 3 com pendencia. Retiram-se dois processos sem reposicao. Qual a probabilidade de ambos apresentarem pendencia?',
        options: buildOptions([
            ['a', '1/21'],
            ['b', '1/14'],
            ['c', '1/7'],
            ['d', '3/7'],
            ['e', '9/14'],
        ]),
        correctId: 'c',
        explanation: 'Escolher 2 com pendencia entre 3: C(3,2)=3. Total de pares = C(7,2)=21. Probabilidade = 3/21 = 1/7.',
    },
    {
        id: 'rl-6',
        text: 'A sequencia 2, 5, 11, 23, ... segue a regra "multiplicar por 2 e somar 1". Qual sera o proximo termo?',
        options: buildOptions([
            ['a', '33'],
            ['b', '35'],
            ['c', '45'],
            ['d', '47'],
            ['e', '55'],
        ]),
        correctId: 'd',
        explanation: 'Aplicando a regra: 23 * 2 + 1 = 47.',
    },
    {
        id: 'rl-7',
        text: 'Uma escala diaria exige designar comandante, motorista e radio-operador distintos escolhidos entre 6 policiais. Quantas combinacoes possiveis existem?',
        options: buildOptions([
            ['a', '36'],
            ['b', '60'],
            ['c', '90'],
            ['d', '120'],
            ['e', '360'],
        ]),
        correctId: 'd',
        explanation: 'Ha arranjo simples A(6,3) = 6 * 5 * 4 = 120 combinacoes com funcoes distintas.',
    },
]);

// =====================================================
// NOCOES DE INFORMATICA
// =====================================================
registerQuestions(['Nocoes de Informatica', 'Informatica'], [
    {
        id: 'info-1',
        exams: ['camara dos deputados'],
        text: 'Em planilhas Excel/Calc, qual funcao retorna valores de uma tabela vertical utilizando chave de busca na primeira coluna?',
        options: buildOptions([
            ['a', 'SOMASE'],
            ['b', 'DESLOC'],
            ['c', 'PROCV'],
            ['d', 'CORRESP'],
            ['e', 'CONT.SE'],
        ]),
        correctId: 'c',
        explanation: 'PROCV procura um valor na primeira coluna e devolve o conteudo da coluna indicada na mesma linha.',
    },
    {
        id: 'info-2',
        exams: ['camara dos deputados'],
        text: 'No Microsoft Word, o recurso "Estilos" permite:',
        options: buildOptions([
            ['a', 'Aplicar formatacao consistente a titulos e paragrafos com um clique.'],
            ['b', 'Executar macros gravadas em VBA.'],
            ['c', 'Compartilhar documentos automaticamente na nuvem.'],
            ['d', 'Converter texto em colunas de planilha.'],
            ['e', 'Apagar comentarios de revisores.'],
        ]),
        correctId: 'a',
        explanation: 'Estilos armazenam conjuntos padronizados de fonte, tamanho e espaco, facilitando a formatacao uniforme de documentos oficiais.',
    },
    {
        id: 'info-3',
        text: 'Em sistemas Windows 10/11, qual painel exibe processos ativos, uso de CPU e permite finalizar tarefas travadas?',
        options: buildOptions([
            ['a', 'Painel de Controle'],
            ['b', 'Monitor de Confianca'],
            ['c', 'Gerenciador de Tarefas'],
            ['d', 'PowerShell'],
            ['e', 'Editor do Registro'],
        ]),
        correctId: 'c',
        explanation: 'O Gerenciador de Tarefas centraliza o monitoramento de desempenho e a finalizacao de aplicativos sem resposta.',
    },
    {
        id: 'info-4',
        text: 'Em redes corporativas, o protocolo HTTPS adiciona qual camada de seguranca em relacao ao HTTP?',
        options: buildOptions([
            ['a', 'Apenas compressao de dados.'],
            ['b', 'Criptografia TLS/SSL do canal de comunicacao.'],
            ['c', 'Envio automatico de backups.'],
            ['d', 'Prioridade de banda para video.'],
            ['e', 'Bloqueio de scripts em paginas.'],
        ]),
        correctId: 'b',
        explanation: 'HTTPS encapsula o trafego HTTP dentro de conexoes TLS/SSL, garantindo confidencialidade e autenticidade.',
    },
    {
        id: 'info-5',
        text: 'Qual recurso nativo do Windows 10/11 permite criptografar unidades inteiras para proteger dados sigilosos?',
        options: buildOptions([
            ['a', 'Desfragmentador de Disco.'],
            ['b', 'Restauracao do Sistema.'],
            ['c', 'BitLocker.'],
            ['d', 'Prompt de Comando.'],
            ['e', 'Gerenciador de Tarefas.'],
        ]),
        correctId: 'c',
        explanation: 'O BitLocker aplica criptografia de volume e exige autenticacao para liberar o conteudo do disco.',
    },
    {
        id: 'info-6',
        text: 'Sobre protocolos de e-mail, assinale a afirmativa correta.',
        options: buildOptions([
            ['a', 'POP3 mantem as mensagens apenas no servidor.'],
            ['b', 'IMAP permite sincronizacao com multiplos dispositivos mantendo mensagens no servidor.'],
            ['c', 'SMTP e usado para leitura de mensagens.'],
            ['d', 'HTTP substituiu integralmente POP e IMAP.'],
            ['e', 'IMAP exige apagar mensagens locais para enviar e-mails.'],
        ]),
        correctId: 'b',
        explanation: 'IMAP foi concebido para sincronizar pastas remotas e locais, permitindo acesso simultaneo em varios dispositivos.',
    },
    {
        id: 'info-7',
        text: 'Segundo a LGPD, qual principio deve orientar a coleta de dados pessoais em sistemas governamentais?',
        options: buildOptions([
            ['a', 'Manter bancos com qualquer dado disponivel para usos futuros indeterminados.'],
            ['b', 'Coletar apenas dados adequados, pertinentes e limitados a finalidade declarada.'],
            ['c', 'Compartilhar automaticamente com parceiros privados.'],
            ['d', 'Pressupor consentimento tacito em todo tratamento.'],
            ['e', 'Excluir registros sempre que houver solicitacao informal.'],
        ]),
        correctId: 'b',
        explanation: 'O principio da necessidade/minimizacao impõe que apenas dados indispensaveis ao proposito informado sejam coletados.',
    },
]);

// =====================================================
// ETICA NO SERVICO PUBLICO
// =====================================================
registerQuestions(['Etica no Servico Publico', 'Etica'], [
    {
        id: 'etica-1',
        text: 'O Codigo de Etica do Servidor Federal (Dec. 1171/1994) determina que o agente publico deve priorizar:',
        options: buildOptions([
            ['a', 'Conveniencias pessoais e de seus superiores imediatos.'],
            ['b', 'O interesse publico, com cortesia e lealdade institucional.'],
            ['c', 'Somente a letra fria da lei, sem dialogo com o cidadao.'],
            ['d', 'A rapidez mesmo que sem transparencia.'],
            ['e', 'Acoes promocionais para valorizar a imagem individual.'],
        ]),
        correctId: 'b',
        explanation: 'O codigo enfatiza supremacia do interesse publico, trato cortes e transparencia como pilares da conduta etica.',
    },
    {
        id: 'etica-2',
        text: 'Configura conflito de interesses, nos termos da Lei 12.813/2013:',
        options: buildOptions([
            ['a', 'Participar de curso custeado pelo orgao.'],
            ['b', 'Exercer atividade privada que guarde relacao com sua area, sem comunicacao previa.'],
            ['c', 'Informar relatorio tecnico em que atuou diretamente.'],
            ['d', 'Recusar-se a revelar informacoes sigilosas apos deixar o cargo.'],
            ['e', 'Comunicar impedimento por motivo de foro intimo.'],
        ]),
        correctId: 'b',
        explanation: 'A lei exige previa autorizacao para atividade privada relacionada ao cargo a fim de evitar vantagem indevida.',
    },
    {
        id: 'etica-3',
        text: 'Segundo o Codigo de Etica, como o servidor deve agir ao receber presente de valor significativo?',
        options: buildOptions([
            ['a', 'Aceitar e declarar apenas se o doador solicitar recibo.'],
            ['b', 'Recusar ou, se impossivel devolver, entregar o bem ao patrimonio publico.'],
            ['c', 'Aceitar e dividir com a equipe.'],
            ['d', 'Aceitar desde que relacionado ao aniversario.'],
            ['e', 'Aceitar e registrar em agenda pessoal.'],
        ]),
        correctId: 'b',
        explanation: 'Presentes devem ser recusados; se nao houver como, encaminham-se ao patrimonio para evitar favorecimento.',
    },
    {
        id: 'etica-4',
        text: 'Sobre nepotismo segundo Sumula Vinculante 13, e vedado:',
        options: buildOptions([
            ['a', 'Contratar empresa em que o servidor seja socio minoritario.'],
            ['b', 'Nomear conjuge ou parente ate terceiro grau para cargo em comissao na mesma esfera administrativa.'],
            ['c', 'Designar servidor efetivo para funcao gratificada.'],
            ['d', 'Nomear especialista externo em situacao temporaria.'],
            ['e', 'Remover servidor para unidade diversa.'],
        ]),
        correctId: 'b',
        explanation: 'A Sumula 13 veda nomeacao de parentes ate o terceiro grau para cargos comissionados na mesma unidade federativa.',
    },
    {
        id: 'etica-5',
        text: 'Os programas de integridade recomendados pela CGU buscam:',
        options: buildOptions([
            ['a', 'Substituir os codigos de etica existentes.'],
            ['b', 'Estruturar mecanismos de prevencao, deteccao e remediacao de desvios.'],
            ['c', 'Exigir juramento anual dos servidores.'],
            ['d', 'Delegar a etica ao setor de comunicacao.'],
            ['e', 'Reduzir a participacao social.'],
        ]),
        correctId: 'b',
        explanation: 'Integridade envolve padroes claros, canais de denuncia, treinamento e resposta rapida a violacoes.',
    },
]);

// =====================================================
// DIREITO CONSTITUCIONAL
// =====================================================
registerQuestions(['Direito Constitucional'], [
    {
        id: 'const-1',
        text: 'Quais sao fundamentos da Republica Federativa do Brasil segundo o art. 1 da CF?',
        options: buildOptions([
            ['a', 'Soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, e pluralismo politico.'],
            ['b', 'Ordem, progresso, probidade e moralidade.'],
            ['c', 'Soberania, independencia nacional e desenvolvimento.'],
            ['d', 'Direitos sociais, educacao e seguranca.'],
            ['e', 'Moralidade, publicidade e eficiencia.'],
        ]),
        correctId: 'a',
        explanation: 'O art. 1 enumera os cinco fundamentos conhecidos pelo mnemônico SO-CI-DI-VA-PLU.',
    },
    {
        id: 'const-2',
        text: 'Todo poder emana do povo, que o exerce:',
        options: buildOptions([
            ['a', 'Apenas por meio de representantes eleitos.'],
            ['b', 'Por representantes eleitos ou diretamente, nos termos da Constituicao.'],
            ['c', 'Somente mediante plebiscitos anuais.'],
            ['d', 'Exclusivamente pelo Poder Executivo.'],
            ['e', 'Por meio de conselhos comunitarios.'],
        ]),
        correctId: 'b',
        explanation: 'O art. 1 paragrafo unico consagra democracia semidireta com mecanismos representativos e participativos.',
    },
    {
        id: 'const-3',
        text: 'Sobre os direitos fundamentais, assinale a afirmativa correta.',
        options: buildOptions([
            ['a', 'Sao absolutos e ilimitados.'],
            ['b', 'Nao vinculam particulares.'],
            ['c', 'Sao relativos e podem sofrer restricoes legais proporcionais.'],
            ['d', 'Nao se aplicam a estrangeiros residentes.'],
            ['e', 'Somente protegem brasileiros natos.'],
        ]),
        correctId: 'c',
        explanation: 'Direitos fundamentais admitem limitacoes razoaveis para harmonizar interesses coletivos, preservando o nucleo essencial.',
    },
    {
        id: 'const-4',
        text: 'O habeas corpus destina-se a proteger:',
        options: buildOptions([
            ['a', 'Qualquer direito liquido e certo.'],
            ['b', 'Direito de acesso a informacoes pessoais.'],
            ['c', 'Liberdade de locomocao ameacada por ilegalidade ou abuso de poder.'],
            ['d', 'Acesso a registros publicos de terceiros.'],
            ['e', 'Direito a nomeacao em concurso.'],
        ]),
        correctId: 'c',
        explanation: 'Remedio constitucional exclusivo para tutelar ir e vir.',
    },
    {
        id: 'const-5',
        text: 'A pena de morte no Brasil e admitida:',
        options: buildOptions([
            ['a', 'Em crimes hediondos.'],
            ['b', 'Em caso de guerra declarada, nos termos do art. 84 XIX.'],
            ['c', 'Para trafico de drogas.'],
            ['d', 'Para traicao em tempo de paz.'],
            ['e', 'Nunca.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 5 XLVII permite pena de morte apenas em guerra declarada.',
    },
    {
        id: 'const-6',
        text: 'A casa e asilo inviolavel, nao podendo nela penetrar sem consentimento, salvo:',
        options: buildOptions([
            ['a', 'Durante o dia, com mandado judicial.'],
            ['b', 'Durante a noite para prestar socorro.'],
            ['c', 'Em qualquer horario para inspeção administrativa.'],
            ['d', 'Durante o dia por ordem do delegado.'],
            ['e', 'Para fiscalizacao tributaria noturna.'],
        ]),
        correctId: 'b',
        explanation: 'A CF admite ingresso sem mandado em flagrante, desastre ou socorro, inclusive a noite.',
    },
    {
        id: 'const-7',
        text: 'Sao principios expressos da administracao publica (art. 37 caput):',
        options: buildOptions([
            ['a', 'Legalidade, impessoalidade, moralidade, publicidade e eficiencia.'],
            ['b', 'Supremacia, indisponibilidade e continuidade apenas.'],
            ['c', 'Finalidade, razoabilidade e motivacao.'],
            ['d', 'Seguranca juridica e proporcionalidade.'],
            ['e', 'Probidade, tempestividade e igualdade.'],
        ]),
        correctId: 'a',
        explanation: 'O mnemônico LIMPE sintetiza os principios constitucionais explicitos.',
    },
    {
        id: 'const-8',
        text: 'O prazo de validade do concurso publico sera de ate:',
        options: buildOptions([
            ['a', '12 meses, prorrogavel indefinidamente.'],
            ['b', '2 anos, prorrogavel uma vez por igual periodo.'],
            ['c', '3 anos, improrrogavel.'],
            ['d', '4 anos, prorrogavel duas vezes.'],
            ['e', '5 anos, irrestrito.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 37 III fixa ate dois anos, prorrogavel uma unica vez por igual periodo.',
    },
    {
        id: 'const-9',
        text: 'Segundo o art. 144 da CF, a seguranca publica e:',
        options: buildOptions([
            ['a', 'Dever exclusivo do Estado.'],
            ['b', 'Dever do Estado e responsabilidade de todos.'],
            ['c', 'Competencia exclusiva dos municipios.'],
            ['d', 'Atividade privada.'],
            ['e', 'Apenas obrigacao das Forcas Armadas.'],
        ]),
        correctId: 'b',
        explanation: 'O caput afirma que e dever do Estado, direito e responsabilidade de todos.',
    },
    {
        id: 'const-10',
        text: 'Compete as Policias Militares:',
        options: buildOptions([
            ['a', 'Apurar infracoes penais comuns.'],
            ['b', 'Executar policia ostensiva e preservar a ordem publica.'],
            ['c', 'Atuar como policia judiciaria da Uniao.'],
            ['d', 'Julgar crimes militares.'],
            ['e', 'Expedir licencas ambientais.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 144 paragrafo 5 determina a competencia ostentiva das PMs.',
    },
    {
        id: 'const-11',
        text: 'Quais entes federativos sao autonomos segundo a Constituicao?',
        options: buildOptions([
            ['a', 'Uniao e Estados.'],
            ['b', 'Uniao, Estados e Territorios.'],
            ['c', 'Uniao, Estados, Distrito Federal e Municipios.'],
            ['d', 'Apenas a Uniao.'],
            ['e', 'Estados e Municipios.'],
        ]),
        correctId: 'c',
        explanation: 'O art. 18 estabelece federacao composta por quatro entes autonomos.',
    },
    {
        id: 'const-12',
        text: 'O Supremo Tribunal Federal exerce controle concentrado por meio de:',
        options: buildOptions([
            ['a', 'Recurso especial.'],
            ['b', 'Acao direta de inconstitucionalidade.'],
            ['c', 'Mandado de injuncao coletivo.'],
            ['d', 'Sindicancia parlamentar.'],
            ['e', 'Procedimento administrativo disciplinar.'],
        ]),
        correctId: 'b',
        explanation: 'ADI e uma das acoes do art. 102 I para controle abstrato de constitucionalidade.',
    },
]);

// =====================================================
// DIREITO ADMINISTRATIVO
// =====================================================
registerQuestions(['Direito Administrativo'], [
    {
        id: 'adm-1',
        text: 'Os principios implicitos da administracao, como supremacia e indisponibilidade do interesse publico, significam que:',
        options: buildOptions([
            ['a', 'O administrador pode agir livremente sem lei.'],
            ['b', 'A administracao pode afastar a lei para atender a coletividade.'],
            ['c', 'O interesse coletivo prevalece e bens/competencias nao podem ser livremente alienados.'],
            ['d', 'Nao ha hierarquia entre normas.'],
            ['e', 'O servidor pode recusar motivacao.'],
        ]),
        correctId: 'c',
        explanation: 'Supremacia autoriza atos restritivos, enquanto indisponibilidade impede livre dispor do patrimonio e competencias publicas.',
    },
    {
        id: 'adm-2',
        text: 'O poder hierarquico permite:',
        options: buildOptions([
            ['a', 'Delegar competencia legislativa.'],
            ['b', 'Distribuir e escalonar funcoes, fiscalizar subordinados e rever atos.'],
            ['c', 'Aplicar sancoes penais.'],
            ['d', 'Revogar leis.'],
            ['e', 'Celebrar tratados.'],
        ]),
        correctId: 'b',
        explanation: 'Hierarquia organiza a estrutura interna, possibilitando ordenacao e controle de atividades.',
    },
    {
        id: 'adm-3',
        text: 'Atos administrativos vinculados caracterizam-se por:',
        options: buildOptions([
            ['a', 'Margem ampla de escolha quanto ao merito.'],
            ['b', 'Liberdade para desconsiderar a lei.'],
            ['c', 'Obrigatoriedade de pratica quando presentes os pressupostos legais.'],
            ['d', 'Impossibilidade de controle judicial.'],
            ['e', 'Natureza sempre politica.'],
        ]),
        correctId: 'c',
        explanation: 'Nos atos vinculados, a lei define todos os elementos; comprovados requisitos, o ato deve ser praticado.',
    },
    {
        id: 'adm-4',
        text: 'A autotutela administrativa permite que a administracao:',
        options: buildOptions([
            ['a', 'Revogue leis contrarias aos seus interesses.'],
            ['b', 'Anule atos ilegais e revogue atos inconvenientes sem provocacao judicial.'],
            ['c', 'Substitua decisao judicial transitada.'],
            ['d', 'Perdoe crimes.'],
            ['e', 'Assuma competencias de outros poderes.'],
        ]),
        correctId: 'b',
        explanation: 'Sumula 473/STF: a administracao pode anular atos ilegais e revogar os inconvenientes, respeitados direitos adquiridos.',
    },
    {
        id: 'adm-5',
        text: 'Descentralizacao administrativa ocorre quando:',
        options: buildOptions([
            ['a', 'A Uniao distribui tarefas entre seus ministerios.'],
            ['b', 'Um orgao central delega competencias internamente.'],
            ['c', 'O Estado transfere titularidade ou execucao de servico a outra pessoa juridica.'],
            ['d', 'Um servidor recebe funcao gratificada.'],
            ['e', 'Ha desconcentracao entre secretarias.'],
        ]),
        correctId: 'c',
        explanation: 'Descentralizacao envolve transferencia para entidade distinta (autarquia, empresa publica ou concessionaria).',
    },
    {
        id: 'adm-6',
        text: 'Na Lei 14.133/2021, qual modalidade e utilizada para bens e servicos comuns com disputa por maior desconto?',
        options: buildOptions([
            ['a', 'Concorrencia.'],
            ['b', 'Dialogo competitivo.'],
            ['c', 'Leilao.'],
            ['d', 'Pregao.'],
            ['e', 'Credenciamento.'],
        ]),
        correctId: 'd',
        explanation: 'O pregão, preferencialmente eletronico, busca maior desconto para bens e serviços comuns.',
    },
    {
        id: 'adm-7',
        text: 'Sobre contratos administrativos, e correto afirmar que:',
        options: buildOptions([
            ['a', 'Nao admitem alteracoes unilaterais.'],
            ['b', 'A administracao pode alterar unilateralmente para melhor adequacao ao interesse publico dentro dos limites legais.'],
            ['c', 'Nao ha clausulas exorbitantes.'],
            ['d', 'Prazos nao podem ser prorrogados.'],
            ['e', 'A contratada pode suspender execucao sem comunicacao.'],
        ]),
        correctId: 'b',
        explanation: 'A lei permite alteracao qualitativa/quantitativa dentro dos limites de 25% ou 50% em reformas.',
    },
    {
        id: 'adm-8',
        text: 'A improbidade por violacao a principios (art. 11 da Lei 8.429, apos Lei 14.230) exige:',
        options: buildOptions([
            ['a', 'Dolo especifico em violar principios basicos.'],
            ['b', 'Culpa simples.'],
            ['c', 'Prejuizo ao erario comprovado.'],
            ['d', 'Enriquecimento ilicito.'],
            ['e', 'Beneficio direto ao agente.'],
        ]),
        correctId: 'a',
        explanation: 'A nova lei exige dolo e ofensa aos principios como honestidade, imparcialidade e lealdade.',
    },
]);

// =====================================================
// ADMINISTRACAO PUBLICA
// =====================================================
registerQuestions(['Administracao Publica'], [
    {
        id: 'ap-1',
        exams: ['camara dos deputados'],
        text: 'O modelo burocratico weberiano destaca-se por:',
        options: buildOptions([
            ['a', 'Personalizacao nas decisoes.'],
            ['b', 'Hierarquia clara, normas impessoais e carreiras profissionais.'],
            ['c', 'Flexibilidade total e foco em resultados.'],
            ['d', 'Gestao por contratos de desempenho apenas.'],
            ['e', 'Ausencia de qualquer controle.'],
        ]),
        correctId: 'b',
        explanation: 'Burocracia busca previsibilidade com regras, especializacao e profissionalizacao.',
    },
    {
        id: 'ap-2',
        text: 'A administracao gerencial brasileira, a partir do PDRAE/1995, enfatiza:',
        options: buildOptions([
            ['a', 'Processos detalhados e formalismo.'],
            ['b', 'Resultados, controle por desempenho e descentralizacao.'],
            ['c', 'Centralizacao e hierarquia rigida.'],
            ['d', 'Extincao de contratos de gestao.'],
            ['e', 'Eliminacao da accountability.'],
        ]),
        correctId: 'b',
        explanation: 'A reforma gerencial introduziu contratos de gestao, metas e foco no cidadao-cliente.',
    },
    {
        id: 'ap-3',
        text: 'Segundo o Decreto 9203/2017, governanca publica inclui:',
        options: buildOptions([
            ['a', 'Controle apenas financeiro.'],
            ['b', 'Lideranca, estrategia e controle para entregar resultados.'],
            ['c', 'Desvinculacao de riscos.'],
            ['d', 'Abandono da transparencia.'],
            ['e', 'Exclusao da participacao social.'],
        ]),
        correctId: 'b',
        explanation: 'Governanca combina mecanismos de lideranca, estrategia e controle voltados a avaliacao e monitoramento.',
    },
    {
        id: 'ap-4',
        text: 'Indicadores de desempenho devem ser preferencialmente:',
        options: buildOptions([
            ['a', 'Baseados em percepcao subjetiva.'],
            ['b', 'Especificos, mensuraveis, alcancaveis, relevantes e temporais (SMART).'],
            ['c', 'Exclusivos para atividades finalisticas.'],
            ['d', 'Restritos a custos financeiros.'],
            ['e', 'Secretos para evitar comparacoes.'],
        ]),
        correctId: 'b',
        explanation: 'Boa pratica recomenda indicadores SMART para monitorar entregas com clareza e transparencia.',
    },
    {
        id: 'ap-5',
        text: 'Accountability na administracao publica envolve:',
        options: buildOptions([
            ['a', 'Prestar contas somente a superiores hierarquicos.'],
            ['b', 'Transparencia, prestacao de contas e responsabilidade perante sociedade e orgaos de controle.'],
            ['c', 'Eliminar controles externos.'],
            ['d', 'Divulgar informacoes apenas sob ordem judicial.'],
            ['e', 'Manter sigilo de todos os atos administrativos.'],
        ]),
        correctId: 'b',
        explanation: 'Accountability combina dimensoes de informacao, justificativa e consequencias diante dos stakeholders.',
    },
]);

// =====================================================
// ADMINISTRACAO FINANCEIRA E ORCAMENTARIA
// =====================================================
registerQuestions(['Administracao Financeira e Orcamentaria', 'AFO'], [
    {
        id: 'afo-1',
        text: 'PPA, LDO e LOA relacionam-se respectivamente com:',
        options: buildOptions([
            ['a', 'Metas quadrienais, prioridades anuais e detalhamento da arrecadacao/despesa do exercicio.'],
            ['b', 'Controle externo, auditoria interna e licitacoes.'],
            ['c', 'Planejamento estrategico, participacao popular e transparencia.'],
            ['d', 'Execucao, avaliacao e controle.'],
            ['e', 'Somente investimentos federais.'],
        ]),
        correctId: 'a',
        explanation: 'O PPA define programas quadrienais; a LDO estabelece prioridades anuais e orienta a LOA, que fixa receitas e despesas do ano.',
    },
    {
        id: 'afo-2',
        text: 'O principio da universalidade determina que:',
        options: buildOptions([
            ['a', 'Cada orgao possua orcamento secreto.'],
            ['b', 'Todas as receitas e despesas do ente constem da LOA.'],
            ['c', 'Nao haja vinculacao legal.'],
            ['d', 'Estatais independentes sejam excluidas.'],
            ['e', 'Apenas despesas de investimento sejam registradas.'],
        ]),
        correctId: 'b',
        explanation: 'Universalidade impõe registrar no orcamento geral todas as receitas e despesas do ente.',
    },
    {
        id: 'afo-3',
        text: 'Sao despesas de capital, na classificacao economica:',
        options: buildOptions([
            ['a', 'Pessoal e encargos.'],
            ['b', 'Custeio de material de consumo.'],
            ['c', 'Investimentos, inversoes financeiras e amortizacao da divida.'],
            ['d', 'Servicos de terceiros PF.'],
            ['e', 'Tarifas bancarias.'],
        ]),
        correctId: 'c',
        explanation: 'Despesas de capital aumentam o patrimonio ou reduzem passivos: investimentos, inversoes e amortizacao.',
    },
    {
        id: 'afo-4',
        text: 'Receitas originarias derivam de:',
        options: buildOptions([
            ['a', 'Tributos e multas.'],
            ['b', 'Exploracao do patrimonio estatal ou prestacao de servicos.'],
            ['c', 'Transferencias constitucionais.'],
            ['d', 'Operacoes de credito.'],
            ['e', 'Multas de transito.'],
        ]),
        correctId: 'b',
        explanation: 'Originarias advem da atividade economica do Estado (aluguéis, tarifas, venda de bens). Derivadas sao tributos e multas.',
    },
    {
        id: 'afo-5',
        text: 'Restos a pagar nao processados correspondem a:',
        options: buildOptions([
            ['a', 'Despesas liquidadas e nao pagas.'],
            ['b', 'Despesas empenhadas ate 31/12 sem liquidacao.'],
            ['c', 'Receitas inscritas e nao arrecadadas.'],
            ['d', 'Operacoes de credito extraordinarias.'],
            ['e', 'Despesas excluidas do orcamento.'],
        ]),
        correctId: 'b',
        explanation: 'Restos nao processados sao empenhos sem liquidacao ao fim do exercicio.',
    },
    {
        id: 'afo-6',
        text: 'A Lei de Responsabilidade Fiscal estabelece que o limite de gasto total com pessoal dos estados e:',
        options: buildOptions([
            ['a', '40% da Receita Corrente Liquida.'],
            ['b', '50% da Receita Corrente Liquida.'],
            ['c', '60% da Receita Corrente Liquida.'],
            ['d', '70% da Receita Corrente Liquida.'],
            ['e', '80% da Receita Corrente Liquida.'],
        ]),
        correctId: 'c',
        explanation: 'O art. 20 da LRF fixa limite global de 60% da RCL para os estados.',
    },
]);

// =====================================================
// REGIMENTO INTERNO DA CAMARA DOS DEPUTADOS
// =====================================================
registerQuestions(['Regimento Interno da Camara dos Deputados', 'Regimento Camara'], [
    {
        id: 'ricd-1',
        exams: ['camara dos deputados'],
        text: 'A Mesa Diretora da Camara e eleita para mandato de:',
        options: buildOptions([
            ['a', 'Dois anos, vedada reconducao para o mesmo cargo na mesma legislatura.'],
            ['b', 'Quatro anos, permitida reconducao imediata.'],
            ['c', 'Doze meses, permitida reconducao.'],
            ['d', 'Dois anos, com reconducao ilimitada.'],
            ['e', 'Mandato coincidente com o Executivo federal.'],
        ]),
        correctId: 'a',
        explanation: 'O art. 5 do RICD fixa mandato de dois anos e proibe reconducao ao mesmo cargo dentro da legislatura.',
    },
    {
        id: 'ricd-2',
        text: 'Compete ao Presidente da Camara, entre outras atribuicoes:',
        options: buildOptions([
            ['a', 'Julgar deputados.'],
            ['b', 'Dirigir os trabalhos do Plenario e manter a ordem.'],
            ['c', 'Vetar projetos de lei.'],
            ['d', 'Designar ministros de Estado.'],
            ['e', 'Emitir parecer nas comissoes.'],
        ]),
        correctId: 'b',
        explanation: 'O Presidente conduz as sessoes e garante observancia do regimento, cabendo-lhe manter a ordem e decidir questoes de ordem.',
    },
    {
        id: 'ricd-3',
        text: 'As Comissoes Permanentes podem apreciar conclusivamente proposicoes quando:',
        options: buildOptions([
            ['a', 'Nao for materia reservada ao Plenario nem houver recurso subscrito por 1/10 dos deputados.'],
            ['b', 'Se tratar de PEC.'],
            ['c', 'Sempre que desejarem.'],
            ['d', 'Houver requerimento de regime de urgencia.'],
            ['e', 'Se tratar de credito extraordinario.'],
        ]),
        correctId: 'a',
        explanation: 'O art. 24 permite apreciacao conclusiva salvo materias especificas ou recurso de 51 deputados ao Plenario.',
    },
    {
        id: 'ricd-4',
        text: 'O regime de urgencia urgentissima pode ser requerido por:',
        options: buildOptions([
            ['a', 'Apenas pelo Presidente da Republica.'],
            ['b', 'Lider com apoio da maioria absoluta ou por um terco dos deputados.'],
            ['c', 'Apenas por membros da Mesa.'],
            ['d', 'Qualquer cidadao.'],
            ['e', 'Somente pela CCJ.'],
        ]),
        correctId: 'b',
        explanation: 'O art. 152 admite urgencia urgentissima por requerimento assinado pela maioria absoluta ou por lideres com esse apoio.',
    },
    {
        id: 'ricd-5',
        text: 'Nas votacoes nominais, o quorum para aprovar projeto de lei complementar e:',
        options: buildOptions([
            ['a', 'Maioria simples dos presentes.'],
            ['b', 'Maioria absoluta dos membros (257 deputados).'],
            ['c', '3/5 dos membros.'],
            ['d', '2/3 dos presentes.'],
            ['e', 'Unanimidade.'],
        ]),
        correctId: 'b',
        explanation: 'Leis complementares exigem maioria absoluta, conforme art. 69 da CF e disposicoes regimentais.',
    },
    {
        id: 'ricd-6',
        text: 'O Diario da Camara dos Deputados:',
        options: buildOptions([
            ['a', 'Nao possui valor oficial.'],
            ['b', 'E veiculo oficial que registra atos, pareceres e extratos de deliberacoes.'],
            ['c', 'Publica apenas contratos administrativos.'],
            ['d', 'Pode ser substituido por redes sociais privadas.'],
            ['e', 'Nao publica pareceres.'],
        ]),
        correctId: 'b',
        explanation: 'O Diario confere publicidade formal a deliberacoes, atos administrativos e pareceres.',
    },
]);

// =====================================================
// LEGISLACAO PENAL ESPECIAL
// =====================================================
registerQuestions(['Legislacao Penal Especial'], [
    {
        id: 'lpe-1',
        exams: ['policia penal mg', 'pmdf'],
        text: 'No art. 28 da Lei 11.343/2006, o porte de drogas para consumo pessoal:',
        options: buildOptions([
            ['a', 'Gera pena de reclusao de 1 a 3 anos.'],
            ['b', 'Recebe medidas educativas, advertencia ou prestacao de servicos.'],
            ['c', 'Deixa de ser crime.'],
            ['d', 'Permite detencao em flagrante sem lavratura de termo.'],
            ['e', 'Resulta em multa de 100 salarios minimos.'],
        ]),
        correctId: 'b',
        explanation: 'O art. 28 preve penas alternativas: advertencia, prestacao de servicos e curso educativo.',
    },
    {
        id: 'lpe-2',
        text: 'O trafico privilegiado (art. 33 §4) admite reducao quando:',
        options: buildOptions([
            ['a', 'O agente for reincidente especifico.'],
            ['b', 'O agente for primario, de bons antecedentes e nao se dedique a atividades criminosas.'],
            ['c', 'Houver violencia.'],
            ['d', 'A droga apreendida for maconha.'],
            ['e', 'Se tratar de crime hediondo.'],
        ]),
        correctId: 'b',
        explanation: 'A redutora varia de 1/6 a 2/3 para primario que nao participa de organizacao criminosa.',
    },
    {
        id: 'lpe-3',
        text: 'Segundo a Lei 8.072/1990, sao hediondos:',
        options: buildOptions([
            ['a', 'Homicidio culposo.'],
            ['b', 'Latrocinio e estupro.'],
            ['c', 'Dano qualificado.'],
            ['d', 'Calunia.'],
            ['e', 'Lesao corporal leve.'],
        ]),
        correctId: 'b',
        explanation: 'O rol inclui crimes como latrocinio, extorsao mediante sequestro e estupro.',
    },
    {
        id: 'lpe-4',
        text: 'A Lei 12.850/2013 define organizacao criminosa como associacao de quatro ou mais pessoas:',
        options: buildOptions([
            ['a', 'Sem estrutura definida.'],
            ['b', 'Com objetivo de cometer crimes com pena maxima superior a 4 anos ou transnacionais.'],
            ['c', 'Apenas para contravencoes.'],
            ['d', 'Somente com armas de fogo.'],
            ['e', 'Somente com participacao de agentes publicos.'],
        ]),
        correctId: 'b',
        explanation: 'Ha necessidade de estrutura ordenada e divisao de tarefas para crimes graves ou transnacionais.',
    },
    {
        id: 'lpe-5',
        text: 'No Estatuto do Desarmamento, o porte ilegal de arma de fogo de uso permitido tem pena de:',
        options: buildOptions([
            ['a', 'Detencao de 6 meses a 1 ano.'],
            ['b', 'Reclusao de 2 a 4 anos e multa.'],
            ['c', 'Reclusao de 6 a 20 anos.'],
            ['d', 'Advertencia.'],
            ['e', 'Pena restritiva de direitos apenas.'],
        ]),
        correctId: 'b',
        explanation: 'O art. 14 fixa reclusao de 2 a 4 anos e multa.',
    },
    {
        id: 'lpe-6',
        text: 'A Lei 9.455/1997 conceitua tortura como:',
        options: buildOptions([
            ['a', 'Conduta exclusiva de agente publico.'],
            ['b', 'Constranger alguem com violencia para obter informacao, castigar ou discriminar, podendo ser praticada por particular.'],
            ['c', 'Conduta apenas em situacoes carcerarias.'],
            ['d', 'Apenas quando resulta morte.'],
            ['e', 'Atos cometidos unicamente por policiais militares.'],
        ]),
        correctId: 'b',
        explanation: 'A lei alcanca agentes publicos e particulares que causem sofrimento com finalidades especificas.',
    },
]);

registerQuestions(['Legislacao de Transito', 'Codigo de Transito Brasileiro'], [
    withFeedback(
        {
            id: 'transito-1',
            exams: ['detran df'],
            text: 'Segundo a Lei 14.071/2020, por quanto tempo vale a CNH de um condutor entre 18 e 50 anos antes de precisar renová-la?',
            options: buildOptions([
                ['a', '3 anos.'],
                ['b', '5 anos.'],
                ['c', '10 anos.'],
                ['d', '15 anos.'],
                ['e', 'Indeterminado enquanto o condutor estiver em bom comportamento.'],
            ]),
            correctId: 'c',
            explanation:
                'O art. 147 do CTB fixou validade de 10 anos para condutores com até 50 anos após as alterações da Lei 14.071/2020.',
        },
        {
            a: 'Errado: 3 anos é o prazo aplicado a condutores com mais de 70 anos.',
            b: 'Errado: 5 anos vale para quem tem de 50 a 70 anos.',
            c: 'Correta: o novo padrão da Lei 14.071 é 10 anos para até 50 anos.',
            d: 'Errado: o CTB não prevê 15 anos de validade.',
            e: 'Errado: a renovação é periódica e jamais indefinida.',
        }
    ),
    withFeedback(
        {
            id: 'transito-2',
            exams: ['detran df'],
            text: 'A CNH de um motorista comum é suspensa quando acumula quantos pontos no período de 12 meses?',
            options: buildOptions([
                ['a', '10 pontos.'],
                ['b', '15 pontos.'],
                ['c', '20 pontos.'],
                ['d', '25 pontos.'],
                ['e', '30 pontos.'],
            ]),
            correctId: 'c',
            explanation:
                'O art. 261 do CTB determina suspensão ao atingir 20 pontos em 12 meses; profissionais podem estender até 30 desde que atendam requisitos.',
        },
        {
            a: 'Errado: 10 pontos não corresponde à regra geral.',
            b: 'Errado: 15 pontos também não é o limite oficial.',
            c: 'Correta: 20 pontos é o valor previsto para condutores comuns.',
            d: 'Errado: 25 pontos não está previsto.',
            e: 'Errado: 30 pontos é um limite especial para profissionais.',
        }
    ),
    withFeedback(
        {
            id: 'transito-3',
            exams: ['detran df'],
            text: 'O que ocorre se um motorista se recusa a submeter-se a teste de alcoolemia durante fiscalização?',
            options: buildOptions([
                ['a', 'Recebe apenas advertência escrita.'],
                ['b', 'É preso imediatamente.'],
                ['c', 'Aplica-se multa, suspensão da CNH e recolhimento do documento por 12 meses (art. 165-A).'],
                ['d', 'Não ocorre penalidade sem testemunhas.'],
                ['e', 'O veículo é apreendido sem outras consequências.'],
            ]),
            correctId: 'c',
            explanation:
                'O art. 165-A do CTB pune a recusa com multa, suspensão e recolhimento da CNH por 12 meses como infração gravíssima.',
        },
        {
            a: 'Errado: a infração é mais severa que uma advertência.',
            b: 'Errado: prisão não é sanção automática nesse caso.',
            c: 'Correta: é essa a penalidade administrativa prevista.',
            d: 'Errado: não depende de testemunhas.',
            e: 'Errado: a apreensão complementa mas não substitui a penalidade.',
        }
    ),
    withFeedback(
        {
            id: 'transito-4',
            exams: ['detran df'],
            text: 'Transportar criança sem dispositivo de retenção adequado constitui infração:',
            options: buildOptions([
                ['a', 'Leve, 3 pontos.'],
                ['b', 'Média, 4 pontos.'],
                ['c', 'Grave, 5 pontos.'],
                ['d', 'Gravíssima, 7 pontos.'],
                ['e', 'Não é infração em trajetos urbanos curtos.'],
            ]),
            correctId: 'd',
            explanation:
                'O art. 64 do CTB classifica a falta de cadeirinha como infração gravíssima que gera 7 pontos.',
        },
        {
            a: 'Errado: a penalidade oficial é mais severa.',
            b: 'Errado: a penalidade não é média.',
            c: 'Errado: embora grave, o CTB classifica como gravíssima.',
            d: 'Correta: 7 pontos é o valor oficial.',
            e: 'Errado: não há exceção por trajeto curto.',
        }
    ),
    withFeedback(
        {
            id: 'transito-5',
            exams: ['detran df'],
            text: 'O parâmetro de álcool para infração administrativa passou a ser:',
            options: buildOptions([
                ['a', '0,1 mg/L.'],
                ['b', '0,3 mg/L.'],
                ['c', '0,5 mg/L.'],
                ['d', '0,8 mg/L.'],
                ['e', 'Tolerância zero: basta alteração ao dirigir.'],
            ]),
            correctId: 'e',
            explanation:
                'A Lei 14.071/2020 consolidou o conceito de tolerância zero, sendo suficiente detecção de alteração para configurar infração.',
        },
        {
            a: 'Errado: o CTB já não usa esse parâmetro.',
            b: 'Errado: referências anteriores que não mais se aplicam.',
            c: 'Errado: era usado para crimes, não mais para infrações administrativas.',
            d: 'Errado: era limite penal antes da reforma.',
            e: 'Correta: o critério atual é a detecção de alteração, não valores numéricos.',
        }
    ),
    withFeedback(
        {
            id: 'transito-6',
            exams: ['detran df'],
            text: 'A Lei Orgânica do DF reconhece que o Distrito Federal acumula competências de estado e município. Isso permite ao Detran-DF:',
            options: buildOptions([
                ['a', 'Editar resoluções federais.'],
                ['b', 'Seguir unicamente normas municipais.'],
                ['c', 'Criar normas distritais complementares ao CTB e gerir políticas de mobilidade.'],
                ['d', 'Delegar suas atribuições aos municípios vizinhos.'],
                ['e', 'Limitar-se a informações sem aplicação prática.'],
            ]),
            correctId: 'c',
            explanation:
                'O art. 32 da LO-DF registra o modelo híbrido, legitimando normas e políticas distritais de mobilidade que complementam o CTB.',
        },
        {
            a: 'Errado: quem edita resoluções federais é o CONTRAN.',
            b: 'Errado: o DF tem autonomia própria.',
            c: 'Correta: essa é a consequência do modelo híbrido.',
            d: 'Errado: o DF não delega competências essenciais.',
            e: 'Errado: a LO-DF proporciona aplicação prática imediata.',
        }
    ),
    withFeedback(
        {
            id: 'transito-7',
            exams: ['detran df'],
            text: 'A CNH digital possui o mesmo valor jurídico que a física? Pode ser exigida em fiscalização?',
            options: buildOptions([
                ['a', 'Não tem valor jurídico e serve apenas como auxílio.'],
                ['b', 'Tem valor apenas para veículos oficiais.'],
                ['c', 'Possui o mesmo valor jurídico e pode ser exigida em fiscalizações (Resolução 681/2017).'],
                ['d', 'Só vale quando o condutor mostra o QR code impresso.'],
                ['e', 'É válida apenas em rodovias interestaduais.'],
            ]),
            correctId: 'c',
            explanation:
                'A CNH digital (Resolução CONTRAN 681/2017) vale como documento oficial e pode ser exigida por autoridades em fiscalizações, inclusive distritais.',
        },
        {
            a: 'Errado: possui valor jurídico pleno, não apenas auxílio.',
            b: 'Errado: vale para qualquer jurisdição, inclusive fiscalizações locais.',
            c: 'Correta: a resolução garante equivalência e obrigatoriedade.',
            d: 'Errado: basta apresentar o app com QR code, sem impressão.',
            e: 'Errado: a validade ocorre em qualquer via pública brasileira.',
        }
    ),
    withFeedback(
        {
            id: 'transito-8',
            exams: ['detran df'],
            text: 'Sob a ótica do CTB, quem pode fiscalizar estacionamento rotativo do DF?',
            options: buildOptions([
                ['a', 'Apenas guardas municipais de municípios vizinhos.'],
                ['b', 'Agentes do Detran-DF e órgãos delegados do GDF em áreas públicas.'],
                ['c', 'Apenas concessionárias privadas.'],
                ['d', 'Polícia Federal.'],
                ['e', 'Só o Corpo de Bombeiros.'],
            ]),
            correctId: 'b',
            explanation:
                'O Detran-DF e órgãos delegados (Secretaria de Mobilidade) têm competência para fiscalizar estacionamentos públicos e rotativos distritais, conforme o CTB e normas complementares.',
        },
        {
            a: 'Errado: guardas municipais de outros municípios não têm competência no DF.',
            b: 'Correta: Detran e órgãos delegados atuam em áreas públicas.',
            c: 'Errado: concessionárias podem operar, mas fiscalização é estatal.',
            d: 'Errado: PF não é responsável por fiscalização urbana de estacionamento rotativo.',
            e: 'Errado: Corpo de Bombeiros atua em prevenção, não fiscalização de vagas.',
        }
    ),
    withFeedback(
        {
            id: 'transito-9',
            exams: ['detran df'],
            text: 'Quanto tempo um infrator tem para recorrer em processo administrativo de trânsito antes da autuação transitar em julgado?',
            options: buildOptions([
                ['a', '5 dias corridos.'],
                ['b', '10 dias úteis.'],
                ['c', '15 dias úteis, contados da notificação.'],
                ['d', '30 dias corridos.'],
                ['e', 'Nenhum prazo; recurso depende de decisão judicial.'],
            ]),
            correctId: 'c',
            explanation:
                'O art. 285 do CTB dá 15 dias úteis para defesa prévia ou recurso administrativo, prazo também adotado em procedimentos distritais.',
        },
        {
            a: 'Errado: o prazo legal é maior que 5 dias.',
            b: 'Errado: CTB especifica 15 dias úteis, não 10.',
            c: 'Correta: 15 dias úteis contados da ciência da penalidade.',
            d: 'Errado: 30 dias corridos excede o prazo.',
            e: 'Errado: há prazo e decurso administrativo, não apenas judicial.',
        }
    ),
    withFeedback(
        {
            id: 'transito-10',
            exams: ['detran df'],
            text: 'A categoria C da CNH autoriza conduzir:',
            options: buildOptions([
                ['a', 'Apenas carro de passeio.'],
                ['b', 'Veículos de carga com até 750 kg.'],
                ['c', 'Veículos de carga com peso bruto total acima de 3.500 kg.'],
                ['d', 'Motocicletas.'],
                ['e', 'Somente ônibus de passageiros.'],
            ]),
            correctId: 'c',
            explanation:
                'Categoria C permite conduzir veículos de carga com peso bruto total superior a 3.500 kg, conforme arts. 143 e 145 do CTB.',
        },
        {
            a: 'Errado: categoria B cobre carros de passeio.',
            b: 'Errado: limite indicado é maior que 750 kg.',
            c: 'Correta: C abrange caminhões pesados acima de 3.500 kg.',
            d: 'Errado: motos exigem categoria A.',
            e: 'Errado: ônibus demandam categoria D.',
        }
    ),
]);

registerQuestions(['Legislacao Distrital do DF', 'Legislacao DF'], [
    withFeedback(
        {
            id: 'detran-df-1',
            exams: ['detran df'],
            text: 'A Lei Orgânica do DF prevê competência para trânsito e transporte porque o DF:',
            options: buildOptions([
                ['a', 'É um ente federado com atribuições de estado e município.'],
                ['b', 'Depende do governo de Goiás.'],
                ['c', 'Só pode legislar sobre transporte coletivo.'],
                ['d', 'Deve seguir apenas leis municipais para trânsito.'],
                ['e', 'Não possui autonomia administrativa.'],
            ]),
            correctId: 'a',
            explanation:
                'A LO-DF define o DF como ente híbrido (art. 32), justificando normas distritais sobre mobilidade e trânsito.',
        },
        {
            a: 'Correta: essa é a razão da competência distrital no trânsito.',
            b: 'Errado: o DF é um ente autônomo.',
            c: 'Errado: a competência vai além de apenas transporte coletivo.',
            d: 'Errado: o DF possui legislação própria.',
            e: 'Errado: o DF tem autonomia administrativa expressa.',
        }
    ),
    withFeedback(
        {
            id: 'detran-df-2',
            exams: ['detran df'],
            text: 'O Detran-DF está vinculado à Secretaria de:',
            options: buildOptions([
                ['a', 'Educação.'],
                ['b', 'Mobilidade ou Transporte e Mobilidade.'],
                ['c', 'Saúde.'],
                ['d', 'Cultura.'],
                ['e', 'Planejamento territorial.'],
            ]),
            correctId: 'b',
            explanation:
                'A Secretaria de Mobilidade/Transporte e Mobilidade é a pasta do GDF que abriga políticas de trânsito e supervisiona o Detran-DF.',
        },
        {
            a: 'Errado: educação não lida com trânsito.',
            b: 'Correta: é a secretaria responsável pela mobilidade urbana.',
            c: 'Errado: saúde não abriga autarquia de trânsito.',
            d: 'Errado: cultura trata de áreas diferentes.',
            e: 'Errado: a pasta do planejamento não fiscaliza diretamente o trânsito.',
        }
    ),
    withFeedback(
        {
            id: 'detran-df-3',
            exams: ['detran df'],
            text: 'Programas distritais de mobilidade devem priorizar:',
            options: buildOptions([
                ['a', 'Maior arrecadação de multas.'],
                ['b', 'Integração modal, segurança viária e participação social conforme LO-DF.'],
                ['c', 'Transferência das atribuições para municípios.'],
                ['d', 'Redução de transporte coletivo.'],
                ['e', 'Fiscalização apenas nas rodovias federais.'],
            ]),
            correctId: 'b',
            explanation:
                'A LO-DF e os princípios distritais exigem políticas integradas, segurança viária e controle social nas ações do Detran-DF.',
        },
        {
            a: 'Errado: o foco vai muito além de arrecadar.',
            b: 'Correta: integrações e participação social são diretrizes legais.',
            c: 'Errado: o DF mantém competências próprias.',
            d: 'Errado: transporte coletivo é eixo central de mobilidade.',
            e: 'Errado: atua em todas as vias urbanas, não apenas federais.',
        }
    ),
    withFeedback(
        {
            id: 'detran-df-4',
            exams: ['detran df'],
            text: 'A legislação distrital exige controle social e participação pública nas políticas de mobilidade. Isso se traduz em:',
            options: buildOptions([
                ['a', 'Decisões exclusivas do governador, sem consulta.'],
                ['b', 'A criação de conselhos consultivos e audiências públicas envolvendo Detran-DF.'],
                ['c', 'Delegação total para o setor privado.'],
                ['d', 'Limitação de participação aos órgãos federais.'],
                ['e', 'Somente consulta técnica sem representantes da sociedade.'],
            ]),
            correctId: 'b',
            explanation:
                'A LO-DF determina mecanismos participativos e conselhos de mobilidade que envolvem sociedade civil e órgãos públicos para orientar políticas do Detran-DF.',
        },
        {
            a: 'Errado: a legislação distrital aposta na participação, não na exclusividade do governador.',
            b: 'Correta: conselhos e audiências públicas são instrumentos previstos.',
            c: 'Errado: delegado ao setor privado contradiz o controle público exigido.',
            d: 'Errado: a participação não se limita a entidades federais.',
            e: 'Errado: a participação deve incluir representantes sociais, não apenas técnicos.',
        }
    ),
    withFeedback(
        {
            id: 'detran-df-5',
            exams: ['detran df'],
            text: 'As normas distritais exigem que o Detran-DF mantenha ouvidoria e relatórios de desempenho. Isso reforça:',
            options: buildOptions([
                ['a', 'A transparência e prestação de contas ao cidadão e ao Legislativo local.'],
                ['b', 'O segredo absoluto das autuações.'],
                ['c', 'A divulgação apenas de dados federais.'],
                ['d', 'A transferência de dados para órgãos de outros estados.'],
                ['e', 'A eliminação de canais de denúncias.'],
            ]),
            correctId: 'a',
            explanation:
                'Transparência exige ouvidoria funcional e relatórios regulares para garantir controle social e parlamentares, conforme princípios da LO-DF.',
        },
        {
            a: 'Correta: o foco é a prestação de contas e transparência local.',
            b: 'Errado: vigência da transparência vai contra segredo absoluto.',
            c: 'Errado: trata-se de dados distritais, não apenas federais.',
            d: 'Errado: não se transfere competência a outros estados.',
            e: 'Errado: canais de denúncia são fortalecidos, não eliminados.',
        }
    ),
    withFeedback(
        {
            id: 'detran-df-6',
            exams: ['detran df'],
            text: 'Um programa distrital de mobilidade urbana deve priorizar:',
            options: buildOptions([
                ['a', 'Maior arrecadação de multas.'],
                ['b', 'Integração modal, segurança viária e participação social conforme LO-DF.'],
                ['c', 'Transferência das responsabilidades para municípios vizinhos.'],
                ['d', 'Redução de transporte coletivo.'],
                ['e', 'Fiscalização apenas em rodovias federais.'],
            ]),
            correctId: 'b',
            explanation:
                'A LO-DF e os princípios distritais orientam programas de mobilidade a priorizar integração modal, segurança e controle social.',
        },
        {
            a: 'Errado: o objetivo vai além de arrecadar multas.',
            b: 'Correta: são pilares fixados na legislação distrital.',
            c: 'Errado: o DF mantém competências próprias.',
            d: 'Errado: transporte coletivo é central e não dispensável.',
            e: 'Errado: a atuação se estende a toda malha urbana.',
        }
    ),
]);



// =====================================================
// DIREITOS HUMANOS
// =====================================================
registerQuestions(['Direitos Humanos'], [
    {
        id: 'dh-1',
        text: 'O principio da universalidade implica que:',
        options: buildOptions([
            ['a', 'Direitos humanos valem apenas em democracias.'],
            ['b', 'Todos os seres humanos sao titulares independentemente de nacionalidade ou situacao.'],
            ['c', 'A ONU pode suspender direitos nacionais automaticamente.'],
            ['d', 'Apenas pessoas sem condenacao criminal sao protegidas.'],
            ['e', 'O governo pode relativizar direitos conforme conveniencia.'],
        ]),
        correctId: 'b',
        explanation: 'Universalidade assegura que todo ser humano e titular de direitos e liberdades fundamentais.',
    },
    {
        id: 'dh-2',
        text: 'Tratados de direitos humanos aprovados pelo rito do art. 5 §3 possuem status de:',
        options: buildOptions([
            ['a', 'Lei ordinaria.'],
            ['b', 'Lei complementar.'],
            ['c', 'Emenda constitucional.'],
            ['d', 'Decreto regulamentar.'],
            ['e', 'Ato infralegal.'],
        ]),
        correctId: 'c',
        explanation: 'Aprovados em dois turnos por 3/5 em cada Casa, adquirem equivalencia de emenda constitucional.',
    },
    {
        id: 'dh-3',
        text: 'A Corte Interamericana pode condenar o Brasil quando:',
        options: buildOptions([
            ['a', 'Nao houver esgotamento de recursos internos.'],
            ['b', 'Ha violacao a tratado da OEA e o Estado reconheceu competencia contenciosa.'],
            ['c', 'O fato envolva apenas particulares sem omissao estatal.'],
            ['d', 'Nao exista opiniao consultiva previa.'],
            ['e', 'Houver violacao apenas a direito social.'],
        ]),
        correctId: 'b',
        explanation: 'O Brasil reconheceu a jurisdicao contenciosa em 1998; exige esgotar recursos internos ou justificar impossibilidade.',
    },
    {
        id: 'dh-4',
        text: 'Protocolos sobre uso da forca da ONU recomendam que policiais:',
        options: buildOptions([
            ['a', 'Empreguem armas letais como primeira resposta.'],
            ['b', 'Observem legalidade, necessidade, proporcionalidade e responsabilidade.'],
            ['c', 'Nao registrem ocorrencias com vitimas.'],
            ['d', 'Deleguem a civis o controle do cenario.'],
            ['e', 'Protejam estritamente o patrimonio.'],
        ]),
        correctId: 'b',
        explanation: 'Os principios basicos exigem esses criterios cumulativos para legitimar o uso da forca.',
    },
    {
        id: 'dh-5',
        text: 'A Revisao Periodica Universal (RPU) do Conselho de Direitos Humanos da ONU:',
        options: buildOptions([
            ['a', 'Analisa apenas paises em guerra.'],
            ['b', 'Submete todos os Estados membros a avaliacao ciclica do cumprimento de obrigacoes.'],
            ['c', 'Julga individuos.'],
            ['d', 'Substitui decisoes judiciais nacionais.'],
            ['e', 'Concede asilo politico.'],
        ]),
        correctId: 'b',
        explanation: 'A RPU examina periodicamente todos os paises quanto ao cumprimento de compromissos assumidos. ',
    },
    {
        id: 'dh-6',
        exams: ['policia penal mg', 'pmdf'],
        text: 'Na atuacao prisional, a Regra de Mandela 1 reforca que:',
        options: buildOptions([
            ['a', 'Nao existem limites para revistas corporais.'],
            ['b', 'Os presos devem ser tratados com respeito a dignidade inerente ao ser humano.'],
            ['c', 'A disciplina deve ser exclusivamente fisica.'],
            ['d', 'A assistencia de saude e facultativa.'],
            ['e', 'O isolamento prolongado e regra geral.'],
        ]),
        correctId: 'b',
        explanation: 'Regras Minimas para o Tratamento de Reclusos destacam dignidade, proibicao de tortura e garantia de assistencias.',
    },
]);

// =====================================================
// CRIMINOLOGIA
// =====================================================
registerQuestions(['Criminologia'], [
    {
        id: 'crim-1',
        text: 'A escola classica da criminologia defendia que:',
        options: buildOptions([
            ['a', 'O crime resulta de determinismo biologico inevitavel.'],
            ['b', 'O homem e racional e escolhe cometer delitos; a pena deve ser proporcional e legal.'],
            ['c', 'O criminoso nato deve ser segregado.'],
            ['d', 'As estruturas sociais sao as unicas responsaveis.'],
            ['e', 'A pena deve ser indeterminada.'],
        ]),
        correctId: 'b',
        explanation: 'Classicos como Beccaria defendiam livre arbitrio, proporcionalidade e legalidade estrita.',
    },
    {
        id: 'crim-2',
        text: 'A escola positiva introduziu a ideia de:',
        options: buildOptions([
            ['a', 'Crime como escolha racional sem influencia externa.'],
            ['b', 'Determinismo biologico e social, buscando causas empiricas do crime.'],
            ['c', 'Punicao simbolica sem prisao.'],
            ['d', 'Criminalidade de oportunidades.'],
            ['e', 'Controle social informal apenas.'],
        ]),
        correctId: 'b',
        explanation: 'Positivistas investigavam fatores biologicos e sociais, propondo respostas individualizadas.',
    },
    {
        id: 'crim-3',
        text: 'A teoria do etiquetamento (labeling approach) aponta que:',
        options: buildOptions([
            ['a', 'O crime e causado exclusivamente por genetica.'],
            ['b', 'A rotulacao social de grupos como desviantes pode reforcar a reincidencia.'],
            ['c', 'O controle social formal nao influencia identidades.'],
            ['d', 'O crime e sempre racional.'],
            ['e', 'Sistemas penais sao neutros.'],
        ]),
        correctId: 'b',
        explanation: 'O etiquetamento destaca o papel das agencias de controle na estigmatizacao.',
    },
    {
        id: 'crim-4',
        text: 'Vitimologia estuda:',
        options: buildOptions([
            ['a', 'Somente o autor do crime.'],
            ['b', 'As caracteristicas e participacao da vitima no fenomeno criminal.'],
            ['c', 'Apenas estatisticas de prisao.'],
            ['d', 'Processos judiciais civis.'],
            ['e', 'Questões economicas macro.'],
        ]),
        correctId: 'b',
        explanation: 'Analisa perfil, vulnerabilidade e interacoes vitima-ofensor para orientar prevencao.',
    },
    {
        id: 'crim-5',
        text: 'Politicas de prevencao situacional focam em:',
        options: buildOptions([
            ['a', 'Mudancas estruturais amplas sem foco espacial.'],
            ['b', 'Reduzir oportunidades concretas do crime mediante vigilancia, iluminacao e design ambiental.'],
            ['c', 'Programas educacionais unicamente.'],
            ['d', 'Penas mais longas sem outras medidas.'],
            ['e', 'Assistencia social exclusiva.'],
        ]),
        correctId: 'b',
        explanation: 'Prevencao situacional modifica ambiente e aumenta riscos para desencorajar o delito.',
    },
]);

// =====================================================
// ESTATUTO DOS POLICIAIS MILITARES DO DF
// =====================================================
registerQuestions(['Estatuto dos Policiais Militares do DF', 'Estatuto PMDF'], [
    {
        id: 'estatuto-pmdf-1',
        exams: ['pmdf'],
        text: 'O ingresso na PMDF exige, entre outros requisitos:',
        options: buildOptions([
            ['a', 'Idade minima de 14 anos.'],
            ['b', 'Aprovacao em concurso publico e curso de formacao.'],
            ['c', 'Nomeacao politica sem concurso.'],
            ['d', 'Experiencia previa de 10 anos.'],
            ['e', 'Ser servidor efetivo do DF.'],
        ]),
        correctId: 'b',
        explanation: 'A Lei 7.289/1984 exige concurso e curso especifico, alem de demais requisitos legais.',
    },
    {
        id: 'estatuto-pmdf-2',
        exams: ['pmdf'],
        text: 'A hierarquia militar fundamenta-se no respeito a:',
        options: buildOptions([
            ['a', 'Escolha aleatoria de liderancas.'],
            ['b', 'Antiguidade e graduacao, garantindo unidade de comando.'],
            ['c', 'Idade biologica.'],
            ['d', 'Preferencia politica.'],
            ['e', 'Turnos de servico.'],
        ]),
        correctId: 'b',
        explanation: 'Hierarquia pressupoe graduacao e antiguidade, assegurando subordinacao e disciplina.',
    },
    {
        id: 'estatuto-pmdf-3',
        exams: ['pmdf'],
        text: 'Entre os direitos previstos esta:',
        options: buildOptions([
            ['a', 'Gozo de ferias de 15 dias sem adicional.'],
            ['b', 'Remuneracao durante licenca especial apos cada quinquenio, conforme lei local.'],
            ['c', 'Dispensa automatica de sindicancia.'],
            ['d', 'Imunidade penal.'],
            ['e', 'Acumulacao remunerada de cargos civis.'],
        ]),
        correctId: 'b',
        explanation: 'O Estatuto assegura licenca especial (atualmente convertida em pecunia em certas situacoes) conforme normas distritais.',
    },
    {
        id: 'estatuto-pmdf-4',
        exams: ['pmdf'],
        text: 'Qual dever deve ser observado mesmo fora do servico?',
        options: buildOptions([
            ['a', 'Recusar ordens legais.'],
            ['b', 'Manter conduta moral e profissional compativel com o decoro da corporacao.'],
            ['c', 'Divulgar dados sigilosos.'],
            ['d', 'Realizar atividade comercial sem autorizacao.'],
            ['e', 'Ausentar-se de solenidades oficiais por conveniencia.'],
        ]),
        correctId: 'b',
        explanation: 'O dever de manter conduta ilibada se estende a qualquer situacao, preservando a imagem institucional.',
    },
    {
        id: 'estatuto-pmdf-5',
        exams: ['pmdf'],
        text: 'A promocao por bravura e concedida quando:',
        options: buildOptions([
            ['a', 'O militar conclui curso obrigatorio.'],
            ['b', 'Ha ato heroico que supera o cumprimento regular do dever.'],
            ['c', 'Completa tempo minimo na graduacao.'],
            ['d', 'Existe vaga administrativa.'],
            ['e', 'O militar solicita promocao por antiguidade.'],
        ]),
        correctId: 'b',
        explanation: 'Bravura reconhece ato excepcional que justifica elevacao imediata na carreira.',
    },
]);

// =====================================================
// REGULAMENTO DISCIPLINAR DA PMDF
// =====================================================
registerQuestions(['Regulamento Disciplinar da PMDF', 'RDP/PMDF'], [
    {
        id: 'rdpmdf-1',
        exams: ['pmdf'],
        text: 'As transgressoes disciplinares classificam-se em:',
        options: buildOptions([
            ['a', 'Leves, graves e intoleraveis.'],
            ['b', 'Leves, medias e graves.'],
            ['c', 'Comuns e especiais.'],
            ['d', 'Simples e complexas.'],
            ['e', 'Administrativas e penais.'],
        ]),
        correctId: 'b',
        explanation: 'O RDP/PMDF categoriza condutas em leves, medias e graves, com sancoes proporcionais.',
    },
    {
        id: 'rdpmdf-2',
        exams: ['pmdf'],
        text: 'A autoridade que tomar conhecimento de transgressao deve:',
        options: buildOptions([
            ['a', 'Arquivar automaticamente.'],
            ['b', 'Registrar e adotar providencias para apurar os fatos, podendo instaurar sindicancia ou IPM.'],
            ['c', 'Punir sem ouvir o militar.'],
            ['d', 'Remeter ao Poder Judiciario imediatamente.'],
            ['e', 'Aguardar o interessado se apresentar.'],
        ]),
        correctId: 'b',
        explanation: 'O regulamento impõe dever de apurar e registrar, garantindo contraditorio e ampla defesa.',
    },
    {
        id: 'rdpmdf-3',
        exams: ['pmdf'],
        text: 'Qual sancao corresponde a transgressoes medias segundo o regulamento?',
        options: buildOptions([
            ['a', 'Repreensao apenas.'],
            ['b', 'Detencao ou prisao disciplinar ate 20 dias.'],
            ['c', 'Licenciamento a bem da disciplina.'],
            ['d', 'Expulsao sumaria.'],
            ['e', 'Advertencia escrita apenas.'],
        ]),
        correctId: 'b',
        explanation: 'Transgressoes medias admitem detencao/prisao disciplinar moderada, a depender do historico do militar.',
    },
    {
        id: 'rdpmdf-4',
        exams: ['pmdf'],
        text: 'Abandonar o posto armado sem autorizacao configura:',
        options: buildOptions([
            ['a', 'Falta leve.'],
            ['b', 'Transgressao grave.'],
            ['c', 'Conduta licita se houver substituto.'],
            ['d', 'Falta media.'],
            ['e', 'Erro administrativo.'],
        ]),
        correctId: 'b',
        explanation: 'O abandono do posto compromete a seguranca do servico e e tipificado como grave.',
    },
    {
        id: 'rdpmdf-5',
        exams: ['pmdf'],
        text: 'O prazo para pedido de reconsideracao da punicao disciplinar e de:',
        options: buildOptions([
            ['a', '24 horas.'],
            ['b', '3 dias uteis.'],
            ['c', '5 dias uteis.'],
            ['d', '10 dias corridos.'],
            ['e', '30 dias corridos.'],
        ]),
        correctId: 'c',
        explanation: 'O militar pode solicitar reconsideracao em ate cinco dias uteis contados da ciencia da punicao.',
    },
]);

// =====================================================
// CONSTITUICAO DO ESTADO DE MINAS GERAIS
// =====================================================
registerQuestions(['Constituicao do Estado de MG', 'Constituicao Estadual MG'], [
    {
        id: 'const-mg-1',
        exams: ['policia penal mg'],
        text: 'A Constituicao mineira assegura que a seguranca publica e dever do Estado e responsabilidade de:',
        options: buildOptions([
            ['a', 'Apenas dos municipios.'],
            ['b', 'Todos, assim como na Constituicao Federal.'],
            ['c', 'Somente das forcas policiais.'],
            ['d', 'Empresas privadas.'],
            ['e', 'Apenas da Policia Militar.'],
        ]),
        correctId: 'b',
        explanation: 'O texto estadual replica o art. 144 da CF, destacando responsabilidade compartilhada.',
    },
    {
        id: 'const-mg-2',
        text: 'Integram o sistema de seguranca publica de Minas:',
        options: buildOptions([
            ['a', 'Somente a Policia Militar.'],
            ['b', 'Policias Civil e Militar, Corpo de Bombeiros, Policia Penal e orgaos de defesa social.'],
            ['c', 'Apenas guardas municipais.'],
            ['d', 'Exclusivamente a Defesa Civil.'],
            ['e', 'Somente a Policia Civil.'],
        ]),
        correctId: 'b',
        explanation: 'A CE/MG explicita orgaos integrados, incluindo a Policia Penal vinculada a SEJUSP.',
    },
    {
        id: 'const-mg-3',
        text: 'As polícias estaduais sao subordinadas ao:',
        options: buildOptions([
            ['a', 'Poder Judiciario.'],
            ['b', 'Governador do Estado.'],
            ['c', 'Ministerio Publico.'],
            ['d', 'Prefeitos.'],
            ['e', 'Assembleia Legislativa.'],
        ]),
        correctId: 'b',
        explanation: 'Assim como na CF, as policias estaduais subordinam-se ao Governador e integram o Executivo.',
    },
    {
        id: 'const-mg-4',
        text: 'A CE/MG garante aos servidores estaduais:',
        options: buildOptions([
            ['a', 'Apenas 20 dias de ferias.'],
            ['b', 'Ferias de 30 dias anuais e licencas previstas em lei.'],
            ['c', 'Acumulacao tripla de cargos.'],
            ['d', 'Inexistencia de teto remuneratorio.'],
            ['e', 'Estabilidade apos dois anos.'],
        ]),
        correctId: 'b',
        explanation: 'O texto replica garantias gerais como ferias anuais remuneradas e licencas na forma da lei.',
    },
    {
        id: 'const-mg-5',
        text: 'O controle externo estadual e exercido pela:',
        options: buildOptions([
            ['a', 'Somente pelo Ministerio Publico.'],
            ['b', 'Assembleia Legislativa com auxilio do Tribunal de Contas.'],
            ['c', 'Prefeituras.'],
            ['d', 'Poder Judiciario.'],
            ['e', 'Defensoria Publica.'],
        ]),
        correctId: 'b',
        explanation: 'Assim como na CF, cabe ao Legislativo, com apoio do TCE/MG, fiscalizar contas e gestao.',
    },
]);

// =====================================================
// ESTATUTO DO SERVIDOR PUBLICO DE MG
// =====================================================
registerQuestions(['Estatuto do Servidor Publico de MG', 'Estatuto Servidor MG'], [
    {
        id: 'estatuto-mg-1',
        exams: ['policia penal mg'],
        text: 'O provimento derivado denominado reconducao ocorre quando:',
        options: buildOptions([
            ['a', 'Servidor retorna ao cargo de origem apos invalidacao de sua readaptacao ou reintegracao.'],
            ['b', 'Servidor assume cargo em outro ente.'],
            ['c', 'Servidor acumula dois cargos.'],
            ['d', 'Servidor e promovido automaticamente.'],
            ['e', 'Servidor assume cargo comissionado.'],
        ]),
        correctId: 'a',
        explanation: 'Reconducao devolve o servidor ao cargo anterior quando nao se consolida o novo provimento.',
    },
    {
        id: 'estatuto-mg-2',
        text: 'A posse deve ocorrer no prazo de:',
        options: buildOptions([
            ['a', '5 dias uteis contados da nomeacao.'],
            ['b', '30 dias contados da publicacao do ato de provimento.'],
            ['c', '60 dias contados da homologacao do concurso.'],
            ['d', '90 dias contados do exame medico.'],
            ['e', 'Nao ha prazo.'],
        ]),
        correctId: 'b',
        explanation: 'O estatuto mineiro segue regra geral de posse em ate 30 dias apos publicacao, salvo prorrogacao autorizada.',
    },
    {
        id: 'estatuto-mg-3',
        text: 'O estagio probatorio tem duracao de:',
        options: buildOptions([
            ['a', '12 meses.'],
            ['b', '18 meses.'],
            ['c', '24 meses.'],
            ['d', '36 meses.'],
            ['e', '48 meses.'],
        ]),
        correctId: 'd',
        explanation: 'A avaliacao especial ocorre durante 3 anos, em consonancia com a CF apos EC 19/1998.',
    },
    {
        id: 'estatuto-mg-4',
        text: 'Segundo o estatuto, as ferias anuais correspondem a:',
        options: buildOptions([
            ['a', '20 dias sem fracionamento.'],
            ['b', '30 dias, admitido fracionamento em ate dois periodos.'],
            ['c', '45 dias continuos.'],
            ['d', '15 dias sem adicional.'],
            ['e', '60 dias bienais.'],
        ]),
        correctId: 'b',
        explanation: 'Sao 30 dias por ano, podendo dividir em dois periodos com adicional de 1/3.',
    },
    {
        id: 'estatuto-mg-5',
        text: 'A acumulacao remunerada so e permitida quando:',
        options: buildOptions([
            ['a', 'Houver tres cargos de qualquer natureza.'],
            ['b', 'Forem dois cargos de professor; um de professor com outro tecnico/cientifico; ou dois cargos de profissionais de saude.'],
            ['c', 'Tratar-se de cargo em comissao.'],
            ['d', 'Servidor exercer cargo efetivo e emprego privado sem controle.'],
            ['e', 'Houver contrato temporario.'],
        ]),
        correctId: 'b',
        explanation: 'A CE/MG replica a CF no art. 37 XVI, exigindo compatibilidade de horarios.',
    },
    {
        id: 'estatuto-mg-6',
        text: 'A remocao pode ocorrer:',
        options: buildOptions([
            ['a', 'Somente a pedido.'],
            ['b', 'De oficio por necessidade do servico ou a pedido, se conveniente ao orgao.'],
            ['c', 'Apenas com ordem judicial.'],
            ['d', 'Como penalidade automatica.'],
            ['e', 'Somente quando houver promocao.'],
        ]),
        correctId: 'b',
        explanation: 'Remocao e ato administrativo que pode ser determinado ou deferido conforme interesse do servico.',
    },
]);

// =====================================================
// DIREITO PENAL - PARTE GERAL
// =====================================================
registerQuestions(['Direito Penal'], [
    // APLICAÇÃO DA LEI PENAL
    withFeedback(
        {
            id: 'direito-penal-1',
            text: 'O principio da anterioridade penal impede a aplicacao de uma lei mais gravosa editada apos a pratica do fato. Em qual situacao a retroatividade sera admitida?',
            options: buildOptions([
                ['a', 'Nunca, pois a lei penal jamais retroage.'],
                ['b', 'Quando se tratar de contravencao penal.'],
                ['c', 'Quando a lei posterior for mais benigna ao reu.'],
                ['d', 'Somente em crimes contra a administracao publica.'],
                ['e', 'Apenas em crimes hediondos.'],
            ]),
            correctId: 'c',
            explanation:
                'A regra e a irretroatividade, mas o art. 5 XL da CF e o art. 2 do CP autorizam a retroatividade da lei penal mais favoravel (novatio legis in mellius).',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: a lei penal retroage quando for mais benéfica, logo não é correto falar em proibição absoluta.',
            b: 'Errado: contravenções penais seguem o mesmo princípio geral; não há autorização automática para retroagir.',
            c: 'Correta: leis penais mais benéficas retroagem em benefício do réu (art. 5º, XL, e art. 2º do CP).',
            d: 'Errado: o critério não depende do tipo de crime, mas sim de a lei ser mais benigna.',
            e: 'Errado: mesmo crimes hediondos se submetem ao princípio da retroatividade benigna.',
        }
    ),
    withFeedback(
        {
            id: 'direito-penal-2',
            text: 'Ao analisar um fato, o delegado concluiu que houve conduta, resultado e nexo causal, mas identificou legitima defesa. Qual elemento do conceito analitico do crime foi afastado?',
            options: buildOptions([
                ['a', 'Fato tipico.'],
                ['b', 'Ilicitude.'],
                ['c', 'Culpabilidade.'],
                ['d', 'Punibilidade.'],
                ['e', 'Iter criminis.'],
            ]),
            correctId: 'b',
            explanation:
                'A existencia de causa excludente (legitima defesa) afasta a ilicitude. O fato continua tipico, mas nao e ilicito.',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: o fato continua típico (conduta + resultado + nexo). A excludente atua em outra etapa.',
            b: 'Correta: a legítima defesa exclui a ilicitude, mantendo o fato típico mas lícito.',
            c: 'Errado: somente após a ilicitude analisamos a culpabilidade; a excludente não a atinge diretamente.',
            d: 'Errado: punibilidade é consequência posterior e não elemento do conceito analítico clássico.',
            e: 'Errado: iter criminis descreve fases do crime e não elemento do conceito analítico.',
        }
    ),
    withFeedback(
        {
            id: 'direito-penal-3',
            text: 'João estava embriagado quando cometeu furto. Quanto à embriaguez, o Código Penal estabelece que:',
            options: buildOptions([
                ['a', 'A embriaguez voluntária sempre afasta a imputabilidade.'],
                ['b', 'A embriaguez preordenada não agrava a pena.'],
                ['c', 'A embriaguez voluntária ou culposa não exclui a imputabilidade (teoria da actio libera in causa).'],
                ['d', 'Somente a embriaguez completa, voluntária ou culposa, afasta o crime.'],
                ['e', 'A embriaguez acidental nunca exclui a imputabilidade.'],
            ]),
            correctId: 'c',
            explanation:
                'Conforme art. 28, II, do CP, a embriaguez voluntária ou culposa não exclui a imputabilidade criminal (actio libera in causa).',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: a embriaguez voluntária não afasta a imputabilidade.',
            b: 'Errado: a embriaguez preordenada agrava a pena (art. 61, II, l).',
            c: 'Correta: art. 28, II adota a teoria da actio libera in causa.',
            d: 'Errado: mesmo completa, se voluntária ou culposa, não afasta imputabilidade.',
            e: 'Errado: a embriaguez acidental completa pode excluir a imputabilidade (art. 28, §1º).',
        }
    ),

    // TEORIA DO CRIME
    withFeedback(
        {
            id: 'direito-penal-4',
            text: 'Sobre o dolo eventual, assinale a alternativa correta:',
            options: buildOptions([
                ['a', 'O agente prevê o resultado mas não o aceita.'],
                ['b', 'O agente assume o risco de produzir o resultado previsto.'],
                ['c', 'É sinônimo de culpa consciente.'],
                ['d', 'Ocorre quando o agente não prevê resultado previsível.'],
                ['e', 'Não está previsto no Código Penal.'],
            ]),
            correctId: 'b',
            explanation:
                'No dolo eventual (art. 18, I, 2ª parte), o agente prevê o resultado e assume o risco de produzi-lo.',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: se não aceita, pode caracterizar culpa consciente.',
            b: 'Correta: dolo eventual pressupõe assunção do risco (art. 18, I).',
            c: 'Errado: na culpa consciente, o agente prevê mas acredita que o resultado não ocorrerá.',
            d: 'Errado: quando não prevê resultado previsível, há culpa inconsciente.',
            e: 'Errado: o art. 18, I, parte final, prevê expressamente o dolo eventual.',
        }
    ),
    withFeedback(
        {
            id: 'direito-penal-5',
            text: 'O erro sobre elemento constitutivo do tipo penal (erro de tipo) tem como consequência:',
            options: buildOptions([
                ['a', 'A exclusão da ilicitude.'],
                ['b', 'A exclusão do dolo e, se inevitável, também da culpa.'],
                ['c', 'A manutenção do dolo, mas redução da pena.'],
                ['d', 'A configuração de tentativa.'],
                ['e', 'A aplicação obrigatória de medida de segurança.'],
            ]),
            correctId: 'b',
            explanation:
                'O erro de tipo (art. 20) exclui o dolo. Se escusável (inevitável), também exclui a culpa.',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: o erro de tipo não atua sobre a ilicitude, mas sobre o tipo penal.',
            b: 'Correta: art. 20 estabelece exclusão do dolo e, se inevitável, também da culpa.',
            c: 'Errado: o dolo é excluído, não apenas reduzido.',
            d: 'Errado: erro de tipo não se relaciona com tentativa.',
            e: 'Errado: não há previsão de medida de segurança obrigatória nesse caso.',
        }
    ),
    withFeedback(
        {
            id: 'direito-penal-6',
            text: 'Quanto às excludentes de ilicitude, é correto afirmar:',
            options: buildOptions([
                ['a', 'O estado de necessidade exige que o perigo seja provocado dolosamente pelo agente.'],
                ['b', 'Na legítima defesa, a reação deve ser proporcional à agressão injusta atual ou iminente.'],
                ['c', 'O estrito cumprimento de dever legal não exclui a ilicitude.'],
                ['d', 'O exercício regular de direito só se aplica a agentes públicos.'],
                ['e', 'Todas as excludentes exigem animus específico.'],
            ]),
            correctId: 'b',
            explanation:
                'A legítima defesa (art. 25) exige moderação: a reação deve ser proporcional à agressão injusta, atual ou iminente.',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: no estado de necessidade o perigo não pode ter sido voluntariamente causado (art. 24).',
            b: 'Correta: a legítima defesa exige proporcionalidade entre agressão e defesa.',
            c: 'Errado: o estrito cumprimento de dever legal é excludente de ilicitude (art. 23).',
            d: 'Errado: o exercício regular de direito pode ser praticado por qualquer pessoa.',
            e: 'Errado: não há exigência de animus específico para as excludentes.',
        }
    ),

    // CONCURSO DE PESSOAS
    withFeedback(
        {
            id: 'direito-penal-7',
            text: 'No concurso de pessoas, considera-se coautor aquele que:',
            options: buildOptions([
                ['a', 'Apenas induz outro a cometer o crime.'],
                ['b', 'Realiza atos executórios do núcleo do tipo.'],
                ['c', 'Presta auxílio material antes da execução.'],
                ['d', 'Auxilia após o crime sem promessa anterior.'],
                ['e', 'Conhece a intenção criminosa mas não participa.'],
            ]),
            correctId: 'b',
            explanation:
                'Coautor é quem executa, junto com outros, o núcleo do tipo (art. 29, caput).',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: quem induz é partícipe, não coautor.',
            b: 'Correta: coautor pratica atos executórios do tipo penal.',
            c: 'Errado: auxílio material antes da execução caracteriza participação.',
            d: 'Errado: auxílio posterior ao crime sem ajuste prévio pode caracterizar favorecimento.',
            e: 'Errado: conhecer a intenção sem participar não configura coautoria.',
        }
    ),
    withFeedback(
        {
            id: 'direito-penal-8',
            text: 'Sobre a participação de menor importância (art. 29, §1º):',
            options: buildOptions([
                ['a', 'A pena é aumentada.'],
                ['b', 'A pena pode ser diminuída de 1/6 a 1/3.'],
                ['c', 'Não se aplica a crimes hediondos.'],
                ['d', 'Exclui a punibilidade.'],
                ['e', 'Só se aplica a coautores.'],
            ]),
            correctId: 'b',
            explanation:
                'A participação de menor importância permite redução da pena de 1/6 a 1/3 (art. 29, §1º).',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: a pena é reduzida, não aumentada.',
            b: 'Correta: art. 29, §1º prevê redução de 1/6 a 1/3.',
            c: 'Errado: aplica-se a todos os crimes, inclusive hediondos.',
            d: 'Errado: reduz a pena, mas não exclui a punibilidade.',
            e: 'Errado: aplica-se a partícipes, não a coautores.',
        }
    ),

    // PENAS
    withFeedback(
        {
            id: 'direito-penal-9',
            text: 'Sobre a substituição da pena privativa de liberdade por restritivas de direitos:',
            options: buildOptions([
                ['a', 'É possível em qualquer crime.'],
                ['b', 'Exige que a pena aplicada não seja superior a 4 anos e o crime não seja cometido com violência ou grave ameaça.'],
                ['c', 'Só se aplica a crimes culposos.'],
                ['d', 'É facultativa para o juiz, podendo substituir ou não sem fundamentação.'],
                ['e', 'Crimes hediondos sempre admitem substituição.'],
            ]),
            correctId: 'b',
            explanation:
                'A substituição (art. 44) exige: pena não superior a 4 anos; crime sem violência/grave ameaça ou culposo; e requisitos subjetivos.',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: há requisitos objetivos e subjetivos para substituição.',
            b: 'Correta: art. 44, I estabelece pena máxima de 4 anos e ausência de violência/grave ameaça.',
            c: 'Errado: aplica-se também a crimes dolosos sem violência ou grave ameaça.',
            d: 'Errado: a decisão deve ser fundamentada.',
            e: 'Errado: a Lei 8.072/90 proíbe substituição em crimes hediondos.',
        }
    ),
    withFeedback(
        {
            id: 'direito-penal-10',
            text: 'A suspensão condicional da pena (sursis):',
            options: buildOptions([
                ['a', 'Pode ser concedida para penas superiores a 2 anos.'],
                ['b', 'É aplicável quando a pena privativa não for superior a 2 anos.'],
                ['c', 'Não exige período de prova.'],
                ['d', 'É direito subjetivo do réu.'],
                ['e', 'Não pode ser revogada.'],
            ]),
            correctId: 'b',
            explanation:
                'O sursis (art. 77) exige pena não superior a 2 anos e outros requisitos legais.',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: o limite é 2 anos, não superior.',
            b: 'Correta: art. 77 estabelece limite de 2 anos para aplicação do sursis.',
            c: 'Errado: há período de prova de 2 a 4 anos (art. 77).',
            d: 'Errado: atendidos os requisitos, é um direito público subjetivo, mas há discricionariedade fundamentada.',
            e: 'Errado: pode ser revogado nas hipóteses do art. 81.',
        }
    ),

    // CRIMES CONTRA O PATRIMÔNIO
    withFeedback(
        {
            id: 'direito-penal-11',
            text: 'No crime de furto qualificado pelo rompimento de obstáculo (art. 155, §4º, I):',
            options: buildOptions([
                ['a', 'A pena é a mesma do furto simples.'],
                ['b', 'A pena é de reclusão de 2 a 8 anos e multa.'],
                ['c', 'Configura-se apenas com arrombamento de porta.'],
                ['d', 'Não se aplica a furto de veículo.'],
                ['e', 'É causa de aumento, não qualificadora.'],
            ]),
            correctId: 'b',
            explanation:
                'O furto qualificado por rompimento de obstáculo tem pena de reclusão de 2 a 8 anos e multa (art. 155, §4º, I).',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: a pena é maior no furto qualificado.',
            b: 'Correta: art. 155, §4º prevê pena de 2 a 8 anos.',
            c: 'Errado: qualquer rompimento de obstáculo qualifica.',
            d: 'Errado: aplica-se a furto de qualquer bem.',
            e: 'Errado: é qualificadora, não causa de aumento.',
        }
    ),
    withFeedback(
        {
            id: 'direito-penal-12',
            text: 'Diferencia o roubo (art. 157) do furto (art. 155):',
            options: buildOptions([
                ['a', 'A presença ou não de violência ou grave ameaça.'],
                ['b', 'O valor da coisa subtraída.'],
                ['c', 'O local do crime.'],
                ['d', 'A hora em que foi cometido.'],
                ['e', 'A reincidência do agente.'],
            ]),
            correctId: 'a',
            explanation:
                'O roubo distingue-se do furto pela presença de violência ou grave ameaça à pessoa.',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Correta: o roubo exige violência ou grave ameaça (art. 157).',
            b: 'Errado: o valor não distingue roubo de furto.',
            c: 'Errado: o local não é critério distintivo.',
            d: 'Errado: a hora do crime é irrelevante para distinção.',
            e: 'Errado: a reincidência não diferencia os tipos penais.',
        }
    ),

    // CRIMES CONTRA A PESSOA
    withFeedback(
        {
            id: 'direito-penal-13',
            text: 'No homicídio qualificado-privilegiado:',
            options: buildOptions([
                ['a', 'As circunstâncias são incompatíveis.'],
                ['b', 'É possível a coexistência de privilégio e qualificadora de ordem subjetiva.'],
                ['c', 'Não existe na legislação brasileira.'],
                ['d', 'A pena é sempre de detenção.'],
                ['e', 'Só se aplica a crimes culposos.'],
            ]),
            correctId: 'b',
            explanation:
                'O STF e STJ admitem a figura do homicídio qualificado-privilegiado quando coexistem privilégio (art. 121, §1º) e qualificadora de ordem subjetiva.',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: a jurisprudência admite a coexistência.',
            b: 'Correta: é possível combinar privilégio com qualificadora subjetiva.',
            c: 'Errado: a jurisprudência reconhece essa figura.',
            d: 'Errado: a pena continua sendo de reclusão.',
            e: 'Errado: aplica-se a homicídio doloso.',
        }
    ),
    withFeedback(
        {
            id: 'direito-penal-14',
            text: 'A lesão corporal de natureza grave ocorre quando resulta em:',
            options: buildOptions([
                ['a', 'Incapacidade para ocupações habituais por menos de 30 dias.'],
                ['b', 'Debilidade permanente de membro, sentido ou função.'],
                ['c', 'Perigo de vida em qualquer circunstância.'],
                ['d', 'Dor intensa momentânea.'],
                ['e', 'Arranhão superficial.'],
            ]),
            correctId: 'b',
            explanation:
                'A lesão grave prevê debilidade permanente de membro, sentido ou função (art. 129, §1º, II).',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: incapacidade por mais de 30 dias caracteriza lesão grave.',
            b: 'Correta: art. 129, §1º, II prevê debilidade permanente.',
            c: 'Errado: perigo de vida é resultado da lesão grave, não qualquer circunstância.',
            d: 'Errado: dor momentânea pode ser lesão leve.',
            e: 'Errado: arranhão superficial pode ser lesão levíssima.',
        }
    ),

    // CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA
    withFeedback(
        {
            id: 'direito-penal-15',
            text: 'O crime de peculato-furto (art. 312, §1º) ocorre quando o funcionário público:',
            options: buildOptions([
                ['a', 'Apropria-se de bem que possui a posse em razão do cargo.'],
                ['b', 'Furta bem público que não está sob sua guarda.'],
                ['c', 'Subtrai ou concorre para que seja subtraído bem que tem posse por facilidade do cargo.'],
                ['d', 'Recebe vantagem indevida.'],
                ['e', 'Retarda ato de ofício.'],
            ]),
            correctId: 'c',
            explanation:
                'No peculato-furto (art. 312, §1º), o funcionário não tem a posse, mas a facilita-ção pelo cargo permite a subtração.',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: quando tem posse, é peculato-apropriação.',
            b: 'Errado: precisa haver facilitação pelo cargo.',
            c: 'Correta: peculato-furto exige facilitação do cargo sem posse direta.',
            d: 'Errado: receber vantagem caracteriza corrupção passiva.',
            e: 'Errado: retardar ato configura prevaricação.',
        }
    ),
    withFeedback(
        {
            id: 'direito-penal-16',
            text: 'A corrupção passiva privilegiada (art. 317, §2º) prevê:',
            options: buildOptions([
                ['a', 'Aumento de pena.'],
                ['b', 'Redução da pena de 1/3 até a metade quando o funcionário cede a pedido ou influência.'],
                ['c', 'Isenção de pena.'],
                ['d', 'Conversão em crime de menor potencial ofensivo.'],
                ['e', 'Aplicação de pena de multa isolada.'],
            ]),
            correctId: 'b',
            explanation:
                'A corrupção passiva privilegiada (art. 317, §2º) permite redução de 1/3 até metade quando o funcionário cede a pedido ou influência.',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: há redução, não aumento.',
            b: 'Correta: art. 317, §2º prevê redução de 1/3 a 1/2.',
            c: 'Errado: não há isenção, apenas redução.',
            d: 'Errado: não há conversão em crime de menor potencial.',
            e: 'Errado: mantém-se a pena privativa.',
        }
    ),
    withFeedback(
        {
            id: 'etica-4',
            exams: ['camara dos deputados'],
            text: 'Segundo a Sumula Vinculante 13 e o codigo de etica da Camara, qual situacao caracteriza nepotismo e deve ser vedada?',
            options: buildOptions([
                ['a', 'Nomear parente ate o terceiro grau para cargo comissionado sob subordinacao direta.'],
                ['b', 'Designar servidor efetivo por criterio de antiguidade.'],
                ['c', 'Convocar servidor estavel para curso anual obrigatorio.'],
                ['d', 'Selecionar equipe tecnica por meio de processo interno com edital.'],
                ['e', 'Formar grupo de trabalho com servidores de diferentes areas.'],
            ]),
            correctId: 'a',
            explanation:
                'Nepotismo ocorre quando ha favorecimento de parente em cargo comissionado ou funcao gratificada, especialmente com relacao hierarquica direta.',
        },
        {
            a: 'Correta: a Sumula Vinculante 13 veda parentesco ate 3º grau em cargos com relacao de subordinacao.',
            b: 'Errado: a antiguidade e criterio impessoal.',
            c: 'Errado: capacitacoes obrigatorias nao envolvem favoritismo.',
            d: 'Errado: selecoes com edital preservam impessoalidade.',
            e: 'Errado: grupos tecnicos com distintos servidores nao configuram nepotismo.',
        }
    ),
    withFeedback(
        {
            id: 'etica-5',
            exams: ['camara dos deputados'],
            text: 'Em perfis institucionais de redes sociais, qual postura alinha-se ao codigo de etica do servidor?',
            options: buildOptions([
                ['a', 'Usar o perfil para autopromocao e pedidos de voto.'],
                ['b', 'Divulgar informacoes sigilosas quando houver interesse jornalistico.'],
                ['c', 'Publicar comunicados oficiais com linguagem impessoal e foco no interesse publico.'],
                ['d', 'Responder criticas com ironia para defender a imagem do orgao.'],
                ['e', 'Opinar sobre processos sigilosos para satisfazer seguidores.'],
            ]),
            correctId: 'c',
            explanation:
                'A comunicacao institucional deve ser impessoal, transparente e voltada ao interesse publico, preservando sigilos e evitando autopromocao.',
        },
        {
            a: 'Errado: autopromocao viola impessoalidade.',
            b: 'Errado: sigilos legais nao podem ser quebrados.',
            c: 'Correta: linguagem impessoal e informativa cumpre o codigo.',
            d: 'Errado: ironia compromete urbanidade e respeito.',
            e: 'Errado: processos sigilosos nao podem ser discutidos publicamente.',
        }
    ),
]);

// =====================================================
// DIREITO PROCESSUAL PENAL
// =====================================================
registerQuestions(['Direito Processual Penal'], [
    // INQUÉRITO POLICIAL
    withFeedback(
        {
            id: 'processo-penal-1',
            text: 'A prisao preventiva somente pode ser decretada quando presentes prova da existencia do crime, indicios suficientes de autoria e um dos fundamentos do art. 312 do CPP. Qual alternativa exemplifica fundamento valido?',
            options: buildOptions([
                ['a', 'Antecedentes criminais negativos por si sós.'],
                ['b', 'Descumprimento de medida protetiva de urgencia.'],
                ['c', 'Vontade do delegado.'],
                ['d', 'Simples clamor publico sem base fática.'],
                ['e', 'Ser o investigado reincidente especifico.'],
            ]),
            correctId: 'b',
            explanation:
                'O descumprimento de medida protetiva pode evidenciar risco a ordem publica e autoriza a preventiva (art. 313, III).',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: antecedentes ruins isoladamente não justificam a preventiva sem fundamento do art. 312.',
            b: 'Correta: o descumprimento de medida protetiva indica risco concreto e autoriza a prisão (art. 313, III).',
            c: 'Errado: a vontade da autoridade não supre os requisitos legais.',
            d: 'Errado: clamor popular desacompanhado de elementos concretos não legitima a medida.',
            e: 'Errado: reincidência específica não é fundamento autônomo; é apenas circunstância a ser ponderada.',
        }
    ),
    withFeedback(
        {
            id: 'processo-penal-2',
            text: 'Sobre nulidades processuais, assinale a afirmativa correta.',
            options: buildOptions([
                ['a', 'Toda nulidade absoluta precisa demonstrar prejuizo.'],
                ['b', 'Nulidades relativas podem ser alegadas a qualquer tempo.'],
                ['c', 'Aplica-se o principio pas de nullité sans grief (art. 563 CPP).'],
                ['d', 'A ausencia de defensor em interrogatorio nunca gera nulidade.'],
                ['e', 'A nulidade relativa nao depende de arguicao da parte.'],
            ]),
            correctId: 'c',
            explanation:
                'O CPP consagra que nao ha nulidade sem prejuizo. As relativas devem ser arguidas na primeira oportunidade.',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: nulidades absolutas prescindem de demonstração de prejuízo, ao contrário das relativas.',
            b: 'Errado: nulidades relativas devem ser alegadas na primeira oportunidade, sob pena de preclusão.',
            c: 'Correta: o art. 563 determina que não há nulidade sem prejuízo (pas de nullité sans grief).',
            d: 'Errado: a ausência de defensor gera nulidade absoluta, pois compromete a ampla defesa.',
            e: 'Errado: nulidades relativas precisam ser arguidas pela parte interessada.',
        }
    ),
    withFeedback(
        {
            id: 'processo-penal-3',
            text: 'Sobre o inquérito policial, é correto afirmar:',
            options: buildOptions([
                ['a', 'É procedimento judicial.'],
                ['b', 'É obrigatório para propositura de ação penal.'],
                ['c', 'É procedimento administrativo, inquisitivo e sigiloso.'],
                ['d', 'Admite contraditório pleno.'],
                ['e', 'Só é presidido por delegado federal.'],
            ]),
            correctId: 'c',
            explanation:
                'O inquérito é procedimento administrativo (não jurisdicional), inquisitivo (sem contraditório) e sigiloso (arts. 4º e 20 CPP).',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: é procedimento administrativo, não judicial.',
            b: 'Errado: o inquérito é dispensável se houver outros elementos.',
            c: 'Correta: características do inquérito segundo arts. 4º e 20 do CPP.',
            d: 'Errado: não há contraditório no inquérito, que é inquisitivo.',
            e: 'Errado: pode ser presidido por delegado estadual, civil ou federal.',
        }
    ),
    withFeedback(
        {
            id: 'processo-penal-4',
            text: 'O prazo para conclusão do inquérito policial quando o indiciado estiver preso é de:',
            options: buildOptions([
                ['a', '5 dias.'],
                ['b', '10 dias.'],
                ['c', '15 dias.'],
                ['d', '30 dias.'],
                ['e', '60 dias.'],
            ]),
            correctId: 'b',
            explanation:
                'O art. 10 do CPP prevê prazo de 10 dias quando o indiciado estiver preso (Justiça Estadual).',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: o prazo não é de 5 dias.',
            b: 'Correta: art. 10 estabelece 10 dias para indiciado preso.',
            c: 'Errado: 15 dias é prazo da Polícia Federal para preso.',
            d: 'Errado: 30 dias é o prazo quando o indiciado está solto.',
            e: 'Errado: não há prazo de 60 dias no CPP para inquérito comum.',
        }
    ),

    // AÇÃO PENAL
    withFeedback(
        {
            id: 'processo-penal-5',
            text: 'A ação penal privada caracteriza-se por:',
            options: buildOptions([
                ['a', 'Ser promovida pelo Ministério Público.'],
                ['b', 'Admitir perdão do ofendido até o trânsito em julgado.'],
                ['c', 'Não admitir renúncia.'],
                ['d', 'Ser indisponível.'],
                ['e', 'Não ter prazo decadencial.'],
            ]),
            correctId: 'b',
            explanation:
                'Na ação penal privada, o perdão do ofendido é admitido até o trânsito em julgado (art. 106, §2º CP).',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: a ação privada é promovida pelo ofendido ou representante legal.',
            b: 'Correta: o perdão é instituto da ação privada, admitido até o trânsito.',
            c: 'Errado: na ação privada há renúncia (art. 104 CP).',
            d: 'Errado: a ação privada é disponível.',
            e: 'Errado: há prazo decadencial de 6 meses (art. 103 CP).',
        }
    ),
    withFeedback(
        {
            id: 'processo-penal-6',
            text: 'Sobre a ação penal pública condicionada à representação:',
            options: buildOptions([
                ['a', 'Não há prazo para oferecimento da representação.'],
                ['b', 'A representação é irretratável.'],
                ['c', 'O prazo para representar é de 6 meses a contar do conhecimento da autoria.'],
                ['d', 'A representação só pode ser oferecida pessoalmente.'],
                ['e', 'O Ministério Público pode agir sem representação.'],
            ]),
            correctId: 'c',
            explanation:
                'O art. 38 do CPP estabelece prazo decadencial de 6 meses para oferecimento da representação.',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: há prazo decadencial de 6 meses.',
            b: 'Errado: até oferecimento da denúncia, a representação é retratável (art. 25 CPP).',
            c: 'Correta: art. 38 do CPP prevê prazo de 6 meses.',
            d: 'Errado: pode ser feita por procurador com poderes especiais.',
            e: 'Errado: sem representação não há justa causa para ação condicionada.',
        }
    ),

    // PRISÕES E MEDIDAS CAUTELARES
    withFeedback(
        {
            id: 'processo-penal-7',
            text: 'A prisão em flagrante pode ser efetuada:',
            options: buildOptions([
                ['a', 'Apenas por agentes policiais.'],
                ['b', 'Por qualquer pessoa do povo.'],
                ['c', 'Somente com mandado judicial.'],
                ['d', 'Apenas em crimes hediondos.'],
                ['e', 'Somente durante o dia.'],
            ]),
            correctId: 'b',
            explanation:
                'O art. 301 do CPP prevê que qualquer pessoa pode efetuar prisão em flagrante.',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: qualquer pessoa pode prender em flagrante.',
            b: 'Correta: art. 301 autoriza prisão por qualquer do povo.',
            c: 'Errado: flagrante não exige mandado.',
            d: 'Errado: aplica-se a qualquer crime.',
            e: 'Errado: pode ocorrer a qualquer hora.',
        }
    ),
    withFeedback(
        {
            id: 'processo-penal-8',
            text: 'São hipóteses de flagrante próprio:',
            options: buildOptions([
                ['a', 'Estar sendo perseguido pela polícia, logo após a prática do crime.'],
                ['b', 'Ser encontrado com instrumentos horas depois do crime.'],
                ['c', 'Estar cometendo a infração penal ou acabar de cometê-la.'],
                ['d', 'Confessar espontaneamente o crime dias depois.'],
                ['e', 'Ser encontrado com objetos produto do crime após a prescrição.'],
            ]),
            correctId: 'c',
            explanation:
                'Flagrante próprio ocorre quando a pessoa está cometendo ou acabou de cometer o crime (art. 302, I e II).',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: perseguição caracteriza flagrante impróprio.',
            b: 'Errado: horas depois com instrumentos pode ser flagrante presumido.',
            c: 'Correta: art. 302, I e II descrevem flagrante próprio.',
            d: 'Errado: confissão posterior não caracteriza flagrante.',
            e: 'Errado: após prescrição não há flagrante.',
        }
    ),
    withFeedback(
        {
            id: 'processo-penal-9',
            text: 'A prisão temporária está prevista na Lei 7.960/89 e pode ser decretada:',
            options: buildOptions([
                ['a', 'Em qualquer crime doloso.'],
                ['b', 'Durante investigação de crimes hediondos ou rol taxativo da lei.'],
                ['c', 'Por prazo indeterminado.'],
                ['d', 'Pela autoridade policial.'],
                ['e', 'Apenas em crimes contra o patrimônio.'],
            ]),
            correctId: 'b',
            explanation:
                'A prisão temporária aplica-se a crimes hediondos e rol taxativo do art. 1º, III da Lei 7.960/89.',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: só se aplica a crimes do rol taxativo ou hediondos.',
            b: 'Correta: Lei 7.960/89 prevê rol taxativo e crimes hediondos.',
            c: 'Errado: há prazo de 5 dias (prorrogável por mais 5).',
            d: 'Errado: só pode ser decretada por juiz.',
            e: 'Errado: aplica-se a diversos crimes, não apenas patrimoniais.',
        }
    ),
    withFeedback(
        {
            id: 'processo-penal-10',
            text: 'As medidas cautelares diversas da prisão (art. 319, CPP) incluem:',
            options: buildOptions([
                ['a', 'Suspensão condicional da pena.'],
                ['b', 'Comparecimento periódico em juízo e monitoramento eletrônico.'],
                ['c', 'Remição de pena.'],
                ['d', 'Progressão de regime.'],
                ['e', 'Livramento condicional.'],
            ]),
            correctId: 'b',
            explanation:
                'O art. 319 prevê medidas como comparecimento periódico e monitoramento eletrônico.',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: sursis é instituto da execução penal, não medida cautelar.',
            b: 'Correta: art. 319 prevê essas medidas alternativas à prisão.',
            c: 'Errado: remição é instituto da execução penal.',
            d: 'Errado: progressão é da execução penal.',
            e: 'Errado: livramento é instituto da execução penal.',
        }
    ),

    // PROVAS
    withFeedback(
        {
            id: 'processo-penal-11',
            text: 'Sobre a prova ilícita no processo penal:',
            options: buildOptions([
                ['a', 'É admitida se for favorável ao réu.'],
                ['b', 'É inadmissível e contamina provas dela derivadas (teoria dos frutos da árvore envenenada).'],
                ['c', 'Pode ser usada contra o réu.'],
                ['d', 'Só é ilícita se obtida pela polícia.'],
                ['e', 'Não há vedação no CPP.'],
            ]),
            correctId: 'b',
            explanation:
                'CF art. 5º, LVI veda provas ilícitas, e a teoria dos frutos da árvore envenenada contamina derivadas.',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: prova ilícita é inadmissível mesmo sendo favorável ao réu.',
            b: 'Correta: CF art. 5º, LVI e jurisprudência consolidada.',
            c: 'Errado: não pode ser usada contra ninguém.',
            d: 'Errado: qualquer prova ilícita é vedada, independente de quem a obtém.',
            e: 'Errado: há vedação expressa na CF.',
        }
    ),
    withFeedback(
        {
            id: 'processo-penal-12',
            text: 'A confissão no processo penal:',
            options: buildOptions([
                ['a', 'É prova absoluta e suficiente para condenação.'],
                ['b', 'Deve ser analisada em conjunto com outras provas (art. 197 CPP).'],
                ['c', 'Não pode ser retratada.'],
                ['d', 'Gera redução obrigatória de 1/3 da pena.'],
                ['e', 'Só tem valor se feita perante o juiz.'],
            ]),
            correctId: 'b',
            explanation:
                'Art. 197 CPP: a confissão deve ser cotejada com outras provas; não tem valor absoluto.',
            exams: ['pmdf', 'policia penal mg'],
        },
        {
            a: 'Errado: confissão não é prova absoluta.',
            b: 'Correta: art. 197 estabelece análise contextual.',
            c: 'Errado: a confissão é retratável.',
            d: 'Errado: redução de 1/3 é da delação premiada, não da confissão simples.',
            e: 'Errado: confissão em qualquer fase tem valor probatório.',
        }
    ),
]);

// =====================================================
// LEI DE EXECUÇÃO PENAL (LEP)
// =====================================================
registerQuestions(['Lei de Execucao Penal', 'LEP', 'Lei de Execução Penal'], [
    // REMIÇÃO
    withFeedback(
        {
            id: 'lep-1',
            text: 'No regime fechado, Joao trabalha em oficina. Quantos dias de pena ele remira, conforme a LEP, a cada 3 dias de trabalho?',
            options: buildOptions([
                ['a', 'Meio dia.'],
                ['b', 'Um dia.'],
                ['c', 'Dois dias.'],
                ['d', 'Tres dias.'],
                ['e', 'Somente apos 12 dias.'],
            ]),
            correctId: 'b',
            explanation:
                'O art. 126 da LEP estabelece remicao de 1 dia a cada 3 dias de trabalho (ou 12h de estudo).',
            exams: ['policia penal mg'],
        },
        {
            a: 'Errado: a fração é de 1 dia a cada 3 trabalhados, não meio dia.',
            b: 'Correta: art. 126 da LEP garante 1 dia de remição a cada 3 de trabalho.',
            c: 'Errado: não há previsão de 2 dias de remição para 3 trabalhados.',
            d: 'Errado: remir três dias exigiria 9 dias de trabalho, não 3.',
            e: 'Errado: 12 horas é a quantidade de estudo para remir 1 dia, não requisito para o trabalho.',
        }
    ),
    withFeedback(
        {
            id: 'lep-2',
            text: 'Sobre a remição pelo estudo, a LEP estabelece que:',
            options: buildOptions([
                ['a', 'O preso remirá 1 dia a cada 12 horas de estudo.'],
                ['b', 'Apenas o trabalho gera remição.'],
                ['c', 'Estudo e trabalho não podem ser cumulados.'],
                ['d', 'Só há remição em regime fechado.'],
                ['e', 'A remição não se aplica a presos provisórios.'],
            ]),
            correctId: 'a',
            explanation:
                'Art. 126, §1º da LEP: a cada 12 horas de estudo presencial ou a distância, remirá-se 1 dia de pena.',
            exams: ['policia penal mg'],
        },
        {
            a: 'Correta: art. 126, §1º prevê remição de 1 dia a cada 12 horas de estudo.',
            b: 'Errado: o estudo também gera remição desde 2011.',
            c: 'Errado: é possível cumular estudo e trabalho (respeitados limites).',
            d: 'Errado: aplica-se a todos os regimes.',
            e: 'Errado: STJ admite remição de presos provisórios.',
        }
    ),

    // REGIMES PENITENCIÁRIOS
    withFeedback(
        {
            id: 'lep-3',
            text: 'No regime fechado, a execução da pena se dá em:',
            options: buildOptions([
                ['a', 'Colônia agrícola ou industrial.'],
                ['b', 'Casa do albergado.'],
                ['c', 'Estabelecimento de segurança máxima ou média.'],
                ['d', 'Prisão domiciliar.'],
                ['e', 'Centro de detenção provisória.'],
            ]),
            correctId: 'c',
            explanation:
                'Art. 87 da LEP: o regime fechado é cumprido em estabelecimento de segurança máxima ou média.',
            exams: ['policia penal mg'],
        },
        {
            a: 'Errado: colônia agrícola/industrial é para regime semiaberto.',
            b: 'Errado: casa do albergado é para regime aberto.',
            c: 'Correta: art. 87 determina penitenciária de segurança máxima ou média.',
            d: 'Errado: prisão domiciliar é medida excepcional.',
            e: 'Errado: CDP é para presos provisórios.',
        }
    ),
    withFeedback(
        {
            id: 'lep-4',
            text: 'Para progressão do regime fechado para o semiaberto, o condenado precisa cumprir, em regra:',
            options: buildOptions([
                ['a', '1/6 da pena se primário.'],
                ['b', '1/5 da pena se primário.'],
                ['c', '1/4 da pena se primário.'],
                ['d', '1/3 da pena se reincidente.'],
                ['e', '2/3 da pena se primário.'],
            ]),
            correctId: 'a',
            explanation:
                'Art. 112 da LEP: o condenado não reincidente precisa cumprir 1/6 da pena para progressão, além de bom comportamento.',
            exams: ['policia penal mg'],
        },
        {
            a: 'Correta: art. 112 prevê 1/6 para primário.',
            b: 'Errado: 1/5 é para reincidente em crime comum.',
            c: 'Errado: 1/4 é para reincidente em crime hediondo.',
            d: 'Errado: 1/3 é para reincidente específico em hediondo.',
            e: 'Errado: 2/3 é requisito para livramento condicional em hediondos.',
        }
    ),
    withFeedback(
        {
            id: 'lep-5',
            text: 'O regime aberto caracteriza-se por:',
            options: buildOptions([
                ['a', 'Cumprimento em penitenciária de segurança máxima.'],
                ['b', 'Trabalho externo durante o dia e recolhimento noturno em casa do albergado.'],
                ['c', 'Impossibilidade de trabalho externo.'],
                ['d', 'Cumprimento integral em colônia agrícola.'],
                ['e', 'Uso obrigatório de tornozeleira eletrônica.'],
            ]),
            correctId: 'b',
            explanation:
                'Art. 36: regime aberto baseia-se em autodisciplina, trabalho externo e recolhimento noturno em casa do albergado.',
            exams: ['policia penal mg'],
        },
        {
            a: 'Errado: segurança máxima é para regime fechado.',
            b: 'Correta: art. 36 define essas características.',
            c: 'Errado: o trabalho externo é característico do regime aberto.',
            d: 'Errado: colônia agrícola é para semiaberto.',
            e: 'Errado: tornozeleira não é obrigatória no regime aberto.',
        }
    ),

    // DIREITOS E DEVERES DO PRESO
    withFeedback(
        {
            id: 'lep-6',
            text: 'São direitos do preso, conforme LEP:',
            options: buildOptions([
                ['a', 'Vestimentas fornecidas pelo Estado e alimentação suficiente.'],
                ['b', 'Uso livre de celular.'],
                ['c', 'Receber visitas conjugais a qualquer momento.'],
                ['d', 'Sair do estabelecimento sem autorização.'],
                ['e', 'Votar em eleições municipais.'],
            ]),
            correctId: 'a',
            explanation:
                'Art. 41, inciso VII: o preso tem direito a vestuário e alimentação suficiente.',
            exams: ['policia penal mg'],
        },
        {
            a: 'Correta: art. 41, VII garante vestuário e alimentação.',
            b: 'Errado: uso de celular é proibido em estabelecimentos penais.',
            c: 'Errado: visitas íntimas são regulamentadas, não a qualquer momento.',
            d: 'Errado: saída sem autorização é falta grave.',
            e: 'Errado: presos condenados perdem direitos políticos (CF art. 15).',
        }
    ),
    withFeedback(
        {
            id: 'lep-7',
            text: 'Quanto às assistências previstas na LEP:',
            options: buildOptions([
                ['a', 'Não há previsão de assistência jurídica.'],
                ['b', 'A assistência material, à saúde, jurídica, educacional, social e religiosa são deveres do Estado.'],
                ['c', 'Assistência é faculdade do Estado, não dever.'],
                ['d', 'Apenas assistência à saúde é obrigatória.'],
                ['e', 'Assistência religiosa é proibida.'],
            ]),
            correctId: 'b',
            explanation:
                'Art. 10 e 11 da LEP: o Estado deve prestar assistência material, à saúde, jurídica, educacional, social e religiosa.',
            exams: ['policia penal mg'],
        },
        {
            a: 'Errado: a assistência jurídica é prevista no art. 15 da LEP.',
            b: 'Correta: arts. 10 a 27 da LEP preveem todas essas assistências.',
            c: 'Errado: são deveres do Estado, não faculdades.',
            d: 'Errado: todas as assistências são obrigatórias.',
            e: 'Errado: assistência religiosa é assegurada (art. 24 LEP).',
        }
    ),
    withFeedback(
        {
            id: 'lep-8',
            text: 'O trabalho do preso é:',
            options: buildOptions([
                ['a', 'Facultativo, sem qualquer obrigatoriedade.'],
                ['b', 'Obrigatório como dever social e condição de dignidade humana (art. 28 e 39).'],
                ['c', 'Proibido pela LEP.'],
                ['d', 'Apenas permitido em regime aberto.'],
                ['e', 'Não gera qualquer benefício ao preso.'],
            ]),
            correctId: 'b',
            explanation:
                'Arts. 28 e 39 da LEP: o trabalho é dever social e condição de dignidade, com finalidade educativa e produtiva.',
            exams: ['policia penal mg'],
        },
        {
            a: 'Errado: o trabalho é dever do preso.',
            b: 'Correta: arts. 28 e 39 estabelecem o trabalho como dever e direito.',
            c: 'Errado: o trabalho é incentivado e regulamentado.',
            d: 'Errado: aplica-se a todos os regimes.',
            e: 'Errado: gera remição e remuneração (3/4 do salário mínimo).',
        }
    ),

    // FALTAS DISCIPLINARES
    withFeedback(
        {
            id: 'lep-9',
            text: 'São exemplos de faltas graves (art. 50):',
            options: buildOptions([
                ['a', 'Incitar movimento de subversão à ordem e fugir.'],
                ['b', 'Apenas descumprir horários.'],
                ['c', 'Reclamar da alimentação.'],
                ['d', 'Pedir progressão de regime.'],
                ['e', 'Estudar durante o repouso noturno.'],
            ]),
            correctId: 'a',
            explanation:
                'Art. 50 da LEP: falta grave inclui subversão à ordem, fuga, posse de celular, ameaça, lesão corporal, entre outras.',
            exams: ['policia penal mg'],
        },
        {
            a: 'Correta: art. 50, II e VII preveem subversão e fuga como faltas graves.',
            b: 'Errado: descumprir horários pode ser falta média/leve.',
            c: 'Errado: reclamar da alimentação não é falta grave.',
            d: 'Errado: pedir progressão é direito.',
            e: 'Errado: estudar não é falta.',
        }
    ),
    withFeedback(
        {
            id: 'lep-10',
            text: 'A prática de falta grave acarreta:',
            options: buildOptions([
                ['a', 'Regressão de regime e perda de dias remidos.'],
                ['b', 'Extinção automática da pena.'],
                ['c', 'Progressão imediata.'],
                ['d', 'Nenhuma consequência.'],
                ['e', 'Apenas advertência verbal.'],
            ]),
            correctId: 'a',
            explanation:
                'Art. 118 e 127: falta grave pode causar regressão de regime e perda de até 1/3 dos dias remidos.',
            exams: ['policia penal mg'],
        },
        {
            a: 'Correta: arts. 118 e 127 preveem regressão e perda de dias remidos.',
            b: 'Errado: não extingue a pena.',
            c: 'Errado: impede a progressão, não a concede.',
            d: 'Errado: há sanções previstas.',
            e: 'Errado: as sanções vão além de advertência.',
        }
    ),
    withFeedback(
        {
            id: 'lep-11',
            text: 'O procedimento administrativo disciplinar (PAD) para apuração de falta grave:',
            options: buildOptions([
                ['a', 'Não assegura defesa ao preso.'],
                ['b', 'Deve assegurar ampla defesa e contraditório (Súmula Vinculante 5 do STF).'],
                ['c', 'É sigiloso e sem recursos.'],
                ['d', 'Pode ser conduzido por qualquer servidor.'],
                ['e', 'Não é obrigatório.'],
            ]),
            correctId: 'b',
            explanation:
                'Súmula Vinculante 5: falta de defesa técnica no PAD para falta discipl inar não ofende CF se garantidos contraditório e ampla defesa.',
            exams: ['policia penal mg'],
        },
        {
            a: 'Errado: deve assegurar ampla defesa.',
            b: 'Correta: SV 5 assegura contraditório e ampla defesa.',
            c: 'Errado: é possível recurso e deve haver transparência.',
            d: 'Errado: deve ser conduzido pela autoridade competente.',
            e: 'Errado: é obrigatório para apuração de falta grave.',
        }
    ),

    // LIVRAMENTO CONDICIONAL E PROGRESSÃO
    withFeedback(
        {
            id: 'lep-12',
            text: 'O livramento condicional será concedido ao condenado não reincidente em crime doloso que tenha cumprido:',
            options: buildOptions([
                ['a', '1/6 da pena.'],
                ['b', '1/3 da pena.'],
                ['c', 'Metade da pena.'],
                ['d', 'Mais de 1/3 da pena.'],
                ['e', 'Toda a pena.'],
            ]),
            correctId: 'd',
            explanation:
                'Art. 83, I do CP: não reincidente em crime doloso precisa cumprir mais de 1/3 da pena para livramento condicional.',
            exams: ['policia penal mg'],
        },
        {
            a: 'Errado: 1/6 é para progressão de regime.',
            b: 'Errado: 1/3 é requisito mínimo; precisa ser mais de 1/3.',
            c: 'Errado: metade é para reincidente.',
            d: 'Correta: art. 83, I exige mais de 1/3.',
            e: 'Errado: se cumprisse toda a pena, seria extinta, não haveria livramento.',
        }
    ),
    withFeedback(
        {
            id: 'lep-13',
            text: 'A saída temporária (art. 122 LEP) pode ser autorizada para presos em regime:',
            options: buildOptions([
                ['a', 'Fechado.'],
                ['b', 'Semiaberto.'],
                ['c', 'Aberto.'],
                ['d', 'Provisório.'],
                ['e', 'RDD (Regime Disciplinar Diferenciado).'],
            ]),
            correctId: 'b',
            explanation:
                'Art. 122 da LEP: saída temporária é benefício para presos em regime semiaberto.',
            exams: ['policia penal mg'],
        },
        {
            a: 'Errado: no fechado não há saída temporária, apenas saídas excepcionais (art. 120).',
            b: 'Correta: art. 122 permite saída temporária no semiaberto.',
            c: 'Errado: no aberto o preso já trabalha fora diariamente.',
            d: 'Errado: preso provisório não está em execução de pena.',
            e: 'Errado: RDD é regime disciplinar excepcional.',
        }
    ),
    withFeedback(
        {
            id: 'lep-14',
            text: 'O Regime Disciplinar Diferenciado (RDD) pode ser aplicado quando o preso:',
            options: buildOptions([
                ['a', 'Praticar qualquer falta leve.'],
                ['b', 'Apresentar alto risco para a ordem e segurança ou for líder de organização criminosa.'],
                ['c', 'Solicitar progressão de regime.'],
                ['d', 'Recusar-se a trabalhar por motivos médicos.'],
                ['e', 'Receber visitas familiares.'],
            ]),
            correctId: 'b',
            explanation:
                'Art. 52 da LEP: RDD aplica-se a pres os de alto risco ou envolvidos com organizações criminosas.',
            exams: ['policia penal mg'],
        },
        {
            a: 'Errado: RDD é para situações excepcionais de alta periculosidade.',
            b: 'Correta: art. 52 dainternao LEP prevê essas hipóteses.',
            c: 'Errado: solicitar progressão é direito do preso.',
            d: 'Errado: recusa justificada não gera RDD.',
            e: 'Errado: receber visitas é direito.',
        }
    ),
    withFeedback(
        {
            id: 'lep-2',
            exams: ['policia penal mg', 'pmdf'],
            text: 'De acordo com o art. 41 da LEP, qual direito nao pode ser restringido mesmo em regime disciplinar mais grave?',
            options: buildOptions([
                ['a', 'Atendimento a saude.'],
                ['b', 'Visitas da familia e do advogado.'],
                ['c', 'Remicao pelo trabalho.'],
                ['d', 'Participacao em eventos recreativos.'],
                ['e', 'Uso livre de aparelho celular.'],
            ]),
            correctId: 'b',
            explanation:
                'O art. 41 assegura ao preso visitas do conjuge, companheira, parentes e amigos em dias determinados, bem como do advogado, mesmo com restricoes disciplinares.',
        },
        {
            a: 'Errado: o atendimento pode ser adequadamente organizado.',
            b: 'Correta: visitas familiares e do advogado sao direitos assegurados.',
            c: 'Errado: a remicao depende do trabalho/estudo e pode ser suspensa quando nao realizado.',
            d: 'Errado: atividades recreativas podem ser restringidas.',
            e: 'Errado: celulares sao proibidos.',
        }
    ),
    withFeedback(
        {
            id: 'lep-3',
            exams: ['policia penal mg', 'pmdf'],
            text: 'O Conselho Disciplinar de uma unidade prisional, segundo a LEP, deve ser composto por:',
            options: buildOptions([
                ['a', 'Apenas pelo diretor e seu substituto.'],
                ['b', 'Diretor, representante do Ministerio Publico e defensor publico.'],
                ['c', 'Integrantes da administracao indicados pelo diretor, no minimo tres servidores.'],
                ['d', 'Dois presos eleitos e um servidor.'],
                ['e', 'Somente policiais penais de plantao.'],
            ]),
            correctId: 'c',
            explanation:
                'O art. 59 prevê Conselhos compostos por servidores do estabelecimento designados pela direção, garantindo pluralidade e registro em livro próprio.',
        },
        {
            a: 'Errado: exige colegiado.',
            b: 'Errado: a composição administrativa é interna.',
            c: 'Correta: servidores designados compõem o conselho.',
            d: 'Errado: presos não integram o conselho disciplinar.',
            e: 'Errado: não se limita a quem está de plantão.',
        }
    ),
]);

registerQuestions(['Normas da Policia Penal de MG', 'Normas Policia Penal MG'], [
    withFeedback(
        {
            id: 'normas-ppmg-1',
            exams: ['policia penal mg'],
            text: 'O organograma padrao da Policia Penal integra a estrutura da:',
            options: buildOptions([
                ['a', 'Secretaria de Estado de Seguranca Publica (SESP).'],
                ['b', 'Secretaria de Justica e Seguranca Publica (SEJUSP) e do Sistema Prisional.'],
                ['c', 'Assembleia Legislativa de MG.'],
                ['d', 'Prefeituras municipais.'],
                ['e', 'Defensoria Publica.'],
            ]),
            correctId: 'b',
            explanation:
                'As normas internas vinculam a Policia Penal à SEJUSP, com unidades regionais subordinadas aos Departamentos da pasta.',
        },
        {
            a: 'Errado: a SEJUSP, e nao a SESP federal, coordena a estrutura. ',
            b: 'Correta: descreve o vinculo institucional correto. ',
            c: 'Errado: a ALMG nao integra o organograma operativo. ',
            d: 'Errado: as prefeituras nao gerem a Policia Penal. ',
            e: 'Errado: a Defensoria atua como controle externo. ',
        }
    ),
    withFeedback(
        {
            id: 'normas-ppmg-2',
            exams: ['policia penal mg'],
            text: 'As rotinas de escolta externa exigem, obrigatoriamente:',
            options: buildOptions([
                ['a', 'Registro em livro especifico, planejamento com base em analise de risco e comunicacao ao centro integrado.'],
                ['b', 'Apenas a escala verbal do plantao.'],
                ['c', 'Dispensa de comunicacao quando a distancia for inferior a 5 km.'],
                ['d', 'Substituicao de armas letais por tasers em quaisquer deslocamentos.'],
                ['e', 'Presenca do diretor-geral em toda escolta.'],
            ]),
            correctId: 'a',
            explanation:
                'As normas estaduais determinam planejamento com ficha de risco, autorizacao do comando operacional e registro das saidas e retornos. ',
        },
        {
            a: 'Correta: resume os procedimentos padrao. ',
            b: 'Errado: deve haver registro formal. ',
            c: 'Errado: toda escolta exige comunicacao. ',
            d: 'Errado: o uso da arma depende da avaliacao de risco. ',
            e: 'Errado: o diretor delega a chefias operacionais. ',
        }
    ),
    withFeedback(
        {
            id: 'normas-ppmg-3',
            exams: ['policia penal mg'],
            text: 'Sobre gestao de crises em unidades prisionais, a doutrina estadual estabelece que:',
            options: buildOptions([
                ['a', 'Qualquer agente pode negociar sem respaldo da cadeia de comando.'],
                ['b', 'O plano de contingencia deve prever acionamento de grupos de intervençao, comunicacao com autoridades externas e registro posterior.'],
                ['c', 'Nao ha necessidade de revisar procedimentos apos a crise.'],
                ['d', 'A prioridade e sempre a repressao imediata, mesmo com refens.'],
                ['e', 'Nao se admite utilizaçao da LEP como base para direitos dos custodiados.'],
            ]),
            correctId: 'b',
            explanation:
                'Os protocolos estaduais exigem planos atualizados, negociacao controlada e integracao com LEP e corregedoria.',
        },
        {
            a: 'Errado: ha cadeia de comando clara. ',
            b: 'Correta: sintetiza as etapas essenciais do plano. ',
            c: 'Errado: a avaliacao pos-crise e obrigatoria. ',
            d: 'Errado: a preservacao de vidas e prioridade. ',
            e: 'Errado: a LEP continua fundamento para direitos basicos. ',
        }
    ),
    withFeedback(
        {
            id: 'normas-ppmg-4',
            exams: ['policia penal mg'],
            text: 'O protocolo de uso progressivo da forca determina que:',
            options: buildOptions([
                ['a', 'A forca letal seja sempre a primeira escolha.'],
                ['b', 'As intervencoes sejam graduais, com dialogo, controle fisico e meios menos letais antes da forca potencialmente letal.'],
                ['c', 'Nao haja necessidade de registrar o uso da forca.'],
                ['d', 'Algemas sejam proibidas em todas as situacoes.'],
                ['e', 'O agente decida isoladamente sem comunicar a chefia.'],
            ]),
            correctId: 'b',
            explanation:
                'As normas da SEJUSP exigem escalonamento, supervisao e registros formais para cada emprego da forca.',
        },
        {
            a: 'Errado: a forca letal e ultima razao.',
            b: 'Correta: descreve a progressividade exigida.',
            c: 'Errado: o uso da forca deve ser registrado.',
            d: 'Errado: algemas podem ser usadas conforme avaliacao de risco.',
            e: 'Errado: e obrigatoria a comunicacao ? chefia.',
        }
    ),
    withFeedback(
        {
            id: 'normas-ppmg-5',
            exams: ['policia penal mg'],
            text: 'Apos motim, fuga ou ocorrencia grave, as normas estaduais determinam:',
            options: buildOptions([
                ['a', 'Apenas comunicacao verbal entre plantoes.'],
                ['b', 'Relatorio circunstanciado no SISDEP e envio imediato ? chefia e ? corregedoria.'],
                ['c', 'Registro exclusivo pelo diretor-geral.'],
                ['d', 'Que se aguarde ordem judicial para documentar.'],
                ['e', 'Dispensa de registro para evitar exposicao.'],
            ]),
            correctId: 'b',
            explanation:
                'O plano de gestao de crises imp?e registro formal e comunicacao para avaliacao e correcao de procedimentos.',
        },
        {
            a: 'Errado: comunicacao informal nao basta.',
            b: 'Correta: corresponde ao rito padrao.',
            c: 'Errado: todos os envolvidos podem ser ouvidos.',
            d: 'Errado: nao e necessaria ordem judicial.',
            e: 'Errado: a transparencia e obrigatoria.',
        }
    ),

]);

// ETICA - EXPANSAO
registerQuestions(['Etica no Servico Publico', 'Etica'], [
    {
        id: 'exp-etica-1',
        exams: ['detran df', 'camara dos deputados', 'pmdf', 'policia penal mg'],
        topic: 'Conflito de interesses e deveres funcionais',
        text: 'Configura exemplo TIPICO de conflito de interesses no serviço publico:',
        options: buildOptions([
            ['a', 'Servidor participar de curso de capacitaçao.'],
            ['b', 'Servidor fiscalizar processo em que possui interesse pessoal direto.'],
            ['c', 'Servidor cumprir jornada regular.'],
            ['d', 'Servidor registrar ponto corretamente.'],
            ['e', 'Servidor atender o cidadão com urbanidade.'],
        ]),
        correctId: 'b',
        explanation:
            'Ha risco de parcialidade e beneficio privado; o correto e declarar impedimento/suspeiçao conforme normas aplicaveis.',
    },
]);

// CTB / LEGISLACAO DE TRANSITO - EXPANSAO
registerQuestions(['Legislacao de Transito', 'Codigo de Transito Brasileiro'], [
    {
        id: 'exp-ctb-1',
        exams: ['detran df'],
        topic: 'Infraçoes, penalidades e medidas administrativas',
        text: 'No CTB, penalidade e medida administrativa se diferenciam porque:',
        options: buildOptions([
            ['a', 'Sao sinonimos perfeitos.'],
            ['b', 'Penalidade tem carater sancionatorio; medida administrativa e providencia imediata/operacional.'],
            ['c', 'Medida administrativa depende sempre de decisao judicial.'],
            ['d', 'Penalidade nunca gera pontuaçao.'],
            ['e', 'Medida administrativa so existe para crimes de transito.'],
        ]),
        correctId: 'b',
        explanation:
            'Penalidade pune (multa, suspensao etc.); medida administrativa e acao de fiscalizacao (retençao, remoçao, recolhimento).',
    },
    {
        id: 'exp-ctb-2',
        exams: ['detran df'],
        topic: 'Processo administrativo e recursos',
        text: 'Em regra, o direito de defesa no processo de transito envolve:',
        options: buildOptions([
            ['a', 'Somente recurso ao Judiciario.'],
            ['b', 'Defesa previa e recursos nas instancias administrativas (ex.: JARI e CETRAN/CONTRANDIFE).'],
            ['c', 'Apenas pagamento imediato sem possibilidade de recurso.'],
            ['d', 'Recurso unico e definitivo ao agente autuador.'],
            ['e', 'Nao existe contraditorio no transito.'],
        ]),
        correctId: 'b',
        explanation:
            'O CTB e normas do sistema preveem contraditorio e ampla defesa, com instancias administrativas (p. ex., JARI).',
    },
]);

// LODF / LEGISLACAO DF - EXPANSAO
registerQuestions(['Lei Organica do DF', 'LODF'], [
    {
        id: 'exp-lodf-1',
        exams: ['detran df'],
        topic: 'Transparencia e controle social',
        text: 'A ideia de controle social na administraçao publica distrital se relaciona principalmente a:',
        options: buildOptions([
            ['a', 'Sigilo absoluto de atos administrativos.'],
            ['b', 'Participaçao cidadã e mecanismos de transparência e prestaçao de contas.'],
            ['c', 'Dispensa de publicaçao oficial.'],
            ['d', 'Substituiçao do controle interno pelo privado.'],
            ['e', 'Eliminaçao do controle externo.'],
        ]),
        correctId: 'b',
        explanation:
            'Controle social envolve participaçao, transparência, acesso à informaçao e fiscalizaçao pela sociedade.',
    },
]);

// DIREITO PENAL - EXPANSAO
registerQuestions(['Direito Penal'], [
    {
        id: 'exp-penal-1',
        exams: ['pmdf', 'policia penal mg'],
        topic: 'Concurso de pessoas',
        text: 'Sobre concurso de pessoas, assinale a alternativa CORRETA.',
        options: buildOptions([
            ['a', 'Exige sempre autoria mediata.'],
            ['b', 'Nao admite participaçao.'],
            ['c', 'Regra geral: quem concorre para o crime responde na medida de sua culpabilidade.'],
            ['d', 'Somente o autor responde; o partícipe nunca.'],
            ['e', 'Sempre que houver 2 pessoas, ha concurso de crimes.'],
        ]),
        correctId: 'c',
        explanation:
            'No CP, a regra geral e a responsabilidade na medida da culpabilidade; avaliam-se condutas, liame subjetivo e relevância causal.',
    },
    {
        id: 'exp-penal-2',
        exams: ['pmdf'],
        topic: 'Excludentes de ilicitude',
        text: '? exemplo classico de estado de necessidade:',
        options: buildOptions([
            ['a', 'Agente pratica crime por vingança.'],
            ['b', 'Agente destrói bem alheio para salvar pessoa de perigo atual inevitavel.'],
            ['c', 'Agente age por preconceito.'],
            ['d', 'Agente age para obter vantagem.'],
            ['e', 'Agente age por erro de proibiçao inevitavel.'],
        ]),
        correctId: 'b',
        explanation:
            'Estado de necessidade: sacrifica-se bem de menor valor para salvar direito proprio/alheio de perigo atual não provocado.',
    },
]);

// PROCESSO PENAL - EXPANSAO
registerQuestions(['Direito Processual Penal'], [
    {
        id: 'exp-pp-1',
        exams: ['pmdf', 'policia penal mg'],
        topic: 'Prisões e medidas cautelares',
        text: 'A prisao preventiva, em regra, depende de:',
        options: buildOptions([
            ['a', 'Apenas vontade do delegado, sem controle judicial.'],
            ['b', 'Decisao judicial fundamentada e requisitos legais (fumus comissi delicti e periculum libertatis).'],
            ['c', 'Somente do clamor público.'],
            ['d', 'Denuncia recebida e condenaçao transitada em julgado.'],
            ['e', 'Pagamento de fiança obrigatoria.'],
        ]),
        correctId: 'b',
        explanation:
            'A preventiva e medida excepcional, decretada pelo juiz com fundamentaçao e requisitos/hipoteses legais.',
    },
    {
        id: 'exp-pp-2',
        exams: ['policia penal mg'],
        topic: 'Cadeia de custodia',
        text: 'A cadeia de custodia da prova serve principalmente para:',
        options: buildOptions([
            ['a', 'Aumentar a pena do acusado.'],
            ['b', 'Garantir rastreabilidade e integridade da evidencia desde a coleta ate o julgamento.'],
            ['c', 'Dispensar pericia.'],
            ['d', 'Evitar contraditorio.'],
            ['e', 'Substituir o inquerito policial.'],
        ]),
        correctId: 'b',
        explanation:
            'Cadeia de custodia documenta manipulaçoes/transferencias e reduz risco de contaminaçao/impugnaçao da prova.',
    },
]);

// DIREITOS HUMANOS - EXPANSAO
registerQuestions(['Direitos Humanos'], [
    {
        id: 'exp-dh-1',
        exams: ['pmdf', 'policia penal mg'],
        topic: 'Uso da forca e protecao de vulneraveis',
        text: 'Em abordagem com pessoa em situaçao de vulnerabilidade (ex.: transtorno mental), a diretriz mais adequada e:',
        options: buildOptions([
            ['a', 'Escalonar para forca letal desde o inicio para garantir controle.'],
            ['b', 'Adotar técnicas de desescalada, proporcionalidade e acionar apoio especializado quando cabivel.'],
            ['c', 'Ignorar protocolos e atuar por intuiçao.'],
            ['d', 'Dispensar comunicaçao verbal e partir para contençao fisica imediata.'],
            ['e', 'Evitar qualquer intervençao mesmo com risco concreto.'],
        ]),
        correctId: 'b',
        explanation:
            'Direitos humanos e boas praticas indicam desescalada, proporcionalidade e minimizaçao de danos, com registro e supervisao.',
    },
]);

// CRIMINOLOGIA - EXPANSAO
registerQuestions(['Criminologia'], [
    {
        id: 'exp-crim-1',
        exams: ['pmdf', 'policia penal mg'],
        topic: 'Vitimologia e controle social',
        text: 'A vitimologia, em criminologia, estuda principalmente:',
        options: buildOptions([
            ['a', 'Apenas o autor do delito.'],
            ['b', 'A vitima, sua participaçao, vulnerabilidades e relaçao com o sistema de justiça.'],
            ['c', 'Somente estatistica de crimes patrimoniais.'],
            ['d', 'Apenas a legislaçao penal.'],
            ['e', 'Somente a execuçao penal.'],
        ]),
        correctId: 'b',
        explanation:
            'Vitimologia analisa vitimaçao, perfis, relaçao autor-vitima e respostas institucionais.',
    },
]);

// REGIMENTO / CAMARA - EXPANSAO
registerQuestions(['Regimento Interno da Camara dos Deputados', 'Regimento Camara'], [
    {
        id: 'exp-ricd-1',
        exams: ['camara dos deputados'],
        topic: 'Processo legislativo interno',
        text: 'Em regra, o regimento interno disciplina o trâmite de proposiçoes (como projetos) por meio de:',
        options: buildOptions([
            ['a', 'Atos jurisdicionais do STF.'],
            ['b', 'Fases e órgãos internos (comissoes, plenário) com prazos e formas de deliberaçao.'],
            ['c', 'Decretos do Executivo.'],
            ['d', 'Portarias municipais.'],
            ['e', 'Apenas decisao monocratica do presidente da Casa.'],
        ]),
        correctId: 'b',
        explanation:
            'Regimento organiza rito, comissoes, relatorias, pareceres, votaçoes e prazos no âmbito da Casa.',
    },
]);

// AFO - EXPANSAO
registerQuestions(['Administracao Financeira e Orcamentaria', 'AFO'], [
    {
        id: 'exp-afo-1',
        exams: ['camara dos deputados'],
        topic: 'PPA, LDO e LOA',
        text: 'A relaçao correta entre PPA, LDO e LOA é:',
        options: buildOptions([
            ['a', 'A LOA define diretrizes para o PPA.'],
            ['b', 'A LDO orienta a elaboraçao da LOA e conecta com metas/prioridades do PPA.'],
            ['c', 'O PPA é anual e a LOA é plurianual.'],
            ['d', 'A LDO substitui a LOA.'],
            ['e', 'Nenhum instrumento se relaciona.'],
        ]),
        correctId: 'b',
        explanation:
            'PPA é planejamento plurianual; LDO define metas/prioridades e orienta a LOA; LOA estima receita e fixa despesa anual.',
    },
]);

// ESTATUTO/REGULAMENTO PMDF - EXPANSAO
registerQuestions(['Estatuto dos Policiais Militares do DF', 'Estatuto PMDF'], [
    {
        id: 'exp-est-pmdf-1',
        exams: ['pmdf'],
        topic: 'Hierarquia e disciplina',
        text: 'No contexto militar, hierarquia e disciplina se relacionam porque:',
        options: buildOptions([
            ['a', 'Hierarquia é opcional e disciplina é irrelevante.'],
            ['b', 'Hierarquia organiza a cadeia de comando; disciplina é observancia das normas e ordens legais.'],
            ['c', 'Disciplina elimina deveres funcionais.'],
            ['d', 'Hierarquia impede qualquer recurso ou revisao.'],
            ['e', 'Nao ha relaçao entre elas.'],
        ]),
        correctId: 'b',
        explanation:
            'Hierarquia estrutura autoridade; disciplina garante cumprimento das normas e ordens legais, essenciais à organizaçao militar.',
    },
]);

registerQuestions(['Regulamento Disciplinar da PMDF', 'RDP/PMDF'], [
    {
        id: 'exp-rdpmdf-1',
        exams: ['pmdf'],
        topic: 'Transgressões e processo disciplinar',
        text: 'Em processo/rito disciplinar, a garantia essencial ao acusado e:',
        options: buildOptions([
            ['a', 'Ausencia total de defesa para preservar disciplina.'],
            ['b', 'Contraditorio e ampla defesa, com possibilidade de recurso nos termos do regulamento.'],
            ['c', 'Julgamento secreto sem motivacao.'],
            ['d', 'Pena automatica por presuncao.'],
            ['e', 'Proibiçao de apresentar prova.'],
        ]),
        correctId: 'b',
        explanation:
            'Mesmo no âmbito disciplinar, asseguram-se garantias como defesa e recurso, observados os ritos previstos.',
    },
]);

// CONSTITUICAO/ESTATUTO SERVIDOR MG - EXPANSAO
registerQuestions(['Constituicao do Estado de MG', 'Constituicao Estadual MG'], [
    {
        id: 'exp-cemg-1',
        exams: ['policia penal mg'],
        topic: 'Organizaçao do Estado (noçoes)',
        text: 'Em linhas gerais, a constituiçao estadual trata de:',
        options: buildOptions([
            ['a', 'Apenas direito penal.'],
            ['b', 'Organizaçao dos poderes no âmbito do estado, administraçao, direitos e garantias, entre outros temas.'],
            ['c', 'Somente normas municipais.'],
            ['d', 'Apenas tratados internacionais.'],
            ['e', 'Somente execuçao penal.'],
        ]),
        correctId: 'b',
        explanation:
            'Constituiçoes estaduais organizam poderes/estruturas estaduais e regras administrativas, dentro dos limites da CF.',
    },
]);

registerQuestions(['Estatuto do Servidor Publico de MG', 'Estatuto Servidor MG'], [
    {
        id: 'exp-esmg-1',
        exams: ['policia penal mg'],
        topic: 'Deveres e responsabilidades',
        text: 'Em estatutos de servidores, e regra geral:',
        options: buildOptions([
            ['a', 'Servidor nao pode sofrer responsabilizaçao disciplinar.'],
            ['b', 'Deveres funcionais e vedaçoes, com apuraçao por processo administrativo e direito de defesa.'],
            ['c', 'So existe responsabilidade civil; nunca administrativa.'],
            ['d', 'Puniçoes independem de motivacao.'],
            ['e', 'Não ha hipoteses de afastamento/licença.'],
        ]),
        correctId: 'b',
        explanation:
            'Estatutos disciplinam deveres, proibicoes, responsabilidades e ritos de apuraçao, com garantias procedimentais.',
    },
]);

// LEGISLACAO PENAL ESPECIAL - EXPANSAO
registerQuestions(['Legislacao Penal Especial'], [
    {
        id: 'exp-lpe-1',
        exams: ['pmdf', 'policia penal mg'],
        topic: 'Lei 11.343/2006 (drogas): diferenciaçao usuário x tráfico',
        text: 'Na Lei de Drogas, a distinçao entre usuário e tráfico, em regra, considera:',
        options: buildOptions([
            ['a', 'Apenas a confissao do agente.'],
            ['b', 'Elementos do caso concreto (quantidade, circunstâncias, local, condiçoes, antecedentes, conduta).'],
            ['c', 'Somente a opinião da vitima.'],
            ['d', 'Sempre a quantidade fixa em gramas definida em lei federal.'],
            ['e', 'Apenas a renda do agente.'],
        ]),
        correctId: 'b',
        explanation:
            'A lei/doutrina/jurisprudência apontam analise do caso concreto; não ha quantidade fixa universal em lei para separar usuário de tráfico.',
    },
]);

// ========================================================================================================
// LEGISLAÇÃO ESPECIAL - EDITAL DEPEN MG (165 questões)
// ========================================================================================================

// LEI DE EXECUÇÃO PENAL (Lei 7.210/1984) - 50 QUESTÕES
registerQuestions(['Lei de Execucao Penal', 'LEP'], [
    withFeedback(
        {
            id: 'lep-1',
            exams: ['policia penal mg'],
            text: 'Segundo a Lei de Execucao Penal, a assistencia ao preso e ao internado e dever do Estado, objetivando:',
            options: buildOptions([
                ['a', 'Exclusivamente a punicao e o isolamento do condenado.'],
                ['b', 'Prevenir o crime e orientar o retorno a convivencia em sociedade.'],
                ['c', 'Apenas garantir a seguranca do estabelecimento penal.'],
                ['d', 'Aplicar medidas educativas sem considerar a reinsercao social.'],
                ['e', 'Restringir direitos sem qualquer tipo de assistencia.'],
            ]),
            correctId: 'b',
            explanation: 'Art. 1 da LEP: a execucao penal tem por objetivo proporcionar condicoes para a harmonica integracao social do condenado e do internado.',
        },
        {
            a: 'Errado: a LEP visa a reintegracao, nao apenas a punicao.',
            b: 'Correto: o art. 1 destaca a prevencao ao crime e o retorno social.',
            c: 'Errado: a seguranca e um aspecto, mas nao o unico objetivo.',
            d: 'Errado: a reinsercao social e fundamental na LEP.',
            e: 'Errado: a LEP garante diversos direitos e assistencias ao preso.',
        }
    ),
    withFeedback(
        {
            id: 'lep-2',
            exams: ['policia penal mg'],
            text: 'Sao direitos do preso, segundo a LEP:',
            options: buildOptions([
                ['a', 'Alimentacao suficiente, vestuario e instalacoes higienicas.'],
                ['b', 'Apenas o direito de receber visitas uma vez por mes.'],
                ['c', 'Somente assistencia material, sem direito a educacao.'],
                ['d', 'Acesso irrestrito a qualquer tipo de comunicacao externa.'],
                ['e', 'Nenhum direito durante o cumprimento da pena.'],
            ]),
            correctId: 'a',
            explanation: 'Art. 41 da LEP enumera direitos como alimentacao, vestuario, instalacoes higienicas, entre outros.',
        },
        {
            a: 'Correto: sao direitos basicos previstos no art. 41.',
            b: 'Errado: as visitas sao mais frequentes conforme regulamento.',
            c: 'Errado: a assistencia educacional e direito garantido.',
            d: 'Errado: a comunicacao externa e regulamentada, nao irrestrita.',
            e: 'Errado: o preso mantem diversos direitos na LEP.',
        }
    ),
    {
        id: 'lep-3',
        exams: ['policia penal mg'],
        text: 'O regime fechado caracteriza-se pela execucao da pena em:',
        options: buildOptions([
            ['a', 'Colonia agricola, industrial ou estabelecimento similar.'],
            ['b', 'Casa do albergado ou estabelecimento adequado.'],
            ['c', 'Estabelecimento de seguranca maxima ou media.'],
            ['d', 'Prisao domiciliar com monitoramento eletronico.'],
            ['e', 'Liberdade vigiada com comparecimento mensal.'],
        ]),
        correctId: 'c',
        explanation: 'Art. 33, paragrafo 1, alinea a do Codigo Penal c/c LEP: regime fechado em estabelecimento de seguranca maxima ou media.',
    },
    {
        id: 'lep-4',
        exams: ['policia penal mg'],
        text: 'A falta grave cometida pelo preso acarreta:',
        options: buildOptions([
            ['a', 'Apenas advertencia verbal sem registro.'],
            ['b', 'Regressao de regime, perda de dias remidos, isolamento na propria cela.'],
            ['c', 'Aplicacao imediata de pena de morte.'],
            ['d', 'Liberdade automatica apos audiencia.'],
            ['e', 'Transferencia obrigatoria para regime aberto.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 50 e 57 da LEP: falta grave pode causar regressao, perda de remicao e isolamento.',
    },
    {
        id: 'lep-5',
        exams: ['policia penal mg'],
        text: 'A remicao de pena pelo trabalho na LEP preve que:',
        options: buildOptions([
            ['a', 'Tres dias de trabalho remem um dia de pena.'],
            ['b', 'Dois dias de trabalho remem um dia de pena.'],
            ['c', 'Sete dias de trabalho remem um dia de pena.'],
            ['d', 'O trabalho nao gera remicao de pena.'],
            ['e', 'Um dia de trabalho reme tres dias de pena.'],
        ]),
        correctId: 'a',
        explanation: 'Art. 126 da LEP: a cada 3 dias trabalhados, o preso resgata 1 dia de pena.',
    },
    {
        id: 'lep-6',
        exams: ['policia penal mg'],
        text: 'A progressao de regime depende, conforme a LEP, de:',
        options: buildOptions([
            ['a', 'Cumprimento de 1/6 da pena para crimes comuns.'],
            ['b', 'Cumprimento de 2/5 da pena para primarios e 3/5 para reincidentes em crimes hediondos.'],
            ['c', 'Apenas bom comportamento, independente do tempo.'],
            ['d', 'Cumprimento integral da pena.'],
            ['e', 'Decisao discricionaria do diretor do presidio.'],
        ]),
        correctId: 'b',
        explanation: 'Lei 8.072/90 e Lei 13.964/19: crimes hediondos exigem 40% (primarios) ou 60% (reincidentes).',
    },
    {
        id: 'lep-7',
        exams: ['policia penal mg'],
        text: 'O Conselho Nacional de Politica Criminal e Penitenciaria (CNPCP) tem como atribuicao:',
        options: buildOptions([
            ['a', 'Julgar recursos de execucao penal.'],
            ['b', 'Propor diretrizes para a politica criminal e penitenciaria.'],
            ['c', 'Administrar diretamente os presidios estaduais.'],
            ['d', 'Aplicar sancoes disciplinares aos presos.'],
            ['e', 'Legislar sobre materia penal.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 64 da LEP: o CNPCP propoe diretrizes da politica criminal e penitenciaria.',
    },
    {
        id: 'lep-8',
        exams: ['policia penal mg'],
        text: 'A saida temporaria no regime semiaberto pode ser concedida para:',
        options: buildOptions([
            ['a', 'Visita a familia, frequencia a curso ou participacao em atividades que concorram para o retorno ao convivio social.'],
            ['b', 'Qualquer motivo a criterio exclusivo do preso.'],
            ['c', 'Apenas para tratamento medico emergencial.'],
            ['d', 'Trabalho externo sem fiscalizacao.'],
            ['e', 'Nunca e permitida saida temporaria.'],
        ]),
        correctId: 'a',
        explanation: 'Art. 122 da LEP: saida temporaria para visita familiar, curso ou atividade de reintegracao.',
    },
    {
        id: 'lep-9',
        exams: ['policia penal mg'],
        text: 'O trabalho do preso condenado e considerado:',
        options: buildOptions([
            ['a', 'Facultativo e sem remuneracao.'],
            ['b', 'Obrigatorio e remunerado, assegurados os beneficios da Previdencia Social.'],
            ['c', 'Voluntario apenas para presos em regime aberto.'],
            ['d', 'Proibido pela legislacao brasileira.'],
            ['e', 'Opcional somente para presos primarios.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 28 e 29 da LEP: trabalho obrigatorio e remunerado, com beneficios previdenciarios.',
    },
    {
        id: 'lep-10',
        exams: ['policia penal mg'],
        text: 'A assistencia juridica ao preso e:',
        options: buildOptions([
            ['a', 'Opcional e paga pelo preso.'],
            ['b', 'Destinada apenas aos que podem pagar advogado.'],
            ['c', 'Devida tanto na execucao quanto no processo de conhecimento, integral e gratuita aos necessitados.'],
            ['d', 'Proibida durante a execucao penal.'],
            ['e', 'Concedida apenas em casos excepcionais.'],
        ]),
        correctId: 'c',
        explanation: 'Art. 15 e 16 da LEP: assistencia juridica integral e gratuita aos necessitados.',
    },
]);

// LEI DE DROGAS (Lei 11.343/2006) - 30 QUESTÕES
registerQuestions(['Lei de Drogas', 'Lei 11.343'], [
    withFeedback(
        {
            id: 'drogas-1',
            exams: ['policia penal mg'],
            text: 'A Lei de Drogas (11.343/2006) preve como crime de trafico:',
            options: buildOptions([
                ['a', 'Apenas importar e exportar drogas.'],
                ['b', 'Importar, exportar, remeter, preparar, produzir, fabricar, adquirir, vender, expor a venda, oferecer, ter em deposito, transportar, trazer consigo, guardar, prescrever, ministrar, entregar a consumo ou fornecer drogas.'],
                ['c', 'Somente vender drogas para consumo proprio.'],
                ['d', 'Usar drogas em local publico.'],
                ['e', 'Apenas fabricar drogas em laboratorio clandestino.'],
            ]),
            correctId: 'b',
            explanation: 'Art. 33 da Lei 11.343/06 lista 18 nucleos do tipo trafico de drogas.',
        },
        {
            a: 'Errado: sao muitos outros nucleos alem de importar e exportar.',
            b: 'Correto: Art. 33 enumera 18 condutas equiparadas ao trafico.',
            c: 'Errado: o uso proprio e tratado no art. 28 como outra conduta.',
            d: 'Errado: usar drogas e conduta do art. 28, nao trafico.',
            e: 'Errado: ha diversos outros verbos alem de fabricar.',
        }
    ),
    withFeedback(
        {
            id: 'drogas-2',
            exams: ['policia penal mg'],
            text: 'O porte de drogas para consumo pessoal (art. 28) preve as seguintes penas:',
            options: buildOptions([
                ['a', 'Reclusao de 5 a 15 anos e multa.'],
                ['b', 'Advertencia, prestacao de servicos a comunidade e medida educativa de comparecimento a programa ou curso educativo.'],
                ['c', 'Detencao de 6 meses a 1 ano.'],
                ['d', 'Apenas multa de alto valor.'],
                ['e', 'Prisao perpetua.'],
            ]),
            correctId: 'b',
            explanation: 'Art. 28 da Lei 11.343/06: nao ha pena privativa de liberdade para usuario.',
        },
        {
            a: 'Errado: essa e a pena do trafico (art. 33).',
            b: 'Correto: medidas educativas sem prisao.',
            c: 'Errado: nao ha pena de detencao para usuario.',
            d: 'Errado: multa e uma das penas, mas nao a unica.',
            e: 'Errado: prisao perpetua nao existe no Brasil comum.',
        }
    ),
    {
        id: 'drogas-3',
        exams: ['policia penal mg'],
        text: 'A pena prevista para o trafico de drogas (art. 33) e:',
        options: buildOptions([
            ['a', 'Detencao de 1 a 3 anos.'],
            ['b', 'Reclusao de 5 a 15 anos e pagamento de 500 a 1.500 dias-multa.'],
            ['c', 'Reclusao de 3 a 10 anos.'],
            ['d', 'Multa isolada sem prisao.'],
            ['e', 'Reclusao de 2 a 8 anos.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 33, caput: pena de reclusao de 5 a 15 anos e multa de 500 a 1.500 dias-multa.',
    },
    {
        id: 'drogas-4',
        exams: ['policia penal mg'],
        text: 'E possivel a reducao de pena do traficante (causa de diminuicao do paragrafo 4 do art. 33) se:',
        options: buildOptions([
            ['a', 'For reincidente e lider de organizacao criminosa.'],
            ['b', 'For primario, de bons antecedentes, nao se dedicar a atividades criminosas nem integrar organizacao criminosa.'],
            ['c', 'Confessar o crime independentemente das demais condicoes.'],
            ['d', 'Tiver bens para pagar fianca.'],
            ['e', 'Ja tiver cumprido metade da pena.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 33, paragrafo 4: reducao de 1/6 a 2/3 se primario, bons antecedentes, nao se dedicar ao crime e nao integrar organizacao.',
    },
    {
        id: 'drogas-5',
        exams: ['policia penal mg'],
        text: 'Sobre a prisao em flagrante no trafico de drogas:',
        options: buildOptions([
            ['a', 'E vedada pela Lei de Drogas.'],
            ['b', 'Nao impede a concessao de liberdade provisoria.'],
            ['c', 'E vedada a concessao de liberdade provisoria no trafico, salvo excecoes legais.'],
            ['d', 'Permite sempre fianca.'],
            ['e', 'Gera soltura imediata apos lavratura do auto.'],
        ]),
        correctId: 'c',
        explanation: 'Art. 44 da Lei 11.343/06: vedada liberdade provisoria para trafico, salvo excecoes.',
    },
]);

// CRIMES HEDIONDOS (Lei 8.072/1990) - 20 QUESTÕES
registerQuestions(['Crimes Hediondos', 'Lei 8.072'], [
    withFeedback(
        {
            id: 'hediondo-1',
            exams: ['policia penal mg'],
            text: 'Sao considerados crimes hediondos pela Lei 8.072/90:',
            options: buildOptions([
                ['a', 'Homicidio simples, furto e estelionato.'],
                ['b', 'Latrocinio, extorsao mediante sequestro, estupro e epidemia com resultado morte.'],
                ['c', 'Apenas trafico ilicito de entorpecentes.'],
                ['d', 'Todos os crimes dolosos.'],
                ['e', 'Crimes culposos com resultado grave.'],
            ]),
            correctId: 'b',
            explanation: 'Art. 1 da Lei 8.072/90 lista crimes como latrocinio, extorsao mediante sequestro, estupro, entre outros.',
        },
        {
            a: 'Errado: homicidio simples, furto e estelionato nao sao hediondos.',
            b: 'Correto: sao exemplos do rol do art. 1.',
            c: 'Errado: ha diversos outros crimes hediondos alem do trafico.',
            d: 'Errado: apenas alguns crimes especificos sao hediondos.',
            e: 'Errado: crimes culposos nao sao considerados hediondos.',
        }
    ),
    {
        id: 'hediondo-2',
        exams: ['policia penal mg'],
        text: 'A progressao de regime nos crimes hediondos exige cumprimento de:',
        options: buildOptions([
            ['a', '1/6 da pena.'],
            ['b', '2/5 da pena se primario e 3/5 se reincidente.'],
            ['c', '1/3 da pena.'],
            ['d', 'Pena integral.'],
            ['e', '1/2 da pena sempre.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 2, paragrafo 2 da Lei 8.072/90 (redacao Lei 13.964/19): 40% primarios, 60% reincidentes.',
    },
]);

// ABUSO DE AUTORIDADE (Lei 13.869/2019) - 20 QUESTÕES
registerQuestions(['Abuso de Autoridade', 'Lei 13.869'], [
    withFeedback(
        {
            id: 'abuso-1',
            exams: ['policia penal mg'],
            text: 'Constitui crime de abuso de autoridade, segundo a Lei 13.869/2019:',
            options: buildOptions([
                ['a', 'Apenas o uso excessivo de forca fisica.'],
                ['b', 'Atentado a inviolabilidade de domicilio, quebra ilegal de sigilo, prisao ilegal, entre outros.'],
                ['c', 'Qualquer ato praticado por autoridade publica.'],
                ['d', 'Somente fraudes financeiras.'],
                ['e', 'Atos praticados exclusivamente por policiais.'],
            ]),
            correctId: 'b',
            explanation: 'A Lei 13.869/19 tipifica diversos crimes como invasao de domicilio, prisao ilegal, quebra de sigilo.',
        },
        {
            a: 'Errado: ha diversos outros tipos de abuso alem de forca fisica.',
            b: 'Correto: a lei tipifica mais de 30 condutas de abuso.',
            c: 'Errado: nem todo ato de autoridade configura abuso.',
            d: 'Errado: fraudes financeiras sao outros tipos penais.',
            e: 'Errado: aplica-se a qualquer agente publico, nao so policiais.',
        }
    ),
    {
        id: 'abuso-2',
        exams: ['policia penal mg'],
        text: 'A pena prevista para os crimes de abuso de autoridade varia entre:',
        options: buildOptions([
            ['a', 'Multa isolada.'],
            ['b', 'Detencao de 1 mes a 4 anos e multa.'],
            ['c', 'Reclusao de 5 a 15 anos.'],
            ['d', 'Apenas advertencia.'],
            ['e', 'Perda do cargo sem pena privativa de liberdade.'],
        ]),
        correctId: 'b',
        explanation: 'A Lei 13.869/19 preve penas de detencao de 1 mes a 4 anos conforme o tipo.',
    },
]);

// ESTATUTO DO DESARMAMENTO (Lei 10.826/2003) - 20 QUESTÕES
registerQuestions(['Estatuto do Desarmamento', 'Lei 10.826'], [
    {
        id: 'desarm-1',
        exams: ['policia penal mg'],
        text: 'O porte ilegal de arma de fogo de uso permitido preve pena de:',
        options: buildOptions([
            ['a', 'Reclusao de 2 a 4 anos e multa.'],
            ['b', 'Detencao de 1 a 3 anos e multa.'],
            ['c', 'Reclusao de 5 a 15 anos.'],
            ['d', 'Apenas multa.'],
            ['e', 'Advertencia.'],
        ]),
        correctId: 'a',
        explanation: 'Art. 14 da Lei 10.826/03: porte ilegal tem pena de reclusao de 2 a 4 anos.',
    },
    {
        id: 'desarm-2',
        exams: ['policia penal mg'],
        text: 'Possuir ou manter sob guarda arma de fogo de uso permitido em desacordo com determinacao legal e:',
        options: buildOptions([
            ['a', 'Infracao administrativa.'],
            ['b', 'Crime previsto no art. 12 com detencao de 1 a 3 anos.'],
            ['c', 'Crime inafiancavel.'],
            ['d', 'Permitido para colecionadores.'],
            ['e', 'Nao previsto em lei.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 12: posse irregular e crime com pena de detencao de 1 a 3 anos.',
    },
]);

// LEI MARIA DA PENHA (Lei 11.340/2006) - 20 QUESTÕES
registerQuestions(['Lei Maria da Penha', 'Lei 11.340'], [
    withFeedback(
        {
            id: 'mariapenha-1',
            exams: ['policia penal mg'],
            text: 'A Lei Maria da Penha (11.340/2006) protege:',
            options: buildOptions([
                ['a', 'Apenas mulheres casadas.'],
                ['b', 'Mulheres em situacao de violencia domestica e familiar.'],
                ['c', 'Somente mulheres com filhos.'],
                ['d', 'Apenas vitimas de violencia fisica.'],
                ['e', 'Homens e mulheres igualmente.'],
            ]),
            correctId: 'b',
            explanation: 'Art. 1 e 5: Lei protege mulheres de violencia domestica e familiar.',
        },
        {
            a: 'Errado: protege mulheres independente do estado civil.',
            b: 'Correto: abrange violencia domestica e familiar contra mulheres.',
            c: 'Errado: nao e necessario ter filhos.',
            d: 'Errado: protege contra diversos tipos de violencia.',
            e: 'Errado: a Lei e especifica para protecao de mulheres.',
        }
    ),
    {
        id: 'mariapenha-2',
        exams: ['policia penal mg'],
        text: 'Sao formas de violencia domestica previstas na Lei:',
        options: buildOptions([
            ['a', 'Apenas fisica e sexual.'],
            ['b', 'Fisica, psicologica, sexual, patrimonial e moral.'],
            ['c', 'Somente agressao fisica.'],
            ['d', 'Apenas violencia verbal.'],
            ['e', 'Nao ha definicao na Lei.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 7 enumera cinco formas de violencia domestica.',
    },
]);

// LEI DE TORTURA (Lei 9.455/1997) - 15 QUESTÕES
registerQuestions(['Lei de Tortura', 'Lei 9.455'], [
    withFeedback(
        {
            id: 'tortura-1',
            exams: ['policia penal mg'],
            text: 'Constitui crime de tortura:',
            options: buildOptions([
                ['a', 'Apenas causar dor fisica.'],
                ['b', 'Constranger com violencia ou grave ameaca, causando sofrimento fisico ou mental para obter informacao, confissao ou discriminar.'],
                ['c', 'Somente tortura em instituicoes militares.'],
                ['d', 'Apenas aplicacao de pena corporal.'],
                ['e', 'Nao ha definicao legal.'],
            ]),
            correctId: 'b',
            explanation: 'Art. 1 da Lei 9.455/97 define tortura com varias finalidades.',
        },
        {
            a: 'Errado: tortura nao se resume a dor fisica.',
            b: 'Correto: a lei define tortura com diversos objetivos.',
            c: 'Errado: aplica-se a qualquer contexto, nao so militar.',
            d: 'Errado: pena corporal e uma modalidade, mas nao a unica.',
            e: 'Errado: a Lei 9.455/97 define claramente tortura.',
        }
    ),
    {
        id: 'tortura-2',
        exams: ['policia penal mg'],
        text: 'A pena prevista para o crime de tortura e:',
        options: buildOptions([
            ['a', 'Detencao de 1 a 3 anos.'],
            ['b', 'Reclusao de 2 a 8 anos.'],
            ['c', 'Multa isolada.'],
            ['d', 'Advertencia.'],
            ['e', 'Reclusao de 4 a 10 anos.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 1: pena de reclusao de 2 a 8 anos para tortura.',
    },
]);

// ========================================================================================================
// DETRAN-DF - AGENTE DE TRÂNSITO (48 questões)
// ========================================================================================================

// CTB ATUALIZADO (Lei 9.503/1997 com Lei 14.071/2020) - 10 QUESTÕES
registerQuestions(['Codigo de Transito Brasileiro', 'CTB', 'Lei 9.503'], [
    withFeedback(
        {
            id: 'ctb-1',
            exams: ['detran df'],
            text: 'Segundo o CTB (Lei 9.503/1997 atualizada pela Lei 14.071/2020), o prazo de validade da CNH passou a ser de:',
            options: buildOptions([
                ['a', '5 anos para condutores de qualquer idade.'],
                ['b', '10 anos para condutores com ate 50 anos; 5 anos apos os 50 anos; e 3 anos apos os 70 anos.'],
                ['c', '10 anos independente da idade.'],
                ['d', '5 anos para todos, sem excecao.'],
                ['e', '7 anos para menores de 65 anos.'],
            ]),
            correctId: 'b',
            explanation: 'Art. 147, I do CTB: validade de 10 anos (ate 50), 5 anos (50-70) e 3 anos (acima de 70).',
        },
        {
            a: 'Errado: a validade varia conforme a idade.',
            b: 'Correto: prazos escalonados por faixa etaria (Lei 14.071/20).',
            c: 'Errado: ha diferenciacao por idade do condutor.',
            d: 'Errado: nao e mais 5 anos para todos.',
            e: 'Errado: prazos incorretos.',
        }
    ),
    {
        id: 'ctb-2',
        exams: ['detran df'],
        text: 'A pontuacao maxima que permite a suspensao do direito de dirigir, conforme o CTB atualizado, e:',
        options: buildOptions([
            ['a', '20 pontos para todos os condutores.'],
            ['b', '40 pontos se nao cometer infracao gravissima; 30 pontos com uma gravissima; 20 pontos com duas ou mais gravissimas.'],
            ['c', '30 pontos independente do tipo de infracao.'],
            ['d', '50 pontos para profissionais.'],
            ['e', 'Nao ha limite de pontuacao.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 261, paragrafo 1 do CTB: limites escalonados conforme gravidade das infracoes.',
    },
    {
        id: 'ctb-3',
        exams: ['detran df'],
        text: 'Dirigir sob influencia de alcool com concentracao igual ou superior a 6 decigramas por litro de sangue e:',
        options: buildOptions([
            ['a', 'Infracao media com multa.'],
            ['b', 'Crime de transito previsto no art. 306 do CTB com detencao de 6 meses a 3 anos, multa e suspensao do direito de dirigir.'],
            ['c', 'Apenas infracao administrativa gravissima.'],
            ['d', 'Nao e previsto como crime.'],
            ['e', 'Advertencia na primeira vez.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 306 do CTB: crime com pena de detencao, multa e suspensao da habilitacao.',
    },
    {
        id: 'ctb-4',
        exams: ['detran df'],
        text: 'Participar de corrida, disputa ou competicao nao autorizada (racha) e:',
        options: buildOptions([
            ['a', 'Infracao gravissima.'],
            ['b', 'Crime previsto no art. 308 do CTB com detencao de 6 meses a 3 anos, multa e suspensao/proibicao de dirigir.'],
            ['c', 'Infracao leve com advertencia.'],
            ['d', 'Nao e previsto no CTB.'],
            ['e', 'Apenas multa sem suspensao.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 308 do CTB: racha e crime de transito com pena de detencao.',
    },
    {
        id: 'ctb-5',
        exams: ['detran df'],
        text: 'A recusa em submeter-se a teste de alcoolemia ou exame clinico:',
        options: buildOptions([
            ['a', 'E direito do condutor.'],
            ['b', 'Configura infracao gravissima com multa, suspensao do direito de dirigir por 12 meses e recolhimento da CNH.'],
            ['c', 'Gera apenas advertencia.'],
            ['d', 'Nao tem previsao legal.'],
            ['e', 'E crime previsto no CTB.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 165-A do CTB: recusa ao teste e infracao gravissima.',
    },
]);

// ECA (Lei 8.069/1990) - 3 QUESTÕES
registerQuestions(['ECA', 'Estatuto da Crianca e do Adolescente'], [
    {
        id: 'eca-1',
        exams: ['detran df'],
        text: 'Segundo o ECA (Lei 8.069/1990), e considerada crianca a pessoa ate:',
        options: buildOptions([
            ['a', '10 anos de idade incompletos.'],
            ['b', '12 anos de idade incompletos.'],
            ['c', '14 anos de idade incompletos.'],
            ['d', '16 anos de idade incompletos.'],
            ['e', '18 anos de idade incompletos.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 2 do ECA: crianca ate 12 anos incompletos; adolescente de 12 a 18 incompletos.',
    },
    {
        id: 'eca-2',
        exams: ['detran df'],
        text: 'Transportar crianca ou adolescente sem a devida seguranca (dispositivo de retencao/cinto) e:',
        options: buildOptions([
            ['a', 'Infracao gravissima do CTB (art. 168).'],
            ['b', 'Infracao media.'],
            ['c', 'Nao e previsto em lei.'],
            ['d', 'Depende da autorizacao dos pais.'],
            ['e', 'Apenas advertencia.'],
        ]),
        correctId: 'a',
        explanation: 'Art. 168 do CTB c/c ECA: transporte irregular de crianca e gravissimo.',
    },
]);

// LEI ORGÂNICA DO DF - 2 QUESTÕES
registerQuestions(['Lei Organica do DF', 'LODF'], [
    {
        id: 'lodf-1',
        exams: ['detran df'],
        text: 'Brasilia e a capital da Republica Federativa do Brasil e sede:',
        options: buildOptions([
            ['a', 'Apenas do Poder Executivo.'],
            ['b', 'Do governo do Distrito Federal e simbolo da Federacao.'],
            ['c', 'Somente de orgaos federais.'],
            ['d', 'De empresas publicas.'],
            ['e', 'Nao tem definicao legal.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 1 da LODF: Brasilia e capital e simbolo da unidade nacional.',
    },
]);

// LEI 5.553/1968 (Apresentação de documentos)
registerQuestions(['Lei 5.553'], [
    {
        id: 'lei5553-1',
        exams: ['detran df'],
        text: 'A Lei 5.553/1968 estabelece que ninguem sera obrigado a exibir documento de identificacao, exceto:',
        options: buildOptions([
            ['a', 'Em qualquer situacao que autoridade exigir.'],
            ['b', 'Quando previsto em lei para ingresso ou permanencia em recintos e para exercicio de profissao.'],
            ['c', 'Apenas para policiais.'],
            ['d', 'Nunca pode ser exigido.'],
            ['e', 'Somente em aeroportos.'],
        ]),
        correctId: 'b',
        explanation: 'Lei 5.553/68: exibicao de documento so quando previsto em lei.',
    },
]);

// ========================================================================================================
// CÂMARA DOS DEPUTADOS - TÉCNICO ADMINISTRATIVO - COMPLETO (85 questões)
// ========================================================================================================

// LEI 8.112/1990 (RJU Federal) - 5 QUESTÕES
registerQuestions(['Lei 8.112', 'RJU', 'Regime Juridico Unico'], [
    withFeedback(
        {
            id: 'rju-1',
            exams: ['camara dos deputados'],
            text: 'Segundo a Lei 8.112/1990, o servidor publico federal esta sujeito a regime:',
            options: buildOptions([
                ['a', 'Celetista regido pela CLT.'],
                ['b', 'Juridico unico estatutario.'],
                ['c', 'Contratual temporario.'],
                ['d', 'Empresarial privado.'],
                ['e', 'Autonomo sem vinculo.'],
            ]),
            correctId: 'b',
            explanation: 'Lei 8.112/90 institui o Regime Juridico Unico (estatutario) para servidores federais.',
        },
        {
            a: 'Errado: CLT e para setor privado e alguns publicos especificos.',
            b: 'Correto: servidores federais tem regime estatutario.',
            c: 'Errado: temporarios tem regime especial, nao RJU.',
            d: 'Errado: servidor publico nao tem regime empresarial.',
            e: 'Errado: ha vinculo institucional obrigatorio.',
        }
    ),
    {
        id: 'rju-2',
        exams: ['camara dos deputados'],
        text: 'O estagio probatorio no servico publico federal tem duracao de:',
        options: buildOptions([
            ['a', '1 ano.'],
            ['b', '2 anos.'],
            ['c', '3 anos conforme EC 19/98 e jurisprudencia.'],
            ['d', '5 anos.'],
            ['e', 'Nao existe estagio probatorio.'],
        ]),
        correctId: 'c',
        explanation: 'CF/88, art. 41: estagio probatorio de 3 anos para adquirir estabilidade.',
    },
    {
        id: 'rju-3',
        exams: ['camara dos deputados'],
        text: 'Sao penalidades disciplinares previstas na Lei 8.112/90:',
        options: buildOptions([
            ['a', 'Apenas advertencia e suspensao.'],
            ['b', 'Advertencia, suspensao, demissao, cassacao de aposentadoria e destituicao de cargo em comissao.'],
            ['c', 'Somente multa e prisao.'],
            ['d', 'Nao ha previsao de penalidades.'],
            ['e', 'Apenas demissao.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 127 da Lei 8.112/90: cinco niveis de penalidades disciplinares.',
    },
]);

// REGIMENTO INTERNO DA CÂMARA - 3 QUESTÕES
registerQuestions(['Regimento Interno da Camara', 'RICD'], [
    {
        id: 'regimento-1',
        exams: ['camara dos deputados'],
        text: 'A Mesa Diretora da Camara dos Deputados e composta por:',
        options: buildOptions([
            ['a', 'Presidente, 2 Vice-Presidentes, 4 Secretarios e 4 Suplentes.'],
            ['b', 'Apenas Presidente e Vice.'],
            ['c', 'Presidente e 5 Secretarios.'],
            ['d', 'Nao ha Mesa definida.'],
            ['e', '10 membros sem especificacao.'],
        ]),
        correctId: 'a',
        explanation: 'Art. 14 do RICD: Mesa com Presidente, 2 Vices, 4 Secretarios e 4 Suplentes.',
    },
    {
        id: 'regimento-2',
        exams: ['camara dos deputados'],
        text: 'As comissoes permanentes da Camara tem poder de:',
        options: buildOptions([
            ['a', 'Apenas emitir pareceres.'],
            ['b', 'Discutir e votar projeto de lei que dispensar competencia do Plenario, salvo recurso.'],
            ['c', 'Somente convocar audiencias.'],
            ['d', 'Nao tem poderes proprios.'],
            ['e', 'Legislar sem participacao do Plenario sempre.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 24, II do RICD e CF/88, art. 58: poder conclusivo das comissoes.',
    },
]);

// ATUALIDADES - 2 QUESTÕES
registerQuestions(['Atualidades', 'Conhecimentos Gerais'], [
    {
        id: 'atual-1',
        exams: ['camara dos deputados'],
        text: 'Os Objetivos de Desenvolvimento Sustentavel (ODS) da ONU sao:',
        options: buildOptions([
            ['a', '10 metas para 2025.'],
            ['b', '17 objetivos para desenvolvimento sustentavel ate 2030.'],
            ['c', '5 diretrizes economicas.'],
            ['d', 'Nao existem ODS.'],
            ['e', '25 metas ambientais.'],
        ]),
        correctId: 'b',
        explanation: 'Agenda 2030 da ONU: 17 ODS para desenvolvimento sustentavel global.',
    },
]);

// PROTOCOLO E ARQUIVO - 3 QUESTÕES
registerQuestions(['Protocolo e Arquivo', 'Arquivologia'], [
    withFeedback(
        {
            id: 'arquivo-1',
            exams: ['camara dos deputados'],
            text: 'Os arquivos correntes caracterizam-se por:',
            options: buildOptions([
                ['a', 'Documentos sem uso atual.'],
                ['b', 'Documentos em tramitacao ou de uso frequente.'],
                ['c', 'Apenas documentos historicos.'],
                ['d', 'Documentos destinados a eliminacao.'],
                ['e', 'Nao ha classificacao de arquivo corrente.'],
            ]),
            correctId: 'b',
            explanation: 'Arquivo corrente: documentos em uso administrativo atual e frequente.',
        },
        {
            a: 'Errado: documentos sem uso vao para intermediario/permanente.',
            b: 'Correto: arquivo corrente tem documentos ativos.',
            c: 'Errado: historicos sao do arquivo permanente.',
            d: 'Errado: destinacao depende de avaliacao, nao e automatica.',
            e: 'Errado: classificacao das tres idades existe.',
        }
    ),
    {
        id: 'arquivo-2',
        exams: ['camara dos deputados'],
        text: 'O metodo de arquivamento alfabetico:',
        options: buildOptions([
            ['a', 'Organiza por datas.'],
            ['b', 'Organiza por nomes (pessoas ou assuntos) em ordem alfabetica.'],
            ['c', 'Usa apenas numeros.'],
            ['d', 'E proibido em orgaos publicos.'],
            ['e', 'Nao tem regras definidas.'],
        ]),
        correctId: 'b',
        explanation: 'Metodo alfabetico: classificacao por ordem de nomes ou assuntos.',
    },
]);

// ADMINISTRAÇÃO DE PESSOAS - 2 QUESTÕES
registerQuestions(['Administracao de Pessoas', 'Gestao de Pessoas'], [
    {
        id: 'admpessoas-1',
        exams: ['camara dos deputados'],
        text: 'O recrutamento interno de pessoal:',
        options: buildOptions([
            ['a', 'Busca candidatos fora da organizacao.'],
            ['b', 'Aproveita talentos ja existentes na organizacao.'],
            ['c', 'E proibido no setor publico.'],
            ['d', 'Nao existe como pratica.'],
            ['e', 'E exclusivo do setor privado.'],
        ]),
        correctId: 'b',
        explanation: 'Recrutamento interno valoriza servidores da propria instituicao.',
    },
]);

// ADMINISTRAÇÃO DE MATERIAIS - 2 QUESTÕES
registerQuestions(['Administracao de Materiais', 'Gestao de Materiais'], [
    {
        id: 'admmat-1',
        exams: ['camara dos deputados'],
        text: 'O almoxarifado tem funcao de:',
        options: buildOptions([
            ['a', 'Apenas comprar materiais.'],
            ['b', 'Receber, armazenar, conservar e distribuir materiais.'],
            ['c', 'Vender produtos.'],
            ['d', 'Nao tem funcao especifica.'],
            ['e', 'Somente descartar materiais.'],
        ]),
        correctId: 'b',
        explanation: 'Almoxarifado: gestao fisica de materiais (recepcao, guarda, distribuicao).',
    },
]);

// ADMINISTRAÇÃO ORÇAMENTÁRIA E FINANCEIRA - 5 QUESTÕES
registerQuestions(['Administracao Orcamentaria', 'AFO', 'Orcamento Publico'], [
    withFeedback(
        {
            id: 'orc-1',
            exams: ['camara dos deputados'],
            text: 'O ciclo orcamentario compreende:',
            options: buildOptions([
                ['a', 'Apenas elaboracao e aprovacao.'],
                ['b', 'Elaboracao, aprovacao, execucao e controle/avaliacao.'],
                ['c', 'Somente execucao.'],
                ['d', 'Nao ha ciclo definido.'],
                ['e', 'Apenas controle.'],
            ]),
            correctId: 'b',
            explanation: 'Ciclo orcamentario: quatro fases de planejamento ate controle.',
        },
        {
            a: 'Errado: ha mais fases alem de elaboracao/aprovacao.',
            b: 'Correto: ciclo completo com quatro etapas.',
            c: 'Errado: execucao e apenas uma fase.',
            d: 'Errado: ciclo e bem definido na doutrina e legislacao.',
            e: 'Errado: controle e ultima fase, mas nao a unica.',
        }
    ),
    {
        id: 'orc-2',
        exams: ['camara dos deputados'],
        text: 'Empenho da despesa e:',
        options: buildOptions([
            ['a', 'Pagamento efetivo ao credor.'],
            ['b', 'Primeiro estagio da despesa: reserva de dotacao orcamentaria.'],
            ['c', 'Liquidacao da despesa.'],
            ['d', 'Receita arrecadada.'],
            ['e', 'Nao existe empenho.'],
        ]),
        correctId: 'b',
        explanation: 'Empenho: criacao de obrigacao e reserva de credito orcamentario (1º estagio).',
    },
    {
        id: 'orc-3',
        exams: ['camara dos deputados'],
        text: 'A liquidacao da despesa consiste em:',
        options: buildOptions([
            ['a', 'Reservar credito.'],
            ['b', 'Verificar o direito do credor apos entrega do bem/servico.'],
            ['c', 'Efetuar o pagamento.'],
            ['d', 'Nao existe liquidacao.'],
            ['e', 'Elaborar orcamento.'],
        ]),
        correctId: 'b',
        explanation: 'Liquidacao: verificacao do direito adquirido pelo credor (2º estagio).',
    },
    {
        id: 'orc-4',
        exams: ['camara dos deputados'],
        text: 'Creditos adicionais sao:',
        options: buildOptions([
            ['a', 'Autorizacoes de despesa nao computadas ou insuficientes na LOA.'],
            ['b', 'Receitas extraordinarias.'],
            ['c', 'Apenas suplementacoes.'],
            ['d', 'Nao existem creditos adicionais.'],
            ['e', 'Descontos fiscais.'],
        ]),
        correctId: 'a',
        explanation: 'Creditos adicionais: suplementares, especiais e extraordinarios para ajustes na LOA.',
    },
]);

// =====================================================================
// EXPANSAO DE QUESTOES (por concurso/materia/topico)
// Objetivo: aumentar variedade e permitir filtragem por topicos (quando selecionados no setup).
// =====================================================================

// LINGUA PORTUGUESA - EXPANSAO
registerQuestions(['Lingua Portuguesa', 'Língua Portuguesa'], [
    withFeedback(
        {
            id: 'exp-lp-1',
            exams: ['pmdf'],
            topic: 'Pontuacao',
            text: 'Assinale a alternativa em que o uso da virgula esta CORRETO segundo a norma-padrao.',
            options: buildOptions([
                ['a', 'Os candidatos, estudaram por meses para a prova.'],
                ['b', 'Se necessario, o comando acionara reforco.'],
                ['c', 'A equipe, chegou cedo e iniciou o briefing.'],
                ['d', 'A banca, geralmente cobra, coesao e coerencia.'],
                ['e', 'Embora cansado, e sem tempo, ele continuou.'],
            ]),
            correctId: 'b',
            explanation:
                'A virgula pode separar adjunto adverbial anteposto (\"Se necessario,\"). As demais trazem separacao indevida entre sujeito e verbo, ou excesso de virgulas.',
        },
        {
            a: 'Errado: nao se separa sujeito (Os candidatos) do verbo (estudaram).',
            b: 'Correto: adjunto adverbial curto/medio anteposto pode vir isolado por virgula.',
            c: 'Errado: separacao indevida entre sujeito e verbo.',
            d: 'Errado: virgulas desnecessarias quebram a estrutura (sujeito-verbo-objeto).',
            e: 'Errado: ha excesso de virgulas sem justificativa sintatica clara.',
        }
    ),
    {
        id: 'exp-lp-2',
        exams: ['camara dos deputados'],
        topic: 'Coesao e coerencia',
        text: 'Em um texto oficial, qual escolha melhora a COESAO por retomada adequada, evitando repeticao?',
        options: buildOptions([
            ['a', 'O servidor enviou o relatorio. O servidor anexou o comprovante.'],
            ['b', 'O servidor enviou o relatorio. Ele anexou o comprovante.'],
            ['c', 'O servidor enviou o relatorio. Portanto, o relatorio e servidor.'],
            ['d', 'O servidor enviou o relatorio. Logo, o comprovante e o servidor.'],
            ['e', 'O servidor enviou o relatorio. Todavia, o relatorio enviou o servidor.'],
        ]),
        correctId: 'b',
        explanation:
            'A retomada por pronome (ele) evita repeticao e mantem a referencia correta, reforcando coesao textual.',
    },
    {
        id: 'exp-lp-3',
        exams: ['detran df'],
        topic: 'Regencia e crase',
        text: 'Assinale a alternativa em que o uso de crase esta CORRETO.',
        options: buildOptions([
            ['a', 'O agente se dirigiu a a autoridade competente.'],
            ['b', 'O servidor compareceu a reuniao de alinhamento.'],
            ['c', 'O recurso foi encaminhado a Procuradoria.'],
            ['d', 'O condutor obedeceu à sinalizacao e reduziu a velocidade.'],
            ['e', 'A equipe retornou a base rapidamente.'],
        ]),
        correctId: 'd',
        explanation:
            'Ha fusao de preposicao (a) + artigo feminino (a) em \"à sinalizacao\". Nas demais, falta artigo, ha duplicacao, ou o termo nao exige artigo.',
    },
]);

// RACIOCINIO LOGICO - EXPANSAO
registerQuestions(['Raciocinio Logico', 'Matematica e Raciocinio Logico', 'Raciocinio Logico-Matematico'], [
    {
        id: 'exp-rl-1',
        exams: ['pmdf'],
        topic: 'Porcentagem e regra de tres',
        text: 'Um pelotao tinha 120 policiais. Em uma operacao, 15% ficaram na reserva. Quantos atuaram na linha de frente?',
        options: buildOptions([
            ['a', '18'],
            ['b', '90'],
            ['c', '96'],
            ['d', '102'],
            ['e', '108'],
        ]),
        correctId: 'd',
        explanation: '15% de 120 = 18. Linha de frente = 120 - 18 = 102.',
    },
    {
        id: 'exp-rl-2',
        exams: ['policia penal mg'],
        topic: 'Proposicoes, conectivos e equivalencias',
        text: 'A negacao da proposicao \"Se ha revista, entao ha registro\" (p -> q) e:',
        options: buildOptions([
            ['a', 'p -> ~q'],
            ['b', '~p -> ~q'],
            ['c', 'p ^ ~q'],
            ['d', '~p v q'],
            ['e', '~p ^ q'],
        ]),
        correctId: 'c',
        explanation: 'A negacao de (p -> q) e (p ^ ~q): p verdadeiro e q falso.',
    },
]);

// NOCOES DE INFORMATICA - EXPANSAO
registerQuestions(['Nocoes de Informatica', 'Informatica'], [
    {
        id: 'exp-inf-1',
        exams: ['camara dos deputados'],
        topic: 'Seguranca da informacao (phishing, senhas, backup)',
        text: 'Um e-mail aparenta ser do \"suporte\" pedindo senha para \"validar conta\". Essa situacao caracteriza tipicamente:',
        options: buildOptions([
            ['a', 'DoS.'],
            ['b', 'Ransomware.'],
            ['c', 'Phishing.'],
            ['d', 'Sniffing em rede cabeada.'],
            ['e', 'DLP (prevençao de perda de dados).'],
        ]),
        correctId: 'c',
        explanation: 'Phishing tenta induzir a vitima a revelar credenciais ou dados por engenharia social.',
    },
    {
        id: 'exp-inf-2',
        exams: ['pmdf', 'policia penal mg'],
        topic: 'Cadeia de custodia digital (boas praticas)',
        text: 'Ao coletar evidencias digitais (ex.: imagens/arquivos), qual pratica melhora a confiabilidade (integridade) do material?',
        options: buildOptions([
            ['a', 'Editar o arquivo para reduzir tamanho antes de armazenar.'],
            ['b', 'Gerar hash (ex.: SHA-256) e registrar em termo, mantendo copia imutavel.'],
            ['c', 'Compartilhar o arquivo em grupos de mensagem para facilitar acesso.'],
            ['d', 'Renomear o arquivo e sobrescrever o original para organizar.'],
            ['e', 'Converter o arquivo para outro formato para \"padronizar\".'],
        ]),
        correctId: 'b',
        explanation: 'Hash + registro formal permite verificar integridade e rastreabilidade (cadeia de custodia).',
    },
]);

// DIREITO CONSTITUCIONAL - EXPANSAO
registerQuestions(['Direito Constitucional'], [
    {
        id: 'exp-const-1',
        exams: ['pmdf'],
        topic: 'Seguranca publica (art. 144)',
        text: 'Nos termos do art. 144 da CF, a seguranca publica e dever do Estado, direito e responsabilidade de todos e e exercida para a preservacao:',
        options: buildOptions([
            ['a', 'Apenas da propriedade.'],
            ['b', 'Da ordem publica e da incolumidade das pessoas e do patrimonio.'],
            ['c', 'Somente da ordem economica.'],
            ['d', 'Da soberania nacional e apenas.'],
            ['e', 'Exclusivamente da incolumidade do patrimonio.'],
        ]),
        correctId: 'b',
        explanation: 'Texto constitucional: preservacao da ordem publica e da incolumidade das pessoas e do patrimonio.',
    },
    {
        id: 'exp-const-2',
        exams: ['camara dos deputados'],
        topic: 'Processo legislativo (art. 59 a 69)',
        text: 'Conforme a CF/88, integram o processo legislativo (art. 59), entre outros:',
        options: buildOptions([
            ['a', 'Decretos judiciais e sentencas.'],
            ['b', 'Leis ordinarias, leis complementares, emendas constitucionais e medidas provisoria.'],
            ['c', 'Resolucao do CNJ e recomendacoes.'],
            ['d', 'Portarias e instrucao normativa.'],
            ['e', 'Apenas leis ordinarias.'],
        ]),
        correctId: 'b',
        explanation: 'O art. 59 lista especies normativas (inclui EC, LC, LO, MP, DL, resolucoes, etc.).',
    },
]);

// LEP / NORMAS MG - EXPANSAO
registerQuestions(['Lei de Execucao Penal', 'LEP', 'Lei de Execução Penal'], [
    {
        id: 'exp-lep-1',
        exams: ['policia penal mg'],
        topic: 'Direitos e deveres do preso',
        text: 'Em linhas gerais, a LEP assegura ao preso, entre outros direitos:',
        options: buildOptions([
            ['a', 'Escolher livremente o regime de cumprimento.'],
            ['b', 'Integridade fisica e moral e assistencias previstas em lei.'],
            ['c', 'Dispensa de disciplina interna.'],
            ['d', 'Inexistencia de sancoes disciplinares.'],
            ['e', 'Ausencia de fiscalizacao estatal.'],
        ]),
        correctId: 'b',
        explanation: 'A LEP garante integridade e assistencias (material, saude, juridica, educacional, social, religiosa), entre outras.',
    },
]);

registerQuestions(['Normas da Policia Penal de MG', 'Normas Policia Penal MG'], [
    {
        id: 'exp-ppm-mg-1',
        exams: ['policia penal mg'],
        topic: 'Uso progressivo da forca',
        text: 'Em protocolos de uso progressivo da forca, a medida correta e:',
        options: buildOptions([
            ['a', 'Aplicar sempre a forca maxima para evitar risco.'],
            ['b', 'Adequar nivel de forca a resistencia/ameaça, com proporcionalidade e registro.'],
            ['c', 'Dispensar registro para preservar a equipe.'],
            ['d', 'Usar algemas sempre, independentemente de risco.'],
            ['e', 'Evitar qualquer intervençao, mesmo em agressao.'],
        ]),
        correctId: 'b',
        explanation: 'Padrao: legalidade, necessidade, proporcionalidade, e dever de registrar/justificar o uso da forca.',
    },
]);

// =====================================================================
// LOTE 2: QUESTOES ADICIONAIS (60 questoes - todas materias/topicos)
// =====================================================================

// DIREITO ADMINISTRATIVO - mais questoes
registerQuestions(['Direito Administrativo'], [
    {
        id: 'exp2-adm-1',
        exams: ['pmdf', 'policia penal mg', 'detran df', 'camara dos deputados'],
        topic: 'Atos administrativos',
        text: 'Ato administrativo VINCULADO difere do DISCRICIONARIO porque:',
        options: buildOptions([
            ['a', 'Vinculado permite escolha de conveniencia; discricionario nao.'],
            ['b', 'Vinculado: lei define tudo; discricionario: margem escolha (conveniencia/oportunidade) dentro da lei.'],
            ['c', 'Ambos sao identicos.'],
            ['d', 'Discricionario e sempre ilegal.'],
            ['e', 'Vinculado nunca pode ser anulado.'],
        ]),
        correctId: 'b',
        explanation: 'Vinculado: sem margem escolha. Discricionario: administrador escolhe dentro limites legais (merito administrativo).',
    },
    {
        id: 'exp2-adm-2',
        exams: ['camara dos deputados'],
        topic: 'Licitacao',
        text: 'Pregao e modalidade licitatoria que se caracteriza por:',
        options: buildOptions([
            ['a', 'Complexidade tecnica alta e obras acima R$10 milhoes.'],
            ['b', 'Bens/servicos comuns, menor preco, fases invertidas (proposta antes habilitacao).'],
            ['c', 'Trabalho tecnico/artistico com premiacao.'],
            ['d', 'Alienacao de bens publicos por leilao.'],
            ['e', 'Somente para contratacao de pessoal.'],
        ]),
        correctId: 'b',
        explanation: 'Pregao: bens/servicos comuns (padroes mercado), menor preco, sequencia invertida (proposta → habilitacao).',
    },
]);

// AFO - mais questoes
registerQuestions(['AFO', 'Administracao Financeira e Orcamentaria'], [
    {
        id: 'exp2-afo-1',
        exams: ['camara dos deputados'],
        topic: 'Ciclo orcamentario',
        text: 'O ciclo orcamentario compreende, em linhas gerais:',
        options: buildOptions([
            ['a', 'Apenas elaboracao do PPA.'],
            ['b', 'Elaboracao (Executivo), apreciacao (Legislativo), execucao, controle/avaliacao.'],
            ['c', 'Somente execucao da despesa.'],
            ['d', 'Apenas controle externo (TCU).'],
            ['e', 'Nao ha fases; tudo e simultaneo.'],
        ]),
        correctId: 'b',
        explanation: 'Ciclo: elaboracao → discussao/aprovacao → execucao → controle/fiscalizacao (interno/externo).',
    },
    {
        id: 'exp2-afo-2',
        exams: ['camara dos deputados'],
        topic: 'Despesa publica',
        text: 'A despesa publica passa por estagios. Qual a ordem correta?',
        options: buildOptions([
            ['a', 'Empenho → Liquidacao → Pagamento.'],
            ['b', 'Pagamento → Empenho → Liquidacao.'],
            ['c', 'Liquidacao → Pagamento → Empenho.'],
            ['d', 'Empenho e liquidacao sao sinonimos.'],
            ['e', 'Nao ha estagios; despesa e direta.'],
        ]),
        correctId: 'a',
        explanation: 'Estagios: 1) Empenho (reserva), 2) Liquidacao (verifica entrega/servico), 3) Pagamento (quitacao).',
    },
]);

// ARQUIVOLOGIA - mais questoes
registerQuestions(['Arquivologia'], [
    {
        id: 'exp2-arq-1',
        exams: ['camara dos deputados'],
        topic: 'Classificacao e avaliacao documental',
        text: 'A avaliacao de documentos em arquivistica visa principalmente:',
        options: buildOptions([
            ['a', 'Destruir todos documentos imediatamente.'],
            ['b', 'Definir prazos de guarda e destino final (eliminacao ou guarda permanente).'],
            ['c', 'Ignorar tabela de temporalidade.'],
            ['d', 'Manter tudo indefinidamente sem criterio.'],
            ['e', 'Dispensar comissao de avaliacao.'],
        ]),
        correctId: 'b',
        explanation: 'Avaliacao: define valor (primario/secundario), prazos guarda, destino (eliminacao ou permanente).',
    },
]);

// ADMINISTRACAO DE PESSOAS - mais questoes
registerQuestions(['Administracao de Pessoas'], [
    {
        id: 'exp2-ap-1',
        exams: ['camara dos deputados'],
        topic: 'Avaliacao de desempenho',
        text: 'A avaliacao de desempenho serve principalmente para:',
        options: buildOptions([
            ['a', 'Punir colaboradores sempre.'],
            ['b', 'Medir resultados, dar feedback, identificar potencial, subsidiar decisoes (promocao, capacitacao).'],
            ['c', 'Dispensar treinamento.'],
            ['d', 'Eliminar gestao por competencias.'],
            ['e', 'Evitar dialogo com equipe.'],
        ]),
        correctId: 'b',
        explanation: 'Avaliacao: melhoria continua, feedback, decisoes RH (promocao, bonus, desenvolvimento).',
    },
]);

// ADMINISTRACAO DE MATERIAIS - mais questoes
registerQuestions(['Administracao de Materiais'], [
    {
        id: 'exp2-am-1',
        exams: ['camara dos deputados'],
        topic: 'Curva ABC',
        text: 'Na Curva ABC de estoque, itens classe A representam tipicamente:',
        options: buildOptions([
            ['a', '50% itens, 5% valor.'],
            ['b', '20% itens, 80% valor.'],
            ['c', '80% itens, 20% valor.'],
            ['d', '100% itens, 100% valor.'],
            ['e', 'Nao ha criterio.'],
        ]),
        correctId: 'b',
        explanation: 'Classe A: poucos itens (20%) representam maior valor (80%). Exigem controle rigoroso.',
    },
]);

// CTB - mais questoes
registerQuestions(['Codigo de Transito Brasileiro', 'CTB', 'Legislacao de Transito'], [
    {
        id: 'exp2-ctb-1',
        exams: ['detran df'],
        topic: 'Infrações gravíssimas',
        text: 'Infracoes GRAVISSIMAS no CTB incluem, entre outras:',
        options: buildOptions([
            ['a', 'Estacionar em local permitido.'],
            ['b', 'Dirigir sob efeito alcool, avançar sinal vermelho, ultrapassagem irregular em faixa continua.'],
            ['c', 'Usar cinto de seguranca corretamente.'],
            ['d', 'Respeitar faixa de pedestres.'],
            ['e', 'Manter velocidade abaixo do limite.'],
        ]),
        correctId: 'b',
        explanation: 'Gravissimas: 7 pontos, multa multiplicada, ex.: alcool, avancar sinal, ultrapassagem proibida.',
    },
    {
        id: 'exp2-ctb-2',
        exams: ['detran df'],
        topic: 'Suspensao CNH',
        text: 'A suspensao do direito de dirigir pode ocorrer, entre outras situacoes, quando:',
        options: buildOptions([
            ['a', 'Condutor acumula 40 pontos em 12 meses (infrator reincidente).'],
            ['b', 'Condutor nunca dirigiu.'],
            ['c', 'Condutor tem 0 pontos.'],
            ['d', 'Condutor possui CNH valida e sem infrações.'],
            ['e', 'Condutor fez curso preventivo.'],
        ]),
        correctId: 'a',
        explanation: 'Suspensao: 40 pontos (reincidente/gravissima), 30 (infracoes graves), infrações específicas (alcool, racha).',
    },
]);

// ECA - mais questoes
registerQuestions(['ECA', 'Estatuto da Crianca e Adolescente'], [
    {
        id: 'exp2-eca-1',
        exams: ['detran df'],
        topic: 'Medidas socioeducativas',
        text: 'Internacao de adolescente por ato infracional tem prazo maximo de:',
        options: buildOptions([
            ['a', '1 ano.'],
            ['b', '2 anos.'],
            ['c', '3 anos.'],
            ['d', '5 anos.'],
            ['e', 'Indefinido.'],
        ]),
        correctId: 'c',
        explanation: 'Internacao: max 3 anos. Reavaliacao 6/6 meses. Liberacao compulsoria 21 anos.',
    },
]);

// LODF - mais questoes
registerQuestions(['Lei Organica do DF', 'LODF'], [
    {
        id: 'exp2-lodf-1',
        exams: ['detran df'],
        topic: 'Competencias DF',
        text: 'O DF acumula competencias de:',
        options: buildOptions([
            ['a', 'Apenas municipio.'],
            ['b', 'Estado e municipio.'],
            ['c', 'Apenas Uniao.'],
            ['d', 'Somente internacional.'],
            ['e', 'Nenhuma competencia propria.'],
        ]),
        correctId: 'b',
        explanation: 'DF: autonomia limitada, acumula competencias estaduais + municipais. Vedado dividir em municipios.',
    },
]);

// DIREITO PENAL - mais casos
registerQuestions(['Direito Penal'], [
    {
        id: 'exp2-penal-1',
        exams: ['pmdf', 'policia penal mg'],
        topic: 'Tentativa',
        text: 'Tentativa e punivel quando:',
        options: buildOptions([
            ['a', 'Agente cogita praticar crime mas desiste antes de iniciar.'],
            ['b', 'Agente inicia execucao mas crime nao se consuma por circunstancias alheias a sua vontade.'],
            ['c', 'Agente pratica crime culposo.'],
            ['d', 'Agente e absolvido.'],
            ['e', 'Crime e impossivel desde o inicio (crime impossivel - nao ha tentativa punivel).'],
        ]),
        correctId: 'b',
        explanation: 'Tentativa: inicio execucao + nao consumacao por circunstancia alheia vontade. Pena: reducao 1/3 a 2/3.',
    },
    {
        id: 'exp2-penal-2',
        exams: ['pmdf'],
        topic: 'Prescricao',
        text: 'Prescricao da pretensao punitiva conta-se, em regra, a partir:',
        options: buildOptions([
            ['a', 'Da sentenca condenatoria transita em julgado.'],
            ['b', 'Do dia em que o crime se consumou.'],
            ['c', 'Do cumprimento total da pena.'],
            ['d', 'Somente em crimes hediondos.'],
            ['e', 'Nao existe prescricao penal.'],
        ]),
        correctId: 'b',
        explanation: 'Prescricao pretensao punitiva (antes transito): conta da consumacao (regra). Prescricao executoria: apos transito.',
    },
]);

// DIREITO PROCESSUAL PENAL - mais casos
registerQuestions(['Direito Processual Penal'], [
    {
        id: 'exp2-pp-1',
        exams: ['pmdf', 'policia penal mg'],
        topic: 'Flagrante',
        text: 'Flagrante proprio ocorre quando:',
        options: buildOptions([
            ['a', 'Agente e perseguido logo apos crime, em situacao que faca presumir autoria.'],
            ['b', 'Agente esta cometendo crime ou acaba de comete-lo.'],
            ['c', 'Agente e encontrado com objetos dias depois.'],
            ['d', 'Agente confessa sem ter sido preso.'],
            ['e', 'Nao existe flagrante proprio.'],
        ]),
        correctId: 'b',
        explanation: 'Flagrante proprio: esta cometendo ou acabou de cometer. Impróprio/quase-flagrante: perseguicao logo apos.',
    },
]);

// LEI DE DROGAS - mais casos
registerQuestions(['Lei de Drogas', 'Lei 11.343'], [
    {
        id: 'exp2-drogas-1',
        exams: ['policia penal mg'],
        topic: 'Trafico privilegiado',
        text: 'Trafico privilegiado (reducao 1/6 a 2/3) exige:',
        options: buildOptions([
            ['a', 'Reincidencia e integracao em organizacao criminosa.'],
            ['b', 'Primariedade, bons antecedentes, nao dedicacao, nao integracao organizacao.'],
            ['c', 'Violencia e arma de fogo.'],
            ['d', 'Condenacao anterior por homicidio.'],
            ['e', 'Trafico internacional.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 33, §4º: primario + bons antecedentes + nao dedicar + nao organização → reducao 1/6 a 2/3.',
    },
]);

// CRIMES HEDIONDOS - mais casos
registerQuestions(['Crimes Hediondos', 'Lei 8.072'], [
    {
        id: 'exp2-hed-1',
        exams: ['policia penal mg'],
        topic: 'Progressao regime',
        text: 'Em crimes hediondos, a progressao de regime exige cumprimento de:',
        options: buildOptions([
            ['a', '1/6 da pena.'],
            ['b', '2/5 (primario) ou 3/5 (reincidente).'],
            ['c', '1/2 sempre.'],
            ['d', '4/5 sempre.'],
            ['e', 'Nao ha progressao em hediondos.'],
        ]),
        correctId: 'b',
        explanation: 'Hediondos: 2/5 primario, 3/5 reincidente + exame criminologico (se fundamentado) + merito.',
    },
]);

// ESTATUTO/REGULAMENTO PMDF - mais questoes
registerQuestions(['Estatuto PMDF', 'Regulamento PMDF'], [
    {
        id: 'exp2-pmdf-1',
        exams: ['pmdf'],
        topic: 'Hierarquia e disciplina',
        text: 'Hierarquia militar se fundamenta em:',
        options: buildOptions([
            ['a', 'Vontade pessoal do superior.'],
            ['b', 'Grau, posto/graduacao, antiguidade, definindo subordinacao e comando.'],
            ['c', 'Sorteio aleatorio.'],
            ['d', 'Preferencias individuais.'],
            ['e', 'Nao existe hierarquia.'],
        ]),
        correctId: 'b',
        explanation: 'Hierarquia: estrutura autoridade baseada grau, posto/graduacao, antiguidade. Essencial comando/obediencia.',
    },
]);

// ATUALIDADES - questoes gerais
registerQuestions(['Atualidades'], [
    {
        id: 'exp2-atual-1',
        exams: ['pmdf', 'camara dos deputados'],
        topic: 'Reforma tributaria',
        text: 'A reforma tributaria (PEC 45/2023) propoe principalmente:',
        options: buildOptions([
            ['a', 'Eliminar todos tributos.'],
            ['b', 'Substituir multiplos tributos (ICMS, ISS, PIS, COFINS, IPI) por IVA dual (CBS + IBS).'],
            ['c', 'Aumentar 100% todos impostos.'],
            ['d', 'Dispensar arrecadacao.'],
            ['e', 'Manter sistema tributario inalterado.'],
        ]),
        correctId: 'b',
        explanation: 'Reforma: simplificacao, IVA dual (CBS federal + IBS estadual/municipal), transicao, cashback, regimes diferenciados.',
    },
    {
        id: 'exp2-atual-2',
        exams: ['camara dos deputados'],
        topic: 'Agenda 2030',
        text: 'Os Objetivos Desenvolvimento Sustentavel (ODS) da ONU totalizam:',
        options: buildOptions([
            ['a', '5 objetivos.'],
            ['b', '10 objetivos.'],
            ['c', '17 objetivos.'],
            ['d', '25 objetivos.'],
            ['e', '50 objetivos.'],
        ]),
        correctId: 'c',
        explanation: 'Agenda 2030: 17 ODS (Objetivos Desenvolvimento Sustentavel). Erradicar pobreza, igualdade, clima, etc.',
    },
]);

// PRIMEIROS SOCORROS - questoes praticas
registerQuestions(['Primeiros Socorros'], [
    {
        id: 'exp2-ps-1',
        exams: ['pmdf', 'detran df'],
        topic: 'RCP',
        text: 'Na RCP (adulto), a sequencia correta e:',
        options: buildOptions([
            ['a', '2 ventilacoes + 30 compressoes.'],
            ['b', '30 compressoes + 2 ventilacoes.'],
            ['c', 'Somente ventilacoes.'],
            ['d', 'Somente compressoes sem ventilacao (nao recomendado - ideal: ambas).'],
            ['e', 'Nao fazer nada.'],
        ]),
        correctId: 'b',
        explanation: 'RCP adulto: 30 compressoes (5-6cm profundidade) + 2 ventilacoes. Ritmo: 100-120/min.',
    },
    {
        id: 'exp2-ps-2',
        exams: ['detran df'],
        topic: 'Hemorragia',
        text: 'Em hemorragia externa, a primeira medida e:',
        options: buildOptions([
            ['a', 'Aplicar garrote imediatamente.'],
            ['b', 'Pressao direta no ferimento com pano limpo, elevar membro.'],
            ['c', 'Remover corpo estranho cravado.'],
            ['d', 'Dar liquidos para beber.'],
            ['e', 'Ignorar sangramento.'],
        ]),
        correctId: 'b',
        explanation: 'Hemorragia: pressao direta, eleva membro, compressao pontos arteriais. Garrote: ultimo recurso.',
    },
]);

// SINALIZACAO VIARIA - questoes visuais
registerQuestions(['Sinalizacao Viaria'], [
    {
        id: 'exp2-sin-1',
        exams: ['detran df'],
        topic: 'Placas regulamentacao',
        text: 'Placa PARE (R-1) tem formato:',
        options: buildOptions([
            ['a', 'Circulo.'],
            ['b', 'Triangulo.'],
            ['c', 'Octogono (8 lados).'],
            ['d', 'Losango.'],
            ['e', 'Retangulo.'],
        ]),
        correctId: 'c',
        explanation: 'PARE: octogono vermelho. DE PREFERENCIA: triangulo invertido. Demais regulamentacao: circulo.',
    },
    {
        id: 'exp2-sin-2',
        exams: ['detran df'],
        topic: 'Sinalizacao horizontal',
        text: 'Linha continua amarela separa:',
        options: buildOptions([
            ['a', 'Faixas mesmo sentido; permitido mudar faixa.'],
            ['b', 'Fluxos opostos; PROIBIDO ultrapassar/transpor.'],
            ['c', 'Nada; e decoracao.'],
            ['d', 'Apenas estacionamentos.'],
            ['e', 'Ciclovia de calcada.'],
        ]),
        correctId: 'b',
        explanation: 'Amarela continua: separa opostos, PROIBIDO ultrapassar. Amarela tracejada: PERMITIDO (se seguro).',
    },
]);

// PROCESSO LEGISLATIVO - questoes especificas
registerQuestions(['Processo Legislativo'], [
    {
        id: 'exp2-pl-1',
        exams: ['camara dos deputados'],
        topic: 'Iniciativa popular',
        text: 'Iniciativa popular de lei exige:',
        options: buildOptions([
            ['a', '100 assinaturas.'],
            ['b', '≥1% eleitorado nacional, min 5 estados, min 0,3% eleitores/estado.'],
            ['c', 'Apenas vontade de 1 deputado.'],
            ['d', 'Aprovacao STF previa.'],
            ['e', 'Nao existe iniciativa popular.'],
        ]),
        correctId: 'b',
        explanation: 'Iniciativa popular (CF 61, §2º): ≥1% eleitorado, ≥5 estados, ≥0,3% cada. Projeto lei ordinaria.',
    },
    {
        id: 'exp2-pl-2',
        exams: ['camara dos deputados'],
        topic: 'Medida Provisoria',
        text: 'Medida Provisoria perde eficacia se nao convertida em lei em:',
        options: buildOptions([
            ['a', '30 dias.'],
            ['b', '60 dias prorrogaveis + 60 (total 120 dias).'],
            ['c', '180 dias.'],
            ['d', '1 ano.'],
            ['e', 'Nunca perde eficacia.'],
        ]),
        correctId: 'b',
        explanation: 'MP: 60d + 60d prorrogacao = max 120 dias. Se nao convertida: perde eficacia, Congresso disciplina efeitos.',
    },
]);

// GESTAO CONTRATOS (Lei 14.133/21) - questoes praticas
registerQuestions(['Gestao de Contratos', 'Lei 14.133'], [
    {
        id: 'exp2-gc-1',
        exams: ['camara dos deputados'],
        topic: 'Dispensa de licitacao',
        text: 'Dispensa de licitacao por valor (Lei 14.133) permite, para OBRAS/SERVICOS ENGENHARIA:',
        options: buildOptions([
            ['a', 'Ate R$10.000.'],
            ['b', 'Ate R$50.000.'],
            ['c', 'Ate R$100.000.'],
            ['d', 'Ate R$500.000.'],
            ['e', 'Ate R$1.000.000.'],
        ]),
        correctId: 'c',
        explanation: 'Dispensa valor (Lei 14.133, art. 75, I e II): obras/servicos engenharia <R$100k; compras/servicos <R$50k.',
    },
    {
        id: 'exp2-gc-2',
        exams: ['camara dos deputados'],
        topic: 'Pregao eletronico',
        text: 'Pregao eletronico e PREFERENCIAL porque:',
        options: buildOptions([
            ['a', 'Aumenta custos e burocracia.'],
            ['b', 'Transparencia, celeridade, economicidade, ampla concorrencia via plataforma digital.'],
            ['c', 'Dispensa publicacao.'],
            ['d', 'Elimina habilitacao.'],
            ['e', 'E obrigatorio apenas para Uniao.'],
        ]),
        correctId: 'b',
        explanation: 'Pregao eletronico: + transparencia, - tempo, - custos, lances tempo real, + participacao.',
    },
]);

// IMPROBIDADE ADMINISTRATIVA (Lei 8.429/92) - questoes atualizadas
registerQuestions(['Improbidade Administrativa', 'Lei 8.429'], [
    {
        id: 'exp2-imp-1',
        exams: ['pmdf', 'policia penal mg', 'detran df', 'camara dos deputados'],
        topic: 'Alteracao Lei 14.230/21',
        text: 'Apos Lei 14.230/2021, violacao principios (Art. 11) exige:',
        options: buildOptions([
            ['a', 'Apenas culpa.'],
            ['b', 'DOLO (intencao).'],
            ['c', 'Responsabilidade objetiva.'],
            ['d', 'Nao exige elemento subjetivo.'],
            ['e', 'Presuncao absoluta.'],
        ]),
        correctId: 'b',
        explanation: 'Lei 14.230/21: Art. 11 exige DOLO. Culpa nao configura mais (maior seguranca juridica).',
    },
    {
        id: 'exp2-imp-2',
        exams: ['camara dos deputados'],
        topic: 'Ressarcimento',
        text: 'A acao de ressarcimento por dano ao erario e:',
        options: buildOptions([
            ['a', 'Prescritivel em 5 anos.'],
            ['b', 'IMPRESCRITIVEL.'],
            ['c', 'Prescritivel em 2 anos.'],
            ['d', 'Nao existe ressarcimento.'],
            ['e', 'Opcional para Administracao.'],
        ]),
        correctId: 'b',
        explanation: 'CF 37, §5º: ressarcimento IMPRESCRITIVEL. Independe outras sancoes (perda funcao, multa).',
    },
]);

// ==========================================================
// EXPANSAO EXTRA (todas materias/tipos) - lote 2
// ==========================================================

// DIREITO ADMINISTRATIVO - questoes adicionais
registerQuestions(['Direito Administrativo'], [
    {
        id: 'exp3-adm-1',
        exams: ['pmdf', 'detran df', 'camara dos deputados', 'policia penal mg'],
        topic: 'Atos administrativos (requisitos e atributos)',
        text: 'Assinale a alternativa CORRETA sobre atributos do ato administrativo.',
        options: buildOptions([
            ['a', 'Todo ato possui autoexecutoriedade.'],
            ['b', 'Presuncao de legitimidade e relativa (admite prova em contrario).'],
            ['c', 'Imperatividade so existe em contratos administrativos.'],
            ['d', 'Tipicidade e atributo exclusivo do direito privado.'],
            ['e', 'Motivo e sempre discricionario.'],
        ]),
        correctId: 'b',
        explanation:
            'Presuncao de legitimidade/veracidade e atributo tipico, mas relativo. Autoexecutoriedade nao e universal; motivo pode ser vinculado ou discricionario.',
    },
    {
        id: 'exp3-adm-2',
        exams: ['camara dos deputados'],
        topic: 'Poderes administrativos',
        text: 'O poder disciplinar permite a Administracao:',
        options: buildOptions([
            ['a', 'Criar leis para punir particulares.'],
            ['b', 'Aplicar sancoes a servidores e a particulares sujeitos a disciplina administrativa (ex.: contratos).'],
            ['c', 'Julgar crimes comuns em tribunais proprios.'],
            ['d', 'Anular atos do Legislativo.'],
            ['e', 'Exercer jurisdicao penal.'],
        ]),
        correctId: 'b',
        explanation:
            'Poder disciplinar: apurar e sancionar infracoes administrativas no ambito da Administracao, inclusive em relacao a vinculados/contratados.',
    },
]);

// ADMINISTRACAO PUBLICA (GESTAO) - questoes adicionais
registerQuestions(['Administracao Publica'], [
    {
        id: 'exp3-ap-1',
        exams: ['camara dos deputados'],
        topic: 'Planejamento estrategico e indicadores',
        text: 'Indicadores de DESEMPENHO sao usados principalmente para:',
        options: buildOptions([
            ['a', 'Substituir metas por opinioes.'],
            ['b', 'Medir resultados e apoiar tomada de decisao e melhoria continua.'],
            ['c', 'Eliminar transparencia.'],
            ['d', 'Aumentar burocracia sem finalidade.'],
            ['e', 'Evitar avaliacao de politicas publicas.'],
        ]),
        correctId: 'b',
        explanation: 'Indicadores permitem monitorar eficiencia/eficacia/efetividade e ajustar processos e politicas.',
    },
    {
        id: 'exp3-ap-2',
        exams: ['camara dos deputados'],
        topic: 'Gestao por processos',
        text: 'Na gestao por processos, e CORRETO afirmar que:',
        options: buildOptions([
            ['a', 'O foco e a hierarquia e nao o fluxo de trabalho.'],
            ['b', 'Mapeamento e padronizacao reduzem variabilidade e melhoram qualidade.'],
            ['c', 'Nao se mede tempo/custo de processo.'],
            ['d', 'Processo e igual a organograma.'],
            ['e', 'Nao existe dono do processo.'],
        ]),
        correctId: 'b',
        explanation: 'Gestao por processos foca fluxo ponta-a-ponta, padronizacao, medicao e melhoria (PDCA/BPM).',
    },
]);

// LEI 8.112 (RJU) - questoes adicionais
registerQuestions(['Lei 8.112', 'RJU', 'Regime Juridico Unico'], [
    {
        id: 'exp3-rju-1',
        exams: ['camara dos deputados'],
        topic: 'Provimento e vacancia',
        text: 'A reconducao e forma de provimento que ocorre quando o servidor:',
        options: buildOptions([
            ['a', 'E exonerado a pedido.'],
            ['b', 'Retorna ao cargo anterior por inabilitacao em estagio probatorio em outro cargo ou reintegracao do anterior ocupante.'],
            ['c', 'Se aposenta voluntariamente.'],
            ['d', 'E removido de oficio.'],
            ['e', 'E punido com suspensao.'],
        ]),
        correctId: 'b',
        explanation: 'Reconducao: retorno ao cargo anterior nas hipoteses legais (Lei 8.112).',
    },
    {
        id: 'exp3-rju-2',
        exams: ['camara dos deputados'],
        topic: 'Penalidades',
        text: 'Advertencia (Lei 8.112) e aplicada, em regra, para:',
        options: buildOptions([
            ['a', 'Crime contra a Administracao.'],
            ['b', 'Inobservancia de dever funcional leve, quando nao justificar penalidade mais grave.'],
            ['c', 'Abandono de cargo.'],
            ['d', 'Inassiduidade habitual.'],
            ['e', 'Improbidade administrativa.'],
        ]),
        correctId: 'b',
        explanation: 'Advertencia e penalidade leve; abandono/inassiduidade e demissao; improbidade pode gerar demissao e outras sancoes.',
    },
]);

// ARQUIVOLOGIA - questoes adicionais
registerQuestions(['Protocolo e Arquivo', 'Arquivologia'], [
    {
        id: 'exp3-arq-1',
        exams: ['camara dos deputados'],
        topic: 'Classificacao (tabela/planos) e temporalidade',
        text: 'A tabela de temporalidade define, principalmente:',
        options: buildOptions([
            ['a', 'Somente a grafia correta dos documentos.'],
            ['b', 'Prazos de guarda, destinação (eliminacao/guarda permanente) e valor dos documentos.'],
            ['c', 'Apenas a ordem alfabetica de arquivamento.'],
            ['d', 'Somente a digitalizacao obrigatoria.'],
            ['e', 'O conteudo do regimento interno.'],
        ]),
        correctId: 'b',
        explanation: 'Temporalidade orienta ciclo de vida documental: corrente, intermediario e permanente, com prazos e destinacao.',
    },
    {
        id: 'exp3-arq-2',
        exams: ['camara dos deputados'],
        topic: 'Protocolo e tramitacao',
        text: 'No protocolo, a atividade que registra entrada/saida e acompanha a movimentacao do documento e:',
        options: buildOptions([
            ['a', 'Microfilmagem.'],
            ['b', 'Autuacao.'],
            ['c', 'Registratura/expedicao e controle de tramitacao.'],
            ['d', 'Indexacao bibliografica.'],
            ['e', 'Gestao de pessoas.'],
        ]),
        correctId: 'c',
        explanation: 'Protocolo envolve recepcao, registro, classificacao basica e controle de tramitacao/expedicao.',
    },
]);

// ADMINISTRACAO DE PESSOAS - questoes adicionais
registerQuestions(['Administracao de Pessoas', 'Gestao de Pessoas'], [
    {
        id: 'exp3-gp-1',
        exams: ['camara dos deputados'],
        topic: 'Recrutamento e selecao',
        text: 'Recrutamento INTERNO tende a:',
        options: buildOptions([
            ['a', 'Reduzir motivacao e aumentar rotatividade.'],
            ['b', 'Valorizar carreira e reduzir custos/tempo, mas pode limitar diversidade de experiencias.'],
            ['c', 'Eliminar necessidade de treinamento.'],
            ['d', 'Impedir qualquer promocao.'],
            ['e', 'Ser ilegal no setor publico.'],
        ]),
        correctId: 'b',
        explanation: 'Interno pode motivar e aproveitar talentos, mas pode reduzir entrada de novas competencias se usado isoladamente.',
    },
    {
        id: 'exp3-gp-2',
        exams: ['camara dos deputados'],
        topic: 'Avaliacao de desempenho',
        text: 'Uma boa avaliacao de desempenho deve ser:',
        options: buildOptions([
            ['a', 'Secreta e sem criterios.'],
            ['b', 'Baseada em criterios claros, feedback e possibilidade de desenvolvimento.'],
            ['c', 'Somente punitiva.'],
            ['d', 'Feita apenas uma vez na carreira.'],
            ['e', 'Sem relacao com metas.'],
        ]),
        correctId: 'b',
        explanation: 'Avaliacao eficaz: criterios, metas, evidencias e feedback para melhoria, evitando vieses.',
    },
]);

// ADMINISTRACAO DE MATERIAIS - questoes adicionais
registerQuestions(['Administracao de Materiais', 'Gestao de Materiais'], [
    {
        id: 'exp3-gm-1',
        exams: ['camara dos deputados'],
        topic: 'Gestao de estoques',
        text: 'A classificacao ABC em estoques ajuda a:',
        options: buildOptions([
            ['a', 'Tratar todos os itens com o mesmo nivel de controle.'],
            ['b', 'Priorizar controle dos itens de maior impacto (valor/consumo) e ajustar politicas de reposicao.'],
            ['c', 'Eliminar inventarios.'],
            ['d', 'Aumentar rupturas.'],
            ['e', 'Substituir compras publicas.'],
        ]),
        correctId: 'b',
        explanation: 'Curva ABC: itens A exigem maior controle; B intermediario; C controle simplificado.',
    },
    {
        id: 'exp3-gm-2',
        exams: ['camara dos deputados'],
        topic: 'Almoxarifado e armazenagem',
        text: 'Uma pratica adequada de armazenagem e:',
        options: buildOptions([
            ['a', 'Misturar produtos incompatíveis para economizar espaco.'],
            ['b', 'Aplicar FIFO/FEFO quando cabivel e identificar lotes/validade.'],
            ['c', 'Dispensar enderecamento para ganhar velocidade.'],
            ['d', 'Nao registrar entradas/saidas.'],
            ['e', 'Ignorar condicoes ambientais.'],
        ]),
        correctId: 'b',
        explanation: 'FIFO/FEFO e rastreabilidade reduzem perdas e melhoram controle, especialmente em itens pereciveis.',
    },
]);

// ATUALIDADES - questoes adicionais
registerQuestions(['Atualidades', 'Conhecimentos Gerais'], [
    {
        id: 'exp3-atual-1',
        exams: ['camara dos deputados'],
        topic: 'Governanca de dados e LGPD (noções)',
        text: 'No contexto de governanca de dados, e CORRETO afirmar que:',
        options: buildOptions([
            ['a', 'LGPD so se aplica ao setor privado.'],
            ['b', 'Governanca define papeis, politicas e controles para qualidade, seguranca e uso adequado de dados.'],
            ['c', 'Dados publicos dispensam protecao.'],
            ['d', 'Nao existem responsabilidades por vazamentos.'],
            ['e', 'Governanca e sinônimo de backup.'],
        ]),
        correctId: 'b',
        explanation: 'Governanca envolve regras e responsabilidades; LGPD se aplica ao poder publico com bases legais e deveres de transparencia/seguranca.',
    },
    {
        id: 'exp3-atual-2',
        exams: ['pmdf', 'detran df', 'policia penal mg'],
        topic: 'Transparencia e controle social',
        text: 'Uma medida que fortalece transparencia e controle social e:',
        options: buildOptions([
            ['a', 'Restringir dados publicos sem justificativa.'],
            ['b', 'Publicar dados/relatorios e facilitar canais de ouvidoria e acesso a informacao.'],
            ['c', 'Eliminar auditorias internas.'],
            ['d', 'Proibir participacao social.'],
            ['e', 'Dispensar prestacao de contas.'],
        ]),
        correctId: 'b',
        explanation: 'Transparencia ativa e canais de participacao/controle social fortalecem accountability e qualidade dos servicos.',
    },
]);

// CRIMES HEDIONDOS / ABUSO / DESARMAMENTO / MARIA PENHA / TORTURA - questoes adicionais
registerQuestions(['Crimes Hediondos', 'Lei 8.072'], [
    {
        id: 'exp3-hed-1',
        exams: ['pmdf', 'policia penal mg'],
        topic: 'Efeitos principais',
        text: 'Em linhas gerais, crimes hediondos se caracterizam por regime mais severo, incluindo:',
        options: buildOptions([
            ['a', 'Proibicao absoluta de progressao.'],
            ['b', 'Regras especificas de progressao e maior rigor na execucao penal.'],
            ['c', 'Extincao de punibilidade automatica.'],
            ['d', 'Imunidade penal.'],
            ['e', 'Inexistencia de pena privativa de liberdade.'],
        ]),
        correctId: 'b',
        explanation: 'A lei estabelece maior rigor (prazos/percentuais e condicoes), mas nao impede automaticamente toda progressao.',
    },
]);

registerQuestions(['Abuso de Autoridade', 'Lei 13.869'], [
    {
        id: 'exp3-abuso-1',
        exams: ['pmdf', 'policia penal mg', 'detran df'],
        topic: 'Elemento subjetivo (dolo)',
        text: 'Em regra, o crime de abuso de autoridade (Lei 13.869/2019) exige:',
        options: buildOptions([
            ['a', 'Culpa simples.'],
            ['b', 'Dolo e finalidade especifica prevista em lei (ex.: prejudicar outrem/beneficiar a si ou a terceiro).'],
            ['c', 'Responsabilidade objetiva.'],
            ['d', 'Presuncao absoluta de intencao.'],
            ['e', 'Apenas erro de proibição.'],
        ]),
        correctId: 'b',
        explanation: 'A lei descreve condutas e exige dolo com especial fim de agir (na forma legal), nao sendo em regra crime culposo.',
    },
]);

registerQuestions(['Estatuto do Desarmamento', 'Lei 10.826'], [
    {
        id: 'exp3-des-1',
        exams: ['pmdf', 'policia penal mg'],
        topic: 'Porte x posse (noções)',
        text: 'Diferenca basica entre POSSE e PORTE de arma:',
        options: buildOptions([
            ['a', 'Posse e levar arma em via publica; porte e manter em casa.'],
            ['b', 'Posse e manter arma no interior da residencia/local de trabalho (condicoes legais); porte e transportar/portar fora desses locais.'],
            ['c', 'Sao sinonimos.'],
            ['d', 'Porte e sempre permitido sem autorizacao.'],
            ['e', 'Posse so existe para arma branca.'],
        ]),
        correctId: 'b',
        explanation: 'Posse: dentro de casa/local de trabalho (regras); porte: fora, com autorizacao/hipoteses legais.',
    },
]);

registerQuestions(['Lei Maria da Penha', 'Lei 11.340'], [
    {
        id: 'exp3-lmp-1',
        exams: ['pmdf', 'policia penal mg'],
        topic: 'Medidas protetivas',
        text: 'Medidas protetivas de urgencia podem incluir:',
        options: buildOptions([
            ['a', 'Obrigar a vitima a sair de casa sempre.'],
            ['b', 'Afastamento do agressor do lar e proibicao de aproximacao/contato.'],
            ['c', 'Anistia penal ao agressor.'],
            ['d', 'Suspensao de direitos politicos da vitima.'],
            ['e', 'Extincao automatica do processo.'],
        ]),
        correctId: 'b',
        explanation: 'Medidas visam proteger a vitima (afastamento, proibicao de contato, restricoes etc.), conforme a lei.',
    },
]);

registerQuestions(['Lei de Tortura', 'Lei 9.455'], [
    {
        id: 'exp3-tort-1',
        exams: ['pmdf', 'policia penal mg'],
        topic: 'Tipos e consequencias (noções)',
        text: 'Caracteriza tortura (Lei 9.455/1997), em linhas gerais:',
        options: buildOptions([
            ['a', 'Qualquer dor decorrente de acidente.'],
            ['b', 'Constranger com violencia/ameaca causando sofrimento intenso para obter informacao/confissao, castigo ou por discriminacao.'],
            ['c', 'Somente lesao corporal leve.'],
            ['d', 'Apenas ofensa verbal.'],
            ['e', 'Apenas crimes praticados por particular.'],
        ]),
        correctId: 'b',
        explanation: 'A lei descreve modalidades (informacao/confissao, castigo, discriminacao etc.), com sofrimento intenso e condutas tipicas.',
    },
]);

// ==========================================================
// PMDF (CEBRASPE) - Itens de CERTO/ERRADO (estilo Cespe/Cebraspe)
// ==========================================================

const cebraspeOptions = () =>
    buildOptions([
        ['c', 'Certo'],
        ['e', 'Errado'],
    ]);

const cebraspeItem = ({ id, exams, topic, statement, correctId, correctWhy, wrongWhy }) =>
    withFeedback(
        {
            id,
            exams,
            topic,
            text: `Julgue o item (C/E): ${statement}`,
            options: cebraspeOptions(),
            correctId,
            explanation: correctWhy,
        },
        {
            c: correctId === 'c' ? `Correto: ${correctWhy}` : `Errado: ${wrongWhy || correctWhy}`,
            e: correctId === 'e' ? `Correto: ${correctWhy}` : `Errado: ${wrongWhy || correctWhy}`,
        }
    );

// Língua Portuguesa (PMDF)
registerQuestions(['Lingua Portuguesa', 'Língua Portuguesa', 'L?ngua Portuguesa'], [
    cebraspeItem({
        id: 'pmdf-ceb-lp-1',
        exams: ['pmdf'],
        topic: 'Pontuação',
        statement: 'A vírgula pode separar sujeito de verbo quando o sujeito é longo.',
        correctId: 'e',
        correctWhy: 'Regra geral: não se separa sujeito de verbo por vírgula; “sujeito longo” não autoriza a quebra.',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-lp-2',
        exams: ['pmdf'],
        topic: 'Regência',
        statement: 'No sentido de “ver”, o verbo assistir rege a preposição “a” (assistir a algo).',
        correctId: 'c',
        correctWhy: 'Em norma-padrão, “assistir” = ver/presenciar exige preposição: “assistir ao filme”.',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-lp-3',
        exams: ['pmdf'],
        topic: 'Crase',
        statement: 'Há crase em “Refiro-me a aquela situação” quando o verbo exige preposição “a”.',
        correctId: 'c',
        correctWhy: 'Se houver regência de “a”, ocorre crase em “àquela” (a + aquela).',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-lp-4',
        exams: ['pmdf'],
        topic: 'Concordância',
        statement: 'O verbo haver, no sentido de existir, admite plural: “Houveram muitos incidentes”.',
        correctId: 'e',
        correctWhy: '“Haver” impessoal (existir) fica no singular: “Houve muitos incidentes”.',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-lp-5',
        exams: ['pmdf'],
        topic: 'Coesão e coerência',
        statement: 'Coesão textual refere-se ao sentido global do texto; coerência, aos mecanismos linguísticos de ligação.',
        correctId: 'e',
        correctWhy: 'É o inverso: coesão = ligações linguísticas; coerência = sentido global e lógica.',
    }),
]);

// Raciocínio Lógico-Matemático (PMDF)
registerQuestions(['Raciocinio Logico', 'Matematica e Raciocinio Logico', 'Raciocinio Logico-Matematico'], [
    cebraspeItem({
        id: 'pmdf-ceb-rl-1',
        exams: ['pmdf'],
        topic: 'Proposições e implicação',
        statement: 'A proposição “p → q” é falsa somente quando p é verdadeira e q é falsa.',
        correctId: 'c',
        correctWhy: 'Na implicação, o único caso de falsidade é V → F.',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-rl-2',
        exams: ['pmdf'],
        topic: 'Negação',
        statement: 'A negação de “p → q” é “¬p ∧ q”.',
        correctId: 'e',
        correctWhy: 'A negação de (p → q) é (p ∧ ¬q).',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-rl-3',
        exams: ['pmdf'],
        topic: 'Porcentagem',
        statement: 'Aumentar 10% e depois diminuir 10% sempre retorna ao valor inicial.',
        correctId: 'e',
        correctWhy: 'Operações percentuais sucessivas não são simétricas: 10% de aumento e 10% de desconto não se anulam.',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-rl-4',
        exams: ['pmdf'],
        topic: 'Probabilidade',
        statement: 'Se A e B são eventos independentes, então P(A∩B) = P(A)·P(B).',
        correctId: 'c',
        correctWhy: 'Independência implica multiplicação das probabilidades.',
    }),
]);

// Noções de Informática (PMDF)
registerQuestions(['Nocoes de Informatica', 'Informatica'], [
    cebraspeItem({
        id: 'pmdf-ceb-inf-1',
        exams: ['pmdf'],
        topic: 'Segurança da informação',
        statement: 'Phishing é uma técnica de engenharia social usada para obter credenciais e dados por meio de mensagens fraudulentas.',
        correctId: 'c',
        correctWhy: 'Phishing tenta induzir a vítima a revelar informações sensíveis (senhas, códigos etc.).',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-inf-2',
        exams: ['pmdf'],
        topic: 'Backup',
        statement: 'Backup incremental copia todos os arquivos novamente a cada execução, independentemente de alterações.',
        correctId: 'e',
        correctWhy: 'Incremental copia apenas o que mudou desde o último backup (geralmente desde o último backup, seja full ou incremental).',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-inf-3',
        exams: ['pmdf'],
        topic: 'Navegação e segurança',
        statement: 'HTTPS indica uso de criptografia no canal e reduz risco de interceptação do tráfego entre cliente e servidor.',
        correctId: 'c',
        correctWhy: 'HTTPS usa TLS/SSL para cifrar a comunicação, mitigando sniffing e adulteração.',
    }),
]);

// Direito Constitucional (PMDF)
registerQuestions(['Direito Constitucional'], [
    cebraspeItem({
        id: 'pmdf-ceb-const-1',
        exams: ['pmdf'],
        topic: 'Segurança pública (art. 144)',
        statement: 'A segurança pública é dever do Estado, direito e responsabilidade de todos.',
        correctId: 'c',
        correctWhy: 'Texto do art. 144 da CF: dever do Estado, direito e responsabilidade de todos.',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-const-2',
        exams: ['pmdf'],
        topic: 'Direitos fundamentais',
        statement: 'Os direitos e garantias fundamentais podem ser restringidos por lei em qualquer hipótese, desde que haja interesse público.',
        correctId: 'e',
        correctWhy: 'Restrições devem respeitar limites constitucionais (reserva legal, proporcionalidade, núcleo essencial etc.); não é “qualquer hipótese”.',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-const-3',
        exams: ['pmdf'],
        topic: 'Administração pública (art. 37)',
        statement: 'Legalidade, impessoalidade, moralidade, publicidade e eficiência são princípios expressos aplicáveis à administração pública.',
        correctId: 'c',
        correctWhy: 'LIMPE é o núcleo do art. 37, caput.',
    }),
]);

// Direito Penal (PMDF)
registerQuestions(['Direito Penal'], [
    cebraspeItem({
        id: 'pmdf-ceb-pen-1',
        exams: ['pmdf'],
        topic: 'Princípio da legalidade',
        statement: 'Não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal.',
        correctId: 'c',
        correctWhy: 'Princípio da legalidade (nullum crimen, nulla poena sine lege).',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-pen-2',
        exams: ['pmdf'],
        topic: 'Excludentes de ilicitude',
        statement: 'No estado de necessidade, o agente sacrifica bem de maior valor para salvar bem de menor valor.',
        correctId: 'e',
        correctWhy: 'No estado de necessidade, em regra, busca-se preservar bem próprio/alheio diante de perigo atual, com ponderação; “maior por menor” contraria a lógica típica da excludente.',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-pen-3',
        exams: ['pmdf'],
        topic: 'Concurso de pessoas',
        statement: 'Em concurso de pessoas, a regra é que todos respondem na medida de sua culpabilidade.',
        correctId: 'c',
        correctWhy: 'A responsabilização considera a participação e o grau de culpabilidade.',
    }),
]);

// Direito Processual Penal (PMDF)
registerQuestions(['Direito Processual Penal'], [
    cebraspeItem({
        id: 'pmdf-ceb-pp-1',
        exams: ['pmdf'],
        topic: 'Inquérito policial',
        statement: 'O inquérito policial é procedimento administrativo investigativo que subsidia a ação penal.',
        correctId: 'c',
        correctWhy: 'É investigação preliminar, com finalidade de colher elementos informativos.',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-pp-2',
        exams: ['pmdf'],
        topic: 'Prisão cautelar',
        statement: 'A prisão preventiva pode ser decretada sem decisão judicial, por ato exclusivo da autoridade policial.',
        correctId: 'e',
        correctWhy: 'Prisão preventiva exige decisão judicial fundamentada (hipóteses e requisitos legais).',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-pp-3',
        exams: ['pmdf'],
        topic: 'Prova',
        statement: 'A cadeia de custódia busca assegurar rastreabilidade e integridade da evidência, desde a coleta até o descarte.',
        correctId: 'c',
        correctWhy: 'Cadeia de custódia documenta manuseio/transferências para garantir confiabilidade.',
    }),
]);

// Direitos Humanos (PMDF)
registerQuestions(['Direitos Humanos'], [
    cebraspeItem({
        id: 'pmdf-ceb-dh-1',
        exams: ['pmdf'],
        topic: 'Uso da força',
        statement: 'Os princípios da legalidade, necessidade e proporcionalidade orientam o uso da força pelo Estado.',
        correctId: 'c',
        correctWhy: 'Padrão de DH: uso da força deve ser legal, necessário e proporcional, com responsabilização.',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-dh-2',
        exams: ['pmdf'],
        topic: 'Tratamento de presos',
        statement: 'É vedado tratamento cruel, desumano ou degradante, inclusive em ambiente prisional.',
        correctId: 'c',
        correctWhy: 'A proteção à integridade física e moral é regra constitucional e de DH.',
    }),
]);

// Criminologia (PMDF)
registerQuestions(['Criminologia'], [
    cebraspeItem({
        id: 'pmdf-ceb-crim-1',
        exams: ['pmdf'],
        topic: 'Cifra negra',
        statement: 'Cifra negra corresponde aos crimes não registrados nas estatísticas oficiais.',
        correctId: 'c',
        correctWhy: 'São ocorrências não notificadas/registradas.',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-crim-2',
        exams: ['pmdf'],
        topic: 'Labeling (etiquetamento)',
        statement: 'A teoria do etiquetamento enfatiza que o rótulo social pode reforçar exclusão e carreiras criminais.',
        correctId: 'c',
        correctWhy: 'Labeling destaca estigmatização e reação social como parte do fenômeno criminal.',
    }),
]);

// Estatuto PMDF (Noções) (PMDF)
registerQuestions(['Estatuto dos Policiais Militares do DF', 'Estatuto PMDF'], [
    cebraspeItem({
        id: 'pmdf-ceb-est-1',
        exams: ['pmdf'],
        topic: 'Hierarquia e disciplina',
        statement: 'Hierarquia e disciplina são bases estruturantes das instituições militares.',
        correctId: 'c',
        correctWhy: 'São pilares do regime militar: cadeia de comando e observância de normas/ordens legais.',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-est-2',
        exams: ['pmdf'],
        topic: 'Responsabilidades',
        statement: 'A responsabilização do militar restringe-se à esfera disciplinar, não alcançando esferas civil e penal.',
        correctId: 'e',
        correctWhy: 'Há responsabilização disciplinar/administrativa e, conforme o fato, também civil e penal.',
    }),
]);

// Regulamento Disciplinar da PMDF (PMDF)
registerQuestions(['Regulamento Disciplinar da PMDF', 'RDP/PMDF'], [
    cebraspeItem({
        id: 'pmdf-ceb-rdp-1',
        exams: ['pmdf'],
        topic: 'Devido processo',
        statement: 'Mesmo no processo disciplinar, deve-se assegurar defesa e decisão motivada.',
        correctId: 'c',
        correctWhy: 'Garantias procedimentais (defesa/motivação) são ponto recorrente de prova.',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-rdp-2',
        exams: ['pmdf'],
        topic: 'Proporcionalidade',
        statement: 'A aplicação de sanções disciplinares deve observar proporcionalidade.',
        correctId: 'c',
        correctWhy: 'É princípio básico em regime disciplinar (evita punição excessiva).',
    }),
]);

// Legislação Penal Especial (PMDF)
registerQuestions(['Legislacao Penal Especial'], [
    cebraspeItem({
        id: 'pmdf-ceb-lpe-1',
        exams: ['pmdf'],
        topic: 'Lei 11.343/2006 (drogas)',
        statement: 'A distinção entre uso e tráfico depende apenas da quantidade de droga apreendida, fixada em lei.',
        correctId: 'e',
        correctWhy: 'Não há quantidade fixa universal na lei; a distinção considera o caso concreto (circunstâncias, local, conduta etc.).',
    }),
    cebraspeItem({
        id: 'pmdf-ceb-lpe-2',
        exams: ['pmdf'],
        topic: 'Maria da Penha',
        statement: 'Medidas protetivas podem incluir afastamento do agressor e proibição de aproximação/contato.',
        correctId: 'c',
        correctWhy: 'Medidas protetivas visam proteção imediata da vítima, com restrições ao agressor.',
    }),
]);

const isUsed = (used, id) => {
    if (!used) return false;
    if (used instanceof Set) {
        return used.has(id);
    }
    if (Array.isArray(used)) {
        return used.includes(id);
    }
    return Boolean(used[id]);
};

const questionMatchesExam = (question, examSlug) => {
    // "geral" = sem filtro (mostra tudo)
    if (!examSlug || examSlug === 'geral') return true;
    if (!question.examSlugs || question.examSlugs.length === 0) return true;
    return question.examSlugs.some((slug) => slug === examSlug);
};

const cloneQuestion = (question) => ({
    ...question,
    options: question.options.map((opt) => ({ ...opt })),
});

function questionMatchesStyle(question, style) {
    if (!style || style === 'mixed') return true;
    const count = question?.options?.length || 0;
    if (style === 'ce') return count === 2;
    if (style === 'mc') return count >= 4;
    return true;
}

function pickAvailable(slug, used, examSlug, allowedTopics, style) {
    const pool = QUESTION_BANK[slug];
    if (!pool || pool.length === 0) return null;
    const available = pool.filter(
        (question) =>
            !isUsed(used, question.id) &&
            questionMatchesExam(question, examSlug) &&
            questionMatchesStyle(question, style)
    );
    if (available.length === 0) return null;

    const normalizedAllowedTopics =
        allowedTopics && Array.isArray(allowedTopics) && allowedTopics.length
            ? new Set(allowedTopics.map((topic) => slugify(topic)).filter(Boolean))
            : null;

    const topicMatches =
        normalizedAllowedTopics && normalizedAllowedTopics.size
            ? available.filter((question) => question.topic && normalizedAllowedTopics.has(slugify(question.topic)))
            : [];

    const candidates = topicMatches.length ? topicMatches : available;
    const index = Math.floor(Math.random() * candidates.length);
    return candidates[index];
}

export function getQuestionFromBank(subjectName, used, examName, allowedTopics, style = 'mixed') {
    const slug = slugify(subjectName) || 'geral';
    const examSlug = slugify(examName) || 'geral';
    const subjectQuestion = pickAvailable(slug, used, examSlug, allowedTopics, style);
    if (subjectQuestion) {
        return cloneQuestion(subjectQuestion);
    }
    if (slug !== 'geral') {
        const fallback = pickAvailable('geral', used, examSlug, allowedTopics, style);
        if (fallback) {
            return cloneQuestion(fallback);
        }
    }
    return null;
}

export { QUESTION_BANK };
