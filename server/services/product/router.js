
const express = require('express');
const router = express.Router();
const response = require('../../response/index.js');
const productController = require('./productController');


router.post('/create', (req, res) => {
  console.log(req.body)
  productController.addProduct(req.body)
    .then((data) => {
      response.success(req, res, data , 201);
    })
    .catch((err) => {
      response.error(req, res, 'Interal Error', 500, err)
    });
});

router.get('/', (req, res) => {
    productController.listProducts()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);

    });
});


router.patch('/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  console.log(req.body);
  productController.updateProductData(id, req.body)
    .then((data) => res.status(201).json(data))
    .catch(err => console.log(err));
});

router.delete('/:id', (req,res)=>{

  const id = req.params.id
  productController.deleteProducts(id)
  .then(()=> res.status(200).json({"mensaje": "Producto eliminado exitosamente"}))
  .catch(err => console.log(err));

})
module.exports = router;
//router.get('/productos', productosController.obtenerProductos);