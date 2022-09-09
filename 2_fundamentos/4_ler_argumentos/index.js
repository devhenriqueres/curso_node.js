//nome

console.log(process.argv);

const argsNome = process.argv.slice(2)
const nome = argsNome[0].split('=')[1]
console.log(nome);

const argsIdade = process.argv.slice(3)
const idade = argsIdade[0].split('=')[1]
console.log(idade);
