//requerir el paquete de firebase desde el serve
const admin = require('firebase-admin');
const app = require('../../firebase/firebase.config.js')
//esta linea me permite guardar el usuario en firebase
const {
  getFirestore
} = require('firebase-admin/firestore');
//esta linea le indicamos a nuestro programa que se conecte a la base de datos

const db = getFirestore(admin.apps[app]);

module.exports = db;