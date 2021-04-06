const { Router } = require('express');
const router = Router();

const {
    getMain
} = require('./controller');

//Rutas del backend
router.get('/', getMain);

module.exports = router;