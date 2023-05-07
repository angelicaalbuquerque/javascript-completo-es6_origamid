// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 32;
var outraIdade = 50;
console.log(minhaIdade > outraIdade);

if (minhaIdade > outraIdade) {
  console.log("Minha idade é maior");
} else if (minhaIdade == outraIdade) {
  console.log("Minha idade é igual");
} else {
  console.log("Minha idade é menor");
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
/*
3 && 5 && 3;
retornará o último resultado true, 3
*/
console.log(expressao);


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("O Brasil tem mais habitantes que a China");
} else if (brasil == china) {
  console.log("O Brasil tem o mesmo número de habitantes que a China");
} else {
  console.log("O Brasil tem menos habitantes que a China");
}


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
//'Gato' === 'gato': falso; como é um &&, nem continua a comparação.


// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
//'Gato' === 'gato': falso, mas 5 é maior que 2; como é um ||, é verdadeiro e passa para o retorno da operação aritimética 'Gato' && 'Cão', que retorna o último verdadeiro, sendo 'Cão'.