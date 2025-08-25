const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username:{
        type:String,
        minlength:3,
        unique: true,
        required:true,
    },
    email:{
        type:String,    
        required:true,
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

const model = mongoose.models.Users || mongoose.model('Users' , schema);
module.exports = model