//Arrays
var videoGames = ["Switch", "PS5", "XBox"];
console.log(videoGames);
console.log("Item na posição 1 do array: " + videoGames[1]); //PS5

//Métodos e Propriedades de arrays
var ultimoItem = videoGames.pop();
console.log("Último item do array: " + ultimoItem); //XBox
console.log("Array sem o último item: " + videoGames); //Switch,PS5

videoGames.push('Steam');
console.log("Array com novo item: " + videoGames); //Switch,PS5,Steam
console.log(videoGames.length); //3


//Loops: 

//For: O for loop possui 3 partes, início, condição e incremento. 
console.log("Contando de 1 a 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//While:
var i = 0;
console.log("Contando de 0 a 100, de 10 em 10:");

while (i <= 100) {
  console.log(i);
  i = i + 10;
}
