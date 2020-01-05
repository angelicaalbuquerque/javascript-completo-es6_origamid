/***  Tipos de Dados ***/ 

// Todos são primitivos, exceto os objetos. Primitivos são dados imutáveis.

var nome = 'Angélica'; // String
var idade = 29; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

// Verificar tipo de dado. typeof null retorna object.

var nome = "Angélica";
var time = null;
console.log(typeof nome, time);

//Soma de strings
var sobrenome = "Albuquerque";
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

//Se somar números com strings, o resultado final é sempre uma string

var ano = "2020";
var mes = 8;
console.log(ano + mes);

//Uso de aspas
var frase1 = "Esse é o \"melhor\" jogo";
console.log(frase1);

//Template string
var gols = 1000;
var frase2 = 'Romário fez ' + gols + " gols."
var frase3 = `Romário fez ${gols} gols.`
console.log(frase2);
console.log(frase3);