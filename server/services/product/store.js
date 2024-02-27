const db = require('./model.js');


async function createProduct(product) {
    const docRef = db.collection('products');
    return await docRef.add(product)
  }

  async function getAllProducts() {
    const docRef = await db.collection('products').get();
  
    return docRef.docs.map((listOfProducts) => {
      return {
        id: listOfProducts.id,
        ...listOfProducts.data()
      }
    })
  }

  
async function updateProduct(id, datosACambiar) {
  const productFound = db.collection('products').doc(id);
  const response = await productFound.update(datosACambiar);

  return response;
}
async function deleteAProduct(id){
  try {
    return await db.collection('products').doc(id).delete();
  } catch (error) {
    console.error('Error eliminando el producto: ', error);
  }
}


  

  
module.exports = {
  add: createProduct,
  getAllProducts:getAllProducts,
  updateProduct:updateProduct,
  delete:deleteAProduct
 
}