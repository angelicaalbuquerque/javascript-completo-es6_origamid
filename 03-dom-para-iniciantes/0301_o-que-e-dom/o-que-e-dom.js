/***  Aula -  O que é o Dom ***/

/*
DOCUMENT OBJECT MODEL (DOM)
É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.
*/

console.log(window);
//window é o objeto global do browser
//possui diferentes métodos e propriedades

window.innerHeight; //retorna a altura do browser

//Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM.

const href = window.location.href;
console.log(href);

if (href === 'http://127.0.0.1:5500/03-dom-para-iniciantes/o-que-e-dom/') {
  console.log("é igual");
}



/*
WINDOW E DOCUMENT
São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

window.alert('Isso é um alerta');
alert('Isso é um alerta'); // Funciona

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body

window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.
*/



/*
NODE
Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.
*/

const tituloSelecionado = document.querySelector("h1");
const h1Classes = tituloSelecionado.classList;

tituloSelecionado.innerText; // retorna o texto;
tituloSelecionado.classList; // retorna as classes;
tituloSelecionado.id; // retorna o id;
tituloSelecionado.offsetHeight; // retorna a altura do elemento;

tituloSelecionado.addEventListener('click', function() {
  console.log("clicou em", this.innerText)
}); // ativa a função callback ao click no titulo
