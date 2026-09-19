import { HistoricalDocument, DocumentCategory } from '../types';

export const DOCUMENT_CATEGORY_META: Record<DocumentCategory, { label: string; icon: string; description: string; color: string }> = {
  CREDO_ECUMENICO: {
    label: 'Credos Ecumênicos',
    icon: 'Scroll',
    description: 'Declarações universais da Igreja Antiga que definiram a Trindade e a Cristologia contra as heresias.',
    color: 'from-amber-500/20 to-amber-950/40 text-amber-300 border-amber-500/30'
  },
  IGREJA_PRIMITIVA: {
    label: 'Igreja Primitiva & Pais Apostólicos',
    icon: 'BookOpen',
    description: 'Textos catequéticos e testemunhos práticos dos primeiros séculos pós-apostólicos da era cristã.',
    color: 'from-emerald-500/20 to-emerald-950/40 text-emerald-300 border-emerald-500/30'
  },
  CONFISSAO_REFORMADA: {
    label: 'Confissões da Reforma',
    icon: 'Landmark',
    description: 'Sistemas dogmáticos abrangentes que estruturaram a doutrina das igrejas bíblicas e reformadas.',
    color: 'from-blue-500/20 to-blue-950/40 text-blue-300 border-blue-500/30'
  },
  CATECISMO: {
    label: 'Catecismos Históricos',
    icon: 'Users',
    description: 'Manuais pedagógicos em forma de perguntas e respostas para a instrução na piedade e sã doutrina.',
    color: 'from-purple-500/20 to-purple-950/40 text-purple-300 border-purple-500/30'
  },
  DECLARACAO_MODERNA: {
    label: 'Declarações Modernas',
    icon: 'Scale',
    description: 'Respostas teológicas contemporâneas em defesa da inerrância da Escritura e da proclamação do Evangelho.',
    color: 'from-rose-500/20 to-rose-950/40 text-rose-300 border-rose-500/30'
  }
};

