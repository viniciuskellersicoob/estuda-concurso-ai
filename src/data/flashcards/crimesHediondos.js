import { makeCards } from './utils';

export const crimesHediondos = {
    name: 'Crimes Hediondos (Lei 8.072/1990)',
    icon: '🚫',
    exams: ['policia-penal-mg'],
    cards: makeCards('hed', [
        ['Crime hediondo: rol é aberto?', 'Não. É rol taxativo previsto em lei.'],
        ['Hediondo x equiparado?', 'Alguns crimes são equiparados por lei (ex.: tortura e tráfico), com efeitos específicos.'],
        ['Progressão em hediondos: por que é pegadinha?', 'Frações e requisitos variam conforme tipo de crime e condição do condenado (tema recorrente).'],
        ['“Regime inicial sempre fechado” (cuidado)?', 'Pegadinha histórica: regras evoluíram por decisões e reformas; atenção ao enunciado.'],
        ['Indulto/anistia/graça: como cai?', 'Há restrições relevantes para hediondos/equiparados; banca cobra “pode/não pode”.'],
        ['Tráfico privilegiado é hediondo?', 'Tese comum: quando reconhecido o privilégio, não se equipara a hediondo (tema cobrado).'],
        ['Reincidência em hediondos: efeito?', 'Pode agravar requisitos para benefícios e execução, conforme lei.'],
    ]),
};

