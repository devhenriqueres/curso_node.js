const fs = require('fs')

//verificar se diretório existe ou não

if (!fs.existsSync('./minhaPasta')) { //se não existe
   console.log('Não existe')
   fs.mkdirSync('minhaPasta') //criando pasta
}

else if(fs.existsSync('./minhaPasta')) { //se existe
    console.log('Existe'); 
 }

 