/* =========================================================
   Ateliê do Pensamento — conteúdo: estrutura do percurso
   ---------------------------------------------------------
   Este arquivo define as etapas, os módulos e a ordem das
   unidades. O texto das unidades fica nos arquivos 10-*, 20-*.
   Para acrescentar uma unidade nova:
     1. escreva-a em ATELIE.unidades (veja 10-etapa1.js);
     2. coloque o id dela na lista "unidades" de um módulo abaixo;
     3. se ela estava em "planejadas", remova-a de lá.
   ========================================================= */
(function () {
  const A = (window.ATELIE = window.ATELIE || {});
  A.unidades = A.unidades || {};

  A.meta = {
    nome: 'Ateliê do Pensamento',
    subtitulo: 'Um percurso pessoal de filosofia, autoconhecimento, literatura e compreensão do mundo',
    versaoConteudo: '1.1'
  };

  /* Eixos temáticos (usados em etiquetas, filtros e na atividade inicial) */
  A.eixos = {
    A: { nome: 'Aprender a pensar', curto: 'Pensar' },
    B: { nome: 'Realidade, existência e universo', curto: 'Realidade' },
    C: { nome: 'Conhecimento, verdade e percepção', curto: 'Conhecimento' },
    D: { nome: 'Identidade, consciência e experiência humana', curto: 'Identidade' },
    E: { nome: 'Emoções, desejos e psicologia prática', curto: 'Emoções' },
    F: { nome: 'Linguagem, símbolos e significados', curto: 'Linguagem' },
    G: { nome: 'Ética, valores e sentido da vida', curto: 'Ética' },
    H: { nome: 'Sociedade, cultura e poder', curto: 'Sociedade' },
    I: { nome: 'História e transformação das visões de mundo', curto: 'História' },
    J: { nome: 'Natureza, humanidade e ciência', curto: 'Natureza' },
    K: { nome: 'Relações humanas e vida cotidiana', curto: 'Relações' }
  };

  A.etapas = [
    {
      id: 'despertar', num: 1, titulo: 'Despertar',
      sub: 'Perceber o que parecia óbvio',
      descricao: 'Aprender a formular perguntas, observar pressupostos e reconhecer a diferença entre opinião, interpretação e argumento. Esta etapa fornece as ferramentas usadas em todo o resto do percurso.',
      modulos: [
        {
          id: 'm-obvio', titulo: 'O que parece óbvio',
          descricao: 'Três exercícios de estranhamento: o natural e o aprendido, os fatos e as interpretações, os pressupostos que sustentam o que dizemos.',
          unidades: ['u-natural', 'u-fato', 'u-pressupostos'], planejadas: []
        },
        {
          id: 'm-ferramentas', titulo: 'Ferramentas do raciocínio',
          descricao: 'Como uma conclusão decorre de premissas, como distinguir correlação de causa, por que pessoas inteligentes discordam, de onde vêm nossas concordâncias e como transformar um incômodo em pergunta.',
          unidades: ['u-argumento', 'u-causa', 'u-discordar', 'u-visoes', 'u-perguntas'], planejadas: []
        }
      ]
    },
    {
      id: 'investigar', num: 2, titulo: 'Investigar',
      sub: 'Conhecimento, linguagem, identidade e realidade',
      descricao: 'Explorar como sabemos o que sabemos, como as palavras organizam o mundo, o que faz alguém continuar sendo a mesma pessoa e o que é o tempo.',
      modulos: [
        {
          id: 'm-saber', titulo: 'Conhecimento e percepção',
          descricao: 'Crença, evidência, testemunho, memória e certeza.',
          unidades: ['u-saber'],
          planejadas: [
            { titulo: 'A memória como reconstrução', pergunta: 'Se a memória reconstrói o passado a cada lembrança, em que sentido posso confiar nela?' },
            { titulo: 'Ver é interpretar?', pergunta: 'Quanto daquilo que percebo vem do mundo e quanto vem da minha mente?' },
            { titulo: 'Como a ciência muda de ideia', pergunta: 'Se a ciência revisa suas conclusões, por que confiar nelas agora?' }
          ]
        },
        {
          id: 'm-linguagem', titulo: 'Linguagem, símbolos e significados',
          descricao: 'A coisa, o nome, o conceito e o uso.',
          unidades: ['u-palavra'],
          planejadas: [
            { titulo: 'Metáforas que pensam por nós', pergunta: 'Que metáforas usamos sem perceber — e o que elas nos fazem ver ou esconder?' },
            { titulo: 'O que eu quis dizer e o que você entendeu', pergunta: 'Onde mora o significado de uma frase: em quem fala, em quem ouve ou entre os dois?' },
            { titulo: 'Narrativas', pergunta: 'Como uma história transforma acontecimentos dispersos em algo com sentido?' }
          ]
        },
        {
          id: 'm-identidade', titulo: 'Identidade e consciência',
          descricao: 'Continuidade, memória, mudança e o eu.',
          unidades: ['u-mesma', 'u-camadas'],
          planejadas: [
            { titulo: 'O enigma da consciência', pergunta: 'Por que existe algo que é ser eu, e não apenas um corpo funcionando?' },
            { titulo: 'Quão livres são minhas escolhas?', pergunta: 'Se fui moldado por circunstâncias que não escolhi, em que sentido minhas escolhas são minhas?' },
            { titulo: 'Agir contra o que se acredita', pergunta: 'Por que fazemos o que dizemos não querer fazer?' }
          ]
        },
        {
          id: 'm-realidade', titulo: 'Realidade, tempo e existência',
          descricao: 'O que é o tempo e o que significa existir.',
          unidades: ['u-tempo'],
          planejadas: [
            { titulo: 'Por que algo em vez de nada?', pergunta: 'Essa pergunta tem resposta possível, ou é mal formulada?' },
            { titulo: 'Pergunta científica ou filosófica?', pergunta: 'Como saber que tipo de investigação uma pergunta pede?' },
            { titulo: 'Tudo precisa de uma causa?', pergunta: 'A exigência de que tudo tenha causa é uma descoberta ou um hábito da mente?' }
          ]
        }
      ]
    },
    {
      id: 'interpretar', num: 3, titulo: 'Interpretar',
      sub: 'Emoções, valores, sociedade e relações',
      descricao: 'Compreender emoções, escolhas morais, instituições e conflitos cotidianos — sem reduzir tudo a psicologia individual nem a estruturas impessoais.',
      modulos: [
        {
          id: 'm-emocoes', titulo: 'Emoções e desejos',
          descricao: 'Sentimento, interpretação e reação.',
          unidades: ['u-emocao'],
          planejadas: [
            { titulo: 'A necessidade de aprovação', pergunta: 'Por que o olhar dos outros pesa tanto — e quando isso é razoável?' },
            { titulo: 'Desejar o que não nos faz bem', pergunta: 'Como é possível querer algo e, ao mesmo tempo, não querer querer?' },
            { titulo: 'Arrependimento e incerteza', pergunta: 'O que o arrependimento revela sobre como avaliamos escolhas passadas?' }
          ]
        },
        {
          id: 'm-etica', titulo: 'Ética e valores',
          descricao: 'Como orientamos escolhas quando valores entram em conflito.',
          unidades: ['u-acao-boa', 'u-sentido'],
          planejadas: [
            { titulo: 'Legal, moral e justo', pergunta: 'Uma lei pode ser injusta? Uma ação pode ser moral e ilegal?' },
            { titulo: 'Julgar o passado', pergunta: 'Podemos julgar pessoas do passado com os valores de hoje?' },
            { titulo: 'Aceitar a finitude', pergunta: 'O que muda na vida quando levamos a morte a sério?' }
          ]
        },
        {
          id: 'm-sociedade', titulo: 'Sociedade, cultura e poder',
          descricao: 'Instituições, convenções e o valor das coisas.',
          unidades: ['u-dinheiro', 'u-tradicao'],
          planejadas: [
            { titulo: 'O que torna uma instituição legítima?', pergunta: 'Por que obedecemos a instituições — e quando deixam de merecer obediência?' },
            { titulo: 'Poder além da força', pergunta: 'Como o poder age por meio de normas, rotinas e categorias, e não só por ordens?' },
            { titulo: 'Estrutura ou escolha?', pergunta: 'Quando faz sentido explicar um fenômeno pelas escolhas individuais, e quando pelas estruturas?' }
          ]
        },
        {
          id: 'm-relacoes', titulo: 'Relações humanas e vida cotidiana',
          descricao: 'Este módulo é trabalhado principalmente na Oficina de interpretação, por meio de casos em etapas.',
          unidades: [],
          vejaTambem: ['c:c-louca', 'c:c-silencio', 'c:c-transito'],
          planejadas: [
            { titulo: 'Quando valor pessoal vira desempenho', pergunta: 'O que acontece quando uma pessoa passa a medir o próprio valor pelo que produz?' },
            { titulo: 'Egoísta ou defensivo?', pergunta: 'Como interpretar um comportamento que admite leituras opostas?' },
            { titulo: 'Entre o que digo valorizar e o que faço', pergunta: 'Uma contradição entre valores e ações é hipocrisia, fraqueza ou outra coisa?' }
          ]
        }
      ]
    },
    {
      id: 'relacionar', num: 4, titulo: 'Relacionar',
      sub: 'Disciplinas, escalas e tradições em diálogo',
      descricao: 'Conectar história, ciência, filosofia e literatura; perceber como visões de mundo mudam e como diferentes níveis de explicação se complementam.',
      modulos: [
        {
          id: 'm-historia', titulo: 'Como as visões de mundo mudam',
          descricao: 'A história como laboratório de pensamento.',
          unidades: ['u-cosmos'],
          planejadas: [
            { titulo: 'Filosofia em vários lugares', pergunta: 'Por que, em épocas próximas, Grécia, Índia e China viram florescer formas novas de reflexão?' },
            { titulo: 'Como o conhecimento se perde e se preserva', pergunta: 'O que faz uma ideia sobreviver ou desaparecer?' },
            { titulo: 'A invenção do tempo de trabalho', pergunta: 'Como a indústria e o relógio mudaram a maneira de viver o tempo?' }
          ]
        },
        {
          id: 'm-natureza', titulo: 'Natureza, ciência e sistemas',
          descricao: 'Níveis de explicação, evolução e complexidade.',
          unidades: ['u-explicar'],
          planejadas: [
            { titulo: 'Emergência', pergunta: 'Como um todo pode fazer coisas que nenhuma de suas partes faz?' },
            { titulo: 'Humanos e outros animais', pergunta: 'O ser humano é radicalmente diferente dos outros animais, ou só em grau?' }
          ]
        }
      ]
    },
    {
      id: 'articular', num: 5, titulo: 'Articular',
      sub: 'Construir, organizar e expressar',
      descricao: 'Transformar pensamentos em reflexões estruturadas e comunicáveis. Esta etapa trabalha junto com o Laboratório de expressão.',
      modulos: [
        {
          id: 'm-escrever', titulo: 'A arquitetura de uma reflexão',
          descricao: 'Da pergunta à tese, das razões às objeções.',
          unidades: ['u-reflexao'],
          vejaTambem: ['x:x-c', 'x:x-d', 'x:x-e'],
          planejadas: [
            { titulo: 'Objeções e respostas', pergunta: 'Como responder a uma objeção sem apenas repetir a própria tese?' },
            { titulo: 'Explicar para quem discorda', pergunta: 'O que muda quando explico uma ideia para alguém que parte de outros pressupostos?' }
          ]
        }
      ]
    },
    {
      id: 'integrar', num: 6, titulo: 'Integrar',
      sub: 'Perguntas próprias e uma visão de mundo revisável',
      descricao: 'Formular perguntas próprias, elaborar interpretações fundamentadas e revisar a própria visão de mundo sem perder coerência nem abertura.',
      modulos: [
        {
          id: 'm-visao', titulo: 'Uma visão de mundo em construção',
          descricao: 'Coerência, revisão e autonomia intelectual.',
          unidades: ['u-visao'],
          vejaTambem: ['ferramenta:intuicao', 'ferramenta:desenvolvimento'],
          planejadas: [
            { titulo: 'A própria pergunta de investigação', pergunta: 'Qual pergunta eu gostaria de investigar pelos próximos meses — e por quê?' },
            { titulo: 'Revisar uma convicção antiga', pergunta: 'Que convicção minha mudou ao longo da vida, e o que a fez mudar?' }
          ]
        }
      ]
    }
  ];

  /* Aspectos do desenvolvimento (avaliação formativa — referências de
     reflexão, não medidas). */
  A.aspectos = [
    { id: 'perguntas', nome: 'Formular perguntas claras', sinais: 'Consigo dizer em uma frase o que quero saber; separo perguntas conceituais, empíricas e de valor.', pergunta: 'Releia uma pergunta que você escreveu há algum tempo. Ela está clara? O que você mudaria?' },
    { id: 'pressupostos', nome: 'Identificar pressupostos', sinais: 'Percebo o que uma frase precisa assumir; noto quando eu mesmo parto de algo não examinado.', pergunta: 'Que pressuposto seu você percebeu recentemente?' },
    { id: 'fatos', nome: 'Distinguir fatos e interpretações', sinais: 'Separo o que aconteceu do que concluí; noto quando uma descrição já carrega um julgamento.', pergunta: 'Em que situação recente você misturou o que viu com o que concluiu?' },
    { id: 'argumentos', nome: 'Construir argumentos coerentes', sinais: 'Minhas razões sustentam de fato a conclusão; consigo mostrar a ligação entre elas.', pergunta: 'Que argumento seu ficou mais claro depois de reconstruído em premissas?' },
    { id: 'alternativas', nome: 'Considerar perspectivas alternativas', sinais: 'Consigo apresentar a posição contrária de um jeito que seus defensores reconheceriam.', pergunta: 'De quem você discorda e consegue expor bem a posição?' },
    { id: 'incerteza', nome: 'Reconhecer incertezas e limites', sinais: 'Indico o grau de confiança nas minhas conclusões; sei o que ainda não sei.', pergunta: 'Que conclusão sua é mais provisória do que parecia?' },
    { id: 'conexoes', nome: 'Conectar conceitos', sinais: 'Percebo relações entre temas distintos e sei dizer onde a analogia deixa de valer.', pergunta: 'Que conexão inesperada entre dois assuntos você percebeu?' },
    { id: 'sintese', nome: 'Resumir ideias complexas', sinais: 'Consigo dizer o essencial em uma frase sem trair a complexidade.', pergunta: 'Qual ideia estudada você consegue resumir bem agora? Qual ainda escapa?' },
    { id: 'clareza', nome: 'Explicar com clareza', sinais: 'Não pulo etapas; defino palavras-chave; uso exemplos.', pergunta: 'Ao explicar algo a alguém, onde a pessoa se perdeu?' },
    { id: 'revisao', nome: 'Revisar conclusões', sinais: 'Mudo de ideia quando há boas razões, sem sentir que perdi algo de mim.', pergunta: 'Que opinião você revisou e como foi a experiência?' },
    { id: 'leitura', nome: 'Relacionar leituras a questões amplas', sinais: 'Uso uma obra para pensar, sem apenas resumir o que ela diz.', pergunta: 'Que leitura recente mudou a forma como você vê alguma questão?' }
  ];

  /* Afinidades: aproximações para navegar entre pensadores e obras.
     Não são rótulos políticos; um autor pode ter várias. */
  A.afinidades = {
    tradicao: 'Tradição, ordem e prudência',
    religiosa: 'Fé e transcendência',
    liberdade: 'Liberdade individual e mercado',
    critica: 'Crítica social e igualdade',
    sociedade: 'Sociedade e instituições',
    existencia: 'Existência e sentido',
    psicologia: 'Mente e comportamento',
    conhecimento: 'Conhecimento, lógica e linguagem',
    antiguidade: 'Pensamento antigo e medieval',
    oriente: 'Tradições não ocidentais'
  };

  /* Escala usada para registrar concordância (contrapontos e reações) */
  A.escala = [
    { v: 1, nome: 'Discordo' }, { v: 2, nome: 'Discordo em parte' }, { v: 3, nome: 'Não sei' },
    { v: 4, nome: 'Concordo em parte' }, { v: 5, nome: 'Concordo' }
  ];

  /* Rótulos de tipos de obra (biblioteca) */
  A.tiposObra = ['Romance', 'Novela', 'Conto', 'Teatro', 'Poesia', 'Ensaio', 'Clássico da filosofia', 'Introdução', 'Divulgação científica', 'História e sociedade', 'Memória e testemunho', 'Filme'];

  A.statusLeitura = [
    { id: 'quero', nome: 'Quero conhecer' },
    { id: 'lista', nome: 'Na lista de leitura' },
    { id: 'lendo', nome: 'Lendo' },
    { id: 'concluida', nome: 'Concluída' },
    { id: 'revisitar', nome: 'Quero revisitar' }
  ];
})();
