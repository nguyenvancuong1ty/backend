"use strict";

var express = require('express');
var router = express.Router();
var _require = require('../controllers/homeController'),
  Home = _require.Home,
  View = _require.View,
  AddUser = _require.AddUser,
  AddUserPage = _require.AddUserPage,
  DeleteUser = _require.DeleteUser,
  getUpdatePage = _require.getUpdatePage,
  UpdateUser = _require.UpdateUser;
router.get('/', Home);
router.get('/view', View);
router.get('/create_user', AddUserPage);
router.post('/create-user', AddUser);
router.get('/delete-user/:id', DeleteUser);
router.post('/update/:id', UpdateUser);
router.get('/update-user/:id', getUpdatePage);
module.exports = router;