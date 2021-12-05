import express from 'express';
import _ from 'lodash';
import rutas from './rutas/rutas.js';
import mongoose  from 'mongoose';
import bodyParser from 'body-parser';

//Crear un objeto apliccacion 
const app = express();
const PORT = 5000;
const bd = "mascotas"

//conexion a mongo:
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://localhost/${bd}`,
{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
//configuracion de body-parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
//utilizar rutas definidas en rutas.js
rutas(app);

//Crear servidor de aplicacion
app.listen(PORT , () => console.log(`Servidor ejecutando en puerto: ${PORT}`));



