/* Perguntas fundamentais acrescentadas na versão 1.1 */
(function () {
  const A = window.ATELIE;
  A.perguntas.push(
    {
      id: 'q-mudar-ideia', tema: 'Pensamento e conhecimento', nivel: 1, eixos: ['A', 'C'],
      pergunta: 'Quando vale a pena mudar de ideia?',
      intro: '<p>Mudar de ideia com qualquer argumento é ser volúvel; nunca mudar é ser dogmático. Entre os dois há uma arte: saber o que contaria como razão suficiente — antes de a discussão começar — e distinguir um argumento forte de uma pressão social, uma moda ou um cansaço.</p>',
      caminhos: ['Escrever, para uma convicção sua, o que faria você mudá-la.', 'Distinguir mudar a conclusão de ajustar a formulação.', 'Lembrar de uma mudança de ideia que você considera um ganho — e de outra que considera uma perda.'],
      atividade: 'Use o Exame de convicções com uma ideia sua de que você tem muita certeza. No fim, escreva aqui o que aprendeu sobre a própria certeza.',
      conexoes: ['ferramenta:conviccoes', 'u:u-discordar', 'u:u-visao'],
      leituras: ['b-haidt', 'b-mill']
    },
    {
      id: 'q-conservar', tema: 'Sociedade e história', nivel: 2, eixos: ['H', 'G'],
      pergunta: 'O que vale a pena conservar?',
      intro: '<p>Toda sociedade conserva e muda ao mesmo tempo. A pergunta não é se devemos conservar, mas o quê, por quê e a que custo. Ela vale para países, cidades, famílias — e para a própria vida.</p>',
      caminhos: ['Aplicar a cerca de Chesterton a uma instituição.', 'Listar o que você herdou e gostaria de transmitir.', 'Perguntar quem paga o custo de conservar e quem paga o custo de mudar.'],
      atividade: 'Escolha três coisas que você gostaria que seus netos ainda conhecessem. Por que elas? O que as ameaça?',
      conexoes: ['u:u-tradicao', 'p:scruton', 'p:burke'],
      leituras: ['b-scruton-conservador', 'b-leopardo', 'b-pais-filhos']
    },
    {
      id: 'q-autoridade', tema: 'Ética e sentido', nivel: 2, eixos: ['G', 'H'],
      pergunta: 'Quando uma autoridade merece obediência?',
      intro: '<p>Pais, professores, médicos, leis, Igrejas, governos: dependemos de autoridades e às vezes precisamos desobedecê-las. Antígona desobedeceu ao rei; os réus de Nuremberg alegaram obediência. Onde está a linha?</p>',
      caminhos: ['Distinguir autoridade legítima de mero poder.', 'Usar os tipos de legitimidade de Weber.', 'Perguntar o que a consciência pode exigir contra a lei.'],
      atividade: 'Descreva uma vez em que você obedeceu sem concordar e outra em que desobedeceu. O que justificou cada escolha?',
      conexoes: ['q:q-instituicao', 'b:b-antigona', 'p:arendt'],
      leituras: ['b-antigona', 'b-arendt-eichmann', 'b-weil-enraizamento']
    },
    {
      id: 'q-sofrimento', tema: 'Ética e sentido', nivel: 3, eixos: ['G', 'E', 'D'],
      pergunta: 'O sofrimento pode ter sentido?',
      intro: '<p>Para algumas tradições, o sofrimento pode ser redentor; para outras, é um mal a eliminar; para outras ainda, é parte da condição humana a ser compreendida. A pergunta é antiga e toca a todos, cedo ou tarde.</p>',
      caminhos: ['Distinguir sofrimento evitável e inevitável.', 'Comparar Frankl, Dostoiévski, Camus e o budismo.', 'Perguntar o que se diz — e o que não se diz — a quem sofre.'],
      atividade: 'Pense em alguém que atravessou um grande sofrimento de forma admirável. O que essa pessoa fez com ele?',
      conexoes: ['u:u-sentido', 'p:frankl', 'p:dostoievski'],
      leituras: ['b-frankl', 'b-karamazov', 'b-peste', 'b-consolacao']
    }
  );
})();
