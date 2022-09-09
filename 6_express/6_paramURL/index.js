const express = require('express')
const app = express()
const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {

    const id = req.params.id
    //leitura da tabela users, e resgatar um usuário do banco
    console.log(`Estamos buscando o usuário ${id}`);
    res.sendFile(`${basePath}/users.html`)

})

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`)

})

app.listen(3000, () => {
    console.log('App rodando na porta 3000');
})