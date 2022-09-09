const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req, res) => {

    fs.readFile('mensagem.html', (err, dados) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(dados)
        return res.end()
    })

})

server.listen(port, () => {
    console.log(`Servidor aberto e hospedado na porta ${port}`);
})