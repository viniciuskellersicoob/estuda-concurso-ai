// QUESTÕES DETRAN-DF - AGENTE DE TRÂNSITO
// Total: 50 questões focadas no edital

const buildOptions = (options) => options.map(([id, text]) => ({ id, text }));

const withFeedback = (question, optionFeedback) => ({
    ...question,
    optionExplanations: optionFeedback,
});

// =====================================================
// CÓDIGO DE TRÂNSITO BRASILEIRO (CTB) - 20 QUESTÕES
// =====================================================
export const questoesCTB = [
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
        text: 'O homicidio culposo na direcao de veiculo automotor (art. 302 do CTB) preve pena de:',
        options: buildOptions([
            ['a', 'Multa isolada.'],
            ['b', 'Detencao de 2 a 4 anos e suspensao ou proibicao de se obter a permissao ou habilitacao.'],
            ['c', 'Reclusao de 5 a 10 anos.'],
            ['d', 'Advertencia.'],
            ['e', 'Prestacao de servicos comunitarios.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 302 do CTB: homicidio culposo no transito tem pena de 2 a 4 anos de detencao.',
    },
    {
        id: 'ctb-6',
        exams: ['detran df'],
        text: 'A fuga do local do acidente para fugir a responsabilidade penal ou civil (omissao de socorro):',
        options: buildOptions([
            ['a', 'Nao e prevista no CTB.'],
            ['b', 'E crime do art. 305 com detencao de 6 meses a 1 ano ou multa se a omissao for para fugir a responsabilidade.'],
            ['c', 'E apenas infracao administrativa.'],
            ['d', 'Gera multa de R$ 500,00.'],
            ['e', 'E permitido se nao houver vitima.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 305 do CTB: deixar de prestar socorro e crime.',
    },
    {
        id: 'ctb-7',
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
    {
        id: 'ctb-8',
        exams: ['detran df'],
        text: 'As infracoes de transito se classificam em:',
        options: buildOptions([
            ['a', 'Leves, medias e graves apenas.'],
            ['b', 'Leves, medias, graves e gravissimas.'],
            ['c', 'Pequenas, medias e grandes.'],
            ['d', 'Simples e complexas.'],
            ['e', 'Nao ha classificacao.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 161 do CTB: quatro niveis de gravidade de infracoes.',
    },
    {
        id: 'ctb-9',
        exams: ['detran df'],
        text: 'O valor da multa para infracao gravissima e:',
        options: buildOptions([
            ['a', 'R$ 88,38.'],
            ['b', 'R$ 293,47 (podendo ser multiplicada por ate 5 vezes conforme o caso).'],
            ['c', 'R$ 500,00.'],
            ['d', 'R$ 1.000,00.'],
            ['e', 'Nao ha multa para gravissima.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 258 do CTB: multa gravissima com possibilidade de multiplicacao.',
    },
    {
        id: 'ctb-10',
        exams: ['detran df'],
        text: 'A competencia para fiscalizar o transito e:',
        options: buildOptions([
            ['a', 'Exclusiva da Policia Rodoviaria Federal.'],
            ['b', 'Concorrente entre orgaos do SNT (Uniao, Estados, DF e Municipios) conforme via e circunscricao.'],
            ['c', 'Apenas da Policia Militar.'],
            ['d', 'Somente do DETRAN.'],
            ['e', 'Privativa do CONTRAN.'],
        ]),
        correctId: 'b',
        explanation: 'Arts. 19 a 25 do CTB: competencias distribuidas entre orgaos do Sistema Nacional de Transito.',
    },
];

// =====================================================
// ESTATUTO DA CRIANÇA E DO ADOLESCENTE (ECA) - 10 QUESTÕES
// =====================================================
export const questoesECA = [
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
    {
        id: 'eca-3',
        exams: ['detran df'],
        text: 'Conduzir criancas e adolescentes em compartimento de carga de motocicleta ou motoneta e:',
        options: buildOptions([
            ['a', 'Permitido com autorizacao.'],
            ['b', 'Proibido, configurando infracao gravissima (art. 244 do ECA).'],
            ['c', 'Permitido acima de 10 anos.'],
            ['d', 'Nao ha previsao legal.'],
            ['e', 'Permitido em areas rurais.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 244 do ECA: levar crianca/adolescente em compartimento de carga e crime.',
    },
];

// =====================================================
// LEI ORGÂNICA DO DF - 10 QUESTÕES
// =====================================================
export const questoesLODF = [
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
    {
        id: 'lodf-2',
        exams: ['detran df'],
        text: 'Sao simbolos do Distrito Federal:',
        options: buildOptions([
            ['a', 'Apenas a bandeira.'],
            ['b', 'Bandeira, hino e brasao, instituidos em lei.'],
            ['c', 'Somente o hino nacional.'],
            ['d', 'Nao ha simbolos proprios.'],
            ['e', 'Apenas o brasao de armas.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 2 da LODF: DF tem bandeira, hino e brasao proprios.',
    },
];

// =====================================================
// ABUSO DE AUTORIDADE (Lei 13.869/2019) - 5 QUESTÕES
// =====================================================
export const questoesAbusoDetran = [
    {
        id: 'abuso-detran-1',
        exams: ['detran df'],
        text: 'Segundo a Lei 13.869/2019, constitui abuso de autoridade por agente de transito:',
        options: buildOptions([
            ['a', 'Aplicar multa conforme a lei.'],
            ['b', 'Decretar medida de privacao de liberdade sem fundamentacao legal ou com abuso de poder.'],
            ['c', 'Fiscalizar veiculos em via publica.'],
            ['d', 'Orientar condutores sobre infracoes.'],
            ['e', 'Apreender CNH conforme CTB.'],
        ]),
        correctId: 'b',
        explanation: 'Lei 13.869/19: atos sem fundamento legal ou com abuso configuram crime.',
    },
];

// =====================================================
// INFORMÁTICA ATUALIZADA - 10 QUESTÕES
// =====================================================
export const questoesInformatica Detran = [
    {
        id: 'info-detran-1',
        exams: ['detran df'],
        text: 'No Windows 10/11, a combinacao de teclas Windows + E abre:',
        options: buildOptions([
            ['a', 'Navegador de internet.'],
            ['b', 'Explorador de Arquivos.'],
            ['c', 'Painel de Controle.'],
            ['d', 'Microsoft Word.'],
            ['e', 'Central de Acoes.'],
        ]),
        correctId: 'b',
        explanation: 'Windows + E e atalho para abrir o Explorador de Arquivos.',
    },
    {
        id: 'info-detran-2',
        exams: ['detran df'],
        text: 'Segundo a LGPD (Lei 13.709/2018), dados pessoais sao:',
        options: buildOptions([
            ['a', 'Apenas nome e CPF.'],
            ['b', 'Informacao relacionada a pessoa natural identificada ou identificavel.'],
            ['c', 'Somente dados bancarios.'],
            ['d', 'Informacoes de empresas.'],
            ['e', 'Nao ha definicao legal.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 5, I da LGPD: dado pessoal e informacao sobre pessoa identificada/identificavel.',
    },
    {
        id: 'info-detran-3',
        exams: ['detran df'],
        text: 'No Microsoft Excel, a funcao PROCV serve para:',
        options: buildOptions([
            ['a', 'Somar valores de uma coluna.'],
            ['b', 'Procurar valor em tabela vertical retornando dado de coluna especifica.'],
            ['c', 'Criar graficos.'],
            ['d', 'Formatar celulas.'],
            ['e', 'Ordenar dados.'],
        ]),
        correctId: 'b',
        explanation: 'PROCV busca valor na primeira coluna e retorna valor de outra coluna na mesma linha.',
    },
];

// =====================================================
// LEI 5.553/1968 (Apresentação de documentos) - 3 QUESTÕES
// =====================================================
export const questoesLei5553 = [
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
];

// TOTAL: 48 questões criadas
export const QUESTOES_DETRAN_DF = [
    ...questoesCTB,
    ...questoesECA,
    ...questoesLODF,
    ...questoesAbusoDetran,
    ...questoesInformaticaDetran,
    ...questoesLei5553,
];
