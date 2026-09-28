# Plano de Implementação: Expansão Tripartite e Integração Bidirecional no Leitor Bíblico

Expandir o comparador teológico com uma perspectiva tripartite (**Igreja Católica Romana**, **Protestantismo Confessional/Histórico** e **Igreja Ortodoxa Oriental**), integrando mapeamento bidirecional de versículos com abertura contextual no `StudyDrawer`, citações literais de documentos primários, pontos de consenso ecumênico e filtros rápidos refinados.

---

## 1. Visão Geral e Decisões de Arquitetura

Com base nas decisões confirmadas:
1. **Perspectiva Tripartite**: Inclusão formal da Ortodoxia Oriental em todos os pilares (com tópicos distintivos: *Filioque*, *Theosis* / Energias Incriadas, Cânon dos 76/78 livros, ausência de Purgatório ocidental / oração pelos defuntos, Eucaristia com *Epiclese* e pão levedado, Veneração de Ícones pós-Nicéia II).
2. **Layout Responsivo Tripartite**:
   - **Desktop ($\ge 1024\text{px}$)**: Grelha paralela de 3 colunas (*Catolicismo*, *Protestantismo*, *Ortodoxia Oriental*), com cromatismo distinto e equilibrado (âmbar/dourado papal, índigo/azul genebrino, e esmeralda/ouro bizantino).
   - **Mobile / Telas menores**: Controle segmentado intuitivo para alternar entre as 3 tradições com persistência de contexto.
3. **Mapeamento Bidirecional no Leitor Bíblico**:
   - **Marcador discreto nos versículos** no `BibleReader` e `ScriptureBody` para perícopes centrais (*Mt 16:18-19*, *Rm 3:28*, *Tg 2:24*, *1 Pe 3:19*, *Jo 6:53*, *1 Tm 2:5*, etc.).
   - Ao clicar no marcador do versículo, o **`StudyDrawer` abre diretamente** na aba de divergência doutrinária, focando a perícope e exibindo a exegese comparada das 3 tradições.
4. **Citações Diretas de Fontes Primárias ("Voz Própria")**:
   - Cada posição inclui trechos canônicos oficiais e datados (CIC, Trento, Vaticano II; Westminster, Augsburgo, 39 Artigos, 1689; São João Damasceno, São Gregório Palamas, Sínodo de Jerusalém 1672).
5. **Seção de Consensos Ecumênicos**:
   - Exposição prévia dos fundamentos comuns compartilhados (Credos Niceno e Apostólico, Cristologia de Calcedônia, Trindade, marcos ecumênicos modernos como a Declaração Conjunta Católico-Luterana de 1999).

---

## 2. Mudanças Propostas

### A. Tipagem e Modelo de Dados (`src/types.ts`)
- Adicionar interface `TheologicalTraditionPosition`:
  - `title: string`
  - `summary: string`
  - `biblicalBases: string[]`
  - `historicalSources: string[]`
  - `directQuotes?: { source: string; text: string; referenceUrl?: string; dateOrEra?: string }[]`
- Atualizar `TheologicalComparisonItem`:
  - `catholicPosition: TheologicalTraditionPosition`
  - `protestantPosition: TheologicalTraditionPosition`
  - `orthodoxPosition: TheologicalTraditionPosition` (nova)
  - `theologicalConsensus?: { title: string; summary: string; sharedCreeds?: string[]; ecumenicalMilestones?: string[] }`
  - `linkedVerses?: { book: string; chapter: number; verse: number; verseEnd?: number; referenceSnippet: string; exegeticalFocus: string }[]`
- Adicionar aba no `StudyDrawerTab`: `'divergence'` ou integrar profundamente na aba `'theology'`.

### B. Expansão dos Dados Teológicos (`src/data/theologicalComparisonData.ts`)
- Enriquecer os tópicos existentes com a perspectiva Ortodoxa Oriental:
  - **Pilar 1 (Autoridade)**: A autoridade da Tradição Santa e dos 7 Concílios Ecumênicos; Rejeição da jurisdição universal e infalibilidade do Bispo de Roma (primazia de honra *primus inter pares*); Cânon bíblico ortodoxo (LXX com Salmo 151, Oração de Manassés, 3 Macabeus).
  - **Pilar 2 (Salvação)**: *Theosis* (deificação do homem pela graça incriada de Deus conforme Gregório Palamas e Atanásio: *"Deus se fez homem para que o homem se tornasse deus"*); Pecado ancestral vs. Culpa original agostiniana; Estado intermediário sem penas de fogo purgatorial temporal.
  - **Pilar 3 (Eclesiologia & Devoção)**: Teologia dos Santos Ícones (Janelas para a eternidade, Concílio de Nicéia II); *Theotokos* (Maria como Mãe de Deus, venerada sem o dogma da Imaculada Conceição nos termos ocidentais de culpa transmitida); Conciliaridade sinodal (*Sobornost*).
  - **Pilar 4 (Liturgia & Sacramentos)**: Os Mistérios (*Sacramenta*); Presença Real na Divina Liturgia com papel central da *Epiclese*; Batismo por tríplice imersão com Crismação imediata em recém-nascidos; Cláusula *Filioque* no Credo.
- Adicionar citações textuais autênticas para os três ramos.
- Adicionar mapeamento refinado por versículo com foco exegético específico.

### C. Componente `TheologicalDivergenceView.tsx`
- Implementar layout tripartite responsivo:
  - Seletor de 3 tradições no mobile com botões destacados.
  - Grade de 3 colunas balanceadas no desktop com tipografia editorial clássica (`Cinzel` e `Lora`).
  - Painel expansível de **"Citações de Fontes Primárias"** com visual de papiro/pergaminho sóbrio.
  - Bloco de **"Consensos Ecumênicos & Fundamento Comum"** no topo ou rodapé de cada tema.
  - Filtro rápido pelos 4 pilares sistemáticos com contador de tópicos.

### D. Integração no `StudyDrawer.tsx`
- Adicionar aba ou seção dedicada para **Divergências Doutrinárias e Exegéticas**.
- Quando o usuário clicar em um marcador de versículo no leitor, o drawer desliza exibindo diretamente o tópico do versículo, o texto do versículo e as 3 interpretações exegéticas históricas.

### E. Marcadores Discretos nos Versículos (`BibleReader.tsx`)
- Detectar versículos com divergências doutrinárias associadas.
- Inserir um ícone sutil e elegante (ex.: balança teológica `Scale` com tooltip informativo) inline ou ao lado do número do versículo em passagens centrais (*Mt 16:18*, *Rm 3:28*, *Tg 2:24*, *Jo 6:53*, *1 Tm 2:5*, etc.).
- Evento de clique dispara a abertura imediata do `StudyDrawer` focado no tópico correspondente.

---

## 3. Plano de Verificação

1. **Compilação e Tipagem**:
   - Executar `compile_applet` para assegurar integridade completa do TypeScript.
   - Executar `lint_applet` para garantir conformidade de código sem imports órfãos.
2. **Teste Funcional do Comparador**:
   - Verificar navegação pelas 3 tradições (Catolicismo, Protestantismo, Ortodoxia Oriental).
   - Verificar alternância entre modo 3 colunas (desktop) e abas (mobile).
   - Testar expansão de citações de fontes primárias e leitura dos consensos.
3. **Teste do Mapeamento de Versículos**:
   - Navegar para Mateus 16:18, Romanos 3:28 e Tiago 2:24 no `BibleReader`.
   - Clicar no marcador teológico do versículo e verificar se o `StudyDrawer` abre corretamente com o tópico focado.
