const util = require('util');


/*
* Obter um usuário
* Obter um número de telefone de um usuário a partir do seu Id
* Obter o endereço de um usuário pelo Id
*/

// Vamos utilizar a função setTimeout, para simular uma consulta em um banco,
// ou algo externo que iria "demorar" a ser resolvido;

function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      // return reject(new Error('DEU RUIM DE VERDADE!'))
      return resolve({
        id: 1,
        nome: 'Aladin',
        dataNascimento: new Date()
      })
    }, 1000);
  })
}

function obterTelefone(idUsuario) {
  return new Promise(function resolverPromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: '119900002',
        ddd: 11
      })
    }, 2000);
  })
}

const obterEnderecoAsync = util.promisify(obterEndereco);

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0
    })
  }, 2000);
}

// Problema Callbacks: Funções Aninhadas, complicando a leitura.

/*
obterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.error('DEU RUIM EM USUARIO', error);
    return;
  }

  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.error('DEU RUIM EM OBTER TELEFONE', error1);
      return;
    }

    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if (error2) {
        console.error('DEU RUIM EM OBTER TELEFONE', error2);
        return;
      }

      console.log(`
        Nome: ${usuario.nome},
        Endereco: ${endereco.rua}, ${endereco.numero},
        Telefone: (${telefone.ddd}) ${telefone.telefone}
      `);
    })
  })
});
*/


// Problema Promises: Funções Aninhadas

// const usuarioPromise = obterUsuario()

// usuarioPromise
//   .then(function (usuario) {
//     return obterTelefone(usuario.id)
//       .then(function resolverTelefone(result) {
//         return {
//           usuario: {
//             nome: usuario.nome,
//             id: usuario.id
//           },
//           telefone: result
//         }
//       })
//   })
//   .then(function (resultado) {
//     const endereco = obterEnderecoAsync(resultado.usuario.id)
//     return endereco.then(function resolverEndereco(result) {
//       return {
//         usuario: resultado.usuario,
//         telefone: resultado.telefone,
//         endereco: result
//       }
//     })
//   })
//   .then(function (resultado) {
//     console.log(`
//       Nome: ${resultado.usuario.nome}
//       Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//       Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
//     `)
//   })
//   .catch(function (error) {
//     console.error('Deu Ruim', error)
//   })


// Resolvendo com Async/Await

async function main() {
  try {
    console.time('medida-promise')

    const usuario = await obterUsuario();
    // const telefone = await obterTelefone(usuario.id);
    // const endereco = await obterEnderecoAsync(usuario.id);
    const [telefone, endereco] = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ])

    console.log(`
      Nome: ${usuario.nome}
      Endereco: ${endereco.rua}, ${endereco.numero}
      Telefone: (${telefone.ddd}) ${telefone.telefone}
    `)
    console.timeEnd('medida-promise')
  }
  catch(error) {
    console.error('DEU RUIM', error)
  }
}

main();
