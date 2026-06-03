# B Engenharia — Site Institucional

Projeto de site institucional (SPA) da **B Engenharia**, desenvolvido com **React + Vite**, estilização com **Tailwind CSS** e rotas com **react-router-dom**. O layout utiliza componentes em UI (Radix) e animações com **framer-motion**.

## Funcionalidades
- Página inicial com seções de apresentação e CTA
- Páginas:
  - Serviços
  - Portfólio (projetos)
  - Sobre
  - Diferenciais
  - Contato (formulário)
- Atualização de títulos/descrições via **react-helmet**
- Componentes reutilizáveis em `components/`

## Tecnologias
- React 18
- Vite
- Tailwind CSS
- react-router-dom
- framer-motion
- sonner (toasts)
- Radix UI (componentes)

## Pré-requisitos
- Node.js (recomendado versão LTS)
- npm

## Como rodar localmente
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse no navegador:
   - `http://localhost:3000`

## Como gerar build
```bash
npm run build
```
O resultado será gerado na pasta `dist/`.

## Scripts
- `npm run dev` — inicia em modo desenvolvimento
- `npm run build` — gera build para produção
- `npm run start` — preview do build (Vite preview)
- `npm run lint` — executa ESLint (quiet)
- `npm run lint:warn` — executa ESLint

## Estrutura do projeto
- `src/` — código da aplicação (entrada e componentes)
  - `src/app.jsx` — rotas da aplicação
  - `src/main.jsx` — render do React
  - `src/components/` — componentes principais (Header, Footer, etc.)
  - `src/index.css` — estilos globais
- `pages/` — páginas do site (ex.: `HomePage.jsx`, `ServiçosPage.jsx`, etc.)
- `ui/` — componentes UI (Radix/shadcn-style) reaproveitáveis
- `hooks/` — hooks auxiliares
- `lib/` — utilitários

## Rotas principais
- `/` — Home
- `/servicos` — Serviços
- `/portfolio` — Portfólio
- `/sobre` — Sobre
- `/diferenciais` — Diferenciais
- `/contato` — Contato

## Observações
- As páginas são carregadas via client-side routing (SPA).
- O formulário de contato atualmente simula envio (sem integração real com backend), exibindo feedback via toast.

---
Criado para facilitar execução local, desenvolvimento e publicação do site institucional da B Engenharia.
