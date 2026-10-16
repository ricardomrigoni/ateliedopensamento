# Ateliê do Pensamento

Um percurso pessoal de filosofia, autoconhecimento, literatura e compreensão do mundo — em HTML, CSS e JavaScript, sem servidor, sem conta e sem envio de dados.

## Como abrir

**Jeito mais simples:** abra o arquivo `atelie-do-pensamento.html` com um duplo clique. Ele contém tudo (estilos, conteúdo e lógica) e funciona sem internet.

- No computador: qualquer navegador moderno (Chrome, Edge, Firefox, Safari).
- No celular: salve o arquivo e abra-o pelo navegador. Alguns gerenciadores de arquivos abrem HTML num visualizador limitado; se algo não funcionar, use “Abrir com…” e escolha o navegador.

**Versão em pastas (para editar o conteúdo):** abra `src/index.html`. É o mesmo projeto, com o conteúdo separado da interface. Depois de editar, gere de novo o arquivo único com `python3 tools/montar.py`.

> Os dados ficam guardados no navegador *associado ao endereço do arquivo*. Se você mover o arquivo para outra pasta ou abrir a versão de `src/`, o navegador pode tratá-lo como outro “site” e mostrar o Ateliê vazio. Nesse caso, importe sua cópia de segurança.

## Usar em vários aparelhos: GitHub Pages + Supabase (versão 1.2)

Com isto, o Ateliê fica num endereço fixo (por exemplo `https://seu-usuario.github.io/atelie/`) e os dados ficam no **seu** Supabase. Você abre o mesmo endereço no celular e no computador, entra com e-mail e senha, e vê sempre o mesmo conteúdo.

Como funciona: tudo continua sendo salvo primeiro no navegador (funciona sem internet) e, alguns segundos depois, vai para o Supabase. Ao abrir o Ateliê ou voltar para a aba, a versão mais recente é baixada. Se dois aparelhos mexerem ao mesmo tempo sem conexão, o Ateliê **pergunta** qual versão vale — a outra fica guardada no histórico da nuvem. O Supabase também guarda sozinho uma cópia por hora das versões anteriores (90 dias), que você pode baixar ou restaurar em *Dados e ajustes*.

### Parte 1 — Supabase (uma vez)

1. Abra seu projeto no Supabase (pode ser o mesmo que você já usa; as tabelas novas começam com `atelie_` e não mexem nas outras).
2. **SQL Editor → New query**: cole todo o conteúdo de `supabase/atelie-supabase.sql` e clique em **Run**. Pode rodar de novo no futuro sem problema.
3. **Authentication → Users → Add user → Create new user**: seu e-mail e uma senha forte. Marque **Auto Confirm User**.
4. **Project Settings → API Keys** (ou *Data API*): copie a **Project URL** (`https://xxxx.supabase.co`) e a chave **publishable** (`sb_publishable_…`) — ou, em projetos antigos, a **anon public** (`eyJ…`). **Nunca** use a chave *secret* / *service_role* no Ateliê.
5. Opcional: em **Authentication → Sign In / Providers → Email**, desligar *Allow new users to sign up* impede que outras pessoas criem conta no seu projeto. **Atenção:** isso vale para o projeto inteiro — se seus outros apps permitem cadastro, deixe ligado. Mesmo ligado, cada conta só enxerga as próprias linhas (as regras RLS do SQL garantem isso).

### Parte 2 — GitHub (uma vez)

1. Em github.com, **New repository** — por exemplo `atelie`. Deixe **Public**: o GitHub Pages gratuito só publica repositórios públicos (em privado, exige plano pago). Seus textos **não** ficam no repositório, só o código.
2. Descompacte `atelie-do-pensamento-fontes.zip`. No repositório, **Add file → Upload files** e arraste as pastas `docs`, `src`, `tools`, `supabase` e o `LEIAME.md`. Clique em **Commit changes**.
3. Abra `docs/config-nuvem.js` no GitHub, clique no lápis (**Edit**), preencha `url` e `chave` com o que copiou do Supabase e faça **Commit**. (Pode pular: nesse caso o Ateliê pede URL e chave na tela, uma vez por aparelho.)
4. **Settings → Pages → Build and deployment**: *Source* = **Deploy from a branch**; *Branch* = **main** e pasta **/docs** → **Save**. Em um ou dois minutos o endereço aparece no topo dessa página.

