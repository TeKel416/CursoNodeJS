console.log('Executando' , __filename.slice(__dirname.length + 1));

// não disponível como módulo
// const define e limita o escopo (privatiza)
const oculta = ()=>{
    console.log('Executando função oculta');
};

// disponível como módulo
executa = ()=>{
    console.log('Executando a função executa');
};

// REPL = modo de execução interativo, como um editor de texto
// require = o arquivo é lido e guardado em cash/"sessão". Se for executado de novo, ele não altera,só mostra os módulos

welcome = 'Bem-vindo(a) ao módulo module-01.js';


//exportando como módulos
module.exports = {executa, welcome, oculta};