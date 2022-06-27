const {promisify} = require('util');

// Carregar o módulo fs mas para usar promises ao invés de funções de callback
const writeFile = promisify(require('fs').writeFile);

const conteudo = ':D, como prometido';

writeFile('utilArquivo.txt', conteudo)
    .then(()=>{ console.log('Arquivo prometido criado com sucesso!'); })
    .catch((err)=>{ console.log(`ERROR: ${err}`); });