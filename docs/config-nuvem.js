/* =========================================================
   Sincronização com o Supabase — configuração opcional
   ---------------------------------------------------------
   Preencha com os dados do SEU projeto (Supabase → Project
   Settings → API / Data API). Assim, em cada aparelho você só
   precisa digitar e-mail e senha.

   Pode deixar em branco: nesse caso, a URL e a chave são
   pedidas na tela “Dados e ajustes”.

   A chave aqui é a PÚBLICA (anon ou "publishable", começa com
   eyJ… ou sb_publishable_…). Ela pode ficar num repositório
   público: quem protege os dados é a senha + as regras RLS do
   SQL. NUNCA coloque aqui a chave secreta / service_role.
   ========================================================= */
window.ATELIE_NUVEM = {
  url: 'https://vgrsfeqbgroplxnumhvg.supabase.co',
  chave: 'sb_publishable_tDs_tEee6ENOT17HMP3FLQ_-vyjn4Dq'
};
