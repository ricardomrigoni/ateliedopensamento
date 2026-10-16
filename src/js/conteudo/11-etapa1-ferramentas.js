/* =========================================================
   Etapa 1 — Despertar · Módulo "Ferramentas do raciocínio"
   ========================================================= */
(function () {
  const U = window.ATELIE.unidades;

  /* ---------------------------------------------------------
     U4 · Afirmação, argumento e conclusão
     --------------------------------------------------------- */
  U['u-argumento'] = {
    id: 'u-argumento',
    titulo: 'Quando uma conclusão decorre',
    pergunta: 'Quando uma conclusão realmente decorre do que foi dito antes — e quando apenas parece decorrer?',
    duracao: '25–30 min',
    eixos: ['A'],
    resumo: 'Distinguir afirmação, argumento e explicação; separar validade de verdade; reconstruir premissas implícitas.',
    blocos: [
      { t: 'importa', html: `
        <p>Um argumento é uma tentativa de mostrar que algo é verdadeiro <em>por causa</em> de outra coisa. Saber reconhecer essa estrutura permite discordar com precisão: em vez de rejeitar tudo, você consegue dizer “aceito suas razões, mas elas não levam à sua conclusão” — ou “a ligação é boa, mas uma das razões é falsa”.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Leia: <em>“Todas as pessoas bem-sucedidas que eu conheço acordam cedo. Então acordar cedo leva ao sucesso.”</em> O raciocínio convence você? Explique o que funciona ou o que falha nele, do jeito que conseguir.' },

      { t: 'conceito', titulo: 'Afirmação, argumento e explicação', html: `
        <p>Uma <strong>afirmação</strong> diz que algo é o caso: “O metrô vai atrasar hoje”.</p>
        <p>Um <strong>argumento</strong> oferece razões (premissas) para aceitar uma afirmação (conclusão): “Houve uma pane na linha às 7h e as panes costumam provocar atrasos de horas; logo, o metrô vai atrasar hoje.”</p>
        <p>Uma <strong>explicação</strong> parece um argumento, mas faz outra coisa: parte de algo que já se aceita como verdadeiro e diz <em>por que</em> aconteceu. “O metrô atrasou porque houve uma pane.” Ninguém está tentando provar que o atraso ocorreu; está-se explicando sua causa.</p>
        <p>As palavras “porque”, “pois”, “já que” aparecem nos dois casos, o que causa confusão. A pergunta-chave é: <strong>o que está em disputa?</strong> Se é a conclusão, temos um argumento. Se é a causa de algo aceito, temos uma explicação.</p>` },

      { t: 'classificar', id: 'tipos',
        prompt: 'Afirmação, argumento ou explicação?',
        categorias: ['Afirmação', 'Argumento', 'Explicação'],
        itens: [
          { txt: 'Ana faltou à reunião porque estava doente.', cat: ['Explicação'], exp: 'Ninguém está provando que Ana faltou; diz-se por que ela faltou.' },
          { txt: 'Ana deve estar doente: ela nunca falta e hoje não veio nem avisou.', cat: ['Argumento'], exp: 'Aqui a doença é a conclusão, apoiada em duas razões. Repare como os mesmos elementos mudam de função.' },
          { txt: 'As redes sociais pioraram o debate público.', cat: ['Afirmação'], exp: 'Uma tese — talvez defensável —, mas sem razões apresentadas. Ainda não é argumento.' },
          { txt: 'A ponte caiu porque a estrutura estava corroída.', cat: ['Explicação'], exp: 'A queda é um fato aceito; a frase oferece uma causa.' },
          { txt: 'Não vale a pena comprar esse carro: o consumo é alto e a revenda é ruim.', cat: ['Argumento'], exp: 'Duas premissas para uma conclusão prática. Há também uma premissa implícita: consumo e revenda são critérios importantes para você.' }
        ] },

      { t: 'conceito', titulo: 'Validade não é verdade', html: `
        <p>Um argumento é <strong>válido</strong> quando, <em>se</em> as premissas forem verdadeiras, a conclusão não pode ser falsa. A validade é uma propriedade da <em>ligação</em>, não do conteúdo.</p>
        <p>Por isso existem argumentos válidos com conclusões absurdas:</p>
        <blockquote>Todo peixe voa. O tubarão é um peixe. Logo, o tubarão voa.</blockquote>
        <p>A ligação é perfeita; o problema está na primeira premissa. E existem argumentos com premissas e conclusão verdadeiras que são inválidos:</p>
        <blockquote>Se chove, a rua fica molhada. A rua está molhada. Logo, choveu.</blockquote>
        <p>Pode até ter chovido — mas a rua pode estar molhada por outro motivo (alguém lavou a calçada). Essa forma tem nome: <em>afirmação do consequente</em>. Ela é tentadora porque, muitas vezes, a conclusão é verdadeira por acaso.</p>
        <p>Um bom argumento dedutivo precisa das duas coisas: <strong>ligação válida e premissas verdadeiras</strong>.</p>` },

      { t: 'aprofundar', titulo: 'Três formas de inferir', html: `
        <p><strong>Dedução:</strong> a conclusão é garantida pelas premissas (se forem verdadeiras). É o modelo da matemática.</p>
        <p><strong>Indução:</strong> generalizamos a partir de casos. “Todos os cisnes que vi são brancos; logo, todos os cisnes são brancos.” A conclusão é provável, nunca garantida — e cisnes negros existem na Austrália.</p>
        <p><strong>Abdução</strong> (ou inferência para a melhor explicação): partimos de um fato surpreendente e inferimos a hipótese que melhor o explicaria. O filósofo americano Charles S. Peirce deu esse nome a essa forma de raciocínio. É o que fazem médicos, detetives e cientistas quando formulam hipóteses. Sua força depende de termos considerado as explicações alternativas.</p>
        <p>O argumento “todas as pessoas bem-sucedidas que conheço acordam cedo” é uma indução fraca: a amostra é pequena e enviesada (você conhece certas pessoas, e não outras), e não sabemos quantas pessoas que acordam cedo não são bem-sucedidas.</p>` },

      { t: 'escolha', id: 'forma',
        prompt: '“Se ele fosse honesto, devolveria o dinheiro. Ele não devolveu. Logo, não é honesto.” Esse argumento é válido?',
        opcoes: [
          { txt: 'Sim, a forma é válida; mas a primeira premissa pode ser discutida.', ok: true, fb: 'Correto. A forma (“Se A, então B; não B; logo, não A”) é válida. Mas a premissa “se fosse honesto, devolveria” pode ser falsa: talvez ele não saiba que está com o dinheiro, ou esteja impedido. Separar a avaliação da forma e da premissa é exatamente a habilidade aqui.' },
          { txt: 'Não, é a mesma falha da rua molhada.', ok: false, fb: 'Quase, mas não. A rua molhada <em>afirmava</em> o consequente. Aqui o consequente é <em>negado</em>, e essa forma é válida.' },
          { txt: 'Não dá para saber sem conhecer a pessoa.', ok: false, fb: 'Para saber se a <em>conclusão é verdadeira</em>, sim, precisaríamos de mais informações. Mas a validade da forma pode ser avaliada sem isso.' }
        ] },

      { t: 'conceito', titulo: 'Reconstruir: trazer as premissas para a luz', html: `
        <p>Argumentos do dia a dia quase nunca vêm completos. Reconstruí-los é escrevê-los com todas as premissas necessárias, inclusive as implícitas. Exemplo:</p>
        <blockquote>“Não dá para confiar nele; já mentiu antes.”</blockquote>
        <ol>
          <li>Ele mentiu antes. <span class="tag">premissa explícita</span></li>
          <li>Quem mentiu antes não merece confiança. <span class="tag">premissa implícita</span></li>
          <li>Logo, ele não merece confiança. <span class="tag">conclusão</span></li>
        </ol>
        <p>Com a premissa implícita escrita, a discussão fica mais precisa: “quem mentiu <em>uma vez</em>, sobre <em>qualquer</em> assunto, não merece confiança em <em>nada</em>, <em>para sempre</em>?” Provavelmente não é isso que a pessoa quer dizer. Uma versão mais defensável seria: “quem mentiu sobre este tipo de assunto merece cautela neste tipo de assunto”.</p>
        <p>Uma regra de ouro: reconstrua o argumento na <strong>versão mais forte</strong> que o autor provavelmente aceitaria, e não na mais fácil de derrubar.</p>` },

      { t: 'aprofundar', titulo: 'Falácias: úteis, mas com cuidado', html: `
        <p>Existem listas enormes de “falácias” — padrões de raciocínio que parecem bons e não são. Algumas são úteis de conhecer: atacar a pessoa em vez do argumento (<em>ad hominem</em>), apelar à quantidade de pessoas que acreditam em algo, deformar a posição do outro para refutá-la mais facilmente (o “espantalho”), apresentar só duas opções quando há outras (falso dilema).</p>
        <p>Mas atenção: muitos desses padrões <strong>às vezes são razoáveis</strong>. Se alguém tem um histórico de mentir, a credibilidade de seu testemunho é relevante — isso não é um ataque pessoal ilegítimo. Se quase todos os especialistas de uma área concordam, isso é uma boa razão provisória para dar peso à posição deles.</p>
        <p>Apontar “falácia!” pode virar uma forma de não pensar: rotula-se o argumento e encerra-se a conversa. O mais útil é perguntar <em>por que</em>, neste caso específico, a ligação falha.</p>` },

      { t: 'perspectivas', titulo: 'Maneiras de estudar argumentos', itens: [
        { nome: 'Lógica formal', html: 'Desde Aristóteles e seus silogismos, estuda-se a forma dos argumentos independentemente do conteúdo.', ve: 'Rigor: permite saber com certeza se uma forma é válida.', limite: 'Argumentos reais raramente cabem em formas puras; dependem de contexto, graus de probabilidade, ambiguidade.' },
        { nome: 'O modelo de Toulmin', html: 'O filósofo britânico Stephen Toulmin, em <em>Os usos do argumento</em> (1958), propôs olhar para os argumentos como se faz num tribunal: uma alegação, os dados que a apoiam, a garantia que liga dados e alegação, o respaldo dessa garantia, um qualificador (“provavelmente”, “na maioria dos casos”) e as condições de refutação (“a menos que…”).', ve: 'Inclui o que a lógica clássica deixa de fora: graus de confiança e exceções previstas.', limite: 'É um modelo descritivo; não diz, sozinho, se a garantia é boa.' },
        { nome: 'Retórica', html: 'Aristóteles também estudou a persuasão: pelo caráter de quem fala (<em>ethos</em>), pelas emoções do público (<em>pathos</em>) e pelo raciocínio (<em>logos</em>).', ve: 'Mostra que convencer não depende só de lógica — o que ajuda a perceber quando somos persuadidos por outras vias.', limite: 'Persuasivo não é o mesmo que verdadeiro. A retórica descreve o efeito, não a validade.' }
      ] },

      { t: 'pensador', id: 'aristoteles' },

      { t: 'passos', id: 'toulmin', titulo: 'Organize um argumento seu',
        prompt: 'Escolha uma opinião que você defende com alguma convicção e escreva-a na estrutura de Toulmin.',
        campos: [
          { id: 'alegacao', rotulo: 'Alegação — o que eu afirmo', dica: 'Uma frase.' },
          { id: 'dados', rotulo: 'Dados — em que me baseio', dica: 'Fatos, experiências, informações.' },
          { id: 'garantia', rotulo: 'Garantia — por que esses dados levam à alegação', dica: 'Frequentemente é a premissa implícita.' },
          { id: 'qualificador', rotulo: 'Qualificador — com que grau de certeza', dica: 'Sempre? Na maioria dos casos? Provavelmente?' },
          { id: 'refutacao', rotulo: 'Refutação — em que casos isso não valeria', dica: '“A menos que…”' }
        ] },

      { t: 'escrita', id: 'aplicacao', titulo: 'Aplicação',
        prompt: 'Reconstrua este argumento com a premissa implícita e avalie-o: <em>“Esse livro é um clássico, então deve ser bom.”</em>',
        depois: { rotulo: 'Ver uma reconstrução', html: `
          <ol>
            <li>Este livro é considerado um clássico.</li>
            <li><em>(implícita)</em> Livros considerados clássicos são bons.</li>
            <li>Logo, este livro é bom.</li>
          </ol>
          <p>A premissa 2 merece exame: “bom” em que sentido (importante historicamente? prazeroso? bem escrito? bom <em>para mim</em>, agora)? Um clássico pode ser fundamental e, ao mesmo tempo, não ser a melhor porta de entrada para alguém. Uma versão mais defensável: “Livros que muitas gerações continuaram lendo provavelmente têm algo que vale a pena conhecer”. Repare como ela é mais modesta e mais forte.</p>` } },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Volte ao argumento sobre acordar cedo. Que tipo de inferência ele é? Que premissas estão faltando? Como você o reformularia de um jeito mais honesto?' },

      { t: 'conexoes', itens: [
        { ref: 'u:u-causa', txt: 'O argumento sobre acordar cedo também confunde correlação com causa — o assunto da próxima unidade.' },
        { ref: 'x:x-d', txt: 'No Laboratório, “Defenda e questione” pratica a construção de argumentos e objeções.' },
        { ref: 'p:peirce', txt: 'Peirce, que nomeou a abdução, aparece de novo nas unidades sobre conhecimento e linguagem.' }
      ] },

      { t: 'leituras', ids: ['b-sagan-mundo', 'b-nagel'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'Validade (a ligação) e verdade (o conteúdo das premissas); premissas implícitas.',
      situacao: '“Quem ama não briga. Vocês brigam. Logo, não se amam.”',
      prompt: 'O argumento é válido? A premissa é verdadeira? Proponha uma versão mais defensável.'
    },
    proximos: ['u:u-causa', 'x:x-d', 'p:aristoteles']
  };

  /* ---------------------------------------------------------
     U5 · Correlação, causa e explicação
     --------------------------------------------------------- */
  U['u-causa'] = {
    id: 'u-causa',
    titulo: 'Correlação, causa e explicação',
    pergunta: 'Por que duas coisas que acontecem juntas não provam que uma causa a outra — e como, então, descobrimos causas?',
    duracao: '25–30 min',
    eixos: ['A', 'C', 'J'],
    resumo: 'As cinco maneiras de explicar uma correlação; por que uma boa história não é uma boa evidência; como a ciência investiga causas.',
    blocos: [
      { t: 'importa', html: `
        <p>Quase todo dia lemos frases como “pessoas que fazem X vivem mais” ou “cidades com Y têm menos Z”. Saber o que essas frases mostram — e o que não mostram — é uma forma de autodefesa intelectual. E vale também para a vida pessoal: “sempre que eu faço tal coisa, dá errado” é uma afirmação causal sobre a própria vida.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Imagine que uma pesquisa encontrou isto: <em>bairros com mais livrarias têm menos violência.</em> Proponha uma explicação para essa relação. Depois, se conseguir, proponha uma segunda explicação diferente.' },

      { t: 'situacao', titulo: 'Sorvete e afogamentos', html: `
        <p>Em muitas cidades litorâneas, os meses em que mais se vende sorvete são também os meses com mais afogamentos. A correlação é real e pode ser forte.</p>
        <p>Ninguém acredita que sorvete cause afogamentos. A explicação é que um terceiro fator — o calor do verão — aumenta as duas coisas: mais gente toma sorvete e mais gente entra no mar.</p>
        <p>O exemplo é famoso porque é óbvio. O problema é que, em casos menos óbvios, caímos exatamente na mesma armadilha.</p>` },

      { t: 'conceito', titulo: 'Cinco explicações para uma correlação', html: `
        <p>Quando A e B aparecem juntos, há pelo menos cinco possibilidades:</p>
        <ol>
          <li><strong>A causa B.</strong> Pode ser — mas é só uma das hipóteses.</li>
          <li><strong>B causa A</strong> (causalidade reversa). Talvez bairros menos violentos atraiam livrarias, e não o contrário.</li>
          <li><strong>Uma causa comum C produz A e B.</strong> Renda, escolaridade, investimento público podem aumentar ao mesmo tempo o número de livrarias e reduzir a violência.</li>
          <li><strong>Seleção ou viés na amostra.</strong> Os dados foram coletados de um modo que cria a relação. Se olharmos só para bairros onde houve pesquisa, e a pesquisa só foi feita em certos tipos de bairro, a relação pode ser artificial.</li>
          <li><strong>Coincidência.</strong> Com dados suficientes, encontram-se correlações absurdas por puro acaso. O pesquisador Tyler Vigen ficou conhecido por reunir exemplos assim, como a relação entre o número de filmes de um ator e o número de afogamentos em piscinas em certos anos.</li>
        </ol>
        <p>E, frequentemente, a resposta é uma <strong>combinação</strong>: um pouco de causalidade, misturada com causas comuns e efeitos em mão dupla.</p>` },

      { t: 'classificar', id: 'correlacoes',
        prompt: 'Qual parece ser a explicação mais provável para cada correlação?',
        categorias: ['Causa comum', 'Causalidade reversa', 'Seleção', 'Coincidência', 'Causal (bem sustentada)'],
        itens: [
          { txt: 'Crianças com pés maiores leem melhor.', cat: ['Causa comum'], exp: 'A idade: crianças mais velhas têm pés maiores e leem melhor.' },
          { txt: 'Incêndios em que mais bombeiros comparecem causam mais danos.', cat: ['Causa comum'], exp: 'O tamanho do incêndio: incêndios maiores atraem mais bombeiros e causam mais estragos.' },
          { txt: 'Pessoas internadas em hospitais morrem mais do que as que não estão internadas.', cat: ['Seleção'], exp: 'Quem é internado já está mais doente. O grupo foi selecionado justamente pelo risco.' },
          { txt: 'Durante alguns anos, o número de filmes de um ator acompanhou o número de afogamentos em piscinas.', cat: ['Coincidência'], exp: 'Com milhares de séries de dados disponíveis, algumas vão se mover juntas por acaso.' },
          { txt: 'Pessoas que dormem mal relatam mais sintomas de depressão.', cat: ['Causalidade reversa', 'Causal (bem sustentada)', 'Causa comum'], exp: 'Caso genuinamente difícil: a depressão perturba o sono, o sono ruim parece agravar o humor, e fatores como estresse afetam os dois. A relação provavelmente vai nos dois sentidos.' },
          { txt: 'Fumantes têm muito mais câncer de pulmão.', cat: ['Causal (bem sustentada)'], exp: 'Embora não se possam fazer experimentos que obriguem pessoas a fumar, a relação causal foi estabelecida por muitas linhas de evidência convergentes: força e consistência da associação em muitos estudos, relação dose-resposta, sequência temporal, mecanismo biológico, experimentos com animais.' }
        ] },

      { t: 'conceito', titulo: 'Como, então, se descobrem causas?', html: `
        <p><strong>Experimentos controlados.</strong> Sortear quem recebe um tratamento e quem não recebe faz com que, em média, os grupos sejam parecidos em tudo o mais. Se surgir diferença, é provável que venha do tratamento. Por isso o sorteio (aleatorização) é tão valorizado.</p>
        <p><strong>Experimentos naturais.</strong> Às vezes a própria realidade cria grupos comparáveis — uma lei que muda numa cidade e não na vizinha, por exemplo.</p>
        <p><strong>Convergência de evidências.</strong> Quando não dá para experimentar, procura-se um conjunto de sinais: associação forte e repetida em contextos diferentes, efeito maior com “dose” maior, a causa vindo antes do efeito, um mecanismo plausível. Em 1965, o epidemiologista Austin Bradford Hill propôs uma lista de considerações desse tipo — e insistiu que não eram uma receita mecânica.</p>
        <p><strong>Mecanismo.</strong> Saber <em>como</em> A produziria B fortalece muito a hipótese. Mas um mecanismo plausível, sozinho, não basta: sempre é possível imaginar um.</p>` },

      { t: 'conceito', titulo: 'Convincente não é o mesmo que verdadeiro', html: `
        <p>Nossa mente gosta de histórias com começo, meio e fim. Uma explicação que forma uma boa história parece verdadeira, mesmo com pouca evidência. O psicólogo Daniel Kahneman descreveu uma tendência que chamou de “o que você vê é tudo o que há”: construímos a história mais coerente possível com as informações disponíveis, sem considerar o que está faltando — e, quanto menos sabemos, mais fácil é a história parecer coerente.</p>
        <p>Algumas perguntas ajudam a resistir a isso:</p>
        <ul>
          <li>Que outras explicações também se encaixariam nesses dados?</li>
          <li>O que eu esperaria ver se minha explicação estivesse <em>errada</em>?</li>
          <li>Estou contando os casos que não confirmam a história?</li>
          <li>A explicação me agrada por alguma razão além da evidência?</li>
        </ul>` },

      { t: 'pensador', id: 'hume' },

      { t: 'escolha', id: 'cafe',
        prompt: 'Um estudo observacional com milhares de pessoas encontra que quem bebe café moderadamente vive, em média, um pouco mais. Qual é a cautela mais importante?',
        opcoes: [
          { txt: 'O estudo provavelmente é falso.', ok: false, fb: 'Não há razão para supor isso. A correlação pode ser real; a questão é o que ela significa.' },
          { txt: 'Quem bebe café pode diferir de quem não bebe em outras coisas (renda, saúde prévia, hábitos) que também afetam a longevidade.', ok: true, fb: 'Exatamente — o problema das causas comuns e da seleção. Por exemplo, pessoas que param de tomar café por causa de doenças vão para o grupo dos que não bebem. Bons estudos tentam controlar esses fatores, mas raramente todos.' },
          { txt: 'Correlação nunca diz nada sobre causa.', ok: false, fb: 'Exagero. Correlação não <em>prova</em> causa, mas é frequentemente o primeiro indício que leva à investigação. O fumo é o grande exemplo.' }
        ] },

      { t: 'escrita', id: 'aplicacao', titulo: 'Aplicação: uma frase sobre trabalho',
        prompt: 'Alguém afirma: <em>“As pessoas mais ricas são as que mais trabalham; logo, a riqueza é resultado do esforço.”</em> Use as cinco explicações para examinar essa frase. (Suponha, para o exercício, que a primeira parte tenha sido medida em algum lugar.)',
        depois: { rotulo: 'Ver alguns caminhos', html: `
          <ul>
            <li><strong>Causa → efeito:</strong> o esforço pode, sim, contribuir para a renda.</li>
            <li><strong>Reversa:</strong> certos empregos bem pagos exigem jornadas longas; a renda alta pode “trazer” a jornada, e não o contrário.</li>
            <li><strong>Causa comum:</strong> escolaridade, herança, redes de contatos e saúde podem aumentar ao mesmo tempo a renda e a possibilidade de trabalhar muito em trabalhos remunerados.</li>
            <li><strong>Seleção:</strong> “trabalhar” está sendo medido como horas pagas? Trabalho doméstico e de cuidado ficariam de fora, o que muda o quadro.</li>
            <li><strong>Múltiplas causas:</strong> a conclusão “é resultado do esforço” sugere causa única. Provavelmente o esforço é um fator entre vários, com peso diferente em contextos diferentes.</li>
          </ul>
          <p>Repare que nada disso prova que o esforço <em>não</em> importa. Mostra apenas que a frase afirma mais do que a correlação permite.</p>` } },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Volte às livrarias e à violência. Quantas das cinco explicações você consegue formular agora? Qual delas parece mais plausível — e o que seria preciso para testá-la?' },

      { t: 'conexoes', itens: [
        { ref: 'c:c-semmelweis', txt: 'Um caso histórico em que uma correlação levou a uma descoberta — e mesmo assim foi rejeitada.' },
        { ref: 'u:u-explicar', txt: 'Explicações em diferentes níveis (biológico, psicológico, social) não precisam competir.' },
        { ref: 'q:q-causa-desculpa', txt: 'A pergunta “Como distinguimos uma causa de uma desculpa?” leva o tema para a vida pessoal.' }
      ] },

      { t: 'leituras', ids: ['b-mlodinow', 'b-kahneman', 'b-rosling'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'As cinco explicações para uma correlação.',
      situacao: '“Alunos que tomam café da manhã tiram notas melhores; a escola deveria obrigar todos a tomar café.”',
      prompt: 'Que explicações alternativas existem? O que seria preciso para justificar a recomendação?'
    },
    proximos: ['u:u-discordar', 'c:c-semmelweis', 'p:hume']
  };

  /* ---------------------------------------------------------
     U6 · Por que pessoas inteligentes discordam
     --------------------------------------------------------- */
  U['u-discordar'] = {
    id: 'u-discordar',
    titulo: 'Por que pessoas inteligentes discordam',
    pergunta: 'Se duas pessoas inteligentes, informadas e honestas olham para os mesmos fatos, por que chegam a conclusões diferentes?',
    duracao: '25–30 min',
    eixos: ['A', 'C', 'K'],
    resumo: 'Fontes razoáveis e não tão razoáveis de discordância; vieses sem arrogância; o princípio da caridade; como revisar uma opinião.',
    blocos: [
      { t: 'importa', html: `
        <p>Existem duas saídas preguiçosas para a discordância: concluir que o outro é burro ou mal-intencionado, ou concluir que “cada um tem sua verdade” e nada pode ser discutido. As duas encerram a conversa. Esta unidade procura um terceiro caminho: entender <em>de onde</em> vem a discordância, para que ela possa ser investigada.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Pense em alguém que você respeita e que discorda de você sobre algo importante. Por que você acha que essa pessoa pensa assim? Escreva a primeira explicação que vier.',
        dica: 'Seja honesto: se a primeira explicação foi “porque ela não entendeu”, escreva isso.' },

      { t: 'situacao', titulo: 'A casa da mãe', html: `
        <p>Rita e Paulo são irmãos. A mãe deles, de 84 anos, mora sozinha e caiu duas vezes neste ano. Os dois leram as mesmas informações médicas e conhecem a mesma mãe.</p>
        <p><strong>Rita</strong> acha que a mãe deve ir para uma casa de repouso com bom atendimento: o risco de uma queda grave é alto, e nenhum dos dois pode estar presente o tempo todo.</p>
        <p><strong>Paulo</strong> acha que ela deve continuar em casa, com adaptações e uma cuidadora parte do dia: a mãe deixou claro que quer ficar, a casa é parte de quem ela é, e uma mudança forçada poderia piorar muito seu ânimo.</p>
        <p>Nenhum dos dois é ignorante ou egoísta. Onde está a discordância?</p>` },

      { t: 'escrita', id: 'onde', titulo: 'Antes da explicação',
        prompt: 'Onde está a diferença entre Rita e Paulo? Nos fatos? Nos valores? Em outra coisa?',
        depois: { rotulo: 'Ver uma análise', html: `
          <p>Eles concordam sobre muitos fatos. A discordância está sobretudo no <strong>peso</strong> que cada um dá a valores legítimos: segurança física (Rita) e autonomia e identidade da mãe (Paulo). Há também <em>incertezas factuais</em> que pesam diferente: qual a probabilidade real de outra queda? quanto a mudança afetaria a mãe? Cada um preenche essas incertezas de modo coerente com sua prioridade.</p>
          <p>Repare que existe ainda uma terceira voz que a discussão tende a esquecer: a própria mãe.</p>` } },

      { t: 'conceito', titulo: 'Fontes razoáveis de discordância', html: `
        <p>O filósofo John Rawls chamou de “limites do juízo” as razões pelas quais pessoas razoáveis, mesmo de boa-fé, divergem. Em linguagem livre:</p>
        <ul>
          <li><strong>Evidências diferentes</strong> — uma pessoa sabe algo que a outra não sabe.</li>
          <li><strong>Mesmas evidências, pesos diferentes</strong> — os dados são complexos e admitem leituras distintas.</li>
          <li><strong>Conceitos vagos</strong> — as duas usam a mesma palavra (“liberdade”, “justiça”, “sucesso”) com sentidos diferentes.</li>
          <li><strong>Valores diferentes, ou os mesmos valores em ordem diferente</strong> — segurança e autonomia, igualdade e liberdade.</li>
          <li><strong>Experiências de vida diferentes</strong> — o que vivemos torna certas possibilidades mais visíveis e outras menos.</li>
        </ul>
        <p>Nada disso exige que alguém esteja sendo irracional.</p>` },

      { t: 'conceito', titulo: 'Fontes menos razoáveis — inclusive em nós', html: `
        <p>Também há mecanismos que distorcem o juízo. Alguns dos mais estudados:</p>
        <ul>
          <li><strong>Viés de confirmação:</strong> procurar, notar e lembrar mais o que confirma o que já pensamos.</li>
          <li><strong>Raciocínio motivado:</strong> examinar com rigor os argumentos contrários e com indulgência os favoráveis.</li>
          <li><strong>Proteção da identidade:</strong> o pesquisador Dan Kahan e colegas mostraram que, em temas politicamente carregados, pessoas com mais habilidade de raciocínio às vezes se polarizam <em>mais</em>, e não menos — usam sua habilidade para defender a posição do seu grupo.</li>
        </ul>
        <p><strong>O ponto cego:</strong> pesquisas da psicóloga Emily Pronin indicam que tendemos a ver vieses muito mais facilmente nos outros do que em nós mesmos. Saber o nome de um viés não nos protege dele — e pode virar uma arma: “você só pensa isso por viés de confirmação”. Usado assim, o conceito se torna um jeito sofisticado de não escutar.</p>` },

      { t: 'escolha', id: 'vies',
        prompt: 'Você percebe que alguém está claramente procurando só informações que confirmam a própria posição. Qual é a atitude mais produtiva?',
        opcoes: [
          { txt: 'Dizer a ela que está sendo vítima de viés de confirmação.', ok: false, fb: 'Pode até ser verdade, mas raramente ajuda: transforma a conversa em diagnóstico da pessoa. E você pode estar fazendo o mesmo do seu lado.' },
          { txt: 'Perguntar que evidência a faria mudar de ideia — e responder você mesmo à mesma pergunta.', ok: true, fb: 'Isso desloca a conversa para o terreno comum da evidência e testa os dois lados da mesma forma. Se nenhum dos dois consegue imaginar algo que o faria mudar de ideia, isso já é uma descoberta importante.' },
          { txt: 'Desistir da conversa, porque não há como argumentar com quem tem viés.', ok: false, fb: 'Todos temos vieses; se isso impedisse conversas, nenhuma seria possível. Às vezes vale a pena parar, sim — mas por outros motivos.' }
        ] },

      { t: 'conceito', titulo: 'O princípio da caridade', html: `
        <p>Filósofos chamam de <strong>princípio da caridade</strong> a regra de interpretar o que o outro diz da forma mais razoável possível antes de criticá-lo. A versão mais exigente é construir o “homem de aço” — o oposto do espantalho: a formulação mais forte da posição contrária.</p>
        <p>O economista Bryan Caplan propôs um teste divertido, o “teste de Turing ideológico”: você entende uma posição de que discorda quando consegue expô-la tão bem que seus defensores não percebem que você não é um deles.</p>
        <p>No século XIX, John Stuart Mill defendeu, em <em>Sobre a liberdade</em>, uma ideia relacionada: quem conhece apenas o próprio lado de uma questão conhece pouco até mesmo desse lado, porque não sabe responder às objeções que ele enfrenta.</p>` },

      { t: 'escrita', id: 'turing', titulo: 'Exercício: o teste de Turing ideológico',
        prompt: 'Volte à pessoa que você imaginou na primeira impressão. Escreva a posição dela <strong>como ela mesma escreveria</strong>, na versão mais forte e mais simpática que conseguir.',
        dica: 'Verifique: ela leria isto e diria “sim, é exatamente isso”? Há algum adjetivo que denuncia sua opinião?' },

      { t: 'perspectivas', titulo: 'Perspectivas sobre o desacordo', itens: [
        { nome: 'Conciliação', html: 'Alguns filósofos que estudam a “epistemologia do desacordo” defendem que, quando alguém tão bem informado e capaz quanto você discorda, você deveria reduzir sua confiança.', ve: 'Humildade intelectual: o desacordo de um par é, em si, uma evidência.', limite: 'Levado ao extremo, faria com que mudássemos de opinião sempre que alguém insistisse — e daria vantagem aos teimosos.' },
        { nome: 'Firmeza razoável', html: 'Outros defendem que, se você avaliou bem as evidências, pode manter sua posição mesmo diante de um par que discorda.', ve: 'Reconhece que nem todo desacordo anula as razões que temos.', limite: 'Todos acreditamos ter avaliado bem as evidências; o risco é usar o argumento para nunca revisar nada.' },
        { nome: 'Não é relativismo', html: 'Que pessoas razoáveis discordem não implica que não haja resposta melhor ou pior. Implica que encontrá-la é difícil e que a conversa precisa continuar.', ve: 'Mantém juntas a abertura e a seriedade.', limite: 'Em questões de valor, pode não existir uma única resposta correta — e isso também precisa ser considerado.' }
      ] },

      { t: 'texto', titulo: 'Como revisar uma opinião sem sentir que perdeu', html: `
        <p>Uma das razões pelas quais é difícil mudar de ideia é que nossas opiniões se misturam com nossa identidade: mudar de opinião parece admitir que <em>nós</em> estávamos errados, e não apenas uma crença.</p>
        <p>Algumas práticas ajudam:</p>
        <ul>
          <li><strong>Registre as razões, não só as conclusões.</strong> “Eu acreditava X por causa de Y. Agora sei Z.” Assim, mudar é coerência, não fraqueza.</li>
          <li><strong>Atribua graus de confiança.</strong> Pensar “estou 70% seguro” torna possível mudar para 50% sem drama.</li>
          <li><strong>Diga antes o que mudaria sua opinião.</strong> Se a evidência aparecer, você já se comprometeu.</li>
          <li><strong>Separe a conversa da vitória.</strong> O objetivo é entender melhor, não ganhar a discussão.</li>
        </ul>` },

      { t: 'escrita', id: 'aplicacao', titulo: 'Aplicação',
        prompt: 'Escolha uma opinião sua sobre algo que importa. Escreva: (1) com que grau de confiança você a sustenta; (2) que evidência ou argumento faria você reduzir essa confiança; (3) qual a melhor objeção que você conhece contra ela.' },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Releia a explicação que você deu, no início, para a discordância daquela pessoa. Ela era caridosa? Que fontes razoáveis de discordância você consegue identificar agora?' },

      { t: 'conexoes', itens: [
        { ref: 'u:u-acao-boa', txt: 'Conflitos entre valores legítimos são o núcleo da ética.' },
        { ref: 'x:x-e', txt: 'No Laboratório, “A conversa imaginária” põe você para responder a alguém que discorda.' },
        { ref: 'q:q-abandonar', txt: 'A pergunta “Por que algumas ideias parecem impossíveis de abandonar?” aprofunda o tema.' },
        { ref: 'b:b-doze-homens', txt: 'Uma história inteira sobre doze pessoas que precisam chegar a um acordo.' }
      ] },

      { t: 'leituras', ids: ['b-doze-homens', 'b-mill', 'b-kahneman'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'Fontes razoáveis de discordância e o princípio da caridade.',
      situacao: 'Num grupo de família, alguém compartilha uma opinião política oposta à sua e outra pessoa responde: “Só um idiota acredita nisso.”',
      prompt: 'Como você formularia, em uma frase caridosa, a posição criticada? Que fonte de discordância parece estar em jogo?'
    },
    proximos: ['u:u-perguntas', 'x:x-e', 'b:b-doze-homens']
  };

  /* ---------------------------------------------------------
     U7 · Fazer perguntas melhores
     --------------------------------------------------------- */
  U['u-perguntas'] = {
    id: 'u-perguntas',
    titulo: 'Fazer perguntas melhores',
    pergunta: 'Como transformar um incômodo vago em uma pergunta que se possa investigar?',
    duracao: '25–30 min',
    eixos: ['A'],
    resumo: 'Tipos de pergunta; como decompor uma intuição em perguntas investigáveis; um exemplo completo sobre trabalho e valor.',
    blocos: [
      { t: 'importa', html: `
        <p>Muitas das nossas inquietações mais interessantes chegam como um incômodo difuso: “tem algo estranho nisso”. É fácil descartá-las por não sabermos dizê-las. Esta unidade fecha a primeira etapa com a ferramenta que liga todas as outras: transformar uma intuição em perguntas que se possam investigar.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Escreva um incômodo, uma estranheza ou uma intuição que você tem sobre o mundo e que ainda não conseguiu formular bem. Não se preocupe com clareza agora.',
        dica: 'Se nada vier, use este: “Há algo estranho no jeito como a sociedade valoriza o trabalho, o dinheiro e a produtividade.”' },

      { t: 'pensador', id: 'peirce' },

      { t: 'conceito', titulo: 'Tipos de pergunta', html: `
        <p>Perguntas diferentes pedem investigações diferentes. Misturá-las é uma das razões pelas quais certas discussões não andam.</p>
        <dl class="camadas">
          <dt>Conceitual</dt><dd>O que é X? Que diferença há entre X e Y? <em>“O que quero dizer com ‘valor’?”</em> Investiga-se com definições, distinções, exemplos e contraexemplos.</dd>
          <dt>Empírica</dt><dd>O que acontece, aconteceu ou acontecerá? <em>“Salários acompanham a utilidade social dos trabalhos?”</em> Investiga-se com dados, observação, pesquisa.</dd>
          <dt>Histórica</dt><dd>Como isso veio a ser assim? <em>“Desde quando o trabalho virou fonte de identidade?”</em> Investiga-se com fontes e contextos.</dd>
          <dt>Explicativa</dt><dd>Por que isso acontece? Combina as anteriores e exige comparar hipóteses.</dd>
          <dt>Normativa</dt><dd>O que deveria ser? <em>“O valor de uma pessoa deveria depender do que ela produz?”</em> Investiga-se com argumentos sobre valores e princípios — informados pelos fatos, mas não decididos por eles.</dd>
          <dt>Pessoal ou existencial</dt><dd>O que isso significa para mim? Por que isso me afeta? Investiga-se com autoexame, e também com as outras perguntas.</dd>
        </dl>` },

      { t: 'texto', titulo: 'O que torna uma pergunta boa', html: `
        <ul>
          <li><strong>É específica o bastante</strong> para que se saiba por onde começar.</li>
          <li><strong>Seus termos-chave estão claros</strong> — ou ela pede justamente esse esclarecimento.</li>
          <li><strong>Deixa claro o que contaria como resposta</strong> (ou como progresso).</li>
          <li><strong>Não traz a resposta embutida</strong> — não é uma pergunta retórica nem carregada de pressupostos.</li>
          <li><strong>Importa para alguém</strong> — tem consequências para a compreensão ou para a vida.</li>
        </ul>
        <p>Uma pergunta “grande” não é ruim; é apenas um ponto de partida. O trabalho é decompô-la em perguntas menores, cada uma de um tipo.</p>` },

      { t: 'situacao', titulo: 'Um exemplo completo: trabalho, dinheiro e valor', html: `
        <p><strong>A intuição:</strong> “Há algo estranho no jeito como a sociedade valoriza o trabalho, o dinheiro e a produtividade.”</p>
        <p><strong>Primeiro passo — o que me chamou a atenção?</strong> Talvez: pessoas que cuidam de crianças, idosos e doentes costumam ganhar pouco; alguém que perde o emprego costuma sentir que perdeu valor como pessoa; “ser produtivo” virou elogio moral.</p>
        <p><strong>Segundo passo — decompor:</strong></p>
        <ul>
          <li><em>Conceitual:</em> “valor” aqui quer dizer preço? utilidade? mérito? dignidade? Talvez o incômodo venha de que esses sentidos se misturam.</li>
          <li><em>Empírica:</em> os salários acompanham a importância social do trabalho? Que evidências existem? (Existe um debate real sobre isso, com dados e interpretações em disputa.)</li>
          <li><em>Histórica:</em> desde quando o trabalho é visto como fonte de dignidade e identidade? Isso foi sempre assim em todas as sociedades?</li>
          <li><em>Explicativa:</em> por que trabalhos de cuidado são mal pagos? Oferta e procura? Desvalorização histórica do trabalho feminino? Dificuldade de medir? Provavelmente várias causas.</li>
          <li><em>Normativa:</em> o valor de uma pessoa deveria depender da sua produtividade? Se não, o que deveria contar?</li>
          <li><em>Pessoal:</em> por que isso me incomoda? Sinto isso na minha própria vida?</li>
        </ul>
        <p><strong>Terceiro passo — escolher por onde começar.</strong> A pergunta conceitual costuma vir primeiro: enquanto “valor” estiver vago, as outras ficam confusas. Uma boa primeira pergunta seria: <em>“Em que sentidos diferentes dizemos que um trabalho ‘vale’, e esses sentidos coincidem?”</em></p>
        <p>Repare: a intuição inicial não foi descartada nem “resolvida”. Ela foi transformada em um programa de investigação.</p>` },

      { t: 'escolha', id: 'melhor',
        prompt: 'Qual destas perguntas é a melhor formulada para começar uma investigação?',
        opcoes: [
          { txt: '“Por que a sociedade é tão injusta?”', ok: false, fb: 'Ela traz a resposta embutida (“é injusta”) e é ampla demais: que aspecto? em relação a quê? Não é uma pergunta ruim como desabafo, mas é difícil de investigar.' },
          { txt: '“Em que sentidos diferentes dizemos que um trabalho ‘vale’, e esses sentidos coincidem?”', ok: true, fb: 'É específica, esclarece um conceito-chave, não pressupõe a resposta e abre caminho para as outras perguntas.' },
          { txt: '“O capitalismo é bom ou ruim?”', ok: false, fb: 'Pede um veredicto global sobre um fenômeno enorme e heterogêneo, com conceitos não definidos. Força uma escolha binária onde provavelmente cabem muitas distinções.' }
        ] },

      { t: 'escrita', id: 'solidao', titulo: 'Exercício: decompor uma intuição',
        prompt: 'Decomponha esta intuição em perguntas de tipos diferentes: <em>“Parece que as pessoas estão cada vez mais sozinhas.”</em> Tente ao menos uma pergunta conceitual, uma empírica, uma explicativa e uma normativa.',
        depois: { rotulo: 'Ver uma decomposição possível', html: `
          <ul>
            <li><em>Conceitual:</em> “sozinhas” quer dizer isoladas (poucos contatos) ou solitárias (sentimento de falta)? Uma pessoa pode estar rodeada de gente e se sentir só.</li>
            <li><em>Empírica:</em> os dados mostram aumento da solidão? Em que países, faixas etárias, períodos? (As pesquisas existentes não são unânimes: algumas mostram aumento em certos grupos; outras sugerem que a ideia de uma “epidemia” é exagerada.)</li>
            <li><em>Histórica:</em> como eram as formas de convivência antes? Elas eram melhores para todos, ou também tinham custos?</li>
            <li><em>Explicativa:</em> se há aumento, quais seriam as causas? Urbanização, mudanças no trabalho, tecnologia, envelhecimento da população?</li>
            <li><em>Normativa:</em> o que uma sociedade deveria fazer a respeito, se é que deveria fazer algo?</li>
            <li><em>Pessoal:</em> de onde vem a minha impressão? De experiência própria, de notícias, de pessoas próximas?</li>
          </ul>
          <p>Repare que a pergunta empírica pode desmontar a intuição — ou confirmá-la. As duas coisas seriam progresso.</p>` } },

      { t: 'passos', id: 'decompor', titulo: 'Agora, a sua intuição',
        prompt: 'Volte à intuição que você escreveu na primeira impressão e decomponha-a.',
        campos: [
          { id: 'chamou', rotulo: 'O que, concretamente, me chamou a atenção?', dica: 'Situações, cenas, frases, dados.' },
          { id: 'conceitual', rotulo: 'Pergunta conceitual', dica: 'Que palavra precisa ser esclarecida?' },
          { id: 'empirica', rotulo: 'Pergunta empírica ou histórica', dica: 'Que fato eu precisaria saber?' },
          { id: 'normativa', rotulo: 'Pergunta normativa', dica: 'O que eu acho que deveria ser?' },
          { id: 'primeira', rotulo: 'Por qual delas eu começaria, e por quê?', dica: '' }
        ] },

      { t: 'texto', titulo: 'Para continuar', html: `
        <p>A ferramenta <a href="#/intuicao">Da intuição à ideia</a> desenvolve este processo em oito etapas, e guarda separadamente o seu registro original e a versão organizada. Ela traz, inclusive, o exemplo do trabalho e do valor já preenchido, para você ver o método aplicado de ponta a ponta.</p>` },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Releia sua intuição inicial. Escreva agora, em uma frase, a melhor pergunta que você consegue extrair dela.' },

      { t: 'conexoes', itens: [
        { ref: 'ferramenta:intuicao', txt: 'A ferramenta de organização de pensamentos aplica este método a qualquer intuição.' },
        { ref: 'u:u-dinheiro', txt: 'A intuição sobre trabalho e valor é investigada na Etapa 3.' },
        { ref: 'q:q-compreender', txt: 'O que significa compreender alguma coisa — e não apenas saber a resposta?' }
      ] },

      { t: 'leituras', ids: ['b-nagel', 'b-russell-ocio'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'Os tipos de pergunta: conceitual, empírica, histórica, explicativa, normativa, pessoal.',
      situacao: 'Uma amiga diz: “Não sei o que fazer da vida.”',
      prompt: 'Que perguntas mais precisas poderiam estar escondidas nessa frase? Formule ao menos três, de tipos diferentes.'
    },
    proximos: ['ferramenta:intuicao', 'u:u-saber', 'q:q-compreender']
  };
})();
