const express = require('express');
const router = express.Router();
const response = require('../../response/index.js');
const orderController = require('./orderController.js');




router.post('/create', (req, res)=> {

    orderController.addOrder(req.body)
    .then((data)=>{
        response.success(req, res, data , 201);
    })
    .catch((err) => {
      response.error(req, res, 'Interal Error', 500, err)
    });
});


router.get('/', (req, res) => {
  orderController.listOrder()
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    res.status(500).send(err);

  });
});



module.exports = router;
