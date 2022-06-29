console.log('Mensagem no console!');

// erro
console.error(new Error('Deu ruim aqui menó'));

// tabela
const carros = ['ABS', 'BDF', 'Matt', 'Relâmpago Marquinhos'];
console.table(carros);

// objeto
const dados = {nome: 'Maria Eduarda', empresa: 'FEST'};
console.table(dados);

// contador | arg = label
console.count('processo'); 
console.count('processo'); 
console.count('processo'); 
console.count('processo'); 
// reset
console.log('Resetando o processo');
console.countReset('processo');
console.count('processo'); 

// cronômetro
console.time('contador');
for (let index = 0; index < 100; index++) {
    console.log('-');
}
console.timeEnd('contador');

// exibir mensagem somente em caso de erro
console.assert(true, 'Faça algo');
console.assert(false, 'Deu ruim no %s', '*enchendo linguiça*');

// limpando o console
// console.clear();