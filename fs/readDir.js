const fs = require('fs');

// lê o diretório e chama uma função de callback (data é retornado em array)
// VS readdirsync: || síncrono/bloqueante
// __dirname: retorna o nome do diretório atual
fs.readdir(__dirname, (err, data)=>{
    if(err) throw err;

    data.forEach((files)=>{
        console.log(__dirname + '\\' + files);
    })
});