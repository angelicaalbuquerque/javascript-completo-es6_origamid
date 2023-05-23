var maisVideoGames = ["Switch", "PS5", "XBox", "3DS"];

//mostrar cada item dessa array no console
console.log("mostrar cada item do array no console:")
for(var item = 0; item < maisVideoGames.length; item++) {
  console.log(maisVideoGames[item]);
}

//se o item for PS5, quer que dê o break
console.log("se o item for PS5, vai pausar:")
for(var item = 0; item < maisVideoGames.length; item++) {
  console.log(maisVideoGames[item]);
  if (maisVideoGames[item] === "PS5") {
    break;
  }
}

console.log("utilizando forEach:")
var frutas = ["Banana", "Pêra", "Maçã", "Abacaxi", "Uva"]
frutas.forEach(function(fruta, index, array) {
  console.log(fruta, index, array)
})