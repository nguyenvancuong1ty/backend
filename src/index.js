// import express from 'express';
const express = require('express')
//import config view engine
const configViewEngine = require('./config/configViewEngine');
//import .env get 
require('dotenv').config();
const routers = require('./router')

const app = express();
const port = process.env.PORT;

//use
configViewEngine(app);
app.use(routers);
//use

app.listen(port, () => {
     console.log('listening nodejs with port', port);
})