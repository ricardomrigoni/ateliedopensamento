#!/usr/bin/env python3
"""Teste da sincronização com um Supabase SIMULADO (nenhuma rede real).
Dois "aparelhos" (contextos de navegador separados) usam a mesma conta.
Uso: python3 tools/testar-nuvem.py [pasta-capturas]"""
import json, sys, threading, pathlib, functools, http.server, socketserver, time
from urllib.parse import urlparse, parse_qs
from playwright.sync_api import sync_playwright

RAIZ = pathlib.Path(__file__).resolve().parent.parent
SHOTS = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else '/tmp/shots-nuvem'); SHOTS.mkdir(parents=True, exist_ok=True)
SUPA = 'https://teste.supabase.co'
CHAVE = 'sb_publishable_teste'

# ---------- servidor local para docs/ (como no GitHub Pages) ----------
class Silencioso(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
srv = socketserver.TCPServer(('127.0.0.1', 0), functools.partial(Silencioso, directory=str(RAIZ / 'docs')))
threading.Thread(target=srv.serve_forever, daemon=True).start()
URL = f'http://127.0.0.1:{srv.server_address[1]}/index.html'

# ---------- Supabase simulado ----------
nuvem = {'estado': None, 'historico': [], 'refresh': 0, 'logins': 0, 'rpc': 0, 'tokens': 0}
CORS = {'access-control-allow-origin': '*', 'access-control-allow-headers': '*', 'access-control-allow-methods': '*'}

def responder(route, status, corpo):
    route.fulfill(status=status, headers=dict(CORS, **{'content-type': 'application/json'}), body=json.dumps(corpo) if corpo is not None else '')

def supabase(route):
    req = route.request
    u = urlparse(req.url); q = parse_qs(u.query)
    if req.method == 'OPTIONS': return route.fulfill(status=204, headers=CORS)
    h = req.headers
    if h.get('apikey') != CHAVE: return responder(route, 401, {'message': 'Invalid API key'})
    corpo = json.loads(req.post_data) if req.post_data else None
    if u.path == '/auth/v1/token':
        g = q.get('grant_type', [''])[0]
        if g == 'password':
            nuvem['logins'] += 1
            if corpo.get('email') != 'eu@exemplo.com' or corpo.get('password') != 'senha-certa':
                return responder(route, 400, {'error': 'invalid_grant', 'error_description': 'Invalid login credentials'})
        elif g == 'refresh_token':
            nuvem['refresh'] += 1
            if corpo.get('refresh_token') != 'ref-ok': return responder(route, 400, {'error': 'invalid_grant'})
        nuvem['tokens'] += 1
        return responder(route, 200, {'access_token': f"tok-{nuvem['tokens']}", 'refresh_token': 'ref-ok', 'expires_in': 3600, 'user': {'email': 'eu@exemplo.com'}})
    if u.path == '/auth/v1/logout': return responder(route, 204, None)
    if not (h.get('authorization') or '').startswith('Bearer tok-'): return responder(route, 401, {'message': 'JWT expired'})
    if u.path == '/rest/v1/atelie_estado':
        e = nuvem['estado']
        return responder(route, 200, [e] if e else [])
    if u.path == '/rest/v1/rpc/atelie_salvar':
        nuvem['rpc'] += 1
        e = nuvem['estado']; agora = time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())
        if e is None:
            nuvem['estado'] = {'dados': corpo['p_dados'], 'versao': 1, 'atualizado_em': agora, 'dispositivo': corpo.get('p_dispositivo')}
            return responder(route, 200, [{'r_ok': True, 'r_versao': 1, 'r_atualizado_em': agora}])
        if corpo['p_versao_base'] != e['versao']:
            return responder(route, 200, [{'r_ok': False, 'r_versao': e['versao'], 'r_atualizado_em': e['atualizado_em']}])
        if not any(x['origem'] == 'automatico' for x in nuvem['historico']):
            nuvem['historico'].append({'id': len(nuvem['historico']) + 1, 'dados': e['dados'], 'versao': e['versao'], 'origem': 'automatico', 'dispositivo': e['dispositivo'], 'criado_em': e['atualizado_em']})
        nuvem['estado'] = {'dados': corpo['p_dados'], 'versao': e['versao'] + 1, 'atualizado_em': agora, 'dispositivo': corpo.get('p_dispositivo')}
        return responder(route, 200, [{'r_ok': True, 'r_versao': e['versao'] + 1, 'r_atualizado_em': agora}])
    if u.path == '/rest/v1/atelie_historico':
        if req.method == 'POST':
            nuvem['historico'].append({'id': len(nuvem['historico']) + 1, 'dados': corpo['dados'], 'versao': corpo.get('versao'), 'origem': corpo['origem'], 'dispositivo': corpo.get('dispositivo'), 'criado_em': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())})
            return responder(route, 201, None)
        if 'id' in q:
            i = int(q['id'][0].replace('eq.', ''))
            return responder(route, 200, [{'dados': x['dados'], 'criado_em': x['criado_em']} for x in nuvem['historico'] if x['id'] == i])
        return responder(route, 200, [{k: v for k, v in x.items() if k != 'dados'} for x in reversed(nuvem['historico'])])
    return responder(route, 404, {'message': 'rota desconhecida ' + u.path})

