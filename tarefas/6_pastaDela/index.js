const express = require('express')
const handlebars = require('express-handlebars')
const port = 3000
const app = express()

//Configurando handlebars
app.engine('handlebars',handlebars.engine())
app.set('view engine', 'handlebars')

//config para usar css
app.use(express.static('public'))

app.get('/', (req, res) => {

    res.render('home')

})

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))