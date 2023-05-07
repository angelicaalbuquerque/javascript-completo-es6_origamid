//Números
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000
var numero = "23"; //é string, não é number
console.log(typeof(numero));


//Operadores
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4


//Operadores Aritméticos unários (string)
//Na soma de string + número, o JS concatena e o número passa a ser string; na subtração/multiplicação e divisão o JS consegue converter a string para número, a exceção acontece quando houver caracteres, como "Comprei 10". O resultado será NaN.
var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)


//NaN (Not a Number)
//É possível verificar se uma variável é NaN ou não com a função isNaN()
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)
