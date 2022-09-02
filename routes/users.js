var express = require('express');
var router = express.Router();
const userModel = require('../database/models/usermodel')

/* GET users logging. */
router.get('/login', function(req, res, next) {
  res.redirect('/');
});
router.post('/login', function(req, res) {
	const userMail = req.body.mail
	const password = req.body.password
  console.log(req.body)
  if(!userMail){
    res.render('login',{error: 'Please enter a valid email'})
    return
  }
  if(!password){
    res.render('login',{error: 'Please enter a valid password'})
    return
  }
  userModel.findOne({email: userMail,password:password})
  .then(function(user){
    req.session.isLoggedIn = true
    req.session.user = user
    res.render('home',{info:'login success'})
  })
  res.render('login',{info:'login failed'})

});

/*users signup */

router.get('/signup',(req,res)=>{
  res.render('signup',{info:''})
})

router.post('/signup',(req,res)=>{
  res.render('signup',{info:'Signup success'})
})





module.exports = router;



/* 
After clicking on login at frontend
data sent should be similar to:
{
  useremail: 'example@mail.com',
  password : 'something'
}


*/