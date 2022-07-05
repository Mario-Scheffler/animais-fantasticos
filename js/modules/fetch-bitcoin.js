export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (100 / bitcoin.BRL.last).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
