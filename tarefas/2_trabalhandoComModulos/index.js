const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([{
    name: "nome",
    message: 'Insira o seu nome completo, ou não: '
}, {
    name: 'idade',
    message: 'Qual sua idade?'
}]).then((answers) => {
    console.log(chalk.bgYellow.black(answers.nome))
    console.log(chalk.bgYellow.black(answers.idade));
}).catch((err) => {
    console.log(chalk.bgRed.white(err));
})