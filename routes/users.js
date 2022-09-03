var express = require('express');
var router = express.Router();
const userModel = require('../database/models/usermodel')

/* GET users logging. */
router.get('/login', function(req, res, next) {
  res.redirect('/');
});
router.post('/login', function(req, res) {
	const userMail = req.body.useremail
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
    if(!user){
      res.render('login',{error: 'You are not a user. Kindly create an account below'})
      return 
    }
    req.session.isLoggedIn = true
    req.session.user = user
    console.log(req.session)
    res.render('home',{info:'login success',error:''})
  })
  .catch((err)=>{
    res.render('login',{info:'login failed'})
  })

});

/*users signup */

router.get('/signup',(req,res)=>{
  res.render('signup',{info:''})
})

router.post('/signup',(req,res)=>{
  res.render('signup',{info:'Signup success'})
})

/* users logging out */
router.get('/logout',(req,res)=>{
  if (req.session.isLoggedIn){
    req.session.isLoggedIn = false
    req.session.destroy()
    res.redirect('/')
  }
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