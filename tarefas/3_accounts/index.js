const inquirer = require('inquirer')
const chalk = require('chalk')
const { log } = require('console')

const fs = require('fs')

console.log(chalk.yellow.bold('Iniciamos o accounts'));

operation()

function operation() {

    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
            'Criar conta',
            'Consultar saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    }])
        .then((resposta) => {

            const action = resposta.action

            if (action === 'Criar conta') {
                criarConta()
            } else if (action === 'Consultar saldo') {
                pegarValorConta()
            } else if (action === 'Depositar') {
                deposit()
            } else if (action === 'Sacar') {
                sacar()
            } else if (action === 'Sair') {
                log(chalk.bgBlue.black('Obrigado por usar o accounts!'))
                process.exit()
            }

        })
        .catch((err) => console.log(err))
}

//criar conta
function criarConta() {

    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))

    criarAConta()

}

function criarAConta() {
    inquirer.prompt([
        {
            name: 'nomeConta',
            message: 'Digite um nome para a sua conta: '
        }
    ]).then((resposta) => {

        const nomeConta = resposta.nomeConta
        console.info(nomeConta)

        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }

        if (fs.existsSync(`accounts/${nomeConta}.json`)) {
            console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'))
            criarAConta()
            return
        }

        fs.writeFileSync(`accounts/${nomeConta}.json`, '{"balance": 0}', (err) => { console.log(err) })

        log(chalk.green('\nParabéns, sua conta foi criada!'))
        operation()


    }).catch((err) => console.log(err))
}

//adcionar uma quantia a conta do usuário
function deposit() {

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ])
        .then((resposta) => {

            const accountName = resposta.accountName

            if (!checarConta(accountName)) {
                return deposit()
            }

            inquirer.prompt([
                {
                    name: 'valor',
                    message: 'Digite o valor que deseja depositar: '
                }
            ])
                .then((resposta) => {

                    const valor = resposta.valor

                    adicionarValor(accountName, valor)
                    operation()

                })
                .catch((err) => { log(err) })

        }).catch((err) => {
            log(err)
        });
}
//checar se conta exsite
function checarConta(nomeDaConta) {
    if (!fs.existsSync(`accounts/${nomeDaConta}.json`)) {
        log(chalk.bgRedBright.black('A conta não existe!'))
        return false
    }

    return true
}

function adicionarValor(nomeConta, valor) {

    const accountData = getAccount(nomeConta)

    if (!valor) {
        log('Ocorreu um erro!')
        return deposit()
    }

    accountData.balance = parseFloat(valor) + parseFloat(accountData.balance)
    fs.writeFileSync(`accounts/${nomeConta}.json`, JSON.stringify(accountData), (err) => {
        log(err)
    })

    log(chalk.green(`Foi depositado o valor de R$${valor} à sua conta!`))

}

function getAccount(accountName) {

    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, { encoding: 'utf-8', flag: 'r' })
    return JSON.parse(accountJSON)

}

//mostrar valor da conta
function pegarValorConta() {

    inquirer.prompt([
        {
            name: 'nomeConta',
            message: 'Em qual conta deseja consultar o saldo?'
        }
    ]).then((resposta) => {

        const nomeConta = resposta.nomeConta
        if (!checarConta(nomeConta)) {
            log(chalk.bgRedBright.black('Essa conta não existe!'))
            return pegarValorConta()
        }

        const accountData = getAccount(nomeConta)
        log(chalk.bgBlue.black(`Seu saldo é de: R$ ${accountData.balance}`))
        return operation()

    }).catch((err) => {
        log(chalk.bgRedBright.black(err))
    });

}

function sacar() {
    inquirer.prompt([
        {
            name: 'nomeConta',
            message: 'Qual o nome da sua conta ?'
        }
    ])
        .then((resposta) => {
            const nomeConta = resposta.nomeConta
            if (!checarConta(nomeConta)) {
                return sacar()
            }

            inquirer.prompt([
                {
                    name: 'valor',
                    message: 'Valor que deseja sacar: '
                }
            ]).then((resposta) => {

                const valor = resposta.valor
                log(valor)
                removerValor(nomeConta, valor)

            }).catch((err) => log(err))

        }).catch((err) => {
            log(err)
        });
}

function removerValor(nomeConta, valor) {

    const dadosConta = getAccount(nomeConta)

    if (!valor) {
        log(chalk.bgRed.black('Ocorreu um erro. Tente novamente!'))
        return sacar()
    }

    if (dadosConta.balance < valor) {
        log(chalk.bgRed.black('O valor que deseja sacar é maior que o valor que você tem em conta!'))
        return sacar()
    }

    dadosConta.balance = parseFloat(dadosConta.balance) - parseFloat(valor)

    fs.writeFileSync(
        `accounts/${nomeConta}.json`,
        JSON.stringify(dadosConta),
        (err) => {
            log(err)
        }
    )

    log(chalk.green(`Foram sacados R$ ${valor} da sua conta '${nomeConta}'`))
    operation()

}