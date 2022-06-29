// traz o arquivo todo
// require("./module-01");

// traz apenas o que foi exportado
// const m01 = require("./module-01");
// m01.executa();

// importação por desestruturação
const {executa, oculta} = require("./module-01");

// executando um módulo importado
executa();

oculta(); 
// ^- erro se ela não for exportada