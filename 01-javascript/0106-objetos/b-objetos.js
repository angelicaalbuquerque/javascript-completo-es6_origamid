var a = {};
console.log(typeof a);


var height = 100;

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  divideHeightMetade() {
    return this.height / 2; //25
    //se não colocar o this, pega o height de fora e divide por 100
  }
}

//mudando o valor de backgroundColor e adicionando a uma variável
menu.backgroundColor = "#894";
var bg = menu.backgroundColor;

//adicinando novas propriedades do objeto
menu.color = 'blue';
menu.esconder = function() {
  console.log('menu escondido');
};

console.log(menu);
