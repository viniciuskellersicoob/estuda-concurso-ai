import { makeCards } from './utils.js';

export const raciocinioLogico = {
    name: 'Raciocínio Lógico-Matemático',
    icon: '🧠',
    exams: ['pmdf', 'policia-penal-mg', 'detran-df', 'camara-deputados'],
    cards: makeCards('rl', [
        ['Proposição?', 'Sentença declarativa que pode ser verdadeira (V) ou falsa (F).'],
        ['“E” (∧): quando é verdadeiro?', 'Somente se ambas as proposições forem verdadeiras.'],
        ['“OU” (∨): quando é falso?', 'Somente se ambas forem falsas.'],
        ['Implicação (p → q): quando é falsa?', 'Apenas quando p é V e q é F.'],
        ['Bicondicional (↔): quando é verdadeiro?', 'Quando têm o mesmo valor lógico (V-V ou F-F).'],
        ['De Morgan: ¬(p ∧ q)?', 'Equivale a (¬p ∨ ¬q).'],
        ['De Morgan: ¬(p ∨ q)?', 'Equivale a (¬p ∧ ¬q).'],
        ['Negação de (p → q)?', 'p ∧ ¬q.'],
        ['Contrapositiva de (p → q)?', '¬q → ¬p (equivalente lógica).'],
        ['(p → q) equivale a?', '¬p ∨ q.'],
        ['Tautologia?', 'Fórmula sempre verdadeira.'],
        ['Contradição?', 'Fórmula sempre falsa.'],
        ['Contingência?', 'Fórmula que pode ser V ou F dependendo dos valores.'],
        ['Quantificador universal (∀): negação?', '¬∀x P(x) ≡ ∃x ¬P(x).'],
        ['Quantificador existencial (∃): negação?', '¬∃x P(x) ≡ ∀x ¬P(x).'],
        ['Argumento válido (critério)?', 'Não existe caso em que premissas sejam verdadeiras e a conclusão falsa.'],
        ['Conjunto: união (A ∪ B)?', 'Elementos que estão em A ou em B.'],
        ['Conjunto: interseção (A ∩ B)?', 'Elementos comuns a A e B.'],
        ['Complemento (Aᶜ)?', 'Elementos fora de A no universo U.'],
        ['Porcentagem: 20% de X?', '0,20 × X.'],
        ['Aumento de 20% em X?', 'X × 1,20.'],
        ['Desconto de 20% em X?', 'X × 0,80.'],
        ['Probabilidade clássica?', 'P = casos favoráveis / casos possíveis (equiprováveis).'],
        ['P(Aᶜ) (complemento)?', '1 − P(A).'],
        ['Eventos independentes: P(A∩B)?', 'P(A)·P(B).'],
        ['Eventos mutuamente exclusivos: P(A∪B)?', 'P(A) + P(B) (pois A∩B=0).'],
        ['Arranjo x combinação?', 'Arranjo: ordem importa. Combinação: ordem não importa.'],
        ['Permutação simples (n!)?', 'Número de arranjos de n elementos distintos: n!.'],
        ['Arranjo A(n,p)?', 'n!/(n−p)! (ordem importa, sem repetição).'],
        ['Combinação C(n,p)?', 'n!/(p!(n−p)!) (ordem não importa, sem repetição).'],
        ['Juros simples (fórmula)?', 'J = C·i·t; M = C + J.'],
        ['Juros compostos (fórmula)?', 'M = C·(1+i)^t.'],
        ['Variação percentual sucessiva (pegadinha)?', 'Aumentar 10% e depois diminuir 10% não retorna ao valor inicial.'],
        ['Média aritmética?', 'Soma dos valores / quantidade.'],
        ['Média ponderada?', 'Σ(peso×valor)/Σ(peso).'],
        ['PA: termo geral?', 'a_n = a_1 + (n−1)·r.'],
        ['PG: termo geral?', 'a_n = a_1·q^(n−1).'],
        ['Regra de três: direta?', 'Grandezas crescem juntas (proporção direta).'],
        ['Regra de três: inversa?', 'Uma cresce e outra diminui (proporção inversa).'],
        ['Inequação: cuidado?', 'Ao multiplicar/desmultiplicar por número negativo, inverte o sinal.'],
        ['Velocidade média (definição)?', 'v_m = distância total / tempo total.'],
        ['Leitura de gráfico: pegadinha comum?', 'Eixo truncado e escalas diferentes podem distorcer a interpretação.'],

        // PMDF - cards âncora por tópico do edital (1+ por tópico)
        [
            'PMDF: Proposições, conectivos, negações, equivalências e implicações — essencial?',
            'Dominar tabelas de V/F, De Morgan, equivalências (¬p∨q) e negação de (p→q)=p∧¬q.',
            'Proposições, conectivos, negações, equivalências e implicações',
        ],
        [
            'PMDF: Tabelas-verdade, argumentos, validade, quantificadores — como cai?',
            'Validar argumentos por tabela-verdade e negar quantificadores: ¬∀=∃¬ e ¬∃=∀¬.',
            'Tabelas-verdade, argumentos, validade, quantificadores',
        ],
        [
            'PMDF: Conjuntos, relações, funções — noções usuais?',
            'União, interseção, complemento; função associa cada elemento do domínio a um único valor no contradomínio.',
            'Conjuntos, relações, funções (noções usuais de prova)',
        ],
        [
            'PMDF: Razão, proporção, regra de três, porcentagem — macete?',
            'Transforme porcentagem em decimal e use proporcionalidade direta/inversa com unidades consistentes.',
            'Razão, proporção, regra de três, porcentagem',
        ],
        [
            'PMDF: Juros simples/compostos — fórmulas?',
            'Simples: J=C·i·t e M=C+J. Compostos: M=C·(1+i)^t (se previsto).',
            'Juros simples/compostos (quando previsto)',
        ],
        [
            'PMDF: Equações/inequações e sistemas (básico) — pegadinha?',
            'Em inequações, ao multiplicar por número negativo inverte o sinal; em sistemas, eliminação/substituição.',
            'Equações/inequações e sistemas (nível básico)',
        ],
        [
            'PMDF: Problemas aritméticos e interpretação de tabelas/gráficos — foco?',
            'Unidades, proporção e leitura correta de escalas; cuidado com eixo truncado e percentuais.',
            'Problemas aritméticos e interpretação de tabelas/gráficos',
        ],
        [
            'PMDF: Análise combinatória e probabilidade — ideia?',
            'Arranjo (ordem importa), combinação (ordem não importa) e P=favoráveis/possíveis (noções).',
            'Análise combinatória e probabilidade (noções, quando previsto)',
        ],
        [
            'PMDF: Progressões aritméticas e geométricas — lembrar?',
            'PA: a_n=a_1+(n−1)r. PG: a_n=a_1·q^(n−1).',
            'Progressões aritméticas e geométricas com aplicações práticas',
        ],
        [
            'PMDF: Combinatória aplicada a escalas e equipes — como pensar?',
            'Identificar se é permutação/arranjo/combinação e aplicar princípio multiplicativo conforme restrições.',
            'Combinatória aplicada a escalas de serviço e distribuição de equipes',
        ],
        [
            'PMDF: Interpretação de tabelas probabilísticas e médias ponderadas — ponto-chave?',
            'Média ponderada: Σ(peso×valor)/Σ(peso); em probabilidade condicional, atenção ao espaço amostral.',
            'Interpretação de tabelas probabilísticas e médias ponderadas',
        ],

        // CÂMARA (Téc. Legislativo) - cards por tópico do edital (1+ por tópico)
        [
            'CÂMARA: Proposições e conectivos lógicos — essencial?',
            'Saber V/F de ∧, ∨, →, ↔ e equivalência (p→q)≡(¬p∨q).',
            'Proposições e conectivos lógicos',
        ],
        [
            'CÂMARA: Equivalências e negações — macete?',
            'Use De Morgan e a negação de implicação: ¬(p→q)=p∧¬q; e contrapartida: (p→q)≡(¬p∨q).',
            'Equivalências e negações',
        ],
        [
            'CÂMARA: Argumentos válidos — critério?',
            'É válido se não existe caso com premissas verdadeiras e conclusão falsa; tabela-verdade resolve.',
            'Argumentos válidos',
        ],
        [
            'CÂMARA: Problemas aritméticos e porcentagem — cuidado?',
            'Porcentagem sucessiva não soma: use multiplicadores (ex.: +10% = ×1,10).',
            'Problemas aritméticos e porcentagem',
        ],
        [
            'CÂMARA: Sequências lógicas — como atacar?',
            'Procure padrão (diferença, razão, alternância, pares/ímpares) e valide com 2–3 passos à frente.',
            'Sequências lógicas',
        ],
        [
            'CÂMARA: Combinatória em comissões — escolha certa?',
            'Se ordem não importa (comissões), geralmente é combinação; se importa (cargos), arranjo/permutação.',
            'Análise combinatória e princípio multiplicativo aplicados a comissões',
        ],
        [
            'CÂMARA: Índices de reajuste e porcentagens compostas — regra?',
            'Índice composto multiplica fatores: reajustes em sequência = produto dos multiplicadores.',
            'Proporcionalidade, porcentagens compostas e índices de reajuste',
        ],
        [
            'CÂMARA: Progressões ligadas à distribuição orçamentária — ideia?',
            'Modelar crescimento linear (PA) ou multiplicativo (PG) e interpretar variações em séries.',
            'Sequências numéricas e progressões ligadas à distribuição orçamentária',
        ],
        [
            'CÂMARA: Comissões (combinatória) — exemplo mental?',
            '“Escolher 5 membros dentre 12” → combinação C(12,5). “Definir presidente/relator” → ordem importa (arranjo).',
            'Análise combinatória e princípio multiplicativo aplicados a comissões',
        ],
        [
            'CÂMARA: Sequências lógicas — armadilha?',
            'Não assumir padrão por 1 passo; confirme com 2–3 transições e procure alternância (×2, +3, ×2, +3…).',
            'Sequências lógicas',
        ],

        // CÂMARA (Téc. Legislativo) - expansão (mín. ~5 cards por tópico)
        [
            'CÂMARA: Conectivo (p ∧ q) — quando é falso?',
            'Quando pelo menos uma proposição é falsa; só é verdadeiro em V-V.',
            'Proposições e conectivos lógicos',
        ],
        [
            'CÂMARA: Conectivo (p ∨ q) — quando é verdadeiro?',
            'Quando pelo menos uma é verdadeira; só é falso em F-F.',
            'Proposições e conectivos lógicos',
        ],
        [
            'CÂMARA: Implicação (p → q) — única falsidade?',
            'É falsa apenas em V→F; nos demais casos é verdadeira (pegadinha clássica).',
            'Proposições e conectivos lógicos',
        ],
        [
            'CÂMARA: Bicondicional (p ↔ q) — quando é verdadeiro?',
            'Quando têm o mesmo valor (V-V ou F-F).',
            'Proposições e conectivos lógicos',
        ],

        [
            'CÂMARA: De Morgan — negar (p ∧ q)?',
            '¬(p ∧ q) ≡ (¬p ∨ ¬q).',
            'Equivalências e negações',
        ],
        [
            'CÂMARA: De Morgan — negar (p ∨ q)?',
            '¬(p ∨ q) ≡ (¬p ∧ ¬q).',
            'Equivalências e negações',
        ],
        [
            'CÂMARA: Contrapositiva — por que ajuda?',
            'Em (p→q), a contrapositiva ¬q→¬p é equivalente e facilita resolver questões.',
            'Equivalências e negações',
        ],
        [
            'CÂMARA: Negação de quantificadores (noção)?',
            '¬∀x P(x) ≡ ∃x ¬P(x) e ¬∃x P(x) ≡ ∀x ¬P(x).',
            'Equivalências e negações',
        ],

        [
            'CÂMARA: Validade — forma clássica (modus ponens)?',
            'Se p→q e p, então q (válido).',
            'Argumentos válidos',
        ],
        [
            'CÂMARA: Validade — modus tollens?',
            'Se p→q e ¬q, então ¬p (válido).',
            'Argumentos válidos',
        ],
        [
            'CÂMARA: “Afirmação do consequente” é válida?',
            'Não: p→q e q não implica p (falácia).',
            'Argumentos válidos',
        ],
        [
            'CÂMARA: “Negação do antecedente” é válida?',
            'Não: p→q e ¬p não implica ¬q (falácia).',
            'Argumentos válidos',
        ],

        [
            'CÂMARA: Porcentagem — aumentar e reduzir (exemplo)?',
            'Aumentar 20% = ×1,20; depois reduzir 20% = ×0,80; resultado = ×0,96 (não volta).',
            'Problemas aritméticos e porcentagem',
        ],
        [
            'CÂMARA: Regra de três — erro comum?',
            'Misturar unidades e grandezas; normalize unidades antes de montar a proporção.',
            'Problemas aritméticos e porcentagem',
        ],
        [
            'CÂMARA: Média ponderada — por que cai?',
            'Porque aparece em índices e séries: Σ(peso×valor)/Σ(peso).',
            'Problemas aritméticos e porcentagem',
        ],
        [
            'CÂMARA: Leitura de tabelas — pegadinha?',
            'Confundir variação absoluta com percentual e ignorar base de comparação.',
            'Problemas aritméticos e porcentagem',
        ],

        [
            'CÂMARA: Sequência numérica — como validar padrão?',
            'Calcule diferença/razão e verifique alternância por posição (par/ímpar).',
            'Sequências lógicas',
        ],
        [
            'CÂMARA: Sequência lógica — padrões típicos?',
            'PA/PG, alternância de operações, padrão em blocos e relação com dígitos (soma de algarismos).',
            'Sequências lógicas',
        ],
        [
            'CÂMARA: Sequência — cuidado com “padrão único”?',
            'Mais de um padrão pode funcionar nos 2 primeiros passos; use mais termos para confirmar.',
            'Sequências lógicas',
        ],
        [
            'CÂMARA: Sequência — dica rápida?',
            'Se envolve orçamento, procure crescimento por fator (PG) ou incremento fixo (PA).',
            'Sequências lógicas',
        ],

        [
            'CÂMARA: Princípio multiplicativo — quando usar?',
            'Quando há escolhas sucessivas independentes: multiplica as quantidades de opções.',
            'Análise combinatória e princípio multiplicativo aplicados a comissões',
        ],
        [
            'CÂMARA: Combinação — quando usar?',
            'Escolha sem ordem e sem repetição: C(n,p).',
            'Análise combinatória e princípio multiplicativo aplicados a comissões',
        ],
        [
            'CÂMARA: Arranjo — quando usar?',
            'Escolha com ordem e sem repetição: A(n,p).',
            'Análise combinatória e princípio multiplicativo aplicados a comissões',
        ],
        [
            'CÂMARA: Permutação — quando usar?',
            'Organizar todos os n elementos: n!; com repetição, divide pelos fatoriais das repetições.',
            'Análise combinatória e princípio multiplicativo aplicados a comissões',
        ],

        [
            'CÂMARA: Proporcionalidade — direta?',
            'Se uma grandeza dobra e a outra dobra, é direta (regra de três direta).',
            'Proporcionalidade, porcentagens compostas e índices de reajuste',
        ],
        [
            'CÂMARA: Proporcionalidade — inversa?',
            'Se uma dobra e a outra cai pela metade (mantido produto), é inversa.',
            'Proporcionalidade, porcentagens compostas e índices de reajuste',
        ],
        [
            'CÂMARA: Índice acumulado — como calcular?',
            'Multiplique fatores: 5% e depois 10% ⇒ 1,05×1,10 = 1,155 (15,5%).',
            'Proporcionalidade, porcentagens compostas e índices de reajuste',
        ],
        [
            'CÂMARA: Reajuste x “pontos percentuais”?',
            'Pontos percentuais são diferença direta (ex.: 12%→15% = +3 p.p.), não multiplicador.',
            'Proporcionalidade, porcentagens compostas e índices de reajuste',
        ],

        [
            'CÂMARA: PA x PG — como distinguir?',
            'PA tem diferença constante; PG tem razão constante (multiplicação).',
            'Sequências numéricas e progressões ligadas à distribuição orçamentária',
        ],
        [
            'CÂMARA: Crescimento linear x exponencial?',
            'Linear soma constante; exponencial multiplica por fator constante (cresce mais rápido).',
            'Sequências numéricas e progressões ligadas à distribuição orçamentária',
        ],
        [
            'CÂMARA: Série orçamentária — o que observar?',
            'Base de comparação, tendência, sazonalidade e outliers; cuidado com “média” que esconde variação.',
            'Sequências numéricas e progressões ligadas à distribuição orçamentária',
        ],
        [
            'CÂMARA: Progressões — pegadinha de prova?',
            'Confundir razão (PG) com diferença (PA) quando os números são grandes; teste ambos rapidamente.',
            'Sequências numéricas e progressões ligadas à distribuição orçamentária',
        ],
    ]),
};
