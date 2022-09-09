const express = require('express')
const pool = require('./db/conn.js')
const exphdbs = require('express-handlebars')

const app = express()

const port = 3000

//Configurações
app.engine('handlebars', exphdbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


app.get('/', (req, res) => {

    res.render('home')

})

app.get('/books', (req, res) => {

    const query = 'SELECT * FROM books'
    pool.query(query, (err, data) => {

        if (err) {
            console.log(err)
            return
        }
        const books = data

        res.render('books', {
            books
        })
    })

})

app.get('/books/:id', (req, res) => {

    const id = req.params.id
    const query = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(query, data, (err, data) => {
        if (err) {
            console.log(err)
            return
        }

        const book = data[0]
        res.render('book', {
            book
        })
    })

})

app.get('/book/edit/:id', (req, res) => {

    const id = req.params.id
    const query = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]
    pool.query(query, data,  (err, data) => {
        if (err) {
            console.log(err);
            return
        }
        const book = data[0]
        res.render('editbook', {
            book
        })
    })

})



app.post('/books/insertbook', (req, res) => {

    const title = req.body.title
    const pagesqtd = req.body.pagesqtd

    const query = `INSERT INTO books (??, ??) VALUES (?,?)` //apenas o comando
    const data = ['title', 'pageqtd', title, pagesqtd]

    pool.query(query, data,  (err) => {

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

    const query = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`
    const data = ['title', title, 'pageqtd', pageqtd, 'id', id]

    pool.query(query, data, (err) => {
        if (err) {
            console.log(err);
            return
        }
        console.log('Deu certo saporra!!!');
        res.redirect('/books')
    })

})

app.post('/books/remove/:id', (req, res) => {

    const id = req.params.id

    const query = `DELETE FROM books WHERE ??=?`
    const data = ['id', id]

    pool.query(query, data, (err) => {
        if (err) {
            console.log(err)
            return
        }
        res.redirect('/books')
    })

})

//conexões
app.listen(port, () => console.log(`Servidor rodando na porta ${port}!!!`))