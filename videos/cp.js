const { spawn } = require('child_process');
const { lstat } = require('fs');

// spawn vs exec

// spawn recebe os parâmetros do comando como um array
const ls = spawn('ls', ['-lh', '/usr']);

// stdio -> quando interação com o terminal, mandar informações, ler informações e se ela der erro
// "quando ele devolver alguma coisa, eu consigo escutar dados"
ls.stdout.on('data', data=>{
    console.log(`stdout: ${data}`);
});
// stdin -> mandar informações
// retornar se der problema
ls.stderr.on('data', data=>{
    console.log(`stderr: ${data}`);
});

// close vs exit
// pode-se rodar vários child process ao mesmo tempo
// o exit significa fechar cada um deles, e quando todos fecharem haverá um close, que indica que todas as conexões foram fechadas.
ls.on('close', code=>{
    console.log(`Processo em segundo plano finalizado com sucesso! \n code: ${code}`);
});