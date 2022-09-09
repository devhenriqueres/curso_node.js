const path = require('path')

const customPath = "/relatorios/henrique/relatorio1.pdf"

console.log(path.dirname(customPath)) //caminho para o arquivo
console.log(path.basename(customPath)) //nome do arquivo final
console.log(path.extname(customPath)) //nome da extensão do arquivo
