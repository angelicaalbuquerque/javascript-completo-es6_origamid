const imgs = document.querySelectorAll('img');
console.log(imgs); //NodeList(7)

imgs.forEach(function(img, index, array) {
  console.log(img, index, array);
});


const titulos = document.getElementsByClassName('titulo');
console.log(titulos); //HTMLCollection(3)

const arrayTitulos = Array.from(titulos);
console.log(arrayTitulos); //(3)

arrayTitulos.forEach(function(titulo) {
  console.log(titulo.innerHTML);
});


//Arrow Function
const imagens = document.querySelectorAll('img');
imagens.forEach((imagem) => {
  console.log(imagem);
});

//É possível omitir as chaves {} para uma função que retorna uma linha. Não é permitido fechar a linha com ;
imagens.forEach(item => console.log(item));
