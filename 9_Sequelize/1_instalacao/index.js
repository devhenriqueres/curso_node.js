const express = require('express')
const exphdbs = require('express-handlebars')
const conn = require('./db/conn.js')

const User = require('./models/User.js')

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


app.get('/', async (req, res) => {

    const users = await User.findAll({
        raw: true
    })
    res.render('home', {
        users
    })

})

app.get('/users/create', (req, res) => { //rota principal

    res.render('adduser')

})

app.get('/users/:id', async (req, res) => { //página individual (datalhes)

    const id = req.params.id

    const user = await User.findOne({
        raw: true,
        where: {
            id: id
        }
    })
    res.render('userview', {
        user
    })
})

app.get('/users/update/:id', async (req, res) => { //editar

    const id = req.params.id

    const user = await User.findOne({
        raw: true,
        where: {
            id: id
        }
    })
    res.render('edit', {
        user
    })

})

app.post('/users/create', async (req, res) => { //rota para criar novo usuários (post)

    const body = req.body

    const name = req.body.name
    const occupation = req.body.occupation
    var newsletter = req.body.newsletter

    if (newsletter === 'on') {
        newsletter = 1
    } else {
        newsletter = 0
    }

    await User.create({
        name,
        occupation,
        newsletter
    })

    res.redirect('/')

})

app.post('/users/delete/:id', async (req, res) => { //rota para deletar usuário

    const id = req.params.id

    await User.destroy({
        where: {
            id: id
        }
    })

    res.redirect('/')

    //console.log('')

})

app.post('/users/update', async (req, res) => {

    const id = req.body.id
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if (newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    const userData = {
        id,
        name,
        occupation,
        newsletter
    }

    await User.update(userData, {
        where: {
            id: id
        }
    })

    res.redirect('/')

})

conn
    .sync()
    //.sync({force: true})
    .then(() => {

        app.listen(port, () => console.log(`Servidor rodando na porta ${port}!!!`))

    }).catch((err) => {
        console.log(err);
    });