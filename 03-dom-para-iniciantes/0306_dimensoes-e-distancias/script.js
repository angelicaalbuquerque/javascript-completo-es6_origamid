/* Aula e Exercícios - Dimensões e Distâncias */


// A U L A

/*
HEIGHT E WIDTH
Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only.

const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

Mesma coisa para o Width, clientWidth ...

const listaAnimais = document.querySelector(".animais-lista");
console.log(listaAnimais.clientHeight)
console.log(listaAnimais.scrollHeight)
console.log(listaAnimais.offsetHeight)
*/



/*
OFFSETTOP E OFFSETLEFT
const section = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;


const listaAnimais = document.querySelector(".copy");
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroh2 = document.querySelector("h2");
const h2Left = primeiroh2.offsetLeft;
console.log(h2Left);

*/




/*
GETBOUNDINGCLIENTRECT()
Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

const section = document.querySelector('.animais');

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

const primeiroh2 = document.querySelector("h2");
const h2Left = primeiroh2.offsetLeft;
console.log(h2Left);

const rect = primeiroh2.getBoundingClientRect();
console.log(rect);
*/



/*
WINDOW
window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerWidth; // soma a barra de endereço

window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; // distância total do scroll vertical

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}
*/



/*
MATCHMEDIA();
Utilize um media-querie como no CSS para verificar a largura do browser.

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}

Caso queira verificar o matches diretamente, é possível passa-lo da forma abaixo, onde small já retorna diretamente true ou false.

const small = window.matchMedia('(max-width: 600px)').matches;

if (small) {
console.log(“Provavelmente, usuário mobile”);
} else {
console.log(“Usuário desktop”);
}
*/



/*
DICA
Selecione o elemento no inspetor (dom)

Abra o console e digite $0 para selecionar o mesmo

Os elementos selecionados anteriormente são $1, $2 ...
*/




// E X E R C Í C I O S

// Verifique a distância da primeira imagem em relação ao topo da página
const img = document.querySelector("img");
const imgTop = img.offsetTop;
console.log(imgTop);

// Retorne a soma da largura de todas as imagens

function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}
somaImagens();
// window.onload = function() {
//   somaImagens();
// }
//poderia utilizar uma função de callback para ativar o script acima, que só é ativada quando o onload ocorre. E dentro da função incluo todo o código que quero que ocorra, após ter carregado.



// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, " possui acessibilidade.");
  } else {
    console.log("Não possui boa acessibilidade.")
  }
});

console.log(links);

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px').matches;

if(browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add("menu-mobile");
}

