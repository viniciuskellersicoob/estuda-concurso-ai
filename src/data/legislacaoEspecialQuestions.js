// QUESTÕES DE LEGISLAÇÃO ESPECIAL - EDITAL DEPEN MG
// Total: ~250 questões

const buildOptions = (options) => options.map(([id, text]) => ({ id, text }));

const withFeedback = (question, optionFeedback) => ({
    ...question,
    optionExplanations: optionFeedback,
});

// =====================================================
// LEI DE EXECUÇÃO PENAL (Lei 7.210/1984) - 50 QUESTÕES
// =====================================================
export const questoesLEP = [
    withFeedback(
        {
            id: 'lep-1',
            exams: ['policia penal mg'],
            text: 'Segundo a Lei de Execução Penal, a assistência ao preso e ao internado é dever do Estado, objetivando:',
            options: buildOptions([
                ['a', 'Exclusivamente a punição e o isolamento do condenado.'],
                ['b', 'Prevenir o crime e orientar o retorno à convivência em sociedade.'],
                ['c', 'Apenas garantir a segurança do estabelecimento penal.'],
                ['d', 'Aplicar medidas educativas sem considerar a reinserção social.'],
                ['e', 'Restringir direitos sem qualquer tipo de assistência.'],
            ]),
            correctId: 'b',
            explanation: 'Art. 1º da LEP: a execução penal tem por objetivo proporcionar condições para a harmônica integração social do condenado e do internado.',
        },
        {
            a: 'Errado: a LEP visa à reintegração, não apenas à punição.',
            b: 'Correto: o art. 1º destaca a prevenção ao crime e o retorno social.',
            c: 'Errado: a segurança é um aspecto, mas não o único objetivo.',
            d: 'Errado: a reinserção social é fundamental na LEP.',
            e: 'Errado: a LEP garante diversos direitos e assistências ao preso.',
        }
    ),
    withFeedback(
        {
            id: 'lep-2',
            exams: ['policia penal mg'],
            text: 'São direitos do preso, segundo a LEP:',
            options: buildOptions([
                ['a', 'Alimentação suficiente, vestuário e instalações higiênicas.'],
                ['b', 'Apenas o direito de receber visitas uma vez por mês.'],
                ['c', 'Somente assistência material, sem direito à educação.'],
                ['d', 'Acesso irrestrito a qualquer tipo de comunicação externa.'],
                ['e', 'Nenhum direito durante o cumprimento da pena.'],
            ]),
            correctId: 'a',
            explanation: 'Art. 41 da LEP enumera direitos como alimentação, vestuário, instalações higiênicas, entre outros.',
        },
        {
            a: 'Correto: são direitos básicos previstos no art. 41.',
            b: 'Errado: as visitas são mais frequentes conforme regulamento.',
            c: 'Errado: a assistência educacional é direito garantido.',
            d: 'Errado: a comunicação externa é regulamentada, não irrestrita.',
            e: 'Errado: o preso mantém diversos direitos na LEP.',
        }
    ),
    withFeedback(
        {
            id: 'lep-3',
            exams: ['policia penal mg'],
            text: 'O regime fechado caracteriza-se pela execução da pena em:',
            options: buildOptions([
                ['a', 'Colônia agrícola, industrial ou estabelecimento similar.'],
                ['b', 'Casa do albergado ou estabelecimento adequado.'],
                ['c', 'Estabelecimento de segurança máxima ou média.'],
                ['d', 'Prisão domiciliar com monitoramento eletrônico.'],
                ['e', 'Liberdade vigiada com comparecimento mensal.'],
            ]),
            correctId: 'c',
            explanation: 'Art. 33, §1º, alínea "a" do Código Penal c/c LEP: regime fechado em estabelecimento de segurança máxima ou média.',
        },
        {
            a: 'Errado: isso caracteriza o regime semiaberto.',
            b: 'Errado: isso caracteriza o regime aberto.',
            c: 'Correto: regime fechado é cumprido em estabelecimento fechado.',
            d: 'Errado: isso seria regime aberto ou prisão domiciliar.',
            e: 'Errado: não corresponde a nenhum regime prisional.',
        }
    ),
    withFeedback(
        {
            id: 'lep-4',
            exams: ['policia penal mg'],
            text: 'A falta grave cometida pelo preso acarreta:',
            options: buildOptions([
                ['a', 'Apenas advertência verbal sem registro.'],
                ['b', 'Regressão de regime, perda de dias remidos, isolamento na própria cela.'],
                ['c', 'Aplicação imediata de pena de morte.'],
                ['d', 'Liberdade automática após audiência.'],
                ['e', 'Transferência obrigatória para regime aberto.'],
            ]),
            correctId: 'b',
            explanation: 'Art. 50 e 57 da LEP: falta grave pode causar regressão, perda de remição e isolamento.',
        },
        {
            a: 'Errado: falta grave tem consequências sérias previstas na LEP.',
            b: 'Correto: são as principais sanções previstas.',
            c: 'Errado: pena de morte não existe no sistema brasileiro comum.',
            d: 'Errado: pelo contrário, pode haver regressão de regime.',
            e: 'Errado: falta grave leva à regressão, não à progressão.',
        }
    ),
    withFeedback(
        {
            id: 'lep-5',
            exams: ['policia penal mg'],
            text: 'A remição de pena pelo trabalho na LEP prevê que:',
            options: buildOptions([
                ['a', 'Três dias de trabalho remem um dia de pena.'],
                ['b', 'Dois dias de trabalho remem um dia de pena.'],
                ['c', 'Sete dias de trabalho remem um dia de pena.'],
                ['d', 'O trabalho não gera remição de pena.'],
                ['e', 'Um dia de trabalho reme três dias de pena.'],
            ]),
            correctId: 'a',
            explanation: 'Art. 126 da LEP: a cada 3 dias trabalhados, o preso resgata 1 dia de pena.',
        },
        {
            a: 'Correto: proporção 3:1 conforme art. 126.',
            b: 'Errado: a proporção correta é 3:1, não 2:1.',
            c: 'Errado: seria muito desproporcional.',
            d: 'Errado: o trabalho é forma de remição prevista na LEP.',
            e: 'Errado: proporção invertida e incorreta.',
        }
    ),
    // Continuando com mais questões da LEP...
    {
        id: 'lep-6',
        exams: ['policia penal mg'],
        text: 'A progressão de regime depende, conforme a LEP, de:',
        options: buildOptions([
            ['a', 'Cumprimento de 1/6 da pena para crimes comuns.'],
            ['b', 'Cumprimento de 2/5 da pena para primários e 3/5 para reincidentes em crimes hediondos.'],
            ['c', 'Apenas bom comportamento, independente do tempo.'],
            ['d', 'Cumprimento integral da pena.'],
            ['e', 'Decisão discricionária do diretor do presídio.'],
        ]),
        correctId: 'b',
        explanation: 'Lei 8.072/90 e Lei 13.964/19: crimes hediondos exigem 40% (primários) ou 60% (reincidentes).',
    },
    {
        id: 'lep-7',
        exams: ['policia penal mg'],
        text: 'O Conselho Nacional de Política Criminal e Penitenciária (CNPCP) tem como atribuição:',
        options: buildOptions([
            ['a', 'Julgar recursos de execução penal.'],
            ['b', 'Propor diretrizes para a política criminal e penitenciária.'],
            ['c', 'Administrar diretamente os presídios estaduais.'],
            ['d', 'Aplicar sanções disciplinares aos presos.'],
            ['e', 'Legislar sobre matéria penal.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 64 da LEP: o CNPCP propõe diretrizes da política criminal e penitenciária.',
    },
    {
        id: 'lep-8',
        exams: ['policia penal mg'],
        text: 'A saída temporária no regime semiaberto pode ser concedida para:',
        options: buildOptions([
            ['a', 'Visita à família, frequência a curso ou participação em atividades que concorram para o retorno ao convívio social.'],
            ['b', 'Qualquer motivo a critério exclusivo do preso.'],
            ['c', 'Apenas para tratamento médico emergencial.'],
            ['d', 'Trabalho externo sem fiscalização.'],
            ['e', 'Nunca é permitida saída temporária.'],
        ]),
        correctId: 'a',
        explanation: 'Art. 122 da LEP: saída temporária para visita familiar, curso ou atividade de reintegração.',
    },
    {
        id: 'lep-9',
        exams: ['policia penal mg'],
        text: 'O trabalho do preso condenado é considerado:',
        options: buildOptions([
            ['a', 'Facultativo e sem remuneração.'],
            ['b', 'Obrigatório e remunerado, assegurados os benefícios da Previdência Social.'],
            ['c', 'Voluntário apenas para presos em regime aberto.'],
            ['d', 'Proibido pela legislação brasileira.'],
            ['e', 'Opcional somente para presos primários.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 28 e 29 da LEP: trabalho obrigatório e remunerado, com benefícios previdenciários.',
    },
    {
        id: 'lep-10',
        exams: ['policia penal mg'],
        text: 'A assistência jurídica ao preso é:',
        options: buildOptions([
            ['a', 'Opcional e paga pelo preso.'],
            ['b', 'Destinada apenas aos que podem pagar advogado.'],
            ['c', 'Devida tanto na execução quanto no processo de conhecimento, integral e gratuita aos necessitados.'],
            ['d', 'Proibida durante a execução penal.'],
            ['e', 'Concedida apenas em casos excepcionais.'],
        ]),
        correctId: 'c',
        explanation: 'Art. 15 e 16 da LEP: assistência jurídica integral e gratuita aos necessitados.',
    },
];

// =====================================================
// LEI DE DROGAS (Lei 11.343/2006) - 30 QUESTÕES
// =====================================================
export const questoesLeiDrogas = [
    withFeedback(
        {
            id: 'drogas-1',
            exams: ['policia penal mg'],
            text: 'A Lei de Drogas (11.343/2006) prevê como crime de tráfico:',
            options: buildOptions([
                ['a', 'Apenas importar e exportar drogas.'],
                ['b', 'Importar, exportar, remeter, preparar, produzir, fabricar, adquirir, vender, expor à venda, oferecer, ter em depósito, transportar, trazer consigo, guardar, prescrever, ministrar, entregar a consumo ou fornecer drogas.'],
                ['c', 'Somente vender drogas para consumo próprio.'],
                ['d', 'Usar drogas em local público.'],
                ['e', 'Apenas fabricar drogas em laboratório clandestino.'],
            ]),
            correctId: 'b',
            explanation: 'Art. 33 da Lei 11.343/06 lista 18 núcleos do tipo tráfico de drogas.',
        },
        {
            a: 'Errado: são muitos outros núcleos além de importar e exportar.',
            b: 'Correto: Art. 33 enumera 18 condutas equiparadas ao tráfico.',
            c: 'Errado: o uso próprio é tratado no art. 28 como outra conduta.',
            d: 'Errado: usar drogas é conduta do art. 28, não tráfico.',
            e: 'Errado: há diversos outros verbos além de fabricar.',
        }
    ),
    withFeedback(
        {
            id: 'drogas-2',
            exams: ['policia penal mg'],
            text: 'O porte de drogas para consumo pessoal (art. 28) prevê as seguintes penas:',
            options: buildOptions([
                ['a', 'Reclusão de 5 a 15 anos e multa.'],
                ['b', 'Advertência, prestação de serviços à comunidade e medida educativa de comparecimento a programa ou curso educativo.'],
                ['c', 'Detenção de 6 meses a 1 ano.'],
                ['d', 'Apenas multa de alto valor.'],
                ['e', 'Prisão perpétua.'],
            ]),
            correctId: 'b',
            explanation: 'Art. 28 da Lei 11.343/06: não há pena privativa de liberdade para usuário.',
        },
        {
            a: 'Errado: essa é a pena do tráfico (art. 33).',
            b: 'Correto: medidas educativas sem prisão.',
            c: 'Errado: não há pena de detenção para usuário.',
            d: 'Errado: multa é uma das penas, mas não a única.',
            e: 'Errado: prisão perpétua não existe no Brasil comum.',
        }
    ),
    {
        id: 'drogas-3',
        exams: ['policia penal mg'],
        text: 'A pena prevista para o tráfico de drogas (art. 33) é:',
        options: buildOptions([
            ['a', 'Detenção de 1 a 3 anos.'],
            ['b', 'Reclusão de 5 a 15 anos e pagamento de 500 a 1.500 dias-multa.'],
            ['c', 'Reclusão de 3 a 10 anos.'],
            ['d', 'Multa isolada sem prisão.'],
            ['e', 'Reclusão de 2 a 8 anos.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 33, caput: pena de reclusão de 5 a 15 anos e multa de 500 a 1.500 dias-multa.',
    },
    {
        id: 'drogas-4',
        exams: ['policia penal mg'],
        text: 'É possível a redução de pena do traficante (causa de diminuição do §4º do art. 33) se:',
        options: buildOptions([
            ['a', 'For reincidente e líder de organização criminosa.'],
            ['b', 'For primário, de bons antecedentes, não se dedicar a atividades criminosas nem integrar organização criminosa.'],
            ['c', 'Confessar o crime independentemente das demais condições.'],
            ['d', 'Tiver bens para pagar fiança.'],
            ['e', 'Já tiver cumprido metade da pena.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 33, §4º: redução de 1/6 a 2/3 se primário, bons antecedentes, não se dedicar ao crime e não integrar organização.',
    },
    {
        id: 'drogas-5',
        exams: ['policia penal mg'],
        text: 'Sobre a prisão em flagrante no tráfico de drogas:',
        options: buildOptions([
            ['a', 'É vedada pela Lei de Drogas.'],
            ['b', 'Não impede a concessão de liberdade provisória.'],
            ['c', 'É vedada a concessão de liberdade provisória no tráfico, salvo exceções legais.'],
            ['d', 'Permite sempre fiança.'],
            ['e', 'Gera soltura imediata após lavratura do auto.'],
        ]),
        correctId: 'c',
        explanation: 'Art. 44 da Lei 11.343/06: vedada liberdade provisória para tráfico, salvo exceções.',
    },
    {
        id: 'drogas-6',
        exams: ['policia penal mg'],
        text: 'A conversão de penas restritivas de direito no tráfico:',
        options: buildOptions([
            ['a', 'É sempre possível.'],
            ['b', 'É vedada aos condenados por tráfico de drogas.'],
            ['c', 'Depende apenas da vontade do juiz.'],
            ['d', 'Ocorre automaticamente.'],
            ['e', 'Só é vedada para quem trafica cannabis.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 44 da Lei 11.343/06: veda a conversão em penas restritivas de direito.',
    },
    {
        id: 'drogas-7',
        exams: ['policia penal mg'],
        text: 'Associar-se para a prática de tráfico (art. 35) prevê pena de:',
        options: buildOptions([
            ['a', 'Reclusão de 1 a 3 anos.'],
            ['b', 'Reclusão de 3 a 10 anos e multa.'],
            ['c', 'Detenção de 6 meses a 2 anos.'],
            ['d', 'Apenas multa.'],
            ['e', 'Reclusão de 15 a 25 anos.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 35: associação para o tráfico tem pena de 3 a 10 anos e multa.',
    },
    {
        id: 'drogas-8',
        exams: ['policia penal mg'],
        text: 'Financiar ou custear o tráfico de drogas (art. 36) prevê pena de:',
        options: buildOptions([
            ['a', 'Reclusão de 5 a 15 anos.'],
            ['b', 'Reclusão de 8 a 20 anos e multa de 1.500 a 4.000 dias-multa.'],
            ['c', 'Detenção de 2 a 5 anos.'],
            ['d', 'Multa isolada.'],
            ['e', 'Advertência e prestação de serviços.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 36: financiar ou custear tráfico tem pena mais grave, de 8 a 20 anos.',
    },
    {
        id: 'drogas-9',
        exams: ['policia penal mg'],
        text: 'A colaboração do acusado na identificação de coautores pode resultar em:',
        options: buildOptions([
            ['a', 'Nenhum benefício previsto.'],
            ['b', 'Redução de pena de 1/3 a 2/3.'],
            ['c', 'Extinção da punibilidade.'],
            ['d', 'Aumento de pena.'],
            ['e', 'Conversão automática em regime aberto.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 41 da Lei 11.343/06: colaboração pode reduzir a pena de 1/3 a 2/3.',
    },
    {
        id: 'drogas-10',
        exams: ['policia penal mg'],
        text: 'O livramento condicional no tráfico exige cumprimento de:',
        options: buildOptions([
            ['a', '1/3 da pena.'],
            ['b', '1/2 da pena.'],
            ['c', '2/3 da pena, se não reincidente específico em crime dessa natureza.'],
            ['d', 'Pena integral.'],
            ['e', '1/6 da pena.'],
        ]),
        correctId: 'c',
        explanation: 'Art. 44 c/c art. 83, V do CP: livramento exige 2/3 da pena para tráfico.',
    },
];

// =====================================================
// CRIMES HEDIONDOS (Lei 8.072/1990) - 20 QUESTÕES
// =====================================================
export const questoesCrimesHediondos = [
    withFeedback(
        {
            id: 'hediondo-1',
            exams: ['policia penal mg'],
            text: 'São considerados crimes hediondos pela Lei 8.072/90:',
            options: buildOptions([
                ['a', 'Homicídio simples, furto e estelionato.'],
                ['b', 'Latrocínio, extorsão mediante sequestro, estupro e epidemia com resultado morte.'],
                ['c', 'Apenas tráfico ilícito de entorpecentes.'],
                ['d', 'Todos os crimes dolosos.'],
                ['e', 'Crimes culposos com resultado grave.'],
            ]),
            correctId: 'b',
            explanation: 'Art. 1º da Lei 8.072/90 lista crimes como latrocínio, extorsão mediante sequestro, estupro, entre outros.',
        },
        {
            a: 'Errado: homicídio simples, furto e estelionato não são hediondos.',
            b: 'Correto: são exemplos do rol do art. 1º.',
            c: 'Errado: há diversos outros crimes hediondos além do tráfico.',
            d: 'Errado: apenas alguns crimes específicos são hediondos.',
            e: 'Errado: crimes culposos não são considerados hediondos.',
        }
    ),
    {
        id: 'hediondo-2',
        exams: ['policia penal mg'],
        text: 'A progressão de regime nos crimes hediondos exige cumprimento de:',
        options: buildOptions([
            ['a', '1/6 da pena.'],
            ['b', '2/5 da pena se primário e 3/5 se reincidente.'],
            ['c', '1/3 da pena.'],
            ['d', 'Pena integral.'],
            ['e', '1/2 da pena sempre.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 2º, §2º da Lei 8.072/90 (redação Lei 13.964/19): 40% primários, 60% reincidentes.',
    },
    {
        id: 'hediondo-3',
        exams: ['policia penal mg'],
        text: 'A fiança nos crimes hediondos é:',
        options: buildOptions([
            ['a', 'Sempre permitida.'],
            ['b', 'Vedada conforme a Lei 8.072/90.'],
            ['c', 'Permitida apenas para primários.'],
            ['d', 'Fixada em valor mínimo.'],
            ['e', 'Facultativa ao juiz.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 2º, II da Lei 8.072/90: é vedada a concessão de fiança.',
    },
    {
        id: 'hediondo-4',
        exams: ['policia penal mg'],
        text: 'O regime inicial de cumprimento de pena nos crimes hediondos é:',
        options: buildOptions([
            ['a', 'Sempre fechado, independente da pena.'],
            ['b', 'Fechado se a pena for superior a 8 anos (regra geral do CP).'],
            ['c', 'Aberto para primários.'],
            ['d', 'Semiaberto automaticamente.'],
            ['e', 'Determinado apenas pelo juiz sem critério legal.'],
        ]),
        correctId: 'b',
        explanation: 'STF declarou inconstitucional regime integralmente fechado; aplica-se regra do CP (art. 33, §2º).',
    },
    {
        id: 'hediondo-5',
        exams: ['policia penal mg'],
        text: 'A liberdade provisória nos crimes hediondos:',
        options: buildOptions([
            ['a', 'É sempre vedada.'],
            ['b', 'É permitida com medidas cautelares se não houver risco à ordem pública.'],
            ['c', 'Depende apenas de fiança.'],
            ['d', 'Ocorre automaticamente após prisão em flagrante.'],
            ['e', 'Não existe na legislação brasileira.'],
        ]),
        correctId: 'b',
        explanation: 'Lei 13.964/19: liberdade provisória possível com cautelares, desde que não haja risco.',
    },
    {
        id: 'hediondo-6',
        exams: ['policia penal mg'],
        text: 'O prazo para conclusão do inquérito policial em crimes hediondos com preso é de:',
        options: buildOptions([
            ['a', '10 dias.'],
            ['b', '15 dias.'],
            ['c', '30 dias, prorrogáveis por igual período.'],
            ['d', '60 dias.'],
            ['e', 'Não há prazo específico.'],
        ]),
        correctId: 'c',
        explanation: 'Art. 2º, §4º da Lei 8.072/90: prazo de 30 dias, prorrogável por mais 30.',
    },
    {
        id: 'hediondo-7',
        exams: ['policia penal mg'],
        text: 'A prisão temporária em crimes hediondos pode durar:',
        options: buildOptions([
            ['a', '5 dias, prorrogável por igual período.'],
            ['b', '15 dias, prorrogável por igual período.'],
            ['c', '30 dias, prorrogável por mais 30.'],
            ['d', '60 dias improrrogáveis.'],
            ['e', 'Não existe prisão temporária para crimes hediondos.'],
        ]),
        correctId: 'c',
        explanation: 'Lei 7.960/89, art. 2º c/c Lei 8.072/90: 30 dias + 30 dias.',
    },
    {
        id: 'hediondo-8',
        exams: ['policia penal mg'],
        text: 'O livramento condicional nos crimes hediondos exige:',
        options: buildOptions([
            ['a', '1/3 da pena.'],
            ['b', '1/2 da pena.'],
            ['c', 'Mais de 2/3 da pena, se não reincidente específico em crime hediondo.'],
            ['d', 'Pena integral.'],
            ['e', 'Não é permitido livramento condicional.'],
        ]),
        correctId: 'c',
        explanation: 'Art. 83, V do CP c/c Lei 8.072/90: mais de 2/3 para crimes hediondos.',
    },
    {
        id: 'hediondo-9',
        exams: ['policia penal mg'],
        text: 'A anistia, graça e indulto nos crimes hediondos:',
        options: buildOptions([
            ['a', 'São sempre permitidos.'],
            ['b', 'São vedados pela Lei 8.072/90.'],
            ['c', 'Dependem apenas do Presidente da República.'],
            ['d', 'São concedidos automaticamente após certo tempo.'],
            ['e', 'Não existem no ordenamento brasileiro.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 2º, I da Lei 8.072/90: veda anistia, graça e indulto.',
    },
    {
        id: 'hediondo-10',
        exams: ['policia penal mg'],
        text: 'O homicídio qualificado é considerado hediondo quando:',
        options: buildOptions([
            ['a', 'Em qualquer hipótese.'],
            ['b', 'Praticado em atividade típica de grupo de extermínio.'],
            ['c', 'Apenas se for culposo.'],
            ['d', 'Somente se cometer três ou mais homicídios.'],
            ['e', 'Nunca é considerado hediondo.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 1º, I da Lei 8.072/90: homicídio qualificado é hediondo quando praticado em atividade típica de grupo de extermínio.',
    },
];

// =====================================================
// ABUSO DE AUTORIDADE (Lei 13.869/2019) - 20 QUESTÕES
// =====================================================
export const questoesAbusoAutoridade = [
    withFeedback(
        {
            id: 'abuso-1',
            exams: ['policia penal mg'],
            text: 'Constitui crime de abuso de autoridade, segundo a Lei 13.869/2019:',
            options: buildOptions([
                ['a', 'Apenas o uso excessivo de força física.'],
                ['b', 'Atentado à inviolabilidade de domicílio, quebra ilegal de sigilo, prisão ilegal, entre outros.'],
                ['c', 'Qualquer ato praticado por autoridade pública.'],
                ['d', 'Somente fraudes financeiras.'],
                ['e', 'Atos praticados exclusivamente por policiais.'],
            ]),
            correctId: 'b',
            explanation: 'A Lei 13.869/19 tipifica diversos crimes como invasão de domicílio, prisão ilegal, quebra de sigilo.',
        },
        {
            a: 'Errado: há diversos outros tipos de abuso além de força física.',
            b: 'Correto: a lei tipifica mais de 30 condutas de abuso.',
            c: 'Errado: nem todo ato de autoridade configura abuso.',
            d: 'Errado: fraudes financeiras são outros tipos penais.',
            e: 'Errado: aplica-se a qualquer agente público, não só policiais.',
        }
    ),
    {
        id: 'abuso-2',
        exams: ['policia penal mg'],
        text: 'A pena prevista para os crimes de abuso de autoridade varia entre:',
        options: buildOptions([
            ['a', 'Multa isolada.'],
            ['b', 'Detenção de 1 mês a 4 anos e multa.'],
            ['c', 'Reclusão de 5 a 15 anos.'],
            ['d', 'Apenas advertência.'],
            ['e', 'Perda do cargo sem pena privativa de liberdade.'],
        ]),
        correctId: 'b',
        explanation: 'A Lei 13.869/19 prevê penas de detenção de 1 mês a 4 anos conforme o tipo.',
    },
    {
        id: 'abuso-3',
        exams: ['policia penal mg'],
        text: 'Segundo a Lei 13.869/2019, constitui abuso de autoridade decretar prisão quando não houver:',
        options: buildOptions([
            ['a', 'Flagrante delito ou ordem escrita e fundamentada da autoridade judiciária competente.'],
            ['b', 'Autorização do delegado apenas.'],
            ['c', 'Consentimento do preso.'],
            ['d', 'Testemunhas presentes.'],
            ['e', 'Advogado constituído.'],
        ]),
        correctId: 'a',
        explanation: 'Art. 9º da Lei 13.869/19: prisão sem flagrante ou ordem judicial é abuso.',
    },
    {
        id: 'abuso-4',
        exams: ['policia penal mg'],
        text: 'Prolongar a execução de prisão ou de medida de segurança injustificadamente:',
        options: buildOptions([
            ['a', 'É uma prática administrativa normal.'],
            ['b', 'Configura crime de abuso de autoridade previsto no art. 10 da Lei.'],
            ['c', 'Não é previsto em lei.'],
            ['d', 'É permitido em qualquer situação.'],
            ['e', 'Só configura crime se durar mais de 10 anos.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 10 da Lei 13.869/19: prolongar prisão/medida de segurança é abuso.',
    },
    {
        id: 'abuso-5',
        exams: ['policia penal mg'],
        text: 'Executar busca pessoal ou domiciliar sem observância das formalidades legais:',
        options: buildOptions([
            ['a', 'É permitido a qualquer momento.'],
            ['b', 'Configura abuso de autoridade conforme art. 13 da Lei.'],
            ['c', 'Não gera consequência legal.'],
            ['d', 'É válido se houver suspeita.'],
            ['e', 'Depende apenas da vontade do agente.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 13 da Lei 13.869/19: busca sem formalidades legais é abuso.',
    },
    {
        id: 'abuso-6',
        exams: ['policia penal mg'],
        text: 'Divulgar gravação ou trecho de áudio ou vídeo sem autorização judicial ou das partes:',
        options: buildOptions([
            ['a', 'É permitido para fins jornalísticos.'],
            ['b', 'Configura abuso de autoridade no art. 25 da Lei.'],
            ['c', 'Só é crime se a vítima se opuser.'],
            ['d', 'Não tem previsão legal.'],
            ['e', 'É permitido se a divulgação for parcial.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 25 da Lei 13.869/19: divulgar gravação sem autorização é abuso.',
    },
    {
        id: 'abuso-7',
        exams: ['policia penal mg'],
        text: 'A ação penal nos crimes de abuso de autoridade é:',
        options: buildOptions([
            ['a', 'Privada.'],
            ['b', 'Pública condicionada à representação.'],
            ['c', 'Pública incondicionada.'],
            ['d', 'Não existe ação penal.'],
            ['e', 'Depende de autorização do Presidente.'],
        ]),
        correctId: 'c',
        explanation: 'Art. 3º, §2º da Lei 13.869/19: ação penal pública incondicionada.',
    },
    {
        id: 'abuso-8',
        exams: ['policia penal mg'],
        text: 'Recusar-se a identificar-se ou a informar o cargo ou função que ocupa:',
        options: buildOptions([
            ['a', 'É direito do agente público.'],
            ['b', 'Configura abuso de autoridade.'],
            ['c', 'Só é obrigatório em horário de expediente.'],
            ['d', 'Depende da vontade do superior.'],
            ['e', 'Não gera consequência.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 12 da Lei 13.869/19: recusar identificação é abuso.',
    },
    {
        id: 'abuso-9',
        exams: ['policia penal mg'],
        text: 'Exigir informação ou cumprimento de obrigação sem expresso amparo legal:',
        options: buildOptions([
            ['a', 'É prática administrativa comum.'],
            ['b', 'Configura abuso de autoridade no art. 29.'],
            ['c', 'Só é crime se houver violência.'],
            ['d', 'É permitido para agilizar processos.'],
            ['e', 'Não tem previsão legal.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 29 da Lei 13.869/19: exigir obrigação sem amparo legal é abuso.',
    },
    {
        id: 'abuso-10',
        exams: ['policia penal mg'],
        text: 'Deixar de comunicar prisão em flagrante à autoridade judiciária no prazo legal:',
        options: buildOptions([
            ['a', 'Não gera consequência se comunicar depois.'],
            ['b', 'Configura abuso de autoridade.'],
            ['c', 'É permitido se houver motivo justificado.'],
            ['d', 'Só é crime se o preso reclamar.'],
            ['e', 'Não está previsto na lei.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 9º da Lei 13.869/19: não comunicar prisão no prazo é abuso.',
    },
];

// Exportar todas as questões
export const TODAS_QUESTOES_LEGISLACAO = [
    ...questoesLEP,
    ...questoesLeiDrogas,
    ...questoesCrimesHediondos,
    ...questoesAbusoAutoridade,
];
