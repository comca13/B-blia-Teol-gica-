# Plano de Implementação: Popover e Dicionário de Termos Dogmáticos e Teológicos

## User Review & Confirmação de Diretrizes
> [!IMPORTANT]
> **Decisões Alinhadas com o Usuário:**
> - **Interface & Interação**: Cada termo dogmático formulado nos marcos históricos abrirá um **popover / cartão rápido flutuante** posicionado junto ao clique, permitindo leitura instantânea sem sair do contexto do estudo.
> - **Conteúdo & Estrutura**: Cada verbete conterá:
>   1. *Termo original* (em Grego, Latim, Alemão ou Português com transliteração/etimologia);
>   2. *Tradução literal*;
>   3. *Definição concisa & Sentido teológico no contexto histórico*;
>   4. *Aplicação bíblica ou marco gerador*.
> - **Integração Global**: Todos os termos farão parte do índice de busca global (`GlobalSearchModal` - Cmd+K) e estarão acessíveis tanto nos cards da História da Igreja quanto no vocabulário geral.

---

## 1. Mapeamento & Base de Dados Canônica (`src/data/dogmaticTermsDictionary.ts`)
Criaremos um compêndio tipado cobrindo integralmente os **132 termos dogmáticos** catalogados nos marcos históricos das 5 Eras (Patrística, Medieval, Reforma, Pós-Reforma e Contemporânea):

### Estrutura do Modelo de Dados
```typescript
export interface DogmaticTermExplanation {
  term: string;               // Ex: "Homoousios (Consubstancial)"
  normalizedKey: string;      // Ex: "homoousios"
  originalLanguage?: string;  // Ex: "Grego: ὁμοούσιος"
  literalMeaning: string;     // Ex: "Da mesma substância / essência"
  theologicalSense: string;   // Ex: "Doutrina nicena de que o Filho é coeterno e coigual com o Pai..."
  historicalOrigin: string;   // Ex: "I Concílio de Niceia (325 d.C.)"
  keyScripture?: string;      // Ex: "Jo 10:30; Hb 1:3"
}
```

### Exemplos do Compêndio (Cobrindo as 5 Eras):
1. **Patrística**:
   - `Homoousios`: Grego ὁμοούσιος — "Da mesma substância". O Filho possui a mesma essência divina do Pai.
   - `Anakephalaiosis`: Grego ἀνακεφαλαίωσις — "Recapitulação". Cristo restaura e reconduz a criação caída como novo Adão.
   - `União Hipostática`: Duas naturezas perfeitas (divina e humana) unidas em uma só Pessoa divina (prosōpon/hypostasis).
   - `Theotokos`: Grego Θεοτόκος — "Genitora de Deus / Mãe de Deus". Título cristológico dado a Maria para proteger a divindade de Cristo encarnado.
   - `Perichoresis`: Grego περιχώρησις — "Interpenetração mútua das três Pessoas da Santíssima Trindade sem confusão".
2. **Medieval**:
   - `Filioque`: Latim — "E do Filho". A procedência eterna do Espírito Santo do Pai e do Filho no Credo Ocidental.
   - `Satisfactio Vicaria`: Latim — Reparação infinita à honra e justiça violadas de Deus paga pelo sacrifício vicário de Cristo.
   - `Gratia non tollit naturam, sed perficit`: "A graça não anula a natureza humana, mas a cura e aperfeiçoa".
   - `Fides quaerens intellectum`: "A fé em busca de compreensão racional submissa à revelação divina".
3. **Reforma**:
   - `Sola Scriptura`: A Escritura Sagrada como única regra infalível de fé e prática (*Norma normans non normata*).
   - `Iustitia Imputata`: A justiça alienígena e perfeita de Cristo creditada na conta forense do pecador pela fé.
   - `Anfechtung`: Agonia espiritual existencial de desespero diante da santidade divina que conduz à cruz.
   - `Memorialismo`: A Ceia do Senhor como memorial visível e espiritual da morte vicária de Cristo.
4. **Pós-Reforma & Despertares**:
   - `TULIP`: Os cinco pontos da soteriologia reformada de Dort (Depravação Total, Eleição Incondicional, Expiação Particular, Graça Irresistível, Perseverança dos Santos).
   - `Foedus Gratiae`: O Pacto da Graça estabelecido por Deus em Cristo com os eleitos.
   - `Praxis Pietatis`: O exercício prático da santidade, oração e piedade ativa na vida diária.
   - `Graça Preveniente`: A ação universal do Espírito Santo que liberta a vontade para crer ou resistir ao Evangelho.
5. **Contemporânea**:
   - `Batismo no Espírito Santo`: Revestimento de poder pentecostal com evidência inicial de línguas e capacitação evangelística.
   - `Confessando a Cristo (Barmen)`: O senhorio exclusivo de Jesus Cristo contra as pretensões totalitárias do Estado.
   - `Evangelização Integral`: Proclamação da Palavra de Deus indissoluvelmente unida à responsabilidade social cristã (Pacto de Lausanne).

---

## 2. Componente de UI: Popover Flutuante Interativo (`src/components/DogmaticTermPopover.tsx`)

Criaremos um popover elegante, ancorado ao botão do termo clicado com fechamento inteligente (ao clicar fora, no 'X', ou pressionar `Esc`):
- **Cores & Estilo**: Fundo em `bg-zinc-950/95`, borda refinada em `border-amber-500/40`, sombra profunda `shadow-2xl shadow-black/80`.
- **Cabeçalho**: Nome do termo, badge do idioma original (*Grego*, *Latim*, *Hebraico*, etc.) e botão de fechar.
- **Corpo**:
  - *Tradução Literal*: Em destaque tipográfico dourado/âmbar.
  - *Sentido Teológico & Dogmático*: Texto conciso e rigoroso explicando a formulação e o porquê de ter sido defendida.
  - *Origem Histórica & Passagem Bíblica*: Link clicável que permite abrir o texto sagrado diretamente no leitor bíblico.

---

## 3. Integração nos Cards da História da Igreja (`ChurchHistoryCard.tsx`)

No `ChurchHistoryCard`:
- Transformar os badges de termos dogmáticos em botões interativos que acionam o popover posicionado sobre o termo ou em cartão modal leve.
- Ícone indicador discreto (`Sparkles` ou `HelpCircle`) para o usuário saber que o termo é consultável.
- Ao clicar no termo, o popover abre suavemente com animação `animate-in fade-in zoom-in-95 duration-150`.

---

## 4. Integração na Pesquisa Global (`GlobalSearchModal.tsx`)

- Indexar todos os verbetes de `DOGMATIC_TERMS_DICTIONARY` na busca Omnisearch (`Cmd+K`).
- Ao buscar por "Homoousios", "Filioque", "TULIP", etc., o resultado aparecerá na categoria `Termo Dogmático`, levando o leitor diretamente ao marco correspondente ou abrindo o popover com a explicação.

---

## 5. Plano de Verificação

1. **Validação de Cobertura de Dados**:
   - Script automatizado testando se 100% dos 132 termos encontrados nos 33 eventos possuem verbetes definidos no dicionário.
2. **Teste de UI e Posicionamento**:
   - Clicar em termos de diferentes eras (ex: *Homoousios* em Niceia 325, *Filioque* em 1054, *Anfechtung* em 1517, *TULIP* em 1618, *Pacto de Lausanne* em 1974) e validar a abertura do popover sem falha visual.
3. **Teste de Verificação de Tipagem e Build**:
   - Executar `lint_applet` e `compile_applet` para assegurar build sem erros.
