// Retorne no console todas as imagens do site
const todasImgNodeLit = document.querySelectorAll("img");
console.log(todasImgNodeLit); //NodeList(7) 

const todasImgHTMLCollection = document.getElementsByTagName("img");
console.log(todasImgHTMLCollection); //HTMLCollection(7)


// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll("img[src^='https://raw.githubusercontent.com/angelicaalbuquerque/javascript-completo-es6_origamid/main/animais-fantasticos-origin/src/img/imagem']");
console.log(imagens); //NodeList(6)


// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll("[href^='#']");
console.log(linksInternos); //NodeList(3)


// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2); //Raposa


// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos); //NodeList(19)
console.log(paragrafos[paragrafos.length - 1]); //<p>Alguns direitos reservados.</p>
console.log(paragrafos[--paragrafos.length]); //<p>Alguns direitos reservados.</p>




