function imcNovo(peso, altura) {
  var imc = peso / (altura * altura);
  console.log(imc);
}

imcNovo(80, 1.80); //undefined, pois a função não tem retorno;
console.log(imcNovo(20, 1.80)); //retorna o valor e o undefined, pois a função não tem retorno;


function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Por favor, preencha um número';
  } else if (idade >= 60) {
    return true;
  } else {
      return false;
    }
    console.log('testando'); //nunca vai acontecer
}

//terceiraIdade(60); É true, mas retorna undefined pois está sem o console.log. 
  //Teria que fazer: console.log(terceiraIdade(60));
console.log(terceiraIdade('oi'));
console.log(terceiraIdade(20));
console.log(terceiraIdade(65));


function faltaVisitar(paisesVisitados) {
  var totalPaisesExistem = 193;
  var diferenca = totalPaisesExistem - paisesVisitados;
  return `No mundo, existem ${totalPaisesExistem}. Falta eu visitar ${diferenca} países.`;
}

console.log(faltaVisitar(20));


var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro