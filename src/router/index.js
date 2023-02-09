const express = require('express');
const router = express.Router();

const {Home, View} = require('../controllers/homeController');

router.get('/', Home);

router.get('/view', View);

module.exports = router;