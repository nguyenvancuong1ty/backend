const express = require('express');
const router = express.Router();

const {
    Home,
    View,
    AddUser,
    AddUserPage,
    DeleteUser,
    getUpdatePage,
    UpdateUser,
} = require('../controllers/homeController');

router.get('/', Home);

router.get('/view', View);

router.get('/create_user', AddUserPage);

router.post('/create-user', AddUser);

router.get('/delete-user/:id', DeleteUser);

router.post('/update/:id', UpdateUser);

router.get('/update-user/:id', getUpdatePage);

module.exports = router;
