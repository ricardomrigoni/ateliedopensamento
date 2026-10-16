/* =========================================================
   Laboratório de expressão · Da intuição à ideia · Mapa de ideias
   ========================================================= */
(function () {
  const A = window.ATELIE;

  /* ---------------------------------------------------------
     LABORATÓRIO DE EXPRESSÃO
     Cada exercício tem campos de escrita, um material de apoio
     e um comentário que só se abre depois de tentar.
     A "leitura mecânica" (Espelho do texto) é calculada no
     próprio navegador e é explicitamente limitada.
     --------------------------------------------------------- */
  A.conceitosExplicar = [
    { id: 'naturalizacao', nome: 'Naturalização', unidade: 'u-natural', elementos: [
      'Algo produzido historicamente passa a parecer dado, necessário ou evidente.',
      'Há um processo (hábito → instituição → transmissão) e não um momento único.',
      'Construído não significa falso, arbitrário, fácil de mudar ou ruim.',
      'Pelo menos um exemplo concreto.',
      'A distinção entre os sentidos de “natural” (biológico, universal, inevitável, frequente, bom).'
    ] },
    { id: 'camadas', nome: 'Fato, interpretação e valor', unidade: 'u-fato', elementos: [
      'O fato é o que poderia ser constatado por qualquer observador.',
      'A interpretação atribui significado ou intenção.',
      'O valor julga como as coisas deveriam ser.',
      'Emoções relatadas são fatos sobre quem sente, não provas sobre o outro.',
      'A separação nem sempre é nítida (conceitos espessos, seleção do que se descreve).'
    ] },
    { id: 'pressuposto', nome: 'Pressuposto', unidade: 'u-pressupostos', elementos: [
      'Aquilo que uma frase ou argumento assume sem dizer.',
      'Níveis: na frase, no argumento, no enquadramento.',
      'Encontrar um pressuposto não refuta a afirmação; abre-a ao exame.',
      'Um exemplo e uma técnica para encontrar pressupostos.'
    ] },
    { id: 'validade', nome: 'Validade e verdade', unidade: 'u-argumento', elementos: [
      'Validade é uma propriedade da ligação entre premissas e conclusão.',
      'Verdade é uma propriedade das afirmações.',
      'Um argumento pode ser válido com premissas falsas, e inválido com conclusão verdadeira.',
      'Um bom argumento dedutivo precisa das duas coisas.',
      'Um exemplo de cada caso.'
    ] },
    { id: 'correlacao', nome: 'Correlação não é causa', unidade: 'u-causa', elementos: [
      'Duas coisas podem variar juntas sem que uma cause a outra.',
      'Explicações alternativas: causalidade reversa, causa comum, seleção, coincidência.',
      'Como se investigam causas (experimentos, convergência de evidências, mecanismo).',
      'Correlação pode ser um indício, ainda que não prova.',
      'Um exemplo concreto.'
    ] },
    { id: 'identidade', nome: 'Identidade numérica e qualitativa', unidade: 'u-mesma', elementos: [
      'Qualitativa: ter as mesmas características.',
      'Numérica: ser um e o mesmo indivíduo.',
      'Mudanças qualitativas não implicam perda de identidade numérica.',
      'A pergunta sobre o que garante a identidade numérica (corpo, memória, narrativa…).',
      'Um exemplo, como o navio de Teseu.'
    ] },
    { id: 'signo', nome: 'O signo arbitrário', unidade: 'u-palavra', elementos: [
      'O signo une um significante e um significado.',
      'A ligação entre os dois é convencional, não natural.',
      'O valor de uma palavra depende de seu contraste com outras no sistema.',
      'Um exemplo de línguas que recortam a realidade de modos diferentes.'
    ] },
    { id: 'instituicao', nome: 'Dinheiro como instituição', unidade: 'u-dinheiro', elementos: [
      'O valor da moeda depende da expectativa de que os outros a aceitarão.',
      'Instituições (Estado, banco central, impostos) sustentam essa expectativa.',
      'Fatos institucionais são construídos e plenamente reais.',
      'A diferença entre preço e outros sentidos de valor.'
    ] }
  ];

  A.laboratorio = [
    {
      id: 'x-a', letra: 'A', titulo: 'Explique em suas palavras',
      objetivo: 'Testar se você compreendeu uma ideia, explicando-a sem consultar o material.',
      tipo: 'explicar',
      instrucao: 'Escolha um conceito que você já estudou. Explique-o por escrito, sem voltar à unidade, como faria para um amigo curioso. Depois compare com os elementos essenciais.'
    },
    {
      id: 'x-b', letra: 'B', titulo: 'A ideia em três níveis',
      objetivo: 'Distinguir síntese, explicação e aprofundamento.',
      tipo: 'campos',
      instrucao: 'Escolha uma ideia (sua ou estudada) e explique-a em três níveis. Cada nível tem uma função diferente — não é só uma questão de tamanho.',
      campos: [
        { id: 'ideia', rotulo: 'A ideia', dica: 'Algumas palavras para identificá-la.', curto: true },
        { id: 'frase', rotulo: '1. Uma frase', dica: 'O essencial. Uma frase, idealmente com menos de 30 palavras.', limitePalavras: 30 },
        { id: 'paragrafo', rotulo: '2. Um parágrafo', dica: 'O que a ideia afirma e por quê, em 4 a 6 frases.' },
        { id: 'desenvolvida', rotulo: '3. Explicação desenvolvida', dica: 'Com um exemplo concreto, uma justificativa e pelo menos um limite ou objeção.', grande: true, espelho: true }
      ],
      comentario: `
        <p><strong>A frase</strong> responde a “o que é?”. Se você precisou de duas frases, talvez a ideia tenha duas partes — o que é útil saber.</p>
        <p><strong>O parágrafo</strong> responde a “o que significa e por que importa?”. Um bom teste: alguém que lesse só ele saberia usar a ideia?</p>
        <p><strong>A explicação desenvolvida</strong> responde a “como funciona, onde vale e onde não vale?”. O exemplo mostra a ideia em ação; a justificativa mostra por que acreditar nela; o limite mostra que você sabe onde ela para.</p>
        <p>Se a frase e o parágrafo dizem coisas diferentes, uma das duas não captou a ideia — ou a ideia ainda está se formando. Isso é informação, não fracasso.</p>`,
      checklist: ['A frase cabe sozinha e diz o essencial.', 'O parágrafo acrescenta o “porquê”, e não só repete a frase com mais palavras.', 'A explicação desenvolvida tem um exemplo concreto.', 'A explicação desenvolvida tem uma justificativa.', 'Mencionei pelo menos um limite ou objeção.']
    },
    {
      id: 'x-c', letra: 'C', titulo: 'Organize o raciocínio',
      objetivo: 'Encontrar a estrutura escondida num texto desorganizado.',
      tipo: 'campos',
      instrucao: 'Leia a reflexão abaixo, escrita de um jeito confuso, e identifique seus componentes.',
      material: `<blockquote class="texto-bruto">Eu acho que hoje em dia a gente não descansa mais, tipo, mesmo no fim de semana fica olhando e-mail. Meu avô trabalhava na roça e trabalhava muito, mas quando parava, parava. Sei lá, talvez seja o celular. Mas também tem a coisa de que todo mundo tem medo de perder o emprego, e aí fica disponível. Minha amiga diz que ela gosta de responder rápido, então não é só obrigação. Acho que o descanso virou uma coisa que a gente precisa justificar, tipo “descansar para render mais”. Não sei se antigamente era melhor, porque meu avô também não tinha férias. Enfim, acho que perdemos a ideia de que descansar vale por si mesmo.</blockquote>`,
      campos: [
        { id: 'tese', rotulo: 'A tese principal', dica: 'Qual é a afirmação central?' },
        { id: 'argumentos', rotulo: 'Os argumentos que sustentam a tese', dica: 'Que razões o texto oferece?' },
        { id: 'exemplos', rotulo: 'Os exemplos', dica: 'Casos concretos citados.' },
        { id: 'secundarias', rotulo: 'Ideias secundárias', dica: 'O que aparece, mas não sustenta diretamente a tese?' },
        { id: 'duvidas', rotulo: 'Dúvidas e contradições', dica: 'Onde o texto hesita ou se contradiz?' },
        { id: 'conclusao', rotulo: 'A conclusão', dica: 'Onde o texto chega?' }
      ],
      comentario: `
        <p><strong>Uma estrutura possível:</strong></p>
        <ul>
          <li><strong>Tese:</strong> perdemos a ideia de que o descanso vale por si mesmo; ele passou a precisar de justificativa (render mais). Repare que a tese aparece clara só no fim — é comum que a gente descubra o que pensa enquanto escreve.</li>
          <li><strong>Argumentos:</strong> (1) mesmo no tempo livre, as pessoas permanecem disponíveis ao trabalho; (2) o descanso é justificado pela produtividade (“descansar para render mais”).</li>
          <li><strong>Exemplos:</strong> olhar e-mail no fim de semana; o avô que “quando parava, parava”; a amiga que gosta de responder rápido.</li>
          <li><strong>Ideias secundárias / hipóteses causais:</strong> o celular; o medo de perder o emprego. São explicações possíveis do fenômeno, não argumentos para a tese.</li>
          <li><strong>Dúvidas e contradições:</strong> a amiga gosta de responder (talvez não seja só obrigação); o avô também não tinha férias (talvez antigamente não fosse melhor). Essas dúvidas são valiosas: impedem a nostalgia simplista.</li>
          <li><strong>Conclusão:</strong> reafirma a tese, agora mais precisa: o problema não é trabalhar mais, mas o descanso ter perdido valor próprio.</li>
        </ul>
        <p><strong>Por que essas escolhas:</strong> separar as causas possíveis (celular, medo) da tese evita misturar “por que isso acontece” com “o que está acontecendo”. E manter as dúvidas, em vez de apagá-las, torna a tese mais honesta e mais forte.</p>`,
      checklist: ['Distingui tese de exemplos.', 'Distingui argumentos (razões para a tese) de explicações causais do fenômeno.', 'Identifiquei as dúvidas como parte valiosa do texto, e não só como defeito.']
    },
    {
      id: 'x-d', letra: 'D', titulo: 'Defenda e questione',
      objetivo: 'Compreender a estrutura de um argumento construindo-o e atacando-o.',
      tipo: 'campos',
      instrucao: 'Escolha uma posição — de preferência uma da qual você não tenha certeza. Construa o melhor argumento a favor e, depois, a objeção mais forte que conseguir.',
      opcoesTema: [
        'Uma jornada de trabalho de quatro dias por semana deveria ser adotada amplamente.',
        'É legítimo julgar figuras históricas pelos valores de hoje.',
        'Um bom motivo pode justificar uma mentira.',
        'As redes sociais fizeram mais mal do que bem à conversa pública.',
        'Devemos obrigações morais aos animais semelhantes às que devemos às pessoas.'
      ],
      campos: [
        { id: 'posicao', rotulo: 'A posição', dica: 'Escolha uma das sugestões ou escreva a sua.', curto: true },
        { id: 'premissas', rotulo: 'O argumento a favor, em premissas', dica: 'Escreva cada premissa numa linha, incluindo as implícitas, e termine com a conclusão.' },
        { id: 'objecao', rotulo: 'A objeção mais forte', dica: 'Ataca uma premissa? A ligação? Mostra uma consequência inaceitável?' },
        { id: 'resposta', rotulo: 'Uma resposta possível à objeção', dica: 'Ou: o que a objeção obriga a conceder.' },
        { id: 'aprendi', rotulo: 'O que a objeção revelou sobre o argumento', dica: 'Qual premissa era mais frágil do que parecia?' }
      ],
      comentario: `
        <p>Há três maneiras básicas de objetar a um argumento:</p>
        <ol>
          <li><strong>Atacar uma premissa:</strong> mostrar que ela é falsa ou duvidosa.</li>
          <li><strong>Atacar a ligação:</strong> mostrar que, mesmo com premissas verdadeiras, a conclusão não se segue.</li>
          <li><strong>Mostrar uma consequência inaceitável:</strong> se o argumento valesse, provaria também algo que ninguém aceita.</li>
        </ol>
        <p>A objeção mais forte geralmente ataca a premissa implícita — aquela que o argumento precisava, mas não dizia. Se a sua objeção foi fácil de responder, tente outra: talvez você ainda não tenha encontrado a melhor.</p>
        <p>O objetivo não é mudar de opinião, mas saber exatamente em que ponto ela depende de algo discutível.</p>`,
      checklist: ['O argumento tem premissas separadas e uma conclusão clara.', 'Incluí pelo menos uma premissa implícita.', 'A objeção é algo que um defensor sério da outra posição diria.', 'A resposta enfrenta a objeção, e não só repete a tese.']
    },
    {
      id: 'x-e', letra: 'E', titulo: 'A conversa imaginária',
      objetivo: 'Explicar seu raciocínio a alguém que discorda ou não entende.',
      tipo: 'conversa',
      instrucao: 'Escolha um interlocutor. Responda como se estivesse numa conversa real, por escrito. Depois use a lista de verificação e o Espelho do texto.',
      personas: [
        { id: 'paulo', nome: 'Paulo, prático', fala: '“Filosofia é perda de tempo. O que importa é resolver problemas reais, não ficar fazendo pergunta sem resposta.”', pontos: ['Ele valoriza resultados: um exemplo concreto em que pensar melhor resolveu um problema real costuma funcionar melhor que uma defesa abstrata.', 'Há algo verdadeiro na fala dele: perguntas sem fim podem paralisar. Conceder isso aumenta sua credibilidade.', 'Pergunta útil: “Que problema real você resolveria sem antes entender qual é o problema?”'] },
        { id: 'lucia', nome: 'Lúcia, relativista', fala: '“Se tudo é interpretação, então nada é verdade. Cada um tem a sua verdade e pronto.”', pontos: ['Distinguir: que haja muitas interpretações não implica que todas sejam igualmente boas.', 'A própria frase dela pretende ser verdadeira para todos — o que é uma tensão interessante a explorar com delicadeza.', 'Exemplo útil: interpretações diferentes de um mesmo fato (que pode ser verificado) versus valores diferentes (que se discutem de outro modo).'] },
        { id: 'jorge', nome: 'Tio Jorge, tradicional', fala: '“Sempre foi assim. É natural. Não tem por que ficar questionando tudo.”', pontos: ['Ele pode estar defendendo algo valioso (estabilidade, laços, prudência). Reconhecer isso abre a conversa.', 'Use a distinção entre os sentidos de “natural”: ele quer dizer universal? frequente? bom?', 'Evite “você está errado”; prefira “em que sentido você diz que é natural?”.'] },
        { id: 'ana', nome: 'Ana, curiosa', fala: '“Não entendi o que você quer dizer com ‘pressuposto’. Me explica com um exemplo?”', pontos: ['Ela não discorda: precisa de clareza. Comece pelo exemplo, depois a definição.', 'Verifique se você usou outro termo técnico para explicar o primeiro.', 'Termine perguntando se ficou claro — ou propondo que ela encontre um exemplo próprio.'] }
      ],
      checklist: ['Comecei respondendo ao que a pessoa disse, e não ao que eu queria dizer.', 'Reconheci algo verdadeiro na posição dela.', 'Usei pelo menos um exemplo concreto.', 'Não usei termos técnicos sem explicar.', 'Não pulei etapas: cada passo segue do anterior.', 'Terminei abrindo a conversa, não encerrando.']
    },
    {
      id: 'x-f', letra: 'F', titulo: 'Da abstração ao exemplo — e de volta',
      objetivo: 'Mover-se entre o geral e o particular nas duas direções.',
      tipo: 'campos',
      instrucao: 'Primeiro, encontre uma situação concreta para cada ideia abstrata. Depois faça o caminho inverso: encontre as perguntas gerais por trás de uma situação particular.',
      campos: [
        { id: 'abs1', rotulo: '“O poder pode agir por meio de regras que parecem neutras.” — um exemplo concreto:', dica: 'Algo que você viu ou viveu.' },
        { id: 'abs2', rotulo: '“Uma mesma ação pode ter significados diferentes em contextos diferentes.” — um exemplo concreto:', dica: '' },
        { id: 'abs3', rotulo: '“Lembrar é reconstruir.” — um exemplo concreto:', dica: '' },
        { id: 'conc1', rotulo: 'Situação: “Num grupo de amigos, uma pessoa sempre paga a conta e ninguém comenta.” — que perguntas gerais ela levanta?', dica: 'Pense em reciprocidade, dinheiro, poder, gratidão, normas não ditas.' },
        { id: 'conc2', rotulo: 'Situação: “Uma pessoa troca de profissão aos 45 anos e a família diz que ela ‘jogou tudo fora’.” — que perguntas gerais ela levanta?', dica: '' }
      ],
      comentario: `
        <p><strong>Bons exemplos</strong> são específicos (têm pessoas, lugares, ações) e mostram a ideia funcionando — não apenas mencionam o tema. “No trabalho tem muita política” é vago; “a regra de que só quem tem curso superior pode se candidatar a supervisor excluiu os funcionários mais antigos, que conheciam melhor o setor” é um exemplo.</p>
        <p><strong>Boas perguntas gerais</strong> extraídas da situação do amigo que paga: o que torna uma relação recíproca? O dinheiro muda a natureza de uma amizade? Quem paga ganha algo além da gratidão (status, controle)? Por que certas coisas não se comentam?</p>
        <p>Da situação da troca de profissão: o que conta como “desperdício” numa vida? A identidade está ligada à profissão? Quem tem o direito de avaliar as escolhas de alguém?</p>
        <p>O movimento de ida e volta é o coração do pensamento: ideias sem exemplos ficam vazias; exemplos sem ideias ficam cegos.</p>`,
      checklist: ['Meus exemplos têm detalhes concretos.', 'Os exemplos mostram a ideia, e não apenas o tema.', 'As perguntas gerais valeriam para outras situações também.']
    },
    {
      id: 'x-g', letra: 'G', titulo: 'Reconstruindo uma ideia',
      objetivo: 'Desmontar uma frase aparentemente simples e reconstruí-la com mais precisão.',
      tipo: 'reconstruir',
      instrucao: 'Escolha uma frase. Desmonte-a: que afirmações ela faz sem dizer? Que palavras estão vagas? O que há de verdadeiro nela? Depois escreva uma versão mais precisa.',
      frases: [
        { id: 'quer', frase: 'Quem quer, consegue.', modelo: '<ul><li><strong>Afirmações implícitas:</strong> querer é condição suficiente para conseguir; quem não conseguiu não quis o bastante; as condições de partida não importam muito.</li><li><strong>Vago:</strong> “querer” (desejar? esforçar-se? persistir por anos?), “conseguir” (o quê?).</li><li><strong>O que há de verdadeiro:</strong> esforço e persistência aumentam as chances em muitas situações.</li><li><strong>Versão mais precisa:</strong> “Em muitas situações, a persistência aumenta as chances de alcançar um objetivo, mas o resultado também depende de condições que a pessoa não controla.”</li></ul>' },
        { id: 'dinheiro', frase: 'Dinheiro não traz felicidade.', modelo: '<ul><li><strong>Afirmações implícitas:</strong> não há relação entre renda e bem-estar; quem busca dinheiro se engana.</li><li><strong>Vago:</strong> “felicidade” (satisfação com a vida? emoções do dia a dia?), “traz” (causa? garante?).</li><li><strong>O que há de verdadeiro:</strong> pesquisas sugerem que, a partir de certo ponto, mais renda acrescenta menos ao bem-estar, e que dinheiro não substitui relações e sentido.</li><li><strong>O que é discutível:</strong> para quem não tem o básico, mais dinheiro costuma melhorar muito a vida. Os estudos discordam sobre se há um “teto”.</li><li><strong>Versão mais precisa:</strong> “O dinheiro contribui para o bem-estar sobretudo quando atende necessidades básicas e dá segurança; além disso, seus efeitos são menores e não substituem outras fontes de uma vida boa.”</li></ul>' },
        { id: 'verdade', frase: 'Cada um tem a sua verdade.', modelo: '<ul><li><strong>Afirmações implícitas:</strong> não há como avaliar crenças; todas valem o mesmo; discordar é inútil.</li><li><strong>Vago:</strong> “verdade” (opinião? experiência? fato?).</li><li><strong>O que há de verdadeiro:</strong> pessoas vivem experiências diferentes e têm perspectivas legítimas diferentes; em questões de gosto, não faz sentido buscar uma resposta única.</li><li><strong>O que é discutível:</strong> para fatos (a água ferve a 100 °C ao nível do mar), não existe “a sua” e “a minha”.</li><li><strong>Versão mais precisa:</strong> “Cada pessoa tem uma perspectiva e uma experiência próprias, que merecem ser ouvidas; isso não significa que todas as afirmações sobre fatos sejam igualmente corretas.”</li></ul>' },
        { id: 'tecnologia', frase: 'A tecnologia nos deixou mais sozinhos.', modelo: '<ul><li><strong>Afirmações implícitas:</strong> estamos mais sozinhos do que antes; a causa é a tecnologia; a tecnologia age igual sobre todos.</li><li><strong>Vago:</strong> “tecnologia” (qual?), “sozinhos” (isolados ou solitários?), “nos” (quem?).</li><li><strong>O que há de verdadeiro:</strong> certas formas de uso podem substituir encontros presenciais; algumas pesquisas encontram associação entre uso intenso e mal-estar em certos grupos.</li><li><strong>O que é discutível:</strong> a direção causal; o fato de que a mesma tecnologia também conecta pessoas isoladas.</li><li><strong>Versão mais precisa:</strong> “Certos usos de algumas tecnologias podem contribuir para o isolamento de certas pessoas, enquanto outros usos as aproximam; a relação geral ainda é debatida.”</li></ul>' }
      ],
      campos: [
        { id: 'implicitas', rotulo: 'Afirmações implícitas', dica: 'O que a frase diz sem dizer?' },
        { id: 'vagos', rotulo: 'Termos vagos', dica: 'Que palavras precisam ser esclarecidas?' },
        { id: 'verdadeiro', rotulo: 'O que há de verdadeiro nela', dica: 'Toda frase popular sobrevive por algum motivo.' },
        { id: 'versao', rotulo: 'Versão mais precisa', dica: 'Mais modesta, mais exata — e ainda interessante.' }
      ],
      checklist: ['Encontrei pelo menos duas afirmações implícitas.', 'Reconheci algo de verdadeiro na frase.', 'Minha versão é mais precisa sem ficar vazia.']
    },
    {
      id: 'x-h', letra: 'H', titulo: 'Da leitura à reflexão própria',
      objetivo: 'Distinguir o que uma obra apresenta daquilo que você interpretou, e chegar a uma reflexão sua.',
      tipo: 'leitura',
      instrucao: 'Depois de ler algo (um livro, um conto, um ensaio, até um filme), escolha um ponto que chamou sua atenção e siga as etapas. A reflexão pode ser associada a uma obra da Biblioteca, e aparecerá também na ficha dela.',
      campos: [
        { id: 'ponto', rotulo: 'O que chamou minha atenção', dica: 'Uma passagem, um conflito, uma pergunta, um personagem.' },
        { id: 'obra', rotulo: 'O que a obra efetivamente apresenta', dica: 'Descreva sem interpretar: o que acontece, o que é dito.' },
        { id: 'interpretei', rotulo: 'O que eu interpretei a partir disso', dica: 'Que significado eu atribuí? Outra leitura seria possível?' },
        { id: 'conexao', rotulo: 'Conexões', dica: 'Com outra ideia, outra obra, uma experiência minha, uma unidade do percurso.' },
        { id: 'reflexao', rotulo: 'Minha reflexão', dica: 'O que eu penso — não o que a obra pensa nem o que um crítico pensa.', grande: true, espelho: true }
      ],
      comentario: `
        <p>A distinção entre o que a obra apresenta e o que você interpretou é a mesma entre fato e interpretação, agora aplicada à leitura. Ela não diminui a interpretação; ao contrário, permite defendê-la (“penso isso por causa desta passagem”) e permite perceber outras leituras possíveis.</p>
        <p>Uma boa reflexão própria costuma fazer pelo menos uma destas coisas: levar a pergunta da obra para outro contexto; discordar de algo na obra; perceber algo que a obra mostra sem dizer; relacionar a obra a uma experiência sua sem reduzir uma à outra.</p>
        <p>Um sinal de alerta: se sua reflexão poderia ter sido escrita sem ler a obra, ou se é um resumo dela, talvez ainda não seja sua.</p>`,
      checklist: ['Separei o que a obra apresenta do que eu interpretei.', 'Considerei pelo menos uma leitura diferente da minha.', 'Minha reflexão não é um resumo da obra.', 'Fiz uma conexão com algo fora da obra.']
    }
  ];

  /* ---------------------------------------------------------
     DA INTUIÇÃO À IDEIA — as oito etapas
     --------------------------------------------------------- */
  A.etapasIntuicao = [
    { n: 1, id: 'intuicao', titulo: 'A intuição', perguntas: 'O que percebi? Qual é a sensação de que existe algo interessante aqui? O que me chamou a atenção?', dica: 'Neste ponto, o registro original já está salvo. Aqui, tente dizer o que, concretamente, provocou a intuição: uma cena, uma frase, um dado, uma conversa.' },
    { n: 2, id: 'questao', titulo: 'A questão central', perguntas: 'Qual é a pergunta que realmente estou tentando responder? Consigo formulá-la em uma frase?', dica: 'Se surgirem várias perguntas, anote todas e escolha uma. Lembre-se dos tipos: conceitual, empírica, histórica, explicativa, normativa, pessoal.' },
    { n: 3, id: 'conceitos', titulo: 'Os conceitos envolvidos', perguntas: 'Quais palavras são importantes para a minha ideia? Estou usando algum conceito de maneira vaga? Preciso distinguir termos que parecem semelhantes?', dica: 'Liste as palavras-chave e, para cada uma, escreva o que você quer dizer com ela — e o que não quer dizer.' },
    { n: 4, id: 'estrutura', titulo: 'A estrutura do raciocínio', perguntas: 'Quais são minhas premissas? Que relações estou estabelecendo? O que estou supondo sem perceber?', dica: 'Tente escrever em forma de premissas (uma por linha) e conclusão. Procure a premissa implícita.' },
    { n: 5, id: 'evidencias', titulo: 'As evidências e os exemplos', perguntas: 'O que me levou a pensar assim? Tenho exemplos concretos? Estou generalizando a partir de uma experiência limitada?', dica: 'Separe experiências pessoais, informações de terceiros e dados. Pergunte que evidência faltaria.' },
    { n: 6, id: 'alternativas', titulo: 'Outras interpretações', perguntas: 'Como alguém que discorda de mim compreenderia a mesma situação? Existe uma explicação alternativa que ainda não considerei?', dica: 'Escreva a posição contrária na versão mais forte possível — como se você a defendesse.' },
    { n: 7, id: 'formulacao', titulo: 'A formulação', perguntas: 'Como posso expressar minha ideia de maneira clara, mantendo sua complexidade sem torná-la confusa?', dica: 'Escreva um parágrafo corrido. Use o Espelho do texto para uma leitura mecânica.', espelho: true },
    { n: 8, id: 'sintese', titulo: 'A síntese', perguntas: 'Qual é a ideia principal que consigo defender neste momento? O que ainda não sei? O que poderia me fazer mudar de opinião?', dica: 'Três respostas curtas. A síntese pode ser uma tese, uma distinção mais precisa ou uma pergunta melhor.', subcampos: [
      { id: 'defendo', rotulo: 'O que consigo defender agora' },
      { id: 'naosei', rotulo: 'O que ainda não sei' },
      { id: 'mudaria', rotulo: 'O que me faria mudar de opinião' }
    ] }
  ];

  /* Exemplo guiado (somente leitura) */
  A.exemploIntuicao = {
    titulo: 'Trabalho, dinheiro e valor (exemplo)',
    original: 'tem alguma coisa muito estranha no jeito que todo mundo fala de trabalho. tipo, quem cuida de idoso ganha uma miséria e quem mexe com dinheiro ganha muito. e quando alguém fica desempregado parece que a pessoa vale menos. não sei explicar, mas me incomoda.',
    etapas: {
      intuicao: 'Duas cenas: a cuidadora da minha avó, que trabalha muito e ganha pouco; e um amigo que, depois de ser demitido, passou a evitar encontros “porque não tinha nada para contar”.',
      questao: 'Por que tendemos a medir o valor de um trabalho — e até de uma pessoa — pelo quanto ele é pago?',
      conceitos: '“Valor”: preciso separar preço (quanto se paga), importância social (quanto a sociedade depende disso) e dignidade (o valor de uma pessoa, que não deveria ter preço). “Trabalho”: estou pensando só em trabalho pago? O cuidado não pago também conta.',
      estrutura: 'P1. Alguns trabalhos muito importantes são mal pagos.\nP2. As pessoas costumam tratar o salário como medida do valor do trabalho.\nP3 (implícita). Também tendem a tratar o trabalho como medida do valor da pessoa.\nC. Logo, há pessoas importantes tratadas como menos valiosas — e isso parece errado.\nO que estou supondo: que importância social e salário deveriam coincidir. Será?',
      evidencias: 'Tenho dois exemplos pessoais, o que é pouco. Preciso saber: há dados sobre salários de trabalhadores do cuidado? O que dizem as pesquisas sobre desemprego e autoestima? Estou generalizando a partir do meu círculo?',
      alternativas: 'Alguém poderia dizer que salário não mede valor nenhum, só oferta e procura — e que ninguém confunde as duas coisas. Ou que pagar mais a quem gera mais receita é justo. Ou que o desempregado sofre por perder renda e rotina, não “valor”. São leituras que preciso levar a sério.',
      formulacao: 'Usamos a palavra “valor” para coisas diferentes — preço, importância e dignidade — e tendemos a tratar o primeiro como medida dos outros dois. Por isso trabalhos essenciais e mal pagos, como o cuidado, parecem “valer pouco”, e pessoas sem emprego sentem que perderam valor como pessoas. Essa confusão não é inevitável: tem origens históricas e reforços culturais. Mas também há explicações econômicas para os salários que não dependem de nenhum julgamento sobre dignidade.',
      sintese: { defendo: 'Que há uma confusão entre preço e outros sentidos de valor, e que ela tem consequências reais para como as pessoas se veem.', naosei: 'Por que exatamente os trabalhos de cuidado são mal pagos — quais causas pesam mais.', mudaria: 'Se as pesquisas mostrassem que as pessoas, na prática, não associam salário a valor pessoal.' }
    }
  };

  /* ---------------------------------------------------------
     MAPA DE IDEIAS — nós e conexões
     Cada conexão explica por que faz sentido (por) e onde
     pode deixar de valer (limite).
     --------------------------------------------------------- */
  A.mapa = {
    nos: [
      { id: 'natural', nome: 'Natural', desc: 'O que parece dado, necessário ou evidente — e os vários sentidos da palavra.', refs: ['u:u-natural', 'q:q-natural'] },
      { id: 'cultura', nome: 'Cultura', desc: 'Práticas, símbolos e significados aprendidos e transmitidos.', refs: ['u:u-natural', 'b:b-montaigne'] },
      { id: 'natureza', nome: 'Natureza', desc: 'O mundo não humano — e a pergunta se estamos fora ou dentro dele.', refs: ['b:b-krenak', 'u:u-explicar'] },
      { id: 'linguagem', nome: 'Linguagem', desc: 'Palavras, signos e usos que organizam a experiência.', refs: ['u:u-palavra'] },
      { id: 'verdade', nome: 'Verdade', desc: 'A relação entre o que dizemos e o que é o caso.', refs: ['u:u-saber', 'q:q-certos'] },
      { id: 'conhecimento', nome: 'Conhecimento', desc: 'Crença justificada, testemunho, evidência e certeza.', refs: ['u:u-saber'] },
      { id: 'interpretacao', nome: 'Interpretação', desc: 'Atribuir significado ao que acontece.', refs: ['u:u-fato'] },
      { id: 'memoria', nome: 'Memória', desc: 'A reconstrução do passado no presente.', refs: ['u:u-saber', 'b:b-funes'] },
      { id: 'identidade', nome: 'Identidade', desc: 'O que faz alguém continuar sendo quem é.', refs: ['u:u-mesma'] },
      { id: 'tempo', nome: 'Tempo', desc: 'Vivido, medido e físico.', refs: ['u:u-tempo'] },
      { id: 'narrativa', nome: 'Narrativa', desc: 'Organizar acontecimentos numa história com sentido.', refs: ['b:b-akutagawa', 'b:b-dom-casmurro'] },
      { id: 'emocao', nome: 'Emoção', desc: 'Avaliação, corpo, tendência à ação e sentimento.', refs: ['u:u-emocao'] },
      { id: 'valor', nome: 'Valor', desc: 'Preço, utilidade, importância, mérito e dignidade.', refs: ['u:u-dinheiro'] },
      { id: 'dinheiro', nome: 'Dinheiro', desc: 'Uma instituição feita de confiança.', refs: ['u:u-dinheiro'] },
      { id: 'trabalho', nome: 'Trabalho', desc: 'Atividade, sustento, identidade e reconhecimento.', refs: ['u:u-dinheiro', 'b:b-russell-ocio'] },
      { id: 'confianca', nome: 'Confiança', desc: 'Apostar no que os outros farão ou dirão.', refs: ['u:u-saber', 'u:u-dinheiro'] },
      { id: 'instituicao', nome: 'Instituição', desc: 'Padrões compartilhados que ganham regras, papéis e autoridade.', refs: ['q:q-instituicao'] },
      { id: 'poder', nome: 'Poder', desc: 'A capacidade de influenciar o que os outros fazem, pensam ou consideram possível.', refs: ['b:b-1984', 'p:barthes'] },
      { id: 'liberdade', nome: 'Liberdade', desc: 'Ausência de impedimentos, capacidade real ou autonomia.', refs: ['q:q-livre'] },
      { id: 'responsabilidade', nome: 'Responsabilidade', desc: 'Responder pelo que se faz — e pelo que se deixa de fazer.', refs: ['u:u-acao-boa'] },
      { id: 'etica', nome: 'Ética', desc: 'Como orientar escolhas quando valores entram em conflito.', refs: ['u:u-acao-boa'] },
      { id: 'causalidade', nome: 'Causalidade', desc: 'Por que as coisas acontecem — e como sabemos.', refs: ['u:u-causa'] },
      { id: 'ciencia', nome: 'Ciência', desc: 'Investigação coletiva, falível e autocorretiva.', refs: ['u:u-cosmos', 'c:c-semmelweis'] },
      { id: 'historia', nome: 'História', desc: 'Como as visões de mundo mudam.', refs: ['u:u-cosmos'] },
      { id: 'sentido', nome: 'Sentido da vida', desc: 'O que faz uma vida valer a pena.', refs: ['q:q-vida-significativa', 'b:b-ivan-ilitch'] },
      { id: 'morte', nome: 'Morte', desc: 'A finitude e o que ela faz com o resto.', refs: ['b:b-ivan-ilitch', 'b:b-sisifo'] }
    ],
    arestas: [
      { a: 'natural', b: 'cultura', por: 'Muito do que chamamos de natural é cultura que esquecemos ter aprendido.', limite: 'Deixa de valer quando ignora o corpo e a biologia: nem tudo é aprendido.' },
      { a: 'natural', b: 'natureza', por: '“Natural” sugere pertencer à natureza, em oposição ao artificial.', limite: 'A própria divisão entre natureza e cultura é questionada por tradições indígenas e pela biologia.' },
      { a: 'natural', b: 'poder', por: 'Apresentar um arranjo como natural o protege de questionamento — o que beneficia quem ganha com ele.', limite: 'Nem toda naturalização é uma estratégia de alguém; muitas são simplesmente hábito.' },
      { a: 'natural', b: 'etica', por: 'A passagem do “é natural” ao “é certo” é um dos saltos mais comuns no raciocínio moral.', limite: 'Algumas éticas (como a do direito natural) defendem, com argumentos, alguma ligação entre natureza humana e bem.' },
      { a: 'linguagem', b: 'cultura', por: 'Cada língua recorta e organiza a experiência a seu modo.', limite: 'A língua influencia, mas não aprisiona o pensamento.' },
      { a: 'linguagem', b: 'poder', por: 'Quem define as palavras define, em parte, o que pode ser visto e dito.', limite: 'Mudar palavras sem mudar condições pode ser só cosmético.' },
      { a: 'linguagem', b: 'identidade', por: 'Contamos quem somos com palavras e categorias que recebemos.', limite: 'Há experiências de si que escapam às palavras disponíveis.' },
      { a: 'linguagem', b: 'interpretacao', por: 'Toda interpretação é formulada em alguma linguagem, que já sugere certos sentidos.', limite: 'Existem interpretações tácitas, corporais, que precedem as palavras.' },
      { a: 'interpretacao', b: 'emocao', por: 'A mesma situação produz emoções diferentes conforme a interpretação.', limite: 'Algumas emoções são respostas adequadas a fatos, e não erros de interpretação.' },
      { a: 'interpretacao', b: 'verdade', por: 'Interpretações podem ser mais ou menos fiéis aos fatos.', limite: 'Em questões de sentido e valor, a ideia de uma única interpretação “verdadeira” é mais discutível.' },
      { a: 'interpretacao', b: 'narrativa', por: 'Interpretar é muitas vezes encaixar um acontecimento numa história.', limite: 'Nem todo acontecimento cabe numa narrativa coerente; forçar isso distorce.' },
      { a: 'verdade', b: 'conhecimento', por: 'Só se pode saber o que é verdadeiro; saber exige mais do que acertar.', limite: 'Não há consenso sobre o que, além de verdade e justificação, é necessário.' },
      { a: 'conhecimento', b: 'confianca', por: 'Quase tudo o que sabemos depende do testemunho de outros.', limite: 'Confiança cega não é conhecimento; é preciso confiar bem.' },
      { a: 'conhecimento', b: 'ciencia', por: 'A ciência é uma forma organizada e coletiva de produzir e corrigir conhecimento.', limite: 'Há conhecimentos (práticos, morais, de si) que a ciência não esgota.' },
      { a: 'memoria', b: 'identidade', por: 'Para Locke, sou o mesmo enquanto minha consciência alcança meu passado.', limite: 'Perdemos memórias sem deixar de ser quem somos — e lembramos coisas que não aconteceram.' },
      { a: 'memoria', b: 'conhecimento', por: 'A memória é uma fonte de conhecimento sobre o passado.', limite: 'É reconstrutiva: a certeza de uma lembrança não garante sua exatidão.' },
      { a: 'memoria', b: 'narrativa', por: 'Lembramos organizando o passado em histórias.', limite: 'A história pode substituir o que realmente aconteceu.' },
      { a: 'tempo', b: 'memoria', por: 'Para Agostinho, o passado existe como memória na mente.', limite: 'A física trata o tempo de modo independente da memória humana.' },
      { a: 'tempo', b: 'identidade', por: 'Ser alguém é permanecer — de algum modo — através da mudança no tempo.', limite: 'Para algumas tradições, como a budista, a permanência é justamente a ilusão.' },
      { a: 'tempo', b: 'trabalho', por: 'A industrialização transformou o tempo em medida do trabalho (o relógio de ponto).', limite: 'Muitas formas de trabalho, como o cuidado, não se deixam medir bem em horas.' },
      { a: 'tempo', b: 'morte', por: 'A finitude dá ao tempo seu peso: não temos tempo infinito.', limite: 'Diferentes culturas e religiões entendem a morte e o tempo de modos muito diferentes.' },
      { a: 'identidade', b: 'narrativa', por: 'A identidade narrativa integra mudanças numa história.', limite: 'Narrativas de si podem ser autoindulgentes.' },
      { a: 'identidade', b: 'responsabilidade', por: 'Só faz sentido responsabilizar alguém por um ato se for a mesma pessoa que o praticou.', limite: 'Mudanças profundas de caráter tornam essa ligação mais tênue — e isso é um debate real no direito.' },
      { a: 'identidade', b: 'trabalho', por: 'Em muitas sociedades, a profissão virou parte central de quem somos (“o que você faz?”).', limite: 'É uma ligação histórica, não necessária; em outras épocas, família, religião ou terra pesavam mais.' },
      { a: 'valor', b: 'dinheiro', por: 'O dinheiro mede o preço das coisas, e tendemos a tratá-lo como medida do valor.', limite: 'Preço e outros sentidos de valor (importância, dignidade) frequentemente não coincidem.' },
      { a: 'valor', b: 'trabalho', por: 'Diz-se que o trabalho “gera valor”, e que um trabalho “vale” mais que outro.', limite: 'A palavra muda de sentido conforme se fala de economia ou de ética.' },
      { a: 'valor', b: 'etica', por: 'A ética investiga o que vale a pena e o que devemos.', limite: 'Valores econômicos e morais obedecem a lógicas diferentes.' },
      { a: 'dinheiro', b: 'confianca', por: 'A moeda vale porque esperamos que outros a aceitem.', limite: 'Além da confiança, há coerção: impostos, leis e o Estado sustentam a moeda.' },
      { a: 'dinheiro', b: 'instituicao', por: 'Moeda é um fato institucional: algo conta como dinheiro num contexto.', limite: 'Instituições não são só regras; dependem de práticas e de poder.' },
      { a: 'dinheiro', b: 'poder', por: 'Quem controla recursos influencia o que outros podem fazer.', limite: 'Há formas de poder que não dependem de dinheiro (prestígio, conhecimento, força).' },
      { a: 'dinheiro', b: 'liberdade', por: 'Dinheiro amplia as escolhas reais de quem o tem.', limite: 'Também pode criar dependências e restringir quem é dominado por ele.' },
      { a: 'trabalho', b: 'sentido', por: 'O trabalho pode ser fonte de sentido — ou de esvaziamento.', limite: 'Pôr todo o sentido da vida no trabalho torna a pessoa frágil diante da perda do emprego.' },
      { a: 'instituicao', b: 'poder', por: 'Instituições distribuem papéis, autoridade e recursos.', limite: 'Também protegem os mais fracos contra a força bruta.' },
      { a: 'instituicao', b: 'natural', por: 'Instituições antigas parecem naturais para quem nasceu dentro delas.', limite: 'Que pareçam naturais não significa que sejam ilegítimas.' },
      { a: 'liberdade', b: 'responsabilidade', por: 'Somos responsáveis na medida em que somos livres.', limite: 'Graus de liberdade são difíceis de medir; circunstâncias diminuem a responsabilidade, mas raramente a anulam.' },
      { a: 'etica', b: 'responsabilidade', por: 'A ética pergunta pelo que devemos e pelo que respondemos.', limite: 'Diferentes éticas atribuem responsabilidades diferentes (por intenções, por consequências).' },
      { a: 'causalidade', b: 'ciencia', por: 'Grande parte da ciência é a busca de causas.', limite: 'Em sistemas complexos, falar de “a causa” costuma ser uma simplificação.' },
      { a: 'causalidade', b: 'responsabilidade', por: 'Ser causa de algo é uma condição frequente para ser responsável.', limite: 'Causar não é o mesmo que ser culpado (acidentes), e pode-se ser responsável sem ser causa (omissões).' },
      { a: 'ciencia', b: 'historia', por: 'A ciência muda ao longo do tempo, e suas mudanças mudam visões de mundo.', limite: 'Reconhecer a história da ciência não a reduz a mera opinião de época.' },
      { a: 'historia', b: 'cultura', por: 'Culturas se transformam, e a história mostra o que parecia possível em cada época.', limite: 'Contar a história como progresso linear é uma interpretação, não um fato.' },
      { a: 'historia', b: 'memoria', por: 'Memória coletiva e história se alimentam mutuamente.', limite: 'A história, como disciplina, também corrige a memória coletiva.' },
      { a: 'natureza', b: 'ciencia', por: 'As ciências naturais investigam o mundo não humano — e o humano como parte dele.', limite: 'Outras formas de conhecimento sobre a natureza existem, como os saberes tradicionais.' },
      { a: 'sentido', b: 'morte', por: 'A consciência da finitude leva à pergunta sobre o sentido.', limite: 'Algumas pessoas encontram sentido sem pensar na morte; outras, apesar dela.' },
      { a: 'sentido', b: 'narrativa', por: 'Damos sentido à vida contando-a como uma história.', limite: 'Uma vida pode ter sentido sem ter um enredo coerente.' },
      { a: 'emocao', b: 'valor', por: 'Emoções revelam o que importa para nós (o luto mede o amor).', limite: 'Emoções também podem ser desproporcionais ou manipuladas.' },
      { a: 'emocao', b: 'conhecimento', por: 'Emoções podem informar sobre situações (o medo diante de um perigo real).', limite: 'A intensidade de uma emoção não é prova de nada.' }
    ]
  };
})();
