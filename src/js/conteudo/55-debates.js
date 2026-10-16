/* =========================================================
   Arena de debates — grandes controvérsias
   ---------------------------------------------------------
   Cada debate apresenta dois polos na melhor versão de cada um
   (com argumentos, autores e críticas), o que os dois costumam
   ignorar e possíveis terceiras vias. O leitor registra onde
   está antes e depois, e o que o fez mudar — ou não.
   ========================================================= */
(function () {
  const A = window.ATELIE;

  A.debates = [
    {
      id: 'd-tradicao', titulo: 'Tradição ou reconstrução racional?',
      pergunta: 'Para melhorar uma sociedade, devemos partir do que herdamos e reformá-lo com prudência, ou examinar tudo pela razão e reconstruir o que não se justifica?',
      contexto: 'Esse debate ganhou forma clássica entre Edmund Burke e Thomas Paine, a propósito da Revolução Francesa, e atravessa discussões atuais sobre família, educação, religião e Estado.',
      polos: [
        {
          nome: 'Reforma prudente a partir da tradição',
          tese: 'Instituições herdadas condensam a experiência de gerações; devem ser reformadas aos poucos, a partir de dentro, e só depois de compreendidas.',
          argumentos: [
            'Nenhum indivíduo ou geração tem conhecimento suficiente para redesenhar uma sociedade inteira.',
            'Mudanças radicais produzem consequências não previstas, frequentemente piores que os males que queriam corrigir.',
            'Laços, costumes e lealdades concretas sustentam a liberdade e a confiança, e são fáceis de destruir e difíceis de recriar.'
          ],
          melhor: 'Na sua melhor forma, essa posição não é contra a mudança: é contra a arrogância de quem acredita poder planejar o que não compreende. O século XX, com revoluções que prometiam a sociedade perfeita e produziram terror, é seu principal argumento histórico.',
          autores: ['p:burke', 'p:chesterton', 'p:oakeshott', 'p:scruton', 'p:hayek'],
          obras: ['b-burke', 'b-scruton-conservador', 'b-chesterton-ortodoxia', 'b-kirk'],
          criticas: 'Pode proteger privilégios injustos sob o nome de tradição; nem sempre diz qual tradição seguir quando várias convivem; e mudanças graduais podem ser lentas demais para quem sofre a injustiça agora.'
        },
        {
          nome: 'Reconstrução pela razão e pelos direitos',
          tese: 'Instituições se justificam pelos direitos e pelo bem que realizam, não pela antiguidade; o que não resiste ao exame racional deve ser mudado.',
          argumentos: [
            'Cada geração tem o direito de decidir por si mesma; os mortos não devem governar os vivos.',
            'Muitas tradições preservaram dominação: escravidão, exclusão das mulheres, privilégios hereditários.',
            'Grandes avanços — direitos civis, sufrágio universal, liberdade religiosa — exigiram romper com o que existia.'
          ],
          melhor: 'Na sua melhor forma, essa posição não despreza a história: exige que o poder se justifique. A pergunta “por que deve ser assim?” protegeu muitas pessoas de serem sacrificadas a um “sempre foi assim”.',
          autores: ['p:paine', 'p:rousseau', 'p:mill', 'p:kant', 'p:rawls'],
          obras: ['b-paine', 'b-mill', 'b-rousseau-desigualdade', 'b-rawls'],
          criticas: 'Superestima a capacidade da razão de prever os efeitos de grandes mudanças; tende a tratar como irracional o que apenas não compreende; e já serviu de justificativa para revoluções violentas.'
        }
      ],
      ignorados: 'Os dois lados costumam ignorar que toda reforma racional usa recursos herdados (a língua, conceitos jurídicos, ideais morais), e que toda tradição viva se reformou muitas vezes. A pergunta concreta raramente é “tradição ou razão?”, e sim “quanto mudar, quão rápido e com que garantias”.',
      terceira: 'Uma terceira via é o “equilíbrio reflexivo”: testar princípios contra intuições e práticas herdadas, e vice-versa, aceitando que nenhum dos dois tem a palavra final.',
      perguntas: ['Que mudança histórica você considera indiscutivelmente boa? Ela confirma qual dos lados?', 'Que tradição você defende mesmo sem saber explicar inteiramente por quê?']
    },
    {
      id: 'd-natureza', titulo: 'A natureza humana é limitada ou perfectível?',
      pergunta: 'Os males sociais vêm sobretudo de limites permanentes da natureza humana, ou de arranjos sociais que podem ser corrigidos?',
      contexto: 'É o núcleo do “conflito de visões” descrito por Thomas Sowell, e reaparece em debates sobre crime, educação, pobreza e política.',
      polos: [
        {
          nome: 'Visão restrita: limites permanentes',
          tese: 'O ser humano é capaz de bem e de mal, egoísta e limitado em conhecimento; as instituições devem lidar com essa natureza, não esperar transformá-la.',
          argumentos: [
            'A história mostra os mesmos vícios em todas as épocas e sistemas.',
            'Projetos de criar um “homem novo” resultaram em coerção.',
            'Incentivos, regras e tradições funcionam melhor do que apelos à virtude.'
          ],
          melhor: 'Na melhor forma, essa visão é uma forma de humildade: os Federalistas americanos desenharam freios e contrapesos porque “se os homens fossem anjos, nenhum governo seria necessário”. Soljenítsin lembrou que a linha entre o bem e o mal não passa entre grupos, mas pelo coração de cada pessoa.',
          autores: ['p:sowell', 'p:burke', 'p:solzhenitsyn', 'p:pascal', 'p:peterson'],
          obras: ['b-sowell-visoes', 'b-gulag', 'b-senhor-moscas', 'b-pinker-tabula'],
          criticas: 'Pode naturalizar injustiças (“sempre foi assim”) e servir de desculpa para não tentar melhorar o que pode ser melhorado.'
        },
        {
          nome: 'Visão irrestrita: possibilidades abertas',
          tese: 'Grande parte dos males humanos vem de condições sociais — pobreza, ignorância, opressão — que podem ser transformadas.',
          argumentos: [
            'Mudanças sociais já reduziram drasticamente a violência, a fome e a mortalidade infantil.',
            'Comportamentos que pareciam “naturais” mudaram com educação e instituições.',
            'Atribuir problemas à natureza humana pode encobrir causas sociais concretas.'
          ],
          melhor: 'Na melhor forma, essa visão é uma forma de esperança responsável: se algo foi feito por pessoas, pode ser refeito por pessoas. Ela inspirou a abolição, a escola pública e a medicina social.',
          autores: ['p:rousseau', 'p:marx', 'p:mill', 'p:rawls'],
          obras: ['b-rousseau-desigualdade', 'b-pinker-iluminismo', 'b-pedagogia-oprimido'],
          criticas: 'Tende a subestimar custos e a superestimar o conhecimento de quem planeja; pode tratar quem discorda como obstáculo ao progresso.'
        }
      ],
      ignorados: 'Os dados raramente são de uma visão só: a violência caiu muito ao longo dos séculos (o que agrada à visão irrestrita), mas a queda parece ligada a instituições como Estados, mercados e normas de autocontrole (o que agrada à restrita). Steven Pinker, um otimista sobre o progresso, também é um crítico da ideia de tábula rasa.',
      terceira: 'Uma terceira via é distinguir domínios: a natureza humana pode ser bastante estável e, ainda assim, comportamentos médios podem mudar muito quando mudam incentivos, normas e instituições.',
      perguntas: ['Em que assunto você costuma adotar a visão restrita? E a irrestrita?', 'Que evidência histórica mais pesa para você?']
    },
    {
      id: 'd-desigualdade', titulo: 'A desigualdade econômica é um problema em si?',
      pergunta: 'O que importa é que os mais pobres vivam bem e tenham liberdade, ou a distância entre ricos e pobres também é, em si, uma injustiça?',
      contexto: 'Debate central entre liberais, conservadores e a esquerda, com dados empíricos em disputa e diferenças profundas de valores.',
      polos: [
        {
          nome: 'O foco na pobreza e na liberdade',
          tese: 'Desigualdade resultante de trocas livres e de diferenças de talento e esforço não é injusta; o problema é a pobreza, e o caminho é crescimento e liberdade.',
          argumentos: [
            'A economia de mercado tirou bilhões de pessoas da pobreza extrema nas últimas décadas.',
            'Redistribuir exige coerção e pode reduzir incentivos para produzir.',
            'Igualar resultados exige tratar pessoas desigualmente.'
          ],
          melhor: 'Na melhor forma (Hayek, Nozick, Sowell), a posição defende que a justiça está nas regras e não nos resultados: se ninguém foi fraudado ou coagido, a distribuição resultante é legítima — e tentar impor outra destrói a liberdade e, no fim, a prosperidade dos pobres.',
          autores: ['p:hayek', 'p:sowell', 'p:tocqueville'],
          obras: ['b-hayek-servidao', 'b-sowell-visoes', 'b-roberto-campos'],
          criticas: 'Supõe que os pontos de partida são justos; desigualdades extremas podem se converter em poder político; e “trocas livres” entre partes muito desiguais podem não ser tão livres.'
        },
        {
          nome: 'A desigualdade como injustiça',
          tese: 'Grandes desigualdades são injustas porque refletem, em boa parte, sorte e herança, e porque corroem a igualdade de oportunidades, a democracia e a coesão social.',
          argumentos: [
            'Ninguém escolhe onde nasce; boa parte da renda depende de fatores não merecidos.',
            'Concentração de riqueza se traduz em poder político.',
            'Sociedades muito desiguais tendem a ter menos mobilidade social.'
          ],
          melhor: 'Na melhor forma (Rawls), a posição propõe que desigualdades só são justas se beneficiarem os menos favorecidos — o que admite desigualdades, mas exige justificá-las. Alguns conservadores comunitaristas também temem que desigualdades extremas destruam o senso de pertencimento comum.',
          autores: ['p:rawls', 'p:marx', 'p:rousseau'],
          obras: ['b-rawls', 'b-piketty', 'b-sandel-merito', 'b-quarto-despejo'],
          criticas: 'Pode subestimar os efeitos da redistribuição sobre incentivos e liberdade; e corre o risco de transformar a inveja em virtude política.'
        }
      ],
      ignorados: 'Os dois lados costumam misturar perguntas diferentes: o que é justo (valores), o que funciona (dados) e o que é possível (política). Também é comum ignorar a diferença entre desigualdade de renda, de riqueza, de oportunidades e de status.',
      terceira: 'Uma terceira via foca em mobilidade e piso social: aceitar desigualdades de resultado, desde que haja um mínimo digno garantido e oportunidades reais de subir.',
      perguntas: ['Se todos ficassem mais ricos, mas a distância aumentasse, você consideraria isso bom?', 'O que, na sua vida, você atribui a mérito e o que atribui a sorte?']
    },
    {
      id: 'd-mercado', titulo: 'Há coisas que não deveriam estar à venda?',
      pergunta: 'O mercado é a forma mais eficiente e livre de organizar a vida econômica — ou, sem limites, ele corrói valores que não se medem em dinheiro?',
      contexto: 'Curiosamente, esse debate não opõe simplesmente esquerda e direita: conservadores religiosos e críticos de esquerda frequentemente se encontram na defesa de limites ao mercado.',
      polos: [
        {
          nome: 'O mercado como ordem livre e informativa',
          tese: 'Trocas voluntárias respeitam a liberdade, transmitem informação pelos preços e geram prosperidade; limites devem ser poucos e bem justificados.',
          argumentos: [
            'Os preços coordenam o conhecimento disperso de milhões de pessoas.',
            'Proibir trocas entre adultos que consentem é paternalismo.',
            'Economias planejadas fracassaram, em eficiência e em liberdade.'
          ],
          melhor: 'Na melhor forma, a posição sustenta que o mercado não é só eficiente: ele permite que estranhos cooperem sem precisar concordar sobre o que é a vida boa — uma condição da paz numa sociedade plural.',
          autores: ['p:hayek', 'p:sowell'],
          obras: ['b-hayek-servidao', 'b-roberto-campos'],
          criticas: 'Ignora que certos bens mudam de natureza quando comprados (amizade, honra, votos) e que preços refletem poder de compra desigual.'
        },
        {
          nome: 'Limites morais ao mercado',
          tese: 'Algumas coisas são degradadas quando tratadas como mercadorias; uma sociedade de mercado — e não só uma economia de mercado — perde bens essenciais.',
          argumentos: [
            'Pagar por certas coisas muda seu significado (crianças por notas, órgãos, cidadania).',
            'O mercado pode corroer comunidades, tradições e o sagrado.',
            'Quem pode pagar mais passa a ter acesso a tudo.'
          ],
          melhor: 'Na melhor forma, a posição reúne vozes muito diferentes: Michael Sandel e Karl Polanyi de um lado; Roger Scruton, Simone Weil e a doutrina social católica de outro. Todos lembram que há bens — família, fé, paisagem, amizade — que só existem fora da lógica da troca.',
          autores: ['p:scruton', 'p:weil', 'p:marx', 'p:macintyre'],
          obras: ['b-sandel-merito', 'b-weil-enraizamento', 'b-graeber', 'b-han'],
          criticas: 'Quem decide o que “não deve estar à venda”? Limites podem virar paternalismo e criar mercados paralelos.'
        }
      ],
      ignorados: 'Os dois lados frequentemente esquecem a pergunta prática: quais bens, especificamente, e com que mecanismos de proteção? A defesa abstrata do mercado e a crítica abstrata do capitalismo raramente ajudam a decidir casos concretos.',
      terceira: 'Uma terceira via é examinar caso a caso o que acontece com um bem quando ele é comprado: se o pagamento muda sua natureza ou apenas sua distribuição.',
      perguntas: ['Escolha três coisas que você acha que não deveriam ser vendidas. O que elas têm em comum?', 'Você venderia algo que considera sagrado por uma quantia muito alta? Por que não?']
    },
    {
      id: 'd-sentido', titulo: 'O sentido da vida é descoberto ou construído?',
      pergunta: 'Existe um sentido dado — por Deus, pela natureza ou pela ordem do mundo — que devemos descobrir, ou o sentido é algo que cada pessoa cria?',
      contexto: 'Uma das perguntas mais antigas, que divide tradições religiosas, filosofias clássicas e o existencialismo moderno.',
      polos: [
        {
          nome: 'Sentido descoberto',
          tese: 'A vida tem um fim que não inventamos: a verdade, o bem, Deus. Vivemos bem quando nos ordenamos a ele.',
          argumentos: [
            'Um sentido inventado por mim não teria autoridade sobre mim em momentos de crise.',
            'A experiência de vocação, dever e amor parece de algo que nos chama, não que escolhemos.',
            'Tradições religiosas e filosóficas convergem em muitas intuições sobre a vida boa.'
          ],
          melhor: 'Na melhor forma — em Agostinho, Pascal, Dostoiévski, C. S. Lewis ou Frankl —, a posição não depende de ignorar o sofrimento: ela o enfrenta e sustenta que o sentido é real justamente porque sobrevive a ele.',
          autores: ['p:agostinho', 'p:pascal', 'p:dostoievski', 'p:cslewis', 'p:frankl', 'p:kierkegaard'],
          obras: ['b-karamazov', 'b-pascal', 'b-frankl', 'b-cristianismo-puro'],
          criticas: 'Depende de pressupostos metafísicos que não podem ser demonstrados; e “descobrir o sentido” pode virar submissão a quem diz conhecê-lo.'
        },
        {
          nome: 'Sentido construído',
          tese: 'O universo não oferece sentido; cabe a cada um criá-lo por suas escolhas, compromissos e criações.',
          argumentos: [
            'Não há evidência de um propósito inscrito no cosmos.',
            'Sentidos impostos de fora já justificaram opressões.',
            'Assumir que criamos o sentido nos torna plenamente responsáveis por ele.'
          ],
          melhor: 'Na melhor forma — em Nietzsche, Sartre e Camus —, a posição não é niilista: é uma exigência de coragem. Sem garantias, ainda podemos viver com intensidade, honestidade e solidariedade.',
          autores: ['p:nietzsche', 'p:camus', 'p:beauvoir'],
          obras: ['b-sisifo', 'b-estrangeiro', 'b-zaratustra', 'b-nausea'],
          criticas: 'Se cada um cria o próprio sentido, como julgar um sentido criado como vazio ou cruel? E o sentido construído resiste aos momentos de perda?'
        }
      ],
      ignorados: 'Os dois lados às vezes esquecem que, na prática, as pessoas descobrem sentido em compromissos que também escolhem: ninguém escolhe os pais, mas escolhe como honrá-los.',
      terceira: 'Uma terceira via é a de Frankl: o sentido não é inventado, mas também não é imposto — é encontrado em situações concretas por uma pessoa livre que responde a elas.',
      perguntas: ['O que, na sua vida, parece ter sido descoberto? E o que foi escolhido?', 'Seu sentido de vida resistiria à perda daquilo que você mais ama?']
    },
    {
      id: 'd-expressao', titulo: 'Quais devem ser os limites da liberdade de expressão?',
      pergunta: 'A liberdade de expressão deve proteger inclusive ideias ofensivas e falsas, ou certos discursos devem ser limitados para proteger pessoas e a própria democracia?',
      contexto: 'Debate antigo que ganhou nova forma com as redes sociais, envolvendo leis, plataformas, universidades e o cotidiano.',
      polos: [
        {
          nome: 'Proteção ampla da expressão',
          tese: 'O remédio para o mau discurso é mais discurso; restrições devem se limitar a ameaças e incitação direta à violência.',
          argumentos: [
            'Quem decide o que é ofensivo ou falso terá um poder perigoso — e pode ser seu adversário amanhã.',
            'Ideias erradas fortalecem as certas ao serem contestadas (Mill).',
            'Muitas verdades começaram como heresias.'
          ],
          melhor: 'Na melhor forma, a posição é uma defesa dos fracos: historicamente, a censura serviu sobretudo para proteger os poderosos de críticas. Mill e Orwell a defenderam a partir de posições políticas diferentes.',
          autores: ['p:mill', 'p:peterson', 'p:solzhenitsyn'],
          obras: ['b-mill', 'b-fahrenheit', 'b-1984', 'b-orwell-ensaios'],
          criticas: 'Ignora que certos discursos silenciam outros (por intimidação) e que a desinformação em escala pode corroer a deliberação democrática.'
        },
        {
          nome: 'Limites para proteger pessoas e a democracia',
          tese: 'A expressão é um valor entre outros; discursos que degradam grupos, incitam ódio ou espalham desinformação perigosa podem ser limitados.',
          argumentos: [
            'O discurso de ódio afeta a dignidade e a segurança de grupos vulneráveis.',
            'Democracias podem ser destruídas por quem usa suas liberdades contra ela.',
            'Várias democracias estáveis têm leis contra discurso de ódio sem se tornarem autoritárias.'
          ],
          melhor: 'Na melhor forma (como em Jeremy Waldron, <em>The Harm in Hate Speech</em>), a posição argumenta que proteger a dignidade pública de todos é uma condição da própria liberdade de participar do debate.',
          autores: ['p:rawls', 'p:foucault'],
          obras: ['b-conto-aia'],
          criticas: 'Definições vagas de “ódio” ou “desinformação” podem ser usadas contra opositores; e quem controla as regras nem sempre é neutro.'
        }
      ],
      ignorados: 'Os dois lados confundem frequentemente três coisas: o que o Estado pode punir, o que empresas e instituições privadas podem moderar, e o que as pessoas fazem bem em evitar por cortesia.',
      terceira: 'Uma terceira via separa os níveis: proteção legal ampla, normas de convivência exigentes e cultura de debate que valorize a refutação em vez da exclusão.',
      perguntas: ['Pense numa ideia que você acha perigosa. Quem você aceitaria que decidisse proibi-la?', 'Pense numa ideia sua que muitos acham ofensiva. Que regra a protegeria?']
    },
    {
      id: 'd-individuo', titulo: 'O indivíduo vem antes da comunidade?',
      pergunta: 'A sociedade existe para proteger escolhas individuais, ou o indivíduo só se realiza dentro de comunidades e laços que não escolheu inteiramente?',
      contexto: 'Debate que atravessa a divisão esquerda–direita: liberais de esquerda e de direita tendem a um lado; conservadores e comunitaristas, ao outro.',
      polos: [
        {
          nome: 'Primazia do indivíduo',
          tese: 'Cada pessoa é livre para escolher seus fins; comunidades são associações voluntárias e não devem impor um modo de vida.',
          argumentos: [
            'Comunidades já oprimiram minorias, mulheres e dissidentes.',
            'Só o indivíduo sente, pensa e responde por seus atos.',
            'A pluralidade de modos de vida exige neutralidade do Estado.'
          ],
          melhor: 'Na melhor forma, a posição protege quem não se encaixa: o jovem que deixa a religião dos pais, a mulher que recusa o papel esperado, o artista excêntrico.',
          autores: ['p:mill', 'p:hayek', 'p:rawls', 'p:kant'],
          obras: ['b-mill', 'b-revolta-atlas'],
          criticas: 'O indivíduo “livre de laços” é uma abstração: ninguém escolhe a língua, a família ou a época. E o individualismo pode produzir solidão e perda de sentido.'
        },
        {
          nome: 'Primazia dos laços',
          tese: 'Somos formados por famílias, comunidades e tradições; uma sociedade que só protege escolhas individuais dissolve aquilo que dá sentido às escolhas.',
          argumentos: [
            'Identidades e virtudes se aprendem em comunidades concretas.',
            'Obrigações não escolhidas — com pais, filhos, pátria — fazem parte da vida moral.',
            'A erosão de laços comunitários está associada a solidão e desamparo.'
          ],
          melhor: 'Na melhor forma (Burke, Tocqueville, Weil, MacIntyre, Scruton), a posição defende que a liberdade real precisa de raízes: uma pessoa sem pertencimento não é mais livre — é mais vulnerável.',
          autores: ['p:burke', 'p:tocqueville', 'p:weil', 'p:macintyre', 'p:scruton'],
          obras: ['b-weil-enraizamento', 'b-macintyre', 'b-tocqueville', 'b-lasch'],
          criticas: 'Que comunidade tem autoridade quando várias se chocam? E quem protege o indivíduo que quer sair?'
        }
      ],
      ignorados: 'Os dois lados esquecem que muitas comunidades valiosas são voluntárias e muitas escolhas valiosas só são possíveis dentro de comunidades.',
      terceira: 'Uma terceira via é o “direito de saída”: valorizar e proteger comunidades fortes, desde que cada pessoa possa deixá-las.',
      perguntas: ['Que laço não escolhido é importante para você?', 'Que escolha individual sua sua comunidade de origem teria dificuldade de aceitar?']
    },
    {
      id: 'd-moral', titulo: 'A moral é objetiva ou construída?',
      pergunta: 'Existem verdades morais válidas para todos, ou a moral é produto de culturas, sentimentos e acordos humanos?',
      contexto: 'Uma pergunta da filosofia que tem consequências práticas: se podemos julgar outras culturas, o passado e a nós mesmos.',
      polos: [
        {
          nome: 'Moral objetiva',
          tese: 'Algumas coisas são certas ou erradas independentemente do que pensamos — como torturar inocentes por diversão.',
          argumentos: [
            'Nossas intuições morais mais firmes não parecem preferências.',
            'Se a moral fosse só cultural, não poderíamos dizer que a abolição da escravidão foi um progresso.',
            'Tradições muito diferentes convergem em princípios básicos.'
          ],
          melhor: 'Na melhor forma, a posição tem versões religiosas (lei natural em Tomás de Aquino; C. S. Lewis) e seculares (Kant; realistas morais contemporâneos), e sustenta que sem objetividade a crítica moral perde a força.',
          autores: ['p:aquino', 'p:cslewis', 'p:kant', 'p:dostoievski'],
          obras: ['b-abolicao', 'b-cristianismo-puro', 'b-karamazov'],
          criticas: 'Se a moral é objetiva, por que discordamos tanto? E de onde viria sua autoridade, se não de Deus — e, se de Deus, como resolver o dilema de Eutífron?'
        },
        {
          nome: 'Moral construída',
          tese: 'A moral nasce de sentimentos, necessidades de cooperação e convenções, e varia com as culturas e as épocas.',
          argumentos: [
            'A diversidade de normas morais entre culturas é enorme.',
            'A evolução e a psicologia explicam a origem de nossas intuições morais.',
            'Afirmar verdades morais absolutas já justificou intolerância e guerras.'
          ],
          melhor: 'Na melhor forma (Hume, Nietzsche, construtivistas contemporâneos), a posição não leva ao “vale tudo”: moral construída ainda pode ser racional, criticável e melhor ou pior para a vida humana.',
          autores: ['p:hume', 'p:nietzsche', 'p:foucault'],
          obras: ['b-genealogia', 'b-montaigne'],
          criticas: 'Se a moral é só construção, com que base condenar o que uma cultura inteira aprova? A posição tem dificuldade de explicar o progresso moral.'
        }
      ],
      ignorados: 'Os dois lados confundem frequentemente a origem de uma crença moral (como surgiu) com sua validade (se é correta) — a mesma distinção entre explicar e justificar estudada no percurso.',
      terceira: 'Uma terceira via é o pluralismo de valores de Isaiah Berlin: há valores objetivos, mas vários, e às vezes inconciliáveis — o que exige escolhas trágicas, não relativismo.',
      perguntas: ['Há algo que você considera errado em qualquer cultura e época?', 'Você já mudou de opinião sobre uma questão moral? O que provocou a mudança?']
    }
  ];
})();
