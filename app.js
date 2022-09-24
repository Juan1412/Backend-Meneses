'use strict'

const bodyParser = require('body-parser');
var express= require('express');
var app= express();


// Archivos de ruta
var ComentariosRoute=require("./routes/Comentarios.route")
var NoticiasRoute=require("./routes/Noticias.route")
var UserRoute=require("./routes/User.route")
var categoriaRoute=require("./routes/Categoria.route");



//middlewares se ejecuta antes de la acción de un controlador
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Rutas
app.use('/api', ComentariosRoute);
app.use('/api', NoticiasRoute);
app.use('/api', UserRoute);
app.use('/api', categoriaRoute);



//Exportar
module.exports = app;    