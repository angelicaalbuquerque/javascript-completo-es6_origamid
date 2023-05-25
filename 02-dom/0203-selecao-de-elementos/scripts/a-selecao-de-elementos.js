//Selecionando IDs
const animais = document.getElementById('animais');
console.log(animais); //retorna a section
console.log(animais.innerText); //retorna o texto sem as tags
console.log(animais.innerHTML); //retorna o texto com as tags

//retorna null o que não existe
const animaisNaoExiste = document.getElementById('animais-nao-existe');
console.log(animaisNaoExiste); //null


//Selecionando Classe e Tag
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection); //retorna uma HTML Collection
console.log(gridSection.length); //retorna a quantidade que tem
console.log(gridSection[0]); //retorna o primeiro

const gridSectionContato = document.getElementsByClassName('grid-section contato');
console.log(gridSectionContato); //retorna apenas o elemento que possui as duas classes


//Seletor Geral Único - querySelector retorna apenas o primeiro
const primeiraLi = document.querySelector('li');
console.log(primeiraLi); //retorna a primeira Li do site

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl); //retorna a primeira Ul

const primeiroLinkInterno = document.querySelector('[href^="#"]')
console.log(primeiroLinkInterno.href);


//Seletor Geral Lista - pega todos os elementos compatíveis com o seletor
const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg); //retorna uma NodeList possuindo métodos e propriedades que o HTML Collection não possui. 


/*
Node List vs HTML Collection

A diferença está nos métodos e propriedades de ambas, HTML não tem tanto método quanto a NodeList tem. Além disso a NodeList retornada com querySelectorAll é estática, diferentemente do HTML Collection que é dinâmico (ou seja, qualquer alteração feita, é vista "ao vivo").
*/

const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

const gridSectionNode2 = document.querySelectorAll('.grid-section');
titulo.classList.add('grid-section');
console.log(gridSectionNode2); // Aggora sim, 4 itens

/*
Array-Like

HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList. É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection).
*/
const gridSectionNode3 = document.querySelectorAll('.grid-section');

gridSectionNode3.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index) // index do item na array
  console.log(array) // a array completa
});

const arrayGrid = Array.from(gridSectionHTML);
arrayGrid.forEach(function(item) {
  console.log(item);
})

