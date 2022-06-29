const path = require('path');

// pedaço de caminho do arquivo (expressão), para extrair o nome do arquivo
console.log('Basename: ' +  (path.basename('c:\\temp\\NodeJS')));

// normalizar um caminho (arrumar)
const teste = 'c:\\temp/dir//subdir/dir/..'
console.log('Normalize: ' + (path.normalize(teste)));

// montar um caminho
console.log('Join: ' + (path.join('/teste', 'teste2', 'teste3/teste4', 'dir2', '..')));

// mandar um arquivo e receber o caminho absoluto dele
// se o arquivo não existir, ele mostra o caminho absoluto a partir de onde o código está sendo executado
// obs: isso tá meio errado: https://nodejs.dev/learn/the-nodejs-path-module
console.log('Resolve: ' + (path.resolve('path.js')));

// extensão do nome do arquivo
console.log('Extensão: ' + (path.extname('path.js')));