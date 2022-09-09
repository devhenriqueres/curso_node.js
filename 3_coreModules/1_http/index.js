const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {

    res.write('Oi, HTTP!') //'res.write' escreve uma resposta direta para a página
    res.end() //encerra a resposta para não ficar carregando infinitamente

})

server.listen(port, () => {
    console.log('servidor rodando na porta: ' + port);
})