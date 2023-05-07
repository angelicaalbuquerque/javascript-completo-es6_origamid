// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
/* 
total = 10 + 10 / 2 + 20;
total = 10 + 5 + 20;
total = 35;
*/
console.log(total);

// Crie duas expressões que retornem NaN
var expressao1 = "12 meses" * 5;
var expressao2 = "40kg" / 2;
console.log(expressao1, expressao2);

// Somar a string '200' com o número 50 e retornar 250
var soma = +"200" + 50;
console.log(soma);

// Incremente o número 5 e retorne o seu valor já incrementado
var incremento = 5;
console.log(++incremento);

// Como dividir o peso por 2?
/*
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
*/

var numero = +"80" / 2;
var unidade = "kg";
var pesoComKg = numero + unidade;
console.log(pesoComKg);