export const confessionalDocumentsData: HistoricalDocument[] = [
  {
    id: 'credo-apostolico',
    title: 'O Credo Apostólico (Symbolum Apostolicum)',
    year: 'c. 140 - séc. VII d.C.',
    category: 'CREDO_ECUMENICO',
    historicalContext: 
      'Desenvolvido a partir da "Regra de Fé" (Regula Fidei) e dos antigos credos batismais da igreja de Roma (o Symbolum Romanum, c. 140 d.C.). Servia como solene profissão de fé no batismo dos novos convertidos, estruturando a confissão cristã de forma estritamente trinitária (Pai, Filho e Espírito Santo) e garantindo uma defesa contra o gnosticismo e o docetismo, que negavam a verdadeira humanidade e a encarnação do Filho de Deus.',
    keyTheologicalThemes: ['Trindade', 'Encarnação', 'Ressurreição da Carne', 'Igreja Santa e Universal', 'Remissão dos Pecados'],
    content: `### O Credo Apostólico
*Profissão Clássica de Fé da Igreja Ocidental*

Creio em Deus Pai, Todo-Poderoso,  
Criador do céu e da terra.

E em Jesus Cristo, Seu único Filho, nosso Senhor,  
o qual foi concebido por obra do Espírito Santo,  
nasceu da virgem Maria;  
padeceu sob o poder de Pôncio Pilatos,  
foi crucificado, morto e sepultado;  
desceu à mansão dos mortos;  
ao terceiro dia ressuscitou de entre os mortos;  
subiu aos céus,  
está assentado à direita de Deus Pai Todo-Poderoso,  
de onde há de vir a julgar os vivos e os mortos.

Creio no Espírito Santo;  
na santa Igreja universal;  
na comunhão dos santos;  
na remissão dos pecados;  
na ressurreição do corpo;  
e na vida eterna.

Amém.`
  },
  {
    id: 'credo-niceno-constantinopolitano',
    title: 'O Credo Niceno-Constantinopolitano',
    year: '381 d.C. (Niceia 325 / Constantinopla 381)',
    category: 'CREDO_ECUMENICO',
    historicalContext:
      'Formulado no I Concílio Ecumênico de Niceia (325 d.C.) sob a liderança teológica de Atanásio de Alexandria para refutar a heresia de Ário (que afirmava ser o Filho uma criatura excelsa, mas não Deus em Si). Foi expandido no Concílio de Constantinopla (381 d.C.) para afirmar a consubstancialidade (homoousios) e divindade plena do Espírito Santo contra os pneumatômacos (que negavam a divindade da Terceira Pessoa). Permanece como o critério universal máximo da ortodoxia cristã trinitária.',
    keyTheologicalThemes: ['Homoousios (Consubstancial)', 'Deus Verdadeiro de Deus Verdadeiro', 'Divindade do Espírito Santo', 'Um Só Batismo'],
    content: `### O Credo Niceno-Constantinopolitano (381 d.C.)

Creio em um só Deus, Pai Todo-Poderoso,  
Criador do céu e da terra,  
de todas as coisas visíveis e invisíveis.

E em um só Senhor, Jesus Cristo,  
Filho Unigênito de Deus,  
gerado do Pai antes de todos os séculos:  
Deus de Deus, Luz da Luz,  
Deus verdadeiro de Deus verdadeiro,  
gerado, não criado,  
consubstancial (homoousios) ao Pai;  
por Ele todas as coisas foram feitas.

O qual, por nós homens e para nossa salvação,  
desceu dos céus,  
e Se encarnou pelo Espírito Santo, no seio da Virgem Maria,  
e Se fez homem.  
Também por nós foi crucificado sob Pôncio Pilatos;  
padeceu e foi sepultado;  
e ressuscitou ao terceiro dia, conforme as Escrituras;  
e subiu aos céus, onde está assentado à direita do Pai;  
e há de vir de novo, com glória,  
a julgar os vivos e os mortos;  
e o Seu reino não terá fim.

E no Espírito Santo,  
Senhor e Doador da Vida,  
que procede do Pai [e do Filho],  
que com o Pai e o Filho é juntamente adorado e glorificado;  
que falou pelos profetas.

Creio na Igreja una, santa, católica e apostólica.  
Confesso um só batismo para a remissão dos pecados;  
e espero a ressurreição dos mortos,  
e a vida do mundo vindouro.

Amém.`
  },
  {
    id: 'definicao-de-calcedonia',
    title: 'A Definição de Calcedônia (Definitio Fidei Chalcedonensis)',
    year: '451 d.C.',
    category: 'CREDO_ECUMENICO',
    historicalContext:
      'Promulgada no IV Concílio Ecumênico reunido na cidade de Calcedônia (451 d.C.) para pôr fim a duas heresias cristológicas opostas e destrutivas: o Nestorianismo (que separava Cristo em duas pessoas e dois sujeitos distintos) e o Monofisismo de Eutiques (que mesclava as naturezas, alegando que a divindade absorvera a humanidade de Jesus). A Definição de Calcedônia fixou os quatro famosos termos negativos da União Hipostática: Cristo subsiste em duas naturezas "sem confusão, sem mudança, sem divisão e sem separação".',
    keyTheologicalThemes: ['Cristologia', 'União Hipostática', 'Duas Naturezas', 'Sem Confusão e Sem Divisão', 'Perfeição Divina e Humana'],
    content: `### A Definição de Calcedônia (451 d.C.)
*O Dogma da União Hipostática das Duas Naturezas de Cristo*

Fiéis aos santos Padres, todos nós, a uma só voz, ensinamos que se há de confessar um só e mesmo Filho, nosso Senhor Jesus Cristo:

Perfeito na divindade e perfeito na humanidade;  
verdadeiramente Deus e verdadeiramente homem, composto de alma racional e de corpo;  
consubstancial (homoousios) com o Pai segundo a divindade,  
e consubstancial conosco segundo a humanidade;  
em tudo semelhante a nós, exceto no pecado;  
gerado do Pai antes de todos os séculos segundo a divindade,  
e nestes últimos dias, por nós e por nossa salvação, nascido da Virgem Maria, Mãe de Deus (Theotókos), segundo a humanidade.

Um só e mesmo Cristo, Filho, Senhor, Unigênito,  
reconhecido em **duas naturezas**:

1. **Sem confusão** (*inconfuse / asynchetos*);
2. **Sem mudança** (*immutabiliter / atreptos*);
3. **Sem divisão** (*indivise / adiairetos*);
4. **Sem separação** (*inseparabiliter / achoristos*);

Nunca sendo retirada a distinção das naturezas por causa da união, mas, antes, preservada a propriedade de cada uma das naturezas, que concorrem para **uma só pessoa (prosopon) e uma só subsistência (hypostasis)**;

Não dividido ou partido em duas pessoas, mas um só e mesmo Filho, Unigênito, Deus Verbo, o Senhor Jesus Cristo;  
como outrora os profetas ensinaram a Seu respeito,  
como o próprio Jesus Cristo nos instruiu,  
e como no-lo transmitiu o Símbolo dos santos Padres.

Amém.`
  },
  {
    id: 'didaque',
    title: 'A Didaquê (O Ensino dos Doze Apóstolos)',
    year: 'c. 70 - 100 d.C.',
    category: 'IGREJA_PRIMITIVA',
    historicalContext:
      'A Didaquê ("O Ensino dos Doze Apóstolos aos Gentios") é o mais antigo documento extrabíblico da era cristã, redescoberto em 1873 no Códice Constantinopolitano pelo metropolita Philotheos Bryennios. Escrita entre o final do século I e início do século II no contexto das comunidades judeu-cristãs da Síria/Palestina, preserva o mais primitivo testemunho da prática do Batismo em nome da Trindade (em água corrente), da liturgia da Ceia do Senhor (Eucaristia), do jejum cristão e da instrução ética basilar conhecida como "Os Dois Caminhos: o Caminho da Vida e o Caminho da Morte".',
    keyTheologicalThemes: ['Os Dois Caminhos', 'Batismo Trinitário', 'Liturgia Eucarística', 'Ética Cristã Primitiva', 'Vigilância Escatológica'],
    content: `### A Didaquê: Instruções da Igreja Primitiva
*(Doutrina dos Doze Apóstolos aos Povos)*

---

#### OS DOIS CAMINHOS (Capítulos 1 e 2)

**1.** Existem dois caminhos: um da vida e outro da morte; e há uma grande diferença entre os dois caminhos.

O **caminho da vida** é este: primeiro, amarás a Deus que te criou; segundo, ao teu próximo como a ti mesmo; e tudo o que não queres que te façam, não o faças tu a outrem.

Eis o ensino destas palavras: abençoai aos que vos amaldiçoam, orai pelos vossos inimigos e jejuai por aqueles que vos perseguem. Pois que graça há se amais os que vos amam? Não fazem os gentios o mesmo? Vós, porém, amai os que vos odeiam, e não tereis inimigos.

**2.** O segundo mandamento do ensinamento: Não matarás; não cometerás adultério; não corromperás rapazes; não fornicarás; não furtarás; não praticarás magia nem feitiçaria; **não assassinarás o feto pelo aborto nem matarás o recém-nascido**. Não cobiçarás os bens do teu próximo; não perjurarás; não prestarás falso testemunho; não falarás mal de ninguém nem guardarás rancor.

---

#### O BATISMO CRISTÃO (Capítulo 7)

No que diz respeito ao batismo, batizai deste modo:  
Havendo primeiro recitado todas estas coisas, **batizai em nome do Pai, e do Filho, e do Espírito Santo**, em água corrente (*água viva*).

Se, porém, não tiveres água viva, batiza em outra água; e se não puderes fazê-lo em água fria, faze-o em água morna.  
E se não tiveres nem uma nem outra, derrama água três vezes sobre a cabeça, em nome do Pai, e do Filho, e do Espírito Santo.

E antes do batismo, que o batizador e o batizando jejuem, bem como quaisquer outros que puderem; exorta ao batizando a jejuar um ou dois dias antes.

---

#### A CEIA DO SENHOR / EUCARISTIA (Capítulo 9 e 10)

No que tange à Eucaristia, celebrai-a deste modo.  
Primeiro sobre o cálice:

> *"Damos-te graças, Pai nosso, pela santa videira de Davi, Teu servo, a qual nos deste a conhecer por Jesus, Teu Servo. A Ti seja a glória para sempre."*

E sobre o pão partido:

> *"Damos-te graças, Pai nosso, pela vida e conhecimento que nos revelaste por meio de Jesus, Teu Servo. A Ti seja a glória para sempre.*  
> *Assim como este pão partido estava disperso sobre os montes e, sendo recolhido, tornou-se um, assim também seja congregada a Tua Igreja desde os confins da terra no Teu Reino. Porque Tua é a glória e o poder por Jesus Cristo, pelos séculos dos séculos."*

Ninguém, porém, coma ou beba da vossa Eucaristia, senão aqueles que foram **batizados em nome do Senhor**; pois sobre isso também disse o Senhor: *"Não deis o que é santo aos cães"*.

---

#### A VIGILÂNCIA ESCATOLÓGICA (Capítulo 16)

Vigiai sobre a vossa vida. Não se apaguem as vossas lâmpadas, nem fiquem descingidos os vossos lombos, mas estai preparados, pois não sabeis a hora em que o nosso Senhor virá.  
Nos últimos dias multiplicar-se-ão os falsos profetas e os corruptores, as ovelhas se transformarão em lobos e o amor se converterá em ódio.

Então aparecerá o sedutor do mundo como se fosse o Filho de Deus, e operará sinais e prodígios, e a terra será entregue nas suas mãos.  
Então toda a criação humana passará pela prova de fogo, e muitos se escandalizarão e perecerão; mas **aqueles que perseverarem na sua fé serão salvos** pelo próprio que foi amaldiçoado.

E então aparecerão os sinais da verdade: primeiro, o sinal de abertura no céu; depois, o som da trombeta; e o terceiro, a ressurreição dos mortos.  
Então o mundo verá o Senhor vindo sobre as nuvens do céu!`
  },
  {
    id: 'confissao-westminster-cap1',
    title: 'Confissão de Fé de Westminster (1646) - Capítulo I: Da Sagrada Escritura',
    year: '1646 d.C.',
    category: 'CONFISSAO_REFORMADA',
    historicalContext:
      'Produzida pela histórica Assembleia de Westminster (1643-1649) reunida na Abadia de Westminster por decreto do Parlamento Britânico durante a Guerra Civil Inglesa. Reuniu 121 teólogos puritanos (os "Divines") para redigir o mais robusto e maduro padrão doutrinário do protestantismo reformado de expressão inglesa. O Capítulo I sobre as Sagradas Escrituras é universalmente aclamado como o mais sublime e equilibrado tratado exegético-dogmático sobre a Revelação, a Inspiração, a Auto-autenticação e a Suficiência da Palavra de Deus.',
    keyTheologicalThemes: ['Sola Scriptura', 'Cânon de 66 Livros', 'Testemunho Interno do Espírito', 'Perspicuidade da Bíblia', 'Analogia da Fé'],
    content: `### Confissão de Fé de Westminster (1646)
## CAPÍTULO I: DA SAGRADA ESCRITURA

---

#### Artigo I (A Necessidade da Revelação Escrita)
Ainda que a luz da natureza e as obras da criação e da providência manifestem de tal modo a bondade, a sabedoria e o poder de Deus, que os homens ficam inescusáveis, contudo não são suficientes para dar aquele conhecimento de Deus e de Sua vontade que é necessário para a salvação; por isso agradou ao Senhor, em diversos tempos e de diferentes modos, revelar-Se e declarar à Sua Igreja aquela Sua vontade; e depois, para melhor preservação e propagação da verdade, e para mais seguro estabelecimento e conforto da Igreja contra a corrupção da carne e a malícia de Satanás e do mundo, **foi servido fazê-la escrever toda**. O que torna a Sagrada Escritura mui necessária, tendo cessado aqueles modos anteriores de Deus revelar a Sua vontade ao Seu povo.

---

#### Artigo II (O Cânon Bíblico dos 66 Livros)
Sob o título de Sagrada Escritura, ou a Palavra de Deus escrita, incluem-se todos os livros do Antigo e do Novo Testamento, que são os seguintes, todos os quais foram dados por inspiração de Deus para serem a regra de fé e de prática:

* **O Antigo Testamento (39 Livros):** Gênesis, Êxodo, Levítico, Números, Deuteronômio, Josué, Juízes, Rute, 1 e 2 Samuel, 1 e 2 Reis, 1 e 2 Crônicas, Esdras, Neemias, Ester, Jó, Salmos, Provérbios, Eclesiastes, Cantares de Salomão, Isaías, Jeremias, Lamentações, Ezequiel, Daniel, Oseias, Joel, Amós, Obadias, Jonas, Miqueias, Naum, Habacuque, Sofonias, Ageu, Zacarias e Malaquias.
* **O Novo Testamento (27 Livros):** Mateus, Marcos, Lucas, João, Atos dos Apóstolos, Romanos, 1 e 2 Coríntios, Gálatas, Efésios, Filipenses, Colossenses, 1 e 2 Tessalonicenses, 1 e 2 Timóteo, Tito, Filemom, Hebreus, Tiago, 1 e 2 Pedro, 1, 2 e 3 João, Judas e Apocalipse.

---

#### Artigo III (A Rejeição dos Apócrifos)
Os livros comumente chamados Apócrifos, não sendo de inspiração divina, não fazem parte do Cânon da Escritura; não são, portanto, de autoridade na Igreja de Deus, nem de modo algum podem ser aprovados ou usados senão como escritos puramente humanos.

---

#### Artigo IV (A Fonte da Autoridade Divina)
A autoridade da Sagrada Escritura, pela qual ela deve ser crida e obedecida, não depende do testemunho de qualquer homem ou igreja, mas inteiramente de Deus (que é a própria Verdade), o seu Autor; e, portanto, **deve ser recebida porque é a Palavra de Deus**.

---

#### Artigo V (O Testemunho Interno do Espírito Santo)
Pelo testemunho da Igreja podemos ser movidos e incitados a um alto e reverente apreço da Sagrada Escritura; e a celestialidade da matéria, a eficácia da doutrina, a majestade do estilo, a harmonia de todas as partes, o desígnio do todo (que é dar toda a glória a Deus), a plena revelação que ela faz do único caminho da salvação do homem, e as suas muitas outras excelências incomparáveis e inteira perfeição, são argumentos pelos quais ela abundantemente se evidencia como Palavra de Deus; contudo, **a nossa plena persuasão e certeza da sua infalível verdade e divina autoridade provém da operação interna do Espírito Santo**, que testemunha pelo e com a Palavra em nossos corações.

---

#### Artigo VI (A Suficiência da Escritura)
Todo o conselho de Deus concernente a todas as coisas necessárias para a Sua própria glória e para a salvação, fé e vida do homem, ou está expressamente declarado na Escritura, ou por boa e necessária consequência pode ser dela deduzido; ao que nada, em tempo algum, se deve acrescentar, quer por novas revelações do Espírito, quer por tradições dos homens.

Reconhecemos, contudo, ser necessária a iluminação interna do Espírito de Deus para a salvadora compreensão das coisas reveladas na Palavra; e que há algumas circunstâncias concernentes ao culto de Deus e ao governo da Igreja, comuns às ações e sociedades humanas, as quais devem ser ordenadas pela luz da natureza e pela prudência cristã, segundo as regras gerais da Palavra, que sempre devem ser observadas.

---

#### Artigo VII (A Clareza / Perspicuidade da Bíblia)
Não são todas as coisas igualmente claras em si mesmas na Escritura, nem igualmente evidentes a todos; contudo, aquelas coisas que precisam ser conhecidas, cridas e observadas para a salvação, estão tão claramente propostas e explicadas em um ou outro lugar da Escritura, que não somente os eruditos, mas **mesmo os indoutos, no devido uso dos meios ordinários, podem alcançar uma suficiente compreensão delas**.

---

#### Artigo VIII (A Preservação dos Textos Originais)
O Antigo Testamento em Hebraico (língua nativa do antigo povo de Deus) e o Novo Testamento em Grego (a língua mais geralmente conhecida entre as nações no tempo em que foi escrito), sendo inspirados imediatamente por Deus e pelo Seu singular cuidado e providência conservados puros através dos séculos, são autênticos; de tal modo que, em todas as controvérsias religiosas, a Igreja deve apelar finalmente a eles.

---

#### Artigo IX (A Escritura Interpreta a Escritura)
A regra infalível de interpretação da Escritura é **a própria Escritura**; portanto, quando houver questão sobre o verdadeiro e pleno sentido de qualquer texto (sentido que não é múltiplo, mas único), esse texto deve ser pesquisado e compreendido por outros lugares que falem mais claramente (*analogia scripturae*).

---

#### Artigo X (O Supremo Juiz de Toda Controvérsia)
O Juiz Supremo pelo qual todas as controvérsias religiosas devem ser determinadas, e todos os decretos de concílios, opiniões de escritores antigos, doutrinas de homens e espíritos privados devem ser examinados, e em cuja sentença devemos descansar, **não pode ser outro senão o Espírito Santo falando na Escritura**.`
  },
  {
    id: 'catecismo-heidelberg-dia1',
    title: 'Catecismo de Heidelberg (1563) - Dia do Senhor 1: O Único Consolo',
    year: '1563 d.C.',
    category: 'CATECISMO',
    historicalContext:
      'Escrito pelos teólogos Zacharias Ursinus e Caspar Olevianus sob a encomenda do príncipe piedoso Frederico III, Eleitor do Palatinado (Alemanha). Concebido como uma ferramenta de reconciliação e instrução pastoral para as igrejas e escolas, o catecismo é célebre por sua profunda sensibilidade experiencial e calor evangélico. Está estruturado nas três grandes divisões da Epístola aos Romanos: A grandeza da nossa culpa/miséria (1-11), o livramento em Cristo (12-85) e a gratidão pela salvação (86-129).',
    keyTheologicalThemes: ['Único Consolo na Vida e Morte', 'Pertencer a Cristo', 'Soberania Protetora', 'Paz e Gratidão'],
    content: `### O Catecismo de Heidelberg (1563)
*O Livro do Santo Consolo Cristão*

---

#### DIA DO SENHOR 1

**Pergunta 1:**  
*Qual é o teu único consolo, tanto na vida como na morte?*

**Resposta:**  
É que eu, de corpo e alma, tanto na vida como na morte, não pertenço a mim mesmo, mas ao meu fiel Salvador Jesus Cristo:

Ele, com o Seu precioso sangue, pagou plenamente por todos os meus pecados e livrou-me de todo o poder do Diabo.  
Ele também me guarda de tal modo que, sem a vontade de meu Pai celeste, nem um só cabelo pode cair da minha cabeça; antes, todas as coisas devem cooperar para a minha salvação.

Por isso, pelo Seu Espírito Santo, Ele também me assegura da vida eterna e me faz de bom grado e de coração pronto a viver doravante para Ele.

---

**Pergunta 2:**  
*Quantas coisas deves saber para que, com este consolo, possas viver e morrer felizmente?*

**Resposta:**  
Três coisas:

1. Primeira: quão grandes são o **meu pecado e a minha miséria**;
2. Segunda: como sou **redimido** de todos os meus pecados e misérias;
3. Terceira: que **gratidão** devo a Deus por tal redenção.`
  },
  {
    id: 'breve-catecismo-westminster',
    title: 'Breve Catecismo de Westminster (1647) - O Fim Supremo do Homem',
    year: '1647 d.C.',
    category: 'CATECISMO',
    historicalContext:
      'Composto pela Assembleia de Westminster para servir de compêndio de instrução acessível e memorizável para as famílias, crianças e jovens cristãos. A Pergunta 1 é uma das frases mais monumentais de toda a história do pensamento cristão, reorientando todo o propósito da criação e da redenção humana para a glória de Deus e o deleite na comunhão eterna com Ele.',
    keyTheologicalThemes: ['Glória de Deus', 'Ato de Desfrutar a Deus', 'Regra da Bíblia', 'Trindade Santa', 'Criação e Providência'],
    content: `### Breve Catecismo de Westminster (1647)
*Sumário da Fé Cristã em Perguntas e Respostas*

---

**Pergunta 1: Qual é o fim principal do homem?**  
**Resposta:** O fim principal do homem é **glorificar a Deus e desfrutá-Lo para sempre**.  
*(1Co 10:31; Sl 73:25-26; Jo 17:22-24)*

---

**Pergunta 2: Que regra deu Deus para nos guiar no modo de O glorificar e desfrutar?**  
**Resposta:** A Palavra de Deus, que se acha nas Escrituras do Antigo e do Novo Testamento, é a única regra para nos guiar no modo de O glorificar e desfrutar.  
*(2Tm 3:16-17; Ef 2:20; 1Jo 1:3)*

---

**Pergunta 3: O que ensinam principalmente as Escrituras?**  
**Resposta:** As Escrituras ensinam principalmente o que o homem deve crer a respeito de Deus, e o dever que Deus requer do homem.  
*(2Tm 1:13; Ec 12:13)*

---

**Pergunta 4: O que é Deus?**  
**Resposta:** Deus é um Espírito, infinito, eterno e imutável em Seu ser, sabedoria, poder, santidade, justiça, bondade e verdade.  
*(Jo 4:24; Sl 90:2; Tg 1:17; Êx 34:6-7)*

---

**Pergunta 5: Há mais de um Deus?**  
**Resposta:** Há um só Deus, o Deus vivo e verdadeiro.  
*(Dt 6:4; Jr 10:10)*

---

**Pergunta 6: Quantas pessoas há na Divindade?**  
**Resposta:** Há três pessoas na Divindade: o Pai, o Filho e o Espírito Santo; e estas três são um só Deus, da mesma substância, iguais em poder e glória.  
*(Mt 28:19; 2Co 13:14; 1Jo 5:7)*

---

**Pergunta 7: O que são os decretos de Deus?**  
**Resposta:** Os decretos de Deus são o Seu eterno propósito, segundo o conselho da Sua vontade, pelo qual, para Sua própria glória, Ele preordenou tudo o que acontece.  
*(Ef 1:11; Rm 11:36)*`
  },
  {
    id: 'declaracao-de-chicago',
    title: 'A Declaração de Chicago sobre a Inerrância Bíblica (1978)',
    year: '1978 d.C.',
    category: 'DECLARACAO_MODERNA',
    historicalContext:
      'Em outubro de 1978, cerca de 300 eminentes eruditos, historiadores e teólogos evangélicos internacionais (entre os quais J.I. Packer, R.C. Sproul, Carl F.H. Henry, Norman Geisler, Francis Schaeffer e James Boice) reuniram-se no Hyatt Regency O’Hare, em Chicago, convocados pelo International Council on Biblical Inerrancy (ICBI). A conferência formulou a Declaração de Chicago com 19 Artigos de Afirmação e Negação para esclarecer a doutrina clássica da inerrância da Escritura contra o relativismo e o reducionismo liberal moderno.',
    keyTheologicalThemes: ['Inerrância Bíblica', 'Inspiração Verbal e Plenária', 'Veracidade Histórica', 'Autoridade Hermenêutica'],
    content: `### A Declaração de Chicago sobre a Inerrância Bíblica (1978)
*Artigos Selecionados de Afirmação e Negação*

---

#### DECLARAÇÃO SUMÁRIA

1. Deus, que é Ele mesmo a Verdade e diz apenas a verdade, inspirou as Sagradas Escrituras para por meio delas revelar-Se à humanidade caída através de Jesus Cristo.
2. As Sagradas Escrituras, sendo a própria Palavra de Deus, escrita por homens preparados e governados pelo Seu Espírito Santo, são de infalível autoridade divina em todas as matérias de que tratam.
3. As Escrituras em sua totalidade são livres de toda falsidade, fraude ou engano. Essa plenitude de veracidade é o que constitui a **inerrância bíblica**.
4. A autoridade da Escritura é inevitavelmente enfraquecida se a inerrância for de algum modo relativizada ou negada.

---

#### ARTIGOS FUNDAMENTAIS

**Artigo I**  
*Afirmamos* que as Sagradas Escrituras devem ser recebidas como a própria Palavra de Deus.  
*Negamos* que as Escrituras recebam sua autoridade da Igreja, da tradição ou de qualquer outra fonte humana.

**Artigo II**  
*Afirmamos* que as Escrituras são a norma divina suprema pela qual toda a consciência e todos os ensinos humanos devem ser julgados.  
*Negamos* que credos ou declarações da Igreja tenham autoridade igual ou superior à autoridade da Bíblia.

**Artigo III**  
*Afirmamos* que a Escritura escrita em sua totalidade é revelação dada por Deus.  
*Negamos* que a Bíblia seja meramente um testemunho de revelação, ou que só se torne revelação no encontro existencial.

**Artigo IV**  
*Afirmamos* que Deus, que criou a humanidade à Sua imagem, usou a linguagem humana como instrumento de Sua revelação.  
*Negamos* que a linguagem humana seja limitada pela nossa condição de criaturas de modo que seja incapaz de ser o veículo do discurso inerrante de Deus.

**Artigo VI**  
*Afirmamos* que a totalidade da Escritura e todas as suas palavras foram dadas por inspiração divina.  
*Negamos* que a inspiração possa ser restrita apenas aos conceitos gerais sem alcançar as próprias palavras dos textos autógrafos (*inspiração verbal e plenária*).

**Artigo XII**  
*Afirmamos* que a Escritura em sua totalidade é inerrante, sendo isenta de todo erro, falsidade ou engano, tanto em matérias de fé e salvação como em seus relatos históricos e geográficos.  
*Negamos* que a infalibilidade da Bíblia seja limitada a temas espirituais ou que afirmações bíblicas sobre a história da redenção possam conter erros factuais.

**Artigo XVIII**  
*Afirmamos* que o texto da Escritura deve ser interpretado pela **exegese gramático-histórica**, levando em conta suas formas literárias, e que a Escritura deve interpretar a Escritura.  
*Negamos* a legitimidade de qualquer tratamento do texto ou busca de fontes que leve à relativização ou rejeição do ensinamento dos autores sagrados.`
  }
];

export function getDocumentsByCategory(category: DocumentCategory): HistoricalDocument[] {
  return confessionalDocumentsData.filter(d => d.category === category);
}

export function getDocumentById(id: string): HistoricalDocument | undefined {
  return confessionalDocumentsData.find(d => d.id === id);
}
