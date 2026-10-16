/* =========================================================
   Ateliê do Pensamento — núcleo
   utilidades, armazenamento local, roteamento, diálogos,
   ícones e componentes compartilhados.
   Sem telemetria e sem IA. Os dados ficam no navegador; só saem dele
   se você ligar a sincronização com o SEU Supabase (08-nuvem.js).
   ========================================================= */
(function () {
  'use strict';
  const A = window.ATELIE;
  const AP = (window.AP = {});

  /* ------------------------- utilidades ------------------------- */
  AP.$ = (s, el = document) => el.querySelector(s);
  AP.$$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  AP.esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  AP.norm = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  AP.uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  AP.agora = () => new Date().toISOString();
  AP.palavras = (t) => (String(t || '').trim().match(/\S+/g) || []).length;
  AP.semHtml = (h) => String(h || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
  AP.fmtData = (iso, comHora) => {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d)) return '';
    const o = { day: 'numeric', month: 'short', year: 'numeric' };
    if (comHora) { o.hour = '2-digit'; o.minute = '2-digit'; }
    return d.toLocaleDateString('pt-BR', o);
  };
  AP.diasDesde = (iso) => iso ? Math.floor((Date.now() - new Date(iso).getTime()) / 86400000) : Infinity;
  AP.plural = (n, um, varios) => `${n} ${n === 1 ? um : varios}`;

  /* ------------------------- armazenamento ------------------------- */
  const CHAVE = 'atelie-do-pensamento:v1';
  AP.VERSAO_DADOS = 1;
  AP.ID_APP = 'atelie-do-pensamento';

  AP.estadoInicial = () => ({
    versao: AP.VERSAO_DADOS,
    criadoEm: AP.agora(),
    atualizadoEm: AP.agora(),
    preferencias: { tema: 'sistema', fonte: 'normal', interesses: [], boasVindasVista: false },
    unidades: {},          // id -> { status, iniciadaEm, concluidaEm, revisitadaEm, ultimaVisita }
    respostas: {},         // unidadeId -> { campo: texto | valor }
    datas: {},             // 'caminho' -> data da última edição
    notas: {},             // ref -> texto (anotações livres)
    resumosModulo: {},     // moduloId -> texto
    favoritos: [],         // refs ('u:id', 'q:id', 'b:id'...)
    perguntas: {},         // id -> { atividade, notas }
    casos: {},             // id -> { etapa, campos, concluido, atualizado }
    lab: {},               // id -> { atual: {}, extra: {}, tentativas: [] }
    ideias: [],            // ferramenta Da intuição à ideia
    livros: {},            // id -> { status, impressoes, perguntas, conexoes }
    mapa: { nos: [], arestas: [], notas: {} },
    desenvolvimento: { entradas: [] },
    revisoes: {},          // 'unidade|campo' -> [{ data, texto }]
    revisoesPeriodicas: {},// unidadeId -> [{ data, texto }]
    debates: {},           // id -> { antes, depois, historico: [], campos: {} }
    conviccoes: [],        // Exame de convicções
    reacoes: {},           // chave -> { voto, porque, rotulo, href, data, historico: [] }
    ultimaUnidade: null,
    ultimoBackup: null
  });

  AP.storageOk = true;
  let pendente = null;

  AP.migrar = (d) => {
    const base = AP.estadoInicial();
    if (!d || typeof d !== 'object') return base;
    const r = Object.assign(base, d);
    r.preferencias = Object.assign(AP.estadoInicial().preferencias, d.preferencias || {});
    r.mapa = Object.assign({ nos: [], arestas: [], notas: {} }, d.mapa || {});
    r.desenvolvimento = Object.assign({ entradas: [] }, d.desenvolvimento || {});
    ['unidades', 'respostas', 'datas', 'notas', 'resumosModulo', 'perguntas', 'casos', 'lab', 'livros', 'revisoes', 'revisoesPeriodicas', 'debates', 'reacoes']
      .forEach((k) => { if (!r[k] || typeof r[k] !== 'object' || Array.isArray(r[k])) r[k] = {}; });
    ['favoritos', 'ideias', 'conviccoes'].forEach((k) => { if (!Array.isArray(r[k])) r[k] = []; });
    r.versao = AP.VERSAO_DADOS;
    return r;
  };

  AP.carregar = () => {
    try {
      const teste = '__atelie_teste__';
      localStorage.setItem(teste, '1');
      localStorage.removeItem(teste);
      const bruto = localStorage.getItem(CHAVE);
      AP.S = bruto ? AP.migrar(JSON.parse(bruto)) : AP.estadoInicial();
    } catch (e) {
      AP.storageOk = false;
      AP.S = AP.estadoInicial();
    }
  };

  AP.salvarJa = () => {
    clearTimeout(pendente);
    pendente = null;
    if (!AP.storageOk) { AP.statusSalvo('indisponivel'); return false; }
    try {
      AP.S.atualizadoEm = AP.agora();
      localStorage.setItem(CHAVE, JSON.stringify(AP.S));
      AP.statusSalvo('salvo');
      if (AP.aposSalvar) AP.aposSalvar();
      return true;
    } catch (e) {
      AP.statusSalvo('erro');
      AP.aviso('Não foi possível salvar: o armazenamento do navegador pode estar cheio. Exporte seus dados em “Dados e ajustes” para não perdê-los.', 'erro');
      return false;
    }
  };
  AP.salvar = () => {
    clearTimeout(pendente);
    AP.statusSalvo('salvando');
    pendente = setTimeout(AP.salvarJa, 350);
  };
  AP.temPendente = () => !!pendente;
  AP.tamanhoDados = () => { try { return new Blob([JSON.stringify(AP.S)]).size; } catch (e) { return 0; } };

  window.addEventListener('beforeunload', () => { if (pendente) AP.salvarJa(); });
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && pendente) AP.salvarJa(); });
  window.addEventListener('storage', (e) => {
    if (e.key === CHAVE) AP.aviso('Seus dados foram alterados em outra aba ou janela. Para não sobrescrever nada, recarregue esta página antes de continuar escrevendo.', 'erro', { acao: 'Recarregar', fn: () => location.reload() });
  });

  /* Leitura e escrita por caminho: ['respostas','u-natural','impressao'] */
  AP.ler = (caminho) => caminho.reduce((o, k) => (o == null ? undefined : o[k]), AP.S);
  AP.gravar = (caminho, valor) => {
    let o = AP.S;
    for (let i = 0; i < caminho.length - 1; i++) {
      if (o[caminho[i]] == null || typeof o[caminho[i]] !== 'object') o[caminho[i]] = {};
      o = o[caminho[i]];
    }
    o[caminho[caminho.length - 1]] = valor;
    AP.S.datas[caminho.join('|')] = AP.agora();
    if (caminho[0] === 'respostas') AP.marcarIniciada(caminho[1]);
    AP.salvar();
  };

  /* ------------------------- status de unidades ------------------------- */
  AP.ordemUnidades = () => A.etapas.flatMap((e) => e.modulos.flatMap((m) => m.unidades));
  AP.statusUnidade = (id) => (AP.S.unidades[id] && AP.S.unidades[id].status) || 'nova';
  AP.concluida = (id) => ['concluida', 'revisitada'].includes(AP.statusUnidade(id));
  AP.marcarIniciada = (id) => {
    if (!A.unidades[id]) return;
    const u = (AP.S.unidades[id] = AP.S.unidades[id] || {});
    if (!u.status) { u.status = 'iniciada'; u.iniciadaEm = AP.agora(); }
  };
  AP.localizar = (unidadeId) => {
    for (const e of A.etapas) for (const m of e.modulos) if (m.unidades.includes(unidadeId)) return { etapa: e, modulo: m };
    return {};
  };
  AP.progresso = (lista) => {
    const total = lista.length;
    const feitas = lista.filter(AP.concluida).length;
    return { total, feitas, pct: total ? Math.round((feitas / total) * 100) : 0 };
  };

  /* ------------------------- referências ------------------------- */
  AP.refInfo = (ref) => {
    const i = ref.indexOf(':');
    const tipo = ref.slice(0, i), id = ref.slice(i + 1);
    switch (tipo) {
      case 'u': { const u = A.unidades[id]; return u && { tipo: 'Unidade', titulo: u.titulo, href: '#/unidade/' + id }; }
      case 'q': { const q = A.perguntas.find((x) => x.id === id); return q && { tipo: 'Pergunta', titulo: q.pergunta, href: '#/pergunta/' + id }; }
      case 'b': { const b = A.livros.find((x) => x.id === id); return b && { tipo: 'Obra', titulo: `${b.titulo} — ${b.autor}`, href: '#/livro/' + id }; }
      case 'p': { const p = A.pensadores.find((x) => x.id === id); return p && { tipo: 'Pensador', titulo: p.nome, href: '#/pensador/' + id }; }
      case 'c': { const c = A.casos.find((x) => x.id === id); return c && { tipo: 'Caso', titulo: c.titulo, href: '#/caso/' + id }; }
      case 'x': { const x = A.laboratorio.find((e) => e.id === id); return x && { tipo: 'Laboratório', titulo: `${x.letra}. ${x.titulo}`, href: '#/lab/' + id }; }
      case 'n': { const n = A.mapa.nos.find((e) => e.id === id) || AP.S.mapa.nos.find((e) => e.id === id); return n && { tipo: 'Mapa', titulo: n.nome, href: '#/mapa/' + id }; }
      case 'd': { const d = (A.debates || []).find((x) => x.id === id); return d && { tipo: 'Debate', titulo: d.titulo, href: '#/debate/' + id }; }
      case 'ferramenta': {
        const f = { debates: ['Ferramenta', 'Arena de debates', '#/debates'], conviccoes: ['Ferramenta', 'Exame de convicções', '#/conviccoes'], intuicao: ['Ferramenta', 'Da intuição à ideia', '#/intuicao'], desenvolvimento: ['Ferramenta', 'Desenvolvimento', '#/desenvolvimento'], laboratorio: ['Ferramenta', 'Laboratório de expressão', '#/laboratorio'], oficina: ['Ferramenta', 'Oficina de interpretação', '#/oficina'], biblioteca: ['Ferramenta', 'Biblioteca de ideias', '#/biblioteca'], mapa: ['Ferramenta', 'Mapa de ideias', '#/mapa'], perguntas: ['Ferramenta', 'Perguntas fundamentais', '#/perguntas'] }[id];
        return f && { tipo: f[0], titulo: f[1], href: f[2] };
      }
    }
    return null;
  };
  AP.linkRef = (ref, extra) => {
    const r = AP.refInfo(ref);
    if (!r) return '';
    return `<a class="ref" href="${r.href}"><span class="ref-tipo">${AP.esc(r.tipo)}</span><span class="ref-titulo">${AP.esc(r.titulo)}</span>${extra ? `<span class="ref-txt">${extra}</span>` : ''}</a>`;
  };

  /* ------------------------- favoritos ------------------------- */
  AP.ehFavorito = (ref) => AP.S.favoritos.includes(ref);
  AP.alternarFavorito = (ref) => {
    const i = AP.S.favoritos.indexOf(ref);
    if (i >= 0) AP.S.favoritos.splice(i, 1); else AP.S.favoritos.unshift(ref);
    AP.salvar();
    return i < 0;
  };
  AP.botaoFavorito = (ref) => {
    const on = AP.ehFavorito(ref);
    return `<button type="button" class="btn btn-icone btn-fav" data-acao="favorito" data-ref="${AP.esc(ref)}" aria-pressed="${on}" title="${on ? 'Remover dos itens para revisitar' : 'Guardar para revisitar'}">${AP.icone(on ? 'estrela-cheia' : 'estrela')}<span>${on ? 'Guardado' : 'Guardar'}</span></button>`;
  };

  /* ------------------------- ícones ------------------------- */
  const IC = {
    inicio: '<path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z"/>',
    percurso: '<path d="M5 19c3-1 3-5 6-6s5 1 8-2"/><circle cx="5" cy="19" r="1.6"/><circle cx="19" cy="11" r="1.6"/><path d="M19 7V4"/><path d="M19 4h3l-1 1.5L22 7h-3"/>',
    pergunta: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.3a2.6 2.6 0 0 1 5 .9c0 1.8-2.5 2.2-2.5 3.8"/><circle cx="12" cy="17.2" r=".6" fill="currentColor"/>',
    oficina: '<path d="M12 3v18"/><path d="M5 7h14"/><path d="M5 7 2.5 13a3 3 0 0 0 5 0z"/><path d="M19 7l-2.5 6a3 3 0 0 0 5 0z"/><path d="M8 21h8"/>',
    lab: '<path d="M4 20l4-1L19 8l-3-3L5 16z"/><path d="M14 7l3 3"/>',
    ideia: '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
    livro: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/>',
    pessoas: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 4.5a3 3 0 0 1 0 6"/><path d="M18 14c2 .7 3 2.8 3 5"/>',
    mapa: '<circle cx="6" cy="6" r="2.2"/><circle cx="18" cy="7" r="2.2"/><circle cx="12" cy="18" r="2.2"/><circle cx="19" cy="17" r="1.6"/><path d="M8 7l8 .3M7.3 7.9l3.7 8.2M16.9 8.9l-3.8 7.4M14.2 18.1l3.2-.6"/>',
    caderno: '<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 3v18"/><path d="M12 8h4M12 12h4"/>',
    broto: '<path d="M12 21v-9"/><path d="M12 12c0-4 3-6 7-6 0 4-3 6-7 6z"/><path d="M12 14c0-3-2.5-5-6-5 0 3 2.5 5 6 5z"/>',
    busca: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
    ajustes: '<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>',
    estrela: '<path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8L3.5 9.7l5.9-.8z"/>',
    'estrela-cheia': '<path fill="currentColor" d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8L3.5 9.7l5.9-.8z"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    fechar: '<path d="M6 6l12 12M18 6 6 18"/>',
    esq: '<path d="M15 5l-7 7 7 7"/>',
    dir: '<path d="M9 5l7 7-7 7"/>',
    baixar: '<path d="M12 4v11"/><path d="m7 10 5 5 5-5"/><path d="M5 20h14"/>',
    subir: '<path d="M12 20V9"/><path d="m7 14 5-5 5 5"/><path d="M5 4h14"/>',
    lixo: '<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/>',
    lapis: '<path d="M4 20h4L19 9l-4-4L4 16z"/>',
    mais: '<path d="M12 5v14M5 12h14"/>',
    nota: '<path d="M5 4h10l4 4v12H5z"/><path d="M15 4v4h4"/><path d="M8 13h8M8 17h5"/>',
    espelho: '<rect x="6" y="3" width="12" height="15" rx="6"/><path d="M12 18v3M9 21h6"/>',
    balanca: '<path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h8A1.5 1.5 0 0 1 14 5.5v5a1.5 1.5 0 0 1-1.5 1.5H8l-3 2.5V12h-.5A1.5 1.5 0 0 1 3 10.5z"/><path d="M17 9h2.5A1.5 1.5 0 0 1 21 10.5v5a1.5 1.5 0 0 1-1.5 1.5H19v2.5L16 17h-4.5A1.5 1.5 0 0 1 10 15.5V15"/>',
    alvo: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
    olho: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>'
  };
  AP.icone = (nome, cls) => `<svg class="ic ${cls || ''}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${IC[nome] || ''}</svg>`;
  AP.marca = () => `<svg class="marca" viewBox="0 0 40 40" aria-hidden="true" focusable="false"><rect x="1.5" y="1.5" width="37" height="37" rx="9" fill="var(--acento)"/><path d="M11 29c2.5-9 6-15 9-15s4.5 6 9 15" fill="none" stroke="var(--papel)" stroke-width="2.2" stroke-linecap="round"/><path d="M14.5 23.5h11" stroke="var(--papel)" stroke-width="2.2" stroke-linecap="round"/><circle cx="20" cy="9.5" r="2.3" fill="var(--terracota-claro)"/></svg>`;

  /* ------------------------- campos de escrita ------------------------- */
  let contadorCampo = 0;
  /* campo(caminho, opções) — textarea com salvamento automático */
  AP.campo = (caminho, o = {}) => {
    const id = 'c' + (++contadorCampo);
    const valor = AP.ler(caminho) || '';
    const chave = caminho.join('|');
    const data = AP.S.datas[chave];
    const rotulo = o.rotulo ? `<label class="campo-rotulo" for="${id}">${o.rotulo}</label>` : `<label class="sr" for="${id}">${AP.esc(o.rotuloSr || 'Sua resposta')}</label>`;
    const dica = o.dica ? `<p class="campo-dica">${o.dica}</p>` : '';
    const limite = o.limitePalavras ? ` data-limite="${o.limitePalavras}"` : '';
    const meta = `<div class="campo-meta"><span class="campo-data" data-data-de="${AP.esc(chave)}">${data ? 'Editado em ' + AP.fmtData(data, true) : ''}</span>${o.limitePalavras ? `<span class="campo-conta" data-conta-de="${id}">${AP.palavras(valor)}/${o.limitePalavras} palavras</span>` : ''}${o.espelho ? `<button type="button" class="btn-link" data-acao="espelho" data-alvo="${id}" aria-expanded="false">${AP.icone('espelho')} Espelho do texto</button>` : ''}</div>`;
    return `<div class="campo ${o.grande ? 'campo-grande' : ''} ${o.curto ? 'campo-curto' : ''}">${rotulo}${dica}
      ${o.curto
        ? `<input type="text" id="${id}" class="entrada" data-k="${AP.esc(chave)}" value="${AP.esc(valor)}" placeholder="${AP.esc(o.placeholder || '')}" autocomplete="off">`
        : `<textarea id="${id}" class="entrada caderno-linhas" data-k="${AP.esc(chave)}" rows="${o.rows || (o.grande ? 9 : 4)}" placeholder="${AP.esc(o.placeholder || 'Escreva aqui…')}"${limite}>${AP.esc(valor)}</textarea>`}
      ${meta}${o.espelho ? `<div class="espelho" id="esp-${id}" hidden></div>` : ''}</div>`;
  };

  /* Escuta global: grava qualquer campo com data-k */
  document.addEventListener('input', (e) => {
    const el = e.target;
    if (!el.matches || !el.matches('[data-k]')) return;
    const caminho = el.dataset.k.split('|');
    AP.gravar(caminho, el.type === 'checkbox' ? el.checked : el.value);
    const d = document.querySelector(`[data-data-de="${CSS.escape(el.dataset.k)}"]`);
    if (d) d.textContent = 'Editado agora';
    if (el.dataset.limite) {
      const c = document.querySelector(`[data-conta-de="${el.id}"]`);
      const n = AP.palavras(el.value);
      if (c) { c.textContent = `${n}/${el.dataset.limite} palavras`; c.classList.toggle('excede', n > +el.dataset.limite); }
    }
    /* reflete o texto em outros lugares da página (ex.: comparação antes/agora) */
    document.querySelectorAll(`[data-reflete="${CSS.escape(el.dataset.k)}"]`).forEach((alvo) => {
      alvo.innerHTML = el.value.trim() ? `<blockquote>${AP.esc(el.value).replace(/\n/g, '<br>')}</blockquote>` : `<p class="vazio">${alvo.dataset.vazio || ''}</p>`;
    });
    const esp = document.getElementById('esp-' + el.id);
    if (esp && !esp.hidden) esp.innerHTML = AP.espelho(el.value);
    if (typeof AP.aoEditar === 'function') AP.aoEditar(el);
  });
  document.addEventListener('change', (e) => {
    const el = e.target;
    if (el.matches && el.matches('input[type=checkbox][data-k], select[data-k], input[type=radio][data-k]')) {
      const caminho = el.dataset.k.split('|');
      AP.gravar(caminho, el.type === 'checkbox' ? el.checked : el.value);
      if (typeof AP.aoEditar === 'function') AP.aoEditar(el);
    }
  });

  /* ------------------------- espelho do texto ------------------------- */
  const LISTAS = {
    conectivos: ['porque', 'pois', 'portanto', 'logo', 'entao', 'assim', 'ja que', 'por isso', 'consequentemente', 'dessa forma', 'desse modo', 'visto que', 'uma vez que', 'de modo que', 'por causa'],
    exemplos: ['por exemplo', 'como quando', 'imagine', 'e o caso de', 'pense em', 'tal como', 'no caso de', 'como no caso', 'um exemplo'],
    contraste: ['mas', 'porem', 'no entanto', 'contudo', 'embora', 'por outro lado', 'apesar', 'entretanto', 'todavia', 'ainda assim', 'mesmo assim'],
    ressalvas: ['talvez', 'possivelmente', 'provavelmente', 'em parte', 'depende', 'nem sempre', 'parece', 'pode ser', 'em alguns casos', 'em geral', 'muitas vezes', 'frequentemente', 'nao sei'],
    generalizacoes: ['sempre', 'nunca', 'todos', 'todas', 'todo mundo', 'ninguem', 'tudo', 'nada', 'qualquer', 'jamais', 'absolutamente'],
    vagas: ['coisa', 'coisas', 'tipo', 'algo', 'meio que', 'enfim', 'sei la', 'etc', 'negocio', 'basicamente', 'tal']
  };
  const contar = (texto, termo) => {
    const re = new RegExp('(^|[^a-z0-9])' + termo.replace(/ /g, '\\s+') + '(?=$|[^a-z0-9])', 'g');
    return (texto.match(re) || []).length;
  };
  const achados = (texto, lista) => lista.map((t) => [t, contar(texto, t)]).filter((x) => x[1] > 0);
  AP.espelho = (bruto) => {
    const t = String(bruto || '').trim();
    if (!t) return '<p class="espelho-vazio">Escreva algo para ver a leitura mecânica.</p>';
    const n = AP.norm(t);
    const pal = AP.palavras(t);
    const frases = Math.max(1, t.split(/[.!?…]+(?:\s|$)/).filter((s) => s.trim().length > 1).length);
    const media = Math.round(pal / frases);
    const ob = [];
    ob.push(`<li><strong>${AP.plural(pal, 'palavra', 'palavras')}</strong> em ${AP.plural(frases, 'frase', 'frases')} (média de ${media} por frase).${media > 35 ? ' Há frases longas; dividir alguma pode ajudar quem lê.' : ''}</li>`);
    const fmt = (arr) => arr.map(([w, c]) => `“${AP.esc(w)}”${c > 1 ? ' (' + c + ')' : ''}`).join(', ');
    const con = achados(n, LISTAS.conectivos);
    if (con.length) ob.push(`<li>Conectivos de justificação: ${fmt(con)}. Há ligações explícitas entre ideias.</li>`);
    else if (pal > 40) ob.push('<li>Não encontrei conectivos de justificação (porque, portanto, logo…). Se você está argumentando, talvez valha tornar explícita a ligação entre as ideias.</li>');
    const ex = achados(n, LISTAS.exemplos);
    if (ex.length) ob.push(`<li>Marcadores de exemplo: ${fmt(ex)}.</li>`);
    else if (pal > 60) ob.push('<li>Não encontrei marcadores de exemplo (“por exemplo”, “imagine”…). Um caso concreto costuma tornar a ideia mais clara — se ele já está lá sem marcador, ótimo.</li>');
    const ct = achados(n, LISTAS.contraste);
    if (ct.length) ob.push(`<li>Marcadores de contraste: ${fmt(ct)}. O texto parece considerar contrapontos ou ressalvas.</li>`);
    else if (pal > 80) ob.push('<li>Não há marcadores de contraste (mas, embora, no entanto…). Vale perguntar se existe uma objeção que mereça aparecer.</li>');
    const ger = achados(n, LISTAS.generalizacoes);
    if (ger.length) ob.push(`<li class="atencao">Palavras de generalização: ${fmt(ger)}. Confira se você quer mesmo dizer isso em todos os casos.</li>`);
    const vag = achados(n, LISTAS.vagas);
    if (vag.length) ob.push(`<li class="atencao">Termos possivelmente vagos: ${fmt(vag)}. Talvez valha nomear exatamente a que se referem.</li>`);
    const res = achados(n, LISTAS.ressalvas);
    if (res.length) ob.push(`<li>Expressões de incerteza ou ressalva: ${fmt(res)}. Elas indicam graus de confiança — o que é bom, desde que a tese continue clara.</li>`);
    const perg = (t.match(/\?/g) || []).length;
    if (perg) ob.push(`<li>${AP.plural(perg, 'pergunta', 'perguntas')} no texto.</li>`);
    return `<ul>${ob.join('')}</ul><p class="espelho-aviso">Leitura mecânica, feita no seu navegador: conta palavras, não entende ideias. Use-a como espelho, não como avaliação.</p>`;
  };

  /* ------------------------- avisos e status ------------------------- */
  AP.statusSalvo = (estado) => {
    const el = document.getElementById('status-salvo');
    if (!el) return;
    const nuvem = AP.nuvem && AP.nuvem.rotulo ? AP.nuvem.rotulo() : '';
    const txt = { salvando: 'Salvando…', salvo: nuvem || 'Salvo neste navegador', erro: 'Erro ao salvar', indisponivel: 'Armazenamento indisponível' }[estado] || '';
    el.textContent = txt;
    el.dataset.estado = estado;
  };
  AP.aviso = (msg, tipo, acao) => {
    const zona = document.getElementById('avisos');
    if (!zona) return;
    const div = document.createElement('div');
    div.className = 'aviso aviso-' + (tipo || 'info');
    div.setAttribute('role', tipo === 'erro' ? 'alert' : 'status');
    div.innerHTML = `<span>${AP.esc(msg)}</span>${acao ? `<button type="button" class="btn btn-pequeno">${AP.esc(acao.acao)}</button>` : ''}<button type="button" class="btn-icone btn-fechar-aviso" aria-label="Fechar aviso">${AP.icone('fechar')}</button>`;
    if (acao) div.querySelector('.btn-pequeno').addEventListener('click', acao.fn);
    div.querySelector('.btn-fechar-aviso').addEventListener('click', () => div.remove());
    zona.appendChild(div);
    if (tipo !== 'erro') setTimeout(() => div.remove(), 6000);
  };

  /* ------------------------- diálogos ------------------------- */
  AP.dialogo = ({ titulo, html, botoes }) => new Promise((resolve) => {
    const d = document.createElement('dialog');
    d.className = 'dialogo';
    d.setAttribute('aria-labelledby', 'dlg-titulo');
    d.innerHTML = `<form method="dialog"><h2 id="dlg-titulo">${AP.esc(titulo)}</h2><div class="dlg-corpo">${html || ''}</div><div class="dlg-botoes">${botoes.map((b, i) => `<button type="button" class="btn ${b.classe || ''}" data-i="${i}">${AP.esc(b.texto)}</button>`).join('')}</div></form>`;
    document.body.appendChild(d);
    const fechar = (v) => { d.close(); d.remove(); resolve(v); };
    d.addEventListener('cancel', (e) => { e.preventDefault(); fechar(null); });
    d.querySelectorAll('[data-i]').forEach((b) => b.addEventListener('click', () => {
      const bt = botoes[+b.dataset.i];
      if (bt.validar && !bt.validar(d)) return;
      fechar(bt.valor !== undefined ? bt.valor : true);
    }));
    if (typeof d.showModal === 'function') d.showModal(); else d.setAttribute('open', '');
    const foco = d.querySelector('input, textarea') || d.querySelector('.btn');
    if (foco) foco.focus();
  });
  AP.confirmar = (titulo, texto, ok = 'Confirmar', perigo = false) => AP.dialogo({
    titulo, html: `<p>${texto}</p>`,
    botoes: [{ texto: 'Cancelar', valor: false, classe: 'btn-secundario' }, { texto: ok, valor: true, classe: perigo ? 'btn-perigo' : 'btn-primario' }]
  });

  /* ------------------------- download ------------------------- */
  AP.baixar = (nome, conteudo, tipo) => {
    const blob = new Blob([conteudo], { type: tipo || 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = nome;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  };
  AP.dataArquivo = () => new Date().toISOString().slice(0, 10);

  /* ------------------------- tema e preferências ------------------------- */
  AP.aplicarPreferencias = () => {
    const p = AP.S.preferencias;
    const html = document.documentElement;
    if (p.tema === 'claro' || p.tema === 'escuro') html.dataset.theme = p.tema === 'claro' ? 'light' : 'dark';
    else delete html.dataset.theme;
    html.dataset.fonte = p.fonte || 'normal';
  };

  /* ------------------------- roteamento ------------------------- */
  AP.rotas = {};
  AP.rota = (nome, fn) => { AP.rotas[nome] = fn; };
  AP.rotaAtual = () => {
    const h = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
    const partes = h.split('/').filter(Boolean);
    return { nome: partes[0] || '', args: partes.slice(1) };
  };
  AP.ir = (hash) => { if (location.hash === hash) AP.renderizar(); else location.hash = hash; };

  AP.renderizar = () => {
    const { nome, args } = AP.rotaAtual();
    let pagina = nome;
    if (!nome) pagina = AP.S.preferencias.boasVindasVista ? 'painel' : 'inicio';
    const fn = AP.rotas[pagina] || AP.rotas.naoEncontrada;
    const main = document.getElementById('conteudo');
    AP.aoEditar = null;
    let resultado;
    try { resultado = fn(args); }
    catch (err) {
      console.error(err);
      resultado = `<div class="pagina"><h1>Algo deu errado ao abrir esta página</h1><p>Seus dados continuam salvos. Tente voltar ao <a href="#/painel">painel</a>. Se o problema persistir, exporte seus dados em <a href="#/dados">Dados e ajustes</a>.</p><pre class="erro-tecnico">${AP.esc(err && err.message)}</pre></div>`;
    }
    main.innerHTML = resultado;
    document.body.dataset.pagina = pagina;
    AP.atualizarNav(pagina);
    AP.$$('.passos-caso', main).forEach((lista) => {
      const atual = AP.$('.atual', lista);
      if (atual) lista.scrollLeft = Math.max(0, atual.offsetLeft - lista.clientWidth / 2 + atual.clientWidth / 2);
    });
    if (typeof AP.depoisRender === 'function') { const f = AP.depoisRender; AP.depoisRender = null; f(); }
    const alvo = AP.$('h1', main);
    if (alvo) { alvo.setAttribute('tabindex', '-1'); alvo.focus({ preventScroll: true }); }
    if (!AP._semRolagem) window.scrollTo(0, 0);
    AP._semRolagem = false;
    document.title = (alvo ? alvo.textContent.trim() + ' · ' : '') + A.meta.nome;
    document.body.classList.remove('menu-aberto');
  };

  /* ------------------------- ações por delegação ------------------------- */
  AP.acoes = {};
  AP.acao = (nome, fn) => { AP.acoes[nome] = fn; };
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-acao]');
    if (!el) return;
    const fn = AP.acoes[el.dataset.acao];
    if (fn) { e.preventDefault(); fn(el, e); }
  });

  AP.acao('favorito', (el) => {
    const on = AP.alternarFavorito(el.dataset.ref);
    el.setAttribute('aria-pressed', on);
    el.title = on ? 'Remover dos itens para revisitar' : 'Guardar para revisitar';
    el.innerHTML = `${AP.icone(on ? 'estrela-cheia' : 'estrela')}<span>${on ? 'Guardado' : 'Guardar'}</span>`;
  });
  AP.acao('espelho', (el) => {
    const alvo = document.getElementById(el.dataset.alvo);
    const caixa = document.getElementById('esp-' + el.dataset.alvo);
    if (!alvo || !caixa) return;
    caixa.hidden = !caixa.hidden;
    el.setAttribute('aria-expanded', String(!caixa.hidden));
    if (!caixa.hidden) caixa.innerHTML = AP.espelho(alvo.value);
  });
  /* revela um comentário depois de uma tentativa de escrita */
  AP.acao('revelar-apos', (el) => {
    const caixa = document.getElementById(el.dataset.caixa);
    const campo = el.dataset.campo ? document.getElementById(el.dataset.campo) : null;
    const vazio = campo && !campo.value.trim();
    if (vazio && el.dataset.avisado !== '1') {
      el.dataset.avisado = '1';
      const msg = el.parentElement.querySelector('.msg-tentar');
      if (msg) msg.hidden = false;
      el.textContent = 'Ver mesmo assim';
      return;
    }
    caixa.hidden = false;
    el.hidden = true;
    const msg = el.parentElement.querySelector('.msg-tentar');
    if (msg) msg.hidden = true;
    caixa.focus();
  });
  /* bloco "revelar depois de tentar" */
  AP.revelavel = (rotulo, html, campoId) => {
    const id = 'rv' + (++contadorCampo);
    return `<div class="revelavel"><button type="button" class="btn btn-secundario" data-acao="revelar-apos" data-caixa="${id}" ${campoId ? `data-campo="${campoId}"` : ''}>${AP.esc(rotulo)}</button>
      <p class="msg-tentar" hidden>Vale tentar escrever ao menos uma frase antes — o comentário rende mais depois de uma tentativa. Mas a escolha é sua.</p>
      <div class="revelado" id="${id}" tabindex="-1" hidden>${html}</div></div>`;
  };
  AP.ultimoCampoId = () => 'c' + contadorCampo;

  /* ------------------------- concordância: escala e reações ------------------------- */
  /* Escala de 5 pontos gravada num caminho do estado (contrapontos, debates) */
  AP.escala = (caminho, o = {}) => {
    const v = AP.ler(caminho);
    const rot = o.rotulos || A.escala.map((e) => e.nome);
    return `<div class="escala" role="group" aria-label="${AP.esc(o.aria || 'Sua posição')}">${rot.map((n, i) => `<button type="button" class="escala-op ${v === i + 1 ? 'ativa' : ''}" data-acao="escala" data-k="${AP.esc(caminho.join('|'))}" data-v="${i + 1}" aria-pressed="${v === i + 1}">${AP.esc(n)}</button>`).join('')}</div>`;
  };
  AP.acao('escala', (el) => {
    const caminho = el.dataset.k.split('|');
    const v = +el.dataset.v;
    AP.gravar(caminho, v);
    el.parentElement.querySelectorAll('.escala-op').forEach((b) => { const on = b === el; b.classList.toggle('ativa', on); b.setAttribute('aria-pressed', String(on)); });
    if (typeof AP.aoEscala === 'function') AP.aoEscala(el, caminho, v);
  });
  /* Reação "Isto me convence?" a uma perspectiva, pensador ou leitura */
  const VOTOS = [['sim', 'Me convence'], ['parte', 'Em parte'], ['nao', 'Não me convence']];
  AP.reacao = (chave, rotulo, href, pergunta) => {
    const r = AP.S.reacoes[chave] || {};
    const id = 'rc' + (++contadorCampo);
    return `<div class="reacao" data-chave="${AP.esc(chave)}" data-rotulo="${AP.esc(rotulo)}" data-href="${AP.esc(href || '')}">
      <p class="reacao-pergunta">${AP.esc(pergunta || 'Isto convence você?')}</p>
      <div class="reacao-ops" role="group" aria-label="${AP.esc(pergunta || 'Isto convence você?')}">${VOTOS.map(([v, n]) => `<button type="button" class="reacao-op op-${v} ${r.voto === v ? 'ativa' : ''}" data-acao="reagir" data-v="${v}" aria-pressed="${r.voto === v}">${n}</button>`).join('')}</div>
      <div class="reacao-porque" ${r.voto ? '' : 'hidden'}><label class="sr" for="${id}">Por quê?</label><textarea id="${id}" class="entrada" rows="2" data-k="reacoes|${AP.esc(chave)}|porque" placeholder="Por quê? Uma frase basta.">${AP.esc(r.porque || '')}</textarea>
      ${r.voto === 'nao' ? '<p class="campo-dica">Antes de descartar: você consegue formular esta posição na versão mais forte que um defensor reconheceria?</p>' : ''}</div></div>`;
  };
  AP.acao('reagir', (el) => {
    const box = el.closest('.reacao');
    const chave = box.dataset.chave;
    const r = (AP.S.reacoes[chave] = AP.S.reacoes[chave] || { historico: [] });
    if (r.voto && r.voto !== el.dataset.v) r.historico = (r.historico || []).concat([{ voto: r.voto, data: r.data }]);
    r.voto = el.dataset.v; r.data = AP.agora(); r.rotulo = box.dataset.rotulo; r.href = box.dataset.href;
    AP.salvar();
    box.querySelectorAll('.reacao-op').forEach((b) => { const on = b === el; b.classList.toggle('ativa', on); b.setAttribute('aria-pressed', String(on)); });
    const pq = box.querySelector('.reacao-porque');
    pq.hidden = false;
    let dica = pq.querySelector('.campo-dica');
    if (r.voto === 'nao' && !dica) pq.insertAdjacentHTML('beforeend', '<p class="campo-dica">Antes de descartar: você consegue formular esta posição na versão mais forte que um defensor reconheceria?</p>');
    if (r.voto !== 'nao' && dica) dica.remove();
  });
  /* Leva uma frase ao Exame de convicções */
  AP.acao('examinar', (el) => {
    if (typeof AP.novaConviccao !== 'function') return;
    const id = AP.novaConviccao(el.dataset.tese || '', el.dataset.origem || '');
    AP.ir('#/conviccao/' + id);
  });
  AP.botaoExaminar = (tese, origem) => `<button type="button" class="btn-link" data-acao="examinar" data-tese="${AP.esc(tese)}" data-origem="${AP.esc(origem || '')}">${AP.icone('alvo')} Levar ao Exame de convicções</button>`;

  /* ------------------------- componentes ------------------------- */
  AP.barra = (pct, rotulo) => `<div class="barra" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}" aria-label="${AP.esc(rotulo || 'Progresso')}"><span style="width:${pct}%"></span></div>`;
  AP.chipStatus = (id) => {
    const s = AP.statusUnidade(id);
    const t = { nova: 'Não iniciada', iniciada: 'Iniciada', concluida: 'Concluída', revisitada: 'Revisitada' }[s];
    return `<span class="chip chip-${s}">${s === 'concluida' || s === 'revisitada' ? AP.icone('check') : ''}${t}</span>`;
  };
  AP.cartaoLivro = (id) => {
    const b = A.livros.find((x) => x.id === id);
    if (!b) return '';
    const st = AP.S.livros[id] && AP.S.livros[id].status;
    const stNome = st ? (A.statusLeitura.find((x) => x.id === st) || {}).nome : '';
    return `<a class="cartao-livro" href="#/livro/${b.id}">
      <span class="cl-tipo">${AP.esc(b.tipo)} · ${AP.esc(b.ano)}</span>
      <span class="cl-titulo">${AP.esc(b.titulo)}</span>
      <span class="cl-autor">${AP.esc(b.autor)}</span>
      <span class="cl-porque">${AP.esc(b.porque)}</span>
      ${stNome ? `<span class="chip chip-leitura">${AP.esc(stNome)}</span>` : ''}</a>`;
  };
  AP.cabecalho = (o) => `<header class="cab-pagina">${o.trilha ? `<p class="trilha">${o.trilha}</p>` : ''}<h1>${o.titulo}</h1>${o.sub ? `<p class="sub">${o.sub}</p>` : ''}${o.extra || ''}</header>`;
})();
