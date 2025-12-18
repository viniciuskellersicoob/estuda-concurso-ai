import { makeCards } from './utils.js';

export const criminologia = {
    name: 'Criminologia',
    icon: '🔍',
    exams: ['policia-penal-mg', 'pmdf'],
    cards: makeCards('crim', [
        ['Criminologia: objeto?', 'Estudo do crime, do criminoso, da vítima e do controle social.'],
        ['Criminologia x Direito Penal?', 'Criminologia é empírica/interdisciplinar; Direito Penal é normativo.'],
        ['Escola clássica: foco?', 'Livre-arbítrio e pena proporcional ao delito.'],
        ['Escola positivista: foco?', 'Determinismo e estudo do delinquente/defesa social.'],
        ['Associação diferencial (Sutherland)?', 'Crime é aprendido em grupos (valores e técnicas).'],
        ['Teoria do etiquetamento (labeling)?', 'Rotular alguém como criminoso pode reforçar exclusão e “carreira” criminosa.'],
        ['Cifra negra?', 'Crimes não notificados/registrados nas estatísticas oficiais.'],
        ['Controle social formal x informal?', 'Formal: polícia/justiça/prisão. Informal: família, escola, comunidade.'],
        ['Vitimização secundária?', 'Dano causado por atendimento institucional inadequado (revitimização).'],
        ['Prevenção terciária?', 'Evitar reincidência (reinserção e políticas prisionais).'],

        // PMDF - cards âncora por tópico do edital (1+ por tópico)
        [
            'PMDF: Conceitos básicos (crime, criminoso, vítima, controle social) — resumo?',
            'Crime como fenômeno; criminoso e vítima como objetos de estudo; controle social formal (polícia/justiça) e informal (família/escola).',
            'Conceitos básicos: crime, criminoso, vítima e controle social',
        ],
        [
            'PMDF: Escolas/teorias criminológicas mais cobradas — quais?',
            'Clássica (livre-arbítrio), positivista (determinismo) e teorias sociológicas (anomia, aprendizagem, controle).',
            'Escolas/teorias criminológicas mais cobradas',
        ],
        [
            'PMDF: Violência, prevenção e políticas criminais — noção?',
            'Prevenção primária/secundária/terciária e políticas criminais baseadas em evidências e direitos.',
            'Violência, prevenção e políticas criminais (noções)',
        ],
        [
            'PMDF: Teorias sociológicas (anomia, associação diferencial, controle) — síntese?',
            'Anomia: descompasso normas/metas; associação diferencial: crime é aprendido; controle: vínculos reduzem desvios.',
            'Teorias sociológicas contemporâneas (anomia, associação diferencial, controle social)',
        ],
        [
            'PMDF: Prevenção situacional e comunitária — diferença?',
            'Situacional reduz oportunidades (ambiente); comunitária fortalece vínculos e solução de problemas locais.',
            'Políticas de prevenção situacional e comunitária',
        ],
        [
            'PMDF: Justiça restaurativa e medidas alternativas — ideia?',
            'Foco em reparação e responsabilização dialogada (quando cabível), reduzindo reincidência e vitimização secundária.',
            'Justiça restaurativa e medidas alternativas no âmbito policial',
        ],
    ]),
};
