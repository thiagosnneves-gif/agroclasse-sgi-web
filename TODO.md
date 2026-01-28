# Planejamento e Organização - SGI Agroclasse

Este arquivo centraliza tarefas, bugs conhecidos e melhorias planejadas para o projeto.

## 🚀 Melhorias e Organização

- [x] **Padronização de Estrutura**:
    - [x] Movido `src/pages/UnderConstruction.tsx` para `src/app/routes/common/UnderConstruction.tsx`.
    - [x] Removido diretório `src/pages`.
    - [x] Criado diretório `src/components/common` com componentes básicos (`Button`, `Input`, `Card`).
- [x] **Configuração de Path Alias**:
    - [x] Configurado `@` como alias para `src` no `vite.config.ts` e `tsconfig.json`.
- [x] **Tratamento de Erros**:
    - [x] Adicionado `ErrorBoundary` global em `src/components/common/ErrorBoundary.tsx` e implementado em `src/main.tsx`.
- [x] **Estilos (Tailwind CSS)**:
    - [x] Instalado e configurado Tailwind CSS.
    - [x] Atualizado `src/styles/global.css` com as diretivas do Tailwind.
- [ ] **Layout**:
    - Melhorar a responsividade do `AppShell` e `TopNav`.

## 🐛 Bugs Conhecidos / A Investigar

- *(Nenhum bug crítico reportado no momento)*
- Monitorar a integração com Firebase em `src/core/firebase/firebase.ts` para garantir que as variáveis de ambiente estejam configuradas corretamente.

## 📚 Documentação

- Manter o `README.md` atualizado com instruções de instalação e execução.
