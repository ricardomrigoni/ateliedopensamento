/* =========================================================
   Contrapontos — acrescentados às unidades existentes
   ---------------------------------------------------------
   Cada contraponto apresenta o outro lado de algo que a unidade
   sugeriu, pede sua posição antes e depois, e uma réplica.
   São inseridos antes do bloco "comparar" de cada unidade, sem
   alterar os arquivos originais.
   ========================================================= */
(function () {
  const A = window.ATELIE;
  const CP = [
    {
      unidade: 'u-natural', id: 'cerca', titulo: 'E se aquilo que parece natural for sabedoria acumulada?',
      contexto: 'Esta unidade mostrou que muito do que parece natural foi aprendido. É fácil concluir daí que práticas aprendidas podem ser mudadas sem grande cuidado.',
      afirmacao: 'Se uma prática foi aprendida historicamente, temos boas razões para mudá-la quando ela nos parecer inútil.',
      outro: { nome: 'A objeção conservadora', html: `
        <p>Pensadores como Edmund Burke, G. K. Chesterton e Friedrich Hayek responderiam: justamente por terem sido aprendidas e transmitidas por muitas gerações, certas práticas podem conter um conhecimento que nenhum de nós consegue reconstruir. Que um costume pareça inútil pode dizer mais sobre a nossa ignorância do que sobre o costume — é a lição da <a href="#/unidade/u-tradicao">cerca de Chesterton</a>.</p>
        <p>Há também uma objeção vinda das ciências: o psicólogo Steven Pinker, em <em>Tábula rasa</em> (2002), criticou a tendência de explicar quase tudo como construção social, subestimando a natureza humana herdada.</p>` },
      replica: '<p>Um crítico responderia que práticas também sobrevivem porque servem a quem tem poder, e que a duração não prova valor: a escravidão durou milênios. A pergunta, então, não é “aprendido ou natural?”, mas “o que esta prática faz, para quem, e o que perderíamos sem ela?”.</p>',
      refs: ['u:u-tradicao', 'p:chesterton', 'b:b-pinker-tabula']
    },
    {
      unidade: 'u-pressupostos', id: 'cronologia', titulo: 'Os pressupostos sobre o tempo: o novo é melhor? o antigo é mais sábio?',
      contexto: 'Muitos pressupostos se escondem em como avaliamos ideias pela idade delas.',
      afirmacao: 'Em geral, ideias mais recentes tendem a ser mais corretas que as antigas.',
      outro: { nome: 'O esnobismo cronológico', html: `
        <p>C. S. Lewis chamou de <strong>esnobismo cronológico</strong> a aceitação acrítica do clima intelectual da própria época e a suposição de que tudo o que saiu de moda foi refutado. Ele propunha perguntar: essa ideia antiga foi realmente refutada — por quem, com que argumentos — ou apenas deixou de ser repetida?</p>` },
      replica: '<p>O pressuposto inverso também existe: o <strong>apelo à tradição</strong>, que trata o antigo como mais sábio só por ser antigo. Em ciência, conhecimentos mais recentes costumam corrigir os anteriores; em ética e em sabedoria de vida, a questão é mais aberta. Os dois pressupostos — “novo é melhor” e “antigo é melhor” — merecem a mesma desconfiança.</p>',
      refs: ['p:cslewis', 'u:u-tradicao']
    },
    {
      unidade: 'u-causa', id: 'disparidades', titulo: 'Disparidades entre grupos: prova de discriminação?',
      contexto: 'As ferramentas desta unidade se aplicam a um dos debates sociais mais acesos: o que explica as diferenças de renda, emprego ou desempenho entre grupos.',
      afirmacao: 'Quando um grupo tem resultados piores que outro, isso indica que está sendo discriminado.',
      outro: { nome: 'O argumento de Thomas Sowell', html: `
        <p>Em <em>Discrimination and Disparities</em> (2018) e em outros livros, Sowell argumentou que disparidades entre grupos são a regra, não a exceção, na história humana — e que se explicam por muitos fatores: idade média, geografia, cultura, estrutura familiar, momento de chegada a um país. Tratar toda disparidade como prova de discriminação seria, nos termos desta unidade, confundir correlação com uma única causa.</p>` },
      replica: '<p>Os críticos concordam que disparidade não prova discriminação, mas lembram que a discriminação pode ser medida diretamente: em experimentos clássicos (como o de Bertrand e Mullainathan, em 2004), currículos idênticos receberam menos respostas quando tinham nomes associados a pessoas negras. O uso honesto das ferramentas vale para os dois lados: nem toda disparidade é discriminação, e nem toda discriminação desaparece porque outras causas também existem.</p>',
      refs: ['p:sowell', 'q:q-unica-causa']
    },
    {
      unidade: 'u-saber', id: 'especialistas', titulo: 'Até onde confiar nos especialistas?',
      contexto: 'A unidade defendeu que a maior parte do que sabemos depende de confiar bem em outras pessoas e instituições.',
      afirmacao: 'Em assuntos técnicos, devemos em geral seguir o consenso dos especialistas.',
      outro: { nome: 'Desconfianças de lados opostos', html: `
        <p>Thomas Sowell, em <em>Os intelectuais e a sociedade</em>, criticou especialistas e intelectuais que opinam fora de sua área com a mesma autoridade que têm dentro dela, e que raramente pagam o preço de seus erros. Do outro lado, Michel Foucault mostrou como saberes especializados também funcionam como formas de poder sobre as pessoas. E Burke já desconfiava dos “homens de teoria” que desprezam a experiência prática.</p>` },
      replica: '<p>A resposta mais comum é que a alternativa à confiança nos especialistas raramente é pensar por conta própria — costuma ser confiar em fontes piores. O desafio é distinguir: consenso dentro da competência do especialista, opinião fora dela, e decisões que envolvem valores, nas quais nenhum especialista tem autoridade especial.</p>',
      refs: ['p:sowell', 'p:foucault', 'q:q-certos']
    },
    {
      unidade: 'u-palavra', id: 'vocabulario', titulo: 'Mudar as palavras muda a realidade?',
      contexto: 'A unidade mostrou como palavras orientam a percepção. Isso alimenta um debate atual: devemos mudar deliberadamente o vocabulário para mudar atitudes?',
      afirmacao: 'Mudar deliberadamente certas palavras é um bom meio de reduzir preconceitos.',
      outro: { nome: 'A objeção à engenharia da linguagem', html: `
        <p>Orwell, em <em>1984</em> e no ensaio “A política e a língua inglesa” (1946), mostrou como o controle das palavras pode servir ao controle do pensamento. Críticos contemporâneos — como Jordan Peterson, que se tornou conhecido em 2016 ao se opor a regras que, para ele, obrigariam o uso de certos pronomes — argumentam que impor vocabulário é diferente de proibir ofensas. E o psicólogo Steven Pinker descreveu a “esteira dos eufemismos”: palavras novas acabam herdando a carga negativa das antigas se as atitudes não mudam.</p>` },
      replica: '<p>Os defensores respondem que a linguagem sempre muda e que mudanças de vocabulário já ajudaram a mudar atitudes (pense em termos que hoje ninguém usaria para pessoas com deficiência). A divergência real costuma estar menos em “palavras importam?” — todos concordam que sim — e mais em quem decide, por quais meios e com que margem de liberdade.</p>',
      refs: ['b:b-1984', 'p:peterson', 'b:b-orwell-ensaios']
    },
    {
      unidade: 'u-mesma', id: 'alma', titulo: 'E se a identidade tiver um fundamento além da memória?',
      contexto: 'Os critérios apresentados (corpo, memória, narrativa) são todos naturais e observáveis.',
      afirmacao: 'A identidade pessoal pode ser explicada sem recorrer a nada além do corpo e da mente.',
      outro: { nome: 'A visão da pessoa como alma', html: `
        <p>Na tradição cristã — de Agostinho e Boécio a Tomás de Aquino —, a pessoa é uma unidade de corpo e alma, e sua identidade não depende de memórias ou capacidades. Uma consequência importante: alguém com demência avançada continua sendo plenamente a mesma pessoa, com a mesma dignidade. Pensadores personalistas do século XX desenvolveram essa intuição sem depender sempre de argumentos teológicos.</p>` },
      replica: '<p>Filósofos naturalistas respondem que a existência da alma não pode ser demonstrada, e que a dignidade pode ser fundamentada de outros modos — como em Kant, que a liga à natureza racional da humanidade, ou no respeito pela história de vida da pessoa. A pergunta que fica: sua visão de identidade sustenta, sozinha, o modo como você quer tratar os mais frágeis?</p>',
      refs: ['u:u-camadas', 'p:aquino', 'p:agostinho']
    },
    {
      unidade: 'u-emocao', id: 'responsabilidade', titulo: 'Responsabilidade pessoal ou mudança das condições?',
      contexto: 'A unidade mostrou o poder e os limites da reinterpretação das emoções.',
      afirmacao: 'Diante de sofrimentos causados pelas circunstâncias, a prioridade deve ser mudar as circunstâncias, não a forma de reagir a elas.',
      outro: { nome: 'A ênfase na responsabilidade', html: `
        <p>Os estoicos, Viktor Frankl e Jordan Peterson insistem que, enquanto as circunstâncias não mudam, a única coisa sob controle é a própria resposta — e que esperar o mundo mudar para agir é uma forma de impotência. Peterson resume isso na ideia de começar pela ordem da própria vida.</p>` },
      replica: '<p>Críticos sociais respondem que pedir aos que sofrem injustiças que apenas “mudem a atitude” serve a quem se beneficia delas. A tensão parece falsa quando levada ao extremo: quase todos admitem que é preciso agir sobre si e sobre o mundo. A pergunta real é qual vem primeiro em cada caso — e quem tem o direito de dizer isso a quem sofre.</p>',
      refs: ['p:peterson', 'p:estoicos', 'u:u-sentido']
    },
    {
      unidade: 'u-acao-boa', id: 'lei-natural', titulo: 'Existe uma moral objetiva?',
      contexto: 'As seis lentes apresentadas tratam a ética como um campo de perspectivas.',
      afirmacao: 'Existem verdades morais objetivas, válidas para todos, independentemente da cultura.',
      outro: { nome: 'A lei natural e a pergunta de Dostoiévski', html: `
        <p>Para Tomás de Aquino, há uma <strong>lei natural</strong>: princípios morais que a razão pode descobrir a partir da natureza humana — fazer o bem e evitar o mal, preservar a vida, buscar a verdade, viver em sociedade. C. S. Lewis, em <em>A abolição do homem</em>, mostrou que tradições muito diferentes compartilham um núcleo moral comum, que ele chamou de Tao. E em <em>Os irmãos Karamázov</em>, Dostoiévski dramatiza a inquietação de que, sem Deus, a moral perderia seu fundamento — ideia que se costuma resumir na frase “se Deus não existe, tudo é permitido”, uma condensação posterior do que os personagens discutem a respeito de Ivan.</p>` },
      replica: '<p>Céticos e naturalistas respondem com um dilema antigo, do diálogo <em>Eutífron</em>, de Platão: algo é bom porque Deus o ordena, ou Deus o ordena porque é bom? Se for a primeira, a moral parece arbitrária; se for a segunda, ela não depende de Deus. Muitos filósofos ateus defendem que há verdades morais objetivas sem fundamento religioso; outros, que a moral é construída. O debate segue vivo.</p>',
      refs: ['p:aquino', 'p:cslewis', 'p:dostoievski', 'b:b-abolicao']
    },
    {
      unidade: 'u-dinheiro', id: 'precos', titulo: 'E se os preços forem mais sábios do que parecem?',
      contexto: 'A unidade sugeriu que preço e valor muitas vezes não coincidem, e que confundi-los produz injustiças.',
      afirmacao: 'Os salários de mercado medem mal o valor real do trabalho e deveriam ser mais corrigidos por decisões coletivas.',
      outro: { nome: 'O argumento de Hayek e Sowell', html: `
        <p>Para Hayek, os preços são um sistema de informação: sintetizam a escassez e as preferências de milhões de pessoas, algo que nenhuma autoridade conseguiria calcular. Sowell acrescenta que salários não pretendem medir o valor moral de ninguém — e que é bom que seja assim: uma sociedade em que alguém decidisse centralmente quanto vale cada pessoa seria muito mais perigosa. Tentativas de fixar preços “justos” costumam produzir escassez e mercados paralelos.</p>
        <p>Curiosamente, muitos conservadores também criticam o mercado quando ele invade a família, a religião ou a paisagem: Roger Scruton defendia o mercado e, ao mesmo tempo, alertava contra a transformação de tudo em mercadoria.</p>` },
      replica: '<p>Os críticos — de Karl Polanyi a Michael Sandel — respondem que os preços informam o que pode ser pago, não o que é necessário: refletem o poder de compra, que é desigual. A divergência pode ser formulada com precisão: quais bens devem ter seus preços definidos livremente, e quais devem ser protegidos, financiados ou regulados por decisões políticas?</p>',
      refs: ['p:hayek', 'p:sowell', 'p:scruton', 'b:b-hayek-servidao']
    },
    {
      unidade: 'u-explicar', id: 'hierarquias', titulo: 'As hierarquias são naturais?',
      contexto: 'A unidade separou explicar de justificar. Um exemplo famoso testa essa distinção.',
      afirmacao: 'O fato de hierarquias existirem em muitas espécies animais mostra que elas fazem parte da natureza humana.',
      outro: { nome: 'O argumento das lagostas', html: `
        <p>No primeiro capítulo de <em>12 regras para a vida</em>, Jordan Peterson argumenta que hierarquias de dominância são antiquíssimas — existem até em lagostas, cujo sistema nervoso responde à posição social com mudanças na serotonina — e que, portanto, não são uma invenção do capitalismo ou do patriarcado. Peterson acrescenta que reconhecer isso não significa justificar qualquer hierarquia: hierarquias podem ser baseadas em competência ou em tirania.</p>` },
      replica: '<p>Biólogos criticaram o argumento: o sistema nervoso das lagostas é muito diferente do humano, a serotonina tem funções distintas em cada espécie, e mesmo uma raiz evolutiva comum não diz qual forma de hierarquia é justa. Pelo critério desta unidade, a pergunta decisiva é: o argumento está explicando a existência de hierarquias (uma afirmação factual) ou justificando hierarquias específicas (uma afirmação moral)?</p>',
      refs: ['p:peterson', 'b:b-12regras', 'u:u-natural']
    }
  ];

  CP.forEach((c) => {
    const u = A.unidades[c.unidade];
    if (!u) return;
    const bloco = Object.assign({ t: 'contraponto' }, c);
    const i = u.blocos.findIndex((b) => b.t === 'comparar');
    u.blocos.splice(i >= 0 ? i : u.blocos.length - 1, 0, bloco);
  });
})();
