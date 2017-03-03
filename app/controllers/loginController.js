let Login = require('..models/Login');

let loginController = {

     getAllLogins:function(req, res){

       Login.find(function(err, login){

         if(err)
            res.send(err.message);
         else
            res.render('index', {login});
            console.log(login);
            res.redirect('/');
            }
       })
     },


module.exports = loginController;
