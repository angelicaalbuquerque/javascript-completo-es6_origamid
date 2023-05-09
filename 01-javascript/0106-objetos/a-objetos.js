var pessoa = {
  nome: "Angélica",
  idade: 32, 
}

console.log(pessoa); //retorna o objeto
console.log(pessoa.nome, pessoa.idade);


var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}


//Tudo que tiver "." antes de ser acessado é um objeto

console.log(quadrado.lados); //4
console.log(quadrado.perimetro(5)); //20
console.log(quadrado.area(5)); //25

console.log(Math.random());