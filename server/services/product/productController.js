const store = require('./store.js');


function addProduct(product) {
  return new Promise((resolve, reject) => {
      
      
      if(!product){
        return reject("Campo vacioo");
      } 
      if (product){
        const newProduct = {
          name: product.name,
          type: product.type,
          color: product.color,
          texture:product.texture
        }
          store.add(newProduct);
          resolve(newProduct);
      }    
  })
}



function listProducts() {
  return new Promise((resolve, reject) => {
    resolve(store.getAllProducts());
  })
}

function updateProductData(id, productData){
  return new Promise((resolve, reject)=>{
     if(!id){
      reject('El id proporcionado es inválido o no existe.')
     }
     if(!productData || Object.keys(productData).length === 0){
      reject('Los datos del producto proporcionados son inválidos o están vacíos.')
     }
    resolve(store.updateProduct(id, productData));
  });
}

function deleteProducts(id){
  return new Promise((resolve, reject)=>{

    resolve(store.delete(id));

  })



}





module.exports ={
  addProduct,
  listProducts,
  updateProductData,
  deleteProducts

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








  