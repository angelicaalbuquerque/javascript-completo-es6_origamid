// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(var, marca, portas);
// R: tenta acessar 'var' e não a variável com o valor atribuído, trazendo erro de sintaxe; tenta acessar as variáveis 'marca' e 'portas' que estão dentro do escopo de bloco e, diferentemente de 'var', não vazam. Para corrigir isso, alterar 'var' para 'cor' e mover o console.log para dentro do bloco. Aí sim é garantido que se consegue acessar todas as variáveis.
/* 
  {
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas);
  }
*/


// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4); //6
dividirDois(6); // dois is not defined
//R: Ao tentar dividir por 'dois', aparece a mensagem 'dois is not defined'. Para corrigir esse problema de escopo, deveria passar a declaração da constante para fora do escopo da função somarDois(), para que ela fique acessível para ambas as funções.
/*
  const dois = 2;
  function somarDois(x) {
    return x + dois;
  }
  function dividirDois(x) {
    return x / dois;
  }
  somarDois(4); //6
  dividirDois(6); // dois is not defined
*/


// O que fazer para total retornar 500?
var numero = 50;

for(var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
//Se o código se manter assim, o resultado será 100, pois o número de dentro do for irá sobrescrever  a variável numero declarada externamente. Para solucionar, basta declarar o numero de dentro do for com 'let' e não 'var'. A variavel externa porde também ser mudada para para 'const'.

/* 
  const numero = 50;

  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }

  const total = 10 * numero;
  console.log(total);
*/