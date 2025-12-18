import { makeCards } from './utils.js';

export const direitoProcessualPenal = {
    name: 'Direito Processual Penal',
    icon: '🧾',
    exams: ['pmdf', 'policia-penal-mg'],
    cards: makeCards('pp', [
        ['Inquérito policial: finalidade?', 'Apurar autoria e materialidade para subsidiar ação penal.'],
        ['Inquérito é contraditório?', 'Em regra, não (procedimento inquisitivo); contraditório pleno é no processo.'],
        ['Ação penal pública: titular?', 'Ministério Público.'],
        ['Ação penal privada: titular?', 'Ofendido/representante legal (queixa).'],
        ['Competência: critério básico?', 'Lugar da infração (regra geral), com exceções legais.'],
        ['Prisão em flagrante: quando?', 'Durante/ logo após o crime ou perseguido/encontrado em condições que indiquem autoria.'],
        ['Prisão preventiva: ideia?', 'Medida cautelar excepcional com requisitos legais e fundamentos (risco ao processo/sociedade).'],
        ['Prisão temporária: noção?', 'Medida cautelar por prazo determinado em crimes específicos, para investigação, conforme lei.'],
        ['Medidas cautelares diversas da prisão?', 'Alternativas como monitoração eletrônica, comparecimento, proibição de contato, recolhimento etc.'],
        ['Prova ilícita: regra?', 'É inadmissível; provas derivadas também podem ser (frutos da árvore envenenada), salvo exceções.'],
        ['Fonte independente (prova derivada): noção?', 'Prova obtida por caminho autônomo pode afastar contaminação (tema de prova).'],
        ['Descoberta inevitável: noção?', 'Se a prova seria inevitavelmente descoberta por meios lícitos, pode ser admitida (tema de prova).'],
        ['Citação x intimação?', 'Citação chama ao processo; intimação comunica atos/decisões.'],
        ['Nulidade absoluta x relativa?', 'Absoluta: ofende garantia essencial. Relativa: exige arguição oportuna e prejuízo.'],
        ['Júri: competência?', 'Crimes dolosos contra a vida (e conexos), conforme CF/CPP.'],
        ['Princípio do contraditório?', 'Ciência e possibilidade de reação/influência sobre a decisão.'],
        ['Ampla defesa?', 'Defesa técnica + autodefesa, com meios e recursos previstos.'],
        ['Silêncio do réu pode prejudicar?', 'Não pode ser interpretado em prejuízo (garantia).'],
        ['Interrogatório: natureza?', 'Meio de defesa e também de prova, com garantias (silêncio, advogado).'],
        ['Habeas corpus no processo: quando?', 'Coação ilegal à liberdade de locomoção (preventivo ou repressivo).'],
        ['Recursos: apelação serve para?', 'Impugnar sentença (condenatória/absolutória) e certas decisões, conforme CPP.'],
        ['Coisa julgada (noção)?', 'Imutabilidade da decisão final; impede novo julgamento do mesmo fato (com limites).'],

        // PMDF - cards âncora por tópico do edital (1+ por tópico)
        [
            'PMDF: Inquérito policial e ação penal — o básico?',
            'Inquérito apura autoria/materialidade; ação penal pode ser pública (MP) ou privada (ofendido), conforme caso.',
            'Inquérito policial e ação penal',
        ],
        [
            'PMDF: Prisões e liberdade provisória — mapa?',
            'Flagrante, preventiva e temporária; liberdade provisória/medidas cautelares substituem prisão quando suficientes.',
            'Prisões (flagrante, preventiva, temporária) e liberdade provisória',
        ],
        [
            'PMDF: Provas e cadeia de custódia — ponto-chave?',
            'Prova deve ser lícita; cadeia de custódia registra coleta/manuseio para garantir integridade e rastreabilidade.',
            'Provas, cadeia de custódia',
        ],
        [
            'PMDF: Procedimentos, competência e recursos — noções?',
            'Competência (regra do lugar) e recursos básicos (apelação, RESE) conforme hipóteses do CPP.',
            'Procedimentos, competência, recursos (noções usuais)',
        ],
        [
            'PMDF: Procedimentos especiais (júri, crimes funcionais, drogas) — ideia?',
            'Júri julga dolosos contra a vida; crimes funcionais e drogas têm regras/ritos específicos (noções).',
            'Procedimentos especiais (Tribunal do Júri, crimes funcionais, Lei de Drogas)',
        ],
        [
            'PMDF: Acordos penais (noções) — quais aparecem?',
            'ANPP e colaboração premiada são cobrados como conceitos e requisitos gerais; “plea bargain” pode aparecer como noção.',
            'Acordos penais: acordo de não persecução, colaboração premiada e plea bargain',
        ],
        [
            'PMDF: Recursos recorrentes — quais?',
            'Apelação, recurso em sentido estrito e habeas corpus (cabimento e finalidade em linhas gerais).',
            'Recursos penais recorrentes (apelação, recurso em sentido estrito, habeas corpus)',
        ],
    ]),
};
