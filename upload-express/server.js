const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({extended:true}));

//configurando o multer
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        //erro, destino do arquivo
        cb(null, 'uploads/');
    },
    filename: (req, file, cb)=>{
        //cópia do arquivo para salvar
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
//chamando o multer com as configurações da constante storage
const upload = multer({storage});

//rotas
app.get('/', (req, res)=>{
    //res.json({message: 'Bem-vindo(a)!'});
    res.sendFile(__dirname + '/index.html');
});

//single = upload de um único arquivo
//array ou multiple = upload de vários arquivos
app.post('/upload', upload.single('arquivo'), (req, res, next)=>{
    const file = req.file;
    if(!file){
        const err = new Error('Selecione um arquivo!');
        err.httpStatusCode = 400;
        return next(err);
    };
    res.send(file);
    //res.end('Upload realizado com sucesso!');
});


app.listen(3000, 'localhost', ()=>{
    console.log(`Server running at: http://localhost:3000`);
});