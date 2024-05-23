# **Node.js**

---
> O Node.js é Single Thread apenas no seu I/O, mas esse I/O é não bloqueante, ou seja, ele delega para uma Pool de Thread (Event Loop) todo I/O que ele recebe que é conexão externa (asyncrono) - chama de API externa, um acesso a arquivo, uma conexão ou chamada no banco de dados... coisas desse tipo. Cada input que foi para essa Pool de Thread, o Node.js irá respondendo a medida que cada uma for finalizando. Elas informam que foram finalizadas, quando elas executam uma callback function.
> Por isso, quando queremos aguardar que uma função seja concluída/resolvida para continuar o algoritmo de forma síncrona, precisamos ou definir uma função de callback que sera executada para continuar o algoritmo, ou podemos assinar a função como 'async' e utilizar o operador await para aguardar.
> Todo o resto do Node.js é síncrono e, por isso, pode travar o Event Loop caso você não tenha cuidado (ex: loops grandes/infinitos).

```js
function apiSemCallback() {
  setTimeout(() => {
    console.log('Vai finalizar agora!');
    return {
      name: 'Ivan',
      level: 'Seniorzão'
    }
  }, 3000);
}

function apiComCallback(callback) {
  setTimeout(() => {
    console.log('Vai finalizar agora!');
    return callback(null, {
      name: 'Ivan',
      level: 'Seniorzão'
    })
  }, 3000);
}


function apiComPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log('Vai finalizar agora!');
      return resolve({
        name: 'Ivan',
        level: 'Seniorzão'
      })
    }, 3000);
  });
}
```

```js
async function main() {
  // I/O com chamada externa sem callback
  console.log(apiSemCallback());
  console.log('Rodou depois');

  // I/O com chamada externa com callback
  apiComCallback((error, user) => {

    if (error) {
      throw new Error('Não foi possível conectar com banco de usuários!');
    }
    console.log(user);
    console.log('Rodou depois');
  });

  // I/O com chamada externa com Promises/Then
  apiComPromise()
    .then(user => {
      console.log(user)
      console.log('Rodou depois')
    })

  // I/O com chamada externa com Promises/Async/Await
  const user = await apiComPromise();
  console.log(user);
  console.log('Rodou depois')
}
```
