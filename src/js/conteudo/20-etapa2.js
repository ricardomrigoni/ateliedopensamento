/* =========================================================
   Etapa 2 — Investigar
   ========================================================= */
(function () {
  const U = window.ATELIE.unidades;

  /* ---------------------------------------------------------
     Como sei que sei?
     --------------------------------------------------------- */
  U['u-saber'] = {
    id: 'u-saber',
    titulo: 'Como sei que sei?',
    pergunta: 'Qual é a diferença entre saber algo e apenas acreditar nisso com muita força?',
    duracao: '25–30 min',
    eixos: ['C', 'A'],
    resumo: 'Crença, justificação e verdade; as fontes do conhecimento (percepção, memória, inferência, testemunho); certeza subjetiva; dúvida razoável.',
    blocos: [
      { t: 'importa', html: `
        <p>Quase tudo o que você sabe, você não verificou pessoalmente. Você sabe que a Terra gira em torno do Sol, que existiu um Império Romano, que bactérias causam doenças. Como sabe? Essa pergunta, que parece acadêmica, decide em quem confiamos, o que ensinamos às crianças e como reagimos a uma notícia falsa.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Escolha algo que você tem certeza de saber — por exemplo, que a Terra gira em torno do Sol. Escreva <strong>como</strong> você sabe disso. Seja honesto sobre de onde veio essa certeza.' },

      { t: 'conceito', titulo: 'Uma definição antiga e seus problemas', html: `
        <p>No diálogo <em>Teeteto</em>, Platão discute a ideia de que conhecimento seria uma crença verdadeira acompanhada de uma justificativa (um “logos”). A fórmula ficou conhecida como <strong>crença verdadeira justificada</strong>, e tem uma lógica clara:</p>
        <ul>
          <li><strong>Crença:</strong> não se pode saber algo em que não se acredita.</li>
          <li><strong>Verdade:</strong> não se pode “saber” algo falso — no máximo, achar que sabe.</li>
          <li><strong>Justificação:</strong> acertar por sorte não é saber. Quem chuta o resultado de um jogo e acerta não sabia o resultado.</li>
        </ul>
        <p>Em 1963, o filósofo Edmund Gettier publicou um artigo de três páginas mostrando casos em que alguém tem uma crença verdadeira e justificada e, mesmo assim, não parece saber. Um exemplo mais antigo, do filósofo Bertrand Russell, ilustra a ideia: alguém olha para um relógio que sempre funcionou bem, vê que são duas horas e acredita nisso. São, de fato, duas horas. Mas o relógio parou exatamente às duas da tarde anterior. A crença é verdadeira e justificada — e ainda assim parece faltar algo.</p>
        <p>Desde então não há consenso sobre o que é esse “algo”. Isso é instrutivo: mesmo um conceito que usamos o tempo todo resiste a uma definição completa.</p>` },

      { t: 'escolha', id: 'gettier',
        prompt: 'Ana vê, de longe, um carro igual ao do seu amigo na garagem dele e conclui que ele está em casa. Ele está mesmo em casa — mas o carro na garagem era do vizinho, que pediu a vaga emprestada. Ana sabia que o amigo estava em casa?',
        opcoes: [
          { txt: 'Sim: a crença era verdadeira e ela tinha boas razões.', ok: false, fb: 'É exatamente a intuição que os casos de Gettier desafiam: as razões de Ana não tinham ligação com o fato que tornou sua crença verdadeira.' },
          { txt: 'Não exatamente: ela acertou, mas por uma razão que não tinha relação com a verdade.', ok: true, fb: 'Essa é a reação mais comum. Muitas propostas posteriores tentam dizer que, para haver conhecimento, a justificação precisa estar ligada de forma adequada ao que torna a crença verdadeira.' },
          { txt: 'A pergunta não faz sentido.', ok: false, fb: 'Ela faz sentido, mas talvez revele que nosso conceito de “saber” tem fronteiras imprecisas. Isso é diferente de não ter sentido.' }
        ] },

      { t: 'conceito', titulo: 'De onde vem o que sabemos', html: `
        <p>Uma lista antiga e útil vem da tradição indiana. A escola filosófica <strong>Nyāya</strong>, que examinou com muito rigor os meios de conhecimento (<em>pramāṇa</em>), reconhecia quatro: a <strong>percepção</strong>, a <strong>inferência</strong>, a <strong>comparação</strong> (ou analogia) e o <strong>testemunho</strong> de fontes confiáveis. Outras escolas indianas discordavam sobre quais desses meios eram legítimos — o que mostra que o debate era vivo também ali.</p>
        <p>Na filosofia ocidental, o testemunho foi por muito tempo tratado como um meio menor. Hoje, muitos filósofos reconhecem que a maior parte do que sabemos depende de confiar em outras pessoas e instituições: professores, livros, cientistas, jornalistas, mapas, enciclopédias. Isso não é um defeito; é a condição de uma vida em sociedade. A questão é <em>como confiar bem</em>.</p>` },

      { t: 'conceito', titulo: 'A memória não é um arquivo', html: `
        <p>A memória também é uma fonte de conhecimento — e menos fiel do que parece. Em 1974, os psicólogos Elizabeth Loftus e John Palmer mostraram um vídeo de um acidente de carro a participantes e depois perguntaram a que velocidade os carros iam quando se “esmagaram” ou quando se “tocaram”. Quem ouviu “esmagaram” estimou velocidades maiores e, uma semana depois, tinha mais tendência a “lembrar” de vidro quebrado — que não havia no vídeo.</p>
        <p>Pesquisas desse tipo mostram que lembrar é <em>reconstruir</em>: a cada vez, a memória é refeita, e pode incorporar informações posteriores. Isso não significa que a memória seja inútil — ela costuma acertar no essencial —, mas que a sensação de certeza sobre uma lembrança não garante sua exatidão.</p>` },

      { t: 'pensador', id: 'descartes' },

      { t: 'perspectivas', titulo: 'Perspectivas', itens: [
        { nome: 'Buscar fundamentos certos', html: 'Descartes procurou uma base impossível de duvidar para reconstruir todo o conhecimento sobre ela.', ve: 'Leva a sério a possibilidade do erro e exige rigor.', limite: 'Quase nada sobrevive a uma dúvida tão radical; e a vida prática não pode esperar certezas absolutas.' },
        { nome: 'Falibilismo', html: 'Peirce, entre outros, defendeu que podemos ter conhecimento real sem certeza absoluta: nossas crenças são revisáveis, e a investigação coletiva tende a corrigi-las ao longo do tempo.', ve: 'Permite ter confiança sem dogmatismo — é como a ciência funciona na prática.', limite: 'Exige critérios para saber quando uma crença está suficientemente justificada para agirmos com base nela.' },
        { nome: 'Epistemologia social', html: 'Estuda como o conhecimento depende de comunidades, instituições, confiança e divisão do trabalho intelectual.', ve: 'Explica por que podemos saber coisas que não verificamos pessoalmente — e por que a erosão da confiança é um problema para o conhecimento.', limite: 'Não oferece uma regra simples para decidir em quem confiar.' }
      ] },

      { t: 'escrita', id: 'confianca', titulo: 'Dúvida razoável e desconfiança permanente',
        prompt: 'Como você decide em quem confiar quando não pode verificar uma informação? Liste os critérios que você usa de fato (não os que acha que deveria usar).',
        depois: { rotulo: 'Ver critérios frequentemente úteis', html: `
          <ul>
            <li><strong>Competência:</strong> a fonte tem formação ou experiência no assunto específico?</li>
            <li><strong>Histórico:</strong> já acertou e errou antes? Corrige publicamente seus erros?</li>
            <li><strong>Interesses:</strong> ganha algo se você acreditar? (Isso não torna a informação falsa, mas pede mais verificação.)</li>
            <li><strong>Convergência:</strong> fontes independentes chegam a conclusões semelhantes?</li>
            <li><strong>Transparência:</strong> mostra como chegou à conclusão, e o que não sabe?</li>
          </ul>
          <p>A <strong>dúvida razoável</strong> responde a razões específicas e pode ser resolvida por evidência. A <strong>desconfiança permanente</strong> não aceita nenhuma evidência como suficiente — e por isso, paradoxalmente, deixa a pessoa à mercê de quem soube conquistar sua confiança por outras vias.</p>` } },

      { t: 'escrita', id: 'aplicacao', titulo: 'Aplicação',
        prompt: 'Lembre-se de uma memória vívida da sua infância. Que partes dela você realmente lembra, e que partes podem ter vindo de fotos, relatos da família ou imaginação posterior? Como você poderia saber?' },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Releia como você disse saber aquela coisa de que tinha certeza. Qual foi a fonte principal: percepção, inferência, testemunho? Seu conhecimento é menos sólido por isso?' },

      { t: 'conexoes', itens: [
        { ref: 'u:u-fato', txt: 'O que se considera “fato” já depende de fontes e de confiança.' },
        { ref: 'u:u-mesma', txt: 'Se a memória reconstrói o passado, o que isso significa para a identidade pessoal?' },
        { ref: 'q:q-certos', txt: 'A pergunta fundamental “Como sabemos que estamos certos?” prolonga esta unidade.' },
        { ref: 'b:b-dom-casmurro', txt: 'Um romance narrado por alguém cuja memória e cujas conclusões são, no mínimo, suspeitas.' }
      ] },

      { t: 'leituras', ids: ['b-dom-casmurro', 'b-sagan-mundo', 'b-sacks'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'Crença verdadeira justificada; testemunho; memória reconstrutiva.',
      situacao: 'Uma testemunha diz, com total convicção, que se lembra perfeitamente do rosto de um suspeito visto por três segundos à noite.',
      prompt: 'Que peso dar à convicção dela? O que a pesquisa sobre memória sugere?'
    },
    proximos: ['u:u-palavra', 'q:q-certos', 'p:descartes']
  };

  /* ---------------------------------------------------------
     A palavra, a coisa e o conceito
     --------------------------------------------------------- */
  U['u-palavra'] = {
    id: 'u-palavra',
    titulo: 'A palavra, a coisa e o conceito',
    pergunta: 'Onde está o significado de uma palavra: nela mesma, na coisa a que se refere ou no uso que fazemos dela?',
    duracao: '30 min',
    eixos: ['F', 'C'],
    resumo: 'Saussure, Peirce, Wittgenstein e Barthes por meio de exemplos: o signo arbitrário, os tipos de signo, o significado como uso e os significados de segunda ordem.',
    blocos: [
      { t: 'importa', html: `
        <p>Pensamos, discutimos, amamos e brigamos com palavras. Se elas fossem etiquetas neutras coladas em coisas, bastaria um bom dicionário para evitar mal-entendidos. Esta unidade mostra que a relação entre palavras, coisas e ideias é muito mais interessante — e que perceber isso muda a forma como você ouve e fala.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Tente definir a palavra <strong>jogo</strong> de modo que a definição sirva para futebol, xadrez, paciência, esconde-esconde, videogame e jogo de palavras — e não sirva para mais nada.',
        dica: 'Vale tentar de verdade, por alguns minutos, antes de seguir.' },

      { t: 'situacao', titulo: 'O desafio dos jogos', html: `
        <p>Esse desafio foi proposto pelo filósofo austríaco Ludwig Wittgenstein nas <em>Investigações filosóficas</em>, publicadas em 1953, após sua morte. Ele sugere que não procuremos pensar no que <em>deve</em> haver em comum, mas que <em>olhemos</em>: alguns jogos têm vencedor, outros não; alguns exigem habilidade, outros sorte; alguns são em equipe, outros solitários; alguns são divertidos, outros profissionais.</p>
        <p>O que encontramos, segundo ele, não é uma essência comum, mas uma rede de semelhanças que se cruzam e se sobrepõem — como os traços de uma família, em que um parente tem o nariz do avô, outro os olhos da tia, e não há um traço que todos compartilhem. Ele chamou isso de <strong>semelhanças de família</strong>.</p>` },

      { t: 'conceito', titulo: 'Saussure: o signo é uma relação', html: `
        <p>O linguista suíço Ferdinand de Saussure, cujas aulas foram publicadas por alunos em 1916 como <em>Curso de linguística geral</em>, propôs que o signo linguístico une duas faces: um <strong>significante</strong> (a imagem sonora, “á-r-v-o-r-e”) e um <strong>significado</strong> (o conceito de árvore). A ligação entre os dois é <strong>arbitrária</strong>: nada no som “árvore” se parece com uma árvore — em inglês é <em>tree</em>, em alemão <em>Baum</em>.</p>
        <p>Mais surpreendente: para Saussure, o valor de uma palavra vem das <em>diferenças</em> em relação às outras palavras do sistema. Ele dá um exemplo: o francês <em>mouton</em> serve tanto para o animal quanto para a carne servida à mesa, enquanto o inglês separa <em>sheep</em> (o animal) de <em>mutton</em> (a carne). As duas línguas recortam a mesma realidade de modos diferentes.</p>` },

      { t: 'conceito', titulo: 'Peirce: três maneiras de significar', html: `
        <p>Charles S. Peirce classificou os signos pela forma como se ligam àquilo que representam:</p>
        <dl class="camadas">
          <dt>Ícone</dt><dd>significa por <strong>semelhança</strong>: um retrato, um mapa, o desenho de uma tesoura num botão de “recortar”.</dd>
          <dt>Índice</dt><dd>significa por <strong>conexão real</strong>, de causa ou contiguidade: fumaça indica fogo; uma pegada indica que alguém passou; febre indica infecção.</dd>
          <dt>Símbolo</dt><dd>significa por <strong>convenção</strong>: palavras, bandeiras, a cor verde do semáforo.</dd>
        </dl>
        <p>Muitos signos misturam os três. Uma fotografia é ícone (parece) e índice (a luz da cena marcou o sensor).</p>` },

      { t: 'classificar', id: 'signos',
        prompt: 'Ícone, índice ou símbolo? Alguns são mistos.',
        categorias: ['Ícone', 'Índice', 'Símbolo'],
        itens: [
          { txt: 'Pegadas na areia.', cat: ['Índice'], exp: 'Foram causadas pelos pés de alguém: conexão física.' },
          { txt: 'A palavra “saudade”.', cat: ['Símbolo'], exp: 'Convencional, como toda palavra.' },
          { txt: 'O desenho de uma lixeira no computador.', cat: ['Ícone'], exp: 'Significa por semelhança com uma lixeira real — embora a função “apagar arquivo” seja convenção.' },
          { txt: 'Uma aliança no dedo anelar.', cat: ['Símbolo'], exp: 'Convenção cultural: em algumas culturas vai em outra mão, e em outras não se usa.' },
          { txt: 'Uma foto de alguém.', cat: ['Ícone', 'Índice'], exp: 'Parece a pessoa (ícone) e foi produzida pela luz refletida por ela (índice).' },
          { txt: 'Um termômetro marcando 39 °C.', cat: ['Índice'], exp: 'A coluna se move por causa do calor do corpo. O número escrito, por sua vez, é símbolo.' }
        ] },

      { t: 'conceito', titulo: 'Wittgenstein: o significado é o uso', html: `
        <p>Nas <em>Investigações</em>, Wittgenstein propõe que, em muitos casos, o significado de uma palavra é seu <strong>uso na linguagem</strong>. Aprender o que “jogo”, “dor” ou “justo” significam é aprender a usar essas palavras em práticas compartilhadas — o que ele chamou de <strong>jogos de linguagem</strong>.</p>
        <p>“Ótimo!” significa coisas opostas num elogio sincero e num comentário irônico. Nenhum dicionário resolve isso; só o contexto de uso.</p>
        <p>Curiosamente, no seu primeiro livro, o <em>Tractatus logico-philosophicus</em> (1921), Wittgenstein tinha defendido uma visão bem diferente da linguagem como figuração lógica do mundo. É dele, ali, a frase: “Os limites da minha linguagem significam os limites do meu mundo” (proposição 5.6). Ele mesmo revisou depois boa parte dessas ideias — um exemplo raro de um filósofo que se tornou seu próprio crítico.</p>` },

      { t: 'conceito', titulo: 'Barthes: o segundo significado', html: `
        <p>O semiólogo francês Roland Barthes, em <em>Mitologias</em> (1957), analisou objetos e imagens do cotidiano — luta livre, anúncios de detergente, o vinho, o bife com batatas fritas — mostrando como eles carregam um <strong>segundo nível de significado</strong>.</p>
        <p>Seu exemplo mais famoso: a capa de uma revista francesa mostrando um jovem soldado negro, em uniforme francês, fazendo continência para a bandeira. O primeiro sentido é literal. O segundo, diz Barthes, é uma mensagem sobre a França como um grande império em que todos os seus “filhos”, sem distinção de cor, a servem com fidelidade — uma mensagem política que se apresenta como algo natural e evidente.</p>
        <p>Barthes chamou isso de <strong>mito</strong>: não uma mentira, mas um significado cultural que se disfarça de natureza. Repare como isso se liga à unidade sobre o natural e o aprendido.</p>` },

      { t: 'aprofundar', titulo: 'A língua muda o que percebemos?', html: `
        <p>A versão forte da chamada hipótese Sapir-Whorf — a de que a língua <em>determina</em> o pensamento, de modo que não conseguimos pensar o que nossa língua não nomeia — é hoje rejeitada pela maioria dos pesquisadores. Pessoas conseguem perceber e aprender distinções para as quais não têm palavras.</p>
        <p>Versões mais fracas encontram algum apoio. Um estudo de 2007 (Winawer e colegas) mostrou que falantes de russo, língua que tem duas palavras básicas para azul claro e azul escuro, discriminavam um pouco mais rápido tons que cruzavam essa fronteira. O efeito existe, mas é modesto — a língua <em>influencia</em> a atenção e a memória em alguns domínios, sem aprisionar o pensamento.</p>
        <p>Os linguistas George Lakoff e Mark Johnson, em <em>Metáforas da vida cotidiana</em> (1980), mostraram como metáforas estruturam conceitos abstratos: falamos de discussões como guerras (“atacar um argumento”, “defender uma posição”, “ganhar o debate”). Como seria pensar uma discussão como uma dança?</p>` },

      { t: 'escrita', id: 'palavras', titulo: 'Exercício: a mesma pessoa em três palavras',
        prompt: 'Uma colega continua defendendo sua proposta depois que todos discordaram. Descreva-a com três palavras diferentes: <em>teimosa</em>, <em>persistente</em>, <em>íntegra</em>. Para cada uma, escreva que história a palavra conta sobre ela e que reação ela provoca em quem ouve.',
        depois: { rotulo: 'Ver um comentário', html: `
          <p>As três palavras podem descrever exatamente o mesmo comportamento. A diferença está no julgamento embutido e na narrativa que cada uma sugere: “teimosa” sugere incapacidade de ouvir; “persistente” sugere esforço; “íntegra” sugere fidelidade a princípios. Quem escolhe a palavra escolhe, em grande medida, como os outros vão ver a cena — às vezes sem perceber. São conceitos espessos, como vimos na unidade sobre fatos e interpretações.</p>` } },

      { t: 'escrita', id: 'aplicacao', titulo: 'Aplicação: uma experiência sem nome',
        prompt: 'Existe alguma experiência sua para a qual você não encontra uma palavra adequada? Tente descrevê-la sem nomeá-la. O que se perde e o que se ganha nessa descrição longa?',
        dica: 'Algumas línguas nomeiam experiências que outras não nomeiam — como “saudade”, que costuma ser apontada como de tradução difícil.' },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Volte à sua definição de “jogo”. Ela resistiu aos exemplos? O que a ideia de semelhanças de família muda na sua maneira de pensar definições?' },

      { t: 'pensador', id: 'wittgenstein' },

      { t: 'conexoes', itens: [
        { ref: 'u:u-natural', txt: 'O “mito” de Barthes é uma forma de naturalização.' },
        { ref: 'c:c-reestruturacao', txt: 'Um caso inteiro sobre como palavras enquadram um acontecimento.' },
        { ref: 'q:q-conceitos', txt: 'O que acontece quando mudamos os conceitos com que descrevemos o mundo?' },
        { ref: 'b:b-vidas-secas', txt: 'Um romance em que a falta de palavras é parte da opressão vivida pelos personagens.' },
        { ref: 'p:saussure', txt: 'Ficha do pensador: Saussure.' },
        { ref: 'p:barthes', txt: 'Ficha do pensador: Barthes.' }
      ] },

      { t: 'leituras', ids: ['b-vidas-secas', 'b-1984', 'b-terceira-margem', 'b-lakoff', 'b-barthes'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'Signo arbitrário; ícone, índice e símbolo; significado como uso; segundo significado.',
      situacao: 'Uma empresa troca “demissão” por “desligamento” em todos os comunicados.',
      prompt: 'O que muda e o que não muda com essa troca? Que segundo significado ela pode carregar?'
    },
    proximos: ['u:u-mesma', 'c:c-reestruturacao', 'p:wittgenstein']
  };

  /* ---------------------------------------------------------
     Sou a mesma pessoa?
     --------------------------------------------------------- */
  U['u-mesma'] = {
    id: 'u-mesma',
    titulo: 'Sou a mesma pessoa de dez anos atrás?',
    pergunta: 'O que faz com que eu continue sendo eu, se meu corpo, minhas ideias e minhas lembranças mudam o tempo todo?',
    duracao: '25–30 min',
    eixos: ['D', 'B'],
    resumo: 'Identidade numérica e qualitativa; o navio de Teseu; corpo, memória e narrativa como critérios; a visão budista do não-eu; o que talvez importe mais que a identidade.',
    blocos: [
      { t: 'importa', html: `
        <p>A pergunta parece abstrata até que se torna concreta: quando alguém se arrepende de algo que fez aos vinte anos; quando uma pessoa querida muda depois de uma doença; quando prometemos algo ao nosso “eu futuro”. A resposta que damos, mesmo sem perceber, afeta como lidamos com culpa, promessas, mudança e perda.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Você é a mesma pessoa que era há dez anos? Responda primeiro com sim ou não, e depois explique o que, para você, faz uma pessoa continuar sendo ela mesma.' },

      { t: 'situacao', titulo: 'O navio de Teseu', html: `
        <p>O historiador grego Plutarco relata que os atenienses conservaram por séculos o navio em que o herói mítico Teseu teria voltado de Creta. À medida que as tábuas apodreciam, eram substituídas por novas — até que, em algum momento, nenhuma tábua original restava. Os filósofos, conta ele, discutiam: ainda é o mesmo navio?</p>
        <p>Séculos depois, o filósofo inglês Thomas Hobbes acrescentou uma reviravolta: e se alguém tivesse guardado todas as tábuas velhas e montado com elas um segundo navio? Qual dos dois seria o navio de Teseu?</p>` },

      { t: 'escrita', id: 'navio', titulo: 'Antes de continuar',
        prompt: 'Qual dos dois navios é o de Teseu? O que sua resposta revela sobre o que você considera essencial para que algo continue sendo o mesmo?' },

      { t: 'conceito', titulo: 'Dois sentidos de “o mesmo”', html: `
        <p>Quando dizemos “você não é mais o mesmo”, normalmente queremos dizer que a pessoa mudou de características: ficou mais séria, mais triste, mais madura. Filósofos chamam isso de <strong>identidade qualitativa</strong> — ter as mesmas qualidades.</p>
        <p>Mas há outro sentido: ela continua sendo <em>aquela</em> pessoa, e não outra. É a <strong>identidade numérica</strong> — ser um e o mesmo indivíduo. Você mudou muito qualitativamente desde a infância, e mesmo assim é numericamente a mesma pessoa que aquela criança. A pergunta difícil é: <em>o que garante essa identidade numérica?</em></p>` },

      { t: 'perspectivas', titulo: 'Critérios de identidade', itens: [
        { nome: 'O corpo', html: 'Sou o mesmo porque tenho o mesmo corpo, que existe continuamente no espaço e no tempo, mesmo trocando suas células.', ve: 'É o critério que usamos no dia a dia e na lei: documentos, impressões digitais, rosto.', limite: 'Imagine que suas memórias, seu caráter e seus projetos fossem transferidos para outro corpo. A maioria das pessoas sente que <em>você</em> iria junto.' },
        { nome: 'A memória e a continuidade psicológica', html: 'John Locke, em seu <em>Ensaio sobre o entendimento humano</em> (1690, com acréscimos em 1694), propôs que a identidade pessoal se estende até onde a consciência alcança o passado: sou o mesmo que fez algo se me lembro de tê-lo feito.', ve: 'Captura a intuição de que somos, sobretudo, uma vida mental contínua.', limite: 'Thomas Reid objetou com o caso de um oficial que se lembra de ter apanhado na escola quando menino; anos depois, já general, ele se lembra de quando era oficial, mas não se lembra mais de quando era menino. Pelo critério de Locke, o general seria e não seria o menino. Filósofos posteriores falam em <em>cadeias</em> de continuidade psicológica para contornar o problema.' },
        { nome: 'A narrativa', html: 'Filósofos como Paul Ricoeur propuseram uma <em>identidade narrativa</em>: somos quem somos pela história que integra nossos atos, mudanças e compromissos.', ve: 'Explica por que mudar não é deixar de ser: uma boa história inclui transformações.', limite: 'Narrativas podem ser falsas ou autoindulgentes. E nem toda vida se deixa contar como uma história coerente.' },
        { nome: 'O não-eu budista', html: 'Na tradição budista, a doutrina do <em>anattā</em> (não-eu) sustenta que não há um eu permanente por trás dos processos que compõem a pessoa — corpo, sensações, percepções, formações mentais e consciência. Num texto antigo, o <em>Milindapañha</em>, o monge Nāgasena compara a pessoa a uma carruagem: não há “carruagem” separada das rodas, do eixo e da caixa, e mesmo assim o nome é útil.', ve: 'Transforma a pergunta: talvez o apego a um eu fixo seja fonte de sofrimento, e a mudança, algo a ser compreendido e não temido.', limite: 'As escolas budistas divergem entre si sobre como entender essa doutrina; apresentá-la como uma única tese é uma simplificação.' }
      ] },

      { t: 'aprofundar', titulo: 'Talvez a identidade não seja o que importa', html: `
        <p>O filósofo britânico Derek Parfit, em <em>Reasons and Persons</em> (1984, sem tradução brasileira conhecida), usou experimentos mentais — como o de um teletransportador que destrói o corpo aqui e cria uma cópia exata em Marte — para argumentar que a identidade pessoal pode não ter uma resposta sempre determinada. O que realmente importaria seria a continuidade psicológica, em graus.</p>
        <p>Parfit relatou que essa conclusão lhe trouxe uma espécie de alívio: a fronteira entre ele e as outras pessoas, e entre sua vida e sua morte, pareceu-lhe menos absoluta. É uma tese controversa — e uma mostra de como uma investigação abstrata pode ter efeitos sobre a experiência vivida.</p>
        <p>Do lado da psicologia, um estudo de 2013 (Quoidbach, Gilbert e Wilson) encontrou o que chamaram de <strong>ilusão do fim da história</strong>: pessoas de todas as idades reconhecem o quanto mudaram nos últimos dez anos, mas subestimam o quanto vão mudar nos próximos dez.</p>` },

      { t: 'escolha', id: 'qual',
        prompt: 'Quando um amigo diz “depois daquele ano, ele virou outra pessoa”, ele está falando de:',
        opcoes: [
          { txt: 'Identidade qualitativa.', ok: true, fb: 'Normalmente sim: o amigo mudou de características. Ninguém pensa que houve uma troca de indivíduo.' },
          { txt: 'Identidade numérica.', ok: false, fb: 'Seria o caso se ele quisesse dizer, literalmente, que se trata de outro indivíduo. O exagero da expressão é justamente o que a torna expressiva.' }
        ] },

      { t: 'escrita', id: 'aplicacao', titulo: 'Aplicação: uma situação delicada',
        prompt: 'Uma pessoa com doença de Alzheimer avançada já não reconhece os filhos e perdeu boa parte das memórias que compunham sua vida. Os filhos se perguntam: “Ela ainda é a nossa mãe?”. Use os critérios desta unidade para pensar essa pergunta com cuidado. O que cada critério diria? Algum deles basta?',
        dica: 'Não há resposta que resolva a dor da situação. O objetivo é perceber o que está em jogo em cada maneira de responder.' },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Releia sua resposta inicial. Qual critério de identidade você estava usando sem nomear? Ele resiste às objeções que você conheceu?' },

      { t: 'conexoes', itens: [
        { ref: 'u:u-saber', txt: 'A memória como reconstrução afeta diretamente o critério de Locke.' },
        { ref: 'u:u-tempo', txt: 'Mudar é existir no tempo: a próxima unidade investiga o que é o tempo.' },
        { ref: 'q:q-escolhido', txt: 'Quanto de quem somos foi escolhido por nós?' },
        { ref: 'n:identidade', txt: 'No Mapa de ideias, identidade se liga a memória, narrativa, tempo e responsabilidade.' }
      ] },

      { t: 'pensador', id: 'budismo' },
      { t: 'leituras', ids: ['b-metamorfose', 'b-funes', 'b-ivan-ilitch'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'Identidade numérica e qualitativa; critérios do corpo, da memória e da narrativa.',
      situacao: 'Alguém cometeu um crime grave aos 18 anos e, aos 60, é uma pessoa completamente transformada.',
      prompt: 'Faz sentido puni-la hoje? Que critério de identidade sua resposta pressupõe?'
    },
    proximos: ['u:u-tempo', 'q:q-escolhido', 'p:budismo']
  };

  /* ---------------------------------------------------------
     O que é o tempo?
     --------------------------------------------------------- */
  U['u-tempo'] = {
    id: 'u-tempo',
    titulo: 'O que é o tempo?',
    pergunta: 'Sabemos usar o tempo, medi-lo e perdê-lo — mas sabemos o que ele é?',
    duracao: '25 min',
    eixos: ['B', 'J', 'D'],
    resumo: 'O tempo vivido, o tempo medido e o tempo da física; o que está estabelecido e o que permanece aberto.',
    blocos: [
      { t: 'importa', html: `
        <p>O tempo organiza a vida: idade, prazos, memórias, planos, a morte. E, no entanto, poucas coisas são tão difíceis de explicar. Esta unidade é um exercício de separar com cuidado três coisas que costumamos misturar: o tempo como o vivemos, o tempo como o medimos e o tempo como a física o descreve — sem fingir que as perguntas abertas estão resolvidas.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Explique o que é o tempo, como se fosse para uma criança curiosa de dez anos. Depois anote onde a explicação ficou difícil.' },

      { t: 'situacao', titulo: 'Agostinho e a pergunta que todos sabem responder', html: `
        <p>No livro XI das <em>Confissões</em> (fim do século IV), Agostinho de Hipona escreveu uma das passagens mais citadas sobre o tema. Em tradução livre: o que é, então, o tempo? Se ninguém me pergunta, eu sei; se quero explicá-lo a quem pergunta, não sei.</p>
        <p>Ele observa o paradoxo: o passado já não existe, o futuro ainda não existe, e o presente, se durasse, seria eternidade — se não dura, como pode existir? Sua proposta foi que o tempo existe, de algum modo, na mente: o passado como memória, o presente como atenção, o futuro como expectativa.</p>` },

      { t: 'conceito', titulo: 'Três tempos', html: `
        <dl class="camadas">
          <dt>O tempo vivido</dt><dd>Uma hora de espera não dura o mesmo que uma hora de conversa. A psicologia confirma que a duração percebida depende da atenção, das emoções, da novidade dos acontecimentos. Os gregos tinham duas palavras: <em>chronos</em>, o tempo que corre e se mede, e <em>kairós</em>, o momento oportuno, a hora certa.</dd>
          <dt>O tempo medido</dt><dd>Relógios, calendários e fusos são instituições — como vimos na primeira unidade, a hora oficial é uma convenção historicamente recente. A disciplina do relógio no trabalho também tem história: o historiador E. P. Thompson estudou como a industrialização inglesa transformou o modo de viver o tempo.</dd>
          <dt>O tempo da física</dt><dd>Aqui estão algumas das descobertas mais estranhas e mais bem estabelecidas da ciência — e algumas das perguntas mais abertas.</dd>
        </dl>` },

      { t: 'conceito', titulo: 'O que a física estabeleceu — e o que não', html: `
        <p><strong>Bem estabelecido:</strong> pela teoria da relatividade de Einstein (1905 e 1915), o ritmo da passagem do tempo depende da velocidade e da gravidade. Relógios em altitude andam um pouquinho mais rápido que ao nível do mar; o sistema de GPS precisa corrigir esse efeito para funcionar. Além disso, não existe um “agora” único para todo o universo: dois eventos distantes que são simultâneos para um observador podem não ser para outro.</p>
        <p><strong>Bem estabelecido, mas com interpretação discutida:</strong> as leis fundamentais da física, em sua maioria, funcionam igualmente para frente e para trás no tempo. A diferença entre passado e futuro que vivemos parece ligada à entropia — à tendência de sistemas isolados passarem de estados mais ordenados para menos ordenados. Por que o universo começou num estado de entropia tão baixa é uma questão em aberto.</p>
        <p><strong>Aberto:</strong> se o tempo é fundamental ou emerge de algo mais básico; se o “fluxo” do tempo é real ou é uma característica da nossa perspectiva; como conciliar tempo na relatividade e na mecânica quântica. O físico Carlo Rovelli, em <em>A ordem do tempo</em>, defende uma visão em que o tempo, no nível fundamental, desaparece — mas deixa claro que essa é a linha de pesquisa dele, não um consenso.</p>
        <p class="nota">Separar esses três níveis — estabelecido, interpretado, aberto — é uma habilidade que vale para qualquer tema científico.</p>` },

      { t: 'perspectivas', titulo: 'Perspectivas filosóficas', itens: [
        { nome: 'Só o presente existe', html: 'O presentismo sustenta que apenas o presente é real; o passado já foi e o futuro ainda não é.', ve: 'Corresponde à nossa experiência imediata.', limite: 'É difícil de conciliar com a relatividade, que nega um presente universal.' },
        { nome: 'Universo-bloco', html: 'Para o eternalismo, passado, presente e futuro são igualmente reais, como pontos num mapa; “agora” seria como “aqui”.', ve: 'Combina bem com a física relativística.', limite: 'Torna misterioso o fluxo que experimentamos, e parece deixar pouco espaço para um futuro aberto.' },
        { nome: 'Tempos de outras culturas', html: 'Muitas sociedades organizaram o tempo em ciclos — das estações, das gerações, de eras cósmicas, como nas tradições da Índia ou nos calendários mesoamericanos —, e não apenas como uma linha de progresso.', ve: 'Mostra que a imagem da flecha do progresso é uma entre várias.', limite: 'Contrastar “tempo cíclico” e “tempo linear” é uma simplificação: as culturas costumam combinar os dois.' }
      ] },

      { t: 'escrita', id: 'aplicacao', titulo: 'Aplicação',
        prompt: 'Pense em um período da sua vida que pareceu passar muito rápido e outro que pareceu interminável. O que diferenciava os dois? O que isso diz sobre a relação entre tempo vivido e tempo medido?' },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Releia sua explicação para a criança. Qual dos “três tempos” ela usava? Onde ficou difícil — e você sabe dizer agora por quê?' },

      { t: 'conexoes', itens: [
        { ref: 'u:u-mesma', txt: 'Identidade é aquilo que permanece através do tempo.' },
        { ref: 'u:u-natural', txt: 'A hora oficial é uma convenção que parece natureza.' },
        { ref: 'q:q-passado', txt: 'Como o passado continua presente no modo como pensamos?' },
        { ref: 'p:agostinho', txt: 'Ficha do pensador: Agostinho.' }
      ] },

      { t: 'leituras', ids: ['b-rovelli', 'b-seneca', 'b-ivan-ilitch'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'Tempo vivido, medido e físico; estabelecido, interpretado e aberto.',
      situacao: 'Um vídeo afirma: “A física provou que o tempo não existe; portanto, a ansiedade com prazos é ilusão.”',
      prompt: 'O que há de correto e o que há de abusivo nessa afirmação?'
    },
    proximos: ['u:u-emocao', 'q:q-passado', 'b:b-rovelli']
  };
})();
