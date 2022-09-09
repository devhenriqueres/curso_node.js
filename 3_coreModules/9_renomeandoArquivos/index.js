const fs = require('fs')

fs.rename('novoArquivo.txt', 'henriqueGostoso.txt', (err) => {
    if (err) {
        console.log( `Deu merda meu patrão: ${err}`);
        return
    }

    console.log('arquivo renomeado');
})