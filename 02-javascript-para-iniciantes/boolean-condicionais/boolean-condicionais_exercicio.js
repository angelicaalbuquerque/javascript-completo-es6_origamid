/*** Exercícios - Boolean e Condicionais ***/

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 29;
var idadeParente = 29;

if(minhaIdade > idadeParente) {
  console.log("Minha idade é maior");
} else if (minhaIdade === idadeParente) {
  console.log("Minha idade é igual");
} else if (minhaIdade < idadeParente) {
  console.log("Minha idade é menor");
} else {
  console.log("Digite um valor válido!");
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log("resposta: 3 e 5 e 3 = 3");

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("brasil tem mais habitantes")
} else {
  console.log("brasil tem menos habitantes")
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
console.log("resposta: falso")

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
console.log("resposta: Cão")