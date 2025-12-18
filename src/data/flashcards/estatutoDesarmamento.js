import { makeCards } from './utils';

export const estatutoDesarmamento = {
    name: 'Estatuto do Desarmamento (Lei 10.826/2003) - Noções',
    icon: '🔫',
    exams: ['policia-penal-mg'],
    cards: makeCards('arma', [
        ['Posse x porte (diferença)?', 'Posse: manter em casa/local de trabalho autorizado. Porte: portar fora desses locais.'],
        ['Registro da arma: finalidade?', 'Controle estatal e autorização para posse, com requisitos.'],
        ['Arma de uso restrito: cuidado?', 'Regras e penas mais gravosas; bancas cobram distinções.'],
        ['Disparo de arma de fogo: ideia?', 'Efetuar disparo em via pública/local habitado sem justificativa legal.'],
        ['Numeração raspada/adulterada: pegadinha?', 'Conduta autônoma/agravada conforme tipo; atenção ao enunciado.'],
        ['Arma x munição (prova)?', 'Munição pode configurar tipos penais; não confundir com “arma descarregada”.'],
    ]),
};

