const {writeFile} = require('fs');

function criaArquivo (name, content){
    return new Promise((resolve, reject)=>{

        writeFile(name, content, (err)=> {
            if(err) return reject(err);
            resolve();
        });
    });
};

criaArquivo('promiseArquivo.txt', ':D, como prometido de novo')
    .then(()=>{console.log('Arquivo prometido de novo criado com sucesso!')})
    .catch( err => console.log(err));