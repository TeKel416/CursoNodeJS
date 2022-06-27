// EVENTO VS PROMISE
// Events podem ser chamados infinitas vezes, enquanto as Promises são executadas/resolvidas apenas uma vez

const EventEmitter = require('events');

class Evento extends EventEmitter {

}

const meuEvento = new Evento();

// On = Cria evento
meuEvento.on('seguranca', (x, y)=>{
    console.log(`Evento segurança: ${x} ${y}`)
});

// Chamar/Emitir o evento: nome do evento, usuário, ação realizada (exemplo
meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salário');