import { makeCards } from './utils';

export const leiTortura = {
    name: 'Lei de Tortura (Lei 9.455/1997) - Noções',
    icon: '⛔',
    exams: ['policia-penal-mg'],
    cards: makeCards('tort', [
        ['Tortura: núcleo?', 'Constranger com violência/grave ameaça causando sofrimento físico/mental para fins específicos (confissão, castigo, discriminação etc.).'],
        ['Tortura x maus-tratos (diferença)?', 'Tortura exige finalidade específica e sofrimento intenso; maus-tratos tem outra estrutura típica.'],
        ['Tortura é equiparada a hediondo?', 'É tratada como equiparada para vários efeitos (tema de prova).'],
        ['“Obediência hierárquica” justifica tortura?', 'Não. Vedação absoluta e responsabilização.'],
    ]),
};

