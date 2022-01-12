/***  Declarações de Variáveis ***/ 

// Exemplo 1: declaração simples
var nome = "Angélica";
var idade = 29;
var possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade);

//  Exemplo 2: evitando repetição   
var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;
console.log(totalPreco);

// Exemplo 3: sem repetir a palavra "var"
var sobrenome = "Albuquerque",
    cidade = "Rio de Janeiro",
    estado = "RJ";
console.log(sobrenome, cidade, estado); 

// Exemplo 4: sem valor - retorna undefined
var semDefinir;
console.log(semDefinir);