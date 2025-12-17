# Guia de Deploy - EstudaConcurso AI

## 📦 Deploy no Vercel (Recomendado)

### Pré-requisitos
- Conta no GitHub
- Conta no Vercel (https://vercel.com)

### Passo 1: Subir para o GitHub

```bash
# Inicializar Git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Preparando para deploy"

# Criar repositório no GitHub e conectar
git remote add origin https://github.com/SEU_USUARIO/estuda-concurso-ai.git
git branch -M main
git push -u origin main
```

### Passo 2: Deploy no Vercel

1. Acesse https://vercel.com
2. Clique em "Add New Project"
3. Importe seu repositório do GitHub
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. **Variáveis de Ambiente** (se usar IA):
   - Adicione: `VITE_GEMINI_API_KEY` com sua chave da API

6. Clique em "Deploy"

🎉 Em ~2 minutos sua aplicação estará online!

---

## 🌐 Deploy no Netlify (Alternativa)

### Passo 1: Criar arquivo de configuração

Já existe o arquivo `netlify.toml` no projeto.

### Passo 2: Deploy

1. Acesse https://netlify.com
2. Arraste a pasta `dist` (após rodar `npm run build`)
   OU
3. Conecte seu repositório GitHub

---

## 🔧 Comandos Úteis

### Build de Produção
```bash
npm run build
```

### Testar Build Local
```bash
npm run preview
```

### Verificar Erros
```bash
npm run build 2>&1 | findstr /i "error"
```

---

## 🌍 Domínio Personalizado

Após deploy, você pode:
- Usar domínio gratuito: `seu-app.vercel.app`
- Configurar domínio próprio nas configurações

---

## ⚙️ Variáveis de Ambiente Necessárias

Se usar geração de questões por IA:
- `VITE_GEMINI_API_KEY` - Chave da API Gemini

---

## 📊 Monitoramento

**Vercel Dashboard:**
- Acesso em tempo real
- Logs de build
- Analytics
- Métricas de performance

---

## 🔄 Atualizações Automáticas

Após configurar:
1. Faça alterações no código
2. `git add .`
3. `git commit -m "descrição"`
4. `git push`

✅ **Deploy automático em ~2 minutos!**

---

## 🆘 Troubleshooting

### Erro de Build
```bash
# Limpar cache
npm clean cache --force
rm -rf node_modules
npm install
npm run build
```

### Rotas não funcionam (404)
- Verifique se `vercel.json` ou `netlify.toml` está configurado
- Confirme que tem rewrites para `/index.html`

---

## 💰 Custos

- **Vercel Free Tier**: 100GB banda/mês, builds ilimitados
- **Netlify Free Tier**: 100GB banda/mês, 300 min build/mês

Ambos **GRATUITOS** para projetos pessoais! 🎉
