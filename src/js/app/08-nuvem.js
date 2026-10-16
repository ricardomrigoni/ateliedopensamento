/* =========================================================
   Sincronização opcional com o Supabase
   ---------------------------------------------------------
   - Desligada por padrão. Só é usada se você informar a URL
     e a chave pública do SEU projeto Supabase e entrar com
     e-mail e senha.
   - O navegador continua sendo o lugar principal: tudo é
     salvo localmente primeiro e enviado à nuvem em seguida.
   - Sem bibliotecas externas: usa a API REST do Supabase
     (Auth e PostgREST) com fetch.
   - Controle de versão: um aparelho só sobrescreve a nuvem
     se conhecia a versão mais recente. Se não, pergunta.
   ========================================================= */
(function () {
  'use strict';
  const AP = window.AP;
  const esc = AP.esc;
  const CHAVE_NUVEM = 'atelie-do-pensamento:nuvem';
  const ESPERA_ENVIO = 2500;     // ms depois da última alteração
  const INTERVALO_CONSULTA = 30000; // ms mínimo entre consultas ao voltar para a aba

  const N = AP.nuvem = {};
  let cfg = {};
  let tEnvio = null;
  let enviando = null;
  let ultimaConsulta = 0;
  let aplicandoRemoto = false;
  let estado = 'desligada'; // desligada | ok | enviando | pendente | offline | erro | conflito | sessao

  /* ------------------------- configuração local ------------------------- */
  const lerCfg = () => {
    try { cfg = JSON.parse(localStorage.getItem(CHAVE_NUVEM) || '{}') || {}; } catch (e) { cfg = {}; }
    const padrao = window.ATELIE_NUVEM || {};
    if (!cfg.url && padrao.url) cfg.url = padrao.url;
    if (!cfg.chave && padrao.chave) cfg.chave = padrao.chave;
  };
  const gravarCfg = () => { try { localStorage.setItem(CHAVE_NUVEM, JSON.stringify(cfg)); } catch (e) { /* sem armazenamento */ } };
  const limparUrl = (u) => String(u || '').trim().replace(/\/+$/, '').replace(/\/(rest|auth)\/v1$/, '');
  const nomeDispositivo = () => {
    const ua = navigator.userAgent || '';
    const tipo = /iPhone|Android.+Mobile|Mobile/i.test(ua) ? 'Celular' : /iPad|Tablet|Android/i.test(ua) ? 'Tablet' : 'Computador';
    const nav = /Edg\//.test(ua) ? 'Edge' : /Firefox\//.test(ua) ? 'Firefox' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : 'navegador';
    return `${tipo} · ${nav}`;
  };

  N.configurada = () => !!(cfg.url && cfg.chave);
  N.conectada = () => !!(N.configurada() && cfg.sessao && cfg.sessao.refresh_token);
  N.email = () => cfg.email || '';

  /* ------------------------- status na barra ------------------------- */
  const ROTULOS = {
    ok: 'Salvo e sincronizado',
    enviando: 'Sincronizando…',
    pendente: 'Salvo aqui · enviando em instantes',
    offline: 'Salvo aqui · sem conexão, envia depois',
    erro: 'Salvo aqui · erro ao sincronizar',
    conflito: 'Salvo aqui · versões diferentes',
    sessao: 'Salvo aqui · entre de novo para sincronizar'
  };
  N.rotulo = () => (N.conectada() || estado === 'sessao' ? ROTULOS[estado] || '' : '');
  const mudarEstado = (e) => {
    estado = e;
    const el = document.getElementById('status-salvo');
    if (el && el.dataset.estado === 'salvo') AP.statusSalvo('salvo');
    if (el) el.dataset.nuvem = e;
    const painel = document.getElementById('nuvem-estado');
    if (painel) painel.textContent = descricaoEstado();
  };
  const descricaoEstado = () => {
    if (!N.conectada()) return 'Desconectado.';
    const quando = cfg.ultimaSinc ? AP.fmtData(cfg.ultimaSinc, true) : 'ainda não';
    return `${ROTULOS[estado] || 'Conectado'}. Última sincronização: ${quando}. Versão na nuvem: ${cfg.versao || '—'}.`;
  };

  /* ------------------------- requisições ------------------------- */
  class ErroNuvem extends Error { constructor(msg, tipo, status) { super(msg); this.tipo = tipo; this.status = status; } }

  async function chamar(caminho, { metodo = 'GET', corpo, token, cabecalhos = {}, manter = false } = {}) {
    if (!navigator.onLine) throw new ErroNuvem('Sem conexão com a internet.', 'offline');
    const h = Object.assign({ apikey: cfg.chave, 'Content-Type': 'application/json' }, cabecalhos);
    if (token) h.Authorization = 'Bearer ' + token;
    let r;
    try {
      r = await fetch(cfg.url + caminho, { method: metodo, headers: h, body: corpo === undefined ? undefined : JSON.stringify(corpo), keepalive: manter, cache: 'no-store' });
    } catch (e) {
      throw new ErroNuvem('Não foi possível falar com o Supabase. Confira a URL e a conexão.', navigator.onLine ? 'rede' : 'offline');
    }
    const texto = await r.text();
    let json = null;
    try { json = texto ? JSON.parse(texto) : null; } catch (e) { json = null; }
    if (!r.ok) {
      const msg = (json && (json.error_description || json.msg || json.message || json.error)) || `Erro ${r.status}`;
      throw new ErroNuvem(msg, r.status === 401 || r.status === 403 ? 'auth' : 'http', r.status);
    }
    return json;
  }

  function guardarSessao(j) {
    cfg.sessao = {
      access_token: j.access_token,
      refresh_token: j.refresh_token,
      expira: Date.now() + ((j.expires_in || 3600) - 60) * 1000
    };
    if (j.user && j.user.email) cfg.email = j.user.email;
    gravarCfg();
  }

  async function token() {
    if (!N.conectada()) throw new ErroNuvem('Não conectado.', 'sessao');
    if (cfg.sessao.access_token && Date.now() < cfg.sessao.expira) return cfg.sessao.access_token;
    try {
      const j = await chamar('/auth/v1/token?grant_type=refresh_token', { metodo: 'POST', corpo: { refresh_token: cfg.sessao.refresh_token } });
      guardarSessao(j);
      return cfg.sessao.access_token;
    } catch (e) {
      if (e.tipo === 'http' || e.tipo === 'auth') { cfg.sessao = null; gravarCfg(); throw new ErroNuvem('Sua sessão expirou. Entre de novo em “Dados e ajustes”.', 'sessao'); }
      throw e;
    }
  }

  /* chamada autenticada com uma nova tentativa se o token tiver vencido */
  async function api(caminho, opcoes = {}) {
    try { return await chamar(caminho, Object.assign({}, opcoes, { token: await token() })); }
    catch (e) {
      if (e.tipo !== 'auth') throw e;
      cfg.sessao.expira = 0;
      return chamar(caminho, Object.assign({}, opcoes, { token: await token() }));
    }
  }

  const lerRemoto = async () => {
    const linhas = await api('/rest/v1/atelie_estado?select=dados,versao,atualizado_em,dispositivo');
    return Array.isArray(linhas) && linhas[0] ? linhas[0] : null;
  };

  /* ------------------------- dados locais ------------------------- */
  const vazio = (S) => {
    const temObj = (o) => o && Object.keys(o).length > 0;
    return !(temObj(S.respostas) || temObj(S.unidades) || temObj(S.notas) || (S.ideias || []).length || temObj(S.livros) || temObj(S.casos) || temObj(S.lab) || temObj(S.debates) || (S.conviccoes || []).length || temObj(S.reacoes) || (S.mapa && S.mapa.nos.length) || (S.desenvolvimento && S.desenvolvimento.entradas.length));
  };
  const resumo = (S) => {
    const n = Object.values(S.respostas || {}).reduce((t, o) => t + Object.keys(o || {}).length, 0);
    const u = Object.values(S.unidades || {}).filter((x) => x && x.status === 'concluida').length;
    return `${AP.plural(n, 'resposta', 'respostas')}, ${AP.plural(u, 'unidade concluída', 'unidades concluídas')}, ${AP.plural((S.ideias || []).length, 'ideia', 'ideias')}`;
  };

  function aplicarRemoto(linha) {
    aplicandoRemoto = true;
    const ultimoBackup = AP.S.ultimoBackup;
    AP.S = AP.migrar(linha.dados);
    if (!AP.S.ultimoBackup) AP.S.ultimoBackup = ultimoBackup;
    AP.salvarJa();
    aplicandoRemoto = false;
    cfg.versao = linha.versao;
    cfg.sujo = false;
    cfg.ultimaSinc = AP.agora();
    gravarCfg();
    AP.aplicarPreferencias();
    const ativo = document.activeElement;
    const escrevendo = ativo && /TEXTAREA|INPUT/.test(ativo.tagName) && ativo.type !== 'checkbox' && ativo.type !== 'radio';
    if (!escrevendo) { AP._semRolagem = true; const y = scrollY; AP.renderizar(); scrollTo(0, y); }
  }

  /* ------------------------- envio ------------------------- */
  AP.aposSalvar = () => {
    if (aplicandoRemoto || !N.configurada() || !cfg.email) return;
    if (!cfg.sujo) { cfg.sujo = true; gravarCfg(); }   // marca mesmo sem sessão: sobe quando você entrar de novo
    if (!N.conectada()) return;
    if (estado === 'conflito' || estado === 'sessao') { mudarEstado(estado); return; } // espera a decisão / novo login
    mudarEstado('pendente');
    clearTimeout(tEnvio);
    tEnvio = setTimeout(() => N.enviar(), ESPERA_ENVIO);
  };

  N.enviar = async ({ manter = false, forcarBase } = {}) => {
    clearTimeout(tEnvio); tEnvio = null;
    if (!N.conectada()) return false;
    if (enviando) { await enviando.catch(() => {}); if (!cfg.sujo && forcarBase === undefined) return true; }
    const corpoDados = AP.S;
    const base = forcarBase !== undefined ? forcarBase : (cfg.versao || null);
    mudarEstado('enviando');
    let resultado = 'erro';
    enviando = (async () => {
      const r = await api('/rest/v1/rpc/atelie_salvar', { metodo: 'POST', manter, corpo: { p_dados: corpoDados, p_versao_base: base, p_dispositivo: nomeDispositivo() } });
      const linha = Array.isArray(r) ? r[0] : r;
      if (linha && linha.r_ok) {
        cfg.versao = linha.r_versao;
        if (corpoDados === AP.S && !tEnvio) cfg.sujo = false;
        cfg.ultimaSinc = AP.agora();
        gravarCfg();
        mudarEstado(cfg.sujo ? 'pendente' : 'ok');
        return 'ok';
      }
      return 'conflito';
    })();
    try { resultado = await enviando; }
    catch (e) { tratarErro(e); }
    finally { enviando = null; }
    if (resultado === 'conflito') { mudarEstado('conflito'); await resolverConflito(); }
    return resultado === 'ok';
  };

  function tratarErro(e) {
    if (e.tipo === 'offline' || e.tipo === 'rede') mudarEstado('offline');
    else if (e.tipo === 'sessao') { mudarEstado('sessao'); AP.aviso(e.message, 'erro', { acao: 'Entrar', fn: () => AP.ir('#/dados') }); }
    else { mudarEstado('erro'); AP.aviso('Sincronização: ' + e.message + ' Seus dados continuam salvos neste navegador.', 'erro'); }
  }

  /* ------------------------- recebimento ------------------------- */
  N.consultar = async ({ silencioso = true } = {}) => {
    if (!N.conectada() || enviando) return;
    ultimaConsulta = Date.now();
    try {
      const remoto = await lerRemoto();
      if (!remoto) {
        // nuvem vazia: envia o que existe aqui (se houver algo)
        if (!vazio(AP.S)) { cfg.versao = null; await N.enviar({ forcarBase: null }); }
        else { mudarEstado('ok'); }
        return;
      }
      if (cfg.versao === remoto.versao) {
        if (cfg.sujo) await N.enviar(); else { cfg.ultimaSinc = AP.agora(); gravarCfg(); mudarEstado('ok'); }
        return;
      }
      // a nuvem tem uma versão que este aparelho ainda não conhece
      if (!cfg.sujo || vazio(AP.S)) {
        aplicarRemoto(remoto);
        mudarEstado('ok');
        if (!silencioso) AP.aviso(`Dados atualizados com a versão da nuvem (salva em ${AP.fmtData(remoto.atualizado_em, true)}${remoto.dispositivo ? ', ' + remoto.dispositivo : ''}).`, 'ok');
        return;
      }
      mudarEstado('conflito');
      await resolverConflito(remoto);
    } catch (e) { tratarErro(e); }
  };

  let resolvendo = false;
  async function resolverConflito(remoto) {
    if (resolvendo) return;
    resolvendo = true;
    try {
      remoto = remoto || await lerRemoto();
      if (!remoto) { await N.enviar({ forcarBase: null }); return; }
      const escolha = await AP.dialogo({
        titulo: 'Há duas versões diferentes',
        html: `<p>Este aparelho tem alterações que ainda não foram para a nuvem, e a nuvem recebeu outra versão depois disso.</p>
          <ul><li><strong>Neste aparelho:</strong> ${esc(resumo(AP.S))}${AP.S.atualizadoEm ? ` — alterado em ${esc(AP.fmtData(AP.S.atualizadoEm, true))}` : ''}.</li>
          <li><strong>Na nuvem:</strong> ${esc(resumo(AP.migrar(remoto.dados)))} — salvo em ${esc(AP.fmtData(remoto.atualizado_em, true))}${remoto.dispositivo ? ` (${esc(remoto.dispositivo)})` : ''}.</li></ul>
          <p>Escolha qual fica valendo. A outra não se perde: ela é guardada no histórico da nuvem, e você pode recuperá-la em “Dados e ajustes → Versões guardadas na nuvem”.</p>`,
        botoes: [
          { texto: 'Decidir depois', valor: 'depois', classe: 'btn-secundario' },
          { texto: 'Usar a da nuvem', valor: 'nuvem', classe: 'btn-secundario' },
          { texto: 'Manter a deste aparelho', valor: 'local', classe: 'btn-primario' }
        ]
      });
      if (escolha === 'nuvem') {
        await guardarNoHistorico(AP.S, 'conflito');
        aplicarRemoto(remoto);
        mudarEstado('ok');
        AP.aviso('Agora vale a versão da nuvem. A deste aparelho foi guardada no histórico.', 'ok');
      } else if (escolha === 'local') {
        await guardarNoHistorico(remoto.dados, 'conflito', remoto.versao);
        cfg.sujo = true; gravarCfg();
        resolvendo = false;
        await N.enviar({ forcarBase: remoto.versao });
        if (estado === 'ok') AP.aviso('Agora vale a versão deste aparelho. A da nuvem foi guardada no histórico.', 'ok');
      } else {
        mudarEstado('conflito');
        AP.aviso('A sincronização fica pausada até você decidir. Tudo continua salvo neste navegador.', 'info', { acao: 'Decidir agora', fn: () => N.consultar({ silencioso: false }) });
      }
    } catch (e) { tratarErro(e); }
    finally { resolvendo = false; }
  }

  async function guardarNoHistorico(dados, origem, versao) {
    await api('/rest/v1/atelie_historico', { metodo: 'POST', corpo: { dados, origem, versao: versao || null, dispositivo: nomeDispositivo() }, cabecalhos: { Prefer: 'return=minimal' } });
  }

  /* ------------------------- entrar e sair ------------------------- */
  N.entrar = async (url, chave, email, senha) => {
    cfg.url = limparUrl(url);
    cfg.chave = String(chave || '').trim();
    if (!/^https:\/\/[^/]+$/.test(cfg.url)) throw new ErroNuvem('A URL do projeto deve ser algo como https://abcdefgh.supabase.co', 'cfg');
    if (!cfg.chave) throw new ErroNuvem('Informe a chave pública (anon ou publishable) do projeto.', 'cfg');
    let j;
    try { j = await chamar('/auth/v1/token?grant_type=password', { metodo: 'POST', corpo: { email: String(email).trim(), password: senha } }); }
    catch (e) {
      if (e.status === 400) throw new ErroNuvem('E-mail ou senha incorretos (ou o usuário ainda não foi confirmado no Supabase).', 'auth');
      if (e.status === 401) throw new ErroNuvem('O Supabase recusou a chave do projeto. Confira se copiou a chave pública (anon ou publishable).', 'auth');
      throw e;
    }
    // entrar com outra conta neste aparelho: não reaproveita a versão conhecida
    if (cfg.email && j.user && j.user.email && cfg.email !== j.user.email) { cfg.versao = null; cfg.sujo = false; }
    if (!cfg.versao) cfg.sujo = !vazio(AP.S);
    guardarSessao(j);
    gravarCfg();
    await primeiraSincronizacao();
  };

  async function primeiraSincronizacao() {
    const remoto = await lerRemoto();
    if (!remoto) {
      if (!vazio(AP.S)) await N.enviar({ forcarBase: null });
      else mudarEstado('ok');
      AP.aviso('Sincronização ligada. A partir de agora, o que você escrever aqui também vai para o seu Supabase.', 'ok');
      return;
    }
    if (cfg.versao === remoto.versao) {
      if (cfg.sujo) await N.enviar(); else mudarEstado('ok');
      return;
    }
    if (vazio(AP.S)) { aplicarRemoto(remoto); mudarEstado('ok'); AP.aviso('Seus dados da nuvem foram carregados neste aparelho.', 'ok'); return; }
    cfg.sujo = true; gravarCfg();
    await resolverConflito(remoto);
  }

  N.sair = async () => {
    if (cfg.sujo) await N.enviar();
    try { if (cfg.sessao && cfg.sessao.access_token) await chamar('/auth/v1/logout', { metodo: 'POST', token: cfg.sessao.access_token }); } catch (e) { /* ignora */ }
    cfg.sessao = null; cfg.versao = null; cfg.sujo = false;
    gravarCfg();
    mudarEstado('desligada');
  };

  /* ------------------------- histórico ------------------------- */
  N.listarHistorico = () => api('/rest/v1/atelie_historico?select=id,versao,origem,dispositivo,criado_em&order=criado_em.desc&limit=40');
  N.lerHistorico = async (id) => {
    const r = await api('/rest/v1/atelie_historico?select=dados,criado_em&id=eq.' + encodeURIComponent(id));
    return r && r[0];
  };

  /* ------------------------- ciclo de vida ------------------------- */
  let ouvindo = false;
  N.iniciar = () => {
    lerCfg();
    if (!N.conectada()) { mudarEstado('desligada'); return; }
    mudarEstado(cfg.sujo ? 'pendente' : 'ok');
    N.consultar();
    N.ativarEventos();
  };
  N.ativarEventos = () => {
    if (ouvindo) return;
    ouvindo = true;
    window.addEventListener('online', () => { if (!N.conectada()) return; if (cfg.sujo) N.enviar(); else N.consultar(); });
    window.addEventListener('offline', () => { if (N.conectada()) mudarEstado('offline'); });
    document.addEventListener('visibilitychange', () => {
      if (!N.conectada()) return;
      if (document.visibilityState === 'hidden') { if (cfg.sujo || tEnvio) N.enviar({ manter: JSON.stringify(AP.S).length < 60000 }); }
      else if (Date.now() - ultimaConsulta > INTERVALO_CONSULTA) N.consultar({ silencioso: false });
    });
  };
  lerCfg();

  /* ------------------------- seção em “Dados e ajustes” ------------------------- */
  N.secaoDados = () => {
    const padrao = window.ATELIE_NUVEM || {};
    const fixo = !!(padrao.url && padrao.chave);
    if (N.conectada()) {
      return `<section class="ficha-sec secao-nuvem"><h2>Sincronização na nuvem</h2>
        <p>Conectado ao seu Supabase como <strong>${esc(cfg.email)}</strong>. O que você escreve é salvo neste navegador e enviado à nuvem alguns segundos depois; ao abrir o Ateliê em outro aparelho, a versão mais recente é carregada.</p>
        <p class="nuvem-estado" id="nuvem-estado" aria-live="polite">${esc(descricaoEstado())}</p>
        <div class="acoes-topo">
          <button type="button" class="btn btn-primario" data-acao="nuvem-sincronizar">Sincronizar agora</button>
          <button type="button" class="btn btn-secundario" data-acao="nuvem-historico">Versões guardadas na nuvem</button>
          <button type="button" class="btn btn-secundario" data-acao="nuvem-sair">Sair neste aparelho</button></div>
        <div id="nuvem-lista-historico"></div>
        <details class="orientacoes"><summary>Como funciona</summary><ul>
          <li>Se dois aparelhos forem usados ao mesmo tempo sem conexão, o Ateliê pergunta qual versão vale. A outra é guardada no histórico.</li>
          <li>A nuvem também guarda, sozinha, uma cópia por hora das versões anteriores, por 90 dias.</li>
          <li>Sair neste aparelho não apaga nada: os dados continuam aqui e na nuvem.</li>
          <li>Continue exportando uma cópia JSON de vez em quando. É a garantia mais simples.</li></ul></details>
      </section>`;
    }
    return `<section class="ficha-sec secao-nuvem"><h2>Sincronização na nuvem (opcional)</h2>
      <p>Para usar o Ateliê no celular e no computador com os mesmos dados, conecte-o ao seu próprio projeto <strong>Supabase</strong>. Veja o passo a passo no LEIAME. Sem isso, tudo continua apenas neste navegador.</p>
      <form id="form-nuvem" class="form-nuvem" autocomplete="on">
        <div class="${fixo ? 'sr' : ''}">
          <label class="campo-rotulo" for="nuvem-url">URL do projeto</label>
          <input id="nuvem-url" class="entrada" type="url" inputmode="url" placeholder="https://abcdefgh.supabase.co" value="${esc(cfg.url || '')}" autocomplete="off" spellcheck="false">
          <label class="campo-rotulo" for="nuvem-chave">Chave pública (anon ou publishable)</label>
          <input id="nuvem-chave" class="entrada" type="text" placeholder="eyJ… ou sb_publishable_…" value="${esc(cfg.chave || '')}" autocomplete="off" spellcheck="false">
        </div>
        ${fixo ? `<p class="campo-dica">Projeto: ${esc(limparUrl(padrao.url))} (definido em config-nuvem.js).</p>` : ''}
        <label class="campo-rotulo" for="nuvem-email">E-mail</label>
        <input id="nuvem-email" class="entrada" type="email" autocomplete="username" value="${esc(cfg.email || '')}">
        <label class="campo-rotulo" for="nuvem-senha">Senha</label>
        <input id="nuvem-senha" class="entrada" type="password" autocomplete="current-password">
        <p class="campo-dica">A senha não é guardada; o navegador guarda apenas a sessão. Use a chave <em>pública</em> — nunca a chave secreta ou service_role.</p>
        <button type="submit" class="btn btn-primario">Entrar e sincronizar</button>
        <p class="nuvem-erro" id="nuvem-erro" role="alert"></p>
      </form>
    </section>`;
  };

  document.addEventListener('submit', async (e) => {
    if (e.target.id !== 'form-nuvem') return;
    e.preventDefault();
    const f = e.target;
    const btn = f.querySelector('button[type="submit"]');
    const erro = f.querySelector('#nuvem-erro');
    erro.textContent = '';
    btn.disabled = true; btn.textContent = 'Conectando…';
    if (AP.temPendente()) AP.salvarJa();
    try {
      await N.entrar(f.querySelector('#nuvem-url').value, f.querySelector('#nuvem-chave').value, f.querySelector('#nuvem-email').value, f.querySelector('#nuvem-senha').value);
      ultimaConsulta = Date.now();
      N.ativarEventos();
      AP._semRolagem = true; AP.renderizar();
    } catch (err) {
      erro.textContent = err.message;
      btn.disabled = false; btn.textContent = 'Entrar e sincronizar';
    }
  });

  AP.acao('nuvem-sincronizar', async () => {
    if (AP.temPendente()) AP.salvarJa();
    if (cfg.sujo) await N.enviar(); else await N.consultar({ silencioso: false });
    if (estado === 'ok') AP.aviso('Sincronizado.', 'ok');
  });
  AP.acao('nuvem-sair', async () => {
    const ok = await AP.dialogo({ titulo: 'Sair neste aparelho?', html: '<p>Os dados continuam neste navegador e na nuvem. A sincronização para até você entrar de novo.</p>', botoes: [{ texto: 'Cancelar', valor: false, classe: 'btn-secundario' }, { texto: 'Sair', valor: true, classe: 'btn-primario' }] });
    if (!ok) return;
    await N.sair();
    AP.aviso('Você saiu. Os dados continuam salvos neste navegador.', 'ok');
    AP._semRolagem = true; AP.renderizar();
  });
  const ORIGENS = { automatico: 'cópia automática', conflito: 'versão preterida num conflito', 'antes-de-restaurar': 'antes de uma restauração' };
  AP.acao('nuvem-historico', async () => {
    const alvo = document.getElementById('nuvem-lista-historico');
    if (!alvo) return;
    alvo.innerHTML = '<p class="campo-dica">Carregando…</p>';
    try {
      const lista = await N.listarHistorico();
      alvo.innerHTML = lista && lista.length
        ? `<ul class="lista-historico-nuvem">${lista.map((h) => `<li><span>${esc(AP.fmtData(h.criado_em, true))} — ${esc(ORIGENS[h.origem] || h.origem)}${h.dispositivo ? ` · ${esc(h.dispositivo)}` : ''}</span>
            <span><button type="button" class="btn btn-pequeno btn-secundario" data-acao="nuvem-baixar-versao" data-id="${h.id}">Baixar</button>
            <button type="button" class="btn btn-pequeno btn-secundario" data-acao="nuvem-restaurar" data-id="${h.id}">Restaurar</button></span></li>`).join('')}</ul>`
        : '<p class="campo-dica">Ainda não há versões anteriores guardadas. Elas aparecem conforme você usa o Ateliê (no máximo uma por hora).</p>';
    } catch (e) { alvo.innerHTML = ''; tratarErro(e); }
  });
  AP.acao('nuvem-baixar-versao', async (el) => {
    try {
      const h = await N.lerHistorico(el.dataset.id);
      if (!h) return;
      const pacote = { app: AP.ID_APP, versao: AP.VERSAO_DADOS, exportadoEm: h.criado_em, conteudo: 'historico-nuvem', dados: h.dados };
      AP.baixar(`atelie-versao-${String(h.criado_em).slice(0, 16).replace(/[:T]/g, '-')}.json`, JSON.stringify(pacote, null, 2), 'application/json');
    } catch (e) { tratarErro(e); }
  });
  AP.acao('nuvem-restaurar', async (el) => {
    try {
      const h = await N.lerHistorico(el.dataset.id);
      if (!h) return;
      const ok = await AP.dialogo({
        titulo: 'Restaurar esta versão?',
        html: `<p>Versão de ${esc(AP.fmtData(h.criado_em, true))}: ${esc(resumo(AP.migrar(h.dados)))}.</p><p>Ela passa a valer aqui e na nuvem. A versão atual (${esc(resumo(AP.S))}) é guardada no histórico antes, para você poder voltar atrás.</p>`,
        botoes: [{ texto: 'Cancelar', valor: false, classe: 'btn-secundario' }, { texto: 'Restaurar', valor: true, classe: 'btn-perigo' }]
      });
      if (!ok) return;
      await guardarNoHistorico(AP.S, 'antes-de-restaurar', cfg.versao);
      AP.S = AP.migrar(h.dados);
      AP.salvarJa();
      await N.enviar();
      AP.aplicarPreferencias();
      AP.aviso('Versão restaurada.', 'ok');
      AP.ir('#/painel');
    } catch (e) { tratarErro(e); }
  });
})();
