# 🤖 Gerador Automático de Questões

## 📋 Pré-requisitos

1. **Chave Groq configurada no `.env`:**
```env
VITE_GROQ_API_KEY=sua_chave_aqui
```

2. **Instalar dependências:**
```bash
cd scripts
npm install
```

---

## 🚀 Como Usar

### **Sintaxe:**
```bash
node generateQuestions.js <materia> <quantidade>
```

### **Matérias Disponíveis:**
- `portugues` - Língua Portuguesa
- `raciocinio` - Raciocínio Lógico-Matemático
- `informatica` - Noções de Informática
- `constitucional` - Direito Constitucional
- `administrativo` - Direito Administrativo
- `penal` - Direito Penal
- `processual-penal` - Direito Processual Penal
- `afo` - Administração Financeira e Orçamentária
- `etica` - Ética no Serviço Público
- `transito` - Legislação de Trânsito - CTB
- `lep` - Lei de Execução Penal

---

## 📝 Exemplos de Uso

### **Gerar 50 questões de Português:**
```bash
node generateQuestions.js portugues 50
```

### **Gerar 30 questões de Direito Constitucional:**
```bash
node generateQuestions.js constitucional 30
```

---

## ⚙️ Como Funciona

1. ✅ Script gera questões via Groq API
2. ✅ Aguarda 2 segundos entre cada questão (evita rate limit)
3. ✅ Salva em `generated-questions/[materia]-[timestamp].js`
4. ✅ Mostra progresso em tempo real

---

## 📊 Saída

Exemplo de progresso:
```
🚀 Gerando 50 questões de Língua Portuguesa...

Gerando questão 1/50... ✅
Gerando questão 2/50... ✅
Gerando questão 3/50... ✅
...

📊 Estatísticas:
   Total geradas: 50/50
   Taxa de sucesso: 100.0%

✅ Questões salvas em: generated-questions/lingua-portuguesa-2025-12-18T17-30-00.js
📋 Copie o conteúdo deste arquivo para src/data/questionBank.js
```

---

## 🔄 Integração com o Banco

1. **Abra o arquivo gerado** em `generated-questions/`
2. **Copie o conteúdo**
3. **Cole no final** de `src/data/questionBank.js`
4. **Teste no navegador**

---

## ⚠️ Limites e Boas Práticas

### **Limites Groq (Free Tier):**
- ✅ 14.400 requisições/dia
- ✅ 6.000 tokens/minuto

### **Recomendações:**
- 📌 Gere no máximo **50-80 questões por vez**
- 📌 Aguarde **5 minutos** entre lotes grandes
- 📌 Revise a qualidade das questões geradas
- 📌 Ajuste manualmente se necessário

---

## 🎯 Plano de Expansão Sugerido

### **Fase 1: Matérias Principais (500 questões)**
```bash
node generateQuestions.js portugues 50
node generateQuestions.js raciocinio 50
node generateQuestions.js constitucional 50
node generateQuestions.js administrativo 50
node generateQuestions.js informatica 50
node generateQuestions.js penal 50
node generateQuestions.js processual-penal 50
node generateQuestions.js etica 50
node generateQuestions.js afo 50
node generateQuestions.js lep 50
```

### **Fase 2: Expansão (+ 500 questões)**
Execute novamente com mais 50 de cada matéria.

### **Fase 3: Matérias Específicas**
Adicione mais matérias ao script conforme necessidade.

---

## 🐛 Solução de Problemas

### **Erro: API Key não configurada**
```bash
# Configure no .env na raiz do projeto:
VITE_GROQ_API_KEY=gsk_...
```

### **Erro: Rate Limit Exceeded**
- Aguarde 60 segundos
- Reduza a quantidade por lote
- Aumente o intervalo entre requisições (altere linha 136 do script)

### **Questões com baixa qualidade**
- Ajuste o `temperature` no script (linha 29)
- Revise e edite manualmente
- Use prompt mais específico

---

## 📈 Monitoramento

Acompanhe seu uso em:
- https://console.groq.com/usage

---

## ✅ Checklist de Execução

- [ ] Chave Groq configurada
- [ ] Dependências instaladas (`npm install`)
- [ ] Escolher matéria e quantidade
- [ ] Executar script
- [ ] Aguardar conclusão
- [ ] Copiar para `questionBank.js`
- [ ] Testar no navegador
- [ ] Ajustar se necessário

**Meta Final:** 50-100 questões/matéria = ~2.000-4.000 questões! 🎯
