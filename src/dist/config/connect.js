"use strict";

var mysql = require('mysql2/promise');
require('dotenv').config();

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT,
//     password: process.env.DB_PASSWORD,
// });

var connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 100,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD
});
module.exports = connection;