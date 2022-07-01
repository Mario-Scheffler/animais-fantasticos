export default function initModal() {
  // selecionar no DOM os botoes/itens e colocar em variaveis
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function cliqueForaModal(event) {
    if (event.target === this) toggleModal(event);
  }

  if (botaoAbrir && botaoFechar && containerModal) {
    // so vai rodar se as 3 condicopes estiverem true

    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}
