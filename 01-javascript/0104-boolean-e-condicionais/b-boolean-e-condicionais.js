//Operadores lógicos
//Na operação &&, se ambos os valores forem true ele irá retornar o último valor verificado. Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos. Na operação ||, ele retorna o primeiro true que achar.

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

if((5 - 5) && (5 + 5)) {
  console.log('verdadeiro');
} else {
  console.log('falso');
}

if((5 - 10) && (5 + 5)) {
  console.log('verdadeiro');
} else {
  console.log('falso');
}

var condicional1 = (5 - 5) || (5 + 5) || (10 - 2); //retorna o primeiro verdadeiro
var condicional2 = (5 - 5) || (5 + 5) && (10 - 2); //retorna o último verdadeiro
console.log(condicional1, condicional2);


var corFavorita = "Verde";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu");
    break;
  case "Amarelo":
    console.log("Olhe para o sol");
    break;
  case "Cinza":
    console.log("Olhe para o chão");
    break;
  default:
    console.log("Não faça nada");
    break;    
}