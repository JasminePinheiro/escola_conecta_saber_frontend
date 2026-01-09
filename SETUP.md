# Guia de Configuração Rápida

## Passo a Passo para Iniciar o Projeto

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
VITE_API_URL=http://localhost:3001/api
```

**Importante:** 
- Se você estiver usando Vite (padrão deste projeto), use o prefixo `VITE_`
- Se estiver usando Create React App, use o prefixo `REACT_APP_` e altere o código em `src/services/api.js`

### 3. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### 4. Verificar Backend

Certifique-se de que o backend está rodando e acessível na URL configurada no `.env`.

## Estrutura de Endpoints Esperados

O backend deve fornecer os seguintes endpoints:

### Autenticação
- `POST /api/auth/login`
  - Body: `{ email: string, password: string }`
  - Response: `{ token: string, user: { id, name, email } }`

### Posts
- `GET /api/posts` - Lista todos os posts
- `GET /api/posts/:id` - Obtém um post específico
- `POST /api/posts` - Cria um novo post (requer autenticação)
- `PUT /api/posts/:id` - Atualiza um post (requer autenticação)
- `DELETE /api/posts/:id` - Exclui um post (requer autenticação)
- `GET /api/posts/search?q=termo` - Busca posts

## Credenciais de Teste

Para testar o login, você precisará de credenciais válidas do backend. Consulte a documentação do backend para obter as credenciais de teste.

## Solução de Problemas

### Erro: "Cannot find module"
Execute `npm install` novamente.

### Erro: "Network Error" ou "CORS"
- Verifique se o backend está rodando
- Verifique a URL no arquivo `.env`
- Confirme que o backend permite requisições do frontend (CORS)

### Página em branco
- Abra o console do navegador (F12) para ver erros
- Verifique se todas as dependências foram instaladas
- Confirme que o servidor de desenvolvimento está rodando

