let listaDeNumerosSorteados=[];
let numeroLimite = 10;
let numeroScreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMSN(){
  exibirTextoNaTela('h1', 'Jogo do Número Secreto');
  exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}
exibirMSN();

function verificarChute() {
    let chute = document.querySelector('input').value;
   if(chute ==numeroScreto){
    exibirTextoNaTela('h1','Acertou!');
    let palavraTentavivas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentavivas}!`;
    exibirTextoNaTela('p', mensagemTentativas);

    document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if (chute > numeroScreto){
        exibirTextoNaTela('p', 'O número secreto é menor');
    }else{
        exibirTextoNaTela('p', 'O nùmero secreto é maior');
    }
    tentativas ++;
    limparcampo();
}
}
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElemntos = listaDeNumerosSorteados.length;
  if(quantidadeDeElemntos == numeroLimite){
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else {
    listaDeNumerosSorteados.push(numeroEscolhido)
    return numeroEscolhido;
  }
}

function limparcampo() {
  chute = document.querySelector('input');
  chute.value = '';
}
function reiniciarJogo(){
    numeroScreto= gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    exibirMSN();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}