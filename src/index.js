// import express from 'express';

const express = require('express');
//import scss
const configViewEngine = require('./config/configViewEngine');
//import .env get
require('dotenv').config();
const webRouter = require('./router/webRouter');
const apiRouter = require('./router/apiRouter');

const app = express();
const port = process.env.PORT;

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

app.listen(3000, '0.0.0.0', () => {
    console.log(`Express server listening on port ${port}`);
});
