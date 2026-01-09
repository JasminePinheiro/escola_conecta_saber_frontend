# 🚀 Guia de Deploy na Vercel

Este documento contém instruções para fazer deploy da aplicação na Vercel.

## 📋 Pré-requisitos

- Conta na [Vercel](https://vercel.com)
- Repositório no GitHub (ou GitLab/Bitbucket)

## 🎯 Método 1: Deploy via Interface Web (Recomendado)

### Passo 1: Conectar Repositório

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"Add New Project"**
3. Importe seu repositório do GitHub
4. A Vercel detectará automaticamente que é um projeto Vite

### Passo 2: Configurar Variáveis de Ambiente

Na tela de configuração do projeto, adicione:

- **Variable Name**: `VITE_API_URL`
- **Value**: `https://escola-conecta-saber-latest.onrender.com` (ou sua URL de produção)

### Passo 3: Configurar Build Settings

A Vercel detecta automaticamente projetos Vite, mas você pode verificar:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Passo 4: Deploy

Clique em **"Deploy"** e aguarde o processo concluir.

✅ **Pronto!** Sua aplicação estará disponível em uma URL como: `https://seu-projeto.vercel.app`

## 🔄 Método 2: Deploy via CLI

### Instalação da CLI

```bash
npm install -g vercel
```

### Login

```bash
vercel login
```

### Deploy

```bash
# Deploy de produção
vercel --prod

# Deploy de preview
vercel
```

## 🤖 Método 3: Deploy Automático via CI/CD

O pipeline GitHub Actions já está configurado para fazer deploy automático na Vercel.

### Configuração dos Secrets

No GitHub, vá em **Settings > Secrets and variables > Actions** e adicione:

1. **`VERCEL_TOKEN`** - Token da Vercel
   - Obtenha em: [Vercel Settings > Tokens](https://vercel.com/account/tokens)
   - Crie um novo token com escopo completo

2. **`VERCEL_ORG_ID`** - ID da organização
   - Execute: `vercel whoami` ou encontre no arquivo `.vercel/project.json` após primeiro deploy

3. **`VERCEL_PROJECT_ID`** - ID do projeto
   - Execute: `vercel link` ou encontre no arquivo `.vercel/project.json` após primeiro deploy

4. **`VITE_API_URL`** (opcional) - URL da API
   - Valor padrão: `https://escola-conecta-saber-latest.onrender.com`

### Como obter VERCEL_ORG_ID e VERCEL_PROJECT_ID

1. Faça o primeiro deploy manualmente via CLI ou interface web
2. Execute localmente:
   ```bash
   vercel link
   ```
3. Isso criará um arquivo `.vercel/project.json` com as informações:
   ```json
   {
     "orgId": "seu-org-id",
     "projectId": "seu-project-id"
   }
   ```

## 📁 Arquivo vercel.json

O arquivo `vercel.json` já está configurado com:

- ✅ Framework Vite
- ✅ SPA routing (redireciona todas as rotas para `index.html`)
- ✅ Cache otimizado para assets estáticos
- ✅ Build e output directory configurados

## 🔧 Configurações Avançadas

### Domínio Customizado

1. Vá em **Project Settings > Domains**
2. Adicione seu domínio
3. Configure os registros DNS conforme instruções

### Variáveis de Ambiente por Ambiente

- **Production**: Use a interface web ou CLI
- **Preview**: Herda de Production, mas pode ser sobrescrito

### Preview Deploys

Cada Pull Request gera automaticamente um preview deploy com URL única.

## 🐛 Troubleshooting

### Build falha

1. Verifique os logs na Vercel
2. Teste localmente: `npm run build`
3. Verifique se todas as variáveis de ambiente estão configuradas

### Rotas não funcionam (404)

O `vercel.json` já está configurado com rewrites para SPA. Se ainda tiver problemas:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Variáveis de ambiente não funcionam

- Certifique-se de usar o prefixo `VITE_` para variáveis do Vite
- Após adicionar variáveis, faça um novo deploy

### Erro de CORS

Configure o CORS no backend para aceitar requisições do domínio da Vercel.

## 📊 Monitoramento

A Vercel fornece:

- ✅ Analytics de performance
- ✅ Logs em tempo real
- ✅ Métricas de uso
- ✅ Alertas de erro

## 🔗 Links Úteis

- [Documentação Vercel](https://vercel.com/docs)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [Vite + Vercel Guide](https://vercel.com/guides/deploying-vite-with-vercel)

## ✅ Checklist de Deploy

- [ ] Conta na Vercel criada
- [ ] Repositório conectado
- [ ] Variáveis de ambiente configuradas
- [ ] Build settings verificadas
- [ ] Primeiro deploy realizado
- [ ] Secrets do GitHub Actions configurados (se usar CI/CD)
- [ ] Domínio customizado configurado (opcional)
- [ ] Testes realizados em produção

