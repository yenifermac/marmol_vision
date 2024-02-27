const db = require('./model.js');


const getOrders = async () => {
  const snapshot = await db.collection('orders').get();
  return snapshot.docs.map(doc => doc.data());
};

const getOrder = async (id) => {
  const doc = await db.collection('orders').doc(id).get();
  return doc.exists ? doc.data() : null;
};

const createAOrder = async (order) => {
  const docRef = await db.collection('orders').add(order);
  return docRef.id;
};

const updateOrder = async (id, order) => {
  await db.collection('orders').doc(id).update(order);
};

const deleteOrder = async (id) => {
  await db.collection('orders').doc(id).delete();
};

module.exports = {
  getOrders,
  getOrder,
  createAOrder,
  updateOrder,
  deleteOrder
};
