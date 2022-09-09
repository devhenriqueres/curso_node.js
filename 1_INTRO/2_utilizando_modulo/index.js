const fs = require('fs')

fs.readFile('arquivo.txt', 'utf-8', (err, dados) => {
    
    if(err){
        console.log(err);
        return
    }
    console.log(dados);

})

