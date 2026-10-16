/* =========================================================
   Etapa 1 — Despertar · Módulo "O que parece óbvio"
   ---------------------------------------------------------
   Tipos de bloco aceitos pelo motor (ver app.js > renderBloco):
   importa, impressao, texto, situacao, conceito, perspectivas,
   escrita, escolha, classificar, revelar, aprofundar, passos,
   conexoes, pensador, leituras, comparar, sintese.
   Referências: 'u:' unidade, 'q:' pergunta, 'b:' livro,
   'p:' pensador, 'c:' caso, 'x:' exercício do laboratório,
   'n:' nó do mapa, 'ferramenta:intuicao'.
   ========================================================= */
(function () {
  const U = window.ATELIE.unidades;

  /* ---------------------------------------------------------
     U1 · O natural e o aprendido
     --------------------------------------------------------- */
  U['u-natural'] = {
    id: 'u-natural',
    titulo: 'O natural e o aprendido',
    pergunta: 'Até que ponto aquilo que consideramos natural é realmente natural — e até que ponto aprendemos a enxergar o mundo dessa maneira?',
    duracao: '25–30 min',
    eixos: ['A', 'H', 'J'],
    resumo: 'Como algo historicamente aprendido passa a parecer evidente, e por que a palavra “natural” esconde pelo menos cinco sentidos diferentes.',
    blocos: [
      { t: 'importa', html: `
        <p>“Isso é natural.” “Sempre foi assim.” “É da natureza humana.” Frases desse tipo costumam encerrar conversas: depois delas, parece que não há mais o que discutir.</p>
        <p>Esta unidade não vai mostrar que nada é natural — isso seria tão apressado quanto dizer que tudo é. O objetivo é outro: aprender a <strong>reabrir perguntas que foram fechadas cedo demais</strong>. É uma ferramenta que você vai usar no percurso inteiro, de discussões familiares a debates sobre trabalho, gênero, dinheiro ou religião.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Antes de ler qualquer explicação: pense em três coisas do seu dia a dia que parecem simplesmente naturais — o jeito de comer, de trabalhar, de se vestir, de organizar o dia, de se relacionar. Escolha uma delas e escreva: <strong>por que ela parece natural para você?</strong> Pessoas de outras épocas ou lugares a veriam do mesmo jeito?',
        dica: 'Não existe resposta certa aqui. O valor deste registro é que você vai poder compará-lo com o que pensar no fim da unidade.' },

      { t: 'situacao', titulo: 'Uma cena contada há 2.500 anos', html: `
        <p>O historiador grego <strong>Heródoto</strong> (século V a.C.), que viajou e colheu relatos sobre muitos povos, conta no livro III de suas <em>Histórias</em> uma cena atribuída ao rei persa Dario.</p>
        <p>Dario reuniu os gregos que estavam em sua corte e perguntou por quanto dinheiro eles aceitariam <em>comer</em> os corpos de seus pais mortos. Os gregos responderam que por nenhum valor fariam isso — entre eles, os mortos eram cremados.</p>
        <p>Depois, na presença dos gregos e com a ajuda de um intérprete, Dario chamou os calátios, um povo da Índia que, segundo o relato, tinha o costume de comer os pais falecidos, e perguntou por quanto eles aceitariam <em>queimar</em> os corpos dos pais. Os calátios reagiram com horror e pediram que ele nem falasse daquilo.</p>
        <p>Heródoto conclui retomando um verso do poeta Píndaro: o costume é “rei de todos”.</p>
        <p class="nota">Uma ressalva: os relatos de Heródoto sobre povos distantes nem sempre são confiáveis, e não devemos tomar essa cena como etnografia. Mas, como experimento de pensamento, ela funciona muito bem.</p>` },

      { t: 'escrita', id: 'herodoto',
        titulo: 'O que essa história mostra — e o que ela não mostra?',
        prompt: 'Escreva o que você acha que a cena de Dario demonstra. Depois tente escrever uma coisa que ela <em>não</em> demonstra, embora alguém pudesse concluir isso apressadamente.',
        depois: { rotulo: 'Ver um comentário', html: `
          <p><strong>O que a cena mostra bem:</strong> os dois grupos sentem o mesmo tipo de repulsa, com a mesma intensidade, por práticas opostas. A força do sentimento de “isso é óbvio” não acompanha a prática em si; acompanha <em>aquilo a que cada grupo se habituou</em>. A sensação de evidência, portanto, é um dado sobre nós, não necessariamente sobre o mundo.</p>
          <p><strong>O que ela não mostra:</strong> que todos os costumes sejam igualmente bons, que não exista nada universal nos seres humanos ou que seja impossível discutir costumes com razões. Repare que os dois povos compartilham algo profundo: ambos honram os mortos e ambos acham que há um jeito <em>certo</em> de fazê-lo. A diferença está na forma; o cuidado com os mortos parece ser comum. Essa distinção entre <em>forma</em> e <em>fundo</em> vai aparecer várias vezes no percurso.</p>
          <p>Se você chegou a algo parecido, ótimo. Se chegou a outra coisa, compare: o seu ponto acrescenta algo que este comentário deixou de fora?</p>` } },

      { t: 'escolha', id: 'conclusao-dario',
        prompt: 'Qual conclusão decorre mais diretamente da cena?',
        opcoes: [
          { txt: 'Todos os costumes são igualmente válidos.', ok: false, fb: 'Essa é uma conclusão comum, mas não decorre da cena. Do fato de dois grupos discordarem não se segue que nenhum tenha razão — da mesma forma que, se duas pessoas discordam sobre o formato da Terra, não se segue que as duas estejam certas. A cena mostra que o <em>sentimento</em> de evidência não basta; ela não mostra que todos os costumes se equivalem.' },
          { txt: 'A sensação de que uma prática é óbvia não basta para mostrar que ela é necessária ou correta.', ok: true, fb: 'Exatamente. Esta é a conclusão mais segura: o horror que os dois grupos sentem é simétrico, então ele não pode servir, sozinho, como prova de que uma das práticas é a natural. Isso não encerra a discussão — apenas obriga a buscar outras razões.' },
          { txt: 'Os gregos estavam certos, porque cremar é mais higiênico.', ok: false, fb: 'Pode ser que haja razões sanitárias para preferir certas práticas, mas elas não aparecem na cena — e os próprios gregos não recusaram por higiene, e sim por horror. Repare como é fácil acrescentar uma justificativa posterior a um sentimento que já existia.' },
          { txt: 'Não existe natureza humana.', ok: false, fb: 'A cena não mostra isso. Ao contrário: ambos os povos demonstram algo semelhante — respeito pelos mortos e repulsa à violação desse respeito. A variação está na forma, não necessariamente no fundo.' }
        ] },

      { t: 'texto', titulo: 'Coisas que parecem antigas e não são', html: `
        <p>Algumas práticas parecem tão básicas que é difícil imaginar o mundo sem elas. Abra cada exemplo e repare no que muda na sua percepção.</p>` },

      { t: 'revelar', rotulo: 'A hora do relógio', html: `
        <p>Até meados do século XIX, cada cidade costumava acertar os relógios pelo Sol local: o meio-dia era quando o Sol estava mais alto <em>ali</em>. Duas cidades a poucas dezenas de quilômetros tinham horas ligeiramente diferentes, e ninguém via problema nisso.</p>
        <p>Foram as ferrovias e o telégrafo que tornaram essa diversidade um incômodo: horários de trem precisavam de uma hora comum. Em 1884, uma conferência internacional em Washington adotou o meridiano de Greenwich como referência mundial, e os países foram, aos poucos, organizando fusos horários. O Brasil adotou os seus em 1913.</p>
        <p><strong>O que isso ilumina:</strong> algo que vivemos como um fato da natureza (“são três da tarde”) é, em parte, uma convenção criada para resolver um problema técnico e econômico. Isso não a torna falsa nem arbitrária — ela funciona muito bem —, mas mostra que poderia ter sido diferente.</p>` },

      { t: 'revelar', rotulo: 'A semana de sete dias', html: `
        <p>Não existe um ciclo astronômico que dure exatamente sete dias. A semana que usamos foi herdada por caminhos históricos — tradições do antigo Oriente Médio, o sábado judaico, a adoção pelo Império Romano e pelo cristianismo. Outras sociedades organizaram o tempo de outros modos: os romanos usaram por muito tempo um ciclo de mercado de oito dias, e o calendário da Revolução Francesa (1793–1805) tentou impor “semanas” de dez dias. A tentativa fracassou — o que também é instrutivo: convenções enraizadas resistem a mudanças, mesmo quando são convenções.</p>` },

      { t: 'revelar', rotulo: 'Rosa para meninas, azul para meninos', html: `
        <p>Este exemplo é interessante por outro motivo: ele mostra que até as afirmações sobre o que é “construído” precisam de evidências.</p>
        <p>A historiadora Jo B. Paoletti estudou roupas infantis nos Estados Unidos e concluiu que a associação rosa-meninas e azul-meninos se consolidou lentamente ao longo do século XX, tornando-se dominante por volta de meados do século. Ela encontrou, inclusive, recomendações do início do século que diziam o contrário.</p>
        <p>Outro pesquisador, Marco Del Giudice, contestou a versão popular de que houve uma “inversão” completa das cores, argumentando que as fontes antigas eram poucas e que não há evidência sólida de que o rosa tenha sido predominantemente masculino.</p>
        <p><strong>O que fica:</strong> parece bem estabelecido que essa codificação de cores é histórica e relativamente recente; a história mais dramática, de que “antes era o contrário”, é discutível. Repare como uma ideia verdadeira em linhas gerais pode circular em uma versão exagerada — e como vale a pena distinguir as duas.</p>` },

      { t: 'revelar', rotulo: 'Comer com garfo', html: `
        <p>O garfo individual à mesa difundiu-se na Europa de forma lenta e desigual entre o fim da Idade Média e o século XVIII, chegando pelo sul e só gradualmente se tornando sinal de boas maneiras no norte. Em muitas culturas, até hoje, come-se com as mãos ou com hashis, segundo regras de etiqueta tão rigorosas quanto as nossas.</p>
        <p>O sociólogo Norbert Elias estudou essas transformações em <em>O processo civilizador</em> (1939), mostrando como sentimentos que hoje parecem espontâneos — o nojo, a vergonha, o constrangimento diante de certos gestos — foram sendo aprendidos e intensificados ao longo de séculos. É uma ideia forte: <em>até nossas reações corporais imediatas têm história</em>.</p>` },

      { t: 'conceito', titulo: 'A ideia fundamental: naturalização', html: `
        <p>Chamamos de <strong>naturalização</strong> o processo pelo qual algo que foi produzido historicamente — por escolhas, acasos, conflitos, necessidades — passa a parecer dado, necessário e evidente.</p>
        <p>Os sociólogos Peter Berger e Thomas Luckmann descreveram esse processo em <em>A construção social da realidade</em> (1966) de um modo que dá para acompanhar em três passos:</p>
        <ol>
          <li><strong>Hábito.</strong> Pessoas resolvem um problema de certo jeito e repetem esse jeito, porque repetir poupa esforço.</li>
          <li><strong>Instituição.</strong> O jeito repetido vira padrão compartilhado: “é assim que se faz”. Ganha nomes, regras, papéis.</li>
          <li><strong>Transmissão.</strong> A geração seguinte recebe o padrão já pronto. Para ela, ele não aparece como uma escolha de alguém, mas como “a realidade”. Esquece-se que houve alternativas.</li>
        </ol>
        <p>Cuidado com uma confusão frequente: dizer que algo é <em>socialmente construído</em> <strong>não</strong> significa que seja falso, arbitrário, fácil de mudar ou ruim. O dinheiro é uma construção social e é perfeitamente real — tente pagar o aluguel ignorando-o. A língua portuguesa é uma construção histórica e é a condição para você ler esta frase.</p>` },

      { t: 'texto', titulo: 'Os cinco sentidos de “natural”', html: `
        <p>Grande parte da confusão em torno desse tema vem de uma palavra que esconde vários sentidos. Quando alguém diz que algo é “natural”, pode estar querendo dizer:</p>
        <ol>
          <li><strong>Biológico</strong> — tem base no nosso corpo, em disposições herdadas (ter fome, precisar dormir).</li>
          <li><strong>Universal</strong> — aparece em todas ou quase todas as sociedades conhecidas.</li>
          <li><strong>Inevitável</strong> — não poderia ser de outro modo; não depende de escolhas.</li>
          <li><strong>Frequente ou normal</strong> — é o que a maioria faz, aqui e agora.</li>
          <li><strong>Bom ou correto</strong> — é como as coisas <em>devem</em> ser.</li>
        </ol>
        <p>Esses sentidos não se implicam uns aos outros. Algo pode ser biológico e não ser inevitável (a visão é biológica, e mesmo assim usamos óculos). Algo pode ser universal e não ser bom (alguma forma de violência aparece em praticamente todas as sociedades). Algo pode ser frequente sem ser universal (casar perto dos trinta anos). E, o mais importante, nenhum dos quatro primeiros sentidos, sozinho, garante o quinto.</p>
        <p>O filósofo escocês David Hume, no século XVIII, observou que muitos raciocínios morais passam sem aviso de afirmações sobre o que <em>é</em> para afirmações sobre o que <em>deve ser</em>. Essa passagem precisa de uma justificativa à parte — e ela costuma ficar escondida justamente na palavra “natural”.</p>` },

      { t: 'classificar', id: 'sentidos',
        prompt: 'Em cada frase, em que sentido a palavra “natural” (ou a ideia de natural) parece estar sendo usada? Escolha a opção que lhe parece principal e depois confira os comentários.',
        categorias: ['Biológico', 'Universal', 'Inevitável', 'Frequente', 'Bom/correto'],
        itens: [
          { txt: '“É natural sentir fome depois de muitas horas sem comer.”', cat: ['Biológico'], exp: 'Aqui o sentido é biológico, e a afirmação é bem sustentada. Repare que, mesmo assim, <em>o que</em> comemos, <em>quando</em> e <em>com quem</em> já é amplamente cultural.' },
          { txt: '“É natural que a gente se case lá pelos trinta anos.”', cat: ['Frequente'], exp: 'Isso descreve um padrão comum em certos lugares e épocas. Em outros contextos, a idade média do casamento foi muito diferente. “Natural” aqui quer dizer “o que costuma acontecer à minha volta”.' },
          { txt: '“Remédio natural é sempre melhor que remédio químico.”', cat: ['Bom/correto'], exp: 'É o chamado <em>apelo à natureza</em>: supõe que o que vem “da natureza” é bom. Mas muitas substâncias naturais são tóxicas, e muitos medicamentos sintetizados salvam vidas. Além disso, tudo é “químico”, inclusive a água.' },
          { txt: '“O mercado se ajusta naturalmente; não adianta tentar interferir.”', cat: ['Inevitável'], exp: 'A frase apresenta um arranjo econômico como se fosse uma lei da natureza, impossível de mudar. Economistas discordam muito sobre quando e como intervir; o que a frase faz é encerrar a discussão antes que ela comece. Pode haver bons argumentos para não intervir em certos casos — mas eles precisam ser apresentados.' },
          { txt: '“Em todas as sociedades humanas conhecidas existe alguma forma de música.”', cat: ['Universal'], exp: 'Pesquisas comparativas recentes reforçam essa afirmação. Universalidade sugere que há algo profundo em jogo, talvez com base biológica — mas a forma da música varia enormemente.' },
          { txt: '“É natural que os filhos cuidem dos pais quando eles envelhecem.”', cat: ['Bom/correto', 'Frequente', 'Universal'], exp: 'Frase ambígua — e por isso interessante. Pode significar que isso é frequente, que acontece em toda parte ou que é o certo a fazer. Muitas vezes o falante quer dizer o último, apoiando-se nos primeiros. Separar os sentidos permite discutir cada um.' }
        ] },

      { t: 'perspectivas', titulo: 'Perspectivas diferentes', itens: [
        { nome: 'A construção social', html: 'Sociólogos e antropólogos mostram como instituições, papéis e categorias que parecem fixos foram produzidos historicamente e são mantidos por práticas cotidianas.', ve: 'Permite enxergar alternativas onde parecia não haver nenhuma, e perceber quem se beneficia de que algo pareça inevitável.', limite: 'Levada ao extremo, vira a tese de que “tudo é construção”, ignorando o corpo, os limites materiais e a biologia. E construído não quer dizer arbitrário nem fácil de mudar.' },
        { nome: 'A explicação biológica e evolutiva', html: 'Somos animais com uma história evolutiva. Algumas disposições — o apego aos cuidadores, a capacidade de aprender uma língua, certos medos — parecem ter raízes biológicas profundas.', ve: 'Mostra que a plasticidade humana tem limites e que nem tudo pode ser redesenhado por decreto.', limite: 'É fácil inventar histórias evolutivas plausíveis para quase qualquer comportamento — os biólogos Stephen Jay Gould e Richard Lewontin criticaram isso em 1979. E explicar a origem de uma tendência não diz se ela é boa.' },
        { nome: 'A interação', html: 'A maior parte dos traços humanos resulta da interação entre disposições e ambiente. A capacidade de aprender uma língua parece inata; o português que você fala foi aprendido. A fome é biológica; a culinária é cultural.', ve: 'Substitui a falsa escolha “natureza <em>ou</em> cultura” por perguntas mais precisas: o que, exatamente, é herdado, e como o ambiente lhe dá forma?', limite: 'Pode virar uma resposta preguiçosa (“é um pouco de cada”) se não especificarmos como a interação acontece em cada caso.' },
        { nome: 'Outro sentido de “natural”: o daoísmo', html: 'Na tradição chinesa ligada ao <em>Daodejing</em> (atribuído a Laozi), o termo <em>ziran</em> — literalmente algo como “assim por si mesmo” — designa a espontaneidade das coisas que seguem seu curso sem serem forçadas. O natural, aqui, não é o biológico em oposição ao cultural, mas o não forçado em oposição ao artificial e ao imposto.', ve: 'Mostra que o próprio conceito de “natureza” muda de cultura para cultura — o que é, em si, um bom exemplo do tema desta unidade.', limite: 'Traduções e interpretações do <em>Daodejing</em> variam muito; é preciso cuidado para não projetar nele ideias modernas.' }
      ] },

      { t: 'pensador', id: 'montaigne' },

      { t: 'passos', id: 'organizar', titulo: 'Organize o seu raciocínio',
        prompt: 'Volte ao exemplo que você escolheu na primeira impressão e examine-o com as ferramentas desta unidade.',
        campos: [
          { id: 'sentido', rotulo: 'Em que sentido de “natural” eu estava pensando?', dica: 'Biológico, universal, inevitável, frequente, bom? Pode ser mais de um.' },
          { id: 'evidencia', rotulo: 'Que evidência tenho para isso?', dica: 'Eu sei disso, ou apenas sempre vi assim à minha volta?' },
          { id: 'aprendido', rotulo: 'Que parte parece aprendida? Como eu poderia descobrir?', dica: 'Pense em outras épocas, outros países, outras classes sociais, outras gerações da sua família.' },
          { id: 'valor', rotulo: 'Se for aprendida, isso muda o valor que dou a ela? Por quê?', dica: 'Algo aprendido pode continuar valioso. Ou pode perder parte da autoridade que tinha.' }
        ] },

      { t: 'escrita', id: 'aplicacao', titulo: 'Aplicação: uma situação nova',
        prompt: 'Alguém lhe diz: <em>“É natural que a vida adulta gire em torno do trabalho remunerado. Sempre foi assim.”</em> Use as distinções desta unidade para examinar a frase. O que nela parece bem fundamentado? O que parece naturalizado?',
        depois: { rotulo: 'Ver alguns caminhos possíveis', html: `
          <ul>
            <li><strong>O que tem base sólida:</strong> seres humanos sempre precisaram trabalhar para viver — produzir alimento, abrigo, cuidado. A necessidade material é real.</li>
            <li><strong>O que parece naturalizado:</strong> a forma específica do <em>emprego assalariado</em>, com jornada, horário e patrão, organizando toda a vida adulta, é historicamente recente para a maior parte da humanidade; ganhou escala com a industrialização. Antes disso, a maioria das pessoas trabalhava na terra, no lar, em ofícios — e muitas trabalhavam sob formas de servidão ou escravidão.</li>
            <li><strong>Sentidos misturados:</strong> “sempre foi assim” (universal) é usado para sustentar “deve ser assim” (bom/correto).</li>
            <li><strong>Uma pergunta melhor:</strong> que parte do lugar que o trabalho ocupa na vida responde a necessidades, e que parte responde a arranjos históricos que poderiam ser diferentes?</li>
          </ul>
          <p>Essa é exatamente a intuição sobre trabalho e valor que pode ser investigada em <a href="#/unidade/u-dinheiro">Por que um pedaço de papel vale alguma coisa?</a> e na ferramenta <a href="#/intuicao">Da intuição à ideia</a>.</p>` } },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Releia sua primeira impressão. O que você escreveria agora sobre o mesmo exemplo? O que mudou — ou o que se confirmou?' },

      { t: 'conexoes', itens: [
        { ref: 'u:u-explicar', txt: 'Retoma a passagem do “é” ao “deve” no contexto da biologia e da evolução.' },
        { ref: 'u:u-dinheiro', txt: 'O dinheiro é talvez o melhor exemplo de algo construído e, ao mesmo tempo, plenamente real.' },
        { ref: 'q:q-natural', txt: 'A pergunta fundamental “O que faz uma coisa parecer natural?” prolonga esta unidade.' },
        { ref: 'n:natural', txt: 'No Mapa de ideias, “natural” se liga a cultura, natureza, poder e linguagem.' }
      ] },

      { t: 'leituras', ids: ['b-montaigne', 'b-despossuidos', 'b-krenak', 'b-beauvoir'],
        intro: 'Nenhuma destas leituras é obrigatória. Escolha a que despertar mais curiosidade — ou nenhuma, por enquanto.' },

      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'Os cinco sentidos de “natural” e a passagem do “é” ao “deve”.',
      situacao: 'Alguém diz: “Ter ciúme é natural; então é compreensível controlar o celular do parceiro.”',
      prompt: 'Em que sentido “natural” está sendo usado? Que passo do raciocínio ficou sem justificativa?'
    },
    proximos: ['u:u-fato', 'q:q-natural', 'p:montaigne']
  };

  /* ---------------------------------------------------------
     U2 · Fato, interpretação, valor
     --------------------------------------------------------- */
  U['u-fato'] = {
    id: 'u-fato',
    titulo: 'Fato, interpretação e valor',
    pergunta: 'Quando duas pessoas discordam sobre “o que aconteceu”, sobre o que exatamente elas estão discordando?',
    duracao: '20–25 min',
    eixos: ['A', 'C', 'K'],
    resumo: 'Separar camadas que se misturam em quase toda discordância: o que aconteceu, o que significa, como julgar, o que se sente e o que se prevê.',
    blocos: [
      { t: 'importa', html: `
        <p>Muitas brigas parecem ser sobre fatos e, na verdade, são sobre interpretações ou valores. Outras parecem ser sobre valores e dependem de um fato que ninguém verificou. Quando as camadas se misturam, a conversa gira em falso: cada um defende uma coisa diferente acreditando estar respondendo ao outro.</p>
        <p>Aprender a separar essas camadas não resolve todas as discordâncias. Mas costuma mostrar <em>onde</em> elas estão — e isso já muda muito.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Lembre-se de uma discordância recente — em casa, no trabalho, com amigos. Descreva-a em poucas linhas, do jeito que você contaria a alguém.',
        dica: 'Escreva naturalmente, sem tentar ser neutro. Mais adiante você vai reler este texto com outros olhos.' },

      { t: 'situacao', titulo: 'O jantar de domingo', html: `
        <p>Era aniversário de setenta anos de Dona Lúcia. O jantar estava marcado para as 20h. <strong>Caio</strong>, o filho mais novo, chegou às 20h40, sentou-se, olhou o celular algumas vezes durante a refeição e foi embora antes da sobremesa.</p>
        <p>No dia seguinte, a irmã, <strong>Marta</strong>, mandou mensagem: <em>“Você estava distraído o tempo todo. Chegou atrasado no aniversário da mãe, ficou no celular e saiu correndo. Fiquei magoada. Se continuar assim, vai se afastar da família. Você não se importa com a gente.”</em></p>
        <p>Caio respondeu: <em>“Eu estava de plantão no hospital, troquei de turno para conseguir ir e precisava acompanhar um paciente pelo celular. Fiz o que pude.”</em></p>` },

      { t: 'escrita', id: 'separar',
        titulo: 'Antes da explicação',
        prompt: 'Na mensagem de Marta, o que é descrição do que aconteceu e o que é outra coisa? Tente separar, com suas palavras.',
        depois: { rotulo: 'Comparar com uma análise', html: `
          <p>A mensagem de Marta mistura pelo menos seis camadas — e isso é completamente normal; é assim que falamos. Veja o exercício a seguir, que as separa uma a uma.</p>` } },

      { t: 'conceito', titulo: 'As camadas de uma afirmação', html: `
        <dl class="camadas">
          <dt>Fato observável</dt><dd>O que uma câmera, ou qualquer pessoa presente, poderia registrar: chegou às 20h40; olhou o celular; saiu antes da sobremesa.</dd>
          <dt>Interpretação</dt><dd>O que o fato <em>significa</em>: “estava distraído”, “não queria estar ali”.</dd>
          <dt>Valor</dt><dd>Como o fato deve ser <em>julgado</em>: “atrasar no aniversário da mãe é desrespeitoso”.</dd>
          <dt>Emoção</dt><dd>O que se sente: “fiquei magoada”. Atenção: o relato de uma emoção é um fato sobre quem sente — verdadeiro e importante —, mas não prova nada sobre a intenção do outro.</dd>
          <dt>Hipótese ou previsão</dt><dd>O que se supõe que vai acontecer: “vai se afastar da família”.</dd>
          <dt>Conclusão</dt><dd>O que se infere de tudo isso: “você não se importa com a gente”.</dd>
        </dl>
        <p>O teórico das organizações Chris Argyris descreveu algo parecido como uma <strong>escada de inferência</strong>: partimos de dados selecionados, acrescentamos significados, fazemos suposições, tiramos conclusões e agimos com base nelas — subindo os degraus tão depressa que vivemos a conclusão como se fosse o próprio dado.</p>` },

      { t: 'classificar', id: 'camadas',
        prompt: 'Classifique cada frase. Algumas são deliberadamente ambíguas.',
        categorias: ['Fato', 'Interpretação', 'Valor', 'Emoção', 'Hipótese', 'Conclusão'],
        itens: [
          { txt: 'Caio chegou às 20h40; o jantar estava marcado para as 20h.', cat: ['Fato'], exp: 'Verificável por qualquer pessoa presente. Repare, porém, que já escolhemos o que contar: Marta não menciona que ele veio de um plantão.' },
          { txt: 'Caio estava distraído o tempo todo.', cat: ['Interpretação'], exp: 'Parece descrição, mas é interpretação de comportamentos. E “o tempo todo” é uma generalização: ele olhou o celular algumas vezes.' },
          { txt: 'Atrasar no aniversário da mãe é desrespeitoso.', cat: ['Valor'], exp: 'Um julgamento sobre como as coisas deveriam ser. Pode ser defendido — mas é de outra natureza que um fato.' },
          { txt: 'Fiquei magoada.', cat: ['Emoção'], exp: 'Uma emoção real e legítima, e um fato sobre Marta. Não é evidência da intenção de Caio.' },
          { txt: 'Se continuar assim, vai se afastar da família.', cat: ['Hipótese'], exp: 'Uma previsão. Pode até se confirmar, mas por enquanto é uma suposição sobre o futuro.' },
          { txt: 'Você não se importa com a gente.', cat: ['Conclusão'], exp: 'O topo da escada: uma afirmação sobre os sentimentos de Caio, inferida de poucos dados. É também a frase que mais tende a gerar defesa.' },
          { txt: 'Ele ficou no celular.', cat: ['Fato', 'Interpretação'], exp: 'Depende da formulação: “olhou o celular três vezes” é fato; “ficou no celular” já sugere uma atitude. Pequenas escolhas de palavra transportam julgamentos.' }
        ] },

      { t: 'aprofundar', titulo: 'Existe fato “puro”?', html: `
        <p>Filósofos da ciência como Norwood Hanson e Thomas Kuhn argumentaram que a observação é “carregada de teoria”: aquilo que conseguimos ver depende dos conceitos de que dispomos. Um médico vê numa radiografia o que um leigo não vê.</p>
        <p>Isso não significa que todas as descrições sejam igualmente boas. “Chegou às 20h40” é muito mais fácil de verificar e de aceitar por todos do que “estava distraído”. Talvez a distinção entre fato e interpretação seja mais uma questão de grau do que uma fronteira nítida — mas é uma diferença de grau que importa muito.</p>
        <p>O filósofo Bernard Williams chamou a atenção para os <strong>conceitos espessos</strong>: palavras como “cruel”, “generoso”, “grosseiro” ou “corajoso” descrevem e avaliam ao mesmo tempo. Dizer que alguém foi grosseiro é relatar algo e julgá-lo numa só palavra. Por isso, separar fato e valor nem sempre é simples — mas perceber quando uma palavra faz os dois trabalhos já ajuda.</p>` },

      { t: 'escolha', id: 'magoa',
        prompt: 'Caio responde: “Você não pode dizer que ficou magoada, isso não é um fato.” O que há de errado com essa resposta?',
        opcoes: [
          { txt: 'Nada; emoções são subjetivas e não contam.', ok: false, fb: 'Emoções são subjetivas no sentido de pertencerem a alguém, mas isso não as torna irreais. Que Marta ficou magoada é, sim, um fato — sobre Marta.' },
          { txt: 'A mágoa é um fato sobre Marta; o que ela não prova é a intenção de Caio.', ok: true, fb: 'Isso. A distinção não serve para desqualificar sentimentos, e sim para localizá-los: a mágoa merece ser reconhecida, e a conclusão sobre a intenção de Caio precisa de outras razões.' },
          { txt: 'Caio deveria ter dito que a mágoa é apenas uma interpretação.', ok: false, fb: 'A mágoa pode ter sido <em>provocada</em> por uma interpretação (“ele não liga”), mas ela mesma é uma experiência real. Confundir as duas coisas costuma escalar a briga.' }
        ] },

      { t: 'perspectivas', titulo: 'Perspectivas diferentes', itens: [
        { nome: 'Separar fatos e valores', html: 'Desde Hume, e na tradição de cientistas sociais como Max Weber, é comum defender que descrições e avaliações são de natureza diferente e devem ser distinguidas com cuidado.', ve: 'Clareza: permite verificar o verificável e discutir valores como valores, sem disfarçá-los de fatos.', limite: 'Os conceitos espessos e a seleção do que se descreve mostram que a separação nem sempre é limpa.' },
        { nome: 'Cada um tem uma narrativa', html: 'Cada pessoa organiza os fatos em uma história coerente a partir do seu ponto de vista. A de Marta é sobre descaso; a de Caio, sobre esforço.', ve: 'Mostra que coerência não é completude: uma história pode ser internamente perfeita e deixar de fora o essencial.', limite: 'Não significa que todas as versões sejam igualmente plausíveis. Algumas se ajustam melhor aos fatos disponíveis.' },
        { nome: 'O contexto material', html: 'O conflito também envolve condições concretas: jornadas de trabalho na saúde, plantões, distâncias, expectativas familiares sobre presença.', ve: 'Evita reduzir o conflito a defeitos de caráter de um ou de outro.', limite: 'Contexto explica, mas não dissolve a pergunta sobre o que cada um poderia ter feito diferente.' }
      ] },

      { t: 'escrita', id: 'reescrever', titulo: 'Exercício: reescrever',
        prompt: 'Reescreva a mensagem de Marta de modo que ela comunique sua mágoa e seu pedido sem afirmar conclusões sobre a intenção de Caio.',
        dica: 'Uma forma possível: o que aconteceu → o que senti → o que imaginei → o que gostaria.',
        depois: { rotulo: 'Ver uma possibilidade', html: `
          <p><em>“Ontem você chegou às 20h40, olhou o celular algumas vezes e saiu antes da sobremesa. Fiquei magoada, porque era um dia importante para a mãe e imaginei que você não quisesse estar ali. Não sei se foi isso. Queria entender o que aconteceu, e queria muito que você estivesse mais presente nessas datas.”</em></p>
          <p>Repare que a mensagem não fica “fria” nem perde a emoção. Ela apenas deixa espaço para que a outra pessoa responda sem precisar se defender de uma acusação.</p>` } },

      { t: 'escrita', id: 'aplicacao', titulo: 'Aplicação: uma manchete',
        prompt: 'Separe as camadas desta frase fictícia: <em>“O prefeito, mais uma vez, ignorou os moradores e fechou a praça para favorecer empresários.”</em> O que seria preciso verificar? O que é interpretação? Há julgamento embutido?',
        depois: { rotulo: 'Ver uma análise', html: `
          <ul>
            <li><strong>Fato verificável:</strong> a praça foi fechada (quando, por quanto tempo, por decisão de quem).</li>
            <li><strong>Afirmações que exigem evidência:</strong> “mais uma vez” (houve casos anteriores?), “ignorou os moradores” (houve consulta? houve pedidos?).</li>
            <li><strong>Interpretação de intenção:</strong> “para favorecer empresários” — pode ser verdade, mas precisa de evidência (quem se beneficiou, que relação existe, que motivo foi declarado).</li>
            <li><strong>Valor implícito:</strong> a frase pressupõe que fechar a praça foi ruim. Talvez tenha sido; talvez houvesse razões de segurança. A manchete decide isso por você.</li>
          </ul>
          <p>Fazer essa análise não significa concluir que o prefeito está certo. Significa saber exatamente o que precisaria ser verdade para que a frase estivesse certa.</p>` } },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Releia a discordância que você descreveu no início. Quais camadas aparecem nela? Onde, exatamente, estava o desacordo: nos fatos, nas interpretações, nos valores?' },

      { t: 'conexoes', itens: [
        { ref: 'c:c-louca', txt: 'A Oficina de interpretação tem um caso doméstico inteiro para praticar essa separação em etapas.' },
        { ref: 'u:u-saber', txt: 'O que torna um fato conhecido, e não apenas acreditado?' },
        { ref: 'u:u-emocao', txt: 'A relação entre sentimento, interpretação e reação é aprofundada na Etapa 3.' },
        { ref: 'b:b-akutagawa', txt: 'Um conto que leva ao extremo a ideia de versões incompatíveis do mesmo acontecimento.' }
      ] },

      { t: 'leituras', ids: ['b-akutagawa', 'b-dom-casmurro'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'As camadas: fato, interpretação, valor, emoção, hipótese e conclusão.',
      situacao: 'Um colega diz: “O chefe me ignorou na reunião porque quer me tirar da equipe.”',
      prompt: 'Que parte é fato, que parte é interpretação e que parte é hipótese? Que pergunta você faria para separá-las?'
    },
    proximos: ['u:u-pressupostos', 'c:c-louca', 'b:b-akutagawa']
  };

  /* ---------------------------------------------------------
     U3 · Pressupostos escondidos
     --------------------------------------------------------- */
  U['u-pressupostos'] = {
    id: 'u-pressupostos',
    titulo: 'Pressupostos escondidos',
    pergunta: 'O que uma frase precisa assumir para fazer sentido — e quem decidiu que isso estava assumido?',
    duracao: '20–30 min',
    eixos: ['A', 'F'],
    resumo: 'Reconhecer o que é tomado como certo nas perguntas, nos argumentos e na maneira de enquadrar um problema.',
    blocos: [
      { t: 'importa', html: `
        <p>Toda frase se apoia em coisas que não diz. Isso não é um defeito: sem pressupostos seria impossível falar. O problema é quando o que está pressuposto é justamente o que deveria ser discutido.</p>
        <p>Perceber pressupostos é talvez a habilidade mais transferível deste percurso. Ela serve para ler notícias, responder perguntas de entrevista, conversar com a família e examinar as próprias convicções.</p>` },

      { t: 'impressao', id: 'impressao',
        prompt: 'Imagine que alguém lhe pergunta, em público: <em>“Você já parou de mentir para os seus amigos?”</em> Qualquer resposta curta — “sim” ou “não” — parece ruim. Por quê? Tente explicar o que essa pergunta faz.' },

      { t: 'conceito', titulo: 'Três níveis de pressuposto', html: `
        <p><strong>1. Na própria frase.</strong> “Você já parou de mentir?” pressupõe que você mentia. “O irmão de Ana chegou” pressupõe que Ana tem um irmão. Linguistas chamam isso de <em>pressuposição</em>: aquilo que continua sendo assumido mesmo se negarmos a frase (“Não, ainda não parei” continua admitindo que mentia).</p>
        <p><strong>2. No argumento.</strong> “Ele é político, então está mentindo” só funciona se aceitarmos uma premissa não dita: “todo político mente”. Premissas implícitas desse tipo são comuns e às vezes razoáveis; o problema é quando, ditas em voz alta, ninguém as defenderia.</p>
        <p><strong>3. No enquadramento.</strong> “Como aumentar a produtividade da equipe?” pressupõe que aumentar a produtividade é o objetivo certo, que o problema está na equipe e que “produtividade” está bem definida. O enquadramento decide o que conta como solução antes de a conversa começar. É o nível mais difícil de perceber — e o mais poderoso.</p>` },

      { t: 'pensador', id: 'socrates' },

      { t: 'texto', titulo: 'Cinco técnicas para encontrar pressupostos', html: `
        <ol>
          <li><strong>O que precisaria ser verdade?</strong> Pergunte: para esta frase fazer sentido, o que eu teria de aceitar?</li>
          <li><strong>Negue e veja o que sobra.</strong> O que continua assumido mesmo quando a frase é negada?</li>
          <li><strong>Troque uma palavra.</strong> Substitua um termo-chave por um parecido (“funcionário” por “colaborador”, “gasto” por “investimento”) e observe o que muda.</li>
          <li><strong>Quem formulou e para quê?</strong> Toda pergunta foi feita por alguém, com algum propósito. Que alternativas essa formulação deixa de fora?</li>
          <li><strong>Desconfie do “obviamente”.</strong> Palavras como “naturalmente”, “claro que”, “todo mundo sabe”, “é óbvio” costumam marcar o lugar exato onde um pressuposto está sendo protegido de exame.</li>
        </ol>
        <p class="nota">Encontrar um pressuposto <strong>não</strong> refuta a afirmação. Todos raciocinam a partir de pressupostos. A questão é se eles são defensáveis quando trazidos à luz.</p>` },

      { t: 'escrita', id: 'frase1', titulo: 'Exercício 1',
        prompt: '<em>“Se você estudasse mais, teria um emprego melhor.”</em> Liste o que essa frase pressupõe.',
        depois: { rotulo: 'Ver pressupostos possíveis', html: `
          <ul>
            <li>Que estudar mais leva a empregos melhores (relação causal, e não apenas correlação).</li>
            <li>Que existem empregos melhores disponíveis para quem estuda.</li>
            <li>Que a pessoa não estudou o suficiente — e que isso explica sua situação atual.</li>
            <li>Que “melhor” tem um sentido claro (salário? estabilidade? sentido? horário?).</li>
            <li>Que a pessoa tinha condições de estudar mais (tempo, dinheiro, acesso).</li>
          </ul>
          <p>Alguns desses pressupostos têm apoio em dados gerais; outros podem ser falsos no caso concreto. A frase os apresenta todos juntos, como se fossem um só.</p>` } },

      { t: 'escrita', id: 'frase2', titulo: 'Exercício 2',
        prompt: '<em>“Precisamos voltar aos valores de antigamente.”</em> O que essa frase toma como certo?',
        depois: { rotulo: 'Ver pressupostos possíveis', html: `
          <ul>
            <li>Que existiu um “antigamente” com valores comuns, relativamente homogêneos.</li>
            <li>Que esses valores eram melhores que os atuais — em geral ou em algum aspecto específico.</li>
            <li>Que é possível “voltar”, isto é, recuperar valores sem recuperar as condições em que existiam.</li>
            <li>Que “nós” é um grupo definido, que compartilhava esses valores. Antigamente para quem? Para os homens e as mulheres, ricos e pobres, da mesma maneira?</li>
          </ul>
          <p>Repare: a frase pode estar apontando para algo real (perda de certos laços comunitários, por exemplo). Examinar os pressupostos ajuda a dizer isso com mais precisão.</p>` } },

      { t: 'escrita', id: 'frase3', titulo: 'Exercício 3',
        prompt: 'Em uma entrevista de emprego: <em>“Qual é o seu maior defeito?”</em> Que pressupostos sustentam essa pergunta?',
        depois: { rotulo: 'Ver pressupostos possíveis', html: `
          <ul>
            <li>Que temos “defeitos” como traços estáveis, e não comportamentos que variam conforme a situação.</li>
            <li>Que podemos identificá-los com clareza por introspecção.</li>
            <li>Que existe um “maior” — que os defeitos podem ser comparados numa mesma escala.</li>
            <li>Que a resposta revelará algo verdadeiro, e não uma performance ensaiada (o que a própria situação de entrevista torna improvável).</li>
          </ul>` } },

      { t: 'escolha', id: 'efeito',
        prompt: 'Você encontrou um pressuposto escondido em um argumento. O que isso significa?',
        opcoes: [
          { txt: 'Que o argumento é falso.', ok: false, fb: 'Não necessariamente. Todo argumento tem pressupostos; muitos são perfeitamente aceitáveis.' },
          { txt: 'Que quem argumentou está de má-fé.', ok: false, fb: 'Quase sempre não. A maioria dos pressupostos é inconsciente — inclusive os nossos. Atribuir má-fé costuma encerrar a conversa que acabou de ficar interessante.' },
          { txt: 'Que há algo a examinar: o pressuposto pode ser defensável ou não.', ok: true, fb: 'Isso. Trazer o pressuposto à luz transforma-o em uma afirmação que pode ser discutida. Às vezes ele resiste bem; às vezes desmorona; às vezes precisa de uma versão mais modesta.' }
        ] },

      { t: 'perspectivas', titulo: 'Perspectivas diferentes', itens: [
        { nome: 'O exame socrático', html: 'Nos diálogos de Platão, Sócrates pede definições (“o que é a coragem?”, “o que é a piedade?”) e mostra que as respostas dos interlocutores dependem de pressupostos que eles próprios não sustentam.', ve: 'Mostra quanto do que achamos saber depende de conceitos que nunca examinamos.', limite: 'O método pode terminar em perplexidade sem resposta. E alguns conceitos talvez não admitam definição exata — sem que isso os torne inúteis.' },
        { nome: 'Os preconceitos como condição de compreender', html: 'O filósofo alemão Hans-Georg Gadamer argumentou, em <em>Verdade e método</em> (1960), que só compreendemos algo a partir de expectativas prévias. Ele usa a palavra “preconceito” no sentido literal de pré-juízo, sem o tom negativo de hoje.', ve: 'Retira a fantasia de um pensamento sem pressupostos. O objetivo passa a ser tornar os pressupostos visíveis e revisáveis, não eliminá-los.', limite: 'Pode servir de desculpa para não examinar nada (“todo mundo tem seus pressupostos”).' },
        { nome: 'O enquadramento', html: 'Pesquisas em psicologia — como as de Amos Tversky e Daniel Kahneman — mostram que a mesma escolha, descrita em termos de ganhos ou de perdas, leva pessoas a decisões diferentes.', ve: 'Mostra que a formulação de um problema não é neutra e pode guiar decisões.', limite: 'Conhecer o efeito não nos torna imunes a ele.' }
      ] },

      { t: 'escrita', id: 'aplicacao', titulo: 'Aplicação: uma frase sobre valor',
        prompt: 'Examine os pressupostos desta frase, que muita gente diz ou pensa sem dizer: <em>“Uma pessoa vale pelo que produz.”</em>',
        depois: { rotulo: 'Ver alguns pressupostos', html: `
          <ul>
            <li>Que “valer” tem um único sentido — e que ele pode ser medido.</li>
            <li>Que “produzir” se refere a algo reconhecível (produção para o mercado? cuidado com crianças conta? amizade conta?).</li>
            <li>Que o valor de alguém pode mudar conforme a fase da vida — uma criança, um idoso ou uma pessoa doente valeriam menos.</li>
            <li>Que valor econômico e valor humano são a mesma coisa, ou que o primeiro mede o segundo.</li>
          </ul>
          <p>Quase ninguém defenderia a terceira consequência em voz alta. Isso sugere que a frase, levada a sério, contradiz outros valores que a mesma pessoa tem. É uma tensão que vale investigar — veja <a href="#/unidade/u-dinheiro">a unidade sobre dinheiro e valor</a>.</p>` } },

      { t: 'comparar', ref: 'impressao', id: 'comparacao',
        prompt: 'Volte à pergunta “Você já parou de mentir para os seus amigos?”. Explique agora, com o vocabulário desta unidade, o que ela faz — e como você poderia responder sem cair na armadilha.' },

      { t: 'conexoes', itens: [
        { ref: 'u:u-argumento', txt: 'As premissas implícitas são o elo entre pressupostos e argumentos.' },
        { ref: 'u:u-palavra', txt: 'Escolher uma palavra em vez de outra já instala pressupostos.' },
        { ref: 'c:c-reestruturacao', txt: 'Um caso inteiro sobre como palavras enquadram um acontecimento.' },
        { ref: 'x:x-g', txt: 'No Laboratório, o exercício “Reconstruindo uma ideia” treina exatamente esta habilidade.' }
      ] },

      { t: 'leituras', ids: ['b-apologia', 'b-alienista'] },
      { t: 'sintese' }
    ],
    revisao: {
      conceito: 'Pressupostos na frase, no argumento e no enquadramento.',
      situacao: 'Uma reportagem pergunta: “Como os jovens podem se tornar mais resilientes ao estresse do trabalho?”',
      prompt: 'Que enquadramento essa pergunta assume? Que outras perguntas ela deixa de fora?'
    },
    proximos: ['u:u-argumento', 'x:x-g', 'p:socrates']
  };
})();
