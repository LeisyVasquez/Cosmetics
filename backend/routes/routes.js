const { Router } = require('express');
const router = Router();

const {
    getMain,
    getJSON,
    saveProducts, 
    getOrder, 
    insertOrder
} = require('./controller');

//Rutas del backend
router.get('/', getMain);
router.get('/getJSON', getJSON)
router.post('/saveProducts', saveProducts); 
router.get('/getOrder', getOrder)
router.post('/insertOrder', insertOrder)

module.exports = router;