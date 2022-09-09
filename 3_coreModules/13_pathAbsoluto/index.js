const path = require('path')

//path absoluto

console.log(path.resolve('test.txt')) 
// (c:\Users\rickr\OneDrive\Área de Trabalho\cursoUdemy\3_coreModules\13_pathAbsoluto\test.txt)

//formar um path
const pastaMid = 'relatorios'
const nomeArquivo = "henrique.txt"

const finalPath = path.join('/', 'arquivos', pastaMid, nomeArquivo)

console.log(finalPath)