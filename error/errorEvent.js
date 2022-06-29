const { EventEmitter } = require('events');
const emitter = new EventEmitter();

const validaObjeto = (a)=>{
    if(typeof a !== 'object'){
        emitter.emit('error', new Error('Tipo informado inválido'));
    }else{
        console.log('Objeto válido');
    };
};

// on = addListener
emitter.on('error', err=>{
    console.log('Evento: ' + err.message);
});

let dados = {nome: 'FEST', curso: 'NodeJS'};
let lista = 4;

validaObjeto(dados);