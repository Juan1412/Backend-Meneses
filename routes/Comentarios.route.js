'use strict'
var express = require('express');
var api=express.Router();
var ComentariosController=require('../controllers/Comentarios.controllers');

api.get('/Comentarios', ComentariosController.getComentario);

module.exports=api;