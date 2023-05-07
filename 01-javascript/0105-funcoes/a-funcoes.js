function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(2));
console.log(areaQuadrado(5));


function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(83,1.60));


function corFavorita(cor) {
  if(cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto da floresta";
  } else if (cor === "amarelo") {
    return "Eu gosto do sol";
  } else {
    return "Eu não gosto de cores";
  }
}

console.log(corFavorita('verde'));
console.log(corFavorita('preto'));

//função callback: ocorre após algo que acontece. No caso, a função é chamada depois do click. 
addEventListener('click', function() { 
  console.log('Oi')
});

//Nada mais é do que uma função com outro argumento, então poderíamos fazer assim:
function mostraConsole() {
  console.log('olá');
}

addEventListener('click', mostraConsole);

