"use strict";

var express = require('express');
var path = require('path');
var configViewEngine = function configViewEngine(app) {
  app.set('views', path.join('src', 'views'));
  app.set('view engine', 'ejs');

  //config static file
  app.use(express["static"](path.join('src', 'public')));
};
module.exports = configViewEngine;