//Operadores de atribuição
var numero = 20;

numero = numero + 10; //mesmo que numero += 10;
console.log(numero);


//Operador ternário: Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição
var idade = 20;
var naoPossuiDiabetes = false;

var podeBeber = (idade >= 18 && naoPossuiDiabetes) ? "Pode beber" : "Não pode beber";
console.log(podeBeber);


//If simplificado
var possuiFaculdade = true;
if(possuiFaculdade)
  console.log('possui faculdade');
else 
  console.log('não possui faculdade');