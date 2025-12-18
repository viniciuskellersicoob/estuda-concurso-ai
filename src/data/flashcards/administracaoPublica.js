import { makeCards } from './utils';

export const administracaoPublica = {
    name: 'Administração Pública (Gestão)',
    icon: '📊',
    exams: ['pmdf', 'camara-deputados'],
    cards: makeCards('ap', [
        ['PPA, LDO e LOA (ordem e função)?', 'PPA: planejamento plurianual. LDO: diretrizes e metas. LOA: orçamento anual.'],
        ['Eficiência x eficácia x efetividade?', 'Eficiência: recursos/custo. Eficácia: atingir metas. Efetividade: impacto real.'],
        ['Governança pública: conceito?', 'Direção, monitoramento e incentivos para integridade e resultados.'],
        ['Gestão de riscos: etapas?', 'Identificar, analisar, tratar, monitorar e comunicar.'],
        ['Ciclo PDCA?', 'Plan-Do-Check-Act (melhoria contínua).'],
        ['SWOT?', 'Forças, fraquezas, oportunidades e ameaças.'],
        ['Indicador x meta?', 'Indicador mede; meta é o valor-alvo no tempo.'],
        ['Gestão por processos (BPM): ideia?', 'Mapear, padronizar, medir e melhorar processos ponta a ponta.'],
        ['Gestão por competências?', 'Alinhar CHA (conhecimentos, habilidades, atitudes) às necessidades do órgão.'],
        ['Clima x cultura?', 'Clima é percepção momentânea; cultura é conjunto de valores e práticas enraizadas.'],
        ['Gestão de projetos: triângulo?', 'Escopo, prazo e custo (qualidade como resultante).'],
        ['Transparência ativa x passiva (LAI)?', 'Ativa: divulgação espontânea. Passiva: fornecimento mediante pedido.'],
        ['Accountability: noção?', 'Prestação de contas e responsabilização por atos/omissões.'],
        ['Avaliação de políticas públicas: por quê?', 'Verificar resultados e ajustar decisões (ciclo de políticas).'],
    ]),
};

