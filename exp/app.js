const express = require('express');
const app = express();
const admRoutes = require('./routes/admin');

//método padrão: GET (consulta)
//POST: envio de informações

//permitir que a aplicação use o padrão json
//use = função de middleware
app.use(express.json());

//rota padrão
// request e response = requisição e resposta
app.get('/', (req, res)=>{
    res.send('Halo Warudo');
});

//se alguém usar /admin, ele mandará para o arquivo admin.js
app.use('/admin', admRoutes);

app.listen(3000, ()=>{
    console.log(`Server running: http://localhost:3000`);
});