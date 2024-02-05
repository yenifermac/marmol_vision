const { Console } = require('console');
const express = require('express');
const path = require('path');
const myAPI = require('./router/index.js');

const app = express();
app.use(express.json());

myAPI(app);

app.get('/', (req,res)=>{
    res.end("Hola mundo");
})

const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
})