const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'henrique123',
    database: 'nodemysql'
})

module.exports = pool