### Parte 3 — Em cada aparelho

1. Abra o endereço do GitHub Pages → **Dados e ajustes → Sincronização na nuvem** → e-mail e senha → **Entrar e sincronizar**.
2. No celular, use *Adicionar à tela de início* (Safari: botão Compartilhar; Chrome: menu ⋮) para abrir como um app.

**Levando o que você já escreveu:** os dados atuais estão no navegador associado ao arquivo que você abria antes, não ao novo endereço. Então: no arquivo antigo, *Dados e ajustes → Exportar cópia completa (JSON)*; no endereço novo, *Importar cópia*; depois entre com e-mail e senha — o que foi importado sobe para a nuvem. Faça isso no primeiro aparelho, antes de entrar nos outros.

### Atualizar o código depois

Edite os arquivos em `src/` e gere de novo com `python3 tools/montar.py` — ele atualiza `docs/index.html` (e não sobrescreve o seu `docs/config-nuvem.js` preenchido). Envie os arquivos alterados ao GitHub; o Pages republica sozinho. Atualizar o código não mexe nos seus dados.

### Segurança, em resumo

- A chave pública e a URL podem ficar visíveis no repositório: sozinhas não dão acesso a nada. O que protege seus dados é a sua senha mais as regras RLS (cada usuário só lê e grava as próprias linhas).
- A senha não fica guardada no navegador; só a sessão, que é renovada automaticamente. Em aparelhos de outras pessoas, use *Sair neste aparelho*.
- Projetos gratuitos do Supabase podem ser pausados após alguns dias sem uso. Se a sincronização parar, verifique no painel do Supabase. Os dados continuam no navegador enquanto isso.
- Continue exportando uma cópia JSON de vez em quando.

## Seus dados

- Tudo é salvo automaticamente no `localStorage` do navegador, à medida que você escreve.
- Os dados **não** passam entre navegadores nem dispositivos, e podem ser apagados se você limpar os dados de navegação ou usar janela anônima.
- Em **Dados e ajustes**: exportar cópia completa (JSON), importar (com validação e confirmação antes de substituir), exportar anotações legíveis (Markdown) e apagar tudo (exige digitar APAGAR).
- Recomendação: exporte uma cópia JSON toda semana em que escrever bastante. O painel avisa quando a última cópia tem mais de duas semanas.

## Novidades da versão 1.1 — confronto de ideias

Nada da versão 1.0 foi removido. Foram acrescentados:

- **Arena de debates** — 8 grandes divergências (tradição × reforma, natureza humana, desigualdade, mercado, sentido da vida, liberdade de expressão, indivíduo × comunidade, fundamento da moral). Cada posição aparece na sua *melhor versão*, com argumentos, autores, obras e críticas que recebe. Você marca onde está antes e depois de ler, reage a cada posição, escreve a melhor versão do lado de que discorda (*steelman*) e registra o que o faria mudar de ideia. O histórico mostra se você se moveu.
- **Exame de convicções** — escolha uma ideia em que você acredita e examine-a em 8 passos: de onde veio, em que se apoia, que visão de mundo pressupõe, o teste do duplo padrão, a paralaxe (vivo de acordo com ela?), a melhor objeção, o que mudaria sua opinião e um veredito (manter, ajustar, suspender, abandonar). Qualquer tese de debate, contraponto ou ficha pode ser enviada para exame.
- **Contrapontos nas unidades** — 10 unidades ganharam um bloco “e se o outro lado tiver razão?”: você se posiciona, lê a melhor objeção, posiciona-se de novo e anota o que pesou.
- **Reações em todo o conteúdo** — perspectivas, pensadores, leituras divergentes e debates aceitam “Me convence / Em parte / Não me convence”, sempre com um “por quê”.
- **Aba Concordâncias** (em Desenvolvimento) — um espelho das suas afinidades: com que tradições você mais concorda, onde mudou de posição, suas convicções examinadas e o que você ainda não justificou.
- **4 novas unidades** — *Visões de mundo* (visões restrita e irrestrita de Sowell, fundamentos morais de Haidt), *As camadas da personalidade* (as 12 camadas de Olavo de Carvalho, com ressalvas e comparação com Big Five e McAdams), *O sentido diante do sofrimento* (Frankl, Peterson, Dostoiévski, Camus, budismo, crítica marxista) e *Por que conservar?* (a cerca de Chesterton, Burke, Hayek, Oakeshott, Scruton, Weil, e as críticas de Mill, Paine e Marx).
- **27 novos pensadores** (46 no total), entre eles Burke, Chesterton, Tocqueville, Oakeshott, Scruton, Hayek, Sowell, Olavo de Carvalho, Jordan Peterson, C. S. Lewis, Dostoiévski, Soljenítsin, Pascal, Tomás de Aquino, MacIntyre, Simone Weil, Frankl, Haidt, Ortega y Gasset, Voegelin — e, como contraponto, Rousseau, Paine, Mill, Rawls, Foucault, Nietzsche, Kierkegaard. Cada ficha tem “Quem discorda — e por quê” e filtro por afinidade.
- **Biblioteca com 185 obras** (eram 52): Dostoiévski, Tolstói, Turguêniev, Gógol, Tchekhov, Bulgákov, Grossman, Kundera, Buzzati, *Flores para Algernon*, distopias (*Admirável mundo novo*, *Fahrenheit 451*, *Nós*, *Submissão*, *A revolução dos bichos*…), clássicos, literatura católica, brasileira e latino-americana, e ensaios conservadores e liberais ao lado de seus críticos. Muitas obras têm *leituras divergentes* (como leitores de tradições diferentes a interpretam) e uma obra “em diálogo”.
- **4 novas perguntas** (24 no total), **desafio do dia** no painel e 2 novos conceitos no mapa (tradição e sagrado).

