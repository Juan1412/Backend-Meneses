var express = require('express');

var api = express.Router();

var controllerCategoria= require('../controllers/Categoria.controller');

api.post('/categoria', controllerCategoria.insertCategoria);

module.exports=api;