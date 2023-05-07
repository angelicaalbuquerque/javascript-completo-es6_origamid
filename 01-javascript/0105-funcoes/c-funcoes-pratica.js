// Crie uma função para verificar se um valor é Truthy
function ehVerdadeiro(valor) {
  return !!valor;
}

console.log(ehVerdadeiro(15 > 0));
console.log(ehVerdadeiro(''));


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function calculaPerimetroQuadrado(lado) {
  var perimetro = lado * 4;
  return perimetro;
}

console.log(calculaPerimetroQuadrado(5));


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function retornaNomeCompleto(nome, sobrenome) {
  var nomeCompleto = `${nome} ${sobrenome}`;
  return nomeCompleto;
}

console.log(retornaNomeCompleto('Angélica', 'Albuquerque'));


// Crie uma função que verifica se um número é par
function verificaPar(numero) {
  if (numero % 2 == 0) {
    return `${numero} é divisível por 2`;
  } else if (numero % 2 != 0) {
    return `${numero} não é divisível por 2`;
  } 
}

console.log(verificaPar(15));
console.log(verificaPar(4));


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function retornaTipo(dado) {
  return typeof(dado);
}

console.log(retornaTipo('Isso é uma string'));
console.log(retornaTipo(13));
console.log(retornaTipo(true));


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() {
  console.log('Angelica');
});

/* 
function mostraSobrenome() {
  console.log('Albuquerque');
}

addEventListener('scroll', mostraSobrenome);
*/


// Corrija o erro abaixo
/* 
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


//No primeiro console, será mostrado 'Ainda faltam 173 países para visitar'. Porém, no segundo retornará totalPaises is not defined. Para solucionar esse erro, basta mover a variável  var totalPaises = 193; para fora, para que seja acessível a ambos os escopos:

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
