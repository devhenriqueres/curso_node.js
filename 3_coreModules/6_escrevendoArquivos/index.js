const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if (!name) {
        fs.readFile('index.html', (err, dados) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(dados)
            return res.end()
        })
    
    } else {
        fs.writeFile('arquivo.txt', name, (err, data) => {
            res.writeHead(302, {
                Location: '/'
            })
            return res.end()
        })
    }
})

server.listen(port, () => {
    console.log(`Servidor aberto e hospedado na porta ${port}`);
})