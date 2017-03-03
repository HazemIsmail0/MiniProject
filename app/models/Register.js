var mongoose = require('mongoose');

var registerSchema = mongoose.Schema({
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

var Register = mongoose.model("register", registerSchema);

module.exports = Register;
