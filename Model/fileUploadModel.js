const mongoose = require('mongoose');

const imageScheema = new mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    publicId:{
        type:String,
        required:true
    }
    // createBy:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"UserModel",
    //     required:true
    // }
},{timestamps:true})

module.exports = mongoose.model('ImageModel',imageScheema);