# 🚀 Guia Rápido de Deploy

## ✅ Checklist de Prontidão

- [x] Build funcionando (`npm run build`)
- [x] Responsivo (mobile + iPad)
- [x] Configurações Vercel/Netlify prontas
- [x] `.gitignore` configurado
- [x] README.md completo
- [x] Sistema de autenticação (credencial: 'vilu')

## 📋 O que você precisa decidir ANTES do deploy:

### 1. **Chave da API Gemini (OPCIONAL)**

**Opção A: SEM IA (Recomendado para começar)**
- ✅ Sistema funciona 100% com banco de questões
- ✅ Sem custos
- ✅ Sem configuração extra
- ⚠️ Questões limitadas ao banco atual

**Opção B: COM IA**
- ✅ Geração ilimitada de questões
- ✅ Variedade infinita
- ⚠️ Precisa de chave API (gratuita com limites)
- ⚠️ Pode ter custos se ultrapassar limite gratuito

**Como obter chave Gemini (se quiser):**
1. Acesse: https://makersuite.google.com/app/apikey
2. Faça login com Google
3. Crie uma chave API
4. Copie a chave

### 2. **Escolher plataforma de hospedagem**

**Vercel (RECOMENDADO)** ⭐
- ✅ Deploy em 2 minutos
- ✅ HTTPS automático
- ✅ Deploy contínuo (push = atualização automática)
- ✅ Preview de PRs
- ✅ 100% gratuito para hobby

**Netlify (Alternativa)**
- ✅ Similar ao Vercel
- ✅ Também excelente
- ✅ 100% gratuito

---

## 🎯 PASSO A PASSO COMPLETO

### Etapa 1: Preparar o Código

```powershell
# No diretório do projeto
cd c:\Users\viniciusk.goncalves\Documents\web3\estuda-concurso-ai

# Testar build final
npm run build

# Se tudo OK, continue!
```

### Etapa 2: GitHub

```powershell
# Inicializar Git
git init

# Adicionar arquivos
git add .

# Commit
git commit -m "Initial commit - EstudaConcurso AI"

# Criar repositório no GitHub:
# 1. Acesse: https://github.com/new
# 2. Nome: estuda-concurso-ai
# 3. Descrição: Sistema de simulação de questões para concursos
# 4. Public ou Private (sua escolha)
# 5. NÃO adicione README (já temos)
# 6. Clique "Create repository"

# Conectar e enviar
git remote add origin https://github.com/SEU_USUARIO/estuda-concurso-ai.git
git branch -M main
git push -u origin main
```

### Etapa 3: Deploy no Vercel

**Opção A: Via Interface (Mais Fácil)**

1. Acesse: https://vercel.com
2. Faça login com GitHub
3. Clique "Add New..." → "Project"
4. Selecione seu repositório `estuda-concurso-ai`
5. Configurações detectadas automaticamente:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. **Variáveis de Ambiente** (SOMENTE SE USAR IA):
   - Click "Environment Variables"
   - Name: `VITE_GROQ_API_KEY` (padrão) **ou** `VITE_DEEPSEEK_API_KEY`
   - Value: `sua_chave_aqui`
   - (Opcional) `VITE_AI_PROVIDER=deepseek` para usar DeepSeek em vez de Groq
7. Click **"Deploy"**
8. ⏱️ Aguarde 2-3 minutos
9. 🎉 **PRONTO!** Link: `https://seu-projeto.vercel.app`

**Opção B: Via CLI**

```powershell
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel

# Seguir prompts:
# - Link to existing project? → No
# - Project name? → estuda-concurso-ai
# - Directory? → ./
# - Want to override settings? → No

# Se usar IA, adicionar variável:
vercel env add VITE_GROQ_API_KEY

# (Opcional) para usar DeepSeek:
vercel env add VITE_DEEPSEEK_API_KEY
vercel env add VITE_AI_PROVIDER

# Deploy para produção
vercel --prod
```

---

## 🔐 Segurança e Acesso

### Credencial Atual
- **Código de acesso:** `vilu`
- ⚠️ **IMPORTANTE:** Esta credencial está no código!

### Para tornar mais seguro (DEPOIS do deploy):

**Opção 1: Mudar credencial**
```javascript
// Em src/context/AuthContext.jsx, linha 3
const AUTH_CODE = 'sua_nova_senha_aqui';
```

**Opção 2: Sistema de senhas por usuário** (mais avançado)
- Cada perfil com senha diferente
- Requer alteração no AuthContext

**Opção 3: Sistema completo de autenticação** (futuro)
- Firebase Auth
- Supabase
- Auth0

---

## 📊 Depois do Deploy

### Testar em Múltiplos Dispositivos

1. **iPhone/Android**
   - Abra o link no Safari/Chrome
   - Adicione à tela inicial (funciona como app!)

2. **iPad**
   - Teste em portrait e landscape
   - Verifique responsividade

3. **Desktop**
   - Teste em Chrome, Firefox, Safari

### Compartilhar

1. **Link direto:** `https://seu-projeto.vercel.app`
2. **QR Code:** Vercel gera automaticamente
3. **Domínio personalizado:** Configure em Settings

---

## 🔄 Atualizações Futuras

```powershell
# Fazer alterações no código
# Depois:

git add .
git commit -m "Descrição da mudança"
git push

# ✅ Deploy automático em ~2 minutos!
```

---

## 🆘 Problemas Comuns

### Build falha no Vercel
```powershell
# Localmente, limpar e rebuildar:
rm -r node_modules
npm install
npm run build

# Se funcionar local mas falhar no Vercel:
# - Verifique versão do Node (package.json tem "engines")
# - Veja logs detalhados no Vercel Dashboard
```

### Rotas 404
- Já configurado! (`vercel.json` tem rewrites)
- Se problema persistir, verifique se arquivo commitado

### IA não funciona
- Certifique-se de adicionar `VITE_GROQ_API_KEY` (ou `VITE_DEEPSEEK_API_KEY`)
- Variáveis de ambiente precisam começar com `VITE_`
- Após adicionar variável, redeploy

---

## 💰 Custos

**Vercel Free Tier:**
- ✅ 100GB de banda/mês
- ✅ Builds ilimitados
- ✅ HTTPS grátis
- ✅ Deploy automático
- ✅ Preview deployments

**Groq/DeepSeek (se usar IA):**
- ✅ Veja limites e preços no painel do provedor

**Total: R$ 0,00** para uso normal! 🎉

---

## 📞 Suporte

**Documentação:**
- Vercel: https://vercel.com/docs
- Vite: https://vitejs.dev
- React Router: https://reactrouter.com

**Se precisar de ajuda:**
1. Verifique logs do Vercel
2. Teste build local primeiro
3. Compare com este guia

---

## ✅ Checklist Final

Antes de compartilhar publicamente:

- [ ] Build testado localmente
- [ ] Código no GitHub
- [ ] Deploy no Vercel bem-sucedido
- [ ] Testado em celular
- [ ] Testado em iPad
- [ ] Testado login/seleção de usuário
- [ ] Testado simulação de questões
- [ ] Link funcionando
- [ ] (Opcional) Variável IA configurada
- [ ] (Opcional) Domínio personalizado

**Pronto para compartilhar!** 🚀
