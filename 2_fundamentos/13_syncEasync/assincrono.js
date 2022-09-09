const fs = require('fs')

console.log('inicio');

fs.writeFile('arquivo.txt', 'oi2', (err) => {
    setTimeout(() => {
        console.log("O arquivo foi escrito");
    }, 1000)
})

console.log('fim');