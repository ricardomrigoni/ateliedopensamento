/* =========================================================
   Caderno, Desenvolvimento, Busca, Dados e ajustes, Sobre
   e montagem da interface
   ========================================================= */
(function () {
  'use strict';
  const A = window.ATELIE, AP = window.AP, esc = AP.esc;
  const quebra = (t) => esc(t || '').replace(/\n/g, '<br>');

  /* rótulo legível para um campo de resposta de unidade */
  AP.rotuloResposta = (u, campo) => {
    if (campo.startsWith('esc_') || campo.startsWith('cls')) return null;
    if (campo.startsWith('cp_')) {
      const cp = u.blocos.find((x) => x.t === 'contraponto' && campo.startsWith('cp_' + x.id + '_'));
      if (cp) { const suf = campo.slice(('cp_' + cp.id + '_').length); const n = { porque: 'o que sustenta minha posição', mudaria: 'o que me faria mudar' }[suf]; return n ? `Contraponto “${AP.semHtml(cp.titulo)}” — ${n}` : null; }
    }
    if (campo === 'sintese_compreendi') return 'Síntese — o que compreendi';
    if (campo === 'sintese_mudou') return 'Síntese — o que mudou';
    if (campo === 'sintese_intriga') return 'Síntese — o que ainda me intriga';
    const b = u.blocos.find((x) => x.id === campo);
    if (b) {
      if (b.t === 'impressao') return 'Primeira impressão';
      if (b.t === 'comparar') return 'Reflexão posterior (antes e agora)';
      return AP.semHtml(b.titulo || b.prompt || campo).slice(0, 90);
    }
    const p = u.blocos.find((x) => x.t === 'passos' && campo.startsWith(x.id + '_'));
    if (p) { const c = p.campos.find((y) => campo === p.id + '_' + y.id); return `${AP.semHtml(p.titulo)} — ${AP.semHtml(c ? c.rotulo : campo)}`; }
    return campo;
  };
  const respostasTexto = (uid) => {
    const u = A.unidades[uid];
    const r = AP.S.respostas[uid] || {};
    return Object.entries(r).filter(([k, v]) => typeof v === 'string' && v.trim() && AP.rotuloResposta(u, k)).map(([k, v]) => ({ campo: k, rotulo: AP.rotuloResposta(u, k), texto: v }));
  };

  /* ------------------------- caderno ------------------------- */
  AP.rota('caderno', (args) => {
    const aba = args[0] || 'reflexoes';
    const abas = [['reflexoes', 'Reflexões'], ['anotacoes', 'Anotações'], ['resumos', 'Resumos de módulo'], ['guardados', 'Guardados']];
    let corpo = '';
    if (aba === 'reflexoes') {
      const blocos = AP.ordemUnidades().map((uid) => {
        const lista = respostasTexto(uid);
        if (!lista.length) return '';
        const u = A.unidades[uid];
        return `<section class="caderno-unidade"><h2><a href="#/unidade/${uid}">${esc(u.titulo)}</a></h2><p class="campo-dica">${esc(u.pergunta)}</p>
          ${lista.map((x) => `<div class="entrada-caderno"><p class="rotulo">${esc(x.rotulo)}${AP.S.datas['respostas|' + uid + '|' + x.campo] ? ' · ' + AP.fmtData(AP.S.datas['respostas|' + uid + '|' + x.campo]) : ''}</p><p>${quebra(x.texto)}</p></div>`).join('')}</section>`;
      }).join('');
      corpo = blocos || '<p class="vazio">Suas respostas nas unidades aparecerão aqui, organizadas por unidade.</p>';
    } else if (aba === 'anotacoes') {
      const notas = Object.entries(AP.S.notas).filter(([, v]) => String(v).trim()).map(([ref, v]) => `<div class="entrada-caderno">${AP.linkRef(ref)}<p>${quebra(v)}</p></div>`);
      const qs = Object.entries(AP.S.perguntas).filter(([, v]) => (v.atividade || '').trim() || (v.notas || '').trim()).map(([id, v]) => `<div class="entrada-caderno">${AP.linkRef('q:' + id)}${v.atividade ? `<p class="rotulo">Atividade</p><p>${quebra(v.atividade)}</p>` : ''}${v.notas ? `<p class="rotulo">Anotações</p><p>${quebra(v.notas)}</p>` : ''}</div>`);
      const livros = Object.entries(AP.S.livros).filter(([, v]) => (v.impressoes || v.perguntas || v.conexoes || '').trim()).map(([id, v]) => `<div class="entrada-caderno">${AP.linkRef('b:' + id)}${['impressoes', 'perguntas', 'conexoes'].filter((c) => (v[c] || '').trim()).map((c) => `<p class="rotulo">${{ impressoes: 'Impressões', perguntas: 'Perguntas', conexoes: 'Conexões' }[c]}</p><p>${quebra(v[c])}</p>`).join('')}</div>`);
      const mapa = Object.entries(AP.S.mapa.notas || {}).filter(([, v]) => String(v).trim()).map(([id, v]) => `<div class="entrada-caderno">${AP.linkRef('n:' + id)}<p>${quebra(v)}</p></div>`);
      corpo = [notas.length ? `<h2>Unidades e pensadores</h2>${notas.join('')}` : '', qs.length ? `<h2>Perguntas fundamentais</h2>${qs.join('')}` : '', livros.length ? `<h2>Obras</h2>${livros.join('')}` : '', mapa.length ? `<h2>Mapa de ideias</h2>${mapa.join('')}` : ''].join('') || '<p class="vazio">Nenhuma anotação ainda.</p>';
    } else if (aba === 'resumos') {
      const mods = A.etapas.flatMap((e) => e.modulos.map((m) => ({ e, m }))).filter(({ m }) => m.unidades.length);
      corpo = mods.map(({ e, m }) => `<section class="caderno-unidade"><h2>Etapa ${e.num} · ${esc(m.titulo)}</h2>${AP.campo(['resumosModulo', m.id], { rows: 3, dica: 'O que você leva deste módulo? Que pergunta ficou?' })}</section>`).join('');
    } else if (aba === 'guardados') {
      corpo = AP.S.favoritos.length ? `<div class="lista-refs">${AP.S.favoritos.map((r) => `<div class="fav-linha">${AP.linkRef(r)}<button type="button" class="btn-icone" data-acao="remover-fav" data-ref="${esc(r)}" aria-label="Remover dos guardados">${AP.icone('fechar')}</button></div>`).join('')}</div>` : '<p class="vazio">Use “Guardar” em unidades, perguntas, obras, pensadores, casos ou exercícios para reuni-los aqui.</p>';
    }
    return `<div class="pagina pagina-caderno">
      ${AP.cabecalho({ titulo: 'Meu caderno', sub: 'Tudo o que você escreveu, reunido. Para levar para fora, use “Exportar anotações” em Dados e ajustes.' })}
      <nav class="abas" aria-label="Seções do caderno">${abas.map(([id, n]) => `<a href="#/caderno/${id}" class="aba ${aba === id ? 'ativa' : ''}" ${aba === id ? 'aria-current="page"' : ''}>${n}</a>`).join('')}</nav>
      ${corpo}</div>`;
  });
  AP.acao('remover-fav', (el) => { AP.alternarFavorito(el.dataset.ref); AP._semRolagem = true; AP.renderizar(); });

  /* ------------------------- desenvolvimento ------------------------- */
  AP.rota('desenvolvimento', (args) => {
    const aba = args[0] || 'mesma';
    const abas = [['mesma', 'Mesma pergunta, outra vez'], ['concordancias', 'Concordâncias'], ['revisoes', 'Revisões periódicas'], ['aspectos', 'Aspectos do pensamento']];
    let corpo = '';
    if (aba === 'mesma') {
      const itens = AP.ordemUnidades().map((uid) => {
        const u = A.unidades[uid];
        const b = u.blocos.find((x) => x.t === 'impressao');
        if (!b) return '';
        const orig = (AP.S.respostas[uid] || {})[b.id];
        if (!orig || !orig.trim()) return '';
        const chave = uid + '|' + b.id;
        const hist = AP.S.revisoes[chave] || [];
        const data = AP.S.datas['respostas|' + uid + '|' + b.id];
        return `<section class="mesma"><h2><a href="#/unidade/${uid}">${esc(u.titulo)}</a></h2><p class="b-prompt">${b.prompt}</p>
          <div class="linha-tempo"><div class="lt-item"><p class="rotulo">Primeira resposta${data ? ' · ' + AP.fmtData(data) : ''}</p><blockquote>${quebra(orig)}</blockquote></div>
          ${hist.map((h) => `<div class="lt-item"><p class="rotulo">${AP.fmtData(h.data)}</p><blockquote>${quebra(h.texto)}</blockquote></div>`).join('')}</div>
          <details><summary>Responder de novo hoje</summary><label class="sr" for="nova-${chave}">Nova resposta</label><textarea class="entrada caderno-linhas" rows="4" id="nova-${esc(chave)}" placeholder="Sem reler a anterior primeiro, se conseguir…"></textarea>
          <button type="button" class="btn btn-secundario" data-acao="registrar-revisao" data-chave="${esc(chave)}">Guardar nova versão</button></details></section>`;
      }).join('');
      corpo = `<p class="campo-dica">Aqui aparecem as primeiras impressões que você registrou. Responder de novo, tempos depois, e comparar as versões é uma das formas mais concretas de perceber como seu pensamento mudou — na formulação, nas distinções, nas dúvidas.</p>${itens || '<p class="vazio">Quando você registrar primeiras impressões nas unidades, elas aparecerão aqui.</p>'}`;
    } else if (aba === 'concordancias') {
      corpo = typeof AP.abaConcordancias === 'function' ? AP.abaConcordancias() : '';
    } else if (aba === 'revisoes') {
      const concl = AP.ordemUnidades().filter(AP.concluida);
      const devidas = new Set(AP.revisoesDevidas());
      const ord = concl.sort((a, b) => (devidas.has(b) ? 1 : 0) - (devidas.has(a) ? 1 : 0));
      corpo = `<p class="campo-dica">Alguns dias depois de concluir uma unidade, ela volta aqui com uma situação nova, para você testar se consegue aplicar a ideia num contexto diferente. As sugeridas aparecem primeiro; as demais podem ser feitas quando quiser.</p>
        ${ord.map((uid) => {
          const u = A.unidades[uid];
          const hist = AP.S.revisoesPeriodicas[uid] || [];
          return `<section class="revisao ${devidas.has(uid) ? 'devida' : ''}"><p class="rotulo">${devidas.has(uid) ? 'Sugerida agora' : 'Disponível'} · <a href="#/unidade/${uid}">${esc(u.titulo)}</a></p>
            <p><strong>Ideia a recuperar:</strong> ${esc(u.revisao.conceito)}</p><div class="b-situacao mini"><p>${esc(u.revisao.situacao)}</p></div><p class="b-prompt">${esc(u.revisao.prompt)}</p>
            <label class="sr" for="rev-${uid}">Sua resposta</label><textarea class="entrada caderno-linhas" id="rev-${uid}" rows="4" placeholder="Tente responder sem reabrir a unidade…"></textarea>
            <button type="button" class="btn btn-secundario" data-acao="registrar-periodica" data-id="${uid}">Registrar revisão</button>
            ${hist.length ? `<details><summary>${AP.plural(hist.length, 'revisão anterior', 'revisões anteriores')}</summary>${hist.slice().reverse().map((h) => `<div class="lt-item"><p class="rotulo">${AP.fmtData(h.data)}</p><p>${quebra(h.texto)}</p></div>`).join('')}</details>` : ''}</section>`;
        }).join('') || '<p class="vazio">Conclua unidades do percurso para que apareçam aqui.</p>'}`;
    } else {
      const entradas = AP.S.desenvolvimento.entradas;
      corpo = `<p class="campo-dica">Estes onze aspectos são referências para observar seu próprio pensamento — não medidas de inteligência nem diagnósticos, e não há pontuação. Registre, de vez em quando, uma observação concreta: um texto em que algo melhorou, uma dificuldade que notou.</p>
        <div class="grade-aspectos">${A.aspectos.map((a) => {
          const minhas = entradas.filter((e) => e.aspecto === a.id);
          return `<section class="aspecto"><h2>${esc(a.nome)}</h2><p class="asp-sinais">${esc(a.sinais)}</p>
            <details><summary>Registrar uma observação${minhas.length ? ` · ${minhas.length}` : ''}</summary><p class="campo-dica">${esc(a.pergunta)}</p>
            <label class="sr" for="asp-${a.id}">Observação</label><textarea class="entrada caderno-linhas" id="asp-${a.id}" rows="3"></textarea>
            <button type="button" class="btn btn-secundario btn-pequeno" data-acao="registrar-aspecto" data-id="${a.id}">Guardar</button>
            ${minhas.slice().reverse().map((e) => `<div class="lt-item"><p class="rotulo">${AP.fmtData(e.data)} <button type="button" class="btn-link" data-acao="excluir-aspecto" data-id="${e.id}" aria-label="Excluir observação">${AP.icone('lixo')}</button></p><p>${quebra(e.texto)}</p></div>`).join('')}</details></section>`;
        }).join('')}</div>`;
    }
    return `<div class="pagina pagina-desenvolvimento">
      ${AP.cabecalho({ titulo: 'Desenvolvimento', sub: 'Acompanhar a evolução do seu pensamento ao longo do tempo, valorizando o processo — inclusive conclusões provisórias e boas perguntas sem resposta.' })}
      <nav class="abas" aria-label="Seções">${abas.map(([id, n]) => `<a href="#/desenvolvimento/${id}" class="aba ${aba === id ? 'ativa' : ''}" ${aba === id ? 'aria-current="page"' : ''}>${n}</a>`).join('')}</nav>${corpo}</div>`;
  });
  const reRender = () => { AP._semRolagem = true; const y = scrollY; AP.renderizar(); scrollTo(0, y); };
  AP.acao('registrar-revisao', (el) => {
    const t = document.getElementById('nova-' + el.dataset.chave);
    if (!t || !t.value.trim()) { AP.aviso('Escreva a nova versão antes de guardar.', 'info'); return; }
    (AP.S.revisoes[el.dataset.chave] = AP.S.revisoes[el.dataset.chave] || []).push({ data: AP.agora(), texto: t.value.trim() });
    AP.salvarJa(); AP.aviso('Nova versão guardada.', 'ok'); reRender();
  });
  AP.acao('registrar-periodica', (el) => {
    const t = document.getElementById('rev-' + el.dataset.id);
    if (!t || !t.value.trim()) { AP.aviso('Escreva sua resposta antes de registrar.', 'info'); return; }
    (AP.S.revisoesPeriodicas[el.dataset.id] = AP.S.revisoesPeriodicas[el.dataset.id] || []).push({ data: AP.agora(), texto: t.value.trim() });
    AP.salvarJa(); AP.aviso('Revisão registrada. Ela volta a ser sugerida daqui a algumas semanas.', 'ok'); reRender();
  });
  AP.acao('registrar-aspecto', (el) => {
    const t = document.getElementById('asp-' + el.dataset.id);
    if (!t || !t.value.trim()) return;
    AP.S.desenvolvimento.entradas.push({ id: AP.uid(), data: AP.agora(), aspecto: el.dataset.id, texto: t.value.trim() });
    AP.salvarJa(); reRender();
  });
  AP.acao('excluir-aspecto', async (el) => {
    if (!(await AP.confirmar('Excluir observação?', 'Ela será apagada deste navegador.', 'Excluir', true))) return;
    AP.S.desenvolvimento.entradas = AP.S.desenvolvimento.entradas.filter((e) => e.id !== el.dataset.id);
    AP.salvarJa(); reRender();
  });

  /* ------------------------- busca ------------------------- */
  let indice = null;
  const montarIndice = () => {
    const I = [];
    Object.values(A.unidades).forEach((u) => I.push({ tipo: 'Unidade', titulo: u.titulo, href: '#/unidade/' + u.id, texto: [u.titulo, u.pergunta, u.resumo, u.eixos.map((k) => A.eixos[k].nome).join(' '), ...u.blocos.map((b) => [b.titulo, b.prompt, b.html, b.rotulo, (b.itens || []).map((i) => [i.nome, i.html, i.txt, i.ve, i.limite].join(' ')).join(' '), (b.opcoes || []).map((o) => o.txt).join(' ')].join(' '))].join(' ') }));
    A.perguntas.forEach((q) => I.push({ tipo: 'Pergunta', titulo: q.pergunta, href: '#/pergunta/' + q.id, texto: [q.pergunta, q.tema, q.intro, q.caminhos.join(' '), q.atividade].join(' ') }));
    A.livros.forEach((b) => I.push({ tipo: 'Obra', titulo: `${b.titulo} — ${b.autor}`, href: '#/livro/' + b.id, texto: [b.titulo, b.autor, b.tipo, b.origem, b.temas.join(' '), b.porque, b.encontrar, b.conexao].join(' ') }));
    A.pensadores.forEach((p) => I.push({ tipo: 'Pensador', titulo: p.nome, href: '#/pensador/' + p.id, texto: [p.nome, p.problema, p.contexto, p.ideia, p.exemplo, p.relacoes].join(' ') }));
    A.casos.forEach((c) => I.push({ tipo: 'Caso', titulo: c.titulo, href: '#/caso/' + c.id, texto: [c.titulo, c.tipo, c.escala, c.resumo, c.situacao, c.novaInfo].join(' ') }));
    A.laboratorio.forEach((x) => I.push({ tipo: 'Laboratório', titulo: `${x.letra}. ${x.titulo}`, href: '#/lab/' + x.id, texto: [x.titulo, x.objetivo, x.instrucao].join(' ') }));
    A.mapa.nos.forEach((n) => I.push({ tipo: 'Mapa', titulo: n.nome, href: '#/mapa/' + n.id, texto: [n.nome, n.desc].join(' ') }));
    A.pensadores.forEach((p) => { const e = I.find((x) => x.href === '#/pensador/' + p.id); if (e) e.texto += ' ' + [p.critico, p.limites, (p.afinidades || []).map((a) => A.afinidades[a]).join(' ')].join(' '); });
    A.livros.forEach((b) => { const e = I.find((x) => x.href === '#/livro/' + b.id); if (e) e.texto += ' ' + [(b.afinidades || []).map((a) => A.afinidades[a]).join(' '), (b.leituras || []).map((l) => l.quem + ' ' + l.html).join(' ')].join(' '); });
    if (typeof AP.indiceConfronto === 'function') AP.indiceConfronto().forEach((x) => I.push(x));
    I.forEach((x) => { x.n = AP.norm(AP.semHtml(x.texto)); x.nt = AP.norm(x.titulo); x.texto = AP.semHtml(x.texto); });
    return I;
  };
  const trecho = (texto, termos) => {
    const n = AP.norm(texto);
    let i = -1;
    for (const t of termos) { i = n.indexOf(t); if (i >= 0) break; }
    if (i < 0) return esc(texto.slice(0, 160)) + (texto.length > 160 ? '…' : '');
    const ini = Math.max(0, i - 70), fim = Math.min(texto.length, i + 110);
    return (ini > 0 ? '…' : '') + esc(texto.slice(ini, fim)) + (fim < texto.length ? '…' : '');
  };
  const buscaUsuario = (termos) => {
    const R = [];
    const ok = (t) => { const n = AP.norm(t); return termos.every((x) => n.includes(x)); };
    Object.keys(AP.S.respostas).forEach((uid) => { if (!A.unidades[uid]) return; respostasTexto(uid).forEach((x) => { if (ok(x.texto)) R.push({ tipo: 'Minha resposta', titulo: `${A.unidades[uid].titulo} — ${x.rotulo}`, href: '#/unidade/' + uid, texto: x.texto }); }); });
    Object.entries(AP.S.notas).forEach(([ref, v]) => { if (v && ok(v)) { const r = AP.refInfo(ref); if (r) R.push({ tipo: 'Minha anotação', titulo: r.titulo, href: r.href, texto: v }); } });
    Object.entries(AP.S.perguntas).forEach(([id, v]) => { const t = [v.atividade, v.notas].join(' '); if (t.trim() && ok(t)) { const r = AP.refInfo('q:' + id); if (r) R.push({ tipo: 'Minha anotação', titulo: r.titulo, href: r.href, texto: t }); } });
    Object.entries(AP.S.livros).forEach(([id, v]) => { const t = [v.impressoes, v.perguntas, v.conexoes].join(' '); if (t.trim() && ok(t)) { const r = AP.refInfo('b:' + id); if (r) R.push({ tipo: 'Minha anotação', titulo: r.titulo, href: r.href, texto: t }); } });
    AP.S.conviccoes.forEach((c) => { const t = [c.tese, ...Object.values(c.campos || {}).filter((v) => typeof v === 'string')].join(' '); if (ok(t)) R.push({ tipo: 'Minha convicção', titulo: c.tese || 'Convicção', href: '#/conviccao/' + c.id, texto: t }); });
    Object.entries(AP.S.debates).forEach(([id, r]) => { const t = Object.values(r).filter((v) => typeof v === 'string').join(' '); const d = (A.debates || []).find((x) => x.id === id); if (d && t.trim() && ok(t)) R.push({ tipo: 'Meu debate', titulo: d.titulo, href: '#/debate/' + id, texto: t }); });
    AP.S.ideias.forEach((i) => { const t = [i.titulo, i.original, ...Object.values(i.etapas).map((v) => typeof v === 'object' ? Object.values(v).join(' ') : v)].join(' '); if (ok(t)) R.push({ tipo: 'Minha ideia', titulo: i.titulo || 'Ideia', href: '#/intuicao/' + i.id, texto: t }); });
    return R;
  };
  AP.rota('busca', (args) => {
    const q = (args.join('/') || '').trim();
    AP.depoisRender = () => { const inp = document.getElementById('busca-pagina'); if (inp && !q) inp.focus(); };
    let res = '';
    if (q) {
      indice = indice || montarIndice();
      const termos = AP.norm(q).split(/\s+/).filter((t) => t.length > 1);
      const conteudo = indice.filter((x) => termos.every((t) => x.n.includes(t))).map((x) => ({ ...x, peso: termos.filter((t) => x.nt.includes(t)).length })).sort((a, b) => b.peso - a.peso);
      const meus = termos.length ? buscaUsuario(termos) : [];
      const todos = conteudo.concat(meus);
      res = `<p class="contagem" aria-live="polite">${AP.plural(todos.length, 'resultado', 'resultados')} para “${esc(q)}”</p>
        <ul class="resultados">${todos.map((x) => `<li><a href="${x.href}"><span class="ref-tipo">${esc(x.tipo)}</span><span class="res-titulo">${esc(x.titulo)}</span><span class="res-trecho">${trecho(x.texto, termos)}</span></a></li>`).join('') || '<li class="vazio">Nada encontrado. Tente outra palavra, ou uma forma sem acento.</li>'}</ul>`;
    }
    return `<div class="pagina pagina-busca">${AP.cabecalho({ titulo: 'Busca', sub: 'Procura em unidades, perguntas, obras, pensadores, casos, exercícios e no mapa — e também nos seus próprios textos.' })}
      <form class="form-busca" data-acao-busca="1" role="search"><label for="busca-pagina" class="sr">Termos da busca</label><input id="busca-pagina" type="search" value="${esc(q)}" placeholder="Ex.: memória, Wittgenstein, trabalho, ciúme…"><button class="btn btn-primario" type="submit">${AP.icone('busca')} Buscar</button></form>${res}</div>`;
  });
  document.addEventListener('submit', (e) => {
    const f = e.target;
    if (!f.dataset || !f.dataset.acaoBusca) return;
    e.preventDefault();
    const v = f.querySelector('input').value.trim();
    AP.ir('#/busca/' + encodeURIComponent(v));
  });

  /* ------------------------- dados e ajustes ------------------------- */
  const contarDados = (S) => ({
    respostas: Object.values(S.respostas || {}).reduce((n, r) => n + Object.values(r || {}).filter((v) => typeof v === 'string' && v.trim()).length, 0),
    unidades: Object.values(S.unidades || {}).filter((u) => u && ['concluida', 'revisitada'].includes(u.status)).length,
    ideias: (S.ideias || []).length,
    anotacoes: Object.values(S.notas || {}).filter((v) => String(v).trim()).length,
    leituras: Object.values(S.livros || {}).filter((v) => v && v.status).length
  });
  const resumoContagem = (c) => `${AP.plural(c.respostas, 'resposta', 'respostas')}, ${AP.plural(c.unidades, 'unidade concluída', 'unidades concluídas')}, ${AP.plural(c.ideias, 'ideia', 'ideias')}, ${AP.plural(c.anotacoes, 'anotação', 'anotações')}, ${AP.plural(c.leituras, 'obra marcada', 'obras marcadas')}`;

  AP.rota('dados', () => {
    const p = AP.S.preferencias;
    const kb = (AP.tamanhoDados() / 1024).toFixed(1);
    const radio = (nome, valor, rotulo, atual) => `<label class="opcao-radio"><input type="radio" name="${nome}" value="${valor}" ${atual === valor ? 'checked' : ''} data-pref="${nome}"><span>${rotulo}</span></label>`;
    return `<div class="pagina pagina-dados">
      ${AP.cabecalho({ titulo: 'Dados e ajustes', sub: AP.nuvem && AP.nuvem.conectada() ? 'Seus textos ficam neste navegador e são sincronizados com o seu Supabase. Nada vai para nenhum outro lugar.' : 'Seus textos ficam apenas neste navegador, neste dispositivo. Nada é enviado a lugar nenhum, a menos que você ligue a sincronização abaixo.' })}
      ${AP.storageOk ? '' : '<div class="aviso aviso-erro" role="alert">O armazenamento local está indisponível neste navegador (talvez em modo privado ou com cookies bloqueados). O que você escrever será perdido ao fechar a página, a menos que exporte.</div>'}
      ${AP.nuvem ? AP.nuvem.secaoDados() : ''}
      <section class="ficha-sec"><h2>Cópia de segurança</h2>
        <p>Neste navegador: ${resumoContagem(contarDados(AP.S))}. Tamanho aproximado: ${kb} KB.</p>
        <p>Última exportação: <strong>${AP.S.ultimoBackup ? AP.fmtData(AP.S.ultimoBackup, true) : 'nunca'}</strong>.</p>
        <div class="acoes-topo"><button type="button" class="btn btn-primario" data-acao="exportar-json">${AP.icone('baixar')} Exportar cópia completa (JSON)</button>
          <button type="button" class="btn btn-secundario" data-acao="exportar-md">${AP.icone('nota')} Exportar anotações legíveis (Markdown)</button>
          <label class="btn btn-secundario btn-arquivo">${AP.icone('subir')} Importar cópia (JSON)<input type="file" id="arquivo-importar" accept=".json,application/json"></label></div>
        <details class="orientacoes"><summary>Orientações para não perder nada</summary><ul>
          <li>Os dados ficam no armazenamento local do navegador (localStorage). Eles <strong>não</strong> passam de um navegador para outro, nem do computador para o celular.</li>
          <li>Limpar dados de navegação, usar janela anônima ou certas configurações de privacidade podem apagá-los. Alguns navegadores (como o Safari) podem apagar dados de sites não visitados por várias semanas.</li>
          <li>Exporte uma cópia JSON com regularidade — por exemplo, toda semana em que escrever bastante — e guarde-a numa pasta de backup ou nuvem pessoal.</li>
          <li>Para continuar em outro dispositivo: ligue a sincronização com o Supabase (acima) ou exporte aqui, abra o Ateliê lá e use “Importar cópia”.</li>
          <li>O arquivo Markdown é para ler, imprimir ou guardar seus textos; ele não serve para importar de volta.</li></ul></details>
      </section>
      <section class="ficha-sec"><h2>Aparência e leitura</h2>
        <fieldset class="grupo-radio"><legend>Tema</legend>${radio('tema', 'sistema', 'Seguir o sistema', p.tema)}${radio('tema', 'claro', 'Claro', p.tema)}${radio('tema', 'escuro', 'Escuro', p.tema)}</fieldset>
        <fieldset class="grupo-radio"><legend>Tamanho do texto</legend>${radio('fonte', 'normal', 'Normal', p.fonte)}${radio('fonte', 'grande', 'Grande', p.fonte)}</fieldset></section>
      <section class="ficha-sec"><h2>Interesses</h2><p class="campo-dica">Usados apenas para destacar perguntas e sugestões no painel.</p>
        <div class="grade-checks">${Object.entries(A.eixos).map(([k, e]) => `<label class="opcao-check"><input type="checkbox" class="chk-interesse" value="${k}" ${p.interesses.includes(k) ? 'checked' : ''}><span>${esc(e.nome)}</span></label>`).join('')}</div>
        <p><a class="btn-link" href="#/inicio">Rever a tela de boas-vindas</a></p></section>
      <section class="ficha-sec zona-perigo"><h2>Apagar tudo</h2><p>Remove deste navegador todas as respostas, anotações, ideias, leituras e o progresso. Não é possível desfazer. Exporte uma cópia antes.</p>
        <button type="button" class="btn btn-perigo" data-acao="apagar-tudo">${AP.icone('lixo')} Apagar meus dados locais</button></section>
    </div>`;
  });
  document.addEventListener('change', (e) => {
    const el = e.target;
    if (el.dataset && el.dataset.pref) {
      AP.S.preferencias[el.dataset.pref] = el.value;
      AP.aplicarPreferencias(); AP.salvar();
    }
    if (el.id === 'arquivo-importar' && el.files && el.files[0]) importar(el.files[0], el);
  });

  AP.exportarJSON = () => {
    AP.S.ultimoBackup = AP.agora();
    AP.salvarJa();
    const pacote = { app: AP.ID_APP, versao: AP.VERSAO_DADOS, exportadoEm: AP.agora(), conteudo: A.meta.versaoConteudo, dados: AP.S };
    AP.baixar(`atelie-do-pensamento-${AP.dataArquivo()}.json`, JSON.stringify(pacote, null, 2), 'application/json');
  };
  AP.acao('exportar-json', () => { AP.exportarJSON(); AP.aviso('Cópia exportada. Guarde o arquivo em um lugar seguro.', 'ok'); setTimeout(reRender, 300); });
  AP.acao('exportar-md', () => AP.baixar(`atelie-anotacoes-${AP.dataArquivo()}.md`, gerarMarkdown(), 'text/markdown;charset=utf-8'));

  const validarPacote = (obj) => {
    const erros = [];
    if (!obj || typeof obj !== 'object') return ['O arquivo não contém um objeto JSON.'];
    if (obj.app !== AP.ID_APP) erros.push('O arquivo não parece ter sido exportado pelo Ateliê do Pensamento.');
    if (typeof obj.versao !== 'number') erros.push('A versão dos dados não foi informada.');
    else if (obj.versao > AP.VERSAO_DADOS) erros.push('O arquivo foi gerado por uma versão mais nova do Ateliê. Atualize o projeto antes de importar.');
    const d = obj.dados;
    if (!d || typeof d !== 'object') erros.push('O arquivo não contém dados.');
    else {
      const objs = ['unidades', 'respostas', 'notas', 'perguntas', 'casos', 'lab', 'livros'];
      objs.forEach((k) => { if (d[k] !== undefined && (typeof d[k] !== 'object' || Array.isArray(d[k]) || d[k] === null)) erros.push(`O campo “${k}” está em formato inesperado.`); });
      ['favoritos', 'ideias'].forEach((k) => { if (d[k] !== undefined && !Array.isArray(d[k])) erros.push(`O campo “${k}” deveria ser uma lista.`); });
      if (Array.isArray(d.ideias) && d.ideias.some((i) => !i || typeof i !== 'object' || typeof i.id !== 'string')) erros.push('Há ideias em formato inválido.');
    }
    return erros;
  };
  async function importar(arquivo, input) {
    const limpar = () => { input.value = ''; };
    if (arquivo.size > 20 * 1024 * 1024) { AP.aviso('Arquivo grande demais para ser uma cópia do Ateliê.', 'erro'); limpar(); return; }
    let obj;
    try { obj = JSON.parse(await arquivo.text()); }
    catch (e) { AP.aviso('Não foi possível ler o arquivo: ele não é um JSON válido.', 'erro'); limpar(); return; }
    const erros = validarPacote(obj);
    if (erros.length) { await AP.dialogo({ titulo: 'Arquivo incompatível', html: `<p>A importação foi cancelada; nada foi alterado.</p><ul>${erros.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`, botoes: [{ texto: 'Entendi', classe: 'btn-primario' }] }); limpar(); return; }
    const novo = AP.migrar(obj.dados);
    const escolha = await AP.dialogo({
      titulo: 'Substituir os dados atuais?',
      html: `<p><strong>Arquivo</strong> (exportado em ${AP.fmtData(obj.exportadoEm, true) || 'data desconhecida'}): ${resumoContagem(contarDados(novo))}.</p>
        <p><strong>Neste navegador agora</strong>: ${resumoContagem(contarDados(AP.S))}.</p>
        <p>A importação <strong>substitui</strong> tudo o que está neste navegador${AP.nuvem && AP.nuvem.conectada() ? ' e na nuvem (a versão anterior fica no histórico da nuvem)' : ''}. Se houver algo aqui que não está no arquivo, exporte uma cópia antes.</p>`,
      botoes: [{ texto: 'Cancelar', valor: 'cancelar', classe: 'btn-secundario' }, { texto: 'Exportar a cópia atual primeiro', valor: 'exportar', classe: 'btn-secundario' }, { texto: 'Substituir', valor: 'substituir', classe: 'btn-perigo' }]
    });
    limpar();
    if (escolha === 'exportar') { AP.exportarJSON(); AP.aviso('Cópia atual exportada. Agora selecione o arquivo de novo para importar.', 'ok'); return; }
    if (escolha !== 'substituir') return;
    AP.S = novo;
    AP.salvarJa(); AP.aplicarPreferencias(); indice = null;
    AP.aviso('Dados importados com sucesso.', 'ok');
    AP.ir('#/painel');
  }

  AP.acao('apagar-tudo', async () => {
    const ok = await AP.dialogo({
      titulo: 'Apagar todos os dados locais?',
      html: `<p>Isto remove deste navegador: ${resumoContagem(contarDados(AP.S))}. Não há como desfazer.</p>${AP.nuvem && AP.nuvem.conectada() ? '<p><strong>A sincronização está ligada:</strong> a nuvem também ficará vazia. A versão anterior continua no histórico da nuvem por 90 dias.</p>' : ''}<label class="campo-rotulo" for="conf-apagar">Para confirmar, digite <strong>APAGAR</strong></label><input id="conf-apagar" class="entrada" type="text" autocomplete="off">`,
      botoes: [{ texto: 'Cancelar', valor: false, classe: 'btn-secundario' }, { texto: 'Apagar definitivamente', classe: 'btn-perigo', validar: (d) => { const v = d.querySelector('#conf-apagar').value.trim().toUpperCase() === 'APAGAR'; if (!v) d.querySelector('#conf-apagar').setAttribute('aria-invalid', 'true'); return v; } }]
    });
    if (!ok) return;
    AP.S = AP.estadoInicial();
    AP.salvarJa(); AP.aplicarPreferencias();
    AP.aviso('Dados apagados.', 'ok');
    AP.ir('#/inicio');
  });

  function gerarMarkdown() {
    const L = [`# ${A.meta.nome} — minhas anotações`, '', `_Exportado em ${AP.fmtData(AP.agora(), true)}._`, ''];
    const bloco = (t) => String(t || '').trim();
    L.push('## Percurso', '');
    AP.ordemUnidades().forEach((uid) => {
      const lista = respostasTexto(uid);
      const nota = bloco(AP.S.notas['u:' + uid]);
      if (!lista.length && !nota) return;
      const u = A.unidades[uid];
      L.push(`### ${u.titulo}`, '', `> ${u.pergunta}`, '');
      lista.forEach((x) => L.push(`**${x.rotulo}**`, '', x.texto.trim(), ''));
      if (nota) L.push('**Anotações**', '', nota, '');
    });
    const res = Object.entries(AP.S.resumosModulo).filter(([, v]) => bloco(v));
    if (res.length) { L.push('## Resumos de módulo', ''); res.forEach(([id, v]) => { const m = A.etapas.flatMap((e) => e.modulos).find((x) => x.id === id); L.push(`### ${m ? m.titulo : id}`, '', v.trim(), ''); }); }
    const qs = Object.entries(AP.S.perguntas).filter(([, v]) => bloco(v.atividade) || bloco(v.notas));
    if (qs.length) { L.push('## Perguntas fundamentais', ''); qs.forEach(([id, v]) => { const q = A.perguntas.find((x) => x.id === id); L.push(`### ${q ? q.pergunta : id}`, ''); if (bloco(v.atividade)) L.push('**Atividade**', '', v.atividade.trim(), ''); if (bloco(v.notas)) L.push('**Anotações**', '', v.notas.trim(), ''); }); }
    const cs = Object.entries(AP.S.casos).filter(([, v]) => v.campos && Object.values(v.campos).some((x) => typeof x === 'string' && x.trim()));
    if (cs.length) {
      L.push('## Oficina de interpretação', '');
      const nomes = { inicial: 'Interpretação inicial', fatos: 'Fatos disponíveis', lacunas: 'Informações ausentes', hipoteses: 'Hipóteses', mudanca: 'O que mudou com a nova informação', perspectivas: 'Perspectivas', vieses: 'Vieses e pressupostos', conclusao: 'Conclusão provisória', confianca: 'Confiança', derrubaria: 'O que poderia derrubá-la', reflexao: 'O que mudou' };
      cs.forEach(([id, v]) => { const c = A.casos.find((x) => x.id === id); L.push(`### ${c ? c.titulo : id}`, ''); Object.entries(nomes).forEach(([k, n]) => { if (bloco(v.campos[k])) L.push(`**${n}**`, '', v.campos[k].trim(), ''); }); });
    }
    if (AP.S.ideias.length) { L.push('## Da intuição à ideia', ''); AP.S.ideias.forEach((i) => L.push(AP.markdownIdeia(i).replace(/^## /, '### ').replace(/\n### /g, '\n#### '), '')); }
    const lab = A.laboratorio.filter((x) => (AP.S.lab[x.id] || {}).tentativas && AP.S.lab[x.id].tentativas.length);
    if (lab.length) {
      L.push('## Laboratório de expressão', '');
      lab.forEach((x) => { L.push(`### ${x.letra}. ${x.titulo}`, ''); AP.S.lab[x.id].tentativas.forEach((t) => { L.push(`**Tentativa de ${AP.fmtData(t.data, true)}${t.rotulo ? ' — ' + t.rotulo : ''}**`, ''); Object.entries(t.campos).forEach(([, v]) => { if (bloco(v)) L.push(v.trim(), ''); }); }); });
    }
    const lv = Object.entries(AP.S.livros).filter(([, v]) => v && (v.status || bloco(v.impressoes) || bloco(v.perguntas) || bloco(v.conexoes)));
    if (lv.length) {
      L.push('## Biblioteca de ideias', '');
      lv.forEach(([id, v]) => { const b = A.livros.find((x) => x.id === id); if (!b) return; const st = v.status ? (A.statusLeitura.find((s) => s.id === v.status) || {}).nome : ''; L.push(`### ${b.titulo} — ${b.autor}${st ? ` (${st})` : ''}`, ''); [['impressoes', 'Impressões'], ['perguntas', 'Perguntas'], ['conexoes', 'Conexões']].forEach(([k, n]) => { if (bloco(v[k])) L.push(`**${n}**`, '', v[k].trim(), ''); }); });
    }
    if (AP.S.mapa.arestas.length || AP.S.mapa.nos.length) {
      L.push('## Mapa de ideias — minhas conexões', '');
      AP.S.mapa.nos.forEach((n) => L.push(`- Conceito: **${n.nome}**${n.desc ? ' — ' + n.desc : ''}`));
      const nome = (id) => ((A.mapa.nos.concat(AP.S.mapa.nos)).find((n) => n.id === id) || { nome: id }).nome;
      AP.S.mapa.arestas.forEach((e) => L.push(`- **${nome(e.a)} ↔ ${nome(e.b)}**: ${e.por}${e.limite ? ` (Limite: ${e.limite})` : ''}`));
      L.push('');
    }
    if (typeof AP.markdownConfronto === 'function') { const mc = AP.markdownConfronto(); if (mc.trim()) L.push(mc); }
    const rev = Object.entries(AP.S.revisoes).filter(([, v]) => v.length);
    const per = Object.entries(AP.S.revisoesPeriodicas).filter(([, v]) => v.length);
    if (rev.length || per.length || AP.S.desenvolvimento.entradas.length) {
      L.push('## Desenvolvimento', '');
      rev.forEach(([k, v]) => { const u = A.unidades[k.split('|')[0]]; L.push(`### Mesma pergunta, outra vez — ${u ? u.titulo : k}`, ''); v.forEach((h) => L.push(`**${AP.fmtData(h.data)}**`, '', h.texto, '')); });
      per.forEach(([k, v]) => { const u = A.unidades[k]; L.push(`### Revisão periódica — ${u ? u.titulo : k}`, ''); v.forEach((h) => L.push(`**${AP.fmtData(h.data)}**`, '', h.texto, '')); });
      AP.S.desenvolvimento.entradas.forEach((e) => { const a = A.aspectos.find((x) => x.id === e.aspecto); L.push(`- ${AP.fmtData(e.data)} · **${a ? a.nome : e.aspecto}**: ${e.texto}`); });
      L.push('');
    }
    return L.join('\n');
  }

  /* ------------------------- sobre ------------------------- */
  AP.rota('sobre', () => `<div class="pagina pagina-sobre">
    ${AP.cabecalho({ titulo: 'Sobre o Ateliê', sub: 'Como usar, o que existe e o que ainda não existe.' })}
    <section class="ficha-sec"><h2>Como usar</h2><ul class="caminhos">
      <li><strong>Percurso:</strong> seis etapas, com unidades de 15 a 30 minutos. A ordem é sugerida, não obrigatória.</li>
      <li><strong>Escreva antes de ler.</strong> As explicações rendem mais depois de uma tentativa sua. Os comentários abrem quando você pede.</li>
      <li><strong>Dias com pouco tempo:</strong> a atividade curta do painel, uma pergunta fundamental ou uma revisão periódica.</li>
      <li><strong>Dias com mais tempo:</strong> um caso da Oficina, uma ideia própria na ferramenta Da intuição à ideia ou um exercício do Laboratório.</li>
      <li><strong>Leituras:</strong> sempre opcionais. A Biblioteca permite marcar o que quer conhecer, sem contagem nem metas.</li>
      <li><strong>Confronto de ideias:</strong> os contrapontos nas unidades, a Arena de debates e o Exame de convicções pedem sua posição antes e depois de conhecer o outro lado. Em Desenvolvimento → Concordâncias, você vê o conjunto.</li></ul></section>
    <section class="ficha-sec"><h2>Sobre o equilíbrio</h2><p>O Ateliê apresenta tradições diferentes — conservadoras, liberais, críticas, religiosas e seculares — na melhor versão de cada uma, com as críticas que cada uma recebe. Ele não decide por você qual está certa. Quando um autor é controverso, isso é dito, e as controvérsias são descritas com fatos verificáveis.</p></section>
    <section class="ficha-sec"><h2>Princípios</h2><ul class="caminhos">
      <li>Sem rastreamento e sem publicidade. Nada sai do seu navegador, a não ser que você ligue a sincronização opcional com o seu próprio Supabase — e, nesse caso, os dados vão só para lá.</li>
      <li>Sem inteligência artificial: os retornos vêm de comentários escritos para cada atividade, listas de verificação e uma leitura mecânica do texto, sempre identificada como tal.</li>
      <li>Sem notas sobre você: acompanhar o desenvolvimento é um exercício de auto-observação, não uma medida.</li>
      <li>Referências apenas a obras e autores reais; quando uma ideia é controversa, isso é dito.</li></ul></section>
    <section class="ficha-sec"><h2>Limitações conhecidas</h2><ul class="caminhos">
      <li>Os dados ficam só neste navegador; para mudar de dispositivo, exporte e importe.</li>
      <li>As etapas 2 a 6 têm algumas unidades completas e outras “em preparação”; as planejadas podem ser investigadas com a ferramenta Da intuição à ideia.</li>
      <li>O retorno sobre textos abertos não avalia o conteúdo das ideias — só você (ou alguém com quem você converse) pode fazer isso.</li></ul></section>
    <p class="campo-dica">Versão do conteúdo: ${esc(A.meta.versaoConteudo)}.</p></div>`);

  AP.rota('naoEncontrada', () => `<div class="pagina">${AP.cabecalho({ titulo: 'Página não encontrada', sub: 'O endereço não corresponde a nada no Ateliê.' })}<p><a class="btn btn-primario" href="#/painel">Ir para o painel</a></p></div>`);

  /* ------------------------- montagem da interface ------------------------- */
  const NAV = [
    ['Começar', [['painel', 'Painel', 'inicio'], ['percurso', 'Percurso', 'percurso']]],
    ['Explorar', [['perguntas', 'Perguntas fundamentais', 'pergunta'], ['debates', 'Arena de debates', 'balanca'], ['oficina', 'Oficina de interpretação', 'oficina'], ['biblioteca', 'Biblioteca de ideias', 'livro'], ['pensadores', 'Pensadores', 'pessoas'], ['mapa', 'Mapa de ideias', 'mapa']]],
    ['Ferramentas', [['intuicao', 'Da intuição à ideia', 'ideia'], ['conviccoes', 'Exame de convicções', 'alvo'], ['laboratorio', 'Laboratório de expressão', 'lab']]],
    ['Meu caderno', [['caderno', 'Caderno', 'caderno'], ['desenvolvimento', 'Desenvolvimento', 'broto']]]
  ];
  const PERTENCE = { debate: 'debates', conviccao: 'conviccoes', unidade: 'percurso', pergunta: 'perguntas', caso: 'oficina', livro: 'biblioteca', pensador: 'pensadores', lab: 'laboratorio', inicio: 'painel' };
  AP.atualizarNav = (pagina) => {
    const alvo = PERTENCE[pagina] || pagina;
    AP.$$('.nav-lateral a[data-nav]').forEach((a) => {
      const on = a.dataset.nav === alvo;
      a.classList.toggle('ativo', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    const pr = AP.progresso(AP.ordemUnidades());
    const el = document.getElementById('nav-progresso');
    if (el) el.innerHTML = `<span>${pr.feitas}/${pr.total} unidades</span>${AP.barra(pr.pct, 'Progresso geral')}`;
  };

  AP.montar = () => {
    const app = document.getElementById('app');
    app.innerHTML = `
      <a class="pular" href="#conteudo">Pular para o conteúdo</a>
      <header class="topo">
        <button type="button" class="btn-icone btn-menu" data-acao="menu" aria-label="Abrir menu" aria-controls="nav-lateral" aria-expanded="false">${AP.icone('menu')}</button>
        <a class="topo-marca" href="#/painel">${AP.marca()}<span>${esc(A.meta.nome)}</span></a>
        <a class="btn-icone" href="#/busca" aria-label="Buscar">${AP.icone('busca')}</a>
      </header>
      <nav class="nav-lateral" id="nav-lateral" aria-label="Navegação principal">
        <a class="nav-marca" href="#/painel">${AP.marca()}<span><strong>${esc(A.meta.nome)}</strong><small>caderno de investigação</small></span></a>
        <form class="nav-busca" data-acao-busca="1" role="search"><label for="busca-nav" class="sr">Buscar</label>${AP.icone('busca')}<input id="busca-nav" type="search" placeholder="Buscar…"></form>
        ${NAV.map(([grupo, itens]) => `<div class="nav-grupo"><p class="nav-titulo">${grupo}</p>${itens.map(([r, n, ic]) => `<a href="#/${r}" data-nav="${r}">${AP.icone(ic)}<span>${n}</span></a>`).join('')}</div>`).join('')}
        <div class="nav-rodape"><div id="nav-progresso" class="nav-progresso"></div>
          <a href="#/dados" data-nav="dados">${AP.icone('ajustes')}<span>Dados e ajustes</span></a>
          <a href="#/sobre" data-nav="sobre">${AP.icone('pergunta')}<span>Sobre</span></a>
          <p id="status-salvo" class="status-salvo" aria-live="polite"></p></div>
      </nav>
      <div class="veu" data-acao="fechar-menu"></div>
      <main id="conteudo" tabindex="-1"></main>
      <div id="avisos" class="avisos"></div>`;
    AP.statusSalvo(AP.storageOk ? 'salvo' : 'indisponivel');
  };
  AP.acao('menu', (el) => { const on = document.body.classList.toggle('menu-aberto'); el.setAttribute('aria-expanded', String(on)); if (on) { const a = AP.$('.nav-lateral a'); if (a) a.focus(); } });
  AP.acao('fechar-menu', () => { document.body.classList.remove('menu-aberto'); const b = AP.$('.btn-menu'); if (b) b.setAttribute('aria-expanded', 'false'); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && document.body.classList.contains('menu-aberto')) AP.acoes['fechar-menu'](); });

})();
