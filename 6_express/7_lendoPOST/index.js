const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const basePath = path.join(__dirname, 'templates')
//Ler o body
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())


app.get('/users/create', (req, res) => {

    res.sendFile(`${basePath}/userform.html`)

})

app.post('/users/save', (req, res) => {

    console.log(req.body);
    const nome = req.body.name
    const idade = req.body.idade
    console.log(`O nome do usuário é ${nome} e a idade é ${idade} anos`)
    res.redirect('/users/create')

})

app.listen(port, () => console.log(`App hospedado na porta: ${port}`))