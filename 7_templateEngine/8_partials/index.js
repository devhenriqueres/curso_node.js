const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({

    partialsDir: ['views/partials']

})

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    const user = {
        name: 'Henrique Jamal',
        surname: 'Resende',
        age: '19'
    }

    const auth = true

    const approved = false

    res.render('home', {
        user: user,
        auth,
        approved
    })

})

app.get('/dashboard', (req, res) => {

    const items = ['itam a', 'item b', 'item c', 'imtem d']
    res.render('dashboard', {
        items: items
    })

})

app.get('/postagens', (req, res) => {

    const post = {

        title: 'Aprender NodeJS',
        category: 'javascript',
        body: 'Este artigo vai te ajudar a aprender nodeJS...',
        comments: 4

    }

    res.render('blogpost', {
        post: post
    })

})

app.get('/blog', (req, res) => {

    const posts = [{

            title: 'Aprender NodeJS',
            category: 'javascript',
            body: 'Algum texto muito interessante sobre nodejs, no qual sou burro pra caralho...',
            comments: 4

        },
        {

            title: 'Aprender php',
            category: 'php',
            body: 'Algum texto muito interessante sobre php, no qual sou burro pra caralho...',
            comments: 4

        },
        {

            title: 'Aprender java',
            category: 'java',
            body: 'Algum texto muito interessante sobre java, no qual sou burro pra caralho...',
            comments: 4

        }
    ]

    res.render('blog', { posts })


})

app.listen(3000, () => console.log('App rodando na porta 3000'))