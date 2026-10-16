/* =========================================================
   Perguntas fundamentais, Biblioteca de ideias e
   Oficina de interpretação
   ========================================================= */
(function () {
  'use strict';
  const A = window.ATELIE, AP = window.AP, esc = AP.esc;

  /* filtros de página guardados apenas na sessão (não poluem os dados) */
  const filtros = { perguntas: { tema: '', nivel: '', meus: false }, biblioteca: { texto: '', tema: '', tipo: '', status: '', afinidade: '' } };

  /* ------------------------- perguntas ------------------------- */
  AP.rota('perguntas', () => {
    const f = filtros.perguntas;
    const interesses = AP.S.preferencias.interesses;
    let lista = A.perguntas.filter((q) => (!f.tema || q.tema === f.tema) && (!f.nivel || String(q.nivel) === f.nivel) && (!f.meus || q.eixos.some((x) => interesses.includes(x))));
    const grupos = A.temasPerguntas.map((t) => {
      const qs = lista.filter((q) => q.tema === t);
      if (!qs.length) return '';
      return `<section class="grupo-perguntas"><h2>${esc(t)}</h2><div class="grade-perguntas">${qs.map((q) => {
        const feita = AP.S.perguntas[q.id] && (AP.S.perguntas[q.id].atividade || AP.S.perguntas[q.id].notas);
        return `<a class="cartao-pergunta" href="#/pergunta/${q.id}"><span class="cpq-nivel nivel-${q.nivel}">${esc(A.niveis[q.nivel])}</span><span class="cpq-texto">${esc(q.pergunta)}</span>${feita ? `<span class="chip chip-concluida">${AP.icone('check')} Você já escreveu aqui</span>` : ''}</a>`;
      }).join('')}</div></section>`;
    }).join('');
    const chip = (grupo, valor, rotulo, ativo) => `<button type="button" class="filtro ${ativo ? 'ativo' : ''}" data-acao="filtro-perguntas" data-grupo="${grupo}" data-valor="${esc(valor)}" aria-pressed="${ativo}">${esc(rotulo)}</button>`;
    return `<div class="pagina pagina-perguntas">
      ${AP.cabecalho({ titulo: 'Perguntas fundamentais', sub: 'Pontos de partida para investigações próprias. Agrupadas por tema e por quanto contexto ajudam a ter — não existe uma ordem certa.' })}
      <div class="barra-filtros" role="group" aria-label="Filtrar por tema">${chip('tema', '', 'Todos os temas', !f.tema)}${A.temasPerguntas.map((t) => chip('tema', t, t, f.tema === t)).join('')}</div>
      <div class="barra-filtros" role="group" aria-label="Filtrar por profundidade">${chip('nivel', '', 'Qualquer profundidade', !f.nivel)}${Object.entries(A.niveis).map(([k, v]) => chip('nivel', k, v, f.nivel === k)).join('')}
        ${interesses.length ? chip('meus', f.meus ? '' : '1', 'Ligadas aos meus interesses', f.meus) : ''}</div>
      <p class="contagem" aria-live="polite">${AP.plural(lista.length, 'pergunta', 'perguntas')}</p>
      ${grupos || '<p class="vazio">Nenhuma pergunta com esses filtros. <button type="button" class="btn-link" data-acao="limpar-filtros-perguntas">Limpar filtros</button></p>'}
    </div>`;
  });
  AP.acao('filtro-perguntas', (el) => {
    const g = el.dataset.grupo;
    if (g === 'meus') filtros.perguntas.meus = !filtros.perguntas.meus;
    else filtros.perguntas[g] = el.dataset.valor;
    AP._semRolagem = true; AP.renderizar();
  });
  AP.acao('limpar-filtros-perguntas', () => { filtros.perguntas = { tema: '', nivel: '', meus: false }; AP.renderizar(); });

  AP.rota('pergunta', (args) => {
    const q = A.perguntas.find((x) => x.id === args[0]);
    if (!q) return AP.rotas.naoEncontrada();
    return `<article class="pagina pagina-pergunta">
      ${AP.cabecalho({ trilha: `<a href="#/perguntas">Perguntas fundamentais</a> / ${esc(q.tema)}`, titulo: esc(q.pergunta), sub: `<span class="cpq-nivel nivel-${q.nivel}">${esc(A.niveis[q.nivel])}</span>`, extra: `<div class="cab-acoes">${AP.botaoFavorito('q:' + q.id)}<button type="button" class="btn btn-icone" data-acao="investigar-pergunta" data-pergunta="${esc(q.pergunta)}" data-titulo="${esc(q.pergunta)}">${AP.icone('ideia')}<span>Investigar com Da intuição à ideia</span></button></div>` })}
      <section class="b b-importa"><h2 class="rotulo">Introdução</h2>${q.intro}</section>
      <section class="b"><h2>Caminhos possíveis de investigação</h2><ul class="caminhos">${q.caminhos.map((c) => `<li>${esc(c)}</li>`).join('')}</ul></section>
      <section class="b b-escrita"><h2>Atividade</h2><p class="b-prompt">${esc(q.atividade)}</p>${AP.campo(['perguntas', q.id, 'atividade'], { rows: 6, rotuloSr: 'Atividade' })}</section>
      <section class="b b-conexoes"><h2>Conexões</h2><div class="lista-refs">${q.conexoes.map((r) => AP.linkRef(r)).join('')}</div></section>
      ${q.leituras.length ? `<section class="b b-leituras"><h2>Leituras relacionadas</h2><p class="campo-dica">Opcionais.</p><div class="grade-livros">${q.leituras.map(AP.cartaoLivro).join('')}</div></section>` : ''}
      <details class="anotacoes" ${AP.S.perguntas[q.id] && AP.S.perguntas[q.id].notas ? 'open' : ''}><summary>${AP.icone('nota')} Minhas anotações sobre esta pergunta</summary>${AP.campo(['perguntas', q.id, 'notas'], { rows: 5 })}</details>
    </article>`;
  });

  /* ------------------------- biblioteca ------------------------- */
  const temasLivros = () => [...new Set(A.livros.flatMap((b) => b.temas))].sort((a, b) => a.localeCompare(b, 'pt'));
  AP.rota('biblioteca', () => {
    const f = filtros.biblioteca;
    const tn = AP.norm(f.texto);
    const lista = A.livros.filter((b) => {
      const st = (AP.S.livros[b.id] || {}).status || '';
      if (f.tema && !b.temas.includes(f.tema)) return false;
      if (f.tipo && b.tipo !== f.tipo) return false;
      if (f.afinidade && !(b.afinidades || []).includes(f.afinidade)) return false;
      if (f.status === 'sem' ? st : f.status && st !== f.status) return false;
      if (tn && !AP.norm([b.titulo, b.autor, b.temas.join(' '), b.porque, b.encontrar, b.origem].join(' ')).includes(tn)) return false;
      return true;
    });
    const contStatus = (id) => A.livros.filter((b) => (AP.S.livros[b.id] || {}).status === id).length;
    const temas = temasLivros();
    AP.depoisRender = () => {
      const inp = document.getElementById('busca-livros');
      if (inp && f.texto) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
    };
    return `<div class="pagina pagina-biblioteca">
      ${AP.cabecalho({ titulo: 'Biblioteca de ideias', sub: `${A.livros.length} obras — romances, contos, peças, poesia, ensaios, filosofia, divulgação científica, testemunhos —, de várias tradições e campos de pensamento. Procure por assunto, não só por título. Nada aqui é obrigatório, e não há contagem de livros lidos.` })}
      <div class="filtros-livros">
        <div class="campo-busca"><label for="busca-livros" class="sr">Buscar na biblioteca</label>${AP.icone('busca')}<input id="busca-livros" type="search" placeholder="Título, autor ou assunto…" value="${esc(f.texto)}" autocomplete="off"></div>
        <div class="selects">
          <label>Tipo <select id="filtro-tipo"><option value="">Todos</option>${A.tiposObra.filter((t) => A.livros.some((b) => b.tipo === t)).map((t) => `<option ${f.tipo === t ? 'selected' : ''}>${esc(t)}</option>`).join('')}</select></label>
          <label>Afinidade <select id="filtro-afinidade"><option value="">Todas</option>${Object.entries(A.afinidades).filter(([k]) => A.livros.some((b) => (b.afinidades || []).includes(k))).map(([k, n]) => `<option value="${k}" ${f.afinidade === k ? 'selected' : ''}>${esc(n)}</option>`).join('')}</select></label>
          <label>Situação <select id="filtro-status"><option value="">Todas</option><option value="sem" ${f.status === 'sem' ? 'selected' : ''}>Sem marcação</option>${A.statusLeitura.map((s) => `<option value="${s.id}" ${f.status === s.id ? 'selected' : ''}>${esc(s.nome)} (${contStatus(s.id)})</option>`).join('')}</select></label>
        </div>
      </div>
      <div class="barra-filtros temas-livros" role="group" aria-label="Descobrir por assunto"><span class="rotulo">Por assunto:</span>
        <button type="button" class="filtro ${!f.tema ? 'ativo' : ''}" data-acao="filtro-tema-livro" data-valor="" aria-pressed="${!f.tema}">todos</button>
        ${temas.map((t) => `<button type="button" class="filtro ${f.tema === t ? 'ativo' : ''}" data-acao="filtro-tema-livro" data-valor="${esc(t)}" aria-pressed="${f.tema === t}">${esc(t)}</button>`).join('')}</div>
      <p class="contagem" aria-live="polite">${AP.plural(lista.length, 'obra', 'obras')}</p>
      <div class="grade-livros grade-livros-grande">${lista.map((b) => AP.cartaoLivro(b.id)).join('') || '<p class="vazio">Nenhuma obra com esses filtros.</p>'}</div>
    </div>`;
  });
  AP.acao('filtro-tema-livro', (el) => { filtros.biblioteca.tema = el.dataset.valor; AP._semRolagem = true; AP.renderizar(); });
  let tBusca;
  document.addEventListener('input', (e) => {
    if (e.target.id === 'busca-livros') { clearTimeout(tBusca); const v = e.target.value; tBusca = setTimeout(() => { filtros.biblioteca.texto = v; AP._semRolagem = true; AP.renderizar(); }, 250); }
  });
  document.addEventListener('change', (e) => {
    if (e.target.id === 'filtro-tipo') { filtros.biblioteca.tipo = e.target.value; AP._semRolagem = true; AP.renderizar(); }
    if (e.target.id === 'filtro-afinidade') { filtros.biblioteca.afinidade = e.target.value; AP._semRolagem = true; AP.renderizar(); }
    if (e.target.id === 'filtro-status') { filtros.biblioteca.status = e.target.value; AP._semRolagem = true; AP.renderizar(); }
  });

  AP.rota('livro', (args) => {
    const b = A.livros.find((x) => x.id === args[0]);
    if (!b) return AP.rotas.naoEncontrada();
    const reg = AP.S.livros[b.id] || {};
    /* onde a obra é recomendada */
    const ondeU = Object.values(A.unidades).filter((u) => (b.unidades || []).includes(u.id) || u.blocos.some((bl) => bl.t === 'leituras' && bl.ids.includes(b.id))).map((u) => AP.linkRef('u:' + u.id));
    const ondeD = (A.debates || []).filter((d) => d.polos.some((po) => po.obras.includes(b.id))).map((d) => AP.linkRef('d:' + d.id));
    const ondeP = A.pensadores.filter((p) => (p.livros || []).includes(b.id)).map((p) => AP.linkRef('p:' + p.id));
    const contra = b.contraponto && A.livros.find((x) => x.id === b.contraponto);
    const contraDe = A.livros.filter((x) => x.contraponto === b.id && x.id !== b.contraponto);
    const ondeQ = A.perguntas.filter((q) => q.leituras.includes(b.id)).map((q) => AP.linkRef('q:' + q.id));
    const reflexoes = ((AP.S.lab['x-h'] || {}).tentativas || []).filter((t) => t.livro === b.id);
    const atualH = (AP.S.lab['x-h'] || {}).extra || {};
    const status = A.statusLeitura.map((s) => `<label class="opcao-radio"><input type="radio" name="status-livro" value="${s.id}" ${reg.status === s.id ? 'checked' : ''} data-acao-status="${b.id}"><span>${esc(s.nome)}</span></label>`).join('');
    const sec = (t, h) => h ? `<section class="ficha-sec"><h2>${t}</h2>${h}</section>` : '';
    return `<article class="pagina pagina-ficha pagina-livro">
      ${AP.cabecalho({ trilha: '<a href="#/biblioteca">Biblioteca de ideias</a>', titulo: esc(b.titulo), sub: `${esc(b.autor)} · ${esc(b.ano)} · ${esc(b.tipo)} · ${esc(b.origem)}`, extra: `<div class="temas">${b.temas.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}${(b.afinidades || []).map((a) => `<span class="tag tag-afinidade">${esc(A.afinidades[a])}</span>`).join('')}</div><div class="cab-acoes">${AP.botaoFavorito('b:' + b.id)}</div>` })}
      <fieldset class="status-leitura"><legend>Situação de leitura</legend>${status}${reg.status ? `<button type="button" class="btn-link" data-acao="limpar-status-livro" data-id="${b.id}">Limpar</button>` : ''}</fieldset>
      ${sec('Por que vale a leitura', `<p>${b.porque}</p>`)}
      ${sec('O que você pode encontrar', `<p>${b.encontrar}</p>`)}
      ${sec('A conexão com o estudo', `<p>${b.conexao}</p>`)}
      ${sec('Acessibilidade', `<p>${b.acesso}</p>`)}
      ${sec('Como ler com proveito', `<p class="campo-dica">Perguntas para levar à leitura — sem transformá-la em tarefa.</p><ul class="caminhos">${b.perguntas.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>`)}
      ${b.alternativa ? sec('Uma alternativa', `<p>${b.alternativa}</p>`) : ''}
      ${b.traducao ? sec('Sobre traduções', `<p>${b.traducao}</p>`) : ''}
      ${sec('Como ter acesso', `<p>${b.legal}</p>`)}
      ${b.leituras && b.leituras.length ? `<section class="ficha-sec leituras-divergentes"><h2>Leituras divergentes</h2><p class="campo-dica">A mesma obra, lida de maneiras diferentes. Qual delas se aproxima da sua — e qual o incomoda?</p>
        ${b.leituras.map((l, i) => `<div class="leitura-div"><p class="rotulo">${esc(l.quem)}</p><p>${l.html}</p>${AP.reacao('leit:' + b.id + ':' + i, `${b.titulo} — ${AP.semHtml(l.quem)}`, '#/livro/' + b.id, 'Esta leitura convence você?')}</div>`).join('')}
        ${AP.campo(['livros', b.id, 'minhaLeitura'], { rotulo: 'A minha leitura', rows: 3, dica: 'Depois de ler a obra: o que você vê nela que nenhuma das leituras acima captura?' })}</section>` : ''}
      ${contra || contraDe.length ? `<section class="ficha-sec"><h2>Em diálogo com</h2><p class="campo-dica">Obras que respondem a esta, a contestam ou tratam o mesmo tema por outro ângulo. Ler as duas é uma forma de confrontar ideias.</p><div class="grade-livros">${(contra ? [contra] : []).concat(contraDe).map((x) => AP.cartaoLivro(x.id)).join('')}</div></section>` : ''}
      ${ondeU.length || ondeQ.length || ondeD.length || ondeP.length ? sec('Onde aparece', `<div class="lista-refs">${ondeU.join('')}${ondeQ.join('')}${ondeD.join('')}${ondeP.join('')}</div>`) : ''}
      <section class="ficha-sec caderno-livro"><h2>Meu caderno sobre esta obra</h2>
        ${AP.campo(['livros', b.id, 'impressoes'], { rotulo: 'Impressões pessoais', rows: 4 })}
        ${AP.campo(['livros', b.id, 'perguntas'], { rotulo: 'Perguntas que a leitura despertou', rows: 3 })}
        ${AP.campo(['livros', b.id, 'conexoes'], { rotulo: 'Conexões com outros temas do percurso', rows: 3 })}
        <p class="campo-dica">Para uma reflexão mais estruturada, use o exercício <a href="#/lab/x-h">Da leitura à reflexão própria</a>${atualH.livro === b.id ? ' (você já começou um com esta obra)' : ''}.</p>
        ${reflexoes.length ? `<h3>Reflexões salvas no Laboratório</h3>${reflexoes.map((t) => `<div class="tentativa"><p class="rotulo">${AP.fmtData(t.data, true)}</p><p>${esc(t.campos.reflexao || t.campos.ponto || '')}</p></div>`).join('')}` : ''}
      </section>
    </article>`;
  });
  document.addEventListener('change', (e) => {
    if (e.target.dataset && e.target.dataset.acaoStatus) {
      const id = e.target.dataset.acaoStatus;
      AP.S.livros[id] = AP.S.livros[id] || {};
      AP.S.livros[id].status = e.target.value;
      AP.S.livros[id].statusEm = AP.agora();
      AP.salvar();
      AP._semRolagem = true; const y = scrollY; AP.renderizar(); scrollTo(0, y);
    }
  });
  AP.acao('limpar-status-livro', (el) => {
    if (AP.S.livros[el.dataset.id]) delete AP.S.livros[el.dataset.id].status;
    AP.salvar(); AP._semRolagem = true; const y = scrollY; AP.renderizar(); scrollTo(0, y);
  });

  /* ------------------------- oficina de interpretação ------------------------- */
  const ETAPAS_CASO = ['Situação', 'Primeira interpretação', 'Fatos e lacunas', 'Hipóteses', 'Nova informação', 'Perspectivas', 'Vieses e pressupostos', 'Conclusão provisória', 'O que mudou'];

  AP.rota('oficina', () => `<div class="pagina pagina-oficina">
    ${AP.cabecalho({ titulo: 'Oficina de interpretação', sub: 'Situações fictícias ou históricas para investigar em nove etapas: você registra sua leitura antes de ver informações novas e outras perspectivas. Em geral, não existe uma única solução indiscutível — o que se avalia é a qualidade do raciocínio.' })}
    <ol class="etapas-oficina">${ETAPAS_CASO.map((e) => `<li>${esc(e)}</li>`).join('')}</ol>
    <div class="grade-casos">${A.casos.map((c) => {
      const r = AP.S.casos[c.id];
      const est = r ? (r.concluido ? `<span class="chip chip-concluida">${AP.icone('check')} Concluído</span>` : `<span class="chip chip-iniciada">Etapa ${r.etapa} de 9</span>`) : '';
      return `<a class="cartao-caso" href="#/caso/${c.id}"><span class="cc-escala">${esc(c.escala)} · ${esc(c.tipo)}</span><span class="cc-nome">${esc(c.titulo)}</span><span class="cc-resumo">${esc(c.resumo)}</span>${est}</a>`;
    }).join('')}</div></div>`);

  AP.rota('caso', (args) => {
    const c = A.casos.find((x) => x.id === args[0]);
    if (!c) return AP.rotas.naoEncontrada();
    const r = (AP.S.casos[c.id] = AP.S.casos[c.id] || { etapa: 1, campos: {}, revelados: {} });
    r.revelados = r.revelados || {};
    const e = Math.min(9, Math.max(1, r.etapa || 1));
    const k = (campo) => ['casos', c.id, 'campos', campo];
    const val = (campo) => (r.campos || {})[campo] || '';
    const revelado = (n) => r.revelados[n];
    const botaoRevelar = (n, rot) => revelado(n) ? '' : `<button type="button" class="btn btn-secundario" data-acao="revelar-caso" data-caso="${c.id}" data-n="${n}">${esc(rot)}</button>`;
    let corpo = '';
    switch (e) {
      case 1: corpo = `<div class="b b-situacao">${c.situacao}</div><p class="campo-dica">Leia com calma. Nada de explicação ainda.</p>`; break;
      case 2: corpo = `<details class="relembrar"><summary>Reler a situação</summary>${c.situacao}</details>
        <p class="b-prompt">O que você acha que está acontecendo aqui? Escreva sua interpretação inicial, do jeito que ela vier — inclusive se já tomou partido.</p>${AP.campo(k('inicial'), { rows: 6, rotuloSr: 'Interpretação inicial' })}`; break;
      case 3: corpo = `<details class="relembrar"><summary>Reler a situação</summary>${c.situacao}</details>
        ${AP.campo(k('fatos'), { rotulo: 'Que fatos estão disponíveis?', dica: 'Só o que poderia ser constatado, sem interpretação.', rows: 4 })}
        ${AP.campo(k('lacunas'), { rotulo: 'Que informações estão faltando?', dica: 'O que você precisaria saber para interpretar melhor?', rows: 4 })}
        ${botaoRevelar(3, 'Comparar com uma lista possível')}
        ${revelado(3) ? `<div class="revelado"><div class="duas-colunas"><div><p class="rotulo">Fatos disponíveis</p><ul>${c.fatos.disponiveis.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div><div><p class="rotulo">Informações ausentes</p><ul>${c.fatos.ausentes.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div></div></div>` : ''}`; break;
      case 4: corpo = `${AP.campo(k('hipoteses'), { rotulo: 'Formule pelo menos duas hipóteses explicativas diferentes', dica: 'Hipóteses diferentes de verdade, e não variações da mesma ideia. Uma por linha.', rows: 6 })}
        ${botaoRevelar(4, 'Ver outras hipóteses possíveis')}
        ${revelado(4) ? `<div class="revelado"><p class="rotulo">Outras hipóteses possíveis</p><ul>${c.hipoteses.map((x) => `<li>${esc(x)}</li>`).join('')}</ul><p class="campo-dica">Alguma delas não tinha passado pela sua cabeça? Acrescente ao seu campo se quiser.</p></div>` : ''}`; break;
      case 5: corpo = revelado(5)
        ? `<div class="b b-situacao"><p class="rotulo">Nova informação</p>${c.novaInfo}</div><p class="b-prompt">${esc(c.novaInfoPrompt)}</p>${AP.campo(k('mudanca'), { rotulo: 'O que muda — e o que não muda — na sua leitura?', rows: 5 })}`
        : `<p class="b-prompt">Antes de ver a nova informação, releia suas hipóteses. Qual parecia mais provável?</p><blockquote class="citacao-propria">${esc(val('hipoteses') || 'Você ainda não registrou hipóteses.').replace(/\n/g, '<br>')}</blockquote>${botaoRevelar(5, 'Revelar a nova informação')}`; break;
      case 6: corpo = `<div class="grade-persp">${c.perspectivas.map((p) => `<article class="persp"><h3>${esc(p.nome)}</h3><p>${p.html}</p></article>`).join('')}</div>
        ${AP.campo(k('perspectivas'), { rotulo: 'Qual perspectiva ilumina mais a situação? O que cada uma deixa de fora?', rows: 5 })}`; break;
      case 7: corpo = `${AP.campo(k('vieses'), { rotulo: 'Que pressupostos ou vieses você percebe — nos personagens e em você?', dica: 'Pense em quem você tomou partido, que palavras o influenciaram, que informações você supôs.', rows: 5 })}
        ${botaoRevelar(7, 'Ver alguns vieses e pressupostos possíveis')}
        ${revelado(7) ? `<div class="revelado"><ul class="lista-vieses">${c.vieses.map((v) => `<li><strong>${esc(v.nome)}.</strong> ${v.html}</li>`).join('')}</ul></div>` : ''}`; break;
      case 8: corpo = `${AP.campo(k('conclusao'), { rotulo: 'Sua conclusão provisória', dica: 'Pode ser uma tese, uma distinção mais precisa ou uma pergunta melhor.', rows: 6, espelho: true })}
        <div class="campo"><label class="campo-rotulo" for="conf-${c.id}">Com que grau de confiança?</label>
        <select id="conf-${c.id}" data-k="casos|${c.id}|campos|confianca"><option value="">Escolha…</option>${['Baixa — é uma aposta', 'Média — há boas razões, mas faltam informações', 'Alta — as evidências convergem'].map((o) => `<option ${val('confianca') === o ? 'selected' : ''}>${o}</option>`).join('')}</select></div>
        ${AP.campo(k('derrubaria'), { rotulo: 'O que poderia derrubar essa conclusão?', rows: 3 })}`; break;
      case 9: {
        const crit = A.criteriosOficina.map((t, i) => `<label class="opcao-check"><input type="checkbox" data-k="casos|${c.id}|campos|crit${i}" ${r.campos['crit' + i] ? 'checked' : ''}><span>${esc(t)}</span></label>`).join('');
        corpo = `<div class="comparacao"><div class="comp-antes"><p class="rotulo">Interpretação inicial</p><blockquote>${esc(val('inicial') || '—').replace(/\n/g, '<br>')}</blockquote></div>
          <div class="comp-agora"><p class="rotulo">Conclusão provisória${val('confianca') ? ' · confiança ' + esc(val('confianca').split(' — ')[0].toLowerCase()) : ''}</p><blockquote>${esc(val('conclusao') || '—').replace(/\n/g, '<br>')}</blockquote></div></div>
          ${AP.campo(k('reflexao'), { rotulo: 'O que mudou entre a primeira leitura e agora? O que provocou a mudança?', dica: 'Se nada mudou, vale perguntar: foi porque a primeira leitura resistiu bem, ou porque não a deixei ser testada?', rows: 5 })}
          <section class="autoavaliacao"><h3>Revisão do raciocínio</h3><p class="campo-dica">Avalie o processo, não a conclusão. Marque o que você fez — os itens desmarcados são pistas para a próxima vez.</p><div class="lista-checks">${crit}</div></section>
          <section class="b b-conexoes"><h3>Para aprofundar</h3><p>${c.aprofundar.html}</p><div class="lista-refs">${c.aprofundar.refs.map((x) => AP.linkRef(x)).join('')}</div></section>
          ${r.concluido ? `<p class="conclusao-info">${AP.icone('check')} Caso concluído em ${AP.fmtData(r.concluidoEm)}.</p>` : `<button type="button" class="btn btn-primario" data-acao="concluir-caso" data-caso="${c.id}">${AP.icone('check')} Concluir o caso</button>`}`;
        break;
      }
    }
    const passos = ETAPAS_CASO.map((nome, i) => `<li class="${i + 1 === e ? 'atual' : ''} ${i + 1 < e ? 'feito' : ''}"><button type="button" data-acao="etapa-caso" data-caso="${c.id}" data-n="${i + 1}" ${i + 1 === e ? 'aria-current="step"' : ''}><span class="pn">${i + 1}</span><span class="pt">${esc(nome)}</span></button></li>`).join('');
    return `<article class="pagina pagina-caso">
      ${AP.cabecalho({ trilha: `<a href="#/oficina">Oficina de interpretação</a> / ${esc(c.escala)}`, titulo: esc(c.titulo), sub: esc(c.resumo), extra: `<div class="cab-acoes">${AP.botaoFavorito('c:' + c.id)}</div>` })}
      <ol class="passos-caso" aria-label="Etapas do caso">${passos}</ol>
      <section class="etapa-caso" aria-labelledby="t-etapa"><h2 id="t-etapa"><span class="rotulo">Etapa ${e} de 9</span> ${esc(ETAPAS_CASO[e - 1])}</h2>${corpo}</section>
      <nav class="nav-unidades" aria-label="Navegação entre etapas">
        ${e > 1 ? `<button type="button" class="nav-ant" data-acao="etapa-caso" data-caso="${c.id}" data-n="${e - 1}">${AP.icone('esq')}<span><small>Etapa anterior</small>${esc(ETAPAS_CASO[e - 2])}</span></button>` : '<span></span>'}
        ${e < 9 ? `<button type="button" class="nav-prox" data-acao="etapa-caso" data-caso="${c.id}" data-n="${e + 1}"><span><small>Próxima etapa</small>${esc(ETAPAS_CASO[e])}</span>${AP.icone('dir')}</button>` : '<span></span>'}
      </nav></article>`;
  });
  AP.acao('etapa-caso', (el) => {
    const r = AP.S.casos[el.dataset.caso];
    r.etapa = +el.dataset.n; r.atualizado = AP.agora();
    AP.salvarJa(); AP.renderizar();
  });
  AP.acao('revelar-caso', (el) => {
    const r = AP.S.casos[el.dataset.caso];
    r.revelados = r.revelados || {};
    r.revelados[el.dataset.n] = true;
    AP.salvarJa(); AP._semRolagem = true; const y = scrollY; AP.renderizar(); scrollTo(0, y);
  });
  AP.acao('concluir-caso', (el) => {
    const r = AP.S.casos[el.dataset.caso];
    r.concluido = true; r.concluidoEm = AP.agora();
    AP.salvarJa(); AP.aviso('Caso concluído. Você pode reabri-lo e revisar qualquer etapa.', 'ok');
    AP._semRolagem = true; const y = scrollY; AP.renderizar(); scrollTo(0, y);
  });
})();
