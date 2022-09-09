const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

//Configurando handlebars
app.engine('handlebars',expressHandlebars.engine())
app.set('view engine', 'handlebars')

//config para usar css
app.use(express.static('public'))

const produtos = [
    {
        id: '1',
        name:'Coca-Cola',
        value: 'R$ 7,50',
        descricao: 'Bebida muito gostosa'
    },
    {
        id: '2',
        name: 'Hambúrguer pré cozido',
        value: 'R$ 5,00',
        descricao: 'Comida muito gostosa'
    },
    {
        id: '3',
        name: 'Pasta de dente',
        value: 'R$ 3,00',
        descricao: 'Pasta de dente refrescante'
    }
]

app.get('/', (req, res) => {

    res.render('home', { produtos })

})

app.get('/product/:id', (req, res) => {
    const product = produtos[parseInt(req.params.id) - 1]
    res.render('product', { product })

})


app.listen(3000, () => console.log('App rodando na porta 3000'))