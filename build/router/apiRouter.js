"use strict";

var express = require('express');
var router = express.Router();
var _require = require('../controllers/apiController'),
  apiGetUsers = _require.apiGetUsers,
  apiCreateUser = _require.apiCreateUser,
  apiDeleteUser = _require.apiDeleteUser,
  apiUpdateUser = _require.apiUpdateUser,
  apiLogin = _require.apiLogin,
  apiGetInfo = _require.apiGetInfo,
  apiGetCakes = _require.apiGetCakes,
  apiAddCake = _require.apiAddCake,
  apiUpdateCake = _require.apiUpdateCake,
  apiGetNewProduct = _require.apiGetNewProduct,
  apiGetVoucher = _require.apiGetVoucher,
  apiAddVoucher = _require.apiAddVoucher,
  apiUpdateVoucher = _require.apiUpdateVoucher,
  apiDeleteVoucher = _require.apiDeleteVoucher,
  apiGetCakedatil = _require.apiGetCakedatil,
  apiGetCakedatilA = _require.apiGetCakedatilA,
  apiAddCakeDetail = _require.apiAddCakeDetail,
  apiUpdateCakeDetail = _require.apiUpdateCakeDetail,
  apiGetNews = _require.apiGetNews,
  apiAddNews = _require.apiAddNews,
  apiUpdateNews = _require.apiUpdateNews,
  apiDeleteNews = _require.apiDeleteNews,
  apiGetRecipe = _require.apiGetRecipe,
  apiAddRecipe = _require.apiAddRecipe,
  apiUpdateRecipe = _require.apiUpdateRecipe,
  apiDeleteRecipe = _require.apiDeleteRecipe,
  apiGetCart = _require.apiGetCart,
  apiGetCartById = _require.apiGetCartById,
  apiPutCart = _require.apiPutCart,
  apiDeleteCart = _require.apiDeleteCart,
  apiAddCart = _require.apiAddCart,
  apiDeleteCakes = _require.apiDeleteCakes,
  apiDeleteCakeDetail = _require.apiDeleteCakeDetail,
  apiSearch = _require.apiSearch;
// user
router.get('/users', apiGetUsers);
router.post('/users', apiCreateUser);
router.post('/login', apiLogin);
router["delete"]('/users', apiDeleteUser);
router.put('/users', apiUpdateUser);
//end

// info
router.get('/intro', apiGetInfo);
//cake
router.get('/cakes', apiGetCakes);
router.post('/cakes', apiAddCake);
router.put('/cakes', apiUpdateCake);
router["delete"]('/cakes', apiDeleteCakes);

//newProduct
router.get('/newProduct', apiGetNewProduct);

// Voucher
router.get('/voucher', apiGetVoucher);
router.post('/voucher', apiAddVoucher);
router.put('/voucher', apiUpdateVoucher);
router["delete"]('/voucher', apiDeleteVoucher);

// Detail cake
router.get('/cakedetail/:sale', apiGetCakedatilA);
router.get('/cakedetail', apiGetCakedatil);
router["delete"]('/cakedetail', apiDeleteCakeDetail);
router.post('/cakedetail', apiAddCakeDetail);
router.put('/cakedetail', apiUpdateCakeDetail);

// News
router.get('/news', apiGetNews);
router.post('/news', apiAddNews);
router.put('/news', apiUpdateNews);
router["delete"]('/news', apiDeleteNews);

// Cake recipe
router.get('/recipe', apiGetRecipe);
router.post('/recipe', apiAddRecipe);
router.put('/recipe', apiUpdateRecipe);
router["delete"]('/recipe', apiDeleteRecipe);

// Cart
router.get('/cake_by_cart/:userId', apiGetCart);
router.put('/cake_by_cart', apiPutCart);
router["delete"]('/cake_by_cart', apiDeleteCart);
router.post('/cake_by_cart', apiAddCart);
router.get('/cart/:userId', apiGetCartById);

//Search
router.post('/search', apiSearch);
module.exports = router;