/* =========================================================
   Etapa 3 — Interpretar
   ========================================================= */
(function () {
  const U = window.ATELIE.unidades;

  /* ---------------------------------------------------------
     Sentimento, interpretação e reação
     --------------------------------------------------------- */
  U['u-emocao'] = {
    id: 'u-emocao',
    titulo: 'Sentimento, interpretação e reação',
    pergunta: 'Nossas emoções revelam algo sobre o mundo ou sobretudo sobre a maneira como o interpretamos?',
    duracao: '25–30 min',
    eixos: ['E', 'K', 'D'],
    resumo: 'Os componentes de uma emoção; a tradição estoica; teorias psicológicas em debate; o que a reinterpretação pode e não pode fazer.',
    blocos: [
      { t: 'importa', html: `
        <p>É comum ouvir duas ideias opostas sobre emoções: que elas são verdades interiores que devem ser sempre seguidas, ou que são distorções que devem ser controladas. As duas simplificam. Esta unidade procura entender o que uma emoção <em>é</em> — e, com isso, perceber quando ela informa algo importante e quando responde mais à nossa leitura da situação do que à situação em si.</p>
        <p class="nota">Este não é um material clínico. Se você estiver passando por sofrimento intenso, conversar com um profissional de saúde mental é um passo valioso, e não um sinal de fracasso.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Lembre-se de uma vez recente em que você sentiu raiva, mágoa ou ansiedade. Descreva: o que aconteceu, o que você sentiu e o que fez (ou teve vontade de fazer).' },

      { t: 'situacao', titulo: 'Duas pessoas, a mesma mensagem', html: `
        <p>Joana e Pedro mandaram, cada um, uma mensagem longa e pessoal para um amigo. Dois dias depois, nenhum dos dois recebeu resposta, embora o aplicativo mostre que a mensagem foi lida.</p>
        <p><strong>Joana</strong> sente uma pontada de mágoa e pensa: “Ele achou minha mensagem exagerada. Não devia ter escrito aquilo.” Fica constrangida e decide não mandar mais nada.</p>
        <p><strong>Pedro</strong> sente uma leve preocupação e pensa: “Ele deve estar atolado; ou ficou mexido e precisa de tempo.” Manda, no terceiro dia: “Sem pressa, viu? Quando der, a gente conversa.”</p>
        <p>O acontecimento é o mesmo. As emoções e as reações, não.</p>` },

      { t: 'conceito', titulo: 'Os componentes de uma emoção', html: `
        <p>Pesquisadores costumam distinguir, numa emoção, vários componentes que acontecem quase juntos:</p>
        <dl class="camadas">
          <dt>A avaliação</dt><dd>Uma leitura, muitas vezes instantânea e não verbal, do que a situação significa para mim: ameaça, perda, ofensa, oportunidade.</dd>
          <dt>A alteração corporal</dt><dd>Coração acelerado, aperto no peito, calor no rosto.</dd>
          <dt>A tendência à ação</dt><dd>Vontade de fugir, de atacar, de se esconder, de se aproximar.</dd>
          <dt>O sentimento</dt><dd>A experiência consciente — o que é, para mim, estar com raiva ou com medo.</dd>
          <dt>A expressão e a reação</dt><dd>O que efetivamente faço e mostro.</dd>
        </dl>
        <p>Separar esses componentes permite perceber algo importante: entre o acontecimento e a reação há uma <strong>interpretação</strong>, e entre a vontade de agir e a ação há, às vezes, um espaço.</p>` },

      { t: 'classificar', id: 'componentes',
        prompt: 'No caso de Joana, classifique cada elemento.',
        categorias: ['Acontecimento', 'Interpretação', 'Sentimento', 'Reação'],
        itens: [
          { txt: 'A mensagem foi lida e não respondida em dois dias.', cat: ['Acontecimento'], exp: 'O que qualquer um poderia constatar.' },
          { txt: '“Ele achou minha mensagem exagerada.”', cat: ['Interpretação'], exp: 'Uma hipótese sobre a mente do outro, vivida como certeza.' },
          { txt: 'Mágoa e constrangimento.', cat: ['Sentimento'], exp: 'Reais, e coerentes com a interpretação.' },
          { txt: 'Decide não mandar mais nada.', cat: ['Reação'], exp: 'Uma ação que, aliás, impede que a interpretação seja testada.' },
          { txt: '“Não devia ter escrito aquilo.”', cat: ['Interpretação'], exp: 'Um julgamento sobre si mesma derivado da interpretação anterior.' }
        ] },

      { t: 'pensador', id: 'estoicos' },

      { t: 'perspectivas', titulo: 'Teorias em debate', itens: [
        { nome: 'Teorias da avaliação', html: 'Psicólogos como Richard Lazarus defenderam que as emoções surgem da avaliação que fazemos da situação em relação aos nossos objetivos. É uma ideia próxima dos estoicos, com base experimental.', ve: 'Explica por que a mesma situação produz emoções diferentes em pessoas diferentes.', limite: 'Algumas reações emocionais parecem rápidas demais para depender de qualquer “avaliação” no sentido comum da palavra.' },
        { nome: 'Emoções básicas', html: 'O psicólogo Paul Ekman e colegas defenderam a existência de um pequeno conjunto de emoções básicas, com expressões faciais reconhecidas em muitas culturas.', ve: 'Aponta para o que pode haver de universal e evolutivamente antigo nas emoções.', limite: 'A universalidade do reconhecimento de expressões tem sido contestada por pesquisas com populações isoladas e por críticas metodológicas.' },
        { nome: 'Emoções construídas', html: 'A neurocientista Lisa Feldman Barrett propõe que o cérebro constrói emoções combinando sensações corporais com conceitos aprendidos na cultura.', ve: 'Dá um papel importante à linguagem e ao aprendizado: ter mais conceitos emocionais permitiria experiências mais finas.', limite: 'É uma teoria influente, mas controversa; os pesquisadores continuam discordando.' },
        { nome: 'Emoções como juízos de valor', html: 'A filósofa Martha Nussbaum argumenta que emoções são formas de reconhecer o que importa para nós: o luto revela o quanto alguém era valioso em nossa vida.', ve: 'Recusa a oposição entre razão e emoção: emoções podem ser mais ou menos acertadas.', limite: 'Pode intelectualizar demais experiências corporais e difusas.' }
      ] },

      { t: 'conceito', titulo: 'O que a reinterpretação pode — e o que não pode', html: `
        <p>A pesquisa sobre <strong>regulação emocional</strong> (com nomes como James Gross) mostra que reavaliar uma situação — considerar outras interpretações — costuma reduzir emoções negativas mais eficazmente do que simplesmente suprimir sua expressão. É uma das ideias mais úteis desta unidade.</p>
        <p>Mas há limites importantes:</p>
        <ul>
          <li><strong>Nem todo sofrimento é interpretação errada.</strong> Às vezes a raiva é a leitura correta de uma injustiça; o luto é a resposta adequada a uma perda.</li>
          <li><strong>Mudar de interpretação não muda o mundo.</strong> Se o problema está nas condições — um trabalho abusivo, falta de dinheiro, uma relação violenta —, insistir apenas em “mudar a forma de ver” pode virar uma maneira de culpar a pessoa pelo que não depende dela.</li>
          <li><strong>Interpretações não se trocam por decreto.</strong> Elas têm raízes em experiências anteriores.</li>
        </ul>
        <p>Aristóteles, na <em>Ética a Nicômaco</em>, sugere um caminho intermediário: o problema não é sentir raiva, mas senti-la pela pessoa errada, pelo motivo errado, na medida errada, no momento errado. A pergunta não é “devo sentir?”, mas “essa emoção é adequada a esta situação?”.</p>` },

      { t: 'escolha', id: 'adequada',
        prompt: 'Uma pessoa sente raiva ao descobrir que foi enganada por um colega para ficar com o crédito de um trabalho dela. Qual leitura é mais adequada?',
        opcoes: [
          { txt: 'A raiva é uma distorção; ela deveria reinterpretar a situação.', ok: false, fb: 'Nem toda emoção negativa é distorção. Aqui a raiva parece registrar algo verdadeiro: uma injustiça.' },
          { txt: 'A raiva pode ser uma resposta adequada; a questão é o que fazer com ela.', ok: true, fb: 'Isso. Reconhecer que a emoção é adequada não obriga a agir impulsivamente. Ela pode orientar uma ação proporcional: conversar, documentar, buscar apoio.' },
          { txt: 'A raiva justifica qualquer reação.', ok: false, fb: 'Uma emoção adequada não torna qualquer ação adequada. É a diferença entre sentimento e reação.' }
        ] },

      { t: 'escrita', id: 'aplicacao', titulo: 'Aplicação: o seu episódio',
        prompt: 'Volte ao episódio da primeira impressão e separe: (1) o acontecimento, (2) a interpretação que você fez, (3) o sentimento, (4) a reação. Depois proponha uma interpretação alternativa plausível — não necessariamente mais simpática, apenas diferente. Ela mudaria o que você sentiu?' },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'O que você percebe agora sobre aquele episódio que não percebia ao descrevê-lo? A emoção parece ter sido adequada à situação, desproporcional, ou as duas coisas em partes diferentes?' },

      { t: 'conexoes', itens: [
        { ref: 'u:u-fato', txt: 'A mesma estrutura de camadas, agora aplicada à vida interior.' },
        { ref: 'c:c-silencio', txt: 'Um caso da Oficina sobre a falta de resposta de um colega de trabalho.' },
        { ref: 'q:q-interpretacao', txt: 'O significado de uma experiência depende de como a interpretamos?' },
        { ref: 'b:b-otelo', txt: 'Uma peça inteira sobre como uma interpretação plantada produz uma emoção devastadora.' }
      ] },

      { t: 'leituras', ids: ['b-otelo', 'b-manual', 'b-dom-casmurro'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'Acontecimento, interpretação, sentimento e reação; adequação das emoções.',
      situacao: 'Um amigo não foi convidado para um casamento e se sente profundamente rejeitado.',
      prompt: 'Que interpretações diferentes são possíveis? Em que caso o sentimento seria adequado?'
    },
    proximos: ['u:u-acao-boa', 'c:c-silencio', 'p:estoicos']
  };

  /* ---------------------------------------------------------
     O que torna uma ação boa?
     --------------------------------------------------------- */
  U['u-acao-boa'] = {
    id: 'u-acao-boa',
    titulo: 'O que torna uma ação boa?',
    pergunta: 'Quando valores legítimos entram em conflito, o que torna uma escolha melhor do que outra?',
    duracao: '30 min',
    eixos: ['G', 'K'],
    resumo: 'Consequências, deveres, virtudes, cuidado, liberdade e relação; o que cada perspectiva ilumina e o que deixa de fora; legal, moral e justo.',
    blocos: [
      { t: 'importa', html: `
        <p>A maioria dos dilemas morais reais não opõe o bem ao mal, e sim um bem a outro bem: lealdade e honestidade, segurança e liberdade, justiça e misericórdia. Esta unidade não oferece uma moral pronta. Oferece lentes — cada uma mostra algo que as outras escondem — para que você possa formar seus próprios juízos com mais clareza.</p>` },

      { t: 'situacao', titulo: 'As horas extras de Léo', html: `
        <p>Você descobre que Léo, um amigo próximo e colega de trabalho, vem registrando no sistema da empresa horas extras que não trabalhou. Ele está passando por dificuldades sérias: a mãe está doente e as contas se acumularam. O valor, para uma empresa grande e lucrativa, é pequeno. A empresa, aliás, cortou benefícios no último ano.</p>
        <p>Léo percebe que você descobriu e pede: “Por favor, não fala nada. É temporário, vou parar assim que der.”</p>
        <p>Ninguém mais sabe. Se a fraude for descoberta por outros meios, você pode ser questionado sobre o que sabia.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Antes de qualquer explicação, registre: o que você faria no lugar de quem descobriu, e por quê?',
        dica: 'Responda com sinceridade, mesmo que sua resposta não pareça “correta”.' },

      { t: 'perspectivas', titulo: 'Seis lentes', itens: [
        { nome: 'Consequências', html: 'Para o consequencialismo — cuja versão clássica é o utilitarismo de Jeremy Bentham e John Stuart Mill —, a ação certa é a que produz os melhores resultados para todos os afetados. No caso: que sofrimento e que benefício cada escolha produz, para Léo, para você, para os colegas, para a empresa, para a confiança no ambiente de trabalho?', ve: 'Obriga a olhar para efeitos reais, e não só para intenções ou regras.', limite: 'Consequências são difíceis de prever. E, levada ao extremo, essa lente parece permitir qualquer coisa — inclusive sacrificar inocentes — se o saldo for positivo.' },
        { nome: 'Deveres', html: 'Para Immanuel Kant, uma ação é moralmente correta quando segue um princípio que poderíamos querer que todos seguissem, e quando trata as pessoas sempre também como fins, nunca apenas como meios. Mentir ou fraudar, por esse critério, é errado mesmo que as consequências pareçam boas.', ve: 'Captura a intuição de que há coisas que não se fazem com pessoas, independentemente do saldo, e a importância da coerência.', limite: 'Quando dois deveres colidem (lealdade ao amigo e honestidade), a teoria nem sempre diz qual prevalece. E a rigidez pode parecer cruel.' },
        { nome: 'Virtudes', html: 'Para Aristóteles, a pergunta central não é “que regra seguir?”, mas “que tipo de pessoa quero ser?”. Virtudes como coragem, justiça, generosidade e sabedoria prática (<em>phronesis</em>) são disposições formadas pela prática. Na tradição confuciana, a cultura do <em>ren</em> (humanidade, benevolência) e do <em>li</em> (rituais e formas de conduta) também põe o cultivo do caráter no centro, com grande atenção às relações.', ve: 'Valoriza o discernimento em situações concretas, que nenhuma regra antecipa.', limite: 'Diz pouco sobre o que fazer quando não sabemos o que uma pessoa virtuosa faria — que é justamente o caso dos dilemas.' },
        { nome: 'Cuidado', html: 'Filósofas como Carol Gilligan e Nel Noddings desenvolveram uma ética do cuidado, que parte das relações concretas de dependência e responsabilidade, e não de princípios abstratos e imparciais.', ve: 'Leva a sério a amizade e a vulnerabilidade de Léo, que as lentes imparciais tendem a apagar.', limite: 'Pode favorecer quem está perto em detrimento de quem está longe — os colegas prejudicados, por exemplo.' },
        { nome: 'Liberdade e responsabilidade', html: 'Na conferência <em>O existencialismo é um humanismo</em> (1946), Jean-Paul Sartre conta o caso de um aluno que precisava escolher entre ficar com a mãe, que dependia dele, e juntar-se à resistência contra a ocupação nazista. Nenhuma doutrina decidia por ele; ao escolher, ele definiria quem era.', ve: 'Recusa a fuga para regras prontas: somos responsáveis pelas escolhas, inclusive pela escolha de qual princípio seguir.', limite: 'Pode deixar a pessoa sozinha justamente quando mais precisa de orientação.' },
        { nome: 'Relação e comunidade', html: 'Na filosofia de tradição africana, o conceito de <em>ubuntu</em>, associado à expressão nguni <em>umuntu ngumuntu ngabantu</em> (uma pessoa é pessoa por meio de outras pessoas), entende a moralidade a partir dos laços que nos constituem e da manutenção de relações harmoniosas.', ve: 'Pergunta o que cada escolha faz com a comunidade e com os laços, e não apenas com indivíduos isolados.', limite: 'Como toda síntese de uma tradição ampla, a palavra “ubuntu” abrange interpretações diversas, e pode ser usada de modo vago.' }
      ] },

      { t: 'escrita', id: 'lentes', titulo: 'Exercício: atravessar as lentes',
        prompt: 'Para o caso de Léo, escreva em uma ou duas frases o que cada lente recomendaria ou destacaria. Quais delas apontam para a mesma direção? Onde está o conflito real?',
        depois: { rotulo: 'Ver uma leitura possível', html: `
          <ul>
            <li><strong>Consequências:</strong> pesaria a necessidade de Léo, o dano (pequeno, mas real), o risco para você e o efeito sobre a confiança no ambiente. Poderia sugerir caminhos que reduzam o dano sem destruir Léo.</li>
            <li><strong>Deveres:</strong> destacaria que a fraude não é universalizável e que acobertá-la te torna parte dela.</li>
            <li><strong>Virtudes:</strong> perguntaria o que um amigo justo e corajoso faria — talvez nem denunciar nem acobertar, mas confrontar Léo.</li>
            <li><strong>Cuidado:</strong> chamaria atenção para a vulnerabilidade de Léo e para formas de ajudá-lo de verdade.</li>
            <li><strong>Liberdade:</strong> lembraria que “não fazer nada” também é uma escolha pela qual você responde.</li>
            <li><strong>Relação:</strong> perguntaria o que cada caminho faz com a amizade e com o grupo de trabalho.</li>
          </ul>
          <p>Repare que várias lentes convergem para uma terceira opção que o dilema, do jeito que foi formulado (“contar ou não contar”), escondia: conversar com Léo, pôr um limite claro, ajudá-lo a encontrar outra saída. Muitas vezes, pensar bem um dilema é questionar suas alternativas. Outras vezes, depois de todo o esforço, o conflito permanece — e reconhecê-lo também é honestidade intelectual.</p>` } },

      { t: 'conceito', titulo: 'Legal, moral e justo', html: `
        <p>Três perguntas diferentes que costumamos confundir:</p>
        <ul>
          <li><strong>É legal?</strong> Está de acordo com as leis vigentes?</li>
          <li><strong>É moral?</strong> Está de acordo com os princípios que orientam a conduta entre as pessoas?</li>
          <li><strong>É justo?</strong> Dá a cada um o que lhe é devido? Distribui bem benefícios e encargos?</li>
        </ul>
        <p>Elas podem divergir. Leis segregacionistas eram legais e profundamente injustas. Mentir para um amigo sobre um presente é legal e talvez moralmente discutível. Uma regra pode ser aplicada igualmente a todos e ainda assim produzir resultados injustos.</p>
        <p>A tragédia grega <em>Antígona</em>, de Sófocles, dramatiza esse conflito: Antígona desobedece a um decreto do rei para enterrar o irmão, invocando leis não escritas mais antigas que a do Estado. O filósofo Hegel leu a peça como o choque entre duas exigências legítimas — a da família e a da cidade —, e não como uma luta entre certo e errado.</p>` },

      { t: 'escolha', id: 'intencao',
        prompt: 'Uma boa intenção torna uma ação boa?',
        opcoes: [
          { txt: 'Sim, o que importa é a intenção.', ok: false, fb: 'É uma posição defensável em parte — Kant dava enorme importância à boa vontade. Mas quase todos reconhecemos que boas intenções podem produzir danos sérios pelos quais alguém responde, sobretudo quando eram previsíveis.' },
          { txt: 'Não, só importam os resultados.', ok: false, fb: 'Também é uma simplificação. Julgamos diferente quem causa um dano por acidente e quem o causa de propósito, mesmo que o resultado seja igual.' },
          { txt: 'A intenção conta para julgar a pessoa; os resultados contam para julgar a ação — e as duas avaliações podem divergir.', ok: true, fb: 'Uma distinção útil: alguém pode agir com boa intenção e mesmo assim fazer algo errado (e merecer menos censura), ou ter más intenções e, por acaso, produzir algo bom. Separar os dois julgamentos evita muitas confusões.' }
        ] },

      { t: 'passos', id: 'juizo', titulo: 'Forme seu juízo',
        prompt: 'Volte ao caso de Léo e organize sua posição final.',
        campos: [
          { id: 'decisao', rotulo: 'O que eu faria', dica: 'Pode ser uma das alternativas óbvias ou uma terceira.' },
          { id: 'razoes', rotulo: 'As razões mais fortes para isso', dica: 'De que lentes elas vêm?' },
          { id: 'custo', rotulo: 'O que essa escolha sacrifica', dica: 'Toda escolha difícil deixa algo de valor para trás.' },
          { id: 'mudaria', rotulo: 'O que me faria mudar de decisão', dica: 'Se o valor fosse grande? Se fosse a terceira vez?' }
        ] },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Compare a decisão de agora com a primeira. Ela mudou? Se não mudou, suas razões ficaram diferentes ou mais claras?' },

      { t: 'escrita', id: 'aplicacao', titulo: 'Aplicação: julgar o passado',
        prompt: 'Podemos julgar pessoas do passado com os valores de hoje? Tente usar ao menos duas das lentes para responder, e note se elas apontam na mesma direção.' },

      { t: 'conexoes', itens: [
        { ref: 'u:u-discordar', txt: 'Discordâncias morais costumam vir de pesos diferentes dados a valores legítimos.' },
        { ref: 'q:q-tensao', txt: 'Como distinguir uma contradição real de uma tensão entre valores diferentes?' },
        { ref: 'q:q-vida-significativa', txt: 'O que faz uma vida ser significativa?' },
        { ref: 'p:kant', txt: 'Ficha do pensador: Kant.' },
        { ref: 'p:arendt', txt: 'Hannah Arendt pensou a relação entre deixar de pensar e fazer o mal.' }
      ] },

      { t: 'leituras', ids: ['b-antigona', 'b-sandel-justica', 'b-arendt-eichmann', 'b-analectos'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'Consequências, deveres, virtudes, cuidado, liberdade e relação; legal, moral e justo.',
      situacao: 'Uma médica pode mentir a um paciente idoso sobre a gravidade da doença porque a família pediu.',
      prompt: 'Que lentes entram em conflito? Que terceira via poderia existir?'
    },
    proximos: ['u:u-dinheiro', 'q:q-tensao', 'b:b-antigona']
  };

  /* ---------------------------------------------------------
     Por que um pedaço de papel vale alguma coisa?
     --------------------------------------------------------- */
  U['u-dinheiro'] = {
    id: 'u-dinheiro',
    titulo: 'Por que um pedaço de papel vale alguma coisa?',
    pergunta: 'De onde vem o valor do dinheiro — e o que acontece quando passamos a medir o valor das pessoas e do trabalho por ele?',
    duracao: '30 min',
    eixos: ['H', 'G', 'I'],
    resumo: 'O dinheiro como instituição; o paradoxo da água e do diamante; Marx, Weber, Durkheim, Simmel e Polanyi como lentes; preço, utilidade e dignidade.',
    blocos: [
      { t: 'importa', html: `
        <p>Esta unidade retoma a intuição usada como exemplo desde a primeira etapa: <em>há algo estranho no jeito como a sociedade valoriza trabalho, dinheiro e produtividade.</em> Investigá-la exige entender o que é o dinheiro, por que alguns trabalhos são mais bem pagos que outros e o que acontece quando diferentes sentidos de “valor” se misturam.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Uma nota de cem reais é, materialmente, um pedaço de papel e polímero de custo baixíssimo. Por que, então, ela vale cem reais? Escreva sua explicação.' },

      { t: 'conceito', titulo: 'O dinheiro é uma instituição', html: `
        <p>Economistas costumam definir o dinheiro por suas funções: <strong>meio de troca</strong> (usamos para comprar), <strong>unidade de conta</strong> (medimos preços com ele) e <strong>reserva de valor</strong> (guardamos para usar depois).</p>
        <p>A nota vale porque <strong>todos esperam que os outros a aceitem</strong> — e porque o Estado a declara moeda oficial, aceita-a para pagamento de impostos e um banco central administra sua quantidade. Seu valor depende de uma rede de confiança e de instituições.</p>
        <p>O filósofo John Searle descreveu fatos desse tipo com uma fórmula: <em>X conta como Y no contexto C</em>. Este papel (X) conta como dinheiro (Y) no Brasil de hoje (C). Fatos institucionais existem porque os reconhecemos coletivamente — e, ainda assim, são tão reais que governam a vida de bilhões de pessoas. O historiador Yuval Noah Harari popularizou uma ideia próxima ao falar de “ficções” ou realidades intersubjetivas compartilhadas.</p>
        <p class="nota">Lembre-se da primeira unidade: <em>construído</em> não quer dizer <em>irreal</em>. Hiperinflações — como as que o Brasil viveu antes do Plano Real, de 1994 — mostram o que acontece quando a confiança na moeda se desfaz.</p>` },

      { t: 'aprofundar', titulo: 'O mito do escambo', html: `
        <p>Manuais de economia costumavam contar que o dinheiro surgiu para resolver as dificuldades da troca direta (escambo): quem tinha sapatos e queria pão precisava encontrar alguém com pão que quisesse sapatos.</p>
        <p>Antropólogos — como Caroline Humphrey, em um artigo de 1985 — observaram que não se conhece nenhuma sociedade cuja economia funcionasse principalmente por escambo antes do dinheiro. O que se encontra são formas de crédito, dádiva, obrigações e registros de dívida. O antropólogo David Graeber desenvolveu essa crítica em <em>Dívida: os primeiros 5.000 anos</em> (2011), propondo que o crédito e a dívida vieram antes da moeda.</p>
        <p>As teses de Graeber são debatidas por economistas e historiadores; o ponto mais sólido é o negativo: a história do escambo como origem do dinheiro é, no mínimo, uma simplificação.</p>` },

      { t: 'situacao', titulo: 'O paradoxo da água e do diamante', html: `
        <p>Em <em>A riqueza das nações</em> (1776), Adam Smith notou um enigma: a água é essencial à vida e quase não tem preço; o diamante é quase inútil e muito caro.</p>
        <p>A economia do século XIX propôs uma solução: o preço não depende da utilidade total de um bem, mas da utilidade da <em>próxima unidade</em>, que depende da escassez. A água é abundante: um litro a mais vale pouco. Diamantes são escassos.</p>
        <p>Repare no que essa solução faz: ela explica o <strong>preço</strong>. Mas deixa intacta uma pergunta de outra natureza: a água é <em>menos valiosa</em> que o diamante? Em que sentido de valor?</p>` },

      { t: 'escrita', id: 'valores', titulo: 'Os sentidos de “valor”',
        prompt: 'Liste pelo menos quatro sentidos diferentes em que se diz que algo ou alguém “vale”. Depois diga em quais deles um trabalho de cuidado (enfermagem, educação infantil, cuidado de idosos) vale muito ou pouco.',
        depois: { rotulo: 'Ver uma distinção possível', html: `
          <ul>
            <li><strong>Preço:</strong> quanto se paga no mercado. Depende de oferta, procura, poder de negociação, regras.</li>
            <li><strong>Utilidade:</strong> quanto algo satisfaz necessidades ou desejos.</li>
            <li><strong>Importância social:</strong> quanto a sociedade depende daquilo para funcionar.</li>
            <li><strong>Mérito:</strong> quanto esforço, habilidade ou dedicação algo exigiu.</li>
            <li><strong>Dignidade:</strong> um valor que, segundo uma tradição que vem de Kant, não tem preço, porque não admite equivalente.</li>
          </ul>
          <p>Trabalhos de cuidado tendem a ter preço baixo e importância social alta. A intuição de “algo estranho” talvez venha exatamente daí: usamos a mesma palavra para coisas que não coincidem, e tratamos o preço como se medisse os outros sentidos.</p>` } },

      { t: 'perspectivas', titulo: 'Lentes clássicas sobre dinheiro e trabalho', itens: [
        { nome: 'Marx: o fetiche da mercadoria', html: 'Karl Marx argumentou, em <em>O capital</em> (1867), que numa economia de mercado as relações entre pessoas — quem trabalha para quem, sob que condições — aparecem como relações entre coisas: preços, mercadorias, dinheiro. Ele chamou isso de fetichismo da mercadoria.', ve: 'Mostra relações sociais e de poder escondidas por trás de números que parecem naturais.', limite: 'Sua teoria do valor-trabalho é rejeitada pela maioria dos economistas atuais, e as previsões históricas do marxismo foram muito contestadas. A crítica pode ser útil sem que se aceite o sistema inteiro.' },
        { nome: 'Weber: a ética do trabalho', html: 'Max Weber, em <em>A ética protestante e o “espírito” do capitalismo</em> (1904–1905), propôs que certas correntes religiosas ajudaram a transformar o trabalho metódico e a acumulação em deveres quase morais.', ve: 'Ajuda a entender por que “ser produtivo” pode soar como virtude — uma herança cultural, não uma verdade econômica.', limite: 'A tese é muito debatida por historiadores; comparações entre regiões protestantes e católicas nem sempre a confirmam.' },
        { nome: 'Durkheim: fatos sociais', html: 'Émile Durkheim chamou de fatos sociais as maneiras de agir e pensar exteriores aos indivíduos e que se impõem a eles — como a moeda, a língua ou as regras de um ofício.', ve: 'Explica por que não podemos simplesmente “decidir” que o dinheiro não importa.', limite: 'Pode dar pouco espaço à agência individual e ao conflito.' },
        { nome: 'Simmel: a vida quantificada', html: 'Georg Simmel, em <em>Filosofia do dinheiro</em> (1900), analisou como o dinheiro torna as relações mais impessoais e tudo comparável numa mesma escala — o que liberta (posso trocar com estranhos) e empobrece (o qualitativo vira quantitativo).', ve: 'Dá nome à sensação de que coisas incomparáveis passam a ter preço.', limite: 'É uma análise ensaística, mais interpretativa que empírica.' },
        { nome: 'Polanyi: a sociedade de mercado', html: 'Karl Polanyi, em <em>A grande transformação</em> (1944), argumentou que, na maior parte da história, a economia estava inserida em relações sociais, religiosas e políticas; a ideia de um mercado autorregulado que organiza a sociedade inteira seria recente.', ve: 'Mostra que tratar trabalho, terra e dinheiro como mercadorias foi uma transformação histórica, e não uma condição natural.', limite: 'Historiadores econômicos discutem até que ponto mercados antigos eram limitados.' }
      ] },

      { t: 'escolha', id: 'salario',
        prompt: 'Por que uma professora de educação infantil costuma ganhar menos do que um operador do mercado financeiro?',
        opcoes: [
          { txt: 'Porque o trabalho dela vale menos.', ok: false, fb: 'Isso confunde preço com os outros sentidos de valor. Que o salário seja menor é um fato; que o trabalho “valha menos” em sentido mais amplo é uma conclusão que não se segue.' },
          { txt: 'Porque o mercado é injusto.', ok: false, fb: 'Pode haver injustiça, mas essa resposta não explica nada: diz o que se acha, não por que acontece.' },
          { txt: 'Provavelmente por várias causas combinadas — escala e receita geradas, financiamento público, poder de negociação, histórico de desvalorização do trabalho de cuidado, oferta de profissionais — que precisariam ser investigadas.', ok: true, fb: 'Explicações de fenômenos sociais raramente têm uma causa única. Separar a explicação (por que acontece) da avaliação (se deveria ser assim) é o passo mais importante.' }
        ] },

      { t: 'passos', id: 'investigacao', titulo: 'Organize a sua investigação',
        prompt: 'Volte à intuição sobre trabalho e valor (ou a outra que lhe interesse neste tema) e organize o que pensa agora.',
        campos: [
          { id: 'sentido', rotulo: 'Que sentido de “valor” está no centro do meu incômodo?', dica: 'Preço, utilidade, importância, mérito, dignidade?' },
          { id: 'explicacao', rotulo: 'Que explicações eu daria para a situação?', dica: 'Pelo menos duas, de tipos diferentes.' },
          { id: 'avaliacao', rotulo: 'O que eu acho que deveria ser diferente — e por quê?', dica: 'Aqui entra o juízo normativo.' },
          { id: 'nao-sei', rotulo: 'O que eu ainda não sei e precisaria saber?', dica: 'Dados, história, argumentos contrários.' }
        ] },

      { t: 'escrita', id: 'aplicacao', titulo: 'Aplicação',
        prompt: 'Quando alguém perde o emprego, frequentemente sente que perdeu valor como pessoa. Use as distinções desta unidade para explicar esse sentimento a essa pessoa — sem desqualificar o que ela sente.' },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Releia sua explicação sobre a nota de cem reais. O que você acrescentaria agora?' },

      { t: 'conexoes', itens: [
        { ref: 'u:u-natural', txt: 'O dinheiro é um caso exemplar de algo construído e plenamente real.' },
        { ref: 'q:q-instituicao', txt: 'O que faz uma instituição parecer legítima?' },
        { ref: 'n:dinheiro', txt: 'No Mapa de ideias, dinheiro se liga a confiança, instituições, trabalho, valor e poder.' },
        { ref: 'p:marx', txt: 'Ficha do pensador: Marx.' },
        { ref: 'p:weber', txt: 'Ficha do pensador: Weber.' }
      ] },

      { t: 'leituras', ids: ['b-sandel-merito', 'b-russell-ocio', 'b-graeber', 'b-quarto-despejo', 'b-metamorfose', 'b-han'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'Fatos institucionais; os sentidos de valor; explicação e avaliação.',
      situacao: 'Uma pessoa diz: “Se fosse importante, pagariam mais.”',
      prompt: 'Que pressuposto sobre preço e valor essa frase carrega? Dê um contraexemplo.'
    },
    proximos: ['u:u-cosmos', 'q:q-instituicao', 'b:b-sandel-merito']
  };
})();
