const mongoose  = require('mongoose');
 const userSchema   =  new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20,
        trim:true
    },
    lastName:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
 });
  const User = mongoose.model('User', userSchema);

  module.exports = User;