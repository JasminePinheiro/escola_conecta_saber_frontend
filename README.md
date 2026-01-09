# 🎓 Escola Conecta Saber - Frontend

Aplicação React para gerenciamento de blog de professores, desenvolvida como parte do Tech Challenge da Fase 3.

## 📋 Funcionalidades Implementadas

- ✅ Lista de posts com busca e paginação
- ✅ Visualização completa de posts
- ✅ Criação, edição e exclusão de posts (apenas professores e administradores)
- ✅ Painel administrativo para gerenciar posts
- ✅ Sistema de autenticação e autorização por roles
- ✅ Cadastro e login de usuários

## 🛠️ Tecnologias

- **React 18.2.0** + **TypeScript 5.3.2**
- **Vite 5.0.8** - Build tool
- **React Router DOM 6.20.0** - Roteamento
- **Styled Components 6.1.1** - Estilização
- **Axios 1.6.2** - Requisições HTTP
- **Context API** - Gerenciamento de estado

## 🚀 Setup Inicial

### Pré-requisitos

- Node.js 20+ 
- npm ou yarn
- Backend API rodando

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositório>
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz:
```env
VITE_API_URL=https://escola-conecta-saber-latest.onrender.com
```

4. Gere o build da aplicação:
```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`


## 📁 Arquitetura da Aplicação

```
src/
├── components/     # Componentes reutilizáveis (Navbar, Footer)
├── contexts/       # Context API (AuthContext)
├── pages/          # Páginas da aplicação
├── services/       # Serviços de API (api.ts, postService.ts, userService.ts)
├── styles/         # Estilos Styled Components
├── types/          # Definições TypeScript
├── App.tsx         # Componente principal com rotas
└── main.tsx        # Ponto de entrada
```

### Estrutura de Pastas

- **components/**: Componentes reutilizáveis (Navbar, Footer)
- **contexts/**: Gerenciamento de estado global (AuthContext)
- **pages/**: Páginas/rotas (Home, PostDetail, CreatePost, EditPost, Admin, Login, Register, etc.)
- **services/**: Camada de abstração para API (Axios configurado com interceptores)
- **styles/**: Estilos organizados por componente usando Styled Components
- **types/**: Interfaces e tipos TypeScript para type safety

## 🔌 Integração com Backend

### Configuração

A URL da API é configurada via variável de ambiente `VITE_API_URL`.

### Estrutura de Resposta

A aplicação espera respostas no formato:
```typescript
{
  success: boolean
  data: T
  timestamp: string
}
```

### Endpoints Principais

#### Autenticação
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Registro

#### Posts
- `GET /api/posts` - Lista posts (com paginação: `?page=1&limit=10`)
- `GET /api/posts/:id` - Obter post por ID
- `GET /api/posts/search?query=termo` - Buscar posts
- `GET /api/posts/all` - Lista todos (apenas professores)
- `POST /api/posts` - Criar post (requer autenticação)
- `PATCH /api/posts/:id` - Atualizar post (requer autenticação)
- `DELETE /api/posts/:id` - Excluir post (requer autenticação)

### Autenticação

Todas as requisições protegidas incluem automaticamente o header:
```
Authorization: Bearer <token>
```

O token é adicionado automaticamente pelos interceptores do Axios.

## 🛣️ Sistema de Rotas

### Rotas Públicas
- `/` - Home (lista de posts)
- `/post/:id` - Detalhes do post
- `/sobre` - Sobre o projeto
- `/contato` - Contato
- `/login` - Login
- `/register` - Registro

### Rotas Protegidas

**Requerem autenticação:**
- `/profile` - Perfil do usuário

**Requerem autenticação + role professor:**
- `/create-post` - Criar post
- `/edit-post/:id` - Editar post
- `/admin` - Painel administrativo (gerenciar e deletar posts)

## 🔒 Autenticação

### Fluxo

1. Login/Registro → Backend retorna token
2. Token salvo no `localStorage`
3. Token adicionado automaticamente aos headers via interceptores
4. Em caso de 401, sessão é limpa e redireciona para login

### Roles

- **Aluno** (`aluno`): Visualizar posts
- **Professor** (`professor`): Criar, editar e excluir posts

## 📖 Guia de Uso

### Para Usuários

#### Navegação Básica

1. **Visualizar Posts**
   - Acesse a página inicial (`/`) para ver todos os posts disponíveis
   - Use a barra de busca para encontrar posts específicos
   - Clique em um post para ler o conteúdo completo

2. **Criar Conta e Fazer Login**
   - Clique em "Cadastrar" na navbar
   - Preencha nome, email, senha e selecione seu papel (aluno/professor)
   - Após registro, você será automaticamente logado
   - Para fazer login, clique em "Login" e informe email e senha

#### Para Professores

1. **Criar um Post**
   - Faça login como professor
   - Acesse a página gerenciar postagens (`/admin`) para ver todos os posts disponíveis
   - Clique em "Criar Novo Post"
   - Preencha título, conteúdo, tags e status
   - Clique em "Salvar"

2. **Editar um Post**
   - Faça login como professor
   - Acesse a página gerenciar postagens (`/admin`)
   - Clique no botão "Editar"
   - Modifique os campos desejados
   - Salve as alterações

3. **Excluir um Post**
   - Faça login como professor
   - Acesse a página gerenciar postagens (`/admin`)
   - Clique no botão "Excluir"
   - Confirme a exclusão

## 📊 Estrutura de Dados

Interfaces principais definidas em `src/types/index.ts`:

```typescript
interface User {
  id: string
  name: string
  email: string
  role: 'aluno' | 'professor'
}

interface Post {
  id: string | number
  title: string
  author: string
  content: string
  description?: string
  createdAt?: string
  updatedAt?: string
  comments?: Comment[]
}

interface Comment {
  id: number
  author: string
  content: string
  createdAt: string
}
```

## 🚀 Deploy

### Vercel

O deploy é realizado automaticamente via **GitHub Actions**.

1. Configure o **token da Vercel** como secret no GitHub Actions
2. O pipeline realiza o build e o deploy automaticamente na Vercel

### Docker

```bash
docker build -t escola-conecta-saber-frontend .
docker run -p 3000:3000 -e VITE_API_URL=https://api.example.com escola-conecta-saber-frontend
```


## 👨‍💻 Desenvolvido por

**Jasmine Pinheiro de Souza**  
Tech Challenge Fase 3

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.