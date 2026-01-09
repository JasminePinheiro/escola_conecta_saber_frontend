# 🎓 Escola Conecta Saber - Frontend

Aplicação React para gerenciamento de blog de professores, desenvolvida como parte do Tech Challenge da Fase 3.

## 📋 Requisitos Funcionais Implementados

### 1. Página Principal (Lista de Posts)
- ✅ Exibição de lista de todos os posts disponíveis
- ✅ Cada item mostra título, autor e descrição breve
- ✅ Campo de busca para filtrar posts por palavras-chave
- ✅ Busca em tempo real com debounce

### 2. Página de Leitura de Post
- ✅ Exibição do conteúdo completo do post
- ✅ Sistema de comentários implementado
- ✅ Exibição de data de criação
- ✅ Botão para editar (apenas para usuários autenticados)

### 3. Página de Criação de Postagens
- ✅ Formulário completo para criação de posts
- ✅ Campos: título, autor, descrição (opcional) e conteúdo
- ✅ Validação de campos obrigatórios
- ✅ Integração com API REST
- ✅ Proteção por autenticação

### 4. Página de Edição de Postagens
- ✅ Formulário para edição de posts existentes
- ✅ Carregamento automático dos dados atuais
- ✅ Validação de campos
- ✅ Integração com API REST
- ✅ Proteção por autenticação

### 5. Página Administrativa
- ✅ Lista de todas as postagens
- ✅ Opções para editar cada post
- ✅ Opções para excluir cada post
- ✅ Confirmação antes de excluir
- ✅ Proteção por autenticação

### 6. Autenticação e Autorização
- ✅ Sistema de login implementado
- ✅ Proteção de rotas privadas
- ✅ Gerenciamento de sessão com localStorage
- ✅ Interceptores de requisição para adicionar token
- ✅ Redirecionamento automático em caso de token inválido

## 🛠️ Requisitos Técnicos Implementados

### 1. Desenvolvimento em React com TypeScript
- ✅ React 18.2.0 com hooks
- ✅ TypeScript para tipagem estática
- ✅ Componentes funcionais tipados
- ✅ React Router DOM para navegação
- ✅ Hooks personalizados (useAuth)
- ✅ Interfaces e tipos definidos para todas as entidades

### 2. Estilização e Responsividade
- ✅ Styled Components para estilização
- ✅ Design responsivo para mobile e desktop
- ✅ Breakpoints para tablets e smartphones
- ✅ UI moderna e intuitiva

### 3. Integração com Back-End
- ✅ Axios para requisições HTTP
- ✅ Serviços organizados (postService, api)
- ✅ Context API para gerenciamento de estado global
- ✅ Tratamento de erros
- ✅ Loading states

### 4. Documentação
- ✅ README completo com instruções
- ✅ Documentação da arquitetura
- ✅ Guia de setup e uso

## 🚀 Setup Inicial

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn
- TypeScript (instalado automaticamente via npm install)
- Backend API rodando (ver configuração abaixo)

### Instalação

1. Clone o repositório ou navegue até a pasta do projeto:
```bash
cd "Tech challenge - Fase 3 - Jasmine Pinheiro de Souza"
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto:
```env
VITE_API_URL=http://localhost:3001/api
```

**Nota:** O Vite usa o prefixo `VITE_` para variáveis de ambiente. Se estiver usando Create React App, use `REACT_APP_API_URL`.

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist`.

### Preview da Build

```bash
npm run preview
```

## 📁 Arquitetura da Aplicação

```
src/
├── components/          # Componentes reutilizáveis
│   └── Navbar.tsx      # Barra de navegação
├── contexts/           # Context API
│   └── AuthContext.tsx # Context de autenticação
├── pages/              # Páginas da aplicação
│   ├── Home.tsx        # Lista de posts
│   ├── PostDetail.tsx  # Detalhes do post
│   ├── CreatePost.tsx  # Criar novo post
│   ├── EditPost.tsx    # Editar post existente
│   ├── Admin.tsx       # Painel administrativo
│   └── Login.tsx       # Página de login
├── services/           # Serviços de API
│   ├── api.ts          # Configuração do Axios
│   └── postService.ts  # Funções de API para posts
├── styles/             # Estilos Styled Components
│   ├── GlobalStyles.ts # Estilos globais reutilizáveis
│   ├── NavbarStyles.ts # Estilos da navbar
│   ├── HomeStyles.ts   # Estilos da página home
│   ├── PostDetailStyles.ts # Estilos da página de detalhes
│   ├── AdminStyles.ts  # Estilos da página admin
│   ├── LoginStyles.ts  # Estilos da página de login
│   └── FormStyles.ts   # Estilos de formulários
├── types/              # Definições de tipos TypeScript
│   └── index.ts        # Interfaces e tipos
├── App.tsx             # Componente principal com rotas
├── main.tsx            # Ponto de entrada da aplicação
├── vite-env.d.ts       # Tipos do Vite
└── index.css           # Estilos CSS globais
```

