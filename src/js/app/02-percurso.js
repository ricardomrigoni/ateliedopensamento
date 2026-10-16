/* =========================================================
   Boas-vindas, painel, percurso e unidades
   ========================================================= */
(function () {
  'use strict';
  const A = window.ATELIE, AP = window.AP, esc = AP.esc;

  /* ------------------------- boas-vindas ------------------------- */
  AP.rota('inicio', () => {
    const p = AP.S.preferencias;
    const eixos = Object.entries(A.eixos).map(([k, e]) => `
      <label class="opcao-check"><input type="checkbox" class="chk-interesse" value="${k}" ${p.interesses.includes(k) ? 'checked' : ''}><span>${esc(e.nome)}</span></label>`).join('');
    return `<div class="pagina pagina-inicio">
      <section class="inicio-heroi">
        ${AP.marca()}
        <p class="sobretitulo">Um percurso pessoal de pensamento</p>
        <h1>${esc(A.meta.nome)}</h1>
        <p class="inicio-lede">Um espaço para investigar perguntas que importam, examinar o que parece óbvio e aprender a transformar intuições em ideias que você consegue explicar.</p>
      </section>
      <section class="inicio-como" aria-labelledby="como">
        <h2 id="como" class="rotulo">Como funciona</h2>
        <ol class="como-lista">
          <li><strong>Você pensa antes de ler.</strong> Quase toda unidade começa pedindo sua primeira impressão; as explicações vêm depois.</li>
          <li><strong>Tudo fica salvo aqui, no seu navegador.</strong> Nada é enviado a ninguém. Se quiser usar em vários aparelhos, ligue a sincronização com o seu próprio Supabase em “Dados e ajustes”. Exporte uma cópia de vez em quando.</li>
          <li><strong>Não há pressa nem nota.</strong> Unidades de 15 a 30 minutos; a leitura dos livros sugeridos é opcional.</li>
          <li><strong>Você é confrontado — com respeito.</strong> Contrapontos, debates e um exame de convicções ajudam a entender por que você concorda com o que concorda, e quando valeria mudar de ideia.</li>
        </ol>
      </section>
      <section class="inicio-escolhas" aria-labelledby="escolha">
        <h2 id="escolha" class="rotulo">Por onde começar?</h2>
        <div class="escolhas">
          <button type="button" class="escolha escolha-principal" data-acao="comecar" data-destino="#/unidade/u-natural">
            ${AP.icone('percurso')}<span class="e-titulo">Começar pelo percurso recomendado</span>
            <span class="e-desc">Primeira unidade: “O natural e o aprendido” — cerca de 25 minutos.</span></button>
          <button type="button" class="escolha" data-acao="comecar" data-destino="#/perguntas">
            ${AP.icone('pergunta')}<span class="e-titulo">Explorar uma pergunta</span>
            <span class="e-desc">Vinte perguntas fundamentais, por tema e por grau de profundidade.</span></button>
          <button type="button" class="escolha" data-acao="comecar" data-destino="#/intuicao">
            ${AP.icone('ideia')}<span class="e-titulo">Organizar um pensamento</span>
            <span class="e-desc">Da intuição à ideia: registre algo que você percebeu e desenvolva-o em oito etapas.</span></button>
        </div>
      </section>
      <details class="inicio-interesses">
        <summary>Opcional: o que mais desperta sua curiosidade?</summary>
        <p class="campo-dica">Serve apenas para destacar perguntas e leituras relacionadas no seu painel e na lista de perguntas. Não é um teste e você pode mudar quando quiser, em Dados e ajustes.</p>
        <div class="grade-checks">${eixos}</div>
      </details>
    </div>`;
  });
  document.addEventListener('change', (e) => {
    if (!e.target.classList || !e.target.classList.contains('chk-interesse')) return;
    const lista = new Set(AP.S.preferencias.interesses);
    if (e.target.checked) lista.add(e.target.value); else lista.delete(e.target.value);
    AP.S.preferencias.interesses = [...lista];
    AP.salvar();
  });
  AP.acao('comecar', (el) => {
    AP.S.preferencias.boasVindasVista = true;
    AP.salvarJa();
    AP.ir(el.dataset.destino);
  });

  /* ------------------------- painel ------------------------- */
  AP.proximaUnidade = () => {
    const ordem = AP.ordemUnidades();
    const ult = AP.S.ultimaUnidade;
    if (ult && A.unidades[ult] && !AP.concluida(ult)) return ult;
    return ordem.find((u) => !AP.concluida(u)) || null;
  };
  /* sugestão do dia: estável ao longo do dia */
  const indiceDoDia = (n) => { const d = new Date(); const k = d.getFullYear() * 400 + d.getMonth() * 32 + d.getDate(); return n ? k % n : 0; };
  AP.revisoesDevidas = () => AP.ordemUnidades().filter((id) => {
    if (!AP.concluida(id)) return false;
    const u = AP.S.unidades[id];
    const hist = AP.S.revisoesPeriodicas[id] || [];
    const ultima = hist.length ? hist[hist.length - 1].data : null;
    return AP.diasDesde(u.concluidaEm) >= 3 && AP.diasDesde(ultima) >= 21;
  });

  AP.rota('painel', () => {
    const ordem = AP.ordemUnidades();
    const geral = AP.progresso(ordem);
    const prox = AP.proximaUnidade();
    const up = prox && A.unidades[prox];
    const loc = prox ? AP.localizar(prox) : {};
    const continuar = up ? `
      <a class="cartao-continuar" href="#/unidade/${prox}">
        <span class="rotulo">${AP.statusUnidade(prox) === 'iniciada' ? 'Continuar de onde parou' : 'Próximo passo no percurso'}</span>
        <span class="cc-trilha">Etapa ${loc.etapa.num} · ${esc(loc.etapa.titulo)} — ${esc(loc.modulo.titulo)}</span>
        <span class="cc-titulo">${esc(up.titulo)}</span>
        <span class="cc-pergunta">${esc(up.pergunta)}</span>
        <span class="cc-meta">${esc(up.duracao)} ${AP.icone('dir')}</span></a>`
      : `<div class="cartao-continuar"><span class="rotulo">Percurso disponível concluído</span><span class="cc-titulo">Você passou por todas as unidades disponíveis.</span><span class="cc-pergunta">Revisite unidades, explore as perguntas fundamentais ou investigue uma intuição própria.</span></div>`;

    const etapas = A.etapas.map((e) => {
      const ids = e.modulos.flatMap((m) => m.unidades);
      const pr = AP.progresso(ids);
      return `<li><a href="#/percurso/${e.id}"><span class="pe-num">${e.num}</span><span class="pe-nome">${esc(e.titulo)}</span><span class="pe-conta">${pr.feitas}/${pr.total}</span></a>${AP.barra(pr.pct, 'Progresso da etapa ' + e.titulo)}</li>`;
    }).join('');

    /* atividade curta */
    const interesses = AP.S.preferencias.interesses;
    let pool = A.perguntas.filter((q) => !interesses.length || q.eixos.some((x) => interesses.includes(x)));
    if (!pool.length) pool = A.perguntas;
    const q = pool[indiceDoDia(pool.length)];
    const devidas = AP.revisoesDevidas();
    const curto = devidas.length
      ? `<p class="rotulo">Revisão sugerida</p><h3>${esc(A.unidades[devidas[0]].titulo)}</h3><p>${esc(A.unidades[devidas[0]].revisao.situacao)}</p><a class="btn btn-secundario" href="#/desenvolvimento/revisoes">Fazer a revisão</a>`
      : `<p class="rotulo">Para hoje, em poucos minutos</p><h3>${esc(q.pergunta)}</h3><p>${esc(q.atividade)}</p><a class="btn btn-secundario" href="#/pergunta/${q.id}">Abrir a pergunta</a>`;

    /* investigação longa */
    const caso = A.casos.find((c) => !(AP.S.casos[c.id] && AP.S.casos[c.id].concluido)) || A.casos[0];
    const longo = `<p class="rotulo">Para quando houver mais tempo</p><h3>${esc(caso.titulo)}</h3><p>${esc(caso.resumo)} Um caso da Oficina de interpretação, em nove etapas.</p><a class="btn btn-secundario" href="#/caso/${caso.id}">Abrir o caso</a>`;

    const favs = AP.S.favoritos.slice(0, 6).map((r) => AP.linkRef(r)).filter(Boolean).join('');
    const ideias = AP.S.ideias.slice().sort((a, b) => (b.atualizada || '').localeCompare(a.atualizada || '')).slice(0, 3)
      .map((i) => `<a class="ref" href="#/intuicao/${i.id}"><span class="ref-tipo">Ideia</span><span class="ref-titulo">${esc(i.titulo || 'Sem título')}</span><span class="ref-txt">${AP.fmtData(i.atualizada)}</span></a>`).join('');

    let backup = '';
    const temDados = Object.keys(AP.S.respostas).length || AP.S.ideias.length;
    if (temDados && AP.diasDesde(AP.S.ultimoBackup) > 14) {
      backup = `<div class="nota-backup">${AP.icone('baixar')}<p>${AP.S.ultimoBackup ? 'Sua última cópia de segurança foi há mais de duas semanas.' : 'Você ainda não fez uma cópia de segurança.'} Seus textos ficam só neste navegador. <a href="#/dados">Exportar uma cópia</a>.</p></div>`;
    }

    return `<div class="pagina pagina-painel">
      ${AP.cabecalho({ titulo: 'Painel', sub: 'Seu ponto de partida a cada visita.' })}
      ${backup}
      <div class="painel-grade">
        <section class="painel-continuar">${continuar}</section>
        <section class="painel-progresso" aria-labelledby="t-prog">
          <h2 id="t-prog" class="rotulo">Percurso</h2>
          <p class="prog-geral"><strong>${geral.feitas}</strong> de ${geral.total} unidades disponíveis concluídas</p>
          ${AP.barra(geral.pct, 'Progresso geral')}
          <ul class="prog-etapas">${etapas}</ul>
        </section>
        ${typeof AP.desafioDoDia === 'function' ? `<section class="painel-cartao painel-desafio">${AP.desafioDoDia()}</section>` : ''}
        <section class="painel-cartao">${curto}</section>
        <section class="painel-cartao">${longo}</section>
        <section class="painel-salvos" aria-labelledby="t-salvos">
          <h2 id="t-salvos" class="rotulo">Guardados para revisitar</h2>
          ${favs || '<p class="vazio">Use o botão “Guardar” em unidades, perguntas, obras ou casos para reuni-los aqui.</p>'}
          ${AP.S.favoritos.length > 6 ? '<a class="btn-link" href="#/caderno/guardados">Ver todos</a>' : ''}
        </section>
        <section class="painel-salvos" aria-labelledby="t-ideias">
          <h2 id="t-ideias" class="rotulo">Ideias em desenvolvimento</h2>
          ${ideias || '<p class="vazio">Nenhuma ideia registrada ainda. <a href="#/intuicao">Registrar uma intuição</a>.</p>'}
        </section>
      </div>
    </div>`;
  });

  /* ------------------------- percurso ------------------------- */
  AP.rota('percurso', (args) => {
    const foco = args[0];
    if (foco) AP.depoisRender = () => { const el = document.getElementById('etapa-' + foco); if (el) { el.scrollIntoView(); AP._semRolagem = true; } };
    const etapas = A.etapas.map((e) => {
      const ids = e.modulos.flatMap((m) => m.unidades);
      const pr = AP.progresso(ids);
      const mods = e.modulos.map((m) => {
        const prm = AP.progresso(m.unidades);
        const unidades = m.unidades.map((uid) => {
          const u = A.unidades[uid];
          return `<li class="item-unidade st-${AP.statusUnidade(uid)}"><a href="#/unidade/${uid}">
            <span class="iu-titulo">${esc(u.titulo)}</span><span class="iu-pergunta">${esc(u.pergunta)}</span>
            <span class="iu-meta">${AP.chipStatus(uid)}<span>${esc(u.duracao)}</span></span></a></li>`;
        }).join('');
        const planejadas = (m.planejadas || []).map((p, i) => `
          <li class="item-planejado"><span class="iu-titulo">${esc(p.titulo)}</span><span class="iu-pergunta">${esc(p.pergunta)}</span>
            <span class="iu-meta"><span class="chip chip-planejada">Em preparação</span>
            <button type="button" class="btn-link" data-acao="investigar-pergunta" data-pergunta="${esc(p.pergunta)}" data-titulo="${esc(p.titulo)}">${AP.icone('ideia')} Investigar por conta própria</button></span></li>`).join('');
        const veja = (m.vejaTambem || []).map((r) => AP.linkRef(r)).join('');
        const temResumo = m.unidades.length > 0;
        return `<section class="modulo" aria-labelledby="mod-${m.id}">
          <div class="modulo-cab"><h3 id="mod-${m.id}">${esc(m.titulo)}</h3>${m.unidades.length ? `<span class="modulo-conta">${prm.feitas}/${prm.total}</span>` : ''}</div>
          <p class="modulo-desc">${esc(m.descricao)}</p>
          ${m.unidades.length ? AP.barra(prm.pct, 'Progresso do módulo ' + m.titulo) : ''}
          <ul class="lista-unidades">${unidades}${planejadas}</ul>
          ${veja ? `<div class="veja-tambem"><p class="rotulo">Pratique também</p>${veja}</div>` : ''}
          ${temResumo ? `<details class="resumo-modulo" ${AP.S.resumosModulo[m.id] ? 'open' : ''}><summary>Resumo pessoal do módulo</summary>
            ${AP.campo(['resumosModulo', m.id], { dica: 'O que você leva deste módulo? Que ideia mudou sua forma de ver algo? Que pergunta ficou em aberto?', rows: 4 })}</details>` : ''}
        </section>`;
      }).join('');
      return `<section class="etapa" id="etapa-${e.id}" aria-labelledby="et-${e.id}">
        <div class="etapa-cab"><span class="etapa-num">${e.num}</span><div><h2 id="et-${e.id}">${esc(e.titulo)}</h2><p class="etapa-sub">${esc(e.sub)}</p></div><span class="etapa-conta">${pr.feitas}/${pr.total}</span></div>
        <p class="etapa-desc">${esc(e.descricao)}</p>${mods}</section>`;
    }).join('');
    const geral = AP.progresso(AP.ordemUnidades());
    return `<div class="pagina pagina-percurso">
      ${AP.cabecalho({ titulo: 'Percurso', sub: `Seis etapas, de despertar a integrar. A ordem é uma sugestão: você pode abrir qualquer unidade. O progresso considera as ${geral.total} unidades já disponíveis; as marcadas “em preparação” indicam como o percurso pode crescer.`, extra: AP.barra(geral.pct, 'Progresso geral') })}
      <nav class="indice-etapas" aria-label="Etapas">${A.etapas.map((e) => `<a href="#/percurso/${e.id}">${e.num}. ${esc(e.titulo)}</a>`).join('')}</nav>
      ${etapas}</div>`;
  });

  AP.acao('investigar-pergunta', (el) => {
    const id = AP.novaIdeia({ titulo: el.dataset.titulo, questao: el.dataset.pergunta, origem: 'Pergunta de partida: ' + el.dataset.pergunta });
    AP.ir('#/intuicao/' + id);
  });

  /* ------------------------- unidade ------------------------- */
  AP.rota('unidade', (args) => {
    const id = args[0];
    const u = A.unidades[id];
    if (!u) return AP.rotas.naoEncontrada();
    const reg = (AP.S.unidades[id] = AP.S.unidades[id] || {});
    if (!reg.status) { reg.status = 'iniciada'; reg.iniciadaEm = AP.agora(); }
    reg.ultimaVisita = AP.agora();
    AP.S.ultimaUnidade = id;
    AP.salvar();
    const { etapa, modulo } = AP.localizar(id);
    const ordem = AP.ordemUnidades();
    const i = ordem.indexOf(id);
    const ant = ordem[i - 1], prox = ordem[i + 1];
    const eixos = u.eixos.map((k) => `<span class="tag">${esc(A.eixos[k].curto)}</span>`).join('');
    const blocos = u.blocos.map((b, i) => AP.renderBloco(b, u, i)).join('');
    const st = AP.statusUnidade(id);
    let conclusao;
    if (st === 'concluida' || st === 'revisitada') {
      conclusao = `<p class="conclusao-info">${AP.icone('check')} Concluída em ${AP.fmtData(reg.concluidaEm)}${reg.revisitadaEm ? ` · revisitada em ${AP.fmtData(reg.revisitadaEm)}` : ''}.</p>
        <button type="button" class="btn btn-secundario" data-acao="revisitar" data-id="${id}">Registrar que revisitei hoje</button>`;
    } else {
      conclusao = `<p class="campo-dica">Concluir não exige ter respondido tudo. Marque quando sentir que passou pela unidade.</p><button type="button" class="btn btn-primario" data-acao="concluir" data-id="${id}">${AP.icone('check')} Marcar como concluída</button>`;
    }
    const proximos = (u.proximos || []).map((r) => AP.linkRef(r)).join('');
    return `<article class="pagina pagina-unidade">
      <header class="cab-unidade">
        <p class="trilha"><a href="#/percurso/${etapa.id}">Etapa ${etapa.num} · ${esc(etapa.titulo)}</a> <span aria-hidden="true">/</span> ${esc(modulo.titulo)}</p>
        <h1>${esc(u.titulo)}</h1>
        <p class="pergunta-central">${esc(u.pergunta)}</p>
        <div class="cab-meta"><span>${AP.icone('percurso')} ${esc(u.duracao)}</span>${eixos}${AP.chipStatus(id)}</div>
        <div class="cab-acoes">${AP.botaoFavorito('u:' + id)}<a class="btn btn-icone" href="#anotacoes-unidade" data-acao="ir-anotacoes">${AP.icone('nota')}<span>Anotações</span></a></div>
      </header>
      <div class="corpo-unidade">${blocos}</div>
      <section class="fim-unidade" aria-labelledby="t-fim">
        <h2 id="t-fim" class="rotulo">Fim da unidade</h2>
        ${conclusao}
        ${proximos ? `<div class="proximos"><h3>Próximos caminhos</h3>${proximos}</div>` : ''}
      </section>
      <details class="anotacoes" id="anotacoes-unidade" ${AP.S.notas['u:' + id] ? 'open' : ''}>
        <summary>${AP.icone('nota')} Minhas anotações sobre esta unidade</summary>
        ${AP.campo(['notas', 'u:' + id], { dica: 'Um espaço livre: dúvidas, associações, coisas para pesquisar depois.', rows: 6 })}
      </details>
      <nav class="nav-unidades" aria-label="Unidades vizinhas">
        ${ant ? `<a href="#/unidade/${ant}" class="nav-ant">${AP.icone('esq')}<span><small>Anterior</small>${esc(A.unidades[ant].titulo)}</span></a>` : '<span></span>'}
        ${prox ? `<a href="#/unidade/${prox}" class="nav-prox"><span><small>Próxima</small>${esc(A.unidades[prox].titulo)}</span>${AP.icone('dir')}</a>` : '<span></span>'}
      </nav>
    </article>`;
  });

  AP.acao('ir-anotacoes', () => {
    const d = document.getElementById('anotacoes-unidade');
    if (!d) return;
    d.open = true;
    d.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    const t = d.querySelector('textarea');
    if (t) setTimeout(() => t.focus({ preventScroll: true }), 300);
  });
  AP.acao('concluir', (el) => {
    const r = AP.S.unidades[el.dataset.id];
    r.status = 'concluida'; r.concluidaEm = AP.agora();
    AP.salvarJa();
    AP.aviso('Unidade concluída. Ela aparecerá nas revisões periódicas daqui a alguns dias.', 'ok');
    AP._semRolagem = true;
    const y = window.scrollY;
    AP.renderizar();
    window.scrollTo(0, y);
  });
  AP.acao('revisitar', (el) => {
    const r = AP.S.unidades[el.dataset.id];
    r.status = 'revisitada'; r.revisitadaEm = AP.agora();
    AP.salvarJa();
    AP.aviso('Revisita registrada.', 'ok');
    AP._semRolagem = true;
    const y = window.scrollY;
    AP.renderizar();
    window.scrollTo(0, y);
  });

  /* ------------------------- blocos de unidade ------------------------- */
  const cam = (u, campo) => ['respostas', u.id, campo];

  AP.renderBloco = (b, u, idx) => {
    switch (b.t) {
      case 'importa':
        return `<section class="b b-importa"><h2 class="rotulo">Por que esta pergunta importa</h2>${b.html}</section>`;
      case 'impressao':
        return `<section class="b b-impressao"><h2 class="rotulo">Minha primeira impressão</h2><p class="b-prompt">${b.prompt}</p>
          ${AP.campo(cam(u, b.id), { rows: 5, rotuloSr: 'Minha primeira impressão', placeholder: 'Escreva antes de seguir…' })}
          ${b.dica ? `<p class="campo-dica">${b.dica}</p>` : ''}</section>`;
      case 'texto':
        return `<section class="b b-texto">${b.titulo ? `<h2>${b.titulo}</h2>` : ''}${b.html}</section>`;
      case 'situacao':
        return `<section class="b b-situacao"><p class="rotulo">Situação</p><h2>${b.titulo}</h2>${b.html}</section>`;
      case 'conceito':
        return `<section class="b b-conceito"><p class="rotulo">Ideia fundamental</p><h2>${b.titulo}</h2>${b.html}</section>`;
      case 'perspectivas':
        return `<section class="b b-perspectivas"><h2>${b.titulo || 'Perspectivas diferentes'}</h2><div class="grade-persp">${b.itens.map((p) => `
          <article class="persp"><h3>${p.nome}</h3><p>${p.html}</p>
          <dl><dt>O que permite ver</dt><dd>${p.ve}</dd><dt>Limites</dt><dd>${p.limite}</dd></dl>
          ${AP.reacao(`persp:${u.id}:${AP.norm(AP.semHtml(p.nome)).replace(/[^a-z0-9]+/g, '-').slice(0, 40)}`, `${AP.semHtml(p.nome)} — em “${u.titulo}”`, '#/unidade/' + u.id, 'Esta perspectiva convence você?')}</article>`).join('')}</div></section>`;
      case 'escrita': {
        const c = AP.campo(cam(u, b.id), { rows: 5, rotuloSr: b.titulo || 'Sua resposta' });
        const cid = AP.ultimoCampoId();
        return `<section class="b b-escrita">${b.titulo ? `<h2>${b.titulo}</h2>` : ''}<p class="b-prompt">${b.prompt}</p>${c}
          ${b.dica ? `<p class="campo-dica">${b.dica}</p>` : ''}${b.depois ? AP.revelavel(b.depois.rotulo, b.depois.html, cid) : ''}</section>`;
      }
      case 'escolha': {
        const escolhido = AP.ler(cam(u, 'esc_' + b.id));
        return `<section class="b b-escolha" data-escolha="${b.id}"><h2 class="rotulo">Para pensar</h2><p class="b-prompt">${b.prompt}</p>
          <div class="opcoes" role="group" aria-label="Opções">${b.opcoes.map((o, i) => `
            <button type="button" class="opcao ${escolhido === i ? (o.ok ? 'escolhida ok' : 'escolhida nao') : ''}" data-acao="escolher" data-u="${u.id}" data-b="${b.id}" data-i="${i}" aria-pressed="${escolhido === i}">${o.txt}</button>`).join('')}</div>
          <div class="fb-escolha" aria-live="polite">${escolhido != null && b.opcoes[escolhido] ? AP.feedbackEscolha(b, escolhido) : ''}</div></section>`;
      }
      case 'classificar': {
        const sel = AP.ler(cam(u, 'cls_' + b.id)) || {};
        const conferido = AP.ler(cam(u, 'clsok_' + b.id));
        return `<section class="b b-classificar"><h2 class="rotulo">Exercício</h2><p class="b-prompt">${b.prompt}</p>
          <ol class="cls-lista">${b.itens.map((it, i) => `
            <li class="cls-item"><p>${it.txt}</p>
              <label class="sr" for="cls-${b.id}-${i}">Classificação</label>
              <select id="cls-${b.id}-${i}" data-k="respostas|${u.id}|cls_${b.id}|${i}"><option value="">Escolha…</option>${b.categorias.map((c) => `<option ${sel[i] === c ? 'selected' : ''}>${esc(c)}</option>`).join('')}</select>
              <div class="cls-fb" ${conferido ? '' : 'hidden'}>${AP.fbClassificar(it, sel[i])}</div></li>`).join('')}</ol>
          <button type="button" class="btn btn-secundario" data-acao="conferir" data-u="${u.id}" data-b="${b.id}">${conferido ? 'Atualizar comentários' : 'Conferir comentários'}</button></section>`;
      }
      case 'revelar':
        return `<details class="b b-revelar"><summary>${b.rotulo}</summary><div class="det-corpo">${b.html}</div></details>`;
      case 'aprofundar':
        return `<details class="b b-aprofundar"><summary><span class="rotulo">Aprofundamento opcional</span> ${b.titulo}</summary><div class="det-corpo">${b.html}</div></details>`;
      case 'passos':
        return `<section class="b b-passos"><h2>${b.titulo}</h2><p class="b-prompt">${b.prompt}</p>
          ${b.campos.map((c) => AP.campo(cam(u, b.id + '_' + c.id), { rotulo: c.rotulo, dica: c.dica, rows: c.grande ? 9 : 3, grande: c.grande, espelho: c.espelho })).join('')}</section>`;
      case 'conexoes':
        return `<section class="b b-conexoes"><h2>Conexões</h2><div class="lista-refs">${b.itens.map((it) => AP.linkRef(it.ref, esc(it.txt))).join('')}</div></section>`;
      case 'pensador':
        return AP.cartaoPensador(b.id);
      case 'leituras':
        return `<section class="b b-leituras"><h2>Leituras relacionadas</h2>${b.intro ? `<p class="campo-dica">${b.intro}</p>` : '<p class="campo-dica">Sugestões opcionais — nenhuma é pré-requisito para seguir.</p>'}
          <div class="grade-livros">${b.ids.map(AP.cartaoLivro).join('')}</div>
          ${(() => { const mais = A.livros.filter((x) => (x.unidades || []).includes(u.id) && !b.ids.includes(x.id)); return mais.length ? `<details class="mais-obras"><summary>Mais obras ligadas a esta unidade (${mais.length})</summary><div class="grade-livros">${mais.map((x) => AP.cartaoLivro(x.id)).join('')}</div></details>` : ''; })()}</section>`;
      case 'comparar': {
        const antes = AP.ler(cam(u, b.ref));
        const vazioComp = 'Você ainda não registrou uma primeira impressão nesta unidade. Tudo bem — escreva agora o que pensa.';
        return `<section class="b b-comparar"><h2>Comparar: antes e agora</h2>
          <div class="comparacao"><div class="comp-antes"><p class="rotulo">Sua primeira impressão</p><div data-reflete="respostas|${u.id}|${b.ref}" data-vazio="${vazioComp}">${antes ? `<blockquote>${esc(antes).replace(/\n/g, '<br>')}</blockquote>` : `<p class="vazio">${vazioComp}</p>`}</div></div>
          <div class="comp-agora"><p class="rotulo">Agora</p><p class="b-prompt">${b.prompt}</p>${AP.campo(cam(u, b.id), { rows: 5, rotuloSr: 'Reflexão posterior' })}</div></div></section>`;
      }
      case 'contraponto': {
        const base = 'cp_' + b.id;
        const antes = AP.ler(cam(u, base + '_antes'));
        const depois = AP.ler(cam(u, base + '_depois'));
        const revelado = AP.ler(cam(u, base + '_visto'));
        return `<section class="b b-contraponto" data-cp="${u.id}|${b.id}"><p class="rotulo">${AP.icone('balanca')} Contraponto</p><h2>${b.titulo}</h2>
          <p>${b.contexto}</p>
          <div class="cp-afirmacao"><p class="rotulo">A afirmação em exame</p><p class="cp-frase">“${b.afirmacao}”</p></div>
          <p class="b-prompt">Antes de ler o outro lado: onde você está?</p>${AP.escala(cam(u, base + '_antes'), { aria: 'Sua posição antes' })}
          ${revelado ? '' : `<button type="button" class="btn btn-secundario" data-acao="cp-revelar" data-u="${u.id}" data-b="${b.id}">Ver o outro lado</button>`}
          <div class="cp-corpo" ${revelado ? '' : 'hidden'}>
            <div class="cp-outro"><p class="rotulo">${b.outro.nome}</p>${b.outro.html}</div>
            <div class="cp-replica"><p class="rotulo">E a réplica</p>${b.replica}</div>
            ${(b.refs || []).length ? `<div class="lista-refs">${b.refs.map((r) => AP.linkRef(r)).join('')}</div>` : ''}
            <p class="b-prompt">E agora, onde você está?</p>${AP.escala(cam(u, base + '_depois'), { aria: 'Sua posição depois' })}
            <p class="cp-movimento" aria-live="polite">${AP.textoMovimento(antes, depois)}</p>
            ${AP.campo(cam(u, base + '_porque'), { rotulo: 'O que sustenta sua posição agora?', rows: 3 })}
            ${AP.campo(cam(u, base + '_mudaria'), { rotulo: 'O que faria você mudar?', rows: 2 })}
            ${AP.botaoExaminar(AP.semHtml(b.afirmacao), 'Contraponto: ' + AP.semHtml(b.titulo))}
          </div></section>`;
      }
      case 'sintese':
        return `<section class="b b-sintese"><h2>Síntese pessoal</h2><p class="campo-dica">Três frases bastam. Esta síntese aparece no seu Caderno.</p>
          ${AP.campo(cam(u, 'sintese_compreendi'), { rotulo: 'O que compreendi', rows: 2 })}
          ${AP.campo(cam(u, 'sintese_mudou'), { rotulo: 'O que mudou no meu modo de pensar', rows: 2 })}
          ${AP.campo(cam(u, 'sintese_intriga'), { rotulo: 'O que ainda me intriga', rows: 2 })}</section>`;
      default:
        return '';
    }
  };

  AP.textoMovimento = (antes, depois) => {
    if (!antes || !depois) return '';
    const n = (v) => A.escala[v - 1].nome.toLowerCase();
    if (antes === depois) return `Sua posição se manteve (${n(depois)}). Vale registrar o que a sustentou — manter uma posição depois de examinar o outro lado também é um resultado.`;
    return `Sua posição se moveu de “${n(antes)}” para “${n(depois)}”. Vale registrar o que provocou a mudança.`;
  };
  AP.aoEscala = (el, caminho) => {
    const sec = el.closest('.b-contraponto');
    if (sec) {
      const [uid, bid] = sec.dataset.cp.split('|');
      const r = AP.S.respostas[uid] || {};
      const m = AP.$('.cp-movimento', sec);
      if (m) m.textContent = AP.textoMovimento(r['cp_' + bid + '_antes'], r['cp_' + bid + '_depois']);
    }
    if (typeof AP.aoEscalaDebate === 'function') AP.aoEscalaDebate(el, caminho);
  };
  AP.acao('cp-revelar', (el) => {
    const u = el.dataset.u, b = el.dataset.b;
    const antes = AP.ler(['respostas', u, 'cp_' + b + '_antes']);
    const sec = el.closest('.b-contraponto');
    if (!antes && el.dataset.avisado !== '1') {
      el.dataset.avisado = '1';
      el.insertAdjacentHTML('afterend', '<p class="msg-tentar">Marque sua posição antes — assim dá para ver se ela muda. Ou clique de novo para ver mesmo assim.</p>');
      return;
    }
    AP.gravar(['respostas', u, 'cp_' + b + '_visto'], true);
    AP.$('.cp-corpo', sec).hidden = false;
    const msg = AP.$('.msg-tentar', sec); if (msg) msg.remove();
    el.remove();
  });

  AP.feedbackEscolha = (b, i) => {
    const o = b.opcoes[i];
    const outras = b.opcoes.map((x, j) => j === i ? '' : `<li><strong>${x.txt}</strong><br>${x.fb}</li>`).join('');
    return `<div class="fb ${o.ok ? 'fb-ok' : 'fb-nao'}"><p class="rotulo">${o.ok ? 'Boa escolha' : 'Vale reconsiderar'}</p><p>${o.fb}</p></div>
      <details class="fb-outras"><summary>Ver comentários sobre as outras opções</summary><ul>${outras}</ul></details>`;
  };
  AP.acao('escolher', (el) => {
    const u = A.unidades[el.dataset.u];
    const b = u.blocos.find((x) => x.id === el.dataset.b && x.t === 'escolha');
    const i = +el.dataset.i;
    AP.gravar(['respostas', u.id, 'esc_' + b.id], i);
    const sec = el.closest('.b-escolha');
    AP.$$('.opcao', sec).forEach((bt, j) => {
      bt.classList.remove('escolhida', 'ok', 'nao');
      bt.setAttribute('aria-pressed', String(j === i));
      if (j === i) bt.classList.add('escolhida', b.opcoes[i].ok ? 'ok' : 'nao');
    });
    AP.$('.fb-escolha', sec).innerHTML = AP.feedbackEscolha(b, i);
  });

  AP.fbClassificar = (it, escolha) => {
    const sug = it.cat.join(' ou ');
    let tom = '';
    if (!escolha) tom = '<span class="fb-tag">Sem resposta</span>';
    else if (it.cat.includes(escolha)) tom = `<span class="fb-tag ok">${AP.icone('check')} Coincide com a leitura sugerida</span>`;
    else tom = `<span class="fb-tag nao">Leitura sugerida: ${esc(sug)}</span>`;
    return `${tom}<p>${it.exp}</p>`;
  };
  AP.acao('conferir', (el) => {
    const u = A.unidades[el.dataset.u];
    const b = u.blocos.find((x) => x.id === el.dataset.b && x.t === 'classificar');
    const sel = AP.ler(['respostas', u.id, 'cls_' + b.id]) || {};
    AP.gravar(['respostas', u.id, 'clsok_' + b.id], true);
    const sec = el.closest('.b-classificar');
    AP.$$('.cls-item', sec).forEach((li, i) => {
      const fb = AP.$('.cls-fb', li);
      fb.innerHTML = AP.fbClassificar(b.itens[i], sel[i]);
      fb.hidden = false;
    });
    el.textContent = 'Atualizar comentários';
  });

  /* ------------------------- pensadores ------------------------- */
  AP.cartaoPensador = (id) => {
    const p = A.pensadores.find((x) => x.id === id);
    if (!p) return '';
    return `<aside class="b b-pensador" aria-label="Pensador: ${esc(p.nome)}">
      <p class="rotulo">Quem pensou isso</p><h2>${esc(p.nome)}</h2><p class="pens-epoca">${esc(p.epoca)}</p>
      <p><strong>O problema:</strong> ${p.problema}</p><p><strong>A ideia central:</strong> ${p.ideia}</p>
      <details><summary>Contexto, exemplo, limites e como usar</summary><div class="det-corpo">
        <p><strong>Contexto.</strong> ${p.contexto}</p><p><strong>Exemplo.</strong> ${p.exemplo}</p>
        <p><strong>O que permite ver.</strong> ${p.permite}</p><p><strong>Limites e críticas.</strong> ${p.limites}</p>
        ${p.critico ? `<p><strong>Quem discorda.</strong> ${p.critico}</p>` : ''}<p><strong>Como usar.</strong> ${p.uso}</p><p class="nota"><strong>Simplificação assumida:</strong> ${p.simplificacao}</p></div></details>
      <a class="btn-link" href="#/pensador/${p.id}">Ficha completa ${AP.icone('dir')}</a></aside>`;
  };

  let filtroAfinidade = '';
  AP.rota('pensadores', () => {
    const lista = A.pensadores.filter((p) => !filtroAfinidade || (p.afinidades || []).includes(filtroAfinidade));
    const chip = (v, n) => `<button type="button" class="filtro ${filtroAfinidade === v ? 'ativo' : ''}" data-acao="filtro-afinidade" data-valor="${v}" aria-pressed="${filtroAfinidade === v}">${esc(n)}</button>`;
    return `<div class="pagina">
    ${AP.cabecalho({ titulo: 'Pensadores', sub: 'Os autores aparecem no percurso quando ajudam a investigar uma pergunta. Cada ficha traz o problema que ele tentava compreender, o contexto, a ideia central, os limites, quem discorda e por quê — e pergunta se a ideia convence você.' })}
    <div class="barra-filtros" role="group" aria-label="Filtrar por afinidade"><span class="rotulo">Afinidades:</span>${chip('', 'Todas')}${Object.entries(A.afinidades).map(([k, n]) => chip(k, n)).join('')}</div>
    <p class="campo-dica">As afinidades são aproximações para navegar, não rótulos: muitos autores pertencem a várias.</p>
    <p class="contagem">${AP.plural(lista.length, 'pensador', 'pensadores')}</p>
    <div class="grade-pensadores">${lista.map((p) => { const r = AP.S.reacoes['pens:' + p.id]; return `<a class="cartao-pens" href="#/pensador/${p.id}"><span class="cp-nome">${esc(p.nome)}</span><span class="cp-epoca">${esc(p.epoca)}</span><span class="cp-problema">${AP.semHtml(p.problema)}</span><span class="cp-afins">${(p.afinidades || []).map((a) => `<span class="tag">${esc(A.afinidades[a])}</span>`).join('')}</span>${r && r.voto ? `<span class="chip chip-voto voto-${r.voto}">${{ sim: 'Me convence', parte: 'Em parte', nao: 'Não me convence' }[r.voto]}</span>` : ''}</a>`; }).join('')}</div></div>`;
  });
  AP.acao('filtro-afinidade', (el) => { filtroAfinidade = el.dataset.valor; AP._semRolagem = true; AP.renderizar(); });

  AP.rota('pensador', (args) => {
    const p = A.pensadores.find((x) => x.id === args[0]);
    if (!p) return AP.rotas.naoEncontrada();
    const sec = (t, h) => `<section class="ficha-sec"><h2>${t}</h2><p>${h}</p></section>`;
    return `<article class="pagina pagina-ficha">
      ${AP.cabecalho({ trilha: '<a href="#/pensadores">Pensadores</a>', titulo: esc(p.nome), sub: esc(p.epoca), extra: `<div class="temas">${(p.afinidades || []).map((a) => `<span class="tag">${esc(A.afinidades[a])}</span>`).join('')}</div><div class="cab-acoes">${AP.botaoFavorito('p:' + p.id)}</div>` })}
      ${sec('O problema', p.problema)}${sec('O contexto', p.contexto)}${sec('A ideia central', p.ideia)}${sec('Como funciona num exemplo', p.exemplo)}
      ${sec('O que permite enxergar', p.permite)}${sec('Limites, críticas e objeções', p.limites)}${p.critico ? sec('Quem discorda — e por quê', p.critico) : ''}${sec('Relações com outros pensadores', p.relacoes)}${sec('Como usar numa investigação sua', p.uso)}
      ${(() => { const ds = (A.debates || []).filter((d) => d.polos.some((po) => po.autores.includes('p:' + p.id))); return ds.length ? `<section class="ficha-sec"><h2>Em debate</h2><div class="lista-refs">${ds.map((d) => AP.linkRef('d:' + d.id, esc(d.polos.find((po) => po.autores.includes('p:' + p.id)).nome))).join('')}</div></section>` : ''; })()}
      <section class="ficha-sec examinar-pensador"><h2>E você?</h2>${AP.reacao('pens:' + p.id, p.nome, '#/pensador/' + p.id, 'A ideia central deste pensador convence você?')}
        <p class="campo-dica">Quer examinar a fundo? ${AP.botaoExaminar('', 'Pensador: ' + p.nome)}</p></section>
      <p class="nota"><strong>Simplificação pedagógica:</strong> ${p.simplificacao}</p>
      ${p.unidades.length ? `<section class="ficha-sec"><h2>Onde aparece no percurso</h2><div class="lista-refs">${p.unidades.map((u) => AP.linkRef('u:' + u)).join('')}</div></section>` : ''}
      ${p.livros.length ? `<section class="ficha-sec"><h2>Para ler</h2><div class="grade-livros">${p.livros.map(AP.cartaoLivro).join('')}</div></section>` : ''}
      <details class="anotacoes" ${AP.S.notas['p:' + p.id] ? 'open' : ''}><summary>${AP.icone('nota')} Minhas anotações</summary>${AP.campo(['notas', 'p:' + p.id], { rows: 4 })}</details>
    </article>`;
  });
})();
