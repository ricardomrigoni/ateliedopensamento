/* Inicialização — carregada por último */
(function () {
  'use strict';
  const AP = window.AP;
  /* ------------------------- inicialização ------------------------- */
  AP.iniciar = () => {
    AP.carregar();
    AP.aplicarPreferencias();
    AP.montar();
    if (!AP.storageOk) AP.aviso('O armazenamento local está indisponível (talvez modo privado). Você pode usar o Ateliê, mas exporte seus textos antes de fechar a página.', 'erro');
    window.addEventListener('hashchange', AP.renderizar);
    AP.renderizar();
    if (AP.nuvem) AP.nuvem.iniciar();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', AP.iniciar); else AP.iniciar();
})();
