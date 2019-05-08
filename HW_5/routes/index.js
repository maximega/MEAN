var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
    let redirect_url = "http://localhost:3000/hw5/auth/google";
    res.redirect(redirect_url);
});

module.exports = router;
