// QUESTÕES CÂMARA DOS DEPUTADOS - TÉCNICO ADMINISTRATIVO
// Matérias específicas que faltam no banco

const buildOptions = (options) => options.map(([id, text]) => ({ id, text }));

const withFeedback = (question, optionFeedback) => ({
    ...question,
    optionExplanations: optionFeedback,
});

// =====================================================
// LEI 8.112/1990 (RJU Federal) - 15 QUESTÕES
// =====================================================
export const questoesRJU = [
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
    {
        id: 'rju-4',
        exams: ['camara dos deputados'],
        text: 'A licenca para capacitacao do servidor publico federal pode ser concedida apos cada:',
        options: buildOptions([
            ['a', '1 ano de exercicio.'],
            ['b', '3 anos de exercicio.'],
            ['c', '5 anos de efetivo exercicio, por ate 3 meses.'],
            ['d', '10 anos.'],
            ['e', 'Nao existe licenca para capacitacao.'],
        ]),
        correctId: 'c',
        explanation: 'Art. 87 da Lei 8.112/90: licenca capacitacao a cada 5 anos, por ate 3 meses.',
    },
    {
        id: 'rju-5',
        exams: ['camara dos deputados'],
        text: 'E vedado ao servidor publico:',
        options: buildOptions([
            ['a', 'Exercer atividade docente fora do horario de trabalho.'],
            ['b', 'Participar de gerencia ou administracao de sociedade privada.'],
            ['c', 'Filiar-se a sindicato.'],
            ['d', 'Exercer direito de greve.'],
            ['e', 'Ter mais de um cargo apenas se permitido pela CF.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 117, X da Lei 8.112/90: vedada participacao em gerencia de empresa privada.',
    },
];

// =====================================================
// REGIMENTO INTERNO DA CÂMARA - 10 QUESTÕES
// =====================================================
export const questoesRegimento = [
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
        text: 'O quorum para aprovacao de projeto de lei ordinaria e:',
        options: buildOptions([
            ['a', 'Unanimidade.'],
            ['b', 'Maioria absoluta dos membros da Casa.'],
            ['c', 'Maioria simples dos presentes, desde que presente maioria absoluta.'],
            ['d', '2/3 dos membros.'],
            ['e', '3/5 dos membros.'],
        ]),
        correctId: 'c',
        explanation: 'CF/88, art. 47: lei ordinaria por maioria simples dos presentes.',
    },
    {
        id: 'regimento-3',
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
];

// =====================================================
// CONHECIMENTOS GERAIS (Atualidades) - 10 QUESTÕES
// =====================================================
export const questoesAtualidades = [
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
    {
        id: 'atual-2',
        exams: ['camara dos deputados'],
        text: 'A Lei Geral de Protecao de Dados (LGPD) brasileira e a:',
        options: buildOptions([
            ['a', 'Lei 12.965/2014.'],
            ['b', 'Lei 13.709/2018.'],
            ['c', 'Lei 8.078/1990.'],
            ['d', 'Nao existe LGPD no Brasil.'],
            ['e', 'Lei 9.472/1997.'],
        ]),
        correctId: 'b',
        explanation: 'Lei 13.709/2018 e a LGPD brasileira, vigente desde 2020.',
    },
];

// =====================================================
// PROTOCOLO E ARQUIVO - 15 QUESTÕES
// =====================================================
export const questoesArquivo = [
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
    {
        id: 'arquivo-3',
        exams: ['camara dos deputados'],
        text: 'A microfilmagem de documentos:',
        options: buildOptions([
            ['a', 'E proibida no Brasil.'],
            ['b', 'Tem valor legal conforme Lei 5.433/1968 e Decreto 1.799/1996.'],
            ['c', 'Nao tem valor probatorio.'],
            ['d', 'E obrigatoria para todos os documentos.'],
            ['e', 'Substitui sempre o original sem restricoes.'],
        ]),
        correctId: 'b',
        explanation: 'Microfilmagem tem amparo legal e valor de prova no Brasil.',
    },
];

// =====================================================
// ADMINISTRAÇÃO DE PESSOAS - 10 QUESTÕES
// =====================================================
export const questoesAdmPessoas = [
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
    {
        id: 'admpessoas-2',
        exams: ['camara dos deputados'],
        text: 'A avaliacao de desempenho tem como objetivo:',
        options: buildOptions([
            ['a', 'Apenas punir servidores.'],
            ['b', 'Medir performance, identificar necessidades de capacitacao e subsidiar decisoes de gestao.'],
            ['c', 'Somente promover servidores.'],
            ['d', 'Nao ha objetivos definidos.'],
            ['e', 'Eliminar funcionarios.'],
        ]),
        correctId: 'b',
        explanation: 'Avaliacao de desempenho e ferramenta de gestao e desenvolvimento.',
    },
];

// =====================================================
// ADMINISTRAÇÃO DE MATERIAIS - 10 QUESTÕES
// =====================================================
export const questoesAdmMateriais = [
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
    {
        id: 'admmat-2',
        exams: ['camara dos deputados'],
        text: 'Patrimonio publico compreende:',
        options: buildOptions([
            ['a', 'Apenas imoveis.'],
            ['b', 'Bens moveis e imoveis de propriedade ou responsabilidade do orgao.'],
            ['c', 'Somente veiculos.'],
            ['d', 'Nao ha conceito de patrimonio publico.'],
            ['e', 'Apenas equipamentos de informatica.'],
        ]),
        correctId: 'b',
        explanation: 'Patrimonio engloba todos os bens moveis e imoveis sob gestao publica.',
    },
];

// =====================================================
// ADMINISTRAÇÃO ORÇAMENTÁRIA E FINANCEIRA - 15 QUESTÕES
// =====================================================
export const questoesOrcamento = [
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
    {
        id: 'orc-5',
        exams: ['camara dos deputados'],
        text: 'Sao principios orcamentarios:',
        options: buildOptions([
            ['a', 'Apenas legalidade.'],
            ['b', 'Unidade, universalidade, anualidade, exclusividade, entre outros.'],
            ['c', 'Somente publicidade.'],
            ['d', 'Nao ha principios definidos.'],
            ['e', 'Apenas moralidade.'],
        ]),
        correctId: 'b',
        explanation: 'Diversos principios regem o orcamento publico (unidade, universalidade, anualidade, etc).',
    },
];

// EXPORTAR TODAS
export const QUESTOES_CAMARA_COMPLETO = [
    ...questoesRJU,
    ...questoesRegimento,
    ...questoesAtualidades,
    ...questoesArquivo,
    ...questoesAdmPessoas,
    ...questoesAdmMateriais,
    ...questoesOrcamento,
];
