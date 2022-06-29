// EVENTO VS PROMISE
// Events podem ser chamados infinitas vezes, enquanto as Promises são executadas/resolvidas apenas uma vez
const {EventEmitter} = require('events');


class Evento extends EventEmitter {};
const meuEvento = new Evento();


// On = Cria evento
// subscriber - assinante
meuEvento.on('seguranca', (x, y)=>{
    console.log(`Evento segurança: ${x} ${y}`);
});

// Chamar/Emitir o evento: nome do evento, usuário, ação realizada
// publisher - emissor
meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salário');


meuEvento.on('encerrar', dados=>{
    console.log(`Assinante: ${dados}`);
});

meuEvento.emit('encerrar', 'Encerrando a execução da importação dos dados.');