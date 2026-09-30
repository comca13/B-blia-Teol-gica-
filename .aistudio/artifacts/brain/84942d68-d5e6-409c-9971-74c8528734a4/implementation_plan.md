# Plano de Implementação: Explicações Detalhadas para Conexões Bíblicas no Contexto Histórico e Global

## User Review & Confirmação de Diretrizes
> [!IMPORTANT]
> **Decisões Alinhadas com o Usuário:**
> 1. **Visualização Interativa**: Cada conexão bíblica será exibida como um **cartão expansível interativo** com explicação histórica e teológica direta, sem necessidade de navegar para outra tela para entender o porquê daquela referência.
> 2. **Leitura Integrada nas Escrituras**: Ao clicar na conexão ou no botão dedicado do cartão, o aplicativo abrirá imediatamente o capítulo/versículo correspondente no **Leitor Bíblico**.
> 3. **Seções Contempladas**:
>    - **Segundo Templo** (`GlobalContextView` e aba secundária de História): as 4 grandes fases (Persa Tardia, Helenística, Hasmoneia e Romana).
>    - **Linha do Tempo das Eras Bíblicas** (`HistoryView`): todos os 10 períodos bíblicos históricos (Criação/Patriarcas, Êxodo, Conquista/Juízes, Monarquia Unida, Reino Dividido, Exílio Babilônico, Restauração Pós-Exílica, Segundo Templo, Vida de Cristo e Igreja Primitiva).

---

## 1. Modelo de Dados e Enriquecimento das Conexões (`src/types.ts` & `src/data/`)

### Tipagem Estruturada (`src/types.ts`)
```typescript
export interface DetailedBiblicalConnection {
  id: string;
  referenceDisplay: string;    // Ex: "Últimos oráculos de Malaquias"
  scriptureReference: string;  // Ex: "Malaquias 3-4" (usado para navegação direta na Bíblia)
  title: string;               // Ex: "O Encerramento da Voz Profética no AT"
  explanation: string;         // Explicação histórica do porquê e como o texto se conecta ao período
  historicalRelevance: string; // O papel deste texto para a teologia do povo judaico da época
}
```

### Enriquecimento das Fases do Segundo Templo (`src/data/secondTempleHistoricalData.ts`)
Substituir a lista simples de strings por dados aprofundados para cada conexão:
1. **Época Persa Tardia (c. 430 – 332 a.C.)**:
   - `Malaquias 3-4`: O fechamento do cânon profético, a denúncia contra o sacerdócio corrupto e a promessa do envio de Elias (cumprida em João Batista).
   - `Esdras e Neemias`: A reconstrução dos muros, a leitura pública da Torá sob Esdras e o isolamento dos samaritanos no Monte Gerizim.
   - `Daniel 8:1-4`: A profecia da transição dos impérios — o carneiro de dois chifres representando o Império Medo-Persa antes de ser derrubado pelo bode grego.
2. **Conquista de Alexandre e Helenização (332 – 167 a.C.)**:
   - `Daniel 8 e 11`: O cumprimento impressionante da profecia do "chifre notável" (Alexandre, o Grande) e a divisão do império em quatro dinastias (diádocos).
   - `1 e 2 Macabeus`: Contexto histórico da profanação do altar por Antíoco IV Epifânio e a resistência armada dos piedosos (Hasidim).
   - `Mateus 24:15`: Jesus citando a "abominação da desolação" de Daniel como protótipo e alerta para a invasão e destruição de Jerusalém em 70 d.C.
3. **Revolta dos Macabeus e Dinastia Hasmoneia (167 – 63 a.C.)**:
   - `João 10:22`: A presença de Jesus no Templo durante a Festa da Dedicação (Hanukkah), memorial da purificação do santuário pelos macabeus em 164 a.C.
   - `Mateus 3:7`: O surgimento e consolidação das seitas religiosas (Fariseus separatistas e Saduceus sacerdotal-aristocráticos) originadas durante a dinastia hasmoneia.
4. **Dominação Romana e Herodes (63 a.C. – 4 a.C.)**:
   - `Lucas 2:1-2`: O censo imperial decretado por César Augusto sob o governador Quirino, cumprindo providencialmente Miqueias 5:2 em Belém.
   - `Mateus 2:1-18`: A loucura paranoica de Herodes, o Grande, ao ordenar o massacre das crianças em Belém para eliminar o recém-nascido "Rei dos Judeus".

### Enriquecimento da Linha do Tempo das Eras Bíblicas (`src/data/theologicalPeriods.ts`)
Adicionar conexões bíblicas detalhadas e explicadas em cada uma das 10 grandes eras bíblicas (Gênesis ao Apocalipse), explicando as passagens-chave em seu contexto geopolítico mundial.

---

## 2. Componente de UI: Cartão Expansível de Conexão Bíblica (`BiblicalConnectionCard.tsx`)

Criar o componente reutilizável `src/components/BiblicalConnectionCard.tsx`:
- **Estado Recolhido**:
  - Badge em destaque com ícone do Livro Sagrado (`BookOpen`), referência da passagem bíblica e chevron indicador de expansão.
  - Botão de leitura direta ("Ler na Bíblia ➔").
- **Estado Expandido**:
  - Título do evento bíblico-histórico correlato.
  - Explicação contextual clara e rigorosa de 1-2 parágrafos.
  - Destaque para a *Relevância Histórico-Teológica*.
  - Botão interativo proeminente: `Abrir [Referência] no Leitor Bíblico`.

---

## 3. Integração nos Módulos do Aplicativo

1. **`GlobalContextView.tsx` (Segundo Templo)**:
   - Substituir a lista estática de botões simples pelo novo grid de `BiblicalConnectionCard`.
2. **`HistoryView.tsx` (Sub-aba Segundo Templo & Linha do Tempo Bíblica)**:
   - Atualizar a exibição das fases do Segundo Templo e das Eras Bíblicas para renderizar as conexões enriquecidas com seus cartões expansíveis e navegação integrada.

---

## 4. Plano de Verificação

1. **Teste de UI e Expansão**:
   - Abrir o módulo Contexto Global -> Segundo Templo e verificar se cada cartão de conexão expande suavemente.
   - Conferir se a explicação teológica e histórica está legível, sem cortes e com contraste perfeito no tema escuro.
2. **Teste de Navegação Bíblica**:
   - Clicar no botão "Ler na Bíblia" de uma conexão (ex.: *João 10:22*, *Daniel 8*, *Malaquias 3-4*) e certificar que o Leitor Bíblico abre o livro e capítulo exato.
3. **Validação de Build**:
   - Executar `lint_applet` e `compile_applet` garantindo integridade de tipos e ausência de erros.
