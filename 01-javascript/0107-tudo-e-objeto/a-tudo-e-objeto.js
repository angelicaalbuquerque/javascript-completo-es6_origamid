var nome = "Angélica";
console.log(nome.length); //8
console.log(nome.charAt(5)); //i
console.log(nome.toUpperCase()); //ANGÉLICA
console.log(nome.replace("élica", "ie")); //Angie


//Lidando com Números
//Por um breve momento, o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos
var altura = 1.60;

console.log(altura.toString()); //transforma em string '1.6'
console.log(altura.toFixed()); //arredonda o valor para 2


var btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
  console.log('Botão clicado');
})

console.log(btn.classList); //DOMTokenList(2) ['btn', 'vermelho', value: 'btn vermelho']

btn.classList.add('ativo');
console.log(btn.classList); //DOMTokenList(3) ['btn', 'vermelho', 'ativo', value: 'btn vermelho ativo']

console.log(btn.innerText); //clique
