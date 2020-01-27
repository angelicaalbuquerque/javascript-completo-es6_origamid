/*** Exercícios - Escopo ***/

/*
Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(var, marca, portas);


-- No console, escreveu a palavra reservada "var" no lugar do nome da variável, o certo seria utilizar "cor". Além disso, tentou acessar as declarações de "marca" e "portas", que são, respectivamente, const e let, sendo assim, não são acessadas fora do escopo do bloco onde foram declaradas.

-- Para solucionar o problema, deveria colocar o console.log dentro do bloco e modificar "var" para "cor".
*/


/*
Como corrigir o erro abaixo?

function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

-- A função dividirDois está tentando acessar a variável "dois", declarada via "const" no escopo da função somarDois. Como analisado na questão anterior, "const" não pode ser acessada fora do bloco. Para corrigir, deveria retirar a declação de dentro do bloco e movê-la para fora, ou seja, acima de ambas funções.

-- Há também um erro de atribuição na função dividirDois, onde o retorno seria de "x + dois". Assim, deve-se alterar "+" para "/".

-- Resultado:
    const dois = 2;

    function somarDois(x) {
      return x + dois;
    }
    function dividirDois(x) {
      return x / dois;
    }
    somarDois(4);
    dividirDois(6);
*/


/*
O que fazer para total retornar 500?

var numero = 50;

for(var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

-- Alterar a declaração de "número" que está dentro do for de "var" para "let"; assim, não sobrescreve a declaração de número que está fora do loop:

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

-- Se eu não quiser modificar o número 50, posso alterar de "var" para "const" também.
*/
