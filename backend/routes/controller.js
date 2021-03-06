const fs = require("fs");
const path = require("path");
const axios = require('axios');
var InsertQuery = require('mysql-insert-multiple');

const URL = 'http://localhost:5156/api';
const { cnn_mysql } = require('../config/db');
const productsInfoJSON = JSON.parse(fs.readFileSync(path.join(__dirname, "../info_prueba.json")));

module.exports = {
    getMain: (req, res) => {
        res.status(200).send('<h1>Bienvenido al Backend de la aplicación Cosmetics</h1>')
    },
    getJSON: async (req, res) => {
        const rows = await cnn_mysql.promise().execute('TRUNCATE producto;');
        if (!rows.affectedRows) {
            axios.post(`${URL}/saveProducts`); 
            res.status(201).send(productsInfoJSON)
        }
        else res.status(500).send('error')    
    },
    saveProducts: async (req, res) => {
        let query = InsertQuery({
            table: 'producto',
            maxRow: Object.values(productsInfoJSON).length,
            data: Object.values(productsInfoJSON)
        })
        query = query.next();
        const rows = await cnn_mysql.promise().execute(query);
        if (rows.affectedRows < 0) res.status(201).send('todo ok')
        else res.status(500).send('Se presentó un error inesperado')
    }, 
    getOrder: async (req,res) => {
        const rows = await cnn_mysql.promise().execute('SELECT numeroOrden, subtotal, totalIva, totalCompra FROM compra');
        res.status(200).json({data: rows[0]}); 
    }, 
    insertOrder: async(req,res) =>{ 
        const {numeroOrden, subtotal, totalIva, totalCompra} = req.body; 
        const  rows = await cnn_mysql.promise().execute('INSERT INTO `compra` (`numeroOrden`, `subtotal`, `totalIva`, `totalCompra`) VALUES (?, ?, ?, ?)', [numeroOrden, subtotal, totalIva, totalCompra]); 
        if (rows[0].affectedRows) res.status(201).send('ok')
         else res.status(500).send('mal')
    }
}