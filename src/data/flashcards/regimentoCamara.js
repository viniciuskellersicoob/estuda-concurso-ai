import { makeCards } from './utils.js';

export const regimentoCamara = {
    name: 'Regimento Interno da Câmara (RICD) - Noções',
    icon: '🏛️',
    exams: ['camara-deputados'],
    cards: makeCards('ricd', [
        ['RICD: para que serve?', 'Regras de organização, funcionamento e processo legislativo interno da Câmara.'],
        ['Órgãos centrais (macro)?', 'Plenário, Mesa, Presidência, Colégio de Líderes e Comissões.'],
        ['Comissões: por que caem?', 'Analisam e emitem parecer; muitas matérias tramitam nelas (inclusive conclusivamente).'],
        ['Quórum: conceito?', 'Número mínimo para deliberação/instalação/votação, conforme regra.'],
        ['Maioria simples x absoluta?', 'Simples: mais votos favoráveis que contrários (presentes). Absoluta: metade+1 do total de membros.'],
        ['Maioria qualificada: noção?', 'Frações específicas previstas para certas matérias (ex.: 3/5 em casos constitucionais).'],
        ['Urgência (efeito)?', 'Acelera tramitação e reduz prazos/etapas conforme regras.'],
        ['Questão de ordem?', 'Dúvida sobre interpretação do regimento, decidida pela presidência.'],
        ['Destaque?', 'Separar parte da proposição para votação específica.'],
        ['CPI: requisitos (ideia)?', 'Fato determinado, prazo certo e requerimento com assinaturas mínimas (conforme CF/RICD).'],
        ['Decoro parlamentar (noção)?', 'Padrões éticos; violações podem gerar processo e sanções.'],
        ['Tramitação conclusiva em comissões?', 'Algumas matérias podem ser aprovadas sem Plenário, salvo recurso regimental.'],
        ['Votação simbólica x nominal?', 'Simbólica sem registro individual; nominal com registro do voto (quando exigida).'],
        ['Encaminhamento de votação?', 'Pronunciamento para orientar o voto (líderes/bancadas) conforme tempo/regra.'],

        // CÂMARA (Téc. Legislativo) - cards por tópico do edital (1+ por tópico)
        [
            'CÂMARA: Títulos e capítulos do edital — como estudar?',
            'Estude por “mapa” do regimento: estrutura (títulos/capítulos) e o que cada parte regula; depois faça revisões por questões.',
            'Títulos e capítulos indicados no edital',
        ],
        ['CÂMARA: Órgãos da Câmara — quais são?', 'Plenário, Mesa/Presidência, comissões, lideranças e órgãos auxiliares (visão geral).', 'Órgãos da Câmara'],
        [
            'CÂMARA: Sessões e procedimentos — ponto-chave?',
            'Entender tipos de sessão, expediente x ordem do dia e como se dão discussões, votações e registro.',
            'Sessões e procedimentos',
        ],
        [
            'CÂMARA: Mesa Diretora — atribuições (noção)?',
            'Dirigir trabalhos e administrar serviços; composição e substituições conforme RICD.',
            'Mesa Diretora: eleições, substituições e atribuições',
        ],
        [
            'CÂMARA: Colégio de Líderes — para que serve?',
            'Organiza pauta e acordos de votação/tempos; influencia urgência, destaques e agenda.',
            'Colégio de Líderes e distribuição de tempo',
        ],
        [
            'CÂMARA: Comissões e CPIs — diferença básica?',
            'Comissões analisam e emitem parecer; CPI é comissão temporária investigativa (fato determinado e prazo).',
            'Comissões permanentes, temporárias e CPIs',
        ],
        [
            'CÂMARA: Tramitação interna, urgência e prazos — como cai?',
            'Fluxo de proposições, possibilidade de urgência e controle de prazos regimentais; “recurso ao Plenário” é tema comum.',
            'Processo legislativo interno: tramitações, urgência e prazos regimentais',
        ],
        [
            'CÂMARA: Processo orçamentário interno — o que lembrar?',
            'Noções de CRA/CMO e tramitação das leis orçamentárias; interação com prazos e rito interno.',
            'Processo orçamentário interno (CRA, CMO e tramitação das leis orçamentárias)',
        ],
        [
            'CÂMARA: Ética e decoro — onde pega?',
            'Quebra de decoro, procedimentos e atuação do Conselho de Ética; consequências disciplinares (noções).',
            'Responsabilidade ético-disciplinar e interação com o Conselho de Ética',
        ],
        [
            'CÂMARA: Órgãos da Câmara — pegadinha de prova?',
            'Confundir órgãos deliberativos (Plenário/Comissões) com direção (Mesa/Presidência) e articulação política (Lideranças).',
            'Órgãos da Câmara',
        ],
        [
            'CÂMARA: Sessões — “expediente” vs “ordem do dia”?',
            'Expediente trata comunicações e encaminhamentos iniciais; ordem do dia concentra deliberação e votações.',
            'Sessões e procedimentos',
        ],
        [
            'CÂMARA: Mesa Diretora — como cai em questão?',
            'Banca cobra composição, eleição e substituições; e atribuições administrativas/regimentais (noções).',
            'Mesa Diretora: eleições, substituições e atribuições',
        ],
        [
            'CÂMARA: Colégio de Líderes — efeito prático?',
            'Influencia pauta e tempo de fala; atua em acordos e encaminhamentos de votação.',
            'Colégio de Líderes e distribuição de tempo',
        ],
        [
            'CÂMARA: Comissões — permanentes x temporárias?',
            'Permanentes têm tema fixo; temporárias incluem especiais e CPIs, com finalidade e prazo.',
            'Comissões permanentes, temporárias e CPIs',
        ],
        [
            'CÂMARA: Urgência — consequência típica?',
            'Acelera tramitação e reduz prazos/etapas; em geral prioriza deliberação conforme regras regimentais.',
            'Processo legislativo interno: tramitações, urgência e prazos regimentais',
        ],
        [
            'CÂMARA: Prazos regimentais — por que são críticos?',
            'Controlam recursos, emendas e pareceres; perder prazo pode impedir deliberação/recursos.',
            'Processo legislativo interno: tramitações, urgência e prazos regimentais',
        ],
        [
            'CÂMARA: CRA/CMO — papel geral?',
            'Comissões ligadas ao rito orçamentário e à análise/relatoria das leis orçamentárias, com prazos e etapas.',
            'Processo orçamentário interno (CRA, CMO e tramitação das leis orçamentárias)',
        ],
        [
            'CÂMARA: Conselho de Ética — função em prova?',
            'Apurar condutas e recomendar sanções por quebra de decoro, com rito e garantias (noções).',
            'Responsabilidade ético-disciplinar e interação com o Conselho de Ética',
        ],

        // CÂMARA (Téc. Legislativo) - expansão (mín. ~5 cards por tópico)
        [
            'CÂMARA: Títulos/capítulos — como revisar rápido?',
            'Faça um “mapa” (estrutura) e associe cada parte aos institutos (sessões, comissões, votação, ética).',
            'Títulos e capítulos indicados no edital',
        ],
        [
            'CÂMARA: Títulos/capítulos — erro comum?',
            'Estudar “solto” sem localizar onde o tema fica no regimento; a banca cobra visão sistêmica.',
            'Títulos e capítulos indicados no edital',
        ],
        [
            'CÂMARA: Títulos/capítulos — estratégia de fixação?',
            'Criar flashcards de: órgão competente + ato + prazo/regra do tema (quando houver).',
            'Títulos e capítulos indicados no edital',
        ],
        [
            'CÂMARA: Títulos/capítulos — como a prova pergunta?',
            'Por competência (“quem decide?”), rito (“qual o passo seguinte?”) e prazos/urgência.',
            'Títulos e capítulos indicados no edital',
        ],

        [
            'CÂMARA: Órgãos — Plenário faz o quê?',
            'Delibera e vota proposições; é o centro decisório em sessões plenárias.',
            'Órgãos da Câmara',
        ],
        [
            'CÂMARA: Órgãos — comissões servem para?',
            'Analisar matérias, emitir parecer e, em alguns casos, decidir conclusivamente.',
            'Órgãos da Câmara',
        ],
        [
            'CÂMARA: Órgãos — Mesa/Presidência (noção)?',
            'Direção e condução dos trabalhos; decisões de ordem e administração interna.',
            'Órgãos da Câmara',
        ],
        [
            'CÂMARA: Órgãos — pegadinha?',
            'Confundir “órgão” com “pessoa”: Câmara (órgão legislativo) ≠ Administração indireta.',
            'Órgãos da Câmara',
        ],

        [
            'CÂMARA: Sessões — “quórum” significa?',
            'Número mínimo de parlamentares para instalar sessão e deliberar, conforme regra.',
            'Sessões e procedimentos',
        ],
        [
            'CÂMARA: Sessões — votação simbólica?',
            'Sem registro individual, por manifestação geral; usada quando o regimento permite.',
            'Sessões e procedimentos',
        ],
        [
            'CÂMARA: Sessões — votação nominal?',
            'Com registro individual do voto; exigida em matérias específicas.',
            'Sessões e procedimentos',
        ],
        [
            'CÂMARA: Sessões — questão de ordem?',
            'Dúvida sobre interpretação do regimento; decidida pela Presidência.',
            'Sessões e procedimentos',
        ],

        [
            'CÂMARA: Mesa Diretora — por que cai?',
            'Por composição, atribuições e procedimentos de eleição/substituição (noções).',
            'Mesa Diretora: eleições, substituições e atribuições',
        ],
        [
            'CÂMARA: Mesa — ato típico?',
            'Organizar trabalhos e serviços administrativos; expedir atos internos conforme regimento.',
            'Mesa Diretora: eleições, substituições e atribuições',
        ],
        [
            'CÂMARA: Presidência — papel em prova?',
            'Conduz sessões, decide questões de ordem e assegura cumprimento do regimento.',
            'Mesa Diretora: eleições, substituições e atribuições',
        ],
        [
            'CÂMARA: Mesa — pegadinha?',
            'Confundir atribuições da Mesa com as das comissões ou do Plenário.',
            'Mesa Diretora: eleições, substituições e atribuições',
        ],

        [
            'CÂMARA: Líderes — função prática?',
            'Organizar bancada, orientar voto e negociar pauta/tempos.',
            'Colégio de Líderes e distribuição de tempo',
        ],
        [
            'CÂMARA: Distribuição de tempo — onde aparece?',
            'Encaminhamento de votação e debates, conforme regras e acordos.',
            'Colégio de Líderes e distribuição de tempo',
        ],
        [
            'CÂMARA: Colégio de Líderes — efeito na urgência?',
            'Articula acordos e pode influenciar inclusão de matérias e prioridades.',
            'Colégio de Líderes e distribuição de tempo',
        ],
        [
            'CÂMARA: Liderança — pegadinha?',
            'Não confundir poder de articulação política com competência formal de decisão (regimental).',
            'Colégio de Líderes e distribuição de tempo',
        ],

        [
            'CÂMARA: Comissões — permanentes?',
            'Atuam por temas fixos; analisam proposições e políticas públicas.',
            'Comissões permanentes, temporárias e CPIs',
        ],
        [
            'CÂMARA: Comissões — temporárias?',
            'Criadas para finalidade específica (especial, externa, CPI) e prazo.',
            'Comissões permanentes, temporárias e CPIs',
        ],
        [
            'CÂMARA: CPI — requisito-chave?',
            'Fato determinado e prazo certo (noções), com poderes de investigação nos limites legais.',
            'Comissões permanentes, temporárias e CPIs',
        ],
        [
            'CÂMARA: Comissões — parecer serve para?',
            'Orientar deliberação e consolidar análise; pode incluir substitutivo/emendas.',
            'Comissões permanentes, temporárias e CPIs',
        ],

        [
            'CÂMARA: Tramitação — proposição passa por quê?',
            'Em regra, comissões (parecer) e, se necessário, Plenário; há hipóteses conclusivas.',
            'Processo legislativo interno: tramitações, urgência e prazos regimentais',
        ],
        [
            'CÂMARA: Urgência — efeito típico?',
            'Reduz etapas/prazos e prioriza votação, conforme regras regimentais.',
            'Processo legislativo interno: tramitações, urgência e prazos regimentais',
        ],
        [
            'CÂMARA: Recurso ao Plenário — por quê cai?',
            'Permite levar matéria conclusiva das comissões ao Plenário em hipóteses regimentais.',
            'Processo legislativo interno: tramitações, urgência e prazos regimentais',
        ],
        [
            'CÂMARA: Prazos — risco em prova?',
            'Perder prazo impede emenda/recurso/contestação; atenção a “dias úteis x corridos” se a banca citar.',
            'Processo legislativo interno: tramitações, urgência e prazos regimentais',
        ],

        [
            'CÂMARA: Leis orçamentárias — quais são?',
            'PPA, LDO e LOA (noções) com rito específico de tramitação e prazos.',
            'Processo orçamentário interno (CRA, CMO e tramitação das leis orçamentárias)',
        ],
        [
            'CÂMARA: CMO — papel (noção)?',
            'Comissão mista ligada ao orçamento; analisa e relatoria projetos orçamentários conforme rito.',
            'Processo orçamentário interno (CRA, CMO e tramitação das leis orçamentárias)',
        ],
        [
            'CÂMARA: Processo orçamentário — por que pega?',
            'Tem prazos rígidos e interação com emendas/pareceres; banca cobra sequência lógica.',
            'Processo orçamentário interno (CRA, CMO e tramitação das leis orçamentárias)',
        ],
        [
            'CÂMARA: Orçamento interno x CF?',
            'Questões podem alternar entre regra constitucional (CF) e regra interna (RICD/CMO).',
            'Processo orçamentário interno (CRA, CMO e tramitação das leis orçamentárias)',
        ],

        [
            'CÂMARA: Ética x disciplina (noção)?',
            'Ética trata decoro e conduta parlamentar; disciplina envolve sanções e procedimentos internos.',
            'Responsabilidade ético-disciplinar e interação com o Conselho de Ética',
        ],
        [
            'CÂMARA: Decoro parlamentar — como cai?',
            'Em geral como conceito e consequências (processo no Conselho de Ética e sanções possíveis).',
            'Responsabilidade ético-disciplinar e interação com o Conselho de Ética',
        ],
        [
            'CÂMARA: Conselho de Ética — devido processo?',
            'Há rito e garantias; decisões devem ser motivadas e sujeitas a regras regimentais.',
            'Responsabilidade ético-disciplinar e interação com o Conselho de Ética',
        ],
        [
            'CÂMARA: Ética — pegadinha?',
            'Confundir regras de servidor (8.112/ética) com regras de parlamentar (decoro/Conselho de Ética).',
            'Responsabilidade ético-disciplinar e interação com o Conselho de Ética',
        ],
    ]),
};
