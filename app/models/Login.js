var mongoose = require('mongoose');

var loginSchema = mongoose.Schema({
  username:{
       type:String,
       required:true,
       unique:true
           },
  password:{
      type:String,
      required:true,
      unique:false
           }
})

var Login = mongoose.model("login", loginSchema);

module.exports = Login;
