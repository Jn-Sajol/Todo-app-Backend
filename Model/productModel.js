const mongoose = require('mongoose');

const productScheema = new mongoose.Schema({
    name:String,
    category:String,
    stock:Boolean,
    price:Number
})

module.exports = mongoose.model('Products',productScheema);