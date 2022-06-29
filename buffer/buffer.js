const Buffer = require('buffer').Buffer;

// carregando buffer a partir de uma string
const buf = Buffer.from('Curso Completo de NodeJS');

// transformando binário em string
console.log(buf.toString());
console.log(buf.toString('utf16le'));

const buf_string = Buffer.from('Carregando uma string', 'utf-8');

console.log(buf_string.toString());
console.log(Buffer.isBuffer(buf_string));

// encode escolhido, quantos bytes eu quero (início e fim - posições)
console.log(buf_string.toString('utf-8', 0, 10));