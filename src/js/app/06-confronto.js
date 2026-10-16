/* =========================================================
   Confronto de ideias (v1.1)
   Arena de debates · Exame de convicções · Concordâncias
   Objetivo: ajudar a entender por que concordo ou discordo,
   e quando valeria a pena mudar de ideia.
   ========================================================= */
(function () {
  'use strict';
  const A = window.ATELIE, AP = window.AP, esc = AP.esc;
  const quebra = (t) => esc(t || '').replace(/\n/g, '<br>');
  const reRender = () => { AP._semRolagem = true; const y = scrollY; AP.renderizar(); scrollTo(0, y); };

  /* =========================================================
     ARENA DE DEBATES
     ========================================================= */
  const rotulosPolos = (d) => [`Totalmente: ${d.polos[0].nome}`, 'Mais perto do primeiro', 'No meio, ou não sei', 'Mais perto do segundo', `Totalmente: ${d.polos[1].nome}`];
  const posicaoTexto = (d, v) => v ? rotulosPolos(d)[v - 1] : '—';
  const regDebate = (id) => (AP.S.debates[id] = AP.S.debates[id] || { historico: [], campos: {} });

  AP.rota('debates', () => `<div class="pagina pagina-debates">
    ${AP.cabecalho({ titulo: 'Arena de debates', sub: 'Grandes controvérsias apresentadas na melhor versão de cada lado, com autores, obras e as críticas que cada um enfrenta. Antes de ler, você marca onde está; depois, onde ficou — e por quê. O objetivo não é chegar ao meio-termo, nem trocar de lado: é saber por que você está onde está.' })}
    <aside class="nota-honesta"><p><strong>Como usar:</strong> escolha um debate cuja resposta você acha óbvia. São esses os que mais rendem. E tente, em cada um, escrever a posição de que você discorda tão bem que um defensor dela a assinaria.</p></aside>
    <div class="grade-debates">${A.debates.map((d) => {
      const r = AP.S.debates[d.id];
      const pos = r && (r.depois || r.antes);
      return `<a class="cartao-debate" href="#/debate/${d.id}"><span class="cd-titulo">${esc(d.titulo)}</span><span class="cd-pergunta">${esc(d.pergunta)}</span>
        <span class="cd-polos"><span>${esc(d.polos[0].nome)}</span><span aria-hidden="true">×</span><span>${esc(d.polos[1].nome)}</span></span>
        ${pos ? `<span class="chip chip-iniciada">Sua posição: ${esc(posicaoTexto(d, pos))}</span>` : ''}</a>`;
    }).join('')}</div></div>`);

  AP.rota('debate', (args) => {
    const d = A.debates.find((x) => x.id === args[0]);
    if (!d) return AP.rotas.naoEncontrada();
    const r = regDebate(d.id);
    const k = (c) => ['debates', d.id, c];
    const polo = (p, i) => `<article class="polo polo-${i}"><p class="rotulo">Posição ${i + 1}</p><h2>${esc(p.nome)}</h2>
      <p class="polo-tese">${esc(p.tese)}</p>
      <h3>Argumentos</h3><ul>${p.argumentos.map((a) => `<li>${esc(a)}</li>`).join('')}</ul>
      <h3>Na melhor versão</h3><p>${p.melhor}</p>
      <h3>O que os críticos apontam</h3><p>${esc(p.criticas)}</p>
      <h3>Quem defende</h3><div class="lista-refs">${p.autores.map((x) => AP.linkRef(x)).join('')}</div>
      ${p.obras.length ? `<h3>Para ler</h3><div class="grade-livros">${p.obras.map(AP.cartaoLivro).join('')}</div>` : ''}
      ${AP.reacao(`deb:${d.id}:${i}`, `${p.nome} — ${d.titulo}`, '#/debate/' + d.id, 'Esta posição convence você?')}</article>`;
    const hist = (r.historico || []).slice().reverse().map((h) => `<li><strong>${AP.fmtData(h.data)}</strong>: ${esc(posicaoTexto(d, h.depois || h.antes))}${h.nota ? ` — ${esc(h.nota)}` : ''}</li>`).join('');
    const mov = AP.textoMovimentoDebate(d, r.antes, r.depois);
    return `<article class="pagina pagina-debate">
      ${AP.cabecalho({ trilha: '<a href="#/debates">Arena de debates</a>', titulo: esc(d.titulo), sub: esc(d.pergunta), extra: `<div class="cab-acoes">${AP.botaoFavorito('d:' + d.id)}</div>` })}
      <p class="debate-contexto">${esc(d.contexto)}</p>
      <section class="b b-impressao"><h2 class="rotulo">Antes de ler: onde você está?</h2>${AP.escala(k('antes'), { rotulos: rotulosPolos(d), aria: 'Sua posição antes de ler' })}
        ${AP.campo(k('primeira'), { rotulo: 'Por quê, em uma ou duas frases?', rows: 2 })}</section>
      <div class="polos">${d.polos.map(polo).join('')}</div>
      <section class="b b-conceito"><p class="rotulo">O que os dois lados costumam ignorar</p><p>${esc(d.ignorados)}</p><p class="rotulo">Uma terceira via possível</p><p>${esc(d.terceira)}</p></section>
      <section class="b b-passos"><h2>O seu exame</h2>
        ${AP.campo(k('steelman'), { rotulo: 'Escreva a posição de que você mais discorda, na versão mais forte possível', dica: 'Teste: um defensor dessa posição assinaria o que você escreveu, sem corrigir nada?', rows: 5, espelho: true })}
        ${AP.campo(k('incomodo'), { rotulo: 'O argumento do outro lado que mais incomodou você', dica: 'Incomodar não é convencer — mas costuma ser um sinal de que há algo a examinar.', rows: 3 })}
        ${AP.campo(k('perguntas'), { rotulo: 'Perguntas para você', dica: d.perguntas.map(esc).join(' · '), rows: 3 })}
        <p class="b-prompt">Depois de ler e escrever: onde você está agora?</p>${AP.escala(k('depois'), { rotulos: rotulosPolos(d), aria: 'Sua posição depois' })}
        <p class="cp-movimento" id="mov-debate" aria-live="polite">${mov}</p>
        ${AP.campo(k('sustenta'), { rotulo: 'O que sustenta sua posição agora?', rows: 3 })}
        ${AP.campo(k('mudaria'), { rotulo: 'O que faria você mudar de lado?', rows: 2 })}
        <div class="acoes-topo"><button type="button" class="btn btn-primario" data-acao="registrar-debate" data-id="${d.id}">Registrar minha posição de hoje</button>${AP.botaoExaminar(d.pergunta, 'Debate: ' + d.titulo)}</div>
        <p class="campo-dica">Registrar guarda uma marca datada da sua posição. Volte daqui a alguns meses e veja se ela mudou.</p>
        ${hist ? `<h3>Suas posições registradas</h3><ul class="historico">${hist}</ul>` : ''}
      </section></article>`;
  });
  AP.textoMovimentoDebate = (d, antes, depois) => {
    if (!antes || !depois) return '';
    if (antes === depois) return `Você ficou onde estava (“${posicaoTexto(d, depois)}”). O que sustentou sua posição diante dos argumentos contrários?`;
    return `Você se moveu de “${posicaoTexto(d, antes)}” para “${posicaoTexto(d, depois)}”. Que argumento fez a diferença?`;
  };
  AP.aoEscalaDebate = (el, caminho) => {
    if (caminho[0] !== 'debates') return;
    const d = A.debates.find((x) => x.id === caminho[1]);
    const r = AP.S.debates[d.id] || {};
    const m = document.getElementById('mov-debate');
    if (m) m.textContent = AP.textoMovimentoDebate(d, r.antes, r.depois);
  };
  AP.acao('registrar-debate', (el) => {
    const r = regDebate(el.dataset.id);
    if (!r.antes && !r.depois) { AP.aviso('Marque sua posição na escala antes de registrar.', 'info'); return; }
    r.historico = (r.historico || []).concat([{ data: AP.agora(), antes: r.antes || null, depois: r.depois || null, nota: (r.sustenta || '').slice(0, 140) }]);
    AP.salvarJa(); AP.aviso('Posição registrada.', 'ok'); reRender();
  });

  /* desafio do dia, para o painel */
  AP.desafioDoDia = () => {
    const dia = Math.floor(Date.now() / 86400000);
    const d = A.debates[dia % A.debates.length];
    const r = AP.S.debates[d.id] || {};
    const pos = r.depois || r.antes;
    if (pos && pos !== 3) {
      const outro = pos < 3 ? d.polos[1] : d.polos[0];
      return `<p class="rotulo">${AP.icone('balanca')} Desafio do dia</p><h3>${esc(d.titulo)}</h3><p>Você ficou mais perto de “${esc(pos < 3 ? d.polos[0].nome : d.polos[1].nome)}”. Hoje, escreva a melhor versão possível de: <strong>${esc(outro.nome)}</strong>.</p><a class="btn btn-secundario" href="#/debate/${d.id}">Aceitar o desafio</a>`;
    }
    return `<p class="rotulo">${AP.icone('balanca')} Desafio do dia</p><h3>${esc(d.titulo)}</h3><p>${esc(d.pergunta)} Marque onde você está antes de ler os dois lados — e veja se continua no mesmo lugar depois.</p><a class="btn btn-secundario" href="#/debate/${d.id}">Entrar no debate</a>`;
  };

  /* =========================================================
     EXAME DE CONVICÇÕES
     ========================================================= */
  AP.novaConviccao = (tese, origem) => {
    const id = AP.uid();
    AP.S.conviccoes.unshift({ id, tese: tese || '', origem: origem || '', criada: AP.agora(), atualizada: AP.agora(), confianca: 50, confiancaFinal: 50, campos: {}, historico: [] });
    AP.salvarJa();
    return id;
  };
  const acharC = (id) => AP.S.conviccoes.find((c) => c.id === id);
  const vereditoNome = (v) => (A.exame.vereditos.find((x) => x.id === v) || {}).nome || '';

  AP.rota('conviccoes', () => {
    const lista = AP.S.conviccoes.slice().sort((a, b) => (b.atualizada || '').localeCompare(a.atualizada || ''));
    return `<div class="pagina pagina-conviccoes">
      ${AP.cabecalho({ titulo: 'Exame de convicções', sub: 'Para examinar algo em que você acredita: de onde vem, o que sustenta, o que pressupõe, qual é o melhor argumento contra e o que faria você mudar. Não é um tribunal: o resultado pode ser manter a convicção com mais clareza, ajustá-la, suspender o juízo ou mudar de ideia.' })}
      <div class="acoes-topo"><button type="button" class="btn btn-primario" data-acao="nova-conviccao">${AP.icone('mais')} Examinar uma convicção</button></div>
      <details class="apoio"><summary>Sem ideia de por onde começar? Exemplos de convicções para examinar</summary>
        <ul class="lista-sugestoes">${A.exame.exemplos.map((t) => `<li><button type="button" class="btn-link" data-acao="examinar" data-tese="${esc(t)}">${esc(t)}</button></li>`).join('')}</ul>
        <p class="campo-dica">Os exemplos vêm de lados diferentes de propósito. Comece por uma convicção que você tem — e depois por uma que você rejeita.</p></details>
      <h2>Suas convicções em exame</h2>
      ${lista.length ? `<div class="grade-ideias">${lista.map((c) => {
        const h = c.historico || [];
        const ult = h[h.length - 1];
        const trilha = h.length ? `${h[0].confiancaInicial}% → ${ult.confiancaFinal}%` : `${c.confianca}%`;
        const velho = ult && AP.diasDesde(ult.data) > 60;
        return `<a class="cartao-ideia" href="#/conviccao/${c.id}"><span class="ci-titulo">${esc(c.tese || 'Convicção sem formulação')}</span>
          <span class="ci-meta">${h.length ? `${AP.plural(h.length, 'exame', 'exames')} · último: ${esc(vereditoNome(ult.veredito))} · confiança ${trilha}` : 'Ainda não examinada'}</span>
          ${velho ? '<span class="chip chip-iniciada">Hora de reexaminar</span>' : ''}</a>`;
      }).join('')}</div>` : '<p class="vazio">Nenhuma convicção em exame ainda.</p>'}</div>`;
  });
  AP.acao('nova-conviccao', () => AP.ir('#/conviccao/' + AP.novaConviccao('', '')));

  AP.rota('conviccao', (args) => {
    const c = acharC(args[0]);
    if (!c) return AP.rotas.naoEncontrada();
    const idx = AP.S.conviccoes.indexOf(c);
    const k = (...p) => ['conviccoes', idx, ...p];
    const kc = (p) => ['conviccoes', idx, 'campos', p];
    const cp = c.campos || {};
    AP.aoEditar = (el) => {
      c.atualizada = AP.agora();
      if (el.type === 'range') { const o = document.getElementById('out-' + el.id); if (o) o.textContent = el.value + '%'; }
    };
    const faixa = (campo, valor, rot) => `<div class="campo"><label class="campo-rotulo" for="rg-${campo}">${rot}</label><div class="faixa"><input type="range" id="rg-${campo}" min="0" max="100" step="5" value="${+valor || 0}" data-k="conviccoes|${idx}|${campo}"><output id="out-rg-${campo}" for="rg-${campo}">${+valor || 0}%</output></div>
      <p class="campo-dica">0% = certeza de que é falso · 50% = não sei · 100% = certeza de que é verdadeiro</p></div>`;
    const checks = (lista, prefixo) => `<div class="lista-checks">${lista.map((o) => `<label class="opcao-check"><input type="checkbox" data-k="conviccoes|${idx}|campos|${prefixo}_${o.id}" ${cp[prefixo + '_' + o.id] ? 'checked' : ''}><span><strong>${esc(o.nome)}</strong>${o.nota ? `<br><small class="campo-dica">${esc(o.nota)}</small>` : ''}</span></label>`).join('')}</div>`;
    const radios = (lista, campo) => `<div class="lista-checks">${lista.map((o) => `<label class="opcao-radio"><input type="radio" name="${campo}-${c.id}" value="${o.id}" data-k="conviccoes|${idx}|campos|${campo}" ${cp[campo] === o.id ? 'checked' : ''}><span><strong>${esc(o.nome)}</strong>${o.desc ? ` — ${esc(o.desc)}` : ''}</span></label>`).join('')}</div>`;
    const hist = (c.historico || []).slice().reverse().map((h) => `<li><strong>${AP.fmtData(h.data)}</strong> · ${esc(vereditoNome(h.veredito))} · confiança ${h.confiancaInicial}% → ${h.confiancaFinal}%${h.formulacao ? `<br><em>${esc(h.formulacao)}</em>` : ''}</li>`).join('');
    const sec = (n, t, corpo) => `<section class="b b-passos exame-sec"><h2><span class="exame-num">${n}</span> ${t}</h2>${corpo}</section>`;
    return `<article class="pagina pagina-conviccao">
      ${AP.cabecalho({ trilha: '<a href="#/conviccoes">Exame de convicções</a>', titulo: esc(c.tese || 'Nova convicção'), sub: c.origem ? esc(c.origem) : 'Responda no seu ritmo; tudo é salvo automaticamente.', extra: `<div class="cab-acoes"><button type="button" class="btn btn-icone" data-acao="excluir-conviccao" data-id="${c.id}">${AP.icone('lixo')}<span>Excluir</span></button></div>` })}
      ${sec(1, 'A convicção', `${AP.campo(k('tese'), { rotulo: 'Em uma frase, aquilo em que você acredita', rows: 2, dica: 'Formule de modo que alguém possa discordar. “Gosto de X” não é uma convicção a examinar; “X é melhor que Y para Z” é.' })}
        ${faixa('confianca', c.confianca, 'Quão seguro você está, antes do exame?')}`)}
      ${sec(2, 'Minhas razões', `${AP.campo(kc('razoes'), { rotulo: 'Por que acredito nisso?', dica: 'Uma razão por linha.', rows: 4 })}
        ${AP.campo(kc('principal'), { rotulo: 'Qual dessas razões sustentaria a convicção sozinha?', rows: 2, dica: 'Se nenhuma sustenta sozinha, o conjunto talvez seja mais frágil do que parece — ou elas se reforçam. Qual dos dois?' })}`)}
      ${sec(3, 'De onde ela vem', `<p class="campo-dica">Marque o que contribuiu. Origem não é validade: saber de onde vem uma crença não a confirma nem a refuta — mas indica onde examinar.</p>${checks(A.exame.origens, 'origem')}`)}
      ${sec(4, 'Que valores ela mobiliza', `<p class="campo-dica">Os fundamentos morais de Haidt (veja a unidade <a href="#/unidade/u-visoes">Por que concordo com o que concordo?</a>).</p>${checks(A.exame.fundamentos, 'fund')}
        ${AP.campo(kc('fundOutro'), { rotulo: 'Que fundamento pesa mais para quem discorda de você?', rows: 2 })}`)}
      ${sec(5, 'Que visão de natureza humana ela pressupõe', radios(A.exame.visoes, 'visao'))}
      ${sec(6, 'O melhor do outro lado', `${AP.campo(kc('outro'), { rotulo: 'A melhor versão da posição contrária', dica: 'Escreva como um defensor inteligente e honesto escreveria — não como você imagina que ele pensa.', rows: 5, espelho: true })}
        ${AP.campo(kc('quem'), { rotulo: 'Quem defende bem essa posição contrária?', rows: 2, dica: 'Procure na <a href="#/debates">Arena de debates</a>, em <a href="#/pensadores">Pensadores</a> ou na <a href="#/biblioteca">Biblioteca</a>. Já leu essa pessoa diretamente?' })}`)}
      ${sec(7, 'Os testes', `${AP.campo(kc('errado'), { rotulo: 'Se eu estivesse errado, o que eu esperaria ver no mundo?', rows: 2 })}
        ${AP.campo(kc('evidencia'), { rotulo: 'Que evidência ou argumento me faria mudar?', rows: 2, dica: 'Se nada faria, vale perguntar se é uma convicção examinável ou um compromisso de fé — o que é legítimo, desde que reconhecido.' })}
        ${AP.campo(kc('consistencia'), { rotulo: 'Eu aceitaria o mesmo tipo de argumento se ele levasse à conclusão oposta?', rows: 2, dica: 'O teste do duplo padrão: muitas vezes exigimos mais provas do que nos contraria.' })}
        ${AP.campo(kc('custo'), { rotulo: 'O que eu perderia se mudasse de ideia?', rows: 2, dica: 'Amizades, pertencimento, autoimagem, coerência com o passado. Esses custos são reais — e não são argumentos.' })}
        ${AP.campo(kc('paralaxe'), { rotulo: 'Minha convicção é coerente com a forma como eu de fato vivo?', rows: 2, dica: 'A “paralaxe cognitiva”: a distância entre o que se afirma e o que se vive.' })}`)}
      ${sec(8, 'O veredito de hoje', `${radios(A.exame.vereditos, 'veredito')}
        ${AP.campo(kc('formulacao'), { rotulo: 'Formulação depois do exame', rows: 2, dica: 'Mesmo que mantenha a convicção, ela talvez fique mais precisa ou mais modesta.' })}
        ${faixa('confiancaFinal', c.confiancaFinal, 'Quão seguro você está agora?')}
        <div class="acoes-topo"><button type="button" class="btn btn-primario" data-acao="registrar-exame" data-id="${c.id}">Registrar este exame</button></div>
        <p class="campo-dica">Cada exame registrado fica datado. Volte em alguns meses: reexaminar uma convicção é a melhor forma de ver seu pensamento em movimento.</p>
        ${hist ? `<h3>Exames registrados</h3><ul class="historico">${hist}</ul>` : ''}`)}
    </article>`;
  });
  AP.acao('registrar-exame', (el) => {
    const c = acharC(el.dataset.id);
    const v = (c.campos || {}).veredito;
    if (!String(c.tese || '').trim()) { AP.aviso('Formule a convicção antes de registrar.', 'info'); return; }
    if (!v) { AP.aviso('Escolha um veredito (manter, ajustar, suspender ou mudar).', 'info'); return; }
    c.historico = (c.historico || []).concat([{ data: AP.agora(), veredito: v, confiancaInicial: +c.confianca || 0, confiancaFinal: +c.confiancaFinal || 0, formulacao: (c.campos.formulacao || '').trim() }]);
    c.confianca = +c.confiancaFinal || 0;
    if ((c.campos.formulacao || '').trim() && v !== 'manter') c.tese = c.campos.formulacao.trim();
    c.atualizada = AP.agora();
    AP.salvarJa(); AP.aviso('Exame registrado.', 'ok'); reRender();
  });
  AP.acao('excluir-conviccao', async (el) => {
    if (!(await AP.confirmar('Excluir esta convicção?', 'O exame e o histórico serão apagados deste navegador.', 'Excluir', true))) return;
    AP.S.conviccoes = AP.S.conviccoes.filter((c) => c.id !== el.dataset.id);
    AP.salvarJa(); AP.ir('#/conviccoes');
  });

  /* =========================================================
     CONCORDÂNCIAS — aba do Desenvolvimento
     ========================================================= */
  const VOTO = { sim: 'Me convence', parte: 'Em parte', nao: 'Não me convence' };
  AP.abaConcordancias = () => {
    const R = AP.S.reacoes;
    const reacoes = Object.entries(R).filter(([, r]) => r && r.voto);
    /* espelho por afinidade, a partir das reações às ideias centrais dos pensadores */
    const porAfin = {};
    reacoes.filter(([k]) => k.startsWith('pens:')).forEach(([k, r]) => {
      const p = A.pensadores.find((x) => x.id === k.slice(5));
      (p && p.afinidades || []).forEach((a) => { porAfin[a] = porAfin[a] || { sim: 0, parte: 0, nao: 0 }; porAfin[a][r.voto]++; });
    });
    const tabela = Object.keys(porAfin).length ? `<table class="tabela-afin"><thead><tr><th>Afinidade</th><th>Me convence</th><th>Em parte</th><th>Não me convence</th></tr></thead><tbody>${Object.entries(porAfin).map(([a, c]) => `<tr><td>${esc(A.afinidades[a])}</td><td>${c.sim}</td><td>${c.parte}</td><td>${c.nao}</td></tr>`).join('')}</tbody></table>
      <p class="campo-dica">Um padrão aqui não é um defeito: é uma informação. Pergunte-se: na afinidade que você mais rejeita, já leu o melhor representante — diretamente, e não por resumos de seus críticos?</p>` : '<p class="vazio">Reaja às ideias centrais dos pensadores (na ficha de cada um) para ver aqui um espelho das suas afinidades.</p>';
    /* convicções */
    const conv = AP.S.conviccoes.map((c) => { const h = c.historico || []; return `<li><a href="#/conviccao/${c.id}">${esc(c.tese || 'Sem formulação')}</a> — ${h.length ? h.map((x) => `${AP.fmtData(x.data)}: ${esc(vereditoNome(x.veredito))} (${x.confiancaInicial}% → ${x.confiancaFinal}%)`).join('; ') : 'ainda não examinada'}</li>`; }).join('');
    /* debates */
    const deb = A.debates.filter((d) => AP.S.debates[d.id] && (AP.S.debates[d.id].antes || AP.S.debates[d.id].depois)).map((d) => { const r = AP.S.debates[d.id]; return `<li><a href="#/debate/${d.id}">${esc(d.titulo)}</a>: ${esc(posicaoTexto(d, r.antes))} → ${esc(posicaoTexto(d, r.depois))}</li>`; }).join('');
    /* contrapontos */
    const cps = [];
    Object.values(A.unidades).forEach((u) => u.blocos.filter((b) => b.t === 'contraponto').forEach((b) => {
      const r = AP.S.respostas[u.id] || {};
      const a = r['cp_' + b.id + '_antes'], dp = r['cp_' + b.id + '_depois'];
      if (a || dp) cps.push(`<li><a href="#/unidade/${u.id}">${b.titulo}</a>: ${a ? A.escala[a - 1].nome : '—'} → ${dp ? A.escala[dp - 1].nome : '—'}${r['cp_' + b.id + '_porque'] ? `<br><em>${esc(r['cp_' + b.id + '_porque'])}</em>` : ''}</li>`);
    }));
    /* reações por voto */
    const grupo = (v) => reacoes.filter(([, r]) => r.voto === v).map(([, r]) => `<li><a href="${esc(r.href || '#/')}">${esc(r.rotulo || '')}</a>${r.porque ? ` — <em>${esc(r.porque)}</em>` : ''}${(r.historico || []).length ? ` <span class="tag">mudou ${r.historico.length}×</span>` : ''}</li>`).join('');
    const mudaram = reacoes.filter(([, r]) => (r.historico || []).length).length;
    return `<p class="campo-dica">Aqui se reúne tudo em que você marcou concordância ou discordância: perspectivas nas unidades, contrapontos, debates, pensadores, leituras e convicções examinadas. Não é uma classificação de você — é um espelho para perguntar <em>por que</em> você concorda com o que concorda, e se algo merece ser revisto.</p>
      <section class="ficha-sec"><h2>Espelho das afinidades</h2>${tabela}</section>
      <section class="ficha-sec"><h2>Pensamento em movimento</h2><p>${mudaram ? `Você mudou de avaliação em ${AP.plural(mudaram, 'item', 'itens')} — cada mudança é um sinal de que o exame funcionou.` : 'Nenhuma avaliação mudou ainda. Isso pode significar convicções sólidas — ou que ainda não houve tempo de reexaminá-las.'}</p></section>
      <section class="ficha-sec"><h2>Convicções examinadas</h2>${conv ? `<ul class="historico">${conv}</ul>` : '<p class="vazio">Nenhuma ainda. <a href="#/conviccoes">Abrir o Exame de convicções</a>.</p>'}</section>
      <section class="ficha-sec"><h2>Debates</h2>${deb ? `<ul class="historico">${deb}</ul>` : '<p class="vazio">Nenhum debate com posição marcada. <a href="#/debates">Abrir a Arena</a>.</p>'}</section>
      <section class="ficha-sec"><h2>Contrapontos</h2>${cps.length ? `<ul class="historico">${cps.join('')}</ul>` : '<p class="vazio">Os contrapontos aparecem dentro das unidades do percurso.</p>'}</section>
      <section class="ficha-sec"><h2>O que não convence você</h2>${grupo('nao') ? `<p class="campo-dica">Para cada item: você consegue formular a posição na versão que um defensor reconheceria? Se não, a discordância ainda não foi testada.</p><ul class="historico">${grupo('nao')}</ul>` : '<p class="vazio">Nada marcado.</p>'}</section>
      <section class="ficha-sec"><h2>O que convence você em parte</h2>${grupo('parte') ? `<p class="campo-dica">Que parte? Muitas vezes é aí que mora o pensamento mais interessante.</p><ul class="historico">${grupo('parte')}</ul>` : '<p class="vazio">Nada marcado.</p>'}</section>
      <section class="ficha-sec"><h2>O que convence você</h2>${grupo('sim') ? `<p class="campo-dica">Qual é a melhor objeção a cada uma destas ideias? Concordar bem também exige conhecer o outro lado.</p><ul class="historico">${grupo('sim')}</ul>` : '<p class="vazio">Nada marcado.</p>'}</section>`;
  };

  /* =========================================================
     EXPORTAÇÃO EM MARKDOWN (anexada à exportação geral)
     ========================================================= */
  AP.markdownConfronto = () => {
    const L = [];
    const deb = A.debates.filter((d) => { const r = AP.S.debates[d.id]; return r && (r.antes || r.depois || Object.keys(r).some((k) => typeof r[k] === 'string' && r[k].trim())); });
    if (deb.length) {
      L.push('## Arena de debates', '');
      deb.forEach((d) => {
        const r = AP.S.debates[d.id];
        L.push(`### ${d.titulo}`, '', `Posição antes: ${posicaoTexto(d, r.antes)} · depois: ${posicaoTexto(d, r.depois)}`, '');
        [['primeira', 'Primeira justificativa'], ['steelman', 'A melhor versão do outro lado'], ['incomodo', 'O argumento que mais incomodou'], ['perguntas', 'Perguntas'], ['sustenta', 'O que sustenta minha posição'], ['mudaria', 'O que me faria mudar']].forEach(([c, n]) => { if (String(r[c] || '').trim()) L.push(`**${n}**`, '', r[c].trim(), ''); });
        (r.historico || []).forEach((h) => L.push(`- ${AP.fmtData(h.data)}: ${posicaoTexto(d, h.depois || h.antes)}`));
        L.push('');
      });
    }
    if (AP.S.conviccoes.length) {
      L.push('## Exame de convicções', '');
      const nomes = { razoes: 'Razões', principal: 'Razão principal', fundOutro: 'Fundamento que pesa para quem discorda', outro: 'A melhor versão do outro lado', quem: 'Quem defende o outro lado', errado: 'Se eu estivesse errado', evidencia: 'O que me faria mudar', consistencia: 'Teste do duplo padrão', custo: 'O que eu perderia', paralaxe: 'Coerência com a vida', formulacao: 'Formulação depois do exame' };
      AP.S.conviccoes.forEach((c) => {
        L.push(`### ${c.tese || 'Convicção sem formulação'}`, '');
        Object.entries(nomes).forEach(([k, n]) => { if (String((c.campos || {})[k] || '').trim()) L.push(`**${n}**`, '', c.campos[k].trim(), ''); });
        (c.historico || []).forEach((h) => L.push(`- ${AP.fmtData(h.data)}: ${vereditoNome(h.veredito)} (confiança ${h.confiancaInicial}% → ${h.confiancaFinal}%)`));
        L.push('');
      });
    }
    const rs = Object.values(AP.S.reacoes).filter((r) => r && r.voto);
    if (rs.length) {
      L.push('## Concordâncias e discordâncias', '');
      rs.forEach((r) => L.push(`- **${VOTO[r.voto]}** — ${r.rotulo || ''}${r.porque ? `: ${r.porque}` : ''}`));
      L.push('');
    }
    return L.join('\n');
  };

  /* entradas para a busca */
  AP.indiceConfronto = () => A.debates.map((d) => ({ tipo: 'Debate', titulo: d.titulo, href: '#/debate/' + d.id, texto: [d.titulo, d.pergunta, d.contexto, d.ignorados, d.terceira, ...d.polos.map((p) => [p.nome, p.tese, p.argumentos.join(' '), p.melhor, p.criticas].join(' '))].join(' ') }))
    .concat([{ tipo: 'Ferramenta', titulo: 'Exame de convicções', href: '#/conviccoes', texto: 'exame de convicções por que concordo discordo mudar de ideia crença confiança veredito fundamentos morais' }]);
})();