## 🔌 Integração com Backend

A aplicação espera que o backend forneça os seguintes endpoints:

### Autenticação
- `POST /api/auth/login` - Login de usuário
  - Body: `{ email: string, password: string }`
  - Response: `{ token: string, user: object }`

### Posts
- `GET /api/posts` - Listar todos os posts
- `GET /api/posts/:id` - Obter post por ID
- `POST /api/posts` - Criar novo post (requer autenticação)
  - Body: `{ title: string, author: string, content: string, description?: string }`
- `PUT /api/posts/:id` - Atualizar post (requer autenticação)
- `DELETE /api/posts/:id` - Excluir post (requer autenticação)
- `GET /api/posts/search?q=termo` - Buscar posts

### Autenticação nas Requisições
Todas as requisições protegidas devem incluir o header:
```
Authorization: Bearer <token>
```

## 🎨 Funcionalidades Principais

### Sistema de Busca
- Busca em tempo real com debounce de 500ms
- Busca por palavras-chave no título e conteúdo
- Feedback visual durante a busca

### Sistema de Comentários
- Adicionar comentários em posts
- Exibir nome do autor e data do comentário
- Interface intuitiva e responsiva

### Proteção de Rotas
- Rotas privadas protegidas por componente `PrivateRoute`
- Redirecionamento automático para login se não autenticado
- Verificação de token no localStorage

### Gerenciamento de Estado
- Context API para autenticação global
- Estado local para formulários e listas
- Loading states e tratamento de erros

## 📱 Responsividade

A aplicação é totalmente responsiva com breakpoints:
- **Desktop**: Layout completo com grid de 3 colunas
- **Tablet**: Layout adaptado com grid de 2 colunas
- **Mobile**: Layout em coluna única, navegação vertical

## 🔒 Segurança

- Tokens armazenados no localStorage
- Interceptores Axios para adicionar token automaticamente
- Validação de autenticação em rotas protegidas
- Tratamento de erros 401 (não autorizado)

## 🧪 Estrutura de Dados (TypeScript)

Todas as interfaces estão definidas em `src/types/index.ts`:

### Post
```typescript
interface Post {
  id: number
  title: string
  author: string
  content: string
  description?: string
  createdAt?: string
  updatedAt?: string
  comments?: Comment[]
}
```

### User
```typescript
interface User {
  id: number
  name: string
  email: string
}
```

### Comment
```typescript
interface Comment {
  id: number
  author: string
  content: string
  createdAt: string
}
```

## 🐛 Troubleshooting

### Erro de CORS
Se encontrar erros de CORS, certifique-se de que o backend está configurado para aceitar requisições do frontend.

### Erro 401 (Não Autorizado)
- Verifique se o token está sendo salvo corretamente
- Confirme que o backend está retornando o token no formato esperado
- Verifique se o token não expirou

### Posts não carregam
- Verifique se a URL da API está correta no arquivo `.env`
- Confirme que o backend está rodando
- Verifique o console do navegador para erros

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview da build de produção

## 💡 TypeScript

A aplicação é totalmente tipada com TypeScript, oferecendo:
- ✅ Type safety em tempo de desenvolvimento
- ✅ Autocomplete melhorado no IDE
- ✅ Detecção precoce de erros
- ✅ Interfaces bem definidas para todas as entidades
- ✅ Tipos para props de componentes
- ✅ Tipos para funções e hooks

## 🚧 Melhorias Futuras

- [ ] Paginação na lista de posts
- [ ] Filtros avançados (por autor, data, etc.)
- [ ] Editor de texto rico (WYSIWYG)
- [ ] Upload de imagens
- [ ] Sistema de tags/categorias
- [ ] Notificações toast
- [ ] Testes unitários e de integração com TypeScript
- [ ] PWA (Progressive Web App)
- [ ] Modo escuro/claro

## 👨‍💻 Desenvolvido por

Jasmine Pinheiro de Souza - Tech Challenge Fase 3

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

