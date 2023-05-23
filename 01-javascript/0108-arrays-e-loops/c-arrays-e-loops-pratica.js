// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var anosCopaBrasilCampeao = [1959, 1962, 1970, 1994, 2002];
console.log(anosCopaBrasilCampeao);


// Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem: `O brasil ganhou a copa de ${ano}`
console.log("Utilizando for:")
for (var ano = 0; ano < anosCopaBrasilCampeao.length; ano++) {
  console.log(`O Brasil ganhou a copa no ano de ${anosCopaBrasilCampeao[ano]}`);
}

console.log("Utilizando forEach:")
anosCopaBrasilCampeao.forEach(function(ano) {
  console.log(`O Brasil ganhou a copa no ano de ${ano}`);
});


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];
console.log(`Interajindo com um loop nas frutas e parando ao chegar em Pera:`);
for(var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if(frutas[fruta] === "Pera") {
    break;
  }
}


// Coloque a última fruta da array acima em uma variável sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length -1];
console.log(`A última fruta do array é: ${ultimaFruta}`);
console.log(frutas);