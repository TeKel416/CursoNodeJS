const express = require('express');
const app = express();
const admRoutes = require('./routes/admin');
const userRoutes = require('./routes/usuario');
const cookieParser = require('cookie-parser');
const path = require('path')

/*
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    //res.send('Halo Warudo');
    res.render();
});*/

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "public"));
app.get("/", (req, res)=>{
    res.render('index')
})


//método padrão: GET (consulta)
//POST: envio de informações

//permitir que a aplicação use o padrão json
//use = carregar função de middleware
app.use(express.json());

app.use(cookieParser());

// função de middleware terá 3 parâmetros: request, response e nextFunction (próxima função a ser chamada para continuar o fluxo)
app.use((req, res, next)=>{
    console.log('Executando middleware em nível de aplicação');
    //nível de aplicação = é chamada enquanto a aplicação está rodando

    return next();
});


app.get('/setcookie', (req, res)=>{
    res.cookie('user', 'Maria Barros', {maxAge: 900000, httpOnly: true});
    return res.send('Cookie gravado com sucesso');
});

app.get('/getcookie', (req, res)=>{
    let user = req.cookies['user'];
    if(user){
        return res.send(user);
    }
});


//rota padrão
// request e response = requisição e resposta



//se alguém usar /admin, ele mandará para o arquivo admin.js
app.use('/admin', admRoutes);
app.use('/usuarios', userRoutes);


//função middleware para tratamento de erros
//posição depois de todas as outras funções de middleware e antes do listen

//gerando o erro
app.get('*', (req, res, next)=>{
    setImmediate(()=>{
        next(new Error('Deu ruim aqui patroa'));
    });
});

app.use((err, req, res, next)=>{
    console.log('Siga as instruções para corrigir o erro!');
    console.log(err.stack);
    res.status(500).json({message: err.message});
});

app.listen(3000, ()=>{
    console.log(`Server running: http://localhost:3000`);
});