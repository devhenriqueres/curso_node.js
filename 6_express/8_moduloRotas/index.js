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

const basePath = path.join(__dirname, 'templates')

app.use('/Users', usersRouters)

app.listen(port, () => console.log(`App hospedado na porta: ${port}`))