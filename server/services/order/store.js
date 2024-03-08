const db = require('./model.js');



const createAOrder = async (order) => {
  const docRef = db.collection('orders');
  return  await  docRef.add(order)
};




async function getOrder() {
  const docRef = await db.collection('orders').get();

  return docRef.docs.map((listOrder) => {
    return {
      id: listOrder.id,
      ...listOrder.data()
    }
  })
}


/* const getOrders = async () => {
  const snapshot = await db.collection('orders').get();
  return snapshot.docs.map(doc => doc.data());
};

const getOrder = async (id) => {
  const doc = await db.collection('orders').doc(id).get();
  return doc.exists ? doc.data() : null;
};

const updateOrder = async (id, order) => {
  await db.collection('orders').doc(id).update(order);
};

const deleteOrder = async (id) => {
  await db.collection('orders').doc(id).delete();
};


 */


module.exports = {
  
  addOrder:createAOrder,
  getOrder
}