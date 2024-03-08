require('dotenv').config();
// El resto de tu código va aquí

const { Console } = require('console');
const express = require('express');
const path = require('path');
const routerAPI = require('./server/router');
const cors = require('cors');
/* const multer = require('multer'); */

/* const multer = require('multer');
const sharp = require('sharp'); */

const app = express();
app.use(express.json());


//el cors sirve para quitar el problema de cors y permitir que se conecten  dispositivos desde cualquier origin"ip"
app.use(cors());

routerAPI(app);

/* 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('/uploads'))
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop()
        cb(null, `${Date.now()}.${ext}`)
    }
})

const upload = multer({storage})

app.post('/upload', upload.single('file'), (req, res) => {
    res.send({data: 'imagen cargada'})
}) */



app.use('/', express.static(path.resolve(__dirname, 'landing', 'Novus')))

app.use('/dashboard', express.static(path.resolve(__dirname, 'Source')));

// carpeta client/login
app.use('/login', express.static(path.resolve(__dirname, 'Source', 'login-light-login.html')))

//carpeta client/register
app.use('/register', express.static(path.resolve(__dirname, 'Source', 'login-light-register.html')))

app.use('/side-menu-light-add-product', express.static(path.resolve(__dirname, 'Source','side-menu-light-add-product.html')))





app.use('/side-menu-light-product-grid', express.static(path.resolve(__dirname, 'Source','side-menu-light-product-grid.html')))


app.use('/side-menu-light-dashboard-overview-1', express.static(path.resolve(__dirname, 'Source','side-menu-light-dashboard-overview-1.html')))

app.use('/side-menu-light-post', express.static(path.resolve(__dirname, 'Source', 'side-menu-light-post.html')))


app.use('/side-menu-light-transaction-list.html', express.static(path.resolve(__dirname, 'Source','side-menu-light-transaction-list.html')))


app.use('/dist', express.static(path.resolve(__dirname, 'Source', 'dist')))
app.use('/src', express.static(path.resolve(__dirname, 'Source', 'src')))
app.use('/api', express.static(path.resolve(__dirname, 'Source', 'api')))


app.get('/', (req,res)=>{
    res.end("Hola mundo");
})

const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
})