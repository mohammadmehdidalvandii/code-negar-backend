const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3,
    },
    email:{
        type:String,    
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    bio:{
        type:String,
        maxlength:200,
        default:"Please Enter your bio"
    },
    avatar:{
        type:String,
    },
    socialLinks:{
        type:[String]
    },
    role:{
        type:String,
        default:'USER'
    }
},{
timestamps:true
})

const model = mongoose.models.User || mongoose.model('Users' , schema);
module.exports = model