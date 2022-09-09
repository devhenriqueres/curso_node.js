const minimist = require('minimist') //módulo externo
const soma = require('./soma').soma //módulo interno

const args = minimist(process.argv.slice(2))
console.log(args)

const n1 = parseInt(args['n1'])
const n2 = parseInt(args['n2'])
console.log(n1, n2);

console.log(`A soma de ${n1} e ${n2} é ${soma(n1, n2)}`);

