/*** Exercícios - O que é o Dom ***/

// Retorne o url da página atual utilizando o objeto window

paginaAtual = window.location.href;
console.log(paginaAtual); 

if (paginaAtual === "http://127.0.0.1:5500/03-dom-para-iniciantes/o-que-e-dom/") {
  console.log("Você está na página atual");
}

// Seleciona o primeiro elemento da página que possua a classe ativo

const elementoAtivo = document.querySelector(".ativo");

// Retorne a linguagem do navegador

const linguagemNav = window.navigator.language;
console.log(linguagemNav);

// Retorne a largura da janela 
const larguraJanela = window.innerWidth;
console.log(larguraJanela);