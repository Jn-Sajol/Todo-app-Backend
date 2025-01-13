const express = require('express');
const {createProduct, getterThanFiftyProduct} = require('../Controller/productController');
const router = express.Router();

router.post('/create',createProduct);
router.get('/getbyname',getterThanFiftyProduct);


module.exports =router;