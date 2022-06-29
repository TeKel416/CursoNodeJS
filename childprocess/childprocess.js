const { spawn } = require('child_process');
// executa um comando
const ls = spawn('ls', ['..', '-lh', '/usr']);

// na leitura de informações,
ls.stdout.on('data', data=>{
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', err=>{
    console.log(`stderr: ${err}`);
});

ls.on('close', code=>{
    console.log(`Processo em 2° plano finalizado com o código: ${code}`);
});
