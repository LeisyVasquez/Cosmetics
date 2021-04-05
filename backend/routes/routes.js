const {Router} = require('express'); 
const router = Router(); 


router.get('/',(req, res) =>{
    res.send('<h1>Bienvenido al Backend de la aplicación Cosmetics</h1>')
}); 

module.exports = router; 