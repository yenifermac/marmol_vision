const express = require('express');

//expres tiene un metodo que funciona como enrutador para enlazar todas nuestras rutas de nuestra aplicacion  (localhost:3000)
const router = express.Router();
const productos = require('../services/product/router.js');
const users = require('../services/user/router.js');
const orders = require('../services/order/router.js')

function routerAPI(application) {
    application.use('/api/v1', router);
    router.use('/products',  productos),
    router.use('/users',  users);
    router.use('/orders',  orders);
    
}


//importamos la funcion myAPI para utilizarla en el index principal del servidor


module.exports = routerAPI;





//const users = require('../components/user/router.js');
//router.use('/users', users);

