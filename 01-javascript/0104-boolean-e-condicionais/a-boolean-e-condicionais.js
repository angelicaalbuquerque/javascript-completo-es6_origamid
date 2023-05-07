var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiGraduacao) {
  console.log("Possui graduação");
  var x = 10; //só acontece a atribuição se possuiGraduacao é verdadeiro
} else if (possuiDoutorado) {
  console.log("Possui doutorado"); //não entra nesse if porque já retorna o verdadeiro
} else {
  console.log("Não possui nada");
}

console.log(x); //se possuiGraduacao for falso, o retorno é undefined por conta do hoisting


var nome = "";

if(nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}


if(!possuiGraduacao) {
  console.log("Não possui graduação");
}


//Operadores de comparação
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false