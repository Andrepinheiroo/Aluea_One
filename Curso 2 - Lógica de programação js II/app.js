let numeroScreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 100');


function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute ==numeroScreto);

}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