# ---------- testes ----------
falhas = []; erros = []
def ok(cond, nome):
    print(('ok: ' if cond else 'FALHOU: ') + nome)
    if not cond: falhas.append(nome)

def aparelho(browser, nome, celular=False):
    ctx = browser.new_context(viewport={'width': 390, 'height': 844} if celular else {'width': 1280, 'height': 900},
                              user_agent=('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Version/17.0 Mobile Safari/604.1' if celular else None))
    ctx.route(SUPA + '/**', supabase)
    pg = ctx.new_page()
    pg.on('pageerror', lambda e: erros.append(f'{nome}: {e}'))
    # os 400 são esperados: senha errada e sessão inválida são provocadas de propósito
    pg.on('console', lambda m: m.type == 'error' and 'status of 400' not in m.text and erros.append(f'{nome} console: {m.text}'))
    return ctx, pg

def entrar(pg, senha='senha-certa'):
    pg.goto(URL + '#/dados'); pg.wait_for_selector('#form-nuvem')
    pg.fill('#nuvem-url', SUPA + '/'); pg.fill('#nuvem-chave', CHAVE)
    pg.fill('#nuvem-email', 'eu@exemplo.com'); pg.fill('#nuvem-senha', senha)
    pg.click('#form-nuvem button[type=submit]')

def resposta_impressao(pg, unidade='u-natural'):
    return pg.evaluate(f"() => ((AP.S.respostas['{unidade}'] || {{}}).impressao) || ''")

