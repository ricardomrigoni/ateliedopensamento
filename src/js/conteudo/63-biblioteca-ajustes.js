/* =========================================================
   Ajustes nas obras da versão 1.0: afinidades, leituras
   divergentes e contrapontos. Mantém o texto original.
   ========================================================= */
(function () {
  const A = window.ATELIE;
  const ajustes = {
    'b-montaigne': { afinidades: ['existencia', 'conhecimento'] },
    'b-krenak': { afinidades: ['oriente', 'critica'] },
    'b-kopenawa': { afinidades: ['oriente'] },
    'b-apologia': { afinidades: ['antiguidade'] },
    'b-manual': { afinidades: ['antiguidade', 'existencia'], contraponto: 'b-tchekhov' },
    'b-seneca': { afinidades: ['antiguidade', 'existencia'] },
    'b-tao': { afinidades: ['oriente'] },
    'b-analectos': { afinidades: ['oriente', 'tradicao'] },
    'b-mill': { afinidades: ['liberdade'] },
    'b-beauvoir': { afinidades: ['critica', 'existencia'], contraponto: 'b-pinker-tabula' },
    'b-arendt-eichmann': { afinidades: ['sociedade'] },
    'b-barthes': { afinidades: ['critica', 'conhecimento'] },
    'b-russell-ocio': { afinidades: ['critica'] },
    'b-han': { afinidades: ['critica'], contraponto: 'b-12regras' },
    'b-nagel': { afinidades: ['conhecimento'] },
    'b-warburton': { afinidades: ['conhecimento'] },
    'b-chaui': { afinidades: ['conhecimento', 'critica'], contraponto: 'b-olavo-minimo' },
    'b-sandel-justica': { afinidades: ['sociedade'] },
    'b-sandel-merito': { afinidades: ['critica', 'tradicao'] },
    'b-graeber': { afinidades: ['critica'] },
    'b-sapiens': { afinidades: ['sociedade'] },
    'b-kahneman': { afinidades: ['psicologia'] },
    'b-sagan-mundo': { afinidades: ['conhecimento'] },
    'b-rovelli': { afinidades: ['conhecimento'] },
    'b-mlodinow': { afinidades: ['conhecimento'] },
    'b-rosling': { afinidades: ['conhecimento'] },
    'b-sacks': { afinidades: ['psicologia'] },
    'b-lakoff': { afinidades: ['conhecimento'] },
    'b-sisifo': { afinidades: ['existencia'] },
    'b-quarto-despejo': { afinidades: ['critica'] },
    'b-1984': {
      contraponto: 'b-admiravel',
      leituras: [
        { quem: 'Leitores conservadores e liberais', html: 'Uma denúncia do totalitarismo comunista e de todo Estado que pretende controlar a verdade e a linguagem.' },
        { quem: 'Leitores de esquerda', html: 'Lembram que Orwell era socialista democrático e que o livro denuncia qualquer poder que manipula a informação — inclusive governos e empresas ocidentais.' },
        { quem: 'O próprio Orwell', html: 'Afirmou que o livro não atacava o socialismo, mas as perversões a que uma economia centralizada está sujeita, e que algo parecido poderia acontecer em qualquer lugar.' }
      ]
    },
    'b-antigona': {
      leituras: [
        { quem: 'Hegel', html: 'Um choque trágico entre dois direitos legítimos: o da família e o da cidade.' },
        { quem: 'Leitura religiosa e conservadora', html: 'Antígona defende leis não escritas, mais antigas e sagradas que o decreto de um governante.' },
        { quem: 'Leitura libertária e feminista', html: 'Uma mulher que desobedece ao poder masculino e estatal em nome da consciência.' }
      ]
    },
    'b-metamorfose': {
      leituras: [
        { quem: 'Leitura social', html: 'Uma crítica a uma sociedade em que a pessoa só vale enquanto é útil.' },
        { quem: 'Leitura religiosa', html: 'A culpa e o abandono de um ser humano diante de um mundo sem graça.' },
        { quem: 'Leitura biográfica', html: 'O reflexo da relação difícil de Kafka com o pai e com o trabalho burocrático.' }
      ]
    },
    'b-crime': {
      leituras: [
        { quem: 'Leitura religiosa', html: 'A redenção de Raskólnikov pelo sofrimento e pelo amor de Sônia.' },
        { quem: 'Leitura psicológica', html: 'O estudo da culpa e da racionalização.' },
        { quem: 'Leitura política', html: 'Uma crítica às ideias radicais que autorizam o crime em nome de um bem maior.' }
      ]
    }
  };
  A.livros.forEach((b) => { if (ajustes[b.id]) Object.assign(b, ajustes[b.id]); });


  /* ligações adicionais de obras a unidades (aparecem em “Mais obras ligadas a esta unidade”) */
  const ligar = {'b-guerra-paz': 'u-cosmos', 'b-anna-karenina': 'u-acao-boa', 'b-senhor-servo': 'u-sentido', 'b-noites-brancas': 'u-emocao', 'b-jogador': 'u-emocao', 'b-casa-mortos': 'u-sentido', 'b-capote': 'u-dinheiro', 'b-almas-mortas': 'u-dinheiro', 'b-mestre-margarida': 'u-discordar', 'b-vida-destino': 'u-acao-boa', 'b-jivago': 'u-tempo', 'b-insustentavel': 'u-sentido', 'b-brincadeira': 'u-palavra', 'b-livro-riso': 'u-saber', 'b-imortalidade': 'u-mesma', 'b-processo': 'u-pressupostos', 'b-queda': 'u-emocao', 'b-sidarta': 'u-mesma', 'b-montanha-magica': 'u-tempo', 'b-morte-veneza': 'u-camadas', 'b-dorian': 'u-mesma', 'b-medico-monstro': 'u-camadas', 'b-bovary': 'u-emocao', 'b-pai-goriot': 'u-dinheiro', 'b-miseraveis': 'u-acao-boa', 'b-nos-zamiatin': 'u-visoes', 'b-revolucao-bichos': 'u-palavra', 'b-particulas': 'u-sentido', 'b-laranja': 'u-explicar', 'b-nao-me-abandone': 'u-mesma', 'b-estrada': 'u-acao-boa', 'b-quixote': 'u-saber', 'b-odisseia': 'u-mesma', 'b-edipo': 'u-saber', 'b-hamlet': 'u-sentido', 'b-rei-lear': 'u-tradicao', 'b-senhor-aneis': 'u-tradicao', 'b-poder-gloria': 'u-acao-boa', 'b-brideshead': 'u-tradicao', 'b-diario-paroco': 'u-sentido', 'b-flannery': 'u-acao-boa', 'b-nelson-rodrigues': 'u-emocao', 'b-policarpo': 'u-visoes', 'b-licoes-abismo': 'u-sentido', 'b-auto-compadecida': 'u-acao-boa', 'b-o-quinze': 'u-tradicao', 'b-cem-anos': 'u-tempo', 'b-pedro-paramo': 'u-tempo', 'b-terra-devastada': 'u-cosmos', 'b-desassossego': 'u-camadas', 'b-rilke': 'u-perguntas', 'b-dalrymple': 'u-emocao', 'b-meditacoes': 'u-emocao', 'b-merquior': 'u-visoes', 'b-berlin': 'u-visoes', 'b-labirinto-solidao': 'u-palavra'};
  A.livros.forEach((b) => { if (ligar[b.id]) b.unidades = [...new Set((b.unidades || []).concat([ligar[b.id]]))]; });

  /* normaliza alguns temas para manter a lista de assuntos enxuta */
  const trocas = { 'política': 'poder', 'velhice': 'tempo' };
  A.livros.forEach((b) => { b.temas = [...new Set(b.temas.map((t) => trocas[t] || t))]; });
})();
