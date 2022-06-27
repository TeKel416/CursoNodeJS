const fs = require('fs');

const assets = ['css', 'js', 'images', 'fonts', 'lib'];

function make(dir){
    dir.forEach((item)=>{
        // Criando um diretório (SEM SUBPASTAS)
        // Para permitir a criação de subpastas, {recursive: true}
        fs.mkdir(`Projeto/assets/${item}`, {recursive: true} ,(err)=>{
            if(err) throw err;

            console.log(`Diretório ${item} criado com sucesso! :D`)
        });
    });
};

make(assets);