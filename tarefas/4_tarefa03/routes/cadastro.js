const express = require('express');
const router = express.Router()
const path = require('path');

const basePath = path.join(__dirname, '../templates')

router.get('/', (req, res) => {

    res.sendFile(`${basePath}/cadastro.html`)

})

router.post('/', (req, res) => {

    const nome = req.body.nome
    const idade = req.body.idade

    if (nome.trim() == '' || idade.trim() == '') {
        console.log('Insira corretamente os dados')
        res.sendFile(`${basePath}/cadastro.html`)
    }
    
    else{
        console.log(req.body);
        console.log('Cadastro realizado com sucesso');
        console.log(`Nome: ${nome}`);
        console.log(`Idade: ${idade}`);
        res.sendFile(`${basePath}/cadastro.html`)
    }
    

})

module.exports = router