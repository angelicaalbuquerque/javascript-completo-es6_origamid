const menu = document.querySelector('.menu');
console.log(menu.classList);

menu.classList.add('ativo'); //DOMTokenList ['menu', value: 'menu']
console.log(menu.classList); //DOMTokenList(2) ['menu', 'ativo', value: 'menu ativo']
console.log(menu.classList[1]); //ativo

menu.classList.remove('ativo');
console.log(menu.classList); //DOMTokenList ['menu', value: 'menu']

menu.classList.toggle('azul'); //adiciona
console.log(menu.classList); //DOMTokenList(2) ['menu', 'azul', value: 'menu azul']
menu.classList.toggle('azul'); //remove
console.log(menu.classList); //DOMTokenList ['menu', value: 'menu']


if (menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}
console.log(menu.classList);

console.log(menu.className); //retorna uma string com as classes - menu nao-possui-azul

menu.className = 'Posso renomear'; //sobreescreve
console.log(menu.className); 

menu.className  += ' vermelho'; 
console.log(menu.className); 