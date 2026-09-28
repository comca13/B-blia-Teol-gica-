# Plano de Otimização e Performance - Bíblia Teológica

## User Intent Summary
O usuário solicitou uma análise completa do código para aprimorar o desempenho, tornando a aplicação muito mais rápida, leve e responsiva. Conforme alinhado nas preferências:
1. **Otimização Completa de Carregamento e Renderização**: Reduzir drasticamente o tempo de carregamento inicial (First Contentful Paint / Time to Interactive), a pegada de memória e evitar re-renderizações desnecessárias.
2. **Divisão de Código com React.lazy e Suspense**: Separar as telas pesadas (`HistoryView`, `ReformationView`, `CatholicTraditionView`, `PlansView`, `ProfileView`, além de modais históricos e teológicos) em pacotes sob demanda.
3. **Navegação Inferior Mobile Fluida e Otimizada**: Manter os 6 botões separados na barra inferior de forma compacta e responsiva para telas pequenas, sem sobreposição nem cortes.

---

## Análise Diagnóstica Atual
- **Tamanho do Bundle Inicial**: Atualmente, `npm run build` gera um único arquivo monolítico `index-*.js` com **1.89 MB** (minificado) e mais de 160 KB de CSS, disparando avisos do Vite (`chunks larger than 500 kB`).
- **Causa Raiz**:
  - Todas as grandes bibliotecas de dados (`readings_*.ts`, `theologicalComparisonData.ts`, `churchHistoryData.ts`, `catholicTraditionData.ts`, `reformationHistoryData.ts`, `confessionalDocumentsData.ts`) são importadas estaticamente no bundle raiz.
  - As 6 rotas principais (`BibleView`, `PlansView`, `HistoryView`, `ReformationView`, `CatholicTraditionView`, `ProfileView`) e mais de 10 modais de estudo teológico são carregados simultaneamente logo no primeiro instante da aplicação.
  - Re-renderizações no leitor de texto e nas listas de versículos quando o usuário interage com ferramentas de busca ou configurações visuais.

---

## Proposed Changes

### 1. Configuração de Bundling e Manual Chunks (`vite.config.ts`)
- Implementar `rollupOptions.output.manualChunks` para separar:
  - `vendor-react`: pacotes essenciais do React e ReactDOM.
  - `vendor-icons`: ícones `lucide-react`.
  - `data-readings`: leituras diárias (dias 1 a 365).
  - `data-theology`: dados de divergências doutrinárias e documentos confessionais.
  - `data-history`: história da igreja, tradição católica e reforma protestante.
- Habilitar `chunkSizeWarningLimit` adequado e minificação otimizada.

### 2. Code-Splitting e Carregamento Sob Demanda (`src/App.tsx`)
- Converter as views que não são necessárias no primeiro frame (`PlansView`, `HistoryView`, `ReformationView`, `CatholicTraditionView`, `ProfileView`) para `React.lazy(() => import(...))`.
- Criar um componente de fallback elegante (`ViewLoadingSkeleton.tsx`) com tema escuro de pedra/âmbar que previne saltos visuais de layout (CLS).
- Envolver a renderização dinâmica em `<Suspense fallback={<ViewLoadingSkeleton />}>`.

### 3. Otimização de Modais Pesados em `src/views/HistoryView.tsx` e `src/components/StudyDrawer.tsx`
- Carregar sob demanda os modais de leitura extensa (`DocumentReaderModal`, `TheologicalTimelineView`, `TheologicalGlossaryView`) para que só ocupem memória quando abertos pelo usuário.
- Utilizar `React.memo` nos cards de listas densas (`DocumentCard`, `TheologicalSystemsCard`) para evitar re-renderizações em cascata durante a digitação de buscas.

### 4. Otimização de Performance no Leitor Bíblico (`src/components/BibleReader.tsx`)
- Memorizar de forma pura com `useMemo` os marcadores de divergência teológica (`verseMarkersMap`) indexados por chave única (`${book}:${chapter}:${verse}`), eliminando buscas O(N) para cada versículo renderizado.
- Evitar recálculos do seletor de livros através de debounce ou memoização da busca textual.
- Garantir que a troca de capítulos e temas aconteça de forma instantânea sem travamentos no thread principal do navegador.

### 5. Ajuste Responsivo da Barra Inferior (`src/components/BottomNav.tsx`)
- Adaptar o layout dos 6 botões (`Bíblia`, `Planos`, `História`, `Reforma`, `Católico`, `Perfil`) para telas móveis estreitas (320px–400px):
  - Reduzir espaçamentos laterais para `p-1 sm:p-1.5`, tamanho de ícones otimizado (`w-4 h-4`) e tipografia responsiva.
  - Garantir rótulos legíveis ou estados compactos fluidos com `aria-label` para acessibilidade completa.

---

## User Action Items
Nenhuma ação manual externa é necessária. Todas as otimizações serão implementadas nos arquivos do projeto e verificadas via compilação e medição de tamanho do bundle.

---

## Verification Plan

### Testes Automatizados
- Executar `npm run build` e inspecionar a geração dos chunks:
  - Verificar se o chunk principal diminuiu drasticamente (de 1.89 MB para fragmentos menores e bem distribuídos).
  - Verificar se os avisos de chunks excessivamente grandes foram eliminados ou mitigados.
- Executar `npm run lint` para validar tipos TypeScript e ausência de erros de importação lazy ou sintaxe.
- Executar `compile_applet` para certificar integridade estrutural.

### Verificação Funcional
- Navegar entre as abas: Bíblia, Planos, História, Reforma, Católico e Perfil, assegurando carregamento suave e sem erros de Suspense.
- Abrir gavetas e modais de estudo para confirmar que continuam respondendo instantaneamente.
- Testar o comportamento responsivo da barra inferior em dimensões de smartphone.
