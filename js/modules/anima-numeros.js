export default class AnimaNumeros {
  // seleciona os numeros a serem animados
  // extrair o texto de cada numero, definir totaL
  // trasnformar em numero usando + antes da string
  // criar let 0 para iniciar contagem dali
  // criar intervalo com setInterval incrementando o 0 com ++
  // criar if se contagem for maior que o total clearInterval
  // criar variavel incremento

  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    // bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe um elemento do DOM, com número em seu texto
  // incrementa a partir do 0 até o número final
  static incrementarNumero(numero) {
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
  }

  // ativa incrementar número para cada número selecionado do DOM
  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumero(numero)
    );
  }

  // função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // adiciona o MutationObserver para verificar
  // quando a classe ativo é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
