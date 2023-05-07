//A ordem importa
//Começa por multiplicação e divisão, depois por soma e subtração. Parênteses para priorizar uma expressão.
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10;
console.log(soma1);

//Operadores Aritméticos unários
var incremento = 5;
console.log(incremento); //5
console.log(incremento++); // 5 - ele incrementa e retorna só depois do incremento o valor atualizado
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6 - ele incrementa e retorna já o resultado atualizado
console.log(incremento2); // 6
//Mesma coisa para o decremento --x

//O + e - tenta transformar o valor seguinte em número
//O - antes de um número torna ele negativo
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número negativo)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1