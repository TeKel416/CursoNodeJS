// destructuring assignment = atribuição por desestruturação
// requisitando apenas a função pedida
const {writeFile} = require('fs');

writeFile("arquivo.txt", ":D", err =>{
    if(err) throw err;
    console.log('Arquivo criado com sucesso! :V');
});