## O que existe nesta versão

**Percurso** — 6 etapas, 14 módulos, 22 unidades completas e 33 unidades “em preparação” descritas por sua pergunta, que podem ser investigadas na ferramenta Da intuição à ideia. Cada unidade combina: pergunta central, por que importa, primeira impressão, situação concreta, ideia fundamental, perspectivas (com o que permitem ver e seus limites), exercícios (escrita com comentário que só abre depois de tentar, múltipla escolha com retorno por opção, classificação comentada), organização do raciocínio, aplicação, comparação antes/agora, conexões, leituras, síntese pessoal, anotações e próximos caminhos. Status: iniciada, concluída, revisitada.

**Perguntas fundamentais** — 24 perguntas por tema e profundidade, com introdução, caminhos, atividade, conexões e leituras.

**Oficina de interpretação** — 5 casos (doméstico, trabalho, sistema urbano, histórico-científico, linguagem) em 9 etapas, com nova informação revelada no meio, perspectivas, vieses, conclusão com grau de confiança e revisão do raciocínio.

**Laboratório de expressão** — 8 exercícios (A a H), com tentativas datadas para comparar ao longo do tempo.

**Da intuição à ideia** — registro livre guardado à parte; 8 etapas guiadas; versão organizada lado a lado com o original; exemplo guiado; exportação em Markdown.

**Biblioteca de ideias** — 185 obras (literatura brasileira e mundial, teatro, poesia, ensaio, filosofia, clássicos, divulgação científica, testemunho), com os elementos pedidos para cada recomendação; busca por assunto, tipo, afinidade e situação de leitura; leituras divergentes; obras em diálogo; caderno por obra.

**Pensadores** — 46 fichas (problema, contexto, ideia, exemplo, o que permite ver, limites, quem discorda, relações, como usar e a simplificação assumida), com filtro por afinidade.

**Mapa de ideias** — 28 conceitos e 56 conexões explicadas (por que faz sentido / onde deixa de valer), visualizadas como grafo centrado no conceito escolhido; você pode criar conceitos e conexões.

**Caderno e Desenvolvimento** — tudo o que você escreveu reunido; “mesma pergunta, outra vez”; revisões periódicas (unidades concluídas voltam após alguns dias com uma situação nova); onze aspectos do pensamento para auto-observação, sem notas.

**Também:** busca interna (inclui seus próprios textos), itens guardados, tema claro/escuro, texto maior, navegação por teclado, respeito a “reduzir movimento”, layout para celular e computador.

## Arquitetura

