const { cnn_mysql } = require('../config/db')

module.exports = {
    getMain: (req, res) =>{
        res.send('<h1>Bienvenido al Backend de la aplicación Cosmetics</h1>')
    }
}