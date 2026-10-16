/* =========================================================
   Repertório de perguntas fundamentais
   nivel: 1 = porta de entrada · 2 = intermediária · 3 = funda
   (o nível indica quanto contexto ajuda, não a ordem "certa")
   ========================================================= */
(function () {
  const A = window.ATELIE;

  A.temasPerguntas = ['Pensamento e conhecimento', 'Existência e realidade', 'Identidade e si mesmo', 'Ética e sentido', 'Sociedade e história', 'Linguagem e interpretação'];
  A.niveis = { 1: 'Porta de entrada', 2: 'Intermediária', 3: 'Funda' };

  A.perguntas = [
    {
      id: 'q-compreender', tema: 'Pensamento e conhecimento', nivel: 1, eixos: ['A', 'C'],
      pergunta: 'O que significa compreender alguma coisa?',
      intro: '<p>Você pode saber de cor a fórmula da área do círculo sem compreender por que ela funciona; pode entender perfeitamente uma piada sem conseguir explicá-la. Compreender parece ser mais do que ter a informação: envolve perceber relações, conseguir aplicar a ideia em situações novas, saber o que mudaria se algo mudasse.</p>',
      caminhos: [
        'Distinguir saber que (uma informação), saber como (uma habilidade) e compreender por que (as relações).',
        'Testar a compreensão pela capacidade de explicar a alguém e de aplicar em um caso novo.',
        'Perguntar se compreender outra pessoa é o mesmo tipo de coisa que compreender um teorema.'
      ],
      atividade: 'Escolha algo que você acha que compreende bem (como funciona uma geladeira, por que chove, por que uma amizade acabou). Tente explicá-lo por escrito sem consultar nada. Onde a explicação travou? O que isso indica sobre a sua compreensão?',
      conexoes: ['u:u-perguntas', 'x:x-a', 'q:q-outra-pessoa'],
      leituras: ['b-nagel', 'b-warburton', 'b-chaui']
    },
    {
      id: 'q-nada', tema: 'Existência e realidade', nivel: 3, eixos: ['B'],
      pergunta: 'Por que algo existe em vez de nada?',
      intro: '<p>O filósofo alemão Leibniz formulou essa pergunta no início do século XVIII, e ela continua sem consenso. Alguns a consideram a pergunta mais profunda que existe; outros acham que ela é mal formulada — que “nada” não é um estado possível que precisaria ser explicado. Investigá-la é um ótimo exercício para perceber os limites das explicações.</p>',
      caminhos: [
        'Perguntar o que “nada” quer dizer: vácuo? ausência de leis físicas? ausência até de possibilidade?',
        'Distinguir a pergunta científica (como o universo observável surgiu) da pergunta filosófica (por que existe algo).',
        'Considerar a resposta de que talvez não haja explicação — e se isso é uma derrota ou uma descoberta.'
      ],
      atividade: 'Escreva duas respostas possíveis: uma que trate a pergunta como profunda e legítima, outra que a trate como mal formulada. Qual das duas parece mais convincente? Por quê?',
      conexoes: ['u:u-tempo', 'u:u-cosmos', 'q:q-compreender'],
      leituras: ['b-nagel', 'b-rovelli']
    },
    {
      id: 'q-vida-significativa', tema: 'Ética e sentido', nivel: 2, eixos: ['G', 'D'],
      pergunta: 'O que faz uma vida ser significativa?',
      intro: '<p>Uma vida pode ser agradável sem ser significativa, e significativa sem ser feliz. Filósofos propuseram respostas muito diferentes: viver segundo a virtude, servir a algo maior que si, criar, amar, compreender — ou aceitar que o universo não oferece sentido e que ele precisa ser construído.</p>',
      caminhos: [
        'Distinguir prazer, felicidade, realização e sentido.',
        'Perguntar se o sentido é descoberto (já existe) ou criado (depende de nós).',
        'Examinar se uma vida pode ter sentido sem que a pessoa perceba — ou parecer ter sentido sem ter.'
      ],
      atividade: 'Pense em alguém (real ou de um livro) cuja vida lhe pareça significativa. O que, exatamente, dá essa impressão? Esse elemento estaria presente numa vida muito diferente?',
      conexoes: ['u:u-acao-boa', 'q:q-livre', 'b:b-ivan-ilitch'],
      leituras: ['b-ivan-ilitch', 'b-sisifo', 'b-seneca']
    },
    {
      id: 'q-certos', tema: 'Pensamento e conhecimento', nivel: 1, eixos: ['A', 'C'],
      pergunta: 'Como sabemos que estamos certos?',
      intro: '<p>A sensação de certeza é fortíssima — e enganadora. Pessoas têm absoluta convicção sobre memórias falsas e sobre previsões que não se cumprem. Ao mesmo tempo, não podemos viver duvidando de tudo. Esta pergunta convida a separar certeza (um estado psicológico) de justificação (razões que sustentam uma crença).</p>',
      caminhos: [
        'Comparar a certeza que você tem sobre fatos, sobre memórias e sobre valores.',
        'Perguntar que evidência faria você mudar de ideia sobre algo de que tem certeza.',
        'Investigar como comunidades — a ciência, a justiça — tentam corrigir erros individuais.'
      ],
      atividade: 'Lembre-se de algo de que você tinha certeza e que se revelou falso. Como foi a certeza na época? O que mudou? Algum sinal anterior poderia ter alertado?',
      conexoes: ['u:u-saber', 'u:u-discordar', 'p:descartes'],
      leituras: ['b-sagan-mundo', 'b-kahneman']
    },
    {
      id: 'q-livre', tema: 'Ética e sentido', nivel: 2, eixos: ['G', 'D', 'H'],
      pergunta: 'O que significa ser livre?',
      intro: '<p>Ser livre pode significar não ser impedido pelos outros, ter condições reais de fazer escolhas, ou agir segundo o que realmente se quer — e não por impulso ou pressão. Esses sentidos se separam com frequência: alguém pode não ter ninguém o impedindo e não ter meios para nada.</p>',
      caminhos: [
        'Distinguir liberdade como ausência de impedimentos e liberdade como capacidade real de agir.',
        'Perguntar se desejos que não escolhemos podem nos tornar menos livres.',
        'Relacionar liberdade e responsabilidade: se não sou livre, sou responsável?'
      ],
      atividade: 'Descreva uma situação da sua vida em que você se sentiu livre e outra em que se sentiu preso. Em que sentido de liberdade cada uma se encaixa?',
      conexoes: ['q:q-escolhido', 'u:u-acao-boa', 'b:b-estrangeiro'],
      leituras: ['b-despossuidos', 'b-estrangeiro', 'b-mill']
    },
    {
      id: 'q-escolhido', tema: 'Identidade e si mesmo', nivel: 2, eixos: ['D', 'H'],
      pergunta: 'Quanto de quem somos foi escolhido por nós?',
      intro: '<p>Não escolhemos nossa língua, nossa família, nossa época, nosso corpo, nem as primeiras ideias que ouvimos sobre o mundo. E, ainda assim, sentimos que fazemos escolhas que nos definem. A pergunta não é se somos totalmente livres ou totalmente determinados, mas como essas duas coisas convivem.</p>',
      caminhos: [
        'Listar o que você recebeu, o que transformou e o que escolheu de modo deliberado.',
        'Perguntar se aquilo que não escolhemos pode, ainda assim, tornar-se nosso.',
        'Investigar a frase de Simone de Beauvoir de que ninguém nasce mulher, torna-se.'
      ],
      atividade: 'Escolha um traço seu de que você gosta. Reconstrua sua história: o que veio de fora, o que veio de escolhas suas? A divisão é nítida?',
      conexoes: ['u:u-mesma', 'u:u-natural', 'p:beauvoir'],
      leituras: ['b-beauvoir', 'b-metamorfose']
    },
    {
      id: 'q-familiaridade', tema: 'Pensamento e conhecimento', nivel: 1, eixos: ['A', 'C', 'E'],
      pergunta: 'Por que confundimos familiaridade com verdade?',
      intro: '<p>Psicólogos documentaram o chamado efeito da verdade ilusória: afirmações repetidas tendem a parecer mais verdadeiras, mesmo quando sabemos que são falsas. O que é familiar parece seguro, e o que parece seguro parece verdadeiro. Isso vale para boatos, para propaganda — e para nossas próprias convicções antigas.</p>',
      caminhos: [
        'Perguntar de onde vêm as ideias que lhe parecem mais óbvias.',
        'Investigar como a repetição funciona em publicidade e em redes sociais.',
        'Distinguir “nunca pensei diferente” de “tenho razões para pensar assim”.'
      ],
      atividade: 'Liste três afirmações que você ouviu tantas vezes que nunca questionou. Para cada uma, escreva que evidência você realmente tem.',
      conexoes: ['u:u-natural', 'u:u-cosmos', 'q:q-natural'],
      leituras: ['b-kahneman', 'b-rosling']
    },
    {
      id: 'q-natural', tema: 'Sociedade e história', nivel: 1, eixos: ['H', 'J'],
      pergunta: 'O que faz uma coisa parecer natural?',
      intro: '<p>Repetição, antiguidade, ausência de alternativas visíveis, apoio de autoridades, ligação com o corpo — várias coisas contribuem para que algo pareça natural. Investigar esses mecanismos ajuda a distinguir o que tem base sólida do que foi apenas naturalizado.</p>',
      caminhos: [
        'Retomar os cinco sentidos de “natural” da primeira unidade.',
        'Procurar uma prática que mudou dentro da história da sua família.',
        'Perguntar quem ganha e quem perde quando algo parece inevitável.'
      ],
      atividade: 'Converse com alguém de uma geração diferente da sua sobre uma prática cotidiana (namoro, trabalho, educação dos filhos). Anote o que parecia natural para essa pessoa e não parece para você, e vice-versa.',
      conexoes: ['u:u-natural', 'u:u-explicar', 'n:natural'],
      leituras: ['b-montaigne', 'b-despossuidos', 'b-tao']
    },
    {
      id: 'q-identidade-ideia', tema: 'Identidade e si mesmo', nivel: 2, eixos: ['D', 'C', 'H'],
      pergunta: 'Como uma ideia se torna parte de uma identidade?',
      intro: '<p>Algumas opiniões nós temos; outras nos têm. Quando uma ideia passa a definir a que grupo pertencemos, criticá-la soa como ataque pessoal — e mudar de ideia parece trair pessoas queridas. Pesquisas sobre cognição motivada sugerem que, nesses casos, a inteligência pode servir mais para defender a posição do que para examiná-la.</p>',
      caminhos: [
        'Distinguir crenças que você examinou de crenças que sinalizam pertencimento.',
        'Perguntar o que você perderia, socialmente, se mudasse de ideia sobre algo.',
        'Investigar se existem formas de pertencimento que não dependam de concordar em tudo.'
      ],
      atividade: 'Escolha uma opinião sua compartilhada por pessoas de quem você gosta. Imagine que você mudou de ideia. Como seria contar isso a elas? O que esse exercício revela?',
      conexoes: ['u:u-discordar', 'u:u-visao', 'q:q-abandonar'],
      leituras: ['b-doze-homens', 'b-mill']
    },
    {
      id: 'q-outra-pessoa', tema: 'Linguagem e interpretação', nivel: 2, eixos: ['K', 'F', 'D'],
      pergunta: 'O que significa compreender outra pessoa?',
      intro: '<p>Nunca temos acesso direto à experiência de outra pessoa: interpretamos palavras, gestos, silêncios. E, ainda assim, às vezes sentimos ser profundamente compreendidos. Compreender alguém significa saber o que ela sente? Saber por que age como age? Ou aceitar que há algo nela que escapa?</p>',
      caminhos: [
        'Distinguir compreender as razões de alguém e concordar com elas.',
        'Perguntar até que ponto a própria experiência serve de modelo para a dos outros.',
        'Observar como a literatura nos dá acesso à vida interior de personagens.'
      ],
      atividade: 'Pense em alguém que agiu de um jeito que você não entende. Escreva a ação do ponto de vista dela, em primeira pessoa, tentando torná-la compreensível. O que você precisou supor?',
      conexoes: ['u:u-fato', 'c:c-louca', 'u:u-emocao'],
      leituras: ['b-hora-estrela', 'b-otelo']
    },
    {
      id: 'q-si-mesmo', tema: 'Identidade e si mesmo', nivel: 3, eixos: ['D', 'E'],
      pergunta: 'É possível conhecer a si mesmo sem se enganar?',
      intro: '<p>“Conhece-te a ti mesmo” era uma inscrição no templo de Apolo em Delfos, associada a Sócrates. Mas a psicologia mostra que frequentemente explicamos nossas próprias ações com razões que não foram as verdadeiras — e acreditamos nelas. Se o eu é observador e observado ao mesmo tempo, como confiar no que ele vê?</p>',
      caminhos: [
        'Comparar o que você diz valorizar com o que efetivamente faz.',
        'Perguntar o que outras pessoas veem em você que você não vê.',
        'Investigar se o autoconhecimento é uma descoberta ou também uma construção.'
      ],
      atividade: 'Escreva três frases que começam com “Eu sou uma pessoa que…”. Para cada uma, procure uma situação recente que a confirme e outra que a contradiga.',
      conexoes: ['u:u-mesma', 'u:u-emocao', 'p:socrates'],
      leituras: ['b-bras-cubas', 'b-ivan-ilitch', 'b-apologia']
    },
    {
      id: 'q-explicacao-justificativa', tema: 'Pensamento e conhecimento', nivel: 2, eixos: ['A', 'G', 'J'],
      pergunta: 'O que diferencia uma explicação de uma justificativa?',
      intro: '<p>“Ele gritou porque estava exausto” pode ser uma explicação correta e, ainda assim, não justificar o grito. Confundir as duas coisas leva a dois erros opostos: achar que compreender é desculpar, ou recusar-se a compreender para não desculpar.</p>',
      caminhos: [
        'Distinguir a pergunta “por que aconteceu?” da pergunta “estava certo?”.',
        'Perguntar se compreender as causas de um ato muda a responsabilidade de quem o praticou.',
        'Aplicar a distinção a explicações biológicas, históricas e sociais.'
      ],
      atividade: 'Escolha um ato que você reprova. Escreva a melhor explicação possível para ele. Depois escreva se essa explicação o justifica — e por quê.',
      conexoes: ['u:u-explicar', 'q:q-causa-desculpa', 'p:arendt'],
      leituras: ['b-arendt-eichmann', 'b-estrangeiro']
    },
    {
      id: 'q-causa-desculpa', tema: 'Ética e sentido', nivel: 1, eixos: ['A', 'G', 'K'],
      pergunta: 'Como distinguimos uma causa de uma desculpa?',
      intro: '<p>Quando explicamos nossos próprios erros, falamos de causas (“estava cansado”, “o trânsito estava terrível”). Quando explicamos os erros dos outros, falamos de caráter (“ele é desorganizado”). Psicólogos chamam essa assimetria de viés ator-observador. Uma causa vira desculpa quando usamos a explicação para fugir da responsabilidade.</p>',
      caminhos: [
        'Perguntar se a causa estava sob seu controle ou se era previsível.',
        'Comparar como você explica seus erros e os erros dos outros.',
        'Distinguir reconhecer causas e assumir responsabilidade — as duas coisas podem andar juntas.'
      ],
      atividade: 'Lembre-se de um erro seu e de um erro parecido de outra pessoa. Escreva a explicação que você deu para cada um. Há assimetria?',
      conexoes: ['u:u-causa', 'q:q-explicacao-justificativa', 'c:c-silencio'],
      leituras: ['b-crime']
    },
    {
      id: 'q-abandonar', tema: 'Pensamento e conhecimento', nivel: 2, eixos: ['A', 'C', 'D'],
      pergunta: 'Por que algumas ideias parecem impossíveis de abandonar?',
      intro: '<p>Algumas ideias resistem a qualquer evidência contrária. Às vezes isso é teimosia; às vezes, é porque a ideia está no centro de uma rede de crenças e abandoná-la exigiria rever muitas outras; às vezes, porque está ligada a quem somos e a quem amamos.</p>',
      caminhos: [
        'Usar a imagem do barco de Neurath: que tábuas sustentam esta?',
        'Perguntar se a ideia pode ser testada — e o que contaria como evidência contra.',
        'Considerar o custo emocional e social de abandoná-la.'
      ],
      atividade: 'Escreva uma ideia sua que você acha que nunca abandonaria. Por quê? Ela é imune à revisão por boas razões, ou por outras razões?',
      conexoes: ['u:u-visao', 'q:q-identidade-ideia', 'u:u-discordar'],
      leituras: ['b-doze-homens', 'b-alienista']
    },
    {
      id: 'q-passado', tema: 'Sociedade e história', nivel: 2, eixos: ['I', 'D', 'F'],
      pergunta: 'Como o passado continua presente no modo como pensamos?',
      intro: '<p>As palavras que usamos, as instituições onde vivemos, os medos e as esperanças que sentimos foram herdados. Um exemplo brasileiro: a maneira como o trabalho manual é visto até hoje tem relação com a longa história da escravidão no país — tema que historiadores e escritores investigam em profundidade.</p>',
      caminhos: [
        'Procurar a origem histórica de uma expressão ou de um costume que você usa.',
        'Perguntar o que a história de sua família diz sobre a sua forma de ver o mundo.',
        'Distinguir herdar algo e ser determinado por ele.'
      ],
      atividade: 'Escolha uma expressão comum que tenha uma origem histórica pesquisável. Pesquise-a e escreva o que descobriu e o que isso muda (ou não) no uso que você faz dela.',
      conexoes: ['u:u-tempo', 'u:u-cosmos', 'q:q-natural'],
      leituras: ['b-torto-arado', 'b-achebe', 'b-quarto-despejo']
    },
    {
      id: 'q-instituicao', tema: 'Sociedade e história', nivel: 2, eixos: ['H'],
      pergunta: 'O que faz uma instituição parecer legítima?',
      intro: '<p>Obedecemos a muitas instituições sem pensar: a escola, o tribunal, o banco, as regras de trânsito. Max Weber distinguiu três fontes de legitimidade: a tradição (sempre foi assim), o carisma (confiamos numa pessoa extraordinária) e a legalidade racional (regras impessoais, aprovadas por procedimentos reconhecidos). Uma instituição pode ser legal sem parecer legítima — e o contrário.</p>',
      caminhos: [
        'Aplicar os três tipos de legitimidade a instituições que você conhece.',
        'Perguntar o que faz uma instituição perder legitimidade.',
        'Distinguir legitimidade percebida (o que as pessoas aceitam) e legitimidade justificada (o que merece ser aceito).'
      ],
      atividade: 'Escolha uma instituição em que você confia e outra em que desconfia. Escreva por quê. Suas razões dizem mais sobre as instituições ou sobre sua experiência com elas?',
      conexoes: ['u:u-dinheiro', 'p:weber', 'q:q-natural'],
      leituras: ['b-ensaio-cegueira', 'b-1984', 'b-antigona', 'b-sapiens']
    },
    {
      id: 'q-interpretacao', tema: 'Linguagem e interpretação', nivel: 2, eixos: ['E', 'F', 'D'],
      pergunta: 'O significado de uma experiência depende de como a interpretamos?',
      intro: '<p>A mesma perda pode ser vivida como tragédia ou como recomeço; o mesmo fracasso, como humilhação ou aprendizado. Isso sugere que o significado depende da interpretação. Mas certas experiências parecem impor seu significado, e é cruel dizer a alguém que sua dor é “só uma questão de perspectiva”.</p>',
      caminhos: [
        'Distinguir o que a experiência foi e o que ela significa para quem a viveu.',
        'Perguntar se as interpretações podem ser mais ou menos acertadas.',
        'Investigar como as narrativas que contamos sobre nós mudam ao longo do tempo.'
      ],
      atividade: 'Escolha uma experiência sua cujo significado mudou com o tempo. Como você a interpretava antes, como a interpreta hoje, e o que provocou a mudança?',
      conexoes: ['u:u-emocao', 'u:u-fato', 'q:q-outra-pessoa'],
      leituras: ['b-akutagawa', 'b-manual']
    },
    {
      id: 'q-tensao', tema: 'Ética e sentido', nivel: 3, eixos: ['A', 'G'],
      pergunta: 'Como distinguir uma contradição real de uma tensão entre valores diferentes?',
      intro: '<p>Dizer que “a mentira é sempre errada” e que “eu mentiria para salvar alguém” parece uma contradição. Mas talvez seja o reconhecimento de que existem dois valores — a honestidade e a proteção da vida — que às vezes entram em conflito. Uma contradição é um erro a corrigir; uma tensão pode ser uma característica real do mundo moral.</p>',
      caminhos: [
        'Reformular princípios absolutos (“sempre”, “nunca”) de forma mais precisa.',
        'Perguntar se há uma ordem entre os valores ou se a escolha depende do caso.',
        'Considerar que algumas tensões não se resolvem, apenas se administram.'
      ],
      atividade: 'Escreva dois valores seus que às vezes entram em conflito. Descreva uma situação em que isso aconteceu e o que você fez. Você vê aí uma contradição ou uma tensão?',
      conexoes: ['u:u-acao-boa', 'u:u-visao', 'b:b-antigona'],
      leituras: ['b-antigona', 'b-sandel-justica']
    },
    {
      id: 'q-unica-causa', tema: 'Sociedade e história', nivel: 2, eixos: ['A', 'H', 'J'],
      pergunta: 'É possível compreender um fenômeno sem reduzi-lo a uma única causa?',
      intro: '<p>“A culpa é da tecnologia”, “é tudo culpa da educação”, “é a economia” — explicações de causa única são atraentes porque são simples e indicam um culpado. Fenômenos sociais, porém, costumam ter muitas causas que interagem. O desafio é reconhecer essa complexidade sem cair no “é tudo complicado” que não explica nada.</p>',
      caminhos: [
        'Listar causas possíveis e perguntar qual é necessária, qual é suficiente, qual apenas contribui.',
        'Distinguir causas próximas (o gatilho) e causas de fundo (as condições).',
        'Perguntar como as causas interagem — se se somam, se se reforçam, se dependem umas das outras.'
      ],
      atividade: 'Escolha um problema social que lhe interessa. Escreva a explicação de causa única mais comum sobre ele. Depois escreva pelo menos três outras causas e como elas se relacionam.',
      conexoes: ['u:u-causa', 'u:u-explicar', 'c:c-transito'],
      leituras: ['b-rosling', 'b-mlodinow']
    },
    {
      id: 'q-conceitos', tema: 'Linguagem e interpretação', nivel: 3, eixos: ['F', 'C', 'I'],
      pergunta: 'O que acontece quando mudamos os conceitos com que descrevemos o mundo?',
      intro: '<p>Quando surgem conceitos como “assédio”, “burnout” ou “racismo estrutural”, experiências que antes eram vividas como problemas individuais e sem nome passam a ser reconhecidas, discutidas, às vezes medidas. Novos conceitos também podem ser usados de forma vaga ou excessiva. Mudar os conceitos muda o que conseguimos ver — e o que conseguimos fazer.</p>',
      caminhos: [
        'Escolher um conceito recente e investigar que experiência ele nomeou.',
        'Perguntar se o conceito revela algo que já existia ou cria uma nova forma de ver.',
        'Considerar riscos: quando um conceito se expande tanto que perde precisão.'
      ],
      atividade: 'Pense numa experiência sua que só ficou clara quando você encontrou uma palavra para ela. Como era antes e depois?',
      conexoes: ['u:u-palavra', 'q:q-natural', 'u:u-perguntas'],
      leituras: ['b-1984', 'b-lakoff', 'b-vidas-secas']
    }
  ];
})();