```
src/
  index.html                 carrega CSS e scripts, nesta ordem
  css/estilos.css            tokens de cor (claro/escuro), tipografia, componentes
  js/conteudo/               conteúdo educacional, só dados (window.ATELIE)
    00-base.js               etapas, módulos, eixos, aspectos, afinidades, escala
    10-…, 11-…, 15-…, 20-…, 30-…, 40-…   unidades
    45-contrapontos.js       blocos de contraponto inseridos nas unidades
    50-, 51-perguntas…       perguntas fundamentais
    55-debates.js            arena de debates
    60- a 63-biblioteca…     obras (v1.0, literatura, ensaios, ajustes e ligações)
    70-, 75-pensadores…      fichas de pensadores
    80-oficina.js    90-laboratorio-mapa.js
    95-exame-conviccoes.js   roteiro do exame de convicções
  js/app/                    interface (window.AP)
    01-nucleo.js             armazenamento, rotas (#/…), campos com salvamento, espelho do texto, diálogos
    02-percurso.js           boas-vindas, painel, percurso, unidades, pensadores
    03-explorar.js           perguntas, biblioteca, oficina
    04-ferramentas.js        da intuição à ideia, laboratório, mapa
    05-caderno-dados.js      caderno, desenvolvimento, busca, dados, sobre
    06-confronto.js          debates, exame de convicções, concordâncias, desafio do dia
    08-nuvem.js              sincronização opcional com o Supabase (fetch, sem bibliotecas)
    07-iniciar.js            inicialização (carregado por último)
  config-nuvem.js            URL e chave pública do Supabase (opcional; não é embutido no arquivo único)
docs/                        versão publicada no GitHub Pages (gerada por montar.py)
supabase/atelie-supabase.sql tabelas, regras de segurança (RLS), histórico e função de gravação
tools/
  montar.py                  gera dist/atelie-do-pensamento.html e docs/index.html (arquivo único)
  testar-nuvem.py            teste da sincronização com um Supabase simulado (dois aparelhos)
  validar-conteudo.js        confere todas as referências cruzadas do conteúdo
  testar.py                  teste automatizado no Chromium (Playwright)
```

Para acrescentar uma unidade: escreva-a num arquivo de conteúdo (veja os tipos de bloco no topo de `10-etapa1-obvio.js`), coloque o id na lista `unidades` de um módulo em `00-base.js`, rode `node tools/validar-conteudo.js` e `python3 tools/montar.py`. O nome do projeto está em `ATELIE.meta.nome` (`00-base.js`).

Sem dependências externas: nenhuma biblioteca, fonte da web ou análise de uso. A única chamada de rede possível é a sincronização com o seu Supabase, e só quando você a liga.

## Sobre inteligência artificial

O Ateliê **não** usa IA. O retorno sobre textos abertos vem de comentários e estruturas-modelo escritos para cada atividade, de listas de verificação e do “Espelho do texto” — uma leitura mecânica, feita no navegador, que conta conectivos, exemplos, generalizações e termos vagos. Ele é sempre identificado como tal.

## Limitações conhecidas

- Sem a sincronização ligada, os dados ficam presos ao navegador e ao endereço do arquivo.
- A sincronização trata o conjunto de dados como um bloco: se dois aparelhos editarem ao mesmo tempo, você escolhe uma versão inteira (a outra fica no histórico); ela não junta as duas automaticamente.
- Importar substitui os dados (não há mesclagem de duas cópias).
- Etapas 2 a 6 têm 1 a 4 unidades completas cada; as demais estão planejadas.
- O retorno automático não avalia o conteúdo das ideias.
- Resumir um autor é sempre simplificar. As fichas e os debates tentam apresentar cada posição pela melhor versão que seus defensores dariam, mas a seleção de autores, argumentos e obras é uma escolha editorial — confira nas fontes.
- O espelho de afinidades conta só suas reações; ele não mede o que você pensa, e não há “resultado” certo.
- A busca é por palavras (sem acento e sem sinônimos).
- O mapa mostra um conceito e seus vizinhos por vez, não a rede inteira.

## Melhorias possíveis

Novas unidades para os módulos planejados; mesclagem na importação; leitura de um arquivo de backup automático numa pasta (File System Access API, onde houver); versão instalável offline (PWA, exige servir por http); mapa com vista da rede inteira; mais casos da Oficina (incluindo literários); revisão espaçada com intervalos crescentes; integração opcional e explícita com um modelo de IA, desligada por padrão, para comentários sobre textos.
