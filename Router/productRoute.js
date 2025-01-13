const express = require('express');
const createProduct = require('../Controller/productController');
const router = express.Router();

router.post('/create',createProduct);


module.exports =router;