const { Console } = require('console');
const express = require('express');
const path = require('path');
const routerAPI = require('./server/router');

//el cors sirve para quitar el problema de cors y permitir que se conecten  dispositivos desde cualquier origin"ip"
app.use(cors());


const app = express();
app.use(express.json());

routerAPI(app);

app.get('/', (req,res)=>{
    res.end("Hola mundo");
})

const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
})