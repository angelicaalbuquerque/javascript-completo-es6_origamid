// Mostre no console cada parágrado do site
//poderia usar tambem o GetElementsByTagName
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos); //NodeList(19)

paragrafos.forEach(paragrafo => console.log(paragrafo));


// Mostre o texto dos parágrafos no console
paragrafos.forEach(paragrafo => console.log(paragrafo.innerText));


// Como corrigir os erros abaixo:
/* 
const imgs = document.querySelectorAll('img');

imgs.forEach(item, index => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( => {
  console.log(i++);
});

imgs.forEach(() => i++);
*/

const imgs = document.querySelectorAll('img');

//adicionando parênteses para fechar argumentos
imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
//adicionando os parênteses antes da arrow
imgs.forEach(() => {
  console.log(i++);
});

//não tem erro nesse loop
imgs.forEach(() => i++);

console.log(i); //14