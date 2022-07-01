export default function initAnimaNumeros() {
  // seleciona os numeros a serem animados
  // extrair o texto de cada numero, definir totaL
  // trasnformar em numero usando + antes da string
  // criar let 0 para iniciar contagem dali
  // criar intervalo com setInterval incrementando o 0 com ++
  // criar if se contagem for maior que o total clearInterval
  // criar variavel incremento
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let observador;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observador.disconnect();
      animaNumeros();
    }
  }
  observador = new MutationObserver(handleMutation);
  const observadorTarget = document.querySelector(".numeros");

  observador.observe(observadorTarget, { attributes: true });
}
