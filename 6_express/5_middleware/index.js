const express = require('express')
const app = express()
const path = require('path')

const basePath = path.join(__dirname, 'templates')

const checkAuth = function (req, res, next) {

    req.authStatus = true
    if (req.authStatus) {
        console.log('Está logado. Pode continuar');
        next()
    } else {
        console.log('Não está logado. Faça o login para continuar');
    }

}

app.use(checkAuth)

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`)

})

app.listen(3000, () => {
    console.log('App rodando na porta 3000');
})