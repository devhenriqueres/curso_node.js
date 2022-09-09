const { DataTypes } = require('sequelize')

const db = require('../db/conn.js')


const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        required: true
    },
    newslatter: {
        type: DataTypes.BOOLEAN,

    }
})

module.exports = User