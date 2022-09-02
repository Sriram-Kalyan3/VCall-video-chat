var express = require('express');
var router = express.Router();

/* GET users logging. */
router.get('/login', function(req, res, next) {
  res.redirect('/');
});
router.post('/login', function(req, res) {

  res.render('home',{info:'login success'})
});

// /* 8





module.exports = router;
