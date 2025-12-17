// LEGISLAÇÃO ESPECIAL - PARTE 2
// Estatuto do Desarmamento, Lei Maria da Penha, Lei de Tortura

const buildOptions = (options) => options.map(([id, text]) => ({ id, text }));

const withFeedback = (question, optionFeedback) => ({
    ...question,
    optionExplanations: optionFeedback,
});

// =====================================================
// ESTATUTO DO DESARMAMENTO (Lei 10.826/2003) - 20 QUESTÕES
// =====================================================
export const questoesDesarmamento = [
    {
        id: 'desarm-1',
        exams: ['policia penal mg'],
        text: 'O porte ilegal de arma de fogo de uso permitido prevê pena de:',
        options: buildOptions([
            ['a', 'Reclusão de 2 a 4 anos e multa.'],
            ['b', 'Detenção de 1 a 3 anos e multa.'],
            ['c', 'Reclusão de 5 a 15 anos.'],
            ['d', 'Apenas multa.'],
            ['e', 'Advertência.'],
        ]),
        correctId: 'a',
        explanation: 'Art. 14 da Lei 10.826/03: porte ilegal tem pena de reclusão de 2 a 4 anos.',
    },
    {
        id: 'desarm-2',
        exams: ['policia penal mg'],
        text: 'Possuir ou manter sob guarda arma de fogo de uso permitido em desacordo com determinação legal é:',
        options: buildOptions([
            ['a', 'Infração administrativa.'],
            ['b', 'Crime previsto no art. 12 com detenção de 1 a 3 anos.'],
            ['c', 'Crime inafiançável.'],
            ['d', 'Permitido para colecionadores.'],
            ['e', 'Não previsto em lei.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 12: posse irregular é crime com pena de detenção de 1 a 3 anos.',
    },
    {
        id: 'desarm-3',
        exams: ['policia penal mg'],
        text: 'O comércio ilegal de arma de fogo prevê pena de:',
        options: buildOptions([
            ['a', 'Detenção de 6 meses a 2 anos.'],
            ['b', 'Reclusão de 4 a 12 anos e multa.'],
            ['c', 'Apenas multa administrativa.'],
            ['d', 'Reclusão de 2 a 4 anos.'],
            ['e', 'Não é crime.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 17 da Lei 10.826/03: comércio ilegal tem pena de 4 a 12 anos.',
    },
    {
        id: 'desarm-4',
        exams: ['policia penal mg'],
        text: 'Disparar arma de fogo em lugar habitado ou via pública:',
        options: buildOptions([
            ['a', 'Não é crime.'],
            ['b', 'É crime previsto no art. 15 com reclusão de 2 a 4 anos.'],
            ['c', 'Só é crime se atingir alguém.'],
            ['d', 'É permitido em legítima defesa putativa.'],
            ['e', 'Gera apenas indenização civil.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 15: disparo em local habitado é crime com pena de 2 a 4 anos.',
    },
    {
        id: 'desarm-5',
        exams: ['policia penal mg'],
        text: 'O tráfico internacional de arma de fogo prevê pena de:',
        options: buildOptions([
            ['a', 'Reclusão de 4 a 8 anos.'],
            ['b', 'Reclusão de 4 a 12 anos, aumentada de metade se transnacional.'],
            ['c', 'Detenção de 1 a 3 anos.'],
            ['d', 'Apenas multa.'],
            ['e', 'Não existe este crime.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 18: tráfico internacional tem pena agravada se transnacional.',
    },
    {
        id: 'desarm-6',
        exams: ['policia penal mg'],
        text: 'Para obter porte de arma de fogo, o interessado deve:',
        options: buildOptions([
            ['a', 'Apenas solicitar à polícia.'],
            ['b', 'Comprovar idoneidade, capacidade técnica e aptidão psicológica.'],
            ['c', 'Ter mais de 25 anos apenas.'],
            ['d', 'Pagar taxa e retirar imediatamente.'],
            ['e', 'Não há requisitos legais.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 4º da Lei 10.826/03 lista requisitos como idoneidade, capacidade e aptidão.',
    },
    {
        id: 'desarm-7',
        exams: ['policia penal mg'],
        text: 'O registro de arma de fogo é obrigatório e deve ser renovado periodicamente a cada:',
        options: buildOptions([
            ['a', '1 ano.'],
            ['b', '3 anos.'],
            ['c', '5 anos (conforme Lei 14.195/21).'],
            ['d', '10 anos.'],
            ['e', 'Não há renovação obrigatória.'],
        ]),
        correctId: 'c',
        explanation: 'Lei 14.195/21 alterou prazo de renovação para 5 anos.',
    },
    {
        id: 'desarm-8',
        exams: ['policia penal mg'],
        text: 'Sobre a entrega espontânea de arma ilegal:',
        options: buildOptions([
            ['a', 'Gera prisão imediata.'],
            ['b', 'Isenta de pena o possuidor que entregar voluntariamente.'],
            ['c', 'Gera apenas multa.'],
            ['d', 'Não tem previsão legal.'],
            ['e', 'Dobra a pena.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 30 da Lei 10.826/03: entrega voluntária isenta de pena.',
    },
    {
        id: 'desarm-9',
        exams: ['policia penal mg'],
        text: 'É vedado o porte de arma para:',
        options: buildOptions([
            ['a', 'Policiais em serviço.'],
            ['b', 'Condenados por crime doloso com pena privativa de liberdade.'],
            ['c', 'Juízes e promotores.'],
            ['d', 'Guardas municipais.'],
            ['e', 'Militares das Forças Armadas.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 4º, §2º veda porte a condenados por crime doloso.',
    },
    {
        id: 'desarm-10',
        exams: ['policia penal mg'],
        text: 'A idade mínima para adquirir arma de fogo é:',
        options: buildOptions([
            ['a', '18 anos.'],
            ['b', '21 anos.'],
            ['c', '25 anos.'],
            ['d', '16 anos com autorização.'],
            ['e', 'Não há idade mínima.'],
        ]),
        correctId: 'c',
        explanation: 'Art. 4º, I da Lei 10.826/03: idade mínima de 25 anos.',
    },
];

// =====================================================
// LEI MARIA DA PENHA (Lei 11.340/2006) - 20 QUESTÕES
// =====================================================
export const questoesMariadaPenha = [
    withFeedback(
        {
            id: 'mariapenha-1',
            exams: ['policia penal mg'],
            text: 'A Lei Maria da Penha (11.340/2006) protege:',
            options: buildOptions([
                ['a', 'Apenas mulheres casadas.'],
                ['b', 'Mulheres em situação de violência doméstica e familiar.'],
                ['c', 'Somente mulheres com filhos.'],
                ['d', 'Apenas vítimas de violência física.'],
                ['e', 'Homens e mulheres igualmente.'],
            ]),
            correctId: 'b',
            explanation: 'Art. 1º e 5º: Lei protege mulheres de violência doméstica e familiar.',
        },
        {
            a: 'Errado: protege mulheres independente do estado civil.',
            b: 'Correto: abrange violência doméstica e familiar contra mulheres.',
            c: 'Errado: não é necessário ter filhos.',
            d: 'Errado: protege contra diversos tipos de violência.',
            e: 'Errado: a Lei é específica para proteção de mulheres.',
        }
    ),
    {
        id: 'mariapenha-2',
        exams: ['policia penal mg'],
        text: 'São formas de violência doméstica previstas na Lei:',
        options: buildOptions([
            ['a', 'Apenas física e sexual.'],
            ['b', 'Física, psicológica, sexual, patrimonial e moral.'],
            ['c', 'Somente agressão física.'],
            ['d', 'Apenas violência verbal.'],
            ['e', 'Não há definição na Lei.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 7º enumera cinco formas de violência doméstica.',
    },
    {
        id: 'mariapenha-3',
        exams: ['policia penal mg'],
        text: 'As medidas protetivas de urgência podem ser concedidas:',
        options: buildOptions([
            ['a', 'Apenas pelo juiz criminal.'],
            ['b', 'Pelo juiz a pedido do Ministério Público, da ofendida ou da autoridade policial.'],
            ['c', 'Somente mediante ação judicial completa.'],
            ['d', 'Apenas após condenação do agressor.'],
            ['e', 'Não existem medidas protetivas.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 19: medidas podem ser requeridas pelo MP, vítima ou delegado.',
    },
    {
        id: 'mariapenha-4',
        exams: ['policia penal mg'],
        text: 'O descumprimento de medida protetiva de urgência:',
        options: buildOptions([
            ['a', 'Não gera consequência.'],
            ['b', 'Configura crime com detenção de 3 meses a 2 anos (art. 24-A).'],
            ['c', 'Gera apenas multa administrativa.'],
            ['d', 'Permite apenas nova medida protetiva.'],
            ['e', 'Não é crime.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 24-A (incluído pela Lei 13.641/18): descumprir medida protetiva é crime.',
    },
    {
        id: 'mariapenha-5',
        exams: ['policia penal mg'],
        text: 'A autoridade policial ao atender ocorrência de violência doméstica deve:',
        options: buildOptions([
            ['a', 'Apenas registrar boletim de ocorrência.'],
            ['b', 'Garantir proteção, encaminhar hospital, fornecer transporte, informar direitos e acompanhar ao juiz.'],
            ['c', 'Ignorar se houver reconciliação.'],
            ['d', 'Aguardar pedido formal da vítima.'],
            ['e', 'Não tem obrigações específicas.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 11 e 12 da Lei 11.340/06 detalham atribuições da autoridade policial.',
    },
    {
        id: 'mariapenha-6',
        exams: ['policia penal mg'],
        text: 'A renúncia à representação na Lei Maria da Penha:',
        options: buildOptions([
            ['a', 'Pode ser feita na delegacia.'],
            ['b', 'Só pode ser feita perante o juiz, em audiência.'],
            ['c', 'É proibida em qualquer caso.'],
            ['d', 'Pode ser feita por telefone.'],
            ['e', 'Não existe na Lei.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 16: renúncia só perante juiz em audiência específica.',
    },
    {
        id: 'mariapenha-7',
        exams: ['policia penal mg'],
        text: 'É vedado na Lei Maria da Penha:',
        options: buildOptions([
            ['a', 'Aplicação de medidas protetivas.'],
            ['b', 'Aplicação de penas de cesta básica ou multa isolada.'],
            ['c', 'Prisão preventiva do agressor.'],
            ['d', 'Concessão de medidas cautelares.'],
            ['e', 'Atuação do Ministério Público.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 17: vedadas penas de cesta básica e pagamento isolado de multa.',
    },
    {
        id: 'mariapenha-8',
        exams: ['policia penal mg'],
        text: 'São medidas protetivas de urgência que obrigam o agressor:',
        options: buildOptions([
            ['a', 'Comparecer a tratamento psicológico obrigatório.'],
            ['b', 'Suspensão do porte de armas, afastamento do lar, proibição de contato.'],
            ['c', 'Apenas afastamento do lar.'],
            ['d', 'Internação compulsória.'],
            ['e', 'Não há medidas que obriguem o agressor.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 22: lista medidas como afastamento, proibição de contato, suspensão de porte.',
    },
    {
        id: 'mariapenha-9',
        exams: ['policia penal mg'],
        text: 'A violência patrimonial contra a mulher inclui:',
        options: buildOptions([
            ['a', 'Apenas destruição de bens.'],
            ['b', 'Retenção, subtração, destruição de objetos, documentos, bens e valores.'],
            ['c', 'Somente roubo de joias.'],
            ['d', 'Não está prevista na Lei.'],
            ['e', 'Apenas dano a veículo.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 7º, IV define violência patrimonial com diversos atos.',
    },
    {
        id: 'mariapenha-10',
        exams: ['policia penal mg'],
        text: 'A violência psicológica contra a mulher é caracterizada por:',
        options: buildOptions([
            ['a', 'Apenas agressão física.'],
            ['b', 'Ameaça, constrangimento, humilhação, manipulação, isolamento, vigilância, perseguição, insulto, chantagem.'],
            ['c', 'Somente xingamentos.'],
            ['d', 'Não é prevista na Lei.'],
            ['e', 'Apenas abandono.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 7º, II define violência psicológica com diversas condutas.',
    },
];

// =====================================================
// LEI DE TORTURA (Lei 9.455/1997) - 15 QUESTÕES
// =====================================================
export const questoesTortura = [
    withFeedback(
        {
            id: 'tortura-1',
            exams: ['policia penal mg'],
            text: 'Constitui crime de tortura:',
            options: buildOptions([
                ['a', 'Apenas causar dor física.'],
                ['b', 'Constranger com violência ou grave ameaça, causando sofrimento físico ou mental para obter informação, confissão ou discriminar.'],
                ['c', 'Somente tortura em instituições militares.'],
                ['d', 'Apenas aplicação de pena corporal.'],
                ['e', 'Não há definição legal.'],
            ]),
            correctId: 'b',
            explanation: 'Art. 1º da Lei 9.455/97 define tortura com várias finalidades.',
        },
        {
            a: 'Errado: tortura não se resume à dor física.',
            b: 'Correto: a lei define tortura com diversos objetivos.',
            c: 'Errado: aplica-se a qualquer contexto, não só militar.',
            d: 'Errado: pena corporal é uma modalidade, mas não a única.',
            e: 'Errado: a Lei 9.455/97 define claramente tortura.',
        }
    ),
    {
        id: 'tortura-2',
        exams: ['policia penal mg'],
        text: 'A pena prevista para o crime de tortura é:',
        options: buildOptions([
            ['a', 'Detenção de 1 a 3 anos.'],
            ['b', 'Reclusão de 2 a 8 anos.'],
            ['c', 'Multa isolada.'],
            ['d', 'Advertência.'],
            ['e', 'Reclusão de 4 a 10 anos.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 1º: pena de reclusão de 2 a 8 anos para tortura.',
    },
    {
        id: 'tortura-3',
        exams: ['policia penal mg'],
        text: 'Se da tortura resultar lesão corporal grave, a pena:',
        options: buildOptions([
            ['a', 'Permanece a mesma.'],
            ['b', 'Aumenta de reclusão de 4 a 10 anos.'],
            ['c', 'Reduz pela colaboração.'],
            ['d', 'Converte-se em multa.'],
            ['e', 'Não há previsão.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 1º, §3º: lesão grave aumenta pena para 4 a 10 anos.',
    },
    {
        id: 'tortura-4',
        exams: ['policia penal mg'],
        text: 'Se da tortura resultar morte, a pena é de:',
        options: buildOptions([
            ['a', 'Reclusão de 8 a 16 anos.'],
            ['b', 'Reclusão de 15 a 30 anos.'],
            ['c', 'Reclusão de 12 a 30 anos.'],
            ['d', 'Prisão perpétua.'],
            ['e', 'Reclusão de 20 a 40 anos.'],
        ]),
        correctId: 'c',
        explanation: 'Art. 1º, §4º: se resulta morte, pena de 12 a 30 anos.',
    },
    {
        id: 'tortura-5',
        exams: ['policia penal mg'],
        text: 'O crime de tortura é:',
        options: buildOptions([
            ['a', 'Afiançável e suscetível de graça ou anistia.'],
            ['b', 'Inafiançável e insuscetível de graça ou anistia.'],
            ['c', 'Permite fiança de alto valor.'],
            ['d', 'Permite anistia após 10 anos.'],
            ['e', 'Não tem previsão constitucional.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 5º, XLIII da CF e Lei 9.455/97: tortura é inafiançável e insuscetível de graça/anistia.',
    },
    {
        id: 'tortura-6',
        exams: ['policia penal mg'],
        text: 'O crime de tortura pode ser praticado por:',
        options: buildOptions([
            ['a', 'Apenas policiais.'],
            ['b', 'Qualquer pessoa, agente público ou particular.'],
            ['c', 'Somente militares.'],
            ['d', 'Apenas juízes e promotores.'],
            ['e', 'Não há sujeito ativo definido.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 1º: qualquer pessoa pode praticar tortura, não apenas agentes públicos.',
    },
    {
        id: 'tortura-7',
        exams: ['policia penal mg'],
        text: 'O superior que toma conhecimento de tortura e deixa de evitá-la:',
        options: buildOptions([
            ['a', 'Não comete crime.'],
            ['b', 'Incorre na mesma pena do torturador (reclusão de 2 a 8 anos ou mais).'],
            ['c', 'Recebe apenas advertência.'],
            ['d', 'Responde administrativamente.'],
            ['e', 'Não há previsão legal.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 1º, §2º: omissão do superior é equiparada à prática de tortura.',
    },
    {
        id: 'tortura-8',
        exams: ['policia penal mg'],
        text: 'A condenação por tortura acarreta:',
        options: buildOptions([
            ['a', 'Apenas prisão.'],
            ['b', 'Perda do cargo, função ou emprego público e interdição para seu exercício pelo dobro do prazo da pena.'],
            ['c', 'Suspensão de 30 dias.'],
            ['d', 'Advertência funcional.'],
            ['e', 'Não há efeito funcional.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 1º, §5º: condenação gera perda do cargo e interdição pelo dobro da pena.',
    },
    {
        id: 'tortura-9',
        exams: ['policia penal mg'],
        text: 'Submeter pessoa presa ou sujeita a medida de segurança a sofrimento físico ou mental para provocar ação ou omissão:',
        options: buildOptions([
            ['a', 'É permitido em casos excepcionais.'],
            ['b', 'Configura tortura prevista no art. 1º, §1º.'],
            ['c', 'Só é crime se houver lesão permanente.'],
            ['d', 'Depende de autorização judicial.'],
            ['e', 'Não está previsto na lei.'],
        ]),
        correctId: 'b',
        explanation: 'Art. 1º, §1º: submeter preso a sofrimento é modalidade específica de tortura.',
    },
    {
        id: 'tortura-10',
        exams: ['policia penal mg'],
        text: 'A ação penal no crime de tortura é:',
        options: buildOptions([
            ['a', 'Privada.'],
            ['b', 'Pública incondicionada.'],
            ['c', 'Pública condicionada à representação.'],
            ['d', 'Pública condicionada à requisição do Ministro.'],
            ['e', 'Não existe ação penal.'],
        ]),
        correctId: 'b',
        explanation: 'Lei 9.455/97: ação penal é pública incondicionada em tortura.',
    },
];

// Exportar todas
export const QUESTOES_PARTE2 = [
    ...questoesDesarmamento,
    ...questoesMariadaPenha,
    ...questoesTortura,
];
