/* =========================================================
   Unidades acrescentadas na versão 1.1
   u-visoes (Etapa 1) · u-camadas (Etapa 2) ·
   u-sentido e u-tradicao (Etapa 3)
   ========================================================= */
(function () {
  const U = window.ATELIE.unidades;

  /* ---------------------------------------------------------
     Por que concordo com o que concordo?
     --------------------------------------------------------- */
  U['u-visoes'] = {
    id: 'u-visoes',
    titulo: 'Por que concordo com o que concordo?',
    pergunta: 'Quando concordo ou discordo de uma ideia, estou respondendo aos argumentos — ou a algo mais fundo, como intuições morais e imagens da natureza humana?',
    duracao: '30 min',
    eixos: ['A', 'G', 'H'],
    resumo: 'Fundamentos morais (Haidt), visões restrita e irrestrita (Sowell) e o debate entre Burke e Paine como ferramentas para examinar as próprias concordâncias — e as dos outros.',
    blocos: [
      { t: 'importa', html: `
        <p>Algumas ideias nos parecem óbvias e outras, absurdas, antes mesmo de pensarmos nelas. Raramente isso acontece por acaso: por baixo das opiniões há intuições morais e imagens do que o ser humano é. Conhecê-las serve para três coisas: entender por que certos argumentos “pegam” em você e outros não; avaliar se essa reação é justificada; e compreender quem pensa diferente sem transformá-lo em caricatura.</p>
        <p>Esta unidade não vai dizer qual lado está certo. Vai dar instrumentos para que você mesmo examine isso — inclusive para concluir, com mais fundamento, que sua posição é a melhor.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Pense numa questão moral ou política em que você tem posição firme. Escreva sua posição e a razão principal. Depois responda: <strong>por que uma pessoa inteligente e honesta pensaria o contrário?</strong>',
        dica: 'Se a resposta à segunda pergunta vier com ironia, registre assim mesmo. É um dado interessante.' },

      { t: 'situacao', titulo: 'A festa na praça', html: `
        <p>Uma cidade pequena discute se deve continuar autorizando a festa religiosa do padroeiro, que fecha a praça central por três dias, com procissão, barracas e fogos.</p>
        <ul>
          <li><strong>Dona Teresa</strong>: “É a nossa história. Meus avós participavam. Uma cidade sem suas festas perde a alma.”</li>
          <li><strong>Lucas</strong>: “A prefeitura gasta dinheiro público com uma festa de uma religião só. E os moradores que não são católicos?”</li>
          <li><strong>Marcos</strong>: “Quem decide o que eu faço na minha cidade não é a prefeitura. Se as pessoas querem a festa, que paguem e organizem.”</li>
          <li><strong>Ana</strong>: “O barulho dos fogos apavora idosos e animais. Alguém já pensou nisso?”</li>
        </ul>
        <p>Os quatro estão falando de valores reais. Mas cada um parece pesar coisas diferentes.</p>` },

      { t: 'escrita', id: 'festa', titulo: 'Antes da explicação',
        prompt: 'O que cada personagem está protegendo? Com qual deles você se identifica primeiro — e qual lhe parece mais distante?',
        depois: { rotulo: 'Ver uma leitura', html: `
          <p>Dona Teresa protege continuidade, pertencimento e algo de sagrado; Lucas, a justiça como neutralidade e igualdade de tratamento; Marcos, a liberdade diante do poder público; Ana, a proteção contra o dano. Nenhum desses valores é tolo. A discordância não está em quem tem valores e quem não tem, mas no <em>peso</em> que cada um dá a eles — exatamente o que a teoria a seguir procura descrever.</p>` } },

      { t: 'conceito', titulo: 'Os fundamentos morais', html: `
        <p>O psicólogo Jonathan Haidt e colegas propuseram, a partir de 2004, a <strong>teoria dos fundamentos morais</strong>, apresentada ao público em <em>A mente moralista</em> (2012). A ideia é que a moralidade humana se apoia em várias intuições básicas, cultivadas de modo diferente por culturas e grupos:</p>
        <dl class="camadas">
          <dt>Cuidado / dano</dt><dd>sensibilidade ao sofrimento, especialmente dos vulneráveis.</dd>
          <dt>Justiça / trapaça</dt><dd>reciprocidade; para uns, sobretudo igualdade; para outros, proporcionalidade (cada um recebe conforme contribui).</dd>
          <dt>Liberdade / opressão</dt><dd>reação contra quem domina ou restringe.</dd>
          <dt>Lealdade / traição</dt><dd>compromisso com o grupo: família, comunidade, nação.</dd>
          <dt>Autoridade / subversão</dt><dd>respeito a hierarquias legítimas, papéis e tradições.</dd>
          <dt>Santidade / degradação</dt><dd>a percepção de que algumas coisas são elevadas ou puras e não devem ser rebaixadas.</dd>
        </dl>
        <p>Nas pesquisas de Haidt, feitas sobretudo com norte-americanos, pessoas que se dizem progressistas apoiam-se muito mais em cuidado e em justiça como igualdade; conservadores tendem a usar os seis fundamentos de forma mais equilibrada. Haidt — que se descrevia como progressista ao começar a pesquisa — concluiu que os conservadores tinham uma “paleta moral” mais ampla, e que cada lado tende a não enxergar os fundamentos que o outro valoriza.</p>
        <p>Ele usa uma imagem: a mente é como um <strong>elefante</strong> (as intuições) conduzido por um <strong>condutor</strong> (o raciocínio), que muitas vezes serve mais para justificar o caminho que o elefante já escolheu do que para escolhê-lo.</p>` },

      { t: 'aprofundar', titulo: 'Críticas à teoria', html: `
        <p>A teoria é influente e discutida. Alguns pesquisadores, como Kurt Gray, argumentam que quase todos os juízos morais se reduzem à percepção de dano; outros questionam se a lista de fundamentos é completa, se os questionários medem bem o que pretendem e se os resultados se repetem em outras culturas da mesma forma. E, importante: a teoria <em>descreve</em> como as pessoas julgam; ela não diz quais fundamentos são corretos, nem que usar mais fundamentos seja melhor.</p>` },

      { t: 'conceito', titulo: 'Duas visões da natureza humana', html: `
        <p>O economista Thomas Sowell, em <em>Conflito de visões</em> (1987), propôs que muitos debates políticos persistentes nascem de duas “visões” — pressupostos anteriores aos argumentos — sobre o que o ser humano é:</p>
        <ul>
          <li><strong>Visão restrita:</strong> a natureza humana é limitada e relativamente constante; ninguém tem conhecimento suficiente para redesenhar a sociedade; tradições, mercados e instituições condensam a experiência de muitas gerações. Não há soluções, só escolhas com custos. Exemplos que ele cita: Adam Smith, Edmund Burke, Hayek.</li>
          <li><strong>Visão irrestrita:</strong> a natureza humana pode ser muito melhorada; os males sociais vêm de arranjos que a razão pode identificar e corrigir; buscam-se soluções. Exemplos que ele cita: William Godwin, Condorcet, aspectos de Rousseau.</li>
        </ul>
        <p>Sowell é claramente simpático à visão restrita, o que vale a pena ter em mente. Mesmo assim, o esquema ajuda a perceber por que duas pessoas olham para a mesma pobreza e uma pergunta “o que a causou e como resolver?”, enquanto a outra pergunta “o que a reduziu onde ela diminuiu, e a que custo?”.</p>
        <p>Como todo tipo ideal, é uma simplificação: a maioria das pessoas mistura as duas visões conforme o assunto.</p>` },

      { t: 'classificar', id: 'fundamentos',
        prompt: 'Que fundamento moral cada frase mobiliza principalmente?',
        categorias: ['Cuidado', 'Justiça', 'Liberdade', 'Lealdade', 'Autoridade', 'Santidade'],
        itens: [
          { txt: '“Ninguém deveria passar fome num país com tanta comida.”', cat: ['Cuidado'], exp: 'Sensibilidade ao sofrimento.' },
          { txt: '“Quem trabalha mais deveria ganhar mais.”', cat: ['Justiça'], exp: 'Justiça como proporcionalidade — uma forma de justiça que costuma pesar mais à direita.' },
          { txt: '“Todos deveriam ter as mesmas oportunidades, não importa onde nasceram.”', cat: ['Justiça'], exp: 'Justiça como igualdade — a forma que costuma pesar mais à esquerda. Repare: os dois lados falam de justiça, com sentidos diferentes.' },
          { txt: '“O governo não tem nada que se meter na educação que dou aos meus filhos.”', cat: ['Liberdade', 'Autoridade'], exp: 'Liberdade diante do Estado — e talvez autoridade dos pais.' },
          { txt: '“Roupa suja se lava em casa.”', cat: ['Lealdade'], exp: 'Proteção do grupo diante de estranhos.' },
          { txt: '“Os mais velhos merecem respeito, mesmo quando erram.”', cat: ['Autoridade'], exp: 'Respeito a papéis e hierarquias.' },
          { txt: '“Algumas coisas não deveriam estar à venda.”', cat: ['Santidade', 'Cuidado'], exp: 'A intuição de que certos bens são elevados demais para o mercado — curiosamente, compartilhada por conservadores religiosos e por críticos de esquerda do mercado.' }
        ] },

      { t: 'perspectivas', titulo: 'Um debate fundador: Burke e Paine', itens: [
        { nome: 'Edmund Burke', html: 'Em <em>Reflexões sobre a Revolução na França</em> (1790), Burke criticou a tentativa de refundar a sociedade a partir de princípios abstratos. Para ele, instituições herdadas contêm uma sabedoria que nenhum indivíduo consegue reconstruir sozinho; a sociedade é uma parceria entre os vivos, os mortos e os que vão nascer.', ve: 'A fragilidade do que leva gerações para ser construído, o risco das consequências não previstas e o valor dos laços concretos.', limite: 'Pode servir para proteger privilégios injustos; e Burke subestimou os abusos do Antigo Regime francês.' },
        { nome: 'Thomas Paine', html: 'Em <em>Os direitos do homem</em> (1791), Paine respondeu que cada geração tem o direito de decidir por si mesma, que os mortos não devem governar os vivos e que governos se justificam pelos direitos que protegem, não pela antiguidade.', ve: 'Que tradição não é, por si só, justificativa, e que direitos universais podem servir de critério para julgar instituições.', limite: 'Confiou demais na capacidade da razão de redesenhar sociedades; o Terror revolucionário, que se seguiu, deu argumentos a Burke.' },
        { nome: 'Liberais clássicos', html: 'Hayek, que compartilhava a desconfiança de Burke em relação ao planejamento, escreveu o ensaio “Por que não sou conservador” (1960): para ele, o conservadorismo resiste à mudança sem oferecer um princípio para orientá-la, enquanto o liberal valoriza a liberdade como critério.', ve: 'Que “direita” não é um bloco: conservadores e liberais divergem sobre tradição, moral e mudança.', limite: 'Conservadores respondem que a liberdade só floresce dentro de costumes e comunidades que o liberalismo tende a corroer.' },
        { nome: 'Comunitaristas', html: 'Filósofos como Alasdair MacIntyre e Michael Sandel criticaram o individualismo liberal — o de esquerda e o de direita —, defendendo que somos formados por comunidades e tradições.', ve: 'Como algumas ideias atravessam a divisão esquerda–direita.', limite: 'Comunidades também podem sufocar indivíduos dissidentes.' }
      ] },

      { t: 'escolha', id: 'consequencia',
        prompt: 'Você descobre que discorda de alguém sobretudo porque vocês pesam fundamentos morais diferentes. O que se segue disso?',
        opcoes: [
          { txt: 'Que não há como discutir: cada um tem seus valores.', ok: false, fb: 'Saber onde está a diferença é justamente o que torna a discussão possível. Pode-se discutir quanto peso cada fundamento merece numa situação, que consequências cada escolha tem, se há fatos que mudariam o quadro.' },
          { txt: 'Que a conversa pode ficar mais precisa: em vez de acusar o outro de não ter valores, discutir o peso dos valores em jogo.', ok: true, fb: 'Isso. A teoria não decide quem está certo, mas desloca a conversa de “você é mau” para “você está dando pouco peso a algo que importa” — um terreno em que alguém pode ser convencido.' },
          { txt: 'Que quem usa mais fundamentos está certo.', ok: false, fb: 'A teoria não diz isso. Usar mais fundamentos pode significar uma visão mais rica — ou mais suscetível, por exemplo, a lealdades de grupo injustas. A avaliação depende do caso.' }
        ] },

      { t: 'passos', id: 'mapa', titulo: 'Examine a sua posição',
        prompt: 'Volte à posição que você escreveu na primeira impressão.',
        campos: [
          { id: 'fundamentos', rotulo: 'Que fundamentos morais ela mobiliza?', dica: 'Cuidado, justiça (igualdade ou proporcionalidade), liberdade, lealdade, autoridade, santidade.' },
          { id: 'visao', rotulo: 'Que visão da natureza humana ela pressupõe?', dica: 'Restrita, irrestrita, ou uma mistura?' },
          { id: 'outro', rotulo: 'Que fundamento pesa mais para quem discorda de você?', dica: 'Tente nomear algo que você também valoriza, mas em menor grau.' },
          { id: 'aprender', rotulo: 'O que você poderia aprender com o outro lado — mesmo mantendo sua posição?', dica: '' },
          { id: 'mudar', rotulo: 'Que fato ou argumento faria você rever sua posição?', dica: 'Se nada faria, vale perguntar por quê.' }
        ] },

      { t: 'texto', titulo: 'Para continuar o exame', html: `
        <p>A ferramenta <a href="#/conviccoes">Exame de convicções</a> transforma esse exercício num registro que você pode refazer ao longo do tempo, acompanhando como sua confiança muda. E a <a href="#/debates">Arena de debates</a> apresenta grandes controvérsias na melhor versão de cada lado.</p>` },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Releia sua resposta inicial à pergunta “por que alguém inteligente pensaria o contrário?”. Você a escreveria do mesmo jeito agora?' },

      { t: 'conexoes', itens: [
        { ref: 'u:u-discordar', txt: 'A unidade anterior sobre as fontes razoáveis de discordância.' },
        { ref: 'u:u-tradicao', txt: 'O debate entre conservar e reformar, aprofundado na Etapa 3.' },
        { ref: 'ferramenta:debates', txt: 'A Arena de debates: grandes controvérsias, cada lado em sua melhor versão.' },
        { ref: 'ferramenta:conviccoes', txt: 'O Exame de convicções.' },
        { ref: 'p:haidt', txt: 'Ficha do pensador: Jonathan Haidt.' },
        { ref: 'p:sowell', txt: 'Ficha do pensador: Thomas Sowell.' }
      ] },

      { t: 'leituras', ids: ['b-haidt', 'b-sowell-visoes', 'b-burke', 'b-paine'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'Fundamentos morais; visões restrita e irrestrita.',
      situacao: 'Num jantar, alguém defende cotas e outra pessoa as critica; ambos falam em “justiça”.',
      prompt: 'Que sentidos diferentes de justiça cada um pode estar usando? Que visão da natureza humana cada um pressupõe?'
    },
    proximos: ['u:u-perguntas', 'ferramenta:debates', 'ferramenta:conviccoes']
  };

  /* ---------------------------------------------------------
     As camadas de uma pessoa
     --------------------------------------------------------- */
  U['u-camadas'] = {
    id: 'u-camadas',
    titulo: 'As camadas de uma pessoa',
    pergunta: 'Uma pessoa é feita de dimensões que amadurecem em tempos diferentes? O que muda quando vemos a personalidade em camadas?',
    duracao: '30 min',
    eixos: ['D', 'E'],
    resumo: 'As doze camadas da personalidade de Olavo de Carvalho, os cinco grandes traços da psicologia empírica e a identidade narrativa: três maneiras diferentes de descrever uma pessoa, com o que cada uma permite ver e seus limites.',
    blocos: [
      { t: 'importa', html: `
        <p>A unidade anterior perguntou o que faz alguém continuar sendo o mesmo. Esta pergunta outra coisa: <em>de que é feita</em> uma pessoa. Vamos comparar três respostas de naturezas muito diferentes — uma teoria filosófica e espiritual, um modelo estatístico da psicologia e uma abordagem narrativa. Compará-las é também um exercício de método: cada tipo de teoria promete coisas diferentes e deve ser avaliado por critérios diferentes.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Se você tivesse de descrever a si mesmo em “níveis” — do mais herdado ao mais escolhido, do mais superficial ao mais profundo —, quais seriam?' },

      { t: 'conceito', titulo: 'As doze camadas da personalidade', html: `
        <p>O filósofo e escritor brasileiro <strong>Olavo de Carvalho</strong> (1947–2022) apresentou, em cursos e apostilas, uma teoria das <strong>doze camadas da personalidade humana</strong>. A ideia central é que a personalidade se forma em camadas que emergem aproximadamente nessa ordem ao longo da vida; cada nova camada integra as anteriores sem apagá-las, e a cada uma correspondem formas próprias de sofrimento. Em síntese, nas nossas palavras:</p>
        <ol class="lista-camadas">
          <li><strong>Astrocaracterologia</strong> — o caráter inato, anterior à consciência: as tendências com que se nasce.</li>
          <li><strong>Herança e constituição</strong> (que ele chamou de psicologia do destino) — padrões herdados, inclusive familiares, quase inconscientes.</li>
          <li><strong>Aprendizado</strong> — o impulso de conhecer o mundo por conhecer: a fase dos “porquês” da infância.</li>
          <li><strong>Afeto interior</strong> — a busca de amor, aceitação e aprovação.</li>
          <li><strong>Autodeterminação do eu</strong> — a afirmação da própria força e autonomia.</li>
          <li><strong>Conquista de habilidades</strong> — competências voltadas a resultados objetivos, como ganhar a vida.</li>
          <li><strong>Papel social</strong> — entregar algo de valor aos outros e responder às expectativas da sociedade.</li>
          <li><strong>O eu diante da morte</strong> — a pergunta sobre o que se fez da própria vida.</li>
          <li><strong>Vida intelectual</strong> — a busca da verdade por si mesma.</li>
          <li><strong>Vida moral</strong> — agir de acordo com a verdade que se conhece e responder por isso.</li>
          <li><strong>O eu histórico</strong> — assumir responsabilidade diante da história e do próprio tempo.</li>
          <li><strong>O eu diante de Deus</strong> — a dimensão espiritual, em que a pessoa se coloca diante do absoluto.</li>
        </ol>
        <p>Uma leitura frequente da teoria é que muito sofrimento adulto vem de viver os problemas de uma camada com os recursos de outra — por exemplo, alguém que, já adulto, ainda organiza a vida em torno da necessidade de aprovação (camada 4) quando a situação pede autonomia, competência ou responsabilidade.</p>` },

      { t: 'aprofundar', titulo: 'Sobre o estatuto da teoria', html: `
        <p>É importante saber o que essa teoria é e o que não é. Ela foi apresentada em aulas e apostilas, não em publicações acadêmicas submetidas a avaliação de especialistas, e não foi testada empiricamente. É melhor lida como <strong>antropologia filosófica</strong> — uma proposta de compreensão da pessoa que inclui, de modo assumido, dimensões morais e espirituais — do que como teoria psicológica científica.</p>
        <p>O nome da primeira camada remete à <em>astrocaracterologia</em>, uma tentativa de Olavo, desenvolvida a partir de seus estudos de astrologia nos anos 1970 e 1980, de relacionar o mapa astral ao caráter. A astrologia não tem sustentação científica, e essa parte da teoria é a mais contestada. A segunda camada se inspira no psiquiatra Lipót Szondi, cuja “análise do destino” também é pouco aceita na psicologia atual. As camadas superiores (8 a 12), por outro lado, ecoam temas antigos da filosofia e da tradição cristã sobre maturidade, morte e transcendência.</p>
        <p>Olavo foi uma figura muito influente e muito controversa no Brasil; a ficha dele, em <a href="#/pensador/olavo">Pensadores</a>, apresenta suas ideias e as críticas que recebeu.</p>` },

      { t: 'conceito', titulo: 'Os cinco grandes traços', html: `
        <p>Na psicologia acadêmica, o modelo mais sustentado por dados é o dos <strong>cinco grandes fatores</strong> de personalidade, obtido a partir da análise estatística de como as pessoas se descrevem em muitas línguas:</p>
        <ul>
          <li><strong>Abertura</strong> à experiência (curiosidade, imaginação);</li>
          <li><strong>Conscienciosidade</strong> (organização, disciplina, responsabilidade);</li>
          <li><strong>Extroversão</strong> (sociabilidade, energia, busca de estímulo);</li>
          <li><strong>Amabilidade</strong> (cooperação, compaixão, confiança);</li>
          <li><strong>Neuroticismo</strong> (tendência a emoções negativas, como ansiedade).</li>
        </ul>
        <p>Esses traços são relativamente estáveis, em parte herdáveis (estudos com gêmeos costumam estimar algo em torno de 40% a 50% da variação) e mudam devagar com a idade — em média, as pessoas ficam mais conscienciosas e amáveis e menos neuróticas ao amadurecer. Jordan Peterson, antes de se tornar conhecido do grande público, participou de pesquisas sobre a estrutura desses traços.</p>
        <p>O psicólogo Dan McAdams propôs que uma pessoa pode ser descrita em <strong>três níveis</strong>: os traços (como os cinco grandes), as adaptações características (objetivos, valores, estratégias) e a <strong>história de vida</strong> que ela conta sobre si — a identidade narrativa.</p>` },

      { t: 'perspectivas', titulo: 'Três maneiras de descrever uma pessoa', itens: [
        { nome: 'As doze camadas', html: 'Uma descrição do amadurecimento humano em direção à verdade, à responsabilidade e a Deus.', ve: 'Uma dimensão vertical que modelos estatísticos deixam de fora: a maturidade moral, a consciência da morte, a vocação histórica e espiritual. Também oferece uma linguagem para nomear em que “nível” está um conflito.', limite: 'Não é testável do modo como uma teoria científica é; mistura descrição com ideal de vida; e parte de seus fundamentos (astrologia, Szondi) não tem apoio empírico.' },
        { nome: 'Os cinco grandes traços', html: 'Um mapa estatístico das diferenças entre pessoas.', ve: 'Medições confiáveis, que preveem coisas como desempenho no trabalho, saúde e relacionamentos.', limite: 'Diz como alguém tende a ser, não quem ele é, o que deve fazer da vida ou como amadurece moralmente.' },
        { nome: 'A identidade narrativa', html: 'A pessoa como a história que integra seu passado e seu futuro.', ve: 'Explica como damos sentido à mudança e por que histórias de redenção parecem associadas a bem-estar.', limite: 'Narrativas podem ser autoindulgentes, e nem toda vida se deixa contar de forma coerente.' },
        { nome: 'A pessoa como ser espiritual', html: 'Na tradição cristã, Boécio definiu a pessoa como “substância individual de natureza racional”; pensadores personalistas insistem que a pessoa tem uma dignidade e uma interioridade que nenhuma descrição esgota.', ve: 'Fundamenta a dignidade de cada um independentemente de traços, papéis ou desempenho.', limite: 'Depende de pressupostos metafísicos que nem todos aceitam.' }
      ] },

      { t: 'escolha', id: 'criterio',
        prompt: 'Qual é o critério mais justo para avaliar a teoria das doze camadas?',
        opcoes: [
          { txt: 'Se ela é confirmada por experimentos, como os cinco grandes traços.', ok: false, fb: 'Esse critério é adequado para teorias científicas, mas a teoria das camadas não se apresenta exatamente assim. Ainda assim, quando ela faz afirmações empíricas (por exemplo, sobre o caráter inato), elas podem e devem ser cobradas por esse critério.' },
          { txt: 'Se ela ilumina a experiência, é coerente, e se suas afirmações empíricas, quando existem, resistem à verificação.', ok: true, fb: 'Uma avaliação justa separa as partes: como antropologia filosófica, julga-se pela coerência e pelo que ajuda a compreender; nas partes que dizem algo verificável sobre o mundo, julga-se pela evidência.' },
          { txt: 'Se seu autor é confiável.', ok: false, fb: 'A credibilidade de um autor é relevante quando dependemos do seu testemunho, mas uma ideia deve ser avaliada pelo que afirma. Rejeitar uma ideia só pelo autor — ou aceitá-la só por ele — é pular o exame.' }
        ] },

      { t: 'passos', id: 'conflito', titulo: 'Um exercício de autoexame',
        prompt: 'Este não é um teste nem um diagnóstico: é uma forma de olhar para um conflito com mais nitidez.',
        campos: [
          { id: 'conflito', rotulo: 'Um conflito ou insatisfação que você vive agora', dica: 'Algo concreto.' },
          { id: 'camada', rotulo: 'Em que dimensão (ou camada) ele parece estar?', dica: 'Aprovação? Competência? Papel social? Sentido diante da morte? Vida moral?' },
          { id: 'exige', rotulo: 'O que a situação parece pedir de você?', dica: 'Às vezes um problema vivido como afetivo pede, na verdade, uma decisão moral — ou o contrário.' },
          { id: 'outra', rotulo: 'Como o mesmo conflito seria descrito pelos cinco grandes traços ou pela sua história de vida?', dica: 'O que cada descrição deixa ver ou esconde?' }
        ] },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Releia os “níveis” que você listou no início. Eles se parecem mais com qual das três abordagens? Você acrescentaria ou retiraria algum?' },

      { t: 'conexoes', itens: [
        { ref: 'u:u-mesma', txt: 'A unidade sobre continuidade da identidade.' },
        { ref: 'u:u-sentido', txt: 'Sentido, responsabilidade e sofrimento — temas das camadas superiores.' },
        { ref: 'p:olavo', txt: 'Ficha do pensador: Olavo de Carvalho.' },
        { ref: 'p:peterson', txt: 'Ficha do pensador: Jordan Peterson.' },
        { ref: 'q:q-si-mesmo', txt: 'É possível conhecer a si mesmo sem se enganar?' }
      ] },

      { t: 'leituras', ids: ['b-olavo-minimo', 'b-12regras', 'b-ivan-ilitch', 'b-karamazov'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'Três tipos de descrição da pessoa e os critérios adequados para avaliar cada uma.',
      situacao: 'Um amigo diz: “Meu teste de personalidade mostrou que sou introvertido; então nunca vou conseguir liderar.”',
      prompt: 'O que um traço descreve e o que ele não decide? O que as outras abordagens acrescentariam?'
    },
    proximos: ['u:u-tempo', 'p:olavo', 'u:u-sentido']
  };

  /* ---------------------------------------------------------
     Sentido, responsabilidade e sofrimento
     --------------------------------------------------------- */
  U['u-sentido'] = {
    id: 'u-sentido',
    titulo: 'Sentido, responsabilidade e sofrimento',
    pergunta: 'Se a vida inclui sofrimentos inevitáveis, de onde vem a força para vivê-la bem — da felicidade, da responsabilidade ou de algo que nos ultrapassa?',
    duracao: '30 min',
    eixos: ['G', 'E', 'D'],
    resumo: 'Felicidade, prazer, realização e sentido; Frankl, Peterson, Dostoiévski, Camus, os budistas e a crítica social diante do sofrimento.',
    blocos: [
      { t: 'importa', html: `
        <p>Uma cultura que promete felicidade constante fica sem palavras diante da doença, do fracasso e da morte. Esta unidade examina respostas muito diferentes a uma mesma pergunta — o que fazer com o sofrimento — e pede que você teste cada uma contra a sua experiência.</p>
        <p class="nota">Se você estiver passando por um sofrimento intenso, conversar com alguém de confiança ou com um profissional de saúde é um passo importante. Esta unidade é uma reflexão, não um tratamento.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Lembre-se de um período difícil da sua vida. O que ajudou você a atravessá-lo? Houve algo que deu sentido a ele — ou ele simplesmente passou?' },

      { t: 'situacao', titulo: 'Um médico nos campos de concentração', html: `
        <p>O psiquiatra austríaco <strong>Viktor Frankl</strong> passou quase três anos em campos de concentração nazistas, entre eles Auschwitz. Seus pais, seu irmão e sua mulher morreram nos campos. Em <em>Em busca de sentido</em> (1946), ele relata o que observou: entre prisioneiros submetidos às mesmas condições, os que tinham algo pelo que viver — uma pessoa a reencontrar, uma obra a terminar — pareciam resistir melhor ao desespero. Ele retoma uma ideia de Nietzsche: quem tem um porquê para viver suporta quase qualquer como.</p>
        <p>Frankl escreveu que se pode tirar tudo de uma pessoa, exceto a última das liberdades humanas: escolher a atitude diante das circunstâncias.</p>` },

      { t: 'escrita', id: 'frankl', titulo: 'Antes de continuar',
        prompt: 'O que convence você no relato de Frankl? Há algo nele que o incomoda ou que lhe parece perigoso se generalizado?',
        depois: { rotulo: 'Ver um comentário', html: `
          <p>O relato é poderoso porque vem de quem viveu o extremo. Mas o próprio Frankl insiste que a maioria dos que tinham sentido também morreu: o sentido não salvava do gás. A tese não é que atitude vence tudo, e sim que, mesmo quando nada mais depende de nós, a forma de enfrentar continua dependendo. Generalizada sem cuidado, a ideia pode virar uma cobrança cruel — “se você sofre, é porque não encontrou sentido”.</p>` } },

      { t: 'classificar', id: 'conceitos',
        prompt: 'Felicidade, prazer, realização ou sentido? Algumas frases admitem mais de uma leitura.',
        categorias: ['Prazer', 'Felicidade', 'Realização', 'Sentido'],
        itens: [
          { txt: 'Um bom vinho num fim de tarde.', cat: ['Prazer'], exp: 'Uma sensação agradável, que passa.' },
          { txt: 'Sentir-se, em geral, satisfeito com a vida.', cat: ['Felicidade'], exp: 'Um estado mais duradouro de bem-estar.' },
          { txt: 'Terminar um mestrado depois de anos de esforço.', cat: ['Realização'], exp: 'A conquista de algo que se buscou — pode ou não trazer felicidade.' },
          { txt: 'Cuidar de um pai doente, cansativo e triste, porque você acha que é o certo.', cat: ['Sentido'], exp: 'Pouco prazer e talvez pouca felicidade, mas muito sentido. Pesquisas (como as de Roy Baumeister e colegas, em 2013) sugerem que felicidade e sentido podem se separar: uma vida com sentido pode incluir muito estresse.' },
          { txt: 'Criar filhos.', cat: ['Sentido', 'Realização', 'Felicidade'], exp: 'Exemplo clássico de algo que pode trazer menos prazer no dia a dia e muito sentido na vida como um todo.' }
        ] },

      { t: 'perspectivas', titulo: 'Respostas ao sofrimento', itens: [
        { nome: 'Responsabilidade (Jordan Peterson)', html: 'O psicólogo canadense defende, em <em>12 regras para a vida</em> (2018), que o sentido vem de assumir voluntariamente responsabilidades pesadas — enfrentar o caos em vez de fugir dele. Uma de suas regras propõe deixar a própria casa em ordem antes de criticar o mundo.', ve: 'A capacidade de agir mesmo em situações ruins, e o valor de carregar fardos por outros.', limite: 'Pode subestimar condições que não dependem do indivíduo. Suas leituras de mitos e da Bíblia, inspiradas em Jung, são interpretações, não resultados científicos.' },
        { nome: 'Sentido como descoberta (Frankl)', html: 'O sentido não é inventado, mas encontrado: num trabalho, num amor, na atitude diante de um sofrimento inevitável.', ve: 'Que o sofrimento pode ser transformado, não apenas suportado.', limite: 'O que fazer quando nada disso parece acessível? A tese pede cuidado para não virar cobrança.' },
        { nome: 'Amor ativo (Dostoiévski)', html: 'Em <em>Os irmãos Karamázov</em>, o monge Zósima distingue o amor sonhador, que deseja grandes gestos e logo se cansa, do amor ativo, trabalhoso e concreto. O romance coloca a fé e o sofrimento redentor diante das objeções mais fortes — as de Ivan, que recusa um mundo em que crianças sofrem.', ve: 'Que sentido e amor se provam em atos pequenos e persistentes.', limite: 'A resposta religiosa depende da fé; o próprio romance dá enorme força à objeção de Ivan.' },
        { nome: 'Revolta lúcida (Camus)', html: 'Para Camus, o universo não oferece sentido; a resposta digna é viver plenamente, sem ilusões, e recusar o sofrimento imposto aos outros — como os médicos de <em>A peste</em>.', ve: 'A possibilidade de uma vida ética sem garantias metafísicas.', limite: 'Críticos perguntam de onde vem o valor da solidariedade, se tudo é absurdo.' },
        { nome: 'Desapego (tradições budistas)', html: 'O sofrimento está ligado ao apego e à ideia de um eu fixo; a prática visa compreender isso e cultivar compaixão.', ve: 'Como parte do sofrimento vem da forma como nos agarramos às coisas.', limite: 'Pode ser lido, de forma simplista, como indiferença — o que as próprias tradições rejeitam.' },
        { nome: 'Crítica social', html: 'Karl Marx chamou a religião de “ópio do povo”: um consolo que tornaria suportável — e por isso duradouro — um sofrimento que deveria ser combatido.', ve: 'Que nem todo sofrimento deve receber sentido: alguns devem ser eliminados.', limite: 'Tende a ignorar sofrimentos que nenhuma mudança social elimina, como a morte e a perda.' }
      ] },

      { t: 'escolha', id: 'tese',
        prompt: 'Qual destas frases expressa melhor a tese de Frankl?',
        opcoes: [
          { txt: 'Quem tem sentido sobrevive.', ok: false, fb: 'Frankl rejeita essa leitura: muitos que tinham sentido morreram.' },
          { txt: 'Mesmo quando as circunstâncias não dependem de nós, a atitude diante delas ainda depende — e nela pode haver sentido.', ok: true, fb: 'É a ideia da “última liberdade”.' },
          { txt: 'Todo sofrimento tem um sentido oculto.', ok: false, fb: 'Frankl não afirma que o sofrimento tem sentido em si, mas que é possível encontrar sentido na forma de enfrentá-lo, quando ele é inevitável. Sofrimento evitável deve ser evitado.' }
        ] },

      { t: 'passos', id: 'mapa', titulo: 'O sentido na sua vida',
        prompt: 'Responda com o que é, não com o que deveria ser.',
        campos: [
          { id: 'protege', rotulo: 'O que você protege, mesmo quando custa?', dica: 'Pessoas, princípios, uma obra, uma fé.' },
          { id: 'responsavel', rotulo: 'Por quem ou pelo quê você se sente responsável?', dica: '' },
          { id: 'aceitaria', rotulo: 'Que sofrimento você aceitaria por algo que vale a pena?', dica: '' },
          { id: 'evitavel', rotulo: 'Que sofrimento na sua vida é apenas evitável — e deveria ser evitado?', dica: 'Nem todo peso é nobre.' },
          { id: 'perspectiva', rotulo: 'Qual das perspectivas acima mais se aproxima da sua? Qual mais a desafia?', dica: '' }
        ] },

      { t: 'escrita', id: 'aplicacao', titulo: 'Aplicação',
        prompt: 'Um amigo que acabou de perder o emprego e se separou lhe diz: “Nada faz sentido.” O que cada perspectiva diria a ele? O que você diria — e o que evitaria dizer?' },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Releia o que ajudou você no período difícil. Com qual das perspectivas aquilo se parece?' },

      { t: 'conexoes', itens: [
        { ref: 'q:q-vida-significativa', txt: 'O que faz uma vida ser significativa?' },
        { ref: 'u:u-emocao', txt: 'Os estoicos e a escolha da atitude.' },
        { ref: 'ferramenta:debates', txt: 'Na Arena de debates: o sentido da vida é descoberto ou construído?' },
        { ref: 'p:frankl', txt: 'Ficha do pensador: Viktor Frankl.' },
        { ref: 'p:dostoievski', txt: 'Ficha do pensador: Dostoiévski.' }
      ] },

      { t: 'leituras', ids: ['b-frankl', 'b-12regras', 'b-karamazov', 'b-peste', 'b-deserto-tartaros'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'Felicidade, prazer, realização e sentido; respostas diferentes ao sofrimento.',
      situacao: 'Alguém diz: “Se eu não estou feliz, minha vida está errada.”',
      prompt: 'Que pressuposto sobre felicidade e sentido essa frase contém? O que outras perspectivas diriam?'
    },
    proximos: ['u:u-dinheiro', 'p:frankl', 'b:b-karamazov']
  };

  /* ---------------------------------------------------------
     O que vale a pena conservar?
     --------------------------------------------------------- */
  U['u-tradicao'] = {
    id: 'u-tradicao',
    titulo: 'O que vale a pena conservar?',
    pergunta: 'Quando um costume ou uma instituição parece antiquado, como saber se é um obstáculo a remover ou uma sabedoria que ainda não entendemos?',
    duracao: '30 min',
    eixos: ['H', 'G', 'I'],
    resumo: 'A cerca de Chesterton, Burke, Oakeshott, Hayek e Scruton sobre o valor da tradição; Mill, Paine e Marx sobre seus perigos; um teste para examinar o que manter e o que mudar.',
    blocos: [
      { t: 'importa', html: `
        <p>Na primeira unidade do percurso, vimos que muito do que parece natural foi aprendido. Mas daí não se segue que deva ser abandonado. Esta unidade apresenta, na sua melhor versão, a tradição de pensamento que defende a prudência diante da mudança — e, também na melhor versão, as críticas a ela. O objetivo é que você tenha critérios, e não apenas simpatias, para julgar o que conservar.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Escolha um costume ou instituição que muitos hoje consideram ultrapassado — o casamento religioso, rituais de luto, a autoridade dos professores, o descanso aos domingos, o ensino dos clássicos, formas de tratamento respeitosas. Ele deveria ser mantido, reformado ou abandonado? Por quê?' },

      { t: 'situacao', titulo: 'A cerca no meio da estrada', html: `
        <p>Em <em>The Thing</em> (1929), o escritor inglês <strong>G. K. Chesterton</strong> imagina uma cerca atravessada numa estrada. Um reformador apressado diz: “Não vejo utilidade nisso; vamos derrubá-la.” Um reformador mais sensato responde: “Se você não vê a utilidade, eu não vou deixar você derrubá-la. Vá descobrir por que ela foi posta ali. Quando souber, talvez eu deixe.”</p>
        <p>A parábola ficou conhecida como a <strong>cerca de Chesterton</strong>.</p>` },

      { t: 'escrita', id: 'cerca', titulo: 'Antes da explicação',
        prompt: 'O que a parábola recomenda? Ela proíbe derrubar a cerca? Em que casos ela poderia ser usada de forma abusiva?',
        depois: { rotulo: 'Ver um comentário', html: `
          <p>A parábola não proíbe a mudança: ela exige compreensão antes da mudança. Depois de descobrir por que a cerca foi posta, pode-se concluir que a razão ainda vale — ou que ela deixou de valer, ou que nunca foi boa (talvez a cerca existisse para impedir certas pessoas de passar). O abuso possível é usar a parábola para adiar indefinidamente qualquer reforma, exigindo explicações que nunca parecem suficientes.</p>` } },

      { t: 'conceito', titulo: 'Os argumentos a favor da conservação', html: `
        <ol>
          <li><strong>Conhecimento disperso e tácito.</strong> Friedrich Hayek, em “O uso do conhecimento na sociedade” (1945), argumentou que o conhecimento relevante para a vida social está espalhado em milhões de pessoas e não pode ser reunido por nenhum planejador. Costumes, preços e instituições condensam esse saber. Michael Oakeshott criticou o “racionalismo em política”: a crença de que um plano elaborado no papel substitui a experiência prática.</li>
          <li><strong>A assimetria entre destruir e construir.</strong> Roger Scruton insistia que as coisas boas são fáceis de destruir e difíceis de criar — uma comunidade, uma língua, uma paisagem, uma confiança.</li>
          <li><strong>Os laços concretos.</strong> Burke falava dos “pequenos pelotões”, os grupos próximos em que aprendemos a amar o bem comum. Tocqueville viu nas associações voluntárias a escola da liberdade. Simone Weil escreveu que o enraizamento talvez seja a necessidade mais importante e mais desconhecida da alma humana.</li>
          <li><strong>Consequências não intencionais.</strong> O sociólogo Robert Merton estudou, em 1936, como ações planejadas produzem efeitos que ninguém previu. Quanto mais complexo o sistema, maior a cautela recomendável.</li>
        </ol>
        <p>Burke resumiu o equilíbrio com uma frase: um Estado sem meios de mudança não tem meios de conservação. Conservar não é imobilizar.</p>` },

      { t: 'perspectivas', titulo: 'As críticas à tradição', itens: [
        { nome: 'O despotismo do costume (Mill)', html: 'Em <em>Sobre a liberdade</em> (1859), John Stuart Mill alertou que o costume pode sufocar a individualidade e que o progresso depende de pessoas dispostas a viver de modo diferente.', ve: 'Que muitas inovações valiosas começaram como desvios malvistos.', limite: 'Conservadores respondem que a individualidade também floresce dentro de tradições, e que nem todo desvio é inovação.' },
        { nome: 'O direito dos vivos (Paine)', html: 'Paine sustentava que nenhuma geração pode prender as seguintes às suas decisões.', ve: 'A legitimidade das reformas democráticas.', limite: 'Toda geração depende do que herdou — inclusive a língua em que formula seus direitos.' },
        { nome: 'O peso das gerações mortas (Marx)', html: 'Marx escreveu que a tradição das gerações mortas pesa sobre o cérebro dos vivos — os costumes podem preservar relações de dominação.', ve: 'Quem se beneficia de uma tradição e quem paga seu preço.', limite: 'Os projetos revolucionários do século XX que tentaram romper com toda tradição produziram catástrofes que os conservadores haviam previsto.' },
        { nome: 'A pergunta pelos excluídos', html: 'A escravidão foi uma instituição tradicional por milênios, em muitas civilizações. Sua abolição exigiu romper com uma tradição — e foi impulsionada, em boa parte, por cristãos devotos, como os evangélicos britânicos ligados a William Wilberforce e os quakers, que invocavam princípios da própria fé contra uma prática antiga.', ve: 'Que o critério não pode ser apenas a antiguidade, e que tradições têm recursos internos para se criticar.', limite: 'O exemplo não decide os casos atuais: cada instituição precisa ser examinada em seus próprios méritos.' }
      ] },

      { t: 'escolha', id: 'parabola',
        prompt: 'O que se segue da cerca de Chesterton?',
        opcoes: [
          { txt: 'Que não se deve mudar instituições antigas.', ok: false, fb: 'A parábola permite a mudança — depois de compreender o propósito da instituição.' },
          { txt: 'Que o ônus de entender recai sobre quem propõe a mudança.', ok: true, fb: 'Isso. Ela distribui o ônus da prova: quem quer derrubar deve entender o que está derrubando. Depois, a discussão continua no mérito.' },
          { txt: 'Que toda tradição contém sabedoria.', ok: false, fb: 'A parábola presume que pode haver uma razão; não garante que a razão seja boa.' }
        ] },

      { t: 'passos', id: 'teste', titulo: 'O teste da cerca',
        prompt: 'Aplique o teste ao costume ou à instituição que você escolheu na primeira impressão.',
        campos: [
          { id: 'servia', rotulo: 'Para que ele servia quando surgiu?', dica: 'Que problema resolvia? Que bens protegia?' },
          { id: 'quem', rotulo: 'A quem servia — e quem pagava o custo?', dica: '' },
          { id: 'mudou', rotulo: 'O que mudou nas condições desde então?', dica: '' },
          { id: 'perde', rotulo: 'O que se perderia se ele fosse abandonado? O que se ganharia?', dica: 'Inclua bens difíceis de medir: pertencimento, confiança, sentido.' },
          { id: 'reforma', rotulo: 'Há uma reforma possível que preserve o essencial?', dica: '' },
          { id: 'conclusao', rotulo: 'Sua conclusão agora', dica: 'Manter, reformar ou abandonar — e com que grau de confiança.' }
        ] },

      { t: 'escrita', id: 'aplicacao', titulo: 'Aplicação',
        prompt: 'Aplique o teste da cerca a uma mudança que hoje quase todos aceitam — por exemplo, o voto feminino ou o fim do castigo físico nas escolas. O que o teste revela? Depois aplique-o a uma mudança que você mesmo defende hoje.' },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Releia sua resposta inicial. Sua conclusão mudou? Suas razões ficaram diferentes ou mais claras?' },

      { t: 'conexoes', itens: [
        { ref: 'u:u-natural', txt: 'A primeira unidade: o natural e o aprendido.' },
        { ref: 'u:u-visoes', txt: 'Burke e Paine, e as visões restrita e irrestrita.' },
        { ref: 'ferramenta:debates', txt: 'Na Arena de debates: tradição ou reconstrução racional?' },
        { ref: 'p:chesterton', txt: 'Ficha do pensador: Chesterton.' },
        { ref: 'p:burke', txt: 'Ficha do pensador: Burke.' },
        { ref: 'p:scruton', txt: 'Ficha do pensador: Roger Scruton.' }
      ] },

      { t: 'leituras', ids: ['b-scruton-conservador', 'b-chesterton-ortodoxia', 'b-burke', 'b-leopardo', 'b-pais-filhos', 'b-weil-enraizamento'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'A cerca de Chesterton; argumentos a favor e contra a tradição.',
      situacao: 'Uma escola decide abolir as cerimônias de formatura por serem “antiquadas”.',
      prompt: 'Que perguntas o teste da cerca faria antes da decisão? O que um crítico da tradição responderia?'
    },
    proximos: ['u:u-cosmos', 'ferramenta:debates', 'p:chesterton']
  };
})();
