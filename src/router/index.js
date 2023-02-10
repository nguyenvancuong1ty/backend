const express = require('express');
const router = express.Router();

const {Home, View, AddUser} = require('../controllers/homeController');

router.get('/', Home);

router.get('/view', View);

router.post('/create-user', AddUser);


module.exports = router;