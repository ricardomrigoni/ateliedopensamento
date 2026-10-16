#!/usr/bin/env python3
"""Gera o Ateliê em arquivo único (CSS e JS embutidos).
Saídas:
  dist/atelie-do-pensamento.html   para abrir direto no computador ou celular
  docs/index.html                  para o GitHub Pages (Settings → Pages → pasta /docs)
O arquivo config-nuvem.js NÃO é embutido: é copiado ao lado, para ser editado à parte.
Uso: python3 tools/montar.py   (a partir da pasta do projeto)"""
import re, pathlib, shutil
raiz = pathlib.Path(__file__).resolve().parent.parent
src = raiz / 'src'
html = (src / 'index.html').read_text(encoding='utf-8')
EXTERNOS = {'config-nuvem.js'}

def css(m):
    return '<style>\n' + (src / m.group(1)).read_text(encoding='utf-8') + '\n</style>'
def js(m):
    if m.group(1) in EXTERNOS:
        return m.group(0)
    codigo = (src / m.group(1)).read_text(encoding='utf-8').replace('</script', '<\\/script')
    return f'<script>/* {m.group(1)} */\n' + codigo + '\n</script>'

html = re.sub(r'<link rel="stylesheet" href="([^"]+)">', css, html)
html = re.sub(r'<script src="([^"]+)"></script>', js, html)

for pasta, nome in ((raiz / 'dist', 'atelie-do-pensamento.html'), (raiz / 'docs', 'index.html')):
    pasta.mkdir(exist_ok=True)
    saida = pasta / nome
    saida.write_text(html, encoding='utf-8')
    for ext in EXTERNOS:
        destino = pasta / ext
        # não sobrescreve uma configuração já preenchida em docs/
        if not destino.exists() or pasta.name == 'dist':
            shutil.copy(src / ext, destino)
    print(f'{saida} — {saida.stat().st_size/1024:.0f} KB')
(raiz / 'docs' / '.nojekyll').write_text('')
