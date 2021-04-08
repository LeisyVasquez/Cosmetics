const fs = require("fs");
const path = require("path");
const axios = require('axios');
var InsertQuery = require('mysql-insert-multiple');

const URL = 'http://localhost:5156/api';
const { cnn_mysql } = require('../config/db');
const productsInfoJSON = JSON.parse(fs.readFileSync(path.join(__dirname, "../info_prueba.json")));
//let productsInfoArray = []

module.exports = {
    getMain: (req, res) => {
        res.send('<h1>Bienvenido al Backend de la aplicación Cosmetics</h1>')
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
        if (rows.affectedRows > 0) res.status(201)
        else res.status(500)
    }, 
    getOrder: async (req,res) =>{
        const rows = await cnn_mysql.promise().execute('SELECT numeroOrden, subtotal, totalIva, totalCompra FROM compra');
        
        res.json({data: rows[0]}); 
    }
}