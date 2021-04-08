const { Router } = require('express');
const router = Router();

const {
    getMain,
    getJSON,
    saveProducts, 
    getOrder
} = require('./controller');

//Rutas del backend
router.get('/', getMain);
router.get('/getJSON', getJSON)
router.post('/saveProducts', saveProducts); 
router.get('/getOrder', getOrder)

module.exports = router;