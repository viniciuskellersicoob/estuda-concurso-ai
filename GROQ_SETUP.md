# 🤖 Configuração da API Groq

## 📝 Passo a passo

### 1. Obter API Key

1. Acesse: [https://console.groq.com/keys](https://console.groq.com/keys)
2. Faça login ou crie uma conta gratuita
3. Clique em **"Create API Key"**
4. Copie a chave gerada (começa com `gsk_...`)

### 2. Configurar no projeto

1. Abra o arquivo `.env` na raiz do projeto
2. Cole sua API key:

```env
VITE_GROQ_API_KEY=gsk_sua_chave_aqui
```

3. Salve o arquivo
4. Reinicie o servidor de desenvolvimento (`npm run dev`)

### 3. Verificar configuração

O sistema verificará automaticamente se a API key está configurada. Se estiver faltando, você verá mensagens de aviso nas funcionalidades que usam IA.

---

## 🎯 Funcionalidades disponíveis

Com a API do Groq configurada, você pode:

### ✨ Explicações Inteligentes
- **Onde:** Após responder uma questão errada
- **O que faz:** Gera explicação detalhada do professor especialista
- **Uso:**
```javascript
import { generateExplanation } from './services/groqService';
const explanation = await generateExplanation(question, correctAnswer);
```

### 📚 Criar Flashcards
- **Onde:** Módulo de flashcards
- **O que faz:** Gera flashcards personalizados sobre qualquer tópico
- **Uso:**
```javascript
import { generateFlashcard } from './services/groqService';
const card = await generateFlashcard('Direito Penal', 'Tentativa');
```

### 💡 Dicas de Estudo
- **Onde:** Caderno de Erros / Dashboard
- **O que faz:** Analisa seus erros e sugere estratégias personalizadas
- **Uso:**
```javascript
import { generateStudyTip } from './services/groqService';
const tip = await generateStudyTip(['Direito Penal', 'Processo Penal']);
```

---

## ⚙️ Configurações avançadas

### Alterar modelo

Edite `src/config/groq.js`:

```javascript
export const GROQ_CONFIG = {
    model: 'llama-3.3-70b-versatile', // Padrão (recomendado)
    // Ou escolha outro:
    // model: 'llama-3.1-8b-instant',  // Mais rápido
    // model: 'mixtral-8x7b-32768',    // Contexto maior
};
```

### Ajustar temperatura

```javascript
export const GROQ_CONFIG = {
    temperature: 0.7, // Padrão (balanceado)
    // 0.0 = mais preciso/determinístico
    // 1.0 = mais criativo/variado
};
```

---

## 💰 Limites gratuitos

**Groq oferece:**
- ✅ 14.400 requisições/dia gratuitas
- ✅ ~6.000 tokens/minuto
- ✅ Sem cartão de crédito necessário

**Suficiente para:**
- ~500-1000 explicações/dia
- ~1000-2000 flashcards/dia
- Uso pessoal intenso

---

## 🔒 Segurança

- ✅ `.env` está no `.gitignore` (não será commitado)
- ✅ API key nunca exposta no frontend
- ✅ Requisições feitas pelo navegador (client-side)
- ⚠️ **NUNCA** compartilhe sua API key publicamente

---

## 🐛 Troubleshooting

### Erro: "API Key não configurada"
- Verifique se `.env` existe na raiz do projeto
- Confirme que a variável é `VITE_GROQ_API_KEY` (com VITE_)
- Reinicie o servidor (`Ctrl+C` e `npm run dev`)

### Erro: "Invalid API Key"
- Gere uma nova chave em [console.groq.com/keys](https://console.groq.com/keys)
- Verifique se copiou a chave completa (começa com `gsk_`)

### Erro: "Rate limit exceeded"
- Você atingiu o limite de requisições
- Aguarde 1 minuto ou use menos requisições simultâneas

---

## 📚 Recursos

- [Documentação Groq](https://console.groq.com/docs)
- [Modelos disponíveis](https://console.groq.com/docs/models)
- [Playground](https://console.groq.com/playground)
- [Limites e pricing](https://console.groq.com/settings/limits)
