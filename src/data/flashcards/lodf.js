import { makeCards } from './utils.js';

export const lodf = {
    name: 'Lei Orgânica do DF (LODF) - Noções',
    icon: '🧱',
    exams: ['detran-df'],
    cards: makeCards('lodf', [
        ['LODF: natureza?', 'Norma que organiza o DF (equivalente à “constituição” local), respeitando a CF.'],
        ['Símbolos do DF?', 'Bandeira, hino e brasão (instituídos em lei).'],
        ['Competências do DF: noção?', 'Exerce competências de Estado e de Município em vários temas.'],
        ['Administração pública distrital: princípios?', 'LIMPE e demais princípios constitucionais, com regras locais.'],
        ['Controle/fiscalização: por quem?', 'Câmara Legislativa, tribunal de contas e controle interno, conforme normas.'],
        ['Particularidade do DF em segurança pública?', 'Há regras constitucionais específicas; banca adora cobrar “quem faz o quê”.'],
        ['LODF x lei ordinária?', 'LODF tem hierarquia superior às leis distritais comuns e rito de alteração mais rígido.'],
        ['Participação popular: instrumentos?', 'Mecanismos como audiências e conselhos previstos em normas locais (noções).'],

        // DETRAN-DF - cards por tópico do edital (1+ por tópico)
        [
            'DETRAN: LODF — DF como unidade híbrida (ideia)?',
            'DF tem características de Estado e Município; autonomia dentro dos limites da CF e LODF.',
            'Lei Orgânica do Distrito Federal e a unidade federativa híbrida (estado + município)',
        ],
        [
            'DETRAN: Estrutura administrativa do GDF e DETRAN — noção?',
            'Competências e organização do GDF; DETRAN/Secretaria de Mobilidade atuam em políticas e execução de trânsito.',
            'Estrutura administrativa do GDF e competências da Secretaria de Mobilidade e Detran-DF',
        ],
        [
            'DETRAN: Políticas distritais de mobilidade — foco?',
            'Planejamento urbano, segurança viária, educação para o trânsito e integração de modais (noções).',
            'Políticas distritais de mobilidade urbana e trânsito do DF',
        ],
        [
            'DETRAN: Compliance e atendimento ao cidadão — por que cai?',
            'Integridade, padrões de atendimento, transparência e melhoria de processos em serviços ao cidadão.',
            'Programas de atualização, compliance e atendimento ao cidadão do Detran-DF',
        ],
        [
            'DETRAN: Controle social e transparência — exemplos?',
            'Ouvidoria, LAI, portais de transparência e participação em conselhos; reforçam accountability.',
            'Controle social e transparência na execução de serviços públicos do GDF',
        ],
    ]),
};
