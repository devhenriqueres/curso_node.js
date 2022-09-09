const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout  // --> configurações
})

readline.question('Qual a sua linguagem preferida? ', (language) => {
    console.log(`A minha linguagem preferida é ${language}.`);
    readline.close()
})

