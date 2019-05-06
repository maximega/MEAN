var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  //if authenticated...
  console.log('I am here');
  res.render('index', { user: req.user.givenName + req.user.familyName });
  /*
  else{
    res.code(401, "Unauthorized");
    res.redirect('/login');
  }*/
});

module.exports = router;
