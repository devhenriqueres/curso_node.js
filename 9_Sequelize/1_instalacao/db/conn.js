const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', 'henrique123', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectamos com sucesso ao sequelize!');
} catch (err) {
    console.log(err);
}

module.exports = sequelize
