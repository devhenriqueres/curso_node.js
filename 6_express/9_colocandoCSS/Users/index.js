const express = require('express')
const router = express.Router()
const path = require('path');

const basePath = path.join(__dirname, '../templates')

router.get('/create', (req, res) => {

    res.sendFile(`${basePath}/userform.html`)

})

router.post('/save', (req, res) => {

    console.log(req.body);
    const nome = req.body.name
    const idade = req.body.idade
    console.log(`O nome do usuário é ${nome} e a idade é ${idade} anos`)
    res.sendFile(`${basePath}/userform.html`)

})

module.exports = router