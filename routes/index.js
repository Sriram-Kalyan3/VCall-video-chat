var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.isLoggedIn){
    res.render('home',{info:'home here', error:''})
  }else{
    res.render('login', { error: '' });
  }
});

module.exports = router;
