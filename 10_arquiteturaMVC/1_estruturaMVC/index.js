const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000

const app = express()

const conn = require('./db/conn.js')

const Task = require('./models/Task.js')

//configurações
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))




conn.sync()
.then((result) => {
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
})
.catch((err) => {
    console.log(err);
});