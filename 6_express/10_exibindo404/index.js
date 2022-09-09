const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const usersRouters = require('./Users/index.js')

//Ler o body
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//Arquivos estáticos
app.use(express.static('./public'))

const basePath = path.join(__dirname, 'templates')

app.use('/Users', usersRouters)

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`)

})

app.use((req, res, next) => {

res.status(404).sendFile(`${basePath}/404.html`)

})

app.listen(port, () => console.log(`App hospedado na porta: ${port}`))