# Plano de Implementação: Apresentação como Tela Pré-Acesso (Landing / Onboarding)

## 1. Objetivo
Remover a página de apresentação das abas do menu de navegação principal (`BottomNav` e `Navbar`) e transformá-la em uma **tela de boas-vindas / apresentação imersiva pré-acesso**, que recepciona o usuário no seu **primeiro acesso antes de entrar no site**.

---

## 2. Mudanças e Arquitetura

### A. Fluxo de Acesso & Estado de Entrada (`App.tsx`)
- Criar a chave de persistência `cronos_canon_has_entered` no `localStorage`.
- No carregamento inicial:
  - Se `localStorage.getItem('cronos_canon_has_entered')` não existir (primeira visita):
    - O aplicativo renderiza a `PresentationView` como uma porta de entrada completa e sem distrações (sem Navbar e sem BottomNav).
  - Se o usuário já tiver acessado anteriormente:
    - O aplicativo entra diretamente na plataforma (`BIBLIA`), sem passar pela apresentação.
- Ao clicar em **"Começar a Ler Agora"**, **"Explorar a Plataforma"** ou ao se conectar com o Google na tela de apresentação:
  - Salva `localStorage.setItem('cronos_canon_has_entered', 'true')`.
  - Transiciona suavemente para o site principal (rota `BIBLIA`).

### B. Remoção do Menu Principal (`BottomNav.tsx` & `Navbar.tsx`)
- **`BottomNav.tsx`**:
  - Remover a aba "Início/Apresentação".
  - Manter as 4 abas centrais e organizadas: **Bíblia**, **Planos**, **História** e **Perfil**.
- **`Navbar.tsx`**:
  - Remover o botão de atalho "Apresentação" do topo.
  - Manter o botão de login com o Google / Avatar com indicador de sincronização na nuvem e o botão de instalar PWA.

### C. Opção de Rever no Perfil (`ProfileView.tsx`)
- Adicionar no rodapé da aba **Perfil** uma ação discreta: *"Rever Apresentação da Plataforma"*, permitindo que o usuário visualize a landing page novamente a qualquer momento se desejar, sem poluir a navegação do dia a dia.

### D. Ajustes em `PresentationView.tsx`
- Reforçar o botão de chamada para ação: *"Entrar na Plataforma & Começar"* com transição imediata para o app.
- Permitir conexão com o Google diretamente na tela de apresentação para que novos usuários já entrem com seu perfil sincronizado.

---

## 3. Plano de Verificação
1. **Linter & Build**: Rodar `lint_applet` e `compile_applet` para assegurar ausência de erros de tipos ou dependências.
2. **Teste de Primeiro Acesso**: Simular estado limpo (sem a flag em `localStorage`) e verificar se a tela de apresentação surge antes do site.
3. **Teste de Transição**: Clicar no botão para entrar e conferir se o site abre na Bíblia com a barra de navegação correta de 4 abas.
4. **Teste de Acessos Subsequentes**: Atualizar a página e constatar que o site vai direto para a Bíblia sem reabrir a apresentação.
