const express = require('express')
const mysql = require('mysql')
const exphdbs = require('express-handlebars')

const app = express()

const port = 3000

//Configurações
app.engine('handlebars', exphdbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', (req, res) => {

    res.render('home')

})

app.get('/books', (req, res) => {

    const query = 'SELECT * FROM books'
    conexao.query(query, (err, data) => {

        if (err) {
            console.log(err)
            return
        }
        const books = data
        
        res.render('books', { books })
    })

})

app.post('/books/insertbook', (req, res) => {

    const title = req.body.title
    const pagesqtd = req.body.pagesqtd
    console.log(title, pagesqtd);

    const query = `INSERT INTO books (title, pageqtd) VALUES ('${title}','${pagesqtd}')` //apenas o comando
    conexao.query(query, (err) => {

        if (err) {
            console.log(err);
            return
        }
        console.log('Deu tudo certo!!!');
        res.redirect('/books')
    })

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
