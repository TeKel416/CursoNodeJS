const express = require('express');
const router = express.Router();

//rota administrador
router.get('/', (req, res)=>{
    res.send('O administrador está online, liberou a baderna!');
});

router.get('/:id', (req, res)=>{
    res.send('Acessando a administração com o id: ' + req.params.id);
});

//rota admin com post
router.post('/', (req, res)=>{
    //corpo de informações
    const corpo = `login: ${req.body.login}\nsenha: ${req.body.senha}`
    res.send('O administrador POSTou kkkkkk\n' + corpo);
});

//variação do 'put' para alteração de dados
//patch altera pedaços e put altera tudo
router.patch('/:id', (req, res)=>{res.send('Acessando adm via PATCH');
});

router.put('/:id', (req, res)=>{res.send('Acessando adm via PUT');
});

//exclui informações
router.delete('/:id', (req, res)=>{res.send('Acessando adm via DELETE');
});


module.exports = router;