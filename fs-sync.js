// Arquivo bloqueante (sync): a próxima ação só é executada quando esta termina

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("buga uga");

const fs = require("fs");
// Biblioteca file system (manipulação de arquivos e pastas)

const dados = fs.readFileSync("file.txt");

console.log("uga buga");

console.log((process.hrtime()[0]/60).toFixed(5));