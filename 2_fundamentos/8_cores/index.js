const chalk = require('chalk')

const nota = 5

if (nota >= 6) {
    console.log(chalk.green.bold(`parabéns, sua nota é: ${nota}`));
} else {
    console.log(chalk.bgRed.black(`Sua nota foi ${nota}. Você precisa fazer a prova de recuperação`));
}