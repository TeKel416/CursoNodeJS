const express = require('express');
const router = express.Router();

function logReq(req, res, next){
    console.log('Executando a função middleware para a rota usuários')
    return next();
};

//rota usuarios
router.get('/', logReq, (req, res)=>{
    res.send('Listando os usuários');
});

router.get('/:id', (req, res)=>{
    res.send('Listando o usuário: ' + req.params.id);
});


module.exports = router;