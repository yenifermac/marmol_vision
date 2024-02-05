
const express = require('express');
const router = express.Router();
const productosController = require('./productController');

router.post('/producto', (req,res)=>{

    console.log(req.body)
    productosController.agregarProducto(req)
    .then((data)=>{
      res.status(201).json(data);

    })
    .catch((err)=> console.log(err));
});

router.get('/', (req, res) => {
    productosController.obtenerProductos()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => console.log(err));
});





module.exports = router;
//router.get('/productos', productosController.obtenerProductos);