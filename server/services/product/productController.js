const materailesArreglo = require('../../../db/ejercicio.js');


function agregarProducto(req) {
  return new Promise((resolve, reject) => {
      const nuevoProducto = req.body;
      
      if(!nuevoProducto){
        return reject("Campo vacioo");
      } 
      if (nuevoProducto){
        materailesArreglo.push(nuevoProducto);
          resolve("Producto agregado exitosamente");
      }    
  })
}

function obtenerProductos() {
  return new Promise((resolve, reject) => {
      if(materailesArreglo){
          resolve(materailesArreglo);
      } else {
          reject("No hay productos disponibles");
      }
  })
}



module.exports ={
  agregarProducto:agregarProducto,
  obtenerProductos: obtenerProductos
}






// controladores/productos.js


/* 
exports.agregarProducto = (req, res) => {
  const nuevoProducto = req.body;
  productos.push(nuevoProducto);
  response.success(req, res, 'Producto agregado exitosamente', 201);
};

exports.obtenerProductos = (req, res) => {
  response.success(req, res, productos, 200);
}; */








  