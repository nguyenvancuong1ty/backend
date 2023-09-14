// import express from 'express';
let cors = require('cors');
const express = require('express');
//import scss
const configViewEngine = require('./src/config/configViewEngine');
//import .env get
require('dotenv').config();
const webRouter = require('./src/router/webRouter');
const apiRouter = require('./src/router/apiRouter');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json()); // config req.body
app.use(express.urlencoded({ extended: true }));

//use
configViewEngine(app);
app.use('/', webRouter);
app.use('/v1/api', apiRouter);

//use

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
    next();
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Express server listening on port ${port}`);
});
