// Arquivo não-bloqueante (without sync): outras ações podem ser executadas paralelamente

const fs = require("fs");
// Biblioteca file system (manipulação de arquivos e pastas)

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("antes");

// Não-bloqueante, precisa passar uma função de callbak/retorno, para executar enquanto o readFile é executado
const dados = fs.readFile("file.txt", (err, data)=>{
    if (err) throw err;
    console.log("leitura do arquivo")
});

console.log("depois");
console.log((process.hrtime()[0]/60).toFixed(5));