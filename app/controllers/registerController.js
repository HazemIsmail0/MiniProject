let Register = require('..models/Register');

let registerController = {

  getAllRegisters:function(req, res){

    Register.find(function(err, register){

      if(err)
          res.send(err.message)
      else
        res.render('index', {register});
        console.log(register);
        res.redirect('/');
      })
    },

    createAccount:function(req, res){

      let register = new Register(req.body);

      register.save(function(err, register){
        if(err){
              res.send(err.message)
              console.log(err);
        }
        else{
          console.log(register);
          res.redirect{'/'};
        }
      })
    }
}

    module.exports = registerController;
