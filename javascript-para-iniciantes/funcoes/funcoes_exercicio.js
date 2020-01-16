/*** Exercícios - Funções ***/

// Crie uma função para verificar se um valor é Truthy

function testeVerdadeiro(valor) {
  return !!valor;
}
console.log(testeVerdadeiro());



// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function calculoPerimetro(lado) {
  var calculo = lado * 4;
  return calculo;
}
console.log(calculoPerimetro(5));



// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

//opção 1
function nomeCompleto(nome, sobrenome) {
  var nome = "Angélica";
  var sobrenome = "Albuquerque";
  var nomeTodo = `${nome} ${sobrenome}`;
  return nomeTodo;
}
  console.log(nomeCompleto());

  //opção 2
  function nomeCompleto2(nome, sobrenome) {
    var nomeTodo2 = `${nome} ${sobrenome}`;
    return nomeTodo2;
  }



// Crie uma função que verifica se um número é par
function parOuImpar(numero) {
  var modulo = numero % 2;
  if (modulo !== 0) {
     return `O número ${numero} é impar.`; 
  } else {
    return `O número ${numero} é par.`; ; 
  }
}



// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado){
  return typeof dado;
}


/*
addEventListener é uma função nativa do JavaScript
o primeiro parâmetro é o evento que ocorre e o segundo o Callback
utilize essa função para mostrar no console o seu nome completo
quando o evento 'scroll' ocorrer.
*/

//opção 1
addEventListener("click", function(nome, sobrenome) {
  var nome = "Angélica";
  var sobrenome = "Albuquerque";
  nomeTodo3 = `${nome} ${sobrenome}`;
  console.log(nomeTodo3);
});

//opção 2 
addEventListener("click", function() {
  console.log("Angélica Albuquerque")
})



/* Corrija o erro abaixo:

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
*/

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
