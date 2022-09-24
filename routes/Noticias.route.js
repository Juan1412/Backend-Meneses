'use strict'
var express = require('express');
var api=express.Router();

var newsController=require('../controllers/Noticias.controllers');

api.get('/news', newsController.getNews);
api.post('/saveNew', newsController.insertNew)
api.get('/obtener', newsController.getAll )
module.exports=api;