// Retorne o url da página atual utilizando o objeto window
const urlAtual = window.location.href;
console.log(`A url atual da página é ${urlAtual}`);


// Seleciona o primeiro elemento da página que possua a classe ativo
const primeiroElementoAtivo = document.querySelector('.ativo');
console.log(primeiroElementoAtivo);
/* 
getElementsByClassName returns a Node List and not an array
const primeiroAtivo = window.getElementsByClassName('ativo');
console.log(primeiroAtivo[0]);
*/


// Retorne a linguagem do navegador
console.log(window.navigator.language);


// Retorne a largura da janela 
console.log(window.innerWidth);