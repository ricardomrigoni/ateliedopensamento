/* =========================================================
   Biblioteca de ideias — obras recomendadas
   ---------------------------------------------------------
   Campos: titulo, autor, ano (da obra original), tipo, temas,
   porque (por que vale a leitura), encontrar (o que se encontra,
   sem revelar desfechos), conexao (com o estudo), acesso
   (acessibilidade), perguntas (para levar à leitura),
   alternativa, legal (formas de acesso), traducao (observação).
   Editoras não são indicadas de propósito: edições mudam e não
   queremos afirmar características editoriais sem verificação.
   ========================================================= */
(function () {
  const A = window.ATELIE;
  const DP = 'O texto original está em domínio público. Traduções recentes podem ter direitos autorais próprios; procure edições em bibliotecas públicas ou digitais.';
  const DPBR = 'Em domínio público no Brasil. O texto pode ser lido gratuitamente em acervos como o portal Domínio Público (Ministério da Educação) e a Biblioteca Brasiliana Guita e José Mindlin (USP).';

  A.livros = [
    /* ------------------- Literatura brasileira ------------------- */
    {
      id: 'b-dom-casmurro', titulo: 'Dom Casmurro', autor: 'Machado de Assis', ano: '1899', tipo: 'Romance', origem: 'Brasil',
      temas: ['memória', 'verdade', 'emoções', 'amor', 'linguagem'],
      porque: 'É um dos grandes romances sobre a impossibilidade de separar o que aconteceu do que o narrador concluiu sobre o que aconteceu.',
      encontrar: 'Bento Santiago, já velho, conta sua vida, sua juventude e seu casamento com Capitu. O leitor só tem acesso aos fatos pela memória — e pelo ciúme — de quem narra.',
      conexao: 'Ilustra o narrador não confiável, a memória reconstrutiva e a escada de inferência. Durante décadas, leitores trataram as suspeitas de Bento como fatos; a partir de 1960, com a crítica americana Helen Caldwell, ganhou força a leitura que desconfia do próprio narrador. As duas leituras continuam possíveis.',
      acesso: 'Linguagem do século XIX, com ironia sutil e capítulos curtos. Extensão média. Ajuda saber que o narrador escreve muito depois dos acontecimentos.',
      perguntas: ['O que o narrador apresenta como fato e o que é conclusão dele?', 'Minha simpatia ou antipatia por ele muda como julgo Capitu?', 'Que informações eu gostaria de ter e não tenho?'],
      alternativa: 'Para um primeiro contato com Machado, “O alienista” é mais curto e muito divertido.',
      legal: DPBR, unidades: ['u-fato', 'u-saber', 'u-emocao']
    },
    {
      id: 'b-alienista', titulo: 'O alienista', autor: 'Machado de Assis', ano: '1882', tipo: 'Novela', origem: 'Brasil',
      temas: ['poder', 'ciência', 'verdade', 'sociedade', 'pensamento'],
      porque: 'Uma sátira sobre o que acontece quando alguém com autoridade decide o que é razão e o que é loucura.',
      encontrar: 'Um médico obstinado funda um hospício numa pequena vila e começa a internar moradores segundo critérios cada vez mais amplos. A cidade inteira reage.',
      conexao: 'Mostra como pressupostos sobre o “normal” podem ser instalados por quem tem poder e prestígio científico — e como a busca de uma teoria total pode virar absurdo.',
      acesso: 'Curta e acessível, com humor. Pode ser lida numa tarde.',
      perguntas: ['Que critério o médico usa para decidir quem é louco?', 'Quem questiona esse critério, e por quê?', 'Que pressupostos sobre a razão a história expõe?'],
      alternativa: '',
      legal: DPBR, unidades: ['u-pressupostos']
    },
    {
      id: 'b-bras-cubas', titulo: 'Memórias póstumas de Brás Cubas', autor: 'Machado de Assis', ano: '1881', tipo: 'Romance', origem: 'Brasil',
      temas: ['identidade', 'morte', 'sociedade', 'sentido da vida', 'memória'],
      porque: 'Um narrador morto revê a própria vida com uma franqueza irônica que expõe vaidades, privilégios e autoenganos.',
      encontrar: 'A história de um homem de elite no Brasil do século XIX, contada por ele mesmo depois de morrer, em capítulos curtos, digressivos e cheios de ironia.',
      conexao: 'Bom para pensar o autoconhecimento e o autoengano, e como a posição social molda o que alguém considera natural.',
      acesso: 'Linguagem do século XIX e estrutura fragmentada, que exige atenção à ironia. Extensão média.',
      perguntas: ['O que o narrador revela sobre si sem querer revelar?', 'Que privilégios ele trata como naturais?'],
      alternativa: '“O alienista”, do mesmo autor, é uma entrada mais curta.',
      legal: DPBR, unidades: []
    },
    {
      id: 'b-vidas-secas', titulo: 'Vidas secas', autor: 'Graciliano Ramos', ano: '1938', tipo: 'Romance', origem: 'Brasil',
      temas: ['linguagem', 'sociedade', 'poder', 'trabalho', 'natureza'],
      porque: 'Mostra a pobreza e a seca no sertão nordestino também como falta de palavras: personagens que mal conseguem nomear o que vivem e que, por isso, ficam ainda mais vulneráveis a quem domina a linguagem.',
      encontrar: 'Uma família de retirantes, em capítulos que podem quase ser lidos separadamente. Prosa seca, precisa, sem sentimentalismo.',
      conexao: 'Une as unidades sobre linguagem e sobre sociedade: a relação entre palavras, poder e humilhação aparece de forma concreta e dolorosa.',
      acesso: 'Curto, linguagem direta, mas emocionalmente denso. Pouco contexto prévio é necessário.',
      perguntas: ['Em que momentos a falta de palavras prejudica Fabiano?', 'Como os personagens entendem sua própria situação?', 'O que o livro mostra sem explicar?'],
      alternativa: '',
      legal: 'A obra de Graciliano Ramos (1892–1953) entrou em domínio público no Brasil em 2024 e ganhou várias novas edições; também é fácil de encontrar em bibliotecas.',
      unidades: ['u-palavra']
    },
    {
      id: 'b-hora-estrela', titulo: 'A hora da estrela', autor: 'Clarice Lispector', ano: '1977', tipo: 'Novela', origem: 'Brasil',
      temas: ['identidade', 'linguagem', 'sociedade', 'consciência'],
      porque: 'Um narrador tenta contar a vida de Macabéa, jovem nordestina pobre no Rio de Janeiro, e se pergunta o tempo todo se tem o direito e a capacidade de fazê-lo.',
      encontrar: 'Uma narrativa curta, estranha e comovente, em que a dificuldade de narrar o outro é parte da própria história.',
      conexao: 'Liga-se às perguntas sobre compreender outra pessoa e sobre como a linguagem cria e limita o que se pode dizer de alguém.',
      acesso: 'Curta, mas não convencional: a narração interrompe a história para refletir sobre si mesma. Vale ler sem pressa.',
      perguntas: ['Quem é, de fato, o protagonista: Macabéa ou o narrador?', 'O narrador consegue compreender Macabéa?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais; disponível em bibliotecas públicas.',
      unidades: []
    },
    {
      id: 'b-quarto-despejo', titulo: 'Quarto de despejo: diário de uma favelada', autor: 'Carolina Maria de Jesus', ano: '1960', tipo: 'Memória e testemunho', origem: 'Brasil',
      temas: ['sociedade', 'trabalho', 'poder', 'linguagem', 'identidade'],
      porque: 'Um diário escrito por uma catadora de papel numa favela de São Paulo nos anos 1950: a fome, o trabalho, os filhos e a escrita como forma de dignidade, contados por quem viveu.',
      encontrar: 'Entradas de diário, em linguagem direta, com observações agudas sobre política, vizinhança, preconceito e sobrevivência.',
      conexao: 'Contraponto concreto à discussão sobre trabalho e valor: quem trabalha muito e mesmo assim passa fome. Também mostra a diferença entre falar sobre uma realidade e falar a partir dela.',
      acesso: 'Linguagem acessível, entradas curtas que podem ser lidas aos poucos. É um documento real, não ficção.',
      perguntas: ['O que Carolina entende sobre sua situação que observadores externos não entendem?', 'Que papel a escrita tem na vida dela?'],
      alternativa: '',
      legal: 'Disponível em bibliotecas públicas.',
      unidades: ['u-dinheiro']
    },
    {
      id: 'b-torto-arado', titulo: 'Torto arado', autor: 'Itamar Vieira Junior', ano: '2019', tipo: 'Romance', origem: 'Brasil',
      temas: ['história', 'trabalho', 'sociedade', 'linguagem', 'natureza', 'poder'],
      porque: 'Um romance premiado e muito lido sobre duas irmãs numa fazenda do sertão baiano, onde famílias descendentes de escravizados trabalham a terra sem direito a ela.',
      encontrar: 'Uma história de laços familiares, trabalho, religiosidade de matriz africana e luta pela terra, contada por vozes diferentes.',
      conexao: 'Mostra como o passado escravista continua presente em relações de trabalho e de propriedade — um exemplo vivo da pergunta sobre como o passado permanece.',
      acesso: 'Linguagem fluida, extensão média. Não exige conhecimento prévio; ajuda saber um pouco da história da escravidão e da terra no Brasil.',
      perguntas: ['Que arranjos parecem “naturais” para os personagens e não para o leitor?', 'Como cada narradora vê o mesmo mundo?'],
      alternativa: '',
      legal: 'Obra contemporânea; disponível em bibliotecas.',
      unidades: []
    },
    {
      id: 'b-terceira-margem', titulo: 'Primeiras estórias (com “A terceira margem do rio”)', autor: 'João Guimarães Rosa', ano: '1962', tipo: 'Conto', origem: 'Brasil',
      temas: ['linguagem', 'identidade', 'sentido da vida', 'família'],
      porque: 'Contos em que a linguagem é reinventada para dizer o que a fala comum não diz. “A terceira margem do rio” é uma história de poucas páginas que não sai da cabeça.',
      encontrar: 'Um pai que, um dia, entra numa canoa e passa a viver no meio do rio. O filho tenta entender.',
      conexao: 'Mostra como a forma de narrar e as palavras criadas participam do significado; e como uma história pode abrir uma pergunta sem respondê-la.',
      acesso: 'Os contos são curtos, mas a linguagem é inventiva e exige leitura atenta — às vezes em voz alta.',
      perguntas: ['O que seria a “terceira margem”?', 'Por que o narrador sente culpa?'],
      alternativa: '“Grande sertão: veredas”, do mesmo autor, é uma obra-prima, mas longa e exigente; os contos são uma porta de entrada.',
      legal: 'Obra protegida por direitos autorais; disponível em bibliotecas.',
      unidades: ['u-palavra']
    },

    /* ------------------- Literatura mundial ------------------- */
    {
      id: 'b-akutagawa', titulo: 'Rashômon e outros contos (com “Dentro do bosque”)', autor: 'Ryūnosuke Akutagawa', ano: 'contos de 1915 a 1927', tipo: 'Conto', origem: 'Japão',
      temas: ['verdade', 'memória', 'pensamento', 'linguagem'],
      porque: '“Dentro do bosque” reúne depoimentos incompatíveis sobre um mesmo crime — e não oferece uma versão final.',
      encontrar: 'Sete relatos sobre a morte de um homem numa floresta, cada um coerente e cada um contradizendo os outros. O conto inspirou, junto com “Rashômon”, o filme de Akira Kurosawa (1950).',
      conexao: 'A ilustração literária mais direta da unidade sobre fato e interpretação: cada narrador tem razões para contar a história como conta.',
      acesso: 'Muito curto. Linguagem acessível. Ajuda saber que se passa no Japão antigo.',
      perguntas: ['O que todos os relatos têm em comum?', 'O que cada narrador ganha com sua versão?', 'É possível saber o que aconteceu?'],
      alternativa: '',
      traducao: 'Há uma edição brasileira traduzida diretamente do japonês por Madalena Hashimoto Cordaro e Junko Ota; em Portugal, circulou uma tradução feita a partir do inglês — lembrete de que a tradução também é interpretação.',
      legal: 'As obras de Akutagawa (morto em 1927) estão em domínio público; traduções podem ter direitos próprios.',
      unidades: ['u-fato']
    },
    {
      id: 'b-ivan-ilitch', titulo: 'A morte de Ivan Ilitch', autor: 'Liev Tolstói', ano: '1886', tipo: 'Novela', origem: 'Rússia',
      temas: ['morte', 'sentido da vida', 'identidade', 'sociedade'],
      porque: 'Diante da doença, um juiz respeitável percebe que viveu segundo o que se esperava dele — e se pergunta se viveu de verdade.',
      encontrar: 'A vida convencional de um funcionário bem-sucedido e a experiência de morrer, contadas com uma lucidez rara.',
      conexao: 'Liga a reflexão sobre sentido, finitude e autoengano; também mostra como convenções sociais moldam uma vida inteira sem que se perceba.',
      acesso: 'Curta (menos de cem páginas na maioria das edições) e de linguagem clara.',
      perguntas: ['O que Ivan Ilitch considerava uma vida “correta”?', 'Quem, ao redor dele, é sincero?', 'O que muda na forma como ele vê o próprio passado?'],
      alternativa: '',
      traducao: 'Existem traduções diretas do russo, que costumam preservar melhor o tom do original.',
      legal: DP, unidades: ['u-mesma', 'u-tempo', 'u-visao']
    },
    {
      id: 'b-metamorfose', titulo: 'A metamorfose', autor: 'Franz Kafka', ano: '1915', tipo: 'Novela', origem: 'Tcheca (em alemão)',
      temas: ['identidade', 'trabalho', 'família', 'sociedade'],
      porque: 'Um caixeiro-viajante acorda transformado num inseto monstruoso — e sua primeira preocupação é o atraso para o trabalho.',
      encontrar: 'Uma situação absurda narrada com total naturalidade, e a reação da família a quem deixou de ser útil.',
      conexao: 'Liga identidade (ele ainda é Gregor?) e trabalho (o que vale uma pessoa que não pode mais sustentar os outros?).',
      acesso: 'Curta e de linguagem simples; o estranhamento vem da situação, não do estilo.',
      perguntas: ['O que muda na forma como a família vê Gregor?', 'O que ele continua sendo?', 'Que relação o livro sugere entre valor pessoal e utilidade?'],
      alternativa: '',
      legal: DP, unidades: ['u-mesma', 'u-dinheiro']
    },
    {
      id: 'b-funes', titulo: 'Ficções (com “Funes, o memorioso”)', autor: 'Jorge Luis Borges', ano: '1944', tipo: 'Conto', origem: 'Argentina',
      temas: ['memória', 'linguagem', 'pensamento', 'identidade', 'tempo'],
      porque: 'Contos curtos que são verdadeiros experimentos de pensamento. Em “Funes”, um jovem que se lembra de absolutamente tudo é incapaz de pensar.',
      encontrar: 'Labirintos, bibliotecas infinitas, mundos inventados, memórias perfeitas — sempre com uma ideia filosófica em jogo.',
      conexao: '“Funes” sugere que pensar exige esquecer e abstrair — o que dialoga com a ideia de memória reconstrutiva e com a pergunta sobre conceitos.',
      acesso: 'Contos curtos, mas densos e cheios de referências; vale ler devagar e sem medo de não pegar tudo na primeira vez.',
      perguntas: ['Por que Funes não consegue pensar?', 'O que seria perdido se lembrássemos de tudo?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais; disponível em bibliotecas.',
      unidades: ['u-mesma']
    },
    {
      id: 'b-estrangeiro', titulo: 'O estrangeiro', autor: 'Albert Camus', ano: '1942', tipo: 'Romance', origem: 'França/Argélia',
      temas: ['sentido da vida', 'sociedade', 'morte', 'liberdade', 'ética'],
      porque: 'Um homem que não sente o que se espera que sinta é julgado menos pelo que fez e mais por isso.',
      encontrar: 'Meursault narra, com frieza desconcertante, a morte da mãe, um crime e o julgamento que se segue.',
      conexao: 'Liga a reflexão sobre sentido (o absurdo, em Camus) e sobre como a sociedade julga emoções e convenções.',
      acesso: 'Curto, linguagem simples. O desafio é a estranheza do narrador.',
      perguntas: ['Pelo que Meursault é realmente julgado?', 'O que ele recusa?'],
      alternativa: '“O mito de Sísifo” apresenta as ideias de Camus em forma de ensaio.',
      legal: 'Obra protegida por direitos autorais; disponível em bibliotecas.',
      unidades: ['u-visao']
    },
    {
      id: 'b-sisifo', titulo: 'O mito de Sísifo', autor: 'Albert Camus', ano: '1942', tipo: 'Ensaio', origem: 'França',
      temas: ['sentido da vida', 'morte', 'liberdade'],
      porque: 'Um ensaio que parte da pergunta mais radical — se a vida vale ser vivida diante de um universo sem sentido dado — e propõe uma resposta de revolta lúcida.',
      encontrar: 'A ideia do absurdo como encontro entre a nossa busca de sentido e o silêncio do mundo, e a figura de Sísifo, condenado a empurrar eternamente uma pedra.',
      conexao: 'Dialoga com a pergunta sobre o que faz uma vida significativa e com a aceitação da finitude.',
      acesso: 'Ensaio filosófico, mais exigente que o romance; os capítulos finais são os mais conhecidos e podem ser lidos primeiro.',
      perguntas: ['O que Camus chama de absurdo?', 'Por que, para ele, devemos imaginar Sísifo feliz?'],
      alternativa: '“O estrangeiro” dá forma narrativa às mesmas questões.',
      legal: 'Obra protegida por direitos autorais.',
      unidades: ['u-reflexao']
    },
    {
      id: 'b-antigona', titulo: 'Antígona', autor: 'Sófocles', ano: 'c. 441 a.C.', tipo: 'Teatro', origem: 'Grécia antiga',
      temas: ['ética', 'poder', 'família', 'morte', 'sociedade'],
      porque: 'Uma jovem desafia o decreto do rei para enterrar o irmão. Duas exigências legítimas — a da família e a da cidade — colidem sem saída fácil.',
      encontrar: 'Uma tragédia curta e intensa, com diálogos em que os dois lados têm argumentos fortes.',
      conexao: 'A obra ideal para pensar a diferença entre legal, moral e justo, e o conflito entre valores legítimos.',
      acesso: 'Curta. Ajuda saber que é uma peça para ser encenada, com coro, e que trata de família e de leis religiosas e da cidade.',
      perguntas: ['Quais são as melhores razões de Creonte?', 'Antígona está apenas certa, ou há algo de excessivo nela também?', 'O que o coro pensa?'],
      alternativa: '',
      traducao: 'Há diferentes traduções, algumas em verso e outras em prosa; a experiência muda bastante entre elas.',
      legal: DP, unidades: ['u-acao-boa']
    },
    {
      id: 'b-otelo', titulo: 'Otelo', autor: 'William Shakespeare', ano: 'c. 1603', tipo: 'Teatro', origem: 'Inglaterra',
      temas: ['emoções', 'amor', 'verdade', 'poder', 'linguagem'],
      porque: 'Uma tragédia sobre como uma interpretação plantada com cuidado — sem provas reais — produz um ciúme devastador.',
      encontrar: 'Um general respeitado, sua esposa e Iago, alguém que manipula o que os outros veem e concluem.',
      conexao: 'Mostra, quase como um experimento, a escada de inferência e o papel da interpretação nas emoções.',
      acesso: 'Linguagem poética de outra época; edições com notas ajudam. Ver uma montagem ou adaptação antes de ler é uma boa entrada.',
      perguntas: ['Que “evidências” convencem Otelo?', 'Por que ele acredita em Iago?'],
      alternativa: '“Dom Casmurro” trata de ciúme e interpretação numa narrativa brasileira.',
      traducao: 'As traduções variam muito: algumas privilegiam o verso, outras a clareza.',
      legal: DP, unidades: ['u-emocao']
    },
    {
      id: 'b-crime', titulo: 'Crime e castigo', autor: 'Fiódor Dostoiévski', ano: '1866', tipo: 'Romance', origem: 'Rússia',
      temas: ['ética', 'emoções', 'sociedade', 'consciência'],
      porque: 'Um estudante pobre convence a si mesmo, com uma teoria, de que certos homens têm direito de matar — e descobre o que a teoria não previa.',
      encontrar: 'Um mergulho psicológico na culpa, na justificação e na febre de alguém que raciocina demais e sente de forma confusa.',
      conexao: 'Mostra a distância entre um argumento abstrato e a experiência moral concreta, e o papel da consciência.',
      acesso: 'Romance longo e intenso. Os nomes russos (com diminutivos) confundem no início; uma lista de personagens ajuda.',
      perguntas: ['Qual é a teoria de Raskólnikov?', 'Onde ela falha — na lógica ou em outra coisa?'],
      alternativa: '“A morte de Ivan Ilitch”, de Tolstói, é uma entrada mais curta na literatura russa sobre autoexame moral.',
      traducao: 'Há traduções diretas do russo bem consideradas; vale preferi-las a traduções indiretas.',
      legal: DP, unidades: []
    },
    {
      id: 'b-achebe', titulo: 'O mundo se despedaça', autor: 'Chinua Achebe', ano: '1958', tipo: 'Romance', origem: 'Nigéria',
      temas: ['história', 'cultura', 'sociedade', 'poder', 'identidade'],
      porque: 'Conta a chegada do colonialismo britânico a uma comunidade igbo a partir de dentro, mostrando uma sociedade complexa, com suas próprias tensões, antes e durante a ruptura.',
      encontrar: 'A vida de Okonkwo, um homem respeitado e rígido, e o desmoronamento de um mundo de costumes, crenças e instituições.',
      conexao: 'Um caso de transformação de visão de mundo vivido por quem a sofreu, sem idealizar nem a sociedade tradicional nem os colonizadores.',
      acesso: 'Linguagem clara, extensão média. Alguns termos igbo aparecem no texto, e o contexto ajuda a entendê-los.',
      perguntas: ['O que parecia natural para Okonkwo?', 'O que se perde e o que alguns personagens ganham com a mudança?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais.',
      unidades: ['u-cosmos']
    },
    {
      id: 'b-1984', titulo: '1984', autor: 'George Orwell', ano: '1949', tipo: 'Romance', origem: 'Inglaterra',
      temas: ['linguagem', 'poder', 'verdade', 'memória', 'liberdade'],
      porque: 'Uma distopia em que o poder controla a história, a memória e a própria linguagem — a “novilíngua” é planejada para tornar certos pensamentos impossíveis de formular.',
      encontrar: 'Winston, um funcionário que reescreve registros do passado, começa a duvidar do regime.',
      conexao: 'Leva ao extremo a relação entre linguagem, pensamento e poder (com a ressalva de que a hipótese de que a língua determina totalmente o pensamento não é aceita hoje).',
      acesso: 'Linguagem direta, extensão média.',
      perguntas: ['Como a novilíngua funcionaria?', 'O que significa controlar o passado?'],
      alternativa: '',
      legal: 'Orwell morreu em 1950; no Brasil, o texto original está em domínio público desde 2021. Traduções podem ter direitos próprios.',
      unidades: ['u-palavra']
    },
    {
      id: 'b-ensaio-cegueira', titulo: 'Ensaio sobre a cegueira', autor: 'José Saramago', ano: '1995', tipo: 'Romance', origem: 'Portugal',
      temas: ['sociedade', 'poder', 'ética', 'percepção'],
      porque: 'Uma epidemia de cegueira atinge uma cidade, e as instituições — e a convivência — se desfazem. O livro pergunta o que sustenta a vida em comum.',
      encontrar: 'Uma narrativa intensa, por vezes brutal, sem nomes próprios e com pontuação peculiar.',
      conexao: 'Mostra o que acontece quando instituições que parecem naturais deixam de funcionar.',
      acesso: 'O estilo — frases longas, diálogos sem travessão — exige algumas páginas de adaptação. Contém cenas de violência.',
      perguntas: ['O que mantém (ou não) as pessoas solidárias?', 'O que o livro sugere sobre instituições?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais.',
      unidades: []
    },
    {
      id: 'b-despossuidos', titulo: 'Os despossuídos', autor: 'Ursula K. Le Guin', ano: '1974', tipo: 'Romance', origem: 'Estados Unidos',
      temas: ['sociedade', 'liberdade', 'poder', 'trabalho', 'cultura'],
      porque: 'Uma ficção científica sobre dois mundos — um sem propriedade privada e outro capitalista — que questiona ambos sem transformar nenhum em utopia perfeita.',
      encontrar: 'Um físico vindo de uma sociedade anarquista visita o planeta vizinho, e o leitor vê cada mundo com os olhos do outro.',
      conexao: 'Excelente para a unidade sobre o natural e o aprendido: o que parece óbvio em um mundo parece absurdo no outro.',
      acesso: 'Ficção científica de ritmo calmo e reflexivo. Os capítulos alternam tempos diferentes, o que confunde no início.',
      perguntas: ['O que cada sociedade considera natural?', 'Que problemas a sociedade “livre” também tem?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais.',
      unidades: ['u-natural']
    },
    {
      id: 'b-frankenstein', titulo: 'Frankenstein', autor: 'Mary Shelley', ano: '1818', tipo: 'Romance', origem: 'Inglaterra',
      temas: ['ciência', 'natureza', 'ética', 'identidade', 'sociedade'],
      porque: 'Muito diferente dos filmes: é a história de um criador que abandona sua criatura, e da criatura que aprende a linguagem, a razão e a rejeição.',
      encontrar: 'Uma narrativa em camadas (cartas, relatos dentro de relatos), com longos trechos em que a criatura fala por si.',
      conexao: 'Liga ciência e responsabilidade, natureza e educação: o que a criatura é, e o que fizeram dela?',
      acesso: 'Linguagem do século XIX, extensão média.',
      perguntas: ['A criatura nasce má ou se torna?', 'De quem é a responsabilidade?'],
      alternativa: '',
      legal: DP, unidades: ['u-explicar']
    },
    {
      id: 'b-sofia', titulo: 'O mundo de Sofia', autor: 'Jostein Gaarder', ano: '1991', tipo: 'Romance', origem: 'Noruega',
      temas: ['pensamento', 'história', 'sentido da vida'],
      porque: 'Um romance que apresenta a história da filosofia ocidental por meio de cartas misteriosas recebidas por uma adolescente.',
      encontrar: 'Um mistério leve que serve de moldura a capítulos explicativos sobre filósofos, dos pré-socráticos ao século XX.',
      conexao: 'Pode servir como mapa geral, desde que se saiba seu limite: cobre quase só a tradição europeia.',
      acesso: 'Acessível, mas longo; dá para ler por capítulos, conforme a curiosidade.',
      perguntas: ['Que perguntas os filósofos fazem que você também já fez?', 'Que tradições ficaram de fora?'],
      alternativa: '“Uma breve história da filosofia”, de Nigel Warburton, é mais curta e direta.',
      legal: 'Obra protegida por direitos autorais.',
      unidades: ['u-visao']
    },
    {
      id: 'b-doze-homens', titulo: 'Doze homens e uma sentença', autor: 'Reginald Rose (roteiro); filme de Sidney Lumet', ano: '1954 (TV) · 1957 (filme)', tipo: 'Filme', origem: 'Estados Unidos',
      temas: ['pensamento', 'verdade', 'sociedade', 'ética'],
      porque: 'Doze jurados precisam decidir por unanimidade o destino de um jovem acusado de assassinato. Um deles tem dúvidas.',
      encontrar: 'Quase tudo se passa numa sala. Preconceitos, pressa, cansaço, convicções e argumentos se enfrentam.',
      conexao: 'Ilustra quase todas as ferramentas da Etapa 1: dúvida razoável, pressupostos, vieses, correlação, a diferença entre convicção e evidência.',
      acesso: 'O filme tem cerca de uma hora e meia e é fácil de acompanhar. Originalmente foi um teleteatro e depois virou peça.',
      perguntas: ['Que pressupostos cada jurado traz para a sala?', 'O que muda a opinião de cada um: argumentos ou outra coisa?'],
      alternativa: '',
      legal: 'Procure em serviços de streaming, cineclubes ou bibliotecas com acervo de filmes.',
      unidades: ['u-discordar']
    },

    /* ------------------- Ensaios e clássicos do pensamento ------------------- */
    {
      id: 'b-montaigne', titulo: 'Ensaios (começar por “Dos canibais”)', autor: 'Michel de Montaigne', ano: '1580–1588', tipo: 'Ensaio', origem: 'França',
      temas: ['cultura', 'pensamento', 'identidade', 'morte', 'natureza'],
      porque: 'Montaigne inventou o ensaio como forma de pensar em primeira pessoa, com dúvida e curiosidade. Em “Dos canibais” (livro I, capítulo 31), a partir de relatos sobre os tupinambás do Brasil, ele vira o espelho para a Europa.',
      encontrar: 'Textos de tamanhos variados sobre temas como amizade, morte, educação, costumes, experiência — sempre com digressões e autoexame.',
      conexao: 'Ligação direta com a unidade sobre o natural e o aprendido, e com a ideia de que pensar por escrito é uma tentativa.',
      acesso: 'Linguagem do século XVI, mas surpreendentemente pessoal. Não é preciso ler em ordem: escolha um ensaio pelo título.',
      perguntas: ['O que Montaigne chama de barbárie?', 'Ele entende os tupinambás ou os usa para falar da Europa?'],
      alternativa: '',
      traducao: 'Há traduções integrais e seleções; a experiência de leitura varia conforme a tradução e as notas.',
      legal: DP, unidades: ['u-natural', 'u-reflexao']
    },
    {
      id: 'b-apologia', titulo: 'Apologia de Sócrates', autor: 'Platão', ano: 'séc. IV a.C.', tipo: 'Clássico da filosofia', origem: 'Grécia antiga',
      temas: ['pensamento', 'ética', 'morte', 'sociedade'],
      porque: 'A defesa de Sócrates diante do tribunal de Atenas que o condenou à morte, na versão de seu discípulo Platão. É a melhor porta de entrada para a filosofia antiga.',
      encontrar: 'Sócrates explica por que interroga as pessoas, o que significa saber que não sabe e por que prefere morrer a deixar de examinar a vida.',
      conexao: 'Origem da ideia de examinar pressupostos (ver a unidade correspondente).',
      acesso: 'Curta (cerca de 30 a 40 páginas) e de leitura direta.',
      perguntas: ['De que Sócrates é acusado?', 'O que ele quer dizer ao afirmar que sua sabedoria é saber que não sabe?'],
      alternativa: '',
      legal: DP, unidades: ['u-pressupostos']
    },
    {
      id: 'b-manual', titulo: 'Manual (Encheirídion)', autor: 'Epicteto (registrado por Arriano)', ano: 'séc. II', tipo: 'Clássico da filosofia', origem: 'Roma (em grego)',
      temas: ['emoções', 'liberdade', 'ética', 'sentido da vida'],
      porque: 'Um pequeno conjunto de orientações estoicas atribuídas a Epicteto, ex-escravizado que se tornou professor de filosofia, sobre distinguir o que depende de nós do que não depende.',
      encontrar: 'Parágrafos curtos, diretos, quase como exercícios.',
      conexao: 'Base para a unidade sobre emoções: a ideia de que nos perturbam os juízos sobre as coisas.',
      acesso: 'Muito curto e direto. O desafio é praticar, não entender.',
      perguntas: ['O que depende de mim, segundo Epicteto?', 'Onde essa divisão me parece útil, e onde me parece injusta?'],
      alternativa: '',
      legal: DP, unidades: ['u-emocao']
    },
    {
      id: 'b-seneca', titulo: 'Sobre a brevidade da vida', autor: 'Sêneca', ano: 'c. 49', tipo: 'Ensaio', origem: 'Roma',
      temas: ['tempo', 'sentido da vida', 'morte', 'trabalho'],
      porque: 'Um ensaio curto de um filósofo estoico romano defendendo que a vida não é curta: nós é que a desperdiçamos.',
      encontrar: 'Uma crítica às ocupações sem fim, à busca de prestígio e à vida adiada.',
      conexao: 'Liga o tempo vivido, a finitude e a crítica à ocupação permanente — com ecos atuais.',
      acesso: 'Curto e direto. Ajuda saber que Sêneca era muito rico e próximo do poder — o que torna sua crítica interessante e discutível.',
      perguntas: ['O que Sêneca chama de vida desperdiçada?', 'Quem pode seguir seu conselho?'],
      alternativa: '',
      legal: DP, unidades: ['u-tempo']
    },
    {
      id: 'b-tao', titulo: 'Tao Te Ching (Daodejing)', autor: 'atribuído a Laozi', ano: 'séc. IV a.C. (data discutida)', tipo: 'Clássico da filosofia', origem: 'China',
      temas: ['natureza', 'sentido da vida', 'poder', 'linguagem'],
      porque: 'Um dos textos mais traduzidos do mundo: poemas curtos sobre o caminho (Dao), a ação sem esforço forçado e os limites da linguagem para dizer o essencial.',
      encontrar: 'Oitenta e um capítulos breves, paradoxais, que podem ser lidos um por dia.',
      conexao: 'Oferece outro sentido de “natural” (<em>ziran</em>), discutido na primeira unidade.',
      acesso: 'Curto, mas aberto a muitas interpretações. Leia uma introdução ou as notas do tradutor.',
      perguntas: ['O que significa agir sem forçar?', 'Por que o texto desconfia das palavras?'],
      alternativa: '',
      traducao: 'As traduções diferem enormemente, porque o chinês clássico é muito conciso. Comparar duas versões do mesmo capítulo é um ótimo exercício.',
      legal: DP, unidades: ['u-natural']
    },
    {
      id: 'b-analectos', titulo: 'Analectos', autor: 'Confúcio (registrado por discípulos)', ano: 'séc. V–IV a.C.', tipo: 'Clássico da filosofia', origem: 'China',
      temas: ['ética', 'sociedade', 'identidade'],
      porque: 'Diálogos e ditos breves sobre como se tornar uma pessoa de bem por meio do aprendizado, do respeito às relações e da prática cotidiana.',
      encontrar: 'Passagens curtas e independentes, muitas vezes em forma de conversa entre o mestre e seus alunos.',
      conexao: 'Uma ética das virtudes e das relações, que dialoga com Aristóteles e com a ética do cuidado.',
      acesso: 'Fragmentário; ajuda ler com uma introdução que explique os conceitos principais (como <em>ren</em> e <em>li</em>).',
      perguntas: ['Por que Confúcio dá tanta importância aos rituais?', 'Como o aprendizado transforma uma pessoa?'],
      alternativa: '',
      traducao: 'Traduções e comentários variam muito na escolha dos termos-chave.',
      legal: DP, unidades: ['u-acao-boa']
    },
    {
      id: 'b-mill', titulo: 'Sobre a liberdade', autor: 'John Stuart Mill', ano: '1859', tipo: 'Clássico da filosofia', origem: 'Inglaterra',
      temas: ['liberdade', 'pensamento', 'sociedade', 'ética'],
      porque: 'Uma defesa clássica da liberdade de pensamento e de expressão, e do limite do poder da sociedade sobre o indivíduo.',
      encontrar: 'O argumento de que até as opiniões falsas têm valor para quem quer compreender a verdade, e o “princípio do dano”.',
      conexao: 'O capítulo 2 é diretamente útil para a unidade sobre discordância.',
      acesso: 'Prosa argumentativa do século XIX, clara mas densa. O capítulo 2 pode ser lido sozinho.',
      perguntas: ['Por que conhecer os argumentos contrários fortalece até as opiniões verdadeiras?', 'Onde estaria o limite da liberdade de expressão para Mill?'],
      alternativa: '',
      legal: DP, unidades: ['u-discordar']
    },
    {
      id: 'b-beauvoir', titulo: 'O segundo sexo', autor: 'Simone de Beauvoir', ano: '1949', tipo: 'Clássico da filosofia', origem: 'França',
      temas: ['identidade', 'sociedade', 'liberdade', 'cultura'],
      porque: 'Uma investigação monumental sobre como a condição das mulheres foi construída por biologia, história, mitos e instituições — e por que nada disso é destino.',
      encontrar: 'Dois volumes: o primeiro sobre fatos e mitos; o segundo, que começa com a famosa frase de que ninguém nasce mulher, torna-se, sobre a experiência vivida.',
      conexao: 'Um exemplo maior da distinção entre o natural e o aprendido — e de como ela pode ser feita com rigor.',
      acesso: 'Muito longo e exigente. Não é preciso ler tudo: a introdução e o início do segundo volume já dão muito a pensar.',
      perguntas: ['O que Beauvoir quer dizer com “o Outro”?', 'Que papel ela dá à biologia?'],
      alternativa: 'Uma introdução confiável à obra de Beauvoir pode preparar a leitura; lembre-se de que ler uma interpretação não é o mesmo que ler a autora.',
      legal: 'Obra protegida por direitos autorais.',
      unidades: ['u-natural']
    },
    {
      id: 'b-arendt-eichmann', titulo: 'Eichmann em Jerusalém', autor: 'Hannah Arendt', ano: '1963', tipo: 'Ensaio', origem: 'Estados Unidos (autora alemã)',
      temas: ['ética', 'poder', 'pensamento', 'história', 'sociedade'],
      porque: 'Ao acompanhar o julgamento de um dos organizadores logísticos do Holocausto, Arendt propôs a ideia polêmica da “banalidade do mal”: grandes crimes cometidos por alguém que parecia, sobretudo, incapaz de pensar a partir do lugar dos outros.',
      encontrar: 'Uma reportagem filosófica sobre o julgamento, a burocracia, a responsabilidade e a obediência.',
      conexao: 'Liga ética, pensamento e instituições: o que significa deixar de pensar?',
      acesso: 'Exigente em contexto histórico; é útil saber o básico sobre a Segunda Guerra e o Holocausto. Tema doloroso.',
      perguntas: ['O que Arendt quer dizer com “banalidade”?', 'Obedecer ordens diminui a responsabilidade?'],
      alternativa: 'Pesquisas históricas posteriores (como as da historiadora Bettina Stangneth) argumentam que Eichmann era um antissemita convicto, mais ideológico do que Arendt percebeu. Ler essa crítica faz parte de ler Arendt bem.',
      legal: 'Obra protegida por direitos autorais.',
      unidades: ['u-acao-boa']
    },
    {
      id: 'b-barthes', titulo: 'Mitologias', autor: 'Roland Barthes', ano: '1957', tipo: 'Ensaio', origem: 'França',
      temas: ['linguagem', 'cultura', 'sociedade', 'poder'],
      porque: 'Pequenos ensaios sobre luta livre, anúncios, comida, brinquedos, revistas — mostrando como objetos banais carregam mensagens que se disfarçam de naturais.',
      encontrar: 'Textos curtos e independentes, e um ensaio teórico final (“O mito, hoje”), mais difícil.',
      conexao: 'Base do conceito de “segundo significado” da unidade sobre linguagem.',
      acesso: 'Os ensaios curtos são acessíveis e divertidos; o ensaio final é técnico e pode ficar para depois.',
      perguntas: ['Que “mitologias” do nosso tempo Barthes analisaria?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais.',
      unidades: ['u-palavra']
    },
    {
      id: 'b-russell-ocio', titulo: 'O elogio ao ócio', autor: 'Bertrand Russell', ano: '1932 (ensaio) · 1935 (coletânea)', tipo: 'Ensaio', origem: 'Inglaterra',
      temas: ['trabalho', 'sociedade', 'sentido da vida', 'tempo'],
      porque: 'Um filósofo argumenta, com humor, que a crença na virtude do trabalho causou muito mal, e que uma jornada bem menor seria possível e desejável.',
      encontrar: 'Um ensaio curto e provocador que dá título a uma coletânea.',
      conexao: 'Uma formulação clara da intuição de que há algo estranho no valor que damos ao trabalho — com argumentos que podem ser examinados e contestados.',
      acesso: 'Curto, irônico e claro. Escrito nos anos 1930: alguns exemplos estão datados.',
      perguntas: ['Que distinção Russell faz entre tipos de trabalho?', 'Que objeções um economista faria?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais.',
      unidades: ['u-dinheiro', 'u-perguntas']
    },
    {
      id: 'b-han', titulo: 'Sociedade do cansaço', autor: 'Byung-Chul Han', ano: '2010', tipo: 'Ensaio', origem: 'Alemanha (autor sul-coreano)',
      temas: ['trabalho', 'sociedade', 'emoções', 'identidade'],
      porque: 'Um ensaio curto que se tornou muito discutido: Han argumenta que deixamos de ser explorados principalmente por outros e passamos a nos explorar a nós mesmos, em nome do desempenho.',
      encontrar: 'Capítulos breves, com frases de efeito e conceitos em sequência rápida.',
      conexao: 'Dialoga com a ideia de valor pessoal medido pela produtividade.',
      acesso: 'Curto, mas denso e aforístico. Suas afirmações são interpretações, não resultados empíricos; vale lê-las como hipóteses a examinar.',
      perguntas: ['Que evidências seriam necessárias para avaliar as teses de Han?', 'Onde você se reconhece, e onde não?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais.',
      unidades: ['u-dinheiro']
    },
    {
      id: 'b-krenak', titulo: 'Ideias para adiar o fim do mundo', autor: 'Ailton Krenak', ano: '2019', tipo: 'Ensaio', origem: 'Brasil',
      temas: ['natureza', 'cultura', 'sociedade', 'sentido da vida'],
      porque: 'O pensador indígena Ailton Krenak questiona a ideia de uma “humanidade” separada da natureza e o modo de vida que trata a Terra como recurso.',
      encontrar: 'Textos curtos, originados de palestras, em tom de conversa.',
      conexao: 'Questiona a própria divisão entre natureza e cultura que organiza a primeira unidade, a partir de outra tradição.',
      acesso: 'Muito curto e acessível. É uma fala política e filosófica, não um estudo acadêmico.',
      perguntas: ['O que Krenak quer dizer com “humanidade”?', 'Que pressupostos da vida urbana ele torna visíveis?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais; disponível em bibliotecas.',
      unidades: ['u-natural', 'u-explicar']
    },
    {
      id: 'b-kopenawa', titulo: 'A queda do céu: palavras de um xamã yanomami', autor: 'Davi Kopenawa e Bruce Albert', ano: '2010 (francês) · 2015 (português)', tipo: 'Memória e testemunho', origem: 'Brasil',
      temas: ['natureza', 'cultura', 'história', 'sentido da vida', 'poder'],
      porque: 'O relato de vida e o pensamento de um xamã yanomami, construído ao longo de décadas de conversas com um antropólogo.',
      encontrar: 'Cosmologia, formação xamânica, o contato com os brancos, epidemias, garimpo e uma crítica profunda ao “povo da mercadoria”.',
      conexao: 'Uma forma inteiramente diferente de pensar cosmos, natureza e sociedade, apresentada em seus próprios termos.',
      acesso: 'Muito longo. Pode ser lido por partes; a introdução e os capítulos sobre o contato são boas entradas.',
      perguntas: ['O que Kopenawa entende por “mercadoria”?', 'Como ele vê os brancos?'],
      alternativa: '“Ideias para adiar o fim do mundo”, de Ailton Krenak, é uma entrada curta no pensamento indígena brasileiro contemporâneo.',
      legal: 'Obra protegida por direitos autorais.',
      unidades: ['u-cosmos']
    },

    /* ------------------- Introduções e divulgação ------------------- */
    {
      id: 'b-nagel', titulo: 'Uma breve introdução à filosofia', autor: 'Thomas Nagel', ano: '1987', tipo: 'Introdução', origem: 'Estados Unidos',
      temas: ['pensamento', 'consciência', 'ética', 'morte', 'sentido da vida', 'linguagem'],
      porque: 'Em vez de contar a história da filosofia, Nagel apresenta nove problemas — conhecer o mundo, outras mentes, mente e corpo, livre-arbítrio, moral, justiça, morte, sentido da vida, significado das palavras — para o leitor pensar diretamente.',
      encontrar: 'Capítulos curtos, sem jargão, que deixam as questões em aberto.',
      conexao: 'O espírito do livro é o mesmo deste Ateliê: pensar as perguntas, não decorar autores.',
      acesso: 'Curto e muito acessível; uma das melhores portas de entrada.',
      perguntas: ['Qual capítulo deixou você mais inquieto?', 'Onde você discorda de Nagel?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais; no Brasil, publicada com este título.',
      unidades: ['u-argumento', 'u-perguntas']
    },
    {
      id: 'b-warburton', titulo: 'Uma breve história da filosofia', autor: 'Nigel Warburton', ano: '2011', tipo: 'Introdução', origem: 'Inglaterra',
      temas: ['pensamento', 'história'],
      porque: 'Quarenta capítulos curtos, cada um sobre um pensador ou uma ideia, em ordem histórica.',
      encontrar: 'Um panorama claro, ideal para consulta quando um nome desconhecido aparecer no percurso.',
      conexao: 'Serve de mapa para contextualizar os pensadores que aparecem nas unidades.',
      acesso: 'Muito acessível; cada capítulo se lê em poucos minutos.',
      perguntas: ['Que problema cada pensador tentava resolver?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais. Cobre sobretudo a tradição ocidental.',
      unidades: []
    },
    {
      id: 'b-chaui', titulo: 'Convite à filosofia', autor: 'Marilena Chaui', ano: '1994', tipo: 'Introdução', origem: 'Brasil',
      temas: ['pensamento', 'verdade', 'ética', 'sociedade', 'linguagem'],
      porque: 'Uma introdução ampla, escrita por uma filósofa brasileira, com capítulos sobre razão, verdade, linguagem, cultura, ética e política.',
      encontrar: 'Uma obra de referência organizada por temas, muito usada no ensino.',
      conexao: 'Útil para aprofundar praticamente qualquer eixo do percurso, em português e com exemplos próximos.',
      acesso: 'Linguagem didática, mas é um livro grande; use-o por capítulos, como consulta.',
      perguntas: ['Escolha um capítulo ligado a uma unidade que você estudou e compare as abordagens.'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais; muito presente em bibliotecas escolares e públicas.',
      unidades: []
    },
    {
      id: 'b-sandel-justica', titulo: 'Justiça: o que é fazer a coisa certa', autor: 'Michael Sandel', ano: '2009', tipo: 'Introdução', origem: 'Estados Unidos',
      temas: ['ética', 'sociedade', 'liberdade'],
      porque: 'Baseado em um curso famoso, apresenta utilitarismo, Kant, liberalismo e ética das virtudes por meio de casos concretos e polêmicos.',
      encontrar: 'Dilemas reais e hipotéticos discutidos com clareza, sempre mostrando o melhor de cada lado.',
      conexao: 'Aprofunda as lentes da unidade “O que torna uma ação boa?”.',
      acesso: 'Acessível e envolvente.',
      perguntas: ['Em que casos sua intuição muda de lente?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais.',
      unidades: ['u-acao-boa']
    },
    {
      id: 'b-sandel-merito', titulo: 'A tirania do mérito', autor: 'Michael Sandel', ano: '2020', tipo: 'Ensaio', origem: 'Estados Unidos',
      temas: ['trabalho', 'sociedade', 'ética', 'identidade'],
      porque: 'Sandel argumenta que a ideia de que cada um merece exatamente o lugar que ocupa gera arrogância nos vencedores e humilhação nos perdedores — e propõe repensar a dignidade do trabalho.',
      encontrar: 'Uma crítica à meritocracia que não nega o valor do esforço, mas questiona o que se conclui a partir dele.',
      conexao: 'Diretamente ligado à intuição sobre trabalho, valor e reconhecimento.',
      acesso: 'Acessível; exemplos tirados principalmente dos Estados Unidos.',
      perguntas: ['Que diferença Sandel faz entre esforço e merecimento?', 'Seus argumentos se aplicam ao Brasil?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais.',
      unidades: ['u-dinheiro']
    },
    {
      id: 'b-graeber', titulo: 'Dívida: os primeiros 5.000 anos', autor: 'David Graeber', ano: '2011', tipo: 'História e sociedade', origem: 'Estados Unidos',
      temas: ['trabalho', 'sociedade', 'história', 'poder', 'ética'],
      porque: 'Um antropólogo reconta a história do dinheiro a partir da dívida e do crédito, questionando o mito do escambo e a moral da dívida.',
      encontrar: 'Muitos exemplos históricos e etnográficos, de Mesopotâmia a impérios modernos.',
      conexao: 'Aprofunda a unidade sobre dinheiro e mostra o dinheiro como relação social.',
      acesso: 'Longo e cheio de detalhes. Algumas teses são controversas entre economistas e historiadores.',
      perguntas: ['Por que pagar dívidas parece uma obrigação moral?', 'Que críticas foram feitas ao livro?'],
      alternativa: 'O ensaio “O elogio ao ócio”, de Russell, toca temas próximos em poucas páginas.',
      legal: 'Obra protegida por direitos autorais.',
      unidades: ['u-dinheiro']
    },
    {
      id: 'b-sapiens', titulo: 'Sapiens: uma breve história da humanidade', autor: 'Yuval Noah Harari', ano: '2011', tipo: 'História e sociedade', origem: 'Israel',
      temas: ['história', 'sociedade', 'natureza', 'cultura'],
      porque: 'Uma síntese muito lida da história humana, com a ideia central de que a cooperação em larga escala depende de “ficções” compartilhadas, como o dinheiro e as nações.',
      encontrar: 'Uma narrativa ágil, cheia de hipóteses ousadas.',
      conexao: 'Liga-se à unidade sobre dinheiro como instituição.',
      acesso: 'Muito acessível. Mas atenção: vários especialistas criticaram simplificações e afirmações apresentadas com mais certeza do que as evidências permitem. Leia como uma hipótese de conjunto, não como manual.',
      perguntas: ['Quais afirmações do livro parecem bem fundamentadas e quais são especulações?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais.',
      unidades: []
    },
    {
      id: 'b-kahneman', titulo: 'Rápido e devagar: duas formas de pensar', autor: 'Daniel Kahneman', ano: '2011', tipo: 'Divulgação científica', origem: 'Estados Unidos',
      temas: ['pensamento', 'emoções', 'verdade'],
      porque: 'Um psicólogo vencedor do Nobel de Economia apresenta décadas de pesquisa sobre vieses, intuições e decisões.',
      encontrar: 'A distinção entre um pensamento rápido e automático e outro lento e deliberado, e muitos experimentos.',
      conexao: 'Fundamenta as unidades sobre causalidade, pressupostos e discordância.',
      acesso: 'Acessível, mas longo. Atenção: alguns estudos citados (sobretudo sobre “priming”) não se confirmaram em tentativas de replicação, o que o próprio Kahneman reconheceu.',
      perguntas: ['Em que situações do seu dia você usa o pensamento rápido?', 'Que estudos do livro foram questionados depois?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais. Em Portugal, foi publicado com outro título.',
      unidades: ['u-causa', 'u-discordar']
    },
    {
      id: 'b-sagan-mundo', titulo: 'O mundo assombrado pelos demônios', autor: 'Carl Sagan', ano: '1995', tipo: 'Divulgação científica', origem: 'Estados Unidos',
      temas: ['ciência', 'pensamento', 'verdade'],
      porque: 'Uma defesa apaixonada do pensamento científico e do ceticismo saudável, com um “kit de detecção de bobagens”.',
      encontrar: 'Capítulos sobre pseudociência, superstição, educação e democracia.',
      conexao: 'Complementa a Etapa 1 com exemplos científicos e históricos.',
      acesso: 'Acessível e envolvente.',
      perguntas: ['Que ferramentas do “kit” você já usa?', 'Onde o ceticismo pode virar desconfiança permanente?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais.',
      unidades: ['u-argumento', 'u-saber', 'u-cosmos']
    },
    {
      id: 'b-rovelli', titulo: 'A ordem do tempo', autor: 'Carlo Rovelli', ano: '2017', tipo: 'Divulgação científica', origem: 'Itália',
      temas: ['tempo', 'ciência', 'identidade'],
      porque: 'Um físico teórico apresenta, com linguagem quase literária, o que a física diz sobre o tempo — e o que a experiência humana do tempo tem a ver com isso.',
      encontrar: 'Três partes: como a física desfez a imagem comum do tempo, um mundo sem tempo, e de onde vem o tempo que vivemos.',
      conexao: 'Aprofunda a unidade “O que é o tempo?”.',
      acesso: 'Curto e bem escrito, mas algumas ideias são difíceis. Lembre-se: a parte final apresenta a linha de pesquisa do autor, não um consenso.',
      perguntas: ['O que o livro apresenta como estabelecido, e o que como hipótese?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais.',
      unidades: ['u-tempo']
    },
    {
      id: 'b-mlodinow', titulo: 'O andar do bêbado', autor: 'Leonard Mlodinow', ano: '2008', tipo: 'Divulgação científica', origem: 'Estados Unidos',
      temas: ['pensamento', 'ciência', 'verdade'],
      porque: 'Como o acaso influencia nossas vidas mais do que admitimos, e como nossa intuição falha com probabilidades.',
      encontrar: 'Histórias e exemplos sobre sorte, estatística, sucesso e fracasso.',
      conexao: 'Aprofunda a unidade sobre correlação e causa.',
      acesso: 'Acessível, com pouca matemática.',
      perguntas: ['Que sucessos ou fracassos que você atribuiu a mérito podem ter tido forte componente de acaso?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais.',
      unidades: ['u-causa']
    },
    {
      id: 'b-rosling', titulo: 'Factfulness', autor: 'Hans Rosling, com Ola Rosling e Anna Rosling Rönnlund', ano: '2018', tipo: 'Divulgação científica', origem: 'Suécia',
      temas: ['pensamento', 'verdade', 'sociedade'],
      porque: 'Um médico e estatístico mostra que pessoas instruídas erram sistematicamente sobre o estado do mundo, e explica os instintos que causam esses erros.',
      encontrar: 'Perguntas sobre o mundo, dados, gráficos e dez “instintos” que distorcem nossa visão.',
      conexao: 'Útil para pensar a diferença entre impressão e evidência.',
      acesso: 'Muito acessível. Alguns críticos apontam que o livro pode subestimar problemas que persistem; vale ler com esse contraponto.',
      perguntas: ['Em quais perguntas você errou, e por quê?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais.',
      unidades: ['u-causa']
    },
    {
      id: 'b-sacks', titulo: 'O homem que confundiu sua mulher com um chapéu', autor: 'Oliver Sacks', ano: '1985', tipo: 'Divulgação científica', origem: 'Inglaterra/Estados Unidos',
      temas: ['consciência', 'identidade', 'memória', 'percepção'],
      porque: 'Relatos de um neurologista sobre pacientes com distúrbios raros de percepção, memória e identidade, contados com humanidade.',
      encontrar: 'Casos independentes, cada um uma pequena história sobre o que acontece quando algo que tomamos como garantido falha.',
      conexao: 'Liga percepção, memória e identidade a casos concretos.',
      acesso: 'Acessível; cada caso se lê separadamente. Alguns aspectos éticos dos relatos foram discutidos posteriormente.',
      perguntas: ['O que cada caso revela sobre o funcionamento normal da mente?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais.',
      unidades: ['u-saber', 'u-explicar']
    },
    {
      id: 'b-lakoff', titulo: 'Metáforas da vida cotidiana', autor: 'George Lakoff e Mark Johnson', ano: '1980', tipo: 'Ensaio', origem: 'Estados Unidos',
      temas: ['linguagem', 'pensamento', 'cultura'],
      porque: 'Mostra que metáforas não são enfeites, mas estruturas que organizam o modo como pensamos conceitos abstratos como tempo, discussão e amor.',
      encontrar: 'Muitos exemplos da linguagem comum (“gastar tempo”, “defender um argumento”) e a análise do que eles revelam.',
      conexao: 'Aprofunda a unidade sobre linguagem.',
      acesso: 'Linguagem acessível, com muitos exemplos; os capítulos finais são mais teóricos.',
      perguntas: ['Que metáforas você usa para falar de trabalho? E de amor?'],
      alternativa: '',
      legal: 'Obra protegida por direitos autorais.',
      unidades: ['u-palavra']
    }
  ];
})();
