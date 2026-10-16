/* =========================================================
   Da intuição à ideia · Laboratório de expressão · Mapa de ideias
   ========================================================= */
(function () {
  'use strict';
  const A = window.ATELIE, AP = window.AP, esc = AP.esc;
  const quebra = (t) => esc(t || '').replace(/\n/g, '<br>');

  /* =========================================================
     DA INTUIÇÃO À IDEIA
     O registro original e a versão organizada ficam guardados
     separadamente; nada é reescrito automaticamente.
     ========================================================= */
  AP.novaIdeia = (o = {}) => {
    const id = AP.uid();
    AP.S.ideias.unshift({
      id, titulo: o.titulo || '', criada: AP.agora(), atualizada: AP.agora(),
      original: '', originalSalvoEm: null, origem: o.origem || '',
      etapas: o.questao ? { questao: o.questao } : {}, etapaAtual: 0
    });
    AP.salvarJa();
    return id;
  };
  const acharIdeia = (id) => AP.S.ideias.find((x) => x.id === id);
  const progressoIdeia = (i) => A.etapasIntuicao.filter((e) => {
    const v = i.etapas[e.id];
    return e.subcampos ? v && Object.values(v).some((x) => String(x).trim()) : String(v || '').trim();
  }).length;

  AP.rota('intuicao', (args) => {
    if (args[0] === 'exemplo') return paginaExemplo();
    if (args[0]) return paginaIdeia(args[0], args[1]);
    const lista = AP.S.ideias.slice().sort((a, b) => (b.atualizada || '').localeCompare(a.atualizada || ''));
    return `<div class="pagina pagina-intuicao">
      ${AP.cabecalho({ titulo: 'Da intuição à ideia', sub: 'Para quando você percebe que há algo interessante, mas ainda não consegue explicar o quê. Primeiro você registra livremente; depois desenvolve o pensamento em oito etapas. O registro original fica guardado à parte, intacto.' })}
      <div class="acoes-topo"><button type="button" class="btn btn-primario" data-acao="nova-ideia">${AP.icone('mais')} Registrar uma nova intuição</button><a class="btn btn-secundario" href="#/intuicao/exemplo">${AP.icone('olho')} Ver um exemplo guiado</a></div>
      <aside class="nota-honesta"><p><strong>Sobre esta ferramenta:</strong> ela não usa inteligência artificial e não reescreve suas palavras. Ela organiza perguntas, guarda seus textos e oferece uma leitura mecânica opcional (o “Espelho do texto”), calculada no próprio navegador. O pensamento é seu.</p></aside>
      <ol class="etapas-intuicao-resumo">${A.etapasIntuicao.map((e) => `<li><strong>${esc(e.titulo)}</strong> — ${esc(e.perguntas)}</li>`).join('')}</ol>
      <h2>Suas ideias</h2>
      ${lista.length ? `<div class="grade-ideias">${lista.map((i) => {
        const p = progressoIdeia(i);
        return `<a class="cartao-ideia" href="#/intuicao/${i.id}"><span class="ci-titulo">${esc(i.titulo || 'Sem título')}</span><span class="ci-trecho">${esc((i.original || i.origem || '').slice(0, 140))}${(i.original || '').length > 140 ? '…' : ''}</span><span class="ci-meta">${p}/8 etapas · ${AP.fmtData(i.atualizada)}</span>${AP.barra(Math.round(p / 8 * 100), 'Etapas preenchidas')}</a>`;
      }).join('')}</div>` : '<p class="vazio">Nenhuma ideia registrada ainda.</p>'}
    </div>`;
  });
  AP.acao('nova-ideia', () => AP.ir('#/intuicao/' + AP.novaIdeia()));

  function paginaIdeia(id, modo) {
    const i = acharIdeia(id);
    if (!i) return AP.rotas.naoEncontrada();
    const idx = AP.S.ideias.indexOf(i);
    const k = (...c) => ['ideias', idx, ...c];
    AP.aoEditar = () => { i.atualizada = AP.agora(); };
    const trilha = '<a href="#/intuicao">Da intuição à ideia</a>';

    /* etapa 0 — registro livre */
    if (!i.originalSalvoEm) {
      return `<article class="pagina pagina-ideia">
        ${AP.cabecalho({ trilha, titulo: 'Registro livre', sub: 'Escreva o que pensou, observou, sentiu ou percebeu — confuso, incompleto, mal formulado. Não organize ainda.' })}
        ${i.origem ? `<p class="nota">${esc(i.origem)}</p>` : ''}
        ${AP.campo(k('titulo'), { rotulo: 'Um nome provisório (opcional)', curto: true, placeholder: 'Ex.: trabalho e valor' })}
        ${AP.campo(k('original'), { rotulo: 'O registro', rows: 10, grande: true, placeholder: 'Tem alguma coisa estranha em…' })}
        <p class="campo-dica">Ao seguir, este texto é guardado como <strong>registro original</strong>. Você poderá relê-lo sempre, e editá-lo só se escolher explicitamente.</p>
        <div class="acoes-topo"><button type="button" class="btn btn-primario" data-acao="salvar-original" data-id="${i.id}">Guardar o registro e começar a organizar ${AP.icone('dir')}</button>
        <button type="button" class="btn btn-secundario" data-acao="excluir-ideia" data-id="${i.id}">${AP.icone('lixo')} Descartar</button></div>
      </article>`;
    }

    if (modo === 'organizada') return paginaOrganizada(i);

    const n = Math.min(8, Math.max(1, i.etapaAtual || 1));
    const et = A.etapasIntuicao[n - 1];
    const original = `<details class="registro-original" ${n === 1 ? 'open' : ''}><summary>Registro original · ${AP.fmtData(i.originalSalvoEm, true)}</summary>
      ${i.editandoOriginal ? AP.campo(k('original'), { rows: 6, rotuloSr: 'Registro original' }) + `<button type="button" class="btn btn-pequeno" data-acao="fechar-original" data-id="${i.id}">Concluir edição</button>`
        : `<blockquote>${quebra(i.original) || '<em>(vazio)</em>'}</blockquote><button type="button" class="btn-link" data-acao="editar-original" data-id="${i.id}">${AP.icone('lapis')} Editar o registro original</button>`}</details>`;
    let campo;
    if (et.subcampos) campo = et.subcampos.map((s) => AP.campo(k('etapas', et.id, s.id), { rotulo: s.rotulo, rows: 3 })).join('');
    else campo = AP.campo(k('etapas', et.id), { rows: et.espelho ? 9 : 6, grande: et.espelho, espelho: et.espelho, rotuloSr: et.titulo });
    const ajuda = ajudaEtapa(i, et);
    const passos = A.etapasIntuicao.map((e) => {
      const v = i.etapas[e.id];
      const feito = e.subcampos ? v && Object.values(v).some((x) => String(x).trim()) : String(v || '').trim();
      return `<li class="${e.n === n ? 'atual' : ''} ${feito ? 'feito' : ''}"><button type="button" data-acao="etapa-ideia" data-id="${i.id}" data-n="${e.n}" ${e.n === n ? 'aria-current="step"' : ''}><span class="pn">${feito && e.n !== n ? AP.icone('check') : e.n}</span><span class="pt">${esc(e.titulo)}</span></button></li>`;
    }).join('');
    return `<article class="pagina pagina-ideia">
      ${AP.cabecalho({ trilha, titulo: esc(i.titulo || 'Ideia sem título'), extra: `<div class="cab-acoes"><a class="btn btn-icone" href="#/intuicao/${i.id}/organizada">${AP.icone('olho')}<span>Versão organizada</span></a><button type="button" class="btn btn-icone" data-acao="renomear-ideia" data-id="${i.id}">${AP.icone('lapis')}<span>Renomear</span></button><button type="button" class="btn btn-icone" data-acao="excluir-ideia" data-id="${i.id}">${AP.icone('lixo')}<span>Excluir</span></button></div>` })}
      ${original}
      <ol class="passos-caso passos-ideia" aria-label="Etapas">${passos}</ol>
      <section class="etapa-caso"><h2><span class="rotulo">Etapa ${n} de 8</span> ${esc(et.titulo)}</h2>
        <p class="b-prompt">${esc(et.perguntas)}</p><p class="campo-dica">${esc(et.dica)}</p>${ajuda}${campo}</section>
      <nav class="nav-unidades" aria-label="Navegação entre etapas">
        ${n > 1 ? `<button type="button" class="nav-ant" data-acao="etapa-ideia" data-id="${i.id}" data-n="${n - 1}">${AP.icone('esq')}<span><small>Etapa anterior</small>${esc(A.etapasIntuicao[n - 2].titulo)}</span></button>` : '<span></span>'}
        ${n < 8 ? `<button type="button" class="nav-prox" data-acao="etapa-ideia" data-id="${i.id}" data-n="${n + 1}"><span><small>Próxima etapa</small>${esc(A.etapasIntuicao[n].titulo)}</span>${AP.icone('dir')}</button>`
          : `<a class="nav-prox" href="#/intuicao/${i.id}/organizada"><span><small>Concluir</small>Ver a versão organizada</span>${AP.icone('dir')}</a>`}
      </nav></article>`;
  }

  /* pequenos apoios específicos de cada etapa, a partir do que já foi escrito */
  function ajudaEtapa(i, et) {
    const e = i.etapas;
    const caixa = (t, h) => `<div class="apoio"><p class="rotulo">${t}</p>${h}</div>`;
    switch (et.id) {
      case 'questao':
        return caixa('Tipos de pergunta', '<p>Conceitual (o que é X?) · empírica (o que acontece?) · histórica (como veio a ser?) · explicativa (por quê?) · normativa (o que deveria ser?) · pessoal (o que isso significa para mim?).</p>');
      case 'conceitos':
        return e.questao ? caixa('Sua pergunta', `<p>${quebra(e.questao)}</p><p class="campo-dica">Que palavras dela carregam mais peso?</p>`) : '';
      case 'estrutura':
        return caixa('Forma sugerida', '<p>P1. …<br>P2. …<br>P3 (implícita). …<br>C. Logo, …</p><p class="campo-dica">Teste: se P1 e P2 fossem verdadeiras, C teria de ser? O que falta?</p>');
      case 'alternativas':
        return caixa('Lembrete', '<p>Escreva a posição contrária como seus defensores a escreveriam — o “teste de Turing ideológico” da unidade sobre discordâncias.</p>');
      case 'formulacao': {
        const juntar = ['questao', 'conceitos', 'estrutura', 'evidencias', 'alternativas'].filter((x) => String(e[x] || '').trim());
        return juntar.length ? `<details class="apoio"><summary>Reler o que você já escreveu nas etapas anteriores</summary>${juntar.map((x) => `<p class="rotulo">${esc(A.etapasIntuicao.find((y) => y.id === x).titulo)}</p><p>${quebra(e[x])}</p>`).join('')}</details>` : '';
      }
      default: return '';
    }
  }

  function textoOrganizado(i) {
    const e = i.etapas;
    const s = e.sintese || {};
    const sec = (t, v) => v && String(v).trim() ? `<section class="ficha-sec"><h2>${t}</h2><p>${quebra(v)}</p></section>` : '';
    return sec('A questão central', e.questao) + sec('A formulação', e.formulacao) + sec('O que consigo defender agora', s.defendo) + sec('O que ainda não sei', s.naosei) + sec('O que me faria mudar de opinião', s.mudaria) +
      `<details class="detalhes-processo"><summary>O processo completo (etapas 1 a 6)</summary>${['intuicao', 'conceitos', 'estrutura', 'evidencias', 'alternativas'].map((x) => sec(A.etapasIntuicao.find((y) => y.id === x).titulo, e[x])).join('') || '<p class="vazio">Etapas ainda não preenchidas.</p>'}</details>`;
  }

  function paginaOrganizada(i) {
    const p = progressoIdeia(i);
    return `<article class="pagina pagina-ideia">
      ${AP.cabecalho({ trilha: `<a href="#/intuicao">Da intuição à ideia</a> / <a href="#/intuicao/${i.id}">${esc(i.titulo || 'Ideia')}</a>`, titulo: 'Versão organizada', sub: `${p} de 8 etapas preenchidas. Esta versão é montada a partir das suas próprias respostas; nada foi reescrito.`, extra: `<div class="cab-acoes"><a class="btn btn-icone" href="#/intuicao/${i.id}">${AP.icone('lapis')}<span>Continuar editando</span></a><button type="button" class="btn btn-icone" data-acao="exportar-ideia" data-id="${i.id}">${AP.icone('baixar')}<span>Exportar (Markdown)</span></button></div>` })}
      <div class="comparacao comparacao-ideia">
        <div class="comp-antes"><p class="rotulo">Registro original · ${AP.fmtData(i.originalSalvoEm)}</p><blockquote>${quebra(i.original) || '<em>(vazio)</em>'}</blockquote></div>
        <div class="comp-agora"><p class="rotulo">Versão organizada</p>${textoOrganizado(i)}</div>
      </div>
    </article>`;
  }

  function paginaExemplo() {
    const ex = A.exemploIntuicao;
    const e = ex.etapas;
    return `<article class="pagina pagina-ideia">
      ${AP.cabecalho({ trilha: '<a href="#/intuicao">Da intuição à ideia</a>', titulo: esc(ex.titulo), sub: 'Um exemplo completo, somente para leitura, mostrando o método aplicado à intuição sobre trabalho e valor. Repare que o resultado não é uma resposta definitiva, e sim uma posição mais clara, com dúvidas explícitas.' })}
      <section class="b b-impressao"><p class="rotulo">Registro original</p><blockquote>${esc(ex.original)}</blockquote></section>
      ${A.etapasIntuicao.map((et) => {
        const v = e[et.id];
        const corpo = et.subcampos ? et.subcampos.map((s) => `<p><strong>${esc(s.rotulo)}:</strong> ${esc(v[s.id])}</p>`).join('') : `<p>${quebra(v)}</p>`;
        return `<section class="b b-exemplo"><p class="rotulo">Etapa ${et.n} · ${esc(et.titulo)}</p><p class="campo-dica">${esc(et.perguntas)}</p>${corpo}</section>`;
      }).join('')}
      <div class="acoes-topo"><button type="button" class="btn btn-primario" data-acao="nova-ideia">${AP.icone('mais')} Registrar a sua intuição</button></div>
    </article>`;
  }

  AP.acao('salvar-original', async (el) => {
    const i = acharIdeia(el.dataset.id);
    if (!String(i.original || '').trim()) {
      const ok = await AP.confirmar('Registro vazio', 'Você ainda não escreveu nada no registro. Quer seguir mesmo assim? (Útil quando você parte de uma pergunta, e não de uma intuição.)', 'Seguir assim');
      if (!ok) return;
    }
    i.originalSalvoEm = AP.agora(); i.etapaAtual = 1; i.atualizada = AP.agora();
    if (!i.titulo) i.titulo = (i.original || i.etapas.questao || 'Ideia').trim().split(/\s+/).slice(0, 6).join(' ') + '…';
    AP.salvarJa(); AP.renderizar();
  });
  AP.acao('etapa-ideia', (el) => { const i = acharIdeia(el.dataset.id); i.etapaAtual = +el.dataset.n; AP.salvarJa(); AP.renderizar(); });
  AP.acao('editar-original', async (el) => {
    const ok = await AP.confirmar('Editar o registro original?', 'O registro original existe para mostrar de onde você partiu. Editá-lo apaga essa referência. Se quiser apenas acrescentar algo, talvez seja melhor fazê-lo nas etapas.', 'Editar mesmo assim');
    if (!ok) return;
    const i = acharIdeia(el.dataset.id); i.editandoOriginal = true; AP._semRolagem = true; AP.renderizar();
  });
  AP.acao('fechar-original', (el) => { const i = acharIdeia(el.dataset.id); delete i.editandoOriginal; i.originalSalvoEm = AP.agora(); AP.salvarJa(); AP._semRolagem = true; AP.renderizar(); });
  AP.acao('renomear-ideia', async (el) => {
    const i = acharIdeia(el.dataset.id);
    const v = await AP.dialogo({ titulo: 'Renomear ideia', html: `<label class="campo-rotulo" for="novo-nome">Nome</label><input id="novo-nome" class="entrada" type="text" value="${esc(i.titulo)}">`,
      botoes: [{ texto: 'Cancelar', valor: null, classe: 'btn-secundario' }, { texto: 'Salvar', classe: 'btn-primario', validar: (d) => { i._novo = d.querySelector('#novo-nome').value; return true; } }] });
    if (v) { i.titulo = (i._novo || '').trim() || i.titulo; }
    delete i._novo; AP.salvarJa(); AP.renderizar();
  });
  AP.acao('excluir-ideia', async (el) => {
    const ok = await AP.confirmar('Excluir esta ideia?', 'O registro original e todas as etapas serão apagados deste navegador. Não é possível desfazer.', 'Excluir', true);
    if (!ok) return;
    AP.S.ideias = AP.S.ideias.filter((x) => x.id !== el.dataset.id);
    AP.salvarJa(); AP.ir('#/intuicao');
  });
  AP.markdownIdeia = (i) => {
    const e = i.etapas, s = e.sintese || {};
    const l = [`## ${i.titulo || 'Ideia sem título'}`, '', `_Registrada em ${AP.fmtData(i.criada)}; atualizada em ${AP.fmtData(i.atualizada)}._`, ''];
    if (i.origem) l.push(`> ${i.origem}`, '');
    l.push('### Registro original', '', i.original || '(vazio)', '');
    A.etapasIntuicao.forEach((et) => {
      if (et.subcampos) {
        const linhas = et.subcampos.filter((x) => s[x.id]).map((x) => `- **${x.rotulo}:** ${s[x.id]}`);
        if (linhas.length) l.push(`### ${et.n}. ${et.titulo}`, '', ...linhas, '');
      } else if (String(e[et.id] || '').trim()) l.push(`### ${et.n}. ${et.titulo}`, '', e[et.id], '');
    });
    return l.join('\n');
  };
  AP.acao('exportar-ideia', (el) => {
    const i = acharIdeia(el.dataset.id);
    const nome = (i.titulo || 'ideia').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'ideia';
    AP.baixar(`${nome}.md`, `# ${A.meta.nome} — Da intuição à ideia\n\n${AP.markdownIdeia(i)}`, 'text/markdown;charset=utf-8');
  });

  /* =========================================================
     LABORATÓRIO DE EXPRESSÃO
     ========================================================= */
  const reg = (id) => (AP.S.lab[id] = AP.S.lab[id] || { atual: {}, extra: {}, tentativas: [] });

  AP.rota('laboratorio', () => `<div class="pagina pagina-lab">
    ${AP.cabecalho({ titulo: 'Laboratório de expressão', sub: 'Oito exercícios para transformar pensamentos em explicações claras e comunicáveis. Não é um curso de redação: o foco é a estrutura do conteúdo. Cada exercício pode ser refeito quantas vezes quiser; as tentativas ficam guardadas para você comparar.' })}
    <aside class="nota-honesta"><p><strong>Sobre o retorno:</strong> não há correção automática por inteligência artificial. O retorno vem de três fontes: comentários e estruturas-modelo escritos para cada exercício, listas de verificação para você revisar o próprio texto e o Espelho do texto, uma leitura mecânica (conta conectivos, exemplos, generalizações) feita no navegador.</p></aside>
    <div class="grade-lab">${A.laboratorio.map((x) => {
      const n = (reg(x.id).tentativas || []).length;
      return `<a class="cartao-lab" href="#/lab/${x.id}"><span class="cl-letra">${x.letra}</span><span class="cl-nome">${esc(x.titulo)}</span><span class="cl-obj">${esc(x.objetivo)}</span>${n ? `<span class="chip chip-iniciada">${AP.plural(n, 'tentativa salva', 'tentativas salvas')}</span>` : ''}</a>`;
    }).join('')}</div></div>`);

  AP.rota('lab', (args) => {
    const x = A.laboratorio.find((e) => e.id === args[0]);
    if (!x) return AP.rotas.naoEncontrada();
    const r = reg(x.id);
    const k = (c) => ['lab', x.id, 'atual', c];
    const ke = (c) => ['lab', x.id, 'extra', c];
    let corpo = '';
    let camposSalvar = [];
    const checklist = (lista) => lista ? `<section class="autoavaliacao"><h3>Revise seu texto</h3><p class="campo-dica">Marque o que seu texto já faz. O que ficar desmarcado é o próximo passo.</p><div class="lista-checks">${lista.map((t, i) => `<label class="opcao-check"><input type="checkbox" data-k="lab|${x.id}|atual|chk${i}" ${r.atual['chk' + i] ? 'checked' : ''}><span>${esc(t)}</span></label>`).join('')}</div></section>` : '';

    if (x.tipo === 'explicar') {
      const cid = r.extra.conceito || '';
      const c = A.conceitosExplicar.find((e) => e.id === cid);
      corpo = `<div class="campo"><label class="campo-rotulo" for="sel-conceito">Conceito</label><select id="sel-conceito" data-k="lab|${x.id}|extra|conceito" data-rerender="1"><option value="">Escolha…</option>${A.conceitosExplicar.map((e) => `<option value="${e.id}" ${cid === e.id ? 'selected' : ''}>${esc(e.nome)}${AP.concluida(e.unidade) ? '' : ' (unidade ainda não concluída)'}</option>`).join('')}</select></div>
        ${c ? `${AP.campo(k('texto'), { rotulo: `Explique “${esc(c.nome)}” com suas palavras`, dica: 'Sem consultar a unidade. Como você explicaria a um amigo curioso?', rows: 9, grande: true, espelho: true })}
          ${AP.revelavel('Ver os elementos essenciais', `<p>Uma boa explicação de “${esc(c.nome)}” costuma contemplar os pontos abaixo — com quaisquer palavras. Marque os que seu texto já cobre:</p><div class="lista-checks">${c.elementos.map((t, i) => `<label class="opcao-check"><input type="checkbox" data-k="lab|${x.id}|atual|el_${c.id}_${i}" ${r.atual['el_' + c.id + '_' + i] ? 'checked' : ''}><span>${esc(t)}</span></label>`).join('')}</div><p class="campo-dica">Os pontos desmarcados mostram o que ficou implícito ou de fora. Vale voltar à <a href="#/unidade/${c.unidade}">unidade</a> só depois de tentar completar.</p>`, AP.ultimoCampoId())}` : '<p class="campo-dica">Escolha um conceito para começar.</p>'}`;
      camposSalvar = ['texto'];
    } else if (x.tipo === 'conversa') {
      const pid = r.extra.persona || '';
      const p = x.personas.find((e) => e.id === pid);
      corpo = `<div class="personas" role="group" aria-label="Interlocutores">${x.personas.map((e) => `<button type="button" class="persona ${pid === e.id ? 'ativa' : ''}" data-acao="lab-extra" data-lab="${x.id}" data-campo="persona" data-valor="${e.id}" aria-pressed="${pid === e.id}"><strong>${esc(e.nome)}</strong><span>${esc(e.fala)}</span></button>`).join('')}</div>
        ${p ? `<div class="fala"><p class="rotulo">${esc(p.nome)} diz:</p><blockquote>${esc(p.fala)}</blockquote></div>
          ${AP.campo(k('resposta_' + p.id), { rotulo: 'Sua resposta, como numa conversa', rows: 8, grande: true, espelho: true })}
          ${AP.revelavel('Ver o que um bom interlocutor levaria em conta', `<ul>${p.pontos.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`, AP.ultimoCampoId())}
          ${checklist(x.checklist)}` : '<p class="campo-dica">Escolha um interlocutor.</p>'}`;
      camposSalvar = p ? ['resposta_' + p.id] : [];
    } else if (x.tipo === 'reconstruir') {
      const fid = r.extra.frase || '';
      const f = x.frases.find((e) => e.id === fid);
      corpo = `<div class="personas" role="group" aria-label="Frases">${x.frases.map((e) => `<button type="button" class="persona ${fid === e.id ? 'ativa' : ''}" data-acao="lab-extra" data-lab="${x.id}" data-campo="frase" data-valor="${e.id}" aria-pressed="${fid === e.id}"><strong>“${esc(e.frase)}”</strong></button>`).join('')}</div>
        ${f ? `${x.campos.map((c) => AP.campo(k(f.id + '_' + c.id), { rotulo: c.rotulo, dica: c.dica, rows: 3 })).join('')}
          ${AP.revelavel('Ver uma reconstrução possível', f.modelo, AP.ultimoCampoId())}${checklist(x.checklist)}` : '<p class="campo-dica">Escolha uma frase.</p>'}`;
      camposSalvar = f ? x.campos.map((c) => f.id + '_' + c.id) : [];
    } else {
      /* campos genéricos (B, C, D, F) e leitura (H) */
      const temas = x.opcoesTema ? `<div class="apoio"><p class="rotulo">Sugestões de posição</p><ul class="lista-sugestoes">${x.opcoesTema.map((t) => `<li><button type="button" class="btn-link" data-acao="lab-usar-tema" data-lab="${x.id}" data-valor="${esc(t)}">${esc(t)}</button></li>`).join('')}</ul></div>` : '';
      const livro = x.tipo === 'leitura' ? `<div class="campo"><label class="campo-rotulo" for="sel-livro">Obra (opcional)</label><select id="sel-livro" data-k="lab|${x.id}|extra|livro"><option value="">Outra obra, ou nenhuma da Biblioteca</option>${A.livros.map((b) => `<option value="${b.id}" ${r.extra.livro === b.id ? 'selected' : ''}>${esc(b.titulo)} — ${esc(b.autor)}</option>`).join('')}</select><p class="campo-dica">Se escolher uma obra da Biblioteca, as tentativas salvas aparecerão na ficha dela.</p></div>` : '';
      corpo = `${x.material || ''}${temas}${livro}${x.campos.map((c) => AP.campo(k(c.id), { rotulo: c.rotulo, dica: c.dica, rows: c.grande ? 9 : 3, grande: c.grande, espelho: c.espelho, limitePalavras: c.limitePalavras, curto: c.curto })).join('')}
        ${x.comentario ? AP.revelavel('Ver o comentário', x.comentario, AP.ultimoCampoId()) : ''}${checklist(x.checklist)}`;
      camposSalvar = x.campos.map((c) => c.id);
    }
    const tentativas = (r.tentativas || []).slice().reverse().map((t) => `<details class="tentativa"><summary>${AP.fmtData(t.data, true)}${t.rotulo ? ' · ' + esc(t.rotulo) : ''}</summary>${Object.entries(t.campos).filter(([, v]) => String(v).trim()).map(([c, v]) => `<p class="rotulo">${esc(rotuloCampo(x, c))}</p><p>${quebra(v)}</p>`).join('') || '<p class="vazio">(vazia)</p>'}<button type="button" class="btn-link" data-acao="lab-excluir-tentativa" data-lab="${x.id}" data-t="${t.id}">${AP.icone('lixo')} Excluir esta tentativa</button></details>`).join('');
    AP._labCampos = camposSalvar;
    return `<article class="pagina pagina-lab-ex">
      ${AP.cabecalho({ trilha: '<a href="#/laboratorio">Laboratório de expressão</a>', titulo: `<span class="letra-ex">${x.letra}</span> ${esc(x.titulo)}`, sub: esc(x.objetivo), extra: `<div class="cab-acoes">${AP.botaoFavorito('x:' + x.id)}</div>` })}
      <p class="b-prompt">${esc(x.instrucao)}</p>
      <div class="corpo-lab">${corpo}</div>
      ${camposSalvar.length ? `<div class="acoes-topo"><button type="button" class="btn btn-primario" data-acao="lab-salvar" data-lab="${x.id}">Guardar esta tentativa</button><button type="button" class="btn btn-secundario" data-acao="lab-limpar" data-lab="${x.id}">Começar uma nova</button></div>
        <p class="campo-dica">O texto em edição já fica salvo automaticamente. “Guardar esta tentativa” cria uma versão datada, para comparar com tentativas futuras.</p>` : ''}
      ${tentativas ? `<section class="tentativas"><h2>Tentativas guardadas</h2>${tentativas}</section>` : ''}
    </article>`;
  });

  function rotuloCampo(x, c) {
    if (x.campos) {
      const f = x.campos.find((e) => e.id === c || c.endsWith('_' + e.id));
      if (f) return f.rotulo.replace(/<[^>]+>/g, '');
    }
    if (c === 'texto') return 'Explicação';
    if (c.startsWith('resposta_')) return 'Resposta a ' + ((x.personas || []).find((p) => 'resposta_' + p.id === c) || { nome: '' }).nome;
    return c;
  }

  document.addEventListener('change', (e) => {
    if (e.target.dataset && e.target.dataset.rerender) { setTimeout(() => { AP._semRolagem = true; const y = scrollY; AP.renderizar(); scrollTo(0, y); }, 0); }
  });
  AP.acao('lab-extra', (el) => {
    const r = reg(el.dataset.lab);
    r.extra[el.dataset.campo] = el.dataset.valor;
    AP.salvarJa(); AP._semRolagem = true; const y = scrollY; AP.renderizar(); scrollTo(0, y);
  });
  AP.acao('lab-usar-tema', (el) => {
    const r = reg(el.dataset.lab);
    r.atual.posicao = el.dataset.valor;
    AP.salvarJa(); AP._semRolagem = true; const y = scrollY; AP.renderizar(); scrollTo(0, y);
  });
  AP.acao('lab-salvar', (el) => {
    const x = A.laboratorio.find((e) => e.id === el.dataset.lab);
    const r = reg(x.id);
    const campos = {};
    (AP._labCampos || []).forEach((c) => { campos[c] = r.atual[c] || ''; });
    if (!Object.values(campos).some((v) => String(v).trim())) { AP.aviso('Escreva algo antes de guardar uma tentativa.', 'info'); return; }
    let rotulo = '';
    if (x.tipo === 'explicar') rotulo = (A.conceitosExplicar.find((c) => c.id === r.extra.conceito) || {}).nome || '';
    if (x.tipo === 'conversa') rotulo = (x.personas.find((p) => p.id === r.extra.persona) || {}).nome || '';
    if (x.tipo === 'reconstruir') rotulo = (x.frases.find((p) => p.id === r.extra.frase) || {}).frase || '';
    if (x.tipo === 'leitura' && r.extra.livro) rotulo = (A.livros.find((b) => b.id === r.extra.livro) || {}).titulo || '';
    if (x.id === 'x-d') rotulo = r.atual.posicao || '';
    r.tentativas.push({ id: AP.uid(), data: AP.agora(), rotulo, campos, livro: x.tipo === 'leitura' ? r.extra.livro || null : undefined });
    AP.salvarJa(); AP.aviso('Tentativa guardada.', 'ok');
    AP._semRolagem = true; const y = scrollY; AP.renderizar(); scrollTo(0, y);
  });
  AP.acao('lab-limpar', async (el) => {
    const r = reg(el.dataset.lab);
    const ok = await AP.confirmar('Começar uma nova tentativa?', 'Os campos em edição serão esvaziados. Se ainda não guardou esta versão como tentativa, faça isso antes — ou ela será perdida.', 'Esvaziar os campos');
    if (!ok) return;
    r.atual = {};
    AP.salvarJa(); AP.renderizar();
  });
  AP.acao('lab-excluir-tentativa', async (el) => {
    const ok = await AP.confirmar('Excluir esta tentativa?', 'Ela será apagada deste navegador.', 'Excluir', true);
    if (!ok) return;
    const r = reg(el.dataset.lab);
    r.tentativas = r.tentativas.filter((t) => t.id !== el.dataset.t);
    AP.salvarJa(); AP._semRolagem = true; const y = scrollY; AP.renderizar(); scrollTo(0, y);
  });

  /* =========================================================
     MAPA DE IDEIAS
     Um grafo "ego": o conceito escolhido no centro e suas
     conexões ao redor. Leve, sem bibliotecas e estável.
     ========================================================= */
  const todosNos = () => A.mapa.nos.map((n) => Object.assign({ proprio: false }, n)).concat(AP.S.mapa.nos.map((n) => Object.assign({ proprio: true }, n)));
  const todasArestas = () => A.mapa.arestas.map((e) => Object.assign({ propria: false }, e)).concat(AP.S.mapa.arestas.map((e) => Object.assign({ propria: true }, e)));
  const nomeNo = (id) => (todosNos().find((n) => n.id === id) || { nome: id }).nome;

  function svgEgo(centro, vizinhos) {
    const W = 560, H = 400, cx = W / 2, cy = H / 2, R = Math.min(165, 70 + vizinhos.length * 9);
    const pos = vizinhos.map((v, i) => {
      const ang = -Math.PI / 2 + (2 * Math.PI * i) / Math.max(1, vizinhos.length);
      return { ...v, x: cx + R * 1.25 * Math.cos(ang), y: cy + R * Math.sin(ang) };
    });
    const linhas = pos.map((p) => `<line x1="${cx}" y1="${cy}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}" class="${p.propria ? 'aresta-propria' : 'aresta'}"/>`).join('');
    const nos = pos.map((p) => {
      const w = Math.max(56, p.nome.length * 7.6 + 22);
      return `<a href="#/mapa/${esc(p.id)}" class="no-link" aria-label="Centrar em ${esc(p.nome)}"><g class="no ${p.proprio ? 'no-proprio' : ''}"><rect x="${(p.x - w / 2).toFixed(1)}" y="${(p.y - 15).toFixed(1)}" width="${w.toFixed(1)}" height="30" rx="15"/><text x="${p.x.toFixed(1)}" y="${(p.y + 5).toFixed(1)}" text-anchor="middle">${esc(p.nome)}</text></g></a>`;
    }).join('');
    const wc = Math.max(80, centro.nome.length * 9 + 30);
    return `<svg class="grafo" viewBox="0 0 ${W} ${H}" role="img" aria-label="Conexões de ${esc(centro.nome)}: ${pos.map((p) => esc(p.nome)).join(', ')}">
      ${linhas}${nos}<g class="no no-centro"><rect x="${cx - wc / 2}" y="${cy - 20}" width="${wc}" height="40" rx="20"/><text x="${cx}" y="${cy + 6}" text-anchor="middle">${esc(centro.nome)}</text></g></svg>`;
  }

  AP.rota('mapa', (args) => {
    const nos = todosNos();
    const id = args[0] && nos.some((n) => n.id === args[0]) ? args[0] : 'dinheiro';
    const centro = nos.find((n) => n.id === id);
    const arestas = todasArestas().filter((e) => e.a === id || e.b === id);
    const vizinhos = arestas.map((e) => { const outro = e.a === id ? e.b : e.a; const n = nos.find((x) => x.id === outro) || { id: outro, nome: outro }; return { ...n, propria: e.propria }; });
    const lista = arestas.map((e) => {
      const outro = e.a === id ? e.b : e.a;
      return `<li class="conexao ${e.propria ? 'conexao-propria' : ''}"><a class="conexao-alvo" href="#/mapa/${esc(outro)}">${esc(centro.nome)} ↔ ${esc(nomeNo(outro))}</a>${e.propria ? '<span class="tag">sua conexão</span>' : ''}
        <p><strong>Por que a conexão faz sentido:</strong> ${esc(e.por)}</p>${e.limite ? `<p><strong>Onde pode deixar de valer:</strong> ${esc(e.limite)}</p>` : ''}
        ${e.propria ? `<button type="button" class="btn-link" data-acao="mapa-excluir-aresta" data-id="${e.id}">${AP.icone('lixo')} Excluir</button>` : ''}</li>`;
    }).join('');
    const opcoes = (sel) => nos.slice().sort((a, b) => a.nome.localeCompare(b.nome, 'pt')).map((n) => `<option value="${esc(n.id)}" ${sel === n.id ? 'selected' : ''}>${esc(n.nome)}${n.proprio ? ' (seu)' : ''}</option>`).join('');
    const refs = (centro.refs || []).map((r) => AP.linkRef(r)).join('');
    return `<div class="pagina pagina-mapa">
      ${AP.cabecalho({ titulo: 'Mapa de ideias', sub: 'Escolha um conceito para vê-lo no centro, com suas conexões. Cada conexão diz por que faz sentido e onde pode deixar de valer. Você pode criar conceitos e conexões próprios.' })}
      <div class="nos-lista" role="navigation" aria-label="Conceitos do mapa">${nos.map((n) => `<a href="#/mapa/${esc(n.id)}" class="filtro ${n.id === id ? 'ativo' : ''} ${n.proprio ? 'filtro-proprio' : ''}" ${n.id === id ? 'aria-current="true"' : ''}>${esc(n.nome)}</a>`).join('')}</div>
      <div class="mapa-grade">
        <section class="mapa-visual">${vizinhos.length ? svgEgo(centro, vizinhos) : `<p class="vazio">“${esc(centro.nome)}” ainda não tem conexões. Crie a primeira abaixo.</p>`}
          <p class="campo-dica">Toque num conceito ao redor para colocá-lo no centro.</p></section>
        <section class="mapa-detalhe">
          <h2>${esc(centro.nome)}</h2><p>${esc(centro.desc || '')}</p>
          ${refs ? `<div class="lista-refs">${refs}</div>` : ''}
          ${centro.proprio ? `<button type="button" class="btn-link" data-acao="mapa-excluir-no" data-id="${esc(centro.id)}">${AP.icone('lixo')} Excluir este conceito</button>` : ''}
          ${AP.campo(['mapa', 'notas', id], { rotulo: 'Minhas observações sobre este conceito', dica: 'Experiências pessoais, perguntas, ligações com o que você vive.', rows: 3 })}
        </section>
      </div>
      <section class="conexoes-lista"><h2>Conexões (${arestas.length})</h2><ul>${lista || '<li class="vazio">Nenhuma conexão ainda.</li>'}</ul></section>
      <section class="mapa-criar">
        <details><summary>${AP.icone('mais')} Criar uma conexão</summary>
          <form class="form-mapa" data-form="aresta">
            <div class="duas-colunas"><label>De <select name="a" required>${opcoes(id)}</select></label><label>Para <select name="b" required><option value="">Escolha…</option>${opcoes('')}</select></label></div>
            <label>Por que a conexão faz sentido? <textarea name="por" rows="3" required class="entrada"></textarea></label>
            <label>Em que ponto ela pode deixar de valer? <textarea name="limite" rows="2" class="entrada"></textarea></label>
            <button type="submit" class="btn btn-primario">Adicionar conexão</button></form></details>
        <details><summary>${AP.icone('mais')} Criar um conceito</summary>
          <form class="form-mapa" data-form="no">
            <label>Nome <input name="nome" type="text" required class="entrada" maxlength="40"></label>
            <label>Descrição curta <input name="desc" type="text" class="entrada" maxlength="160"></label>
            <button type="submit" class="btn btn-primario">Adicionar conceito</button></form></details>
      </section></div>`;
  });

  document.addEventListener('submit', (e) => {
    const f = e.target;
    if (!f.dataset || !f.dataset.form) return;
    e.preventDefault();
    const d = Object.fromEntries(new FormData(f).entries());
    if (f.dataset.form === 'aresta') {
      if (!d.b || d.a === d.b) { AP.aviso('Escolha dois conceitos diferentes.', 'info'); return; }
      if (!String(d.por).trim()) { AP.aviso('Explique por que a conexão faz sentido.', 'info'); return; }
      AP.S.mapa.arestas.push({ id: AP.uid(), a: d.a, b: d.b, por: d.por.trim(), limite: (d.limite || '').trim(), criada: AP.agora() });
      AP.salvarJa(); AP.aviso('Conexão adicionada.', 'ok'); AP.ir('#/mapa/' + d.a);
    } else if (f.dataset.form === 'no') {
      const nome = String(d.nome || '').trim();
      if (!nome) return;
      const id = 'meu-' + AP.uid();
      AP.S.mapa.nos.push({ id, nome, desc: (d.desc || '').trim(), criado: AP.agora() });
      AP.salvarJa(); AP.aviso('Conceito criado. Agora conecte-o a outros.', 'ok'); AP.ir('#/mapa/' + id);
    }
  });
  AP.acao('mapa-excluir-aresta', async (el) => {
    if (!(await AP.confirmar('Excluir esta conexão?', 'Ela será removida do seu mapa.', 'Excluir', true))) return;
    AP.S.mapa.arestas = AP.S.mapa.arestas.filter((x) => x.id !== el.dataset.id);
    AP.salvarJa(); AP._semRolagem = true; AP.renderizar();
  });
  AP.acao('mapa-excluir-no', async (el) => {
    if (!(await AP.confirmar('Excluir este conceito?', 'O conceito e todas as conexões dele serão removidos do seu mapa.', 'Excluir', true))) return;
    const id = el.dataset.id;
    AP.S.mapa.nos = AP.S.mapa.nos.filter((x) => x.id !== id);
    AP.S.mapa.arestas = AP.S.mapa.arestas.filter((x) => x.a !== id && x.b !== id);
    delete AP.S.mapa.notas[id];
    AP.salvarJa(); AP.ir('#/mapa');
  });
})();
