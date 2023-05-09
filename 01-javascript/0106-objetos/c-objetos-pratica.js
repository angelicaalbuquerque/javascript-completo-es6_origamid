// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var meusDados = {
  nome: 'Angélica',
  sobrenome: 'Albuquerque',
  nascimento: '09/07/1990',
  nacionalidade: 'brasileira',
  timeFutebol: 'São Paulo',
  corFavorita: 'Preto'
};


// Crie um método no objeto anterior, que mostre o seu nome completo
meusDados.mostrarNomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

console.log(meusDados);
console.log(meusDados.mostrarNomeCompleto());


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco, carro);


// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(sexo) {
    if (sexo == "homem") {
      return `Latir`;
    } else {
      return `Não faz nada`;
    }
  }
}

console.log(cachorro);
console.log(cachorro.latir('mulher'));
console.log(cachorro.latir('homem'));
