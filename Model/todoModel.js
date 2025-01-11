const mongoose = require('mongoose');

const todoScheema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    createAt:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('TodoModel',todoScheema);