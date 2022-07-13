require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');


// conectando ao MongoDB
mongoose.connect(process.env.DATABASE_STRING, {useNewUrlParser: true, useUnifiedTopology: true});

// constante para pegar informações da conexão com o banco
const db = mongoose.connection;
db.on('error', (err)=>{ console.log(err); });
db.once('open', ()=>{ console.log('Database Connected'); });

app.use(express.json());


// rotas
const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter);


app.listen(3000, ()=>{
    console.log(`Server running at: http://localhost:3000`);
})