//Variável global = Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro. 'use strict' impede isso.
'use strict'

function mostrarCarro() {
  carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca


//Escopo de função: Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.
var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro);  // Fusca


//Escopo de bloco: Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco. Mesmo com a condição falsa, a variável com var ainda será declarada utilizando hoisting e o valor ficará como undefined.
if(true) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // Carro

if(false) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // undefined - vaza pelo hoisting


if(true) {
  let mes = "Dezembro";
  console.log(mes); 
}
console.log(mes); //erro, not defined


//Const
const semana = "sexta-feira";
console.log(semana);

semana = "quinta-feira";
console.log(semana); //TypeError: Assignment to constant variable.