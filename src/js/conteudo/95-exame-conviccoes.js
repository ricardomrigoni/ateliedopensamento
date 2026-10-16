/* =========================================================
   Exame de convicções — estrutura do exercício
   e acréscimos ao Mapa de ideias (v1.1)
   ========================================================= */
(function () {
  const A = window.ATELIE;

  A.exame = {
    origens: [
      { id: 'experiencia', nome: 'Experiência pessoal', nota: 'Valiosa, mas limitada: vale perguntar se ela é representativa.' },
      { id: 'familia', nome: 'Educação familiar', nota: 'Origem não é validade — nem para confirmar, nem para descartar.' },
      { id: 'religiao', nome: 'Fé ou tradição religiosa', nota: 'Vale distinguir o que é artigo de fé e o que é inferência a partir dela.' },
      { id: 'admirados', nome: 'Pessoas que admiro', nota: 'Confiar em alguém é razoável; vale saber se essa pessoa tem competência neste assunto.' },
      { id: 'grupo', nome: 'Meu grupo (amigos, comunidade, partido)', nota: 'Atenção à proteção da identidade: o custo social de mudar pode pesar mais que os argumentos.' },
      { id: 'leituras', nome: 'Leituras e argumentos', nota: 'Você leu também os melhores argumentos contrários?' },
      { id: 'dados', nome: 'Dados e evidências', nota: 'Que dados, de que fonte? Eles mostram correlação ou causa?' },
      { id: 'intuicao', nome: 'Intuição moral', nota: 'Intuições morais são dados importantes, mas podem ser examinadas.' },
      { id: 'emocao', nome: 'Emoção (medo, raiva, esperança)', nota: 'Uma emoção pode ser adequada — ou pode estar decidindo antes do raciocínio.' }
    ],
    fundamentos: [
      { id: 'cuidado', nome: 'Cuidado / dano' }, { id: 'justica', nome: 'Justiça (igualdade ou proporcionalidade)' },
      { id: 'liberdade', nome: 'Liberdade / opressão' }, { id: 'lealdade', nome: 'Lealdade / traição' },
      { id: 'autoridade', nome: 'Autoridade / respeito' }, { id: 'santidade', nome: 'Santidade / degradação' }
    ],
    visoes: [
      { id: 'restrita', nome: 'Restrita', desc: 'natureza humana limitada; trocas e custos; prudência' },
      { id: 'irrestrita', nome: 'Irrestrita', desc: 'natureza humana perfectível; soluções; reforma' },
      { id: 'mista', nome: 'Mistura das duas', desc: '' },
      { id: 'nao', nome: 'Não se aplica', desc: '' }
    ],
    vereditos: [
      { id: 'manter', nome: 'Manter', desc: 'As razões resistiram ao exame.' },
      { id: 'ajustar', nome: 'Ajustar', desc: 'Manter, mas numa versão mais precisa ou mais modesta.' },
      { id: 'suspender', nome: 'Suspender o juízo', desc: 'Não tenho razões suficientes para nenhum dos lados, por enquanto.' },
      { id: 'mudar', nome: 'Mudar de ideia', desc: 'As razões contrárias são mais fortes.' }
    ],
    exemplos: [
      'A pena de morte é justificável para crimes muito graves.',
      'O Estado deveria interferir menos na economia.',
      'A família tradicional é a melhor base para criar filhos.',
      'Redes sociais fazem mais mal do que bem.',
      'Religião é necessária para fundamentar a moral.',
      'Cotas raciais nas universidades são justas.'
    ]
  };

  /* Novos nós e conexões no Mapa de ideias */
  A.mapa.nos.push(
    { id: 'tradicao', nome: 'Tradição', desc: 'O que se recebe das gerações anteriores e se transmite às seguintes.', refs: ['u:u-tradicao', 'p:burke'] },
    { id: 'sagrado', nome: 'Sagrado', desc: 'O que se percebe como elevado demais para ser usado, trocado ou rebaixado.', refs: ['u:u-sentido', 'u:u-visoes'] }
  );
  A.mapa.arestas.push(
    { a: 'tradicao', b: 'natural', por: 'Tradições antigas parecem naturais; e parte do que chamamos de natural foi transmitido como tradição.', limite: 'Uma tradição pode ser reconhecida como construída e ainda assim valiosa.' },
    { a: 'tradicao', b: 'conhecimento', por: 'Para Burke e Hayek, tradições condensam conhecimento prático que nenhum indivíduo tem.', limite: 'Tradições também transmitem erros e preconceitos.' },
    { a: 'tradicao', b: 'liberdade', por: 'Para conservadores, a liberdade floresce dentro de costumes e instituições herdados.', limite: 'Para Mill, o costume pode ser um despotismo que sufoca a individualidade.' },
    { a: 'tradicao', b: 'identidade', por: 'Pertencer a uma tradição dá raízes e linguagem para dizer quem somos.', limite: 'Identidades também se formam contra a tradição recebida.' },
    { a: 'tradicao', b: 'poder', por: 'Quem controla a interpretação da tradição exerce poder.', limite: 'Tradições também limitam o poder, como a lei consuetudinária limitava reis.' },
    { a: 'tradicao', b: 'instituicao', por: 'Instituições são tradições que ganharam regras e papéis.', limite: 'Instituições novas podem ser criadas deliberadamente — e funcionar.' },
    { a: 'sagrado', b: 'dinheiro', por: 'A intuição de que algumas coisas não devem estar à venda une conservadores religiosos e críticos do mercado.', limite: 'O que é sagrado para uns pode ser mercadoria legítima para outros.' },
    { a: 'sagrado', b: 'sentido', por: 'Para muitas tradições, o sentido da vida está ligado a algo que nos ultrapassa.', limite: 'Pensadores seculares encontram sentido sem referência ao sagrado.' },
    { a: 'sagrado', b: 'etica', por: 'A santidade é um dos fundamentos morais descritos por Haidt.', limite: 'Apelos ao sagrado também justificaram exclusões e violências.' },
    { a: 'sagrado', b: 'morte', por: 'Rituais diante da morte estão entre as práticas sagradas mais universais.', limite: 'As formas variam enormemente entre culturas.' }
  );
})();
