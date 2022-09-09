const express = require('express')
const mysql = require('mysql')
const exphdbs = require('express-handlebars')

const app = express()

const port = 3000

//Configurações
app.engine('handlebars', exphdbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))


app.get('/', (req, res) => {

    res.render('home')

})

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'henrique123',
    database: 'nodemysql'
})

conexao.connect((err) => {
    if (err) {
        console.log(err)
        return
    }

    console.log('Conectou ao mysql')
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}!!!`))
})
