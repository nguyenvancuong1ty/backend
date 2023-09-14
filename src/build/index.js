"use strict";

// import express from 'express';
var cors = require('cors');
var express = require('express');
//import scss
var configViewEngine = require('./config/configViewEngine');
//import .env get
require('dotenv').config();
var webRouter = require('./router/webRouter');
var apiRouter = require('./router/apiRouter');
var app = express();
var port = process.env.PORT;
app.use(cors());
app.use(express.json()); // config req.body
app.use(express.urlencoded({
  extended: true
}));

//use
configViewEngine(app);
app.use('/', webRouter);
app.use('/v1/api', apiRouter);

//use

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
  next();
});
app.listen(port, '0.0.0.0', function () {
  console.log("Express server listening on port ".concat(port));
});