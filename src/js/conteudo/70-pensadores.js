/* =========================================================
   Pensadores — fichas de contexto
   Cada ficha responde: que problema, em que contexto, qual a
   ideia central, como funciona num exemplo, o que permite ver,
   limites e críticas, relações com outros, como usar.
   As fichas são simplificações pedagógicas assumidas: o campo
   "simplificacao" diz o que fica de fora.
   ========================================================= */
(function () {
  const A = window.ATELIE;

  A.pensadores = [
    {
      id: 'socrates', nome: 'Sócrates', epoca: 'c. 470–399 a.C. · Atenas',
      problema: 'O que sabemos de fato quando achamos que sabemos o que é a justiça, a coragem ou a virtude?',
      contexto: 'Atenas democrática, cheia de oradores e professores pagos (os sofistas) que ensinavam a convencer. Sócrates não deixou nada escrito; o conhecemos sobretudo pelos diálogos de Platão e pelos escritos de Xenofonte, o que torna difícil separar o Sócrates histórico do personagem.',
      ideia: 'Examinar crenças por meio de perguntas, até revelar que elas dependem de pressupostos não sustentados. A sabedoria começa por reconhecer a própria ignorância. Na <em>Apologia</em>, ele afirma que uma vida sem exame não vale a pena ser vivida.',
      exemplo: 'No diálogo <em>Eutífron</em>, um homem seguro de saber o que é a piedade dá definições sucessivas, e cada uma é derrubada por suas próprias consequências.',
      permite: 'Perceber quanto usamos palavras importantes sem saber defini-las, e tratar a dúvida como começo, não como fracasso.',
      limites: 'O método pode terminar em perplexidade (<em>aporia</em>) sem resposta. Pode também humilhar o interlocutor — e isso contribuiu para a hostilidade que levou à condenação de Sócrates à morte.',
      relacoes: 'Platão desenvolveu e transformou suas ideias; Wittgenstein, muito depois, questionou a própria exigência de definições exatas.',
      uso: 'Diante de uma convicção forte, pergunte: o que quero dizer com a palavra principal? Consigo dar um exemplo que se encaixe e outro que pareça se encaixar mas não deveria?',
      simplificacao: 'Fica de fora a discussão sobre o que é de Sócrates e o que é de Platão, e a dimensão religiosa e política do julgamento.',
      livros: ['b-apologia'], unidades: ['u-pressupostos']
    },
    {
      id: 'aristoteles', nome: 'Aristóteles', epoca: '384–322 a.C. · Grécia',
      problema: 'Como raciocinar corretamente, como viver bem e como compreender a natureza — tudo de forma sistemática.',
      contexto: 'Aluno de Platão por vinte anos, preceptor de Alexandre (o futuro “o Grande”), fundador de uma escola em Atenas. Escreveu sobre lógica, biologia, física, ética, política, poesia e retórica.',
      ideia: 'Na lógica, o silogismo: uma conclusão que decorre necessariamente de premissas. Na ética, a virtude como disposição adquirida pela prática, situada entre excessos (a coragem entre a covardia e a temeridade), e a sabedoria prática (<em>phronesis</em>) para perceber o que cada situação pede.',
      exemplo: 'A raiva não é boa nem má em si; o problema é senti-la contra a pessoa errada, pelo motivo errado, na medida errada, no momento errado.',
      permite: 'Ver o raciocínio como algo que tem forma, e a ética como formação do caráter — não só como obediência a regras.',
      limites: 'Sua física e sua biologia foram superadas; algumas de suas posições políticas (como a defesa da escravidão “natural”) são hoje inaceitáveis — um bom exemplo de naturalização, aliás.',
      relacoes: 'A lógica formal, a ética das virtudes contemporânea e a tradição escolástica medieval (como Tomás de Aquino) partem dele.',
      uso: 'Diante de um dilema, pergunte não só “que regra seguir?”, mas “o que uma pessoa sensata e justa faria aqui, nesta situação concreta?”.',
      simplificacao: 'Sua obra é imensa; aqui aparecem apenas a lógica e a ética.',
      livros: [], unidades: ['u-argumento', 'u-acao-boa', 'u-emocao']
    },
    {
      id: 'estoicos', nome: 'Os estoicos (Epicteto, Sêneca, Marco Aurélio)', epoca: 'séc. III a.C. – séc. II d.C. · Grécia e Roma',
      problema: 'Como viver bem num mundo em que quase nada está sob nosso controle?',
      contexto: 'Escola fundada em Atenas por Zenão de Cítio e muito difundida em Roma. Seus autores mais lidos hoje vieram de lugares sociais muito diferentes: Epicteto foi escravizado; Sêneca, conselheiro do imperador Nero; Marco Aurélio, imperador.',
      ideia: 'Distinguir o que depende de nós (juízos, intenções, ações) do que não depende (corpo, reputação, riqueza, o que os outros fazem). Segundo o <em>Manual</em> de Epicteto, o que perturba as pessoas não são as coisas, mas os juízos que fazem sobre elas.',
      exemplo: 'Um amigo não responde: o fato não depende de mim; minha interpretação do fato e minha resposta, sim.',
      permite: 'Criar um espaço entre o acontecimento e a reação, e reduzir sofrimentos que vêm de exigir do mundo o que ele não pode dar.',
      limites: 'Pode virar resignação diante de injustiças que poderiam ser mudadas, ou uma forma de culpar quem sofre por sofrer. As versões populares atuais (“estoicismo” como técnica de produtividade) costumam deixar de lado a ética e a cosmologia da escola.',
      relacoes: 'Influenciou o cristianismo antigo, Spinoza e, de forma reconhecida por seus fundadores, a terapia cognitiva no século XX.',
      uso: 'Diante de uma emoção forte, pergunte: que parte disso depende de mim? Que juízo estou fazendo sobre o que aconteceu?',
      simplificacao: 'O estoicismo antigo incluía uma física e uma lógica próprias, e uma ideia de razão cósmica, aqui omitidas.',
      livros: ['b-manual', 'b-seneca'], unidades: ['u-emocao']
    },
    {
      id: 'daoismo', nome: 'Laozi, Zhuangzi e o daoísmo', epoca: 'c. séc. IV a.C. · China',
      problema: 'Como viver em harmonia com o curso das coisas, sem forçá-las — e o que a linguagem e as convenções nos impedem de ver?',
      contexto: 'O período dos Reinos Combatentes, de guerras e disputas entre escolas de pensamento (confucianos, moístas, legalistas). A existência histórica de Laozi é incerta; o <em>Zhuangzi</em> é uma coletânea de vários autores.',
      ideia: 'O <em>Dao</em> (caminho) não pode ser plenamente dito; a ação sábia é o <em>wu wei</em> (agir sem forçar); o natural (<em>ziran</em>) é o que acontece “por si mesmo”. Zhuangzi usa histórias e paradoxos — como o sonho em que não sabe se é um homem que sonhou ser borboleta ou uma borboleta sonhando ser homem — para mostrar a relatividade das perspectivas.',
      exemplo: 'Um cozinheiro, numa história de Zhuangzi, corta o boi sem gastar a faca porque segue as articulações naturais em vez de forçar o corte.',
      permite: 'Questionar a ideia de que mais esforço e mais controle sempre produzem mais resultado.',
      limites: 'Traduções e interpretações variam muito; ler o daoísmo como autoajuda ou como “filosofia oriental” genérica apaga sua complexidade e suas divergências internas.',
      relacoes: 'Dialoga e polemiza com o confucianismo; influenciou o budismo chinês (chan, que no Japão deu o zen).',
      uso: 'Diante de um problema em que você insiste sem resultado, pergunte: estou forçando algo que tem outro curso?',
      simplificacao: 'Daoísmo filosófico e daoísmo religioso são tradições relacionadas mas distintas; aqui aparece só o primeiro.',
      livros: ['b-tao'], unidades: ['u-natural']
    },
    {
      id: 'budismo', nome: 'Tradições budistas', epoca: 'a partir do séc. V a.C. · Índia, depois toda a Ásia',
      problema: 'Qual é a origem do sofrimento e é possível libertar-se dele?',
      contexto: 'Siddhartha Gautama, o Buda, viveu no norte da Índia por volta do século V a.C. (as datas são discutidas). Seus ensinamentos foram transmitidos oralmente e depois escritos, dando origem a muitas escolas diferentes ao longo de dois milênios.',
      ideia: 'O sofrimento está ligado ao apego e à ignorância; tudo é impermanente; não há um eu fixo e separado (<em>anattā</em>) por trás dos processos físicos e mentais que compõem a pessoa.',
      exemplo: 'No <em>Milindapañha</em>, o monge Nāgasena mostra ao rei Milinda que não há “carruagem” além das rodas, do eixo e da caixa; da mesma forma, “Nāgasena” é um nome útil para um conjunto de processos.',
      permite: 'Ver a identidade como processo, e não como coisa; perceber como o apego a uma imagem fixa de si gera sofrimento.',
      limites: 'O budismo é uma tradição religiosa e prática, não só uma teoria; reduzi-lo a técnicas de meditação ou a uma tese sobre o eu é uma simplificação. As escolas divergem profundamente.',
      relacoes: 'Comparações com Hume (que também não encontrava um eu ao observar a própria mente) e com Parfit são frequentes — e devem ser feitas com cuidado.',
      uso: 'Quando uma mudança em você ou em alguém parecer ameaçadora, pergunte: o que, exatamente, eu acho que deveria permanecer igual?',
      simplificacao: 'Theravada, Mahayana, Vajrayana e suas muitas correntes têm interpretações diferentes dos mesmos conceitos.',
      livros: [], unidades: ['u-mesma']
    },
    {
      id: 'agostinho', nome: 'Agostinho de Hipona', epoca: '354–430 · Norte da África (atual Argélia)',
      problema: 'Como compreender a própria vida interior, o tempo, a memória e a relação com Deus?',
      contexto: 'Professor de retórica no Império Romano tardio, nascido no norte da África, converteu-se ao cristianismo depois de passar por várias correntes filosóficas e religiosas. Tornou-se bispo de Hipona.',
      ideia: 'Nas <em>Confissões</em>, uma das primeiras autobiografias introspectivas, investiga a memória como um “palácio” imenso e o tempo como algo que existe na alma: o passado como memória, o presente como atenção, o futuro como expectativa.',
      exemplo: 'Ao recitar um salmo de cor, a expectativa diminui e a memória aumenta, até que todo o texto passa para a memória — imagem que Agostinho usa para pensar a vida inteira.',
      permite: 'Pensar o tempo como experiência vivida e a interioridade como objeto de investigação.',
      limites: 'Sua teologia (sobre pecado original, graça e predestinação) foi e é muito discutida, inclusive dentro do cristianismo.',
      relacoes: 'Influenciou toda a filosofia medieval; Descartes e a fenomenologia retomaram, de outros modos, a investigação da consciência.',
      uso: 'Quando algo parecer óbvio no uso e impossível de definir, lembre-se da pergunta de Agostinho sobre o tempo: talvez saber usar e saber explicar sejam coisas diferentes.',
      simplificacao: 'Aparece aqui só o Agostinho das <em>Confissões</em>, não o teólogo e o polemista.',
      livros: [], unidades: ['u-tempo']
    },
    {
      id: 'montaigne', nome: 'Michel de Montaigne', epoca: '1533–1592 · França',
      problema: 'O que posso saber sobre mim mesmo e sobre os costumes humanos, num mundo de certezas em guerra?',
      contexto: 'A França das guerras religiosas entre católicos e protestantes, e uma Europa que recebia os primeiros relatos sobre os povos da América. Montaigne retirou-se para sua biblioteca e passou a escrever sobre tudo, testando seu juízo.',
      ideia: 'O ensaio como tentativa: pensar em primeira pessoa, com dúvida, sem pretender sistema. Em “Dos canibais”, a partir de relatos sobre os tupinambás e de uma conversa com indígenas levados à França, sugere que cada um chama de barbárie aquilo que não é de seu costume — e que a crueldade europeia não fica atrás da que atribuía aos outros.',
      exemplo: 'Montaigne relata o espanto dos indígenas diante da desigualdade que viram na França: uns cheios de tudo, outros mendigando à porta.',
      permite: 'Usar o olhar do outro como espelho, e tratar o próprio costume como algo a examinar.',
      limites: 'Montaigne conhecia os tupinambás por relatos de segunda mão e tende a idealizá-los, usando-os mais para criticar a Europa do que para compreendê-los em si.',
      relacoes: 'Antecipa temas do relativismo cultural e da antropologia; influenciou Shakespeare, Pascal e toda a tradição do ensaio.',
      uso: 'Diante de um costume que lhe parece absurdo, pergunte: como o meu costume pareceria a quem vive o dele?',
      simplificacao: 'Os <em>Ensaios</em> são muito mais variados e contraditórios do que uma ficha permite mostrar.',
      livros: ['b-montaigne'], unidades: ['u-natural', 'u-reflexao']
    },
    {
      id: 'descartes', nome: 'René Descartes', epoca: '1596–1650 · França e Holanda',
      problema: 'Existe algum conhecimento absolutamente certo, sobre o qual reconstruir todo o resto?',
      contexto: 'O século XVII, de revolução científica e de crise da autoridade dos saberes tradicionais. Descartes era também matemático (a geometria analítica é sua) e físico.',
      ideia: 'Duvidar metodicamente de tudo o que pode ser posto em dúvida — os sentidos, a memória, até a matemática (e se um gênio maligno me enganasse?). O que resiste é a certeza de que, enquanto duvido, penso, e se penso, existo: “Penso, logo existo”, no <em>Discurso do método</em> (1637).',
      exemplo: 'Os sentidos às vezes nos enganam (uma vara parece quebrada dentro da água); se enganam às vezes, como confiar plenamente neles?',
      permite: 'Levar a sério a possibilidade de erro e exigir fundamentos.',
      limites: 'A separação radical entre mente e corpo que ele propôs é rejeitada pela maioria dos filósofos e cientistas hoje. E muitos duvidam de que se possa reconstruir todo o conhecimento a partir de uma única certeza.',
      relacoes: 'Spinoza, Locke, Hume e Kant responderam a ele; Peirce criticou a dúvida cartesiana como fingida, já que não duvidamos de verdade do que a vida nos faz aceitar.',
      uso: 'Pergunte: de que eu poderia duvidar aqui? Mas também: essa dúvida é real ou é um exercício?',
      simplificacao: 'Fica de fora sua prova da existência de Deus, essencial para seu sistema.',
      livros: [], unidades: ['u-saber']
    },
    {
      id: 'hume', nome: 'David Hume', epoca: '1711–1776 · Escócia',
      problema: 'O que justifica nossas crenças sobre causas, sobre o eu e sobre a moral?',
      contexto: 'O Iluminismo escocês. Hume quis aplicar à natureza humana o método experimental de Newton, observando como a mente efetivamente funciona.',
      ideia: 'Nunca observamos a “conexão necessária” entre causa e efeito; observamos apenas que um tipo de evento costuma seguir outro, e o hábito nos faz esperar a repetição. Também observou que muitos raciocínios passam do que “é” para o que “deve ser” sem justificar essa passagem.',
      exemplo: 'Uma bola de bilhar bate em outra, e a segunda se move. Vemos a sequência; a “força” que liga as duas é algo que inferimos, não que vemos.',
      permite: 'Desconfiar de afirmações causais apressadas e da passagem automática do fato ao valor.',
      limites: 'Se levado ao extremo, seu ceticismo parece minar a própria ciência. Kant dizia que Hume o despertou de seu “sono dogmático” e tentou responder-lhe; a ciência atual desenvolveu métodos de inferência causal que Hume não conhecia.',
      relacoes: 'Influenciou Kant, o empirismo lógico e a filosofia analítica; sua observação de que não encontrava um “eu” ao olhar para dentro é comparada à tradição budista.',
      uso: 'Diante de “A causou B”, pergunte: eu vi a causa, ou vi uma sequência? Diante de “é natural, então é certo”, pergunte: onde está a premissa que liga as duas coisas?',
      simplificacao: 'Fica de fora sua filosofia da religião e sua teoria das paixões.',
      livros: [], unidades: ['u-causa', 'u-natural']
    },
    {
      id: 'kant', nome: 'Immanuel Kant', epoca: '1724–1804 · Prússia',
      problema: 'O que podemos conhecer, o que devemos fazer e o que nos é permitido esperar?',
      contexto: 'O auge do Iluminismo. Kant passou a vida em Königsberg e tentou reconciliar a ciência de Newton, o ceticismo de Hume e a liberdade moral.',
      ideia: 'Na ética, o imperativo categórico: agir apenas segundo princípios que poderíamos querer como lei universal, e tratar a humanidade, em nós e nos outros, sempre também como fim, nunca apenas como meio. Pessoas têm dignidade, não preço.',
      exemplo: 'Fazer uma promessa sabendo que não vai cumpri-la é errado porque, se todos fizessem isso, a própria prática de prometer desapareceria — e porque usa o outro apenas como instrumento.',
      permite: 'Fundamentar a ideia de dignidade humana e de deveres que não dependem de consequências.',
      limites: 'Seu rigor gerou objeções famosas (por exemplo, sobre a proibição absoluta de mentir, mesmo para proteger alguém). Seus escritos sobre raças, hoje estudados criticamente, mostram que ele não aplicou de forma coerente seu próprio universalismo.',
      relacoes: 'Responde a Hume; é o ponto de partida de quase toda a ética de deveres e de boa parte da filosofia moderna.',
      uso: 'Pergunte: e se todos fizessem isso? Estou tratando alguém apenas como meio?',
      simplificacao: 'Fica de fora sua teoria do conhecimento, central em sua obra.',
      livros: [], unidades: ['u-acao-boa', 'u-dinheiro']
    },
    {
      id: 'marx', nome: 'Karl Marx', epoca: '1818–1883 · Alemanha e Inglaterra',
      problema: 'Como funciona o capitalismo e por que ele produz, ao mesmo tempo, enorme riqueza e enorme desigualdade?',
      contexto: 'A Revolução Industrial, com jornadas de trabalho exaustivas, trabalho infantil e cidades operárias superlotadas. Marx viveu boa parte da vida exilado em Londres, pesquisando a economia política inglesa.',
      ideia: 'As formas de produzir a vida material condicionam boa parte da vida social. Numa economia de mercadorias, as relações entre pessoas aparecem como relações entre coisas (o “fetichismo da mercadoria”), e o lucro depende da diferença entre o que o trabalhador produz e o que recebe.',
      exemplo: 'Ao comprar uma camiseta, vemos um preço; não vemos as condições de trabalho de quem a costurou. O preço “esconde” uma relação social.',
      permite: 'Ver conflitos e relações de poder por trás de categorias econômicas que parecem neutras e naturais.',
      limites: 'A teoria do valor-trabalho é rejeitada pela economia predominante; várias previsões históricas do marxismo não se confirmaram; e regimes que se reivindicaram marxistas produziram ditaduras e violência em massa — o que é objeto de grande debate sobre a relação entre a teoria e esses regimes.',
      relacoes: 'Dialoga criticamente com Hegel, Adam Smith e Ricardo; influenciou toda a sociologia, inclusive autores que discordaram dele, como Weber.',
      uso: 'Diante de um preço, um salário ou uma regra econômica, pergunte: que relações entre pessoas estão por trás disso?',
      simplificacao: 'Fica de fora a diferença entre Marx e os vários marxismos posteriores.',
      livros: [], unidades: ['u-dinheiro']
    },
    {
      id: 'weber', nome: 'Max Weber', epoca: '1864–1920 · Alemanha',
      problema: 'Como entender a ação social pelo sentido que as pessoas lhe dão, e o que caracteriza a modernidade ocidental?',
      contexto: 'A Alemanha da industrialização acelerada e da burocratização do Estado. Weber ajudou a fundar a sociologia como disciplina.',
      ideia: 'Para compreender a sociedade, é preciso entender o sentido que os atores atribuem às suas ações. Descreveu três tipos de legitimidade (tradicional, carismática, racional-legal) e a racionalização crescente da vida moderna — a “jaula de ferro” da burocracia e do cálculo.',
      exemplo: 'Obedecemos a um guarda de trânsito não por sua força pessoal nem por tradição, mas porque reconhecemos a autoridade de regras impessoais.',
      permite: 'Ver que instituições se sustentam também por crenças em sua legitimidade, e que valores culturais (como a ética do trabalho) moldam a economia.',
      limites: 'Sua tese sobre a ética protestante é muito debatida por historiadores. Seus “tipos ideais” são ferramentas analíticas, não descrições da realidade.',
      relacoes: 'Dialoga com Marx (dando mais peso às ideias e valores) e com Durkheim.',
      uso: 'Pergunte: por que as pessoas consideram isso legítimo? Que sentido dão ao que fazem?',
      simplificacao: 'Fica de fora sua sociologia das religiões e sua reflexão sobre ciência e política como vocações.',
      livros: [], unidades: ['u-dinheiro']
    },
    {
      id: 'peirce', nome: 'Charles S. Peirce', epoca: '1839–1914 · Estados Unidos',
      problema: 'Como se forma e se corrige uma crença? O que são os signos e como significam?',
      contexto: 'Cientista (trabalhou em geodésia e astronomia), lógico e filósofo, fundador do pragmatismo. Teve carreira acadêmica difícil e muito do que escreveu ficou em manuscritos.',
      ideia: 'Em “A fixação da crença” (1877), descreve a dúvida como um incômodo que nos leva a investigar até chegar a uma crença estável — e compara métodos de fixar crenças (teimosia, autoridade, gosto, ciência). Também classificou os signos em ícones, índices e símbolos, e nomeou a abdução, a inferência para a melhor explicação.',
      exemplo: 'Um médico vê sintomas (índices), formula a hipótese de uma doença que os explicaria (abdução) e pede exames para testá-la.',
      permite: 'Ver a investigação como processo coletivo e autocorretivo (falibilismo) e entender os signos pela forma como se ligam ao que representam.',
      limites: 'Sua obra é vasta, fragmentada e técnica; muitas ideias só foram organizadas por estudiosos depois.',
      relacoes: 'Ligado a William James e John Dewey no pragmatismo; contemporâneo de Saussure, que estudou os signos por outro caminho.',
      uso: 'Quando algo o incomodar intelectualmente, trate o incômodo como o início de uma investigação, e não como algo a silenciar.',
      simplificacao: 'Sua semiótica tem dezenas de categorias; aqui aparecem só três.',
      livros: [], unidades: ['u-perguntas', 'u-palavra', 'u-argumento']
    },
    {
      id: 'saussure', nome: 'Ferdinand de Saussure', epoca: '1857–1913 · Suíça',
      problema: 'O que é uma língua, como sistema, e como suas palavras significam?',
      contexto: 'Linguista que deu cursos em Genebra no início do século XX. O <em>Curso de linguística geral</em> (1916) foi publicado depois de sua morte, a partir de anotações de alunos — por isso, estudiosos discutem até que ponto reflete seu pensamento.',
      ideia: 'O signo une um significante (imagem sonora) e um significado (conceito); essa união é arbitrária. O valor de cada signo vem de sua diferença em relação aos outros no sistema.',
      exemplo: 'O francês <em>mouton</em> cobre o animal e a carne; o inglês separa <em>sheep</em> e <em>mutton</em>. As línguas recortam a realidade de modos diferentes.',
      permite: 'Perceber que as palavras não são etiquetas em coisas prontas, mas partes de sistemas que organizam o mundo.',
      limites: 'Deu pouca atenção ao uso concreto da língua, à fala e ao contexto — o que outros, como Wittgenstein e a pragmática, enfatizaram.',
      relacoes: 'Base do estruturalismo, que influenciou Barthes, a antropologia de Lévi-Strauss e muito mais.',
      uso: 'Ao discutir uma palavra importante, pergunte: com que outras palavras ela contrasta? O que ela exclui?',
      simplificacao: 'Ficam de fora as distinções entre língua e fala, sincronia e diacronia.',
      livros: [], unidades: ['u-palavra']
    },
    {
      id: 'wittgenstein', nome: 'Ludwig Wittgenstein', epoca: '1889–1951 · Áustria e Inglaterra',
      problema: 'Qual é a relação entre linguagem, pensamento e mundo — e quantos problemas filosóficos nascem de confusões de linguagem?',
      contexto: 'Filho de uma família riquíssima de Viena, estudou com Bertrand Russell em Cambridge, lutou na Primeira Guerra, foi professor primário no interior da Áustria e depois professor em Cambridge.',
      ideia: 'No <em>Tractatus</em> (1921), a linguagem é uma figuração lógica do mundo. Nas <em>Investigações filosóficas</em> (1953), ele critica a própria obra anterior: o significado de muitas palavras está em seu uso em “jogos de linguagem”, e muitos conceitos se unem por “semelhanças de família”, não por uma essência comum.',
      exemplo: 'Não há nada que todos os jogos tenham em comum; há uma rede de parentescos parciais.',
      permite: 'Desconfiar da exigência de definições perfeitas e prestar atenção ao contexto de uso das palavras.',
      limites: 'Seu estilo fragmentário admite leituras muito diferentes; críticos acham que algumas de suas teses dissolvem problemas reais em vez de resolvê-los.',
      relacoes: 'Ponto de partida da filosofia da linguagem ordinária; sua visão posterior contrasta com a de Saussure e, de certo modo, com o próprio Sócrates.',
      uso: 'Quando uma discussão empacar numa palavra, pergunte: como essa palavra é usada aqui? Em que jogo de linguagem estamos?',
      simplificacao: 'A relação entre o “primeiro” e o “segundo” Wittgenstein é mais complexa do que uma simples ruptura.',
      livros: [], unidades: ['u-palavra']
    },
    {
      id: 'barthes', nome: 'Roland Barthes', epoca: '1915–1980 · França',
      problema: 'Como a cultura de massa transforma significados históricos em evidências naturais?',
      contexto: 'A França do pós-guerra, com publicidade, revistas ilustradas e cultura de consumo em expansão, e o fim do império colonial.',
      ideia: 'O “mito”, em <em>Mitologias</em> (1957), é uma fala de segundo grau: um signo completo (imagem + sentido literal) passa a servir de significante para uma mensagem ideológica que se apresenta como natural.',
      exemplo: 'A capa de revista com um jovem soldado negro saudando a bandeira francesa transmite, além da cena, a mensagem de que o império é bom e unido.',
      permite: 'Ler anúncios, fotografias e objetos cotidianos como portadores de valores — e desconfiar do que parece óbvio.',
      limites: 'A análise depende muito da habilidade do intérprete; pode virar suspeita generalizada em que tudo é ideologia.',
      relacoes: 'Parte de Saussure; dialoga com a crítica marxista da ideologia; antecipa os estudos culturais.',
      uso: 'Diante de uma imagem publicitária, pergunte: além do que mostra, o que ela quer que eu ache natural?',
      simplificacao: 'Sua obra posterior (sobre fotografia, prazer do texto, amor) segue outros caminhos.',
      livros: ['b-barthes'], unidades: ['u-palavra']
    },
    {
      id: 'beauvoir', nome: 'Simone de Beauvoir', epoca: '1908–1986 · França',
      problema: 'O que é ser mulher, e como uma condição histórica passou a parecer destino natural?',
      contexto: 'A França do pós-guerra, o existencialismo (com Sartre, seu companheiro intelectual) e um momento em que as mulheres francesas acabavam de conquistar o voto (1944).',
      ideia: 'Em <em>O segundo sexo</em> (1949), mostra como a mulher foi constituída como “o Outro” em relação a um sujeito masculino tomado como norma, por meio de mitos, instituições e educação. Daí a frase de que ninguém nasce mulher: torna-se.',
      exemplo: 'Ela examina como meninas e meninos são educados de modos diferentes desde cedo, e como isso é depois vivido como diferença natural.',
      permite: 'Distinguir o biológico do que lhe foi acrescentado historicamente, sem negar o corpo.',
      limites: 'Críticas posteriores apontaram que ela universalizou a experiência de mulheres brancas, europeias e de classe média; seu uso da biologia também foi debatido de vários lados.',
      relacoes: 'Parte da fenomenologia e do existencialismo; é referência de várias correntes feministas, inclusive das que a criticam.',
      uso: 'Diante de “é assim porque é homem/mulher”, pergunte: o que aí é corpo, o que é educação, o que é expectativa?',
      simplificacao: 'Sua obra literária e sua filosofia moral (<em>Por uma moral da ambiguidade</em>) ficam de fora.',
      livros: ['b-beauvoir'], unidades: ['u-natural']
    },
    {
      id: 'arendt', nome: 'Hannah Arendt', epoca: '1906–1975 · Alemanha e Estados Unidos',
      problema: 'Como foram possíveis os regimes totalitários, e o que significa pensar e agir politicamente?',
      contexto: 'Judia alemã, fugiu do nazismo em 1933, foi apátrida por anos e se estabeleceu nos Estados Unidos. Sua obra é marcada pela tentativa de compreender o Holocausto.',
      ideia: 'Distinguiu trabalho, fabricação e ação (a atividade política entre iguais). Ao acompanhar o julgamento de Eichmann, propôs a “banalidade do mal”: grandes males cometidos por pessoas que não pensam a partir da perspectiva dos outros, e não necessariamente por monstros.',
      exemplo: 'Um funcionário que organiza trens com eficiência sem se perguntar para onde levam as pessoas.',
      permite: 'Ver o pensamento como responsabilidade, e a política como espaço de ação conjunta, não só de administração.',
      limites: 'Sua leitura de Eichmann foi contestada por pesquisas posteriores, que o mostram mais ideológico do que ela percebeu; suas observações sobre os conselhos judaicos geraram forte polêmica.',
      relacoes: 'Aluna de Heidegger e de Jaspers; dialoga com Kant (o juízo), com Marx (o trabalho) e com a tradição grega.',
      uso: 'Pergunte: estou só cumprindo um papel, ou estou pensando sobre o que esse papel faz com os outros?',
      simplificacao: 'Fica de fora <em>Origens do totalitarismo</em> e <em>A condição humana</em>, suas obras mais sistemáticas.',
      livros: ['b-arendt-eichmann'], unidades: ['u-acao-boa']
    },
    {
      id: 'camus', nome: 'Albert Camus', epoca: '1913–1960 · Argélia e França',
      problema: 'Se o universo não oferece um sentido dado, como viver — e como agir diante da injustiça?',
      contexto: 'Nascido na Argélia sob domínio francês, numa família pobre; jornalista, romancista, participante da Resistência. Recebeu o Prêmio Nobel de Literatura em 1957.',
      ideia: 'O absurdo nasce do confronto entre nossa exigência de sentido e o silêncio do mundo. A resposta não é o suicídio nem a fuga para uma esperança ilusória, mas a revolta lúcida: viver plenamente sabendo do absurdo, e recusar o sofrimento imposto aos outros.',
      exemplo: 'Sísifo, condenado a empurrar uma pedra montanha acima para sempre, torna-se para Camus uma imagem de quem assume sua condição.',
      permite: 'Pensar o sentido sem garantias metafísicas, e a ética como recusa da injustiça.',
      limites: 'Filósofos de formação técnica o consideraram mais escritor que filósofo; suas posições sobre a guerra de independência da Argélia foram duramente criticadas.',
      relacoes: 'Próximo e depois rival de Sartre; dialoga com Nietzsche, Kierkegaard e Dostoiévski.',
      uso: 'Diante da falta de sentido, pergunte: o que eu escolheria fazer, mesmo sem garantias?',
      simplificacao: 'Camus recusava o rótulo de existencialista.',
      livros: ['b-sisifo', 'b-estrangeiro'], unidades: ['u-visao']
    }
  ];
})();
