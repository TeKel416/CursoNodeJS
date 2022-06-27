const { exec } = require('child_process');
const http = require('http');

// const { hostname } = require('os');
const hostname = '127.0.0.1';
const port = 3000;
const url = `http://${hostname}:${port}`;

// request
// response
const server = http.createServer((req, res)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Bem-vindo(a)!<br>Node.js</h1>')

});


server.listen(port, hostname, ()=>{
    console.log(`Servidor rodando em ${url}`);
});


// Abrindo o navegador dependendo do SO
const comandoAbrir = (process.platform == 'darwin' ? 'open': process.platform == 'win32' ? 'start':'xdg-open');

require('child_process').exec(comandoAbrir + ' ' + url);