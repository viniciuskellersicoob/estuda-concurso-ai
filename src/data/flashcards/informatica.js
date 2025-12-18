import { makeCards } from './utils.js';

export const informatica = {
    name: 'Noções de Informática',
    icon: '💻',
    exams: ['pmdf', 'policia-penal-mg', 'detran-df', 'camara-deputados'],
    cards: makeCards('info', [
        ['Hardware x software?', 'Hardware: parte física. Software: programas/sistemas.'],
        ['RAM x armazenamento?', 'RAM é volátil e rápida. Armazenamento (SSD/HDD) é persistente.'],
        ['Sistema operacional: função?', 'Gerenciar recursos (CPU, memória, arquivos) e fornecer interface para usuário/programas.'],
        ['Bit x byte?', '1 byte = 8 bits.'],
        ['Backup 3-2-1?', '3 cópias, 2 mídias diferentes, 1 fora do local (offsite).'],
        ['Backup incremental x completo?', 'Completo copia tudo; incremental copia apenas o que mudou desde o último backup.'],
        ['Backup precisa ser testado?', 'Sim. Backup sem teste de restauração não garante recuperabilidade.'],
        ['Phishing?', 'Fraude por mensagem/site falso para capturar dados/senhas.'],
        ['Ransomware?', 'Malware que criptografa dados e exige resgate.'],
        ['Engenharia social?', 'Manipulação psicológica para obter acesso/informações sem ataque técnico direto.'],
        ['MFA (2FA)?', 'Senha + outro fator (token/app/biometria).'],
        ['HTTPS garante o quê?', 'Criptografia e integridade do tráfego (TLS); não garante “boa-fé” do site.'],
        ['DNS (função)?', 'Traduz domínio em IP.'],
        ['IP público x privado?', 'Público é roteável na internet; privado é usado internamente (NAT).'],
        ['Firewall: para quê?', 'Filtrar tráfego conforme regras (rede ou host).'],
        ['VPN: para quê?', 'Criar túnel criptografado para acesso remoto seguro.'],
        ['Autenticação x autorização?', 'Autenticação verifica identidade; autorização define permissões.'],
        ['Malware: tipos comuns?', 'Vírus, worm, trojan, spyware, adware, ransomware.'],
        ['Trojan (cavalo de Troia)?', 'Programa malicioso disfarçado de legítimo.'],
        ['DDoS?', 'Ataque de negação de serviço distribuído para indisponibilizar sistemas.'],
        ['Win+E (Windows)?', 'Abre o Explorador de Arquivos.'],
        ['Ctrl+Shift+Esc (Windows)?', 'Abre o Gerenciador de Tarefas.'],
        ['Extensão de arquivo: exemplo?', '.pdf, .docx, .xlsx, .jpg indicam formato e aplicativo associado.'],
        ['Compressão (.zip): para quê?', 'Reduz tamanho e empacota arquivos; pode ter senha/criptografia (limitada).'],
        ['CC x CCO (e-mail)?', 'CC visível; CCO oculta destinatários.'],
        ['Spam x phishing?', 'Spam é mensagem indesejada; phishing é fraude para roubo de dados.'],
        ['LGPD: dado pessoal?', 'Informação relacionada a pessoa natural identificada ou identificável.'],
        ['Dado sensível (LGPD): exemplos?', 'Saúde, biometria, religião, opinião política, origem racial, vida sexual.'],
        ['Nuvem: risco comum?', 'Compartilhamento excessivo e permissões mal configuradas podem vazar dados.'],
        ['Excel: PROCV?', 'Busca vertical: procura na 1ª coluna e retorna valor de outra coluna na mesma linha.'],
        ['Função SE (Excel): uso?', 'SE(condição; valor_se_verdadeiro; valor_se_falso).'],
        ['Erro #N/D (Excel): significa?', 'Valor não encontrado (ex.: busca falhou).'],
        ['Logs: por que caem?', 'Auditoria e rastreabilidade; ajudam em incidentes e conformidade.'],
        ['Tríade da segurança (CID)?', 'Confidencialidade, integridade e disponibilidade.'],
        ['Senhas fortes: regra prática?', 'Longas (frases), únicas por serviço, com gerenciador e MFA.'],

        // PMDF - cards âncora por tópico do edital (1+ por tópico)
        [
            'PMDF: Conceitos (hardware, software, SO) — resumo?',
            'Hardware é físico; software é lógico; SO gerencia recursos (CPU, memória, arquivos) e oferece interface.',
            'Conceitos: hardware, software, sistemas operacionais',
        ],
        [
            'PMDF: Internet/intranet (navegação, busca, e-mail, segurança) — cuidado?',
            'HTTPS/TLS, phishing, links suspeitos e boas práticas de e-mail (CCO, anexos) e pesquisa segura.',
            'Internet/intranet: navegação, busca, e-mail, segurança',
        ],
        [
            'PMDF: Arquivos/pastas (organização, extensões, backup) — essencial?',
            'Hierarquia de pastas, extensões (.pdf/.docx) e backup 3-2-1 com testes de restauração.',
            'Arquivos/pastas: organização, extensões, backup',
        ],
        [
            'PMDF: Segurança da informação (ameaças, boas práticas) — núcleo?',
            'CID (confidencialidade, integridade, disponibilidade), MFA, atualizações, antivírus e engenharia social.',
            'Noções de segurança da informação (ameaças, boas práticas)',
        ],
        [
            'PMDF: Editores de texto e planilhas — o que mais cai?',
            'Conceitos de formatação/estilos, funções (SOMA/MÉDIA/SE), referências e erros (#N/D).',
            'Editores de texto e planilhas (conceitos e funções usuais)',
        ],
        [
            'PMDF: Ferramentas colaborativas (Teams/SharePoint/OneDrive) — boa prática?',
            'Compartilhar com menor privilégio, controlar permissões, versionamento e evitar links públicos indevidos.',
            'Ferramentas colaborativas (Teams, SharePoint, OneDrive) e boas práticas de uso',
        ],
        [
            'PMDF: Configurações de segurança em navegadores e SO — exemplos?',
            'Atualizações automáticas, firewall, permissões de apps, bloqueio de pop-ups e limpeza de cookies/cache quando necessário.',
            'Configurações de segurança em navegadores e sistemas operacionais',
        ],
        [
            'PMDF: Nuvem e sincronização segura — ponto-chave?',
            'Evitar dados sensíveis sem controle; usar criptografia quando cabível e revisar permissões/compartilhamentos.',
            'Armazenamento em nuvem e sincronização segura de arquivos e evidências',
        ],

        // CÂMARA (Téc. Legislativo) - cards por tópico do edital (1+ por tópico)
        [
            'CÂMARA: Sistemas operacionais (Windows/Linux) — o que cai?',
            'Conceitos de arquivos/permissões, processos/serviços, atualizações e comandos/atalhos básicos.',
            'Sistemas operacionais (Windows/Linux)',
        ],
        [
            'CÂMARA: Ferramentas de produtividade — foco?',
            'Editor: estilos, formatação e revisão. Planilha: funções (SE, SOMA, PROCV), filtros e gráficos básicos.',
            'Ferramentas de produtividade (editores, planilhas)',
        ],
        [
            'CÂMARA: Internet e navegação segura — checklist?',
            'HTTPS, cuidado com links encurtados, downloads, extensões e autenticação; evitar Wi‑Fi público sem proteção.',
            'Internet e navegação segura',
        ],
        [
            'CÂMARA: Segurança da informação — tríade?',
            'CID: confidencialidade, integridade e disponibilidade; ameaças: phishing, ransomware e engenharia social.',
            'Segurança da informação',
        ],
        [
            'CÂMARA: Office 365/LibreOffice e atalhos — como cai?',
            'Atalhos (Ctrl+C/V/Z), colaboração e versões; boas práticas em documentos compartilhados.',
            'Soluções colaborativas (Office 365, LibreOffice) e atalhos no trabalho legislativo',
        ],
        [
            'CÂMARA: Governança de dados e LGPD — noção aplicada?',
            'Finalidade, minimização, segurança e bases legais; cuidados com dados pessoais em processos legislativos.',
            'Governança de dados e LGPD aplicada ao Poder Legislativo',
        ],
        [
            'CÂMARA: Sistemas corporativos (SEI/Infoleg/e-mail) — essência?',
            'SEI: tramitação e controle processual; Infoleg: informação legislativa; e-mail institucional: registro e segurança.',
            'Sistemas corporativos da Câmara (SEI, Infoleg, e-mail institucional)',
        ],
        [
            'CÂMARA: LGPD no Legislativo — pegadinha?',
            'Finalidade e minimização: não “coletar por precaução”; tratamento deve ter base legal e controle de acesso.',
            'Governança de dados e LGPD aplicada ao Poder Legislativo',
        ],
        [
            'CÂMARA: SEI — o que a banca costuma cobrar?',
            'Noções de tramitação, assinatura/credenciais, controle de acesso e rastreabilidade (logs).',
            'Sistemas corporativos da Câmara (SEI, Infoleg, e-mail institucional)',
        ],

        // CÂMARA (Téc. Legislativo) - expansão (mín. ~5 cards por tópico)
        [
            'CÂMARA: Windows x Linux — diferença prática?',
            'Windows é mais comum no desktop corporativo; Linux é frequente em servidores; conceitos de arquivos/permissões valem em ambos.',
            'Sistemas operacionais (Windows/Linux)',
        ],
        [
            'CÂMARA: Permissões (noção)?',
            'Controle de quem pode ler/editar/executar; aplicar “menor privilégio” reduz risco de vazamento.',
            'Sistemas operacionais (Windows/Linux)',
        ],
        [
            'CÂMARA: Processos x serviços?',
            'Processo é instância em execução; serviço/daemon roda em segundo plano para fornecer funcionalidade.',
            'Sistemas operacionais (Windows/Linux)',
        ],
        [
            'CÂMARA: Atualizações do sistema — por quê?',
            'Corrigem falhas e vulnerabilidades; adiar updates aumenta risco de invasão/ransomware.',
            'Sistemas operacionais (Windows/Linux)',
        ],

        [
            'CÂMARA: Planilha — PROCV faz o quê?',
            'Busca na 1ª coluna e retorna valor de coluna indicada na mesma linha.',
            'Ferramentas de produtividade (editores, planilhas)',
        ],
        [
            'CÂMARA: Planilha — função SE?',
            'SE(condição; valor_se_verdadeiro; valor_se_falso).',
            'Ferramentas de produtividade (editores, planilhas)',
        ],
        [
            'CÂMARA: Editor — estilos para quê?',
            'Padronizar títulos/corpo e gerar sumário automaticamente; melhora consistência em documentos oficiais.',
            'Ferramentas de produtividade (editores, planilhas)',
        ],
        [
            'CÂMARA: Planilha — erro #N/D?',
            'Valor não encontrado (comum em PROCV/PROCX); tratar com SEERRO quando necessário.',
            'Ferramentas de produtividade (editores, planilhas)',
        ],

        [
            'CÂMARA: Navegação segura — sinal de phishing?',
            'URL estranha, urgência, pedido de senha/código, anexos inesperados e domínio “parecido” com o oficial.',
            'Internet e navegação segura',
        ],
        [
            'CÂMARA: HTTPS significa “site confiável”?',
            'Não. Significa tráfego criptografado; o conteúdo pode ser malicioso mesmo assim.',
            'Internet e navegação segura',
        ],
        [
            'CÂMARA: Wi‑Fi público — risco?',
            'Interceptação e redes falsas; evite logins sensíveis sem VPN e MFA.',
            'Internet e navegação segura',
        ],
        [
            'CÂMARA: Cookies/cache — impacto?',
            'Aceleram navegação, mas podem guardar sessão e rastrear; limpar resolve “versão antiga” e melhora privacidade.',
            'Internet e navegação segura',
        ],

        [
            'CÂMARA: Malware — tipos comuns?',
            'Trojan, spyware, ransomware e worms; prevenção com atualização, backup e MFA.',
            'Segurança da informação',
        ],
        [
            'CÂMARA: Ransomware — defesa principal?',
            'Backups testados (3-2-1) + atualização + segmentação + conscientização contra phishing.',
            'Segurança da informação',
        ],
        [
            'CÂMARA: Engenharia social — exemplo?',
            '“Suporte” pedindo código MFA/ senha; regra: nunca compartilhar credenciais.',
            'Segurança da informação',
        ],
        [
            'CÂMARA: Menor privilégio — por quê?',
            'Reduz impacto de conta comprometida e limita vazamentos e fraudes.',
            'Segurança da informação',
        ],

        [
            'CÂMARA: Office 365/LibreOffice — colaboração segura?',
            'Controle de permissões (ler/editar), links restritos e versionamento; evite compartilhamento público.',
            'Soluções colaborativas (Office 365, LibreOffice) e atalhos no trabalho legislativo',
        ],
        [
            'CÂMARA: Atalhos — campeões?',
            'Ctrl+C/V/X/Z, Ctrl+F, Ctrl+S; Win+E no Windows (produtividade).',
            'Soluções colaborativas (Office 365, LibreOffice) e atalhos no trabalho legislativo',
        ],
        [
            'CÂMARA: Versionamento em arquivos compartilhados — utilidade?',
            'Permite rastrear mudanças e reverter versões; essencial em documentos oficiais.',
            'Soluções colaborativas (Office 365, LibreOffice) e atalhos no trabalho legislativo',
        ],
        [
            'CÂMARA: Comentários/revisão — cuidado?',
            'Remover comentários antes de publicar documento oficial; pode vazar informações internas.',
            'Soluções colaborativas (Office 365, LibreOffice) e atalhos no trabalho legislativo',
        ],

        [
            'CÂMARA: LGPD — dado pessoal (definição)?',
            'Informação relacionada a pessoa natural identificada ou identificável.',
            'Governança de dados e LGPD aplicada ao Poder Legislativo',
        ],
        [
            'CÂMARA: LGPD — dado sensível?',
            'Saúde, biometria, religião, opinião política, origem racial, vida sexual (exige maior cuidado).',
            'Governança de dados e LGPD aplicada ao Poder Legislativo',
        ],
        [
            'CÂMARA: LGPD — minimização?',
            'Coletar e tratar apenas o necessário para a finalidade; reduzir risco e exposição.',
            'Governança de dados e LGPD aplicada ao Poder Legislativo',
        ],
        [
            'CÂMARA: Governança de dados — controles típicos?',
            'Catálogo de dados, classificação, controle de acesso, logs e políticas de retenção/backup.',
            'Governança de dados e LGPD aplicada ao Poder Legislativo',
        ],

        [
            'CÂMARA: SEI — por que é importante?',
            'Garante tramitação, controle e histórico do processo; reforça transparência e auditoria.',
            'Sistemas corporativos da Câmara (SEI, Infoleg, e-mail institucional)',
        ],
        [
            'CÂMARA: Infoleg — para que serve?',
            'Acesso a informações legislativas (proposições, tramitação, sessões), conforme uso institucional.',
            'Sistemas corporativos da Câmara (SEI, Infoleg, e-mail institucional)',
        ],
        [
            'CÂMARA: E-mail institucional — boa prática?',
            'Usar CCO quando necessário, cuidado com anexos, assinatura institucional e evitar encaminhar dados sensíveis.',
            'Sistemas corporativos da Câmara (SEI, Infoleg, e-mail institucional)',
        ],
        [
            'CÂMARA: Logs em sistemas — por que caem?',
            'Ajudam auditoria, rastreabilidade e investigação de incidentes (quem acessou, quando e o que fez).',
            'Sistemas corporativos da Câmara (SEI, Infoleg, e-mail institucional)',
        ],
    ]),
};
