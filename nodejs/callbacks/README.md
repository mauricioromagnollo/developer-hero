# Callbacks

```js
function obterUsuario() {
  setTimeout(function () {
    return {
      id: 1,
      nome: 'Aladin',
      dataNascimento: new Date()
    }
  }, 1000);
}

const usuario = obterUsuario();
console.log({ usuario });

// { usuario: undefined }
```

Nesse exemplo, usuário foi impresso como `undefined` justamente porque o nosso console.log está sendo executado primeiro do que a função obterUsuario. Como sabemos, tudo que é executado em background no Node.js, precisa de uma função ser disparada (callback), justamente para informar que aquele processo terminou.


Então vamos refatorar esse trecho de código para "sincronizar" a nossa aplicação e fazer com que ela rode exatamente na ordem que precisamos.

Por padrão, quando trabalhamos com callback, o primeiro parâmetro é um `erro` e o segundo parâmetro é o `sucesso`.

```js
function obterUsuario(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      nome: 'Aladin',
      dataNascimento: new Date()
    })
  }, 1000);
}

function resolverUsuario(error, usuario) {
  console.log({ usuario });
}

obterUsuario(resolverUsuario);

/*
{
  usuario: { id: 1, nome: 'Aladin', dataNascimento: 2022-07-26T01:49:52.255Z }
}
*/
```

# Refatorando para Promises

## Ciclo de Vida das Promises

- **Pending**: Estado inicial, ainda não terminou ou ainda não foi rejeitado;
- **Fulfilled**: Quando executou todas as operações com sucesso;
- **Rejected**: Quando a operação falhou;


```js
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

const usuarioPromise = obterUsuario()

usuarioPromise
  .then(function (resultado) {
    console.log({ resultado })
  })
  .catch(function (error) {
    console.error('Deu Ruim', error)
  })
```

# Refatorando para Promises com Async/Await

- Facilita a visualização do fluxo de funções;
- Não altera a performance da sua aplicação;
- Veio do C#;
- Usar apenas quando necessitar tratar a resposta da chamada;


```js
async function main() {
  try {
    const usuario = await obterUsuario();
    const telefone = await obterTelefone(usuario.id);
    const endereco = await obterEnderecoAsync(usuario.id);

    console.log(`
      Nome: ${usuario.nome}
      Endereco: ${endereco.rua}, ${endereco.numero}
      Telefone: (${telefone.ddd}) ${telefone.telefone}
    `)
  }
  catch(error) {
    console.error('DEU RUIM', error)
  }
}

main();
```

Podemos melhorar ainda mais a performance da nossa aplicação, pois como o `obterTelefone` e `obterEnderecoAsync` são independentes, ou seja, não precisamos esperar que um acabe para executar o outro, nós podemos utilizar o Promise.all, para que eles sejam executados em paralelo.

```js
async function main() {
  try {
    const usuario = await obterUsuario();
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ]);

    const telefone = resultado[0];
    const endereco = resultado[1];

    console.log(`
      Nome: ${usuario.nome}
      Endereco: ${endereco.rua}, ${endereco.numero}
      Telefone: (${telefone.ddd}) ${telefone.telefone}
    `)
  }
  catch(error) {
    console.error('DEU RUIM', error)
  }
}

main();
```
