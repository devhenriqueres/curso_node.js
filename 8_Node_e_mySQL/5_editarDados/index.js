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

app.get('/books/:id', (req, res) => {

    const id = req.params.id
    const query = `SELECT * FROM books WHERE id = ${id}`

    conexao.query(query, (err, data) => {
        if (err) {
            console.log(err)
            return
        }

        const book = data[0]
        res.render('book', { book })
    })

})

app.get('/book/edit/:id', (req, res) => {

    const id = req.params.id
    const query = `SELECT * FROM books WHERE id=${id}`

    conexao.query(query, (err, data) => {
        if (err) {
            console.log(err);
            return
        }
        const book = data[0]
        res.render('editbook', { book })
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

app.post('/books/updatebook', (req, res) => {

    const id = req.body.id
    const title = req.body.title
    const pageqtd = req.body.pageqtd
    const body = req.body

    console.log(body);
    console.log(typeof(id), typeof(title), typeof(pageqtd));

    const query = `UPDATE books SET title = '${title}', pageqtd = '${pageqtd}' WHERE id = ${id}`
    conexao.query(query, (err) => {
        if (err) {
            console.log(err);
            return
        }
        console.log('Deu certo saporra!!!');
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
