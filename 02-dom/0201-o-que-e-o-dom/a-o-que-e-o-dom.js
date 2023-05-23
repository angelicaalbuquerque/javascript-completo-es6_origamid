//Window e Document são os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

// window.alert("Olá!");


const href = window.location.href;
console.log(href);
if (href === "http://127.0.0.1:5500/02-dom/0201-o-que-e-o-dom/index.html") {
  console.log("Está na página certa");
}


//Selecionando um elemento com JS e modificando-o
let h1Selecionado = document.querySelector('h1');

console.log(h1Selecionado); //retorna <h1>Esse é o título</h1>
console.log(h1Selecionado.innerText); //Retorna o texto "Esse é o título"
console.log(h1Selecionado.classList); //Retorna as classes;
console.log(h1Selecionado.offsetHeight); //Retorna a altura do elemento

function callbackh1() {
  console.log(`clicou em `, h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackh1);







