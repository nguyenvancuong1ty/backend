const express = require('express');
const router = express.Router();
const {
    apiGetUsers,
    apiCreateUser,
    apiDeleteUser,
    apiUpdateUser,
    apiLogin,
    apiGetInfo,
    apiGetCakes,
    apiGetNewProduct,
    apiGetVoucher,
    apiGetCakedatil,
    apiGetCakedatilA,
    apiGetNews,
    apiGetRecipe,
    apiGetCart,
    apiGetCartById,
} = require('../controllers/apiController');
// user
router.get('/users', apiGetUsers);

router.post('/users', apiCreateUser);

router.post('/login', apiLogin);

router.delete('/users', apiDeleteUser);

router.put('/users', apiUpdateUser);
//end

// info
router.get('/intro', apiGetInfo);
//cake
router.get('/cakes', apiGetCakes);

//newProduct
router.get('/newProduct', apiGetNewProduct);

// Voucher
router.get('/voucher', apiGetVoucher);

// Detail cake
router.get('/cakedetail/:sale', apiGetCakedatilA);

router.get('/cakedetail', apiGetCakedatil);

// News
router.get('/news', apiGetNews);

// Cake recipe
router.get('/recipe', apiGetRecipe);
apiGetCartById
// Cart
router.get('/cake_by_cart/:userId', apiGetCart);

router.get('/cart/:userId', apiGetCartById);


module.exports = router;
