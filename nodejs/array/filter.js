const { obterPessoas } = require('./service');

Array.prototype.meuFilter = function(callback) {
  const lista = [];

  for(let index in this) {
    const item = this[index];
    const resultado = callback(item, index, this);
    if (!resultado) continue;
    lista.push(item);
  }

  return lista;
}

async function main() {
  try {
    const { results } = await obterPessoas('a');

    // const familiaLars = results.filter(function (item) {
    //   const result = item.name.toLowerCase().indexOf(`lars`) !== -1;
    //   return result;
    // });

    const familiaLars = results.meuFilter((item, index, lista) => item.name.toLowerCase().indexOf('lars') !== -1);
    const names = familiaLars.map(pessoa => pessoa.name);
    console.table(names);
  } catch (error) {
    console.error('DEU RUIM', error);
  }
}

main();
