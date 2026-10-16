// Verifica se o conteúdo carrega e se todas as referências cruzadas existem.
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = path.join(__dirname, '..', 'src', 'js', 'conteudo');
const ctx = { window: {} }; vm.createContext(ctx);
for (const f of fs.readdirSync(dir).sort()) vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx, { filename: f });
const A = ctx.window.ATELIE;
const ids = {
  u: new Set(Object.keys(A.unidades)), q: new Set(A.perguntas.map(x => x.id)), b: new Set(A.livros.map(x => x.id)),
  p: new Set(A.pensadores.map(x => x.id)), c: new Set(A.casos.map(x => x.id)), x: new Set(A.laboratorio.map(x => x.id)),
  n: new Set(A.mapa.nos.map(x => x.id)), d: new Set((A.debates || []).map(x => x.id)), ferramenta: new Set(['intuicao', 'desenvolvimento', 'laboratorio', 'oficina', 'biblioteca', 'mapa', 'perguntas', 'debates', 'conviccoes'])
};
const erros = [];
const chk = (ref, onde) => { const [t, ...r] = ref.split(':'); const id = r.join(':'); if (!ids[t] || !ids[t].has(id)) erros.push(`${onde}: ref inválida ${ref}`); };
const chkB = (id, onde) => { if (!ids.b.has(id)) erros.push(`${onde}: livro inexistente ${id}`); };
const chkU = (id, onde) => { if (!ids.u.has(id)) erros.push(`${onde}: unidade inexistente ${id}`); };
const noEtapa = new Set();
for (const e of A.etapas) for (const m of e.modulos) { m.unidades.forEach(u => { chkU(u, m.id); noEtapa.add(u); }); (m.vejaTambem || []).forEach(r => chk(r, m.id)); }
for (const u of ids.u) if (!noEtapa.has(u)) erros.push(`unidade fora do percurso: ${u}`);
const tipos = new Set(['importa','impressao','texto','situacao','conceito','perspectivas','escrita','escolha','classificar','revelar','aprofundar','passos','conexoes','pensador','leituras','comparar','sintese','contraponto']);
for (const u of Object.values(A.unidades)) {
  const idsBloco = new Set();
  for (const b of u.blocos) {
    if (!tipos.has(b.t)) erros.push(`${u.id}: tipo desconhecido ${b.t}`);
    if (b.id) { if (idsBloco.has(b.id)) erros.push(`${u.id}: id repetido ${b.id}`); idsBloco.add(b.id); }
    if (b.t === 'conexoes') b.itens.forEach(i => chk(i.ref, u.id));
    if (b.t === 'contraponto') (b.refs || []).forEach(r => chk(r, u.id + '.cp'));
    if (b.t === 'leituras') b.ids.forEach(i => chkB(i, u.id));
    if (b.t === 'pensador' && !ids.p.has(b.id)) erros.push(`${u.id}: pensador ${b.id}`);
    if (b.t === 'comparar' && !u.blocos.some(x => x.id === b.ref)) erros.push(`${u.id}: comparar ref ${b.ref}`);
    if (b.t === 'classificar') b.itens.forEach(i => i.cat.forEach(c => { if (!b.categorias.includes(c)) erros.push(`${u.id}: categoria ${c}`); }));
  }
  (u.proximos || []).forEach(r => chk(r, u.id + '.proximos'));
}
for (const q of A.perguntas) { q.conexoes.forEach(r => chk(r, q.id)); q.leituras.forEach(b => chkB(b, q.id)); if (!A.temasPerguntas.includes(q.tema)) erros.push(`${q.id}: tema ${q.tema}`); }
const idsLivro = new Set();
for (const l of A.livros) { if (idsLivro.has(l.id)) erros.push('livro repetido ' + l.id); idsLivro.add(l.id);
  (l.afinidades || []).forEach(a => { if (!A.afinidades[a]) erros.push(l.id + ': afinidade ' + a); });
  if (l.contraponto) chkB(l.contraponto, l.id + '.contraponto');
  ['porque','encontrar','conexao','acesso','legal'].forEach(c => { if (!l[c]) erros.push(l.id + ': falta ' + c); }); (l.unidades || []).forEach(u => chkU(u, l.id)); if (!A.tiposObra.includes(l.tipo)) erros.push(`${l.id}: tipo ${l.tipo}`); }
const idsP = new Set();
for (const p of A.pensadores) { if (idsP.has(p.id)) erros.push('pensador repetido ' + p.id); idsP.add(p.id);
  if (!p.afinidades || !p.afinidades.length) erros.push(p.id + ': sem afinidades'); (p.afinidades || []).forEach(a => { if (!A.afinidades[a]) erros.push(p.id + ': afinidade ' + a); });
  if (!p.critico) erros.push(p.id + ': sem critico'); (p.livros || []).forEach(b => chkB(b, p.id)); (p.unidades || []).forEach(u => chkU(u, p.id)); }
for (const c of A.casos) (c.aprofundar.refs || []).forEach(r => chk(r, c.id));
for (const n of A.mapa.nos) (n.refs || []).forEach(r => chk(r, 'mapa.' + n.id));
for (const e of A.mapa.arestas) { if (!ids.n.has(e.a) || !ids.n.has(e.b)) erros.push(`aresta ${e.a}-${e.b}`); }
for (const d of (A.debates || [])) d.polos.forEach(po => { po.autores.forEach(r => chk(r, d.id)); po.obras.forEach(b => chkB(b, d.id)); });
for (const c of A.conceitosExplicar) chkU(c.unidade, 'conceito ' + c.id);
const temas = new Set(); A.livros.forEach(l => l.temas.forEach(t => temas.add(t)));
console.log('Debates:', ids.d.size); console.log('Unidades:', ids.u.size, '| Perguntas:', ids.q.size, '| Livros:', ids.b.size, '| Pensadores:', ids.p.size, '| Casos:', ids.c.size, '| Lab:', ids.x.size, '| Nós:', ids.n.size, '| Arestas:', A.mapa.arestas.length);
console.log('Temas de livros:', [...temas].sort().join(', '));
const usados = new Set(); Object.values(A.unidades).forEach(u => u.blocos.forEach(b => b.t === 'leituras' && b.ids.forEach(i => usados.add(i)))); A.perguntas.forEach(q => q.leituras.forEach(i => usados.add(i))); (A.debates||[]).forEach(d => d.polos.forEach(p => p.obras.forEach(i => usados.add(i)))); A.pensadores.forEach(p => (p.livros||[]).forEach(i => usados.add(i))); A.livros.forEach(l => { if ((l.unidades||[]).length) usados.add(l.id); if (l.contraponto) { usados.add(l.contraponto); usados.add(l.id); } });
console.log('Obras sem ligação com unidades, perguntas, debates ou pensadores (só na Biblioteca):', [...ids.b].filter(b => !usados.has(b)).join(', ') || '—');
if (erros.length) { console.log('ERROS:\n' + erros.join('\n')); process.exit(1); } else console.log('Referências OK');
