const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

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

    res.render('home', {  user: user, auth, approved  })

})

app.get('/dashboard', (req, res) => {

res.render('dashboard')

})

app.listen(3000, () => console.log('App rodando na porta 3000'))