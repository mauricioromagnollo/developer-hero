const service = require('./service');

/*
Fazendo uma implementação do map, podemos ver que ele retorna um novo array formatado, com base na função que executamos.
*/
Array.prototype.meuMap = function (callback) {
  const novoArrayMapeado = [];

  for (let indice = 0; indice <= this.length - 1; indice++) {
    const resultado = callback(this[indice], indice);
    novoArrayMapeado.push(resultado);
  }

  return novoArrayMapeado;
}

async function main() {
  try {
    const result = await service.obterPessoas('a');
    // const names = [];

    // result.results.forEach(function (item) {
    //   names.push(item.name);
    // });

    // const names = result.results.map(function (pessoa) {  // retorna diretamente um array
    //   return pessoa.name;
    // })

    // const names = result.results.map(pessoa => pessoa.name);

    const names = result.results.meuMap(pessoa => pessoa.name);

    console.table(names);

  } catch (error) {
    console.error('DEU RUIM', error);
  }
}

main();
