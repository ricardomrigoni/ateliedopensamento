/* =========================================================
   Oficina de interpretação — casos em nove etapas
   ---------------------------------------------------------
   1 situação · 2 interpretação inicial · 3 fatos e lacunas ·
   4 hipóteses · 5 nova informação · 6 perspectivas ·
   7 vieses e pressupostos · 8 conclusão provisória ·
   9 o que mudou
   ========================================================= */
(function () {
  const A = window.ATELIE;

  /* Critérios gerais de qualidade do raciocínio, usados como
     autoavaliação no fim de cada caso. */
  A.criteriosOficina = [
    'Separei o que aconteceu daquilo que concluí sobre o que aconteceu.',
    'Formulei pelo menos duas hipóteses realmente diferentes.',
    'Identifiquei informações que me faltavam, e não só as que tinha.',
    'Deixei a nova informação mudar algo — ou expliquei por que não mudou.',
    'Considerei o ponto de vista de mais de um envolvido.',
    'Notei pelo menos um pressuposto meu.',
    'Minha conclusão indica o grau de confiança e o que poderia derrubá-la.'
  ];

  A.casos = [
    {
      id: 'c-louca', titulo: 'A louça e o silêncio', escala: 'Doméstica', tipo: 'Expectativas não ditas',
      eixos: ['K', 'E'],
      resumo: 'Um casal, uma pia cheia e um ressentimento que parece maior que a louça.',
      situacao: `
        <p>Bia e Rafa moram juntos há dois anos. Nas últimas semanas, quase toda noite, Bia chega do trabalho e encontra a pia cheia de louça. Ela lava sem dizer nada.</p>
        <p>Numa sexta-feira, Rafa comenta, animado, que combinou um jantar com amigos em casa no sábado. Bia explode: “Claro, porque quem vai limpar tudo depois sou eu, como sempre!”. Rafa fica perplexo: “Do que você está falando? Você nunca reclamou de nada.”</p>
        <p>Os dois vão dormir sem se falar.</p>`,
      fatos: {
        disponiveis: [
          'Há louça na pia quando Bia chega, quase toda noite, nas últimas semanas.',
          'Bia lava a louça sem comentar.',
          'Rafa combinou um jantar sem consultar Bia (pelo menos é o que parece).',
          'Bia reagiu com raiva; Rafa diz que ela nunca reclamou.'
        ],
        ausentes: [
          'Quem cozinha? Quem faz as outras tarefas da casa (roupa, compras, contas, limpeza)?',
          'Houve algum acordo, explícito ou implícito, sobre a divisão das tarefas?',
          'Como estão os horários de trabalho de cada um nessas semanas?',
          'Isso começou recentemente? O que mudou?',
          'Como eram as tarefas nas famílias em que cada um cresceu?',
          'Bia de fato nunca falou, ou falou de um jeito que Rafa não percebeu?'
        ]
      },
      hipoteses: [
        'Rafa não percebe o trabalho doméstico porque cresceu numa casa em que outra pessoa (provavelmente a mãe) o fazia invisivelmente.',
        'Bia esperava que Rafa notasse sem que ela precisasse pedir, e lavar em silêncio era uma forma de “deixar claro” — que Rafa não leu.',
        'A divisão é, na verdade, equilibrada em outras tarefas que Bia não está contando; a louça é a parte visível para ela.',
        'O conflito não é sobre louça, mas sobre se sentir considerada nas decisões (o jantar foi a gota d’água).',
        'Um dos dois está sobrecarregado no trabalho, e isso mudou um arranjo que antes funcionava.'
      ],
      novaInfoPrompt: 'Releia suas hipóteses à luz desta informação.',
      novaInfo: `
        <p>No dia seguinte, conversando com mais calma, surgem três coisas:</p>
        <ul>
          <li>Rafa cozinha quase todas as noites — por isso a louça. Ele imaginava que, já que cozinhava, Bia preferia lavar.</li>
          <li>Bia começou um projeto novo no trabalho há um mês e chega exausta. Antes, os dois lavavam juntos depois do jantar; agora ela chega quando Rafa já jantou.</li>
          <li>Na casa dos pais de Bia, a mãe fazia tudo e reclamava em silêncio por anos. Bia prometeu a si mesma que nunca seria assim — e se viu fazendo exatamente isso.</li>
        </ul>`,
      perspectivas: [
        { nome: 'Psicologia da relação', html: 'Expectativas não verbalizadas são uma fonte clássica de ressentimento: cada um age segundo um acordo que só existe na própria cabeça. Bia esperava ser percebida; Rafa esperava ser avisado.' },
        { nome: 'Contexto material', html: 'Uma mudança no trabalho de Bia desfez, sem que ninguém decidisse, um arranjo que funcionava. O problema não começou no caráter de ninguém, mas numa mudança de condições.' },
        { nome: 'Normas sociais e história', html: 'Pesquisas sobre uso do tempo mostram, em muitos países, que as mulheres fazem em média mais trabalho doméstico, e também mais do “trabalho mental” de perceber o que precisa ser feito. Isso não explica este casal específico, mas ajuda a entender por que Bia reagiu à ideia de “como sempre”.' },
        { nome: 'Linguagem', html: '“Como sempre” e “você nunca reclamou” são generalizações que transformam um problema localizado em um julgamento sobre a pessoa — e convidam à defesa, não à conversa.' }
      ],
      vieses: [
        { nome: 'Leitura de mente', html: 'Os dois supuseram saber o que o outro pensava (“ele vê e não liga”; “ela prefere lavar”).' },
        { nome: 'Erro fundamental de atribuição', html: 'Tendência a explicar o comportamento do outro pelo caráter (“ele é folgado”) e o próprio pelas circunstâncias (“estou cansada”).' },
        { nome: 'Projeção da história familiar', html: 'Bia lê a situação através da relação dos pais. Isso pode iluminar algo verdadeiro — ou distorcer o presente.' },
        { nome: 'Pressuposto do leitor', html: 'Você tomou partido logo na primeira leitura? De quem? O que na descrição o levou a isso?' }
      ],
      aprofundar: { html: 'O conto “Dentro do bosque”, de Akutagawa, mostra versões incompatíveis de um mesmo acontecimento; aqui, as versões são compatíveis, mas incompletas.', refs: ['u:u-fato', 'b:b-akutagawa', 'u:u-emocao'] }
    },
    {
      id: 'c-silencio', titulo: 'O colega que não respondeu', escala: 'Trabalho', tipo: 'Atribuição de causas',
      eixos: ['K', 'H', 'E'],
      resumo: 'Um prazo, uma mensagem sem resposta e duas leituras opostas de um mesmo silêncio.',
      situacao: `
        <p>Marcos coordena um pequeno projeto e precisa de um relatório de Júlia, analista de outra área, até quinta-feira. Na segunda, manda uma mensagem pedindo o material. Terça: nada. Quarta: manda de novo, agora com o chefe de Júlia em cópia. Quinta de manhã chega o relatório, completo e bem feito, com uma linha seca: “Segue.”</p>
        <p>À tarde, Marcos fica sabendo por terceiros que Júlia comentou que ele “a expôs” para o chefe. Marcos pensa: “Ela demorou três dias para responder e eu é que expus? Típico de quem não gosta de ser cobrado.”</p>`,
      fatos: {
        disponiveis: [
          'Marcos pediu na segunda e não teve resposta até quarta.',
          'Na quarta, insistiu com o chefe de Júlia em cópia.',
          'O relatório chegou dentro do prazo, completo.',
          'Júlia teria comentado com outras pessoas que se sentiu exposta (informação de segunda mão).'
        ],
        ausentes: [
          'Júlia viu as mensagens? Estava trabalhando nesses dias?',
          'Como é a carga de trabalho dela? Quantos pedidos semelhantes recebe?',
          'Quais são as normas do lugar sobre responder mensagens e sobre copiar chefes?',
          'O que exatamente Júlia disse, e para quem?',
          'Já houve conflitos anteriores entre os dois ou entre as duas áreas?'
        ]
      },
      hipoteses: [
        'Júlia estava trabalhando no relatório e preferiu responder só ao entregar.',
        'Júlia estava sobrecarregada, com vários pedidos simultâneos, e priorizou pelo prazo.',
        'Na cultura daquela empresa, copiar o chefe é sinal de que se desconfia da pessoa — e foi percebido como acusação.',
        'Júlia de fato não gosta de ser cobrada, e Marcos acertou.',
        'Há tensão anterior entre as áreas, e este episódio apenas a expressou.'
      ],
      novaInfoPrompt: 'Como essa informação muda (ou não) o quadro?',
      novaInfo: `
        <p>Marcos descobre que Júlia recebe, toda semana, pedidos de cinco projetos diferentes, e que a equipe dela foi reduzida pela metade no último trimestre. Ela costuma responder só quando entrega, para não se comprometer com prazos que não sabe se conseguirá cumprir.</p>
        <p>Descobre também que, na área de Júlia, o chefe já advertiu duas pessoas depois de receber e-mails desse tipo em cópia.</p>`,
      perspectivas: [
        { nome: 'Individual', html: 'Cada um pode rever sua comunicação: Júlia poderia avisar que recebeu e quando entregaria; Marcos poderia perguntar antes de escalar.' },
        { nome: 'Organizacional', html: 'Uma equipe reduzida, muitos pedidos simultâneos e um chefe que pune a partir de cópias criam incentivos para o silêncio e para a desconfiança. O conflito é, em boa parte, produzido pela estrutura.' },
        { nome: 'Atribuição', html: 'O psicólogo Lee Ross chamou de erro fundamental de atribuição a tendência a explicar o comportamento alheio pelo caráter e subestimar a situação. Marcos fez isso (“típico de quem não gosta de ser cobrado”); Júlia, ao dizer que foi “exposta”, talvez também.' }
      ],
      vieses: [
        { nome: 'Erro fundamental de atribuição', html: '“Ela é assim” como primeira explicação.' },
        { nome: 'Informação de segunda mão', html: 'O comentário de Júlia chegou por terceiros, possivelmente modificado.' },
        { nome: 'Pressuposto sobre normas', html: 'Marcos assumiu que copiar o chefe é neutro; na área de Júlia, não é.' }
      ],
      aprofundar: { html: 'Compare com a unidade sobre emoções: o silêncio não tem significado em si; o significado vem da interpretação.', refs: ['u:u-emocao', 'q:q-causa-desculpa', 'u:u-fato'] }
    },
    {
      id: 'c-transito', titulo: 'Todos querem chegar mais rápido', escala: 'Sistema urbano', tipo: 'Consequências coletivas',
      eixos: ['H', 'J', 'A'],
      resumo: 'Uma avenida é alargada para acabar com os congestionamentos. Alguns anos depois, eles estão de volta.',
      situacao: `
        <p>Numa cidade média, uma avenida que liga os bairros residenciais ao centro vive congestionada. A prefeitura decide duplicá-la: duas faixas viram quatro. Na inauguração, o trânsito flui muito bem.</p>
        <p>Três anos depois, nos horários de pico, a avenida está tão congestionada quanto antes — agora com o dobro de carros.</p>
        <p>Cada motorista, individualmente, tomou uma decisão razoável. Ninguém quis o congestionamento.</p>`,
      fatos: {
        disponiveis: [
          'A avenida foi duplicada.',
          'O trânsito melhorou logo após a obra.',
          'Três anos depois, o congestionamento voltou, com mais carros.'
        ],
        ausentes: [
          'A população da região cresceu nesse período?',
          'Houve mudanças no transporte público (linhas, preços, frequência)?',
          'Novos empreendimentos foram construídos ao longo da avenida?',
          'Pessoas que antes iam de ônibus, ou em outros horários, passaram a ir de carro?',
          'O que aconteceu em cidades que fizeram obras parecidas?'
        ]
      },
      hipoteses: [
        'A população cresceu e o efeito da obra se esgotou.',
        'A obra atraiu novos usuários: pessoas que antes evitavam a avenida, iam de ônibus ou saíam em outros horários passaram a usá-la — até que ela voltou a congestionar.',
        'A avenida mais rápida valorizou bairros mais distantes, atraindo moradores que dependem de carro.',
        'O transporte público piorou, empurrando pessoas para os carros.'
      ],
      novaInfoPrompt: 'O que essa informação acrescenta à sua explicação?',
      novaInfo: `
        <p>Estudos de economia urbana encontram um padrão recorrente: em várias cidades, o aumento da capacidade das vias tende a ser acompanhado por um aumento quase proporcional do volume de tráfego, num prazo de alguns anos. Os economistas Gilles Duranton e Matthew Turner documentaram esse padrão em cidades dos Estados Unidos e o chamaram de “lei fundamental do congestionamento”. O fenômeno é conhecido como <strong>demanda induzida</strong>.</p>
        <p>Há também um resultado matemático curioso, o <strong>paradoxo de Braess</strong>: em certas redes, acrescentar uma via pode piorar o tempo de viagem de todos, porque cada motorista, escolhendo o melhor caminho para si, sobrecarrega o caminho que parecia melhor.</p>`,
      perspectivas: [
        { nome: 'Escolha individual', html: 'Cada motorista fez o que era melhor para si: com a avenida livre, valeu a pena ir de carro, ou mudar de horário, ou morar mais longe.' },
        { nome: 'Sistema', html: 'O congestionamento é um fenômeno emergente: surge da soma de decisões individuais razoáveis e não é desejado por ninguém. Explicá-lo pelas intenções de alguém não funciona.' },
        { nome: 'Política pública', html: 'Se a capacidade atrai demanda, outras medidas entram em discussão: transporte coletivo, cobrança pelo uso da via, organização da cidade para que as pessoas precisem se deslocar menos. Cada uma tem custos e beneficiários diferentes — e esse debate envolve valores, não só técnica.' }
      ],
      vieses: [
        { nome: 'Raciocínio estático', html: 'Supor que o comportamento das pessoas não muda quando as condições mudam.' },
        { nome: 'Busca de culpado', html: 'Procurar um responsável (“a prefeitura”, “os motoristas”) para um efeito sem autor.' },
        { nome: 'Causa única', html: 'Provavelmente, crescimento populacional e demanda induzida atuaram juntos.' }
      ],
      aprofundar: { html: 'Esse padrão — decisões individuais razoáveis produzindo um resultado coletivo que ninguém quer — aparece também em pescas excessivas, corridas armamentistas e no uso de antibióticos.', refs: ['u:u-explicar', 'q:q-unica-causa', 'u:u-causa'] }
    },
    {
      id: 'c-semmelweis', titulo: 'As mãos do médico', escala: 'Histórica e científica', tipo: 'Como uma ideia correta é rejeitada',
      eixos: ['I', 'C', 'J'],
      resumo: 'Viena, década de 1840: uma maternidade com duas alas e uma diferença assustadora de mortalidade.',
      situacao: `
        <p>No Hospital Geral de Viena, nos anos 1840, havia duas clínicas de maternidade. Na primeira, atendida por médicos e estudantes de medicina, morriam de febre puerperal (uma infecção após o parto) muito mais mulheres do que na segunda, atendida por parteiras. A diferença era conhecida; algumas mulheres imploravam para não ser levadas para a primeira clínica.</p>
        <p>As explicações da época incluíam “miasmas” (ar corrompido), fatores atmosféricos, o medo das pacientes, a posição do parto. O médico húngaro <strong>Ignaz Semmelweis</strong>, assistente na primeira clínica, decidiu investigar.</p>`,
      fatos: {
        disponiveis: [
          'As duas clínicas ficavam no mesmo hospital, na mesma cidade, com o mesmo clima.',
          'A mortalidade era muito maior na clínica dos médicos e estudantes.',
          'As pacientes eram admitidas em dias alternados, sem escolha prévia.'
        ],
        ausentes: [
          'O que os médicos e estudantes faziam de diferente das parteiras?',
          'A diferença existia sempre, ou mudou em algum momento?',
          'O que acontecia quando o parto ocorria fora do hospital, a caminho dele?'
        ]
      },
      hipoteses: [
        'Algo no ar (miasma) atingia mais a primeira clínica — mas as duas estavam no mesmo prédio.',
        'Os exames feitos por estudantes, mais numerosos e mais bruscos, causavam lesões.',
        'Algo era transmitido pelas mãos de quem fazia os partos.',
        'O medo das mulheres, sabendo da fama da clínica, as enfraquecia.'
      ],
      novaInfoPrompt: 'Como essa sequência de fatos muda as hipóteses? Por que, mesmo assim, a ideia foi rejeitada?',
      novaInfo: `
        <p>Em 1847, um colega de Semmelweis, Jakob Kolletschka, feriu-se com um bisturi durante uma autópsia e morreu de uma doença com sintomas parecidos com os da febre puerperal. Semmelweis notou que médicos e estudantes iam muitas vezes da sala de autópsias diretamente para a maternidade; as parteiras não faziam autópsias.</p>
        <p>Ele propôs que “partículas cadavéricas” levadas pelas mãos causavam a doença e, por volta de maio de 1847, passou a exigir que todos lavassem as mãos numa solução de cal clorada antes de examinar as pacientes. A mortalidade na primeira clínica caiu fortemente.</p>
        <p>Mesmo assim, suas ideias encontraram forte resistência. Ele perdeu o posto em Viena em 1849, publicou sua obra principal só em 1861, escreveu cartas agressivas aos críticos e morreu em 1865, internado num asilo. A teoria dos germes, com Pasteur e outros, só se consolidaria nas décadas seguintes.</p>`,
      perspectivas: [
        { nome: 'Epistemológica', html: 'Semmelweis tinha uma correlação forte e um experimento convincente, mas não um mecanismo aceitável na época: não se sabia o que eram microrganismos patogênicos. Seus críticos não eram todos irracionais — sua explicação teórica era vaga.' },
        { nome: 'Social e institucional', html: 'Aceitar a ideia implicava admitir que os próprios médicos, figuras de autoridade, estavam matando pacientes com as mãos. Hierarquias, rivalidades e política acadêmica pesaram. Historiadores discutem o peso de cada fator.' },
        { nome: 'Comunicação', html: 'Semmelweis demorou a publicar seus resultados e, quando o fez, reagiu às críticas com ataques pessoais. A forma de comunicar uma ideia influencia sua recepção — o que não torna a rejeição justa, mas ajuda a entendê-la.' }
      ],
      vieses: [
        { nome: 'Proteção da identidade profissional', html: 'Uma evidência que ameaça a imagem de si tende a ser examinada com rigor redobrado.' },
        { nome: 'Exigência de mecanismo', html: 'Recusar uma correlação forte por falta de explicação teórica — às vezes prudente, às vezes fatal.' },
        { nome: 'Mito do herói solitário', html: 'A história é frequentemente contada como “gênio contra idiotas”. Pesquisas históricas mostram um quadro mais complexo, que inclui os erros do próprio Semmelweis.' }
      ],
      aprofundar: { html: 'O caso conecta a unidade sobre correlação e causa à unidade sobre como visões de mundo mudam.', refs: ['u:u-causa', 'u:u-cosmos', 'q:q-identidade-ideia'] }
    },
    {
      id: 'c-reestruturacao', titulo: '“Reestruturação”', escala: 'Linguagem e sociedade', tipo: 'Enquadramento e escolha de palavras',
      eixos: ['F', 'H'],
      resumo: 'Uma empresa demite trezentas pessoas. Três textos contam o mesmo fato.',
      situacao: `
        <p>Uma fábrica de calçados numa cidade do interior anuncia o fim de trezentos postos de trabalho. Três textos circulam no mesmo dia:</p>
        <ol>
          <li><strong>Comunicado da empresa:</strong> “Em linha com nossa estratégia de modernização e competitividade, a companhia concluiu uma reestruturação operacional que resultou no desligamento de 300 colaboradores, aos quais será oferecido suporte de recolocação.”</li>
          <li><strong>Nota do sindicato:</strong> “Mais 300 pais e mães de família jogados na rua por uma empresa que lucrou milhões no ano passado.”</li>
          <li><strong>Reportagem local:</strong> “Fábrica demite 300 funcionários; empresa alega necessidade de reduzir custos diante da concorrência de importados.”</li>
        </ol>`,
      fatos: {
        disponiveis: [
          '300 postos de trabalho foram encerrados.',
          'A empresa afirma razões de competitividade e oferece algum apoio de recolocação.',
          'O sindicato afirma que a empresa lucrou no ano anterior.'
        ],
        ausentes: [
          'Qual foi de fato o resultado financeiro da empresa? Lucro em que medida, e com que tendência?',
          'Como está a concorrência no setor? O que outras fábricas estão fazendo?',
          'Em que consiste o “suporte de recolocação”?',
          'Qual o peso desses empregos na economia da cidade?',
          'Houve alternativas consideradas (redução de jornada, férias coletivas)?'
        ]
      },
      hipoteses: [
        'A empresa enfrenta concorrência real e as demissões evitam um problema maior no futuro.',
        'A empresa poderia manter os empregos com lucro menor e escolheu priorizar acionistas.',
        'As duas coisas são parcialmente verdadeiras: há pressão competitiva e há escolhas sobre como distribuir o custo do ajuste.'
      ],
      novaInfoPrompt: 'Como esses dados mudam a leitura dos três textos?',
      novaInfo: `
        <p>O balanço público da empresa mostra lucro no ano anterior, mas 40% menor que no ano anterior a esse, e queda de vendas em três trimestres seguidos. Ao mesmo tempo, a empresa distribuiu dividendos aos acionistas no início do ano. O “suporte de recolocação” consiste em um curso on-line de duas semanas.</p>`,
      perspectivas: [
        { nome: 'Análise das palavras', html: '“Desligamento” e “colaboradores” suavizam e despersonalizam; “jogados na rua” e “pais e mães de família” dramatizam e personalizam. “Demite” e “alega” são mais neutros — mas “alega” já sugere certa distância em relação à justificativa da empresa.' },
        { nome: 'Enquadramento', html: 'A empresa enquadra o fato como estratégia; o sindicato, como injustiça moral; a reportagem, como notícia com duas versões. Cada enquadramento seleciona o que mostrar e o que deixar de fora.' },
        { nome: 'Interesse e verdade', html: 'Que cada texto sirva a um interesse não significa que seja falso. O dado do lucro, citado pelo sindicato, é verdadeiro — mas incompleto. A modernização alegada pela empresa pode ser real — e não diz quem arca com o custo.' }
      ],
      vieses: [
        { nome: 'Confiança seletiva', html: 'Tendemos a acreditar mais no texto alinhado à nossa posição prévia sobre empresas ou sindicatos.' },
        { nome: 'Falso equilíbrio', html: 'Ouvir “os dois lados” não garante compreender o caso; é preciso verificar as afirmações de cada lado.' },
        { nome: 'Efeito das palavras', html: 'Como vimos com Loftus e Palmer, palavras diferentes podem mudar até o que lembramos de um acontecimento.' }
      ],
      aprofundar: { html: 'Compare com as unidades sobre linguagem, sobre pressupostos e sobre dinheiro.', refs: ['u:u-palavra', 'u:u-pressupostos', 'u:u-dinheiro'] }
    }
  ];
})();
