import { makeCards } from './utils';

export const administracaoPessoas = {
    name: 'Administração de Pessoas',
    icon: '👥',
    exams: ['camara-deputados'],
    cards: makeCards('admp', [
        ['Recrutamento x seleção?', 'Recrutamento atrai candidatos; seleção escolhe os mais adequados.'],
        ['Treinamento x desenvolvimento?', 'Treinamento foca curto prazo/tarefa; desenvolvimento foca longo prazo.'],
        ['Avaliação de desempenho: por quê?', 'Orientar desenvolvimento e decisões de RH com base em resultados/competências.'],
        ['Clima x cultura organizacional?', 'Clima é percepção; cultura são valores e práticas enraizadas.'],
        ['Turnover (rotatividade): impacto?', 'Perda de conhecimento e custo de reposição.'],
        ['Absenteísmo?', 'Faltas/ausências; pode indicar problemas de saúde/clima/gestão.'],
        ['Assédio moral: núcleo?', 'Condutas repetitivas que humilham/isolam; afeta dignidade e ambiente.'],
        ['Feedback eficaz: características?', 'Específico, baseado em fatos, oportuno e com plano de ação.'],
    ]),
};

