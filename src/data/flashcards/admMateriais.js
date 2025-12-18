import { makeCards } from './utils';

export const administracaoMateriais = {
    name: 'Administração de Materiais',
    icon: '📦',
    exams: ['camara-deputados'],
    cards: makeCards('admm', [
        ['Almoxarifado: função?', 'Receber, armazenar, conservar e distribuir materiais com controle.'],
        ['Curva ABC?', 'Classifica itens por valor/impacto: A (mais importantes), B (médios), C (menos).'],
        ['Estoque de segurança?', 'Quantidade mínima para cobrir incertezas (demanda/fornecedor).'],
        ['Ponto de pedido?', 'Nível que dispara reposição considerando prazo de ressuprimento (lead time).'],
        ['Inventário periódico x rotativo?', 'Periódico: contagem em períodos; rotativo: contagens contínuas por amostragem.'],
        ['PEPS/FIFO?', 'Primeiro que entra, primeiro que sai (útil para evitar vencimento).'],
        ['Ruptura de estoque: efeito?', 'Paralisa serviço e aumenta custos emergenciais.'],
        ['Excesso de estoque: efeito?', 'Capital parado, perdas, custo de armazenagem e obsolescência.'],
    ]),
};

