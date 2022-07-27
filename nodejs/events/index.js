const EventEmmiter = require('events');

class MeuEmissor extends EventEmmiter {

}

const meuEmissor = new MeuEmissor();
const NOME_EVENTO = 'usuario:click';

meuEmissor.on(NOME_EVENTO, function(click) {
  console.log('um usuário clicou', click);
});

// meuEmissor.emit(NOME_EVENTO, 'na barra de rolagem');
// meuEmissor.emit(NOME_EVENTO, 'no ok');

// let count = 0;

// setInterval(function() {
//   meuEmissor.emit(NOME_EVENTO, 'no ok' + count++);
// }, 1000)

const stdin = process.openStdin();
stdin.addListener('data', function(value) {
  console.log(`Você digitou: ${value.toString().trim()}`);
})
