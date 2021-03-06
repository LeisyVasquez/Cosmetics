const mysql = require('mysql2')
require('dotenv').config({ path: '../.env' })

//Se le envia el objeto de configuracion
const connectionMysql = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
})

//Se exporta el objeto, para que podamos acceder a él por medio de destructuring cada vez que yo lo requiera
module.exports = {
    cnn_mysql: connectionMysql
}