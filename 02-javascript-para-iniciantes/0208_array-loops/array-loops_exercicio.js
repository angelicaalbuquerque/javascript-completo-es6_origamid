/*** Exercícios - Arrays e Loops ***/

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var anoBrasilCampeao = [1959, 1962, 1970, 1994, 2002]
console.log(anoBrasilCampeao);

// Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0; i < anoBrasilCampeao.length; i++) {
  console.log(`O Brasil ganhou a copa de ${anoBrasilCampeao[i]}.`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']

for (var item = 0; item < frutas.length; item++) {
  console.log(frutas[item]);
  if (frutas[item] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);