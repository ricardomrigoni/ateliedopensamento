/* =========================================================
   Etapas 4, 5 e 6 — Relacionar, Articular, Integrar
   ========================================================= */
(function () {
  const U = window.ATELIE.unidades;

  /* ---------------------------------------------------------
     Quando o céu mudou de lugar
     --------------------------------------------------------- */
  U['u-cosmos'] = {
    id: 'u-cosmos',
    titulo: 'Quando o céu mudou de lugar',
    pergunta: 'Como uma ideia passa de hipótese marginal a evidência óbvia — e o que as pessoas perdem e ganham quando o céu muda de lugar?',
    duracao: '30 min',
    eixos: ['I', 'B', 'J'],
    resumo: 'Imagens do cosmos em várias culturas; o geocentrismo como teoria séria; por que a aceitação do heliocentrismo levou tempo; o que é uma mudança de visão de mundo.',
    blocos: [
      { t: 'importa', html: `
        <p>Hoje é “óbvio” que a Terra gira em torno do Sol. Mas, se você pensar bem, todos os dias você <em>vê</em> o Sol nascer, atravessar o céu e se pôr, enquanto o chão sob seus pés parece imóvel. A história de como a humanidade passou a acreditar no contrário do que via é um laboratório perfeito para entender como visões de mundo mudam — por evidências, por instrumentos, por instituições e por significados.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Imagine que você vive no ano 1500 e alguém lhe diz que a Terra se move a grande velocidade ao redor do Sol. Que razões razoáveis você teria para duvidar? Escreva pelo menos duas.' },

      { t: 'conceito', titulo: 'O geocentrismo era uma teoria séria', html: `
        <p>É tentador imaginar que os antigos acreditavam numa Terra no centro por ignorância. Não é bem assim.</p>
        <p>O modelo geocêntrico consolidado pelo astrônomo Ptolomeu em Alexandria, no século II, no tratado conhecido como <em>Almagesto</em>, previa com boa precisão as posições dos planetas, usando um sistema engenhoso de círculos sobre círculos. Ele foi usado e aperfeiçoado durante séculos — inclusive por astrônomos do mundo islâmico, como Nasir al-Din al-Tusi e seus colegas no observatório de Maragha, no século XIII, que desenvolveram ferramentas matemáticas depois presentes na obra de Copérnico.</p>
        <p>E havia boas razões para resistir à ideia de uma Terra em movimento: se a Terra se move, por que não sentimos? Por que objetos soltos não ficam para trás? E, sobretudo: se a Terra gira em torno do Sol, as estrelas deveriam parecer mudar ligeiramente de posição ao longo do ano (a <strong>paralaxe estelar</strong>). Ninguém a observava. Ela só foi medida em 1838, por Friedrich Bessel — porque as estrelas estão muito mais longe do que se imaginava.</p>` },

      { t: 'escrita', id: 'razoavel', titulo: 'Antes de continuar',
        prompt: 'Diante disso, rejeitar o heliocentrismo em 1550 era irracional? O que essa pergunta revela sobre a diferença entre estar errado e ser irracional?',
        depois: { rotulo: 'Ver um comentário', html: `
          <p>Com as evidências disponíveis, era razoável duvidar. O modelo de Copérnico (1543) não era, de início, mais preciso que o de Ptolomeu e ainda usava círculos. Foi preciso o trabalho de Kepler (órbitas elípticas, 1609), as observações de Galileu com o telescópio (1609–1610: luas de Júpiter, fases de Vênus) e a física de Newton (1687), que explicava por que não sentimos o movimento, para que o novo quadro ganhasse força.</p>
          <p>Estar errado e ser irracional são coisas diferentes. Uma pessoa pode estar errada e raciocinar bem a partir do que sabe — e pode estar certa por más razões. Isso vale também para nós: o que hoje parece evidente pode ser revisto com novas evidências.</p>` } },

      { t: 'perspectivas', titulo: 'Céus de outras culturas', itens: [
        { nome: 'Os maias', html: 'Astrônomos maias registraram com grande precisão o ciclo de Vênus, como mostram tabelas preservadas no chamado Códice de Dresden. Para eles, os movimentos celestes estavam ligados a ciclos rituais e políticos.', ve: 'Mostra que observação rigorosa e cosmologia religiosa podem caminhar juntas.', limite: 'É preciso cuidado com leituras sensacionalistas (como as “profecias” sobre 2012), que distorcem o que os registros dizem.' },
        { nome: 'Os Yanomami', html: 'Em <em>A queda do céu</em>, o xamã yanomami Davi Kopenawa, em colaboração com o antropólogo Bruce Albert, apresenta uma cosmologia em que o céu já caiu antes e pode cair de novo, e em que o trabalho dos xamãs ajuda a sustentá-lo — e associa a destruição da floresta pelos brancos a essa ameaça.', ve: 'Mostra uma forma de pensar em que cosmos, floresta, sociedade e ética são inseparáveis — o que questiona a nossa separação entre “natureza” e “cultura”.', limite: 'Não se trata de uma teoria física comparável à astronomia, e tratá-la assim seria um erro de categoria. É outra forma de relação com o mundo, que pede para ser compreendida em seus próprios termos.' },
        { nome: 'A imagem moderna', html: 'Em 1990, a sonda Voyager 1, já muito além de Netuno, fotografou a Terra como um ponto quase invisível. O astrônomo Carl Sagan fez dessa imagem, que chamou de “pálido ponto azul”, uma reflexão sobre a escala do universo e a fragilidade humana.', ve: 'Mostra que descobertas científicas também mudam o sentido que damos à vida — às vezes com humildade, às vezes com vertigem.', limite: 'A ciência descreve a escala; o sentido que tiramos dela é uma interpretação, não uma conclusão científica.' }
      ] },

      { t: 'conceito', titulo: 'O que é uma mudança de visão de mundo?', html: `
        <p>Em <em>A estrutura das revoluções científicas</em> (1962), Thomas Kuhn propôs que a ciência avança alternando períodos de “ciência normal”, dentro de um <strong>paradigma</strong> aceito, e revoluções em que o próprio quadro de referência muda — como na passagem de Ptolomeu a Newton. Depois de uma revolução, diz ele, os cientistas como que passam a viver num mundo diferente.</p>
        <p>A tese é muito influente e muito contestada: críticos apontaram que Kuhn exagerou a incomensurabilidade entre paradigmas e subestimou a continuidade das evidências. Mesmo assim, ela ajuda a ver que mudanças de visão de mundo envolvem várias camadas ao mesmo tempo:</p>
        <ul>
          <li><strong>Evidências</strong> — novas observações e medições.</li>
          <li><strong>Instrumentos</strong> — o telescópio mudou o que se podia ver.</li>
          <li><strong>Instituições</strong> — universidades, igrejas, academias científicas, a imprensa.</li>
          <li><strong>Significados</strong> — o lugar da humanidade no universo, a relação entre céu e terra, entre ciência e fé.</li>
        </ul>` },

      { t: 'aprofundar', titulo: 'O caso Galileu, sem mitos', html: `
        <p>O julgamento de Galileu pela Inquisição, em 1633, é real e grave: ele foi condenado, obrigado a abjurar e passou o resto da vida em prisão domiciliar. Mas o episódio é frequentemente contado como uma luta simples entre ciência e religião. Historiadores mostram um quadro mais complicado: as provas disponíveis ainda não eram decisivas, havia disputas políticas e pessoais, e muitos eclesiásticos eram também astrônomos. Reconhecer essa complexidade não diminui a injustiça cometida — apenas a torna mais compreensível, e por isso mais instrutiva.</p>` },

      { t: 'escrita', id: 'aplicacao', titulo: 'Aplicação',
        prompt: 'Escolha algo que hoje parece óbvio para você e que talvez não pareça daqui a 200 anos (sobre a mente, os animais, o trabalho, a tecnologia, a natureza…). Que evidências, instrumentos, instituições e significados estariam envolvidos nessa mudança?' },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Releia as razões que você deu para duvidar do movimento da Terra. Algumas delas coincidem com as dúvidas históricas reais? O que isso mostra?' },

      { t: 'conexoes', itens: [
        { ref: 'u:u-natural', txt: 'O que era “natural” no cosmos medieval deixou de ser.' },
        { ref: 'c:c-semmelweis', txt: 'Outro caso de uma ideia correta que demorou a ser aceita, por outras razões.' },
        { ref: 'q:q-familiaridade', txt: 'Por que confundimos familiaridade com verdade?' },
        { ref: 'u:u-tempo', txt: 'A física moderna também mudou nossa imagem do tempo.' }
      ] },

      { t: 'leituras', ids: ['b-kopenawa', 'b-sagan-mundo', 'b-achebe'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'Estar errado não é o mesmo que ser irracional; camadas de uma mudança de visão de mundo.',
      situacao: 'Alguém ridiculariza as pessoas da Idade Média por acreditarem em coisas “absurdas”.',
      prompt: 'Que pressuposto há nessa atitude? Como você explicaria a diferença entre erro e irracionalidade?'
    },
    proximos: ['u:u-explicar', 'b:b-kopenawa', 'q:q-familiaridade']
  };

  /* ---------------------------------------------------------
     Explicar não é justificar
     --------------------------------------------------------- */
  U['u-explicar'] = {
    id: 'u-explicar',
    titulo: 'Explicar não é justificar',
    pergunta: 'Se a ciência explica por que fazemos algo, isso diz alguma coisa sobre se devemos fazê-lo?',
    duracao: '25 min',
    eixos: ['J', 'G', 'A'],
    resumo: 'As quatro perguntas de Tinbergen; níveis de explicação que não competem; a falácia naturalista; emergência e sistemas complexos.',
    blocos: [
      { t: 'importa', html: `
        <p>É cada vez mais comum ouvir que um comportamento é “evolutivo”, “hormonal” ou “neurológico”, como se isso encerrasse a questão. Esta unidade junta duas ferramentas da Etapa 1 — o natural e o aprendido, a passagem do “é” ao “deve” — com o pensamento científico, para mostrar como diferentes explicações se relacionam e onde termina o que elas podem dizer.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Alguém diz: <em>“O ciúme tem uma explicação evolutiva. Então é natural e não há nada de errado em senti-lo e agir por ele.”</em> O que você pensa dessa frase?' },

      { t: 'conceito', titulo: 'Quatro perguntas sobre o mesmo comportamento', html: `
        <p>Em 1963, o biólogo Niko Tinbergen, um dos fundadores do estudo do comportamento animal, propôs que, diante de qualquer comportamento, podemos fazer quatro perguntas diferentes, todas legítimas:</p>
        <ol>
          <li><strong>Mecanismo:</strong> como funciona, aqui e agora? (Que processos no cérebro e no corpo o produzem?)</li>
          <li><strong>Desenvolvimento:</strong> como surgiu na vida do indivíduo? (Que papel tiveram a experiência e o aprendizado?)</li>
          <li><strong>Função:</strong> para que serve, ou serviu, em termos de sobrevivência e reprodução?</li>
          <li><strong>História evolutiva:</strong> como surgiu ao longo da história da espécie?</li>
        </ol>
        <p>Essas respostas não competem entre si: uma explicação hormonal do ciúme não elimina uma explicação pelo desenvolvimento ou pela cultura. Para fenômenos humanos, acrescentamos ainda explicações <strong>psicológicas</strong> (interpretações, crenças) e <strong>sociais</strong> (normas, instituições, ideias sobre posse e fidelidade).</p>` },

      { t: 'conceito', titulo: 'Explicar não é justificar', html: `
        <p>Nenhuma das quatro perguntas é a pergunta “isso é certo?”. Uma explicação diz <em>por que</em> algo acontece; uma justificação diz <em>se</em> deveria acontecer. Saber que uma tendência teve vantagens evolutivas no passado não mostra que ela seja boa hoje — a tendência a preferir alimentos muito calóricos teve vantagens num ambiente de escassez e causa problemas num ambiente de abundância.</p>
        <p>Já vimos a observação de Hume sobre a passagem do “é” ao “deve”. No início do século XX, o filósofo G. E. Moore criou a expressão <strong>falácia naturalista</strong> para uma ideia relacionada (embora não idêntica): a de definir o bem por meio de alguma propriedade natural. Hoje a expressão é usada, de modo mais amplo, para o erro de concluir que algo é bom porque é natural.</p>
        <p>O erro inverso também existe: concluir que algo <em>não pode</em> ter base biológica porque não gostaríamos que tivesse. Os fatos não dependem dos nossos desejos — e nossos valores não dependem só dos fatos.</p>` },

      { t: 'escolha', id: 'ciume',
        prompt: 'Diante da frase sobre o ciúme, qual é a resposta mais precisa?',
        opcoes: [
          { txt: 'O ciúme não tem nenhuma base biológica; é só cultural.', ok: false, fb: 'Isso troca um exagero por outro. Pode haver componentes biológicos — a questão é o que se segue disso.' },
          { txt: 'Uma explicação evolutiva, mesmo se correta, não diz se é bom agir por ciúme; e o ciúme também tem formas culturais e pessoais.', ok: true, fb: 'Isso separa a explicação da justificação e reconhece os vários níveis de explicação.' },
          { txt: 'Se a ciência explica, então não há o que discutir.', ok: false, fb: 'É exatamente o salto que esta unidade examina.' }
        ] },

      { t: 'conceito', titulo: 'Emergência: quando o todo faz o que as partes não fazem', html: `
        <p>Um engarrafamento pode se formar e se deslocar para trás numa estrada sem nenhum acidente e sem que nenhum motorista o deseje: basta que, com muitos carros, cada um frear um pouco mais do que o da frente. Uma colônia de formigas constrói estruturas complexas sem que nenhuma formiga tenha o plano. Fenômenos assim são chamados de <strong>emergentes</strong>: surgem da interação entre elementos e não estão presentes em nenhum deles isoladamente.</p>
        <p>Pensar em sistemas ajuda a evitar duas explicações simplistas: atribuir tudo às intenções dos indivíduos (“alguém quis isso”) ou tratar o todo como uma coisa misteriosa à parte (“o sistema quis isso”). Muitas consequências coletivas não foram desejadas por ninguém — e, mesmo assim, têm explicação.</p>` },

      { t: 'escrita', id: 'aplicacao', titulo: 'Aplicação',
        prompt: 'Escolha um comportamento humano (por exemplo: procrastinar, seguir a opinião do grupo, gostar de doces) e responda brevemente às quatro perguntas de Tinbergen, mais uma pergunta social. Depois diga: alguma dessas respostas decide se o comportamento é bom ou ruim?' },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Releia sua reação à frase sobre o ciúme. O que você acrescentaria ou corrigiria agora?' },

      { t: 'conexoes', itens: [
        { ref: 'u:u-natural', txt: 'A primeira unidade apresentou os cinco sentidos de “natural”.' },
        { ref: 'c:c-transito', txt: 'Um caso inteiro sobre consequências coletivas que ninguém desejou.' },
        { ref: 'q:q-explicacao-justificativa', txt: 'O que diferencia uma explicação de uma justificativa?' },
        { ref: 'q:q-unica-causa', txt: 'É possível compreender um fenômeno sem reduzi-lo a uma única causa?' }
      ] },

      { t: 'leituras', ids: ['b-frankenstein', 'b-sacks', 'b-krenak'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'Níveis de explicação; explicação e justificação; emergência.',
      situacao: '“Homens traem porque é evolutivo; não adianta esperar fidelidade.”',
      prompt: 'Que saltos há nessa frase? Separe explicação, justificação e generalização.'
    },
    proximos: ['u:u-reflexao', 'c:c-transito', 'q:q-explicacao-justificativa']
  };

  /* ---------------------------------------------------------
     Da tese ao texto
     --------------------------------------------------------- */
  U['u-reflexao'] = {
    id: 'u-reflexao',
    titulo: 'A arquitetura de uma reflexão',
    pergunta: 'O que transforma um conjunto de ideias soltas em uma reflexão que outra pessoa consegue acompanhar?',
    duracao: '30 min (mais o tempo de escrita)',
    eixos: ['A', 'F'],
    resumo: 'O ensaio como tentativa; os elementos de uma reflexão bem construída; escrever uma reflexão curta própria, com objeção e limite.',
    blocos: [
      { t: 'importa', html: `
        <p>Ao longo do percurso você escreveu muitas respostas soltas. Esta unidade ajuda a juntá-las numa forma que outra pessoa possa acompanhar. Não se trata de escrever “bonito”, mas de estruturar o conteúdo: que pergunta, que tese, que razões, que exemplo, que objeção, que limite.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Pense em uma ideia sua que você gostaria de explicar a alguém. Escreva-a do jeito que sair, sem planejar — em cinco a dez linhas.' },

      { t: 'texto', titulo: 'O ensaio como tentativa', html: `
        <p>Em francês, <em>essai</em> quer dizer tentativa, prova, experimento. Quando Michel de Montaigne chamou seus escritos de <em>Ensaios</em>, no fim do século XVI, quis dizer exatamente isto: experimentos de pensamento em primeira pessoa, que testam uma ideia, mudam de rumo, admitem dúvidas. A tradição do ensaio é uma das melhores formas de pensar por escrito — e não exige certezas.</p>` },

      { t: 'conceito', titulo: 'Os elementos de uma reflexão', html: `
        <ol>
          <li><strong>A pergunta.</strong> O que estou tentando entender? Uma reflexão sem pergunta vira uma lista de opiniões.</li>
          <li><strong>A tese.</strong> Qual é a minha resposta, por enquanto? Uma frase clara — que pode ser modesta ou provisória.</li>
          <li><strong>As razões.</strong> Por que penso isso? Cada razão deve se ligar à tese, e não só ao tema.</li>
          <li><strong>O exemplo.</strong> Um caso concreto que mostra a ideia funcionando.</li>
          <li><strong>A objeção.</strong> A melhor razão contra a minha tese, apresentada com honestidade.</li>
          <li><strong>A resposta.</strong> Como respondo à objeção — ou o que concedo a ela.</li>
          <li><strong>O limite.</strong> Em que casos minha tese não vale? O que ainda não sei?</li>
          <li><strong>A conclusão.</strong> O que fica, depois de tudo isso — que pode ser uma tese mais precisa ou uma pergunta melhor.</li>
        </ol>
        <p>Não é uma fórmula de redação. Os elementos podem aparecer em outra ordem. Mas, se algum estiver faltando, quem lê costuma sentir.</p>` },

      { t: 'escolha', id: 'razao',
        prompt: 'Tese: “Redes sociais pioram a qualidade das conversas públicas.” Qual destas frases é uma <em>razão</em> para a tese, e não apenas uma afirmação sobre o tema?',
        opcoes: [
          { txt: 'As redes sociais têm bilhões de usuários.', ok: false, fb: 'É verdade, mas não sustenta a tese: um número grande de usuários não diz nada sobre a qualidade das conversas.' },
          { txt: 'Os sistemas de recomendação tendem a dar mais alcance a conteúdos que provocam reações fortes, o que favorece mensagens mais extremas.', ok: true, fb: 'Esta frase oferece um mecanismo que, se verdadeiro, explicaria a piora. Ela também precisaria de evidências — mas é uma razão ligada à tese.' },
          { txt: 'Eu não gosto de redes sociais.', ok: false, fb: 'É uma informação sobre você, não uma razão sobre a qualidade das conversas.' }
        ] },

      { t: 'passos', id: 'ensaio', titulo: 'Escreva uma reflexão curta',
        prompt: 'Use a ideia da primeira impressão — ou outra que tenha surgido no percurso — e construa cada elemento. Depois, no último campo, escreva o texto corrido.',
        campos: [
          { id: 'pergunta', rotulo: 'A pergunta', dica: 'Uma frase com ponto de interrogação.' },
          { id: 'tese', rotulo: 'A tese', dica: 'Minha resposta, por enquanto.' },
          { id: 'razoes', rotulo: 'As razões', dica: 'Duas ou três, ligadas à tese.' },
          { id: 'exemplo', rotulo: 'O exemplo', dica: 'Concreto, específico.' },
          { id: 'objecao', rotulo: 'A objeção mais forte', dica: 'Como alguém inteligente que discorda diria?' },
          { id: 'resposta', rotulo: 'Minha resposta à objeção', dica: 'Ou o que eu concedo.' },
          { id: 'limite', rotulo: 'O limite', dica: 'Quando não vale; o que não sei.' },
          { id: 'texto', rotulo: 'O texto corrido', dica: 'Junte tudo em prosa. Use o “Espelho do texto” abaixo para uma leitura mecânica.', grande: true, espelho: true }
        ] },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Compare o texto da primeira impressão com o texto corrido. O que mudou? O que você ganhou e, talvez, o que perdeu?' },

      { t: 'conexoes', itens: [
        { ref: 'x:x-b', txt: 'No Laboratório, “A ideia em três níveis” treina síntese e desenvolvimento.' },
        { ref: 'x:x-c', txt: '“Organize o raciocínio” ensina a encontrar a estrutura em um texto desorganizado.' },
        { ref: 'p:montaigne', txt: 'Montaigne inventou o ensaio como forma de pensar por escrito.' }
      ] },

      { t: 'leituras', ids: ['b-montaigne', 'b-sisifo'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'Pergunta, tese, razões, exemplo, objeção, resposta, limite, conclusão.',
      situacao: 'Um amigo lhe mostra um texto cheio de boas ideias, mas difícil de acompanhar.',
      prompt: 'Que perguntas você faria a ele, usando os elementos desta unidade, para ajudá-lo a reorganizar o texto?'
    },
    proximos: ['u:u-visao', 'x:x-b', 'x:x-d']
  };

  /* ---------------------------------------------------------
     Minha visão de mundo, por enquanto
     --------------------------------------------------------- */
  U['u-visao'] = {
    id: 'u-visao',
    titulo: 'Minha visão de mundo, por enquanto',
    pergunta: 'Como ter convicções coerentes e, ao mesmo tempo, mantê-las abertas à revisão?',
    duracao: '30 min (pode ser retomada várias vezes)',
    eixos: ['A', 'G', 'C'],
    resumo: 'O barco de Neurath, a rede de crenças e o equilíbrio reflexivo; um mapa das próprias convicções; o que me faria mudar de ideia.',
    blocos: [
      { t: 'importa', html: `
        <p>Esta unidade não encerra o percurso: ela é um ponto ao qual você pode voltar periodicamente. Seu objetivo é ajudar a perceber que suas crenças formam um conjunto — umas sustentam outras —, e que revisá-las não significa desmontar tudo, mas trocar peças com cuidado.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Escreva cinco convicções que, para você, são importantes — sobre o mundo, as pessoas, a vida, o que vale a pena. Uma por linha.' },

      { t: 'conceito', titulo: 'O barco no mar', html: `
        <p>O filósofo austríaco Otto Neurath, em 1932, propôs uma imagem que ficou famosa: somos como marinheiros que precisam reconstruir seu barco em alto-mar, sem nunca poder levá-lo a um estaleiro e recomeçar do zero. Trocamos uma tábua de cada vez, apoiados nas outras.</p>
        <p>O filósofo americano W. V. O. Quine desenvolveu uma ideia próxima: nossas crenças formam uma <strong>rede</strong>. As da periferia (que horas são, onde deixei a chave) mudam com facilidade; as do centro (princípios lógicos, convicções fundamentais) só mudam quando muita coisa na rede força a mudança. Mas nenhuma está absolutamente imune.</p>
        <p>John Rawls, por sua vez, descreveu o <strong>equilíbrio reflexivo</strong>: ajustamos princípios gerais e juízos sobre casos concretos uns aos outros, num vaivém, até que se sustentem mutuamente — sabendo que um caso novo pode desequilibrar tudo de novo.</p>` },

      { t: 'passos', id: 'mapa', titulo: 'Um mapa das suas convicções',
        prompt: 'Trabalhe com as cinco convicções que você escreveu.',
        campos: [
          { id: 'centro', rotulo: 'Quais são as mais centrais — as que sustentam outras?', dica: 'Se esta caísse, quais cairiam junto?' },
          { id: 'relacoes', rotulo: 'Que relações existem entre elas?', dica: 'Uma justifica outra? Há tensão entre duas delas?' },
          { id: 'origem', rotulo: 'De onde vem cada uma?', dica: 'Experiência, educação, leitura, argumento, convivência?' },
          { id: 'revisao', rotulo: 'Qual seria a mais difícil de revisar? Por quê?', dica: 'Difícil por falta de razões contrárias, ou por estar ligada a quem você é?' },
          { id: 'mudaria', rotulo: 'O que me faria mudar de ideia sobre uma delas?', dica: 'Escolha uma e seja específico.' }
        ] },

      { t: 'texto', titulo: 'Coerência sem rigidez', html: `
        <p>Algumas observações que surgem com frequência neste exercício:</p>
        <ul>
          <li><strong>Tensões não são necessariamente contradições.</strong> Valorizar liberdade e segurança não é incoerente; é reconhecer dois bens que às vezes competem.</li>
          <li><strong>Origem não é validade.</strong> Saber que uma convicção veio da família não a torna falsa — nem verdadeira. É uma razão para examiná-la, não para descartá-la.</li>
          <li><strong>Algumas convicções são compromissos.</strong> “Vale a pena tratar as pessoas com dignidade” talvez não seja uma hipótese à espera de provas, mas uma escolha sobre como viver. Isso também é legítimo, desde que reconhecido como tal.</li>
        </ul>` },

      { t: 'escrita', id: 'carta', titulo: 'Uma carta para depois',
        prompt: 'Escreva um parágrafo para você mesmo daqui a um ano: o que você pensa hoje sobre a pergunta que mais o intriga, o que ainda não sabe, e o que gostaria de ter investigado até lá.',
        dica: 'Esta resposta fica no seu Caderno. Você pode voltar a ela pela seção “Mesma pergunta, outra vez”, em Desenvolvimento.' },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Releia suas cinco convicções. Alguma delas você formularia de outro jeito agora? Qual se tornou mais precisa?' },

      { t: 'conexoes', itens: [
        { ref: 'ferramenta:desenvolvimento', txt: 'A seção Desenvolvimento ajuda a acompanhar como seu pensamento muda ao longo do tempo.' },
        { ref: 'u:u-discordar', txt: 'Revisar uma opinião sem sentir que perdeu algo de si.' },
        { ref: 'q:q-identidade-ideia', txt: 'Como uma ideia se torna parte de uma identidade?' },
        { ref: 'n:sentido', txt: 'No Mapa de ideias, crie suas próprias conexões entre o que estudou e o que vive.' }
      ] },

      { t: 'leituras', ids: ['b-estrangeiro', 'b-ivan-ilitch', 'b-sofia'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'O barco de Neurath, a rede de crenças e o equilíbrio reflexivo.',
      situacao: 'Você descobre uma informação que contradiz algo em que acredita há muitos anos.',
      prompt: 'Como você decidiria se é o caso de trocar uma tábua do barco — e qual?'
    },
    proximos: ['ferramenta:desenvolvimento', 'q:q-identidade-ideia', 'ferramenta:intuicao']
  };
})();
