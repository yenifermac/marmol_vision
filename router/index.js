const express = require('express');
const router = express.Router();
const productos = require('../services/product/router.js');

function myAPI(application) {
    application.use('/api', router);
    router.use('/productos',  productos);
    
}



module.exports = myAPI;





//const users = require('../components/user/router.js');
//router.use('/users', users);

