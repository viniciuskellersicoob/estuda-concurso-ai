import { makeCards } from './utils';

export const criminologia = {
    name: 'Criminologia',
    icon: '🔍',
    exams: ['policia-penal-mg'],
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
    ]),
};

