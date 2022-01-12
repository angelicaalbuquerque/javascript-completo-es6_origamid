/*** Exercícios - Números e Operadores ***/

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20,
    resultado = "35";

// Crie duas expressões que retornem NaN
var exp1 = "100 segundos" * 2;
var exp2 = "30 dias" / 2;
console.log(isNaN(exp1));
console.log(isNaN(exp2));
console.log(exp1, exp2);

// Somar a string '200' com o número 50 e retornar 250
var soma = +"200" + 50;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
console.log(x++); //incremento
console.log(x); //retorno o incremento

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

//Transformando o valor de número para número mesmo e dividindo direto:

var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; //"40kg"
console.log(peso);