with sync_playwright() as p:
    b = p.chromium.launch()
    # Aparelho A (computador) já tem dados locais antes de ligar a nuvem
    ctxA, A = aparelho(b, 'A')
    A.goto(URL + '#/unidade/u-natural'); A.wait_for_selector('.b-impressao textarea')
    A.fill('.b-impressao textarea', 'Texto escrito no computador antes da nuvem.'); A.wait_for_timeout(500)
    ok('Salvo neste navegador' in A.inner_text('#status-salvo'), 'sem nuvem, status diz "Salvo neste navegador"')

    entrar(A, 'senha-errada'); A.wait_for_timeout(400)
    ok('incorretos' in A.inner_text('#nuvem-erro'), 'senha errada mostra mensagem clara')
    ok(nuvem['estado'] is None, 'nada é enviado sem login válido')
    entrar(A); A.wait_for_selector('.secao-nuvem button[data-acao="nuvem-sair"]')
    A.wait_for_timeout(300)
    ok(nuvem['estado'] and nuvem['estado']['versao'] == 1, 'primeiro login envia os dados locais para a nuvem vazia')
    ok('antes da nuvem' in json.dumps(nuvem['estado']['dados'], ensure_ascii=False), 'conteúdo correto na nuvem')
    ok('sincronizado' in A.inner_text('#status-salvo'), 'status mostra "Salvo e sincronizado"')
    senha_guardada = A.evaluate("() => localStorage.getItem('atelie-do-pensamento:nuvem')")
    ok('senha-certa' not in senha_guardada, 'a senha não é guardada no navegador')
    A.screenshot(path=str(SHOTS / 'n1-conectado-desktop.png'), full_page=True)

    # A continua escrevendo -> envio automático
    A.goto(URL + '#/unidade/u-natural'); A.wait_for_selector('.b-impressao textarea')
    A.fill('.b-impressao textarea', 'Versão 2 escrita no computador.'); A.wait_for_timeout(3500)
    ok(nuvem['estado']['versao'] == 2, 'alteração enviada automaticamente alguns segundos depois')

    # Aparelho B (celular), vazio, entra e recebe tudo
    ctxB, B = aparelho(b, 'B', celular=True)
    entrar(B); B.wait_for_selector('.secao-nuvem button[data-acao="nuvem-sair"]'); B.wait_for_timeout(300)
    ok(resposta_impressao(B) == 'Versão 2 escrita no computador.', 'celular vazio carrega os dados da nuvem ao entrar')
    B.screenshot(path=str(SHOTS / 'n2-conectado-celular.png'), full_page=True)
    B.goto(URL + '#/unidade/u-natural'); B.wait_for_selector('.b-impressao textarea')
    ok(B.input_value('.b-impressao textarea') == 'Versão 2 escrita no computador.', 'texto aparece na unidade do celular')
    B.fill('.b-impressao textarea', 'Versão 3 escrita no celular.'); B.wait_for_timeout(3500)
    ok(nuvem['estado']['versao'] == 3 and 'Celular' in (nuvem['estado']['dispositivo'] or ''), 'celular envia a versão 3')

    # A recebe ao sincronizar
    A.goto(URL + '#/dados'); A.click('button[data-acao="nuvem-sincronizar"]'); A.wait_for_timeout(500)
    ok(resposta_impressao(A) == 'Versão 3 escrita no celular.', 'computador recebe a versão do celular')
    # A recebe ao reabrir a página (sessão guardada)
    B.fill('.b-impressao textarea', 'Versão 4 do celular.'); B.wait_for_timeout(3500)
    A.reload(); A.wait_for_timeout(800)
    ok(resposta_impressao(A) == 'Versão 4 do celular.', 'ao reabrir, o computador carrega a versão mais nova')

    # Conflito: B salva v5; A, sem saber, edita com base na v4
    B.fill('.b-impressao textarea', 'Versão 5 do celular.'); B.wait_for_timeout(3500)
    ok(nuvem['estado']['versao'] == 5, 'celular grava v5')
    A.goto(URL + '#/unidade/u-natural'); A.wait_for_selector('.b-impressao textarea')
    A.fill('.b-impressao textarea', 'Edição do computador sem ver a v5.'); A.wait_for_timeout(3500)
    ok(A.locator('dialog[open], .dialogo').filter(has_text='duas versões').count() >= 1, 'conflito abre a pergunta "Há duas versões diferentes"')
    A.screenshot(path=str(SHOTS / 'n3-conflito-desktop.png'))
    ok(nuvem['estado']['versao'] == 5, 'nada foi sobrescrito antes da decisão')
    A.get_by_role('button', name='Manter a deste aparelho').click(); A.wait_for_timeout(800)
    ok(nuvem['estado']['versao'] == 6 and 'sem ver a v5' in json.dumps(nuvem['estado']['dados'], ensure_ascii=False), 'escolher "manter a deste aparelho" grava a versão do computador')
    ok(any(x['origem'] == 'conflito' and 'Versão 5' in json.dumps(x['dados'], ensure_ascii=False) for x in nuvem['historico']), 'a versão preterida (v5) fica no histórico')

    # Histórico e restauração
    A.goto(URL + '#/dados'); A.click('button[data-acao="nuvem-historico"]'); A.wait_for_selector('.lista-historico-nuvem li')
    ok(A.locator('.lista-historico-nuvem li').count() >= 2, 'lista de versões guardadas aparece')
    A.screenshot(path=str(SHOTS / 'n4-historico-desktop.png'), full_page=True)
    A.locator('.lista-historico-nuvem li', has_text='conflito').first.locator('button[data-acao="nuvem-restaurar"]').click()
    A.locator('dialog.dialogo').get_by_role('button', name='Restaurar').click(); A.wait_for_timeout(800)
    ok(resposta_impressao(A) == 'Versão 5 do celular.' and nuvem['estado']['versao'] == 7, 'restaurar uma versão antiga funciona e sobe para a nuvem')
    ok(any(x['origem'] == 'antes-de-restaurar' for x in nuvem['historico']), 'antes de restaurar, a versão atual é guardada')

    # Token vencido -> renova sozinho (simulado com a aba fechada, para a página não regravar a sessão)
    A.wait_for_timeout(3500)
    r0 = nuvem['refresh']
    A.evaluate("() => { const c = JSON.parse(localStorage.getItem('atelie-do-pensamento:nuvem')); c.sessao.expira = 0; localStorage.setItem('atelie-do-pensamento:nuvem', JSON.stringify(c)); }")
    A.close(); A = ctxA.new_page(); A.on('pageerror', lambda e: erros.append(f'A: {e}'))
    A.goto(URL + '#/unidade/u-natural'); A.wait_for_selector('.b-impressao textarea'); A.wait_for_timeout(800)
    A.fill('.b-impressao textarea', 'Depois de renovar o token.'); A.wait_for_timeout(3500)
    ok(nuvem['refresh'] > r0 and 'renovar o token' in json.dumps(nuvem['estado']['dados'], ensure_ascii=False), 'sessão vencida é renovada sem pedir senha')

    # Sessão inválida -> pede login, mas continua salvando localmente
    A.evaluate("() => { const c = JSON.parse(localStorage.getItem('atelie-do-pensamento:nuvem')); c.sessao.expira = 0; c.sessao.refresh_token = 'invalido'; localStorage.setItem('atelie-do-pensamento:nuvem', JSON.stringify(c)); }")
    A.close(); A = ctxA.new_page(); A.on('pageerror', lambda e: erros.append(f'A: {e}'))
    A.goto(URL + '#/painel'); A.wait_for_timeout(1200)
    ok('Entre de novo' in A.inner_text('#avisos') or 'sessão expirou' in A.inner_text('#avisos').lower(), 'sessão inválida avisa para entrar de novo')
    A.goto(URL + '#/unidade/u-natural'); A.wait_for_selector('.b-impressao textarea')
    A.fill('.b-impressao textarea', 'Escrito sem sessão.'); A.wait_for_timeout(600)
    ok(A.evaluate("() => JSON.parse(localStorage.getItem('atelie-do-pensamento:v1')).respostas['u-natural'].impressao") == 'Escrito sem sessão.', 'sem sessão, continua salvando no navegador')
    entrar(A); A.wait_for_timeout(1000)
    dlg = A.get_by_role('button', name='Manter a deste aparelho')
    if dlg.count(): dlg.click(); A.wait_for_timeout(800)
    ok('Escrito sem sessão' in json.dumps(nuvem['estado']['dados'], ensure_ascii=False), 'ao entrar de novo, o que foi escrito sem sessão sobe para a nuvem')

    # Sair
    B.goto(URL + '#/dados'); B.click('button[data-acao="nuvem-sair"]'); B.get_by_role('button', name='Sair', exact=True).click(); B.wait_for_timeout(400)
    ok(B.locator('#form-nuvem').count() == 1 and resposta_impressao(B) != '', 'sair mantém os dados locais e volta ao formulário')
    B.screenshot(path=str(SHOTS / 'n5-desconectado-celular.png'), full_page=True)
    n = nuvem['rpc']; B.goto(URL + '#/unidade/u-natural'); B.wait_for_selector('.b-impressao textarea'); B.fill('.b-impressao textarea', 'Local apenas.'); B.wait_for_timeout(3500)
    ok(nuvem['rpc'] == n, 'depois de sair, nada é enviado')

    # Arquivo único em file:// sem configuração continua funcionando
    ctxC = b.new_context(); C = ctxC.new_page(); C.on('pageerror', lambda e: erros.append(f'C: {e}'))
    C.goto('file://' + str(RAIZ / 'dist' / 'atelie-do-pensamento.html') + '#/dados'); C.wait_for_selector('#form-nuvem')
    ok(C.locator('#nuvem-url').is_visible(), 'arquivo único: formulário pede URL e chave quando não há config')
    b.close()

srv.shutdown()
print('Erros de página/console:', erros or 'nenhum')
print('Falhas:', len(falhas))
sys.exit(1 if falhas or erros else 0)
