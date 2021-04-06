const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/routes');
require('dotenv').config({ path: '../.env' });

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


app.use('/api', routes);

app.set('port', process.env.PORT || 5050);
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
})

app.get('/api', (req, res) => {
    res.send('Bienvenido al Backend de la aplicación Cosmetics');
})