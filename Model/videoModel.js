const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    publicId:{
        type:String,
        required:true
    },
    // createBy:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'UserModel'
    // }
},{timestamps:true})


module.exports = mongoose.model('VideoModel',videoSchema);