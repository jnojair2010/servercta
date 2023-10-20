var express = require('express');
var consign = require('consign');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
    
  consign()
  .include('./app/router')
  .into(app);


module.exports = app;